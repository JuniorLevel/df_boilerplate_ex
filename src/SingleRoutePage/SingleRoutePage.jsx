/* eslint-disable react/no-unstable-nested-components */
// @flow

import React from 'react';
import { useNavigate, useRouter, RouterProvider, createRootRoute, createRoute, createMemoryHistory, createRouter, Outlet } from '@tanstack/react-router';

export const NavigateButton = () => {
	const navigate = useNavigate();

	return (
		<button type="button" onClick={() => navigate({ to: '/dialog' })}>
			Show mobile dialog
		</button>
	);
};

export const GoToBackButton = () => {
	const { history } = useRouter();
	return (
		<button type="button" onClick={() => history.go(-1)}>
			Go back
		</button>
	);
};

export const ParentComponent = ({ children }: React.Node): React.Node => (
	<>
		{children}
		<NavigateButton />
	</>
);

export const DialogComponent = ({ children }: { children: React.Node }): React.Node => (
	<>
		{children}
		<GoToBackButton />
	</>
);

interface ICommonRoutingComponentProps {
	children: React.Node;
	viewMode: boolean;
}

export const CommonRoutingComponent = ({ children, viewMode }: ICommonRoutingComponentProps): React.Node => {
	const rootRoute = createRootRoute({
		component: () => (
			<div>
				{viewMode ? (
					<Outlet />
				) : (
					<>
						{children}
						<Outlet />
					</>
				)}
			</div>
		),
	});

	const IndexRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: () => (viewMode ? children : <div />),
	});

	const DialogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/dialog',
		component: () =>
			viewMode ? (
				<DialogComponent>
					<p>mobile dialog</p>
				</DialogComponent>
			) : (
				<DialogComponent>
					<p>dialog window</p>
				</DialogComponent>
			),
	});
	const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

	const memoryHistory = createMemoryHistory({
		initialEntries: ['/'],
	});

	const router = createRouter({ routeTree, history: memoryHistory });
	return <RouterProvider router={router} />;
};
