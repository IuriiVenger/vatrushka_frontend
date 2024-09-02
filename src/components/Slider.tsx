'use client';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { ItemCard } from './ItemCard';

import { TCard } from '@/types';

export enum buttonsPositions {
  TOP = 'top',
  BOTTOM = 'bottom',
}

type SliderComponentProps = {
  title: string;
  slides: TCard[];
};

export const SliderComponent: FC<SliderComponentProps> = ({ title, slides }) => {
  const sliderRef = useRef<Slider>(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleButtons = (_: number, next: number): void => {
    if (sliderRef.current) {
      if (next === 0) {
        setIsPrevDisabled(true);
      } else {
        setIsPrevDisabled(false);
      }

      if (next === slides.length - 3) {
        setIsNextDisabled(true);
      } else {
        setIsNextDisabled(false);
      }
    }
  };
  const settings: Settings = {
    centerMode: false,
    variableWidth: false,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: handleButtons,
  };

  return (
    <div className="mx-auto w-full max-w-320 p-10 max-xs:max-w-82 max-xs:px-0">
      <div className="flex items-center justify-between pb-12">
        <p className="text-4xl leading-4xl">{title}</p>
        <div className="flex flex-nowrap gap-4">
          <Button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            shape="circle"
            type="primary"
            className="!bg-primary hover:!bg-primaryHover active:!bg-primaryActive disabled:!bg-textQuinary"
            icon={<LeftOutlined />}
          />
          <Button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            shape="circle"
            type="primary"
            className="!bg-primary hover:!bg-primaryHover active:!bg-primaryActive disabled:!bg-textQuinary"
            icon={<RightOutlined />}
          />
        </div>
      </div>
      <div className="slider-container mx-auto grid max-w-320 grid-cols-1 overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <ItemCard key={index} info={slide} slider />
          ))}
        </Slider>
      </div>
    </div>
  );
};
