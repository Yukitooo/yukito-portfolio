<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import '../lib/styles/global.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import CommandPalette from '$lib/components/CommandPalette.svelte';

  let { children } = $props();

  onNavigate((navigation) => {
    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Navigation />
{@render children()}
<CommandPalette />
