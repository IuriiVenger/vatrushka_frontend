import { API } from './types';

import { deleteRequest, getRequest, postRequest } from '@/api';

export const cart = {
  getAll: () => getRequest<API.Cart.Cart[]>('/cart'),
  create: () => postRequest<API.Cart.Cart>('/cart/init'),
  delete: (id: number) => deleteRequest(`/cart/${id}`),
  items: {
    add: (cart_id: string, data: API.Cart.CartItem.Create.Request) =>
      postRequest<API.Cart.CartItem.Create.Response>(`/cart/${cart_id}/cart_items`, { data }),
    delete: (cart_id: string, data: API.Cart.CartItem.Delete.Request) =>
      deleteRequest(`/cart/${cart_id}/cart_items`, { data }),
  },
};
