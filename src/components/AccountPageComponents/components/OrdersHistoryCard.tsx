import { Button, Collapse, CollapseProps, Divider } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Fulfillment from './cardComponents/Fulfillment';
import OrderContent from './cardComponents/OrderContent';

import { API } from '@/api/types';
import { color } from '@/config/variables';
import {
  cashPaymentOptions,
  CashPaymentOptions,
  deliveryTypeOptions,
  onlinePaymentOptions,
  OnlinePaymentOptions,
  OrderStatus,
  orderStatusLabels,
} from '@/constants';
import { convertAddressToCityStreetBuildingFlat, convertAddressToEntranceFloorDoorphone } from '@/utils/converters';

type TOrdersHistoryCardProps = {
  order: API.Orders.OrdersData['data'][number];
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
  const { order_number, created_at, cart, status, total_price, type, address, delivery_time, payment_methods } = order;

  const isOrderClosedOrCancelled = status === OrderStatus.CANCELLED || status === OrderStatus.CLOSED;

  const createdAt = dayjs(created_at).format('DD.MM.YYYY');

  const additionalInfo = convertAddressToCityStreetBuildingFlat(address);
  const extraInfo = convertAddressToEntranceFloorDoorphone(address);
  const orderAddress = `${additionalInfo}, ${extraInfo}`;

  const deliveryTime = dayjs(delivery_time).format('DD.MM.YYYY с HH:mm');

  const paymentMethod = payment_methods[0].is_online
    ? onlinePaymentOptions[payment_methods[0].iiko_code as OnlinePaymentOptions]?.label
    : cashPaymentOptions[payment_methods[0].iiko_code as CashPaymentOptions]?.label;

  const collapseItem: CollapseProps['items'] = [
    {
      key: order_number,
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
            <p className="text-nowrap text-lg leading-lg max-sm:text-base max-sm:leading-base">№{order_number}</p>
          </div>
          <div
            className={`max-sm:text-xs max-sm:leading-xs self-center text-nowrap rounded-2xl px-2 text-base leading-base ${isOrderClosedOrCancelled ? 'border border-error bg-errorBg text-error' : 'border border-success bg-successBg text-success'}`}
          >
            {orderStatusLabels[status]}
          </div>
        </div>
      ),
      children: (
        <div className="flex gap-12 max-lg:flex-col max-lg:gap-0">
          <OrderContent
            //  discounts={discounts}
            items={cart.items}
            totalPrice={total_price}
            isHistoryOrder
          />
          <Divider className="hidden max-lg:block" />
          <Fulfillment
            type={deliveryTypeOptions[type].label}
            address={orderAddress}
            time={deliveryTime}
            paymentMethod={paymentMethod || payment_methods[0].iiko_code}
          />
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
