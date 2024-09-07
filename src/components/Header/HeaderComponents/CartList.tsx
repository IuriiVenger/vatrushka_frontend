import { Button, Divider, message } from 'antd';
import { FC, useMemo } from 'react';

import { DropdownListItem } from './DropdownListItem';

import { CurrencySymbol } from '@/constants';
import { cartList } from '@/mocks';
import { getNounWithDeclension } from '@/utils/formatters';

export const CartList: FC = () => {
  const itemsCount = useMemo(
    () => `${cartList.length} ${getNounWithDeclension(cartList.length, 'товар', 'товара', 'товаров')}`,
    [],
  );

  const onButtonClick = () => message.info(`В корзину`);

  return (
    <div className="flex w-85 flex-col gap-6 text-base leading-base text-text">
      <div className="flex items-center justify-between">
        <p className="text-lg leading-lg">Корзина</p>
        <p className="text-textTertiary">{itemsCount}</p>
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
            <span>{cartList.reduce<number>((acc, item) => acc + item.price, 0)}</span> {CurrencySymbol.RUB}
          </span>
        </p>
        <Button type="primary" onClick={onButtonClick}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
