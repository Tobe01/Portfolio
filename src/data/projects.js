const projects = [
  {
    id: 'commerce-replatform',
    name: 'Commerce Replatform',
    tagline: 'Headless storefront migration for a global retail team.',
    longDescription:
      'A frontend platform migration built to support product discovery, storefront flexibility, and faster release cycles across regional teams. The experience was designed around predictable rendering, stable data flows, and resilient UI patterns that keep performance and usability consistent as complexity grows.',
    description:
      'A full migration from legacy templates to a React-based storefront with SSR and component-level caching. The release reduced content deployment lead time and improved product discoverability.',
    involvement:
      'Led frontend architecture, established performance budgets, designed reusable product modules, and coordinated rollout across three regional teams.',
    stack: ['React', 'JavaScript', 'React Router', 'Node.js', 'Cypress'],
    challenges: [
      'Migrating legacy templates while preserving SEO parity.',
      'Preventing layout shifts on highly dynamic product pages.',
      'Coordinating release sequencing across multiple markets.',
    ],
    links: {
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    coverImage: '/images/project-1.svg',
    images: ['/images/shot-1.svg', '/images/shot-2.svg', '/images/shot-3.svg'],
    featured: true,
  },
  {
    id: 'design-system-platform',
    name: 'Design System Platform',
    tagline: 'Monorepo component library for product consistency at scale.',
    longDescription:
      'A shared component platform that standardized UI behavior, accessibility, and styling decisions across multiple product surfaces. Built with maintainable APIs and governance workflows, it enabled teams to ship features faster while preserving consistency and reducing duplicate implementation effort.',
    description:
      'Built a cross-product component platform with token-driven styling, documentation, and release governance. Adoption improved visual and interaction consistency across five product lines.',
    involvement:
      'Owned API design for core components, implemented accessibility standards, and set up automated visual regression checks in CI.',
    stack: ['React', 'TypeScript', 'Storybook', 'Vitest', 'pnpm Workspaces'],
    challenges: [
      'Balancing backward compatibility with API modernization.',
      'Maintaining design consistency across independently deployed apps.',
      'Reducing component bundle overhead for consuming teams.',
    ],
    links: {
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    coverImage: '/images/project-2.svg',
    images: ['/images/shot-2.svg', '/images/shot-4.svg', '/images/shot-5.svg'],
    featured: true,
  },
  {
    id: 'analytics-workbench',
    name: 'Analytics Workbench',
    tagline: 'Operational dashboards for product and growth teams.',
    longDescription:
      'An analytics interface designed to make large datasets readable, actionable, and responsive across devices. The implementation prioritized fast interactions, clear data mapping, and robust loading and fallback states so teams could trust the dashboard even as reporting needs expanded.',
    description:
      'Developed a data visualization surface for marketing and product analytics with dynamic filters, export flows, and role-aware views.',
    involvement:
      'Implemented dashboard rendering strategy, optimized chart updates with memoization, and introduced instrumentation for frontend reliability metrics.',
    stack: ['React', 'Recharts', 'CSS', 'React Query', 'Jest'],
    challenges: [
      'Rendering large datasets smoothly on lower-end devices.',
      'Designing a responsive dashboard experience for tablet users.',
      'Handling partial backend outages with graceful client fallbacks.',
    ],
    links: {
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    coverImage: '/images/project-3.svg',
    images: ['/images/shot-3.svg', '/images/shot-4.svg', '/images/shot-6.svg'],
    featured: false,
  },
  {
    id: 'identity-onboarding',
    name: 'Identity Onboarding',
    tagline: 'Secure onboarding funnel with strong accessibility standards.',
    longDescription:
      'A secure onboarding flow that balances compliance requirements with a smooth user journey across multi-step verification. The frontend was structured for clarity and scalability, with careful focus on form reliability, accessibility support, and UX consistency as onboarding logic evolved.',
    description:
      'Created an onboarding flow with progressive disclosure, document upload, and compliance checkpoints. The redesign improved completion rate and reduced support escalations.',
    involvement:
      'Led frontend implementation, partnered with security and legal teams, and set accessibility acceptance criteria for all onboarding interactions.',
    stack: ['React', 'JavaScript', 'Formik', 'Cypress', 'OpenAPI'],
    challenges: [
      'Supporting multiple verification outcomes without user confusion.',
      'Ensuring keyboard and screen reader compatibility for complex forms.',
      'Maintaining strict validation while preserving completion rates.',
    ],
    links: {
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/example',
    },
    coverImage: '/images/project-4.svg',
    images: ['/images/shot-1.svg', '/images/shot-5.svg', '/images/shot-6.svg'],
    featured: false,
  },
]

export default projects
