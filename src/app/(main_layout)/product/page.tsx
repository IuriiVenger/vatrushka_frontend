import { FC } from 'react';

import ClientProductPage from '../_component/ClientProductPage';

import { products } from '@/api/products';

const ProductPage: FC = async () => {
  const { data } = await products.getAll();

  return <ClientProductPage product={data.productsCollection.edges[0].node} />;
};

export default ProductPage;
