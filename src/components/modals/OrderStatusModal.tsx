import { Timeline } from 'antd';
import { FC } from 'react';

import Modal from './Modal';

import { OrderStatus, orderStatusLabels, OrderType } from '@/constants';
import { TModalProps } from '@/types';

type TOrderStatusModalProps = TModalProps & {
  orderStatus: Exclude<OrderStatus, OrderStatus.CLOSED | OrderStatus.CANCELLED>;
  deliveryType: OrderType;
};

const OrderStatusModal: FC<TOrderStatusModalProps> = ({ isOpen, setIsOpen, orderStatus, deliveryType }) => {
  const excludedStatuses =
    deliveryType === OrderType.DELIVERY
      ? [OrderStatus.CLOSED, OrderStatus.CANCELLED]
      : [OrderStatus.WAITING, OrderStatus.ON_WAY, OrderStatus.DELIVERED, OrderStatus.CLOSED, OrderStatus.CANCELLED];

  const statuses = Object.values(OrderStatus).filter((status) => !excludedStatuses.includes(status));

  const items = statuses.map((status, index) => {
    const isCompleted = index <= statuses.indexOf(orderStatus);
    return {
      children: orderStatusLabels[status],
      color: isCompleted ? 'green' : 'gray',
    };
  });

  return (
    <Modal title="Статус заказа" isOpen={isOpen} setIsOpen={setIsOpen} width="xsmall">
      <Timeline mode="left" items={items} />
    </Modal>
  );
};

export default OrderStatusModal;
