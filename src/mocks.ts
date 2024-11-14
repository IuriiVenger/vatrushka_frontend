import { addressesTypes, AddressType, TagType } from './constants';
import { TMenuLevelOneOption, TCard, TCartListItem, TPromotion, TUserInfo } from './types';

import mainBanner from '@/assets/images/main_banner.png';

export const mockCardOne: TCard = {
  sizeId: '1',
  productId: '1',
  id: '1',
  buttonType: 'button',
  pic: 'https://s3-alpha-sig.figma.com/img/1cbd/6d9d/20ad1ed2e9d57489108643c0407f39e2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~YT2pTIQJaSN~1EZdbb2S01zXR3xDY2xaYA8pUHbRi7yWhKXP8XdFYHA-6VCVdKcfmau~6taP4CfOyzMRstOKBYjBLFyySWSjtSFPuEEV-LcUpqafa2Rg5p7cmksk1JrWm~1lGh2w5i94GlCDCuliVMgJfN-qjCjMtFPrW-5B7dm1INg~eYABtQLiCweIj~o1RmffF~fRt~rcWfKdd~7Q-rA6r5IUDcrpcLrMmaN5HcGr9GMMhoHYdfJyH9gRNwnPBuKzedr6g1loAneDldM02Wpsel9yqbam17Z8Uv~wjRG0UCIu~agMIsy~BMVHRzazLj7pmwa4gcPops451t5g__',
  name: 'Торт Милая девочка',
  weight: 1000,
  timing: '2,5',
  description:
    'Два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера',
  price: 600,
  tag: TagType.HIT,
  inStock: true,
  href: 'https://www.google.com',
  quantity: 4,
};

export const mockCardTwo: TCard = {
  id: '2',
  buttonType: 'button',
  pic: 'https://s3-alpha-sig.figma.com/img/d173/5c58/689dd362b27692fc65ca832a85773478?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFI4-ZgE7ngZJu8KMpGfIki55cL1QPPdaDKv5ED27EfjJwdlVqrF0-WTd9rIHE4UtruplLt~OcL2BnIKqt1Qb-uIwSXuaBGBVn9qZ1DwJeNlaFTmvbHAgyUwGIecQbBciEU7fZtG2i5INWgUusf4VhL~F0sUuBbpBvESeN-ga7sXkYLz2a1acguvjYKQiH60h3My3Nu90~doBNGJuZCGMzRnKXeHmk3kEBfMmuq9riMbcUXm3PojGPYHgzuqBgYP3jIsLoSKXppn8GMnP6mTOlQgxT2oOwuSleyNbcOlMirJTov9EPoP2oWIZT2OfiuXBnDkAL7FJKNfZfMf1yqbcg__',
  name: 'Торт с очень длинным названием, которое не влезает в одну строку',
  weight: 2500,
  timing: '4',
  description:
    'Два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера. А потом еще раз два вида бисквита - миндальный и шоколадный, карамельный мусс, воздушный крем шантильи с ноткой сливочного ликера',
  price: 600000,
  tag: TagType.RECOMMENDED,
  inStock: false,
  href: 'https://www.google.com',
  quantity: 1,
  sizeId: '1',
  productId: '1',
};

export const products: TCard[] = [...Array(9)].map((_, index) => (index % 2 === 0 ? mockCardOne : mockCardTwo));

const banner = mainBanner.src;

export const slides = [banner, banner, banner, banner];

const mockCategorieOne = { name: 'Пасха', pic: mockCardOne.pic, count: 3 };
const mockCategorieTwo = { name: 'Еда на каждый день, бизнес ланчи', pic: mockCardTwo.pic, count: 654 };

export const categories = [...Array(12)].map((_, index) => (index % 2 === 0 ? mockCategorieOne : mockCategorieTwo));

export const menuItemsLevelTwo = [
  {
    value: 'Платтеры, наборы закусок',
    label: 'Платтеры, наборы закусок',
  },
  {
    value: 'Холодные закуски, канапе',
    label: 'Холодные закуски, канапе',
  },
  {
    value: 'Горячие закуски',
    label: 'Горячие закуски',
  },
  {
    value: 'Праздничные горячие блюда',
    label: 'Праздничные горячие блюда',
  },
  {
    value: 'Мини-выпечка',
    label: 'Мини-выпечка',
  },
  {
    value: 'Детское банкетное меню Детское банкетное меню',
    label: 'Детское банкетное меню Детское банкетное меню',
  },
  {
    value: 'Праздничное оформление, посуда',
    label: 'Праздничное оформление, посуда',
  },
];

