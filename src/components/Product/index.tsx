'use client';

import { Breadcrumb, Button, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { FiInfo } from 'react-icons/fi';

import { PiCakeLight, PiCarLight } from 'react-icons/pi';

import Lightbox from 'yet-another-react-lightbox';

import { Carousel } from '../Carousel';
import { GalleryImage } from '../GalleryImage';
import { StepperButton } from '../ui/StepperButton';

import { Products } from '@/__generated__/graphql';
import { SliderComponent as Slider } from '@/components/Slider';
import { CurrencySymbol, TagColorSchema } from '@/constants';
import { mockCardOne, mockCardTwo, mockProduct, products } from '@/mocks';

type TProductProps = {
  product: Products;
};

const Product: FC<TProductProps> = ({ product }) => {
  const {
    // id,
    name,
    description,
    productallergensCollection: allergens,
    productsizesCollection,
  } = product;

  const nutritions = JSON.parse(productsizesCollection?.edges[0].node.nutrition_per_hundred_grams);

  const [selectedFilling, setSelectedFilling] = useState<string>(mockProduct.fillingOptions[0]);
  const [selectedWeight, setSelectedWeight] = useState<number>(mockProduct.weightOptions[0]);

  const onFillingButtonClick = (_: React.MouseEvent<HTMLElement>, filling: string) => {
    setSelectedFilling(filling);
  };

  const onWeightButtonClick = (_: React.MouseEvent<HTMLElement>, weight: number) => {
    setSelectedWeight(weight);
  };

  const onOrderButtonClick = () => {
    message.success('Добавлено в корзину');
  };

  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: <Link href="https://www.google.com">Категория</Link>,
    },
    {
      title: <Link href="https://www.google.com">Подкатегория</Link>,
    },
    {
      title: name,
    },
  ];

  // const [index, setIndex] = useState(-1);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex w-full max-w-320 flex-col gap-12 px-10 pb-10 max-lg:gap-8 max-md:gap-4 max-xs:max-w-82 max-xs:px-0">
        <Breadcrumb items={breadcrumbs} />
        <div className="flex justify-between gap-10 max-xl:grid max-xl:grid-cols-2 max-md:flex max-md:flex-col">
          <div className="flex w-full gap-4 max-xl:flex-col-reverse max-xl:justify-end max-md:hidden">
            <div className="flex w-18 flex-col flex-wrap gap-2 max-xl:w-auto max-xl:flex-row">
              {[
                mockCardOne.pic,
                mockCardTwo.pic,
                mockCardOne.pic,
                mockCardTwo.pic,
                mockCardOne.pic,
                mockCardTwo.pic,
                mockCardOne.pic,
                mockCardTwo.pic,
              ].map((pic, index) => (
                <Image
                  key={index}
                  src={pic}
                  width={144}
                  height={144}
                  alt={name}
                  // onClick={({ index: current }) => setIndex(current)}
                  onClick={() => setOpen(true)}
                  className="aspect-square h-18 w-18 cursor-pointer rounded-2xl border border-primary object-cover p-0.5 "
                />
              ))}
            </div>
            <div className="relative w-full">
              <span
                className="z-2 absolute left-6 top-6 rounded-lg px-2 py-1 text-base leading-base"
                style={{
                  backgroundColor: TagColorSchema[mockCardTwo.tag].backgroundColor,
                  color: TagColorSchema[mockCardTwo.tag].textColor,
                }}
              >
                {mockCardTwo.tag}
              </span>
              <Image
                src={mockCardOne.pic}
                width={580}
                height={387}
                alt={name}
                onClick={() => setOpen(true)}
                className="aspect-3/2 w-full cursor-pointer rounded-2xl object-cover "
              />
            </div>
          </div>
          <Lightbox
            // index={index}
            slides={[
              { src: mockCardOne.pic, width: 804, height: 536 },
              { src: mockCardTwo.pic, width: 804, height: 536 },
            ]}
            // open={index >= 0}
            open={open}
            // close={() => setIndex(-1)}
            close={() => setOpen(false)}
            className="max-md:hidden"
            render={{ slide: GalleryImage }}
          />
          <div className="hidden max-md:block">
            <Carousel slides={[mockCardOne.pic, mockCardTwo.pic, mockCardOne.pic, mockCardTwo.pic]} product />
          </div>
          <div className="flex max-w-144 flex-col text-lg leading-lg max-lg:max-w-full max-sm:text-base max-sm:leading-base">
            <div className="flex flex-col">
              <h1 className="text-3xl font-medium leading-3xl max-sm:text-xl max-sm:leading-xl">{name}</h1>
              <p className="pt-3 text-textTertiary ">Срок изготовления торта: 3-4 дня</p>
              <div className="flex items-start gap-1 pt-3 text-textTertiary max-lg:hidden">
                <FiInfo className="mt-0.5" />
                <p className="text-base leading-base">Итоговая стоимость торта зависит от веса и выбранной начинки</p>
              </div>
              <div className="flex items-start gap-1 text-textTertiary max-lg:hidden">
                <FiInfo className="mt-0.5" />
                <p className="text-base leading-base">
                  Заказной торт оформляется только по звонку оператору. Необходима предоплата.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-8 max-sm:pt-6">
              <p className="text-lg font-medium leading-lg">Начинка</p>
              <div className="flex flex-wrap gap-2 pt-3">
                {mockProduct.fillingOptions.map((filling) => (
                  <Button
                    key={filling}
                    className={`w-max ${filling === selectedFilling ? 'border-primary bg-primary text-white' : 'border-bgLayout bg-bgLayout text-text hover:border-transparent hover:bg-fill active:border-transparent active:bg-fill'}  disabled:border-textQuinary disabled:bg-textQuinary`}
                    onClick={(e) => onFillingButtonClick(e, filling)}
                  >
                    {filling}
                  </Button>
                ))}
                {/* <Segmented
                  options={mockProduct.fillingOptions.map((filling) => ({
                    value: filling,
                    label: (
                      // <Button
                      //   key={filling}
                      //   className="w-max border-primary bg-primary text-white hover:border-primaryHover hover:bg-primaryHover active:border-primaryActive active:bg-primaryActive disabled:border-textQuinary disabled:bg-textQuinary"
                      // >
                      //   {filling}
                      // </Button>
                      <div className="h-12 w-max">{filling}</div>
                    ),
                  }))}
                /> */}
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <p className="text-lg font-medium leading-lg">Вес</p>
              <div className="flex flex-wrap gap-2 pt-3">
                {mockProduct.weightOptions.map((weight) => (
                  <Button
                    key={weight}
                    className={`w-max ${weight === selectedWeight ? 'border-primary bg-primary text-white' : 'border-bgLayout bg-bgLayout text-text hover:border-transparent hover:bg-fill active:border-transparent active:bg-fill'}  disabled:border-textQuinary disabled:bg-textQuinary`}
                    onClick={(e) => onWeightButtonClick(e, weight)}
                  >
                    {weight} кг
                  </Button>
                ))}
              </div>
            </div>
            <p className="pt-8 text-3xl font-medium leading-3xl  max-sm:pt-6">
              {mockCardOne.price} {CurrencySymbol.RUB}
            </p>
            <div className="flex gap-6 pt-6">
              <StepperButton />
              <Button type="primary" className="w-max max-xs:w-full" onClick={onOrderButtonClick}>
                Заказать
              </Button>
            </div>
            <div className="flex gap-6 pt-6 max-sm:gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-borderSecondary p-4 max-xs:flex-col max-xs:items-start max-xs:pr-2">
                <PiCakeLight className="h-8 w-8 text-primary" />
                <p className="max-w-34">Скидка именниникам 10%</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-borderSecondary p-4 max-xs:flex-col max-xs:items-start max-xs:pr-2">
                <PiCarLight className="h-8 w-8 text-primary" />
                <p className="max-w-40">Бесплатная доставка от 1000 р.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-10 max-sm:pt-6">
              <p className="font-medium">Описание:</p>
              <p>{description}</p>
            </div>
            <div className="flex flex-col pt-4">
              <p className="font-medium">Состав:</p>
              <p className="pt-2">{mockProduct.contents}</p>
              {allergens?.edges.length ? <p>Продукт содержит аллергены: {allergens.edges.join(', ')}</p> : null}
            </div>
            <div className="flex flex-col pt-4">
              <p className="font-medium">Пищевая и энергетическая ценность на 100 г продукта:</p>
              <div className="flex gap-6 pt-2">
                <div className="flex flex-col gap-1">
                  <p>Жиры (г)</p>
                  <p className="text-textTertiary">{nutritions.fats}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>Белки (г)</p>
                  <p className="text-textTertiary">{nutritions.proteins}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>Углеводы (г)</p>
                  <p className="text-textTertiary">{nutritions.carbs}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>кКал</p>
                  <p className="text-textTertiary">{nutritions.energy}</p>
                </div>
              </div>
            </div>
            <p className="pt-4 font-medium">
              Количество порций: <span className="font-normal">{mockProduct.portions}</span>
            </p>
            <p className="pt-4 font-medium">
              Размеры торта: <span className="font-normal">{mockProduct.size}</span>
            </p>
            <p className="pt-4 font-medium">
              Срок годности: <span className="font-normal">{mockProduct.bestBefore}</span>
            </p>
            <div className="flex flex-col gap-1 pt-4">
              <p className="font-medium">Примечание:</p>
              <p>{mockProduct.additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
      <Slider title="Рекомендуем" slides={products} />
    </>
  );
};

export default Product;
