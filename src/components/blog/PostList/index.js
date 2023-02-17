import React from 'react';
import Button from 'src/components/common/Button';
import PostCard from 'src/components/common/PostCard';
import styles from './PostList.module.scss';
import Repeat from '@ui-icons/ArrowRepeat.svg';

export default function PostList({ posts }) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.list}>
          {
            posts.map((post, index) => {
              let isSmall = index % 2 === 1;
              let isLeft = Math.ceil(posts.length / 2) > index;
              return (
                <div key={index} className={styles.item} data-left={isLeft}>
                  <PostCard {...post.attributes} small={isSmall} negative />
                </div>
              );
            })
          }
        </div>

        <div className={styles.more}>
          <Button btnElement className="dark small" LeftIcon={Repeat}>Carregando mais Posts</Button>
        </div>
      </div>
    </div>
  )
}
