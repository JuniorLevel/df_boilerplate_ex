// @flow

import React from 'react';
import { OrdersFilterProvider, Layout, OrdersFilterClosed, OrderListPreviewContainer, OrderListContainer, Order, OrderListItem } from '@/components';
import { Col, Pagination as OrdersPagination } from 'antd';
import { sidebarButtons, filters, data } from './data';

export const OrderListPreviewPage = (): React.Node => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosed open={false} dialog={false} filters={filters} />
			<OrderListPreviewContainer height={160}>
				<Col span={12}>
					<OrderListContainer>
						<OrderListItem key={data[0].id} data={data[0]} />
						<OrderListItem key={data[1].id} data={data[1]} />
						<OrderListItem key={data[2].id} data={data[2]} />
						<OrderListItem key={data[3].id} data={data[3]} />
						<OrderListItem key={data[4].id} data={data[4]} />
						<OrderListItem key={data[5].id} data={null} />
						<OrderListItem key={data[6].id} />
					</OrderListContainer>
					<OrdersPagination total={50} />
				</Col>
				<Col span={12}>
					<Order />
				</Col>
			</OrderListPreviewContainer>
		</Layout>
	</OrdersFilterProvider>
);
