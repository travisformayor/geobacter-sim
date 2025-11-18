// Simulation parameters matching our ODEs
export interface SimulationParameters {
  // Mathematical rates (unitless)
  r_r: number;          // reproduction rate
  r_d: number;          // death rate
  r_c: number;          // Fe3 consumption rate (r_w is set equal to this in code)
  alpha_ad: number;     // max Active->Dormant rate
  alpha_da: number;     // max Dormant->Active rate

  // Spatial parameters
  timeStep: number;            // Euler integration step size
  bacterialDiffusion: number;  // Spreading from individual random walks (0-1)
  biasStrength: number;        // Active bacteria gradient seeking (0-1)
  fe2Diffusion: number;        // Fe2 local spreading (0-1)

  // Initial conditions
  fe3Scale: number;
  fe3Variation: number;
  initialActiveSeeds: number;
  seedPixelRadius: number;     // Size of initial bacteria patches (pixels)
}

// Layer visibility for display shader
export interface LayerVisibility {
  fe3: number;          // opacity 0-1
  fe2: number;          // opacity 0-1
  active: number;       // opacity 0-1
  dormant: number;      // opacity 0-1
}
