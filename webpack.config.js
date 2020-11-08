const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
    //console.log('env', env);
    const isProduction = env === 'production';
    console.log(isProduction);
    const CSSExtract = new MiniCssExtractPlugin({
        filename: "style.css",
    });
    return {
        entry : "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module : {
            rules : [{
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }, {
                test : /\.s?css$/,
                use : [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [CSSExtract],
        devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer : {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback : true
        }
    }
};