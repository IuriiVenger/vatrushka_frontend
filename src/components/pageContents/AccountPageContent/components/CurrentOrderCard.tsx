import { Button, Divider } from 'antd';
import { FC, useState } from 'react';

import OrderStatusModal from '@/components/modals/OrderStatusModal';
import { CurrencySymbol } from '@/constants';
import { TOrder } from '@/mocks';

type TCurrentOrderCardProps = {
  order: TOrder;
};

export const CurrentOrderCard: FC<TCurrentOrderCardProps> = ({ order }) => {
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
          <div className="flex flex-col gap-6 max-sm:gap-4">
            <div className="flex flex-col gap-3 max-sm:gap-2">
              {items.map((item) => (
                <div className="flex justify-between gap-10" key={item.id}>
                  <p>{item.name}</p>
                  <p className="whitespace-nowrap">{`${item.quantity} x ${item.unitPrice} ${CurrencySymbol.RUB}`}</p>
                </div>
              ))}
              {discounts.map((discount) => (
                <div className="flex justify-between gap-10" key={discount.id}>
                  <p>{discount.reason}</p>
                  <p className="whitespace-nowrap">{`-${discount.discount} ${CurrencySymbol.RUB}`}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3">
              <p>Итого:</p>
              <p className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">{`${totalPrice} ${CurrencySymbol.RUB}`}</p>
            </div>
          </div>
        </div>
        <Divider className="hidden max-lg:block" />
        <div className="max-w-112 flex h-max w-full flex-col gap-3 rounded-2xl border border-borderSecondary p-6 max-lg:border-none max-lg:p-0 max-sm:gap-2">
          <h3 className="text-nowrap pb-2 text-xl font-medium leading-xl max-sm:text-lg max-sm:leading-lg">{type}</h3>
          <p>{address}</p>
          <p>{time}</p>
          <p>{paymentMethod}</p>
        </div>
      </div>
      <OrderStatusModal
        isOpen={isViewStatusModalOpen}
        setIsOpen={setIsViewStatusModalOpen}
        orderStatuses={orderStatuses}
      />
    </>
  );
};
