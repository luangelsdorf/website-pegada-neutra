import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main style={{paddingTop: '80px'}}>
        <h1 style={{font: 'var(--display)'}}>Homepage</h1>
      </main>
    </>
  )
}
