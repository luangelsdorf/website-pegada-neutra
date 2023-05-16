import Head from "next/head";
import Section from "src/components/common/Section";
import Footer from "src/components/layout/Footer";
import Banner from "src/components/partners/Banner";
import Body from "src/components/post/Body";
import fetchAPI from "src/utils/fetch";

export default function Privacy({privacy, info, footer}) {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Pegada Neutra</title>
        <meta name="description" content="Confira aqui as informações relacionadas à política de privacidade do site da Pegada Neutra" />
      </Head>

      <main>
        <Section id="home" data-bg="dark" pb="120 80" pt="200 168" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner content={{ title: { title: 'Política de Privacidade' } }} />
        </Section>

        <Section style={{ backgroundColor: 'rgb(var(--light-green))' }} pb="80 72" data-bg="light">
          <div className="col-12 col-lg-8 mx-auto">
            <Body content={privacy.content} />
          </div>
        </Section>
      </main>

      <Footer content={footer} info={info} />
    </>
  )
}

export async function getStaticProps() {
  const privacy = await fetchAPI('privacy-policy');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      privacy,
      info,
      footer,
    },
    revalidate: 10,
  }
}