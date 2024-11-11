import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientCategoryPage from './_component/ClientCategoryPage';

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

  const { data } = await categories.getCategoryRecommendedProductsAndProductsBySlugWithoutPagination(requestParams);

  const categoryData = data.categoriesCollection?.edges[0];
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
