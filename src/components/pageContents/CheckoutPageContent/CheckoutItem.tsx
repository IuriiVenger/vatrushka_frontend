import { FC } from 'react';

import { CurrencySymbol } from '@/constants';

type TCheckoutItemProps = {
  name: string;
  weight: string | number | undefined;
  quantity: number;
  price: string | number;
  description: string;
};

const CheckoutItem: FC<TCheckoutItemProps> = ({ name, weight, quantity, price, description }) => {
  const additionalInfo = `${weight ? `${weight} г, ` : ''}${description}`;

  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{name}</p>
        <p className="text-base leading-base text-textTertiary">{additionalInfo}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-nowrap text-lg leading-lg max-sm:text-base max-sm:leading-base">
          {price} {CurrencySymbol.RUB}
        </p>
        <p className="text-nowrap text-base leading-base text-textTertiary">Кол-во: {quantity} шт</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
