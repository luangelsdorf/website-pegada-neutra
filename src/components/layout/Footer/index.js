import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import LogoHorizontal from 'public/images/logo-horizontal.svg';
import Abarca from '@ui-icons/Abarca.svg';
import Linkedin from '@ui-icons/Linkedin.svg';
import Facebook from '@ui-icons/Facebook.svg';
import Instagram from '@ui-icons/Instagram.svg';
import Button from 'src/components/common/Button';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import TelephoneFill from '@ui-icons/TelephoneFill.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Footer({ content, light, info }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      let intensity = 30; // (0 - 100)

      gsap.set(`.${styles.inner}`, { yPercent: -intensity });
      gsap.to(`.${styles.inner}`, {
        scrollTrigger: {
          trigger: `.${styles.inner}`,
          start: `${intensity}% bottom`,
          end: `2${intensity}% bottom`,
          /* pin: true, */
          scrub: true,
          pinSpacing: false,
        },
        yPercent: intensity,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className={`${styles.section}${light ? ' ' + styles.light : ''}`} data-bg={light ? 'light' : 'dark'}>
      <div className={styles.inner}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className={styles.about}>
                <LogoHorizontal />
                <p>{content.text}</p>
                <Button link href="/sobre-nos" className={`small ${light ? 'greenery' : 'phthalo'}`} RightIcon={ArrowRight}>Saiba Mais</Button>
              </div>
            </div>
            <div className="col-12 col-lg-3 offset-lg-1">
              <div className={styles.solutions}>
                <h2>Nossas Soluções</h2>
                <ul>
                  <li>
                    <Button link className={`${light ? 'dark' : 'phthalo'}`} href="/solucoes#créditos-de-reciclagem">Créditos de Reciclagem</Button>
                  </li>
                  <li>
                    <Button link className={`${light ? 'dark' : 'phthalo'}`} href="/solucoes#créditos-de-carbono">Créditos de Carbono</Button>
                  </li>
                  <li>
                    <Button link className={`${light ? 'dark' : 'phthalo'}`} href="/solucoes#ações-socioambientais">Ações Sociombientais</Button>
                  </li>
                  <li>
                    <Button link className={`${light ? 'dark' : 'phthalo'}`} href="/solucoes#soluções-customizadas">Soluções Customizadas</Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 offset-lg-1">
              <div className={styles.contact}>
                <Button href="#tel" className="outline phthalo small d-none d-lg-inline-flex" LeftIcon={TelephoneFill}>{info.phone}</Button>
                <ul>
                  <li>
                    <Button className={`small ${light ? 'dark' : 'light'}`} link href="/contato">Fale Conosco</Button>
                  </li>
                  <li>
                    <Button className={`small ${light ? 'dark' : 'light'}`} link href="/contato">Perguntas Frequentes</Button>
                  </li>
                  <li>
                    <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Termos e Condições</Button>
                  </li>
                  <li>
                    <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Política de Privacidade</Button>
                  </li>
                </ul>
                <Button href="#tel" className="outline phthalo small d-inline-flex d-lg-none" LeftIcon={TelephoneFill}>{info.phone}</Button>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div>
              <a className="link-image" href="https://abarca.net.br" target="_blank" rel="noopener noreferrer">
                <Abarca />
              </a>
            </div>
            <p>{content.copyright}</p>
            <div>
              <Button link className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Linkedin} href={content.social.linkedin} />
              <Button link className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Facebook} href={content.social.facebook} />
              <Button link className={`social ${light ? 'negative' : 'positive'}`} LeftIcon={Instagram} href={content.social.instagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
