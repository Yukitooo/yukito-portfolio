<script lang="ts">
  import { magnetic, reveal } from '$lib/actions/reveal';
</script>

<section class="hero container" aria-labelledby="hero-title">
  <div class="hero-top" use:reveal>
    <div class="identity mono">
      <span>Zachary Brent Mayuga</span>
      <span>Software Developer</span>
    </div>
    <p class="intro">
      Working across product development, QA, automation, AI, and full-stack applications.
    </p>
  </div>

  <div class="hero-title-wrap" use:reveal={{ delay: 80 }}>
    <h1 id="hero-title" class="display">
      I build software<br />
      <span>for real problems.</span>
    </h1>
  </div>

  <div class="hero-bottom" use:reveal={{ delay: 160 }}>
    <div class="status mono">
      <span>Las Piñas, Philippines</span>
      <span class="availability"><i></i> Available / Software Developer</span>
    </div>
    <div class="actions">
      <a href="#work" class="hero-action" use:magnetic>View my work <span>↓</span></a>
      <a
        href="https://github.com/Yukitooo"
        target="_blank"
        rel="noreferrer"
        class="hero-action"
        use:magnetic
      >
        GitHub <span class="arrow">↗</span>
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100svh;
    padding-top: 8rem;
    padding-bottom: 2rem;
  }

  .hero-top {
    display: grid;
    grid-template-columns: 1fr minmax(18rem, 0.56fr);
    gap: 3rem;
  }

  .identity,
  .status {
    display: flex;
    gap: clamp(2rem, 6vw, 7rem);
  }

  .intro {
    max-width: 34rem;
    margin: 0;
    font-size: clamp(1rem, 1.6vw, 1.35rem);
    line-height: 1.45;
    letter-spacing: -0.02em;
  }

  .hero-title-wrap {
    padding-block: clamp(4rem, 8vh, 8rem);
  }

  h1 {
    margin: 0;
  }

  h1 span {
    display: inline-block;
  }

  .hero-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--ink);
  }

  .status {
    flex-wrap: wrap;
    color: var(--muted);
  }

  .availability {
    display: inline-flex;
    gap: 0.65rem;
    align-items: center;
  }

  .availability i {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--ink);
    animation: pulse 2.2s ease-in-out infinite;
  }

  .actions {
    display: flex;
    gap: 0.75rem;
  }

  .hero-action {
    display: inline-flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
    min-width: 10.5rem;
    padding: 0.8rem 1rem;
    border: 1px solid var(--ink);
    font-family: 'DM Mono', monospace;
    font-size: 0.67rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition:
      color 180ms ease,
      background 180ms ease,
      transform 160ms ease;
  }

  .hero-action:hover {
    color: var(--paper);
    background: var(--ink);
  }

  @keyframes pulse {
    50% {
      opacity: 0.25;
    }
  }

  @media (max-width: 840px) {
    .hero-top {
      grid-template-columns: 1fr;
    }

    .intro {
      max-width: 26rem;
    }

    .hero-bottom {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .hero {
      min-height: 100svh;
      padding-top: 6.5rem;
      padding-bottom: 1.25rem;
    }

    .identity,
    .status {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.3rem;
    }

    .hero-title-wrap {
      padding-block: 4.5rem;
    }

    .actions {
      width: 100%;
    }

    .hero-action {
      flex: 1;
      min-width: 0;
    }
  }
</style>
