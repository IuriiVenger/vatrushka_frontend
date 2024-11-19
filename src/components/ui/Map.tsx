'use client';

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { FC, useEffect, useState, useRef } from 'react';

import { defaultPlacemarkOptions, selectedPlacemarkOptions } from '@/constants';

type TMapProps = {
  placemarks: { id: string; coords: number[] | undefined; isSelected: boolean }[];
  width?: string | number;
  mapZoom?: number;
};

const Map: FC<TMapProps> = ({ placemarks, width = 720, mapZoom = 13 }) => {
  const [mapKey, setMapKey] = useState(0);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setMapKey((prevKey) => prevKey + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && placemarks.length > 0) {
      const selectedPlacemark = placemarks.find((placemark) => placemark.isSelected);
      if (selectedPlacemark && selectedPlacemark.coords) {
        mapRef.current.setCenter(selectedPlacemark.coords);
      }
    }
  }, [placemarks]);

  return (
    <div className="aspect-video overflow-hidden rounded-2xl max-sm:aspect-square max-xs:max-w-82">
      <YMaps>
        <YMap
          instanceRef={mapRef}
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
