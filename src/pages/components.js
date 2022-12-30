import React from 'react';
import PostCard from 'src/components/common/PostCard';
import RecentPosts from 'src/components/home/RecentPosts';

export default function Components() {

  /* return (
    <div style={{ backgroundColor: 'rgb(var(--leaf-green))', padding: '120px 0' }}>
      <div className="container">
        <div className="d-flex flex-wrap" style={{ gap: '24px' }}>
          <div style={{ width: '448px', height: 'max-content', }}>
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  ) */

  return (
    <RecentPosts />
  )
}
