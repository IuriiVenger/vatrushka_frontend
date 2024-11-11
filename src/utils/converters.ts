import { API } from '@/api/types';
import { CategoryItemsConnectionType, TCard, TRecCategoryEdge } from '@/types';

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

export const convertCommonRecProductsToRecomendation = (
  commonRecProductsCollectionEdges: TRecCategoryEdge[],
): API.Products.Recomedation[] | undefined => {
  const newData = commonRecProductsCollectionEdges.reduce((acc: API.Products.Recomedation[], rec) => {
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
  }, []);

  return newData;
};
