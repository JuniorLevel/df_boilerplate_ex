/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');
const fs = require('fs');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	exampleMode: 'expand',

	updateExample(props, exampleFilePath) {
		const { settings = {}, lang } = props;
		if (typeof settings.file === 'string') {
			const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);
			const { file, ...restSettings } = settings;
			const content = fs.readFileSync(filepath, 'utf8');
			const updatedContent = content
				.replace(/^\s*\/\/\s?@flow\s*\n/, '')
				.trim()
				.replace(/^export.*$/gm, '')
				.trim()
				.replace(/^\s*return.*$/gm, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim();
			return {
				content: updatedContent,
				settings: restSettings,
				lang,
			};
		}
		return props;
	},
	sections: [
		{
			name: 'RoutesPage',
			content: 'src/RoutesPage/RoutesPage.md',
		},
		{
			name: 'SingleRoutePage',
			content: 'src/SingleRoutePage/SingleRoutePage.md',
		},
		{
			name: 'OrderListPreviewPage',
			content: 'src/OrderListPreviewPage/OrderListPreviewPage.md',
		},
		{
			name: 'DiffClosedCardsPage',
			content: 'src/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'OrdersFilterPages',
			description: 'Примеры страниц с открытыми и закрытыми фильтрами',
			sections: [
				{
					name: 'OrdersFilterClosedPage',
					content: 'src/OrdersFilterClosedPage/OrdersFilterClosedPage.md',
				},
				{
					name: 'OrdersFilterOpenedPage',
					content: 'src/OrdersFilterOpenedPage/OrdersFilterOpenedPage.md',
				},
			],
			sectionDepth: 2,
		},
		{
			name: 'OrderPage',
			content: 'src/OrderPage/OrderPage.md',
		},
		{
			name: 'Layout',
			content: 'src/HomePage/Layout.md',
		},
		{
			name: 'WelcomePage1',
			content: 'src/WelcomePages/WelcomePage1/WelcomePage1.md',
		},
		{
			name: 'WelcomePage5',
			content: 'src/WelcomePages/WelcomePage5/WelcomePage5.md',
		},
	],
	styles: {
		StyleGuide: {
			content: { minWidth: '100%', padding: 5 },
		},
		Playground: {
			preview: { padding: 0 },
		},
	},
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/Wrapper.jsx'),
	},
	ignore: ['**/__snapshots__/**', '**/src/*.test.js'],
	webpackConfig: require('./webpack.config'),
};
