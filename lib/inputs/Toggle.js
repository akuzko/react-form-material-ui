'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Toggle(props) {
  var value = props.value,
      error = props.error,
      onChange = props.onChange,
      wrapperClassname = props.wrapperClassname,
      errorClassName = props.errorClassName,
      rest = _objectWithoutProperties(props, ['value', 'error', 'onChange', 'wrapperClassname', 'errorClassName']);

  var toggled = Boolean(value);

  return _react2.default.createElement(
    'div',
    { className: wrapperClassname },
    _react2.default.createElement(_Toggle2.default, _extends({
      toggled: toggled,
      onToggle: function onToggle(e, value) {
        return onChange(value, e);
      }
    }, rest)),
    error && _react2.default.createElement(
      'div',
      { className: errorClassName },
      error
    )
  );
}

Toggle.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  wrapperClassname: _propTypes2.default.string,
  errorClassName: _propTypes2.default.string
};

Toggle.defaultProps = {
  errorClassName: 'error'
};