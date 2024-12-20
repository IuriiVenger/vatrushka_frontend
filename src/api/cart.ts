import { API } from './types';

import { deleteRequest, getRequest, postRequest } from '@/api';
import { CartStatus } from '@/constants';

export const cart = {
  getAll: {
    active: () => getRequest<API.Cart.CartList[]>('/cart', { params: { status: CartStatus.ACTIVE } }),
  },
  getById: (cart_id: string) => getRequest<API.Cart.Cart>(`/cart/${cart_id}`),
  init: () => postRequest<API.Cart.CartList>('/cart/init'),
  delete: (id: string) => deleteRequest(`/cart/${id}`),
  items: {
    add: ({ cart_id, data }: API.Cart.CartItem.Create.Request) =>
      postRequest<API.Cart.Cart>(`/cart/${cart_id}/cart_items`, { data }),
    delete: ({ cart_id, data }: API.Cart.CartItem.Delete.Request) =>
      deleteRequest(`/cart/${cart_id}/cart_items`, { data }),
  },
};
