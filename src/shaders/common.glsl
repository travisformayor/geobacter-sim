/**
 * Shared GLSL functions and constants for bacteria simulation
 */

// Constants
const float K_F = 1.0;  // Fe3 reference scale (normalized)

/**
 * Clamp value between 0 and 1
 */
float clamp01(float value) {
  return clamp(value, 0.0, 1.0);
}

/**
 * Active -> Dormant transition rate
 * From ODE model: r_ad(Fe3) = alpha_ad * (1 - Fe3/K_F)
 * High when Fe3 is low (bacteria go dormant when food is scarce)
 */
float calculateR_ad(float Fe3, float alpha_ad) {
  return alpha_ad * (1.0 - Fe3 / K_F);
}

/**
 * Dormant -> Active transition rate
 * From ODE model: r_da(Fe3) = alpha_da * (Fe3/K_F)
 * High when Fe3 is high (bacteria reactivate when food is available)
 */
float calculateR_da(float Fe3, float alpha_da) {
  return alpha_da * (Fe3 / K_F);
}
