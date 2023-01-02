import Banner from 'src/components/partners/Banner';
import Head from 'next/head';
import Header from 'src/components/layout/Header';
import React from 'react';

export default function Parceiros() {
  return (
    <>
      <Head>
        <title>Parceitos | Pegada Neutra</title>
        <meta name="description" content="Estas são as marcas parceiras da Pegada Neutra" />
      </Head>

      <Header light />

      <main>
        <Banner />
      </main>
    </>
  )
}
