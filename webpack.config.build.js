    var webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    const path =require('path');


	var config={
		entry:'./src/js/index.js',
		output:{
			filename:'[name].js',
			path: path.resolve(__dirname, './build')
		},
	    devtool: false,
		module:{
			loaders:[
				{ test:/\.css$/, loader:'style-loader!css-loader'},
				{ test:/\.less$/, loader:'style-loader!css-loader!less-loader'},
		        {
		        	test:/\.jsx$/,
		        	exclude: /(node_module|bower_components)/,
		        	loader:'bable-loader'
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
             'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin()
		]
	}


module.exports=config;