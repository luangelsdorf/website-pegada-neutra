import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';
import ArrowDown from '@ui-icons/ArrowDown.svg';

export default function Banner({ content }) {
  return (
    <div className="col-12">
      <div className={styles.banner}>
        <header>
          {content.title.overline && <p className="overline large dark">{content.title.overline}</p>}
          <h1>{content.title.title}</h1>
        </header>
        <p>{content.text}</p>
        {content.button && <Button href={content.button.url} className="outline phthalo large">{content.button.text}</Button>}
        {content.button && <Button href="#lista" LeftIcon={ArrowDown} className={styles.arrow} />}
      </div>
    </div>
  )
}
