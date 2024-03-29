import React from 'react';
import styles from './Contact.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg'
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useForm } from 'react-hook-form';
import { onSubmit } from 'src/utils/contact';
import Spinner from 'src/components/common/Spinner';

export default function Contact({ content }) {
  const { register, watch, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm();
  const checkBoxes = watch(["subject.Créditos de Reciclagem", "subject.Créditos de Carbono", "subject.Ações Socioambientais", "subject.Soluções Customizadas"]);
  const checkRequired = !checkBoxes.some(item => item);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-6">
            <div className={styles.formSection}>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.textboxes}>
                  <div className="floating">
                    <input type="text" id="name" placeholder="Nome" {...register('name', { required: true })} />
                    <label htmlFor="name">Nome</label>
                  </div>
                  <div className="floating">
                    <input type="text" id="business" placeholder="Nome da Empresa" {...register('business', { required: true })} />
                    <label htmlFor="business">Empresa</label>
                  </div>
                  <div className="floating">
                    <input type="tel" id="phone" placeholder="+55 51 9 9999.9999" {...register('phone', { required: true })} />
                    <label htmlFor="phone">Telefone</label>
                  </div>
                  <div className="floating">
                    <input type="email" id="email" placeholder="Seu Email" {...register('email', { required: true })} />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <p>Assuntos de Interesse</p>
                <div className={styles.checkboxes}>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="recycling"  {...register('subject.Créditos de Reciclagem', { required: checkRequired })} />
                    <label htmlFor="recycling">Créditos de Reciclagem</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="carbon" {...register('subject.Créditos de Carbono', { required: checkRequired })} />
                    <label htmlFor="carbon">Créditos de Carbono</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="socio" {...register('subject.Ações Socioambientais', { required: checkRequired })} />
                    <label htmlFor="socio">Ações Socioambientais</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="subject" id="custom" {...register('subject.Soluções Customizadas', { required: checkRequired })} />
                    <label htmlFor="custom">Soluções Customizadas</label>
                  </div>
                </div>
                <Button btnElement type="submit" RightIcon={ArrowRight} className="large phthalo">Enviar Mensagem</Button>
              </form>
              <div>
                <div style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</div>
                <Spinner style={{ opacity: isSubmitting ? '1' : '0' }} />
              </div>
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
