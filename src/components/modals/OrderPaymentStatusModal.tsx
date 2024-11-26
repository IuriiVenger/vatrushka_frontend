import { Button } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useMemo, useState } from 'react';

import Modal from './Modal';

import { AccountTabsOptions, PaymentOptions } from '@/constants';
import { useUrlParams } from '@/hooks/useUrlParams';
import { order } from '@/mocks';
import { useAppSelector } from '@/store';
import { selectIsNonAnonymousUser, selectUser } from '@/store/slices/user';
import { TModalProps } from '@/types';

type TOrderPaymentStatusModalProps = TModalProps & {
  paymentMethod?: PaymentOptions;
};

const OrderPaymentStatusModal: FC<TOrderPaymentStatusModalProps> = ({ isOpen, setIsOpen, paymentMethod }) => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const isUserLoggedIn = useAppSelector(selectIsNonAnonymousUser);
  const { user } = useAppSelector(selectUser);
  const { paramValue, removeParam } = useUrlParams<boolean>('success');

  useEffect(() => {
    if (paymentMethod === PaymentOptions.CASH) {
      setIsPaymentSuccessful(true);
    } else {
      if (!paramValue) setIsOpen(false);

      setIsPaymentSuccessful(paramValue!);
      removeParam();
    }
  }, [isOpen]);

  const title = useMemo(() => {
    if (paymentMethod !== PaymentOptions.CASH) {
      return isPaymentSuccessful ? 'Заказ успешно оплачен' : 'Не удалось оплатить заказ';
    }

    return 'Заказ успешно оформлен';
  }, [paymentMethod, isPaymentSuccessful]);

  const button = useMemo(() => {
    if (isPaymentSuccessful) {
      return isUserLoggedIn ? (
        <Link href={`/account?tab=${AccountTabsOptions.CURRENT_ORDERS}`}>
          <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base">
            Личный кабинет
          </Button>
        </Link>
      ) : (
        <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base">
          Закрыть
        </Button>
      );
    }

    return (
      <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base">
        Вернуться на страницу оплаты
      </Button>
    );
  }, [isPaymentSuccessful, isUserLoggedIn]);

  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-8 text-lg leading-lg max-sm:gap-6 max-sm:text-base max-sm:leading-base">
        {isPaymentSuccessful ? (
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl">№ заказа {order.number}</p>
            {user?.phone && (
              <p className="pt-6 max-sm:pt-4">
                На номер {user?.phone} отправлено sms-сообщение с информацией о заказе.
              </p>
            )}
            {isUserLoggedIn && (
              <p className="pt-3 max-sm:pt-2">Перейдите в личный кабинет, чтобы посмотреть информацию о заказе.</p>
            )}
          </div>
        ) : (
          <p> Пожалуйста, повторите попытку.</p>
        )}
        {button}
      </div>
    </Modal>
  );
};

export default OrderPaymentStatusModal;
