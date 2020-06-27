(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[59],{

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return durationToSeconds; });\nfunction durationToSeconds(duration) {\n  const parts = duration.split(\":\").map(Number);\n  return parts[0] * 3600 + parts[1] * 60 + parts[2];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHMudHM/YzRiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkdXJhdGlvblRvU2Vjb25kcyhkdXJhdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcGFydHMgPSBkdXJhdGlvbi5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gIHJldHVybiBwYXJ0c1swXSAqIDM2MDAgKyBwYXJ0c1sxXSAqIDYwICsgcGFydHNbMl07XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/datetime/duration_to_seconds.ts\n");

/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return secondsToDuration; });\nconst leftPad = num => num < 10 ? `0${num}` : num;\n\nfunction secondsToDuration(d) {\n  const h = Math.floor(d / 3600);\n  const m = Math.floor(d % 3600 / 60);\n  const s = Math.floor(d % 3600 % 60);\n\n  if (h > 0) {\n    return `${h}:${leftPad(m)}:${leftPad(s)}`;\n  }\n\n  if (m > 0) {\n    return `${m}:${leftPad(s)}`;\n  }\n\n  if (s > 0) {\n    return \"\" + s;\n  }\n\n  return null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb24udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb24udHM/Yzk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsZWZ0UGFkID0gKG51bTogbnVtYmVyKSA9PiAobnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWNvbmRzVG9EdXJhdGlvbihkOiBudW1iZXIpIHtcbiAgY29uc3QgaCA9IE1hdGguZmxvb3IoZCAvIDM2MDApO1xuICBjb25zdCBtID0gTWF0aC5mbG9vcigoZCAlIDM2MDApIC8gNjApO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcigoZCAlIDM2MDApICUgNjApO1xuXG4gIGlmIChoID4gMCkge1xuICAgIHJldHVybiBgJHtofToke2xlZnRQYWQobSl9OiR7bGVmdFBhZChzKX1gO1xuICB9XG4gIGlmIChtID4gMCkge1xuICAgIHJldHVybiBgJHttfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAocyA+IDApIHtcbiAgICByZXR1cm4gXCJcIiArIHM7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/datetime/seconds_to_duration.ts\n");

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timerTimeRemaining\", function() { return timerTimeRemaining; });\n/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ \"./src/common/datetime/duration_to_seconds.ts\");\n\nconst timerTimeRemaining = stateObj => {\n  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stateObj.attributes.remaining);\n\n  if (stateObj.state === \"active\") {\n    const now = new Date().getTime();\n    const madeActive = new Date(stateObj.last_changed).getTime();\n    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);\n  }\n\n  return timeRemaining;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzPzMzNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBkdXJhdGlvblRvU2Vjb25kcyBmcm9tIFwiLi4vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kc1wiO1xuXG5leHBvcnQgY29uc3QgdGltZXJUaW1lUmVtYWluaW5nID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGxldCB0aW1lUmVtYWluaW5nID0gZHVyYXRpb25Ub1NlY29uZHMoc3RhdGVPYmouYXR0cmlidXRlcy5yZW1haW5pbmcpO1xuXG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IG1hZGVBY3RpdmUgPSBuZXcgRGF0ZShzdGF0ZU9iai5sYXN0X2NoYW5nZWQpLmdldFRpbWUoKTtcbiAgICB0aW1lUmVtYWluaW5nID0gTWF0aC5tYXgodGltZVJlbWFpbmluZyAtIChub3cgLSBtYWRlQWN0aXZlKSAvIDEwMDAsIDApO1xuICB9XG5cbiAgcmV0dXJuIHRpbWVSZW1haW5pbmc7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/entity/timer_time_remaining.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/datetime/seconds_to_duration */ \"./src/common/datetime/seconds_to_duration.ts\");\n/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/timer_time_remaining */ \"./src/common/entity/timer_time_remaining.ts\");\n/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/has-changed */ \"./src/panels/lovelace/common/has-changed.ts\");\n/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ \"./src/panels/lovelace/components/hui-generic-entity-row.ts\");\n/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ \"./src/panels/lovelace/components/hui-warning.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nlet HuiTimerEntityRow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"customElement\"])(\"hui-timer-entity-row\")], function (_initialize, _LitElement) {\n  class HuiTimerEntityRow extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiTimerEntityRow,\n    d: [{\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])()],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[\"property\"])()],\n      key: \"_timeRemaining\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_interval\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config) {\n          throw new Error(\"Configuration error\");\n        }\n\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), \"disconnectedCallback\", this).call(this);\n\n        this._clearInterval();\n      }\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), \"connectedCallback\", this).call(this);\n\n        if (this._config && this._config.entity) {\n          const stateObj = this.hass.states[this._config.entity];\n\n          if (stateObj) {\n            this._startInterval(stateObj);\n          }\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config || !this.hass) {\n          return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]``;\n        }\n\n        const stateObj = this.hass.states[this._config.entity];\n\n        if (!stateObj) {\n          return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n        <hui-warning>\n          ${Object(_components_hui_warning__WEBPACK_IMPORTED_MODULE_5__[\"createEntityNotFoundWarning\"])(this.hass, this._config.entity)}\n        </hui-warning>\n      `;\n        }\n\n        return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>\n        <div class=\"text-content\">${this._computeDisplay(stateObj)}</div>\n      </hui-generic-entity-row>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"shouldUpdate\",\n      value: function shouldUpdate(changedProps) {\n        if (changedProps.has(\"_timeRemaining\")) {\n          return true;\n        }\n\n        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_3__[\"hasConfigOrEntityChanged\"])(this, changedProps);\n      }\n    }, {\n      kind: \"method\",\n      key: \"updated\",\n      value: function updated(changedProps) {\n        _get(_getPrototypeOf(HuiTimerEntityRow.prototype), \"updated\", this).call(this, changedProps);\n\n        if (changedProps.has(\"hass\")) {\n          const stateObj = this.hass.states[this._config.entity];\n          const oldHass = changedProps.get(\"hass\");\n          const oldStateObj = oldHass ? oldHass.states[this._config.entity] : undefined;\n\n          if (oldStateObj !== stateObj) {\n            this._startInterval(stateObj);\n          } else if (!stateObj) {\n            this._clearInterval();\n          }\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_clearInterval\",\n      value: function _clearInterval() {\n        if (this._interval) {\n          window.clearInterval(this._interval);\n          this._interval = undefined;\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_startInterval\",\n      value: function _startInterval(stateObj) {\n        this._clearInterval();\n\n        this._calculateRemaining(stateObj);\n\n        if (stateObj.state === \"active\") {\n          this._interval = window.setInterval(() => this._calculateRemaining(stateObj), 1000);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_calculateRemaining\",\n      value: function _calculateRemaining(stateObj) {\n        this._timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_2__[\"timerTimeRemaining\"])(stateObj);\n      }\n    }, {\n      kind: \"method\",\n      key: \"_computeDisplay\",\n      value: function _computeDisplay(stateObj) {\n        if (!stateObj) {\n          return null;\n        }\n\n        if (stateObj.state === \"idle\" || this._timeRemaining === 0) {\n          return this.hass.localize(\"state.timer.\" + stateObj.state);\n        }\n\n        let display = Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this._timeRemaining || 0);\n\n        if (stateObj.state === \"paused\") {\n          display += ` (${this.hass.localize(\"state.timer.paused\")})`;\n        }\n\n        return display;\n      }\n    }]\n  };\n}, lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VudGl0eS1yb3dzL2h1aS10aW1lci1lbnRpdHktcm93LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lbnRpdHktcm93cy9odWktdGltZXItZW50aXR5LXJvdy50cz83OTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcbmltcG9ydCB7IHRpbWVyVGltZVJlbWFpbmluZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBoYXNDb25maWdPckVudGl0eUNoYW5nZWQgfSBmcm9tIFwiLi4vY29tbW9uL2hhcy1jaGFuZ2VkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2h1aS1nZW5lcmljLWVudGl0eS1yb3dcIjtcbmltcG9ydCB7IGNyZWF0ZUVudGl0eU5vdEZvdW5kV2FybmluZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2h1aS13YXJuaW5nXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS10aW1lci1lbnRpdHktcm93XCIpXG5jbGFzcyBIdWlUaW1lckVudGl0eVJvdyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRW50aXR5Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVSZW1haW5pbmc/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEVudGl0eUNvbmZpZyk6IHZvaWQge1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWd1cmF0aW9uIGVycm9yXCIpO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5lbnRpdHkpIHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzIS5zdGF0ZXNbdGhpcy5fY29uZmlnIS5lbnRpdHldO1xuICAgICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxodWktd2FybmluZz5cbiAgICAgICAgICAke2NyZWF0ZUVudGl0eU5vdEZvdW5kV2FybmluZyh0aGlzLmhhc3MsIHRoaXMuX2NvbmZpZy5lbnRpdHkpfVxuICAgICAgICA8L2h1aS13YXJuaW5nPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZ2VuZXJpYy1lbnRpdHktcm93IC5oYXNzPSR7dGhpcy5oYXNzfSAuY29uZmlnPSR7dGhpcy5fY29uZmlnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGVudFwiPiR7dGhpcy5fY29tcHV0ZURpc3BsYXkoc3RhdGVPYmopfTwvZGl2PlxuICAgICAgPC9odWktZ2VuZXJpYy1lbnRpdHktcm93PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl90aW1lUmVtYWluaW5nXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzQ29uZmlnT3JFbnRpdHlDaGFuZ2VkKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcyEuc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XTtcbiAgICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyB0aGlzW1wiaGFzc1wiXTtcbiAgICAgIGNvbnN0IG9sZFN0YXRlT2JqID0gb2xkSGFzc1xuICAgICAgICA/IG9sZEhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZyEuZW50aXR5XVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG9sZFN0YXRlT2JqICE9PSBzdGF0ZU9iaikge1xuICAgICAgICB0aGlzLl9zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhckludGVydmFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRJbnRlcnZhbChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmopO1xuXG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT4gdGhpcy5fY2FsY3VsYXRlUmVtYWluaW5nKHN0YXRlT2JqKSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiB2b2lkIHtcbiAgICB0aGlzLl90aW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVEaXNwbGF5KHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImlkbGVcIiB8fCB0aGlzLl90aW1lUmVtYWluaW5nID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInN0YXRlLnRpbWVyLlwiICsgc3RhdGVPYmouc3RhdGUpO1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5ID0gc2Vjb25kc1RvRHVyYXRpb24odGhpcy5fdGltZVJlbWFpbmluZyB8fCAwKTtcblxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgZGlzcGxheSArPSBgICgke3RoaXMuaGFzcyEubG9jYWxpemUoXCJzdGF0ZS50aW1lci5wYXVzZWRcIil9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aW1lci1lbnRpdHktcm93XCI6IEh1aVRpbWVyRW50aXR5Um93O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdEhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts\n");

/***/ })

}]);