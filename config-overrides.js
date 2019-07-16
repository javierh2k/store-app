const configUser = require('./src/config')

const {
    override,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");
  
  
  module.exports = override(
    addLessLoader({
      javascriptEnabled: true,
      globalVars: { "@high-color": configUser.dev.color }
    })
  );
