<script lang="ts">
  import { env } from '$env/dynamic/public';
  import About from '$lib/components/About.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectIndex from '$lib/components/ProjectIndex.svelte';
  import TechStack from '$lib/components/TechStack.svelte';

  const title = 'Zachary Brent Mayuga — Software Developer';
  const description =
    'Software Developer based in the Philippines working across application development, QA, automation, AI, and full-stack software.';
  const siteUrl = env.PUBLIC_SITE_URL || '';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="Zachary Brent Mayuga" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`${siteUrl}/`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${siteUrl}/`} />
  <meta property="og:site_name" content="Zachary Brent Mayuga" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>

<main id="main-content">
  <Hero />
  <ProjectIndex />
  <Experience />
  <About />
  <TechStack />
</main>
<Contact />
