import { Dropdown, Button, Badge } from 'antd';
import { FC, useMemo } from 'react';
import { LuShoppingCart } from 'react-icons/lu';

import { TMenuItem } from '../Header';

import CartList from './CartList';

import { color } from '@/config/variables';
import { cartList } from '@/mocks';

const cartItems: TMenuItem[] = [
  {
    key: 'cart',
    label: <CartList />,
    type: 'group',
  },
];

type TCartProps = {
  onCloseAll: () => void;
};

const Cart: FC<TCartProps> = ({ onCloseAll }) => {
  const products = [];
  const dropDownTrigger = useMemo(() => {
    const trigger: Array<'click'> = [];

    if (products.length) {
      trigger.push('click');
    }

    return trigger;
  }, [products.length]);

  return (
    <Dropdown
      menu={{ items: cartItems }}
      trigger={dropDownTrigger}
      onOpenChange={onCloseAll}
      placement="bottomRight"
      overlayClassName="pt-2"
    >
      <Button
        type="link"
        aria-label={`Просмотр корзины. Сейчас товаров в корзине: ${cartList.length}`}
        className="h-6 w-5 p-0"
        href={!products.length ? '/cart' : undefined}
        icon={
          <Badge count={cartList.length} className="max-xs:small" color={color.accent.default}>
            <LuShoppingCart className="h-6 min-w-5 text-textTertiary transition-all hover:text-textQuaternary" />
          </Badge>
        }
      />
    </Dropdown>
  );
};

export default Cart;
