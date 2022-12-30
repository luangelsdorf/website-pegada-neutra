import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './PostCard.module.scss';

export default function PostCard({ content, negative, small }) {
  return (
    <article className={`${styles.card}${negative ? ' ' + styles.negative : ''}${small ? ' ' + styles.small : ''}`}>
      <div className={styles.cover}>
        <Link title="Ler Mais" href="#post" className="link-image">
          <Image src="/images/blog/post-1.png" fill alt="" />
        </Link>
        <Link className={`link-image ${styles.tag}`} href="#categoria">Categoria</Link>
      </div>
      <div className={styles.cardBody}>
        <h2>
          <Link href="#post" className="link-image">Título da Publicação</Link>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...</p>
        <Link href="#post" className="small">Ler Mais</Link>
      </div>
    </article>
  )
}
