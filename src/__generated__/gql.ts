/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n          slug\n        }\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query GetProductsByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsByCategorySlugDocument,
    "\n  query GetRecomendedProductsByCategorySlug($filter: categoriesFilter) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetRecomendedProductsByCategorySlugDocument,
    "\n  query GetProductsAndRecommendedProductsByCategorySlug($filter: categoriesFilter, $offset: Int, $first: Int) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsAndRecommendedProductsByCategorySlugDocument,
    "\n  query ProductBySlug($filter: productsFilter, $productsizesCollectionFilter2: productsizesFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          ingredients\n          isPopular\n          name\n          optional_text\n          slug\n          short_description\n          id\n          nodeId\n          productsizesCollection {\n            edges {\n              node {\n                id\n                is_default\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                product_id\n                size_code\n                size_id\n                size_name\n                sku\n                button_image_url\n                nodeId\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n                tag_id\n                nodeId\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                name\n                id\n                slug\n                nodeId\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  id\n                  name\n                  description\n                  homepageBanner\n                  homepageEnabled\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  slug\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  rec_categoryCollection {\n                    edges {\n                      node {\n                        products {\n                          productsizesCollection {\n                            edges {\n                              node {\n                                price\n                                button_image_url\n                                nodeId\n                                products {\n                                  short_description\n                                  slug\n                                  name\n                                  nodeId\n                                }\n                              }\n                            }\n                          }\n                          nodeId\n                          categoryitemsCollection {\n                            edges {\n                              node {\n                                categories {\n                                  name\n                                  slug\n                                }\n                              }\n                            }\n                          }\n                        }\n                        nodeId\n                      }\n                    }\n                  }\n                  slug\n                }\n                nodeId\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  code\n                  name\n                  id\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          nodeId\n        }\n      }\n    }\n  }\n": types.ProductBySlugDocument,
    "\n  query GetProductSizeImages($filter: productsizeimagesFilter) {\n    productsizeimagesCollection(filter: $filter) {\n      edges {\n        node {\n          url\n          id\n          productsize_id\n          nodeId\n          is_video\n        }\n      }\n    }\n  }\n": types.GetProductSizeImagesDocument,
    "\n  query GetProductSizeModifiers($filter: productSizeModifierGroupsFilter) {\n    productSizeModifierGroupsCollection(filter: $filter) {\n      edges {\n        node {\n          by_default\n          can_be_divided\n          child_modifiers_have_min_max_restrictions\n          description\n          external_group_id\n          free_quantity\n          id\n          is_hidden\n          max_quantity\n          min_quantity\n          name\n          product_id\n          productsize_id\n          sku\n          productSizeModifiersCollection {\n            edges {\n              node {\n                button_image\n                by_default\n                description\n                external_modifier_group_id\n                external_modifier_id\n                free_quantity\n                group_id\n                id\n                is_hidden\n                max_quantity\n                min_quantity\n                name\n                nutrition_per_hundred_grams\n                portion_weight_grams\n                price\n                product_id\n                sku\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductSizeModifiersDocument,
    "\n  query GetAllPromotions($first: Int, $offset: Int) {\n    promotionsCollection(first: $first, offset: $offset) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        node {\n          description\n          homepageBanner\n          homepageEnabled\n          id\n          name\n          productButtonText\n          productButtonType\n          productPagesEnabled\n        }\n      }\n    }\n  }\n": types.GetAllPromotionsDocument,
    "\n  query GetPromotionById($filter: promotionsFilter) {\n    promotionsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          name\n          description\n          homepageBanner\n          productButtonText\n          productButtonType\n          homepageEnabled\n          productPagesEnabled\n        }\n      }\n    }\n  }\n": types.GetPromotionByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductsByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductsByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecomendedProductsByCategorySlug($filter: categoriesFilter) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecomendedProductsByCategorySlug($filter: categoriesFilter) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductsAndRecommendedProductsByCategorySlug($filter: categoriesFilter, $offset: Int, $first: Int) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductsAndRecommendedProductsByCategorySlug($filter: categoriesFilter, $offset: Int, $first: Int) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            edges {\n              node {\n                products {\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  ingredients\n                  id\n                  description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  productsizesCollection {\n                    edges {\n                      node {\n                        price\n                        button_image_url\n                        nodeId\n                        products {\n                          short_description\n                          slug\n                          name\n                          nodeId\n                        }\n                      }\n                    }\n                  }\n                  nodeId\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          name\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n                nodeId\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProductBySlug($filter: productsFilter, $productsizesCollectionFilter2: productsizesFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          ingredients\n          isPopular\n          name\n          optional_text\n          slug\n          short_description\n          id\n          nodeId\n          productsizesCollection {\n            edges {\n              node {\n                id\n                is_default\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                product_id\n                size_code\n                size_id\n                size_name\n                sku\n                button_image_url\n                nodeId\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n                tag_id\n                nodeId\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                name\n                id\n                slug\n                nodeId\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  id\n                  name\n                  description\n                  homepageBanner\n                  homepageEnabled\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  slug\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  rec_categoryCollection {\n                    edges {\n                      node {\n                        products {\n                          productsizesCollection {\n                            edges {\n                              node {\n                                price\n                                button_image_url\n                                nodeId\n                                products {\n                                  short_description\n                                  slug\n                                  name\n                                  nodeId\n                                }\n                              }\n                            }\n                          }\n                          nodeId\n                          categoryitemsCollection {\n                            edges {\n                              node {\n                                categories {\n                                  name\n                                  slug\n                                }\n                              }\n                            }\n                          }\n                        }\n                        nodeId\n                      }\n                    }\n                  }\n                  slug\n                }\n                nodeId\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  code\n                  name\n                  id\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          nodeId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductBySlug($filter: productsFilter, $productsizesCollectionFilter2: productsizesFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          ingredients\n          isPopular\n          name\n          optional_text\n          slug\n          short_description\n          id\n          nodeId\n          productsizesCollection {\n            edges {\n              node {\n                id\n                is_default\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                product_id\n                size_code\n                size_id\n                size_name\n                sku\n                button_image_url\n                nodeId\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n                tag_id\n                nodeId\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                name\n                id\n                slug\n                nodeId\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  id\n                  name\n                  description\n                  homepageBanner\n                  homepageEnabled\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  slug\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  rec_categoryCollection {\n                    edges {\n                      node {\n                        products {\n                          productsizesCollection {\n                            edges {\n                              node {\n                                price\n                                button_image_url\n                                nodeId\n                                products {\n                                  short_description\n                                  slug\n                                  name\n                                  nodeId\n                                }\n                              }\n                            }\n                          }\n                          nodeId\n                          categoryitemsCollection {\n                            edges {\n                              node {\n                                categories {\n                                  name\n                                  slug\n                                }\n                              }\n                            }\n                          }\n                        }\n                        nodeId\n                      }\n                    }\n                  }\n                  slug\n                }\n                nodeId\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  code\n                  name\n                  id\n                  nodeId\n                }\n                nodeId\n              }\n            }\n          }\n          nodeId\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductSizeImages($filter: productsizeimagesFilter) {\n    productsizeimagesCollection(filter: $filter) {\n      edges {\n        node {\n          url\n          id\n          productsize_id\n          nodeId\n          is_video\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductSizeImages($filter: productsizeimagesFilter) {\n    productsizeimagesCollection(filter: $filter) {\n      edges {\n        node {\n          url\n          id\n          productsize_id\n          nodeId\n          is_video\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductSizeModifiers($filter: productSizeModifierGroupsFilter) {\n    productSizeModifierGroupsCollection(filter: $filter) {\n      edges {\n        node {\n          by_default\n          can_be_divided\n          child_modifiers_have_min_max_restrictions\n          description\n          external_group_id\n          free_quantity\n          id\n          is_hidden\n          max_quantity\n          min_quantity\n          name\n          product_id\n          productsize_id\n          sku\n          productSizeModifiersCollection {\n            edges {\n              node {\n                button_image\n                by_default\n                description\n                external_modifier_group_id\n                external_modifier_id\n                free_quantity\n                group_id\n                id\n                is_hidden\n                max_quantity\n                min_quantity\n                name\n                nutrition_per_hundred_grams\n                portion_weight_grams\n                price\n                product_id\n                sku\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductSizeModifiers($filter: productSizeModifierGroupsFilter) {\n    productSizeModifierGroupsCollection(filter: $filter) {\n      edges {\n        node {\n          by_default\n          can_be_divided\n          child_modifiers_have_min_max_restrictions\n          description\n          external_group_id\n          free_quantity\n          id\n          is_hidden\n          max_quantity\n          min_quantity\n          name\n          product_id\n          productsize_id\n          sku\n          productSizeModifiersCollection {\n            edges {\n              node {\n                button_image\n                by_default\n                description\n                external_modifier_group_id\n                external_modifier_id\n                free_quantity\n                group_id\n                id\n                is_hidden\n                max_quantity\n                min_quantity\n                name\n                nutrition_per_hundred_grams\n                portion_weight_grams\n                price\n                product_id\n                sku\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPromotions($first: Int, $offset: Int) {\n    promotionsCollection(first: $first, offset: $offset) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        node {\n          description\n          homepageBanner\n          homepageEnabled\n          id\n          name\n          productButtonText\n          productButtonType\n          productPagesEnabled\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPromotions($first: Int, $offset: Int) {\n    promotionsCollection(first: $first, offset: $offset) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        node {\n          description\n          homepageBanner\n          homepageEnabled\n          id\n          name\n          productButtonText\n          productButtonType\n          productPagesEnabled\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPromotionById($filter: promotionsFilter) {\n    promotionsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          name\n          description\n          homepageBanner\n          productButtonText\n          productButtonType\n          homepageEnabled\n          productPagesEnabled\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPromotionById($filter: promotionsFilter) {\n    promotionsCollection(filter: $filter) {\n      edges {\n        node {\n          id\n          name\n          description\n          homepageBanner\n          productButtonText\n          productButtonType\n          homepageEnabled\n          productPagesEnabled\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;