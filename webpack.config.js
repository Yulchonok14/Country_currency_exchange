// eslint-disable-next-line  @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line  @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const isProduction = env === 'production';
    return {
        mode: 'development',
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                compilerOptions: {
                                    module: 'esnext',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        resolve: {extensions: ['.ts', '.tsx', '.js']},
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: 'bundle.js',
        },
        devServer: {
            static: path.resolve(__dirname, 'public'),
            port: 8000,
            hot: 'only',
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        performance: {
            maxEntrypointSize: 500000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
        ],
    };
};
