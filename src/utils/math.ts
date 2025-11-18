/**
 * Mathematical utilities for the bacteria simulation
 * Implements ODE rate equations and helper functions
 */

/**
 * r_ad: Active -> Dormant transition rate
 * Higher when Fe3 is low (bacteria go dormant when food is scarce)
 *
 * @param Fe3 - Fe3 concentration [0, 1]
 * @param alpha_ad - Maximum transition rate
 * @param K_F - Fe3 reference scale (normalized to 1)
 * @returns Rate of Active -> Dormant transition
 */
export function r_ad(Fe3: number, alpha_ad: number, K_F: number = 1.0): number {
  return alpha_ad * (1 - Fe3 / K_F);
}

/**
 * r_da: Dormant -> Active transition rate
 * Higher when Fe3 is high (bacteria reactivate when food is available)
 *
 * @param Fe3 - Fe3 concentration [0, 1]
 * @param alpha_da - Maximum transition rate
 * @param K_F - Fe3 reference scale (normalized to 1)
 * @returns Rate of Dormant -> Active transition
 */
export function r_da(Fe3: number, alpha_da: number, K_F: number = 1.0): number {
  return alpha_da * (Fe3 / K_F);
}

/**
 * Clamp a value between min and max
 *
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Initialize Fe3 field using Perlin noise
 * Using simplenoise library: https://github.com/josephg/noisejs
 *
 * @param textureSize - Size of texture (width/height)
 * @param fe3Scale - Spatial scale of Perlin noise
 * @param fe3Variation - Amplitude variation [0, 1]
 * @param noise - Perlin noise function from simplenoise
 * @returns Float32Array with Fe3 values in R channel (RGBA format)
 */
export function initializeFe3Field(
  textureSize: number,
  fe3Scale: number,
  fe3Variation: number,
  noise: { perlin2: (x: number, y: number) => number }
): Float32Array {
  const data = new Float32Array(textureSize * textureSize * 4);

  for (let i = 0; i < textureSize * textureSize; i++) {
    const x = (i % textureSize) / fe3Scale;
    const y = Math.floor(i / textureSize) / fe3Scale;

    // Perlin noise returns [-1, 1], map to [0, 1] with variation
    const noiseValue = noise.perlin2(x, y);
    const fe3Value = clamp(0.5 + fe3Variation * noiseValue, 0, 1);

    // Pack into RGBA texture: R = Fe3, G = Fe2, B = Dormant, A = Active
    data[i * 4 + 0] = fe3Value;  // Fe3 in R channel
    data[i * 4 + 1] = 0;         // Fe2 starts at 0
    data[i * 4 + 2] = 0;         // Dormant starts at 0
    data[i * 4 + 3] = 0;         // Active starts at 0
  }

  return data;
}
