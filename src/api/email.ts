import { API } from './types';

import { internalAxiosInstance } from '.';

export const email = {
  send: async (data: API.Email.Send.Request) => internalAxiosInstance.postRequest('/email/send', { data }),
  contactMe: async (data: API.Email.ContactMe.Request) => {
    const { name, phone, message } = data;
    const text = `Поступила новая заявка на обратную связь от ${name}, ${phone}. Сообщение: ${message}`;
    const subject = `Новая заявка на обратную связь от ${name}, ${phone}`;
    await email.send({
      subject,
      text,
    });
  },
  wholesaleRequest: async (data: API.Email.LeaveRequest.Request) => {
    const { name, phone, email: customerEmail } = data;
    const text = `Поступила новая заявка на оптовый заказ от ${name}, ${phone}, ${customerEmail}`;
    const subject = `Новая заявка на оптовый заказ от ${customerEmail}`;
    await email.send({
      subject,
      text,
    });
  },
};
