/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { FC } from 'react';

import { ProductBySlugQuery, Productsizeimages, Productsizes } from '@/__generated__/graphql';
import { API } from '@/api/types';
import ProductPageContent, { ModifiersGroups, TProductProps } from '@/components/pageContents/ProductPageContent';
import { useAppDispatch } from '@/store';
import { addCartItem } from '@/store/slices/cart';

type ClientProductPageProps = {
  product: ProductBySlugQuery;
  sizesImages: Productsizeimages[];
  modifiersGrops: ModifiersGroups[];
};

const ClientProductPage: FC<ClientProductPageProps> = (props) => {
  const { product, sizesImages, modifiersGrops } = props;
  const dispatch = useAppDispatch();

  const currentProduct = product.productsCollection?.edges[0].node;

  const id = currentProduct?.id;
  const title = currentProduct?.name;
  const category = {
    name: currentProduct?.categoryitemsCollection?.edges[0].node.categories.name,
    slug: currentProduct?.categoryitemsCollection?.edges[0].node.categories.slug,
  };
  const description = currentProduct?.description;
  const sizes: Partial<Productsizes>[] | undefined = currentProduct?.productsizesCollection?.edges.map(
    (size) => size.node,
  );

  const allergens = currentProduct?.productallergensCollection?.edges.map(
    (allergen) => allergen.node.allergengroups?.name,
  );

  const filtredAllergens = (allergens?.filter((allergen) => !!allergen) as string[]) || [];

  const labels = currentProduct?.productlabelsCollection?.edges.map((label) => label.node) || [];
  // eslint-disable-next-line no-unused-vars
  const tags = currentProduct?.productTagsCollection?.edges; // dont forget to add to productInfo and remove eslint-disable

  const recommendedProducts: API.Products.Recomedation[] =
    currentProduct?.categoryitemsCollection?.edges[0].node.categories.rec_categoryCollection?.edges.reduce(
      (acc: API.Products.Recomedation[], rec) => {
        const productSizes = rec.node.products?.productsizesCollection?.edges || [];

        productSizes.forEach((item) => {
          if (item.node) {
            acc.push({
              button_image_url: item.node.button_image_url || '',
              nodeId: item.node.nodeId,
              price: item.node.price ? Number(item.node.price) : 0,
              name: item.node.products?.name || '',
              short_description: item.node.products?.short_description || '',
              slug: item.node.products?.slug || '',
              category: {
                name: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.name || '',
                slug: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.slug || '',
              },
            });
          }
        });
        return acc;
      },
      [],
    ) || [];

  const promotions =
    currentProduct?.productpromotionsCollection?.edges?.reduce((acc: API.Products.Promotion[], item) => {
      const promotion = item.node.promotions;
      if (promotion.productButtonText) {
        acc.push(promotion);
      }
      return acc;
    }, []) || [];

  const shortDescription = currentProduct?.short_description;
  const ingredients = currentProduct?.ingredients;
  const optionalText =
    currentProduct?.optional_text?.reduce((acc: API.Products.OptionalText[], item) => {
      if (!item) return acc;
      const parsedItem = JSON.parse(item) as API.Products.OptionalText;
      acc.push(parsedItem);

      return acc;
    }, []) || [];

  const productInfo: TProductProps['productInfo'] = {
    id,
    category,
    title,
    description,
    shortDescription,
    ingredients,
    sizesImages,
    allergens: filtredAllergens,
    labels,
    promotions,
    modifiers: modifiersGrops,
    sizes,
    optionalText,
    recommendedProducts,
  };

  const onOrder = (data: API.Cart.CartItem.Create.RequestItem[]) => {
    dispatch(addCartItem({ data }));
  };

  return <ProductPageContent productInfo={productInfo} onOrder={onOrder} />;
};

export default ClientProductPage;
