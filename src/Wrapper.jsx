/* eslint-disable no-unused-vars */
/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { ThemeWrapper } from '@juniorlevel/df_boilerplate-library';
import { RouterProvider, Outlet } from '@tanstack/react-router';
import { useErrorBoundary, ErrorBoundary } from 'react-error-boundary';

interface IWrapperProps {
	children: React.Node;
}

const Fallback = (): React.Node => {
	const { resetBoundary } = useErrorBoundary();

	return (
		<div>
			<p style={{ marginBottom: '10px' }}>Не меняйте данный props на этой странице, так как здесь нет контекста роутинга!</p>
			<button type="button" onClick={resetBoundary}>
				Обновить страницу
			</button>
		</div>
	);
};

const Wrapper = ({ children }: IWrapperProps): React.Node => (
	<ErrorBoundary
		fallback={<Fallback />}
		onReset={() => {
			window.location.reload();
		}}
	>
		<ThemeWrapper>{children}</ThemeWrapper>
	</ErrorBoundary>
);
export default Wrapper;

interface IRouteWrapperProps {
	router: any[];
}

export const RouterWrapper = ({ router }: IRouteWrapperProps): React.Node => <RouterProvider router={router} />;

export const OutletComponent = (): React.Node => <Outlet />;
