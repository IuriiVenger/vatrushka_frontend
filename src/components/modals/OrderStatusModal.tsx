import { Timeline } from 'antd';
import { FC } from 'react';

import { Modal } from './Modal';

import { order } from '@/mocks';
import { TModalProps } from '@/types';

const OrderStatusModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const items = order.orderStatuses.map(({ time, status, completed }) => ({
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
