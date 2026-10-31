<script lang="ts">
  import katex from 'katex';

  let { math, displayMode = false }: { math: string; displayMode?: boolean } = $props();

  const html = $derived(katex.renderToString(math, { displayMode }));
</script>

{@html html}
