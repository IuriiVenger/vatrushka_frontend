/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { orders as ordersApi } from '@/api/orders';
import { API } from '@/api/types';
import { TOrderPaymentStatusModalProps } from '@/components/modals/OrderPaymentStatusModal';
import {
  OrderStatus,
  RequestStatus,
  activeOrderStatuses,
  inactiveOrderStatuses,
  defaultPaginationParams,
  emptyStoreDataWithStatusAndMeta,
} from '@/constants';
import { OrdersSliceState, RootState } from '@/store/types';

const initialState: OrdersSliceState = {
  activeOrders: emptyStoreDataWithStatusAndMeta,
  inactiveOrders: emptyStoreDataWithStatusAndMeta,
  paymentStatusModalParams: {
    isPaymentSuccessful: false,
    phoneNumber: null,
    orderNumber: null,
  },
};

export const loadActiveOrders = createAsyncThunk('orders/loadActiveOrders', async () => {
  const { data: orders } = await ordersApi.getAll({
    ...defaultPaginationParams,
    // order_status: activeOrderStatuses, TODO FIX on BACKEND
  });
  return orders;
});

export const loadMoreActiveOrders = createAsyncThunk<API.Orders.OrderList, void, { state: RootState }>(
  'orders/loadMoreActiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.activeOrders.meta;
    const { data: orders } = await ordersApi.getAll({
      offset,
      limit,
      // order_status: activeOrderStatuses, TODO FIX on BACKEND
    });
    return orders;
  },
);

export const loadInactiveOrders = createAsyncThunk('orders/loadInactiveOrders', async () => {
  const { data: orders } = await ordersApi.getAll({
    ...defaultPaginationParams,
    // order_status: inactiveOrderStatuses, TODO FIX on BACKEND
  });
  return orders;
});

export const loadMoreInactiveOrders = createAsyncThunk<API.Orders.OrderList, void, { state: RootState }>(
  'orders/loadMoreInactiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.inactiveOrders.meta;
    const { data: orders } = await ordersApi.getAll({
      offset,
      limit,
      // order_status: inactiveOrderStatuses  TODO FIX on BACKEND
    });
    return orders;
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  selectors: {
    selectOrders: (state) => state,
  },
  reducers: {
    setPaymentStatusModalParams: (state, action: PayloadAction<TOrderPaymentStatusModalProps>) => {
      state.paymentStatusModalParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadActiveOrders.pending, (state) => {
      state.activeOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadActiveOrders.fulfilled, (state, action) => {
      state.activeOrders.status = RequestStatus.FULFILLED;
      state.activeOrders.data = action.payload;
      state.activeOrders.meta.offset += action.payload.data.length;
      state.activeOrders.meta.isLastPage = action.payload.data.length < state.activeOrders.meta.first;
    });
    builder.addCase(loadActiveOrders.rejected, (state) => {
      state.activeOrders.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadMoreActiveOrders.pending, (state) => {
      state.activeOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadMoreActiveOrders.fulfilled, (state, action) => {
      state.activeOrders.status = RequestStatus.FULFILLED;
      state.inactiveOrders.status = RequestStatus.FULFILLED;
      if (state.inactiveOrders.data) {
        state.inactiveOrders.data.data = state.inactiveOrders.data.data
          ? [...state.inactiveOrders.data.data, ...action.payload.data]
          : action.payload.data;
      } else {
        state.inactiveOrders.data = { ...action.payload };
      }
      state.activeOrders.meta.offset += action.payload.data.length;
      state.activeOrders.meta.isLastPage = action.payload.data.length < state.activeOrders.meta.first;
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
      state.inactiveOrders.meta.offset += action.payload.data.length;
      state.inactiveOrders.meta.isLastPage = action.payload.data.length < state.inactiveOrders.meta.first;
    });
    builder.addCase(loadInactiveOrders.rejected, (state) => {
      state.inactiveOrders.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadMoreInactiveOrders.pending, (state) => {
      state.inactiveOrders.status = RequestStatus.PENDING;
    });
    builder.addCase(loadMoreInactiveOrders.fulfilled, (state, action) => {
      state.inactiveOrders.status = RequestStatus.FULFILLED;
      if (state.inactiveOrders.data) {
        state.inactiveOrders.data.data = state.inactiveOrders.data.data
          ? [...state.inactiveOrders.data.data, ...action.payload.data]
          : action.payload.data;
      } else {
        state.inactiveOrders.data = { ...action.payload };
      }
      state.inactiveOrders.meta.offset += action.payload.data.length;
      state.inactiveOrders.meta.isLastPage = action.payload.data.length < state.inactiveOrders.meta.first;
    });
    builder.addCase(loadMoreInactiveOrders.rejected, (state) => {
      state.inactiveOrders.status = RequestStatus.REJECTED;
    });
  },
});

export const {
  reducer: orders,
  actions: { setPaymentStatusModalParams },
  selectors: { selectOrders },
} = ordersSlice;
