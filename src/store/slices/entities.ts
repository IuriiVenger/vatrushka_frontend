/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { StoreDataWithStatus } from '../types';

import { CategoriesConnection } from '@/__generated__/graphql';
import { categories } from '@/api/categories';
import { emptyStoreDataWithStatus, RequestStatus } from '@/constants';

type EntitiesSliceState = {
  categories: StoreDataWithStatus<CategoriesConnection | null>;
};

const initialState: EntitiesSliceState = {
  categories: emptyStoreDataWithStatus,
};

export const loadCategories = createAsyncThunk('categories/getAll', categories.getAll);

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories.data = action.payload;
      state.categories.status = RequestStatus.FULLFILLED;
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
  },
});

export const { setCategories } = entitiesSlice.actions;

export default entitiesSlice.reducer;
