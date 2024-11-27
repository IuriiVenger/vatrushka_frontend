/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { orders as ordersApi } from '@/api/orders';
import { API } from '@/api/types';
import { RequestStatus, defaultPaginationParams, emptyStoreDataWithStatusAndMeta } from '@/constants';
import { OrdersSliceState, RootState } from '@/store/types';

const initialState: OrdersSliceState = {
  activeOrders: emptyStoreDataWithStatusAndMeta,
  inactiveOrders: emptyStoreDataWithStatusAndMeta,
};

export const loadActiveOrders = createAsyncThunk('orders/loadActiveOrders', async () => {
  const { data: orders } = await ordersApi.getAll(defaultPaginationParams); // TODO: add order_status
  return orders;
});

export const loadMoreActiveOrders = createAsyncThunk<API.Orders.Order[], void, { state: RootState }>(
  'orders/loadMoreActiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.activeOrders.meta;
    const { data: orders } = await ordersApi.getAll({ offset, limit }); // TODO: add order_status
    return orders;
  },
);

export const loadInactiveOrders = createAsyncThunk('orders/loadInactiveOrders', async () => {
  const { data: orders } = await ordersApi.getAll(defaultPaginationParams); // TODO: add order_status
  return orders;
});

export const loadMoreInactiveOrders = createAsyncThunk<API.Orders.Order[], void, { state: RootState }>(
  'orders/loadMoreInactiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.inactiveOrders.meta;
    const { data: orders } = await ordersApi.getAll({ offset, limit }); // TODO: add order_status
    return orders;
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  selectors: {
    selectOrders: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadActiveOrders.pending, (state) => {
      state.activeOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadActiveOrders.fulfilled, (state, action) => {
      state.activeOrders.status = RequestStatus.FULFILLED;
      state.activeOrders.data = action.payload;
      state.activeOrders.meta.offset += action.payload.length;
      state.activeOrders.meta.isLastPage = action.payload.length < state.activeOrders.meta.first;
    });
    builder.addCase(loadActiveOrders.rejected, (state) => {
      state.activeOrders.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadMoreActiveOrders.pending, (state) => {
      state.activeOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadMoreActiveOrders.fulfilled, (state, action) => {
      state.activeOrders.status = RequestStatus.FULFILLED;
      state.activeOrders.data = state.activeOrders.data
        ? [...state.activeOrders.data, ...action.payload]
        : action.payload;
      state.activeOrders.meta.offset += action.payload.length;
      state.activeOrders.meta.isLastPage = action.payload.length < state.activeOrders.meta.first;
    });
    builder.addCase(loadMoreActiveOrders.rejected, (state) => {
      state.activeOrders.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadInactiveOrders.pending, (state) => {
      state.inactiveOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadInactiveOrders.fulfilled, (state, action) => {
      state.inactiveOrders.status = RequestStatus.FULFILLED;
      state.inactiveOrders.data = action.payload;
      state.inactiveOrders.meta.offset += action.payload.length;
      state.inactiveOrders.meta.isLastPage = action.payload.length < state.inactiveOrders.meta.first;
    });
    builder.addCase(loadInactiveOrders.rejected, (state) => {
      state.inactiveOrders.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadMoreInactiveOrders.pending, (state) => {
      state.inactiveOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadMoreInactiveOrders.fulfilled, (state, action) => {
      state.inactiveOrders.status = RequestStatus.FULFILLED;
      state.inactiveOrders.data = state.inactiveOrders.data
        ? [...state.inactiveOrders.data, ...action.payload]
        : action.payload;
      state.inactiveOrders.meta.offset += action.payload.length;
      state.inactiveOrders.meta.isLastPage = action.payload.length < state.inactiveOrders.meta.first;
    });
    builder.addCase(loadMoreInactiveOrders.rejected, (state) => {
      state.inactiveOrders.status = RequestStatus.REJECTED;
    });
  },
});

export const {
  reducer: orders,
  selectors: { selectOrders },
} = ordersSlice;
