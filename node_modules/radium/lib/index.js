'use strict';

var Enhancer = require('./enhancer');

module.exports = function (ComposedComponent) {
  return Enhancer(ComposedComponent);
};
module.exports.Style = require('./components/style');
module.exports.getState = require('./get-state');
module.exports.keyframes = require('./keyframes');
module.exports.Config = require('./config');