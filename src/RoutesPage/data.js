import { WelcomePage1 } from '../WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from '../WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from '../WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from '../WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from '../WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from '../WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from '../WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from '../WelcomePages/WelcomePage8/WelcomePage8';
import { HomePage } from '../HomePage/HomePage';
import { OrdersFilterOpenedPage } from '../OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrdersFilterClosedPage } from '../OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListPreviewPage } from '../OrderListPreviewPage/OrderListPreviewPage';
import { DiffOpenedCardsPage } from '../DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from '../DiffClosedCardsPage/DiffClosedCardsPage';
import { OrderPage } from '../OrderPage/OrderPage';
import { TimeWidgetsPage } from '../TimeWidgetsPage/TimeWidgetsPage';

export const routes = [
	{ component: HomePage, url: '/homePage' },
	{ component: OrderPage, url: '/orderPage' },
	{
		component: TimeWidgetsPage,
		url: '/timeWidgetsPage',
	},
	{
		component: OrdersFilterOpenedPage,
		url: '/ordersFilterOpenedPage',
	},
	{
		component: OrdersFilterClosedPage,
		url: '/ordersFilterClosedPage',
	},
	{
		component: OrderListPreviewPage,
		url: '/orderListPreviewPage',
	},
	{
		component: DiffOpenedCardsPage,
		url: '/diffOpenedCardsPage',
	},
	{
		component: DiffClosedCardsPage,
		url: '/diffClosedCardsPage',
	},
	{
		component: WelcomePage1,
		url: '/welcomePage1',
	},
	{
		component: WelcomePage2,
		url: '/welcomePage2',
	},
	{
		component: WelcomePage3,
		url: '/welcomePage3',
	},
	{
		component: WelcomePage4,
		url: '/welcomePage4',
	},
	{
		component: WelcomePage5,
		url: '/welcomePage5',
	},
	{
		component: WelcomePage6,
		url: '/welcomePage6',
	},
	{
		component: WelcomePage7,
		url: '/welcomePage7',
	},
	{
		component: WelcomePage8,
		url: '/welcomePage8',
	},
];
