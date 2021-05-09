"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _styledComponents = require("../../styledComponents");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isBlockRatio: false
    });

    _defineProperty(_assertThisInitialized(_this), "changeWidth", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var width = event.target.value;
      var height = canvasDimensions.height;
      if (!isBlockRatio) height = width && width / canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread(_objectSpread({}, canvasDimensions), {}, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeHeight", function (event) {
      var isBlockRatio = _this.state.isBlockRatio;
      var canvasDimensions = _this.props.canvasDimensions;
      var height = event.target.value;
      var width = canvasDimensions.width;
      if (!isBlockRatio) width = height && height * canvasDimensions.ratio || 1;

      _this.props.updateState({
        canvasDimensions: _objectSpread(_objectSpread({}, canvasDimensions), {}, {
          width: width,
          height: height
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRatio", function () {
      _this.setState({
        isBlockRatio: !_this.state.isBlockRatio
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          operations = _this$props.operations,
          processWithCloudService = _this$props.processWithCloudService,
          updateState = _this$props.updateState,
          forceApplyOperations = _this$props.forceApplyOperations;
      var operationIndex = operations.findIndex(function (_ref) {
        var stack = _ref.stack;
        return stack[0].name === 'resize';
      });

      if (operationIndex > -1 && processWithCloudService) {
        operations.splice(operationIndex, 1);
        updateState({
          operations: operations
        });
        forceApplyOperations(operations, 'resize');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isBlockRatio = this.state.isBlockRatio;
      var _this$props2 = this.props,
          canvasDimensions = _this$props2.canvasDimensions,
          processWithCloudService = _this$props2.processWithCloudService,
          onPreResize = _this$props2.onPreResize,
          t = _this$props2.t;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.PreResizeBox, {
        id: "preview-img-box",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.PreResizeWarning, {
          children: t['warning.too_big_resolution']
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.PreResizeInner, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            children: t['pre_resize.title']
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.ResizeWrapper, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.ResizeBox, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.FieldSet, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.FieldLabel, {
                  children: t['common.width']
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.FieldInput, {
                  fullSize: true,
                  value: parseInt(canvasDimensions.width, 10) || '',
                  onChange: this.changeWidth
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.BlockRatioWrapper, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.BlockRatioBtn, {
                  active: !isBlockRatio,
                  style: processWithCloudService ? {
                    cursor: 'not-allowed'
                  } : {},
                  link: true,
                  onClick: function onClick() {
                    !processWithCloudService && _this2.toggleRatio();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.BlockRatioIcon, {
                    active: !isBlockRatio,
                    style: processWithCloudService ? {
                      cursor: 'not-allowed'
                    } : {}
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.FieldSet, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.FieldLabel, {
                  children: t['common.height']
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.FieldInput, {
                  fullSize: true,
                  value: parseInt(canvasDimensions.height, 10) || '',
                  onChange: this.changeHeight
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.PreResizeActions, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.Button, {
                themeColor: true,
                themeBtn: true,
                onClick: function onClick() {
                  onPreResize('keep');
                },
                children: t['pre_resize.keep_original_resolution']
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.Button, {
                themeColor: true,
                success: true,
                onClick: function onClick() {
                  onPreResize('resize');
                },
                children: t['pre_resize.resize_n_continue']
              })
            })]
          })]
        })]
      });
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;