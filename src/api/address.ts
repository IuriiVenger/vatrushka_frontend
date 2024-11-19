import { API } from './types';

import { deleteRequest, getRequest, internalAxiosInstance, patchRequest, postRequest } from '@/api';

export const address = {
  getAll: async () => getRequest<API.Address.Address[]>('/address/addresses'),
  getById: async (id: string) => getRequest<API.Address.Address>(`/address/addresses/${id}`),
  decode: (decoding_address: string) =>
    internalAxiosInstance.postRequest<API.Dadata.Address[]>(`/address/decode`, { data: [decoding_address] }),
  suggestions: (finding_address: string) =>
    internalAxiosInstance.getRequest<API.Dadata.Suggestions.Suggestions>(`/address/suggestions`, {
      params: { address: finding_address },
    }),
  delete: async (id: string) => deleteRequest(`/address/address/${id}`), // not implemented on backend
  create: async (data: API.Address.Create.Request) => postRequest<API.Address.Address>('/address/address', { data }),
  update: async (id: string, data: API.Address.Update.Request) =>
    patchRequest<API.Address.Address>(`/address/address/${id}`, { data }),
};
