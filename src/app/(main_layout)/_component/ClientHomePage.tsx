'use client';

import { FC, useEffect } from 'react';

import { CategoriesConnection } from '@/__generated__/graphql';
import Home from '@/components/Home';
import { useAppDispatch } from '@/store';
import { setCategories } from '@/store/slices/entities';

type ClientHomePageProps = {
  categories: CategoriesConnection;
};

const ClientHomePage: FC<ClientHomePageProps> = ({ categories }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  return <Home categories={categories} />;
};
export default ClientHomePage;
