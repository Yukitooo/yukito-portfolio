export interface Project {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  summary: string;
  stack: string[];
  href: string;
  repository?: string;
  external?: boolean;
  linkLabel: 'View case study' | 'View project' | 'View repository';
  screenshot: {
    src: string;
    alt: string;
  };
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'sdv-asset-tracker',
    title: 'SDV Asset Tracker',
    subtitle: 'Internal asset management system',
    label: 'Real-world software / Deployed',
    summary:
      'A barcode-based inventory system built for school staff to identify assets and retrieve assignment and inventory details.',
    stack: ['SvelteKit', 'Node.js', 'SQLite', 'Drizzle'],
    href: '/work/sdv-asset-tracker',
    linkLabel: 'View case study',
    screenshot: {
      src: '/work/sdv-asset-inventory.jpg',
      alt: 'SDV Asset Tracker inventory dashboard showing asset totals, filters, and registered school assets'
    }
  },
  {
    number: '02',
    slug: 'ai-powered-todo',
    title: 'AI-Powered To-Do',
    subtitle: 'AI productivity application',
    label: 'AI / Software engineering',
    summary:
      'A planning tool that turns large goals into smaller, actionable tasks through natural-language decomposition.',
    stack: ['SvelteKit', 'TypeScript', 'LangChain', 'Groq'],
    href: 'https://ai-powered-todo-delta.vercel.app/',
    repository: 'https://github.com/Yukitooo/ai_powered_todo',
    external: true,
    linkLabel: 'View project',
    screenshot: {
      src: '/work/ai-powered-todo.jpg',
      alt: 'AI-Powered To-Do interface showing a generated plan for making a banana cake'
    }
  },
  {
    number: '03',
    slug: 'pokemon-personality-quiz',
    title: 'Pokémon Personality Quiz',
    subtitle: 'Interactive personality quiz',
    label: 'React / Interactive application',
    summary:
      'A playful, responsive quiz that evaluates a series of answers and reveals a matching Pokémon personality type, tagline, and traits.',
    stack: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
    href: 'https://yukitooo.github.io/pokemonPersonalityQuiz-/',
    repository: 'https://github.com/Yukitooo/pokemonPersonalityQuiz-',
    external: true,
    linkLabel: 'View project',
    screenshot: {
      src: '/work/pokemon-personality-quiz.jpg',
      alt: 'Pokémon Personality Quiz landing page asking which Pokémon matches the user’s vibe'
    }
  },
  {
    number: '04',
    slug: 'sdv-website',
    title: 'Schola De Vita Website',
    subtitle: 'School website concept',
    label: 'Website concept / Unpublished prototype',
    summary:
      'A front-end website concept for Schola De Vita, presenting the school, academics, admissions, school life, and campus information in a structured layout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Yukitooo/SDV_Website',
    external: true,
    linkLabel: 'View repository',
    screenshot: {
      src: '/work/sdv-website.jpg',
      alt: 'Schola De Vita website concept with school navigation, introductory copy, and a campus photograph'
    }
  },
  {
    number: '05',
    slug: 'fitpad-website',
    title: 'Fitpad Website',
    subtitle: 'Fitness website concept',
    label: 'Website concept / Unpublished prototype',
    summary:
      'A bold front-end concept for a fitness brand, organizing its training, classes, facilities, and community positioning into a focused landing page.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Yukitooo/Fitpad-Website',
    external: true,
    linkLabel: 'View repository',
    screenshot: {
      src: '/work/fitpad-website.jpg',
      alt: 'Fitpad fitness website concept with bold campaign typography and a photograph of the gym location'
    }
  }
];
