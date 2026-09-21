<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import SectionHeader from './SectionHeader.svelte';

  const groups = [
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Scala', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks / Libraries',
      items: ['Svelte', 'SvelteKit', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Playwright']
    },
    {
      title: 'Data / Backend',
      items: ['SQLite', 'PostgreSQL', 'PocketBase', 'Drizzle ORM', 'REST APIs', 'BaaS']
    },
    {
      title: 'AI',
      items: ['LangChain', 'Groq', 'Prompt Engineering', 'LLM Evaluation']
    },
    {
      title: 'Tools / Practices',
      items: [
        'Git',
        'GitHub',
        'Vite',
        'CoreMedia CMS',
        'End-to-End Testing',
        'Test Automation',
        'Debugging',
        'Functional Programming',
        'Clean Code'
      ]
    }
  ];
</script>

<section class="section container tech" aria-labelledby="tech-title" use:reveal>
  <div class="hidden-title" id="tech-title">Technologies</div>
  <SectionHeader number="04" title="Technologies" meta="Working set" />
  <div class="tech-grid">
    {#each groups as group, index (group.title)}
      <article class:wide={index === groups.length - 1}>
        <h3 class="mono">{group.title}</h3>
        <ul>
          {#each group.items as item (item)}<li>{item}</li>{/each}
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

  .tech {
    padding-top: 0;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  article {
    min-height: 23rem;
    padding: 1.5rem;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  article.wide {
    grid-column: span 4;
    min-height: auto;
  }

  h3 {
    margin: 0 0 4rem;
    color: var(--muted);
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-size: clamp(1.05rem, 1.7vw, 1.5rem);
    letter-spacing: -0.03em;
  }

  .wide ul {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.4rem 2rem;
  }

  @media (max-width: 860px) {
    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    article.wide {
      grid-column: span 2;
    }
  }

  @media (max-width: 520px) {
    .tech-grid {
      grid-template-columns: 1fr;
    }

    article,
    article.wide {
      grid-column: span 1;
      min-height: auto;
    }

    h3 {
      margin-bottom: 2.5rem;
    }

    .wide ul {
      flex-direction: column;
      gap: 0.15rem;
    }
  }
</style>
