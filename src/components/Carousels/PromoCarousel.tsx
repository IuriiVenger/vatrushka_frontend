'use client';

import { Carousel as AntCarousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export type TCarouselSlide = {
  img: string;
  href?: string;
};

type TCarouselProps = {
  slides: TCarouselSlide[];
};

const PromoCarousel: FC<TCarouselProps> = ({ slides }) => (
  <section className="custom grid w-full grid-cols-1">
    <AntCarousel
      autoplay
      arrows={slides.length > 1}
      adaptiveHeight
      pauseOnHover
      className="max-md:no-arrows box-content aspect-21/9 h-full w-full max-w-300"
    >
      {slides.map(({ img, href }, index) => (
        <div key={index} className="aspect-21/9 h-full max-w-300 rounded-3xl max-xs:rounded-2xl">
          {href ? (
            <Link href={href}>
              <Image
                width={1200}
                height={514}
                alt={img}
                src={img}
                className="w-1200 aspect-21/9 rounded-3xl object-cover object-center max-xs:rounded-2xl"
              />
            </Link>
          ) : (
            <Image
              width={1200}
              height={514}
              alt={img}
              src={img}
              className="w-1200 aspect-21/9 rounded-3xl object-cover object-center max-xs:rounded-2xl"
            />
          )}
        </div>
      ))}
    </AntCarousel>
  </section>
);

export default PromoCarousel;
