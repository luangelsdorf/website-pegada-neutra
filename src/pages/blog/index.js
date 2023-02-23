import Head from 'next/head';
import React from 'react';
import Banner from 'src/components/blog/Banner';
import PostList from 'src/components/blog/PostList';
import Section from 'src/components/common/Section';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import fetchAPI from 'src/utils/fetch';

export default function Blog({ blog, postList, info, footer }) {
  return (
    <>
      <Head>
        <title>Blog | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main>
        <Section id="home" data-bg="dark" pt="176" pb="96" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner content={blog} />
        </Section>

        <Section mt="120" data-bg="light">
          <PostList posts={postList} />
        </Section>
      </main>
      <Footer info={info} content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const blog = await fetchAPI('blog');
  const postList = await fetchAPI('posts', '&pagintion[start]=0&pagination[limit]=6&sort=createdAt:DESC', false, true);
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      blog,
      postList,
      info,
      footer,
    },
    revalidate: 10,
  }
}