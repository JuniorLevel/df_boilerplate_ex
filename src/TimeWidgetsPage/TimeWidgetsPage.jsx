// @flow

import React from 'react';
import { TimeWidgetsPanel, Layout } from '@/components';
import { sidebarButtons } from './data';

export const TimeWidgetsPage = (): React.Node => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Layout>
);
