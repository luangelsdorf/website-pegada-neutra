import React from 'react';
import styles from './PartnerLogo.module.scss';

export default function PartnerLogo({ children }) {
  return (
    <div className={styles.logo}>
      {children}
    </div>
  )
}
