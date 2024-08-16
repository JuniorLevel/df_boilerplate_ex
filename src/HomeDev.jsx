// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const navigates = [
	{ id: 1, name: 'Home', url: '/home' },
	{ id: 2, name: 'Order', url: '/order' },
	{ id: 3, name: 'TimeWidgets', url: '/TimeWidgetsPage' },
	{ id: 4, name: 'FiltersOpenedPage', url: '/FiltersOpenedPage' },
	{ id: 5, name: 'FiltersClosedPage', url: '/FiltersClosedPage' },
	{ id: 6, name: 'FiltersClosedPreviewPage', url: '/FiltersClosedPreviewPage' },
	{ id: 7, name: 'DiffOpenedCardsPage', url: '/DiffOpenedCardsPage' },
	{ id: 8, name: 'DiffClosedCardsPage', url: '/DiffClosedCardsPage' },
	{ id: 9, name: 'WelcomePage1', url: '/WelcomePage1' },
	{ id: 10, name: 'WelcomePage2', url: '/WelcomePage2' },
	{ id: 11, name: 'WelcomePage3', url: '/WelcomePage3' },
	{ id: 12, name: 'WelcomePage4', url: '/WelcomePage4' },
	{ id: 13, name: 'WelcomePage5', url: '/WelcomePage5' },
	{ id: 14, name: 'WelcomePage6', url: '/WelcomePage6' },
	{ id: 15, name: 'WelcomePage7', url: '/WelcomePage7' },
	{ id: 16, name: 'WelcomePage8', url: '/WelcomePage8' },
];

export const HomeDev = (): React$MixedElement => (
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
				{navigates.map((item) => (
					<li key={item.id}>
						<Link to={item.url}>{item.name}</Link>
					</li>
				))}
			</ul>
		</header>
		<hr />
	</div>
);
