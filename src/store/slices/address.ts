/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AddressSliceState } from '../types';

import { address as addressApi } from '@/api/address';
import { API } from '@/api/types';
import { RequestStatus, emptyStoreDataWithStatusAndMeta } from '@/constants';

const initialState: AddressSliceState = {
  addresses: emptyStoreDataWithStatusAndMeta,
};

export const loadAddresses = createAsyncThunk('address/loadAddresses', async () => {
  const { data } = await addressApi.getAll();
  return data;
});

export const createAddress = createAsyncThunk('address/createAddress', async (data: API.Address.Create.Request) => {
  await addressApi.create(data);
  const { data: addresses } = await addressApi.getAll();
  return addresses;
});

export const deleteAddress = createAsyncThunk('address/deleteAddress', async (id: string) => {
  await addressApi.delete(id);
  const { data: addresses } = await addressApi.getAll();
  return addresses;
});

export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ id, data }: { id: string; data: API.Address.Create.Request }) => {
    await addressApi.update(id, data);
    const { data: addresses } = await addressApi.getAll();
    return addresses;
  },
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  selectors: {
    selectAddresses: (state) => state.addresses,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAddresses.pending, (state) => {
      state.addresses.status = RequestStatus.PENDING;
    });
    builder.addCase(loadAddresses.fulfilled, (state, action) => {
      state.addresses.status = RequestStatus.FULFILLED;
      state.addresses.data = action.payload;
    });
    builder.addCase(loadAddresses.rejected, (state) => {
      state.addresses.status = RequestStatus.REJECTED;
    });
    builder.addCase(createAddress.pending, (state) => {
      state.addresses.status = RequestStatus.PENDING;
    });
    builder.addCase(createAddress.fulfilled, (state, action) => {
      state.addresses.status = RequestStatus.FULFILLED;
      state.addresses.data = action.payload;
    });
    builder.addCase(createAddress.rejected, (state) => {
      state.addresses.status = RequestStatus.REJECTED;
    });

    builder.addCase(deleteAddress.pending, (state) => {
      state.addresses.status = RequestStatus.PENDING;
    });
    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.addresses.status = RequestStatus.FULFILLED;
      state.addresses.data = action.payload;
    });
    builder.addCase(deleteAddress.rejected, (state) => {
      state.addresses.status = RequestStatus.REJECTED;
    });

    builder.addCase(updateAddress.pending, (state) => {
      state.addresses.status = RequestStatus.PENDING;
    });
    builder.addCase(updateAddress.fulfilled, (state, action) => {
      state.addresses.status = RequestStatus.FULFILLED;
      state.addresses.data = action.payload;
    });
    builder.addCase(updateAddress.rejected, (state) => {
      state.addresses.status = RequestStatus.REJECTED;
    });
  },
});

export const { reducer: address } = addressSlice;
