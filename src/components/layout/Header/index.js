import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import Logo from 'public/images/logo-line.svg';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.inner}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Sobre Nós</Link>
          </li>
          <li>
            <Link href="#">Nossas Soluções</Link>
          </li>
          <li>
            <Link href="#" className="link-image">
              <Logo />
            </Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Nossos Clientes</Link>
          </li>
          <li>
            <Link className="btn" href="#">Neutralize Já</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
