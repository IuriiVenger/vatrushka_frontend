'use client';

import { FC } from 'react';

import { Products } from '@/__generated__/graphql';
import Product from '@/components/Product';

type ClientProductPageProps = {
  product: Products;
};

const ClientProductPage: FC<ClientProductPageProps> = ({ product }) => (
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setCategories(categories));
  // }, [categories]);

  <Product product={product} />
);
export default ClientProductPage;
