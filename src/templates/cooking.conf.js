// 'provide' about
// - webpack
// - HtmlWebpackPlugin
// - ExtractTextPlugin
module.exports = function(provide) {
  var HtmlWebpackPlugin = provide.HtmlWebpackPlugin;

  return {
    // Optional vue, react or angular
    use: '${use}',

    // enable / disable to run node server
    nodeServer: false,

    // node server port
    port: 8080,

    // entry files
    // http://webpack.github.io/docs/multiple-entry-points.html
    entry: {
      app: 'entry.js'
    },

    // webpack plugins config
    plugins: [
      // generate dist index.html with correct asset hash for caching.
      // you can customize output by editing /index.html
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'index.template.html',
        inject: true
      })
    ],

    // webpack other config

  };
};