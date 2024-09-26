// @flow

import React from 'react';
import { Flex, Badge } from 'antd';

export const sidebarButtons = [
	{
		id: 1,
		title: 'Orders',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'Compare',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'Admin',
		onClick: () => {},
	},
];

export const filters = [
	{
		title: 'Group1',
		description: 'CustomItem1',
	},
	{
		title: 'Group2',
		description: 'CustomItem2',
	},
	{
		title: 'Group3',
		description: 'CustomItem3',
	},
	{
		title: 'Group4',
		description: 'CustomItem4',
	},
	{
		title: 'Group5',
		description: 'CustomItem5',
	},
	{
		title: 'Group6',
		description: 'CustomItem6',
	},
];

export const items = [
	{
		key: 1,
		label: (
			<Flex gap={10} align="center">
  <div>Main info</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 1</div> as React.Node,
	},
	{
		key: 2,
		label: (
			<Flex gap={10} align="center">
  <div>Chat</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 2</div> as React.Node,
	},
	{
		key: 3,
		label: (
			<Flex gap={10} align="center">
  <div>Dashboard</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 3</div> as React.Node,
	},
	{
		key: 4,
		label: (
			<Flex gap={10} align="center">
  <div>Documents</div>
  <Badge count={3} />
</Flex> as React.Node
		),
		children: <div>Content of Tab Pane 4</div> as React.Node,
	},
];
