/**
 * Display shader - Visualization only
 * Maps simulation state to colors with layer opacity controls
 * Runs on plane mesh outside GPUComputationRenderer
 *
 * Inspired by Jason Webb's displayFrag.glsl approach
 * Source: https://github.com/jasonwebb/reaction-diffusion-playground
 */

uniform sampler2D state;
uniform vec2 resolution;
uniform vec4 layerVisibility;  // (fe3, fe2, active, dormant) opacities

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;

  // Read simulation state: R=Fe3, G=Fe2, B=Dormant, A=Active
  vec4 simState = texture2D(state, uv);
  float fe3 = simState.r;
  float fe2 = simState.g;
  float dormant = simState.b;
  float active = simState.a;

  // Color mapping for each field
  vec3 fe3Color = vec3(0.8, 0.5, 0.2);      // Orange (iron mineral)
  vec3 fe2Color = vec3(0.1, 0.1, 0.1);      // Dark gray (reduced iron)
  vec3 activeColor = vec3(0.2, 0.8, 0.3);   // Green (metabolically active)
  vec3 dormantColor = vec3(0.3, 0.5, 0.7);  // Blue (inactive)

  // Composite layers with opacity controls
  vec3 color = vec3(0.0);
  color += fe3Color * fe3 * layerVisibility.x;
  color += fe2Color * fe2 * layerVisibility.y;
  color += activeColor * active * layerVisibility.w;      // Active in A channel
  color += dormantColor * dormant * layerVisibility.z;    // Dormant in B channel

  gl_FragColor = vec4(color, 1.0);
}
