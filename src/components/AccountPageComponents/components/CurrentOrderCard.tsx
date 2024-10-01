import { Button, Divider } from 'antd';
import { FC, useState } from 'react';

import Fulfillment from './cardComponents/Fulfillment';

import OrderContent from './cardComponents/OrderContent';

import OrderStatusModal from '@/components/modals/OrderStatusModal';
import { TOrder } from '@/mocks';

type TCurrentOrderCardProps = {
  order: TOrder;
};

const CurrentOrderCard: FC<TCurrentOrderCardProps> = ({ order }) => {
  const { createdAt, discounts, fulfillment, items, number, orderStatuses, totalPrice } = order;
  const { type, address, time, paymentMethod } = fulfillment;

  const [isViewStatusModalOpen, setIsViewStatusModalOpen] = useState(false);

  const onViewStatus = () => {
    setIsViewStatusModalOpen(true);
  };

  return (
    <>
      <div className="flex w-full gap-12 rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-lg:flex-col max-lg:gap-0 max-sm:p-4 max-sm:text-base max-sm:leading-base">
        <div className="flex w-full flex-col gap-8 max-sm:gap-6">
          <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
            <div className="flex items-baseline gap-4">
              <h2 className="text-nowrap text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
                Заказ № {number}
              </h2>
              <p className="text-nowrap text-lg leading-lg max-sm:text-base max-sm:leading-base">создан {createdAt}</p>
            </div>
            <Button type="link" className="h-6 p-0 text-primary underline underline-offset-4" onClick={onViewStatus}>
              Статус заказа
            </Button>
          </div>
          <OrderContent discounts={discounts} items={items} totalPrice={totalPrice} />
        </div>
        <Divider className="hidden max-lg:block" />
        <Fulfillment type={type} address={address} time={time} paymentMethod={paymentMethod} />
      </div>
      <OrderStatusModal
        isOpen={isViewStatusModalOpen}
        setIsOpen={setIsViewStatusModalOpen}
        orderStatuses={orderStatuses}
      />
    </>
  );
};

export default CurrentOrderCard;
