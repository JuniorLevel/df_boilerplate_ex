// @flow

import React from 'react';
import { useNavigate, Outlet, useRouter } from '@tanstack/react-router';

interface ParentComponentProps {
	children: React.ChildrenArray<any>;
}

export const ParentComponent = ({ children }: ParentComponentProps): React.Node => {
	const navigate = useNavigate();
	const { history } = useRouter();

	return (
		<div>
			<div>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { navigate, history }) : child))}</div>
		</div>
	);
};

export const OutletComponent = (): React.Node => <Outlet />;
