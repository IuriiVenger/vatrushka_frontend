import { FC } from 'react';

import ClientHomePage from './_component/ClientHomePage';

import { categories } from '@/api/categories';

const HomePage: FC = async () => {
  const { categoriesCollection } = await categories.getAllWithoutPagination();

  return <ClientHomePage categories={categoriesCollection} />;
};

export default HomePage;
