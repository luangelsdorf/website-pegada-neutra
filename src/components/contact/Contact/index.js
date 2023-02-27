import React from 'react';
import styles from './Contact.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg'
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export default function Contact({ content }) {
  return (
    <div className={styles.section}>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-6">
            <div className={styles.formSection}>
              <h2>{content.title}</h2>
              <p>{content.text}</p>

              <form onSubmit={e => e.preventDefault()}>
                <div className={styles.textboxes}>
                  <div className="floating">
                    <input type="text" id="name" placeholder="Nome" />
                    <label htmlFor="name">Nome</label>
                  </div>
                  <div className="floating">
                    <input type="text" id="business" placeholder="Pegada Neutra" />
                    <label htmlFor="business">Empresa</label>
                  </div>
                  <div className="floating">
                    <input type="tel" id="phone" placeholder="+55 51 9 9999.9999" />
                    <label htmlFor="phone">Empresa</label>
                  </div>
                  <div className="floating">
                    <input type="email" id="email" placeholder="contato@pegadaneutra.com.br" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <p>Assuntos de Interesse</p>

                <div className={styles.checkboxes}>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="recycling" />
                    <label htmlFor="recycling">Créditos de Reciclagem</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="carbon" />
                    <label htmlFor="carbon">Créditos de Carbono</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="socio" />
                    <label htmlFor="socio">Ações Socioambientais</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="custom" />
                    <label htmlFor="custom">Soluções Customizadas</label>
                  </div>
                </div>

                <Button btnElement type="submit" RightIcon={ArrowRight} className="large phthalo">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.imageSection}`}>
        <div className="col-12 col-lg-5">
          <Swiper modules={[Autoplay]} autoplay={{ pauseOnMouseEnter: false, disableOnInteraction: false }} speed={0}>
            {
              content.cover.data.map(img => {
                img.data = {};
                img.data.attributes = img.attributes;
                return (
                  <SwiperSlide key={img.id}>
                    <div className={styles.image}>
                      <Img fill {...img} />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
