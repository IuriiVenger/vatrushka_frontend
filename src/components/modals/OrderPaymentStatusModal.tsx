import { Button } from 'antd';
import Link from 'next/link';
import { FC, useMemo } from 'react';

import Modal from './Modal';

import { AccountTabsOptions } from '@/constants';

import { TModalProps } from '@/types';

export type TOrderPaymentStatusModalProps = {
  isCashPayment?: boolean;
  isPaymentSuccessful: boolean;
  isUserLoggedIn: boolean;
  isUserLoading?: boolean;
  phoneNumber: string | null;
  orderNumber: string | null;
};

const OrderPaymentStatusModal: FC<TOrderPaymentStatusModalProps & TModalProps> = ({
  isCashPayment,
  isOpen,
  setIsOpen,
  isPaymentSuccessful,
  isUserLoggedIn,
  isUserLoading,
  phoneNumber,
  orderNumber,
}) => {
  // const { paramValue, removeParam } = useUrlParams<boolean>('success');

  const title = useMemo(() => {
    if (isCashPayment) {
      return 'Заказ успешно coздан';
    }
    return isPaymentSuccessful ? 'Заказ успешно оплачен' : 'Не удалось оплатить заказ';
  }, [isPaymentSuccessful, isCashPayment]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-8 text-lg leading-lg max-sm:gap-6 max-sm:text-base max-sm:leading-base">
        {isPaymentSuccessful ? (
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl">№ заказа {orderNumber}</p>
            {phoneNumber && (
              <p className="pt-6 max-sm:pt-4">
                На номер {phoneNumber} отправлено sms-сообщение с информацией о заказе.
              </p>
            )}
            {isUserLoggedIn && (
              <p className="pt-3 max-sm:pt-2">Перейдите в личный кабинет, чтобы посмотреть информацию о заказе.</p>
            )}
          </div>
        ) : (
          <p> Пожалуйста, повторите попытку.</p>
        )}

        {isUserLoggedIn ? (
          <Link href={`/account?tab=${AccountTabsOptions.CURRENT_ORDERS}`}>
            <Button onClick={closeModal} type="primary" className="w-full max-sm:text-base max-sm:leading-base">
              Личный кабинет
            </Button>
          </Link>
        ) : (
          <Button onClick={closeModal} type="primary" className="w-full max-sm:text-base max-sm:leading-base">
            Закрыть
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default OrderPaymentStatusModal;
