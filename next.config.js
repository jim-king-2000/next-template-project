const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    'externalSDK',
    'location-backbone-store',
    'fe-fireeye-components/components'
  ]
});