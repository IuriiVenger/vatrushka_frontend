/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { address } from '@/api/address';
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
  SortingDirection,
} from '@/constants';
import { OrdersSliceState, RootState } from '@/store/types';
import { TOrderListWithTerminalAddress } from '@/types';
import { convertOrdersToOrdersCards } from '@/utils/converters';

const initialState: OrdersSliceState = {
  activeOrders: emptyStoreDataWithStatusAndMeta,
  inactiveOrders: emptyStoreDataWithStatusAndMeta,
  paymentStatusModalParams: {
    isPaymentSuccessful: false,
    phoneNumber: null,
    orderNumber: null,
  },
};

export const loadActiveOrders = createAsyncThunk<TOrderListWithTerminalAddress, void, { state: RootState }>(
  'orders/loadActiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { data: orders } = await ordersApi.getAll({
      ...defaultPaginationParams,
      order_status: activeOrderStatuses.join(','),
      sorting_direction: SortingDirection.DESC,
      sorting_field: 'created_at',
    });
    const organizationAddresses = state.address.organizationAddresses.data
      ? state.address.organizationAddresses.data
      : (await address.getOrganizationAddresses()).data[0].terminal_addresses;

    const ordersWithTerminalAddress = convertOrdersToOrdersCards(orders, organizationAddresses);

    return { data: ordersWithTerminalAddress, total: orders.total, has_more: orders.has_more };
  },
);

export const loadMoreActiveOrders = createAsyncThunk<TOrderListWithTerminalAddress, void, { state: RootState }>(
  'orders/loadMoreActiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.activeOrders.meta;
    const organizationAddresses = state.address.organizationAddresses.data
      ? state.address.organizationAddresses.data
      : (await address.getOrganizationAddresses()).data[0].terminal_addresses;

    const { data: orders } = await ordersApi.getAll({
      offset,
      limit,
      order_status: activeOrderStatuses.join(','),
      sorting_direction: SortingDirection.DESC,
      sorting_field: 'created_at',
    });

    const ordersWithTerminalAddress = convertOrdersToOrdersCards(orders, organizationAddresses);

    return { data: ordersWithTerminalAddress, total: orders.total, has_more: orders.has_more };
  },
);

export const loadInactiveOrders = createAsyncThunk<TOrderListWithTerminalAddress, void, { state: RootState }>(
  'orders/loadInactiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const organizationAddresses = state.address.organizationAddresses.data
      ? state.address.organizationAddresses.data
      : (await address.getOrganizationAddresses()).data[0].terminal_addresses;

    const { data: orders } = await ordersApi.getAll({
      ...defaultPaginationParams,
      order_status: inactiveOrderStatuses.join(','),
      sorting_direction: SortingDirection.DESC,
      sorting_field: 'created_at',
    });

    const ordersWithTerminalAddress = convertOrdersToOrdersCards(orders, organizationAddresses);

    return { data: ordersWithTerminalAddress, total: orders.total, has_more: orders.has_more };
  },
);

export const loadMoreInactiveOrders = createAsyncThunk<TOrderListWithTerminalAddress, void, { state: RootState }>(
  'orders/loadMoreInactiveOrders',
  async (_, { getState }) => {
    const state = getState();
    const { offset, first: limit } = state.orders.inactiveOrders.meta;
    const organizationAddresses = state.address.organizationAddresses.data
      ? state.address.organizationAddresses.data
      : (await address.getOrganizationAddresses()).data[0].terminal_addresses;

    const { data: orders } = await ordersApi.getAll({
      offset,
      limit,
      order_status: inactiveOrderStatuses.join(','),
      sorting_direction: SortingDirection.DESC,
      sorting_field: 'created_at',
    });

    const ordersWithTerminalAddress = convertOrdersToOrdersCards(orders, organizationAddresses);

    return { data: ordersWithTerminalAddress, total: orders.total, has_more: orders.has_more };
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
      state.activeOrders.meta.offset = action.payload.data.length;
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
      if (state.activeOrders.data) {
        state.activeOrders.data.data = state.activeOrders.data.data
          ? [...state.activeOrders.data.data, ...action.payload.data]
          : action.payload.data;
      } else {
        state.activeOrders.data = { ...action.payload };
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
      state.inactiveOrders.meta.offset = action.payload.data.length;
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
