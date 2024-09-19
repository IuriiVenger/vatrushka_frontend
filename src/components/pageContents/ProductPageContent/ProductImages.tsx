import Image from 'next/image';

import { FC, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { Carousel } from '../../Carousel';
import { GalleryImage } from '../../GalleryImage';

type TProductImagesProps = {
  images: string[];
  title: string;
  tag?: string;
};

export const ProductImages: FC<TProductImagesProps> = ({ images, title, tag }) => {
  const [open, setOpen] = useState(false);

  const onImageClick = () => setOpen(true);

  const slides = images.map((image) => ({ src: image || '', width: 804, height: 536 }));

  return (
    <>
      <div className="flex w-full gap-4 max-xl:flex-col-reverse max-xl:justify-end max-md:hidden">
        <div className="flex min-w-18 max-w-18 flex-col flex-wrap gap-2 max-xl:w-auto max-xl:min-w-full max-xl:max-w-full max-xl:flex-row">
          {images.map((pic, index) => (
            <Image
              key={index}
              src={pic}
              width={144}
              height={144}
              alt={title}
              onClick={onImageClick}
              className="aspect-square min-w-18 max-w-18 cursor-pointer rounded-2xl border border-primary object-cover p-0.5 "
            />
          ))}
        </div>
        <div className="relative w-full">
          {tag && (
            <span
              className="z-2 absolute left-6 top-6 rounded-lg px-2 py-1 text-base leading-base"
              // style={{
              //   backgroundColor: TagColorSchema[tag].backgroundColor,
              //   color: TagColorSchema[tag].textColor,
              // }}
            >
              {tag}
            </span>
          )}
          <Image
            src={images[0] || ''}
            width={580}
            height={387}
            alt={title}
            onClick={onImageClick}
            className="aspect-3/2 w-full cursor-pointer rounded-2xl object-cover"
          />
        </div>
      </div>
      <Lightbox
        slides={slides}
        open={open}
        close={onImageClick}
        className="max-md:hidden"
        render={{ slide: GalleryImage }}
      />
      <div className="hidden max-md:block">
        <Carousel slides={images} product />
      </div>
    </>
  );
};
