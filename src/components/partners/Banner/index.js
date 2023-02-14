import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';
import ArrowDown from '@ui-icons/ArrowDown.svg';

export default function Banner({ content }) {
  return (
    <div className={styles.banner}>
      <header>
        <p className="overline large dark">Empresas que Neutralizam</p>
        <h1>Marcas Parceiras</h1>
      </header>
      <p>As marcas parceiras da <strong>Pegada Neutra®</strong> aqui imagino um texto curto contextualizando quem são essas empresas e o porquê elas se associaram / adquiriram o selo.</p>
      <Button href="/contato" className="outline phthalo large">Quero Participar</Button>
      <Button btnElement LeftIcon={ArrowDown} className={styles.arrow} />
    </div>
  )
}
