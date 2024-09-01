'use client';

import { Flex, Divider, Button, message, Grid } from 'antd';
import { FC } from 'react';

import { TagColorSchema } from '@/constants';
import { TCard } from '@/types';

type TProps = {
  info: TCard;
};

const { useBreakpoint } = Grid;

export const ItemCard: FC<TProps> = ({ info }) => {
  const { pic, name, timing, weight, price, description, inStock, tag } = info;

  const screens = useBreakpoint();

  return (
    <Flex
      vertical
      className="relative w-full cursor-pointer rounded-2xl border border-border max-md:rounded-t-lg"
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
        className="max-h-64 min-h-64 rounded-t-2xl object-cover object-center max-md:max-h-54.5 max-md:min-h-54.5 max-md:rounded-t-lg"
      />
      <Flex vertical justify="space-between" className="h-full flex-grow p-6 max-md:p-4">
        <Flex vertical>
          <Flex vertical>
            <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
            <Flex align="center">
              <p className="text-nowrap text-textSecondary max-md:text-base max-md:leading-base">{weight} кг</p>
              <Divider type="vertical" />
              <p className="text-textSecondary max-md:text-base max-md:leading-base">Приготовление от {timing} часов</p>
            </Flex>
          </Flex>
          <p className="pt-4 max-md:text-base max-md:leading-base">{description}</p>
        </Flex>
        <Flex className="pt-4" justify="space-between" align="center">
          <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{price} &#8381;</p>
          <Button
            type="primary"
            disabled={!inStock}
            size={screens.md ? 'middle' : 'small'}
            onClick={(e) => {
              e.stopPropagation();
              inStock && message.info('Добавлено в корзину');
            }}
          >
            {inStock ? 'Купить' : 'Нет в наличии'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
