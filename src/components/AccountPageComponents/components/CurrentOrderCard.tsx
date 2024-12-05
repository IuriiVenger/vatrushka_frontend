import { Button, Divider } from 'antd';
import dayjs from 'dayjs';

import { FC, useState } from 'react';

import Fulfillment from './cardComponents/Fulfillment';
import OrderContent from './cardComponents/OrderContent';

import { API } from '@/api/types';
import OrderStatusModal from '@/components/modals/OrderStatusModal';
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

type TCurrentOrderCardProps = {
  order: API.Orders.OrdersData['data'][number];
};

const CurrentOrderCard: FC<TCurrentOrderCardProps> = ({ order }) => {
  const { order_number, created_at, cart, status, total_price, type, address, delivery_time, payment_methods } = order;

  const [isViewStatusModalOpen, setIsViewStatusModalOpen] = useState(false);

  const onViewStatus = () => {
    setIsViewStatusModalOpen(true);
  };

  const isOrderClosedOrCancelled = status === OrderStatus.CANCELLED || status === OrderStatus.CLOSED;

  const createdAt = dayjs(created_at).format('DD.MM.YYYY');

  const additionalInfo = convertAddressToCityStreetBuildingFlat(address);
  const extraInfo = convertAddressToEntranceFloorDoorphone(address);
  const orderAddress = `${additionalInfo}, ${extraInfo}`;

  const deliveryTime = dayjs(delivery_time).format('DD.MM.YYYY с HH:mm');

  const paymentMethod = payment_methods[0].is_online
    ? onlinePaymentOptions[payment_methods[0].iiko_code as OnlinePaymentOptions]?.label
    : cashPaymentOptions[payment_methods[0].iiko_code as CashPaymentOptions]?.label;

  return (
    <>
      <div className="flex w-full gap-12 rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-lg:flex-col max-lg:gap-0 max-sm:p-4 max-sm:text-base max-sm:leading-base">
        <div className="flex w-full flex-col gap-8 max-sm:gap-6">
          <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
            <div className="flex items-baseline gap-4">
              <h2 className="text-nowrap text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
                Заказ №{order_number}
              </h2>
              <p className="text-nowrap text-lg leading-lg max-sm:text-base max-sm:leading-base">создан {createdAt}</p>
            </div>
            {isOrderClosedOrCancelled ? (
              // TODO: бэйдж
              <p className="text-nowrap text-lg leading-lg text-primary max-sm:text-base max-sm:leading-base">
                {orderStatusLabels[status]}
              </p>
            ) : (
              <Button type="link" className="h-6 p-0 text-primary underline underline-offset-4" onClick={onViewStatus}>
                Статус заказа
              </Button>
            )}
          </div>
          <OrderContent
            // discounts={discounts}
            items={cart.items}
            totalPrice={total_price}
          />
        </div>
        <Divider className="hidden max-lg:block" />
        <Fulfillment
          type={deliveryTypeOptions[type].label}
          address={orderAddress}
          time={deliveryTime}
          paymentMethod={paymentMethod || ''}
        />
      </div>
      {!isOrderClosedOrCancelled && (
        <OrderStatusModal isOpen={isViewStatusModalOpen} setIsOpen={setIsViewStatusModalOpen} orderStatus={status} />
      )}
    </>
  );
};

export default CurrentOrderCard;
