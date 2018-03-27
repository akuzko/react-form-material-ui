'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Slider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Slider(props) {
  var value = props.value,
      error = props.error,
      _onChange = props.onChange,
      wrapperClassName = props.wrapperClassName,
      errorClassName = props.errorClassName,
      rest = _objectWithoutProperties(props, ['value', 'error', 'onChange', 'wrapperClassName', 'errorClassName']);

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    _react2.default.createElement(_Slider2.default, _extends({
      value: +value,
      onChange: function onChange(e, value) {
        return _onChange(value, e);
      }
    }, rest)),
    error && _react2.default.createElement(
      'div',
      { className: errorClassName },
      error
    )
  );
}

Slider.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  errorClassName: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string
};

Slider.defaultProps = {
  errorClassName: 'error'
};