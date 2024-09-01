// @flow

import React from 'react';
import { RouterProvider, Link, createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { HomePage } from './HomePage/HomePage';
import { OrderPage } from './OrderPage/OrderPage';
import { TimeWidgetsPage } from './TimeWidgetsPage/TimeWidgetsPage';
import { OrdersFilterOpenedPage } from './OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrdersFilterClosedPage } from './OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListPreviewPage } from './OrderListPreviewPage/OrderListPreviewPage';
import { DiffOpenedCardsPage } from './DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from './DiffClosedCardsPage/DiffClosedCardsPage';
import { WelcomePage1 } from './WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from './WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from './WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from './WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from './WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from './WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from './WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from './WelcomePages/WelcomePage8/WelcomePage8';

const routes = [
	{ id: 1, name: 'HomePage', component: HomePage, path: '/homePage' },
	{ id: 2, name: 'OrderPage', component: OrderPage, path: '/orderPage' },
	{
		id: 3,
		name: 'TimeWidgetsPage',
		component: TimeWidgetsPage,
		path: '/timeWidgetsPage',
	},
	{ id: 4, name: 'OrdersFilterOpenedPage', component: OrdersFilterOpenedPage, path: '/ordersFilterOpenedPage' },
	{ id: 5, name: 'OrdersFilterClosedPage', component: OrdersFilterClosedPage, path: '/ordersFilterClosedPage' },
	{ id: 6, name: 'OrderListPreviewPage', component: OrderListPreviewPage, path: '/orderListPreviewPage' },
	{ id: 7, name: 'DiffOpenedCardsPage', component: DiffOpenedCardsPage, path: '/diffOpenedCardsPage' },
	{ id: 8, name: 'DiffClosedCardsPage', component: DiffClosedCardsPage, path: '/diffClosedCardsPage' },
	{ id: 9, name: 'WelcomePage1', component: WelcomePage1, path: '/welcomePage1' },
	{ id: 10, name: 'WelcomePage2', component: WelcomePage2, path: '/welcomePage2' },
	{ id: 11, name: 'WelcomePage3', component: WelcomePage3, path: '/welcomePage3' },
	{ id: 12, name: 'WelcomePage4', component: WelcomePage4, path: '/welcomePage4' },
	{ id: 13, name: 'WelcomePage5', component: WelcomePage5, path: '/welcomePage5' },
	{ id: 14, name: 'WelcomePage6', component: WelcomePage6, path: '/welcomePage6' },
	{ id: 15, name: 'WelcomePage7', component: WelcomePage7, path: '/welcomePage7' },
	{ id: 16, name: 'WelcomePage8', component: WelcomePage8, path: '/welcomePage8' },
];

const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<div>
			<header>
				<ul
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '20px',
						padding: '20px',
					}}
				>
					{routes.map((route) => (
						<Link key={route.id} to={route.path}>
							{route.name}
						</Link>
					))}
				</ul>
			</header>
			<hr />
		</div>
	),
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	...routes.map((route) =>
		createRoute({
			getParentRoute: () => rootRoute,
			path: route.path,
			component: route.component,
		})
	),
]);

const router = createRouter({ routeTree });

export const AppRouter = (): React.Node => <RouterProvider router={router} />;
