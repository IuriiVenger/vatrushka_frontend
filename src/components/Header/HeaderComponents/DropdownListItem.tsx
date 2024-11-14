import cn from 'classnames';
import { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CustomImage from '@/components/ui/CustomImage';
import StepperButton from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { TCard, TSearchListItem } from '@/types';

type TDropdownListItemProps = {
  item: TCard | TSearchListItem;
  isCart?: boolean;
  onDeleteButtonClick?: () => void;
  onStepperCountChange?: (count: number) => void;
};

const DropdownListItem: FC<TDropdownListItemProps> = ({
  item,
  isCart = false,
  onDeleteButtonClick,
  onStepperCountChange,
}) => {
  const { name, pic, price, quantity, onClick } = item;

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
          {isCart && !!onStepperCountChange && (
            <StepperButton setCount={onStepperCountChange} count={quantity ?? 0} minValue={1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownListItem;
