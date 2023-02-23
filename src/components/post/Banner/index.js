import React from 'react';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import styles from './Banner.module.scss';

export default function Banner({ cover, title, date, cat }) {
  const dateObj = new Date(date);
  const pubDate = dateObj.toLocaleDateString('pt-BR');
  const datetime = dateObj.toISOString().split('T')[0];

  return (
    <div className={styles.banner}>
      <Img {...cover} fill />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className={styles.content}>
              <h1>{title}</h1>
              <div>
                {
                  cat.data.map(c => (
                    <Button
                      key={c.id} className="phthalo small"
                      href={`/blog/categorias/${c.attributes.slug}`}
                    >
                      {c.attributes.name}
                    </Button>
                  ))
                }
                <Button btnElement className="outline phthalo small">
                  <time dateTime={datetime}>{pubDate}</time>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
