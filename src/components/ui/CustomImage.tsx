import { Maybe } from 'graphql/jsutils/Maybe';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

import placeholder_image from '../../assets/images/placeholder_image.svg';

type TProps = { alt: string; src: Maybe<string> | StaticImport | undefined } & Omit<ImageProps, 'src'>;

const CustomImage: FC<TProps> = ({ alt, ...props }) => {
  const [src, setSrc] = useState<Maybe<string> | StaticImport | undefined>(props.src);

  return (
    <Image
      {...props}
      src={src || placeholder_image.src}
      alt={alt}
      onError={() => setSrc(placeholder_image.src)}
      placeholder="blur"
      blurDataURL={placeholder_image.src}
    />
  );
};

export default CustomImage;
