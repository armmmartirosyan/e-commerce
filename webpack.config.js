const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const LOADERS = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
];

const PLUGINS = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    favicon: "./src/assets/images/shop.png",
  }),
];

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      constants: path.resolve(__dirname, "src/constants"),
      providers: path.resolve(__dirname, "src/providers"),
      api: path.resolve(__dirname, "src/services/api"),
      services: path.resolve(__dirname, "src/services"),
      layouts: path.resolve(__dirname, "src/layouts"),
      pages: path.resolve(__dirname, "src/pages"),
      hooks: path.resolve(__dirname, "src/hooks"),
      utils: path.resolve(__dirname, "src/utils"),
      types: path.resolve(__dirname, "src/types"),
      store: path.resolve(__dirname, "src/store"),
      HOCs: path.resolve(__dirname, "src/HOCs"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: LOADERS,
  },
  plugins: PLUGINS,
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
