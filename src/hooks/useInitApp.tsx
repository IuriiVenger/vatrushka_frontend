import { useRef } from 'react';

import useAuth from './useAuth';

import useCart from './useCart';

import { RequestStatus } from '@/constants';

import { useAppDispatch } from '@/store';

import { setWebAppInitialized } from '@/store/slices/config';
import { loadCategories } from '@/store/slices/entities';

const useInitApp = () => {
  const dispatch = useAppDispatch();
  const initializeStatusRef = useRef(RequestStatus.NONE);

  const { initUser } = useAuth(dispatch);
  const { initCart } = useCart();

  const initApp = async () => {
    if (initializeStatusRef.current !== RequestStatus.NONE) {
      return;
    }

    try {
      initializeStatusRef.current = RequestStatus.PENDING;
      await dispatch(loadCategories());
      await initUser();
      await initCart();
      initializeStatusRef.current = RequestStatus.FULFILLED;
    } catch (error) {
      initializeStatusRef.current = RequestStatus.REJECTED;
      throw error;
    } finally {
      dispatch(setWebAppInitialized(true));
    }
  };

  return { initApp };
};

export default useInitApp;
