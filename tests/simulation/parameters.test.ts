import { describe, it, expect } from 'vitest';
import { parameterConfig, defaultParameters } from '../../src/simulation/parameters';

describe('Parameter Configuration', () => {
  describe('parameterConfig structure', () => {
    it('should have all required fields for each parameter', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(config).toHaveProperty('default');
        expect(config).toHaveProperty('min');
        expect(config).toHaveProperty('max');
        expect(config).toHaveProperty('step');
        expect(config).toHaveProperty('label');
      });
    });

    it('should have min < max for all parameters', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(config.min).toBeLessThan(config.max);
      });
    });

    it('should have defaults within min/max ranges', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(config.default).toBeGreaterThanOrEqual(config.min);
        expect(config.default).toBeLessThanOrEqual(config.max);
      });
    });

    it('should have positive step values', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(config.step).toBeGreaterThan(0);
      });
    });

    it('should have non-empty labels', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(config.label).toBeTruthy();
        expect(config.label.length).toBeGreaterThan(0);
      });
    });
  });

  describe('defaultParameters', () => {
    it('should have all required parameter keys', () => {
      const requiredKeys = [
        'r_r', 'r_d', 'r_c', 'alpha_ad', 'alpha_da',
        'timeStep', 'bacterialDiffusion', 'biasStrength', 'fe2Diffusion',
        'fe3Scale', 'fe3Variation', 'initialActiveSeeds', 'seedPixelRadius'
      ];

      requiredKeys.forEach(key => {
        expect(defaultParameters).toHaveProperty(key);
      });
    });

    it('should have values matching config defaults', () => {
      Object.entries(parameterConfig).forEach(([key, config]) => {
        expect(defaultParameters[key as keyof typeof defaultParameters]).toBe(config.default);
      });
    });
  });

  describe('Parameter value ranges', () => {
    it('should have valid mathematical rate defaults', () => {
      // Mathematical rates should be reasonable
      expect(defaultParameters.r_r).toBeGreaterThan(0);
      expect(defaultParameters.r_d).toBeGreaterThanOrEqual(0);
      expect(defaultParameters.r_c).toBeGreaterThan(0);
      expect(defaultParameters.alpha_ad).toBeGreaterThanOrEqual(0);
      expect(defaultParameters.alpha_da).toBeGreaterThanOrEqual(0);
    });

    it('should have valid simulation parameter defaults', () => {
      expect(defaultParameters.timeStep).toBeGreaterThan(0);
      expect(defaultParameters.bacterialDiffusion).toBeGreaterThanOrEqual(0);
      expect(defaultParameters.biasStrength).toBeGreaterThanOrEqual(0);
      expect(defaultParameters.fe2Diffusion).toBeGreaterThanOrEqual(0);
    });

    it('should have valid initial condition defaults', () => {
      expect(defaultParameters.fe3Scale).toBeGreaterThan(0);
      expect(defaultParameters.fe3Variation).toBeGreaterThanOrEqual(0);
      expect(defaultParameters.fe3Variation).toBeLessThanOrEqual(1);
    });
  });
});
