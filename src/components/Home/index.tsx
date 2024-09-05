import { FC } from 'react';

import { CategoriesConnection } from '@/__generated__/graphql';
import { Carousel } from '@/components/Carousel';
import { Catalog } from '@/components/Catalog';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { ProductsList } from '@/components/ProductsList';
import { SeoContent } from '@/components/SeoContent';

import { SliderComponent as Slider } from '@/components/Slider';
import { slides, products } from '@/mocks';

type HomeProps = {
  categories: CategoriesConnection;
};

const Home: FC<HomeProps> = ({ categories }) => {
  const catalogCategories = categories.edges.map((edge) => edge.node);

  return (
    <div className="flex flex-col items-center justify-between">
      <Header />
      <main className="max-lg:pb-15 max-lg:pb-15 flex w-full flex-col gap-20 pb-20 pt-10 max-lg:gap-12 max-lg:pt-8 max-sm:gap-10 max-sm:pb-10 max-xs:gap-6 max-xs:pt-0">
        <Carousel slides={slides} />
        <ProductsList products={products} />
        <Catalog categories={catalogCategories} />
        <Slider title="Рекомендуем" slides={products} />
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
