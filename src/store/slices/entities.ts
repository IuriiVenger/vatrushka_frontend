/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { StoreDataWithStatus, StoreDataWithStatusAndMeta } from '../types';

import { CategoriesConnection } from '@/__generated__/graphql';
import { categories } from '@/api/categories';
import { emptyStoreDataWithStatus, emptyStoreDataWithStatusAndMeta, RequestStatus } from '@/constants';
import { TCard } from '@/types';
import { convertCategoryItemsQueryProductsToCards } from '@/utils/converters';

type EntitiesSliceState = {
  categories: StoreDataWithStatus<CategoriesConnection | null>;
  categoryProducts: StoreDataWithStatusAndMeta<TCard[] | null>;
};

type SetCategoriesAction = {
  type: string;
  payload: CategoriesConnection | null;
};

type SetCategoryProductsAction = {
  type: string;
  payload: {
    data: TCard[];
    meta: {
      offset: number;
      isLastPage: boolean;
    };
  };
};

const initialState: EntitiesSliceState = {
  categories: emptyStoreDataWithStatus,
  categoryProducts: emptyStoreDataWithStatusAndMeta,
};

export const loadCategories = createAsyncThunk('categories/getAll', categories.getAll);
export const loadCategoryProducts = createAsyncThunk('categories/getProducts', categories.getCategoryProductsBySlug);
export const loadMoreCategoryProducts = createAsyncThunk(
  'categories/getMoreProducts',
  categories.getCategoryProductsBySlug,
);

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    setCategories: (state, { payload }: SetCategoriesAction) => {
      state.categories.data = payload;
      state.categories.status = RequestStatus.FULLFILLED;
    },
    setCategoryProducts: (state, { payload }: SetCategoryProductsAction) => {
      state.categoryProducts.data = payload.data;
      state.categoryProducts.meta = { ...payload.meta };
      state.categoryProducts.status = RequestStatus.FULLFILLED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategories.pending, (state) => {
      state.categories = { ...state.categories, status: RequestStatus.PENDING };
    });
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories = {
        status: RequestStatus.FULLFILLED,
        data: action.payload.data.categoriesCollection,
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
        status: RequestStatus.FULLFILLED,
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
        status: RequestStatus.FULLFILLED,
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

export const { setCategories, setCategoryProducts } = entitiesSlice.actions;

export default entitiesSlice.reducer;
