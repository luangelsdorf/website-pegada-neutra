import React, { useEffect } from 'react';
import { apiURL } from 'src/utils/env';
import styles from './CarbonCredits.module.scss';
import Plus from '@ui-icons/PlusLg.svg';
import Img from 'src/components/common/Img';
import Button from 'src/components/common/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function CarbonCredits({ content }) {

  /* useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      let intensity = 100; // (0 - 100)

      gsap.to(`.${styles.section}`, {
        scrollTrigger: {
          markers: 1,
          trigger: `.${styles.section}`,
          // start: `${intensity}% 150%`,
          // end: `2${intensity}% 150%`,
          scrub: true,
        },
        yPercent: -intensity,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []); */

  return (
    <div className={`${styles.section}`}>
      <div className={styles.videoSection}>
        <video src={apiURL + content.video.data.attributes.url} autoPlay muted loop />
        <div>
          <div className="container">
            <header>
              <div>
                <Img {...content.about.icon} />
                <h2>{content.about.title}</h2>
              </div>
              <Button className="outline large light" LeftIcon={Plus}>Adquirir Créditos de CO2</Button>
            </header>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.textSection}>
          <p>{content.about.text}</p>
        </div>
      </div>
    </div>
  )
}
