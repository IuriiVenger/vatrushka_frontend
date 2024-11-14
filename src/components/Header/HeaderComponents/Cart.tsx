import { Dropdown, Button, Badge } from 'antd';
import { FC, useMemo } from 'react';
import { LuShoppingCart } from 'react-icons/lu';

import { TMenuItem } from '../Header';

import CartList from './CartList';

import { color } from '@/config/variables';
import { TCard } from '@/types';

// const cartItems: TMenuItem[] = [
//   {
//     key: 'cart',
//     label: <CartList />,
//     type: 'group',
//   },
// ];

type TCartProps = {
  onCloseAll: () => void;
  cartItems: TCard[];
  totalPrice: number;
  onCartClick: () => void;
  onDeleteButtonClick: (id: string) => void;
  onStepperCountChange: (count: number, id: string) => void | Promise<void>;
  isCartDropdownHidden: boolean;
};

const Cart: FC<TCartProps> = (props) => {
  const {
    onCloseAll,
    cartItems,
    totalPrice,
    onDeleteButtonClick,
    onStepperCountChange,
    isCartDropdownHidden,
    onCartClick,
  } = props;

  const dropdownItems: TMenuItem[] = [
    {
      key: 'cart',
      label: (
        <CartList
          cartItems={cartItems}
          totalPrice={totalPrice}
          onDeleteButtonClick={onDeleteButtonClick}
          onStepperCountChange={onStepperCountChange}
        />
      ),
      type: 'group',
    },
  ];

  const itemsCount = cartItems.reduce<number>((acc, item) => acc + item.quantity, 0);

  const dropDownTrigger = useMemo(() => {
    const trigger: Array<'hover'> = [];

    if (itemsCount) {
      trigger.push('hover');
    }

    return trigger;
  }, [itemsCount]);

  if (isCartDropdownHidden) {
    return (
      <Button
        aria-label={`Просмотр корзины. Сейчас товаров в корзине: ${itemsCount}`}
        className="h-6 w-5 border-none p-0"
        icon={
          <Badge count={itemsCount} className="max-xs:small" color={color.accent.default}>
            <LuShoppingCart className="h-6 min-w-5 text-textTertiary transition-all hover:text-textQuaternary" />
          </Badge>
        }
      />
    );
  }

  return (
    <Dropdown
      menu={{ items: dropdownItems }}
      trigger={dropDownTrigger}
      onOpenChange={onCloseAll}
      placement="bottomRight"
      overlayClassName="pt-2"
    >
      <Button
        onClick={onCartClick}
        aria-label={`Просмотр корзины. Сейчас товаров в корзине: ${itemsCount}`}
        className="h-6 w-5 border-none p-0"
        icon={
          <Badge count={itemsCount} className="max-xs:small" color={color.accent.default}>
            <LuShoppingCart className="h-6 min-w-5 text-textTertiary transition-all hover:text-textQuaternary" />
          </Badge>
        }
      />
    </Dropdown>
  );
};

export default Cart;
