'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AutoComplete;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function AutoComplete(props) {
  var value = props.value,
      error = props.error,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ['value', 'error', 'onChange']);

  return _react2.default.createElement(_AutoComplete2.default, _extends({
    searchText: value,
    onUpdateInput: function onUpdateInput(value, ds, params) {
      return onChange(value, ds, params);
    },
    errorText: error
  }, rest));
}

AutoComplete.propTypes = {
  value: _propTypes2.default.string,
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};