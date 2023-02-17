import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';
import ArrowDown from '@ui-icons/ArrowDown.svg';

export default function Banner({ content }) {
  return (
    <div className={styles.banner}>
      <header>
        <p className="overline large dark">{content.title.overline}</p>
        <h1>{content.title.title}</h1>
      </header>
      <p>{content.text}</p>
      <Button href="/contato" className="outline phthalo large">Quero Participar</Button>
      <Button btnElement LeftIcon={ArrowDown} className={styles.arrow} />
    </div>
  )
}
