import React from 'react';
import styles from './Body.module.scss';

export default function Body({ content }) {

  let postContent = content.replace('/uploads', `${process.env.NEXT_PUBLIC_API_URL}/uploads`);

  return (
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: postContent }} />
  )
}