export const menuLevelOneOptions: TMenuLevelOneOption[] = [
  {
    value: '1',
    label: 'Акции',
    children: menuItemsLevelTwo,
  },
  {
    value: '2',
    label: 'Приготовим за 60 минут',
    children: menuItemsLevelTwo.slice(3),
  },
  {
    value: '3',
    label: 'Пицца',
    children: menuItemsLevelTwo.reverse(),
  },
  {
    value: '4',
    label: 'Торты фирменные',
    children: menuItemsLevelTwo.slice(4, -1),
  },
  {
    value: '5',
    label: 'Пирожное',
    children: menuItemsLevelTwo.slice(1),
  },
  {
    value: '6',
    label: 'Пироги',
    children: menuItemsLevelTwo,
  },
  {
    value: '7',
    label: 'Еда на каждый день, бизнес ланчи, бизнес ланчи, бизнес ланчи',
    children: menuItemsLevelTwo,
  },
  {
    value: '8',
    label: 'Банкетные блюда',
    children: menuItemsLevelTwo,
  },
];

export const cartList: TCartListItem[] = products.map((product) => ({
  name: product.name,
  pic: product.pic,
  price: product.price,
  count: Math.floor(Math.random() * 15) + 1,
}));

export const mockProduct = {
  fillingOptions: ['Манго-маракуйя', 'Малина', 'Черника', 'Клубника'],
  weightOptions: [1, 2, 3, 4, 5],
  contents:
    'яйцо куриное, мука пшеничная, разрыхлитель, сахар песок, маргарин, масло сливочное, молоко сгущеное, какао, начинка Фабулоссо, коньяк, сливки растительные, крем Шогана',
  nutritions: { fats: 27.1, proteins: 7.7, carbs: 42.1, kcal: 438.4 },
  portions: '6-8',
  size: 'диаметр - 16 см, высота - 7 см.',
  bestBefore: '6 суток',
  additionalInfo:
    'Надпись цветным шоколадом на торте. Текст надписи необходимо указать в разделе Комментарии к заказу при оформлении заказа. Торт ручной работы, возможны незначительные отличия в оформлении. Набор ягод в украшении зависит от сезонности.',
};

const mockAccordions = [
  {
    title: 'Начисление, активация и подпись бонусов',
    text: 'Начисление бонусов происходит при совершении покупок в кафе и ресторане участников бонусной программы Premium Bonus Club и на сайте pirogvatrushka.ru в следующем объеме:',
  },
  {
    title: 'Как накопить бонусы',
    text: 'Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов. Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов.',
  },
  {
    title:
      'Как накопить бонусы Как накопить бонусы Как накопить бонусы Как накопить бонусы Как накопить бонусы Как накопить бонусы Как накопить бонусы Как накопить бонусы ',
    text: 'Стоимость',
  },
];

export const accordions = [...mockAccordions, ...mockAccordions, mockAccordions[0]];

