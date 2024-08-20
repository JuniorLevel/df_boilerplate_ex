// @flow

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage1 } from './WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from './WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from './WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from './WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from './WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from './WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from './WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from './WelcomePages/WelcomePage8/WelcomePage8';
import { HomePage } from './HomePage/HomePage';
import { HomeDev } from './HomeDev';
import { OrdersFilterOpenedPage } from './OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrdersFilterClosedPage } from './OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListPreviewPage } from './OrderListPreviewPage/OrderListPreviewPage';
import { DiffOpenedCardsPage } from './DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from './DiffClosedCardsPage/DiffClosedCardsPage';
import { OrderPage } from './OrderPage/OrderPage';
import { TimeWidgetsPage } from './TimeWidgetsPage/TimeWidgetsPage';
import Image1 from './WelcomePages/images/Image1.jpg';
import Image2 from './WelcomePages/images/Image2.jpg';
import Image3 from './WelcomePages/images/Image3.jpg';
import Image4 from './WelcomePages/images/Image4.jpg';

const imagesUrls = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

export const AppRouter = (): React$MixedElement => (
	<Routes>
		<Route path="/" element={<HomeDev />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/order" element={<OrderPage />} />
		<Route path="/TimeWidgetsPage" element={<TimeWidgetsPage />} />
		<Route
			path="/OrdersFilterOpenedPage"
			element={<OrdersFilterOpenedPage />}
		/>
		<Route
			path="/OrdersFilterClosedPage"
			element={<OrdersFilterClosedPage />}
		/>
		<Route path="/OrderListPreviewPage" element={<OrderListPreviewPage />} />
		<Route path="/DiffOpenedCardsPage" element={<DiffOpenedCardsPage />} />
		<Route path="/DiffClosedCardsPage" element={<DiffClosedCardsPage />} />
		<Route
			path="/WelcomePage1"
			element={<WelcomePage1 imagesUrls={imagesUrls} />}
		/>
		<Route
			path="/WelcomePage2"
			element={<WelcomePage2 imagesUrls={imagesUrls} />}
		/>
		<Route
			path="/WelcomePage3"
			element={<WelcomePage3 imagesUrls={imagesUrls} />}
		/>
		<Route
			path="/WelcomePage4"
			element={<WelcomePage4 imagesUrls={imagesUrls} />}
		/>
		<Route path="/WelcomePage5" element={<WelcomePage5 imageUrl={Image1} />} />
		<Route path="/WelcomePage6" element={<WelcomePage6 imageUrl={Image2} />} />
		<Route path="/WelcomePage7" element={<WelcomePage7 imageUrl={Image3} />} />
		<Route path="/WelcomePage8" element={<WelcomePage8 imageUrl={Image4} />} />
	</Routes>
);
