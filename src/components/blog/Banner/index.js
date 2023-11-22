import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from './Banner.module.scss';

export default function Banner({ content, categories, currentCategory }) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      document.querySelectorAll('[data-slug]')?.forEach(btn => btn.classList.add('outline'));
      document.querySelector(`[data-slug="${currentCategory}"]`)?.classList.remove('outline');
    } else {
      document.querySelector(`[data-slug="all"]`)?.classList.remove('outline');
    }
  }, [router.query]);

  return (
    <div className={styles.banner}>
      <div className="col-12">
        <header>
          <p className="overline large dark">{content.title.overline}</p>
          <h1>{content.title.title}</h1>
        </header>
        <div className="container">
          <div className={styles.categories}>
            <Link data-slug="all" scroll={false} href="/blog" className="btn phthalo small outline">Todos</Link>
            {
              categories.map((cat, index) => (
                <Link
                  data-slug={cat.attributes.slug}
                  key={index}
                  scroll={false}
                  href={`/blog/categorias/${cat.attributes.slug}`}
                  className="btn phthalo small outline"
                >
                  {cat.attributes.name}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
