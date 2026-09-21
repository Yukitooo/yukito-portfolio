export interface Project {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  summary: string;
  stack: string[];
  href: string;
  external?: boolean;
  linkLabel: 'View case study' | 'View project' | 'View repository';
  preview: 'inventory' | 'planner' | 'booking';
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
    preview: 'inventory'
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
    external: true,
    linkLabel: 'View project',
    preview: 'planner'
  },
  {
    number: '03',
    slug: 'wonderrush-tours',
    title: 'WonderRush Tours',
    subtitle: 'Tour booking platform',
    label: 'Full-stack application',
    summary:
      'A typed tour booking workflow covering customer information, travel dates, package selection, and persistent data.',
    stack: ['React', 'TypeScript', 'Vite', 'PocketBase'],
    href: 'https://github.com/Yukitooo/WonderRush-Tours',
    external: true,
    linkLabel: 'View repository',
    preview: 'booking'
  }
];
