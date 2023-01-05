import React from 'react';
import Button from 'src/components/common/Button';
import PostCard from 'src/components/common/PostCard';
import styles from './PostList.module.scss';
import Repeat from '@ui-icons/ArrowRepeat.svg';

export default function PostList({ content }) {
  const data = [
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-1.png',
    },
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-2.jpg',
    },
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-3.jpeg',
    },
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-4.jpg',
    },
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-5.jpg',
    },
    {
      title: 'Título da Publicação',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...',
      cover: '/images/blog/post-6.jpeg',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.list}>
          {
            data.map((post, index) => {
              let isSmall = index % 2 === 1;
              let isLeft = Math.ceil(data.length / 2) > index;
              return (
                <div key={index} className={styles.item} data-left={isLeft}>
                  <PostCard {...post} small={isSmall} negative />
                </div>
              );
            })
          }
        </div>

        <div className={styles.more}>
          <Button btnElement className="dark small" LeftIcon={Repeat}>Carregando mais Posts</Button>
        </div>
      </div>
    </section>
  )
}
