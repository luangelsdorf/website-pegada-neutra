import ArrowRight from '@ui-icons/ArrowRight.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './PostCard.module.scss';
import Button from '../Button';
import { getSizesString } from 'src/utils/images';
import Img from '../Img';
import { getExcerpt } from 'src/utils/helpers';

export default function PostCard({ title, body, cover, categorias, slug, negative, small, }) {
  const category = categorias.data[0].attributes.slug;

  return (
    <article className={`${styles.card}${negative ? ' ' + styles.negative : ''}${small ? ' ' + styles.small : ''}`}>
      <div className={styles.cover}>
        <Link title="Ler Mais" href={`/blog/posts/${slug}`} className="link-image">
          <Img {...cover} fill sizes={getSizesString('col-12 col-lg-5')} />
        </Link>
        <Button tag className={`${styles.tag} ${negative ? 'dark' : 'light'}`} href={`/blog/categorias/${category}`}>Categoria</Button>
      </div>

      <div className={styles.cardBody}>
        <h3>
          <Link href={`/blog/posts/${slug}`} className="link-image">{title}</Link>
        </h3>
        <p>{getExcerpt(body, 15)}</p>
        <Button link href={`/blog/posts/${slug}`} className="light" RightIcon={ArrowRight}>Ler Mais</Button>
      </div>
    </article>
  )
}
