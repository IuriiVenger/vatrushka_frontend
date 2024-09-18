'use client';

import { FC } from 'react';

import { ProductBySlugQuery } from '@/__generated__/graphql';
import ProductPageContent from '@/components/pageContents/ProductPageContent';

type ClientProductPageProps = {
  product: ProductBySlugQuery;
};

const ClientProductPage: FC<ClientProductPageProps> = (props) => {
  const { product } = props;
  console.log(product);
  const id = product.productsCollection?.edges[0].node.id;
  const title = product.productsCollection?.edges[0].node.name;
  const description = product.productsCollection?.edges[0].node.description;
  const price = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.price;
  const weight = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.portion_weight_grams;
  const image = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.button_image_url;
  const nutritionFacts = JSON.parse(
    product.productsCollection?.edges[0].node.productsizesCollection?.edges[0].node.nutrition_per_hundred_grams,
  );
  const allergens = product.productsCollection?.edges[0].node.productallergensCollection?.edges;
  const labels = product.productsCollection?.edges[0].node.labels;

  const additionalImages = Array(4).fill(image);

  const promotions = [
    { id: '1', text: 'Скидка именинникам 10%' },
    { id: '2', text: 'Бесплатная доставка от 1000 р.' },
  ];
  const productInfo = {
    id,
    title,
    description,
    price,
    image,
    additionalImages,
    nutritionFacts,
    allergens,
    weight,
    labels,
    promotions,
  };

  return <ProductPageContent productInfo={productInfo} />;
};

export default ClientProductPage;
