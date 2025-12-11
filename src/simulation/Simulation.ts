/**
 * Main Simulation class
 * Integrates GPUComputationRenderer with our bacteria-iron ODEs
 *
 * GPUComputationRenderer patterns from Three.js examples:
 * - Birds flocking: https://threejs.org/examples/webgl_gpgpu_birds.html
 * - Water simulation: https://threejs.org/examples/webgl_gpgpu_water.html
 *
 * Shader organization adapted from Jason Webb:
 * https://github.com/jasonwebb/reaction-diffusion-playground
 *
 * Animation loop using Three.js setAnimationLoop:
 * https://threejs.org/docs/#api/en/renderers/WebGLRenderer.setAnimationLoop
 */

import {
  WebGLRenderer,
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  Vector2,
  Vector4
} from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import type { SimulationParameters } from '../types';
import { initializeFe3Field } from '../utils/math';
import { defaultParameters } from './parameters';
import noise from 'simplenoise';

// Import shaders as strings
// Using single combined compute shader following Jason Webb's pattern
// https://github.com/jasonwebb/reaction-diffusion-playground
import computeFragCode from '../shaders/compute.frag?raw';
import displayFragCode from '../shaders/display.frag?raw';

// Use fixed seed for Perlin noise (consistent pattern as params change)
noise.seed(100);

export class Simulation {
  private renderer: WebGLRenderer;
  private gpuCompute: GPUComputationRenderer;
  private stateVariable: any;
  private displayMesh: Mesh;
  private parameters: SimulationParameters;
  private stepCount = 0;  // For debug logging

  constructor(renderer: WebGLRenderer, params: SimulationParameters = defaultParameters) {
    console.log('[Simulation] Constructor starting');
    this.renderer = renderer;
    this.parameters = params;

    // 1. Use GPUComputationRenderer for ALL texture management
    this.gpuCompute = new GPUComputationRenderer(512, 512, renderer);
    console.log('[Simulation] GPUComputationRenderer created');

    // 2. Use createTexture() helper - automatic Float32Array with proper settings
    const stateTexture = this.gpuCompute.createTexture();
    console.log('[Simulation] State texture created, has data:', !!stateTexture.image.data);

    // 3. Initialize texture data BEFORE adding variable
    // This ensures addVariable gets the filled texture, not empty one
    if (stateTexture.image.data) {
      this.initializeFields(stateTexture.image.data as Float32Array);
      stateTexture.needsUpdate = true;  // Tell GPU to upload modified data
      console.log('[Simulation] Fields initialized, texture marked for update');
    }

    // 4. Single variable with combined compute shader (reaction + movement + diffusion)
    // Following Jason Webb's single-shader pattern
    this.stateVariable = this.gpuCompute.addVariable(
      'state',
      computeFragCode,
      stateTexture
    );
    console.log('[Simulation] State variable added with combined compute shader');

    // 5. Set self-dependency for temporal updates
    this.gpuCompute.setVariableDependencies(this.stateVariable, [this.stateVariable]);
    console.log('[Simulation] Variable dependencies set');

    // 6. Initialize uniforms with parameters
    const computeUniforms = this.stateVariable.material.uniforms;
    this.updateUniforms(computeUniforms, params);
    console.log('[Simulation] Compute shader uniforms initialized');

    // 7. Display mesh separate from compute pipeline
    this.displayMesh = new Mesh(
      new PlaneGeometry(2, 2),
      new ShaderMaterial({
        fragmentShader: displayFragCode,
        uniforms: {
          state: { value: null },
          resolution: { value: new Vector2(512, 512) },
          layerVisibility: { value: new Vector4(1, 1, 1, 1) }
        }
      })
    );

    // 8. Initialize GPUComputationRenderer
    // This renders the initialValueTexture (stateTexture) into both ping-pong buffers
    const error = this.gpuCompute.init();
    if (error !== null) {
      console.error('[Simulation] GPUComputationRenderer init error:', error);
    } else {
      console.log('[Simulation] GPUComputationRenderer initialized (initial data in buffers)');
    }

    // 9. Connect display mesh to show current GPU state
    // Initial display shows "step 0" (the initialized data)
    // Clicking Start will run compute() to advance to step 1, 2, 3...
    this.updateDisplayTexture();
    console.log('[Simulation] Display connected to show initial state (step 0)');

    console.log('[Simulation] Constructor complete');
  }

  // Public API

