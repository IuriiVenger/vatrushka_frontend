import { API } from '@/api/types';
import { CategoryItemsConnectionType, TCard } from '@/types';

export const convertCategoryItemsQueryProductsToCards = (categoryItems: CategoryItemsConnectionType): TCard[] =>
  categoryItems?.edges.map(({ node }) => ({
    id: node.products.id,
    pic:
      node.products.productsizesCollection?.edges.find((product) => product.node.is_default)?.node.button_image_url ||
      '',
    name: node.products.name,
    weight:
      node.products.productsizesCollection?.edges.find((product) => product.node.is_default)?.node
        .portion_weight_grams || 0,
    timing: undefined,
    description: node.products.short_description || node.products.description || '',
    price: node.products.productsizesCollection?.edges.find((product) => product.node.is_default)?.node.price || 0,
    inStock: true,
    href: `/${node.products.categoryitemsCollection?.edges[0].node.categories.slug}/${node.products.slug}`,
    quantity: 1,
  })) || [];

export const conertCategoryRecommendedProductsToCards = (
  categoryRecommendedProducts: API.Products.Recomedation[],
): TCard[] =>
  categoryRecommendedProducts.map((product) => ({
    id: product.nodeId,
    pic: product.button_image_url,
    name: product.name,
    description: product.short_description || '',
    price: product.price || 0,
    // fix type TCard
    quantity: 1,
    // fix inStock after adding it to the API
    inStock: true,
    href: `/${product.category.slug}/${product.slug}`,
  }));
