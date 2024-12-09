import { TPromotion } from './types';

import mainBanner from '@/assets/images/main_banner.png';

const banner = mainBanner.src;

export const slides = [banner, banner, banner, banner];

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
