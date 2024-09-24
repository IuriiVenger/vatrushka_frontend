'use client';

import { Divider, Button, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CurrencySymbol, TagColorSchema } from '@/constants';
import { TCard } from '@/types';

type TProductCardProps = {
  info: TCard;
  slider?: boolean;
};

export const ProductCard: FC<TProductCardProps> = ({ info, slider = false }) => {
  const { pic, name, timing, weight, price, description, inStock, tag } = info;

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    inStock && message.success('Товар добавлен в корзину');
  };

  return (
    <Link
      className={`relative flex h-full cursor-pointer flex-col rounded-2xl border border-border transition-all hover:border-accentActive max-md:rounded-t-lg ${slider ? 'mx-3 max-md:mx-2' : 'w-full'} `}
      href={info.href}
    >
      {tag && (
        <span
          className="z-2 absolute left-6 top-6 rounded-lg px-2 py-1 text-base leading-base max-md:px-1"
          style={{ backgroundColor: TagColorSchema[tag]?.backgroundColor, color: TagColorSchema[tag]?.textColor }}
        >
          {tag}
        </span>
      )}
      <Image
        width={560}
        height={373}
        alt={name}
        src={pic}
        className="aspect-3/2 rounded-t-2xl object-cover object-center max-md:rounded-t-lg"
      />
      <div className="flex h-full flex-grow flex-col justify-between p-6 max-md:p-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
            <div className="flex items-center">
              <p className="text-nowrap text-textSecondary max-md:text-base max-md:leading-base">{weight} г</p>
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
        <div className="flex items-center justify-between pt-4">
          <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">
            {price} {CurrencySymbol.RUB}
          </p>
          <Button type="primary" disabled={!inStock} className="max-md:h-10 max-md:text-base" onClick={onButtonClick}>
            {inStock ? 'Купить' : 'Нет в наличии'}
          </Button>
        </div>
      </div>
    </Link>
  );
};