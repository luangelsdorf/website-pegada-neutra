import React from 'react';
import Button from 'src/components/common/Button';
import styles from './CustomSolutions.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';

export default function CustomSolutions({ content }) {

  const Card = ({ title, text }) => (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>
              <h2>{content.title}</h2>
              <p>{content.about}</p>
            </header>
          </div>
          {
            content.cards.map((card, index) => (
              <div key={index} className="col-12 col-lg-4">
                <Card {...card} />
              </div>
            ))
          }
        </div>
      </div>
      <Button href={content.button.url} RightIcon={ArrowRight} className="large dark" >{content.button.text}</Button>
    </div>
  )
}
