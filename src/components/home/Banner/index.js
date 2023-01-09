import React, { useEffect } from 'react';
import styles from './Banner.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Image from 'next/image';
import Button from 'src/components/common/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Banner({ content }) {
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
    <section className={styles.banner} data-bg="light">
      <div className={styles.cover} id="banner-cover">
        <Image fill src="/images/banner-home.webp" alt="" quality={100} />
        <div className={styles.overlay} />
      </div>
      <div className="container">
        <div className={styles.bannerContent}>
          <p className="overline large">Conheça o Selo Pegada Neutra®</p>
          <h1>{'Neutralize\nsua Pegada'}</h1>
          <Button className="large" RightIcon={ArrowRight}>Neutralize seu Impacto</Button>
        </div>
      </div>
    </section>
  )
}
