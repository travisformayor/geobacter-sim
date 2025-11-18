/**
 * Reaction shader - ODE integration step
 * Implements explicit Euler integration for bacteria-iron ODEs
 * Adapted from Jason Webb's Gray-Scott reaction-diffusion patterns
 * Source: https://github.com/jasonwebb/reaction-diffusion-playground
 */

uniform sampler2D state;
uniform vec2 resolution;

// Mathematical rates
uniform float r_r;        // reproduction rate
uniform float r_d;        // death rate
uniform float r_c;        // Fe3 consumption rate
uniform float r_w;        // Fe2 production rate
uniform float alpha_ad;   // max Active->Dormant rate
uniform float alpha_da;   // max Dormant->Active rate
uniform float timeStep;   // Euler delta t

// Rate equation functions (from common.glsl concepts)
const float K_F = 1.0;

float calculateR_ad(float Fe3) {
  return alpha_ad * (1.0 - Fe3 / K_F);
}

float calculateR_da(float Fe3) {
  return alpha_da * (Fe3 / K_F);
}

void main() {
  vec2 cellSize = 1.0 / resolution;
  vec2 uv = gl_FragCoord.xy * cellSize;

  // Read current state: R=Fe3, G=Fe2, B=Dormant, A=Active
  vec4 currentState = texture2D(state, uv);
  float Fe3 = currentState.r;
  float Fe2 = currentState.g;
  float D = currentState.b;
  float A = currentState.a;

  // Calculate transition rates based on Fe3 level
  float r_ad_val = calculateR_ad(Fe3);
  float r_da_val = calculateR_da(Fe3);

  // ODE System - Explicit Euler Integration
  // Pattern from Jason Webb: value += rate * timestep
  // https://github.com/jasonwebb/reaction-diffusion-playground/blob/master/glsl/simulationFrag.glsl

  // dFe3/dt = -r_c * A * Fe3
  float dFe3 = -r_c * A * Fe3;
  float newFe3 = Fe3 + dFe3 * timeStep;

  // dFe2/dt = +r_w * A * Fe3
  float dFe2 = r_w * A * Fe3;
  float newFe2 = Fe2 + dFe2 * timeStep;

  // dA/dt = (r_r - r_d - r_ad) * A + r_da * D
  float dA = (r_r - r_d - r_ad_val) * A + r_da_val * D;
  float newA = A + dA * timeStep;

  // dD/dt = r_ad * A - (r_da + r_d) * D
  float dD = r_ad_val * A - (r_da_val + r_d) * D;
  float newD = D + dD * timeStep;

  // Clamp all values to [0, 1] (prevent negative densities/concentrations)
  newFe3 = clamp(newFe3, 0.0, 1.0);
  newFe2 = clamp(newFe2, 0.0, 1.0);
  newA = clamp(newA, 0.0, 1.0);
  newD = clamp(newD, 0.0, 1.0);

  // Write updated state: R=Fe3, G=Fe2, B=Dormant, A=Active
  gl_FragColor = vec4(newFe3, newFe2, newD, newA);
}
