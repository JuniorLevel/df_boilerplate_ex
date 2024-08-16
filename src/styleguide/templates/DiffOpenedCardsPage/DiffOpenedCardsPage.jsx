// @flow

import React from 'react';
import {
	Col,
	FiltersOpened,
	FiltersSearchListWithPreview,
	FiltersSearchListWithPreviewContainer,
	Footer,
	Layout,
	Row,
} from '@juniorlevel/df_boilerplate-library';

export const DiffOpenedCardsPage = (): React$MixedElement => {
	const buttons = [
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

	const filtersCards = [
		{
			id: 1,
			cardItem: [{ id: 1, status: 'changed', text: 'lorem-1' }],
		},

		{
			id: 2,
			cardItem: [
				{ id: 1, status: 'updated', text: 'project-1' },
				{ id: 2, status: 'changed', text: 'project-2' },
				{ id: 3, status: 'updated', text: 'project-3' },
			],
		},
	];

	return (
		<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
			<Row>
				<Col span={12}>
					<FiltersOpened isOpen filtersCards={filtersCards} />
					<FiltersSearchListWithPreviewContainer height={555}>
						<FiltersSearchListWithPreview />
					</FiltersSearchListWithPreviewContainer>
				</Col>
				<Col span={12}>
					<FiltersOpened isOpen filtersCards={filtersCards} />
					<FiltersSearchListWithPreviewContainer height={555}>
						<FiltersSearchListWithPreview />
					</FiltersSearchListWithPreviewContainer>
				</Col>
			</Row>
			<Footer />
		</Layout>
	);
};
