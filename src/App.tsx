import { withProfiler, withSentryReactRouterV6Routing } from '@sentry/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '~/routes'

// TODO: Add lazy import here for error pages from views folder

export const SentryRoutes = withSentryReactRouterV6Routing(Routes);

export function App() {
  return (
    <Suspense>
      <SentryRoutes>
        {routes.map(route => {
          return (
            <Route
              index={route.isIndex}
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          )
        })}
      </SentryRoutes>
    </Suspense>
  );
}

export const AppWithProfiler = withProfiler(App)
