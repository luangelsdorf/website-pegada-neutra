import React from 'react';
import styles from './Body.module.scss';
import { env } from 'src/utils/env';
import Head from 'next/head';

export default function Body({ content }) {

  let newContent = content.replaceAll('<a', '<a class="greenery"');

  if (env === 'dev') {
    newContent = newContent.replaceAll('/uploads', `${process.env.NEXT_PUBLIC_API_URL}/uploads`);
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ckeditor.min.css" />
      </Head>

      <article className={`ck-content ${styles.article}`} dangerouslySetInnerHTML={{ __html: newContent }} />
    </>
  )
}
