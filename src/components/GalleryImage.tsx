'use client';

import Image from 'next/image';
import { FC } from 'react';
import {
  isImageFitCover,
  isImageSlide,
  RenderSlideProps,
  SlideImage,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox';

const isNextJsImage = (slide: SlideImage) =>
  isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';

export const GalleryImage: FC<RenderSlideProps<SlideImage>> = ({ slide, offset, rect }) => {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;
  // const width =
  //   !cover && slide.height && slide.width
  //     ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
  //     : rect.width;

  const height =
    !cover && slide.height && slide.width
      ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
      : rect.height;

  return (
    <div style={{ position: 'relative', width: '80vw', height, maxHeight: '700px' }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        // sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        sizes="80vw"
        // width={width}
        // height={height}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  );
};
