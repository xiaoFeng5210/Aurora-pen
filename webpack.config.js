const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
// 抽离所有的第三方模块
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: false,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // 这样就可以scripts引入 也可以require或者import引入
        library: {
            name: "aurora_pen",
            type: "umd",
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-typescript'] }
                }
            },
        ]
    },
    // plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] })],
    externals: [nodeExternals()],
    resolve: {
        // 文件名后缀可以省略
        extensions: ['.ts', '.js'],
    }
}
