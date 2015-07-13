/* @flow */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var resolveStyles = require('./resolve-styles.js');

var enhanceWithRadium = function enhanceWithRadium(ComposedComponent) {
  var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

  var RadiumEnhancer = (function (_ComposedComponent) {
    function RadiumEnhancer() {
      _classCallCheck(this, RadiumEnhancer);

      _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'constructor', this).apply(this, arguments);

      this.state = this.state || {};
      this.state._radiumStyleState = {};
    }

    _inherits(RadiumEnhancer, _ComposedComponent);

    _createClass(RadiumEnhancer, [{
      key: 'render',
      value: function render() {
        var renderedElement = _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'render', this).call(this);
        return resolveStyles(this, renderedElement);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (_get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this)) {
          _get(Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this).call(this);
        }

        if (this._radiumMouseUpListener) {
          this._radiumMouseUpListener.remove();
        }

        if (this._radiumMediaQueryListenersByQuery) {
          Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
            this._radiumMediaQueryListenersByQuery[query].remove();
          }, this);
        }
      }
    }]);

    return RadiumEnhancer;
  })(ComposedComponent);

  RadiumEnhancer.displayName = 'Radium(' + displayName + ')';

  return RadiumEnhancer;
};

module.exports = enhanceWithRadium;