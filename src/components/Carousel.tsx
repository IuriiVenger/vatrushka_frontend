import { Carousel as AntCarousel } from 'antd';

import React, { FC } from 'react';

type TProps = {
  slides: string[];
};

export const Carousel: FC<TProps> = ({ slides }) => (
  <div className="custom mx-auto grid grid-cols-1 max-xs:m-auto max-sm:m-0">
    <AntCarousel
      autoplay
      arrows
      className="h-full w-full max-xs:max-w-82 max-w-300 aspect-21/9 box-content pt-12 max-xs:px-0 max-xs:pt-6 max-sm:aspect-square max-xl:px-10"
    >
      {slides.map((slide, index) => (
        <div key={index} className="h-full max-xs:max-w-82 aspect-21/9 max-w-320 rounded-2xl max-sm:aspect-square">
          <img
            key={index}
            alt="1"
            src={slide}
            className="w-full max-xs:max-w-82 aspect-21/9 w-1200 rounded-2xl object-cover object-center max-sm:aspect-square"
          />
        </div>
      ))}
    </AntCarousel>
  </div>
);
