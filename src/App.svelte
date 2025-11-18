<script lang="ts">
  import SimulationCanvas from './components/SimulationCanvas.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import LayerControls from './components/LayerControls.svelte';
  import InfoPanel from './components/InfoPanel.svelte';
  import 'katex/dist/katex.min.css';

  let canvas: SimulationCanvas;

  function handleStart() {
    canvas?.start();
  }

  function handlePause() {
    canvas?.pause();
  }

  function handleReset() {
    canvas?.reset();
  }
</script>

<main>
  <div class="app-container">
    <header>
      <h1>Geobacter Simulation</h1>
      <p class="subtitle">Simulate iron reduction patterns from bacteria chemosynthesis</p>
    </header>

    <div class="main-content">
      <div class="visualization-area">
        <div class="canvas-with-layers">
          <LayerControls />
          <SimulationCanvas bind:this={canvas} />
        </div>
      </div>

      <div class="controls-area">
        <ControlPanel
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
      </div>
    </div>

    <InfoPanel />
  </div>
</main>

<style>
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
  }

  .subtitle {
    margin: 0.5rem 0 0 0;
    color: #666;
    font-size: 0.9rem;
  }

  .main-content {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
  }

  .visualization-area {
    width: 672px; /* 160px layer controls + 512px canvas */
    flex-shrink: 0;
  }

  .canvas-with-layers {
    display: flex;
    gap: 0;
    align-items: flex-start;
  }

  .controls-area {
    flex: 1; /* Fill remaining space */
    min-width: 0; /* Allow flex item to shrink below content size */
  }

  @media (max-width: 1024px) {
    .main-content {
      flex-direction: column;
    }

    .controls-area {
      width: 100%;
    }
  }
</style>
