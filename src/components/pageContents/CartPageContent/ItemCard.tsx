import { Button } from 'antd';
import { FC, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CustomImage from '@/components/ui/CustomImage';
import StepperButton from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { useMessage } from '@/hooks/useMessage';
import { TCard } from '@/types';

type TItemCardProps = {
  card: TCard;
};

const ItemCard: FC<TItemCardProps> = ({ card }) => {
  const { id, name, pic, price, weight, inStock, quantity } = card;

  const [count, setCount] = useState(quantity);

  const { showMessage } = useMessage();

  const onRemoveItem = () => {
    showMessage({ type: 'info', text: `Товар ${name} удален из корзины ${id}` });
  };

  return (
    <div className="flex w-full items-center gap-6 max-sm:items-start max-sm:gap-4 max-xs:gap-2">
      <CustomImage
        alt={name}
        src={pic}
        width={104}
        height={104}
        className="aspect-square h-26 w-26 rounded-lg object-cover max-xs:h-18 max-xs:w-18"
      />
      <div className="flex w-full items-center gap-6 max-sm:flex-col max-sm:items-start">
        <div className="flex w-full items-center gap-6 max-sm:items-start max-sm:justify-between">
          <div className="flex w-full gap-6">
            <div className="flex max-w-65 flex-col gap-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
              <p>{name}</p>
              <div className="flex flex-col gap-0.5 text-textTertiary">
                <p>Modifiers</p>
                <p>{weight} г</p>
              </div>
              <Button
                type="link"
                className="h-6 w-max p-0 text-base leading-base text-primary underline underline-offset-4"
              >
                Изменить
              </Button>
            </div>
          </div>

          <Button
            icon={<RxCross2 className="h-4 w-4" />}
            type="text"
            className="hidden max-h-6 max-w-6 text-textTertiary active:text-text max-sm:flex"
            onClick={onRemoveItem}
          />
        </div>
        <div className="flex w-full items-center justify-end gap-6 max-sm:justify-normal">
          {inStock ? (
            <div className="flex w-max items-center gap-6 max-sm:w-full max-sm:justify-between">
              <StepperButton count={count} setCount={setCount} minCount={1} />
              <p className="text-nowrap text-xl font-medium leading-xl max-sm:text-base max-sm:leading-base">
                {price} {CurrencySymbol.RUB}
              </p>
            </div>
          ) : (
            <p className="text-nowrap text-lg leading-lg text-textTertiary max-sm:text-base max-sm:leading-base">
              Товара нет в наличии
            </p>
          )}
          <Button
            icon={<RxCross2 className="h-6 w-6" />}
            type="text"
            className="ml-1 min-h-8 min-w-8 text-textTertiary active:text-text max-sm:hidden"
            onClick={onRemoveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
