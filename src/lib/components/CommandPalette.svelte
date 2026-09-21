<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { onMount } from 'svelte';

  let open = $state(false);
  let query = $state('');
  let selected = $state(0);
  let input = $state<HTMLInputElement>();

  const commands = [
    { label: 'Selected work', hint: '01', action: () => navigate('/#work') },
    { label: 'Experience', hint: '02', action: () => navigate('/#experience') },
    { label: 'About', hint: '03', action: () => navigate('/#about') },
    {
      label: 'Send email',
      hint: 'E',
      action: () => (window.location.href = 'mailto:yukibrent9@gmail.com')
    },
    { label: 'GitHub', hint: '↗', action: () => openExternal('https://github.com/Yukitooo') },
    {
      label: 'LinkedIn',
      hint: '↗',
      action: () => openExternal('https://www.linkedin.com/in/zachary-mayuga/')
    }
  ];

  let filtered = $derived(
    commands.filter((command) => command.label.toLowerCase().includes(query.trim().toLowerCase()))
  );

  function setOpen(next: boolean) {
    open = next;
    document.body.classList.toggle('palette-open', next);
    if (next) {
      query = '';
      selected = 0;
      requestAnimationFrame(() => input?.focus());
    }
  }

  function navigate(href: '/#work' | '/#experience' | '/#about') {
    setOpen(false);
    void goto(resolve(href));
  }

  function openExternal(href: string) {
    setOpen(false);
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  function run(action: () => void) {
    action();
  }

  onMount(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === 'Escape' && open) setOpen(false);
      if (event.key === 'ArrowDown' && open) {
        event.preventDefault();
        if (filtered.length) selected = (selected + 1) % filtered.length;
      }
      if (event.key === 'ArrowUp' && open) {
        event.preventDefault();
        if (filtered.length) selected = (selected - 1 + filtered.length) % filtered.length;
      }
      if (event.key === 'Enter' && open && filtered[selected]) run(filtered[selected].action);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('palette-open');
    };
  });
</script>

<button
  class="palette-trigger mono"
  type="button"
  onclick={() => setOpen(true)}
  aria-label="Open command menu"
>
  <span>Quick nav</span><kbd>⌘ K</kbd>
</button>

{#if open}
  <div
    class="backdrop"
    role="presentation"
    onclick={(event) => event.target === event.currentTarget && setOpen(false)}
  >
    <div class="palette" role="dialog" aria-modal="true" aria-label="Quick navigation">
      <div class="search">
        <span aria-hidden="true">⌕</span>
        <input
          bind:this={input}
          bind:value={query}
          placeholder="Navigate to…"
          aria-label="Search commands"
        />
        <kbd>ESC</kbd>
      </div>
      <div class="results">
        <p class="mono">Navigation</p>
        {#each filtered as command, index (command.label)}
          <button
            type="button"
            class:active={index === selected}
            onpointerenter={() => (selected = index)}
            onclick={() => run(command.action)}
          >
            <span>{command.label}</span>
            <span class="mono">{command.hint}</span>
          </button>
        {:else}
          <p class="empty">No matching command.</p>
        {/each}
      </div>
      <div class="palette-footer mono"><span>↑↓ Move</span><span>↵ Select</span></div>
    </div>
  </div>
{/if}

<style>
  .palette-trigger {
    position: fixed;
    z-index: 50;
    right: 1.25rem;
    bottom: 1.25rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--line);
    color: var(--ink);
    background: var(--paper);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  kbd {
    font-family: 'DM Mono', monospace;
    font-size: 0.58rem;
  }

  .backdrop {
    position: fixed;
    z-index: 500;
    inset: 0;
    display: grid;
    place-items: start center;
    padding: 15vh 1rem 1rem;
    background: rgba(10, 10, 10, 0.64);
    backdrop-filter: blur(4px);
    animation: fade 150ms ease both;
  }

  .palette {
    overflow: hidden;
    width: min(100%, 36rem);
    border: 1px solid var(--ink);
    background: var(--paper);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
    animation: enter 220ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .search {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.8rem;
    align-items: center;
    min-height: 4rem;
    padding-inline: 1rem;
    border-bottom: 1px solid var(--line);
  }

  input {
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 1rem;
  }

  .results {
    padding: 0.8rem;
  }

  .results > p:first-child {
    margin: 0.3rem 0.4rem 0.7rem;
    color: var(--muted);
  }

  .results button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.8rem;
    border: 0;
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }

  .results button:hover,
  .results button.active {
    color: var(--paper);
    background: var(--ink);
  }

  .empty {
    padding: 1rem 0.4rem;
    color: var(--muted);
  }

  .palette-footer {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.98);
    }
  }

  @media (max-width: 620px) {
    .palette-trigger span {
      display: none;
    }

    .backdrop {
      padding-top: 8vh;
    }
  }
</style>
