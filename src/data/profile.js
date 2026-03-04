const profile = {
  name: 'Tobechi Duru',
  role: 'Frontend Engineer',
  hero: {
    eyebrow: 'Top-rated Frontend Engineer',
    headline: 'Tobechi Duru',
    title: 'Building resilient interfaces for real products',
    valueStatement:
      'I lead frontend architecture, accessibility, and performance for high-traffic products. My focus is building scalable UI systems and shipping improvements you can measure in reliability, performance, and user experience.',
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
      'I am a top-rated frontend engineer with years of experience shipping React applications from MVP to enterprise scale. My recent work has focused on building and maintaining reusable UI systems, setting frontend standards that keep teams aligned, and improving performance and accessibility in ways that show up in real user experience.',

      'I’m comfortable operating across design and engineering, translating product goals into clear interfaces, and owning the details that make apps feel polished as features and contributors grow.',
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
      'I’m open to frontend opportunities where I can take end-to-end ownership of product experiences, push for high UI quality and performance, and build scalable component systems and patterns that keep teams shipping confidently as the product grows.',
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
