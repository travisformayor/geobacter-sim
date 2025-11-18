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

// Import shaders as strings
import commonGLSL from '../shaders/common.glsl?raw';
import reactionFragCode from '../shaders/reaction.frag?raw';
import movementFragCode from '../shaders/movement.frag?raw';
import diffusionFragCode from '../shaders/diffusion.frag?raw';
import displayFragCode from '../shaders/display.frag?raw';

export class Simulation {
  private renderer: WebGLRenderer;
  private gpuCompute: GPUComputationRenderer;
  private stateVariable: any;
  private movementPass: ShaderMaterial;
  private diffusionPass: ShaderMaterial;
  private displayMesh: Mesh;
  private parameters: SimulationParameters;

  constructor(renderer: WebGLRenderer, params: SimulationParameters = defaultParameters) {
    this.renderer = renderer;
    this.parameters = params;

    // 1. Use GPUComputationRenderer for ALL texture management
    this.gpuCompute = new GPUComputationRenderer(512, 512, renderer);

    // 2. Use createTexture() helper - automatic Float32Array with proper settings
    const stateTexture = this.gpuCompute.createTexture();
    if (stateTexture.image.data) {
      this.initializeFields(stateTexture.image.data as Float32Array);
    }

    // 3. Prepare shaders (concatenate common.glsl to compute shaders)
    // String concatenation pattern - common in WebGL/Three.js projects
    const reactionShader = commonGLSL + reactionFragCode;
    const movementShader = commonGLSL + movementFragCode;
    const diffusionShader = commonGLSL + diffusionFragCode;

    // 4. Single variable with all 4 fields packed
    this.stateVariable = this.gpuCompute.addVariable(
      'state',
      reactionShader,
      stateTexture
    );

    // 5. Set self-dependency for temporal updates
    this.gpuCompute.setVariableDependencies(this.stateVariable, [this.stateVariable]);

    // 6. Initialize uniforms with parameters
    const reactionUniforms = this.stateVariable.material.uniforms;
    this.updateUniforms(reactionUniforms, params);

    // 7. Additional compute passes using createShaderMaterial
    this.movementPass = this.gpuCompute.createShaderMaterial(movementShader, {
      state: { value: null },
      resolution: { value: new Vector2(512, 512) }
    });
    this.diffusionPass = this.gpuCompute.createShaderMaterial(diffusionShader, {
      state: { value: null },
      resolution: { value: new Vector2(512, 512) }
    });
    this.updateUniforms(this.movementPass.uniforms, params);
    this.updateUniforms(this.diffusionPass.uniforms, params);

    // 8. Display mesh separate from compute pipeline
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

    // 9. Initialize GPUComputationRenderer
    const error = this.gpuCompute.init();
    if (error !== null) {
      console.error('GPUComputationRenderer init error:', error);
    }
  }

  // Public API

  start(): void {
    // Use Three.js built-in animation loop
    // Reference: https://threejs.org/docs/#api/en/renderers/WebGLRenderer.setAnimationLoop
    this.renderer.setAnimationLoop(() => this.step());
  }

  stop(): void {
    this.renderer.setAnimationLoop(null);
  }

  reset(): void {
    // Reinitialize texture data
    const stateTexture = this.gpuCompute.createTexture();
    if (stateTexture.image.data) {
      this.initializeFields(stateTexture.image.data as Float32Array);
    }
    // Note: GPUComputationRenderer doesn't have direct texture replacement API
    // For now, this creates new texture but may need full reinit in practice
  }

  updateParameters(params: SimulationParameters): void {
    this.parameters = params;
    this.updateUniforms(this.stateVariable.material.uniforms, params);
    this.updateUniforms(this.movementPass.uniforms, params);
    this.updateUniforms(this.diffusionPass.uniforms, params);
  }

  getDisplayMesh(): Mesh {
    return this.displayMesh;
  }

  // Private methods

  private step(): void {
    // All ping-ponging handled automatically
    this.gpuCompute.compute();

    // Additional passes using doRenderTarget
    // Pattern from GPUComputationRenderer examples
    const currentTarget = this.gpuCompute.getCurrentRenderTarget(this.stateVariable);
    this.gpuCompute.doRenderTarget(this.movementPass, currentTarget);
    this.gpuCompute.doRenderTarget(this.diffusionPass, currentTarget);

    // Update display mesh with final texture
    (this.displayMesh.material as ShaderMaterial).uniforms.state.value = currentTarget.texture;
  }

  private updateUniforms(uniforms: any, params: SimulationParameters): void {
    // Update all parameter uniforms if they exist in the shader
    if (uniforms.r_r) uniforms.r_r.value = params.r_r;
    if (uniforms.r_d) uniforms.r_d.value = params.r_d;
    if (uniforms.r_c) uniforms.r_c.value = params.r_c;
    if (uniforms.r_w) uniforms.r_w.value = params.r_w;
    if (uniforms.alpha_ad) uniforms.alpha_ad.value = params.alpha_ad;
    if (uniforms.alpha_da) uniforms.alpha_da.value = params.alpha_da;
    if (uniforms.timeStep) uniforms.timeStep.value = params.timeStep;
    if (uniforms.randomWalkActive) uniforms.randomWalkActive.value = params.randomWalkActive;
    if (uniforms.randomWalkDormant) uniforms.randomWalkDormant.value = params.randomWalkDormant;
    if (uniforms.biasStrength) uniforms.biasStrength.value = params.biasStrength;
    if (uniforms.fe2DiffusionAmount) uniforms.fe2DiffusionAmount.value = params.fe2DiffusionAmount;
    if (uniforms.time) uniforms.time.value = performance.now() * 0.001; // For random seed variation
  }

  private initializeFields(data: Float32Array): void {
    // Initialize using simplenoise for Perlin noise
    // Import noise dynamically to get seeded instance
    import('simplenoise').then(({ default: noise }) => {
      noise.seed(Math.random());

      const textureSize = 512;
      const { fe3Scale, fe3Variation } = this.parameters;

      // Use our math utility for Fe3 initialization
      const initialData = initializeFe3Field(
        textureSize,
        fe3Scale,
        fe3Variation,
        noise
      );

      // Copy initialized data
      data.set(initialData);
    });
  }
}
