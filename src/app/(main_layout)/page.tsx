import { FC } from 'react';

import ClientHomePage from './_component/ClientHomePage';

import { fetchAllCategories } from '@/utils/helpers';

const HomePage: FC = async () => {
  const { categoriesCollection } = await fetchAllCategories();

  return <ClientHomePage categories={categoriesCollection} />;
};

export default HomePage;
