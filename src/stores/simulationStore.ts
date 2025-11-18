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

// Layer visibility for display shader (opacity values 0-1)
export const layerVisibility = writable<LayerVisibility>({
  fe3: 1.0,
  fe2: 1.0,
  active: 1.0,
  dormant: 1.0
});
