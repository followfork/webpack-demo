const path = require('path');

mudule.exports = {
	entry:{
		app:'./app/js/main.js'
	},
	module:{
		loaders:[{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.vue$/,
			loader:'vue-loader'
		},{
			test:/\.scss$/,
			loader:'vue-loader!css-loader!sass-loader'
		}]
	},
	plugins:{},
	output:{
		filename:'[name].min.js',
		path: path.resolve(__dirname,'dist')
	}
}