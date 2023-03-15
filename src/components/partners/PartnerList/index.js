import Image from 'next/image';
import React from 'react';
import Button from 'src/components/common/Button';
import PartnerLogo from 'src/components/common/PartnerLogo';
import Plus from '@ui-icons/PlusLg.svg';
import styles from './PartnerList.module.scss';
import Img from 'src/components/common/Img';

export default function PartnerList({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {
            content.map((client, index) => (
              <div className="col-12 col-md-4 col-lg-3" key={index}>
                <PartnerLogo>
                  <a className="link-image" href={client.attributes.link}>
                    <Img {...client.attributes.logo} />
                  </a>
                </PartnerLogo>
              </div>
            ))
          }
        </div>
      </div>
      <Button RightIcon={Plus} className="large outline dark" btnElement>Ver Mais</Button>
    </div>
  )
}
