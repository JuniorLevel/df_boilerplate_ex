// @flow

import React from 'react';
import { OrdersFilterOpened, Layout, OrdersFilterProvider } from '@/components';
import { filters, sidebarButtons } from './data';

export const OrdersFilterOpenedPage = (): React.Node => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpened open dialog={false} filters={filters} />
		</Layout>
	</OrdersFilterProvider>
);
