import { useRef } from 'react';

import useAuth from './useAuth';

import { RequestStatus } from '@/constants';

import { useAppDispatch } from '@/store';
import { initCart } from '@/store/slices/cart';
import { setWebAppInitialized } from '@/store/slices/config';
import { loadCategories } from '@/store/slices/entities';
import { getTokens } from '@/utils/tokensFactory';

const useInitApp = () => {
  const dispatch = useAppDispatch();
  const initializeStatusRef = useRef(RequestStatus.NONE);

  const { initUser } = useAuth(dispatch);
  const { access_token } = getTokens();

  const initApp = async () => {
    if (initializeStatusRef.current !== RequestStatus.NONE) {
      return;
    }

    try {
      initializeStatusRef.current = RequestStatus.PENDING;
      await dispatch(loadCategories());
      !!access_token && (await initUser());
      await dispatch(initCart());
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
