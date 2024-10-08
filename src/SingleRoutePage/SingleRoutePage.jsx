/* eslint-disable react/no-unstable-nested-components */
// @flow

import React from 'react';
import { useNavigate, useRouter, RouterProvider, createRootRoute, createRoute, createMemoryHistory, createRouter, Outlet } from '@tanstack/react-router';

export const NavigateButton = (): React.Node => {
	const navigate = useNavigate();

	return (
		<button type="button" onClick={() => navigate({ to: '/dialog' })}>
			Show mobile dialog
		</button>
	);
};

export const GoToBackButton = (): React.Node => {
	const { history } = useRouter();
	return (
		<button type="button" onClick={() => history.go(-1)}>
			Go back
		</button>
	);
};

interface IParentComponentProps {
	children: React.Node;
}

export const ParentComponent = ({ children }: IParentComponentProps): React.Node => (
	<>
		{children}
		<NavigateButton />
	</>
);

interface IDialogComponentProps {
	children: React.Node;
}

export const DialogComponent = ({ children }: IDialogComponentProps): React.Node => (
	<>
		{children}
		<GoToBackButton />
	</>
);

type TViewMode = 'mobile' | 'desktop';

interface ICommonRoutingComponentProps {
	children: React.Node;
	viewMode: TViewMode;
}

export const CommonRoutingComponent = ({ children, viewMode }: ICommonRoutingComponentProps): React.Node => {
	const rootRoute = createRootRoute({
		component: () => (
			<div>
				{viewMode === 'mobile' ? (
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
		component: () => (viewMode === 'mobile' ? children : <div />),
	});

	const DialogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/dialog',
		component: () =>
			viewMode === 'mobile' ? (
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
