import ArrowRight from 'public/images/icons/ArrowRight.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './PostCard.module.scss';

export default function PostCard({ title, body, cover, negative, small }) {
  return (
    <article className={`${styles.card}${negative ? ' ' + styles.negative : ''}${small ? ' ' + styles.small : ''}`}>
      <div className={styles.cover}>
        <Link title="Ler Mais" href="#post" className="link-image">
          <Image src={cover} fill alt="" />
        </Link>
        <Link className={`link-image ${styles.tag}`} href="#categoria">Categoria</Link>
      </div>
      <div className={styles.cardBody}>
        <h3>
          <Link href="#post" className="link-image">{title}</Link>
        </h3>
        <p>{body}</p>
        <Link href="#post" className="small">Ler Mais <ArrowRight /></Link>
      </div>
    </article>
  )
}
