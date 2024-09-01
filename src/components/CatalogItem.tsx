import { FC } from 'react';

import { TItem } from './Catalog';

import { getNounWithDeclension } from '@/utils/getNounWithDeclension';

type TProps = {
  item: TItem;
  subCatalog?: boolean;
};

export const CatalogItem: FC<TProps> = ({ item, subCatalog }) => {
  const { name, pic, count } = item;

  return (
    <div
      className={`w-full overflow-hidden rounded-xl bg-primaryBg shadow-lg ${subCatalog ? 'h-47 max-xs:h-28' : 'aspect-square'}`}
    >
      <div className="relative h-full w-full">
        <div className="z-10 flex flex-col gap-1 p-6 max-md:p-4 max-sm:p-2">
          <p
            className={`relative w-full ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'text-2xl leading-2xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
          >
            {name}
          </p>
          {subCatalog && count && (
            <p
              className={`relative w-full text-primary ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'text-2xl leading-2xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
            >
              {count} {getNounWithDeclension(count, 'товар', 'товара', 'товаров')}
            </p>
          )}
        </div>
        <img
          src={pic}
          alt={name}
          className={`z-1  ${subCatalog ? 'clip-path-custom' : 'clip-path-custom-square'} absolute bottom-0 right-0 aspect-square h-full w-full object-cover`}
        />
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
