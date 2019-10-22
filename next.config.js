const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
  require.extensions[".css"] = () => {};
 }
 
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  [withCSS()],
  [withTM, {
    transpileModules: [
      'location-backbone-canvas',
      'location-backbone-canvas-amap',
      'location-backbone-canvas-bingmap',
      'location-backbone-canvas-bmap',
      'location-backbone-fe',
      'location-backbone-sdk',
      'location-backbone-store',
      'location-backbone-react-map',
    ]
  }],
]);
