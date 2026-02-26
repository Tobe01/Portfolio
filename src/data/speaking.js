import devbyte from '../../public/speaking/DEVBYTE FLYER.webp';
import devbyte2 from '../../public/speaking/DEVBYTE FLYER 2.webp';
import aiapi1 from '../../public/speaking/dji_mimo_20260207_130430_0_1770479233376_photo_Original.webp';
import aiapi2 from '../../public/speaking/dji_mimo_20260207_135806_0_1770478485685_photo_Original.webp';
import aiapi3 from '../../public/speaking/dji_mimo_20260207_135822_0_1770478485333_photo_Original.webp';
import aiapi4 from '../../public/speaking/dji_mimo_20260207_135858_0_1770478484498_photo_Original.webp';
import aiapi5 from '../../public/speaking/IMG_2218.webp';
import aiapi6 from '../../public/speaking/IMG_2237.webp';
import aiapi7 from '../../public/speaking/IMG_2241.webp';
import aiapi8 from '../../public/speaking/PXL_20260207_091952500_Original.webp';
import aiapi9 from '../../public/speaking/PXL_20260207_102114910_Original.webp';
import aiapi10 from '../../public/speaking/PXL_20260207_141421913_Original.webp';
import apidays1 from '../../public/speaking/IMG_2329.webp';
import apidays2 from '../../public/speaking/IMG_2330.webp';
import apidays3 from '../../public/speaking/polish_save.webp';
import apidays4 from '../../public/speaking/IMG_0831.webp';
import softwareroadmap from '../../public/speaking/IMG_2320.webp';

const speakingItems = [
  {
    id: 'speaking-01',
    title: 'Software Engineering Roadmap: A software engineers guide to building a great career',
    role: 'Speaker',
    context: 'Speaker Session',
    date: '2026-03-02',
    location: 'Lagos, Nigeria',
    description:
      'I shared a practical roadmap for early and mid-career software engineers, focusing on skill progression, portfolio building, and career decision checkpoints. The session translated long-term goals into concrete monthly execution habits participants could apply immediately.',
    links: [
      {
        label: 'Host Event Announcement',
        url: 'https://www.linkedin.com/posts/chinaza-chukwunweike-72395b185_upcoming-event-alert-topic-software-activity-7432363813162725377-WLMA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC5tZYEBzMxy7qSqDXhXPTLZSxFxcz24zdQ',
        type: 'host',
      },
      {
        label: 'My Session Recap',
        url: 'https://www.linkedin.com/posts/tobechiduru_softwareengineering-careergrowth-techcommunity-activity-7432378174967005184-4FdC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC5tZYEBzMxy7qSqDXhXPTLZSxFxcz24zdQ',
        type: 'me',
      },
    ],
    images:{
      image1: softwareroadmap,
    },
    videos: [],
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-02',
    title: 'AI Ready APIs: Rethinking Your API Strategy in the AI Era',
    role: 'Speaker',
    context: 'API Strategy Breakout Session',
    date: '2026-02-08',
    location: 'Lagos, Nigeria',
    description:
      'I facilitated a breakout on preparing API platforms for AI workloads, covering contract design, observability, and governance expectations as usage patterns become less predictable. The discussion emphasized practical design tradeoffs teams can adopt without rewriting their entire stack.',
    links: [
      {
        label: 'Organizer Post',
        url: 'https://www.linkedin.com/posts/gbahdeyboh_apiconnect-apis-ai-activity-7426236413827985408-qOdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC5tZYEBzMxy7qSqDXhXPTLZSxFxcz24zdQ',
        type: 'host',
      },
      {
        label: 'Speaker Mention',
        url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7426610955884617728?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7426610955884617728%2C7426696939221544960%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287426696939221544960%2Curn%3Ali%3AugcPost%3A7426610955884617728%29',
        type: 'speaker',
      },
      {
        label: 'My Recap Thread',
        url: 'https://www.linkedin.com/posts/tobechiduru_apiconnect-apis-apistrategy-activity-7426610957356892160-0WjS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC5tZYEBzMxy7qSqDXhXPTLZSxFxcz24zdQ',
        type: 'me',
      },
    ],
    images:{
      image1: aiapi1,
      image2: aiapi2,
      image3: aiapi3,
      image4: aiapi4,
      image5: aiapi5,
      image6: aiapi6,
      image7: aiapi7,
      image8: aiapi8,
      image9: aiapi9,
      image10: aiapi10,
    },
    videos: [
      {
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        title: 'AI Ready APIs session highlight 1',
      },
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'AI Ready APIs session highlight 2',
      },
    ],
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-03',
    title: 'AI in Tech: Teammate or Threat',
    role: 'Panelist',
    context: 'Community Discussion Session',
    date: '2026-01-31',
    location: 'Lagos, Nigeria',
    description:
      'I joined a community panel unpacking how AI tools are changing engineering roles, team collaboration, and hiring expectations. My contribution centered on using AI as a teammate for speed while preserving human judgment for architecture and quality decisions.',
    links: [
      {
        label: 'Community Invite',
        url: 'https://example.com/ai-in-tech-community-invite',
        type: 'ticket',
      },
      {
        label: 'Attendee Reflection',
        url: 'https://example.com/ai-in-tech-attendee-post',
        type: 'attendee',
      },
    ],
    images:{
      image1: devbyte,
      image2: devbyte2,
    },
    videos: [],
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-04',
    title: 'API Conference Lagos 2025',
    role: 'Participant',
    context: 'Developer Conference',
    date: '2025-07-20',
    location: 'Lagos, Nigeria',
    description:
      'I participated in conference sessions focused on API design standards, developer experience, and scaling integration ecosystems. The event helped me capture implementation patterns and ecosystem lessons that now inform how I shape platform conversations.',
    links: [
      {
        label: 'Conference Event Page',
        url: 'https://luma.com/ltp8u2bb?tk=LCKnSA',
        type: 'host',
      },
      {
        label: 'Ticket / Invite',
        url: 'https://drive.google.com/file/d/1c7FEu_FB6VHCp9vWCJH4OZDKX9Le0fdW/view?usp=sharing',
        type: 'ticket',
      },
    ],
    images:{
      image1: apidays1,
      image2: apidays2,
      image3: apidays3,
      image4: apidays4,
    },
    videos: [],
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
]

export default speakingItems
