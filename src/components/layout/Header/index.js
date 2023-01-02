import React from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/logo-line.svg';
import Button from 'src/components/common/Button';

export default function Header({ content, light }) {
  return (
    <header className={`${styles.header}${light ? ' ' + styles.light : ''}`}>
      <div className="container">
        <ul className={styles.inner}>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="#">Home</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="#">Sobre Nós</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="#">Nossas Soluções</Button>
          </li>
          <li>
            <Button link href="#" className="link-image">
              <Logo />
            </Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="#">Blog</Button>
          </li>
          <li>
            <Button link className={light ? 'dark' : 'light'} href="#">Nossos Clientes</Button>
          </li>
          <li>
            <Button className="small" href="#">Neutralize Já</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
