/**
 * Svelte stores for simulation UI state
 */

import { writable } from 'svelte/store';
import type { SimulationParameters, LayerVisibility } from '../types';
import { defaultParameters } from '../simulation/parameters';

// Simulation running state
export const isRunning = writable(false);

// Simulation parameters (drives shader uniforms)
export const parameters = writable<SimulationParameters>(defaultParameters);

// Layer base visibility toggles (on/off)
export const layerToggles = writable({
  fe3: true,       // All visible by default
  fe2: true,
  active: true,
  dormant: true
});

// Layer visibility for display shader (computed from toggles + hover)
export const layerVisibility = writable<LayerVisibility>({
  fe3: 1.0,
  fe2: 1.0,
  active: 1.0,
  dormant: 1.0
});
