// @flow

import React from 'react';
import { Layout, TimeWidgetsPanel } from '@juniorlevel/df_boilerplate-library';

export const TimeWidgetsPage = (): React$MixedElement => {
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

	return (
		<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
			<TimeWidgetsPanel />
		</Layout>
	);
};
