// Simulation parameters matching our ODEs
export interface SimulationParameters {
  // Mathematical rates
  r_r: number;          // reproduction rate
  r_d: number;          // death rate
  r_c: number;          // Fe3 consumption rate
  r_w: number;          // Fe2 production rate
  alpha_ad: number;     // max Active->Dormant rate
  alpha_da: number;     // max Dormant->Active rate

  // Spatial parameters
  timeStep: number;
  randomWalkActive: number;
  randomWalkDormant: number;
  biasStrength: number;
  fe2DiffusionAmount: number;

  // Initial conditions
  fe3Scale: number;
  fe3Variation: number;
}

// Layer visibility for display shader
export interface LayerVisibility {
  fe3: number;          // opacity 0-1
  fe2: number;          // opacity 0-1
  active: number;       // opacity 0-1
  dormant: number;      // opacity 0-1
}
