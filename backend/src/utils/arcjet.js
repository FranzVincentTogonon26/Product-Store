import arcjet, { tokenBucket, shield, detectBot, slidingWindow } from '@arcjet/node';

import { ENV } from '../config/env.js';

// init arcjet
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ['ip.src'],
  rules: [
    // shield protects your app from common attacks e.g. SQL injection, XSS, CSRF attacks
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE',
      // block all bots except search engines
      allow: [
        'CATEGORY:SEARCH_ENGINE'
        // see the full list at https://arcjet.com/bot-list
      ]
    }),
    // rate limiting
    tokenBucket({
      mode: 'LIVE',
      refillRate: 5,
      interval: 10,
      capacity: 10
    })
  ]
});
