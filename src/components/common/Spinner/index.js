import React from 'react';
import styles from './Spinner.module.scss';

export default function Spinner({ height, width, style, ...other }) {
  return (
    <div style={{ height, width, ...style }} className={styles.spinner} {...other} />
  )
}
