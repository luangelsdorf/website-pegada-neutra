import React from 'react';
import styles from './Banner.module.scss';
import Button from 'src/components/common/Button';
import WhatsIcon from 'public/images/icons/Whatsapp.svg';

export default function Banner({ content, info }) {
  return (
    <div className={styles.section}>
      <div>
        <p className="overline large light">{content.title.overline}</p>
        <h1>{content.title.title}</h1>
        <Button
          href={`https://api.whatsapp.com/send?phone=${info.phone.replace(/[^0-9]/g, '')}`}
          rel="noopener noreferrer"
          target="_blank"
          className="large"
          LeftIcon={WhatsIcon}
        >
          Prefiro por WhatsApp
        </Button>
      </div>
    </div>
  )
}
