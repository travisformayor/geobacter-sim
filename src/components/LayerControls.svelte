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

  function previewLayer(event: PointerEvent, layer: LayerKey) {
    if (event.pointerType !== 'touch') updateVisibility(layer);
  }

  // Initialize visibility based on toggles
  updateVisibility();
</script>

<section class="layer-controls" aria-label="Layers" on:mouseleave={() => updateVisibility()}>
  <h4>Layers</h4>
  <ul class="layer-list">
    <li>
      <button type="button" class="layer-row" title="Toggle visibility" on:click={() => toggleLayer('fe3')} on:pointerenter={(e) => previewLayer(e, 'fe3')}>
        <img class="eye" src={$layerToggles.fe3 ? eyeOpen : eyeClosed} alt="toggle" />
        <span class="layer-color fe3"></span>
        <span class:hidden={!$layerToggles.fe3}>Fe3</span>
      </button>
    </li>

    <li>
      <button type="button" class="layer-row" title="Toggle visibility" on:click={() => toggleLayer('fe2')} on:pointerenter={(e) => previewLayer(e, 'fe2')}>
        <img class="eye" src={$layerToggles.fe2 ? eyeOpen : eyeClosed} alt="toggle" />
        <span class="layer-color fe2"></span>
        <span class:hidden={!$layerToggles.fe2}>Fe2</span>
      </button>
    </li>

    <li>
      <button type="button" class="layer-row" title="Toggle visibility" on:click={() => toggleLayer('active')} on:pointerenter={(e) => previewLayer(e, 'active')}>
        <img class="eye" src={$layerToggles.active ? eyeOpen : eyeClosed} alt="toggle" />
        <span class="layer-color active"></span>
        <span class:hidden={!$layerToggles.active}>Active</span>
      </button>
    </li>

    <li>
      <button type="button" class="layer-row" title="Toggle visibility" on:click={() => toggleLayer('dormant')} on:pointerenter={(e) => previewLayer(e, 'dormant')}>
        <img class="eye" src={$layerToggles.dormant ? eyeOpen : eyeClosed} alt="toggle" />
        <span class="layer-color dormant"></span>
        <span class:hidden={!$layerToggles.dormant}>Dormant</span>
      </button>
    </li>
  </ul>
</section>

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
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .layer-row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: 100%;
    padding: 0.4rem;
    border: none;
    border-radius: 4px;
    background: none;
    color: inherit;
    font: inherit;
    font-size: 1.02rem;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s;
  }

  .eye {
    width: 18px;
    height: 18px;
    display: block;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  @media (hover: hover) {
    .layer-row:hover {
      background: #e8e8e8;
    }

    .layer-row:hover .eye {
      opacity: 1;
    }
  }

  .layer-row .hidden {
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
