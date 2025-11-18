import { describe, it, expect } from 'vitest';
import { get } from 'svelte/store';
import { isRunning, parameters, layerVisibility } from '../src/stores/simulationStore';
import { defaultParameters } from '../src/simulation/parameters';

describe('Simulation Stores', () => {
  describe('isRunning store', () => {
    it('should initialize to false', () => {
      const value = get(isRunning);
      expect(value).toBe(false);
    });

    it('should update when set', () => {
      isRunning.set(true);
      expect(get(isRunning)).toBe(true);

      isRunning.set(false);
      expect(get(isRunning)).toBe(false);
    });

    it('should notify subscribers on change', () => {
      let notified = false;
      let lastValue = false;

      const unsubscribe = isRunning.subscribe(value => {
        notified = true;
        lastValue = value;
      });

      isRunning.set(true);
      expect(notified).toBe(true);
      expect(lastValue).toBe(true);

      unsubscribe();
    });
  });

  describe('parameters store', () => {
    it('should initialize with defaultParameters', () => {
      const value = get(parameters);
      expect(value).toEqual(defaultParameters);
    });

    it('should update individual parameters', () => {
      const newParams = { ...defaultParameters, r_r: 0.5 };
      parameters.set(newParams);

      const value = get(parameters);
      expect(value.r_r).toBe(0.5);
    });

    it('should maintain all parameter keys', () => {
      const value = get(parameters);
      const requiredKeys = [
        'r_r', 'r_d', 'r_c', 'alpha_ad', 'alpha_da',
        'timeStep', 'bacterialDiffusion', 'biasStrength', 'fe2Diffusion',
        'fe3Scale', 'fe3Variation', 'initialActiveSeeds', 'seedPixelRadius'
      ];

      requiredKeys.forEach(key => {
        expect(value).toHaveProperty(key);
      });
    });

    it('should notify subscribers on parameter changes', () => {
      let notified = false;
      let lastValue = defaultParameters;

      const unsubscribe = parameters.subscribe(value => {
        notified = true;
        lastValue = value;
      });

      const newParams = { ...defaultParameters, timeStep: 0.1 };
      parameters.set(newParams);

      expect(notified).toBe(true);
      expect(lastValue.timeStep).toBe(0.1);

      unsubscribe();
    });
  });

  describe('layerVisibility store', () => {
    it('should initialize with all layers visible', () => {
      const value = get(layerVisibility);
      expect(value).toEqual({
        fe3: 1.0,
        fe2: 1.0,
        active: 1.0,
        dormant: 1.0
      });
    });

    it('should update individual layer opacity', () => {
      layerVisibility.set({
        fe3: 1.0,
        fe2: 0.2,
        active: 0.2,
        dormant: 0.2
      });

      const value = get(layerVisibility);
      expect(value.fe3).toBe(1.0);
      expect(value.fe2).toBe(0.2);
      expect(value.active).toBe(0.2);
      expect(value.dormant).toBe(0.2);
    });

    it('should support opacity values between 0 and 1', () => {
      layerVisibility.set({
        fe3: 0,
        fe2: 0.5,
        active: 0.75,
        dormant: 1.0
      });

      const value = get(layerVisibility);
      expect(value.fe3).toBeGreaterThanOrEqual(0);
      expect(value.fe3).toBeLessThanOrEqual(1);
      expect(value.fe2).toBeGreaterThanOrEqual(0);
      expect(value.fe2).toBeLessThanOrEqual(1);
    });

    it('should notify subscribers on visibility changes', () => {
      let notified = false;
      let lastValue = { fe3: 1.0, fe2: 1.0, active: 1.0, dormant: 1.0 };

      const unsubscribe = layerVisibility.subscribe(value => {
        notified = true;
        lastValue = value;
      });

      const newVisibility = { fe3: 1.0, fe2: 0.2, active: 0.2, dormant: 0.2 };
      layerVisibility.set(newVisibility);

      expect(notified).toBe(true);
      expect(lastValue).toEqual(newVisibility);

      unsubscribe();
    });
  });
});
