'use client';

import { Divider, Button, message, Grid } from 'antd';
import { FC } from 'react';

import { TagColorSchema } from '@/constants';
import { TCard } from '@/types';

type TProps = {
  info: TCard;
  small?: boolean;
  slider?: boolean;
};

const { useBreakpoint } = Grid;

export const ItemCard: FC<TProps> = ({ info, small = false, slider = false }) => {
  const { pic, name, timing, weight, price, description, inStock, tag } = info;

  const screens = useBreakpoint();

  return (
    <div
      className={`relative flex h-full cursor-pointer flex-col rounded-2xl border border-border transition-all hover:border-accentActive max-md:rounded-t-lg ${slider ? 'mx-3 max-md:mx-2' : 'w-full'} `}
      onClick={() => message.info('клик')}
    >
      <span
        className="z-2 absolute left-6 top-6 rounded-lg px-2 py-1 text-base leading-base max-md:px-1"
        style={{ backgroundColor: TagColorSchema[tag].backgroundColor, color: TagColorSchema[tag].textColor }}
      >
        {tag}
      </span>
      <img
        alt={name}
        src={pic}
        className={`${small ? 'max-h-45 min-h-45' : 'max-h-64 min-h-64'} aspect-3/2 rounded-t-2xl object-cover object-center max-md:max-h-54.5 max-md:min-h-54.5 max-md:rounded-t-lg`}
      />
      <div className="flex h-full flex-grow flex-col justify-between p-6 max-md:p-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
            <div className="flex items-center">
              <p className="text-nowrap text-textSecondary max-md:text-base max-md:leading-base">{weight} кг</p>
              <Divider type="vertical" />
              <p className="text-textSecondary max-md:text-base max-md:leading-base">Приготовление от {timing} часов</p>
            </div>
          </div>
          <p className={`pt-4 max-md:text-base max-md:leading-base ${small ? 'collapsed-description' : ''}`}>
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{price} &#8381;</p>
          <Button
            type="primary"
            disabled={!inStock}
            size={screens.md ? 'middle' : 'small'}
            onClick={(e) => {
              e.stopPropagation();
              inStock && message.success('Товар добавлен в корзину');
            }}
          >
            {inStock ? 'Купить' : 'Нет в наличии'}
          </Button>
        </div>
      </div>
    </div>
  );
};
