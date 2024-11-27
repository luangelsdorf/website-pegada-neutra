import React, { useEffect, useState } from 'react';
import Button from 'src/components/common/Button';
import Plus from '@ui-icons/PlusLg.svg';
import PartnerLogo from 'src/components/common/PartnerLogo';
import styles from './PartnerList.module.scss';
import Img from 'src/components/common/Img';
import Filter from '../Filter';
import Spinner from 'src/components/common/Spinner';
import fetchAPI from 'src/utils/fetch';

export default function PartnerList({ content, categories }) {
  const [clients, setClients] = useState(content);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log(clients);
  

  useEffect(() => {
    if (currentPage === 1) return;
    async function getData() {
      let data;
      try {
        setIsLoading(true);
        data = await fetchAPI('partners', `&pagination[page]=${currentPage}&pagination[pageSize]=20&sort=id:DESC`);
        setClients(prev => [...prev, ...data]);
        window.dispatchEvent(new Event('resize'));
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setIsLoading(false);
      }
      console.log(data);
    }
    getData();
  }, [currentPage]);

  return (
    <div className={styles.section}>
      <Filter categories={categories} setClients={setClients} />

      <div className={styles.list} id="partner-list">
        <div className={styles.loading}>
          <Spinner width="64px" height="64px" style={{ color: 'rgb(var(--dark-green))' }} />
        </div>

        <div className="container">
          <div className="row gy-4 justify-content-center">
            {
              clients.length === 0 ? <h2>Nenhum parceiro encontrado.</h2> : null
            }
            {
              clients.map((client, index) => (
                <div className="col-12 col-md-4 col-lg-3" key={index}>
                  <PartnerLogo>
                    <a className="link-image" href={client.attributes.link} target="_blank" rel="noopener noreferrer">
                      <Img {...client.attributes.logo} />
                    </a>
                  </PartnerLogo>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Button
        RightIcon={isLoading ? null : Plus}
        className="large outline dark"
        btnElement
        disabled={isLoading}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {isLoading ? (
          <Spinner />
        ): (
          <span>Ver Mais</span>
        )}
      </Button>
    </div>
  )
}
