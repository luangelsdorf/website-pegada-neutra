import React from 'react';
import styles from './Body.module.scss';

export default function Body({ content }) {

  return (
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} />
  )
}
