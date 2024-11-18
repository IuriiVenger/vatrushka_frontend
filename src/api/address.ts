import { API } from './types';

import { deleteRequest, getRequest, internalAxiosInstance, patchRequest, postRequest } from '@/api';

export const address = {
  getAll: async () => getRequest<API.Address.Address[]>('/address/addresses'),
  getById: async (id: string) => getRequest<API.Address.Address>(`/address/addresses/${id}`),
  decode: (decoding_address: string) =>
    internalAxiosInstance.postRequest<API.Dadata.Address[]>(`/address/decode`, { data: [decoding_address] }),
  delete: async (id: string) => deleteRequest(`/address/addresses/${id}`), // not implemented on backend
  create: async (data: API.Address.Create.Request) => postRequest<API.Address.Address>('/address/addresses', { data }),
  update: async (id: string, data: API.Address.Create.Request) =>
    patchRequest<API.Address.Address>(`/address/addresses/${id}`, { data }),
};
