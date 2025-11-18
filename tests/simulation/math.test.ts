import { describe, it, expect } from 'vitest';
import { r_ad, r_da, clamp, initializeFe3Field } from '../../src/utils/math';

describe('Rate Equations', () => {
  describe('r_ad (Active -> Dormant)', () => {
    it('should return max rate when Fe3 is 0 (no food)', () => {
      const alpha_ad = 0.5;
      const result = r_ad(0, alpha_ad);
      expect(result).toBe(0.5);
    });

    it('should return 0 when Fe3 is at K_F (max food)', () => {
      const alpha_ad = 0.5;
      const result = r_ad(1.0, alpha_ad, 1.0);
      expect(result).toBeCloseTo(0);
    });

    it('should return half max rate when Fe3 is 0.5', () => {
      const alpha_ad = 0.5;
      const result = r_ad(0.5, alpha_ad, 1.0);
      expect(result).toBeCloseTo(0.25);
    });

    it('should scale linearly with Fe3', () => {
      const alpha_ad = 1.0;
      expect(r_ad(0.25, alpha_ad)).toBeCloseTo(0.75);
      expect(r_ad(0.75, alpha_ad)).toBeCloseTo(0.25);
    });
  });

  describe('r_da (Dormant -> Active)', () => {
    it('should return 0 when Fe3 is 0 (no food)', () => {
      const alpha_da = 0.5;
      const result = r_da(0, alpha_da);
      expect(result).toBe(0);
    });

    it('should return max rate when Fe3 is at K_F (max food)', () => {
      const alpha_da = 0.5;
      const result = r_da(1.0, alpha_da, 1.0);
      expect(result).toBeCloseTo(0.5);
    });

    it('should return half max rate when Fe3 is 0.5', () => {
      const alpha_da = 0.5;
      const result = r_da(0.5, alpha_da, 1.0);
      expect(result).toBeCloseTo(0.25);
    });

    it('should scale linearly with Fe3', () => {
      const alpha_da = 1.0;
      expect(r_da(0.25, alpha_da)).toBeCloseTo(0.25);
      expect(r_da(0.75, alpha_da)).toBeCloseTo(0.75);
    });
  });

  describe('r_ad and r_da relationship', () => {
    it('should be complementary (sum to alpha when equal)', () => {
      const alpha = 0.5;
      const fe3 = 0.3;
      const ad = r_ad(fe3, alpha);
      const da = r_da(fe3, alpha);
      // They should follow inverse linear relationships
      expect(ad).toBeCloseTo(alpha * (1 - fe3));
      expect(da).toBeCloseTo(alpha * fe3);
    });
  });
});

describe('clamp', () => {
  it('should return value when within range', () => {
    expect(clamp(0.5, 0, 1)).toBe(0.5);
    expect(clamp(0.3, 0, 1)).toBe(0.3);
  });

  it('should clamp to min when value is below', () => {
    expect(clamp(-0.5, 0, 1)).toBe(0);
    expect(clamp(-100, 0, 1)).toBe(0);
  });

  it('should clamp to max when value is above', () => {
    expect(clamp(1.5, 0, 1)).toBe(1);
    expect(clamp(100, 0, 1)).toBe(1);
  });

  it('should handle edge cases at boundaries', () => {
    expect(clamp(0, 0, 1)).toBe(0);
    expect(clamp(1, 0, 1)).toBe(1);
  });

  it('should work with different ranges', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, -10, 10)).toBe(-5);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});

describe('initializeFe3Field', () => {
  // Mock noise function that returns consistent values
  const mockNoise = {
    perlin2: (x: number, y: number) => {
      // Simple deterministic function for testing
      return Math.sin(x) * Math.cos(y);
    }
  };

  it('should create correct size array for texture', () => {
    const textureSize = 4;
    const data = initializeFe3Field(textureSize, 1.0, 0.5, mockNoise);
    // 4x4 texture with RGBA (4 channels)
    expect(data.length).toBe(4 * 4 * 4);
  });

  it('should initialize Fe3 values in R channel only', () => {
    const textureSize = 2;
    const data = initializeFe3Field(textureSize, 1.0, 0.5, mockNoise);

    // Check each pixel
    for (let i = 0; i < textureSize * textureSize; i++) {
      const r = data[i * 4 + 0]; // Fe3
      const g = data[i * 4 + 1]; // Fe2
      const b = data[i * 4 + 2]; // Active
      const a = data[i * 4 + 3]; // Dormant

      // Fe3 should be in valid range
      expect(r).toBeGreaterThanOrEqual(0);
      expect(r).toBeLessThanOrEqual(1);

      // Other channels should be 0
      expect(g).toBe(0);
      expect(b).toBe(0);
      expect(a).toBe(0);
    }
  });

  it('should respect fe3Variation parameter', () => {
    const textureSize = 4;

    // With zero variation, should be all 0.5
    const noiseReturnsZero = { perlin2: () => 0 };
    const dataNoVar = initializeFe3Field(textureSize, 1.0, 0, noiseReturnsZero);

    for (let i = 0; i < textureSize * textureSize; i++) {
      expect(dataNoVar[i * 4]).toBeCloseTo(0.5);
    }
  });

  it('should clamp all Fe3 values to [0, 1]', () => {
    // Extreme noise that returns -1 or 1
    const extremeNoise = {
      perlin2: (x: number, y: number) => (x + y) % 2 === 0 ? -1 : 1
    };

    const textureSize = 4;
    const data = initializeFe3Field(textureSize, 1.0, 1.0, extremeNoise);

    for (let i = 0; i < textureSize * textureSize; i++) {
      const fe3 = data[i * 4];
      expect(fe3).toBeGreaterThanOrEqual(0);
      expect(fe3).toBeLessThanOrEqual(1);
    }
  });

  it('should use fe3Scale to affect spatial frequency', () => {
    const textureSize = 8;
    const smallScale = initializeFe3Field(textureSize, 1.0, 0.5, mockNoise);
    const largeScale = initializeFe3Field(textureSize, 10.0, 0.5, mockNoise);

    // Different scales should produce different patterns
    // (sampling at different spatial frequencies)
    let differences = 0;
    for (let i = 0; i < textureSize * textureSize; i++) {
      if (Math.abs(smallScale[i * 4] - largeScale[i * 4]) > 0.01) {
        differences++;
      }
    }

    // Should have many differences
    expect(differences).toBeGreaterThan(0);
  });
});
