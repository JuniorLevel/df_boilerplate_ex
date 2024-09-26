module.exports = {
	parser: 'hermes-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
			},
		},
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'eslint:recommended',
		'plugin:ft-flow/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: ['react', 'ft-flow', 'fb-flow', 'react-hooks', 'import'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'import/no-extraneous-dependencies': 0,
		'react/jsx-filename-extension': 0,
		'fb-flow/use-indexed-access-type': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/function-component-definition': 0,
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		'consistent-return': 0,
		'no-alert': 'off',
	},
	env: {
		browser: true,
		es2021: true,
	},
};
