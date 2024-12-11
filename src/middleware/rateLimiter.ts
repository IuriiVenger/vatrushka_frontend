import { NextRequest, NextResponse } from 'next/server';

import { rateLimiter } from '@/config/network';
import { MillisecondsTime } from '@/constants';

const rateLimitMap = new Map();

type TRateLimitMiddlewareHandler = (
  request: NextRequest,
  response: NextResponse,
) => Promise<NextResponse<unknown | Response>>;

type TRateLimitMiddleware = (
  handler: TRateLimitMiddlewareHandler,
) => (req: NextRequest, res: NextResponse) => Response | Promise<NextResponse<unknown>>;

const rateLimitMiddleware: TRateLimitMiddleware =
  (handler: TRateLimitMiddlewareHandler) => (req: NextRequest, res: NextResponse) => {
    const ip = req.headers.get('x-forwarded-for') || req.ip;
    const minuteLimit = rateLimiter.minuteCount;
    const hourLimit = rateLimiter.hourCount;
    const minuteWindowMs = MillisecondsTime.ONE_MINUTE;
    const hourWindowMs = MillisecondsTime.ONE_HOUR;

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        minuteCount: 0,
        hourCount: 0,
        lastMinuteReset: Date.now(),
        lastHourReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(ip);

    if (Date.now() - ipData.lastMinuteReset > minuteWindowMs) {
      ipData.minuteCount = 0;
      ipData.lastMinuteReset = Date.now();
    }

    if (Date.now() - ipData.lastHourReset > hourWindowMs) {
      ipData.hourCount = 0;
      ipData.lastHourReset = Date.now();
    }

    if (ipData.hourCount >= hourLimit) {
      return new Response('Too Many Requests, please try again in 1 hour', {
        status: 429,
      });
    }

    if (ipData.minuteCount >= minuteLimit) {
      return new Response('Too Many Requests, please try again in 1 minute', {
        status: 429,
      });
    }

    ipData.minuteCount += 1;
    ipData.hourCount += 1;

    return handler(req, res);
  };

export default rateLimitMiddleware;
