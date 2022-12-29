import ArrowRight from 'public/images/icons/ArrowRight.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Partners.module.scss';

export default function Partners({ content }) {
  const data = [
    {
      id: 1,
      logo: 'tres',
    },
    {
      id: 2,
      logo: 'ambev',
    },
    {
      id: 3,
      logo: 'coca-cola',
    },
    {
      id: 4,
      logo: 'nestle',
    },
    {
      id: 5,
      logo: 'ifood',
    },
    {
      id: 6,
      logo: 'itambe',
    },
    {
      id: 7,
      logo: 'piraque',
    },
    {
      id: 8,
      logo: 'jbs',
    },
  ]

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">
            <header>
              <p className="overline light">Empresas que Neutralizam</p>
              <h2>Marcas Parceiras</h2>
            </header>
          </div>
          {
            data.map(client => (
              <div className="col-6 col-lg-3" key={client.id}>
                <div className={styles.logo}>
                  <Image src={`/images/partners/${client.logo}.png`} width={150} height={150} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Link href="#" className="btn outline dark-green large">
        Ver Lista Completa <ArrowRight />
      </Link>
    </section>
  )
}
