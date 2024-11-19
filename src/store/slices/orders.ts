/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { orders as ordersApi } from '@/api/orders';
import { API } from '@/api/types';
import { RequestStatus, emptyStoreDataWithStatusAndMeta } from '@/constants';
import { OrdersSliceState } from '@/store/types';

const initialState: OrdersSliceState = {
  orders: emptyStoreDataWithStatusAndMeta,
};

export const loadOrders = createAsyncThunk('orders/loadOrders', async (params: API.Orders.List.Request) => {
  const { data: orders } = await ordersApi.getAll(params);
  return orders;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  selectors: {
    selectOrders: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadOrders.pending, (state) => {
      state.orders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadOrders.fulfilled, (state, action) => {
      state.orders.status = RequestStatus.FULFILLED;
      state.orders.data = action.payload;
      state.orders.meta.offset += action.payload.length;
      state.orders.meta.isLastPage = action.payload.length < state.orders.meta.first;
    });
    builder.addCase(loadOrders.rejected, (state) => {
      state.orders.status = RequestStatus.REJECTED;
    });
  },
});

export const {
  reducer: orders,
  selectors: { selectOrders },
} = ordersSlice;
