"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_managers_notification-manager_ts"],{

/***/ "./src/components/ha-toast.ts":
/*!************************************!*\
  !*** ./src/components/ha-toast.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaToast: function() { return /* binding */ HaToast; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _polymer_paper_toast_paper_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-toast/paper-toast */ \"./node_modules/@polymer/paper-toast/paper-toast.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n\n\n\n\n\n\n\n\n\n\nvar PaperToast = customElements.get(\"paper-toast\");\nvar HaToast = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_9__.customElement)(\"ha-toast\")], function (_initialize, _PaperToast) {\n  var HaToast = /*#__PURE__*/function (_PaperToast2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HaToast, _PaperToast2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HaToast);\n    function HaToast() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HaToast);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(HaToast);\n  }(_PaperToast);\n  return {\n    F: HaToast,\n    d: [{\n      kind: \"field\",\n      key: \"_resizeListener\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_mediaq\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        var _this2 = this;\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaToast.prototype), \"connectedCallback\", this).call(this);\n        if (!this._resizeListener) {\n          this._resizeListener = function (ev) {\n            return _this2.classList.toggle(\"fit-bottom\", ev.matches);\n          };\n          this._mediaq = window.matchMedia(\"(max-width: 599px\");\n        }\n        this._mediaq.addListener(this._resizeListener);\n        this._resizeListener(this._mediaq);\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaToast.prototype), \"disconnectedCallback\", this).call(this);\n        this._mediaq.removeListener(this._resizeListener);\n      }\n    }]\n  };\n}, PaperToast);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS10b2FzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9oYS10b2FzdC50cz9hMjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvYXN0L3BhcGVyLXRvYXN0XCI7XG5pbXBvcnQgdHlwZSB7IFBhcGVyVG9hc3RFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLXRvYXN0L3BhcGVyLXRvYXN0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgdHlwZSB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IFBhcGVyVG9hc3QgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItdG9hc3RcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQYXBlclRvYXN0RWxlbWVudD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtdG9hc3RcIilcbmV4cG9ydCBjbGFzcyBIYVRvYXN0IGV4dGVuZHMgUGFwZXJUb2FzdCB7XG4gIHByaXZhdGUgX3Jlc2l6ZUxpc3RlbmVyPzogKG9iajogeyBtYXRjaGVzOiBib29sZWFuIH0pID0+IHVua25vd247XG5cbiAgcHJpdmF0ZSBfbWVkaWFxPzogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAoIXRoaXMuX3Jlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9yZXNpemVMaXN0ZW5lciA9IChldikgPT5cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZml0LWJvdHRvbVwiLCBldi5tYXRjaGVzKTtcbiAgICAgIHRoaXMuX21lZGlhcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTk5cHhcIik7XG4gICAgfVxuICAgIHRoaXMuX21lZGlhcSEuYWRkTGlzdGVuZXIodGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKHRoaXMuX21lZGlhcSEpO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbWVkaWFxIS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9yZXNpemVMaXN0ZW5lciEpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS10b2FzdFwiOiBIYVRvYXN0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ha-toast.ts\n");

/***/ }),

