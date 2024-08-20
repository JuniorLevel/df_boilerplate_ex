import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '../../__mocks__/fileMock';
import { DiffOpenedCardsPage } from './DiffOpenedCardsPage';

describe('DiffOpenedCardsPage', () => {
	test('should render DiffOpenedCardsPage component without crashing', () => {
		const { container } = render(<DiffOpenedCardsPage />);
		expect(container).toBeInTheDocument();
	});
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<BrowserRouter>
					<DiffOpenedCardsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});
	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<BrowserRouter>
					<DiffOpenedCardsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});
	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<BrowserRouter>
					<DiffOpenedCardsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
