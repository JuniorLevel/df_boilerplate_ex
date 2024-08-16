module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-react',
		'@babel/preset-flow',
	],
	plugins: ['styled-components', 'babel-plugin-syntax-hermes-parser'],
};
