```jsx
import { useNavigate, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import { RouterWrapper } from '../Wrapper';
import { RoutesPage } from '../RoutesPage/RoutesPage';
import { ParentComponent, OutletComponent } from './SingleRoutePage';

const NavigationButtons = ({ navigate }) => (
	<>
		<button type="button" onClick={() => navigate({ to: '/dialog' })}>
			Show mobile dialog
		</button>
	</>
);

const GoToBackButton = ({ navigate, history }) => (
	<>
		<button type="button" onClick={() => history.go(-1)}>
			Go back
		</button>
	</>
);

const mobileView = false;

const rootRoute = createRootRoute({
	component: () => (
		<>
			{mobileView ? (
				<OutletComponent />
			) : (
				<ParentComponent>
					This is parent component with
					<NavigationButtons />
					<OutletComponent />
				</ParentComponent>
			)}
		</>
	),
});

const IndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<>
			{mobileView ? (
				<ParentComponent>
					This is parent component with
					<NavigationButtons />
				</ParentComponent>
			) : (
				<div />
			)}
		</>
	),
});

const DialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dialog',
	component: () => (
		<>
			{mobileView ? (
				<ParentComponent>
					mobile dialog
					<GoToBackButton />
				</ParentComponent>
			) : (
				<ParentComponent>
					dialog window
					<GoToBackButton />
				</ParentComponent>
			)}
		</>
	),
});

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<RouterWrapper router={router} />;
```
