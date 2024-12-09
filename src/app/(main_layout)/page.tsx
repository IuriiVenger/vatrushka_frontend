import { NextPage } from 'next';

import { categories } from '@/api/categories';
import { products } from '@/api/products';
import HomePageContent from '@/components/pageContents/HomePageContent';
import { NextPageParams } from '@/types';
import { convertCommonRecProductsToRecomendation } from '@/utils/converters';

const HomePage: NextPage<NextPageParams> = async () => {
  const { categoriesCollection } = await categories.getAllWithoutPagination();
  const {
    data: { rec_categoryCollection },
  } = await products.getCommonRecProducts();

  const recommendedProducts = rec_categoryCollection
    ? convertCommonRecProductsToRecomendation(rec_categoryCollection.edges)
    : undefined;

  return <HomePageContent categories={categoriesCollection} recomendations={recommendedProducts} />;
};

export default HomePage;
