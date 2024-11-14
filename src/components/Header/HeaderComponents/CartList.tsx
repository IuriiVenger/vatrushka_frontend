import { Button, Divider } from 'antd';
import Link from 'next/link';
import { FC, useMemo } from 'react';

import DropdownListItem from './DropdownListItem';

import { CurrencySymbol } from '@/constants';

import { TCard } from '@/types';
import { getNounWithDeclension } from '@/utils/formatters';

type CartListProps = {
  cartItems: TCard[];
  totalPrice: number;
  onDeleteButtonClick: (id: string) => void;
  onStepperCountChange: (count: number, id: string) => void;
};

const CartList: FC<CartListProps> = ({ cartItems, totalPrice, onDeleteButtonClick, onStepperCountChange }) => {
  const itemsCountNum = cartItems.reduce<number>((acc, item) => acc + item.quantity, 0);

  const handleStepperCountChange = (cardId: string) => (count: number) => {
    onStepperCountChange(count, cardId);
  };

  const handleDeleteButtonClick = (cardId: string) => () => {
    onDeleteButtonClick(cardId);
  };

  const itemsCount = useMemo(
    () => `${itemsCountNum} ${getNounWithDeclension(itemsCountNum, 'товар', 'товара', 'товаров')}`,
    [],
  );

  return (
    <div
      className="flex w-85 flex-col gap-6 text-base leading-base text-text max-xs:w-70"
      role="region"
      aria-label="Корзина"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg leading-lg" role="heading" aria-level={1}>
          Корзина
        </p>
        <p className="text-textTertiary">{itemsCount}</p>
      </div>
      {cartItems.length ? (
        <ul className="flex max-h-108 flex-col overflow-auto pr-3">
          {cartItems.map((item, index) => (
            <li key={index}>
              <DropdownListItem
                item={item}
                isCart
                onDeleteButtonClick={handleDeleteButtonClick(item.id)}
                onStepperCountChange={handleStepperCountChange(item.id)}
              />
              {index !== cartItems.length - 1 && <Divider className="my-4" />}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-textTertiary">В корзине пусто</p>
      )}
      <div className="flex items-center justify-between">
        <p>
          Итого:{' '}
          <span className="text-lg font-medium leading-lg">
            <span>{totalPrice}</span> {CurrencySymbol.RUB}
          </span>
        </p>
        <Link href="/cart">
          <Button type="primary" className="text-lg leading-lg max-sm:h-10 max-sm:text-base max-sm:leading-base">
            В корзину
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartList;
