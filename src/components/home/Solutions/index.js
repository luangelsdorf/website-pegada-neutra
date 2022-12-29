import React, { useEffect } from 'react';
import styles from './Solutions.module.scss';
import Card from 'public/images/solution-card.svg';
import Whats from 'public/images/icons/Whatsapp.svg';

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

  return (
    <section className={styles.section}>
      {/* <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 offset-lg-1">
            <div className={styles.spaceHolder}>
              <div className={styles.sticky}>
                <div className={styles.horizontal}>
                  <section className={styles.cards}>
                    <article className={styles.sampleCard}></article>
                    <article className={styles.sampleCard}></article>
                    <article className={styles.sampleCard}></article>
                    <article className={styles.sampleCard}></article>
                    <article className={styles.sampleCard}></article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className={styles.spaceHolder}>
          <div className={styles.sticky}>
            <div className={styles.horizontal}>
              <div className="row" style={{ flexWrap: 'nowrap', height: '100%' }}>
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
                  [0, 1, 2, 3].map(card => (
                    <div className="col-5" key={card}>
                      <Card />
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
