<script lang="ts">
  import { resolve } from '$app/paths';
  import { onDestroy } from 'svelte';

  let menuOpen = $state(false);
  const links = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' }
  ] as const;

  function setMenu(open: boolean) {
    menuOpen = open;
    document.body.classList.toggle('menu-open', open);
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') document.body.classList.remove('menu-open');
  });
</script>

<a class="skip-link" href="#main-content">Skip to content</a>
<header class="navigation" class:open={menuOpen}>
  <a class="wordmark" href={resolve('/')} aria-label="Zachary Brent Mayuga, home">
    <span>Zachary Brent</span>
    <span>Mayuga</span>
  </a>

  <nav aria-label="Primary navigation">
    {#each links as link (link.href)}
      <a href={resolve(link.href)} onclick={() => setMenu(false)}>{link.label}</a>
    {/each}
    <a href="https://github.com/Yukitooo" target="_blank" rel="noreferrer">
      GitHub <span aria-hidden="true">↗</span>
    </a>
  </nav>

  <button
    class="menu-button mono"
    type="button"
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={menuOpen}
    onclick={() => setMenu(!menuOpen)}
  >
    {menuOpen ? 'Close' : 'Menu'}
  </button>
</header>

<style>
  .navigation {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    min-height: 5rem;
    padding: 0 var(--gutter);
    border-bottom: 1px solid var(--line);
    background: color-mix(in srgb, var(--paper) 92%, transparent);
    backdrop-filter: blur(12px);
  }

  .wordmark {
    display: flex;
    gap: 0.35em;
    width: max-content;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.055em;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    gap: clamp(1.5rem, 3vw, 3rem);
    align-items: center;
  }

  nav a {
    position: relative;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  nav a::after {
    position: absolute;
    right: 0;
    bottom: -0.4rem;
    left: 0;
    height: 1px;
    background: currentColor;
    content: '';
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease;
  }

  nav a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .menu-button {
    display: none;
    padding: 0.5rem 0;
    border: 0;
    color: inherit;
    background: transparent;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    .navigation {
      min-height: 4.5rem;
    }

    .wordmark {
      flex-direction: column;
      gap: 0;
      line-height: 1.15;
    }

    .menu-button {
      display: block;
    }

    nav {
      position: fixed;
      inset: 4.5rem 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 0;
      padding: var(--gutter);
      padding-bottom: 3rem;
      visibility: hidden;
      background: var(--ink);
      color: var(--paper);
      opacity: 0;
      transform: translateY(-1rem);
      transition:
        opacity 250ms ease,
        transform 250ms ease,
        visibility 250ms;
    }

    nav a {
      width: 100%;
      padding-block: 0.5rem;
      font-family: 'Manrope', sans-serif;
      font-size: clamp(2.3rem, 12vw, 4rem);
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.05em;
      text-transform: uppercase;
    }

    .open nav {
      visibility: visible;
      opacity: 1;
      transform: none;
    }

    .open {
      color: var(--paper);
      border-color: rgba(244, 244, 240, 0.25);
      background: var(--ink);
    }
  }
</style>
