// @flow

import React from 'react';
import { OrdersFilterOpened, Layout, OrderListProvider } from '@juniorlevel/df_boilerplate-library';
import { filters, sidebarButtons } from './data';

export const OrdersFilterOpenedPage = (): React.Node => (
	<OrderListProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpened open filters={filters} />
		</Layout>
	</OrderListProvider>
);
