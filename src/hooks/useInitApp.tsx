import { useRef } from 'react';

import useAuth from './useAuth';

import { RequestStatus } from '@/constants';

import { useAppDispatch } from '@/store';

import { setWebAppInitialized } from '@/store/slices/config';
import { loadCategories } from '@/store/slices/entities';

const useInitApp = () => {
  const dispatch = useAppDispatch();
  const initializeStatusRef = useRef(RequestStatus.NONE);

  const { initUser } = useAuth(dispatch);

  const initApp = async () => {
    if (initializeStatusRef.current !== RequestStatus.NONE) {
      return;
    }

    try {
      initializeStatusRef.current = RequestStatus.PENDING;
      dispatch(loadCategories());
      await initUser();

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
