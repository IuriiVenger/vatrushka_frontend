import { message } from 'antd';
import cn from 'classnames';
import { FC, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CustomImage from '@/components/ui/CustomImage';
import StepperButton from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { TCartListItem, TSearchListItem } from '@/types';

type TDropdownListItemProps = {
  item: TCartListItem | TSearchListItem;
};

const DropdownListItem: FC<TDropdownListItemProps> = ({ item }) => {
  const { name, pic, price, count, onClick } = item;

  const isCart = 'count' in item;

  const [stepperCount, setStepperCount] = useState<number>(count || 0); //  to fix, state have to be in parent component

  const onDeleteButtonClick = () => message.error(`deleted ${name}`);

  return (
    <div onClick={onClick} className={cn('flex w-full gap-3', onClick && 'cursor-pointer')}>
      <CustomImage
        alt={name}
        src={pic}
        width={72}
        height={72}
        className="aspect-square h-16 w-16 rounded-lg object-cover"
      />
      <div className={`flex w-full flex-col ${isCart ? 'gap-4' : 'gap-3'}`}>
        <div className="flex items-start justify-between">
          <p className="max-w-54.5 text-wrap">{name}</p>
          {isCart && (
            <button type="button" onClick={onDeleteButtonClick}>
              <RxCross2 className="h-4 w-4 text-textTertiary transition-all hover:text-accent" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nowrap">
            <span>{price}</span> {CurrencySymbol.RUB}
          </p>
          {isCart && <StepperButton setCount={setStepperCount} count={stepperCount} minValue={1} />}
        </div>
      </div>
    </div>
  );
};

export default DropdownListItem;
