<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { WebGLRenderer, Scene, OrthographicCamera, ShaderMaterial, Vector3, Vector4 } from 'three';
  import { Simulation } from '../simulation/Simulation';
  import { parameters, layerVisibility } from '../stores/simulationStore';

  let canvasElement: HTMLCanvasElement;
  let simulation: Simulation;
  let renderer: WebGLRenderer;
  let scene: Scene;
  let camera: OrthographicCamera;
  let unsubParameters: () => void;
  let unsubVisibility: () => void;

  // Export control methods for parent component
  export function start() {
    simulation?.start();
  }

  export function pause() {
    simulation?.pause();
  }

  export function reset() {
    console.log('[SimulationCanvas] Reset called - recreating simulation');
    simulation?.pause();
    scene.remove(simulation.getDisplayMesh());

    // Recreate simulation with current parameters
    simulation = new Simulation(renderer, $parameters);
    const displayMesh = simulation.getDisplayMesh();
    scene.add(displayMesh);

    // Reapply layer visibility
    const material = displayMesh.material as ShaderMaterial;
    material.uniforms.layerVisibility.value = new Vector4(
      $layerVisibility.fe3,
      $layerVisibility.fe2,
      $layerVisibility.active,
      $layerVisibility.dormant
    );

    console.log('[SimulationCanvas] Simulation recreated');
  }

  onMount(() => {
    console.log('[SimulationCanvas] onMount called');
    // Setup Three.js renderer
    // Pattern from Jason Webb and Three.js examples
    renderer = new WebGLRenderer({ canvas: canvasElement, antialias: false });
    renderer.setSize(512, 512);
    console.log('[SimulationCanvas] Renderer created');

    // Setup orthographic camera for 2D view
    // Pattern from Jason Webb: https://github.com/jasonwebb/reaction-diffusion-playground
    camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 0.5;
    console.log('[SimulationCanvas] Camera created');

    // Create scene
    scene = new Scene();
    console.log('[SimulationCanvas] Scene created');

    // Create simulation instance
    console.log('[SimulationCanvas] Creating Simulation instance...');
    simulation = new Simulation(renderer, $parameters);
    console.log('[SimulationCanvas] Simulation instance created');

    // Add display mesh to scene
    const displayMesh = simulation.getDisplayMesh();
    scene.add(displayMesh);
    console.log('[SimulationCanvas] Display mesh added to scene');
    console.log('[SimulationCanvas] Display mesh position:', displayMesh.position);
    console.log('[SimulationCanvas] Display mesh geometry:', displayMesh.geometry);
    console.log('[SimulationCanvas] Display mesh material:', displayMesh.material);
    console.log('[SimulationCanvas] Scene children count:', scene.children.length);
    console.log('[SimulationCanvas] Camera position:', camera.position);
    console.log('[SimulationCanvas] Camera looking at:', camera.getWorldDirection(new Vector3()));

    // Track previous initial condition parameters
    let prevFe3Scale = $parameters.fe3Scale;
    let prevFe3Variation = $parameters.fe3Variation;
    let prevInitialSeeds = $parameters.initialActiveSeeds;
    let prevSeedRadius = $parameters.seedPixelRadius;

    // Subscribe to parameter changes
    unsubParameters = parameters.subscribe(params => {
      // Check if initial condition parameters changed
      const initialConditionsChanged =
        params.fe3Scale !== prevFe3Scale ||
        params.fe3Variation !== prevFe3Variation ||
        params.initialActiveSeeds !== prevInitialSeeds ||
        params.seedPixelRadius !== prevSeedRadius;

      if (initialConditionsChanged) {
        console.log('[SimulationCanvas] Initial conditions changed, recreating simulation...');
        prevFe3Scale = params.fe3Scale;
        prevFe3Variation = params.fe3Variation;
        prevInitialSeeds = params.initialActiveSeeds;
        prevSeedRadius = params.seedPixelRadius;

        // Recreate simulation with new initial conditions
        const wasRunning = simulation;  // Check if we need to restart
        simulation?.pause();
        scene.remove(simulation.getDisplayMesh());

        simulation = new Simulation(renderer, params);
        const displayMesh = simulation.getDisplayMesh();
        scene.add(displayMesh);

        // Reapply layer visibility
        const material = displayMesh.material as ShaderMaterial;
        material.uniforms.layerVisibility.value = new Vector4(
          $layerVisibility.fe3,
          $layerVisibility.fe2,
          $layerVisibility.active,
          $layerVisibility.dormant
        );

        console.log('[SimulationCanvas] Simulation recreated with new initial conditions');
      } else {
        console.log('[SimulationCanvas] Parameters updated (non-initial)');
        simulation?.updateParameters(params);
      }
    });

    // Subscribe to layer visibility changes
    unsubVisibility = layerVisibility.subscribe(visibility => {
      if (simulation) {
        const displayMesh = simulation.getDisplayMesh();
        const material = displayMesh.material as ShaderMaterial;
        material.uniforms.layerVisibility.value = new Vector4(
          visibility.fe3,
          visibility.fe2,
          visibility.active,
          visibility.dormant
        );
        console.log('[SimulationCanvas] Layer visibility updated:', visibility);
      }
    });

    // Render scene (display mesh visualization)
    // Simulation.step() updates the texture, we just render it
    let frameCount = 0;
    function render() {
      renderer.render(scene, camera);
      if (frameCount < 5) {
        console.log('[SimulationCanvas] Render frame', frameCount);
        frameCount++;
      }
      requestAnimationFrame(render);
    }
    render();
    console.log('[SimulationCanvas] Render loop started');
  });

  // Cleanup on component destroy
  onDestroy(() => {
    unsubParameters?.();
    unsubVisibility?.();
    simulation?.pause();
    renderer?.dispose();
  });
</script>

<canvas bind:this={canvasElement} width={512} height={512}></canvas>

<style>
  canvas {
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
