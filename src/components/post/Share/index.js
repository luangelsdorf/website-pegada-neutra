import React from 'react';
import ShareUrl from 'share-url';
import styles from './Share.module.scss';
import Facebook from '@ui-icons/Facebook.svg';
import WhatsApp from '@ui-icons/Whatsapp.svg';
import Twitter from '@ui-icons/Twitter.svg';
import ShareDots from '@ui-icons/ShareFill.svg';
import Button from 'src/components/common/Button';

export default function Share({ slug, postTitle }) {

  const linkAttributes = {
    className: 'social negative',
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  const postURL = `https://pegadaneutra.com.br/blog/posts/${slug}`;

  return (
    <div className={styles.section}>
      <h2>Compartilhe esse Post</h2>
      <menu>
        <li>
          <Button link {...linkAttributes} href={ShareUrl.facebook({ u: postURL })}>
            <Facebook />
          </Button>
        </li>
        <li>
          <Button link {...linkAttributes} href={ShareUrl.whatsapp({ text: postURL })}>
            <WhatsApp />
          </Button>
        </li>
        <li>
          <Button link {...linkAttributes} href={ShareUrl.twitter({ url: postURL })}>
            <Twitter />
          </Button>
        </li>
        <li>
          <Button link btnElement {...linkAttributes} type="button" onClick={() => navigator.share({url: postURL, title: postTitle})}>
            <ShareDots />
          </Button>
        </li>
      </menu>
    </div>
  )
}