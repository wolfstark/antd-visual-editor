module.exports = [
    {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: [
            'es2015',
            'react'
          ].map(dep => require.resolve(`babel-preset-${dep}`)),
          plugins: [
            'transform-runtime',
            'transform-class-properties',
          ].map(dep => require.resolve(`babel-plugin-${dep}`))
        }
    },
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: "babel-loader"
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader"
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?prefix=font/&limit=5000"
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    },
    {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
    }
];
