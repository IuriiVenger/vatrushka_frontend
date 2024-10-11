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
  query GetProductsByCategorySlug(
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
                  slug
                  sku
                  short_description
                  optional_text
                  name
                  ingredients
                  id
                  description
                  productsizesCollection(filter: $productsizesCollectionFilter2) {
                    edges {
                      node {
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

export const GET_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG = gql`
  query GetRecomendedProductsByCategorySlug($filter: categoriesFilter) {
    categoriesCollection(filter: $filter) {
      edges {
        node {
          rec_categoryCollection {
            edges {
              node {
                products {
                  productsizesCollection {
                    edges {
                      node {
                        price
                        button_image_url
                        nodeId
                        products {
                          short_description
                          slug
                          name
                          nodeId
                        }
                      }
                    }
                  }
                  nodeId
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
                }
                nodeId
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_AND_RECOMMENDED_PRODUCTS_BY_CATEGORY_SLUG = gql`
  query GetProductsAndRecommendedProductsByCategorySlug($filter: categoriesFilter, $offset: Int, $first: Int) {
    categoriesCollection(filter: $filter) {
      edges {
        node {
          name
          slug
          header_image_url
          description
          categoryitemsCollection(offset: $offset, first: $first) {
            edges {
              node {
                products {
                  slug
                  sku
                  short_description
                  optional_text
                  name
                  ingredients
                  id
                  description
                  productsizesCollection {
                    edges {
                      node {
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
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
          rec_categoryCollection {
            edges {
              node {
                products {
                  productsizesCollection {
                    edges {
                      node {
                        price
                        button_image_url
                        nodeId
                        products {
                          short_description
                          slug
                          name
                          nodeId
                        }
                      }
                    }
                  }
                  nodeId
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
                }
                nodeId
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROUCT_BY_SLUG = gql`
  query ProductBySlug($filter: productsFilter, $productsizesCollectionFilter2: productsizesFilter) {
    productsCollection(filter: $filter) {
      edges {
        node {
          description
          ingredients
          isPopular
          name
          optional_text
          slug
          short_description
          id
          nodeId
          productsizesCollection {
            edges {
              node {
                id
                is_default
                nutrition_per_hundred_grams
                nutritions
                portion_weight_grams
                price
                product_id
                size_code
                size_id
                size_name
                sku
                button_image_url
                nodeId
              }
            }
          }
          productTagsCollection {
            edges {
              node {
                slug
                name
                id
                tag_id
                nodeId
              }
            }
          }
          productlabelsCollection {
            edges {
              node {
                name
                id
                slug
                nodeId
              }
            }
          }
          productpromotionsCollection {
            edges {
              node {
                promotions {
                  id
                  name
                  description
                  homepageBanner
                  homepageEnabled
                  productButtonText
                  productButtonType
                  productPagesEnabled
                  slug
                  nodeId
                }
                nodeId
              }
            }
          }
          sku
          categoryitemsCollection {
            edges {
              node {
                categories {
                  name
                  rec_categoryCollection {
                    edges {
                      node {
                        products {
                          productsizesCollection {
                            edges {
                              node {
                                price
                                button_image_url
                                nodeId
                                products {
                                  short_description
                                  slug
                                  name
                                  nodeId
                                }
                              }
                            }
                          }
                          nodeId
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
                        }
                        nodeId
                      }
                    }
                  }
                  slug
                }
                nodeId
              }
            }
          }
          productallergensCollection {
            edges {
              node {
                id
                allergen_group_id
                allergengroups {
                  code
                  name
                  id
                  nodeId
                }
                nodeId
              }
            }
          }
          nodeId
        }
      }
    }
  }
`;

// filter by product_id and productsize_id
export const GET_PRODUCT_SIZE_IMAGES = gql`
  query GetProductSizeImages($filter: productsizeimagesFilter) {
    productsizeimagesCollection(filter: $filter) {
      edges {
        node {
          url
          id
          productsize_id
          nodeId
          is_video
        }
      }
    }
  }
`;

// filter by product_id and productsize_id
export const GET_PRODUCT_SIZE_MODIFIERS = gql`
  query GetProductSizeModifiers($filter: productSizeModifierGroupsFilter) {
    productSizeModifierGroupsCollection(filter: $filter) {
      edges {
        node {
          by_default
          can_be_divided
          child_modifiers_have_min_max_restrictions
          description
          external_group_id
          free_quantity
          id
          is_hidden
          max_quantity
          min_quantity
          name
          product_id
          productsize_id
          sku
          productSizeModifiersCollection {
            edges {
              node {
                button_image
                by_default
                description
                external_modifier_group_id
                external_modifier_id
                free_quantity
                group_id
                id
                is_hidden
                max_quantity
                min_quantity
                name
                nutrition_per_hundred_grams
                portion_weight_grams
                price
                product_id
                sku
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
