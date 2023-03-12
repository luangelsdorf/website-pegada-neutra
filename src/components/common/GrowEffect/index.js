import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import styles from './GrowEffect.module.scss';

export default function GrowEffect({ children, style, stOptions }) {
  useEffect(() => {
    if (matchMedia('(min-width: 992px)').matches) {
      const containerWidth = document.querySelector('#grow .container')?.getBoundingClientRect().width - 8;
      const vw = window.innerWidth;
      const initialScale = containerWidth / vw;
      const body = document.getElementById('grow');
      if (body) body.style.transform = `scale(${initialScale})`;
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 992px)', () => {
      gsap.to('#grow', {
        scrollTrigger: {
          trigger: '#grow',
          scrub: 0.9,
          start: 'top 85%',
          end: 'top 15%',
          ...stOptions,
        },
        scale: 1,
        duration: 1,
      });
    });

    return () => mm.revert();
  }, [stOptions]);

  return (
    <div style={style} id="grow" className={styles.grow}>
      {
        children
      }
    </div>
  )
}
