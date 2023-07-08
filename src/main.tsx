import '~/main.less';

import {
  BrowserTracing,
  init,
  makeBrowserOfflineTransport,
  makeFetchTransport,
  reactRouterV6Instrumentation
} from '@sentry/react';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom';

import { AppWithProfiler } from '~/app';
import { IS_PROD, MODE, SENTRY_DSN } from '~/constants';

const root = createRoot(document.querySelector('#root') as HTMLElement);

if (IS_PROD) {
  init({
    dsn: SENTRY_DSN,
    environment: MODE,
    tracesSampleRate: 0.1,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: reactRouterV6Instrumentation(
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes
        )
      })
    ],
    attachStacktrace: true,
    autoSessionTracking: true,
    sendClientReports: true,
    transport: makeBrowserOfflineTransport(makeFetchTransport)
  });
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppWithProfiler />
    </BrowserRouter>
  </StrictMode>
);
