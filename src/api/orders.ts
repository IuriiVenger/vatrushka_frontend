import { API } from './types';

import { getRequest, postRequest } from '.';

export const orders = {
  getAll: (params: API.Orders.List.Request) => getRequest<API.Orders.List.Response>('/order', { params }), // not implemented on backend
  getById: (id: string) => getRequest<API.Orders.Order>(`/orders/${id}`),
  create: (data: API.Orders.Create.Request) => postRequest<API.Orders.Order>('/order', { data }),
  paymentMethods: (params: API.Payment.PaymentMethods.Request) =>
    getRequest<API.Payment.PaymentMethods.PaymentMethod[]>('/payment_method', { params }),
  deliveryTimeframes: (params: API.Orders.DeliveryTimeframes.Request) =>
    getRequest<API.Orders.DeliveryTimeframes.Response>('/order/delivery_timeframes', { params }),
  loyalty: {
    bonus: {
      calculate: (params: API.Orders.Loyalty.Bonus.Calculate.Request) =>
        getRequest<API.Orders.Loyalty.Bonus.Calculate.Response>('/loyalty/bonus/calculate', { params }),
    },
  },
};
