import { NextPage } from 'next';

import { categories } from '@/api/categories';
import { products } from '@/api/products';
import { promotions } from '@/api/promotions';
import { TCarouselSlide } from '@/components/Carousels/PromoCarousel';
import HomePageContent from '@/components/pageContents/HomePageContent';
import { NextPageParams } from '@/types';
import { convertCommonRecProductsToRecomendation } from '@/utils/converters';

const HomePage: NextPage<NextPageParams> = async () => {
  const { categoriesCollection } = await categories.getAllWithoutPagination();
  const {
    data: { rec_categoryCollection },
  } = await products.getCommonRecProducts();

  const {
    data: { promotionsCollection },
  } = await promotions.getMainpagePromoBanners();

  const promoBanners: TCarouselSlide[] =
    promotionsCollection?.edges.reduce((acc: TCarouselSlide[], edge) => {
      const banner = edge.node.homepageBanner;
      if (banner) {
        acc.push({
          img: banner,
          href: edge.node.productPagesEnabled ? `/promotions/${edge.node.id}` : undefined,
        });
      }
      return acc;
    }, []) || [];

  const recommendedProducts = rec_categoryCollection
    ? convertCommonRecProductsToRecomendation(rec_categoryCollection.edges)
    : undefined;

  return (
    <HomePageContent
      categories={categoriesCollection}
      recomendations={recommendedProducts}
      promoBanners={promoBanners}
    />
  );
};

export default HomePage;
