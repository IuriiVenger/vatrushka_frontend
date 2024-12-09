import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

import { API } from '@/api/types';
import { OrderPaymentStatus, SecondsTime } from '@/constants';

type OrderPaymentParams = {
  params: {
    order_id: string;
  };
};

export async function GET(request: NextRequest, { params }: OrderPaymentParams) {
  const cookieStore = cookies();
  const { order_id } = params;
  const access_token = cookieStore.get('access_token');

  const baseUrl = process.env.REST_API_URL;

  if (order_id && access_token?.value) {
    const orderResponse = await fetch(`${baseUrl}/order/${order_id}`, {
      headers: {
        Authorization: `${access_token.value}`,
      },
    });

    const orderData: API.Orders.Order = await orderResponse.json();

    if (orderData.payment_status) {
      const userResponse = await fetch(`${baseUrl}/auth/me`, {
        headers: {
          Authorization: `${access_token.value}`,
        },
      });

      const userData: API.Auth.Me = await userResponse.json();

      const orderPaymentStatusModalProps = {
        isPaymentSuccessful: orderData.payment_status === OrderPaymentStatus.PAID,
        isUserLoggedIn: !userData.is_anonymous,
        phoneNumber: userData.phone,
        orderNumber: orderData.order_number,
      };

      cookieStore.set('order_payment_status_modal_props', JSON.stringify(orderPaymentStatusModalProps), {
        maxAge: SecondsTime.ONE_MINUTE,
      });
    }
  }

  return redirect('/');
}
