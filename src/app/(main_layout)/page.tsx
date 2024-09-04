import { FC } from 'react';

import ClientMainPage from './_component/ClientHomePage';

import { categories } from '@/api/categories';

const HomePage: FC = async () => {
  const { data } = await categories.getAll();

  return <ClientMainPage categories={data.categoriesCollection} />;
};

export default HomePage;
