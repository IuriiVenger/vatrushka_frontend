import { Carousel as AntCarousel } from 'antd';

import React, { FC } from 'react';

type TProps = {
  slides: string[];
};

export const Carousel: FC<TProps> = ({ slides }) => (
  <div>
    <AntCarousel arrows className="h-full max-h-512 max-w-1200">
      {slides.map((slide, index) => (
        <div key={index} className="h-full max-h-512 max-w-1200 rounded-2xl ">
          <img
            key={index}
            alt="1"
            src={slide}
            className="w-full max-h-512 w-1200 rounded-2xl  object-cover object-center"
          />
        </div>
      ))}
    </AntCarousel>
  </div>
);
