import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
import RecentPosts from 'src/components/home/RecentPosts';
import Footer from 'src/components/layout/Footer';
import Banner from 'src/components/post/Banner';
import Body from 'src/components/post/Body';
import Share from 'src/components/post/Share';
import fetchAPI from 'src/utils/fetch'

export default function Post({ post, recentPosts, info, footer }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Blog Pegada Neutra`}</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section id="#banner" data-bg="dark">
          <Banner cover={post.cover} title={post.title} date={{ date: post.date, created: post.createdAt }} cat={post.categorias} />
        </Section>

        <div className="col-12 col-lg-8 mx-auto">
          <Section data-bg="light" pt="96 16" pb="80 72">
            <Body content={post.body} />
          </Section>

          <Section data-bg="light">
            <Share slug={post.slug} postTitle={post.title} />
          </Section>
        </div>

        <Section mt="120" pt="96" pb="120" style={{ backgroundColor: 'rgb(var(--dark-green))' }}>
          <RecentPosts postList={recentPosts} />
        </Section>
      </main>

      <Footer content={footer} info={info} light />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI('posts', '', false);
  const paths = posts.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { slug } }) {
  const singlePost = await fetchAPI('posts', `&filters[slug][$eq]=${slug}`, false);
  const recentPosts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${5}`, false);
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      post: singlePost[0].attributes,
      recentPosts,
      info,
      footer,
    },

    revalidate: 60,
  }
}