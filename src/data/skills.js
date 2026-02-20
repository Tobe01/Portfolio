const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: [
      { id: 'javascript', label: 'JavaScript', iconText: 'JS' },
      { id: 'typescript', label: 'TypeScript', iconText: 'TS' },
      { id: 'html', label: 'HTML5', iconText: 'H5' },
      { id: 'css', label: 'CSS3', iconText: 'C3' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    items: [
      { id: 'react', label: 'React', iconText: 'R' },
      { id: 'nextjs', label: 'Next.js', iconText: 'N' },
      { id: 'redux', label: 'Redux Toolkit', iconText: 'RTK' },
      { id: 'router', label: 'React Router', iconText: 'RR' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: [
      { id: 'postgres', label: 'PostgreSQL', iconText: 'PG' },
      { id: 'firebase', label: 'Firebase', iconText: 'FB' },
      { id: 'redis', label: 'Redis', iconText: 'RD' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & DevOps',
    items: [
      { id: 'docker', label: 'Docker', iconText: 'DK' },
      { id: 'github-actions', label: 'GitHub Actions', iconText: 'GA' },
      { id: 'vercel', label: 'Vercel', iconText: 'VC' },
      { id: 'cloudfront', label: 'CloudFront', iconText: 'CF' },
    ],
  },
  {
    id: 'api-design',
    title: 'API Design',
    items: [
      { id: 'rest', label: 'REST', iconText: 'RE' },
      { id: 'graphql', label: 'GraphQL', iconText: 'GQ' },
      { id: 'openapi', label: 'OpenAPI', iconText: 'OA' },
    ],
  },
  {
    id: 'security',
    title: 'Security Tools',
    items: [
      { id: 'snyk', label: 'Snyk', iconText: 'SY' },
      { id: 'owasp', label: 'OWASP ZAP', iconText: 'OZ' },
      { id: 'dependabot', label: 'Dependabot', iconText: 'DB' },
    ],
  },
]

export default skillCategories
