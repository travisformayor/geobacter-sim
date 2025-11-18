/**
 * Movement shader - Density advection
 * Shifts Active and Dormant bacterial densities based on movement rules
 * Active: biased random walk toward Fe3 gradient
 * Dormant: pure random walk
 *
 * Uses semi-Lagrangian advection (backward tracing)
 * Random function from Book of Shaders: https://thebookofshaders.com/11/
 * Gradient pattern from Three.js water example: https://threejs.org/examples/webgl_gpgpu_water.html
 */

uniform sampler2D state;
uniform vec2 resolution;
uniform float randomWalkActive;
uniform float randomWalkDormant;
uniform float biasStrength;
uniform float timeStep;
uniform float time;  // For random seed variation

// Simple pseudo-random function
// Source: The Book of Shaders https://thebookofshaders.com/11/
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Calculate gradient of Fe3 field using central differences
// Pattern from Three.js water example
vec2 calculateGradient(vec2 uv, vec2 cellSize) {
  float north = texture2D(state, uv + vec2(0.0, cellSize.y)).r;
  float south = texture2D(state, uv + vec2(0.0, -cellSize.y)).r;
  float east = texture2D(state, uv + vec2(cellSize.x, 0.0)).r;
  float west = texture2D(state, uv + vec2(-cellSize.x, 0.0)).r;

  float dx = (east - west) * 0.5;
  float dy = (north - south) * 0.5;

  return vec2(dx, dy);
}

void main() {
  vec2 cellSize = 1.0 / resolution;
  vec2 uv = gl_FragCoord.xy * cellSize;

  // Read current state: R=Fe3, G=Fe2, B=Dormant, A=Active
  vec4 currentState = texture2D(state, uv);

  // Calculate Fe3 gradient for active bacteria bias
  vec2 fe3Gradient = calculateGradient(uv, cellSize);
  vec2 gradientDir = length(fe3Gradient) > 0.0 ? normalize(fe3Gradient) : vec2(0.0);

  // Generate random direction using position and time as seed
  float randAngle = random(uv + time) * 6.28318;  // 2*PI
  vec2 randomDir = vec2(cos(randAngle), sin(randAngle));

  // Active bacteria: biased random walk toward Fe3 gradient
  vec2 activeMovement = gradientDir * biasStrength + randomDir * randomWalkActive;
  vec2 activeUpstream = uv - activeMovement * timeStep;
  float newActive = texture2D(state, activeUpstream).a;

  // Dormant bacteria: pure random walk
  vec2 dormantMovement = randomDir * randomWalkDormant;
  vec2 dormantUpstream = uv - dormantMovement * timeStep;
  float newDormant = texture2D(state, dormantUpstream).b;

  // Preserve Fe3 and Fe2 (they don't move in this pass)
  float fe3 = currentState.r;
  float fe2 = currentState.g;

  // Write updated state: R=Fe3, G=Fe2, B=Dormant, A=Active
  gl_FragColor = vec4(fe3, fe2, newDormant, newActive);
}
