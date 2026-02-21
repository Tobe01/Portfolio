import javeScript from '../assets/icons/skill-icons--javascript.svg';
import css from '../assets/icons/skill-icons--css.svg';
import docker from '../assets/icons/skill-icons--docker.svg';
import fastApi from '../assets/icons/skill-icons--fastapi.svg';
import githubActions from '../assets/icons/skill-icons--githubactions-dark.svg';
import graphql from '../assets/icons/skill-icons--graphql-light.svg';
import html from '../assets/icons/skill-icons--html.svg';
import nextjs from '../assets/icons/skill-icons--nextjs-light.svg';
import postgresql from '../assets/icons/skill-icons--postgresql-dark.svg';
import react from '../assets/icons/skill-icons--react-dark.svg';
import redis from '../assets/icons/skill-icons--redis-dark.svg';
import redux from '../assets/icons/skill-icons--redux.svg';
import supabase from '../assets/icons/skill-icons--supabase-dark.svg';
import tailwind from '../assets/icons/skill-icons--tailwindcss-dark.svg';
import typescript from '../assets/icons/skill-icons--typescript.svg';
import vercel from '../assets/icons/skill-icons--vercel-light.svg';
import aws from '../assets/icons/skill-icons--aws-light.svg';
import mongoDB from '../assets/icons/skill-icons--mongodb.svg';
import infrastructure from '../assets/icons/proicons--weather-cloudy.svg';
import languages from '../assets/icons/proicons--code-square.svg';
import apiDesign from '../assets/icons/proicons--terminal.svg';
import frameworks from '../assets/icons/proicons--layers.svg';
import database from '../assets/icons/proicons--database.svg';
import security from '../assets/icons/proicons--lock.svg';
import kafka from '../assets/icons/skill-icons--kafka.svg';

const skillCategories = [
  {
    id: 'languages',
    tag: `${languages}`,
    title: 'Programming Languages',
    item1: {
      icon: `${javeScript}`,
      label: 'JavaScript'
    },

    item2: {
      icon: `${typescript}`,
      label: 'TypeScript'
    },

    item3: {
      icon: `${html}`,
      label: 'HTML5'
    },

    item4: {
      icon: `${css}`,
      label: 'CSS3'
    },

  },
  {
    id: 'frameworks',
    tag: `${frameworks}`,
    title: 'Frameworks',
    item1: {
      icon: `${react}`,
      label: 'React'
    },

    item2: {
      icon: `${nextjs}`,
      label: 'Next.js'
    },

    item4: {
      icon: `${tailwind}`,
      label: 'Tailwind'
    },

    item3: {
      icon: `${redux}`,
      label: 'Redux Toolkit'
    },

  },
  {
    id: 'databases',
    tag: `${database}`,
    title: 'Databases',
    item1: {
      icon: `${postgresql}`,
      label: 'PostgreSQL'
    },

    item2: {
      icon: `${supabase}`,
      label: 'supabase'
    },

    item3: {
      icon: `${redis}`,
      label: 'Redis'
    },

    item4: {
      icon: `${mongoDB}`,
      label: 'MongoDB'
    },

  },
  {
    id: 'infrastructure',
    tag: `${infrastructure}`,
    title: 'Infrastructure & DevOps',
    item1: {
      icon: `${docker}`,
      label: 'Docker'
    },

    item2: {
      icon: `${githubActions}`,
      label: 'GitHub Actions'
    },

    item3: {
      icon: `${vercel}`,
      label: 'Vercel'
    },

    item4: {
      icon: `${aws}`,
      label: 'AWS'
    },

  },
  {
    id: 'api-design',
    tag: `${apiDesign}`,
    title: 'API Design',
    item1: {
      icon: `${kafka}`,
      label: 'Kafka',
    },

    item2: {
      icon: `${graphql}`,
      label: 'GraphQL',
    },

    item3: {
      icon: `${fastApi}`,
      label: 'FastAPI',
    },

    item4: {
      icon: `${redis}`,
      label: 'RabbitMQ',
    },

  },
  {
    id: 'security',
    tag: `${security}`,
    title: 'Security Tools',
    item1: {
      icon: `${react}`,
      label: 'Snyk',
    },

    item2: {
      icon: `${fastApi}`,
      label: 'OWASP ZAP',
    },

    item3: {
      icon: `${kafka}`,
      label: 'Dependabot'
    },

  },
]

export default skillCategories
