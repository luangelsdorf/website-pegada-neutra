import React from 'react';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import styles from './EnvironmentalActions.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Link from 'next/link';

export default function EnvironmentalActions({ content, actions }) {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className={styles.textContent}>
              <header>
                <Img {...content.about.icon} />
                <h2>{content.about.title}</h2>
              </header>
              <p>{content.about.text}</p>
              <Button href={content.button.url} RightIcon={ArrowRight}>{content.button.text}</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`row justify-content-end ${styles.sliderRow}`}>
        <div className="col-12 col-lg-5">
          <div className={styles.sliderSection}>
            <Swiper
              spaceBetween={24}
              grabCursor
              centeredSlides
              loop
              speed={1200}
              onTransitionEnd={self => self.params.speed = 1200}
              onTouchStart={self => self.params.speed = 300}
              modules={[Autoplay, Pagination]}
              pagination={{
                enabled: true,
                type: 'fraction',
              }}
              autoplay={{
                delay: 2100,
                pauseOnMouseEnter: true,
              }}
            >
              {
                actions.map((card, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-5">
                    <div className={styles.coverWrapper}>
                      <a href={`/blog/posts/${card.attributes.slug}`} className="link-image">
                        <Img {...card.attributes.cover} fill />
                      </a>
                      <Button className="tag light">Ações Socioambientais</Button>
                      <div className={styles.footer}>
                        <h3>{card.attributes.title}</h3>
                        <Button href={`/blog/posts/${card.attributes.slug}`} link RightIcon={ArrowRight}>Ver Publicação Completa</Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
