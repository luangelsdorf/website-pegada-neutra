import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import fetchAPI from 'src/utils/fetch';

export default function Testimonials({ content, testimonials }) {
  const [page, setPage] = useState(1);
  const [paginatedContent, setPaginatedContent] = useState([testimonials]);

  const TestimonialCard = ({ logo, quote, name, role }) => (
    <article className={styles.card}>
      <header>
        <Img {...logo} />
        <Image src="/images/icons/quote.svg" height={32} width={32} alt="" />
      </header>
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>
          <div>{name}</div>
          <div>{role}</div>
        </figcaption>
      </figure>
    </article>
  );

  useEffect(() => {
    if (page === 1) return;
    console.log('page changed to =', page);

    async function getTestimonials() {
      let newTestimonials = await fetchAPI('testimonials', `&pagination[pageSize]=${6}&pagination[page]=${page}`, false, false);
      setPaginatedContent(previous => [...previous, newTestimonials]);
    }

    getTestimonials();

  }, [page]);

  useEffect(() => {
    if (page <= 1) return;
    dispatchEvent(new Event('resize'));
  }, [paginatedContent, page]);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className={styles.sectionHeader}>
              <div>
                <p className="overline light">{content.title.overline}</p>
                <h2>{content.title.title}</h2>
              </div>
              <Button
                disabled={page >= testimonials.meta.pagination.pageCount}
                onClick={() => setPage(page + 1)}
                btnElement
                className="outline dark large"
                RightIcon={ArrowRight}
              >
                Ver Mais
              </Button>
            </header>
          </div>
        </div>
        <div className={styles.swipers}>
          {
            paginatedContent.map((page, index) => (
              <Swiper
                key={`list-${index}`}
                slidesPerView="auto"
                spaceBetween={24}
                grabCursor
                speed={1500}
                loop
                modules={[Autoplay, FreeMode]}
                freeMode
                autoplay={{
                  delay: 200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: index % 2 === 1,
                }}
              >
                {
                  page.data.map(card => (
                    <SwiperSlide key={card.id} className="col-12 col-lg-5">
                      <TestimonialCard {...card.attributes} />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            ))
          }
        </div>
      </div>
    </div>
  )
}
