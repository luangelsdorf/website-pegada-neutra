import Link from 'next/link';
import React from 'react';
import styles from './Testimonials.module.scss';
import ArrowRight from 'public/images/icons/ArrowRight.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';

export default function Testimonials({ content }) {

  const TestimonialCard = ({ logo, text, author, role }) => (
    <article className={styles.card}>
      <header>
        <Image src={`/images/partners/${logo}.png`} height={56} width={160} alt="Logo" />
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
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className={styles.sectionHeader}>
              <div>
                <p className="overline light">O Que Dizem Sobre Nós</p>
                <h2>Depoimentos</h2>
              </div>
              <Link href="#" className="btn outline dark-green large">Ver Mais <ArrowRight /></Link>
            </header>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        grabCursor
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
            <SwiperSlide key={card.id} className="col-5">
              <TestimonialCard {...card} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}
