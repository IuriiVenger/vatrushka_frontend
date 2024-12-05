import { FC } from 'react';

import { API } from '@/api/types';
import { CurrencySymbol } from '@/constants';
import { getGroupedCartItems } from '@/utils/converters';

type TOrderContentProps = {
  discounts?: {
    id: string;
    reason: string;
    discount: number;
  }[];
  items: API.Cart.CartItem.CartItem[];
  totalPrice: number;
};

const OrderContent: FC<TOrderContentProps> = ({ discounts, items, totalPrice }) => {
  const groupedCartItems = getGroupedCartItems(items ?? []);

  return (
    <div className="flex w-full flex-col gap-8 max-sm:gap-6">
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <div className="flex flex-col gap-3 max-sm:gap-2">
          {groupedCartItems.map((item) => {
            // const modifiers = item.modifiers.map((modifier) => modifier.name).join(', ');

            // TODO: вывести список названий
            const modifiers = '';

            return (
              <div className="flex items-end justify-between gap-10" key={item.product.id}>
                <p>
                  {item.product.name}
                  {modifiers && <span>, {modifiers}</span>}
                </p>
                <p className="whitespace-nowrap">{`${item.quantity} x ${item.size.price} ${CurrencySymbol.RUB}`}</p>
              </div>
            );
          })}
          {discounts &&
            discounts.map((discount) => (
              <div className="flex justify-between gap-10" key={discount.id}>
                <p>{discount.reason}</p>
                <p className="whitespace-nowrap">{`-${discount.discount} ${CurrencySymbol.RUB}`}</p>
              </div>
            ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <p>Итого:</p>
          <p className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">{`${totalPrice} ${CurrencySymbol.RUB}`}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
