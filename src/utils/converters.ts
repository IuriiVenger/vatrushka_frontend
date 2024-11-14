import { API } from '@/api/types';
import { CategoryItemsConnectionType, GroupedCartItem, TCard, TRecCategoryEdge } from '@/types';

export const convertCategoryItemsQueryProductsToCards = (categoryItems: CategoryItemsConnectionType): TCard[] =>
  categoryItems?.edges.map(({ node }) => {
    const defaultSize =
      node.products.productsizesCollection?.edges.find((product) => product.node.is_default) ||
      node.products.productsizesCollection?.edges[0];

    return {
      id: node.products.id,
      pic: defaultSize?.node.button_image_url || '',
      name: node.products.name,
      weight: defaultSize?.node.portion_weight_grams || 0,
      timing: undefined,
      description: node.products.short_description || node.products.description || '',
      price: defaultSize?.node.price || 0,
      inStock: true,
      href: `/${node.products.categoryitemsCollection?.edges[0].node.categories.slug}/${node.products.slug}`,
      quantity: 1,
    };
  }) || [];

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

export const getGroupedCartItems = (cartItems: API.Cart.CartItem.CartItem[]): GroupedCartItem[] => {
  const groupedItems = cartItems.reduce((acc: GroupedCartItem[], item) => {
    const existingProduct = acc.find(
      (product) =>
        product.product_id === item.product_id &&
        product.size_id === item.size_id &&
        product.modifiers.length === item.modifiers.length &&
        product.modifiers.every((mod, index) => mod.id === item.modifiers[index].id),
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.total_price += item.item_total;
      existingProduct.rawCartItems.push(item);
    } else {
      acc.push({
        ...item,
        quantity: 1,
        total_price: item.item_total,
        rawCartItems: [item],
        group_id: item.id + item.cart_id + item.product_id,
      });
    }

    return acc;
  }, []);

  return groupedItems;
};

export const convertGroupedCartItemsToCards = (groupedCartItems: GroupedCartItem[]): TCard[] =>
  groupedCartItems.map((item) => ({
    id: item.group_id,
    pic: item.size.button_image_url,
    name: item.product.name,
    price: item.total_price,
    quantity: item.quantity,
    inStock: true,
    href: '',
    description: item.modifiers.map((modifier) => modifier.name).join(', '),
    weight: item.size.portion_weight_grams,
  }));
