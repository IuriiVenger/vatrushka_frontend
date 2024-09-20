import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { API } from '@/api/types';
import Label from '@/components/ui/Label';

type ProductCarouselMainItemProps = {
  image: string;
  title: string;
  isFullscreen?: boolean;
  isMobile?: boolean;
  labels?: API.Products.Label[];
};

const ProductCarouselMainItem: FC<ProductCarouselMainItemProps> = (props) => {
  const { image, title, isFullscreen, isMobile, labels } = props;

  return (
    <div className="relative">
      {!!labels?.length &&
        labels.map((label, index) => (
          <Label key={label.id || index} label={label} className="z-2 absolute left-6 top-6 " />
        ))}
      <Image
        className={cn(
          'rounded-lg',
          isFullscreen || isMobile ? 'max-h-[90vh] w-full object-contain' : ' h-80 w-120 object-cover',
        )}
        src={image}
        alt={title}
        width={480}
        height={320}
      />
    </div>
  );
};

export default ProductCarouselMainItem;
