'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = RadioButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RadioButton = require('material-ui/RadioButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function RadioButtonGroup(props) {
  var value = props.value,
      error = props.error,
      _onChange = props.onChange,
      wrapperClassName = props.wrapperClassName,
      errorClassName = props.errorClassName,
      options = props.options,
      children = props.children,
      rest = _objectWithoutProperties(props, ['value', 'error', 'onChange', 'wrapperClassName', 'errorClassName', 'options', 'children']);

  var radioItems = children || (options || []).map(function (opt, i) {
    var _ref = (typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object' ? opt : { value: opt, label: opt },
        value = _ref.value,
        label = _ref.label;

    return _react2.default.createElement(_RadioButton.RadioButton, { key: i, value: value, label: label.toString() });
  });

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    _react2.default.createElement(
      _RadioButton.RadioButtonGroup,
      _extends({
        valueSelected: value,
        onChange: function onChange(e, value) {
          return _onChange(value, e);
        }
      }, rest),
      radioItems
    ),
    error && _react2.default.createElement(
      'div',
      { className: errorClassName },
      error
    )
  );
}

RadioButtonGroup.propTypes = {
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.bool]),
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    label: _propTypes2.default.string
  })])),
  wrapperClassName: _propTypes2.default.string,
  errorClassName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

RadioButtonGroup.defaultProps = {
  errorClassName: 'error'
};