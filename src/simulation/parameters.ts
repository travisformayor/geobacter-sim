import type { SimulationParameters } from '../types';

/**
 * Parameter configuration for simulation controls
 * Single source of truth for defaults, ranges, steps, and UI labels
 */

export interface ParameterConfig {
  default: number;
  min: number;
  max: number;
  step: number;
  label: string;
}

export const parameterConfig: Record<keyof SimulationParameters, ParameterConfig> = {
  // Mathematical rates (from ODEs)
  r_r: { default: 0.3, min: 0, max: 1, step: 0.01, label: "Reproduction Rate" },
  r_d: { default: 0.05, min: 0, max: 1, step: 0.01, label: "Death Rate" },
  r_c: { default: 0.8, min: 0, max: 2, step: 0.01, label: "Fe3 Consumption" },
  r_w: { default: 1.0, min: 0, max: 2, step: 0.01, label: "Fe2 Production" },
  alpha_ad: { default: 0.5, min: 0, max: 1, step: 0.01, label: "Active->Dormant Rate" },
  alpha_da: { default: 0.5, min: 0, max: 1, step: 0.01, label: "Dormant->Active Rate" },

  // Simulation parameters
  timeStep: { default: 0.05, min: 0.001, max: 0.2, step: 0.001, label: "Time Step" },
  randomWalkActive: { default: 0.05, min: 0, max: 0.5, step: 0.01, label: "Active Random Walk" },
  randomWalkDormant: { default: 0.15, min: 0, max: 0.5, step: 0.01, label: "Dormant Random Walk" },
  biasStrength: { default: 0.6, min: 0, max: 2, step: 0.01, label: "Gradient Bias Strength" },
  fe2DiffusionAmount: { default: 0.2, min: 0, max: 1, step: 0.01, label: "Fe2 Diffusion" },

  // Initial conditions
  fe3Scale: { default: 6.0, min: 1, max: 20, step: 0.1, label: "Fe3 Perlin Scale" },
  fe3Variation: { default: 0.4, min: 0, max: 1, step: 0.01, label: "Fe3 Variation" }
};

/**
 * Extracts the default parameter values from config
 */
export const defaultParameters: SimulationParameters = Object.fromEntries(
  Object.entries(parameterConfig).map(([key, val]) => [key, val.default])
) as unknown as SimulationParameters;
