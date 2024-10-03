import { notFound } from 'next/navigation';
import { FC } from 'react';

import { promotions } from '@/api/promotions';
import PromotionPageContent from '@/components/pageContents/PromotionPageContent';

type PromotionPageProps = {
  params: {
    id: string;
  };
};

const PromotionPage: FC<PromotionPageProps> = async ({ params: { id } }) => {
  try {
    const { data, error } = await promotions.getById(id);

    if (error || !data?.promotionsCollection?.edges?.length) {
      return notFound();
    }

    const promotion = data.promotionsCollection.edges[0]?.node ?? null;

    if (!promotion) {
      return notFound();
    }

    return <PromotionPageContent promotion={promotion} />;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching promotion:', error);
    return notFound();
  }
};

export default PromotionPage;