  start(): void {
    console.log('[Simulation] Starting animation loop');
    // Use Three.js built-in animation loop
    // Reference: https://threejs.org/docs/#api/en/renderers/WebGLRenderer.setAnimationLoop
    this.renderer.setAnimationLoop(() => this.step());
  }

  pause(): void {
    console.log('[Simulation] Pausing animation loop');
    this.renderer.setAnimationLoop(null);
  }

  reset(): void {
    console.log('[Simulation] Reset called - need to reinitialize GPUComputationRenderer');
    this.pause();

    this.stepCount = 0;
    console.log('[Simulation] Reset - step count reset (texture reset not implemented)');
  }

  updateParameters(params: SimulationParameters): void {
    this.parameters = params;
    this.updateUniforms(this.stateVariable.material.uniforms, params);
  }

  getDisplayMesh(): Mesh {
    return this.displayMesh;
  }

  // Private methods

  private step(): void {
    if (this.stepCount < 5) {
      console.log('[Simulation] step() called, count:', this.stepCount);
    }
    this.stepCount++;

    // Run one simulation step (reaction + movement + diffusion combined)
    // Following Jason Webb's pattern: one compute() call per frame
    this.gpuCompute.compute();

    if (this.stepCount <= 5) {
      console.log('[Simulation] gpuCompute.compute() done');
    }

    // Update display to show new state
    this.updateDisplayTexture();

    if (this.stepCount === 1) {
      console.log('[Simulation] First step complete, display updated');
    }
  }

  private updateDisplayTexture(): void {
    // Get current simulation state and set it on display mesh
    const currentTexture = this.gpuCompute.getCurrentRenderTarget(this.stateVariable).texture;
    (this.displayMesh.material as ShaderMaterial).uniforms.state.value = currentTexture;
  }

  private updateUniforms(uniforms: any, params: SimulationParameters): void {
    // Create or update uniforms (must create them before GPUComputationRenderer.init())
    // Pattern from GPUComputationRenderer examples: variable.material.uniforms.x = { value: y }
    uniforms.r_r = { value: params.r_r };
    uniforms.r_d = { value: params.r_d };
    uniforms.r_c = { value: params.r_c };
    uniforms.r_w = { value: params.r_c };  // Fe2 production equals Fe3 consumption (mass balance)
    uniforms.alpha_ad = { value: params.alpha_ad };
    uniforms.alpha_da = { value: params.alpha_da };
    uniforms.timeStep = { value: params.timeStep };
    uniforms.bacterialDiffusion = { value: params.bacterialDiffusion };
    uniforms.biasStrength = { value: params.biasStrength };
    uniforms.fe2Diffusion = { value: params.fe2Diffusion };
    uniforms.time = { value: performance.now() * 0.001 };
  }

  private initializeFields(data: Float32Array): void {
    console.log('[Simulation] initializeFields called, data length:', data.length);

    const textureSize = 512;
    const { fe3Scale, fe3Variation, initialActiveSeeds, seedPixelRadius } = this.parameters;

    // Use our math utility for Fe3 initialization (synchronous now)
    const initialData = initializeFe3Field(
      textureSize,
      fe3Scale,
      fe3Variation,
      noise
    );

    console.log('[Simulation] Perlin data generated');

    // Place Active bacteria seed patches (circular areas, not single pixels)
    for (let i = 0; i < initialActiveSeeds; i++) {
      const centerX = Math.floor(Math.random() * textureSize);
      const centerY = Math.floor(Math.random() * textureSize);

      // Fill circular area around center
      for (let dy = -seedPixelRadius; dy <= seedPixelRadius; dy++) {
        for (let dx = -seedPixelRadius; dx <= seedPixelRadius; dx++) {
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist <= seedPixelRadius) {
            const x = centerX + dx;
            const y = centerY + dy;

            // Check bounds
            if (x >= 0 && x < textureSize && y >= 0 && y < textureSize) {
              const pixelIndex = y * textureSize + x;
              const pixelStart = pixelIndex * 4;
              // Set Active density (falloff from center for smooth edges)
              const density = 1.0 - (dist / seedPixelRadius) * 0.5;  // 1.0 at center, 0.5 at edge
              initialData[pixelStart + 3] = Math.max(initialData[pixelStart + 3], density);
            }
          }
        }
      }
    }

    console.log('[Simulation] Placed', initialActiveSeeds, 'active seed patches with radius', seedPixelRadius, 'pixels');

    // Copy initialized data
    data.set(initialData);
    console.log('[Simulation] Data copied to texture');
  }
}
