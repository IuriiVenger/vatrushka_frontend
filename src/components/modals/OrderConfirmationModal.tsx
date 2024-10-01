import { Button } from 'antd';
import { FC } from 'react';

import { Modal } from './Modal';

import { order, userInfo } from '@/mocks';
import { TModalProps } from '@/types';

const OrderConfirmationModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const onClose = () => {
    setIsOpen(false);
  };

  const isLoggedIn = false;

  return (
    <Modal title="Заказ успешно оформлен" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-8 text-lg leading-lg max-sm:gap-6 max-sm:text-base max-sm:leading-base">
        <div className="flex flex-col">
          <p className="text-xl font-medium leading-xl">№ заказа {order.number}</p>
          <p className="pt-6 max-sm:pt-4">На номер {userInfo.phone} отправлено sms-сообщение с информацией о заказе.</p>
          <p className="pt-3 max-sm:pt-2">
            {isLoggedIn
              ? 'Перейдите в личный кабинет, чтобы посмотреть информацию о заказе.'
              : 'Информацию о заказе можно посмотреть в личном кабинете, для этого войдите или зарегистрируйтесь по номеру телефона указанному при оформлении заказа.'}
          </p>
        </div>
        <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onClose} href="/">
          {isLoggedIn ? 'Личный кабинет' : 'Войти/Зарегистрироваться'}
        </Button>
      </div>
    </Modal>
  );
};

export default OrderConfirmationModal;
