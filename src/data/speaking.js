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
    context: 'Speaker Session',
    date: '2026-03-02',
    images:{
      image1: softwareroadmap,
    },
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-02',
    title: 'AI Ready APIs: Rethinking Your API Strategy in the AI Era',
    context: 'API Strategy Breakout Session',
    date: '2026-02-08',
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
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-03',
    title: 'AI in Tech: Teammate or Threat',
    context: 'Community Discussion Session',
    date: '2026-01-31',
    images:{
      image1: devbyte,
      image2: devbyte2,
    },
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
  {
    id: 'speaking-04',
    title: 'API Conference Lagos 2025',
    context: 'Developer Conference',
    date: '2025-07-20',
    images:{
      image1: apidays1,
      image2: apidays2,
      image3: apidays3,
      image4: apidays4,
    },
    notionUrl: 'https://example.com/speaking-platform-thinking',
  },
]

export default speakingItems
