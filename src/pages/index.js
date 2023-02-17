import Head from 'next/head';
import AboutUs from 'src/components/home/AboutUs';
import Banner from 'src/components/common/Banner';
import Solutions from 'src/components/home/Solutions';
import Testimonials from 'src/components/home/Testimonials';
import Partners from 'src/components/home/Partners';
import RecentPosts from 'src/components/home/RecentPosts';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';
import Section from 'src/components/common/Section';
import GrowEffect from 'src/components/common/GrowEffect';

export default function Home({ home, testimonials, partners, recentPosts, info, footer }) {
  return (
    <>
      <Head>
        <title>Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section data-bg="light" id="home">
          <Banner content={home.banner} />
        </Section>

        <GrowEffect style={{backgroundColor: 'rgb(var(--light-green))'}}>
          <Section data-bg="light" id="sobre-nos" pb="120">
            <AboutUs content={home.about} />
          </Section>
        </GrowEffect>

        <Section data-bg="dark" id="solucoes">
          <Solutions content={home.solutions} />
        </Section>

        <Section data-bg="light" id="depoimentos" pb="120" pt="120">
          <Testimonials testimonials={testimonials} content={home.testimonials} />
        </Section>

        <Section data-bg="light" id="parceiros" pb="96" pt="96">
          <Partners partners={partners} content={home.partners} />
        </Section>

        <Section data-bg="dark" id="posts" pt="96" pb="120" style={{ backgroundColor: 'rgb(var(--dark-green))' }}>
          <RecentPosts postList={recentPosts} />
        </Section>

        <Footer content={footer} info={info} light />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home');
  const testimonials = await fetchAPI('testimonials', `&pagination[pageSize]=${6}&pagination[page]=${1}`, false, false);
  const partners = await fetchAPI('partners', `&pagination[start]=${0}&pagination[limit]=${8}`);
  const recentPosts = await fetchAPI('posts', `&pagination[start]=${0}&pagination[limit]=${5}`, false, true);
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      home,
      testimonials,
      partners,
      recentPosts,
      info,
      footer,
    },
    revalidate: 10,
  }
}