export const promotions: TPromotion[] = [
  {
    id: '1',
    name: 'Скидка именинникам 10%',
    pic: 'https://s3-alpha-sig.figma.com/img/1cbd/6d9d/20ad1ed2e9d57489108643c0407f39e2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~YT2pTIQJaSN~1EZdbb2S01zXR3xDY2xaYA8pUHbRi7yWhKXP8XdFYHA-6VCVdKcfmau~6taP4CfOyzMRstOKBYjBLFyySWSjtSFPuEEV-LcUpqafa2Rg5p7cmksk1JrWm~1lGh2w5i94GlCDCuliVMgJfN-qjCjMtFPrW-5B7dm1INg~eYABtQLiCweIj~o1RmffF~fRt~rcWfKdd~7Q-rA6r5IUDcrpcLrMmaN5HcGr9GMMhoHYdfJyH9gRNwnPBuKzedr6g1loAneDldM02Wpsel9yqbam17Z8Uv~wjRG0UCIu~agMIsy~BMVHRzazLj7pmwa4gcPops451t5g__',
    shortDescription:
      'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
    text: 'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
    start: '01.03.2024',
    end: '31.12.2024',
  },
  {
    id: '2',
    name: 'Бесплатная доставка от 1000 р.',
    pic: 'https://s3-alpha-sig.figma.com/img/1cbd/6d9d/20ad1ed2e9d57489108643c0407f39e2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~YT2pTIQJaSN~1EZdbb2S01zXR3xDY2xaYA8pUHbRi7yWhKXP8XdFYHA-6VCVdKcfmau~6taP4CfOyzMRstOKBYjBLFyySWSjtSFPuEEV-LcUpqafa2Rg5p7cmksk1JrWm~1lGh2w5i94GlCDCuliVMgJfN-qjCjMtFPrW-5B7dm1INg~eYABtQLiCweIj~o1RmffF~fRt~rcWfKdd~7Q-rA6r5IUDcrpcLrMmaN5HcGr9GMMhoHYdfJyH9gRNwnPBuKzedr6g1loAneDldM02Wpsel9yqbam17Z8Uv~wjRG0UCIu~agMIsy~BMVHRzazLj7pmwa4gcPops451t5g__',
    shortDescription:
      'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
    text: 'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
    start: '01.03.2024',
  },
  {
    id: '3',
    name: 'Бесплатная доставка от 1000 р.',
    pic: 'https://s3-alpha-sig.figma.com/img/1cbd/6d9d/20ad1ed2e9d57489108643c0407f39e2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~YT2pTIQJaSN~1EZdbb2S01zXR3xDY2xaYA8pUHbRi7yWhKXP8XdFYHA-6VCVdKcfmau~6taP4CfOyzMRstOKBYjBLFyySWSjtSFPuEEV-LcUpqafa2Rg5p7cmksk1JrWm~1lGh2w5i94GlCDCuliVMgJfN-qjCjMtFPrW-5B7dm1INg~eYABtQLiCweIj~o1RmffF~fRt~rcWfKdd~7Q-rA6r5IUDcrpcLrMmaN5HcGr9GMMhoHYdfJyH9gRNwnPBuKzedr6g1loAneDldM02Wpsel9yqbam17Z8Uv~wjRG0UCIu~agMIsy~BMVHRzazLj7pmwa4gcPops451t5g__',
    shortDescription:
      'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
    text: 'Подарочный сертификат для вкусных покупок! Порадуйте своих близких. Подробности уточняйте операторов.',
  },
];

export const userInfo: TUserInfo = {
  name: 'Иван Иванов',
  email: 'ivanov.ivan.22@mail.ru',
  phone: '+7 (912) 744 55 88',
  addresses: [
    {
      id: '1',
      address: 'ул. Энтузиастов, дом 16',
      entrance: '',
      floor: '',
      apartment: '',
      type: addressesTypes[AddressType.HOUSE],
    },
    {
      id: '2',
      address: 'ул. Чекистова, дом 16',
      entrance: '3',
      floor: '8',
      apartment: '203',
      type: addressesTypes[AddressType.FLAT],
    },
  ],
  points: 121,
};

export const order = {
  id: '1',
  number: 343434,
  status: 'inProgress',
  createdAt: '11.03.2024',
  orderStatuses: [
    {
      time: '14:00',
      status: 'Получили заказ',
      completed: true,
    },
    {
      time: '14:10',
      status: 'Заказ подтвержден',
      completed: true,
    },
    {
      time: '14:15',
      status: 'Готовим',
      completed: false,
    },
    {
      time: '16:20',
      status: 'Готов к выдаче',
      completed: false,
    },
  ],
  items: [
    {
      id: '1',
      name: 'Торт Прага',
      quantity: 1,
      weight: 1800,
      unitPrice: 1160,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '2',
      name: 'Пирог с капустой и яйцом, слоено-дрожжевое тесто, 1кг',
      quantity: 1,
      weight: 1000,
      unitPrice: 550,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '3',
      name: 'Пирожное Наполеон тот самый',
      quantity: 4,
      weight: 250,
      unitPrice: 480,
      modifiers: 'слоено-дрожжевое тесто',
    },
  ],
  discounts: [
    {
      id: '1',
      reason: 'Скидка по промокоду',
      discount: 200,
    },
  ],
  totalPrice: 3430,
  fulfillment: {
    type: 'Самовывоз',
    address: 'ул. Энтузиастов, д.12. Пекарня-кондитерская «Ватрушка»',
    time: '16.03.2021, с 10:30 до 11:30',
    paymentMethod: 'Оплата наличными',
  },
};

