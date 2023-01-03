import React from 'react';
import styles from './Banner.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Image from 'next/image';
import Button from 'src/components/common/Button';

export default function Banner({ content }) {
  return (
    <section className={styles.banner}>
      <Image fill src="/images/banner-home.webp" alt="" quality={100} />
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
