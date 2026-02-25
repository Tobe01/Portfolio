import caching from '../../public/images/articles/caching-api.webp';
import fintech from '../../public/images/articles/fintech.webp';
import ratelimit from '../../public/images/articles/ratelimit.webp';
import restapi from '../../public/images/articles/rest-api.webp';
import rss from '../../public/images/articles/rss.webp';

const articles = [
  {
    id: 'article-04',
    title: 'Building a Simple REST API with Node.js and Express',
    summary:
      'A beginner-friendly guide to creating and testing a RESTful API for everyday use',
    coverImage: restapi,
    url: 'https://tobechiduru.hashnode.dev/building-a-simple-rest-api-with-nodejs-and-express',
    publishedDate: '2025-08-14',
  },
  {
    id: 'article-03',
    title: 'Caching API Responses in Node.js with Redis',
    summary:
      'Improving performance and reducing load with a simple caching layer',
    coverImage: caching,
    url: 'https://tobechiduru.hashnode.dev/caching-api-responses-in-nodejs-with-redis',
    publishedDate: '2025-08-20',
  },
  {
    id: 'article-05',
    title: 'Building a Lightweight API Rate Limiter in Node.js Without External Libraries',
    summary:
      'Preventing abuse in your APIs with just built-in JavaScript features',
    coverImage: ratelimit,
    url: 'https://tobechiduru.hashnode.dev/building-a-lightweight-api-rate-limiter-in-nodejs-without-external-libraries',
    publishedDate: '2025-08-11',
  },
  {
    id: 'article-02',
    title: 'Turning any RSS feed into a fast JSON API on Vercel',
    summary:
      'Practical HTTP caching with ETag and conditional requests for real-world performance',
    coverImage: rss,
    url: 'https://tobechiduru.hashnode.dev/turning-any-rss-feed-into-a-fast-json-api-on-vercel',
    publishedDate: '2025-08-26',
  },
  {
    id: 'article-01',
    title: 'Building a Simple Fintech Dashboard with JavaScript and LocalStorage',
    summary:
      'From concept to implementation using vanilla JavaScript',
    coverImage: fintech,
    url: 'https://tobechiduru.hashnode.dev/building-a-simple-fintech-dashboard-with-javascript-and-localstorage',
    publishedDate: '2025-09-04',
  },
]

export default articles
