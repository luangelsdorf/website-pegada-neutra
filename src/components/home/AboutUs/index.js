import Link from 'next/link';
import React from 'react';
import styles from './AboutUs.module.scss';
import PlayCircleFill from 'public/images/icons/PlayCircleFill.svg';

export default function AboutUs({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center" style={{ position: 'relative' }}>
          <video className={styles.video} src="/videos/video-background.mp4" autoPlay loop muted />
          <div className={`row justify-content-center ${styles.background}`}>
            <div className="col-10">
              <div className={styles.content}>
                <h2>{'Nossa missão é construir \num mundo mais sustentável!'}</h2>
                <div>
                  <p>A <strong>Pegada Neutra®</strong> foi criada por recicladores e agentes ambientais que acreditam que a economia e o meio ambiente podem coexistir em harmonia, e que através de soluções simples e econômicas podemos atingir este objetivo.</p>
                  <Link href="#" className="btn phthalo outline">
                    <span>Assistir Vídeo</span> <PlayCircleFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
