import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientCategoryPage from './_component/ClientCategoryPage';

import { categories } from '@/api/categories';
import { convertCommonRecProductsToRecomendation } from '@/utils/converters';

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

  const { data } = await categories.getCategoryRecommendedProductsAndProductsBySlugWithoutPagination(requestParams);

  const categoryData = data.categoriesCollection?.edges[0];
  const recCategoryEdges = categoryData?.node.rec_categoryCollection?.edges;
  const categoryRecommendedProducts = recCategoryEdges && convertCommonRecProductsToRecomendation(recCategoryEdges);

  if (!categoryData) {
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
