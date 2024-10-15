'use client';

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { FC, useEffect, useState } from 'react';

import { defaultPlacemarkOptions, selectedPlacemarkOptions } from '@/constants';

type TMapProps = {
  placemarks: { id: string; coords: number[] | undefined; isSelected: boolean }[];
  width?: string | number;
  mapZoom?: number;
  inputAddress?: string;
};

const Map: FC<TMapProps> = ({ placemarks, width = 720, mapZoom = 13, inputAddress }) => {
  const [mapKey, setMapKey] = useState(0);

  console.log('address to show on the map', inputAddress);

  useEffect(() => {
    const handleResize = () => {
      setMapKey((prevKey) => prevKey + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="aspect-video overflow-hidden rounded-2xl max-sm:aspect-square">
      <YMaps>
        <YMap
          key={mapKey}
          width={width}
          defaultState={{
            center: [55.154, 61.38],
            zoom: mapZoom,
          }}
          className="aspect-video rounded-2xl max-sm:aspect-square"
        >
          {placemarks.map(({ id, coords, isSelected }) => (
            <Placemark
              key={id}
              defaultGeometry={coords}
              options={isSelected ? selectedPlacemarkOptions : defaultPlacemarkOptions}
            />
          ))}
        </YMap>
      </YMaps>
    </div>
  );
};

export default Map;
