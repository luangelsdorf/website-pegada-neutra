import Head from "next/head";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Banner from "src/components/partners/Banner";
import Body from "src/components/post/Body";
import fetchAPI from "src/utils/fetch";

export default function Terms({ terms, info, footer }) {
  return (
    <>
      <Head>
        <title>Termos e Condições | Pegada Neutra</title>
        <meta name="description" content="Confira aqui os termos e condições para o uso do site da Pegada Neutra" />
      </Head>

      <main>
        <Section id="home" data-bg="dark" pb="120 80" pt="200 168" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner content={{ title: { title: 'Termos e Condições' } }} />
        </Section>

        <Section style={{ backgroundColor: 'rgb(var(--light-green))' }} pb="80 72" data-bg="light">
          <div className="col-12 col-lg-8 mx-auto">
            <Body content={terms.content} />
          </div>
        </Section>
      </main>

      <Footer content={footer} info={info} />
    </>
  )
}

export async function getStaticProps() {
  const terms = await fetchAPI('terms');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      terms,
      info,
      footer,
    },
    revalidate: 10,
  }
}