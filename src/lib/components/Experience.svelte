<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { experience } from '$lib/data/experience';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="experience" class="section container" aria-labelledby="experience-title" use:reveal>
  <div class="hidden-title" id="experience-title">Experience</div>
  <SectionHeader number="02" title="Experience" meta="2024—Now" />

  <div class="timeline">
    {#each experience as item, index (item.company)}
      <article class="timeline-row" use:reveal={{ delay: Math.min(index * 50, 180) }}>
        <span class="period mono">{item.period}</span>
        <div class="role">
          <h3>{item.company}</h3>
          <p>{item.role}</p>
        </div>
        <ul>
          {#each item.details as detail (detail)}<li>{detail}</li>{/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<style>
  .hidden-title {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip-path: inset(50%);
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 0.55fr 1.2fr 1.2fr;
    gap: clamp(1.5rem, 4vw, 5rem);
    padding: 2.2rem 0 3.5rem;
    border-top: 1px solid var(--line);
  }

  .timeline-row:last-child {
    border-bottom: 1px solid var(--line);
  }

  .period {
    padding-top: 0.4rem;
  }

  h3 {
    margin: 0;
    font-size: clamp(1.55rem, 2.8vw, 3rem);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.045em;
    text-transform: uppercase;
  }

  .role p {
    margin: 0.8rem 0 0;
    color: var(--muted);
    font-size: 0.82rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding: 0 0 0.8rem 1.2rem;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  li::before {
    position: absolute;
    top: 0.65em;
    left: 0;
    width: 0.35rem;
    height: 1px;
    background: currentColor;
    content: '';
  }

  @media (max-width: 760px) {
    .timeline-row {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .role p {
      max-width: 28rem;
    }
  }
</style>
