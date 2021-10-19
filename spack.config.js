const {config} = require('@swc/core/spack');

module.exports = config({
  entry: {
    'content-script': __dirname + '/src/content-script.js',
  },
  output: {
    path: __dirname + '/dist',
  },
});
