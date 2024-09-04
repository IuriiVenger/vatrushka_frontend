import { Carousel } from '@/components/Carousel';
import { Catalog } from '@/components/Catalog';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { ProductsList } from '@/components/ProductsList';
import { SeoContent } from '@/components/SeoContent';
import { SliderComponent as Slider } from '@/components/Slider';
import { slides, products, categories } from '@/mocks';

const Home = () => (
  <div className="flex flex-col items-center justify-between">
    <Header />
    <main className="max-lg:gap-15 max-lg:pb-15 max-lg:pb-15 flex w-full flex-col gap-20 pb-20 pt-10 max-lg:pt-8 max-sm:gap-10 max-sm:pb-10 max-xs:gap-6 max-xs:pt-0">
      <Carousel slides={slides} />
      <ProductsList products={products} />
      <Catalog categories={categories} />
      <Slider title="Рекомендуем" slides={products} />
      <SeoContent />
    </main>
    <Footer />
  </div>
);

export default Home;
