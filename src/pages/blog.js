import Head from 'next/head';
import React from 'react';
import Banner from 'src/components/blog/Banner';
import PostList from 'src/components/blog/PostList';
import Section from 'src/components/common/Section';
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
        <Section id="home" data-bg="dark" pt="176" pb="96" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner />
        </Section>
        <Section mt="120" data-bg="light">
          <PostList />
        </Section>
      </main>
      <Footer />
    </>
  )
}
