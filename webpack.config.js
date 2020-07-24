module.exports = {
    entry: './app/communicator.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
        modules: ['communicator-modular-umd','communicator-modular-amd']
    },
    output: {
        filename: "bundle.js"
    },
    devServer: {
        inline: false
    }
}