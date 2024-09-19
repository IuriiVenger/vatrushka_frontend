'use client';

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

import { color } from '@/config/variables';

type TMapProps = {
  placemarks: { id: string; coords: number[] }[];
  width?: string | number;
  mapZoom?: number;
};

export const Map: FC<TMapProps> = ({ placemarks, width = 720, mapZoom = 13 }) => {
  const MyIconLayout = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path
      d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
      fill="#A96648" />
    <path
      d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
      fill="#A96648" />
    <path
      d="M31.2387 28.9529C32.9219 28.9529 34.2864 27.5884 34.2864 25.9052C34.2864 24.222 32.9219 22.8574 31.2387 22.8574C29.5554 22.8574 28.1909 24.222 28.1909 25.9052C28.1909 27.5884 29.5554 28.9529 31.2387 28.9529Z"
      stroke="#A96648" />
    <path
      d="M31.2387 10.6665C22.8364 10.6665 16 17.2048 16 25.2385C16 29.0643 17.7439 34.1521 21.1831 40.3609C23.9451 45.3459 27.1404 49.8537 28.8024 52.0966C29.0832 52.4799 29.4504 52.7915 29.8742 53.0064C30.298 53.2212 30.7664 53.3332 31.2415 53.3332C31.7166 53.3332 32.1851 53.2212 32.6089 53.0064C33.0326 52.7915 33.3998 52.4799 33.6807 52.0966C35.3398 49.8537 38.538 45.3459 41.3 40.3609C44.7335 34.154 46.4773 29.0662 46.4773 25.2385C46.4773 17.2048 39.6409 10.6665 31.2387 10.6665ZM31.2387 32.0006C30.0331 32.0006 28.8546 31.6431 27.8522 30.9734C26.8498 30.3036 26.0685 29.3516 25.6072 28.2378C25.1458 27.124 25.0251 25.8984 25.2603 24.716C25.4955 23.5336 26.0761 22.4475 26.9285 21.595C27.781 20.7426 28.8671 20.162 30.0495 19.9268C31.2319 19.6916 32.4575 19.8123 33.5713 20.2737C34.6851 20.735 35.6371 21.5163 36.3069 22.5187C36.9766 23.5211 37.3341 24.6996 37.3341 25.9052C37.3324 27.5212 36.6896 29.0706 35.5469 30.2134C34.4041 31.3561 32.8547 31.9989 31.2387 32.0006Z"
      stroke="#A96648" />
  </svg>
  `;

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(MyIconLayout)}`,
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -32],
    iconColor: color.primary.default,
  };

  return (
    <div className="aspect-video rounded-2xl">
      <YMaps>
        <YMap
          width={width}
          defaultState={{
            center: [55.154, 61.38],
            zoom: mapZoom,
          }}
          className="aspect-video"
        >
          {placemarks.map(({ id, coords }) => (
            <Placemark key={id} defaultGeometry={coords} options={placemarkOptions} />
          ))}
        </YMap>
      </YMaps>
    </div>
  );
};
