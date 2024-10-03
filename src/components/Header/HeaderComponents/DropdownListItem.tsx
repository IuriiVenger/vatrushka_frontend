import { message } from 'antd';
import { FC, useState } from 'react';

import { RxCross2 } from 'react-icons/rx';

import CustomImage from '@/components/ui/CustomImage';
import { StepperButton } from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { TCartListItem } from '@/types';

type TDropdownListItemProps = {
  item: TCartListItem;
  cart?: boolean;
};

export const DropdownListItem: FC<TDropdownListItemProps> = ({ item, cart = false }) => {
  const { name, pic, price, count } = item;

  const [stepperCount, setStepperCount] = useState<number>(count); //  to fix, state have to be in parent component

  const onButtonClick = () => message.error(`deleted ${name}`);

  return (
    <div className="flex w-full gap-3">
      <CustomImage
        alt={name}
        src={pic}
        width={72}
        height={72}
        className="aspect-square h-16 w-16 rounded-lg object-cover"
      />
      <div className={`flex w-full flex-col ${cart ? 'gap-4' : 'gap-3'}`}>
        <div className="flex items-start justify-between">
          <p className="max-w-54.5 text-wrap">{name}</p>
          {cart && (
            <button type="button" onClick={onButtonClick}>
              <RxCross2 className="h-4 w-4 text-textTertiary transition-all hover:text-accent" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span>{price}</span> {CurrencySymbol.RUB}
          </p>
          {cart && <StepperButton setCount={setStepperCount} count={stepperCount} />}
        </div>
      </div>
    </div>
  );
};
