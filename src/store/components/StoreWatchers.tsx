import { useCallback, useEffect } from 'react';

import { selectConfig } from '../slices/config';

import useAuth from '@/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectUser } from '@/store/slices/user';

const StoreWatchers = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const { isWebAppInitialized } = useAppSelector(selectConfig);
  const { initAnonymousUser } = useAuth(dispatch);

  const userLogoutWatcher = useCallback(async () => {
    if (!user && isWebAppInitialized) {
      await initAnonymousUser();
    }
  }, [user, isWebAppInitialized]);

  useEffect(() => {
    userLogoutWatcher();
  }, [user]);

  return null;
};

export default StoreWatchers;
