import React, { useState } from 'react';
import Button from 'src/components/common/Button';
import Plus from '@ui-icons/PlusLg.svg';
import PartnerLogo from 'src/components/common/PartnerLogo';
import styles from './PartnerList.module.scss';
import Img from 'src/components/common/Img';
import Filter from '../Filter';
import Spinner from 'src/components/common/Spinner';

export default function PartnerList({ content, categories }) {
  const [clients, setClients] = useState(content);

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
      {/* <Button RightIcon={Plus} className="large outline dark" btnElement>Ver Mais</Button> */}
    </div>
  )
}
