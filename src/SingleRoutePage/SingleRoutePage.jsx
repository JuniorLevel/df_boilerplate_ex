// @flow

import React from 'react';
import { useNavigate, Outlet } from '@tanstack/react-router';

interface ParentComponentProps {
	children: React.ChildrenArray<any>;
}

export const ParentComponent = ({ children }: ParentComponentProps): React.Node => {
	const navigate = useNavigate();

	return <>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { navigate }) : child))}</>;
};

export const OutletComponent = (): React.Node => <Outlet />;
