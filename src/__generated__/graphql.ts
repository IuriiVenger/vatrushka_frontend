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
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
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
  /** Deletes zero or more records from the `addresses` collection */
  deleteFromaddressesCollection: AddressesDeleteResponse;
  /** Deletes zero or more records from the `allergengroups` collection */
  deleteFromallergengroupsCollection: AllergengroupsDeleteResponse;
  /** Deletes zero or more records from the `cart` collection */
  deleteFromcartCollection: CartDeleteResponse;
  /** Deletes zero or more records from the `cartitems` collection */
  deleteFromcartitemsCollection: CartitemsDeleteResponse;
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
  /** Deletes zero or more records from the `orders` collection */
  deleteFromordersCollection: OrdersDeleteResponse;
  /** Deletes zero or more records from the `productTags` collection */
  deleteFromproductTagsCollection: ProductTagsDeleteResponse;
  /** Deletes zero or more records from the `productallergens` collection */
  deleteFromproductallergensCollection: ProductallergensDeleteResponse;
  /** Deletes zero or more records from the `productlabels` collection */
  deleteFromproductlabelsCollection: ProductlabelsDeleteResponse;
  /** Deletes zero or more records from the `productpromotions` collection */
  deleteFromproductpromotionsCollection: ProductpromotionsDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `productsizes` collection */
  deleteFromproductsizesCollection: ProductsizesDeleteResponse;
  /** Deletes zero or more records from the `promotions` collection */
  deleteFrompromotionsCollection: PromotionsDeleteResponse;
  /** Deletes zero or more records from the `rec_category` collection */
  deleteFromrec_categoryCollection: Rec_CategoryDeleteResponse;
  /** Adds one or more `addresses` records to the collection */
  insertIntoaddressesCollection?: Maybe<AddressesInsertResponse>;
  /** Adds one or more `allergengroups` records to the collection */
  insertIntoallergengroupsCollection?: Maybe<AllergengroupsInsertResponse>;
  /** Adds one or more `cart` records to the collection */
  insertIntocartCollection?: Maybe<CartInsertResponse>;
  /** Adds one or more `cartitems` records to the collection */
  insertIntocartitemsCollection?: Maybe<CartitemsInsertResponse>;
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
  /** Adds one or more `orders` records to the collection */
  insertIntoordersCollection?: Maybe<OrdersInsertResponse>;
  /** Adds one or more `productTags` records to the collection */
  insertIntoproductTagsCollection?: Maybe<ProductTagsInsertResponse>;
  /** Adds one or more `productallergens` records to the collection */
  insertIntoproductallergensCollection?: Maybe<ProductallergensInsertResponse>;
  /** Adds one or more `productlabels` records to the collection */
  insertIntoproductlabelsCollection?: Maybe<ProductlabelsInsertResponse>;
  /** Adds one or more `productpromotions` records to the collection */
  insertIntoproductpromotionsCollection?: Maybe<ProductpromotionsInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `productsizes` records to the collection */
  insertIntoproductsizesCollection?: Maybe<ProductsizesInsertResponse>;
  /** Adds one or more `promotions` records to the collection */
  insertIntopromotionsCollection?: Maybe<PromotionsInsertResponse>;
  /** Adds one or more `rec_category` records to the collection */
  insertIntorec_categoryCollection?: Maybe<Rec_CategoryInsertResponse>;
  /** Updates zero or more records in the `addresses` collection */
  updateaddressesCollection: AddressesUpdateResponse;
  /** Updates zero or more records in the `allergengroups` collection */
  updateallergengroupsCollection: AllergengroupsUpdateResponse;
  /** Updates zero or more records in the `cart` collection */
  updatecartCollection: CartUpdateResponse;
  /** Updates zero or more records in the `cartitems` collection */
  updatecartitemsCollection: CartitemsUpdateResponse;
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
  /** Updates zero or more records in the `orders` collection */
  updateordersCollection: OrdersUpdateResponse;
  /** Updates zero or more records in the `productTags` collection */
  updateproductTagsCollection: ProductTagsUpdateResponse;
  /** Updates zero or more records in the `productallergens` collection */
  updateproductallergensCollection: ProductallergensUpdateResponse;
  /** Updates zero or more records in the `productlabels` collection */
  updateproductlabelsCollection: ProductlabelsUpdateResponse;
  /** Updates zero or more records in the `productpromotions` collection */
  updateproductpromotionsCollection: ProductpromotionsUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `productsizes` collection */
  updateproductsizesCollection: ProductsizesUpdateResponse;
  /** Updates zero or more records in the `promotions` collection */
  updatepromotionsCollection: PromotionsUpdateResponse;
  /** Updates zero or more records in the `rec_category` collection */
  updaterec_categoryCollection: Rec_CategoryUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromaddressesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AddressesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromallergengroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AllergengroupsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcartitemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartitemsFilter>;
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
export type MutationDeleteFromordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductTagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductTagsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductallergensFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductlabelsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductlabelsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductpromotionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductpromotionsFilter>;
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
export type MutationDeleteFrompromotionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromotionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrec_CategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Rec_CategoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoaddressesCollectionArgs = {
  objects: Array<AddressesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoallergengroupsCollectionArgs = {
  objects: Array<AllergengroupsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocartCollectionArgs = {
  objects: Array<CartInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocartitemsCollectionArgs = {
  objects: Array<CartitemsInsertInput>;
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
export type MutationInsertIntoordersCollectionArgs = {
  objects: Array<OrdersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductTagsCollectionArgs = {
  objects: Array<ProductTagsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductallergensCollectionArgs = {
  objects: Array<ProductallergensInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductlabelsCollectionArgs = {
  objects: Array<ProductlabelsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductpromotionsCollectionArgs = {
  objects: Array<ProductpromotionsInsertInput>;
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
export type MutationInsertIntopromotionsCollectionArgs = {
  objects: Array<PromotionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorec_CategoryCollectionArgs = {
  objects: Array<Rec_CategoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateaddressesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AddressesFilter>;
  set: AddressesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateallergengroupsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AllergengroupsFilter>;
  set: AllergengroupsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartFilter>;
  set: CartUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecartitemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartitemsFilter>;
  set: CartitemsUpdateInput;
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
export type MutationUpdateordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
  set: OrdersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductTagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductTagsFilter>;
  set: ProductTagsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductallergensCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductallergensFilter>;
  set: ProductallergensUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductlabelsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductlabelsFilter>;
  set: ProductlabelsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductpromotionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductpromotionsFilter>;
  set: ProductpromotionsUpdateInput;
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


/** The root type for creating and mutating data */
export type MutationUpdatepromotionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PromotionsFilter>;
  set: PromotionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterec_CategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Rec_CategoryFilter>;
  set: Rec_CategoryUpdateInput;
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
  /** A pagable collection of type `addresses` */
  addressesCollection?: Maybe<AddressesConnection>;
  /** A pagable collection of type `allergengroups` */
  allergengroupsCollection?: Maybe<AllergengroupsConnection>;
  /** A pagable collection of type `cart` */
  cartCollection?: Maybe<CartConnection>;
  /** A pagable collection of type `cartitems` */
  cartitemsCollection?: Maybe<CartitemsConnection>;
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
  /** A pagable collection of type `orders` */
  ordersCollection?: Maybe<OrdersConnection>;
  /** A pagable collection of type `productTags` */
  productTagsCollection?: Maybe<ProductTagsConnection>;
  /** A pagable collection of type `productallergens` */
  productallergensCollection?: Maybe<ProductallergensConnection>;
  /** A pagable collection of type `productlabels` */
  productlabelsCollection?: Maybe<ProductlabelsConnection>;
  /** A pagable collection of type `productpromotions` */
  productpromotionsCollection?: Maybe<ProductpromotionsConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `productsizes` */
  productsizesCollection?: Maybe<ProductsizesConnection>;
  /** A pagable collection of type `promotions` */
  promotionsCollection?: Maybe<PromotionsConnection>;
  /** A pagable collection of type `rec_category` */
  rec_categoryCollection?: Maybe<Rec_CategoryConnection>;
};


/** The root type for querying data */
export type QueryAddressesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
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
export type QueryCartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartOrderBy>>;
};


/** The root type for querying data */
export type QueryCartitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartitemsOrderBy>>;
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
export type QueryOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};


/** The root type for querying data */
export type QueryProductTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductTagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductTagsOrderBy>>;
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
export type QueryProductlabelsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductlabelsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductlabelsOrderBy>>;
};


/** The root type for querying data */
export type QueryProductpromotionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductpromotionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductpromotionsOrderBy>>;
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


/** The root type for querying data */
export type QueryPromotionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromotionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PromotionsOrderBy>>;
};


/** The root type for querying data */
export type QueryRec_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Rec_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Rec_CategoryOrderBy>>;
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

export type Addresses = Node & {
  __typename?: 'addresses';
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  house_number: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  intercom_code?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['BigFloat']['output']>;
  lon?: Maybe<Scalars['BigFloat']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  ordersCollection?: Maybe<OrdersConnection>;
  street: Scalars['String']['output'];
  street_kladr_code?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['UUID']['output'];
  zip_code?: Maybe<Scalars['String']['output']>;
};


export type AddressesOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type AddressesConnection = {
  __typename?: 'addressesConnection';
  edges: Array<AddressesEdge>;
  pageInfo: PageInfo;
};

export type AddressesDeleteResponse = {
  __typename?: 'addressesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Addresses>;
};

export type AddressesEdge = {
  __typename?: 'addressesEdge';
  cursor: Scalars['String']['output'];
  node: Addresses;
};

export type AddressesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AddressesFilter>>;
  apartment?: InputMaybe<StringFilter>;
  building?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  house_number?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  intercom_code?: InputMaybe<StringFilter>;
  lat?: InputMaybe<BigFloatFilter>;
  lon?: InputMaybe<BigFloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AddressesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AddressesFilter>>;
  street?: InputMaybe<StringFilter>;
  street_kladr_code?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
  zip_code?: InputMaybe<StringFilter>;
};

export type AddressesInsertInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  house_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  intercom_code?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['BigFloat']['input']>;
  lon?: InputMaybe<Scalars['BigFloat']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  street_kladr_code?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type AddressesInsertResponse = {
  __typename?: 'addressesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Addresses>;
};

export type AddressesOrderBy = {
  apartment?: InputMaybe<OrderByDirection>;
  building?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  house_number?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  intercom_code?: InputMaybe<OrderByDirection>;
  lat?: InputMaybe<OrderByDirection>;
  lon?: InputMaybe<OrderByDirection>;
  street?: InputMaybe<OrderByDirection>;
  street_kladr_code?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  zip_code?: InputMaybe<OrderByDirection>;
};

export type AddressesUpdateInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  house_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  intercom_code?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['BigFloat']['input']>;
  lon?: InputMaybe<Scalars['BigFloat']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  street_kladr_code?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type AddressesUpdateResponse = {
  __typename?: 'addressesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Addresses>;
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

export type Cart = Node & {
  __typename?: 'cart';
  cartitemsCollection?: Maybe<CartitemsConnection>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  ordersCollection?: Maybe<OrdersConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  user_id: Scalars['UUID']['output'];
};


export type CartCartitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartitemsOrderBy>>;
};


export type CartOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

export type CartConnection = {
  __typename?: 'cartConnection';
  edges: Array<CartEdge>;
  pageInfo: PageInfo;
};

export type CartDeleteResponse = {
  __typename?: 'cartDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type CartEdge = {
  __typename?: 'cartEdge';
  cursor: Scalars['String']['output'];
  node: Cart;
};

export type CartFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CartFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CartFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CartFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type CartInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CartInsertResponse = {
  __typename?: 'cartInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type CartOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type CartUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CartUpdateResponse = {
  __typename?: 'cartUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type Cartitems = Node & {
  __typename?: 'cartitems';
  cart: Cart;
  cart_id: Scalars['UUID']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products: Products;
  productsizes: Productsizes;
  size_id: Scalars['UUID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type CartitemsConnection = {
  __typename?: 'cartitemsConnection';
  edges: Array<CartitemsEdge>;
  pageInfo: PageInfo;
};

export type CartitemsDeleteResponse = {
  __typename?: 'cartitemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cartitems>;
};

export type CartitemsEdge = {
  __typename?: 'cartitemsEdge';
  cursor: Scalars['String']['output'];
  node: Cartitems;
};

export type CartitemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CartitemsFilter>>;
  cart_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CartitemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CartitemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  size_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CartitemsInsertInput = {
  cart_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  size_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CartitemsInsertResponse = {
  __typename?: 'cartitemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cartitems>;
};

export type CartitemsOrderBy = {
  cart_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  size_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CartitemsUpdateInput = {
  cart_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  size_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CartitemsUpdateResponse = {
  __typename?: 'cartitemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cartitems>;
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
  rec_categoryCollection?: Maybe<Rec_CategoryConnection>;
  slug?: Maybe<Scalars['String']['output']>;
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


export type CategoriesRec_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Rec_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Rec_CategoryOrderBy>>;
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
  slug?: InputMaybe<StringFilter>;
};

export type CategoriesInsertInput = {
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
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
  slug?: InputMaybe<OrderByDirection>;
};

export type CategoriesUpdateInput = {
  button_image_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header_image_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
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
  category_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  item_category_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  product_name?: Maybe<Scalars['String']['output']>;
  products: Products;
  slug?: Maybe<Scalars['String']['output']>;
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
  category_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  item_category_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CategoryitemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CategoryitemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  product_name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type CategoryitemsInsertInput = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  item_category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryitemsInsertResponse = {
  __typename?: 'categoryitemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categoryitems>;
};

export type CategoryitemsOrderBy = {
  category_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  item_category_id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  product_name?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
};

export type CategoryitemsUpdateInput = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  item_category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
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

export enum Order_Type {
  Delivery = 'DELIVERY',
  Takeout = 'TAKEOUT'
}

/** Boolean expression comparing fields on type "order_type" */
export type Order_TypeFilter = {
  eq?: InputMaybe<Order_Type>;
  in?: InputMaybe<Array<Order_Type>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Order_Type>;
};

export type Orders = Node & {
  __typename?: 'orders';
  address_id?: Maybe<Scalars['UUID']['output']>;
  addresses?: Maybe<Addresses>;
  cart?: Maybe<Cart>;
  cart_id?: Maybe<Scalars['UUID']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  delivery_time?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  special_instructions?: Maybe<Scalars['String']['output']>;
  total_price: Scalars['BigFloat']['output'];
  type: Order_Type;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type OrdersConnection = {
  __typename?: 'ordersConnection';
  edges: Array<OrdersEdge>;
  pageInfo: PageInfo;
};

export type OrdersDeleteResponse = {
  __typename?: 'ordersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersEdge = {
  __typename?: 'ordersEdge';
  cursor: Scalars['String']['output'];
  node: Orders;
};

export type OrdersFilter = {
  address_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrdersFilter>>;
  cart_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  delivery_time?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrdersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrdersFilter>>;
  special_instructions?: InputMaybe<StringFilter>;
  total_price?: InputMaybe<BigFloatFilter>;
  type?: InputMaybe<Order_TypeFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type OrdersInsertInput = {
  address_id?: InputMaybe<Scalars['UUID']['input']>;
  cart_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_time?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  special_instructions?: InputMaybe<Scalars['String']['input']>;
  total_price?: InputMaybe<Scalars['BigFloat']['input']>;
  type?: InputMaybe<Order_Type>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrdersInsertResponse = {
  __typename?: 'ordersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersOrderBy = {
  address_id?: InputMaybe<OrderByDirection>;
  cart_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  delivery_time?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  special_instructions?: InputMaybe<OrderByDirection>;
  total_price?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type OrdersUpdateInput = {
  address_id?: InputMaybe<Scalars['UUID']['input']>;
  cart_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_time?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  special_instructions?: InputMaybe<Scalars['String']['input']>;
  total_price?: InputMaybe<Scalars['BigFloat']['input']>;
  type?: InputMaybe<Order_Type>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrdersUpdateResponse = {
  __typename?: 'ordersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type ProductTags = Node & {
  __typename?: 'productTags';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products: Products;
  slug?: Maybe<Scalars['String']['output']>;
  tag_id: Scalars['UUID']['output'];
};

export type ProductTagsConnection = {
  __typename?: 'productTagsConnection';
  edges: Array<ProductTagsEdge>;
  pageInfo: PageInfo;
};

export type ProductTagsDeleteResponse = {
  __typename?: 'productTagsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProductTags>;
};

export type ProductTagsEdge = {
  __typename?: 'productTagsEdge';
  cursor: Scalars['String']['output'];
  node: ProductTags;
};

export type ProductTagsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductTagsFilter>>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductTagsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductTagsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  slug?: InputMaybe<StringFilter>;
  tag_id?: InputMaybe<UuidFilter>;
};

export type ProductTagsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tag_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductTagsInsertResponse = {
  __typename?: 'productTagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProductTags>;
};

export type ProductTagsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  tag_id?: InputMaybe<OrderByDirection>;
};

export type ProductTagsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tag_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductTagsUpdateResponse = {
  __typename?: 'productTagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProductTags>;
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

export type Productlabels = Node & {
  __typename?: 'productlabels';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products: Products;
  slug?: Maybe<Scalars['String']['output']>;
};

export type ProductlabelsConnection = {
  __typename?: 'productlabelsConnection';
  edges: Array<ProductlabelsEdge>;
  pageInfo: PageInfo;
};

export type ProductlabelsDeleteResponse = {
  __typename?: 'productlabelsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productlabels>;
};

export type ProductlabelsEdge = {
  __typename?: 'productlabelsEdge';
  cursor: Scalars['String']['output'];
  node: Productlabels;
};

export type ProductlabelsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductlabelsFilter>>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductlabelsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductlabelsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type ProductlabelsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductlabelsInsertResponse = {
  __typename?: 'productlabelsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productlabels>;
};

export type ProductlabelsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
};

export type ProductlabelsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductlabelsUpdateResponse = {
  __typename?: 'productlabelsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productlabels>;
};

export type Productpromotions = Node & {
  __typename?: 'productpromotions';
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products: Products;
  promotion_id: Scalars['UUID']['output'];
  promotions: Promotions;
};

export type ProductpromotionsConnection = {
  __typename?: 'productpromotionsConnection';
  edges: Array<ProductpromotionsEdge>;
  pageInfo: PageInfo;
};

export type ProductpromotionsDeleteResponse = {
  __typename?: 'productpromotionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productpromotions>;
};

export type ProductpromotionsEdge = {
  __typename?: 'productpromotionsEdge';
  cursor: Scalars['String']['output'];
  node: Productpromotions;
};

export type ProductpromotionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductpromotionsFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductpromotionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductpromotionsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  promotion_id?: InputMaybe<UuidFilter>;
};

export type ProductpromotionsInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  promotion_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductpromotionsInsertResponse = {
  __typename?: 'productpromotionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productpromotions>;
};

export type ProductpromotionsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  promotion_id?: InputMaybe<OrderByDirection>;
};

export type ProductpromotionsUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  promotion_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProductpromotionsUpdateResponse = {
  __typename?: 'productpromotionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Productpromotions>;
};

export type Products = Node & {
  __typename?: 'products';
  cartitemsCollection?: Maybe<CartitemsConnection>;
  categoryitemsCollection?: Maybe<CategoryitemsConnection>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image_cropped?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ingredients?: Maybe<Scalars['String']['output']>;
  isPopular?: Maybe<Scalars['Boolean']['output']>;
  labels?: Maybe<Scalars['JSON']['output']>;
  modifier_schema_id?: Maybe<Scalars['UUID']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  optional_text?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  productCategoryId?: Maybe<Scalars['UUID']['output']>;
  productTagsCollection?: Maybe<ProductTagsConnection>;
  productallergensCollection?: Maybe<ProductallergensConnection>;
  productlabelsCollection?: Maybe<ProductlabelsConnection>;
  productpromotionsCollection?: Maybe<ProductpromotionsConnection>;
  productsizesCollection?: Maybe<ProductsizesConnection>;
  rec_categoryCollection?: Maybe<Rec_CategoryConnection>;
  short_description?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags2?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  tax_category_id?: Maybe<Scalars['UUID']['output']>;
};


export type ProductsCartitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartitemsOrderBy>>;
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


export type ProductsProductTagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductTagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductTagsOrderBy>>;
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


export type ProductsProductlabelsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductlabelsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductlabelsOrderBy>>;
};


export type ProductsProductpromotionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductpromotionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductpromotionsOrderBy>>;
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


export type ProductsRec_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Rec_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Rec_CategoryOrderBy>>;
};

export type ProductsConnection = {
  __typename?: 'productsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
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
  image_cropped?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringListFilter>;
  ingredients?: InputMaybe<StringFilter>;
  isPopular?: InputMaybe<BooleanFilter>;
  modifier_schema_id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  productCategoryId?: InputMaybe<UuidFilter>;
  short_description?: InputMaybe<StringFilter>;
  sku?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  tax_category_id?: InputMaybe<UuidFilter>;
};

export type ProductsInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_cropped?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
  labels?: InputMaybe<Scalars['JSON']['input']>;
  modifier_schema_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  optional_text?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  productCategoryId?: InputMaybe<Scalars['UUID']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tags2?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
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
  image_cropped?: InputMaybe<OrderByDirection>;
  ingredients?: InputMaybe<OrderByDirection>;
  isPopular?: InputMaybe<OrderByDirection>;
  modifier_schema_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  productCategoryId?: InputMaybe<OrderByDirection>;
  short_description?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  tax_category_id?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_cropped?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
  labels?: InputMaybe<Scalars['JSON']['input']>;
  modifier_schema_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  optional_text?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  productCategoryId?: InputMaybe<Scalars['UUID']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  tags2?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
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
  cartitemsCollection: CartitemsConnection;
  id: Scalars['UUID']['output'];
  is_default?: Maybe<Scalars['Boolean']['output']>;
  modifiers?: Maybe<Scalars['JSON']['output']>;
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


export type ProductsizesCartitemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartitemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartitemsOrderBy>>;
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
  modifiers?: InputMaybe<Scalars['JSON']['input']>;
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
  modifiers?: InputMaybe<Scalars['JSON']['input']>;
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

export type Promotions = Node & {
  __typename?: 'promotions';
  description?: Maybe<Scalars['String']['output']>;
  homepageBanner?: Maybe<Scalars['String']['output']>;
  homepageEnabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  productButtonText?: Maybe<Scalars['String']['output']>;
  productButtonType?: Maybe<Scalars['String']['output']>;
  productPagesEnabled?: Maybe<Scalars['Boolean']['output']>;
  productpromotionsCollection?: Maybe<ProductpromotionsConnection>;
};


export type PromotionsProductpromotionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductpromotionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductpromotionsOrderBy>>;
};

export type PromotionsConnection = {
  __typename?: 'promotionsConnection';
  edges: Array<PromotionsEdge>;
  pageInfo: PageInfo;
};

export type PromotionsDeleteResponse = {
  __typename?: 'promotionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Promotions>;
};

export type PromotionsEdge = {
  __typename?: 'promotionsEdge';
  cursor: Scalars['String']['output'];
  node: Promotions;
};

export type PromotionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PromotionsFilter>>;
  description?: InputMaybe<StringFilter>;
  homepageBanner?: InputMaybe<StringFilter>;
  homepageEnabled?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PromotionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PromotionsFilter>>;
  productButtonText?: InputMaybe<StringFilter>;
  productButtonType?: InputMaybe<StringFilter>;
  productPagesEnabled?: InputMaybe<BooleanFilter>;
};

export type PromotionsInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  homepageBanner?: InputMaybe<Scalars['String']['input']>;
  homepageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productButtonText?: InputMaybe<Scalars['String']['input']>;
  productButtonType?: InputMaybe<Scalars['String']['input']>;
  productPagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromotionsInsertResponse = {
  __typename?: 'promotionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Promotions>;
};

export type PromotionsOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  homepageBanner?: InputMaybe<OrderByDirection>;
  homepageEnabled?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  productButtonText?: InputMaybe<OrderByDirection>;
  productButtonType?: InputMaybe<OrderByDirection>;
  productPagesEnabled?: InputMaybe<OrderByDirection>;
};

export type PromotionsUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  homepageBanner?: InputMaybe<Scalars['String']['input']>;
  homepageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productButtonText?: InputMaybe<Scalars['String']['input']>;
  productButtonType?: InputMaybe<Scalars['String']['input']>;
  productPagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromotionsUpdateResponse = {
  __typename?: 'promotionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Promotions>;
};

export type Rec_Category = Node & {
  __typename?: 'rec_category';
  categories?: Maybe<Categories>;
  category_id?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id?: Maybe<Scalars['UUID']['output']>;
  products?: Maybe<Products>;
};

export type Rec_CategoryConnection = {
  __typename?: 'rec_categoryConnection';
  edges: Array<Rec_CategoryEdge>;
  pageInfo: PageInfo;
};

export type Rec_CategoryDeleteResponse = {
  __typename?: 'rec_categoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Rec_Category>;
};

export type Rec_CategoryEdge = {
  __typename?: 'rec_categoryEdge';
  cursor: Scalars['String']['output'];
  node: Rec_Category;
};

export type Rec_CategoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Rec_CategoryFilter>>;
  category_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Rec_CategoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Rec_CategoryFilter>>;
  product_id?: InputMaybe<UuidFilter>;
};

export type Rec_CategoryInsertInput = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Rec_CategoryInsertResponse = {
  __typename?: 'rec_categoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Rec_Category>;
};

export type Rec_CategoryOrderBy = {
  category_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
};

export type Rec_CategoryUpdateInput = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Rec_CategoryUpdateResponse = {
  __typename?: 'rec_categoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Rec_Category>;
};

export type GetCategoriesQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoriesFilter>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy> | CategoriesOrderBy>;
}>;


export type GetCategoriesQuery = { __typename: 'Query', categoriesCollection?: { __typename: 'categoriesConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename: 'categoriesEdge', node: { __typename: 'categories', id: string, name: string, description?: string | null, button_image_url?: string | null, header_image_url?: string | null, isHidden?: boolean | null, slug?: string | null } }> } | null };

export type ProductByCategorySlugQueryVariables = Exact<{
  filter?: InputMaybe<CategoriesFilter>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  productsizesCollectionFilter2?: InputMaybe<ProductsizesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductByCategorySlugQuery = { __typename: 'Query', categoriesCollection?: { __typename: 'categoriesConnection', edges: Array<{ __typename: 'categoriesEdge', node: { __typename: 'categories', name: string, slug?: string | null, header_image_url?: string | null, description?: string | null, categoryitemsCollection?: { __typename: 'categoryitemsConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename: 'categoryitemsEdge', node: { __typename: 'categoryitems', products: { __typename: 'products', tags2?: Array<string | null> | null, tags?: string | null, slug?: string | null, sku?: string | null, short_description?: string | null, optional_text?: Array<string | null> | null, name: string, labels?: string | null, ingredients?: string | null, images?: Array<string | null> | null, image_cropped?: string | null, id: string, description?: string | null, productsizesCollection?: { __typename: 'productsizesConnection', edges: Array<{ __typename: 'productsizesEdge', node: { __typename: 'productsizes', button_image_cropped_url?: string | null, button_image_url?: string | null, is_default?: boolean | null, id: string, portion_weight_grams?: string | null, price?: string | null, size_code?: string | null, size_id: string, size_name?: string | null, sku?: string | null } }> } | null, categoryitemsCollection?: { __typename: 'categoryitemsConnection', edges: Array<{ __typename: 'categoryitemsEdge', node: { __typename: 'categoryitems', categories: { __typename: 'categories', slug?: string | null } } }> } | null } } }> } | null } }> } | null };

export type GetProductsQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  orderBy?: InputMaybe<ProductsOrderBy>;
}>;


export type GetProductsQuery = { __typename: 'Query', productsCollection?: { __typename: 'productsConnection', edges: Array<{ __typename: 'productsEdge', node: { __typename: 'products', description?: string | null, id: string, modifier_schema_id?: string | null, name: string, productCategoryId?: string | null, sku?: string | null, categoryitemsCollection?: { __typename: 'categoryitemsConnection', edges: Array<{ __typename: 'categoryitemsEdge', node: { __typename: 'categoryitems', categories: { __typename: 'categories', name: string, id: string, description?: string | null } } }> } | null, productallergensCollection?: { __typename: 'productallergensConnection', edges: Array<{ __typename: 'productallergensEdge', node: { __typename: 'productallergens', allergen_group_id?: string | null, allergengroups?: { __typename: 'allergengroups', name?: string | null, id: string } | null } }> } | null, productsizesCollection?: { __typename: 'productsizesConnection', edges: Array<{ __typename: 'productsizesEdge', node: { __typename: 'productsizes', nutrition_per_hundred_grams?: string | null, nutritions?: string | null, portion_weight_grams?: string | null, price?: string | null, size_name?: string | null, size_id: string, size_code?: string | null, is_default?: boolean | null, id: string } }> } | null } }> } | null };

export type ProductBySlugQueryVariables = Exact<{
  filter?: InputMaybe<ProductsFilter>;
}>;


export type ProductBySlugQuery = { __typename: 'Query', productsCollection?: { __typename: 'productsConnection', edges: Array<{ __typename: 'productsEdge', node: { __typename: 'products', nodeId: string, id: string, name: string, description?: string | null, tax_category_id?: string | null, modifier_schema_id?: string | null, productCategoryId?: string | null, sku?: string | null, short_description?: string | null, ingredients?: string | null, optional_text?: Array<string | null> | null, isPopular?: boolean | null, slug?: string | null, images?: Array<string | null> | null, image_cropped?: string | null, productsizesCollection?: { __typename: 'productsizesConnection', edges: Array<{ __typename: 'productsizesEdge', node: { __typename: 'productsizes', nodeId: string, id: string, product_id?: string | null, size_code?: string | null, size_name?: string | null, sku?: string | null, is_default?: boolean | null, portion_weight_grams?: string | null, nutrition_per_hundred_grams?: string | null, button_image_url?: string | null, button_image_cropped_url?: string | null, nutritions?: string | null, size_id: string, price?: string | null, modifiers?: string | null } }> } | null, productallergensCollection?: { __typename: 'productallergensConnection', edges: Array<{ __typename: 'productallergensEdge', node: { __typename: 'productallergens', id: string, allergen_group_id?: string | null, allergengroups?: { __typename: 'allergengroups', id: string, name?: string | null } | null } }> } | null, productpromotionsCollection?: { __typename: 'productpromotionsConnection', edges: Array<{ __typename: 'productpromotionsEdge', node: { __typename: 'productpromotions', promotions: { __typename: 'promotions', productButtonText?: string | null, productButtonType?: string | null, productPagesEnabled?: boolean | null, name?: string | null, id: string } } }> } | null, rec_categoryCollection?: { __typename: 'rec_categoryConnection', edges: Array<{ __typename: 'rec_categoryEdge', node: { __typename: 'rec_category', products?: { __typename: 'products', description?: string | null, image_cropped?: string | null, images?: Array<string | null> | null, id: string, ingredients?: string | null, labels?: string | null, name: string, optional_text?: Array<string | null> | null, slug?: string | null, tags?: string | null, tags2?: Array<string | null> | null, short_description?: string | null, productsizesCollection?: { __typename: 'productsizesConnection', edges: Array<{ __typename: 'productsizesEdge', node: { __typename: 'productsizes', portion_weight_grams?: string | null, button_image_url?: string | null, button_image_cropped_url?: string | null, id: string, price?: string | null } }> } | null } | null } }> } | null, categoryitemsCollection?: { __typename: 'categoryitemsConnection', edges: Array<{ __typename: 'categoryitemsEdge', node: { __typename: 'categoryitems', categories: { __typename: 'categories', name: string, slug?: string | null } } }> } | null, productTagsCollection?: { __typename: 'productTagsConnection', edges: Array<{ __typename: 'productTagsEdge', node: { __typename: 'productTags', name: string, slug?: string | null, tag_id: string } }> } | null, productlabelsCollection?: { __typename: 'productlabelsConnection', edges: Array<{ __typename: 'productlabelsEdge', node: { __typename: 'productlabels', slug?: string | null, name: string, id: string } }> } | null } }> } | null };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"categoriesFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"categoriesOrderBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"header_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const ProductByCategorySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductByCategorySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"categoriesFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsizesCollectionFilter2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"productsizesFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categoriesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"header_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categoryitemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"tags2"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"optional_text"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"image_cropped"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"productsizesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsizesCollectionFilter2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_cropped_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"portion_weight_grams"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size_code"}},{"kind":"Field","name":{"kind":"Name","value":"size_id"}},{"kind":"Field","name":{"kind":"Name","value":"size_name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoryitemsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductByCategorySlugQuery, ProductByCategorySlugQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"productsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"productsOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"modifier_schema_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"productCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"categoryitemsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productallergensCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"allergen_group_id"}},{"kind":"Field","name":{"kind":"Name","value":"allergengroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productsizesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition_per_hundred_grams"}},{"kind":"Field","name":{"kind":"Name","value":"nutritions"}},{"kind":"Field","name":{"kind":"Name","value":"portion_weight_grams"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size_name"}},{"kind":"Field","name":{"kind":"Name","value":"size_id"}},{"kind":"Field","name":{"kind":"Name","value":"size_code"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const ProductBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"productsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tax_category_id"}},{"kind":"Field","name":{"kind":"Name","value":"modifier_schema_id"}},{"kind":"Field","name":{"kind":"Name","value":"productCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"optional_text"}},{"kind":"Field","name":{"kind":"Name","value":"isPopular"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"image_cropped"}},{"kind":"Field","name":{"kind":"Name","value":"productsizesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size_code"}},{"kind":"Field","name":{"kind":"Name","value":"size_name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"portion_weight_grams"}},{"kind":"Field","name":{"kind":"Name","value":"nutrition_per_hundred_grams"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_cropped_url"}},{"kind":"Field","name":{"kind":"Name","value":"nutritions"}},{"kind":"Field","name":{"kind":"Name","value":"size_id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"modifiers"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productallergensCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"allergen_group_id"}},{"kind":"Field","name":{"kind":"Name","value":"allergengroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productpromotionsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"promotions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"productButtonType"}},{"kind":"Field","name":{"kind":"Name","value":"productPagesEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rec_categoryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_cropped"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"optional_text"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"tags2"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"productsizesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"portion_weight_grams"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"button_image_cropped_url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categoryitemsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productTagsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tag_id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productlabelsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductBySlugQuery, ProductBySlugQueryVariables>;