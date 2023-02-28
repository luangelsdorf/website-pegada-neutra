import Head from 'next/head';
import React, { useEffect } from 'react';
import Section from 'src/components/common/Section';
import Banner from 'src/components/common/Banner';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';
import RecyclingCredits from 'src/components/solutions/RecyclingCredits';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CarbonCredits from 'src/components/solutions/CarbonCredits';
import EnvironmentalActions from 'src/components/solutions/EnvironmentalActions';
import CustomSolutions from 'src/components/solutions/CustomSolutions';
import GrowEffect from 'src/components/common/GrowEffect';
import FAQ from 'src/components/contact/FAQ';

export default function SobreNos({ services, faq, info, footer }) {
  return (
    <>
      <Head>
        <title>Soluções | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section data-bg="light" id="home">
          <Banner content={services.banner} solutions />
        </Section>

        <GrowEffect style={{ backgroundColor: 'rgb(var(--dark-green))' }}>
          <Section data-bg="dark" id="créditos-de-reciclagem" pb="96">
            <RecyclingCredits content={services.recyclingCredits} />
          </Section>
        </GrowEffect>

        <Section data-bg="light" id="créditos-de-carbono">
          <CarbonCredits content={services.carbonCredits} />
        </Section>

        <Section data-bg="dark" id="ações-socioambientais">
          <EnvironmentalActions content={services.environmentalActions} />
        </Section>

        <Section data-bg="light" id="soluções-customizadas" style={{ backgroundColor: 'rgb(var(--dark-green))' }}>
          <CustomSolutions content={services.customSolutions} />
        </Section>

        <Section data-bg="light">
          <FAQ content={faq} />
        </Section>
      </main>

      <Footer light info={info} content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const services = await fetchAPI('service');
  const faq = await fetchAPI('faq');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      services,
      faq,
      info,
      footer,
    },
    revalidate: 10,
  }
}