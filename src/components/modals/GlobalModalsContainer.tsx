import { FC, useEffect } from 'react';

import OrderPaymentStatusModal from './OrderPaymentStatusModal';

import { GlobalModalNames, RequestStatus } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectOrders, setPaymentStatusModalParams } from '@/store/slices/orders';
import { selectUI, setModalVisible, toogleModalVisibility } from '@/store/slices/ui';
import { selectIsNonAnonymousUser, selectUser } from '@/store/slices/user';
import { deleteCookieClientSide, getCookieClientSide } from '@/utils/common';
import { isOrderPaymentStatusModalProps } from '@/utils/typeguards';

const GlobalModalsContainer: FC = () => {
  const { paymentStatusModalParams } = useAppSelector(selectOrders);
  const isUserLoggedIn = useAppSelector(selectIsNonAnonymousUser);
  const { userLoadingStatus } = useAppSelector(selectUser);
  const { modalVisibility } = useAppSelector(selectUI);
  const dispatch = useAppDispatch();

  const isUserLoading = userLoadingStatus === RequestStatus.PENDING;

  const initOrderPaymentStatusModalProps = () => {
    const cookieOrderPaymentStatusModalProps = getCookieClientSide('order_payment_status_modal_props');

    if (cookieOrderPaymentStatusModalProps) {
      const orderPaymentStatusModalProps = JSON.parse(cookieOrderPaymentStatusModalProps);
      if (isOrderPaymentStatusModalProps(orderPaymentStatusModalProps)) {
        dispatch(setPaymentStatusModalParams(orderPaymentStatusModalProps));
        deleteCookieClientSide('order_payment_status_modal_props');
        dispatch(setModalVisible(GlobalModalNames.ORDER_PAYMENT_STATUS));
      }
    }
  };

  const toogleGlobalModalVisibilityHandlers = Object.values(GlobalModalNames).reduce(
    (acc, name) => ({ ...acc, [name]: () => dispatch(toogleModalVisibility(name)) }),
    {} as Record<GlobalModalNames, () => void>,
  );

  useEffect(() => {
    initOrderPaymentStatusModalProps();
  }, []);

  return (
    <OrderPaymentStatusModal
      isOpen={modalVisibility[GlobalModalNames.ORDER_PAYMENT_STATUS]}
      setIsOpen={toogleGlobalModalVisibilityHandlers[GlobalModalNames.ORDER_PAYMENT_STATUS]}
      isUserLoggedIn={isUserLoggedIn}
      isUserLoading={isUserLoading}
      {...paymentStatusModalParams}
    />
  );
};

export default GlobalModalsContainer;
