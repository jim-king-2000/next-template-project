const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    'externalSDK',
    'LocationBackboneStore',
    'fe-fireeye-components/components'
  ]
});