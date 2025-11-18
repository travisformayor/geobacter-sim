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
  // Initial conditions (top of UI for easy access)
  fe3Scale: { default: 20.0, min: 10, max: 40, step: 0.5, label: "Fe3 Perlin Scale" },
  fe3Variation: { default: 0.5, min: 0.2, max: 1, step: 0.01, label: "Fe3 Perlin Variation" },
  initialActiveSeeds: { default: 5, min: 1, max: 20, step: 1, label: "Initial Active Seeds" },
  seedPixelRadius: { default: 5, min: 1, max: 20, step: 1, label: "Seed Radius (px)" },

  // Simulation parameters
  r_r: { default: 0.3, min: 0, max: 1, step: 0.01, label: "Reproduction Rate" },
  r_d: { default: 0.05, min: 0, max: 1, step: 0.01, label: "Death Rate" },
  r_c: { default: 0.8, min: 0, max: 2, step: 0.01, label: "Fe3 Consumption" },
  biasStrength: { default: 0.5, min: 0, max: 1, step: 0.05, label: "Gradient Bias" },
  alpha_ad: { default: 0.5, min: 0, max: 1, step: 0.01, label: "Active->Dormant Rate" },
  alpha_da: { default: 0.5, min: 0, max: 1, step: 0.01, label: "Dormant->Active Rate" },
  timeStep: { default: 0.5, min: 0, max: 2, step: 0.1, label: "Time Step" },
  bacterialDiffusion: { default: 0.3, min: 0, max: 1, step: 0.05, label: "Bacterial Diffusion" },
  fe2Diffusion: { default: 0.5, min: 0, max: 1, step: 0.05, label: "Fe2 Diffusion" }
};

/**
 * Extracts the default parameter values from config
 */
export const defaultParameters: SimulationParameters = Object.fromEntries(
  Object.entries(parameterConfig).map(([key, val]) => [key, val.default])
) as unknown as SimulationParameters;
