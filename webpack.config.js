const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
				loaders: {
					css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8', 
					sass: 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader' 
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
      	})
    ],
	output:{
		filename:'[name].min.js',
		path: path.resolve(__dirname,'dist')
	}
}