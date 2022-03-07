module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"plugins": [
		"react",
	],
	"rules": {
		"indent": ["warn", "tab"],
		'comma-dangle': [0, 'always-multiline'],
		'no-undef': 0,
		'no-unused-vars':0,
		'no-param-reassign': ['error', { props: false }],
		'max-classes-per-file': 0,
		'max-len': 0,
		'no-mixed-operators': 0,
		'class-methods-use-this': 0,
		'function-paren-newline': ['error', 'multiline'],
		'function-call-argument-newline': ['error', 'consistent'],
		'no-plusplus': 0,
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'react/jsx-indent':[1,'tab',{checkAttributes: true}],
		"react/jsx-indent-props":[2, 'tab'],
		'react/react-in-jsx-scope':'off',
		//"plugin:react/jsx-runtime":"extends",
	},
}
