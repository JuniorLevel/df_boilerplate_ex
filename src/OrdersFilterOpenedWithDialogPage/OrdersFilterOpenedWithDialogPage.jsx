// @flow

import React from 'react';
import { Outlet, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { useMediaQuery } from 'react-responsive';
import { OrdersFilterMobileDialog, OrdersFilterOpened, Layout, OrdersFilterProvider, OrdersFilterDesktopDialog } from '@juniorlevel/df_boilerplate-library';
import { sidebarButtons, filters } from './data';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return mobileView ? (
			<OrdersFilterProvider>
				<Outlet />
			</OrdersFilterProvider>
		) : (
			<OrdersFilterProvider>
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpened open dialog filters={filters} />
				</Layout>
				<Outlet />
			</OrdersFilterProvider>
		);
	},
});

const IndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: function IndexComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return (
			mobileView && (
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpened open dialog filters={filters} />
				</Layout>
			)
		);
	},
});

const DialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dialog',
	component: function DialogComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return mobileView ? (
			<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
				<OrdersFilterMobileDialog />
			</Layout>
		) : (
			<OrdersFilterDesktopDialog />
		);
	},
});

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

export const OrdersFilterOpenedWithDialogPage = (): React.Node => <RouterProvider router={router} />;
