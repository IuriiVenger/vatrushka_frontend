'use client';

import { Flex, Divider, Button, message } from 'antd';
import Text from 'antd/lib/typography/Text';
import { FC } from 'react';

import { TCard } from '@/types';

type TProps = {
  info: TCard;
};

export const ItemCard: FC<TProps> = ({ info }) => {
  const { pic, name, timing, weight, price, description } = info;

  return (
    <Flex
      vertical
      className="h-full min-h-512 max-w-384 cursor-pointer rounded-2xl border border-border"
      onClick={() => message.info('клик')}
    >
      <img alt={name} src={pic} className="h-full max-h-256 max-w-384 rounded-t-2xl object-cover object-center" />
      <Flex vertical justify="space-between" className="h-full flex-grow p-6">
        <Flex vertical>
          <Flex vertical>
            <p className="text-xl font-medium leading-xl">{name}</p>
            <Flex align="center">
              <Text type="secondary">{weight} кг</Text>
              <Divider type="vertical" />
              <Text type="secondary">Приготовление от {timing} часов</Text>
            </Flex>
          </Flex>
          <Text className="pt-4">{description}</Text>
        </Flex>
        <Flex className="pt-4" justify="space-between" align="center">
          <p className="text-xl font-medium leading-xl">{price} &#8381;</p>
          <Button
            type="primary"
            onClick={(e) => {
              e.stopPropagation();
              message.info('Добавлено в корзину');
            }}
          >
            Купить
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
