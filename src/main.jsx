// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from '@juniorlevel/df_boilerplate-library';
import { AppRouter } from './AppRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<BrowserRouter basename="/">
			<ThemeWrapper>
				<AppRouter />
			</ThemeWrapper>
		</BrowserRouter>
	</StrictMode>
);
