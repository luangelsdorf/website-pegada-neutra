import React, { useEffect, useRef } from 'react';
import styles from './FAQ.module.scss';
import CaretDownFill from '@ui-icons/CaretDownFill.svg';

export default function FAQ({ content }) {
  const faq = useRef(null);

  useEffect(() => {
    require('bootstrap/js/dist/collapse');

    function handleCollapse(e) {
      if (e.type === 'show.bs.collapse') {
        e.currentTarget.classList.add(styles.active);
      } else {
        e.currentTarget.classList.remove(styles.active);
      }
    }

    faq.current?.childNodes.forEach(q => {
      q.addEventListener('show.bs.collapse', handleCollapse);
      q.addEventListener('hide.bs.collapse', handleCollapse);
    });

    return () => {
      faq.current?.childNodes.forEach(q => {
        q.removeEventListener('show.bs.collapse', handleCollapse);
        q.removeEventListener('hide.bs.collapse', handleCollapse);
      });
    }
  }, []);

  const Question = ({ id, title, text }) => (
    <article className={styles.question} data-bs-toggle="collapse" data-bs-target={`#faq-collapse-${id}`}>
      <header>
        <h3>{title}</h3>
        <CaretDownFill />
      </header>
      <div className="collapse" id={`faq-collapse-${id}`}>
        <div className={styles.answer}>
          <p>{text}</p>
        </div>
      </div>
    </article>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div>
              <header className={styles.sectionHeader}>
                <h2>{content.title}</h2>
                <p>{content.text}</p>
              </header>

              <div className={styles.questions} ref={faq}>
                {
                  content.questions.map(q => (
                    <Question {...q} key={q.id} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
