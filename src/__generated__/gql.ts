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
    "\n  query ProductByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  tags2\n                  tags\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  labels\n                  ingredients\n                  images\n                  image_cropped\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_cropped_url\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ProductByCategorySlugDocument,
    "\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query ProductBySlug($filter: productsFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          nodeId\n          id\n          name\n          description\n          tax_category_id\n          modifier_schema_id\n          productCategoryId\n          sku\n          short_description\n          ingredients\n          optional_text\n          isPopular\n          slug\n          images\n          image_cropped\n          productsizesCollection {\n            edges {\n              node {\n                nodeId\n                id\n                product_id\n                size_code\n                size_name\n                sku\n                is_default\n                portion_weight_grams\n                nutrition_per_hundred_grams\n                button_image_url\n                button_image_cropped_url\n                nutritions\n                size_id\n                price\n                modifiers\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  id\n                  name\n                }\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  name\n                  id\n                }\n              }\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  description\n                  image_cropped\n                  images\n                  id\n                  ingredients\n                  labels\n                  name\n                  optional_text\n                  slug\n                  tags\n                  tags2\n                  short_description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        portion_weight_grams\n                        button_image_url\n                        button_image_cropped_url\n                        id\n                        price\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  slug\n                }\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                name\n                slug\n                tag_id\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ProductBySlugDocument,
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
export function graphql(source: "\n  query ProductByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  tags2\n                  tags\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  labels\n                  ingredients\n                  images\n                  image_cropped\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_cropped_url\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductByCategorySlug(\n    $filter: categoriesFilter\n    $offset: Int\n    $productsizesCollectionFilter2: productsizesFilter\n    $first: Int\n  ) {\n    categoriesCollection(filter: $filter) {\n      edges {\n        node {\n          name\n          slug\n          header_image_url\n          description\n          categoryitemsCollection(offset: $offset, first: $first) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                products {\n                  tags2\n                  tags\n                  slug\n                  sku\n                  short_description\n                  optional_text\n                  name\n                  labels\n                  ingredients\n                  images\n                  image_cropped\n                  id\n                  description\n                  productsizesCollection(filter: $productsizesCollectionFilter2) {\n                    edges {\n                      node {\n                        button_image_cropped_url\n                        button_image_url\n                        is_default\n                        id\n                        portion_weight_grams\n                        price\n                        size_code\n                        size_id\n                        size_name\n                        sku\n                      }\n                    }\n                  }\n                  categoryitemsCollection {\n                    edges {\n                      node {\n                        categories {\n                          slug\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProductBySlug($filter: productsFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          nodeId\n          id\n          name\n          description\n          tax_category_id\n          modifier_schema_id\n          productCategoryId\n          sku\n          short_description\n          ingredients\n          optional_text\n          isPopular\n          slug\n          images\n          image_cropped\n          productsizesCollection {\n            edges {\n              node {\n                nodeId\n                id\n                product_id\n                size_code\n                size_name\n                sku\n                is_default\n                portion_weight_grams\n                nutrition_per_hundred_grams\n                button_image_url\n                button_image_cropped_url\n                nutritions\n                size_id\n                price\n                modifiers\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  id\n                  name\n                }\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  name\n                  id\n                }\n              }\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  description\n                  image_cropped\n                  images\n                  id\n                  ingredients\n                  labels\n                  name\n                  optional_text\n                  slug\n                  tags\n                  tags2\n                  short_description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        portion_weight_grams\n                        button_image_url\n                        button_image_cropped_url\n                        id\n                        price\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  slug\n                }\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                name\n                slug\n                tag_id\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductBySlug($filter: productsFilter) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          nodeId\n          id\n          name\n          description\n          tax_category_id\n          modifier_schema_id\n          productCategoryId\n          sku\n          short_description\n          ingredients\n          optional_text\n          isPopular\n          slug\n          images\n          image_cropped\n          productsizesCollection {\n            edges {\n              node {\n                nodeId\n                id\n                product_id\n                size_code\n                size_name\n                sku\n                is_default\n                portion_weight_grams\n                nutrition_per_hundred_grams\n                button_image_url\n                button_image_cropped_url\n                nutritions\n                size_id\n                price\n                modifiers\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                id\n                allergen_group_id\n                allergengroups {\n                  id\n                  name\n                }\n              }\n            }\n          }\n          productpromotionsCollection {\n            edges {\n              node {\n                promotions {\n                  productButtonText\n                  productButtonType\n                  productPagesEnabled\n                  name\n                  id\n                }\n              }\n            }\n          }\n          rec_categoryCollection {\n            edges {\n              node {\n                products {\n                  description\n                  image_cropped\n                  images\n                  id\n                  ingredients\n                  labels\n                  name\n                  optional_text\n                  slug\n                  tags\n                  tags2\n                  short_description\n                  productsizesCollection {\n                    edges {\n                      node {\n                        portion_weight_grams\n                        button_image_url\n                        button_image_cropped_url\n                        id\n                        price\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  slug\n                }\n              }\n            }\n          }\n          productTagsCollection {\n            edges {\n              node {\n                name\n                slug\n                tag_id\n              }\n            }\n          }\n          productlabelsCollection {\n            edges {\n              node {\n                slug\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;