/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `allergengroups` collection */
  deleteFromallergengroupsCollection: AllergengroupsDeleteResponse;
  /** Deletes zero or more records from the `categories` collection */
  deleteFromcategoriesCollection: CategoriesDeleteResponse;
  /** Deletes zero or more records from the `categoryitems` collection */
  deleteFromcategoryitemsCollection: CategoryitemsDeleteResponse;
  /** Deletes zero or more records from the `itemmodifiergroups` collection */
  deleteFromitemmodifiergroupsCollection: ItemmodifiergroupsDeleteResponse;
  /** Deletes zero or more records from the `modifierallergens` collection */
  deleteFrommodifierallergensCollection: ModifierallergensDeleteResponse;
  /** Deletes zero or more records from the `modifiers` collection */
  deleteFrommodifiersCollection: ModifiersDeleteResponse;
  /** Deletes zero or more records from the `productallergens` collection */
  deleteFromproductallergensCollection: ProductallergensDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `productsizes` collection */
  deleteFromproductsizesCollection: ProductsizesDeleteResponse;
  /** Adds one or more `allergengroups` records to the collection */
  insertIntoallergengroupsCollection?: Maybe<AllergengroupsInsertResponse>;
  /** Adds one or more `categories` records to the collection */
  insertIntocategoriesCollection?: Maybe<CategoriesInsertResponse>;
  /** Adds one or more `categoryitems` records to the collection */
  insertIntocategoryitemsCollection?: Maybe<CategoryitemsInsertResponse>;
  /** Adds one or more `itemmodifiergroups` records to the collection */
  insertIntoitemmodifiergroupsCollection?: Maybe<ItemmodifiergroupsInsertResponse>;
  /** Adds one or more `modifierallergens` records to the collection */
  insertIntomodifierallergensCollection?: Maybe<ModifierallergensInsertResponse>;
  /** Adds one or more `modifiers` records to the collection */
  insertIntomodifiersCollection?: Maybe<ModifiersInsertResponse>;
  /** Adds one or more `productallergens` records to the collection */
  insertIntoproductallergensCollection?: Maybe<ProductallergensInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `productsizes` records to the collection */
  insertIntoproductsizesCollection?: Maybe<ProductsizesInsertResponse>;
  /** Updates zero or more records in the `allergengroups` collection */
  updateallergengroupsCollection: AllergengroupsUpdateResponse;
  /** Updates zero or more records in the `categories` collection */
  updatecategoriesCollection: CategoriesUpdateResponse;
  /** Updates zero or more records in the `categoryitems` collection */
  updatecategoryitemsCollection: CategoryitemsUpdateResponse;
  /** Updates zero or more records in the `itemmodifiergroups` collection */
  updateitemmodifiergroupsCollection: ItemmodifiergroupsUpdateResponse;
  /** Updates zero or more records in the `modifierallergens` collection */
  updatemodifierallergensCollection: ModifierallergensUpdateResponse;
  /** Updates zero or more records in the `modifiers` collection */
  updatemodifiersCollection: ModifiersUpdateResponse;
  /** Updates zero or more records in the `productallergens` collection */
  updateproductallergensCollection: ProductallergensUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `productsizes` collection */
  updateproductsizesCollection: ProductsizesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromallergengroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AllergengroupsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcategoryitemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoryitemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromitemmodifiergroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ItemmodifiergroupsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommodifierallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ModifierallergensFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommodifiersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ModifiersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductallergensFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductsizesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsizesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoallergengroupsCollectionArgs = {
  objects: Array<AllergengroupsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocategoriesCollectionArgs = {
  objects: Array<CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocategoryitemsCollectionArgs = {
  objects: Array<CategoryitemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoitemmodifiergroupsCollectionArgs = {
  objects: Array<ItemmodifiergroupsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomodifierallergensCollectionArgs = {
  objects: Array<ModifierallergensInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomodifiersCollectionArgs = {
  objects: Array<ModifiersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductallergensCollectionArgs = {
  objects: Array<ProductallergensInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductsCollectionArgs = {
  objects: Array<ProductsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductsizesCollectionArgs = {
  objects: Array<ProductsizesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateallergengroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AllergengroupsFilter>;
  set: AllergengroupsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoriesFilter>;
  set: CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecategoryitemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoryitemsFilter>;
  set: CategoryitemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateitemmodifiergroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ItemmodifiergroupsFilter>;
  set: ItemmodifiergroupsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemodifierallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ModifierallergensFilter>;
  set: ModifierallergensUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemodifiersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ModifiersFilter>;
  set: ModifiersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductallergensFilter>;
  set: ProductallergensUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
  set: ProductsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductsizesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsizesFilter>;
  set: ProductsizesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `allergengroups` */
  allergengroupsCollection?: Maybe<AllergengroupsConnection>;
  /** A pagable collection of type `categories` */
  categoriesCollection?: Maybe<CategoriesConnection>;
  /** A pagable collection of type `categoryitems` */
  categoryitemsCollection?: Maybe<CategoryitemsConnection>;
  /** A pagable collection of type `itemmodifiergroups` */
  itemmodifiergroupsCollection?: Maybe<ItemmodifiergroupsConnection>;
  /** A pagable collection of type `modifierallergens` */
  modifierallergensCollection?: Maybe<ModifierallergensConnection>;
  /** A pagable collection of type `modifiers` */
  modifiersCollection?: Maybe<ModifiersConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `productallergens` */
  productallergensCollection?: Maybe<ProductallergensConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `productsizes` */
  productsizesCollection?: Maybe<ProductsizesConnection>;
};


/** The root type for querying data */
export type QueryAllergengroupsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AllergengroupsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AllergengroupsOrderBy>>;
};


/** The root type for querying data */
export type QueryCategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryCategoryitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoryitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryitemsOrderBy>>;
};


/** The root type for querying data */
export type QueryItemmodifiergroupsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ItemmodifiergroupsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemmodifiergroupsOrderBy>>;
};


/** The root type for querying data */
export type QueryModifierallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ModifierallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ModifierallergensOrderBy>>;
};


/** The root type for querying data */
export type QueryModifiersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ModifiersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ModifiersOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProductallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductallergensOrderBy>>;
};


/** The root type for querying data */
export type QueryProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root type for querying data */
export type QueryProductsizesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsizesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsizesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Allergengroups = Node & {
  __typename?: 'allergengroups';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  modifierallergensCollection?: Maybe<ModifierallergensConnection>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  productallergensCollection?: Maybe<ProductallergensConnection>;
};


export type AllergengroupsModifierallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ModifierallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ModifierallergensOrderBy>>;
};


export type AllergengroupsProductallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductallergensOrderBy>>;
};

export type AllergengroupsConnection = {
  __typename?: 'allergengroupsConnection';
  edges: Array<AllergengroupsEdge>;
  pageInfo: PageInfo;
};

export type AllergengroupsDeleteResponse = {
  __typename?: 'allergengroupsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Allergengroups>;
};

export type AllergengroupsEdge = {
  __typename?: 'allergengroupsEdge';
  cursor: Scalars['String']['output'];
  node: Allergengroups;
};

export type AllergengroupsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AllergengroupsFilter>>;
  code?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AllergengroupsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AllergengroupsFilter>>;
};

