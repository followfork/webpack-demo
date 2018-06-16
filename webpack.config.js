const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry:{
		app:'./app/js/main.js'
	},
	devServer: {
	    contentBase: path.join(__dirname, "dist"),
	 	compress: true,
	  	port: 9000
	},
	module:{
		loaders:[{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.vue$/,
			loader:'vue-loader',
			options: {
				cssModules: {
          localIdentName: '[path][name]---[local]---[hash:base64:5]',
          camelCase: true
				},
				loaders: {
					css: ExtractTextPlugin.extract({
						use: 'css-loader!px2rem-loader?remUnit=75&remPrecision=8',
						fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
					}), 
					scss: ExtractTextPlugin.extract({
						use: 'css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader',
						fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
					})
				}
			}
		},{
			test:/\.scss$/,
			loader:'vue-loader!css-loader!sass-loader'
		}]
	},
	resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
	plugins:[
		new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
			template:'./app/views/index.html'
		}),
		new ExtractTextPlugin("style.css")
    ],
	output:{
		filename:'[name].min.js',
		path: path.resolve(__dirname,'dist')
	}
}