export const orderTwo = {
  id: '1',
  number: 98698,
  status: 'inProgress',
  createdAt: '10.03.2024',
  orderStatuses: [
    {
      time: '14:00',
      status: 'Получили заказ',
      completed: true,
    },
    {
      time: '14:10',
      status: 'Заказ подтвержден',
      completed: true,
    },
    {
      time: '14:15',
      status: 'Готовим',
      completed: false,
    },
    {
      time: '16:20',
      status: 'Готов к выдаче',
      completed: false,
    },
  ],
  items: [
    {
      id: '1',
      name: 'Торт Прага',
      quantity: 1,
      weight: 250,
      unitPrice: 160,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '2',
      name: 'Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем ',
      quantity: 1,
      unitPrice: 550,
      weight: 250,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '3',
      name: 'Пицца Римская Маргарита',
      quantity: 1,
      weight: 250,
      unitPrice: 490,
      modifiers: 'слоено-дрожжевое тесто',
    },
  ],
  discounts: [],
  totalPrice: 1190,
  fulfillment: {
    type: 'Доставка',
    address: 'ул. Энтузиастов, д.12., подъезд 2, кв. 10, этаж 8',
    time: '16.03.2021, с 15:00 до 16:30',
    paymentMethod: 'Оплата онлайн',
  },
};

export type TOrder = typeof order;

export const currentOrders: TOrder[] = [order, orderTwo];

