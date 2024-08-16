// @flow

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	WelcomePage1,
	WelcomePage2,
	WelcomePage3,
	WelcomePage4,
	WelcomePage5,
	WelcomePage6,
	WelcomePage7,
	WelcomePage8,
	FiltersOpenedPage,
	FiltersClosedPage,
	FiltersClosedPreviewPage,
	DiffOpenedCardsPage,
	DiffClosedCardsPage,
	OrderPage,
	TimeWidgetsPage,
} from '@juniorlevel/df_boilerplate-library';
import { HomePage } from './styleguide/templates/HomePage/HomePage';
import Image1 from './styleguide/templates/WelcomePages/images/Image1.jpg';
import Image2 from './styleguide/templates/WelcomePages/images/Image2.jpg';
import Image3 from './styleguide/templates/WelcomePages/images/Image3.jpg';
import Image4 from './styleguide/templates/WelcomePages/images/Image4.jpg';
import { HomeDev } from './HomeDev';

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
		<Route path="/FiltersOpenedPage" element={<FiltersOpenedPage />} />
		<Route path="/FiltersClosedPage" element={<FiltersClosedPage />} />
		<Route
			path="/FiltersClosedPreviewPage"
			element={<FiltersClosedPreviewPage />}
		/>
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
