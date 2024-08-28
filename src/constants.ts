import { TCard } from './types';

export const TagType = {
  new: 'Новинка',
  recommended: 'Рекомендуем',
  hit: 'Хит',
} as const;

export const mockCardOne: TCard = {
  pic: 'https://s3-alpha-sig.figma.com/img/1cbd/6d9d/20ad1ed2e9d57489108643c0407f39e2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~YT2pTIQJaSN~1EZdbb2S01zXR3xDY2xaYA8pUHbRi7yWhKXP8XdFYHA-6VCVdKcfmau~6taP4CfOyzMRstOKBYjBLFyySWSjtSFPuEEV-LcUpqafa2Rg5p7cmksk1JrWm~1lGh2w5i94GlCDCuliVMgJfN-qjCjMtFPrW-5B7dm1INg~eYABtQLiCweIj~o1RmffF~fRt~rcWfKdd~7Q-rA6r5IUDcrpcLrMmaN5HcGr9GMMhoHYdfJyH9gRNwnPBuKzedr6g1loAneDldM02Wpsel9yqbam17Z8Uv~wjRG0UCIu~agMIsy~BMVHRzazLj7pmwa4gcPops451t5g__',
  name: 'Торт Милая девочка',
  weight: 1,
  timing: '2,5',
  description:
    'Два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера',
  price: 600,
  tag: TagType.hit,
};

export const mockCardTwo: TCard = {
  pic: 'https://s3-alpha-sig.figma.com/img/d173/5c58/689dd362b27692fc65ca832a85773478?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFI4-ZgE7ngZJu8KMpGfIki55cL1QPPdaDKv5ED27EfjJwdlVqrF0-WTd9rIHE4UtruplLt~OcL2BnIKqt1Qb-uIwSXuaBGBVn9qZ1DwJeNlaFTmvbHAgyUwGIecQbBciEU7fZtG2i5INWgUusf4VhL~F0sUuBbpBvESeN-ga7sXkYLz2a1acguvjYKQiH60h3My3Nu90~doBNGJuZCGMzRnKXeHmk3kEBfMmuq9riMbcUXm3PojGPYHgzuqBgYP3jIsLoSKXppn8GMnP6mTOlQgxT2oOwuSleyNbcOlMirJTov9EPoP2oWIZT2OfiuXBnDkAL7FJKNfZfMf1yqbcg__',
  name: 'Торт с очень длинным названием, которое не влезает в одну строку',
  weight: 2.5,
  timing: '4',
  description:
    'Два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера. А потом еще раз два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера',
  price: 600000,
  tag: TagType.recommended,
};

export const products: TCard[] = [...Array(9)].map((_, index) => (index % 2 === 0 ? mockCardOne : mockCardTwo));

const banner =
  'https://s3-alpha-sig.figma.com/img/f44e/999c/cfa9084129f9d4a7311a00006a466550?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUbV9wwPU65KKM8R7zjJTMyg8zxnUX817Z7bWyZ1fqmGBwfBnMtTtx~nPCoihIas-T-xEsy1ow5x95banImhawzyuxuZeH0szbxjxUwuwrJ5ASP6HSGjnv-T2HnkMVJeQdSdIsQIqs1yYlsoUWiWhC4bT5VEIcJn4zRN3ns32riCYIZk3wtyG~XINMLWczmwAjQVnERSHXVy5WmRmTxtV8BXSa02f7Jq5baKTGHo-5Ji0JzHJ3pYv66eYhbABN-9lRcb3zLn-xg89x9irbY8Pg8smDUC5vX76BL9l6~EiFU~UKH7i9Xd55jW-p9x7i-DIdz46SoR3LU3j8vH0gslPg__';

export const slides = [banner, mockCardTwo.pic, mockCardOne.pic, mockCardTwo.pic];

const mockCategorieOne = { name: 'Пасха', pic: mockCardOne.pic };
const mockCategorieTwo = { name: 'Приготовим за 60 минут', pic: mockCardTwo.pic };

export const categories = [...Array(12)].map((_, index) => (index % 2 === 0 ? mockCategorieOne : mockCategorieTwo));
