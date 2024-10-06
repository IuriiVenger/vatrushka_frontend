import { Timeline } from 'antd';
import { FC } from 'react';

import Modal from './Modal';

import { TModalProps, TOrderStatus } from '@/types';

type TOrderStatusModalProps = TModalProps & {
  orderStatuses: TOrderStatus[];
};

const OrderStatusModal: FC<TOrderStatusModalProps> = ({ isOpen, setIsOpen, orderStatuses }) => {
  const items = orderStatuses.map(({ time, status, completed }) => ({
    label: time,
    children: status,
    color: completed ? 'green' : 'gray',
  }));

  return (
    <Modal title="Статус заказа" isOpen={isOpen} setIsOpen={setIsOpen} width="xsmall">
      <Timeline mode="left" items={items} className="pt-6" />
    </Modal>
  );
};

export default OrderStatusModal;
