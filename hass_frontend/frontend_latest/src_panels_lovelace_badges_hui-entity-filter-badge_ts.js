"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_badges_hui-entity-filter-badge_ts"],{

/***/ "./src/panels/lovelace/badges/hui-entity-filter-badge.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/badges/hui-entity-filter-badge.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_evaluate_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/evaluate-filter */ \"./src/panels/lovelace/common/evaluate-filter.ts\");\n/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/process-config-entities */ \"./src/panels/lovelace/common/process-config-entities.ts\");\n/* harmony import */ var _create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create-element/create-badge-element */ \"./src/panels/lovelace/create-element/create-badge-element.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_7__]);\n_create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nlet EntityFilterBadge = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(null, function (_initialize, _ReactiveElement) {\n  class EntityFilterBadge extends _ReactiveElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: EntityFilterBadge,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_elements\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_configEntities\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_oldEntities\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config.entities.length || !Array.isArray(config.entities)) {\n          throw new Error(\"Entities must be specified\");\n        }\n        if (!(config.state_filter && Array.isArray(config.state_filter)) && !config.entities.every(entity => typeof entity === \"object\" && entity.state_filter && Array.isArray(entity.state_filter))) {\n          throw new Error(\"Incorrect filter config\");\n        }\n        while (this.lastChild) {\n          this.removeChild(this.lastChild);\n        }\n        this._elements = undefined;\n        this._configEntities = (0,_common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__.processConfigEntities)(config.entities);\n        this._oldEntities = undefined;\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"createRenderRoot\",\n      value: function createRenderRoot() {\n        return this;\n      }\n    }, {\n      kind: \"method\",\n      key: \"shouldUpdate\",\n      value: function shouldUpdate(changedProperties) {\n        if (changedProperties.has(\"_config\") || changedProperties.has(\"hass\") && this.haveEntitiesChanged(changedProperties.get(\"hass\"))) {\n          return true;\n        }\n        return false;\n      }\n    }, {\n      kind: \"method\",\n      key: \"update\",\n      value: function update(changedProperties) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(EntityFilterBadge.prototype), \"update\", this).call(this, changedProperties);\n        if (!this.hass || !this._configEntities) {\n          return;\n        }\n        if (this._elements) {\n          for (const element of this._elements) {\n            element.hass = this.hass;\n          }\n        }\n        const entitiesList = this._configEntities.filter(entityConf => {\n          const stateObj = this.hass.states[entityConf.entity];\n          if (!stateObj) {\n            return false;\n          }\n          if (entityConf.state_filter) {\n            for (const filter of entityConf.state_filter) {\n              if ((0,_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_5__.evaluateFilter)(stateObj, filter)) {\n                return true;\n              }\n            }\n          } else {\n            for (const filter of this._config.state_filter) {\n              if ((0,_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_5__.evaluateFilter)(stateObj, filter)) {\n                return true;\n              }\n            }\n          }\n          return false;\n        });\n        if (entitiesList.length === 0) {\n          this.style.display = \"none\";\n          this._oldEntities = entitiesList;\n          return;\n        }\n        const isSame = this._oldEntities && entitiesList.length === this._oldEntities.length && entitiesList.every((entity, idx) => entity === this._oldEntities[idx]);\n        if (!isSame) {\n          this._elements = [];\n          for (const badgeConfig of entitiesList) {\n            const element = (0,_create_element_create_badge_element__WEBPACK_IMPORTED_MODULE_7__.createBadgeElement)(badgeConfig);\n            element.hass = this.hass;\n            this._elements.push(element);\n          }\n          this._oldEntities = entitiesList;\n        }\n        if (!this._elements) {\n          return;\n        }\n        while (this.lastChild) {\n          this.removeChild(this.lastChild);\n        }\n        for (const element of this._elements) {\n          this.appendChild(element);\n        }\n        this.style.display = \"inline\";\n      }\n    }, {\n      kind: \"method\",\n      key: \"haveEntitiesChanged\",\n      value: function haveEntitiesChanged(oldHass) {\n        if (!oldHass) {\n          return true;\n        }\n        if (!this._oldEntities || this.hass.localize !== oldHass.localize) {\n          return true;\n        }\n        for (const config of this._configEntities) {\n          if (this.hass.states[config.entity] !== oldHass.states[config.entity]) {\n            return true;\n          }\n        }\n        return false;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.ReactiveElement);\ncustomElements.define(\"hui-entity-filter-badge\", EntityFilterBadge);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2JhZGdlcy9odWktZW50aXR5LWZpbHRlci1iYWRnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0pBO0FBQUE7QUFBQTtBQWhKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2JhZGdlcy9odWktZW50aXR5LWZpbHRlci1iYWRnZS50cz9lYmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsdWVzLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGV2YWx1YXRlRmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9ldmFsdWF0ZS1maWx0ZXJcIjtcbmltcG9ydCB7IHByb2Nlc3NDb25maWdFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vcHJvY2Vzcy1jb25maWctZW50aXRpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUJhZGdlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtYmFkZ2UtZWxlbWVudFwiO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUJhZGdlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlGaWx0ZXJCYWRnZUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNsYXNzIEVudGl0eUZpbHRlckJhZGdlIGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VCYWRnZSB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0eUZpbHRlckJhZGdlQ29uZmlnO1xuXG4gIHByaXZhdGUgX2VsZW1lbnRzPzogTG92ZWxhY2VCYWRnZVtdO1xuXG4gIHByaXZhdGUgX2NvbmZpZ0VudGl0aWVzPzogRW50aXR5RmlsdGVyRW50aXR5Q29uZmlnW107XG5cbiAgcHJpdmF0ZSBfb2xkRW50aXRpZXM/OiBFbnRpdHlGaWx0ZXJFbnRpdHlDb25maWdbXTtcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogRW50aXR5RmlsdGVyQmFkZ2VDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy5lbnRpdGllcy5sZW5ndGggfHwgIUFycmF5LmlzQXJyYXkoY29uZmlnLmVudGl0aWVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXRpZXMgbXVzdCBiZSBzcGVjaWZpZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIShjb25maWcuc3RhdGVfZmlsdGVyICYmIEFycmF5LmlzQXJyYXkoY29uZmlnLnN0YXRlX2ZpbHRlcikpICYmXG4gICAgICAhY29uZmlnLmVudGl0aWVzLmV2ZXJ5KFxuICAgICAgICAoZW50aXR5KSA9PlxuICAgICAgICAgIHR5cGVvZiBlbnRpdHkgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICBlbnRpdHkuc3RhdGVfZmlsdGVyICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShlbnRpdHkuc3RhdGVfZmlsdGVyKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGZpbHRlciBjb25maWdcIik7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudHMgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NDb25maWdFbnRpdGllcyhjb25maWcuZW50aXRpZXMpO1xuICAgIHRoaXMuX29sZEVudGl0aWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfY29uZmlnXCIpIHx8XG4gICAgICAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiaGFzc1wiKSAmJlxuICAgICAgICB0aGlzLmhhdmVFbnRpdGllc0NoYW5nZWQoXG4gICAgICAgICAgY2hhbmdlZFByb3BlcnRpZXMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkXG4gICAgICAgICkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWdFbnRpdGllcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50cykge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnQuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRpdGllc0xpc3QgPSB0aGlzLl9jb25maWdFbnRpdGllcy5maWx0ZXIoKGVudGl0eUNvbmYpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHlDb25mLmVudGl0eV07XG5cbiAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZW50aXR5Q29uZi5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgdGhpcy5fY29uZmlnIS5zdGF0ZV9maWx0ZXIpIHtcbiAgICAgICAgICBpZiAoZXZhbHVhdGVGaWx0ZXIoc3RhdGVPYmosIGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoZW50aXRpZXNMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB0aGlzLl9vbGRFbnRpdGllcyA9IGVudGl0aWVzTGlzdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc1NhbWUgPVxuICAgICAgdGhpcy5fb2xkRW50aXRpZXMgJiZcbiAgICAgIGVudGl0aWVzTGlzdC5sZW5ndGggPT09IHRoaXMuX29sZEVudGl0aWVzLmxlbmd0aCAmJlxuICAgICAgZW50aXRpZXNMaXN0LmV2ZXJ5KChlbnRpdHksIGlkeCkgPT4gZW50aXR5ID09PSB0aGlzLl9vbGRFbnRpdGllcyFbaWR4XSk7XG5cbiAgICBpZiAoIWlzU2FtZSkge1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYmFkZ2VDb25maWcgb2YgZW50aXRpZXNMaXN0KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVCYWRnZUVsZW1lbnQoYmFkZ2VDb25maWcpO1xuICAgICAgICBlbGVtZW50Lmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbGRFbnRpdGllcyA9IGVudGl0aWVzTGlzdDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5fZWxlbWVudHMpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgfVxuXG4gIHByaXZhdGUgaGF2ZUVudGl0aWVzQ2hhbmdlZChvbGRIYXNzPzogSG9tZUFzc2lzdGFudCk6IGJvb2xlYW4ge1xuICAgIGlmICghb2xkSGFzcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9vbGRFbnRpdGllcyB8fCB0aGlzLmhhc3MubG9jYWxpemUgIT09IG9sZEhhc3MubG9jYWxpemUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY29uZmlnIG9mIHRoaXMuX2NvbmZpZ0VudGl0aWVzISkge1xuICAgICAgaWYgKHRoaXMuaGFzcy5zdGF0ZXNbY29uZmlnLmVudGl0eV0gIT09IG9sZEhhc3Muc3RhdGVzW2NvbmZpZy5lbnRpdHldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaHVpLWVudGl0eS1maWx0ZXItYmFkZ2VcIiwgRW50aXR5RmlsdGVyQmFkZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/badges/hui-entity-filter-badge.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/common/evaluate-filter.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/evaluate-filter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   evaluateFilter: () => (/* binding */ evaluateFilter)\n/* harmony export */ });\nconst evaluateFilter = (stateObj, filter) => {\n  var _filter$value;\n  const operator = filter.operator || \"==\";\n  let value = (_filter$value = filter.value) !== null && _filter$value !== void 0 ? _filter$value : filter;\n  let state = filter.attribute ? stateObj.attributes[filter.attribute] : stateObj.state;\n  if (operator === \"==\" || operator === \"!=\") {\n    const valueIsNumeric = typeof value === \"number\" || typeof value === \"string\" && value.trim() && !isNaN(Number(value));\n    const stateIsNumeric = typeof state === \"number\" || typeof state === \"string\" && state.trim() && !isNaN(Number(state));\n    if (valueIsNumeric && stateIsNumeric) {\n      value = Number(value);\n      state = Number(state);\n    }\n  }\n  switch (operator) {\n    case \"==\":\n      return state === value;\n    case \"<=\":\n      return state <= value;\n    case \"<\":\n      return state < value;\n    case \">=\":\n      return state >= value;\n    case \">\":\n      return state > value;\n    case \"!=\":\n      return state !== value;\n    case \"in\":\n      if (Array.isArray(value) || typeof value === \"string\") {\n        return value.includes(state);\n      }\n      return false;\n    case \"not in\":\n      if (Array.isArray(value) || typeof value === \"string\") {\n        return !value.includes(state);\n      }\n      return false;\n    case \"regex\":\n      {\n        if (state !== null && typeof state === \"object\") {\n          return RegExp(value).test(JSON.stringify(state));\n        }\n        return RegExp(value).test(state);\n      }\n    default:\n      return false;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9ldmFsdWF0ZS1maWx0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2V2YWx1YXRlLWZpbHRlci50cz8yMWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0ZUZpbHRlciA9IChzdGF0ZU9iajogSGFzc0VudGl0eSwgZmlsdGVyOiBhbnkpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb3BlcmF0b3IgPSBmaWx0ZXIub3BlcmF0b3IgfHwgXCI9PVwiO1xuICBsZXQgdmFsdWUgPSBmaWx0ZXIudmFsdWUgPz8gZmlsdGVyO1xuICBsZXQgc3RhdGUgPSBmaWx0ZXIuYXR0cmlidXRlXG4gICAgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzW2ZpbHRlci5hdHRyaWJ1dGVdXG4gICAgOiBzdGF0ZU9iai5zdGF0ZTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwiPT1cIiB8fCBvcGVyYXRvciA9PT0gXCIhPVwiKSB7XG4gICAgY29uc3QgdmFsdWVJc051bWVyaWMgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiIHx8XG4gICAgICAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLnRyaW0oKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkpO1xuICAgIGNvbnN0IHN0YXRlSXNOdW1lcmljID1cbiAgICAgIHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgKHR5cGVvZiBzdGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBzdGF0ZS50cmltKCkgJiYgIWlzTmFOKE51bWJlcihzdGF0ZSkpKTtcbiAgICBpZiAodmFsdWVJc051bWVyaWMgJiYgc3RhdGVJc051bWVyaWMpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIHN0YXRlID0gTnVtYmVyKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSBcIj09XCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IHZhbHVlO1xuICAgIGNhc2UgXCI8PVwiOlxuICAgICAgcmV0dXJuIHN0YXRlIDw9IHZhbHVlO1xuICAgIGNhc2UgXCI8XCI6XG4gICAgICByZXR1cm4gc3RhdGUgPCB2YWx1ZTtcbiAgICBjYXNlIFwiPj1cIjpcbiAgICAgIHJldHVybiBzdGF0ZSA+PSB2YWx1ZTtcbiAgICBjYXNlIFwiPlwiOlxuICAgICAgcmV0dXJuIHN0YXRlID4gdmFsdWU7XG4gICAgY2FzZSBcIiE9XCI6XG4gICAgICByZXR1cm4gc3RhdGUgIT09IHZhbHVlO1xuICAgIGNhc2UgXCJpblwiOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gdmFsdWUuaW5jbHVkZXMoc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNhc2UgXCJub3QgaW5cIjpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZS5pbmNsdWRlcyhzdGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY2FzZSBcInJlZ2V4XCI6IHtcbiAgICAgIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc3RhdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIFJlZ0V4cCh2YWx1ZSkudGVzdChKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlZ0V4cCh2YWx1ZSkudGVzdChzdGF0ZSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/lovelace/common/evaluate-filter.ts\n");

/***/ })

}]);