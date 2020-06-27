(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~ha-dialog-show-audio-message"],{

/***/ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \**************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NeonAnimatableBehavior\", function() { return NeonAnimatableBehavior; });\n/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ \"./node_modules/@polymer/polymer/polymer-legacy.js\");\n/**\n@license\nCopyright (c) 2015 The Polymer Project Authors. All rights reserved.\nThis code may only be used under the BSD style license found at\nhttp://polymer.github.io/LICENSE.txt The complete set of authors may be found at\nhttp://polymer.github.io/AUTHORS.txt The complete set of contributors may be\nfound at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as\npart of the polymer project is also subject to an additional IP rights grant\nfound at http://polymer.github.io/PATENTS.txt\n*/\n\n/**\n * `NeonAnimatableBehavior` is implemented by elements containing\n * animations for use with elements implementing\n * `NeonAnimationRunnerBehavior`.\n * @polymerBehavior\n */\n\nconst NeonAnimatableBehavior = {\n  properties: {\n    /**\n     * Animation configuration. See README for more info.\n     */\n    animationConfig: {\n      type: Object\n    },\n\n    /**\n     * Convenience property for setting an 'entry' animation. Do not set\n     * `animationConfig.entry` manually if using this. The animated node is set\n     * to `this` if using this property.\n     */\n    entryAnimation: {\n      observer: '_entryAnimationChanged',\n      type: String\n    },\n\n    /**\n     * Convenience property for setting an 'exit' animation. Do not set\n     * `animationConfig.exit` manually if using this. The animated node is set\n     * to `this` if using this property.\n     */\n    exitAnimation: {\n      observer: '_exitAnimationChanged',\n      type: String\n    }\n  },\n  _entryAnimationChanged: function () {\n    this.animationConfig = this.animationConfig || {};\n    this.animationConfig['entry'] = [{\n      name: this.entryAnimation,\n      node: this\n    }];\n  },\n  _exitAnimationChanged: function () {\n    this.animationConfig = this.animationConfig || {};\n    this.animationConfig['exit'] = [{\n      name: this.exitAnimation,\n      node: this\n    }];\n  },\n  _copyProperties: function (config1, config2) {\n    // shallowly copy properties from config2 to config1\n    for (var property in config2) {\n      config1[property] = config2[property];\n    }\n  },\n  _cloneConfig: function (config) {\n    var clone = {\n      isClone: true\n    };\n\n    this._copyProperties(clone, config);\n\n    return clone;\n  },\n  _getAnimationConfigRecursive: function (type, map, allConfigs) {\n    if (!this.animationConfig) {\n      return;\n    }\n\n    if (this.animationConfig.value && typeof this.animationConfig.value === 'function') {\n      this._warn(this._logf('playAnimation', 'Please put \\'animationConfig\\' inside of your components \\'properties\\' object instead of outside of it.'));\n\n      return;\n    } // type is optional\n\n\n    var thisConfig;\n\n    if (type) {\n      thisConfig = this.animationConfig[type];\n    } else {\n      thisConfig = this.animationConfig;\n    }\n\n    if (!Array.isArray(thisConfig)) {\n      thisConfig = [thisConfig];\n    } // iterate animations and recurse to process configurations from child nodes\n\n\n    if (thisConfig) {\n      for (var config, index = 0; config = thisConfig[index]; index++) {\n        if (config.animatable) {\n          config.animatable._getAnimationConfigRecursive(config.type || type, map, allConfigs);\n        } else {\n          if (config.id) {\n            var cachedConfig = map[config.id];\n\n            if (cachedConfig) {\n              // merge configurations with the same id, making a clone lazily\n              if (!cachedConfig.isClone) {\n                map[config.id] = this._cloneConfig(cachedConfig);\n                cachedConfig = map[config.id];\n              }\n\n              this._copyProperties(cachedConfig, config);\n            } else {\n              // put any configs with an id into a map\n              map[config.id] = config;\n            }\n          } else {\n            allConfigs.push(config);\n          }\n        }\n      }\n    }\n  },\n\n  /**\n   * An element implementing `NeonAnimationRunnerBehavior` calls this\n   * method to configure an animation with an optional type. Elements\n   * implementing `NeonAnimatableBehavior` should define the property\n   * `animationConfig`, which is either a configuration object or a map of\n   * animation type to array of configuration objects.\n   */\n  getAnimationConfig: function (type) {\n    var map = {};\n    var allConfigs = [];\n\n    this._getAnimationConfigRecursive(type, map, allConfigs); // append the configurations saved in the map to the array\n\n\n    for (var key in map) {\n      allConfigs.push(map[key]);\n    }\n\n    return allConfigs;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcz9hZjAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgaXMgaW1wbGVtZW50ZWQgYnkgZWxlbWVudHMgY29udGFpbmluZ1xuICogYW5pbWF0aW9ucyBmb3IgdXNlIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYC5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24uIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICBhbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2VudHJ5JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmVudHJ5YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBlbnRyeUFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZW50cnlBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2V4aXQnIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZXhpdGAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZXhpdEFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZXhpdEFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgfSxcblxuICBfZW50cnlBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydlbnRyeSddID0gW3tuYW1lOiB0aGlzLmVudHJ5QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2V4aXRBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydleGl0J10gPSBbe25hbWU6IHRoaXMuZXhpdEFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9jb3B5UHJvcGVydGllczogZnVuY3Rpb24oY29uZmlnMSwgY29uZmlnMikge1xuICAgIC8vIHNoYWxsb3dseSBjb3B5IHByb3BlcnRpZXMgZnJvbSBjb25maWcyIHRvIGNvbmZpZzFcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWcxW3Byb3BlcnR5XSA9IGNvbmZpZzJbcHJvcGVydHldO1xuICAgIH1cbiAgfSxcblxuICBfY2xvbmVDb25maWc6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBjbG9uZSA9IHtpc0Nsb25lOiB0cnVlfTtcbiAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjbG9uZSwgY29uZmlnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sXG5cbiAgX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZTogZnVuY3Rpb24odHlwZSwgbWFwLCBhbGxDb25maWdzKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3dhcm4odGhpcy5fbG9nZihcbiAgICAgICAgICAncGxheUFuaW1hdGlvbicsXG4gICAgICAgICAgJ1BsZWFzZSBwdXQgXFwnYW5pbWF0aW9uQ29uZmlnXFwnIGluc2lkZSBvZiB5b3VyIGNvbXBvbmVudHMgXFwncHJvcGVydGllc1xcJyBvYmplY3QgaW5zdGVhZCBvZiBvdXRzaWRlIG9mIGl0LicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0eXBlIGlzIG9wdGlvbmFsXG4gICAgdmFyIHRoaXNDb25maWc7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzQ29uZmlnKSkge1xuICAgICAgdGhpc0NvbmZpZyA9IFt0aGlzQ29uZmlnXTtcbiAgICB9XG5cbiAgICAvLyBpdGVyYXRlIGFuaW1hdGlvbnMgYW5kIHJlY3Vyc2UgdG8gcHJvY2VzcyBjb25maWd1cmF0aW9ucyBmcm9tIGNoaWxkIG5vZGVzXG4gICAgaWYgKHRoaXNDb25maWcpIHtcbiAgICAgIGZvciAodmFyIGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSB0aGlzQ29uZmlnW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBpZiAoY29uZmlnLmFuaW1hdGFibGUpIHtcbiAgICAgICAgICBjb25maWcuYW5pbWF0YWJsZS5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKFxuICAgICAgICAgICAgICBjb25maWcudHlwZSB8fCB0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgY29uZmlndXJhdGlvbnMgd2l0aCB0aGUgc2FtZSBpZCwgbWFraW5nIGEgY2xvbmUgbGF6aWx5XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkQ29uZmlnLmlzQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IHRoaXMuX2Nsb25lQ29uZmlnKGNhY2hlZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2FjaGVkQ29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcHV0IGFueSBjb25maWdzIHdpdGggYW4gaWQgaW50byBhIG1hcFxuICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsQ29uZmlncy5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBbiBlbGVtZW50IGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBjYWxscyB0aGlzXG4gICAqIG1ldGhvZCB0byBjb25maWd1cmUgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgdHlwZS4gRWxlbWVudHNcbiAgICogaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBzaG91bGQgZGVmaW5lIHRoZSBwcm9wZXJ0eVxuICAgKiBgYW5pbWF0aW9uQ29uZmlnYCwgd2hpY2ggaXMgZWl0aGVyIGEgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYSBtYXAgb2ZcbiAgICogYW5pbWF0aW9uIHR5cGUgdG8gYXJyYXkgb2YgY29uZmlndXJhdGlvbiBvYmplY3RzLlxuICAgKi9cbiAgZ2V0QW5pbWF0aW9uQ29uZmlnOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHZhciBhbGxDb25maWdzID0gW107XG4gICAgdGhpcy5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgLy8gYXBwZW5kIHRoZSBjb25maWd1cmF0aW9ucyBzYXZlZCBpbiB0aGUgbWFwIHRvIHRoZSBhcnJheVxuICAgIGZvciAodmFyIGtleSBpbiBtYXApIHtcbiAgICAgIGFsbENvbmZpZ3MucHVzaChtYXBba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxDb25maWdzO1xuICB9XG5cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7OztBQU1BO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF0QkE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0hBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@polymer/neon-animation/neon-animatable-behavior.js\n");

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \********************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NeonAnimationRunnerBehaviorImpl\", function() { return NeonAnimationRunnerBehaviorImpl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NeonAnimationRunnerBehavior\", function() { return NeonAnimationRunnerBehavior; });\n/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ \"./node_modules/@polymer/polymer/polymer-legacy.js\");\n/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ \"./node_modules/@polymer/neon-animation/neon-animatable-behavior.js\");\n/**\n@license\nCopyright (c) 2015 The Polymer Project Authors. All rights reserved.\nThis code may only be used under the BSD style license found at\nhttp://polymer.github.io/LICENSE.txt The complete set of authors may be found at\nhttp://polymer.github.io/AUTHORS.txt The complete set of contributors may be\nfound at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as\npart of the polymer project is also subject to an additional IP rights grant\nfound at http://polymer.github.io/PATENTS.txt\n*/\n\n\n/**\n * `NeonAnimationRunnerBehavior` adds a method to run animations.\n *\n * @polymerBehavior NeonAnimationRunnerBehavior\n */\n\nconst NeonAnimationRunnerBehaviorImpl = {\n  _configureAnimations: function (configs) {\n    var results = [];\n    var resultsToPlay = [];\n\n    if (configs.length > 0) {\n      for (let config, index = 0; config = configs[index]; index++) {\n        let neonAnimation = document.createElement(config.name); // is this element actually a neon animation?\n\n        if (neonAnimation.isNeonAnimation) {\n          let result = null; // Closure compiler does not work well with a try / catch here.\n          // .configure needs to be explicitly defined\n\n          if (!neonAnimation.configure) {\n            /**\n             * @param {Object} config\n             * @return {AnimationEffectReadOnly}\n             */\n            neonAnimation.configure = function (config) {\n              return null;\n            };\n          }\n\n          result = neonAnimation.configure(config);\n          resultsToPlay.push({\n            result: result,\n            config: config,\n            neonAnimation: neonAnimation\n          });\n        } else {\n          console.warn(this.is + ':', config.name, 'not found!');\n        }\n      }\n    }\n\n    for (var i = 0; i < resultsToPlay.length; i++) {\n      let result = resultsToPlay[i].result;\n      let config = resultsToPlay[i].config;\n      let neonAnimation = resultsToPlay[i].neonAnimation; // configuration or play could fail if polyfills aren't loaded\n\n      try {\n        // Check if we have an Effect rather than an Animation\n        if (typeof result.cancel != 'function') {\n          result = document.timeline.play(result);\n        }\n      } catch (e) {\n        result = null;\n        console.warn('Couldnt play', '(', config.name, ').', e);\n      }\n\n      if (result) {\n        results.push({\n          neonAnimation: neonAnimation,\n          config: config,\n          animation: result\n        });\n      }\n    }\n\n    return results;\n  },\n  _shouldComplete: function (activeEntries) {\n    var finished = true;\n\n    for (var i = 0; i < activeEntries.length; i++) {\n      if (activeEntries[i].animation.playState != 'finished') {\n        finished = false;\n        break;\n      }\n    }\n\n    return finished;\n  },\n  _complete: function (activeEntries) {\n    for (var i = 0; i < activeEntries.length; i++) {\n      activeEntries[i].neonAnimation.complete(activeEntries[i].config);\n    }\n\n    for (var i = 0; i < activeEntries.length; i++) {\n      activeEntries[i].animation.cancel();\n    }\n  },\n\n  /**\n   * Plays an animation with an optional `type`.\n   * @param {string=} type\n   * @param {!Object=} cookie\n   */\n  playAnimation: function (type, cookie) {\n    var configs = this.getAnimationConfig(type);\n\n    if (!configs) {\n      return;\n    }\n\n    this._active = this._active || {};\n\n    if (this._active[type]) {\n      this._complete(this._active[type]);\n\n      delete this._active[type];\n    }\n\n    var activeEntries = this._configureAnimations(configs);\n\n    if (activeEntries.length == 0) {\n      this.fire('neon-animation-finish', cookie, {\n        bubbles: false\n      });\n      return;\n    }\n\n    this._active[type] = activeEntries;\n\n    for (var i = 0; i < activeEntries.length; i++) {\n      activeEntries[i].animation.onfinish = function () {\n        if (this._shouldComplete(activeEntries)) {\n          this._complete(activeEntries);\n\n          delete this._active[type];\n          this.fire('neon-animation-finish', cookie, {\n            bubbles: false\n          });\n        }\n      }.bind(this);\n    }\n  },\n\n  /**\n   * Cancels the currently running animations.\n   */\n  cancelAnimation: function () {\n    for (var k in this._active) {\n      var entries = this._active[k];\n\n      for (var j in entries) {\n        entries[j].animation.cancel();\n      }\n    }\n\n    this._active = {};\n  }\n};\n/** @polymerBehavior */\n\nconst NeonAnimationRunnerBehavior = [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__[\"NeonAnimatableBehavior\"], NeonAnimationRunnerBehaviorImpl];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcz9jZjkxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yfSBmcm9tICcuL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgYWRkcyBhIG1ldGhvZCB0byBydW4gYW5pbWF0aW9ucy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbCA9IHtcblxuICBfY29uZmlndXJlQW5pbWF0aW9uczogZnVuY3Rpb24oY29uZmlncykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlc3VsdHNUb1BsYXkgPSBbXTtcblxuICAgIGlmIChjb25maWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSBjb25maWdzW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLm5hbWUpO1xuICAgICAgICAvLyBpcyB0aGlzIGVsZW1lbnQgYWN0dWFsbHkgYSBuZW9uIGFuaW1hdGlvbj9cbiAgICAgICAgaWYgKG5lb25BbmltYXRpb24uaXNOZW9uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgLy8gQ2xvc3VyZSBjb21waWxlciBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBhIHRyeSAvIGNhdGNoIGhlcmUuXG4gICAgICAgICAgLy8gLmNvbmZpZ3VyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBpZiAoIW5lb25BbmltYXRpb24uY29uZmlndXJlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FuaW1hdGlvbkVmZmVjdFJlYWRPbmx5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAgIHJlc3VsdHNUb1BsYXkucHVzaCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5pcyArICc6JywgY29uZmlnLm5hbWUsICdub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNUb1BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzVG9QbGF5W2ldLnJlc3VsdDtcbiAgICAgIGxldCBjb25maWcgPSByZXN1bHRzVG9QbGF5W2ldLmNvbmZpZztcbiAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gcmVzdWx0c1RvUGxheVtpXS5uZW9uQW5pbWF0aW9uO1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBvciBwbGF5IGNvdWxkIGZhaWwgaWYgcG9seWZpbGxzIGFyZW4ndCBsb2FkZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gRWZmZWN0IHJhdGhlciB0aGFuIGFuIEFuaW1hdGlvblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5jYW5jZWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnRpbWVsaW5lLnBsYXkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkbnQgcGxheScsICcoJywgY29uZmlnLm5hbWUsICcpLicsIGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBhbmltYXRpb246IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG5cbiAgX3Nob3VsZENvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgdmFyIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5wbGF5U3RhdGUgIT0gJ2ZpbmlzaGVkJykge1xuICAgICAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9LFxuXG4gIF9jb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5uZW9uQW5pbWF0aW9uLmNvbXBsZXRlKGFjdGl2ZUVudHJpZXNbaV0uY29uZmlnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGB0eXBlYC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0eXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdD19IGNvb2tpZVxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSwgY29va2llKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmdldEFuaW1hdGlvbkNvbmZpZyh0eXBlKTtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5fYWN0aXZlIHx8IHt9O1xuICAgIGlmICh0aGlzLl9hY3RpdmVbdHlwZV0pIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKHRoaXMuX2FjdGl2ZVt0eXBlXSk7XG4gICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbnRyaWVzID0gdGhpcy5fY29uZmlndXJlQW5pbWF0aW9ucyhjb25maWdzKTtcblxuICAgIGlmIChhY3RpdmVFbnRyaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlW3R5cGVdID0gYWN0aXZlRW50cmllcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ub25maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZENvbXBsZXRlKGFjdGl2ZUVudHJpZXMpKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGxldGUoYWN0aXZlRW50cmllcyk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICAgICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuX2FjdGl2ZVtrXVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZW50cmllcykge1xuICAgICAgICBlbnRyaWVzW2pdLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB7fTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3IgPVxuICAgIFtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsXTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBJQTtBQXVJQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js\n");

