import Head from 'next/head';
import React from 'react'
import Section from 'src/components/common/Section';
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
          <Banner cover={post.cover} title={post.title} date={post.publishedAt} cat={post.categorias} />
        </Section>

        <div className="col-12 col-lg-8 mx-auto">
          <Section pt="96" pb="24">
            <Body content={post.body} />
          </Section>
          <Section>
            <Share slug={post.slug} postTitle={post.title} />
          </Section>
        </div>
      </main>
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
  const singlePost = await fetchAPI('posts', `&filters[slug][$eq]=${slug}`);
  const recentPosts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${5}`, false, true);
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