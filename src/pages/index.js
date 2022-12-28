import Head from 'next/head';
import Link from 'next/link';
import Banner from 'src/components/home/Banner';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main>
        <Banner />
      </main>
    </>
  )
}
