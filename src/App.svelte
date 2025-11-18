<script lang="ts">
  let count = 0;
</script>

<main>
  <h1>Geobacter Simulator</h1>
  <button on:click={() => count++}>
    Count: {count}
  </button>
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    color: #ff3e00;
    font-size: 3rem;
    font-weight: 100;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ff3e00;
    border-radius: 4px;
    background: white;
    cursor: pointer;
  }

  button:hover {
    background: #ff3e00;
    color: white;
  }
</style>
