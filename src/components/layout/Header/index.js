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

export default function Header({ light }) {
  const solutions = [
    {
      Icon: Recycle,
      title: 'Créditios de Reciclagem',
      href: '#créditos-de-reciclagem',
    },
    {
      Icon: Carbon,
      title: 'Créditios de Carbono',
      href: '#créditos-de-carbono',
    },
    {
      Icon: World,
      title: 'Ações Socioambientais',
      href: '#ações-sócio-ambientais',
    },
    {
      Icon: Environmental,
      title: 'Soluções Customizadas',
      href: '#soluções-customizadas',
    },
  ];

  const DropDownCard = ({ Icon, title, href }) => (
    <li className={styles.dropItem}>
      <Icon />
      <div>{title}</div>
      <Button className="light" RightIcon={ArrowRight} link href={`/solucoes${href}`}>Saiba Mais</Button>
    </li>
  );

  return (
    <header id="header" className={`${styles.header}`}>
      <div className="container">
        <ul className={styles.inner}>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/">Home</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/sobre-nos">Sobre Nós</Button>
          </li>
          <li data-dd-trigger>
            <Button RightIcon={CaretDownFill} link className={light ? 'dark' : 'light'} href="/solucoes">Nossas Soluções</Button>
            <ul>
              {
                solutions.map((sol, index) => (
                  <DropDownCard {...sol} key={index} />
                ))
              }
            </ul>
          </li>
          <li>
            <Button link href="/" className="link-image">
              <Logo />
            </Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/contato#faq">FAQ</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/blog">Blog</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="/parceiros">Nossos Clientes</Button>
          </li>
          <li>
            <Button className="small" href="/contato">Neutralize Já</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
