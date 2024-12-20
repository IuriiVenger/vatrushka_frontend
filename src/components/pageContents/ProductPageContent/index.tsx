'use client';

import { Breadcrumb, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { FC, useEffect, useState } from 'react';

import TextBlock from '../../ui/TextBlock';

import {
  Productsizeimages,
  ProductSizeModifierGroups,
  ProductSizeModifiers,
  Productsizes,
} from '@/__generated__/graphql';
import { API } from '@/api/types';
import ProductCarousel from '@/components/Carousels/ProductCarousel';
import ProductSlider from '@/components/Carousels/ProductSlider';
import ProductModificator from '@/components/Product/ProductModificator';
import PromoTag from '@/components/ui/PromoTag';
import StepperButton from '@/components/ui/StepperButton';
import { CurrencySymbol } from '@/constants';
import { TAddToCardData, TAddToCardDataItem, TProductSliderSlide } from '@/types';
import { conertCategoryRecommendedProductsToCards } from '@/utils/converters';

export type ActiveModifierGroupIds = {
  min_quantity: number;
  max_quantity: number;
  activeModifierGroups: Omit<ProductSizeModifiers, 'nodeId'>[];
};

export type ModifiersGroups = Omit<ProductSizeModifierGroups, 'nodeId' | 'productSizeModifiersCollection'> & {
  modifiers: Omit<ProductSizeModifiers, 'nodeId'>[];
};

export type TProductProps = {
  productInfo: {
    allergens: string[];
    category: {
      name?: string;
      slug?: string | null;
    };
    description?: string | null;
    shortDescription?: string | null;
    optionalText: API.Products.OptionalText[];
    id?: string;
    ingredients?: string | null;
    labels: API.Products.Label[];
    modifiers: ModifiersGroups[];
    promotions: API.Products.Promotion[];
    recommendedProducts: API.Products.Recomedation[];
    sizes: Partial<Productsizes>[] | undefined;
    sizesImages: Productsizeimages[];
    title?: string;
  };
  onOrder: (data: TAddToCardData) => Promise<void>;
};

const getModifierGroupData = (modifiersGroups: ModifiersGroups[]) =>
  modifiersGroups.reduce((acc: Record<string, ActiveModifierGroupIds>, group) => {
    const { min_quantity, max_quantity, modifiers, id } = group;

    const groupInfo: ActiveModifierGroupIds = {
      activeModifierGroups: [],
      min_quantity: min_quantity || 0, // correct logic
      max_quantity: max_quantity || 0, // correct logic
      // min_quantity: 3, // for testing
      // max_quantity: 5, // for testing
    };

    if (min_quantity && max_quantity) {
      const groupModifiers = [...modifiers];

      for (let i = 0; i < min_quantity; i += 1) {
        const defaultModifierIndex = groupModifiers.findIndex((modifier) => modifier.by_default);
        const defaultModifier = groupModifiers[defaultModifierIndex];

        if (defaultModifierIndex !== -1) {
          groupInfo.activeModifierGroups.push(defaultModifier);
          groupModifiers.splice(defaultModifierIndex, 1);
        } else if (groupModifiers.length) {
          groupInfo.activeModifierGroups.push(groupModifiers[0]);
          groupModifiers.splice(0, 1);
        }
      }
    }

    return { ...acc, [id]: groupInfo };
  }, {});

const ProductPageContent: FC<TProductProps> = ({ productInfo, onOrder }) => {
  const {
    allergens,
    category,
    description,
    ingredients,
    id,
    labels,
    modifiers,
    promotions,
    shortDescription,
    sizes,
    sizesImages,
    optionalText,
    recommendedProducts,
    title,
  } = productInfo;

  const initialSize = sizes?.find((size) => size.is_default) || sizes?.[0];

  const [activeSize, setActiveSize] = useState<Partial<Productsizes> | undefined>(initialSize);
  const [amount, setAmount] = useState(1);
  const [isOrderButtonLoading, setIsOrderButtonLoading] = useState(false);
  const router = useRouter();

  const selectedSizeModifiers = modifiers.filter((group) => group.productsize_id === activeSize?.size_id);

  const activeSizeModifiersGroupsInitialData = getModifierGroupData(selectedSizeModifiers);

  const [modifiersGroupsData, setModifiersGroupsData] = useState<Record<string, ActiveModifierGroupIds>>(
    activeSizeModifiersGroupsInitialData,
  );

  const activeModifiers = Object.values(modifiersGroupsData).reduce(
    (acc: Omit<ProductSizeModifiers, 'nodeId'>[], group) => [...acc, ...group.activeModifierGroups],
    [],
  );

  const selectedSizeImagesUrls = sizesImages.reduce((acc: string[], image) => {
    if (image.productsize_id === activeSize?.size_id) {
      acc.push(image.url);
    }

    return acc;
  }, []);

  const activeModifiersPrice = activeModifiers.reduce((acc, modifier) => acc + (Number(modifier.price) || 0), 0);
  const activeSizePrice = activeSize?.price ? Number(activeSize.price) : 0;
  const nutritionFacts = activeSize?.nutrition_per_hundred_grams && JSON.parse(activeSize.nutrition_per_hundred_grams);
  const pricePerItem = activeSizePrice + activeModifiersPrice;
  const totalPrice = pricePerItem * amount;
  const weight = activeSize?.portion_weight_grams;
  const recomendatedProductsData = conertCategoryRecommendedProductsToCards(recommendedProducts);
  const recomendatedProductsSlides: TProductSliderSlide[] = recomendatedProductsData.map((item) => {
    const onBuyButtonClick = async () => {
      if (item.buttonType === 'button') {
        await onOrder([
          { product_id: item.productId || '', size_id: item.sizeId || '', modifiers: [], label: item.name },
        ]);
      } else {
        router.push(item.href);
      }
    };
    return {
      ...item,
      onBuyButtonClick,
      buyButtonText: 'Заказать',
    };
  });

  const isSizeSelectorEnabled = sizes && sizes?.length > 1;

  const getIsModifierSelected = (groupId: string, modifier: Omit<ProductSizeModifiers, 'nodeId'>) =>
    modifiersGroupsData[groupId]?.activeModifierGroups.some((activeModifier) => activeModifier.id === modifier.id);

  const onModifierClick = (groupId: string, modifier: Omit<ProductSizeModifiers, 'nodeId'>) => () => {
    const selectedGroup = modifiersGroupsData[groupId];
    const { activeModifierGroups, min_quantity, max_quantity } = selectedGroup;
    const modifierIndex = activeModifierGroups.findIndex((activeModifier) => activeModifier.id === modifier.id);

    if (modifierIndex !== -1) {
      activeModifierGroups.length > min_quantity && activeModifierGroups.splice(modifierIndex, 1);
    } else {
      activeModifierGroups.push(modifier);
      activeModifierGroups.length > max_quantity && activeModifierGroups.shift();
    }

    setModifiersGroupsData({ ...modifiersGroupsData, [groupId]: selectedGroup });
  };

  const onOrderButtonClick = async () => {
    if (!id || !activeSize?.id) {
      return;
    }

    const orderDataItem: TAddToCardDataItem = {
      product_id: id,
      size_id: activeSize?.id,
      modifiers: activeModifiers.map((modifier) => ({ id: modifier.id, quantity: 1 })),
      label: title || '',
    };

    const orderDataItems = new Array(amount).fill(orderDataItem);

    try {
      setIsOrderButtonLoading(true);
      await onOrder(orderDataItems);
    } finally {
      setIsOrderButtonLoading(false);
    }
  };

  const onSizeClick = (size: Partial<Productsizes>) => () => {
    setActiveSize(size);
  };

  const breadcrumbs = [
    { title: <Link href="/">Главная</Link> },
    { title: <Link href={`/${category.slug}`}>{category.name}</Link> },
    { title },
  ];

  useEffect(() => {
    if (!activeSize) {
      setActiveSize(sizes?.[0]);
    } else {
      setModifiersGroupsData(activeSizeModifiersGroupsInitialData);
    }
  }, [activeSize]);

  return (
    <>
      <div className="mx-auto flex w-full max-w-300 flex-col gap-12 pb-10 max-lg:gap-4 max-xs:px-4">
        <Breadcrumb items={breadcrumbs} />
        <div
          className={`${selectedSizeImagesUrls.length ? 'grid grid-cols-2' : 'flex flex-col'} z-10 gap-10 max-md:flex max-md:flex-col`}
        >
          {!!selectedSizeImagesUrls.length && (
            <>
              <ProductCarousel
                className="hidden max-md:block"
                isMobile
                images={selectedSizeImagesUrls}
                title={title || ''}
                labels={labels}
              />
              <ProductCarousel
                className="block max-md:hidden"
                images={selectedSizeImagesUrls}
                title={title || ''}
                labels={labels}
              />
            </>
          )}

          <div className="flex max-w-144 flex-col text-lg leading-lg max-lg:max-w-full max-sm:text-base max-sm:leading-base">
            <div className="flex flex-col">
              {!!promotions.length && (
                <div className="flex flex-wrap gap-x-4 gap-y-3 pb-6 max-sm:gap-x-3">
                  {promotions.map((promo) => promo.productButtonText && <PromoTag text={promo.productButtonText} />)}
                </div>
              )}
              <h1 className="text-3xl font-medium leading-3xl max-sm:text-xl max-sm:leading-xl">{title}</h1>
              <p className="pt-3 text-textTertiary ">{weight} г</p>
              {/* <div className="flex items-start gap-1 pt-3 text-textTertiary max-lg:hidden"> not use right now, no data for this
                <FiInfo className="mt-0.5 min-w-4" />
                <p className="text-base leading-base">Итоговая стоимость торта зависит от веса и выбранной начинки</p>
              </div>
              <div className="flex items-start gap-1 text-textTertiary max-lg:hidden">
                <FiInfo className="mt-0.5 min-w-4" />
                <p className="text-base leading-base">
                  Заказной торт оформляется только по звонку оператору. Необходима предоплата.
                </p>
              </div> */}
            </div>
            {isSizeSelectorEnabled && (
              <div className="flex flex-col pt-4">
                <p className="text-lg font-medium leading-lg">Размер</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {sizes?.map((size) => (
                    <ProductModificator
                      key={size.id}
                      isSelected={activeSize?.id === size.id}
                      onClick={onSizeClick(size)}
                      title={size.size_name || ''}
                      price={size.price}
                    />
                  ))}
                </div>
              </div>
            )}
            {selectedSizeModifiers.map((group) => (
              <div className="flex flex-col pt-4" key={group.id}>
                <p className="text-lg font-medium leading-lg">{group.name}</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {group.modifiers.map((modifier) => (
                    <ProductModificator
                      key={modifier.id}
                      isSelected={getIsModifierSelected(group.id, modifier)}
                      onClick={onModifierClick(group.id, modifier)}
                      title={modifier.name}
                      price={modifier.price}
                    />
                  ))}
                </div>
              </div>
            ))}

            <p className="pt-8 text-3xl font-medium leading-3xl  max-sm:pt-6">
              {totalPrice} {CurrencySymbol.RUB}
            </p>
            <div className="flex gap-6 py-6 max-xs:grid max-xs:grid-cols-2">
              <StepperButton count={amount} setCount={setAmount} minValue={1} />
              <Button
                type="primary"
                className="w-max max-xs:w-full"
                onClick={onOrderButtonClick}
                loading={isOrderButtonLoading}
              >
                Заказать
              </Button>
            </div>

            {shortDescription && <TextBlock title="Описание" text={shortDescription} />}
            {ingredients && (
              <TextBlock
                title="Состав"
                text={ingredients}
                additionalText={allergens?.length ? <p>Продукт содержит аллергены: {allergens.join(', ')}</p> : null}
              />
            )}
            {nutritionFacts && (
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
            )}
            {optionalText.map((item, index) => (
              <TextBlock key={item.title + index} title={item.title} text={item.text} />
            ))}
            {description && <TextBlock title="Примечание" text={description} />}
          </div>
        </div>
      </div>
      {!!recomendatedProductsSlides.length && <ProductSlider title="Рекомендуем" slides={recomendatedProductsSlides} />}
    </>
  );
};

export default ProductPageContent;
