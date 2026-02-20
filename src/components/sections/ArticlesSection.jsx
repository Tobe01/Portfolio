import { A11y, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import articles from '../../data/articles'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const IMAGE_FALLBACK = '/images/image-fallback.svg'

const formatPublishedDate = (dateValue) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateValue))

function ArticlesSection({
  description = 'Recent writing on frontend systems, accessibility, and engineering quality.',
  id = 'articles',
  title = 'Articles',
}) {
  return (
    <section className="section" id={id}>
      <Container>
        <Reveal as="div" className="section-heading">
          <p className="section-eyebrow">Carousel Slider</p>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </Reveal>

        {articles.length ? (
          <Reveal as="div" className="slider-wrap slider-wrap--articles-3d" delay={60}>
            <Swiper
              centeredSlides
              className="articles-swiper articles-swiper--coverflow"
              coverflowEffect={{
                depth: 160,
                modifier: 1.1,
                rotate: 28,
                slideShadows: true,
                stretch: 0,
              }}
              effect="coverflow"
              grabCursor
              keyboard={{ enabled: true }}
              loop
              modules={[EffectCoverflow, Navigation, Pagination, Keyboard, A11y]}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1.1}
              speed={650}
              breakpoints={{
                560: {
                  slidesPerView: 1.4,
                },
                900: {
                  slidesPerView: 1.9,
                },
                1200: {
                  slidesPerView: 2.3,
                },
              }}
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id}>
                  <div className="article-slide">
                    <a
                      className="article-card"
                      href={article.url || 'https://example.com'}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt={`${article.title} banner`}
                        className="article-card__image"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = IMAGE_FALLBACK
                        }}
                        src={article.coverImage || IMAGE_FALLBACK}
                      />
                      <div className="article-card__body">
                        <p className="article-card__date">
                          {formatPublishedDate(article.publishedDate)}
                        </p>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
        ) : (
          <Reveal as="p" className="section-placeholder">
            Articles will be added soon.
          </Reveal>
        )}
      </Container>
    </section>
  )
}

export default ArticlesSection
