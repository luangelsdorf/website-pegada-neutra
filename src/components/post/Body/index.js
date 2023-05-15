import React, { useEffect } from 'react';
import styles from './Body.module.scss';

export default function Body({ content }) {

  const newContent = content.replaceAll('<a', '<a class="greenery"')

  return (
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: newContent }} />
  )
}
