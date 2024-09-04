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
    "\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n        }\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
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
export function graphql(source: "\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCategories(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: Cursor\n    $after: Cursor\n    $filter: categoriesFilter\n    $orderBy: [categoriesOrderBy!]\n  ) {\n    categoriesCollection(\n      offset: $offset\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      filter: $filter\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          id\n          name\n          description\n          button_image_url\n          header_image_url\n          isHidden\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts(\n    $offset: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n    $filter: productsFilter\n    $orderBy: productsOrderBy\n  ) {\n    productsCollection(filter: $filter) {\n      edges {\n        node {\n          description\n          id\n          modifier_schema_id\n          name\n          productCategoryId\n          sku\n          categoryitemsCollection {\n            edges {\n              node {\n                categories {\n                  name\n                  id\n                  description\n                }\n              }\n            }\n          }\n          productallergensCollection {\n            edges {\n              node {\n                allergen_group_id\n                allergengroups {\n                  name\n                  id\n                }\n              }\n            }\n          }\n          productsizesCollection {\n            edges {\n              node {\n                nutrition_per_hundred_grams\n                nutritions\n                portion_weight_grams\n                price\n                size_name\n                size_id\n                size_code\n                is_default\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;