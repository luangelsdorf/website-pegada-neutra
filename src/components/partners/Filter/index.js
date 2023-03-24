import React, { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import Search from '@ui-icons/Search.svg';
import debounce from 'src/utils/debounce';
import fetchAPI from 'src/utils/fetch';

export default function Filter({ categories, setClients }) {
  const [order, setOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Collapse = require('bootstrap/js/dist/collapse');
    document.querySelectorAll(`.${styles.filter} .collapse`).forEach(el => {
      el.bsCollapse = new Collapse(el, { toggle: false });
    });

    function handleChange(e) {
      if (e.target.type !== 'radio' || e.target.name !== 'filter') return;
      document.querySelectorAll(`.collapse`).forEach(el => {
        el.bsCollapse?.hide();
      });
      document.getElementById(e.target.dataset.target)?.bsCollapse.show();
    }

    document.querySelector(`.${styles.filter}`)?.addEventListener('change', handleChange);
    return () => {
      document.querySelector(`.${styles.filter}`)?.removeEventListener('change', handleChange);
    }
  }, []);

  const updateSearchDebounce = debounce(value => setSearchTerm(value));
  function handleInput(e) {
    updateSearchDebounce(e.target.value);
  }

  useEffect(() => {
    if (!order) return;
    document.querySelector('#partner-list').classList.add('loading');

    async function getData() {
      let data;
      if (order === 'all') {
        data = await fetchAPI('partners', '', false);
      }
      else if (order === 'alpha') {
        data = await fetchAPI('partners', '&sort=slug:ASC', false);
      }
      setClients(data);
      window.dispatchEvent(new Event('resize'));
      document.querySelector('#partner-list').classList.remove('loading');
    }
    getData();

  }, [order]);


  useEffect(() => {
    if (!selectedCategory) return;
    document.querySelector('#partner-list').classList.add('loading');

    async function getData() {
      let data = await fetchAPI('partners', `&filters[$and][0][categories][slug][$contains]=${selectedCategory}`, false);
      setClients(data);
      window.dispatchEvent(new Event('resize'));
      document.querySelector('#partner-list').classList.remove('loading');
    }
    getData();

  }, [selectedCategory]);


  useEffect(() => {
    if (!searchTerm) return;
    document.querySelector('#partner-list').classList.add('loading');

    async function getData() {
      let data = await fetchAPI('partners', `&filters[$and][0][name][$containsi]=${searchTerm}`, false);
      setClients(data);
      window.dispatchEvent(new Event('resize'));
      document.querySelector('#partner-list').classList.remove('loading');
    }
    getData();

  }, [searchTerm]);

  return (
    <div className={styles.filter}>
      <div className={styles.radio}>
        <div>
          <input type="radio" name="filter" id="all" value="all" onChange={e => setOrder(e.target.value)} />
          <label className="btn outline dark small" htmlFor="all">Todos</label>
        </div>

        <div>
          <input type="radio" name="filter" id="alpha" value="alpha" onChange={e => setOrder(e.target.value)} />
          <label className="btn outline dark small" htmlFor="alpha">Ordem Alfabética</label>
        </div>

        <div>
          <input type="radio" name="filter" id="category" data-target="category-collapse" />
          <label className="btn outline dark small" htmlFor="category">Por Categoria</label>
        </div>

        <div>
          <input type="radio" name="filter" id="search" data-target="search-collapse" />
          <label className="btn outline dark small" htmlFor="search"><Search /> Pesquisar</label>
        </div>
      </div>

      <div className="collapse" id="category-collapse">
        <div className={styles.categories}>
          {
            categories.map((cat, index) => (
              <div key={index}>
                <input type="radio" name="categories" value={cat.attributes.slug} id={cat.attributes.slug} onChange={e => setSelectedCategory(e.target.value)} />
                <label className="btn outline dark small" htmlFor={cat.attributes.slug}>{cat.attributes.name}</label>
              </div>
            ))
          }
        </div>
      </div>

      <div className="collapse" id="search-collapse">
        <div className={styles.searchBox}>
          <div className="floating">
            <input onInput={handleInput} type="text" id="searchbox" placeholder="Pesquisar" />
          </div>
        </div>
      </div>
    </div>
  )
}
