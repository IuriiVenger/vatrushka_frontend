'use client';

import { Carousel as AntCarousel } from 'antd';
import Image from 'next/image';

import React, { FC } from 'react';

type TCarouselProps = {
  slides: string[];
  product?: boolean;
};

export const PromoCarousel: FC<TCarouselProps> = ({ slides, product }) => (
  <section className="custom grid grid-cols-1">
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
            className={`w-1200 rounded-3xl object-cover object-center max-xs:max-w-82 ${product ? 'aspect-3/2' : 'aspect-21/9 max-sm:aspect-square'}`}
          />
        </div>
      ))}
    </AntCarousel>
  </section>
);
