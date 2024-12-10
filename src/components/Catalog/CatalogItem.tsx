import { FC, useMemo } from 'react';

import CustomImage from '../ui/CustomImage';

import { Categories } from '@/__generated__/graphql';
import { getNounWithDeclension } from '@/utils/formatters';

type TCatalogItemProps = {
  item: Categories & {
    count?: number;
  };
  subCatalog?: boolean;
};

const CatalogItem: FC<TCatalogItemProps> = ({ item, subCatalog }) => {
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
        <div className="z-10 flex flex-col gap-1 p-5 max-md:p-4 max-sm:p-2">
          <h2
            className={`w-full ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'z-20 text-2xl leading-2xl  max-lg:text-xl max-lg:leading-xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
            style={{
              textShadow: '1px 1px 1px rgb(246 240 237 / var(--tw-bg-opacity))',
            }}
          >
            {name}
          </h2>
          {subCatalog && count && (
            <p
              className={`w-full text-primary ${subCatalog ? 'text-lg leading-lg max-md:text-base max-md:leading-base' : 'text-2xl leading-2xl max-md:text-lg max-md:leading-lg max-sm:text-base max-sm:leading-base'}`}
            >
              {itemsCount}
            </p>
          )}
        </div>
        <CustomImage
          width={197}
          height={197}
          src={button_image_url}
          alt={name}
          className={`z-1 ${subCatalog ? 'clip-path-custom' : 'clip-path-custom-square'} bottom-0 right-0 top-0 aspect-square h-full w-full object-cover object-[25%_35px] xs:object-[25%_30px]`}
          skeletonClassName="top-10 left-0 w-[calc(100%_+_4rem)]"
          absolute
        />

        <style>{`
            .clip-path-custom-square {
             clip-path: circle(100% at right 120%);
        }
             .clip-path-custom {
             clip-path: circle(100% at right 150%);
          `}</style>
      </div>
    </div>
  );
};

export default CatalogItem;
