import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories(
    $offset: Int!
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $filter: categoriesFilter
    $orderBy: [categoriesOrderBy!]
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

export const GET_PRODUCTS = gql`
  query GetProducts(
    $offset: Int!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $filter: productsFilter
    $orderBy: productsOrderBy
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
