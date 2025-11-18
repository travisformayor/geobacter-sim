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
  float dormantDensity = simState.b;  // Consistent naming with activeDensity
  float activeDensity = simState.a;   // Renamed from 'active' (reserved GLSL keyword)

  // DEBUG: Show raw RGBA values to diagnose black screen
  // Uncomment to see raw texture data:
  // gl_FragColor = simState; return;

  // Color mapping for each field
  vec3 fe3Color = vec3(0.55, 0.25, 0.15);   // Desert red-brown (iron mineral)
  vec3 fe2Color = vec3(0.9, 0.9, 0.2);      // Yellow (reduced iron / waste)
  vec3 activeColor = vec3(0.2, 0.8, 0.3);   // Green (metabolically active)
  vec3 dormantColor = vec3(0.3, 0.5, 0.7);  // Blue (inactive)

  // Background color (cream/off-white where no density)
  vec3 backgroundColor = vec3(0.95, 0.93, 0.88);

  // Alpha-blend layers from back to front
  // Density controls transparency: high density = opaque, low = transparent
  // layerVisibility = (fe3, fe2, active, dormant) = (x, y, z, w)
  vec3 color = backgroundColor;

  // Layer Fe3 (bottom layer)
  float fe3Alpha = fe3 * layerVisibility.x;
  color = mix(color, fe3Color, fe3Alpha);

  // Layer Fe2 (waste byproduct)
  float fe2Alpha = fe2 * layerVisibility.y;
  color = mix(color, fe2Color, fe2Alpha);

  // Layer Active bacteria
  float activeAlpha = activeDensity * layerVisibility.z;
  color = mix(color, activeColor, activeAlpha);

  // Layer Dormant bacteria (top layer)
  float dormantAlpha = dormantDensity * layerVisibility.w;
  color = mix(color, dormantColor, dormantAlpha);

  gl_FragColor = vec4(color, 1.0);
}
