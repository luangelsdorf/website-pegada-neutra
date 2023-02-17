import Link from 'next/link';
import React from 'react';
import styles from './AboutUs.module.scss';
import PlayCircleFill from '@ui-icons/PlayCircleFill.svg';
import Button from 'src/components/common/Button';
import { apiURL } from 'src/utils/env';

export default function AboutUs({ content }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10" style={{ position: 'relative' }}>
            <video className={styles.video} src={apiURL + content.video.data.attributes.url} autoPlay loop muted />
            <div className={`row justify-content-center ${styles.background}`}>
              <div className="col-10">
                <div className={styles.content}>
                  <h2>{content.title}</h2>
                  <div>
                    <p>{content.text}</p>
                    {/* <Button href="#video" className="phthalo outline" RightIcon={PlayCircleFill}>Assistir Vídeo</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
