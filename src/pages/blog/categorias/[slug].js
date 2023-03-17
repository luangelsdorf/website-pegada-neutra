import Head from 'next/head';
import React from 'react';
import Banner from 'src/components/blog/Banner';
import PostList from 'src/components/blog/PostList';
import Section from 'src/components/common/Section';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import fetchAPI from 'src/utils/fetch';

export default function Categories({ blog, postList, pagination, categories, info, footer, currentCategory }) {
  return (
    <>
      <Head>
        <title>Blog | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main>
        <Section id="home" data-bg="dark" pt="176 168" pb="96 80" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner categories={categories} currentCategory={currentCategory} content={blog} />
        </Section>

        <Section mt="120" data-bg="light">
          <PostList posts={postList} pagination={pagination} />
        </Section>
      </main>
      <Footer info={info} content={footer} />
    </>
  )
}

export async function getStaticPaths() {
  const categories = await fetchAPI('categories', '', false);
  const paths = categories.map(cat => ({
    params: { slug: cat.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const blog = await fetchAPI('blog');
  const postListMeta = await fetchAPI('posts', `&pagination[page]=${1}&pagination[pageSize]=${6}&sort=createdAt:DESC&filter&filters[$and][0][categorias][slug][$contains]=${params.slug}`, false, false);
  const categories = await fetchAPI('categories', `&pagination[page]=${1}&pagination[pageSize]=${3}&sort=createdAt:DESC`, false);
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  const { data: postList, meta: { pagination } } = postListMeta;

  return {
    props: {
      blog,
      postList,
      pagination,
      categories,
      info,
      footer,
      currentCategory: params.slug,
    },
    revalidate: 10,
  }
}