<script lang="ts">
  import { isRunning, parameters } from '../stores/simulationStore';
  import { parameterConfig } from '../simulation/parameters';
  import type { SimulationParameters } from '../types';

  export let onStart: () => void;
  export let onPause: () => void;
  export let onReset: () => void;

  function toggleRunning() {
    if ($isRunning) {
      onPause();
      isRunning.set(false);
    } else {
      onStart();
      isRunning.set(true);
    }
  }

  function handleReset() {
    onReset();
    isRunning.set(false);
  }

  // Helper to get parameter value safely
  function getParamValue(params: SimulationParameters, key: string): number {
    return params[key as keyof SimulationParameters];
  }

  // Handler for parameter changes
  function handleParamChange(key: string, value: number) {
    parameters.update(p => {
      const updated = { ...p };
      (updated as any)[key] = value;
      return updated;
    });
  }
</script>

<div class="control-panel">
  <div class="control-buttons">
    <button on:click={toggleRunning} class="btn-primary">
      {$isRunning ? 'Pause' : 'Start'}
    </button>
    <button on:click={handleReset} class="btn-secondary">Reset</button>
  </div>

  <div class="parameters">
    <h4>Parameters</h4>
    <div class="parameter-grid">
      {#each Object.entries(parameterConfig) as [key, config]}
        <div class="parameter-item">
          <label for={key}>
            <span class="param-label">{config.label}</span>
            <span class="param-value">{getParamValue($parameters, key).toFixed(3)}</span>
          </label>
          <input
            id={key}
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={getParamValue($parameters, key)}
            on:input={(e) => handleParamChange(key, parseFloat(e.currentTarget.value))}
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .control-panel {
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .control-buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }

  .btn-primary {
    background: #2a9d8f;
    color: white;
  }

  .btn-secondary {
    background: #e76f51;
    color: white;
  }

  .parameters h4 {
    margin: 0 0 0.75rem 0;
  }

  .parameter-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    column-gap: 0.5rem;
  }

  .parameter-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  label {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .param-label {
    font-weight: 500;
  }

  .param-value {
    color: #666;
    font-family: monospace;
  }

  input[type="range"] {
    width: 100%;
  }
</style>
