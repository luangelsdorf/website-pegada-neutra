import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import logo from 'public/images/logo-horizontal.svg';

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
            <Link href="#">
              <Image src={logo} />
            </Link>
          </li>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
