import { address as addressApi } from '@/api/address';
import { API } from '@/api/types';
import { CategoryItemsConnectionType, GroupedCartItem, TAddressForm, TCard, TRecCategoryEdge } from '@/types';

export const convertCategoryItemsQueryProductsToCards = (categoryItems: CategoryItemsConnectionType): TCard[] =>
  categoryItems?.edges.map(({ node }) => {
    const defaultSize =
      node.products.productsizesCollection?.edges.find((product) => product.node.is_default) ||
      node.products.productsizesCollection?.edges[0];

    const sizesCount = node.products.productsizesCollection?.edges.length;

    const buttonType = !!sizesCount && sizesCount > 1 ? 'link' : 'button';

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
      buttonType,
      sizeId: defaultSize?.node.id || null,
      productId: node.products.id,
    };
  }) || [];

export const conertCategoryRecommendedProductsToCards = (
  categoryRecommendedProducts: API.Products.Recomedation[],
): TCard[] =>
  categoryRecommendedProducts.map((product) => ({
    id: product.product_id,
    pic: product.button_image_url,
    name: product.name,
    description: product.short_description || '',
    price: product.price || 0,
    // fix type TCard
    quantity: 1,
    // fix inStock after adding it to the API
    buttonType: product.multiple_sizes ? 'link' : 'button',
    inStock: true,
    href: `/${product.category.slug}/${product.slug}`,
    sizeId: product.size_id,
    productId: product.product_id,
  }));

export const convertCommonRecProductsToRecomendation = (
  commonRecProductsCollectionEdges: TRecCategoryEdge[],
): API.Products.Recomedation[] | undefined => {
  const newData = commonRecProductsCollectionEdges.reduce((acc: API.Products.Recomedation[], rec) => {
    const productSizes = rec.node.products?.productsizesCollection?.edges || [];
    const multiple_sizes = productSizes.length > 1;
    const defaultSize = multiple_sizes ? productSizes.find((item) => item.node.is_default) : productSizes[0];

    acc.push({
      button_image_url: defaultSize?.node.button_image_url || '',
      size_id: defaultSize?.node.id || '',
      multiple_sizes,
      nodeId: defaultSize?.node.nodeId || '',
      product_id: rec.node.products?.productsizesCollection?.edges[0].node.products?.id || '',
      price: defaultSize?.node.price ? Number(defaultSize.node.price) : 0,
      name: defaultSize?.node.products?.name || '',
      short_description: defaultSize?.node.products?.short_description || '',
      slug: defaultSize?.node.products?.slug || '',
      category: {
        name: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.name || '',
        slug: rec.node.products?.categoryitemsCollection?.edges[0]?.node.categories.slug || '',
      },
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
    buttonType: 'button',
    name: item.product.name,
    price: item.total_price,
    quantity: item.quantity,
    inStock: true,
    href: '',
    description: item.modifiers.map((modifier) => modifier.name).join(', '),
    weight: item.size.portion_weight_grams,
    sizeId: item.size.size_id,
    productId: item.product.id,
  }));

export const convertDadataAddressToAddress = (
  dadataAddress: API.Dadata.Address,
): API.Address.Update.Request | API.Address.Create.Request => {
  const place: API.Address.Update.Request | API.Address.Create.Request = {
    city: null,
    street_name: null,
    street_classifier_id: null,
    house: null,
    building: null,
    flat: null,
    zip_code: dadataAddress.postal_code,
    latitude: +dadataAddress.geo_lat,
    longitude: +dadataAddress.geo_lon,
    country: dadataAddress.country,
    entrance: null,
    floor: null,
  };

  if (dadataAddress.city) {
    place.city = `${dadataAddress.city_type} ${dadataAddress.city}`;
  } else if (dadataAddress.settlement_with_type) {
    place.city = dadataAddress.settlement_with_type;
  } else if (dadataAddress.region_type_full === 'город') {
    place.city = dadataAddress.region_with_type;
  }

  if (dadataAddress.street) {
    place.street_name = dadataAddress.street_with_type;
    place.street_classifier_id = dadataAddress.street_kladr_id;
  } else if (dadataAddress.city && dadataAddress.settlement_with_type) {
    place.street_name = dadataAddress.settlement_with_type;
    place.street_classifier_id = dadataAddress.settlement_kladr_id;
  }

  if (dadataAddress.house) {
    place.house = `${dadataAddress.house_type} ${dadataAddress.house}`;
  }

  if (dadataAddress.block) {
    place.building = `${dadataAddress.block_type} ${dadataAddress.block}`;
  }

  if (dadataAddress.flat) {
    place.flat = `${dadataAddress.flat_type} ${dadataAddress.flat}`;
  }

  return place;
};

export const convertAddressFormDataToAddress = async (
  formData: TAddressForm,
): Promise<API.Address.Update.Request | API.Address.Create.Request> => {
  if (!formData.cityStreetBuildingFlat) {
    return {
      city: null,
      street_name: null,
      street_classifier_id: null,
      house: null,
      building: null,
      flat: null,
      zip_code: null,
      latitude: null,
      longitude: null,
      country: null,
      entrance: null,
      floor: null,
    };
  }

  const { data } = await addressApi.suggestions(formData.cityStreetBuildingFlat);

  const convertedFormData = convertDadataAddressToAddress(data.suggestions[0]?.data);

  return { ...convertedFormData, doorphone: formData.doorphone, entrance: formData.entrance, floor: formData.floor };
};

export const convertAddressToCityStreetBuildingFlat = (address: Partial<API.Address.Address>): string => {
  const addressParts = [address.city, address.street_name, address.house, address.building, address.flat];
  const validAddressParts = addressParts.filter(Boolean);
  const fullAddress = validAddressParts.join(', ');

  return fullAddress;
};

export const convertAddressToAddressFormData = (address: Partial<API.Address.Address>): TAddressForm => {
  const cityStreetBuildingFlat = convertAddressToCityStreetBuildingFlat(address);

  return {
    cityStreetBuildingFlat,
    doorphone: address.doorphone || '',
    entrance: address.entrance || '',
    floor: address.floor || '',
  };
};
