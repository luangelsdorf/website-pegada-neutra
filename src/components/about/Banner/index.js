import React from 'react';
import Button from 'src/components/common/Button';
import styles from './Banner.module.scss';
import PlayCircleFill from '@ui-icons/PlayCircleFill.svg';

export default function Banner({ content }) {
  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className={styles.bannerContent}>
                <header>
                  <p className="overline large dark">{content.title.overline}</p>
                  <h1>{content.title.title}</h1>
                </header>
                <p>{content.text}</p>
                <Button className="outline phthalo" RightIcon={PlayCircleFill} href="#video">Assistir Vídeo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video src="/videos/video-background.mp4" autoPlay loop muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: '0',
          zIndex: '-1'
        }}
      />
    </>
  )
}
