var webpack = require('webpack'),
    path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: [
      './src/js/app.js',
      './lib/elements/scss/elements.scss'
    ]
  },
  mode: isProduction ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, './build/'),
    publicPath: 'build/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js'
  },
  resolve: {
    alias: {
      'elements': path.resolve(__dirname, './lib/elements/components/'),
      'vue$': 'vue/dist/vue.esm.js',
      'chart.js$': 'chart.js/dist/Chart.js', // prevent including 'moment' along with 'chart.js'
    },
    extensions: ['.js', '.vue'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: isProduction
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        loader: 'file-loader',
        include: [
          path.resolve(__dirname, 'media/img/')
        ],
        options: {
          emitFile: false,
          name: 'media/img/[name].[ext]',
          publicPath: ''
        }
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        exclude: [
          path.resolve(__dirname, 'media/img/')
        ],
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '../'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          output: {
            comments: false
          },
          compress: {
            warnings: false,
            dead_code: true,
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new BundleAnalyzerPlugin(),
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
  ],
  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000,
    quiet: true
  }
};

if (isProduction) {
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}
