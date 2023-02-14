import React, { useEffect } from 'react';
import styles from './Banner.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Button from 'src/components/common/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Img from 'src/components/common/Img';

export default function Banner({ content, solutions, height, }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('#banner-cover', {
        scrollTrigger: {
          trigger: '#banner-cover',
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${styles.banner}${solutions ? ' ' + styles.solutions : ''}`} style={height ? { height: height } : undefined}>
      <div className={styles.cover} id="banner-cover">
        {
          content.cover ? (
            <Img
              {...content.cover}
              fill
              sizes=""
              quality={100}
              priority
            />
          ) : null
        }
        <div className={styles.overlay} />
      </div>
      <div className="container">
        <div className={styles.bannerContent}>
          <p className="overline large">{content.title.overline}</p>
          <h1>{content.title.title}</h1>
          <Button className="large" RightIcon={ArrowRight}>
            {
              solutions ? 'Começar a Neutralizar' : 'Neutralize seu Impacto'
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
