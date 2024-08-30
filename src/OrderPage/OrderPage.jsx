// @flow

import React from 'react';
import { Flex, Badge, Row, Col } from 'antd';
import { Layout, OrderVersion, OrderPreview, OrderTabs, OrderContainer } from '@juniorlevel/df_boilerplate-library';
import { filters, items, sidebarButtons } from './data';

export const OrderPage = (): React.Node => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrderTabs
			items={[
				...items,
				{
					key: 5,
					label: (
						<Flex gap={10} align="center">
							<div>History</div>
							<Badge count={3} />
						</Flex>
					),
					children: (
						<OrderContainer>
							<Row gutter={[16, 16]}>
								<Col xs={12}>
									<Row gutter={[16, 16]}>
										<Col xs={12}>
											<OrderVersion filters={filters} />
										</Col>
										<Col xs={12}>
											<OrderPreview />
										</Col>
									</Row>
								</Col>

								<Col xs={12}>
									<Row gutter={[16, 16]}>
										<Col xs={12}>
											<OrderPreview />
										</Col>
										<Col xs={12}>
											<OrderVersion filters={filters} />
										</Col>
									</Row>
								</Col>
							</Row>
						</OrderContainer>
					),
				},
			]}
		/>
	</Layout>
);
