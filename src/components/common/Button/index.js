import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  children,
  link = false,
  btnElement = false,
  nativeLink = false,
  href = '#',
  className,
  iconRight,
  iconLeft,
}) {

  const Children = () => (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  const baseProps = {
    className: `${!link ? 'btn' : ''} ${className ?? ''}`,
  };

  if (btnElement) {
    return (
      <button {...baseProps} type="button">
        <Children />
      </button>
    )
  }

  else if (nativeLink) {
    return (
      <a {...baseProps} href={href}>
        <Children />
      </a>
    )
  }

  else {
    return (
      <Link {...baseProps} href={href}>
        <Children />
      </Link>
    )
  }
}
