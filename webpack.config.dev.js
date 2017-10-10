    var webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
    const path =require('path');
    // var ExtractTextPlugin = require("extract-text-webpack-plugin");
	var config={
		entry:[
		'webpack-dev-server/client?http://localhost:9191',
        'webpack/hot/only-dev-server',
		'./src/js/index.js'
		],
		output:{
			filename:'[name].js',
			path: path.resolve(__dirname, './build')
		},
		devtool: 'source-map',
		devServer: {
	        hot: true,
	        publicPath: '/',
	        historyApiFallback: true,
	        stats: "errors-only"
        },
		module:{
			loaders:[
				{ test:/\.css$/, loader:'style-loader!css-loader'},
				{ test:/\.less$/, loader:'style-loader!css-loader!less-loader'},
		        {
		        	test:/\.jsx$/,
		        	exclude: /(node_module|bower_components)/,
		        	loader:'bable-loader'
		        	// query:{
		        	// 	presets:['es2015']
		        	// }
		        	 // presets: ['env'],
		        },
		        {
			        test: /\.(png|jpg|gif)$/,
			        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
		        }
			]
		},
		plugins:[
		    new HtmlWebpackPlugin({
     		  title: 'Webpack-demo',
      		  filename: 'index.html'
    		}), 
    		new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.HotModuleReplacementPlugin(),
            // new ExtractTextPlugin('css/[name].css'), 
		],
		resolve: {
       		extensions: ['.js', '.jsx', '.json']
        }
	}


module.exports=config;