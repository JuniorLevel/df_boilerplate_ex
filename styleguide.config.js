/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	sections: [
		{
			name: 'OrderListPreviewPage',
			content: 'src/OrderListPreviewPage/OrderListPreviewPage.md',
		},
		{
			name: 'DiffClosedCardsPage',
			content: 'src/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'OrdersFilterClosedPage',
			content: 'src/OrdersFilterClosedPage/OrdersFilterClosedPage.md',
		},
		{
			name: 'OrdersFilterOpenedPage',
			content: 'src/OrdersFilterOpenedPage/OrdersFilterOpenedPage.md',
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
			name: 'WelcomePage',
			content: 'src/WelcomePages/Welcome.md',
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
