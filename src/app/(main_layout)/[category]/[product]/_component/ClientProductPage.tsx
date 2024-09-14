import { FC } from 'react';

import { ProductBySlugQuery } from '@/__generated__/graphql';
import ProductPageContent from '@/components/pageContents/ProductPageContent';

type ClientProductPageProps = {
  product: ProductBySlugQuery;
};

const ClientProductPage: FC<ClientProductPageProps> = (props) => {
  const { product } = props;

  const title = product.productsCollection?.edges[0].node.name;
  const description = product.productsCollection?.edges[0].node.description;
  const price = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.price;
  const image = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.button_image_url;

  const productInfo = {
    title,
    description,
    price,
    image,
  };

  return <ProductPageContent productInfo={productInfo} />;
};

export default ClientProductPage;
