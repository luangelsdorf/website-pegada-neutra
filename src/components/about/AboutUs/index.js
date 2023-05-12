import React, { useEffect, useState } from 'react';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import styles from './AboutUs.module.scss';
import Linkedin from '@ui-icons/Linkedin.svg';
import Facebook from '@ui-icons/Facebook.svg';
import Instagram from '@ui-icons/Instagram.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function AboutUs({ content, info }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      gsap.fromTo('#sobre h2 div:first-child',
        { x: 200, },
        {
          x: -100,
          scrollTrigger: {
            trigger: '#sobre',
            scrub: 1,
            onUpdate: self => self.progress.toFixed(1) === '0.5' ? setLight(false) : null,
          },
        });

      gsap.fromTo('#sobre h2 div:last-child',
        { x: -200, },
        {
          x: 100,
          scrollTrigger: {
            trigger: '#sobre',
            scrub: 1,
            onUpdate: self => self.progress.toFixed(1) === '0.5' ? setLight(true) : null,
          },
        });
    });

    mm.add('(max-width: 992px)', () => {
      gsap.to('#sobre h2 div:first-child', {
        scrollTrigger: {
          trigger: '#sobre',
          start: '120px 15%',
          scrub: 1,
          onEnter: () => setLight(true),
          onLeaveBack: () => setLight(false),
        },
      })
    })

    return () => mm.revert();
  }, []);

  return (
    <div className={`${styles.section}${light ? ' ' + styles.light : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 order-1 order-lg-0">
            <header>
              <h2>
                {
                  // split line breaks into separate elements
                  content.title.split('\n').map((part, index) => <div key={index}>{part}</div>)
                }
              </h2>
            </header>
          </div>
          <div className="col-12 col-lg-5 order-0 order-lg-1">
            <Img {...content.image} />
          </div>
          <div className="col-12 col-lg-5 order-2">
            <div className={styles.textContent}>
              <p>{content.firstText}</p>
              <p>{content.secondText}</p>
              <div className={styles.socialMedia}>
                <p>Nos encontre em:</p>
                <div>
                  <Button target="_blank" link href={info.social.linkedin} className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Linkedin} />
                  <Button target="_blank" link href={info.social.facebook} className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Facebook} />
                  <Button target="_blank" link href={info.social.instagram} className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Instagram} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
