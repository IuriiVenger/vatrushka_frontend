'use client';

import { Carousel as AntCarousel } from 'antd';
import Image from 'next/image';
import React, { FC } from 'react';

type TCarouselProps = {
  slides: string[];
};

const PromoCarousel: FC<TCarouselProps> = ({ slides }) => (
  <section className="custom grid grid-cols-1">
    <AntCarousel
      autoplay
      arrows
      adaptiveHeight
      pauseOnHover
      className="max-md:no-arrows box-content aspect-21/9 h-full w-full max-w-300 max-xs:max-w-82"
    >
      {slides.map((slide, index) => (
        <div key={index} className="aspect-21/9 h-full max-w-300 rounded-3xl max-xs:max-w-82">
          <Image
            width={1200}
            height={514}
            alt={slide}
            src={slide}
            className="w-1200 aspect-21/9 rounded-3xl object-cover object-center max-xs:max-w-82"
          />
        </div>
      ))}
    </AntCarousel>
  </section>
);

export default PromoCarousel;
