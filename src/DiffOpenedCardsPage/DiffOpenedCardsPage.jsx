// @flow

import React from 'react';
import { Row, Col, Pagination as OrdersPagination } from 'antd';
import { Layout, Footer, OrderListPreviewContainer, OrderListContainer, OrderListItem, Order, OrdersFilterOpened } from '@juniorlevel/df_boilerplate-library';
import { sidebarButtons, filters, data } from './data';

export const DiffOpenedCardsPage = (): React.Node => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<Row>
			<Col span={12}>
				<OrdersFilterOpened open filters={filters} />
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
				<OrdersFilterOpened open filters={filters} />
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
