import { message } from 'antd';
import { FC } from 'react';

import { RxCross2 } from 'react-icons/rx';

import { StepperButton } from '@/components/ui/StepperButton';
import { TCartListItem } from '@/types';

type TProps = {
  item: TCartListItem;
  cart?: boolean;
};

export const DropdownListItem: FC<TProps> = ({ item, cart = false }) => {
  const { name, pic, price, count } = item;

  return (
    <div className="flex w-full gap-3">
      <img alt={name} src={pic} className="aspect-square h-16 w-16 rounded-lg object-cover" />
      <div className={`flex w-full flex-col ${cart ? 'gap-4' : 'gap-3'}`}>
        <div className="flex items-start justify-between">
          <p className="max-w-54.5 text-wrap">{name}</p>
          {cart && (
            <button type="button" onClick={() => message.error(`deleted ${name}`)}>
              <RxCross2 className="h-4 w-4 text-textTertiary transition-all hover:text-accent" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span>{price}</span> &#8381;
          </p>
          {cart && <StepperButton initialCount={count} />}
        </div>
      </div>
    </div>
  );
};
