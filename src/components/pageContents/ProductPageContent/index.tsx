'use client';

import { Breadcrumb, Button, message } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';

import { FiInfo } from 'react-icons/fi';

import { TextBlock } from '../../ui/TextBlock';

import { API } from '@/api/types';
import ProductCarousel from '@/components/Carousels/ProductCarousel';
import { Slider } from '@/components/Carousels/Slider';
import { PromoTag } from '@/components/ui/PromoTag';
import { StepperButton } from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { mockProduct, products } from '@/mocks';

export type TProductProps = {
  productInfo: {
    id?: string;
    allergens?: string[];
    title?: string;
    description?: string | null;
    images: string[];
    nutritionFacts: {
      fats: string | number;
      proteins: string | number;
      carbs: string | number;
      energy: string | number;
    };
    price: string | null | undefined;
    promotions?: API.Products.Promotion[];
    weight: string | null | undefined;
    labels?: API.Products.Label[];
  };
};

const ProductPageContent: FC<TProductProps> = ({ productInfo }) => {
  const { id, title, description, allergens, images, nutritionFacts, price, weight, labels, promotions } = productInfo;

  const [selectedFilling, setSelectedFilling] = useState<string>(mockProduct.fillingOptions[0]);
  const [selectedWeight, setSelectedWeight] = useState<number>(mockProduct.weightOptions[0]);

  const onFillingButtonClick = (_: React.MouseEvent<HTMLElement>, filling: string) => {
    setSelectedFilling(filling);
  };

  const onWeightButtonClick = (_: React.MouseEvent<HTMLElement>, weightOption: number) => {
    setSelectedWeight(weightOption);
  };

  const onOrderButtonClick = () => {
    message.success(`Добавлено в корзину: ${id}`);
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
      title,
    },
  ];

  return (
    <>
      <div className="mx-auto flex w-full max-w-320 flex-col gap-12 pb-10 max-lg:gap-4 max-xs:max-w-82">
        <Breadcrumb items={breadcrumbs} />
        <div className="flex justify-between gap-10 max-xl:grid max-xl:grid-cols-2 max-lg:flex max-lg:flex-col">
          <ProductCarousel className="lg:hidden" isMobile images={images} title={title || ''} labels={labels} />
          <ProductCarousel className="max-lg:hidden" images={images} title={title || ''} labels={labels} />

          <div className="flex max-w-144 flex-col text-lg leading-lg max-lg:max-w-full max-sm:text-base max-sm:leading-base">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-x-4 gap-y-3 pb-6 max-sm:gap-x-3">
                {promotions &&
                  promotions.map((promo) => promo.productButtonText && <PromoTag text={promo.productButtonText} />)}
              </div>
              <h1 className="text-3xl font-medium leading-3xl max-sm:text-xl max-sm:leading-xl">{title}</h1>
              <p className="pt-3 text-textTertiary ">{weight} г</p>
              <div className="flex items-start gap-1 pt-3 text-textTertiary max-lg:hidden">
                <FiInfo className="mt-0.5 min-w-4" />
                <p className="text-base leading-base">Итоговая стоимость торта зависит от веса и выбранной начинки</p>
              </div>
              <div className="flex items-start gap-1 text-textTertiary max-lg:hidden">
                <FiInfo className="mt-0.5 min-w-4" />
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
                {mockProduct.weightOptions.map((weightOption) => (
                  <Button
                    key={weightOption}
                    className={`w-max ${weightOption === selectedWeight ? 'border-primary bg-primary text-white' : 'border-bgLayout bg-bgLayout text-text hover:border-transparent hover:bg-fill active:border-transparent active:bg-fill'}  disabled:border-textQuinary disabled:bg-textQuinary`}
                    onClick={(e) => onWeightButtonClick(e, weightOption)}
                  >
                    {weightOption} кг
                  </Button>
                ))}
              </div>
            </div>
            <p className="pt-8 text-3xl font-medium leading-3xl  max-sm:pt-6">
              {price} {CurrencySymbol.RUB}
            </p>
            <div className="flex gap-6 py-6">
              <StepperButton />
              <Button type="primary" className="w-max max-xs:w-full" onClick={onOrderButtonClick}>
                Заказать
              </Button>
            </div>

            <TextBlock title="Описание" text={description || ''} />
            <TextBlock
              title="Состав"
              text={mockProduct.contents}
              additionalText={allergens?.length ? <p>Продукт содержит аллергены: {allergens.join(', ')}</p> : null}
            />
            <div className="flex flex-col pt-4">
              <p className="font-medium">Пищевая и энергетическая ценность на 100 г продукта:</p>
              <div className="flex gap-6 pt-2">
                <div className="flex flex-col gap-1">
                  <p>Жиры (г)</p>
                  <p className="text-textTertiary">{nutritionFacts.fats}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>Белки (г)</p>
                  <p className="text-textTertiary">{nutritionFacts.proteins}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>Углеводы (г)</p>
                  <p className="text-textTertiary">{nutritionFacts.carbs}</p>
                </div>{' '}
                <div className="flex flex-col gap-1">
                  <p>кКал</p>
                  <p className="text-textTertiary">{nutritionFacts.energy}</p>
                </div>
              </div>
            </div>
            <TextBlock title="Количество порций" text={mockProduct.portions} />
            <TextBlock title="Размеры торта" text={mockProduct.size} />
            <TextBlock title="Срок годности" text={mockProduct.bestBefore} />
            <TextBlock title="Примечание" text={mockProduct.additionalInfo} />
          </div>
        </div>
      </div>
      <Slider title="Рекомендуем" slides={products} />
    </>
  );
};

export default ProductPageContent;
