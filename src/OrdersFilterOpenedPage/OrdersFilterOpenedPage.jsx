// @flow

import React from 'react';
import { OrdersFilterOpened, Layout, OrdersFilterProvider } from '@juniorlevel/df_boilerplate-library';
import { filters, sidebarButtons } from './data';

export const OrdersFilterOpenedPage = (): React.Node => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpened open dialog={false} filters={filters} />
		</Layout>
	</OrdersFilterProvider>
);
