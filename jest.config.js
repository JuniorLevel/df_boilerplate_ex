module.exports = {
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testEnvironment: 'jest-environment-jsdom',
	transformIgnorePatterns: ['node_modules/(?!(react-native|react-navigation)/.*)'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
		'^@/(.*)$': '<rootDir>/src/$1',
	},

	moduleFileExtensions: ['js', 'jsx', 'json'],
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
};
