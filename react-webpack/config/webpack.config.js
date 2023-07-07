const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false
                }
            },
        ]
    },
    resolve: {
        extensions: ['.*', '.js', '.mjs'],
    },
    output: {
        path: path.resolve(__dirname, './public/build/'),
        filename: 'library.js',
        library: 'ReactLibrary'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public/'),
        },
        compress: true,
        port: 9000,
    }
};