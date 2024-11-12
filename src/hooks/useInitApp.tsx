import useAuth from './useAuth';

import { useAppDispatch } from '@/store';
import { setWebAppInitialized } from '@/store/slices/config';
import { loadCategories } from '@/store/slices/entities';
import { getTokens } from '@/utils/tokensFactory';

const useInitApp = () => {
  const dispatch = useAppDispatch();
  const { initUser } = useAuth(dispatch);
  const { access_token } = getTokens();

  const initApp = async () => {
    try {
      await dispatch(loadCategories());
      !!access_token && (await initUser());
    } finally {
      dispatch(setWebAppInitialized(true));
    }
  };

  return { initApp };
};

export default useInitApp;
