import { NextRequest, NextResponse } from 'next/server';

import { Client as MailjetClient } from 'node-mailjet';

import { mailjetApiSecret, mailjetApiKey } from '@/config/network';
import rateLimitMiddleware from '@/middleware/rateLimiter';

export const POST = rateLimitMiddleware(async (request: NextRequest) => {
  const { subject, text } = await request.json();
  const to = process.env.EMAIL_TO;

  if (!to || !subject || !text) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }

  const mailjetClient = new MailjetClient({
    apiKey: mailjetApiKey,
    apiSecret: mailjetApiSecret,
  });

  const emailData = {
    Messages: [
      {
        From: { Email: process.env.EMAIL_FROM, Name: 'Vatrushka' },
        To: [{ Email: to }],
        Subject: subject,
        TextPart: text,
      },
    ],
  };
  try {
    await mailjetClient.post('send', { version: 'v3.1' }).request(emailData);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
});
