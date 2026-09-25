<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Project } from '$lib/data/projects';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<article class="project-row">
  <div class="row-content">
    <header class="row-header">
      <span class="number mono">{project.number}</span>
      <span class="eyebrow">{project.label}</span>
      <ul aria-label="Technologies">
        {#each project.stack as item (item)}<li>{item}</li>{/each}
      </ul>
    </header>

    <div class="project-body">
      <div class="project-copy">
        <div>
          <h3>{project.title}</h3>
          <p class="subtitle">{project.subtitle}</p>
        </div>

        <p class="summary">{project.summary}</p>

        <div class="project-actions">
          <a
            class="view primary-link mono"
            href={project.external ? project.href : resolve('/work/sdv-asset-tracker')}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noreferrer' : undefined}
            aria-label={`${project.title}: ${project.linkLabel.toLowerCase()}`}
          >
            {project.linkLabel} <b>↗</b>
          </a>
          {#if project.repository}
            <a
              class="view source-link mono"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title}: view source code`}>Source <b>↗</b></a
            >
          {/if}
        </div>
      </div>

      <figure>
        <div class="image-frame">
          <img
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            loading={project.number === '01' ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <figcaption class="mono">
          <span>Project view / {project.number}</span>
          <span>
            {project.label.includes('Unpublished')
              ? 'Unpublished prototype'
              : project.external
                ? 'External project'
                : 'Case study available'}
          </span>
        </figcaption>
      </figure>
    </div>
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
    padding: 1.25rem 0 clamp(3rem, 7vw, 7rem);
    transition: color 260ms ease;
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

  .row-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: clamp(1rem, 3vw, 3rem);
    align-items: start;
    min-height: 4.5rem;
  }

  .number {
    padding-top: 0.1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem 1rem;
    justify-content: flex-end;
    max-width: 28rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .project-body {
    display: grid;
    grid-template-columns: minmax(15rem, 0.65fr) minmax(0, 1.45fr);
    gap: clamp(2rem, 5vw, 6rem);
    align-items: stretch;
  }

  .project-copy {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }

  h3 {
    max-width: 10ch;
    margin: 0 0 0.65rem;
    font-size: clamp(2.4rem, 4.7vw, 5.3rem);
    font-weight: 500;
    line-height: 0.92;
    letter-spacing: -0.06em;
    text-transform: uppercase;
  }

  .subtitle {
    margin: 0;
    color: var(--muted);
    font-size: 0.88rem;
    transition: color 260ms ease;
  }

  .summary {
    max-width: 31rem;
    margin: clamp(2rem, 5vw, 5rem) 0;
    font-size: clamp(0.9rem, 1.2vw, 1.05rem);
    line-height: 1.6;
  }

  .project-row:hover .subtitle,
  .project-row:hover .eyebrow {
    color: rgba(244, 244, 240, 0.65);
  }

  .project-actions {
    display: flex;
    gap: 0.6rem 1.5rem;
    flex-wrap: wrap;
  }

  .view {
    width: max-content;
  }

  .primary-link::before {
    position: absolute;
    z-index: 1;
    inset: 0;
    content: '';
  }

  .primary-link:focus-visible::before {
    outline: 2px solid currentColor;
    outline-offset: -5px;
  }

  .source-link {
    position: relative;
    z-index: 2;
  }

  .view b {
    display: inline-block;
    transition: transform 180ms ease;
  }

  .view:hover b {
    transform: translate(4px, -3px);
  }

  figure {
    min-width: 0;
    margin: 0;
  }

  .image-frame {
    overflow: hidden;
    aspect-ratio: 1.98;
    border: 1px solid var(--line);
    background: #deded9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-row:hover img {
    transform: scale(1.018);
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 0.65rem;
    color: var(--muted);
    transition: color 260ms ease;
  }

  .project-row:hover figcaption {
    color: rgba(244, 244, 240, 0.55);
  }

  @media (max-width: 900px) {
    .project-body {
      grid-template-columns: 1fr;
    }

    .project-copy {
      min-height: auto;
    }

    .summary {
      margin-block: 1.5rem 2rem;
    }

    .image-frame {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 680px) {
    .row-content {
      padding-bottom: 4rem;
    }

    .row-header {
      grid-template-columns: 2rem 1fr;
      min-height: 5.5rem;
    }

    .row-header ul {
      grid-column: 1 / -1;
      justify-content: flex-start;
      margin-top: 0.5rem;
    }

    h3 {
      font-size: clamp(2.35rem, 13vw, 4rem);
    }

    .image-frame {
      aspect-ratio: 1.45;
    }

    figcaption span:last-child {
      display: none;
    }
  }
</style>
