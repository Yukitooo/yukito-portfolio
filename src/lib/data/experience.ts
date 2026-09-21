export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  details: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: 'Mar 2026—Now',
    company: 'NxtGenAI Technology',
    role: 'Junior Software Developer / Quality Assurance',
    details: [
      'Develop application features and resolve minor software bugs.',
      'Perform end-to-end testing, reproduce issues, and document findings.',
      'Investigate issues at code level and write Playwright automation.'
    ]
  },
  {
    period: '2026',
    company: 'Schola De Vita',
    role: 'Freelance Software Developer',
    details: [
      'Designed and developed the SDV Asset Tracker.',
      'Built barcode-based inventory workflows with authentication and a relational database.',
      "Deployed the application on the school's internal local server."
    ]
  },
  {
    period: 'Jun 2025—Jan 2026',
    company: 'Parseto',
    role: 'Junior Software Developer — Part-Time',
    details: [
      'Built small features across web services, including a customer portal.',
      'Worked across frontend, backend, databases, and Backend-as-a-Service.',
      'Applied relational database, functional programming, and clean-code principles.'
    ]
  },
  {
    period: 'Jan—Apr 2025',
    company: 'Flipside AI',
    role: 'Prompt Engineer — Part-Time',
    details: [
      'Refined prompts and evaluated model responses.',
      'Identified incomplete or low-quality outputs and adjusted prompts based on results.'
    ]
  },
  {
    period: 'May—Aug 2024',
    company: 'EssilorLuxottica',
    role: 'Software Development Intern',
    details: [
      'Managed and updated website content using CoreMedia CMS.',
      'Worked in an enterprise web environment and gained experience with React fundamentals.'
    ]
  }
];
