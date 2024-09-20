'use client';

import { Carousel as AntCarousel } from 'antd';
import Image from 'next/image';

import React, { FC } from 'react';

type TCarouselProps = {
  slides: string[];
  product?: boolean;
};

export const Carousel: FC<TCarouselProps> = ({ slides, product }) => (
  <section
    className={`custom mx-auto grid grid-cols-1 max-sm:m-0 max-xs:m-auto ${product ? '' : 'max-xl:px-10  max-xs:px-0 max-xs:pt-6'}`}
  >
    <AntCarousel
      autoplay
      arrows
      adaptiveHeight
      pauseOnHover
      className={`max-md:no-arrows box-content h-full w-full max-w-300 max-xs:max-w-82 ${product ? 'aspect-6/2' : 'aspect-21/9 max-sm:aspect-square'}`}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`h-full max-w-320 rounded-3xl max-xs:max-w-82 ${product ? 'aspect-3/2' : 'aspect-21/9 max-sm:aspect-square'}`}
        >
          <Image
            width={1200}
            height={514}
            alt={slide}
            src={slide}
            className={`w-1200 w-full rounded-3xl object-cover object-center max-xs:max-w-82 ${product ? 'aspect-3/2' : 'aspect-21/9 max-sm:aspect-square'}`}
          />
        </div>
      ))}
    </AntCarousel>
  </section>
);
