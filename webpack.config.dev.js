    var webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
    const path =require('path');
	var config={
		entry: path.resolve(__dirname, './src/js/index.js'),
		output:{
			path: path.resolve(__dirname, './build'),
			filename:'[name].js'
		},
		devtool: 'source-map',
		module:{
			loaders:[
			//style& css &less loader
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
		        //bable loader
		        {
		        	test:/\.jsx$/,
		        	exclude: /(node_module|bower_components)/,
		        	loader:['bable-loader'],
		        	query:{
		        		presets:['es2015']
		        	}
		        },
		        {
			        test: /\.(png|jpg|gif)$/,
			        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
		        }
			]
		},
		plugins:[
          

		]

	}


module.exports=config;