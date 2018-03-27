'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = Dialog;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Dialog(Form) {
  var _class, _temp;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$Component = _ref.Component,
      Component = _ref$Component === undefined ? _Dialog2.default : _ref$Component;

  return _temp = _class = function (_Form) {
    _inherits(_class, _Form);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.open && !this.props.open) {
          this._nextErrors = {};
        }

        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'componentWillReceiveProps', this).apply(this, arguments);
      }
    }, {
      key: 'getTitle',
      value: function getTitle() {
        return this.props.title;
      }
    }, {
      key: 'getActions',
      value: function getActions() {
        var _this2 = this;

        var _props = this.props,
            actions = _props.actions,
            saveLabel = _props.saveLabel,
            closeLabel = _props.closeLabel,
            onRequestClose = _props.onRequestClose;


        return actions || [_react2.default.createElement(_FlatButton2.default, { label: closeLabel, onTouchTap: onRequestClose }), _react2.default.createElement(_FlatButton2.default, { label: saveLabel, primary: true, onTouchTap: function onTouchTap() {
            return _this2.save();
          } })];
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Component,
          _extends({}, this.props, {
            title: this.getTitle(),
            actions: this.getActions()
          }),
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this)
        );
      }
    }]);

    return _class;
  }(Form), _class.propTypes = _extends({}, Form.propTypes, {
    open: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    saveLabel: _propTypes2.default.string,
    closeLabel: _propTypes2.default.string,
    onRequestClose: _propTypes2.default.func
  }), _class.defaultProps = _extends({}, Form.defaultProps, {
    title: '',
    saveLabel: 'Save',
    closeLabel: 'Cancel',
    open: false
  }), _temp;
}