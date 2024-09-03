'use client';

import { Carousel as AntCarousel, Grid } from 'antd';

import React, { FC } from 'react';

type TProps = {
  slides: string[];
};

const { useBreakpoint } = Grid;

export const Carousel: FC<TProps> = ({ slides }) => {
  const screens = useBreakpoint();

  return (
    <div className="custom mx-auto grid grid-cols-1 pt-12 max-xl:px-10 max-sm:m-0 max-xs:m-auto max-xs:px-0 max-xs:pt-6">
      <AntCarousel
        autoplay
        arrows={!screens.sm || !screens.xs}
        className="box-content aspect-21/9 h-full w-full max-w-300 max-sm:aspect-square max-xs:max-w-82"
      >
        {slides.map((slide, index) => (
          <div key={index} className="aspect-21/9 h-full max-w-320 rounded-2xl max-sm:aspect-square max-xs:max-w-82">
            <img
              alt="1"
              src={slide}
              className="w-1200 aspect-21/9 w-full rounded-2xl object-cover object-center max-sm:aspect-square max-xs:max-w-82"
            />
          </div>
        ))}
      </AntCarousel>
    </div>
  );
};
