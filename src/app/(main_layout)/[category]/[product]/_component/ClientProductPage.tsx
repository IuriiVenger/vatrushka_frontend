/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { FC } from 'react';

import { ProductBySlugQuery, Productsizeimages, Productsizes } from '@/__generated__/graphql';
import { API } from '@/api/types';
import ProductPageContent, { ModifiersGroups, TProductProps } from '@/components/pageContents/ProductPageContent';
import useCart from '@/hooks/useCart';

type ClientProductPageProps = {
  product: ProductBySlugQuery;
  sizesImages: Productsizeimages[];
  modifiersGrops: ModifiersGroups[];
};

const ClientProductPage: FC<ClientProductPageProps> = (props) => {
  const { product, sizesImages, modifiersGrops } = props;
  const { addToCart } = useCart();

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
        const multiple_sizes = productSizes.length > 1;
        const defaultSize = multiple_sizes ? productSizes.find((item) => item.node.is_default) : productSizes[0];

        if (defaultSize) {
          acc.push({
            product_id: defaultSize.node.products?.id || '',
            button_image_url: defaultSize.node.button_image_url || '',
            size_id: defaultSize.node.id || '',
            multiple_sizes,
            nodeId: defaultSize.node.nodeId,
            price: defaultSize.node.price ? Number(defaultSize.node.price) : 0,
            name: defaultSize.node.products?.name || '',
            short_description: defaultSize.node.products?.short_description || '',
            slug: defaultSize.node.products?.slug || '',
            category: {
              name: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.name || '',
              slug: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.slug || '',
            },
          });
        }

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

  const onOrder = async (data: API.Cart.CartItem.Create.RequestItem[]) => {
    await addToCart(data);
  };

  return <ProductPageContent productInfo={productInfo} onOrder={onOrder} />;
};

export default ClientProductPage;
