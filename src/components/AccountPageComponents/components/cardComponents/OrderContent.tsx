import { FC } from 'react';

import { CurrencySymbol } from '@/constants';

type TOrderContentProps = {
  discounts: {
    id: string;
    reason: string;
    discount: number;
  }[];
  items: {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
  totalPrice: number;
};

const OrderContent: FC<TOrderContentProps> = ({ discounts, items, totalPrice }) => (
  <div className="flex w-full flex-col gap-8 max-sm:gap-6">
    <div className="flex flex-col gap-6 max-sm:gap-4">
      <div className="flex flex-col gap-3 max-sm:gap-2">
        {items.map((item) => (
          <div className="flex justify-between gap-10" key={item.id}>
            <p>{item.name}</p>
            <p className="whitespace-nowrap">{`${item.quantity} x ${item.unitPrice} ${CurrencySymbol.RUB}`}</p>
          </div>
        ))}
        {discounts.map((discount) => (
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

export default OrderContent;
