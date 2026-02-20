# Senior Frontend Portfolio (React + CSS)

Production-ready, data-driven portfolio for a Senior Frontend Engineer built with React, React Router, Swiper, and plain CSS.

## Tech

- React + Vite
- `react-router-dom` for routing
- Swiper.js for projects and articles sliders
- Plain CSS with theme tokens (`light` / `dark`)
- IntersectionObserver-based scroll reveal animations

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Routes

- `/` Home (all sections)
- `/projects`
- `/articles`
- `/speaking`
- `/resume`

## Where to Update Content

All content is data-driven:

- `src/data/profile.js`
- `src/data/skills.js`
- `src/data/projects.js`
- `src/data/articles.js`
- `src/data/speaking.js`
- `src/data/certificates.js`

## Fonts

Font faces are wired in:

- `src/styles/fonts.css`

Add your font files in:

- `public/fonts/Acorn-Regular.woff2`
- `public/fonts/Acorn-Bold.woff2`
- `public/fonts/Chillax-Regular.woff2`
- `public/fonts/Chillax-Medium.woff2`
- `public/fonts/Chillax-Semibold.woff2`

Fallbacks are already configured:

- Acorn -> serif fallback
- Chillax -> `system-ui` fallback

## Resume

Replace the placeholder PDF at:

- `public/resume.pdf`

Resume view and download are available via `/resume` and header actions.

## Project Structure

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  pages/
  routes/
  styles/
```

## Notes

- External links are placeholder/demo links (`example.com`) and open in a new tab.
- Theme preference is persisted in `localStorage`.
- Scroll reveal respects `prefers-reduced-motion`.
