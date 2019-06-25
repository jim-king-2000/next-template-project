const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    'externalSDK',
    'fe-fireeye-components/components'
  ]
});