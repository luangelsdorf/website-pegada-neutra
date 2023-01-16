import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';

export default function Banner({ content }) {
  return (
    <div className={styles.banner}>
      <header>
        <p className="overline large dark">Blog Pegada Neutra®</p>
        <h1>Conhecimento que Transforma</h1>
      </header>
      <div className={styles.categories}>
        <Button btnElement className="phthalo small">Todos</Button>
        <Button btnElement className="phthalo small outline">Categoria 01</Button>
        <Button btnElement className="phthalo small outline">Categoria 02</Button>
        <Button btnElement className="phthalo small outline">Categoria 04</Button>
      </div>
    </div>
  )
}
