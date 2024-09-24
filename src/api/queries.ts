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
          slug
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY_SLUG = gql`
  query ProductByCategorySlug(
    $filter: categoriesFilter
    $offset: Int
    $productsizesCollectionFilter2: productsizesFilter
    $first: Int
  ) {
    categoriesCollection(filter: $filter) {
      edges {
        node {
          name
          slug
          header_image_url
          description
          categoryitemsCollection(offset: $offset, first: $first) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                products {
                  tags2
                  tags
                  slug
                  sku
                  short_description
                  optional_text
                  name
                  labels
                  ingredients
                  images
                  image_cropped
                  id
                  description
                  productsizesCollection(filter: $productsizesCollectionFilter2) {
                    edges {
                      node {
                        button_image_cropped_url
                        button_image_url
                        is_default
                        id
                        portion_weight_grams
                        price
                        size_code
                        size_id
                        size_name
                        sku
                      }
                    }
                  }
                  categoryitemsCollection {
                    edges {
                      node {
                        categories {
                          slug
                        }
                      }
                    }
                  }
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

export const GET_PROUCT_BY_SLUG = gql`
  query ProductBySlug($filter: productsFilter) {
    productsCollection(filter: $filter) {
      edges {
        node {
          nodeId
          id
          name
          description
          tax_category_id
          modifier_schema_id
          productCategoryId
          sku
          short_description
          ingredients
          optional_text
          isPopular
          slug
          images
          image_cropped
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
                modifiers
              }
            }
          }
          productallergensCollection {
            edges {
              node {
                id
                allergen_group_id
                allergengroups {
                  id
                  name
                }
              }
            }
          }
          productpromotionsCollection {
            edges {
              node {
                promotions {
                  productButtonText
                  productButtonType
                  productPagesEnabled
                  name
                  id
                }
              }
            }
          }
          rec_categoryCollection {
            edges {
              node {
                products {
                  description
                  image_cropped
                  images
                  id
                  ingredients
                  labels
                  name
                  optional_text
                  slug
                  tags
                  tags2
                  short_description
                  productsizesCollection {
                    edges {
                      node {
                        portion_weight_grams
                        button_image_url
                        button_image_cropped_url
                        id
                        price
                      }
                    }
                  }
                }
              }
            }
          }
          categoryitemsCollection {
            edges {
              node {
                categories {
                  name
                  slug
                }
              }
            }
          }
          productTagsCollection {
            edges {
              node {
                name
                slug
                tag_id
              }
            }
          }
          productlabelsCollection {
            edges {
              node {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PROMOTIONS = gql`
  query GetAllPromotions($first: Int, $offset: Int) {
    promotionsCollection(first: $first, offset: $offset) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          description
          homepageBanner
          homepageEnabled
          id
          name
          productButtonText
          productButtonType
          productPagesEnabled
        }
      }
    }
  }
`;

export const GET_PROMOTION_BY_ID = gql`
  query GetPromotionById($filter: promotionsFilter) {
    promotionsCollection(filter: $filter) {
      edges {
        node {
          id
          name
          description
          homepageBanner
          productButtonText
          productButtonType
          homepageEnabled
          productPagesEnabled
        }
      }
    }
  }
`;
