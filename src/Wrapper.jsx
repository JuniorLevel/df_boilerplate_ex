/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from '@juniorlevel/df_boilerplate-library';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React$MixedElement => (
	<BrowserRouter>
		<ThemeWrapper>{children}</ThemeWrapper>
	</BrowserRouter>
);

export default Wrapper;
