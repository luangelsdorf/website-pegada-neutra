import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import styles from './GrowEffect.module.scss';

export default function GrowEffect({ children, style, stOptions }) {

  const elementStyles = {
    position: 'relative',
    marginTop: '-104px',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--dark-green))',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    transformOrigin: 'top',
    ...style
  };

  useEffect(() => {
    const containerWidth = document.querySelector('#grow .container')?.getBoundingClientRect().width - 8;
    const vw = window.innerWidth;
    const initialScale = containerWidth / vw;
    const body = document.getElementById('grow');
    if (body) body.style.transform = `scale(${initialScale})`;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('#grow', {
        scrollTrigger: {
          onUpdate: e => console.log(e.progress),
          /* markers: 1, */
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

    return () => ctx.revert();
  }, []);

  return (
    <div style={elementStyles} id="grow">
      {
        children
      }
    </div>
  )
}
