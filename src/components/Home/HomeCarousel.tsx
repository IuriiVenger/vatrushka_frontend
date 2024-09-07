'use client';

import { Carousel } from 'antd';
import Image from 'next/image';

import React, { FC } from 'react';

type TCarouselProps = {
  slides: string[];
};

export const HomeCarousel: FC<TCarouselProps> = ({ slides }) => (
  <section
    aria-label="Специальные предложения"
    className="custom mx-auto grid grid-cols-1 max-xl:px-10 max-sm:m-0 max-xs:m-auto max-xs:px-0 max-xs:pt-6"
  >
    <Carousel
      autoplay
      arrows
      className="max-md:no-arrows box-content aspect-21/9 h-full w-full max-w-300 max-sm:aspect-square max-xs:max-w-82"
    >
      {slides.map((slide, index) => (
        <div key={index} className="aspect-21/9 h-full max-w-320 rounded-2xl max-sm:aspect-square max-xs:max-w-82">
          <Image
            width={1200}
            height={514}
            alt={slide}
            src={slide}
            className="w-1200 aspect-21/9 w-full rounded-2xl object-cover object-center max-sm:aspect-square max-xs:max-w-82"
          />
        </div>
      ))}
    </Carousel>
  </section>
);
