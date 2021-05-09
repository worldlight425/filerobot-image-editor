"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "popup1",
    className: "overlay",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "popup",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: "Here i am"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "close",
        href: "#",
        children: "\xD7"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "content",
        children: "Thank to pop me out of that button, but now i'm done so you can close this window."
      })]
    })
  });
};

var _default = Modal;
exports.default = _default;