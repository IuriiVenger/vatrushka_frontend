import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories(
    $offset: Int!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $filter: CategoriesFilter
    $orderBy: CategoriesOrderBy
  ) {
    categoriesCollection(
      offset: $offset
      first: $first
      last: $last
      before: $before
      after: $after
      filter: $filter
      orderBy: $orderBy
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          name
          description
          button_image_url
          header_image_url
          isHidden
        }
      }
    }
  }
`;

export const GET_CATEGORY_ITEMS = gql`
  query GetCategoryItems(
    $categoryId: String!
    $offset: Int!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $filter: CategoryItemsFilter
    $orderBy: CategoryItemsOrderBy
  ) {
    categoryItemsCollection(
      categoryId: $categoryId
      offset: $offset
      first: $first
      last: $last
      before: $before
      after: $after
      filter: $filter
      orderBy: $orderBy
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          product_id
          id
          item_category_id
          products {
            name
            id
            description
            modifier_schema_id
            tax_category_id
            sku
            productsizesCollection {
              edges {
                node {
                  nodeId
                  id
                  product_id
                  size_code
                  size_name
                  sku
                  is_default
                  portion_weight_grams
                  nutrition_per_hundred_grams
                  button_image_url
                  button_image_cropped_url
                  nutritions
                  size_id
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts(
    $offset: Int!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $filter: ProductsFilter
    $orderBy: ProductsOrderBy
  ) {
    productsCollection(filter: $filter) {
      edges {
        node {
          description
          id
          modifier_schema_id
          name
          productCategoryId
          sku
          categoryitemsCollection {
            edges {
              node {
                categories {
                  name
                  id
                  description
                }
              }
            }
          }
          productallergensCollection {
            edges {
              node {
                allergen_group_id
                allergengroups {
                  name
                  id
                }
              }
            }
          }
          productsizesCollection {
            edges {
              node {
                nutrition_per_hundred_grams
                nutritions
                portion_weight_grams
                price
                size_name
                size_id
                size_code
                is_default
                id
              }
            }
          }
        }
      }
    }
  }
`;
