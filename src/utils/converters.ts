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
  })) || [];
