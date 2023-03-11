import Head from 'next/head';
import React from 'react';
import Banner from 'src/components/blog/Banner';
import PostList from 'src/components/blog/PostList';
import Section from 'src/components/common/Section';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import fetchAPI from 'src/utils/fetch';

export default function Blog({ blog, postList, pagination, info, footer }) {
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
          <PostList posts={postList} pagination={pagination} />
        </Section>
      </main>
      <Footer info={info} content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const blog = await fetchAPI('blog');
  const postListMeta = await fetchAPI('posts', `&pagination[page]=${1}&pagination[pageSize]=${6}&sort=createdAt:DESC`, false, false);
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  const { data: postList, meta: { pagination } } = postListMeta;

  return {
    props: {
      blog,
      postList,
      pagination,
      info,
      footer,
    },
    revalidate: 10,
  }
}