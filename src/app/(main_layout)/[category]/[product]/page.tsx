import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientProductPage from './_component/ClientProductPage';

import { Productsizeimages } from '@/__generated__/graphql';
import { products } from '@/api/products';
import { ModifiersGroups } from '@/components/pageContents/ProductPageContent';

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
      ].reduce((acc: Productsizeimages[], item) => {
        const edges =
          item?.map((edge) => ({
            ...edge.node,
          })) || [];

        return [...acc, ...edges];
      }, [])
    : [];

  const productSizesModifiers: ModifiersGroups[] = productSizes
    ? [
        ...(await Promise.all(
          productSizes.map(({ node }) =>
            products.productSizes.modifiers
              .getBySizeAndProductId(node.size_id, productId)
              .then((res) => res.data.productSizeModifierGroupsCollection?.edges || []),
          ),
        )),
      ].reduce((acc: ModifiersGroups[], item) => {
        const sizeModifiersFroup = item.map((edge) => ({
          ...edge.node,
          modifiers: edge.node.productSizeModifiersCollection?.edges.map(({ node }) => node) || [],
        }));
        return [...acc, ...sizeModifiersFroup];
      }, [])
    : [];

  return <ClientProductPage product={data} sizesImages={productSizesImages} modifiersGrops={productSizesModifiers} />;
};

export default ProductPage;
