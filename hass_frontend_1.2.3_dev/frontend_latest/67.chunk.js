(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[67],{

/***/ "./src/common/util/parse-aspect-ratio.ts":
/*!***********************************************!*\
  !*** ./src/common/util/parse-aspect-ratio.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseAspectRatio; });\n// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78\n// Ignore everything else\nconst parseOrThrow = num => {\n  const parsed = parseFloat(num);\n\n  if (isNaN(parsed)) {\n    throw new Error(`${num} is not a number`);\n  }\n\n  return parsed;\n};\n\nfunction parseAspectRatio(input) {\n  if (!input) {\n    return null;\n  }\n\n  try {\n    if (input.endsWith(\"%\")) {\n      return {\n        w: 100,\n        h: parseOrThrow(input.substr(0, input.length - 1))\n      };\n    }\n\n    const arr = input.replace(\":\", \"x\").split(\"x\");\n\n    if (arr.length === 0) {\n      return null;\n    }\n\n    return arr.length === 1 ? {\n      w: parseOrThrow(arr[0]),\n      h: 1\n    } : {\n      w: parseOrThrow(arr[0]),\n      h: parseOrThrow(arr[1])\n    };\n  } catch (err) {// Ignore the error\n  }\n\n  return null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL3BhcnNlLWFzcGVjdC1yYXRpby50cz84N2VhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbmRsZSAxNng5LCAxNjo5LCAxLjc4eDEsIDEuNzg6MSwgMS43OFxuLy8gSWdub3JlIGV2ZXJ5dGhpbmcgZWxzZVxuY29uc3QgcGFyc2VPclRocm93ID0gKG51bSkgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUZsb2F0KG51bSk7XG4gIGlmIChpc05hTihwYXJzZWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke251bX0gaXMgbm90IGEgbnVtYmVyYCk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlQXNwZWN0UmF0aW8oaW5wdXQ6IHN0cmluZykge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAoaW5wdXQuZW5kc1dpdGgoXCIlXCIpKSB7XG4gICAgICByZXR1cm4geyB3OiAxMDAsIGg6IHBhcnNlT3JUaHJvdyhpbnB1dC5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoIC0gMSkpIH07XG4gICAgfVxuXG4gICAgY29uc3QgYXJyID0gaW5wdXQucmVwbGFjZShcIjpcIiwgXCJ4XCIpLnNwbGl0KFwieFwiKTtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyci5sZW5ndGggPT09IDFcbiAgICAgID8geyB3OiBwYXJzZU9yVGhyb3coYXJyWzBdKSwgaDogMSB9XG4gICAgICA6IHsgdzogcGFyc2VPclRocm93KGFyclswXSksIGg6IHBhcnNlT3JUaHJvdyhhcnJbMV0pIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElnbm9yZSB0aGUgZXJyb3JcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/util/parse-aspect-ratio.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-iframe-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-iframe-card.ts ***!
  \******************************************************/
/*! exports provided: HuiIframeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HuiIframeCard\", function() { return HuiIframeCard; });\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ \"./node_modules/lit-html/directives/style-map.js\");\n/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ \"./src/common/util/parse-aspect-ratio.ts\");\n/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ \"./src/components/ha-card.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nlet HuiIframeCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"customElement\"])(\"hui-iframe-card\")], function (_initialize, _LitElement) {\n  class HuiIframeCard extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiIframeCard,\n    d: [{\n      kind: \"method\",\n      static: true,\n      key: \"getConfigElement\",\n      value: async function getConfigElement() {\n        await Promise.all(/*! import() | hui-iframe-card-editor */[__webpack_require__.e(\"vendors~hui-alarm-panel-card-editor~hui-button-card-editor~hui-conditional-card-editor~hui-entities-~37aad430\"), __webpack_require__.e(\"hui-iframe-card-editor\")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-iframe-card-editor */ \"./src/panels/lovelace/editor/config-elements/hui-iframe-card-editor.ts\"));\n        return document.createElement(\"hui-iframe-card-editor\");\n      }\n    }, {\n      kind: \"method\",\n      static: true,\n      key: \"getStubConfig\",\n      value: function getStubConfig() {\n        return {\n          type: \"iframe\",\n          url: \"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1\",\n          aspect_ratio: \"50%\"\n        };\n      }\n    }, {\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])({\n        type: Boolean,\n        reflect: true\n      })],\n      key: \"isPanel\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])({\n        type: Boolean,\n        reflect: true\n      })],\n      key: \"editMode\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"getCardSize\",\n      value: function getCardSize() {\n        if (!this._config) {\n          return 3;\n        }\n\n        const aspectRatio = this._config.aspect_ratio ? Number(this._config.aspect_ratio.replace(\"%\", \"\")) : 50;\n        return 1 + aspectRatio / 25;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config.url) {\n          throw new Error(\"URL required\");\n        }\n\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config) {\n          return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]``;\n        }\n\n        let padding = \"\";\n\n        if (!this.isPanel && this._config.aspect_ratio) {\n          const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this._config.aspect_ratio);\n\n          if (ratio && ratio.w > 0 && ratio.h > 0) {\n            padding = `${(100 * ratio.h / ratio.w).toFixed(2)}%`;\n          }\n        } else if (!this.isPanel) {\n          padding = \"50%\";\n        }\n\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <ha-card .header=\"${this._config.title}\">\n        <div\n          id=\"root\"\n          style=\"${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__[\"styleMap\"])({\n          \"padding-top\": padding\n        })}\"\n        >\n          <iframe\n            src=\"${this._config.url}\"\n            sandbox=\"allow-forms allow-modals allow-popups allow-pointer-lock allow-same-origin allow-scripts\"\n            allowfullscreen=\"true\"\n          ></iframe>\n        </div>\n      </ha-card>\n    `;\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n      :host([ispanel]) ha-card {\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([ispanel][editMode]) ha-card {\n        height: calc(100% - 51px);\n      }\n\n      ha-card {\n        overflow: hidden;\n      }\n\n      #root {\n        width: 100%;\n        position: relative;\n      }\n\n      :host([ispanel]) #root {\n        height: 100%;\n      }\n\n      iframe {\n        position: absolute;\n        border: none;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n    `;\n      }\n    }]\n  };\n}, lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1pZnJhbWUtY2FyZC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY2FyZHMvaHVpLWlmcmFtZS1jYXJkLnRzPzczZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IHBhcnNlQXNwZWN0UmF0aW8gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL3BhcnNlLWFzcGVjdC1yYXRpb1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmQsIExvdmVsYWNlQ2FyZEVkaXRvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSWZyYW1lQ2FyZENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWlmcmFtZS1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSHVpSWZyYW1lQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmQge1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbmZpZ0VsZW1lbnQoKTogUHJvbWlzZTxMb3ZlbGFjZUNhcmRFZGl0b3I+IHtcbiAgICBhd2FpdCBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1pZnJhbWUtY2FyZC1lZGl0b3JcIiAqLyBcIi4uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWlmcmFtZS1jYXJkLWVkaXRvclwiXG4gICAgKTtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1pZnJhbWUtY2FyZC1lZGl0b3JcIik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFN0dWJDb25maWcoKTogSWZyYW1lQ2FyZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW9cIixcbiAgICAgIGFzcGVjdF9yYXRpbzogXCI1MCVcIixcbiAgICB9O1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBwdWJsaWMgaXNQYW5lbCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSlcbiAgcHVibGljIGVkaXRNb2RlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIF9jb25maWc/OiBJZnJhbWVDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBnZXRDYXJkU2l6ZSgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvXG4gICAgICA/IE51bWJlcih0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvLnJlcGxhY2UoXCIlXCIsIFwiXCIpKVxuICAgICAgOiA1MDtcbiAgICByZXR1cm4gMSArIGFzcGVjdFJhdGlvIC8gMjU7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogSWZyYW1lQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnLnVybCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVVJMIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGxldCBwYWRkaW5nID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaXNQYW5lbCAmJiB0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvKSB7XG4gICAgICBjb25zdCByYXRpbyA9IHBhcnNlQXNwZWN0UmF0aW8odGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpbyk7XG4gICAgICBpZiAocmF0aW8gJiYgcmF0aW8udyA+IDAgJiYgcmF0aW8uaCA+IDApIHtcbiAgICAgICAgcGFkZGluZyA9IGAkeygoMTAwICogcmF0aW8uaCkgLyByYXRpby53KS50b0ZpeGVkKDIpfSVgO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNQYW5lbCkge1xuICAgICAgcGFkZGluZyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCAuaGVhZGVyPVwiJHt0aGlzLl9jb25maWcudGl0bGV9XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cInJvb3RcIlxuICAgICAgICAgIHN0eWxlPVwiJHtzdHlsZU1hcCh7XG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IHBhZGRpbmcsXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5fY29uZmlnLnVybH1cIlxuICAgICAgICAgICAgc2FuZGJveD1cImFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QoW2lzcGFuZWxdKSBoYS1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2lzcGFuZWxdW2VkaXRNb2RlXSkgaGEtY2FyZCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTFweCk7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAjcm9vdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgI3Jvb3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWlmcmFtZS1jYXJkXCI6IEh1aUlmcmFtZUNhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxtYUFDQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBZEE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBbkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUFBQTtBQUFBO0FBQUE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7OztBQUtBOzs7Ozs7QUFUQTtBQWdCQTtBQXpFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQ0E7QUE1R0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/cards/hui-iframe-card.ts\n");

/***/ })

}]);