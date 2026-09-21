<script lang="ts">
  import type { Project } from '$lib/data/projects';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<div class="preview" aria-hidden="true">
  <div class="preview-bar">
    <span>{project.number} / {project.title}</span>
    <span>●</span>
  </div>

  {#if project.preview === 'inventory'}
    <div class="inventory visual">
      <div class="side">
        <b>SDV</b>
        <i></i><i></i><i></i>
      </div>
      <div class="asset-content">
        <span class="tiny">Asset record / 0324</span>
        <div class="barcode"></div>
        <div class="asset-lines"><i></i><i></i><i></i></div>
      </div>
    </div>
  {:else if project.preview === 'planner'}
    <div class="planner visual">
      <span class="tiny">Break down a goal</span>
      <div class="prompt">Launch project by Friday <b>↗</b></div>
      <div class="tasks">
        <span>01</span><i></i><span>02</span><i></i><span>03</span><i></i>
      </div>
    </div>
  {:else}
    <div class="booking visual">
      <div class="landscape"><i></i></div>
      <div class="booking-content">
        <span class="tiny">Travel details</span>
        <div class="date-grid"><i></i><i></i><i></i></div>
        <div class="book-button">Confirm booking</div>
      </div>
    </div>
  {/if}
</div>

<style>
  .preview {
    overflow: hidden;
    width: min(31vw, 27rem);
    aspect-ratio: 1.35;
    border: 1px solid var(--paper);
    background: var(--paper);
    color: var(--ink);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
  }

  .preview-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    padding-inline: 0.75rem;
    border-bottom: 1px solid rgba(10, 10, 10, 0.3);
    font-family: 'DM Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .visual {
    height: calc(100% - 2rem);
  }

  .inventory {
    display: grid;
    grid-template-columns: 25% 1fr;
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 1rem;
    border-right: 1px solid rgba(10, 10, 10, 0.25);
  }

  .side b {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .side i,
  .asset-lines i,
  .tasks i {
    display: block;
    height: 1px;
    background: currentColor;
    opacity: 0.35;
  }

  .asset-content,
  .planner,
  .booking-content {
    padding: 1.2rem;
  }

  .tiny {
    font-family: 'DM Mono', monospace;
    font-size: 0.48rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .barcode {
    width: 78%;
    height: 38%;
    margin: 1.2rem 0;
    background: repeating-linear-gradient(
      90deg,
      var(--ink) 0,
      var(--ink) 2px,
      transparent 2px,
      transparent 5px,
      var(--ink) 5px,
      var(--ink) 6px,
      transparent 6px,
      transparent 9px
    );
  }

  .asset-lines {
    display: grid;
    gap: 0.55rem;
  }

  .asset-lines i:nth-child(2) {
    width: 70%;
  }

  .planner {
    padding-top: 2rem;
  }

  .prompt {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0.75rem;
    border: 1px solid var(--ink);
    font-size: 0.7rem;
  }

  .tasks {
    display: grid;
    grid-template-columns: 1rem 1fr;
    gap: 0.85rem;
    align-items: center;
    margin-top: 1.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.5rem;
  }

  .booking {
    display: grid;
    grid-template-columns: 43% 1fr;
  }

  .landscape {
    position: relative;
    overflow: hidden;
    background: var(--ink);
  }

  .landscape::before,
  .landscape::after,
  .landscape i {
    position: absolute;
    right: -35%;
    bottom: -22%;
    width: 120%;
    aspect-ratio: 1;
    border: 1px solid var(--paper);
    border-radius: 50%;
    content: '';
  }

  .landscape::after {
    right: -55%;
    bottom: -35%;
  }

  .landscape i {
    right: 30%;
    bottom: -70%;
  }

  .booking-content {
    display: flex;
    flex-direction: column;
  }

  .date-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    margin-top: 1.2rem;
  }

  .date-grid i {
    aspect-ratio: 1;
    border: 1px solid rgba(10, 10, 10, 0.35);
  }

  .book-button {
    margin-top: auto;
    padding: 0.5rem;
    background: var(--ink);
    color: var(--paper);
    font-family: 'DM Mono', monospace;
    font-size: 0.45rem;
    text-align: center;
    text-transform: uppercase;
  }
</style>
