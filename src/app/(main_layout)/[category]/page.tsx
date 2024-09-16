import { notFound } from 'next/navigation';
import { FC } from 'react';

import ClientCategoryPage from './_component/ClientCategoryPage';

import { categories } from '@/api/categories';
import { defaultPaginationParams } from '@/constants';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage: FC<CategoryPageProps> = async ({ params }) => {
  const slug = params.category;

  const { data, error } = await categories.getCategoryProductsBySlug({ slug, ...defaultPaginationParams });

  const categoryData = data.categoriesCollection?.edges[0];

  if (!categoryData || error) {
    return notFound();
  }

  return (
    <ClientCategoryPage
      categorySlug={slug}
      categoryName={categoryData.node.name}
      categoryItems={categoryData.node.categoryitemsCollection}
    />
  );
};

export default CategoryPage;
