import React from 'react';
import styles from './Banner.module.scss';

export default function Banner({ content }) {
  return (
    <div className={styles.section}>
      <div>
        <p className="overline large light">{content.title.overline}</p>
        <h1>{content.title.title}</h1>
      </div>
    </div>
  )
}
