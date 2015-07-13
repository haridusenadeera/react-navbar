/* @flow */

'use strict';

var ExecutionEnvironment = require('exenv');

var _matchMediaFunction = ExecutionEnvironment.canUseDOM && window && window.matchMedia;

module.exports = {
  canMatchMedia: function canMatchMedia() {
    return typeof _matchMediaFunction === 'function';
  },

  matchMedia: function matchMedia(query) {
    return _matchMediaFunction(query);
  },

  setMatchMedia: function setMatchMedia(nextMatchMediaFunction) {
    _matchMediaFunction = nextMatchMediaFunction;
  }
};