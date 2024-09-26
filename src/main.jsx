// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeWrapper } from "@/components";
import { AppRouter } from './AppRouter';

const container = document.getElementById('root') as HTMLElement | any;
const root = createRoot(container);
root.render(
	<StrictMode>
		<ThemeWrapper>
			<AppRouter />
		</ThemeWrapper>
	</StrictMode>
);
