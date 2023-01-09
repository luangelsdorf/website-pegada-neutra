import Image from 'next/image';
import React from 'react';
import Button from 'src/components/common/Button';
import PartnerLogo from 'src/components/common/PartnerLogo';
import Plus from '@ui-icons/PlusLg.svg';
import styles from './PartnerList.module.scss';

export default function PartnerList({ content }) {

  const data = [
    {
      logo: 'tres',
    },
    {
      logo: 'ambev',
    },
    {
      logo: 'coca-cola',
    },
    {
      logo: 'nestle',
    },
    {
      logo: 'ifood',
    },
    {
      logo: 'itambe',
    },
    {
      logo: 'piraque',
    },
    {
      logo: 'jbs',
    },
    {
      logo: 'tres',
    },
    {
      logo: 'ambev',
    },
    {
      logo: 'coca-cola',
    },
    {
      logo: 'nestle',
    },
    {
      logo: 'ifood',
    },
    {
      logo: 'itambe',
    },
    {
      logo: 'piraque',
    },
    {
      logo: 'jbs',
    },
    {
      logo: 'nestle',
    },
    {
      logo: 'ifood',
    },
    {
      logo: 'itambe',
    },
    {
      logo: 'piraque',
    },
  ];

  return (
    <section className={styles.section} data-bg="light">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {
            data.map((client, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <PartnerLogo>
                  <Image src={`/images/partners/${client.logo}.png`} width={150} height={150} alt="" />
                </PartnerLogo>
              </div>
            ))
          }
        </div>
      </div>
      <Button RightIcon={Plus} className="large outline dark" btnElement>Ver Mais</Button>
    </section>
  )
}
