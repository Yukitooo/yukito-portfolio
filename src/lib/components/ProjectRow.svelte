<script lang="ts">
  import { resolve } from '$app/paths';
  import ProjectPreview from './ProjectPreview.svelte';
  import type { Project } from '$lib/data/projects';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
  let hovering = $state(false);
  let pointerX = $state(0);
  let pointerY = $state(0);
  let cursorX = $state(0);
  let cursorY = $state(0);

  function handleMove(event: PointerEvent) {
    const rect =
      event.currentTarget instanceof HTMLElement
        ? event.currentTarget.getBoundingClientRect()
        : null;
    if (!rect) return;
    pointerX = Math.min(Math.max(event.clientX - rect.left + 18, 0), rect.width - 440);
    pointerY = event.clientY - rect.top - 125;
    cursorX = event.clientX + 12;
    cursorY = event.clientY + 12;
  }
</script>

<article
  class="project-row"
  onpointerenter={() => (hovering = true)}
  onpointerleave={() => (hovering = false)}
  onpointermove={handleMove}
>
  <div class="row-content">
    <div class="number mono">{project.number}</div>
    <div class="main">
      <span class="eyebrow">{project.label}</span>
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
    </div>
    <p class="summary">{project.summary}</p>
    <div class="project-meta">
      <ul aria-label="Technologies">
        {#each project.stack as item (item)}<li>{item}</li>{/each}
      </ul>
      <div class="project-actions">
        <a
          class="view mono"
          href={project.external ? project.href : resolve('/work/sdv-asset-tracker')}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? 'noreferrer' : undefined}
          aria-label={`${project.title}: ${project.linkLabel.toLowerCase()}`}
        >
          {project.linkLabel} <b>↗</b>
        </a>
        {#if project.repository}
          <a
            class="view mono"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title}: view source code`}>Source <b>↗</b></a
          >
        {/if}
      </div>
    </div>

    <span
      class="cursor-label mono"
      class:visible={hovering}
      style={`--cursor-x:${cursorX}px; --cursor-y:${cursorY}px`}
      aria-hidden="true">View ↗</span
    >
  </div>

  <div
    class="floating-preview"
    class:visible={hovering}
    style={`--x:${pointerX}px; --y:${pointerY}px`}
    aria-hidden="true"
  >
    <ProjectPreview {project} />
  </div>
</article>

<style>
  .project-row {
    position: relative;
    isolation: isolate;
    border-top: 1px solid var(--line);
  }

  .project-row:last-child {
    border-bottom: 1px solid var(--line);
  }

  .row-content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 0.35fr 1.65fr 1.25fr 0.8fr;
    gap: clamp(1rem, 3vw, 3rem);
    min-height: 18rem;
    padding: 2rem 1rem 2rem 0;
    transition:
      color 260ms ease,
      background 260ms ease,
      padding 260ms ease;
  }

  .row-content::before {
    position: absolute;
    z-index: -1;
    inset: 0 calc(var(--gutter) * -1);
    background: var(--ink);
    content: '';
    opacity: 0;
    transition: opacity 260ms ease;
  }

  .project-row:hover .row-content {
    color: var(--paper);
  }

  .project-row:hover .row-content::before {
    opacity: 1;
  }

  .number {
    padding-top: 0.3rem;
  }

  .main {
    align-self: start;
  }

  h3 {
    max-width: 10ch;
    margin: 1.5rem 0 0.4rem;
    font-size: clamp(2rem, 4.2vw, 4.8rem);
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -0.055em;
    text-transform: uppercase;
  }

  .main p {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
    transition: color 260ms ease;
  }

  .project-row:hover .main p,
  .project-row:hover .eyebrow {
    color: rgba(244, 244, 240, 0.65);
  }

  .summary {
    align-self: center;
    max-width: 31rem;
    margin: 0;
    font-size: clamp(0.9rem, 1.2vw, 1.05rem);
    line-height: 1.55;
  }

  .project-meta {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
  }

  .project-actions {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    align-items: flex-end;
  }

  .view {
    width: max-content;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'DM Mono', monospace;
    font-size: 0.61rem;
    line-height: 1.65;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .view b {
    display: inline-block;
    transition: transform 180ms ease;
  }

  .view:hover b {
    transform: translate(4px, -3px);
  }

  .floating-preview {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    transform: translate3d(var(--x), var(--y), 0) scale(0.97);
    transition:
      opacity 180ms ease,
      transform 120ms ease;
  }

  .floating-preview.visible {
    opacity: 1;
    transform: translate3d(var(--x), var(--y), 0) scale(1);
  }

  .cursor-label {
    display: none;
  }

  @media (pointer: fine) and (min-width: 1000px) {
    .project-row:hover {
      cursor: none;
    }

    .cursor-label {
      position: fixed;
      z-index: 5;
      top: var(--cursor-y, 0);
      left: var(--cursor-x, 0);
      display: block;
      padding: 0.45rem 0.6rem;
      border-radius: 50%;
      background: var(--paper);
      color: var(--ink);
      opacity: 0;
      pointer-events: none;
    }

    .cursor-label.visible {
      opacity: 1;
    }
  }

  @media (max-width: 999px) {
    .floating-preview {
      display: none;
    }

    .row-content {
      grid-template-columns: 3rem 1.4fr 1fr;
    }

    .summary {
      display: none;
    }
  }

  @media (max-width: 680px) {
    .row-content {
      grid-template-columns: 2rem 1fr;
      min-height: 0;
      padding: 1.75rem 0 2rem;
    }

    .project-meta {
      grid-column: 2;
      align-items: flex-start;
      gap: 2rem;
      text-align: left;
    }

    .project-actions {
      align-items: flex-start;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 0.7rem;
    }

    h3 {
      margin-top: 1rem;
    }
  }
</style>
