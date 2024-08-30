// @flow

import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { routes } from './data';

routes.push({ component: <div>Hello, ex</div>, url: '/ex' });
routes.push({ component: <div>Hello, ex2</div>, url: '/ex2' });

export const RoutesPage = (): React.Node => {
	const navigate = useNavigate();
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '20px',
					padding: '20px',
				}}
			>
				<button type="button" onClick={() => navigate({ to: '/orderPage' })}>
					OrderPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/homePage' })}>
					HomePage
				</button>
				<button type="button" onClick={() => navigate({ to: '/timeWidgetsPage' })}>
					TimeWidgetsPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/ordersFilterOpenedPage' })}>
					OrdersFilterOpenedPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/ordersFilterClosedPage' })}>
					OrdersFilterClosedPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/orderListPreviewPage' })}>
					OrderListPreviewPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/diffOpenedCardsPage' })}>
					DiffOpenedCardsPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/diffClosedCardsPage' })}>
					DiffClosedCardsPage
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage1' })}>
					WelcomePage1
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage2' })}>
					WelcomePage2
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage3' })}>
					WelcomePage3
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage4' })}>
					WelcomePage4
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage5' })}>
					WelcomePage5
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage6' })}>
					WelcomePage6
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage7' })}>
					WelcomePage7
				</button>
				<button type="button" onClick={() => navigate({ to: '/welcomePage8' })}>
					WelcomePage8
				</button>
				{/* <button type="button" onClick={() => navigate({ to: '/ex' })}>
					exPage
				</button> */}
				{/* <button type="button" onClick={() => navigate({ to: '/ex2' })}>
					exPage2
				</button> */}
			</div>
			<hr />
		</>
	);
};
