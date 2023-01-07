import React, { useEffect } from 'react';
import styles from './Solutions.module.scss';
import Whats from '@ui-icons/Whatsapp.svg';
import Image from 'next/image';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import Button from 'src/components/common/Button';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Solutions({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('.horizontal', {
        x: (index, target) => -(target.scrollWidth - innerWidth + 250),
        scrollTrigger: {
          trigger: '.horizontal',
          start: 'top top',
          end: self => `top ${-(self.trigger.scrollWidth - innerWidth + 250)}`,
          scrub: true,
          pin: true,
          anticipatePin: true,
          invalidateOnRefresh: true,
        },
      });
    })

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      icon: 'Recycle',
      title: 'Créditos de Reciclagem',
      text: 'Oferecemos a compensação ambiental através dos créditos de reciclagem.',
    },
    {
      id: 2,
      icon: 'Carbon',
      title: 'Créditos de Carbono',
      text: 'Créditos de carbono provenientes de energia renovável e reflorestamento.',
    },
    {
      id: 3,
      icon: 'World',
      title: 'Ações Sócio-Ambientais',
      text: 'Participe a projetos de conscientização e limpeza do meio ambiente.',
    },
    {
      id: 4,
      icon: 'Environmental',
      title: 'Soluções Customizadas',
      text: 'Cada empresa é única, nada mais natural que sua solução seja também.',
    },
  ]

  const Card = ({ icon, title, text, className, ...rest }) => (
    <article className={`${styles.card} ${className ?? ''}`} {...rest}>
      <Image width={80} height={80} src={`/images/icons/brand/${icon}.svg`} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <Button divElement link className="dark" href="#saiba-mais" RightIcon={ArrowRight}>Saiba Mais</Button>
    </article>
  )

  return (
    <section className={styles.section}>
      <div className="container" style={{ height: '100%' }}>
        <div className="horizontal">
          <div className="row container" style={{ flexWrap: 'nowrap', height: '100%' }}>
            <div className="col-12 col-lg-4">
              <div className={styles.firstPart}>
                <header>
                  <p className="overline dark">Faça a Diferença</p>
                  <h2>{'Nossas \nSoluções'}</h2>
                  <p>O selo <strong>Pegada Neutra®</strong> oferece quatro soluções para ajudar sua empresa em sua jornada ambiental.</p>
                </header>
              </div>
            </div>
            <div className="col-1" />
            {
              cards.map((card, index) => (
                <div className="co-12 col-lg-5 d-flex align-items-center" key={card.id}>
                  <Link href="#saiba-mais" className="link-image">
                    <Card {...card} className={`${index === 0 ? styles.first : ''} ${index === cards.length - 1 ? styles.last : ''}`} />
                  </Link>
                </div>
              ))
            }
            <div className="col-12 col-lg-5">
              <div className={styles.lastPart}>
                <header>
                  <p className="overline dark">Se Interessou?</p>
                  <h2>{'Junte-se a essa \ntransformação'}</h2>
                  <p>Vamos lhe ajudar a reduzir seu impacto sobre o meio ambiente.</p>
                  <Button href="#whatsapp-chat" LeftIcon={Whats}>Fale Conosco</Button>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
