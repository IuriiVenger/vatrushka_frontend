import { Button, Divider, message } from 'antd';
import { FC } from 'react';

import { DropdownListItem } from './DropdownListItem';

import { cartList } from '@/mocks';
import { getNounWithDeclension } from '@/utils/getNounWithDeclension';

export const CartList: FC = () => (
  <div className="flex w-85 flex-col gap-6 text-base leading-base text-text">
    <div className="flex items-center justify-between">
      <p className="text-lg leading-lg">Корзина</p>
      <p className="text-textTertiary">
        <span>{cartList.length}</span> {getNounWithDeclension(cartList.length, 'товар', 'товара', 'товаров')}
      </p>
    </div>
    {cartList.length ? (
      <ul className="flex max-h-108 flex-col overflow-auto pr-3">
        {cartList.map((item, index) => (
          <li key={index}>
            <DropdownListItem item={item} cart />
            {index !== cartList.length - 1 && <Divider className="my-4" />}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-textTertiary">В корзине пусто</p>
    )}
    <div className="flex items-center justify-between">
      <p>
        Итого:{' '}
        <span className="text-500 text-lg leading-lg">
          <span>{cartList.reduce<number>((acc, item) => acc + item.price, 0)}</span> &#8381;
        </span>
      </p>
      <Button type="primary" onClick={() => message.info(`В корзину`)}>
        В корзину
      </Button>
    </div>
  </div>
);
