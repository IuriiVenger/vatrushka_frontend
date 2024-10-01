import { Maybe } from 'graphql/jsutils/Maybe';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';
import { FC, useCallback, useState } from 'react';

import placeholder_image from '../../assets/images/placeholder_image.svg';

type TProps = { alt: string; src: Maybe<string> | StaticImport } & Omit<ImageProps, 'src'>;

const CustomImage: FC<TProps> = ({ alt, ...props }) => {
  const [src, setSrc] = useState<Maybe<string> | StaticImport>(props.src);

  const setDefaultImage = useCallback(() => setSrc(placeholder_image.src), []);

  return (
    <Image
      {...props}
      src={src || placeholder_image.src}
      alt={alt}
      onError={setDefaultImage}
      placeholder="blur"
      blurDataURL={placeholder_image.src}
    />
  );
};

export default CustomImage;
