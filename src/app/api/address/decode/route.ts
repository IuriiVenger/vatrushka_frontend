import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: 'Missing address' }, { status: 422 });
  }

  const res = await fetch('https://cleaner.dadata.ru/api/v1/clean/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${process.env.DADATA_API_KEY}`,
      'X-Secret': `${process.env.DADATA_SECRET}`,
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();

  if (responseData.status >= 400) {
    return NextResponse.json({ error: responseData.detail }, { status: responseData.status });
  }

  return NextResponse.json(responseData);
}
