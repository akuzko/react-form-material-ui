'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DatePicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DatePicker(props) {
  var value = props.value,
      error = props.error,
      wrapperClassName = props.wrapperClassName,
      errorClassName = props.errorClassName,
      _onChange = props.onChange,
      rest = _objectWithoutProperties(props, ['value', 'error', 'wrapperClassName', 'errorClassName', 'onChange']);

  var pickerValue = value || null;

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    _react2.default.createElement(_DatePicker2.default, _extends({ value: pickerValue, onChange: function onChange(e, value) {
        return _onChange(value, e);
      } }, rest)),
    error && _react2.default.createElement(
      'div',
      { className: errorClassName },
      error
    )
  );
}

DatePicker.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  error: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string,
  errorClassName: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

DatePicker.defaultProps = {
  errorClassName: 'error'
};