// @flow

import React from 'react';
import { TimeWidgetsPanel, Layout } from '@juniorlevel/df_boilerplate-library';
import { sidebarButtons } from './data';

export const TimeWidgetsPage = (): React.Node => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Layout>
);