export type AllergengroupsInsertInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AllergengroupsInsertResponse = {
  __typename?: 'allergengroupsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Allergengroups>;
};

export type AllergengroupsOrderBy = {
  code?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type AllergengroupsUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AllergengroupsUpdateResponse = {
  __typename?: 'allergengroupsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Allergengroups>;
};

export type Categories = Node & {
  __typename?: 'categories';
  button_image_url?: Maybe<Scalars['String']['output']>;
  categoryitemsCollection?: Maybe<CategoryitemsConnection>;
  description?: Maybe<Scalars['String']['output']>;
  header_image_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};


export type CategoriesCategoryitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoryitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryitemsOrderBy>>;
};

export type CategoriesConnection = {
  __typename?: 'categoriesConnection';
  edges: Array<CategoriesEdge>;
  pageInfo: PageInfo;
};

export type CategoriesDeleteResponse = {
  __typename?: 'categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type CategoriesEdge = {
  __typename?: 'categoriesEdge';
  cursor: Scalars['String']['output'];
  node: Categories;
};

export type CategoriesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CategoriesFilter>>;
  button_image_url?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  header_image_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  isHidden?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CategoriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CategoriesFilter>>;
};

export type CategoriesInsertInput = {
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoriesInsertResponse = {
  __typename?: 'categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type CategoriesOrderBy = {
  button_image_url?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  header_image_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isHidden?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type CategoriesUpdateInput = {
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoriesUpdateResponse = {
  __typename?: 'categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type Categoryitems = Node & {
  __typename?: 'categoryitems';
  categories: Categories;
  id: Scalars['Int']['output'];
  item_category_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products: Products;
};

export type CategoryitemsConnection = {
  __typename?: 'categoryitemsConnection';
  edges: Array<CategoryitemsEdge>;
  pageInfo: PageInfo;
};

export type CategoryitemsDeleteResponse = {
  __typename?: 'categoryitemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categoryitems>;
};

export type CategoryitemsEdge = {
  __typename?: 'categoryitemsEdge';
  cursor: Scalars['String']['output'];
  node: Categoryitems;
};

export type CategoryitemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CategoryitemsFilter>>;
  id?: InputMaybe<IntFilter>;
  item_category_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CategoryitemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CategoryitemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
};

export type CategoryitemsInsertInput = {
  item_category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CategoryitemsInsertResponse = {
  __typename?: 'categoryitemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categoryitems>;
};

export type CategoryitemsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  item_category_id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
};

export type CategoryitemsUpdateInput = {
  item_category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CategoryitemsUpdateResponse = {
  __typename?: 'categoryitemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categoryitems>;
};

export type Itemmodifiergroups = Node & {
  __typename?: 'itemmodifiergroups';
  by_default?: Maybe<Scalars['Int']['output']>;
  can_be_divided?: Maybe<Scalars['Boolean']['output']>;
  child_modifiers_have_min_max_restrictions?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  free_quantity?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  item_group_id?: Maybe<Scalars['UUID']['output']>;
  max_quantity?: Maybe<Scalars['Int']['output']>;
  min_quantity?: Maybe<Scalars['Int']['output']>;
  modifiersCollection?: Maybe<ModifiersConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  sku?: Maybe<Scalars['String']['output']>;
};


export type ItemmodifiergroupsModifiersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ModifiersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ModifiersOrderBy>>;
};

export type ItemmodifiergroupsConnection = {
  __typename?: 'itemmodifiergroupsConnection';
  edges: Array<ItemmodifiergroupsEdge>;
  pageInfo: PageInfo;
};

export type ItemmodifiergroupsDeleteResponse = {
  __typename?: 'itemmodifiergroupsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Itemmodifiergroups>;
};

export type ItemmodifiergroupsEdge = {
  __typename?: 'itemmodifiergroupsEdge';
  cursor: Scalars['String']['output'];
  node: Itemmodifiergroups;
};

export type ItemmodifiergroupsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ItemmodifiergroupsFilter>>;
  by_default?: InputMaybe<IntFilter>;
  can_be_divided?: InputMaybe<BooleanFilter>;
  child_modifiers_have_min_max_restrictions?: InputMaybe<BooleanFilter>;
  description?: InputMaybe<StringFilter>;
  free_quantity?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  item_group_id?: InputMaybe<UuidFilter>;
  max_quantity?: InputMaybe<IntFilter>;
  min_quantity?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ItemmodifiergroupsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ItemmodifiergroupsFilter>>;
  sku?: InputMaybe<StringFilter>;
};

export type ItemmodifiergroupsInsertInput = {
  by_default?: InputMaybe<Scalars['Int']['input']>;
  can_be_divided?: InputMaybe<Scalars['Boolean']['input']>;
  child_modifiers_have_min_max_restrictions?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  free_quantity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  item_group_id?: InputMaybe<Scalars['UUID']['input']>;
  max_quantity?: InputMaybe<Scalars['Int']['input']>;
  min_quantity?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ItemmodifiergroupsInsertResponse = {
  __typename?: 'itemmodifiergroupsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Itemmodifiergroups>;
};

export type ItemmodifiergroupsOrderBy = {
  by_default?: InputMaybe<OrderByDirection>;
  can_be_divided?: InputMaybe<OrderByDirection>;
  child_modifiers_have_min_max_restrictions?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  free_quantity?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  item_group_id?: InputMaybe<OrderByDirection>;
  max_quantity?: InputMaybe<OrderByDirection>;
  min_quantity?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
};

export type ItemmodifiergroupsUpdateInput = {
  by_default?: InputMaybe<Scalars['Int']['input']>;
  can_be_divided?: InputMaybe<Scalars['Boolean']['input']>;
  child_modifiers_have_min_max_restrictions?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  free_quantity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  item_group_id?: InputMaybe<Scalars['UUID']['input']>;
  max_quantity?: InputMaybe<Scalars['Int']['input']>;
  min_quantity?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ItemmodifiergroupsUpdateResponse = {
  __typename?: 'itemmodifiergroupsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Itemmodifiergroups>;
};

export type Modifierallergens = Node & {
  __typename?: 'modifierallergens';
  allergen_group_id?: Maybe<Scalars['UUID']['output']>;
  allergengroups?: Maybe<Allergengroups>;
  id: Scalars['UUID']['output'];
  modifier_id?: Maybe<Scalars['UUID']['output']>;
  modifiers?: Maybe<Modifiers>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type ModifierallergensConnection = {
  __typename?: 'modifierallergensConnection';
  edges: Array<ModifierallergensEdge>;
  pageInfo: PageInfo;
};

export type ModifierallergensDeleteResponse = {
  __typename?: 'modifierallergensDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifierallergens>;
};

export type ModifierallergensEdge = {
  __typename?: 'modifierallergensEdge';
  cursor: Scalars['String']['output'];
  node: Modifierallergens;
};

export type ModifierallergensFilter = {
  allergen_group_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ModifierallergensFilter>>;
  id?: InputMaybe<UuidFilter>;
  modifier_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ModifierallergensFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ModifierallergensFilter>>;
};

export type ModifierallergensInsertInput = {
  allergen_group_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modifier_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ModifierallergensInsertResponse = {
  __typename?: 'modifierallergensInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifierallergens>;
};

export type ModifierallergensOrderBy = {
  allergen_group_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  modifier_id?: InputMaybe<OrderByDirection>;
};

export type ModifierallergensUpdateInput = {
  allergen_group_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modifier_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ModifierallergensUpdateResponse = {
  __typename?: 'modifierallergensUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifierallergens>;
};

export type Modifiers = Node & {
  __typename?: 'modifiers';
  button_image?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  item_modifier_group_id?: Maybe<Scalars['UUID']['output']>;
  itemmodifiergroups?: Maybe<Itemmodifiergroups>;
  modifierallergensCollection?: Maybe<ModifierallergensConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  nutrition_per_hundred_grams?: Maybe<Scalars['JSON']['output']>;
  portion_weight_grams?: Maybe<Scalars['BigFloat']['output']>;
  price?: Maybe<Scalars['BigFloat']['output']>;
  restrictions?: Maybe<Scalars['JSON']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};


export type ModifiersModifierallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ModifierallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ModifierallergensOrderBy>>;
};

export type ModifiersConnection = {
  __typename?: 'modifiersConnection';
  edges: Array<ModifiersEdge>;
  pageInfo: PageInfo;
};

export type ModifiersDeleteResponse = {
  __typename?: 'modifiersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifiers>;
};

export type ModifiersEdge = {
  __typename?: 'modifiersEdge';
  cursor: Scalars['String']['output'];
  node: Modifiers;
};

export type ModifiersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ModifiersFilter>>;
  button_image?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  item_modifier_group_id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ModifiersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ModifiersFilter>>;
  portion_weight_grams?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sku?: InputMaybe<StringFilter>;
};

export type ModifiersInsertInput = {
  button_image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  item_modifier_group_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nutrition_per_hundred_grams?: InputMaybe<Scalars['JSON']['input']>;
  portion_weight_grams?: InputMaybe<Scalars['BigFloat']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  restrictions?: InputMaybe<Scalars['JSON']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ModifiersInsertResponse = {
  __typename?: 'modifiersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifiers>;
};

export type ModifiersOrderBy = {
  button_image?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  item_modifier_group_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  portion_weight_grams?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
};

export type ModifiersUpdateInput = {
  button_image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  item_modifier_group_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nutrition_per_hundred_grams?: InputMaybe<Scalars['JSON']['input']>;
  portion_weight_grams?: InputMaybe<Scalars['BigFloat']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  restrictions?: InputMaybe<Scalars['JSON']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ModifiersUpdateResponse = {
  __typename?: 'modifiersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Modifiers>;
};

export type Productallergens = Node & {
  __typename?: 'productallergens';
  allergen_group_id?: Maybe<Scalars['UUID']['output']>;
  allergengroups?: Maybe<Allergengroups>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id?: Maybe<Scalars['UUID']['output']>;
  products?: Maybe<Products>;
};

export type ProductallergensConnection = {
  __typename?: 'productallergensConnection';
  edges: Array<ProductallergensEdge>;
  pageInfo: PageInfo;
};

export type ProductallergensDeleteResponse = {
  __typename?: 'productallergensDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productallergens>;
};

export type ProductallergensEdge = {
  __typename?: 'productallergensEdge';
  cursor: Scalars['String']['output'];
  node: Productallergens;
};

export type ProductallergensFilter = {
  allergen_group_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductallergensFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductallergensFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductallergensFilter>>;
  product_id?: InputMaybe<UuidFilter>;
};

export type ProductallergensInsertInput = {
  allergen_group_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductallergensInsertResponse = {
  __typename?: 'productallergensInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productallergens>;
};

export type ProductallergensOrderBy = {
  allergen_group_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
};

export type ProductallergensUpdateInput = {
  allergen_group_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductallergensUpdateResponse = {
  __typename?: 'productallergensUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productallergens>;
};

export type Products = Node & {
  __typename?: 'products';
  categoryitemsCollection?: Maybe<CategoryitemsConnection>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  modifier_schema_id?: Maybe<Scalars['UUID']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  productCategoryId?: Maybe<Scalars['UUID']['output']>;
  productallergensCollection?: Maybe<ProductallergensConnection>;
  productsizesCollection?: Maybe<ProductsizesConnection>;
  sku?: Maybe<Scalars['String']['output']>;
  tax_category_id?: Maybe<Scalars['UUID']['output']>;
};


export type ProductsCategoryitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoryitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryitemsOrderBy>>;
};


export type ProductsProductallergensCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductallergensFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductallergensOrderBy>>;
};


export type ProductsProductsizesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsizesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsizesOrderBy>>;
};

export type ProductsConnection = {
  __typename?: 'productsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
};

export type ProductsDeleteResponse = {
  __typename?: 'productsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsEdge = {
  __typename?: 'productsEdge';
  cursor: Scalars['String']['output'];
  node: Products;
};

export type ProductsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductsFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  modifier_schema_id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  productCategoryId?: InputMaybe<UuidFilter>;
  sku?: InputMaybe<StringFilter>;
  tax_category_id?: InputMaybe<UuidFilter>;
};

export type ProductsInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modifier_schema_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCategoryId?: InputMaybe<Scalars['UUID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tax_category_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductsInsertResponse = {
  __typename?: 'productsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  modifier_schema_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  productCategoryId?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
  tax_category_id?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modifier_schema_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCategoryId?: InputMaybe<Scalars['UUID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tax_category_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductsUpdateResponse = {
  __typename?: 'productsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Productsizes = Node & {
  __typename?: 'productsizes';
  button_image_cropped_url?: Maybe<Scalars['String']['output']>;
  button_image_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  nutrition_per_hundred_grams?: Maybe<Scalars['JSON']['output']>;
  nutritions?: Maybe<Scalars['JSON']['output']>;
  portion_weight_grams?: Maybe<Scalars['BigFloat']['output']>;
  price?: Maybe<Scalars['BigFloat']['output']>;
  product_id?: Maybe<Scalars['UUID']['output']>;
  products?: Maybe<Products>;
  size_code?: Maybe<Scalars['String']['output']>;
  size_id: Scalars['UUID']['output'];
  size_name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type ProductsizesConnection = {
  __typename?: 'productsizesConnection';
  edges: Array<ProductsizesEdge>;
  pageInfo: PageInfo;
};

export type ProductsizesDeleteResponse = {
  __typename?: 'productsizesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productsizes>;
};

export type ProductsizesEdge = {
  __typename?: 'productsizesEdge';
  cursor: Scalars['String']['output'];
  node: Productsizes;
};

export type ProductsizesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductsizesFilter>>;
  button_image_cropped_url?: InputMaybe<StringFilter>;
  button_image_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_default?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsizesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsizesFilter>>;
  portion_weight_grams?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  product_id?: InputMaybe<UuidFilter>;
  size_code?: InputMaybe<StringFilter>;
  size_id?: InputMaybe<UuidFilter>;
  size_name?: InputMaybe<StringFilter>;
  sku?: InputMaybe<StringFilter>;
};

export type ProductsizesInsertInput = {
  button_image_cropped_url?: InputMaybe<Scalars['String']['input']>;
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  nutrition_per_hundred_grams?: InputMaybe<Scalars['JSON']['input']>;
  nutritions?: InputMaybe<Scalars['JSON']['input']>;
  portion_weight_grams?: InputMaybe<Scalars['BigFloat']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  size_code?: InputMaybe<Scalars['String']['input']>;
  size_id?: InputMaybe<Scalars['UUID']['input']>;
  size_name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsizesInsertResponse = {
  __typename?: 'productsizesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productsizes>;
};

export type ProductsizesOrderBy = {
  button_image_cropped_url?: InputMaybe<OrderByDirection>;
  button_image_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_default?: InputMaybe<OrderByDirection>;
  portion_weight_grams?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  size_code?: InputMaybe<OrderByDirection>;
  size_id?: InputMaybe<OrderByDirection>;
  size_name?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
};

export type ProductsizesUpdateInput = {
  button_image_cropped_url?: InputMaybe<Scalars['String']['input']>;
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  nutrition_per_hundred_grams?: InputMaybe<Scalars['JSON']['input']>;
  nutritions?: InputMaybe<Scalars['JSON']['input']>;
  portion_weight_grams?: InputMaybe<Scalars['BigFloat']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  size_code?: InputMaybe<Scalars['String']['input']>;
  size_id?: InputMaybe<Scalars['UUID']['input']>;
  size_name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsizesUpdateResponse = {
  __typename?: 'productsizesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productsizes>;
};

export type GetCategoriesQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categoriesCollection?: { __typename?: 'categoriesConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'categoriesEdge', node: { __typename?: 'categories', id: any, name: string, description?: string | null, button_image_url?: string | null, header_image_url?: string | null, isHidden?: boolean | null } }> } | null };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoriesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"header_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;