import React from 'react';
import styles from './Footer.module.scss';
import LogoHorizontal from 'public/images/logo-horizontal.svg';
import Abarca from 'public/images/icons/Abarca.svg';
import Linkedin from 'public/images/icons/Linkedin.svg';
import Facebook from 'public/images/icons/Facebook.svg';
import Instagram from 'public/images/icons/Instagram.svg';
import Link from 'next/link';

export default function Footer({ content, light }) {
  return (
    <footer className={`${styles.section}${light ? ' ' + styles.light : ''}`}>
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-4">
            <div className={styles.about}>
              <LogoHorizontal />
              <p>A Pegada Neutra® foi criada por recicladores e agentes ambientáis que acreditam que a economia e o meio ambiente podem coexistir em harmonia.</p>
              <Link href="#sobre-nos">Saiba Mais</Link>
            </div>
          </div>

          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.solutions}>
              <h2>Nossas Soluções</h2>
              <ul>
                <li>
                  <Link href="#">Créditos de Reciclagem</Link>
                </li>
                <li>
                  <Link href="#">Créditos de Carbono</Link>
                </li>
                <li>
                  <Link href="#">Ações Sociombientais</Link>
                </li>
                <li>
                  <Link href="#">Soluções Customizadas</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-3 offset-lg-1">
            <div className={styles.contact}>
              <Link href="#tel" className="btn outline phthalo small">+55 51 3333.3333</Link>
              <ul>
                <li>
                  <Link href="#">Fale Conosco</Link>
                </li>
                <li>
                  <Link href="#">Perguntas Frequentes</Link>
                </li>
                <li>
                  <Link href="#">Termos e Condições</Link>
                </li>
                <li>
                  <Link href="#">Política de Privacidade</Link>
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
          <p>Todos os Direitos Reservados © 2022</p>
          <div>
            <a className="link-image" href="linkedin.com">
              <Linkedin />
            </a>
            <a className="link-image" href="facebook.com">
              <Facebook />
            </a>
            <a className="link-image" href="instagram.com">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
