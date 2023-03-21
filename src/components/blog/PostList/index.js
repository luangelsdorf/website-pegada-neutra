import React, { useEffect, useState } from 'react';
import Button from 'src/components/common/Button';
import PostCard from 'src/components/common/PostCard';
import styles from './PostList.module.scss';
import Repeat from '@ui-icons/ArrowRepeat.svg';
import useSWR from 'swr';
import fetchAPI from 'src/utils/fetch';

export default function PostList({ posts, pagination }) {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(page > 1 && page <= pagination.pageCount ? '/' : null, () => fetchAPI('posts', `&pagination[page]=${page}&pagination[pageSize]=${6}&sort=createdAt:DESC`, false));

  if (data) {
    data.forEach(post => posts.push(post));
  }

  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new Event('resize'));
    }
  }, [isLoading]);

  useEffect(() => {
    const target = document.querySelector(`.${styles.more} button`);
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPage(previous => previous + 1);
          target.classList.add(styles.active);
        } else {
          target.classList.remove(styles.active);
        }
      });
    }

    const observer = new IntersectionObserver(callback);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.list}>
          {posts.length === 0 && <h3 style={{ color: 'rgb(var(--dark-green))' }}>Nenhum post encontrado.</h3>}
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
          <Button style={{ opacity: isLoading ? 1 : 0 }} btnElement className="dark small" LeftIcon={Repeat}>Carregando mais Posts</Button>
        </div>
      </div>
    </div>
  )
}
