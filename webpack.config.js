module.exports = {

  entry: "./app/index.js",

  output: {
    filename: "dist/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          plugins: ['transform-class-properties']

        }
      }
    ]
  }
};
