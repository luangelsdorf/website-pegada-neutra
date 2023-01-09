import Link from 'next/link';
import React from 'react';
import styles from './AboutUs.module.scss';
import PlayCircleFill from '@ui-icons/PlayCircleFill.svg';
import Button from 'src/components/common/Button';

export default function AboutUs({ content }) {
  return (
    <section className={styles.section} id="sobre-nos" data-bg="light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10" style={{ position: 'relative' }}>
            <video className={styles.video} src="/videos/video-background.mp4" autoPlay loop muted />
            <div className={`row justify-content-center ${styles.background}`}>
              <div className="col-10">
                <div className={styles.content}>
                  <h2>{'Nossa missão é construir \num mundo mais sustentável!'}</h2>
                  <div>
                    <p>A <strong>Pegada Neutra®</strong> foi criada por recicladores e agentes ambientais que acreditam que a economia e o meio ambiente podem coexistir em harmonia, e que através de soluções simples e econômicas podemos atingir este objetivo.</p>
                    <Button href="#video" className="phthalo outline" RightIcon={PlayCircleFill}>Assistir Vídeo</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
