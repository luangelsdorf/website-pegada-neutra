import React from 'react';
import Image from 'next/image';
import { apiURL } from 'src/utils/env';

export default function Img({ data: { attributes: props }, fill, sizes }) {
  return (
    <div>
      <Image
        src={apiURL + props.url}
        width={fill ? undefined : props.width}
        height={fill ? undefined : props.height}
        alt={props.alernativetext ?? ''}
        fill
        sizes={sizes}
      />
    </div>
  )
}