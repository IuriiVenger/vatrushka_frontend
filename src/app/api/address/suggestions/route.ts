import { NextRequest, NextResponse } from 'next/server';

import { dadataLocationBoost } from '@/config/network';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Missing suggest_address parameter' }, { status: 422 });
  }

  const res = await fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${process.env.DADATA_API_KEY}`,
    },
    body: JSON.stringify({
      query: address,
      locations_boost: [{ kladr_id: dadataLocationBoost }],
    }),
  });

  const responseData = await res.json();

  if (res.status >= 400) {
    return NextResponse.json({ error: responseData.detail }, { status: res.status });
  }

  return NextResponse.json(responseData);
}
