/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CartSliceState, RootState } from '../types';

import { cart } from '@/api/cart';
import { API } from '@/api/types';
import { RequestStatus, emptyStoreDataWithStatus } from '@/constants';
import { GroupedCartItem } from '@/types';
import { getGroupedCartItems } from '@/utils/converters';

const initialState: CartSliceState = {
  activeCart: emptyStoreDataWithStatus,
  isCartInitialized: false,
};

export const initCart = createAsyncThunk<API.Cart.Cart | null>('cart/init', async () => {
  let activeCartId: string | null = null;
  const { data: carts } = await cart.getAll();

  if (carts.length === 0) {
    const { data: initializedCart } = await cart.init();
    activeCartId = initializedCart.id;
  } else {
    activeCartId = carts[0].id;
  }

  const { data: newCart } = await cart.getById(activeCartId);

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

  const { data: newCart } = await cart.items.add({ cart_id: activeCart.id, data });
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

  await cart.items.delete({ cart_id: activeCart.id, data });
  const { data: newCart } = await cart.getById(activeCart.id);
  return newCart;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  selectors: {
    selectGroupedCartItems: (state) => getGroupedCartItems(state.activeCart.data?.items ?? []),
    selectCart: (state) => state,
  },
  reducers: {
    clearCart: (state) => {
      state.activeCart = emptyStoreDataWithStatus;
      state.isCartInitialized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initCart.pending, (state) => {
      state.activeCart.status = RequestStatus.PENDING;
    });
    builder.addCase(initCart.fulfilled, (state, action) => {
      state.activeCart.data = action.payload;
      state.activeCart.status = RequestStatus.FULFILLED;
      state.isCartInitialized = true;
    });
    builder.addCase(initCart.rejected, (state) => {
      state.activeCart.status = RequestStatus.REJECTED;
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
  },
});

export const { clearCart } = cartSlice.actions;
export const { selectGroupedCartItems, selectCart } = cartSlice.selectors;

export default cartSlice.reducer;
