"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _styledComponents = require("../../styledComponents");

var _ = require("..");

var _config = require("../../config");

var _SaveActions = _interopRequireDefault(require("./SaveActions"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeTab = _this$props.activeTab,
          onRevert = _this$props.onRevert,
          apply = _this$props.apply,
          onClose = _this$props.onClose,
          processWithCloudService = _this$props.processWithCloudService,
          processWithFilerobot = _this$props.processWithFilerobot,
          handleSave = _this$props.handleSave,
          t = _this$props.t,
          config = _this$props.config;
      var tools = config.tools,
          replaceCloseWithBackButton = config.replaceCloseWithBackButton,
          noCapitalStrs = config.noCapitalStrs,
          filerobot = config.filerobot,
          finishButtonLabel = config.finishButtonLabel;
      var isOneTool = tools.length === 1;
      var filteredName = activeTab === 'rotate' ? 'orientation' : activeTab;
      var onFinishButtonLabel = finishButtonLabel || (!processWithCloudService && !processWithFilerobot ? t['toolbar.download'] : t['toolbar.save']);

      var applyAndSave = function applyAndSave() {
        apply(handleSave);
      };

      var cancelBtnClosingFn = function cancelBtnClosingFn() {
        return onClose(_config.ON_CLOSE_STATUSES.TOOLBAR_CANCEL_BTN_CLICKED);
      };

      var isLastStep = !activeTab || activeTab === 'resize';

      var saveAsFn = function saveAsFn() {
        handleSave(true);
      };

      var applySaveAsHandle = isOneTool ? function () {
        apply(saveAsFn);
      } : saveAsFn;
      var showSaveAs = isLastStep && processWithFilerobot && !processWithCloudService && filerobot.onSaveAs;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.HeaderWrapper, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.HeaderTop, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.Title, {
            noCapitalStrs: noCapitalStrs,
            children: t["toolbar.".concat(filteredName)] || t["header.image_editor_title"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.ButtonsWrapper, {
            children: [replaceCloseWithBackButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.BackButtonWrapper, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                width: "14",
                height: "13",
                viewBox: "0 0 14 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: onClose,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                  d: "M0.145833 5.26248C0.0583333 5.34998 0 5.46664 0 5.55414C0 5.64164 0.0583333 5.78748 0.145833 5.84581L6.3 10.95C6.3875 11.0375 6.59167 11.0375 6.7375 11.0083C6.88334 10.9791 6.97084 10.8041 6.97084 10.6583V8.00414C9.47917 8.00414 11.1708 8.20831 13.2708 11.8541C13.3292 12 13.475 12.0583 13.6208 12.0583C13.6792 12.0583 13.6792 12.0583 13.7083 12.0583C13.9125 12 14 11.8541 14 11.6791V11.3875C14 10.0458 14 8.03331 13.0958 6.34164C12.0458 4.35831 9.975 3.30831 7 3.22081V0.508312C7 0.362478 6.9125 0.216645 6.76667 0.158312C6.62084 0.0999783 6.47501 0.0999783 6.38751 0.216645L0.145833 5.26248Z",
                  fill: "5D6D7E"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.BackBtnSeparator, {})]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.Button, {
              themeColor: true,
              sm: true,
              themeBtn: activeTab,
              onClick: isOneTool ? applyAndSave : !activeTab ? function () {
                handleSave();
              } : function () {
                apply();
              },
              borderRadius: showSaveAs ? '2px 0px 0px 2px' : '2px',
              children: isLastStep ? onFinishButtonLabel : t['toolbar.apply']
            }), showSaveAs && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SaveActions.default, {
              t: t,
              handleSaveAs: applySaveAsHandle
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.CancelBtn, {
              hide: !activeTab,
              onClick: isOneTool ? cancelBtnClosingFn : onRevert,
              noCapitalStrs: noCapitalStrs,
              sm: true,
              default: true,
              fullSize: true,
              children: t["toolbar.cancel"]
            })]
          }), !replaceCloseWithBackButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.CloseBtn, {
            onClick: onClose,
            title: t["header.close_modal"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.ToolbarWrapper, {
          overlayYHidden: activeTab !== 'watermark',
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Toolbar, _objectSpread({}, this.props))
        })]
      });
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;