/***/ }),

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ \"./node_modules/@polymer/polymer/polymer-legacy.js\");\n/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ \"./node_modules/@polymer/paper-styles/color.js\");\n/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ \"./node_modules/@polymer/paper-spinner/paper-spinner-styles.js\");\n/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ \"./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js\");\n/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ \"./node_modules/@polymer/polymer/lib/utils/html-tag.js\");\n/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ \"./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js\");\n/**\n@license\nCopyright (c) 2015 The Polymer Project Authors. All rights reserved.\nThis code may only be used under the BSD style license found at\nhttp://polymer.github.io/LICENSE.txt The complete set of authors may be found at\nhttp://polymer.github.io/AUTHORS.txt The complete set of contributors may be\nfound at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as\npart of the polymer project is also subject to an additional IP rights grant\nfound at http://polymer.github.io/PATENTS.txt\n*/\n\n\n\n\n\n\nconst template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[\"html\"]`\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n`;\ntemplate.setAttribute('strip-whitespace', '');\n/**\nMaterial design: [Progress &\nactivity](https://www.google.com/design/spec/components/progress-activity.html)\n\nElement providing a multiple color material design circular spinner.\n\n    <paper-spinner active></paper-spinner>\n\nThe default spinner cycles between four layers of colors; by default they are\nblue, red, yellow and green. It can be customized to cycle between four\ndifferent colors. Use <paper-spinner-lite> for single color spinners.\n\n### Accessibility\n\nAlt attribute should be set to provide adequate context for accessibility. If\nnot provided, it defaults to 'loading'. Empty alt can be provided to mark the\nelement as decorative if alternative content is provided in another form (e.g. a\ntext block following the spinner).\n\n    <paper-spinner alt=\"Loading contacts list\" active></paper-spinner>\n\n### Styling\n\nThe following custom properties and mixins are available for styling:\n\nCustom property | Description | Default\n----------------|-------------|----------\n`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`\n`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`\n`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`\n`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`\n`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px\n\n@group Paper Elements\n@element paper-spinner\n@hero hero.svg\n@demo demo/index.html\n*/\n\nObject(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[\"Polymer\"])({\n  _template: template,\n  is: 'paper-spinner',\n  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__[\"PaperSpinnerBehavior\"]]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcz85NTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@polymer/paper-spinner/paper-spinner.js\n");

/***/ })

}]);