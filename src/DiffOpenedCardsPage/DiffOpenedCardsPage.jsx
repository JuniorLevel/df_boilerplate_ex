// @flow

import React, { useState } from 'react';
import {
	Row,
	Col,
	Pagination as OrdersPagination,
	Layout,
	Footer,
	OrderListPreviewContainer,
	OrderListContainer,
	OrderListItem,
	Order,
	OrdersFilterOpened,
} from '@juniorlevel/df_boilerplate-library';

export const DiffOpenedCardsPage = (): React$MixedElement => {
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
			dataSearch: [
				{
					id: 1,
					counter: 7,
					status: 'updated',
					text: 'Lorem',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			dataSearch: [
				{
					id: 1,
					counter: 3,
					status: 'changed',
					text: 'Typescript',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			dataSearch: [
				{
					id: 1,
					counter: 3,
					status: 'changed',
					text: 'Typescript',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			dataSearch: [
				{
					id: 1,
					counter: 3,
					status: 'changed',
					text: 'Typescript',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			dataSearch: [
				{
					id: 1,
					counter: 7,
					status: 'updated',
					text: 'Lorem',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			dataSearch: [
				{
					id: 1,
					counter: 7,
					status: 'updated',
					text: 'Lorem',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			id: 7,
			dataSearch: [
				{
					id: 1,
					counter: 7,
					status: 'updated',
					text: 'Lorem',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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
			id: 8,
			dataSearch: [
				{
					id: 1,
					counter: 7,
					status: 'updated',
					text: 'Lorem',
					role: 'Assigned',
				},
				{
					id: 2,
					counter: 3,
					status: 'unmodified',
					text: 'About us',
					role: 'Watcher',
				},
			],
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

	const [filtersCards] = useState([
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
		<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
			<Row>
				<Col span={12}>
					<OrdersFilterOpened open filters={filtersCards} />
					<OrderListPreviewContainer height={555}>
						<Col span={12}>
							<OrderListContainer>
								<OrderListItem key={data[0].id} data={data[0]} />
								<OrderListItem key={data[1].id} data={data[1]} />
								<OrderListItem key={data[2].id} data={data[2]} />
								<OrderListItem key={data[3].id} data={data[3]} />
								<OrderListItem key={data[4].id} data={data[4]} />
								<OrderListItem key={data[5].id} data={data[5]} />
								<OrderListItem key={data[6].id} data={null} />
							</OrderListContainer>
							<OrdersPagination defaultCurrent={1} total={50} />
						</Col>
						<Col span={12}>
							<Order />
						</Col>
					</OrderListPreviewContainer>
				</Col>
				<Col span={12}>
					<OrdersFilterOpened open filters={filtersCards} />
					<OrderListPreviewContainer height={555}>
						<Col span={12}>
							<OrderListContainer>
								<OrderListItem key={data[0].id} data={data[0]} />
								<OrderListItem key={data[1].id} data={data[1]} />
								<OrderListItem key={data[2].id} data={data[2]} />
								<OrderListItem key={data[3].id} data={data[3]} />
								<OrderListItem key={data[4].id} data={data[4]} />
								<OrderListItem key={data[5].id} data={data[5]} />
								<OrderListItem key={data[6].id} data={null} />
							</OrderListContainer>
							<OrdersPagination defaultCurrent={1} total={50} />
						</Col>
						<Col span={12}>
							<Order />
						</Col>
					</OrderListPreviewContainer>
				</Col>
			</Row>
			<Footer />
		</Layout>
	);
};
