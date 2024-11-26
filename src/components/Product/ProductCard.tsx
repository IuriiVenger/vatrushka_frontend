'use client';

import { Divider, Button } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';

import CustomImage from '../ui/CustomImage';

import ProductCardSkeleton from './ProductCardSkeleton';

import { CurrencySymbol, TagColorSchema } from '@/constants';
import { TCard } from '@/types';

type TProductCardProps = {
  info: TCard;
  slider?: boolean;
  handleBuyButtonClick: () => Promise<void>;
};

const ProductCard: FC<TProductCardProps> = ({ info, slider = false, handleBuyButtonClick }) => {
  const { pic, name, timing, weight, price, description, inStock, tag, buttonType } = info;

  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const priceText = `${buttonType === 'link' ? 'от ' : ''}${price} ${CurrencySymbol.RUB}`;

  const onButtonClick = async (e: React.MouseEvent<HTMLElement>) => {
    setIsButtonLoading(true);

    try {
      e.preventDefault();
      e.stopPropagation();
      await handleBuyButtonClick();
    } finally {
      setIsButtonLoading(false);
    }
  };

  const onLoad = () => setIsLoading(false);

  return (
    <Link
      href={info.href}
      className={`relative flex cursor-pointer flex-col rounded-2xl border border-border transition-all hover:border-accentActive max-md:rounded-lg ${slider ? 'mx-3 h-full max-md:mx-2' : 'w-full'} `}
    >
      {tag && (
        <span
          className="z-2 absolute left-6 top-6 rounded-lg px-2 py-1 text-base leading-base max-md:px-1"
          style={{ backgroundColor: TagColorSchema[tag]?.backgroundColor, color: TagColorSchema[tag]?.textColor }}
        >
          {tag}
        </span>
      )}
      <CustomImage
        width={560}
        height={373}
        alt={name}
        src={pic}
        onLoad={onLoad}
        className="aspect-3/2 rounded-t-2xl object-cover object-center max-md:rounded-t-lg"
      />
      <div className="flex h-full flex-grow flex-col justify-between p-6 max-md:p-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
            <div className="flex items-center">
              {!!weight && (
                <p className="text-nowrap text-textSecondary max-md:text-base max-md:leading-base">{weight} г</p>
              )}
              {timing && (
                <>
                  <Divider type="vertical" />
                  <p className="text-textSecondary max-md:text-base max-md:leading-base">
                    Приготовление от {timing} часов
                  </p>
                </>
              )}
            </div>
          </div>
          <p className="line-clamp-3 pt-4 max-md:text-base max-md:leading-base">{description}</p>
        </div>
        <div className="z-10 flex items-center justify-between pt-4">
          <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{priceText}</p>
          <Button
            data-prevent-nprogress
            type="primary"
            disabled={!inStock}
            className="max-md:h-10 max-md:text-base"
            onClick={onButtonClick}
            loading={isButtonLoading}
          >
            {inStock ? 'Купить' : 'Нет в наличии'}
          </Button>
        </div>
      </div>

      <ProductCardSkeleton isLoading={isLoading} />
    </Link>
  );
};

export default ProductCard;
