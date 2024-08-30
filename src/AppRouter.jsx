// @flow

import React from 'react';
import { createRootRoute, createRoute, createRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import { RoutesPage } from './RoutesPage/RoutesPage';
import { routes } from './RoutesPage/data';

const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => <RoutesPage />,
});

export const routeTree: any[] = rootRoute.addChildren([
	indexRoute,
	...routes.map((route) =>
		createRoute({
			getParentRoute: () => rootRoute,
			path: route.url,
			component: route.component,
		})
	),
]);

export const router: any[] = createRouter({ routeTree });

export const AppRouter = (): React.Node => <RouterProvider router={router} />;
