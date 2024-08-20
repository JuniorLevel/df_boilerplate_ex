import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TimeWidgetsPage } from './TimeWidgetsPage';
import '../../__mocks__/fileMock';

describe('TimeWidgetsPage', () => {
	test('should render TimeWidgetsPage component without crashing', () => {
		const { container } = render(<TimeWidgetsPage />);
		expect(container).toBeInTheDocument();
	});
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<BrowserRouter>
					<TimeWidgetsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});
	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<BrowserRouter>
					<TimeWidgetsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});
	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<BrowserRouter>
					<TimeWidgetsPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
