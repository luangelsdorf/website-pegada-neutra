import ArrowRight from '@ui-icons/ArrowRight.svg';
import React from 'react';
import styles from './PostCard.module.scss';
import Button from '../Button';
import { getSizesString } from 'src/utils/images';
import Img from '../Img';
import { getExcerpt } from 'src/utils/helpers';

export default function PostCard({ title, body, cover, categorias, slug, negative, small, }) {
  let category = categorias.data[0];
  if (category) category = category.attributes;

  return (
    <article className={`${styles.card}${negative ? ' ' + styles.negative : ''}${small ? ' ' + styles.small : ''}`}>
      <div className={styles.cover}>
        <a title="Ler Mais" href={`/blog/posts/${slug}`} className="link-image">
          <Img {...cover} fill sizes={getSizesString('col-12 col-lg-5')} />
        </a>
        {category && <Button tag className={`${styles.tag} ${negative ? 'dark' : 'light'}`} href={`/blog/categorias/${category.slug}`}>{category.name}</Button>}
      </div>

      <div className={styles.cardBody}>
        <h3>
          <Button link href={`/blog/posts/${slug}`} className="link-image">{title}</Button>
        </h3>
        <p>{getExcerpt(body, 15)}</p>
        <Button link href={`/blog/posts/${slug}`} className="light" RightIcon={ArrowRight}>Ler Mais</Button>
      </div>
    </article>
  )
}
