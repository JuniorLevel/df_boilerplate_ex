// @flow

import React, { useState } from 'react';
import {
	Layout,
	OrdersFilterClosed,
	OrderListProvider,
	FiltersSearchListContainer,
	FiltersSearchListItem,
} from '@juniorlevel/df_boilerplate-library';

export const OrdersFilterClosedPage = (): React$MixedElement => {
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

	const data = [
		{
			id: 1,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
		{
			id: 2,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
		{
			id: 3,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
		{
			id: 4,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
		{
			id: 5,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
		{
			id: 6,
			dataSearch: [],
			dataSearchUsers: [
				{
					id: 1,
					role: 'Creator',
					status: 'updated',
					username: 'Roman Smit',
				},
				{
					id: 2,
					role: 'Assigned',
					status: 'changed',
					username: 'John Doe',
				},
				{
					id: 3,
					role: 'Watcher',
					status: 'unmodified',
					username: 'Jerrard Doe',
				},
			],
		},
	];

	const [filters] = useState([
		{
			id: 1,
			title: 'Flow_typed-1',
			item: [{ id: 1, status: 'updated', text: 'lorem-1' }],
		},

		{
			id: 2,
			title: 'Flow_typed-2',
			item: [
				{ id: 1, status: 'changed', text: 'project-1' },
				{ id: 2, status: 'changed', text: 'project-2' },
				{ id: 3, status: 'updated', text: 'project-3' },
			],
		},
		{
			id: 3,
			title: 'Flow_typed-3',
			item: [
				{ id: 1, status: 'updated', text: 'issue-1' },
				{ id: 2, status: 'updated', text: 'issue-2' },
			],
		},
	]);

	return (
		<OrderListProvider>
			<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
				<OrdersFilterClosed open={false} filters={filters} />
				<FiltersSearchListContainer>
					<FiltersSearchListItem key={data[0].id} listData={data[0]} />
					<FiltersSearchListItem key={data[1].id} listData={data[1]} />
					<FiltersSearchListItem key={data[2].id} listData={data[2]} />
					<FiltersSearchListItem key={data[3].id} listData={data[3]} />
					<FiltersSearchListItem key={data[4].id} listData={data[4]} />
					<FiltersSearchListItem key={6} listData={null} />
				</FiltersSearchListContainer>
			</Layout>
		</OrderListProvider>
	);
};
