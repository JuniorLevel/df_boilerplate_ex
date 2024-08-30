/* eslint-disable no-unused-vars */
/* eslint-disable import/no-default-export */
// @flow

import React from 'react';
import { ThemeWrapper } from '@juniorlevel/df_boilerplate-library';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React.Node => <ThemeWrapper>{children}</ThemeWrapper>;

export default Wrapper;
