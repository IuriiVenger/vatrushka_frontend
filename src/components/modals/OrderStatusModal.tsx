import { Timeline } from 'antd';
import { FC } from 'react';

import Modal from './Modal';

import { OrderStatus, orderStatusLabels } from '@/constants';
import { TModalProps } from '@/types';

type TOrderStatusModalProps = TModalProps & {
  orderStatus: Exclude<OrderStatus, OrderStatus.CLOSED | OrderStatus.CANCELLED>;
};

const OrderStatusModal: FC<TOrderStatusModalProps> = ({ isOpen, setIsOpen, orderStatus }) => {
  const statuses = Object.values(OrderStatus).filter(
    (status) => status !== OrderStatus.CLOSED && status !== OrderStatus.CANCELLED,
  );

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
