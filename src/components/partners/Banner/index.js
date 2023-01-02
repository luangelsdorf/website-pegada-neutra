import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';
import ArrowDown from 'public/images/icons/ArrowDown.svg';

export default function Banner({ content }) {
  return (
    <section className={styles.banner}>
      <header>
        <p className="overline large dark">Empresas que Neutralizam</p>
        <h1>Marcas Parceiras</h1>
      </header>
      <p>As marcas parceiras da <strong>Pegada Neutra®</strong> aqui imagino um texto curto contextualizando quem são essas empresas e o porquê elas se associaram / adquiriram o selo.</p>
      <Button className="outline phthalo large">Quero Participar</Button>
      <Button LeftIcon={ArrowDown} className={styles.arrow} />
    </section>
  )
}
