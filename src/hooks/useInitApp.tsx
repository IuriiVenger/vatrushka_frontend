import { useAppDispatch } from '@/store';
import { loadCategories } from '@/store/slices/entities';

const useInitApp = () => {
  const dispatch = useAppDispatch();

  const initApp = async () => {
    dispatch(loadCategories());
  };

  return { initApp };
};

export default useInitApp;
