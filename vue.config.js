
module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy:{
      '/api':{
          target:'http://localhost:5000'
      }
    }
   },
};