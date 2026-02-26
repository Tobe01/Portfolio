const profile = {
  name: 'Tobechi Duru',
  role: 'Frontend Engineer',
  hero: {
    eyebrow: 'Top-rated Frontend Engineer',
    headline: 'Tobechi Duru',
    title: 'Building resilient interfaces for real products',
    valueStatement:
      'I lead frontend architecture, accessibility, and performance for high-traffic products. My focus is clean systems, measurable outcomes, and delivery velocity.',
    primaryCta: {
      label: 'View Projects',
      to: '/projects',
    },
    secondaryCta: {
      label: 'Open Resume',
      href: '/Tobechi_Duru_Resume.pdf',
    },
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a top-rated frontend engineer with 3+ years of experience shipping React applications from MVP to enterprise scale. My recent work has centered on design system governance, performance budgets, and platform-level frontend standards.',
      
      'Frontend architecture and maintainable component design, Accessibility compliance and, inclusive interaction patterns, Performance optimization, Core Web Vitals, and bundle strategy',
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
    email: 'tobechi.duru001@gmail.com',
  },
  resume: {
    title: 'Resume',
    description:
      'View or download a printable resume. Replace the placeholder file in public/resume.pdf.',
    fileUrl: '/Tobechi_Duru_Resume.pdf',
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
      url: 'https://github.com/tobe01',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/tobechiduru',
      icon: 'linkedin',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:tobechi.duru001@gmail.com',
      icon: 'mail',
    },
  ],
}

export default profile
