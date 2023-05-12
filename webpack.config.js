// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        host: 'localhost'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                options: { transpileOnly: true },
                exclude: ['/node_modules/']
            },
            {
                test: /\.pcss$/i,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: {
                                    'autoprefixer': {},
                                    'postcss-easy-import': {},
                                    'postcss-custom-media': {},
                                    'postcss-for': {},
                                    'postcss-mixins': {},
                                    'postcss-nested': {},
                                    'postcss-simple-vars': {}
                                }
                            }
                        }
                    }]
            },
            {
                test: /\.(handlebars|hbs)$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@static': path.resolve(__dirname, 'static')
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }

    return config;
};
