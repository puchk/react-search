module.exports = {

  entry: "./app/app.js",

  output: {
    filename: "dist/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"],
        }
      }
    ]
  }
};
