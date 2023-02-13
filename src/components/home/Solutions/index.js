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
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal',
          start: 'top top',
          end: self => `top ${-(self.trigger.scrollWidth - innerWidth + 250)}`,
          scrub: true,
          pin: true,
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
      href: '/solucoes',
      /* href: '/solucoes#créditos-de-reciclagem', */
    },
    {
      id: 2,
      icon: 'Carbon',
      title: 'Créditos de Carbono',
      text: 'Créditos de carbono provenientes de energia renovável e reflorestamento.',
      href: '/solucoes',
      /* href: '/solucoes#créditos-de-carbono', */
    },
    {
      id: 3,
      icon: 'World',
      title: 'Ações Sócio-Ambientais',
      text: 'Participe a projetos de conscientização e limpeza do meio ambiente.',
      href: '/solucoes',
      /* href: '/solucoes#ações-socioambientais', */
    },
    {
      id: 4,
      icon: 'Environmental',
      title: 'Soluções Customizadas',
      text: 'Cada empresa é única, nada mais natural que sua solução seja também.',
      href: '/solucoes',
      /* href: '/solucoes#soluções-customizadas', */
    },
  ]

  const Card = ({ icon, title, text, href, className, ...rest }) => (
    <article className={`${styles.card} ${className ?? ''}`} {...rest}>
      <Image width={70} height={70} src={`/images/icons/brand/${icon}.svg`} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <Button divElement link className="dark" href={href} RightIcon={ArrowRight}>Saiba Mais</Button>
    </article>
  )

  return (
    <div className={styles.section}>
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
                <div className="co-12 col-xl-5 d-flex align-items-center" key={card.id}>
                  <Link href={card.href} className="link-image">
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
    </div>
  )
}
