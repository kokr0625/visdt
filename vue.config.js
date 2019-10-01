const db = require('./db')

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: "8080",
    before: (app) => {(db)}
   },
};