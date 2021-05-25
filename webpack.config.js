const path = require('path')
module.exports = {
  entry: './src/CanvasYj.ts',
  mode:'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'canvasyj.js',
    library: {
      name: 'CanvasYj',
      type: 'umd'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [ // 添加解析规则
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: { // 需要打包的文件后缀
    extensions: [".tsx", ".ts", ".js"]
  }
}