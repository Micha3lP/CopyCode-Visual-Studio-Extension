import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['**/*.ts'],
		ignores: ['node_modules/', 'out/', '.vscode-test/'],
	},
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: 'module',
		},

		rules: {
			// Best Practices
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'import',
					format: ['camelCase', 'PascalCase'],
				},
			],

			// Code Style
			'curly': 'warn',
			'eqeqeq': 'warn',
			'semi': 'warn',
			'no-throw-literal': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

			// TypeScript Specific
			'@typescript-eslint/explicit-function-return-types': 'warn',
			'@typescript-eslint/explicit-member-accessibility': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-floating-promises': 'error',

			// Code Quality
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
		},
	},
];
