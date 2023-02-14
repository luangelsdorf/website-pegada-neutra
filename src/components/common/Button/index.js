import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  children,
  link = false,
  tag = false,
  btnElement = false,
  divElement = false,
  nativeLink = false,
  type = 'button',
  href = '#',
  className,
  LeftIcon,
  RightIcon,
}) {

  const Children = () => (
    <>
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </>
  );

  const baseProps = {
    className: `${link ? '' : 'btn'}${tag ? ' tag' : ''}${className ? ' ' + className : ''}`,
  };

  if (btnElement) {
    return (
      <button {...baseProps} type={type}>
        <Children />
      </button>
    )
  }

  else if (divElement) {
    return (
      <div {...baseProps} role="link">
        <Children />
      </div>
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
