import { CategoriesConnection } from '@/__generated__/graphql';
import { categories } from '@/api/categories';

export const fetchAllCategories = async () => {
  const edges: CategoriesConnection['edges'] = [];
  const pageInfo = { hasNextPage: false, hasPreviousPage: false, offset: 0 };

  do {
    // eslint-disable-next-line no-await-in-loop
    const { data } = await categories.getAll({
      offset: pageInfo.offset,
    });

    edges.push(...data.categoriesCollection.edges);
    pageInfo.hasNextPage = data.categoriesCollection.pageInfo.hasNextPage;
    pageInfo.hasPreviousPage = data.categoriesCollection.pageInfo.hasPreviousPage;
    pageInfo.offset += data.categoriesCollection.edges.length;
  } while (pageInfo.hasNextPage);

  return { categoriesCollection: { edges, pageInfo } };
};
