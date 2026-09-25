<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { projects } from '$lib/data/projects';
  import ProjectRow from './ProjectRow.svelte';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="work" class="section container" aria-labelledby="selected-work" use:reveal>
  <div class="visually-hidden" id="selected-work">Selected Work</div>
  <SectionHeader number="01" title="My Personal Work" meta="01—05" />
  <div class="projects">
    {#each projects as project (project.slug)}
      <ProjectRow {project} />
    {/each}
  </div>
</section>

<style>
  .visually-hidden {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }
</style>
