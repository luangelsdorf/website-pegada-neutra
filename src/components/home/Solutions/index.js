import React, { useEffect } from 'react';
import styles from './Solutions.module.scss';
import Whats from 'public/images/icons/Whatsapp.svg';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from 'public/images/icons/ArrowRight.svg';

export default function Solutions({ content }) {

  useEffect(() => {
    const spaceHolder = document.querySelector(`.${styles.spaceHolder}`);
    const horizontal = document.querySelector(`.${styles.horizontal}`);
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 400;
    }

    window.addEventListener('scroll', () => {
      const sticky = document.querySelector(`.${styles.sticky}`);
      horizontal.style.transform = `translate3d(-${sticky.offsetTop}px, 0px, 0px)`;
    });

    window.addEventListener('resize', () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
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

  const Card = ({ icon, title, text }) => (
    <article className={styles.card}>
      <Image width={80} height={80} src={`/images/icons/brand/${icon}.svg`} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href="#">Saiba Mais <ArrowRight /></Link>
    </article>
  )

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.spaceHolder}>
          <div className={styles.sticky}>
            <div className={styles.horizontal}>
              <div className="row" style={{ flexWrap: 'nowrap', height: '100%', width: '100vw' }}>
                <div className="col-12 col-lg-4 offset-lg-1">
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
                  cards.map(card => (
                    <div className="col-5 d-flex align-items-center" key={card.id}>
                      <Card {...card} />
                    </div>
                  ))
                }
                <div className="col-12 col-lg-4 offset-lg-1">
                  <div className={styles.lastPart}>
                    <header>
                      <p className="overline dark">Se Interessou?</p>
                      <h2>{'Junte-se a essa \ntransformação'}</h2>
                      <p>Vamos lhe ajudar a reduzir seu impacto sobre o meio ambiente.</p>
                      <a href="#" className="btn">
                        <Whats /> <span>Fale Conosco</span>
                      </a>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}