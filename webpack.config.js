const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
    // plugins: [
    //     new MiniCssExtractPlugin({filename: "[name].css"})
    // ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader,
    //                 'css-loader',
    //                 'sass-loader',
    //             ],
    //         }
    //     ],
    // }
};
