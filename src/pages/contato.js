import Head from 'next/head';
import React from 'react';
import Section from 'src/components/common/Section';
import Banner from 'src/components/contact/Banner';
import Contact from 'src/components/contact/Contact';
import FAQ from 'src/components/contact/FAQ';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function Contato({ contact, footer }) {
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

        <Section data-bg="dark">
          <Contact content={{ ...contact.form, cover: contact.formCover }} />
        </Section>

        <Section data-bg="light">
          <FAQ content={contact.faq} />
        </Section>

        <Footer content={footer} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const contact = await fetchAPI('contact');
  const footer = await fetchAPI('footer');

  return {
    props: {
      contact,
      footer,
    },
    revalidate: 10,
  }
}