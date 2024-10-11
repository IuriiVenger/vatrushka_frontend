import cn from 'classnames';
import { FC, useMemo } from 'react';

import { API } from '@/api/types';
import CustomImage from '@/components/ui/CustomImage';
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

  const imageSizeClassname = useMemo(() => {
    if (isFullscreen) {
      return 'max-h-[90vh] w-full object-contain';
    }

    if (isMobile) {
      return 'w-full aspect-3/2';
    }

    return 'h-80 w-full object-cover';
  }, [isFullscreen, isMobile]);

  return (
    <div className="relative m-auto ">
      {!!labels?.length &&
        labels.map((label, index) => (
          <Label key={label.id || index} label={label} className="z-2 absolute left-6 top-6 " />
        ))}
      <CustomImage
        className={cn('rounded-lg object-cover', imageSizeClassname)}
        src={image}
        alt={title}
        width={1200}
        height={780}
      />
    </div>
  );
};

export default ProductCarouselMainItem;
