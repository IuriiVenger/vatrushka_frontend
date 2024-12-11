import { FC } from 'react';

import { promotions } from '@/api/promotions';
import PromotionsPageContent from '@/components/pageContents/PromotionsPageContent';
import { defaultPaginationParams } from '@/constants';

const PromotionsPage: FC = async () => {
  const { data, error } = await promotions.getAll(defaultPaginationParams);

  if (error || !data?.promotionsCollection?.edges) {
    throw new Error('Error fetching promotions');
  }

  const promotionsData = data.promotionsCollection.edges
    .map((promotion) => promotion.node)
    .filter((promotion) => promotion.productPagesEnabled);

  return <PromotionsPageContent promotions={promotionsData} />;
};

export default PromotionsPage;
