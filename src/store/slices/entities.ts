/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EntitiesSliceState, StorePaginationParams } from '../types';

import { categories } from '@/api/categories';
import { emptyStoreDataWithStatus, emptyStoreDataWithStatusAndMeta, RequestStatus } from '@/constants';
import { TCard } from '@/types';
import { convertCategoryItemsQueryProductsToCards } from '@/utils/converters';

const initialState: EntitiesSliceState = {
  categories: emptyStoreDataWithStatus,
  categoryProducts: emptyStoreDataWithStatusAndMeta,
};

type SetCategoryProductsPayload = {
  data: TCard[];
  meta: StorePaginationParams['meta'];
};

export const loadCategories = createAsyncThunk('categories/getAll', categories.getAllWithoutPagination);
export const loadCategoryProducts = createAsyncThunk('categories/getProducts', categories.getCategoryProductsBySlug);
export const loadMoreCategoryProducts = createAsyncThunk(
  'categories/getMoreProducts',
  categories.getCategoryProductsBySlug,
);

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  selectors: {
    selectEntities: (state) => state,
  },
  reducers: {
    setCategoryProducts: (state, { payload }: PayloadAction<SetCategoryProductsPayload>) => {
      state.categoryProducts.data = payload.data;
      state.categoryProducts.meta = { ...payload.meta };
      state.categoryProducts.status = RequestStatus.FULFILLED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategories.pending, (state) => {
      state.categories = { ...state.categories, status: RequestStatus.PENDING };
    });
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories = {
        status: RequestStatus.FULFILLED,
        data: action.payload.categoriesCollection.edges.map((edge) => edge.node),
      };
    });
    builder.addCase(loadCategories.rejected, (state) => {
      state.categories = {
        ...state.categories,
        status: RequestStatus.REJECTED,
      };
    });
    builder.addCase(loadCategoryProducts.pending, (state) => {
      state.categoryProducts = { ...state.categoryProducts, status: RequestStatus.PENDING };
    });
    builder.addCase(loadCategoryProducts.fulfilled, (state, action) => {
      const products = convertCategoryItemsQueryProductsToCards(
        action.payload.data.categoriesCollection?.edges[0].node.categoryitemsCollection,
      );
      state.categoryProducts = {
        status: RequestStatus.FULFILLED,
        data: products,
        meta: {
          offset: state.categoryProducts.meta.offset + products.length,
          isLastPage:
            !action.payload.data.categoriesCollection?.edges[0].node.categoryitemsCollection?.pageInfo.hasNextPage,
        },
      };
    });
    builder.addCase(loadCategoryProducts.rejected, (state) => {
      state.categoryProducts = {
        ...state.categoryProducts,
        status: RequestStatus.REJECTED,
      };
    });
    builder.addCase(loadMoreCategoryProducts.pending, (state) => {
      state.categoryProducts = { ...state.categoryProducts, status: RequestStatus.PENDING };
    });
    builder.addCase(loadMoreCategoryProducts.fulfilled, (state, action) => {
      const products = convertCategoryItemsQueryProductsToCards(
        action.payload.data.categoriesCollection?.edges[0].node.categoryitemsCollection,
      );
      state.categoryProducts = {
        status: RequestStatus.FULFILLED,
        data: state.categoryProducts.data ? [...state.categoryProducts.data, ...products] : products,
        meta: {
          offset: state.categoryProducts.meta.offset + products.length,
          isLastPage:
            !action.payload.data.categoriesCollection?.edges[0].node.categoryitemsCollection?.pageInfo.hasNextPage,
        },
      };
    });
  },
});

export const {
  selectors: { selectEntities },
  actions: { setCategoryProducts },
  reducer: entities,
} = entitiesSlice;
