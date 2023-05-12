import styles from './WhatsAppButton.module.scss';
import WhatsApp from 'public/images/icons/Whatsapp.svg';

export default function WhatsAppButton({ number = '' }) {

  return (
    <a
      className={`${styles.btn} link-image`}
      href={`https://api.whatsapp.com/send?phone=${number}`}
      rel="noopener noreferrer"
      target="_blank"
      id="wp-floating"
    >
      <WhatsApp />
    </a>
  )
}