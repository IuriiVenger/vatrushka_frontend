import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientProductPage from './_component/ClientProductPage';

import { products } from '@/api/products';

type ProductPageProps = {
  params: {
    category: string;
    product: string;
  };
};

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { category, product } = params;

  // const { data, error } = await products.getBySlug('fettuchini-s-kurinim-file-i-brokkoli-300gr');

  const { data, error } = await products.getBySlug(product);

  if (!data || error) {
    return notFound();
  }

  const productCategories = data.productsCollection?.edges[0].node.categoryitemsCollection?.edges;

  const isProductInCategory = !!productCategories?.find(
    (categoryItem) => categoryItem.node.categories.slug === category,
  );

  if (!isProductInCategory) {
    return notFound();
  }

  return <ClientProductPage product={data} />;
};

export default ProductPage;
