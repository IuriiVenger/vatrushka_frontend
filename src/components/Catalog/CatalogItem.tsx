import Image from 'next/image';
import { FC, useMemo } from 'react';

import { Categories } from '@/__generated__/graphql';
import { getNounWithDeclension } from '@/utils/formatters';

type TCatalogItemProps = {
  item: Categories & {
    count?: number;
  };
  subCatalog?: boolean;
};

export const CatalogItem: FC<TCatalogItemProps> = ({ item, subCatalog }) => {
  const { name, button_image_url, count, isHidden } = item;

  if (isHidden) return null;

  const itemsCount = useMemo(() => {
    if (subCatalog && count) {
      return `${count} ${getNounWithDeclension(count, 'товар', 'товара', 'товаров')}`;
    }
  }, []);

  return (
    <div
      className={`shadow-lg box-border w-full overflow-hidden rounded-xl bg-primaryBg transition-all hover:cursor-pointer hover:shadow-card hover:outline hover:outline-1 hover:outline-primaryBorderHover ${subCatalog ? 'h-47 max-xs:h-28' : 'aspect-square'} `}
    >
      <div className="relative h-full w-full">
        <div className="z-10 flex flex-col gap-1 p-6 max-md:p-4 max-sm:p-2">
          <h2
            className={`relative w-full ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'text-2xl leading-2xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
          >
            {name}
          </h2>
          {subCatalog && count && (
            <p
              className={`relative w-full text-primary ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'text-2xl leading-2xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
            >
              {itemsCount}
            </p>
          )}
        </div>
        {button_image_url && (
          <Image
            width={282}
            height={282}
            src={button_image_url}
            alt={name}
            className={`z-1 ${subCatalog ? 'clip-path-custom' : 'clip-path-custom-square'} absolute bottom-0 right-0 aspect-square h-full w-full object-cover`}
          />
        )}
        <style>{`
            .clip-path-custom-square {
             clip-path: circle(95% at right 120%);
        }
             .clip-path-custom {
             clip-path: circle(100% at right 150%);
          `}</style>
      </div>
    </div>
  );
};
