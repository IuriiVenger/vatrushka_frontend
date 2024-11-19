import { API } from './types';

import { getRequest, postRequest } from '.';

export const orders = {
  getAll: (params: API.Orders.List.Request) => getRequest<API.Orders.Order[]>('/orders', { params }), // not implemented on backend
  getById: (id: string) => getRequest<API.Orders.Order>(`/orders/${id}`),
  create: (data: API.Orders.Create.Request) => postRequest<API.Orders.Order>('/orders', { data }),
  paymentMethods: (params: API.Payment.PaymentMethods.Request) =>
    getRequest<API.Payment.PaymentMethods.PaymentMethod[]>('/payment/payment-methods', { params }),
};
