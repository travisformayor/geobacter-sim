<script lang="ts">
  import { layerVisibility, layerToggles } from '../stores/simulationStore';
  import eyeOpen from '../assets/eye-open.svg';
  import eyeClosed from '../assets/eye-closed.svg';

  type LayerKey = 'fe3' | 'fe2' | 'active' | 'dormant';

  function toggleLayer(layer: LayerKey) {
    layerToggles.update(t => ({ ...t, [layer]: !t[layer] }));
    updateVisibility();
  }

  function updateVisibility(hoveredLayer?: LayerKey) {
    const toggles = $layerToggles;

    if (hoveredLayer) {
      // On hover: show hovered layer, dim others
      layerVisibility.set({
        fe3: hoveredLayer === 'fe3' ? 1.0 : 0.2,
        fe2: hoveredLayer === 'fe2' ? 1.0 : 0.2,
        active: hoveredLayer === 'active' ? 1.0 : 0.2,
        dormant: hoveredLayer === 'dormant' ? 1.0 : 0.2
      });
    } else {
      // No hover: use base toggle states
      layerVisibility.set({
        fe3: toggles.fe3 ? 1.0 : 0,
        fe2: toggles.fe2 ? 1.0 : 0,
        active: toggles.active ? 1.0 : 0,
        dormant: toggles.dormant ? 1.0 : 0
      });
    }
  }

  // Initialize visibility based on toggles
  updateVisibility();
</script>

<div class="layer-controls" on:mouseleave={() => updateVisibility()}>
  <h4>Layers</h4>
  <div class="layer-list">
    <div class="layer-row">
      <button class="eye-btn" on:click={() => toggleLayer('fe3')} title="Toggle visibility">
        <img src={$layerToggles.fe3 ? eyeOpen : eyeClosed} alt="toggle" />
      </button>
      <div class="layer-item" on:mouseenter={() => updateVisibility('fe3')}>
        <span class="layer-color fe3"></span>
        <span class:hidden={!$layerToggles.fe3}>Fe3</span>
      </div>
    </div>

    <div class="layer-row">
      <button class="eye-btn" on:click={() => toggleLayer('fe2')} title="Toggle visibility">
        <img src={$layerToggles.fe2 ? eyeOpen : eyeClosed} alt="toggle" />
      </button>
      <div class="layer-item" on:mouseenter={() => updateVisibility('fe2')}>
        <span class="layer-color fe2"></span>
        <span class:hidden={!$layerToggles.fe2}>Fe2</span>
      </div>
    </div>

    <div class="layer-row">
      <button class="eye-btn" on:click={() => toggleLayer('active')} title="Toggle visibility">
        <img src={$layerToggles.active ? eyeOpen : eyeClosed} alt="toggle" />
      </button>
      <div class="layer-item" on:mouseenter={() => updateVisibility('active')}>
        <span class="layer-color active"></span>
        <span class:hidden={!$layerToggles.active}>Active</span>
      </div>
    </div>

    <div class="layer-row">
      <button class="eye-btn" on:click={() => toggleLayer('dormant')} title="Toggle visibility">
        <img src={$layerToggles.dormant ? eyeOpen : eyeClosed} alt="toggle" />
      </button>
      <div class="layer-item" on:mouseenter={() => updateVisibility('dormant')}>
        <span class="layer-color dormant"></span>
        <span class:hidden={!$layerToggles.dormant}>Dormant</span>
      </div>
    </div>
  </div>
</div>

<style>
  .layer-controls {
    padding: 0.75rem;
    background: #f5f5f5;
    border-radius: 4px 0 0 4px;
    width: 160px;
    flex-shrink: 0;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
  }

  .layer-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .layer-row {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .eye-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
  }

  .eye-btn:hover {
    opacity: 1;
  }

  .eye-btn img {
    width: 18px;
    height: 18px;
    display: block;
  }

  .layer-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    font-size: 1.02rem;
    flex: 1;
  }

  .layer-item:hover {
    background: #e8e8e8;
  }

  .layer-item .hidden {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .layer-color {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #ccc;
    flex-shrink: 0;
  }

  .layer-color.fe3 {
    background: rgb(140, 64, 38);
  }

  .layer-color.fe2 {
    background: rgb(230, 230, 51);
  }

  .layer-color.active {
    background: rgb(51, 204, 77);
  }

  .layer-color.dormant {
    background: rgb(77, 127, 178);
  }
</style>
