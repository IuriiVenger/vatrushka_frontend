import { Grid } from 'antd';
import cn from 'classnames';
import { FC, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';

import ProductCarouselMainItem from './MainItem';

import { API } from '@/api/types';
import CustomImage from '@/components/ui/CustomImage';
import RoundCloseButton from '@/components/ui/RoundCloseButton';

type TProductImagesProps = {
  images: string[];
  title: string;
  labels?: API.Products.Label[];
  isMobile?: boolean;
  className?: string;
};

type ImageGalleryWithState = ImageGallery & {
  state: {
    isFullscreen: boolean;
  };
};

const ProductCarousel: FC<TProductImagesProps> = ({ images, title, labels, isMobile, className }) => {
  const galleryRef = useRef<ImageGalleryWithState>(null);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showBullets, setShowBullets] = useState<boolean>(!!isMobile);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(!isMobile);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const toggleFullScreen = () => {
    galleryRef.current?.state.isFullscreen ? galleryRef.current?.exitFullScreen() : galleryRef.current?.fullScreen();
  };

  const thumbnailPosition = isFullscreen || !screens.xl ? 'bottom' : 'left';

  const onScreenChange = (isFullscreenView: boolean) => {
    setShowNav(isFullscreenView);
    setIsFullscreen(isFullscreenView);
    setShowBullets(!isFullscreenView && !!isMobile);
    setShowThumbnails(isFullscreenView || !isMobile);
  };

  return (
    <ImageGallery
      additionalClass={cn('product-images', showThumbnails && 'with-thumbnails', className, isFullscreen && ' p-2')}
      ref={galleryRef}
      items={images.map((image) => ({
        original: image,
        thumbnail: image,
        renderItem: () => (
          <ProductCarouselMainItem
            image={image}
            title={title}
            isFullscreen={isFullscreen}
            isMobile={isMobile}
            labels={labels}
          />
        ),
        renderThumbInner: () => (
          <CustomImage
            className="h-full rounded-[0.25rem] object-cover"
            src={image}
            alt={`${title}-thumbnail`}
            width={78}
            height={78}
          />
        ),
        originalClass: 'rounded-lg overflow-hidden !w-full',
        thumbnailClass: 'h-10 !w-10 md:!w-20 md:h-20 rounded-lg object-cover',
      }))}
      useBrowserFullscreen={false}
      onClick={toggleFullScreen}
      showThumbnails={showThumbnails}
      onScreenChange={onScreenChange}
      thumbnailPosition={thumbnailPosition}
      showPlayButton={false}
      showNav={!!showNav}
      showBullets={showBullets}
      showFullscreenButton={isFullscreen}
      renderFullscreenButton={(onClick) => <RoundCloseButton onClick={onClick} />}
    />
  );
};

export default ProductCarousel;
