import { Collapse, CollapseProps, Divider } from 'antd';
import { FC } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

import Fulfillment from './cardComponents/Fulfillment';
import OrderContent from './cardComponents/OrderContent';

import { color } from '@/config/variables';
import { TOrder } from '@/mocks';

type TOrdersHistoryCardProps = {
  order: TOrder;
};

const ExpandIcon: CollapseProps['expandIcon'] = ({ isActive }) => (
  <IoIosArrowDown
    color={color.text.tertiary}
    height={24}
    width={24}
    className={`flex h-6 w-6 self-center transition-all max-sm:h-5 max-sm:w-5 ${isActive ? 'rotate-180' : 'rotate-0'}`}
  />
);

const OrdersHistoryCard: FC<TOrdersHistoryCardProps> = ({ order }) => {
  const { id, createdAt, discounts, fulfillment, items, number, totalPrice, status } = order;
  const { type, address, time, paymentMethod } = fulfillment;

  const collapseItem: CollapseProps['items'] = [
    {
      key: id,
      style: {
        border: `solid 1px ${color.border.secondary}`,
        borderRadius: 16,
      },
      label: (
        <div className="flex items-baseline gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <div className="flex items-baseline gap-4">
            <h2 className="text-nowrap text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
              Заказ от {createdAt}
            </h2>
            <p className="text-nowrap text-lg leading-lg max-sm:text-base max-sm:leading-base">№ {number}</p>
          </div>
          <div
            className={`max-sm:text-xs max-sm:leading-xs text-nowrap rounded-2xl px-2 text-base leading-base ${status === 'Выполнен' ? 'bg-successBg border border-success text-success' : 'bg-errorBg border border-error text-error'}`}
          >
            {status}
          </div>
        </div>
      ),
      children: (
        <div className="flex gap-12 max-lg:flex-col max-lg:gap-0">
          <OrderContent discounts={discounts} items={items} totalPrice={totalPrice} />
          <Divider className="hidden max-lg:block" />
          <Fulfillment type={type} address={address} time={time} paymentMethod={paymentMethod} />
        </div>
      ),
    },
  ];

  return (
    <Collapse
      items={collapseItem}
      className="max-sm:small-padding border "
      bordered={false}
      expandIcon={ExpandIcon}
      expandIconPosition="end"
    />
  );
};

export default OrdersHistoryCard;
