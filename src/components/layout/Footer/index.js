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

export default function Footer({ content, light }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* gsap.to('footer', {
        scrollTrigger: {
          markers: true,
          trigger: 'footer',
          start: 'bottom bottom',
          end: '+=100% bottom',
          scrub: true,
        },
        yPercent: 100,
      }) */
      gsap.set('footer', {yPercent: 200})
      gsap.to('footer', {
        scrollTrigger: {
          scrub: true,
        },
        yPercent: 0,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className={`${styles.section}${light ? ' ' + styles.light : ''}`} /* style={{bottom: '-592px'}} */>
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-4">
            <div className={styles.about}>
              <LogoHorizontal />
              <p>A Pegada Neutra® foi criada por recicladores e agentes ambientáis que acreditam que a economia e o meio ambiente podem coexistir em harmonia.</p>
              <Button link href="#sobre-nos" className={`small ${light ? 'greenery' : 'phthalo'}`} RightIcon={ArrowRight}>Saiba Mais</Button>
            </div>
          </div>

          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.solutions}>
              <h2>Nossas Soluções</h2>
              <ul>
                <li>
                  <Button link className={`${light ? 'dark' : 'phthalo'}`} href="#">Créditos de Reciclagem</Button>
                </li>
                <li>
                  <Button link className={`${light ? 'dark' : 'phthalo'}`} href="#">Créditos de Carbono</Button>
                </li>
                <li>
                  <Button link className={`${light ? 'dark' : 'phthalo'}`} href="#">Ações Sociombientais</Button>
                </li>
                <li>
                  <Button link className={`${light ? 'dark' : 'phthalo'}`} href="#">Soluções Customizadas</Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.contact}>
              <Button href="#tel" className="outline phthalo small" LeftIcon={TelephoneFill}>+55 51 3333.3333</Button>
              <ul>
                <li>
                  <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Fale Conosco</Button>
                </li>
                <li>
                  <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Perguntas Frequentes</Button>
                </li>
                <li>
                  <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Termos e Condições</Button>
                </li>
                <li>
                  <Button className={`small ${light ? 'dark' : 'light'}`} link href="#">Política de Privacidade</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <div>
            <a className="link-image" href="https://abarca.net.br" target="_blank" rel="noopener noreferrer">
              <Abarca />
            </a>
          </div>
          <p>Todos os Direitos Reservados © 2023</p>
          <div>
            <Button link className="link-image" LeftIcon={Linkedin} href="linkedin.com" />
            <Button link className="link-image" LeftIcon={Facebook} href="facebook.com" />
            <Button link className="link-image" LeftIcon={Instagram} href="instagram.com" />
          </div>
        </div>
      </div>
    </footer>
  )
}
