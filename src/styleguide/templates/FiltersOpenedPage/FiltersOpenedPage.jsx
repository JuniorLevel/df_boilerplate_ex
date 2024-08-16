// @flow

import {
	FiltersClosedListProvider,
	FiltersOpened,
	Layout,
} from '@juniorlevel/df_boilerplate-library';
import React, { useState } from 'react';

export const FiltersOpenedPage = (): React.Node => {
	const buttons = [
		{
			id: 1,
			title: 'Orders',
			onClick: () => {},
		},
		{
			id: 2,
			title: 'Compare',
			onClick: () => {},
		},
		{
			id: 3,
			title: 'Admin',
			onClick: () => {},
		},
	];

	const [filters] = useState([
		{
			id: 1,
			cardItem: [{ id: 1, status: 'changed', text: 'lorem-1' }],
		},

		{
			id: 2,
			cardItem: [
				{ id: 1, status: 'updated', text: 'project-1' },
				{ id: 2, status: 'changed', text: 'project-2' },
				{ id: 3, status: 'updated', text: 'project-3' },
			],
		},
	]);

	return (
		<FiltersClosedListProvider>
			<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
				<FiltersOpened isOpen filtersCards={filters} />
			</Layout>
		</FiltersClosedListProvider>
	);
};
