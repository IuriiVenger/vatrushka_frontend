import { Skeleton } from 'antd';
import { Maybe } from 'graphql/jsutils/Maybe';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';
import { FC, SyntheticEvent, useState } from 'react';

import foodTray from '../../assets/images/food_tray.svg';
import placeholder_image from '../../assets/images/placeholder_image.svg';

type TProps = {
  alt: string;
  src: Maybe<string> | StaticImport;
} & Omit<ImageProps, 'src'>;

const CustomImage: FC<TProps> = ({ alt, ...props }) => {
  const [src, setSrc] = useState<Maybe<string> | StaticImport>(props.src);

  const [isLoading, setIsLoading] = useState(true);

  const onFinishLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    props.onLoad && props.onLoad(e);
    setIsLoading(false);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    props.onError && props.onError(e);
    setSrc(placeholder_image.src);
  };

  return (
    <div className={`relative ${props.className}`}>
      <Image {...props} src={src || placeholder_image.src} alt={alt} onError={handleError} onLoad={onFinishLoad} />
      <Skeleton.Node
        active
        className={`absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-white transition-opacity duration-500 ${isLoading ? 'z-50 opacity-100' : 'opacity-0 '}`}
      >
        <img src={foodTray.src} alt="Загрузка" className="h-2/3 w-2/3" />
      </Skeleton.Node>
    </div>
  );
};

export default CustomImage;
