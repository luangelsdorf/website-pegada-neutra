import React from 'react';
import styles from './Banner.module.scss';
import ArrowRight from 'public/images/icons/ArrowRight.svg';
import Image from 'next/image';

export default function Banner({ content }) {
  return (
    <section className={styles.banner}>
      <Image fill src="/images/banner-home.webp" alt="" />
      <div className="container">
        <div className={styles.bannerContent}>
          <p className="overline large">Conheça o Selo Pegada Neutra®</p>
          <h1>{'Neutralize\nsua Pegada'}</h1>
          <a className="btn">
            <span>Neutralize seu Impacto</span> <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
