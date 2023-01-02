import ArrowRight from 'public/images/icons/ArrowRight.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './PostCard.module.scss';
import Button from '../Button';

export default function PostCard({ title, body, cover, negative, small }) {
  return (
    <article className={`${styles.card}${negative ? ' ' + styles.negative : ''}${small ? ' ' + styles.small : ''}`}>
      <div className={styles.cover}>
        <Link title="Ler Mais" href="#post" className="link-image">
          <Image src={cover} fill alt="" />
        </Link>
        <Button tag className={`${styles.tag} ${negative ? 'dark' : 'light'}`} href="#categoria">Categoria</Button>
      </div>
      <div className={styles.cardBody}>
        <h3>
          <Link href="#post" className="link-image">{title}</Link>
        </h3>
        <p>{body}</p>
        <Button link href="#post" className="light" RightIcon={ArrowRight}>Ler Mais</Button>
      </div>
    </article>
  )
}
