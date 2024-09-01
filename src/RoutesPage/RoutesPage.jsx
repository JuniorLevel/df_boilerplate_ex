// @flow

import React from 'react';
import { useNavigate, Outlet } from '@tanstack/react-router';

interface IRoutesPageProps {
	children: React.ChildrenArray<any>;
}

export function RoutesPage({ children }: IRoutesPageProps): React.Node {
	const navigate = useNavigate();

	return (
		<>
			<hr />
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '20px',
					padding: '20px',
				}}
			>
				{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { navigate }) : child))}
			</div>
			<hr />
			<Outlet />
		</>
	);
}
