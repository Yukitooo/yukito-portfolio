<script lang="ts">
  interface Props {
    number: string;
    title: string;
    meta?: string;
  }

  let { number, title, meta = '' }: Props = $props();
</script>

<header class="section-header">
  <div class="section-title">
    <span class="mono">{number}</span>
    <h2>{title}</h2>
  </div>
  {#if meta}<span class="mono meta">{meta}</span>{/if}
</header>

<style>
  .section-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 0 2rem;
    border-top: 1px solid var(--ink);
  }

  .section-title {
    display: flex;
    gap: clamp(2rem, 5vw, 6rem);
    align-items: baseline;
  }

  h2 {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .meta {
    color: var(--muted);
  }

  @media (max-width: 540px) {
    .section-header {
      padding-bottom: 1.5rem;
    }

    .section-title {
      gap: 1.5rem;
    }
  }
</style>
