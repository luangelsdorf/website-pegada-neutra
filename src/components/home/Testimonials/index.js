import React from 'react';
import styles from './Testimonials.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import Button from 'src/components/common/Button';

export default function Testimonials({ content }) {

  const TestimonialCard = ({ logo, text, author, role }) => (
    <article className={styles.card}>
      <header>
        <Image src={`/images/partners/${logo}.png`} height={10} width={80} alt="Logo" />
        <Image src="/images/icons/quote.svg" height={32} width={32} alt="" />
      </header>
      <figure>
        <blockquote>{text}</blockquote>
        <figcaption>
          <div>{author}</div>
          <div>{role}</div>
        </figcaption>
      </figure>
    </article>
  );

  const data = [
    {
      id: 1,
      logo: 'tres',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
    {
      id: 2,
      logo: 'ambev',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
    {
      id: 3,
      logo: 'coca-cola',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
    {
      id: 4,
      logo: 'nestle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
    {
      id: 5,
      logo: 'ifood',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
    {
      id: 6,
      logo: 'itambe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'João da Silva',
      role: 'Diretor Executivo',
    },
  ]

  return (
    <section className={styles.section} data-bg="light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className={styles.sectionHeader}>
              <div>
                <p className="overline light">O Que Dizem Sobre Nós</p>
                <h2>Depoimentos</h2>
              </div>
              <Button href="#ver-mais" className="outline dark large" RightIcon={ArrowRight}>Ver Mais</Button>
            </header>
          </div>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          grabCursor
          centeredSlides
          loop
          speed={1500}
          modules={[Autoplay, FreeMode]}
          freeMode
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {
            data.map(card => (
              <SwiperSlide key={card.id} className="col-12 col-lg-5">
                <TestimonialCard {...card} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
