/* eslint-disable no-unused-vars */
/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { ThemeWrapper } from '@juniorlevel/df_boilerplate-library';
import { RouterProvider } from '@tanstack/react-router';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React.Node => <ThemeWrapper>{children}</ThemeWrapper>;

export default Wrapper;

interface IRouteWrapperProps {
	router: any[];
}

export const RouterWrapper = ({ router }: IRouteWrapperProps): React.Node => <RouterProvider router={router} />;
