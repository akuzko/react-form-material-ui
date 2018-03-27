'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = SelectField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SelectField(props) {
  var value = props.value,
      error = props.error,
      _onChange = props.onChange,
      options = props.options,
      includeBlank = props.includeBlank,
      children = props.children,
      rest = _objectWithoutProperties(props, ['value', 'error', 'onChange', 'options', 'includeBlank', 'children']);

  var optionItems = children;

  if (!optionItems) {
    optionItems = options || [];
    if (includeBlank && value) {
      optionItems = [{ value: '', text: props[includeBlank] }].concat(_toConsumableArray(optionItems));
    }

    optionItems = optionItems.map(function (opt, i) {
      var _ref = (typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object' ? opt : { value: opt, text: opt },
          value = _ref.value,
          text = _ref.text;

      return _react2.default.createElement(_MenuItem2.default, { key: i, value: value, primaryText: text.toString() });
    });
  }

  return _react2.default.createElement(
    _SelectField2.default,
    _extends({
      value: value,
      onChange: function onChange(e, i, nextVal) {
        return value !== nextVal && _onChange(nextVal, i, e);
      },
      errorText: error
    }, rest),
    optionItems
  );
}

SelectField.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    text: _propTypes2.default.string
  })])),
  includeBlank: _propTypes2.default.oneOf(['floatingLabelText', 'hintText']),
  children: _propTypes2.default.node
};