import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '../../../../__mocks__/fileMock';
import { FiltersClosedPreviewPage } from './FiltersClosedPreviewPage';

describe('FiltersClosedPreviewPage', () => {
	test('should render FiltersClosedPreviewPage component without crashing', () => {
		const { container } = render(<FiltersClosedPreviewPage />);
		expect(container).toBeInTheDocument();
	});
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<BrowserRouter>
					<FiltersClosedPreviewPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});
	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<BrowserRouter>
					<FiltersClosedPreviewPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});
	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<BrowserRouter>
					<FiltersClosedPreviewPage />
				</BrowserRouter>
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
