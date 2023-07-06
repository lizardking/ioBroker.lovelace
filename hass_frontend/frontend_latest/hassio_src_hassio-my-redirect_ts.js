"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["hassio_src_hassio-my-redirect_ts"],{

/***/ "./hassio/src/hassio-my-redirect.ts":
/*!******************************************!*\
  !*** ./hassio/src/hassio-my-redirect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REDIRECTS: () => (/* binding */ REDIRECTS)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @braintree/sanitize-url */ \"./node_modules/@braintree/sanitize-url/dist/index.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _src_common_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/common/navigate */ \"./src/common/navigate.ts\");\n/* harmony import */ var _src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/common/url/search-params */ \"./src/common/url/search-params.ts\");\n/* harmony import */ var _src_layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/layouts/hass-error-screen */ \"./src/layouts/hass-error-screen.ts\");\n\n\n\n\n\n\n\n\n\nconst REDIRECTS = {\n  supervisor: {\n    redirect: \"/hassio/dashboard\"\n  },\n  supervisor_logs: {\n    redirect: \"/hassio/system\"\n  },\n  supervisor_info: {\n    redirect: \"/hassio/system\"\n  },\n  supervisor_snapshots: {\n    redirect: \"/hassio/backups\"\n  },\n  supervisor_backups: {\n    redirect: \"/hassio/backups\"\n  },\n  supervisor_store: {\n    redirect: \"/hassio/store\"\n  },\n  supervisor_addons: {\n    redirect: \"/hassio/dashboard\"\n  },\n  supervisor_addon: {\n    redirect: \"/hassio/addon\",\n    params: {\n      addon: \"string\"\n    },\n    optional_params: {\n      repository_url: \"url\"\n    }\n  },\n  supervisor_ingress: {\n    redirect: \"/hassio/ingress\",\n    params: {\n      addon: \"string\"\n    }\n  },\n  supervisor_add_addon_repository: {\n    redirect: \"/hassio/store\",\n    params: {\n      repository_url: \"url\"\n    }\n  }\n};\nlet HassioMyRedirect = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.customElement)(\"hassio-my-redirect\")], function (_initialize, _LitElement) {\n  class HassioMyRedirect extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HassioMyRedirect,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"supervisor\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"route\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.state)()],\n      key: \"_error\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HassioMyRedirect.prototype), \"connectedCallback\", this).call(this);\n        const path = this.route.path.substr(1);\n        const redirect = REDIRECTS[path];\n        if (!redirect) {\n          this._error = this.supervisor.localize(\"my.not_supported\", \"link\", lit__WEBPACK_IMPORTED_MODULE_4__.html`<a\n          target=\"_blank\"\n          rel=\"noreferrer noopener\"\n          href=\"https://my.home-assistant.io/faq.html#supported-pages\"\n        >\n          ${this.supervisor.localize(\"my.faq_link\")}\n        </a>`);\n          return;\n        }\n        let url;\n        try {\n          url = this._createRedirectUrl(redirect);\n        } catch (err) {\n          this._error = this.supervisor.localize(\"my.error\");\n          return;\n        }\n        (0,_src_common_navigate__WEBPACK_IMPORTED_MODULE_6__.navigate)(url, {\n          replace: true\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (this._error) {\n          return lit__WEBPACK_IMPORTED_MODULE_4__.html`<hass-error-screen\n        .error=${this._error}\n      ></hass-error-screen>`;\n        }\n        return lit__WEBPACK_IMPORTED_MODULE_4__.nothing;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createRedirectUrl\",\n      value: function _createRedirectUrl(redirect) {\n        const params = this._createRedirectParams(redirect);\n        return `${redirect.redirect}${params}`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createRedirectParams\",\n      value: function _createRedirectParams(redirect) {\n        const params = (0,_src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__.extractSearchParamsObject)();\n        if (!redirect.params && !Object.keys(params).length) {\n          return \"\";\n        }\n        const resultParams = {};\n        Object.entries(redirect.params || {}).forEach(([key, type]) => {\n          if (!params[key] || !this._checkParamType(type, params[key])) {\n            throw Error();\n          }\n          resultParams[key] = params[key];\n        });\n        Object.entries(redirect.optional_params || {}).forEach(([key, type]) => {\n          if (params[key]) {\n            if (!this._checkParamType(type, params[key])) {\n              throw Error();\n            }\n            resultParams[key] = params[key];\n          }\n        });\n        return `?${(0,_src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__.createSearchParam)(resultParams)}`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_checkParamType\",\n      value: function _checkParamType(type, value) {\n        if (type === \"string\") {\n          return true;\n        }\n        if (type === \"url\") {\n          return value && value === (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(value);\n        }\n        return false;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_4__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYXNzaW8vc3JjL2hhc3Npby1teS1yZWRpcmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQXNGQTtBQUFBO0FBQUE7QUF0RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL2hhc3Npby9zcmMvaGFzc2lvLW15LXJlZGlyZWN0LnRzPzY1N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FuaXRpemVVcmwgfSBmcm9tIFwiQGJyYWludHJlZS9zYW5pdGl6ZS11cmxcIjtcbmltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQsIFRlbXBsYXRlUmVzdWx0LCBub3RoaW5nIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi9zcmMvY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQge1xuICBjcmVhdGVTZWFyY2hQYXJhbSxcbiAgZXh0cmFjdFNlYXJjaFBhcmFtc09iamVjdCxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb24vdXJsL3NlYXJjaC1wYXJhbXNcIjtcbmltcG9ydCB7IFN1cGVydmlzb3IgfSBmcm9tIFwiLi4vLi4vc3JjL2RhdGEvc3VwZXJ2aXNvci9zdXBlcnZpc29yXCI7XG5pbXBvcnQgXCIuLi8uLi9zcmMvbGF5b3V0cy9oYXNzLWVycm9yLXNjcmVlblwiO1xuaW1wb3J0IHtcbiAgUGFyYW1UeXBlLFxuICBSZWRpcmVjdCxcbiAgUmVkaXJlY3RzLFxufSBmcm9tIFwiLi4vLi4vc3JjL3BhbmVscy9teS9oYS1wYW5lbC1teVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBSRURJUkVDVFM6IFJlZGlyZWN0cyA9IHtcbiAgc3VwZXJ2aXNvcjoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vZGFzaGJvYXJkXCIsXG4gIH0sXG4gIHN1cGVydmlzb3JfbG9nczoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vc3lzdGVtXCIsXG4gIH0sXG4gIHN1cGVydmlzb3JfaW5mbzoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vc3lzdGVtXCIsXG4gIH0sXG4gIHN1cGVydmlzb3Jfc25hcHNob3RzOiB7XG4gICAgcmVkaXJlY3Q6IFwiL2hhc3Npby9iYWNrdXBzXCIsXG4gIH0sXG4gIHN1cGVydmlzb3JfYmFja3Vwczoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vYmFja3Vwc1wiLFxuICB9LFxuICBzdXBlcnZpc29yX3N0b3JlOiB7XG4gICAgcmVkaXJlY3Q6IFwiL2hhc3Npby9zdG9yZVwiLFxuICB9LFxuICBzdXBlcnZpc29yX2FkZG9uczoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vZGFzaGJvYXJkXCIsXG4gIH0sXG4gIHN1cGVydmlzb3JfYWRkb246IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL2FkZG9uXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhZGRvbjogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG9wdGlvbmFsX3BhcmFtczoge1xuICAgICAgcmVwb3NpdG9yeV91cmw6IFwidXJsXCIsXG4gICAgfSxcbiAgfSxcbiAgc3VwZXJ2aXNvcl9pbmdyZXNzOiB7XG4gICAgcmVkaXJlY3Q6IFwiL2hhc3Npby9pbmdyZXNzXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhZGRvbjogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9LFxuICBzdXBlcnZpc29yX2FkZF9hZGRvbl9yZXBvc2l0b3J5OiB7XG4gICAgcmVkaXJlY3Q6IFwiL2hhc3Npby9zdG9yZVwiLFxuICAgIHBhcmFtczoge1xuICAgICAgcmVwb3NpdG9yeV91cmw6IFwidXJsXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbkBjdXN0b21FbGVtZW50KFwiaGFzc2lvLW15LXJlZGlyZWN0XCIpXG5jbGFzcyBIYXNzaW9NeVJlZGlyZWN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIHN1cGVydmlzb3IhOiBTdXBlcnZpc29yO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIHJvdXRlITogUm91dGU7XG5cbiAgQHN0YXRlKCkgcHVibGljIF9lcnJvcj86IFRlbXBsYXRlUmVzdWx0IHwgc3RyaW5nO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucm91dGUucGF0aC5zdWJzdHIoMSk7XG4gICAgY29uc3QgcmVkaXJlY3QgPSBSRURJUkVDVFNbcGF0aF07XG5cbiAgICBpZiAoIXJlZGlyZWN0KSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuc3VwZXJ2aXNvci5sb2NhbGl6ZShcbiAgICAgICAgXCJteS5ub3Rfc3VwcG9ydGVkXCIsXG4gICAgICAgIFwibGlua1wiLFxuICAgICAgICBodG1sYDxhXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9teS5ob21lLWFzc2lzdGFudC5pby9mYXEuaHRtbCNzdXBwb3J0ZWQtcGFnZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnN1cGVydmlzb3IubG9jYWxpemUoXCJteS5mYXFfbGlua1wiKX1cbiAgICAgICAgPC9hPmBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHVybDogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICB1cmwgPSB0aGlzLl9jcmVhdGVSZWRpcmVjdFVybChyZWRpcmVjdCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5zdXBlcnZpc29yLmxvY2FsaXplKFwibXkuZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmF2aWdhdGUodXJsLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgcmV0dXJuIGh0bWxgPGhhc3MtZXJyb3Itc2NyZWVuXG4gICAgICAgIC5lcnJvcj0ke3RoaXMuX2Vycm9yfVxuICAgICAgPjwvaGFzcy1lcnJvci1zY3JlZW4+YDtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGhpbmc7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVSZWRpcmVjdFVybChyZWRpcmVjdDogUmVkaXJlY3QpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX2NyZWF0ZVJlZGlyZWN0UGFyYW1zKHJlZGlyZWN0KTtcbiAgICByZXR1cm4gYCR7cmVkaXJlY3QucmVkaXJlY3R9JHtwYXJhbXN9YDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVJlZGlyZWN0UGFyYW1zKHJlZGlyZWN0OiBSZWRpcmVjdCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW1zID0gZXh0cmFjdFNlYXJjaFBhcmFtc09iamVjdCgpO1xuICAgIGlmICghcmVkaXJlY3QucGFyYW1zICYmICFPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdFBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKHJlZGlyZWN0LnBhcmFtcyB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdHlwZV0pID0+IHtcbiAgICAgIGlmICghcGFyYW1zW2tleV0gfHwgIXRoaXMuX2NoZWNrUGFyYW1UeXBlKHR5cGUsIHBhcmFtc1trZXldKSkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmVzdWx0UGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICB9KTtcbiAgICBPYmplY3QuZW50cmllcyhyZWRpcmVjdC5vcHRpb25hbF9wYXJhbXMgfHwge30pLmZvckVhY2goKFtrZXksIHR5cGVdKSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja1BhcmFtVHlwZSh0eXBlLCBwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFBhcmFtc1trZXldID0gcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGA/JHtjcmVhdGVTZWFyY2hQYXJhbShyZXN1bHRQYXJhbXMpfWA7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1BhcmFtVHlwZSh0eXBlOiBQYXJhbVR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInVybFwiKSB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPT09IHNhbml0aXplVXJsKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYXNzaW8tbXktcmVkaXJlY3RcIjogSGFzc2lvTXlSZWRpcmVjdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hassio/src/hassio-my-redirect.ts\n");

/***/ })

}]);