import ArrowRight from '@ui-icons/ArrowRight.svg';
import React, { useEffect, useRef } from 'react';
import PostCard from 'src/components/common/PostCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './RecentPosts.module.scss';

export default function RecentPosts({ content }) {
  const data = [
    {
      id: 1,
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-1.png',
    },
    {
      id: 2,
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-2.jpg',
    },
    {
      id: 3,
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-3.jpeg',
    },
    {
      id: 4,
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-4.jpg',
    },
    {
      id: 5,
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-5.jpg',
    },
  ]

  const swiper = useRef(null);

  function handleClick(e) {
    let swiperInstance = swiper.current.swiper;
    let action = e.currentTarget.dataset.action;
    swiperInstance[action]();
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <div>
                <p className="overline dark">Blog Pegada Neutra®</p>
                <h2>Posts Recentes</h2>
              </div>
              <div className={styles.controls}>
                <button onClick={handleClick} data-action="slidePrev" type="button" title="Navegar posts">
                  <ArrowRight />
                </button>
                <button onClick={handleClick} data-action="slideNext" type="button" title="Navegar posts">
                  <ArrowRight />
                </button>
              </div>
            </header>
          </div>
        </div>

        <Swiper
          ref={swiper}
          className={styles.postList}
          slidesPerView="auto"
          spaceBetween={60}
          grabCursor
        >
          {
            data.map((post, index) => {
              let isSmall = index % 2 === 1;
              return (
                <SwiperSlide key={post.id} className={styles.item}>
                  <PostCard {...post} small={isSmall} />
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
