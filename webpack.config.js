const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
// 抽离所有的第三方模块
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: false,
    experiments: {
        outputModule: true,
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            // name: "aurora_pen",
            type: "module",
        },
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                      loader: 'babel-loader',
                      options: { presets: ['@babel/preset-typescript'] }
                    },
                    
                ]
            },
            // {
            //     test: /\.ts$/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: {
            //                 presets: ['@babel/preset-env'],
            //             },
            //         },
            //         { loader: 'ts-loader' }
            //     ],
            // },
            
            // {
            //     test: /\.ts$/,
            //     use: 'ts-loader',
            // }
        ]
    },
    // plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] })],
    // externals: [nodeExternals()],
    resolve: {
        // 文件名后缀可以省略
        extensions: ['.ts', '.js'],
    },
    // optimization: {
    //     runtimeChunk: 'single', //会将Webpack在浏览器端运行时需要的代码单独抽离到一个文件
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 //产生一个Chunk
    //                 chunks: 'initial',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5, // The default limit is too small to showcase the effect
    //                 minSize: 0 // This is example is too small to create commons chunks
    //             },
    //             vendor: {
    //                 //产生一个Chunk
    //                 test: /node_modules/,
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 priority: 10,
    //                 enforce: true
    //             }
    //         }
    //     }
    // }
}
