import Head from 'next/head';
import React from 'react';
import GrowEffect from 'src/components/common/GrowEffect';
import Section from 'src/components/common/Section';
import Banner from 'src/components/contact/Banner';
import Contact from 'src/components/contact/Contact';
import FAQ from 'src/components/contact/FAQ';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function Contato({ contact, faq, info, footer }) {
  return (
    <>
      <Head>
        <title>
          Contato | Pegada Neutra
        </title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section data-bg="light">
          <Banner content={contact.banner} />
        </Section>

        <GrowEffect style={{ backgroundColor: 'rgb(var(--dark-green))', paddingTop: 0, borderRadius: '16px' }} stOptions={{ start: 'top 50%' }}>
          <Section data-bg="dark">
            <Contact content={{ ...contact.form, cover: contact.formCover }} />
          </Section>
        </GrowEffect>

        <Section data-bg="light">
          <FAQ content={faq} />
        </Section>

        <Footer info={info} content={footer} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const contact = await fetchAPI('contact');
  const faq = await fetchAPI('faq');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      contact,
      faq,
      info,
      footer,
    },
    revalidate: 10,
  }
}