export const historyOrder = {
  id: '1',
  number: 34343,
  status: 'Выполнен',
  createdAt: '11.03.2024',
  orderStatuses: [
    {
      time: '14:00',
      status: 'Получили заказ',
      completed: true,
    },
    {
      time: '14:10',
      status: 'Заказ подтвержден',
      completed: true,
    },
    {
      time: '14:15',
      status: 'Готовим',
      completed: false,
    },
    {
      time: '16:20',
      status: 'Готов к выдаче',
      completed: false,
    },
  ],
  items: [
    {
      id: '1',
      name: 'Торт Прага',
      quantity: 1,
      unitPrice: 1160,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '2',
      name: 'Пирог с капустой и яйцом, слоено-дрожжевое тесто, 1кг',
      quantity: 1,
      unitPrice: 550,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '3',
      name: 'Пирожное Наполеон тот самый',
      quantity: 4,
      unitPrice: 480,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
  ],
  discounts: [
    {
      id: '1',
      reason: 'Скидка по промокоду',
      discount: 200,
    },
  ],
  totalPrice: 3430,
  fulfillment: {
    type: 'Самовывоз',
    address: 'ул. Энтузиастов, д.12. Пекарня-кондитерская «Ватрушка»',
    time: '16.03.2021, с 10:30 до 11:30',
    paymentMethod: 'Оплата наличными',
  },
};

export const historyOrderTwo = {
  id: '1',
  number: 98698,
  status: 'Отменен',
  createdAt: '10.03.2024',
  orderStatuses: [
    {
      time: '14:00',
      status: 'Получили заказ',
      completed: true,
    },
    {
      time: '14:10',
      status: 'Заказ подтвержден',
      completed: true,
    },
    {
      time: '14:15',
      status: 'Готовим',
      completed: false,
    },
    {
      time: '16:20',
      status: 'Готов к выдаче',
      completed: false,
    },
  ],
  items: [
    {
      id: '1',
      name: 'Торт Прага',
      quantity: 1,
      unitPrice: 160,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '2',
      name: 'Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем Тяхан со свининой, рисом и болгарским перцем ',
      quantity: 1,
      unitPrice: 550,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
    {
      id: '3',
      name: 'Пицца Римская Маргарита',
      quantity: 1,
      unitPrice: 490,
      weight: 100,
      modifiers: 'слоено-дрожжевое тесто',
    },
  ],
  discounts: [],
  totalPrice: 1190,
  fulfillment: {
    type: 'Доставка',
    address: 'ул. Энтузиастов, д.12., подъезд 2, кв. 10, этаж 8',
    time: '16.03.2021, с 15:00 до 16:30',
    paymentMethod: 'Оплата онлайн',
  },
};

export const ordersHistory: TOrder[] = [historyOrder, historyOrderTwo];

export const catalogOptions: any[] = [
  {
    __typename: 'categories',
    id: '02eae309-f194-404e-96eb-c66151014dbc',
    name: 'Багеты из пекарни',
    description: 'Багеты из пекарни',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/976388bfbdd446d1515cb8a522642042.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'bageti-iz-pekarni',
  },
  {
    __typename: 'categories',
    id: '07f68ebf-fde8-4ffe-9d18-e0ad37730f19',
    name: 'Киш',
    description: 'Киш',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/01fbebc5a6521ec0ead26c6a64181150.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'kish',
  },
  {
    __typename: 'categories',
    id: '159c9236-2ed0-44a0-9586-14653ae68031',
    name: 'Хлеб без добавления дрожжей',
    description: 'Хлеб без добавления дрожжей',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/07b836617c3a3926466d688c288a490d.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'hleb-bez-dobavleniya-drozhzhei',
  },
  {
    __typename: 'categories',
    id: '204c2d3d-60cf-4663-81ef-26ba55b3882b',
    name: 'Тарт',
    description: 'Тарт',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/749138489e3d1b5d8934cbec3d4c334a.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'tart',
  },
  {
    __typename: 'categories',
    id: '214739c8-95b9-4a47-8b69-f81050c8f380',
    name: 'Каравай',
    description: 'Каравай',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/bb19111ff0a22812a36b10b45e21be7c.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'karavai',
  },
  {
    __typename: 'categories',
    id: '21cdfa8f-9c3f-42e8-b00f-ff3bc72698c9',
    name: 'Пирожное Нарезное',
    description: 'Пирожное Нарезное',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/6a85f492cf0eda0be2067f8dbed65410.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'pirozhnoe-nareznoe',
  },
  {
    __typename: 'categories',
    id: '27ba4bb1-565b-4978-96cf-efb40b8a1fed',
    name: 'Детское банкетное меню',
    description: 'Детское банкетное меню',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/9117714e90d5adecfb9ef053c8514c8d.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'detskoe-banketnoe-menyu',
  },
  {
    __typename: 'categories',
    id: '30beff2c-06a9-4e3b-8eeb-46b3268c580b',
    name: 'Мини-выпечка',
    description: 'Мини-выпечка',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/9c2416f5a1bb93f1f4402fad58da1a05.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'mini-vipechka',
  },
  {
    __typename: 'categories',
    id: '36776247-35e3-40fb-82dc-524de52c49cc',
    name: 'Пицца',
    description: 'Пицца',
    button_image_url: null,
    header_image_url: null,
    isHidden: false,
    slug: 'pitstsa',
  },
  {
    __typename: 'categories',
    id: '3baf8620-045e-43db-bedc-a9875c23fe91',
    name: 'Лапша ',
    description: 'Лапша ',
    button_image_url: null,
    header_image_url: null,
    isHidden: false,
    slug: 'lapsha',
  },
  {
    __typename: 'categories',
    id: '3e40a0f5-75a5-43db-a447-a5fc099ba1ea',
    name: 'Пироги Сытные',
    description: 'Пироги Сытные',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/c4a0779585d9c15b1e5068245cdfa93e.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'pirogi-sitnie',
  },
  {
    __typename: 'categories',
    id: '477af64b-f0c5-4498-b5f5-f363190feb63',
    name: 'Шоколадные конфеты',
    description: 'Шоколадные конфеты',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/9184c9114ba7563d5cfc2f304f8f87a4.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'shokoladnie-konfeti',
  },
  {
    __typename: 'categories',
    id: '536f53e4-f6e5-424f-a0a8-201102565228',
    name: 'Сэндвич ',
    description: 'Сэндвич ',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/e806c89c32639e100f80b2c7a02df95d.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'sendvich',
  },
  {
    __typename: 'categories',
    id: '5492020b-6790-4f76-ad18-3df26f61cd63',
    name: 'Печенье',
    description: 'Печенье',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/315f604ffbd5ecf6a794c5e71895cf7c.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'pechene',
  },
  {
    __typename: 'categories',
    id: '60813be9-3558-492d-9da2-f301b187b5eb',
    name: 'Праздничные салаты',
    description: 'Праздничные салаты',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/f80465c633d94ccdec815f91665fc8b8.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'prazdnichnie-salati',
  },
  {
    __typename: 'categories',
    id: '672fa9d2-2816-4a22-9369-57310802e676',
    name: 'Холодные закуски, канапе',
    description: 'Холодные закуски, канапе',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/4fe6d20322726aff145371cb805ab3c2.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'holodnie-zakuski-kanape',
  },
  {
    __typename: 'categories',
    id: '68d83f92-c781-446d-96a6-52bcd38a9013',
    name: 'Национальные пироги',
    description: 'Национальные пироги',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/7c63b6eb31652e9080ee09399b9f320b.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'natsionalnie-pirogi',
  },
  {
    __typename: 'categories',
    id: '6ec83bd8-e33e-431a-aad2-d5b43bf1ca1f',
    name: 'Сытная выпечека',
    description: 'Сытная выпечека',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/32836fffe171ce13a3868b54e7671327.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'sitnaya-vipecheka',
  },
  {
    __typename: 'categories',
    id: '8576a83c-c8f5-4f2e-86bb-ae960fbbb548',
    name: 'Пирожное в наборах',
    description: 'Пирожное в наборах',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/b3df18ac0c853c63f4620f7e7d3c0c83.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'pirozhnoe-v-naborah',
  },
  {
    __typename: 'categories',
    id: '8aad3958-514c-42ee-9392-364d23a440de',
    name: 'Тесто',
    description: 'Тесто',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/c57ba3855ecb1945de6ffe7f51c075e6.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'testo',
  },
  {
    __typename: 'categories',
    id: '90290530-3f28-40b1-b620-6295b3d40eb6',
    name: 'Азиатская кухня',
    description: 'Азиатская кухня',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/afd334911369c669571e6c6ac15a1f56.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'aziatskaya-kuhnya',
  },
  {
    __typename: 'categories',
    id: '924c470a-437b-4a78-9b22-192f9c21aac8',
    name: 'Эклеры и профитроли',
    description: 'Эклеры и профитроли',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/79e071ac9e26c19e20ddcc72e4c7dca1.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'ekleri-i-profitroli',
  },
  {
    __typename: 'categories',
    id: '95cc196a-ded1-4300-87f4-1ab0cd75618e',
    name: 'Быстропекарь дома',
    description: 'Быстропекарь дома',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/4d18481f02e90c3fdbca38db03468432.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'bistropekar-doma',
  },
  {
    __typename: 'categories',
    id: '98d0a1d6-f7ac-4bf1-949b-d652b4bd60ab',
    name: 'Морсы, квас',
    description: 'Морсы, квас',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/d61c0425cbe2844f8ea96ce4d18b8eb7.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'morsi-kvas',
  },
  {
    __typename: 'categories',
    id: '9affc39d-3904-49d5-8508-48e17d46f5c0',
    name: 'Завтраки',
    description: 'Завтраки',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/8a9e5a1b8dadcc746b0388690c50c1f0.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'zavtraki',
  },
  {
    __typename: 'categories',
    id: '9fdcd5f7-6c57-4c90-a82b-1f309b2d1c96',
    name: 'Пироги сладкие ',
    description: 'Пироги сладкие ',
    button_image_url: null,
    header_image_url: null,
    isHidden: false,
    slug: 'pirogi-sladkie',
  },
  {
    __typename: 'categories',
    id: '9fed9f7e-f94c-42b5-ae3f-77f01c3ddb9b',
    name: 'Торты',
    description: 'Торты фирменные',
    button_image_url: null,
    header_image_url: null,
    isHidden: false,
    slug: 'torti',
  },
  {
    __typename: 'categories',
    id: 'b0454c53-859a-4725-924f-53cfb7ab49f4',
    name: 'Зефир, меренга',
    description: 'Зефир, меренга',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/1d85cbcef534075b4c0a9302175489c4.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'zefir-merenga',
  },
  {
    __typename: 'categories',
    id: 'b123782b-4a3b-4907-9a8c-e2a72d9c11bc',
    name: 'Соусы и паштеты собственного производства',
    description: 'Соусы и паштеты собственного производства',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/34a47908930ba67866f4ba797aacefd5.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'sousi-i-pashteti-sobstvennogo-proizvodstva',
  },
  {
    __typename: 'categories',
    id: 'b1a489e3-2bbf-405a-9d4a-087e323feb5e',
    name: 'Пирожное Евро',
    description: 'Пирожное Евро',
    button_image_url:
      'https://16a9564f-f8ec-42ba-a998-3027aa809e50.selstorage.ru/pekarnya-konditerskaya-bykova/12190/images/items/84a4b6d63b771b2e8dc272a6bc273c10.PNG',
    header_image_url: null,
    isHidden: false,
    slug: 'pirozhnoe-evro',
  },
];
