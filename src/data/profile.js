const profile = {
  name: 'Avery Morgan',
  role: 'Senior Frontend Engineer',
  hero: {
    eyebrow: 'Senior Frontend Portfolio',
    headline: 'Avery Morgan',
    title: 'Building resilient interfaces for real products',
    valueStatement:
      'I lead frontend architecture, accessibility, and performance for high-traffic products. My focus is clean systems, measurable outcomes, and delivery velocity.',
    primaryCta: {
      label: 'View Projects',
      to: '/projects',
    },
    secondaryCta: {
      label: 'Download Resume',
      href: '/resume.pdf',
    },
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a frontend engineer with 9+ years of experience shipping React applications from MVP to enterprise scale.',
      'My recent work has centered on design system governance, performance budgets, and platform-level frontend standards.',
    ],
    focusAreas: [
      'Frontend architecture and maintainable component design',
      'Accessibility compliance and inclusive interaction patterns',
      'Performance optimization, Core Web Vitals, and bundle strategy',
    ],
  },
  contact: {
    title: 'Contact',
    intro:
      'I am open to senior frontend and staff-level opportunities focused on product quality and engineering leadership.',
    email: 'avery.morgan@example.com',
  },
  resume: {
    title: 'Resume',
    description:
      'View or download a printable resume. Replace the placeholder file in public/resume.pdf.',
    fileUrl: '/resume.pdf',
  },
  pageHeaders: {
    projects: {
      title: 'Projects',
      description:
        'Selected frontend projects with production constraints, technical challenges, and measurable outcomes.',
    },
    articles: {
      title: 'Articles',
      description:
        'Writing focused on scalable React architecture, frontend platform patterns, and practical accessibility.',
    },
    speaking: {
      title: 'Speaking & Community',
      description:
        'Talks, workshops, and community initiatives around frontend engineering quality.',
    },
  },
  navigation: [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/#about' },
    { id: 'skills', label: 'Skills', to: '/#skills' },
    { id: 'projects', label: 'Projects', to: '/projects' },
    { id: 'articles', label: 'Articles', to: '/articles' },
    { id: 'speaking', label: 'Speaking', to: '/speaking' },
    { id: 'certificates', label: 'Certificates', to: '/#certificates' },
    { id: 'resume', label: 'Resume', to: '/resume' },
    { id: 'contact', label: 'Contact', to: '/#contact' },
  ],
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/example',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/example',
      icon: 'linkedin',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:avery.morgan@example.com',
      icon: 'mail',
    },
  ],
}

export default profile
