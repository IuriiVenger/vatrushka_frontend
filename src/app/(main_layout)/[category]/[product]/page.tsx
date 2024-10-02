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

  const { data, error } = await products.getBySlug(product);
  const productId = data.productsCollection?.edges[0].node.id;

  if (!data || error || !productId) {
    return notFound();
  }

  const productCategories = data.productsCollection?.edges[0].node.categoryitemsCollection?.edges;

  const isProductInCategory = !!productCategories?.find(
    (categoryItem) => categoryItem.node.categories.slug === category,
  );

  if (!isProductInCategory) {
    return notFound();
  }

  const productSizes = data.productsCollection?.edges[0].node.productsizesCollection?.edges;

  const productSizesImages = productSizes
    ? [
        ...(await Promise.all(
          productSizes.map(({ node }) =>
            products.productSizes.images
              .getBySizeAndProductId(node.size_id, productId)
              .then((res) => res.data.productsizeimagesCollection?.edges),
          ),
        )),
      ]
        .map(
          (item) =>
            item?.map((edge) => ({
              ...edge.node,
            })) || [],
        )
        .flat()
    : [];

  const productSizesModifiers = productSizes
    ? [
        ...(await Promise.all(
          productSizes.map(({ node }) =>
            products.productSizes.modifiers
              .getBySizeAndProductId(node.size_id, productId)
              .then((res) => res.data.productSizeModifierGroupsCollection?.edges || []),
          ),
        )),
      ]
        .map((item) =>
          item.map((edge) => ({
            ...edge.node,
            modifiers: edge.node.productSizeModifiersCollection?.edges.map(({ node }) => node) || [],
          })),
        )
        .flat()
    : [];

  return <ClientProductPage product={data} sizesImages={productSizesImages} modifiersGrops={productSizesModifiers} />;
};

export default ProductPage;
