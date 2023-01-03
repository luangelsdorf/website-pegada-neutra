import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Filter.module.scss';
import Search from 'public/images/icons/Search.svg';

export default function Filter({ content }) {
  return (
    <div className={styles.filter}>
      <div className={styles.radio}>
        <div>
          <input type="radio" name="order" id="all" />
          <label className="btn outline dark small" htmlFor="all">Todos</label>
        </div>

        <div>
          <input type="radio" name="order" id="alpha" />
          <label className="btn outline dark small" htmlFor="alpha">Ordem Alfabética</label>
        </div>

        <div>
          <input type="radio" name="order" id="category" />
          <label className="btn outline dark small" htmlFor="category">Por Categoria</label>
        </div>
      </div>
      <Button btnElement className="btn outline dark small" LeftIcon={Search}>Pesquisar</Button>
    </div>
  )
}
