// @flow

import React from 'react';
import { FiltersSearchListItem, Layout, OrdersFilterClosed, OrdersFilterProvider, FiltersSearchListContainer } from '@/components';
import { data, filters, sidebarButtons } from './data';

export const OrdersFilterClosedPage = (): React.Node => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosed open={false} dialog={false} filters={filters} />
			<FiltersSearchListContainer>
				<FiltersSearchListItem key={data[0].id} listData={data[0]} />
				<FiltersSearchListItem key={data[1].id} listData={data[1]} />
				<FiltersSearchListItem key={data[2].id} listData={data[2]} />
				<FiltersSearchListItem key={data[3].id} listData={data[3]} />
				<FiltersSearchListItem key={data[4].id} listData={data[4]} />
				<FiltersSearchListItem key={6} listData={null} />
			</FiltersSearchListContainer>
		</Layout>
	</OrdersFilterProvider>
);
