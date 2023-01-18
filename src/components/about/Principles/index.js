import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import styles from './Principles.module.scss';

export default function Principles({ content }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#princípios header',
        endTrigger: '#princípios',
        pin: true,
        pinSpacing: false,
        start: "-160px top",
        end: '+=100% center',
      });

      const cards = gsap.utils.toArray('#princípios article');
      cards.forEach(card => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 120px",
          end: "bottom 120px",
          onEnter: self => {
            self.trigger.classList.add(styles.active);
            document.getElementById('principle').textContent = self.trigger.dataset.overline;
          },
          onEnterBack: self => {
            self.trigger.classList.add(styles.active);
            document.getElementById('principle').textContent = self.trigger.dataset.overline;
          },
          onLeave: self => self.trigger.classList.remove(styles.active),
          onLeaveBack: self => self.trigger.classList.remove(styles.active),
        })
      })
    });

    return () => ctx.revert();
  }, []);

  const Card = props => (
    <article data-overline={props.overline}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  )

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-1">
            <header>
              <p className="overline dark">{content.title.overline}</p>
              <h2>{content.title.title}: <span id="principle"></span></h2>
            </header>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.cards}>
              {
                content.cards.map((card, index) => (
                  <Card key={index} {...card} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
