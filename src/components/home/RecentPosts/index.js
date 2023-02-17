import ArrowRight from '@ui-icons/ArrowRight.svg';
import React, { useEffect, useRef } from 'react';
import PostCard from 'src/components/common/PostCard';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './RecentPosts.module.scss';

export default function RecentPosts({ postList }) {
  const swiper = useRef(null);

  function handleClick(e) {
    let swiperInstance = swiper.current.swiper;
    let action = e.currentTarget.dataset.action;
    swiperInstance[action]();
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <div>
                <p className="overline dark">Blog Pegada Neutra®</p>
                <h2>Posts Recentes</h2>
              </div>
              <div className={styles.controls} onMouseEnter={() => swiper.current.swiper.autoplay.stop()} onMouseLeave={() => swiper.current.swiper.autoplay.start()}>
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
            postList.map((post, index) => {
              let isSmall = index % 2 === 1;
              return (
                <SwiperSlide key={post.id} className={styles.item}>
                  <PostCard {...post.attributes} small={isSmall} />
                </SwiperSlide>
              );
            })
          }
        </Swiper>

      </div>
    </div>
  )
}
