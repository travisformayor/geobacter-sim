/**
 * Diffusion shader - Local Fe2 spreading
 * Applies Gaussian blur to Fe2 channel only (short-range diffusion)
 * Other channels (Fe3, Active, Dormant) pass through unchanged
 *
 * 3x3 Gaussian kernel pattern from standard image processing
 * Kernel weights: [1 2 1; 2 4 2; 1 2 1] / 16
 * References:
 * - Gaussian blur tutorial: https://agatedragon.blog/2024/01/09/simple-gaussian-blur/
 */

uniform sampler2D state;
uniform vec2 resolution;
uniform float fe2DiffusionAmount;  // Diffusion strength [0, 1]

void main() {
  vec2 cellSize = 1.0 / resolution;
  vec2 uv = gl_FragCoord.xy * cellSize;

  // Read current state
  vec4 currentState = texture2D(state, uv);

  // Sample Fe2 (G channel) from 3x3 neighborhood for Gaussian blur
  float fe2_c = texture2D(state, uv).g;  // center
  float fe2_n = texture2D(state, uv + vec2(0.0, cellSize.y)).g;  // north
  float fe2_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).g;  // south
  float fe2_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).g;  // east
  float fe2_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).g;  // west
  float fe2_ne = texture2D(state, uv + vec2(cellSize.x, cellSize.y)).g;  // northeast
  float fe2_nw = texture2D(state, uv + vec2(-cellSize.x, cellSize.y)).g;  // northwest
  float fe2_se = texture2D(state, uv + vec2(cellSize.x, -cellSize.y)).g;  // southeast
  float fe2_sw = texture2D(state, uv + vec2(-cellSize.x, -cellSize.y)).g;  // southwest

  // Apply 3x3 Gaussian kernel
  // Weights: [1 2 1; 2 4 2; 1 2 1] / 16
  float blurredFe2 = (
    fe2_nw * 1.0 + fe2_n * 2.0 + fe2_ne * 1.0 +
    fe2_w * 2.0 + fe2_c * 4.0 + fe2_e * 2.0 +
    fe2_sw * 1.0 + fe2_s * 2.0 + fe2_se * 1.0
  ) / 16.0;

  // Blend between original and blurred based on diffusion amount
  float newFe2 = mix(fe2_c, blurredFe2, fe2DiffusionAmount);

  // Preserve other channels unchanged
  gl_FragColor = vec4(
    currentState.r,  // Fe3 unchanged
    newFe2,   // Fe2 diffused
    currentState.b,  // Dormant unchanged
    currentState.a   // Active unchanged
  );
}
