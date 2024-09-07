import { FC } from 'react';

import ClientHomePage from './_component/ClientHomePage';

import { categories } from '@/api/categories';

const HomePage: FC = async () => {
  const { data } = await categories.getAll();

  return <ClientHomePage categories={data.categoriesCollection} />;
};

export default HomePage;
