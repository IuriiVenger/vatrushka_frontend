'use client';

import { Button } from 'antd';
import { FC, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SlickSlider, { Settings } from 'react-slick';

import ProductCard from '../Product/ProductCard';

import { TProductSliderSlide } from '@/types';

export type TSliderComponentProps = {
  title: string;
  slides: TProductSliderSlide[];
};

const ProductSlider: FC<TSliderComponentProps> = ({ title, slides }) => {
  const sliderRef = useRef<SlickSlider>(null);

  const handlePrev = (): void => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = (): void => {
    sliderRef.current?.slickNext();
  };

  const settings: Settings = {
    centerMode: false,
    variableWidth: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
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
          centerMode: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="disable-layout-max-w disable-layout-px w-full max-w-300 sm:px-10 xl:mx-auto xl:px-0">
      <div className="flex items-center justify-between pb-12 max-lg:pb-8 max-md:box-content max-sm:mx-auto max-sm:max-w-128 max-sm:px-10 max-sm:pb-6 max-xs:box-border">
        <p className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">{title}</p>
        <div className="flex flex-nowrap gap-4 max-sm:hidden">
          <Button
            onClick={handlePrev}
            shape="circle"
            type="primary"
            className="bg-primary hover:bg-primaryHover active:bg-primaryActive disabled:bg-textQuinary max-sm:h-8 max-sm:w-8 max-sm:min-w-8"
            icon={<IoIosArrowBack />}
          />
          <Button
            onClick={handleNext}
            shape="circle"
            type="primary"
            className="bg-primary hover:bg-primaryHover active:bg-primaryActive disabled:bg-textQuinary max-sm:h-8 max-sm:w-8 max-sm:min-w-8"
            icon={<IoIosArrowForward />}
          />
        </div>
      </div>
      <div className="slider-container mx-auto grid grid-cols-1 overflow-hidden max-xs:mr-0 max-xs:pl-0">
        <SlickSlider className="additional-list-padding" {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <ProductCard key={slide.id + index} info={slide} slider handleBuyButtonClick={slide.onBuyButtonClick} />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default ProductSlider;
