import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/logo-line.svg';
import Button from 'src/components/common/Button';
import Recycle from '@brand-icons/Recycle.svg';
import Carbon from '@brand-icons/Carbon.svg';
import World from '@brand-icons/World.svg';
import Environmental from '@brand-icons/Environmental.svg';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import CaretDownFill from '@ui-icons/CaretDownFill.svg';
import Bars from '@ui-icons/Bars.svg';
import WhatsIcon from '@ui-icons/Whatsapp.svg';

export default function Header({ light, phone }) {
  const solutions = [
    {
      Icon: Recycle,
      title: 'Créditos de Reciclagem',
      href: '#créditos-de-reciclagem',
    },
    {
      Icon: Carbon,
      title: 'Créditos de Carbono',
      href: '#créditos-de-carbono',
    },
    {
      Icon: World,
      title: 'Ações Socioambientais',
      href: '#ações-socioambientais',
    },
    {
      Icon: Environmental,
      title: 'Soluções Customizadas',
      href: '#soluções-customizadas',
    },
  ];

  const DropDownCard = ({ Icon, title, href }) => (
    <li>
      <Button className="link-image" link href={`/solucoes${href}`}>
        <Icon />
        <div>{title}</div>
        <Button className="light" RightIcon={ArrowRight} divElement link>Saiba Mais</Button>
      </Button>
    </li>
  );

  function handleClick(e) {
    e.currentTarget.classList.toggle(styles.active);
  }

  function closeMenus() {
    document.querySelector('#solutionsLink').click();
    document.querySelector('[data-bs-target="#links"]').click();
  }

  useEffect(() => {
    require('bootstrap/js/dist/collapse');
  }, []);

  return (
    <header id="header" className={`${styles.header}`}>
      <div className="container" style={{ position: 'relative' }}>
        <Button className={styles.whatsApp} LeftIcon={WhatsIcon} href={`https://api.whatsapp.com/send?phone=${phone}`} target="_blank" rel="noopener noreferrer" />
        <ul className={styles.inner}>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/">Home</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/sobre-nos">Sobre Nós</Button>
          </li>
          <li data-dd-trigger>
            <Button RightIcon={CaretDownFill} link className={light ? 'dark' : 'light'} href="/solucoes">Nossas Soluções</Button>
            <ul className={styles.dropdown}>
              {
                solutions.map((sol, index) => (
                  <DropDownCard {...sol} key={index} />
                ))
              }
            </ul>
          </li>
          <li className={styles.logoItem}>
            <Button link href="/" className="link-image">
              <Logo />
            </Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/sobre-nos#faq">FAQ</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/blog">Blog</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/parceiros">Parceiros</Button>
          </li>
          <li>
            <Button className="small" href="/contato">Neutralize Já</Button>
          </li>
          <li className={styles.linksMobile}>
            <ul id="links" className="collapse">
              <li>
                <Button link className={light ? 'dark' : 'light'} href="/">Home</Button>
              </li>
              <li>
                <Button link className={light ? 'dark' : 'light'} href="/sobre-nos">Sobre Nós</Button>
              </li>
              <li data-dd-trigger>
                <Button id="solutionsLink" link href="" className={light ? 'dark' : 'light'} data-bs-target="#solutionsCollapse" data-bs-toggle="collapse" RightIcon={CaretDownFill}>Nossas Soluções</Button>
                <div id="solutionsCollapse" className="collapse">
                  <ul>
                    {
                      solutions.map((sol, index) => (
                        <li key={index}>
                          <Button onClick={closeMenus} link className={light ? 'dark' : 'light'} href={`/solucoes${sol.href}`}>{sol.title}</Button>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>
              <li>
                <Button link className={light ? 'dark' : 'light'} href="/sobre-nos#faq">Perguntas Frequentes</Button>
              </li>
              <li>
                <Button link className={light ? 'dark' : 'light'} href="/blog">Blog</Button>
              </li>
              <li>
                <Button link className={light ? 'dark' : 'light'} href="/parceiros">Parceiros</Button>
              </li>
              <li>
                <Button RightIcon={ArrowRight} className="small d-inline-flex d-lg-none" href="/contato">Neutralize Já</Button>
              </li>
            </ul>
          </li>
        </ul>

        <Button onClick={handleClick} link btnElement className={`${styles.toggler} link-image`} data-bs-toggle="collapse" data-bs-target="#links">
          <Bars />
        </Button>
      </div>
    </header>
  )
}
