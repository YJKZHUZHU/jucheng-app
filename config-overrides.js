const { injectBabelPlugin } = require('react-app-rewired');
module.exports = (config, env) => {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
  return config;
}
