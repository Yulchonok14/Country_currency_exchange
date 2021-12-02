module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb/hooks',
    ],
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-import',
        'eslint-plugin-react',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react-hooks',
    ],
    rules: {
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-interface': 'off',

        'no-dupe-class-members': 'off', // overloads is dupe members
        'react/prop-types': 'off', // typescript fully cover typing
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx'],
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'either',
                depth: 25,
            },
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
            },
        ],
        'react/jsx-no-bind': ['error'],
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/indent': ['error', 4],
        semi: ['error', 'always'],
        'semi-style': ['error', 'last'],
        'arrow-body-style': ['error', 'always'],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'no-multi-spaces': 'error',
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'multiline-ternary': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'as-needed'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
        react: {
            version: 'latest',
        },
    },
};
