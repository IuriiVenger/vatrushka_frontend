import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientCategoryPage from './_component/ClientCategoryPage';

import {
  GetProductsAndRecommendedProductsByCategorySlugQuery,
  GetProductsAndRecommendedProductsByCategorySlugQueryVariables,
} from '@/__generated__/graphql';
import { categories } from '@/api/categories';
import { API } from '@/api/types';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage: FC<CategoryPageProps> = async ({ params }) => {
  const slug = params.category;
  const requestParams = {
    offset: 0,
    first: 30,
    hasNextPage: true,
    filter: {
      slug: { eq: slug },
    },
  };

  const targetData: Partial<GetProductsAndRecommendedProductsByCategorySlugQuery> = {};
  let isErrorOccured = false;

  do {
    // eslint-disable-next-line no-await-in-loop
    const { data, error } = await categories.getCategoryRecommendedProductsAndProductsBySlug(requestParams);
    isErrorOccured = !!error;

    if (!targetData.categoriesCollection) {
      targetData.categoriesCollection = data.categoriesCollection;
    } else {
      targetData.categoriesCollection.edges[0]?.node.categoryitemsCollection?.edges.push(
        ...(data.categoriesCollection?.edges[0].node.categoryitemsCollection?.edges || []),
      );
    }

    requestParams.hasNextPage =
      data.categoriesCollection?.edges[0]?.node.categoryitemsCollection?.pageInfo.hasNextPage || false;
    requestParams.offset = data.categoriesCollection?.edges[0]?.node.categoryitemsCollection?.edges.length
      ? requestParams.offset + data.categoriesCollection.edges[0].node.categoryitemsCollection.edges.length
      : requestParams.offset;
  } while (requestParams.hasNextPage);

  const categoryData = targetData.categoriesCollection?.edges[0];
  const categoryRecommendedProducts = categoryData?.node.rec_categoryCollection?.edges.reduce(
    (acc: API.Products.Recomedation[], rec) => {
      const productSizes = rec.node.products?.productsizesCollection?.edges || [];

      productSizes.forEach((item) => {
        if (item.node) {
          acc.push({
            button_image_url: item.node.button_image_url || '',
            nodeId: item.node.nodeId,
            price: item.node.price ? Number(item.node.price) : 0,
            name: item.node.products?.name || '',
            short_description: item.node.products?.short_description || '',
            slug: item.node.products?.slug || '',
            category: {
              name: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.name || '',
              slug: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.slug || '',
            },
          });
        }
      });
      return acc;
    },
    [],
  );

  if (!categoryData || isErrorOccured) {
    return notFound();
  }

  return (
    <ClientCategoryPage
      categorySlug={slug}
      categoryName={categoryData.node.name}
      categoryItems={categoryData.node.categoryitemsCollection}
      categoryRecommendedProducts={categoryRecommendedProducts}
    />
  );
};

export default CategoryPage;
