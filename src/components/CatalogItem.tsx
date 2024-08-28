import { FC } from 'react';

import { TItem } from './Catalog';

type TProps = {
  item: TItem;
};

export const CatalogItem: FC<TProps> = ({ item }) => {
  const { name, pic } = item;

  return (
    <div className="w-full h-282 w-282 overflow-hidden rounded-xl bg-primaryBg shadow-lg">
      <div className="h-48 w-full relative">
        <p className="z-2 relative h-282 w-282 p-4 text-2xl leading-2xl">{name}</p>
        <img
          src={pic}
          alt={name}
          className="clip-path-custom h-full w-full absolute bottom-0 right-0 h-282 w-282 object-cover"
        />
        <style>{`
            .clip-path-custom {
             clip-path: circle(75% at right 100%);
          `}</style>
      </div>
    </div>
  );
};

// clip-path: polygon(
//     22% 100%, 21.5% 98%, 21% 96%, 20.5% 94%, 20% 92%,  20.5% 90%, 21% 88%, 21.5% 86%, 22% 84%, 23% 81%,  24% 79%, 25% 76%, 27.5% 72.5%, 30% 69%, 33% 65.5%, 36% 62%, 40.5% 58.5%, 45% 56%, 51% 52%, 57% 47%,   61.5% 45%, 66% 43%, 69.5% 41.5%, 73% 40%, 77.5% 38%,  82% 36%, 84% 35.5%, 86% 35%, 88% 35%, 90% 35%,  93% 35.5%, 96% 36%, 98% 37.5%, 100% 39%, 100% 100%
//   );}
