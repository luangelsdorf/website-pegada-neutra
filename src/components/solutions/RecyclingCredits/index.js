import React, { useEffect } from 'react';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import styles from './RecyclingCredits.module.scss';
import PlusLg from '@ui-icons/PlusLg.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function RecyclingCredits({ content }) {

  /* useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      let intensity = 25; // (0 - 100)

      gsap.to(`.${'parallax-section'}`, {
        scrollTrigger: {
          trigger: `.${'parallax-section'}`,
          start: `${intensity}% 150%`,
          end: `2${intensity}% 150%`,
          scrub: true,
        },
        yPercent: -intensity,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []); */

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex align-items-center justify-content-between">
            <Img {...content.intro.icon} />
            <h2>{content.intro.title}</h2>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 d-flex align-items-center">
            <p>{content.intro.text}</p>
          </div>
        </div>
      </div>

      <div className="parallax-section">
        <div className={styles.about}>
          <Img {...content.image} />
          <div>
            <div className="container">
              <h3>{content.about.title}</h3>
              <p>{content.about.text}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.howItWorks}>
            <p>{content.howItWorks}</p>
            <div>
              <Button href="/contato" className="phthalo" LeftIcon={PlusLg}>Adquirir seus Créditos</Button>
              <p>{content.callToAction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
