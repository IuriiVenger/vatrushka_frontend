/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AddressSliceState } from '../types';

import { address as addressApi } from '@/api/address';
import { API } from '@/api/types';
import { RequestStatus, emptyStoreDataWithStatusAndMeta } from '@/constants';

const initialState: AddressSliceState = {
  userAddresses: emptyStoreDataWithStatusAndMeta,
  organizationAddresses: emptyStoreDataWithStatusAndMeta,
};

export const loadUserAddresses = createAsyncThunk('address/loadUserAddresses', async () => {
  const { data } = await addressApi.getAll();
  return data;
});

export const createUserAddress = createAsyncThunk(
  'address/createUserAddress',
  async (data: API.Address.Create.Request) => {
    await addressApi.create(data);
    const { data: addresses } = await addressApi.getAll();
    return addresses;
  },
);

export const deleteUserAddress = createAsyncThunk('address/deleteUserAddress', async (id: string) => {
  await addressApi.delete(id);
  const { data: addresses } = await addressApi.getAll();
  return addresses;
});

export const updateUserAddress = createAsyncThunk(
  'address/updateUserAddress',
  async ({ id, data }: { id: string; data: API.Address.Update.Request }) => {
    await addressApi.update(id, data);
    const { data: addresses } = await addressApi.getAll();
    return addresses;
  },
);

export const loadOrganizationAddresses = createAsyncThunk('address/loadOrganizationAddresses', async () => {
  const { data } = await addressApi.getOrganizationAddresses();
  return data;
});

const addressSlice = createSlice({
  name: 'address',
  initialState,
  selectors: {
    selectAddresses: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUserAddresses.pending, (state) => {
      state.userAddresses.status = RequestStatus.PENDING;
    });
    builder.addCase(loadUserAddresses.fulfilled, (state, action) => {
      state.userAddresses.status = RequestStatus.FULFILLED;
      state.userAddresses.data = action.payload;
    });
    builder.addCase(loadUserAddresses.rejected, (state) => {
      state.userAddresses.status = RequestStatus.REJECTED;
    });
    builder.addCase(createUserAddress.pending, (state) => {
      state.userAddresses.status = RequestStatus.PENDING;
    });
    builder.addCase(createUserAddress.fulfilled, (state, action) => {
      state.userAddresses.status = RequestStatus.FULFILLED;
      state.userAddresses.data = action.payload;
    });
    builder.addCase(createUserAddress.rejected, (state) => {
      state.userAddresses.status = RequestStatus.REJECTED;
    });

    builder.addCase(deleteUserAddress.pending, (state) => {
      state.userAddresses.status = RequestStatus.PENDING;
    });
    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.userAddresses.status = RequestStatus.FULFILLED;
      state.userAddresses.data = action.payload;
    });
    builder.addCase(deleteUserAddress.rejected, (state) => {
      state.userAddresses.status = RequestStatus.REJECTED;
    });

    builder.addCase(updateUserAddress.pending, (state) => {
      state.userAddresses.status = RequestStatus.PENDING;
    });
    builder.addCase(updateUserAddress.fulfilled, (state, action) => {
      state.userAddresses.status = RequestStatus.FULFILLED;
      state.userAddresses.data = action.payload;
    });
    builder.addCase(updateUserAddress.rejected, (state) => {
      state.userAddresses.status = RequestStatus.REJECTED;
    });
    builder.addCase(loadOrganizationAddresses.pending, (state) => {
      state.organizationAddresses.status = RequestStatus.PENDING;
    });
    builder.addCase(loadOrganizationAddresses.fulfilled, (state, action) => {
      state.organizationAddresses.status = RequestStatus.FULFILLED;
      state.organizationAddresses.data = action.payload[0]?.terminal_addresses;
    });
    builder.addCase(loadOrganizationAddresses.rejected, (state) => {
      state.organizationAddresses.status = RequestStatus.REJECTED;
    });
  },
});

export const {
  reducer: address,
  selectors: { selectAddresses },
} = addressSlice;