/***/ "./src/managers/notification-manager.ts":
/*!**********************************************!*\
  !*** ./src/managers/notification-manager.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-button */ \"./node_modules/@material/mwc-button/mwc-button.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/util/compute_rtl */ \"./src/common/util/compute_rtl.ts\");\n/* harmony import */ var _components_ha_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ha-toast */ \"./src/components/ha-toast.ts\");\n\n\n\n\n\n\n\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n\n\nvar NotificationManager = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(null, function (_initialize, _LitElement) {\n  var NotificationManager = /*#__PURE__*/function (_LitElement2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(NotificationManager, _LitElement2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(NotificationManager);\n    function NotificationManager() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, NotificationManager);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(NotificationManager);\n  }(_LitElement);\n  return {\n    F: NotificationManager,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.state)()],\n      key: \"_action\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.state)()],\n      key: \"_noCancelOnOutsideClick\",\n      value: function value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.query)(\"ha-toast\")],\n      key: \"_toast\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"showDialog\",\n      value: function () {\n        var _showDialog = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().mark(function _callee(_ref) {\n          var message, action, duration, dismissable, toast;\n          return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                message = _ref.message, action = _ref.action, duration = _ref.duration, dismissable = _ref.dismissable;\n                toast = this._toast; // Can happen on initial load\n                if (toast) {\n                  _context.next = 6;\n                  break;\n                }\n                _context.next = 5;\n                return this.updateComplete;\n              case 5:\n                toast = this._toast;\n              case 6:\n                toast.setAttribute(\"dir\", (0,_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__.computeRTL)(this.hass) ? \"rtl\" : \"ltr\");\n                this._action = action || undefined;\n                this._noCancelOnOutsideClick = dismissable === undefined ? false : !dismissable;\n                toast.hide();\n                toast.show({\n                  text: message,\n                  duration: duration === undefined ? 3000 : duration\n                });\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee, this);\n        }));\n        function showDialog(_x) {\n          return _showDialog.apply(this, arguments);\n        }\n        return showDialog;\n      }()\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      <ha-toast .noCancelOnOutsideClick=\", \">\\n        \", \"\\n      </ha-toast>\\n    \"])), this._noCancelOnOutsideClick, this._action ? (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n              <mwc-button\\n                .label=\", \"\\n                @click=\", \"\\n              ></mwc-button>\\n            \"])), this._action.text, this.buttonClicked) : \"\");\n      }\n    }, {\n      kind: \"method\",\n      key: \"buttonClicked\",\n      value: function buttonClicked() {\n        this._toast.hide();\n        if (this._action) {\n          this._action.action();\n        }\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_10__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      ha-toast {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n        padding: 8px 12px;\\n      }\\n      mwc-button {\\n        color: var(--primary-color);\\n        font-weight: bold;\\n        margin-left: 8px;\\n      }\\n    \"])));\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_10__.LitElement);\ncustomElements.define(\"notification-manager\", NotificationManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFuYWdlcnMvbm90aWZpY2F0aW9uLW1hbmFnZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL21hbmFnZXJzL25vdGlmaWNhdGlvbi1tYW5hZ2VyLnRzP2Q3N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGNzcywgQ1NTUmVzdWx0R3JvdXAsIGh0bWwsIExpdEVsZW1lbnQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlLCBxdWVyeSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS10b2FzdFwiO1xuaW1wb3J0IHR5cGUgeyBIYVRvYXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGEtdG9hc3RcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dUb2FzdFBhcmFtcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBkaXNtaXNzYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb25QYXJhbXMge1xuICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY2xhc3MgTm90aWZpY2F0aW9uTWFuYWdlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAc3RhdGUoKSBwcml2YXRlIF9hY3Rpb24/OiBUb2FzdEFjdGlvblBhcmFtcztcblxuICBAc3RhdGUoKSBwcml2YXRlIF9ub0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbiAgQHF1ZXJ5KFwiaGEtdG9hc3RcIikgcHJpdmF0ZSBfdG9hc3QhOiBIYVRvYXN0O1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHtcbiAgICBtZXNzYWdlLFxuICAgIGFjdGlvbixcbiAgICBkdXJhdGlvbixcbiAgICBkaXNtaXNzYWJsZSxcbiAgfTogU2hvd1RvYXN0UGFyYW1zKSB7XG4gICAgbGV0IHRvYXN0ID0gdGhpcy5fdG9hc3Q7XG4gICAgLy8gQ2FuIGhhcHBlbiBvbiBpbml0aWFsIGxvYWRcbiAgICBpZiAoIXRvYXN0KSB7XG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAgdG9hc3QgPSB0aGlzLl90b2FzdDtcbiAgICB9XG4gICAgdG9hc3Quc2V0QXR0cmlidXRlKFwiZGlyXCIsIGNvbXB1dGVSVEwodGhpcy5oYXNzKSA/IFwicnRsXCIgOiBcImx0clwiKTtcbiAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb24gfHwgdW5kZWZpbmVkO1xuICAgIHRoaXMuX25vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPVxuICAgICAgZGlzbWlzc2FibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogIWRpc21pc3NhYmxlO1xuICAgIHRvYXN0LmhpZGUoKTtcbiAgICB0b2FzdC5zaG93KHtcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDMwMDAgOiBkdXJhdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXRvYXN0IC5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrPSR7dGhpcy5fbm9DYW5jZWxPbk91dHNpZGVDbGlja30+XG4gICAgICAgICR7dGhpcy5fYWN0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuX2FjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuYnV0dG9uQ2xpY2tlZH1cbiAgICAgICAgICAgICAgPjwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLXRvYXN0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgdGhpcy5fdG9hc3QuaGlkZSgpO1xuICAgIGlmICh0aGlzLl9hY3Rpb24pIHtcbiAgICAgIHRoaXMuX2FjdGlvbi5hY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGhhLXRvYXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIH1cbiAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibm90aWZpY2F0aW9uLW1hbmFnZXJcIiwgTm90aWZpY2F0aW9uTWFuYWdlcik7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24tbWFuYWdlclwiOiBOb3RpZmljYXRpb25NYW5hZ2VyO1xuICB9XG5cbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGFzcy1ub3RpZmljYXRpb25cIjogU2hvd1RvYXN0UGFyYW1zO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/managers/notification-manager.ts\n");

/***/ })

}]);