import Head from 'next/head';
import React from 'react';
import Banner from 'src/components/blog/Banner';
import PostList from 'src/components/blog/PostList';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main>
        <Banner />
        <PostList />
      </main>
      <Footer />
    </>
  )
}
