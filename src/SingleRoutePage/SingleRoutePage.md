```jsx
import { useNavigate, createRootRoute, createRoute, createRouter, createHashHistory, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
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
					<OutletComponent />
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
		<ParentComponent>
			<>{mobileView ? <div>mobile dialog</div> : <div>dialog window</div>}</>
		</ParentComponent>
	),
});

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const router = createRouter({ routeTree });

<RouterWrapper router={router} />;
```
