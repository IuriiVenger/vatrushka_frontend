import { API } from './types';

import { deleteRequest, getRequest, postRequest } from '@/api';

export const cart = {
  getAll: () => getRequest<API.Cart.Cart[]>('/cart'),
  getById: (cart_id: number) => getRequest<API.Cart.Cart>(`/cart/${cart_id}`),
  init: () => postRequest<API.Cart.Init.Response>('/cart/init'),
  delete: (id: number) => deleteRequest(`/cart/${id}`),
  items: {
    add: ({ cart_id, data }: API.Cart.CartItem.Create.Request) =>
      postRequest<API.Cart.Cart>(`/cart/${cart_id}/cart_items`, { data }),
    delete: ({ cart_id, data }: API.Cart.CartItem.Delete.Request) =>
      deleteRequest(`/cart/${cart_id}/cart_items`, { data }),
  },
};
