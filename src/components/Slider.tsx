'use client';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Grid } from 'antd';
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

const { useBreakpoint } = Grid;

export const SliderComponent: FC<SliderComponentProps> = ({ title, slides }) => {
  const sliderRef = useRef<Slider>(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const screens = useBreakpoint();
  console.log('screens', screens);

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
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-320 p-10 max-sm:p-0 max-xs:mx-0">
      <div className="flex items-center justify-between pb-12 max-lg:pb-8 max-md:box-content max-sm:mx-auto max-sm:max-w-128 max-sm:px-10 max-sm:pb-6 max-xs:box-border max-xs:max-w-82 max-xs:px-0">
        <p className="text-4xl leading-4xl max-sm:text-2xl max-sm:leading-2xl">{title}</p>
        <div className="flex flex-nowrap gap-4 max-sm:hidden">
          <Button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isPrevDisabled}
            shape="circle"
            type="primary"
            className="!bg-primary hover:!bg-primaryHover active:!bg-primaryActive disabled:!bg-textQuinary max-sm:h-8 max-sm:w-8 max-sm:min-w-8"
            icon={<LeftOutlined />}
          />
          <Button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isNextDisabled}
            shape="circle"
            type="primary"
            className="!bg-primary hover:!bg-primaryHover active:!bg-primaryActive disabled:!bg-textQuinary max-sm:h-8 max-sm:w-8 max-sm:min-w-8"
            icon={<RightOutlined />}
          />
        </div>
      </div>
      <div className="slider-container max-xs:ml-calc-center mx-auto grid max-w-320 grid-cols-1 overflow-hidden max-sm:pl-10 max-xs:mr-0 max-xs:pl-0 ">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <ItemCard key={index} info={slide} slider small={screens.sm || screens.xs} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
