import { FC } from 'react';

import { categories } from '@/api/categories';
import HomePageContent from '@/components/pageContents/HomePageContent';

const HomePage: FC = async () => {
  const { categoriesCollection } = await categories.getAllWithoutPagination();

  return <HomePageContent categories={categoriesCollection} />;
};

export default HomePage;
