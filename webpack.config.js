const path = require('path');

module.exports = {
    entry: {
        main: './src/js/index.js',
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/', // каталог, куда будут скопированы файлы
                            publicPath: 'img/', // путь к файлам относительно итогового bundle.js
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        alias: {
            '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
            '%components%': path.resolve(__dirname, 'src/blocks/components'),
            '%images%': path.resolve(__dirname, 'src/img')
        }
    }
};
