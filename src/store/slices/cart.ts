/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CartSliceState, RootState } from '../types';

import { cart as cartApi } from '@/api/cart';
import { API } from '@/api/types';
import { RequestStatus, emptyStoreDataWithStatus } from '@/constants';

const initialState: CartSliceState = {
  activeCart: emptyStoreDataWithStatus,
  isCartInitialized: false,
};

export const initCartThunk = createAsyncThunk<API.Cart.Cart | null>('cart/init', async () => {
  let activeCartId: string | null = null;
  const { data: carts } = await cartApi.getAll.active();

  if (carts.length === 0) {
    const { data: initializedCart } = await cartApi.init();
    activeCartId = initializedCart.id;
  } else {
    activeCartId = carts[0].id;
  }

  const { data: newCart } = await cartApi.getById(activeCartId);

  return newCart;
});

export const addCartItem = createAsyncThunk<
  API.Cart.Cart,
  Omit<API.Cart.CartItem.Create.Request, 'cart_id'>,
  { state: RootState }
>('cart/addItem', async ({ data }, { getState }) => {
  const state = getState();
  const activeCart = state.cart.activeCart.data;

  if (!activeCart) {
    throw new Error('Cart not found');
  }

  const { data: newCart } = await cartApi.items.add({ cart_id: activeCart.id, data });
  return newCart;
});

export const deleteCartItem = createAsyncThunk<
  API.Cart.Cart,
  Omit<API.Cart.CartItem.Delete.Request, 'cart_id'>,
  { state: RootState }
>('cart/deleteItem', async ({ data }, { getState }) => {
  const state = getState();
  const activeCart = state.cart.activeCart.data;

  if (!activeCart) {
    throw new Error('Cart not found');
  }

  await cartApi.items.delete({ cart_id: activeCart.id, data });
  const { data: newCart } = await cartApi.getById(activeCart.id);
  return newCart;
});

export const deleteCart = createAsyncThunk('cart/delete', async (cartId: string) => {
  await cartApi.delete(cartId);
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  selectors: {
    selectCart: (state) => state,
  },
  reducers: {
    clearCart: (state) => {
      state.activeCart = emptyStoreDataWithStatus;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initCartThunk.pending, (state) => {
      state.activeCart.status = RequestStatus.PENDING;
    });
    builder.addCase(initCartThunk.fulfilled, (state, action) => {
      state.activeCart.data = action.payload;
      state.activeCart.status = RequestStatus.FULFILLED;
      state.isCartInitialized = true;
    });
    builder.addCase(initCartThunk.rejected, (state) => {
      state.activeCart.status = RequestStatus.REJECTED;
      state.isCartInitialized = true;
    });
    builder.addCase(addCartItem.pending, (state) => {
      state.activeCart.status = RequestStatus.PENDING;
    });
    builder.addCase(addCartItem.fulfilled, (state, action) => {
      state.activeCart.data = action.payload;
      state.activeCart.status = RequestStatus.FULFILLED;
    });
    builder.addCase(addCartItem.rejected, (state) => {
      state.activeCart.status = RequestStatus.REJECTED;
    });
    builder.addCase(deleteCartItem.pending, (state) => {
      state.activeCart.status = RequestStatus.PENDING;
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.activeCart.data = action.payload;
      state.activeCart.status = RequestStatus.FULFILLED;
    });
    builder.addCase(deleteCartItem.rejected, (state) => {
      state.activeCart.status = RequestStatus.REJECTED;
    });
    builder.addCase(deleteCart.pending, (state) => {
      state.activeCart.status = RequestStatus.PENDING;
    });
    builder.addCase(deleteCart.fulfilled, (state) => {
      state.activeCart.status = RequestStatus.FULFILLED;
    });
    builder.addCase(deleteCart.rejected, (state) => {
      state.activeCart.status = RequestStatus.REJECTED;
    });
  },
});

export const {
  selectors: { selectCart },
  actions: { clearCart },
  reducer: cart,
} = cartSlice;
