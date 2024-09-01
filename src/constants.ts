export const TagType = {
  new: 'Новинка',
  recommended: 'Рекомендуем',
  hit: 'Хит',
} as const;

export const TagColorSchema: {
  [key: string]: { textColor: string; backgroundColor: string };
} = {
  Новинка: {
    textColor: '#EB2F96',
    backgroundColor: '#FFF0F6',
  },
  Рекомендуем: {
    textColor: '#2F54EB',
    backgroundColor: '#F0F5FF',
  },
  Хит: {
    textColor: '#722ED1',
    backgroundColor: '#F9F0FF',
  },
};

export enum SortType {
  mostPopular = 'mostPopular',
  priceDescending = 'priceDescending',
  priceAscending = 'priceAscending',
}

export const SortTypeTranslation = {
  [SortType.mostPopular]: 'По популярности',
  [SortType.priceDescending]: 'По убыванию цены',
  [SortType.priceAscending]: 'По возрастанию цены',
};
