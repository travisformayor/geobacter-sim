/**
 * Combined compute shader - All simulation operations in one pass
 * Handles: Reaction (ODE integration) + Movement + Diffusion
 *
 * Following Jason Webb's single-shader pattern:
 * https://github.com/jasonwebb/reaction-diffusion-playground/blob/master/glsl/simulationFrag.glsl
 *
 * This matches how Gray-Scott combines reaction and diffusion in one shader
 */

// Note: 'state' and 'resolution' are auto-provided by GPUComputationRenderer

// Constants
const float K_F = 1.0;  // Fe3 reference scale (normalized)

// Mathematical rates
uniform float r_r;        // reproduction rate
uniform float r_d;        // death rate
uniform float r_c;        // Fe3 consumption rate
uniform float r_w;        // Fe2 production rate
uniform float alpha_ad;   // max Active->Dormant rate
uniform float alpha_da;   // max Dormant->Active rate

// Spatial parameters
uniform float timeStep;
uniform float bacterialDiffusion;  // Diffusion strength (0-1)
uniform float biasStrength;        // Anisotropic bias strength (0-1)
uniform float fe2Diffusion;        // Fe2 diffusion strength (0-1)
uniform float time;                // For random turbulence direction

// Random function from Book of Shaders
// https://thebookofshaders.com/11/
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Rate equation functions
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

  // DEBUG: Passthrough mode to test if shader reads input correctly
  // Uncomment to see if shader can read state texture:
  // gl_FragColor = currentState; return;

  // ===================
  // STEP 1: REACTION (ODE Integration)
  // ===================

  float r_ad_val = calculateR_ad(Fe3);
  float r_da_val = calculateR_da(Fe3);

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

  // ===================
  // STEP 2: BACTERIAL MOVEMENT
  // Models individual random walks as population-level diffusion + turbulence
  // ===================

  // Calculate Fe3 gradient for Active bacteria bias
  float fe3_n = texture2D(state, uv + vec2(0.0, cellSize.y)).r;
  float fe3_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).r;
  float fe3_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).r;
  float fe3_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).r;
  vec2 fe3Gradient = vec2((fe3_e - fe3_w) * 0.5, (fe3_n - fe3_s) * 0.5);
  float gradientMagnitude = length(fe3Gradient);
  vec2 gradientDir = gradientMagnitude > 0.0 ? normalize(fe3Gradient) : vec2(0.0);

  // 2A. Anisotropic Diffusion for Active (biased toward gradient)
  // Mass-conserving weighted average with bias in gradient direction
  float A_c = newA;
  float A_n = texture2D(state, uv + vec2(0.0, cellSize.y)).a;
  float A_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).a;
  float A_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).a;
  float A_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).a;

  // Calculate direction weights based on gradient
  // More weight in gradient direction, less opposite
  // biasStrength is 0-1, scales the directional weighting
  float w_n = 1.0 + biasStrength * max(0.0, gradientDir.y);
  float w_s = 1.0 - biasStrength * max(0.0, gradientDir.y);
  float w_e = 1.0 + biasStrength * max(0.0, gradientDir.x);
  float w_w = 1.0 - biasStrength * max(0.0, gradientDir.x);

  // Weighted average (mass-conserving)
  float totalWeight = w_n + w_s + w_e + w_w + 4.0;  // +4 for center
  float anisotropicA = (
    A_n * w_n + A_s * w_s + A_e * w_e + A_w * w_w + A_c * 4.0
  ) / totalWeight;

  // Blend based on bacterialDiffusion parameter (0-1)
  float movedA = mix(newA, anisotropicA, bacterialDiffusion);

  // 2B. Anisotropic Diffusion for Dormant (biased toward random direction - water turbulence)
  // Random direction changes each frame (simulates chaotic water flow)
  float randAngle = random(uv + time) * 6.28318;
  vec2 turbulenceDir = vec2(cos(randAngle), sin(randAngle));

  float D_c = newD;
  float D_n = texture2D(state, uv + vec2(0.0, cellSize.y)).b;
  float D_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).b;
  float D_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).b;
  float D_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).b;

  // Calculate direction weights based on random turbulence direction
  // Same bias strength as Active, but random direction instead of gradient
  float w_n_d = 1.0 + biasStrength * max(0.0, turbulenceDir.y);
  float w_s_d = 1.0 - biasStrength * max(0.0, turbulenceDir.y);
  float w_e_d = 1.0 + biasStrength * max(0.0, turbulenceDir.x);
  float w_w_d = 1.0 - biasStrength * max(0.0, turbulenceDir.x);

  // Weighted average (mass-conserving)
  float totalWeight_d = w_n_d + w_s_d + w_e_d + w_w_d + 4.0;
  float anisotropicD = (
    D_n * w_n_d + D_s * w_s_d + D_e * w_e_d + D_w * w_w_d + D_c * 4.0
  ) / totalWeight_d;

  float movedD = mix(newD, anisotropicD, bacterialDiffusion);

  // ===================
  // STEP 3: FE2 DIFFUSION (Gaussian Blur)
  // ===================

  // 3x3 Gaussian kernel for Fe2
  // Reference: https://agatedragon.blog/2024/01/09/simple-gaussian-blur/
  float fe2_c = newFe2;
  float fe2_n = texture2D(state, uv + vec2(0.0, cellSize.y)).g;
  float fe2_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).g;
  float fe2_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).g;
  float fe2_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).g;
  float fe2_ne = texture2D(state, uv + vec2(cellSize.x, cellSize.y)).g;
  float fe2_nw = texture2D(state, uv + vec2(-cellSize.x, cellSize.y)).g;
  float fe2_se = texture2D(state, uv + vec2(cellSize.x, -cellSize.y)).g;
  float fe2_sw = texture2D(state, uv + vec2(-cellSize.x, -cellSize.y)).g;

  float blurredFe2 = (
    fe2_nw + fe2_n * 2.0 + fe2_ne +
    fe2_w * 2.0 + fe2_c * 4.0 + fe2_e * 2.0 +
    fe2_sw + fe2_s * 2.0 + fe2_se
  ) / 16.0;

  // Blend based on fe2Diffusion parameter (0-1)
  float finalFe2 = mix(newFe2, blurredFe2, fe2Diffusion);

  // ===================
  // OUTPUT
  // ===================

  // Clamp all values to [0, 1]
  newFe3 = clamp(newFe3, 0.0, 1.0);
  finalFe2 = clamp(finalFe2, 0.0, 1.0);
  newA = clamp(movedA, 0.0, 1.0);  // Use moved values from movement step
  newD = clamp(movedD, 0.0, 1.0);

  // Write updated state: R=Fe3, G=Fe2, B=Dormant, A=Active
  gl_FragColor = vec4(newFe3, finalFe2, newD, newA);
}
