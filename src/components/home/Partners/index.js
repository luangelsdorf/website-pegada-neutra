import ArrowRight from '@ui-icons/ArrowRight.svg';
import React from 'react';
import styles from './Partners.module.scss';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';

export default function Partners({ content, partners }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-3 gy-lg-4">
          <div className="col-12">
            <header>
              <p className="overline light">{content.title.overline}</p>
              <h2>{content.title.title}</h2>
            </header>
          </div>
          {
            partners.map(client => (
              <div className="col-6 col-lg-3" key={client.id}>
                <div className={styles.logo}>
                  <a className="link-image" href={client.attributes.link}>
                    <Img {...client.attributes.logo} />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Button href="/parceiros" className="outline dark large" RightIcon={ArrowRight}>Ver Lista Completa</Button>
    </div>
  )
}
