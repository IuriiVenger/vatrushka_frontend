import { FC } from 'react';

import { ProductBySlugQuery } from '@/__generated__/graphql';
import ProductPageContent, { TProductProps } from '@/components/pageContents/ProductPageContent';

type ClientProductPageProps = {
  product: ProductBySlugQuery;
};

const ClientProductPage: FC<ClientProductPageProps> = (props) => {
  const { product } = props;

  const id = product.productsCollection?.edges[0].node.id;
  const title = product.productsCollection?.edges[0].node.name;
  const description = product.productsCollection?.edges[0].node.description;
  const price = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.price;
  const weight = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.portion_weight_grams;

  const mainImage = product.productsCollection?.edges[0].node.productsizesCollection?.edges.find(
    (size) => size.node.is_default,
  )?.node.button_image_url;
  const productImages = product.productsCollection?.edges[0].node.images;
  const additionalImages = productImages ? (productImages.filter(Boolean) as string[]) : [];

  const images = mainImage ? [mainImage, ...additionalImages] : additionalImages;

  const nonParsedNutritionFacts =
    product.productsCollection?.edges[0].node.productsizesCollection?.edges[0].node.nutrition_per_hundred_grams;

  const nutritionFacts = nonParsedNutritionFacts && JSON.parse(nonParsedNutritionFacts);

  const allergens = product.productsCollection?.edges[0].node.productallergensCollection?.edges.map(
    (allergen) => allergen.node.allergengroups?.name,
  );

  const filtredAllergens = allergens && (allergens.filter((allergen) => !!allergen) as string[]);

  const labels = product.productsCollection?.edges[0].node.productlabelsCollection?.edges.map((label) => label.node);
  const tags = product.productsCollection?.edges[0].node.productTagsCollection?.edges;

  const productInfo: TProductProps['productInfo'] = {
    id,
    title,
    description,
    price,
    images,
    nutritionFacts,
    allergens: filtredAllergens,
    weight,
    labels,
  };

  return <ProductPageContent productInfo={productInfo} />;
};

export default ClientProductPage;
