"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8103],{81303:function(e,t,r){r(8878);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},a(e,t,r||e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(f,e);var t,r,n,l=c(f);function f(){return i(this,f),l.apply(this,arguments)}return t=f,(r=[{key:"ready",value:function(){var e=this;a(u(f.prototype),"ready",this).call(this),setTimeout((function(){"rtl"===window.getComputedStyle(e).direction&&(e.style.textAlign="right")}),100)}}])&&o(t.prototype,r),n&&o(t,n),f}(customElements.get("paper-dropdown-menu"));customElements.define("ha-paper-dropdown-menu",f)},18103:function(e,t,r){r.r(t),r.d(t,{HuiDialogSelectView:function(){return V}});r(87502),r(79258),r(53973),r(51095);var n,i,o,a,s,c,l,u,f=r(37500),d=r(26767),p=r(17717),h=r(47181),m=r(34821),y=(r(28007),r(81303),r(15327)),v=r(11654);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){w(o,n,i,a,s,"next",e)}function s(e){w(o,n,i,a,s,"throw",e)}a(void 0)}))}}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var i=D(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function x(){x=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!A(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function j(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function C(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function A(e){return e.decorators&&e.decorators.length}function T(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=function(e,t,r,n){var i=x();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(T(o.descriptor)||T(i.descriptor)){if(A(o)||A(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(A(o)){if(A(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}C(o,i)}else t.push(o)}return t}(a.d.map(j)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,d.M)("hui-dialog-select-view")],(function(e,t){var r,d,b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,t);var r=P(n);function n(){var t;_(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(S(t)),t}return n}(t);return{F:b,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,p.S)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,p.S)()],key:"_dashboards",value:function(){return[]}},{kind:"field",decorators:[(0,p.S)()],key:"_urlPath",value:void 0},{kind:"field",decorators:[(0,p.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,p.S)()],key:"_selectedViewIdx",value:function(){return 0}},{kind:"method",key:"showDialog",value:function(e){this._config=e.lovelaceConfig,this._urlPath=e.urlPath,this._params=e,this._params.allowDashboardChange&&this._getDashboards()}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,h.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t,r=this;return this._params?(0,f.dy)(i||(i=k(["\n      <ha-dialog\n        open\n        @closed=","\n        .heading=","\n      >\n        ","\n        ",'\n        <mwc-button slot="secondaryAction" @click=',">\n          ",'\n        </mwc-button>\n        <mwc-button slot="primaryAction" @click=',">\n          ","\n        </mwc-button>\n      </ha-dialog>\n    "])),this.closeDialog,(0,m.i)(this.hass,this._params.header||this.hass.localize("ui.panel.lovelace.editor.select_view.header")),this._params.allowDashboardChange?(0,f.dy)(o||(o=k(["<ha-paper-dropdown-menu\n              .label=","\n              dynamic-align\n              .disabled=",'\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                .selected=',"\n                @iron-select=",'\n                attr-for-selected="url-path"\n              >\n                <paper-item\n                  .urlPath=',"\n                  .disabled=","\n                >\n                  Default\n                </paper-item>\n                ","\n              </paper-listbox>\n            </ha-paper-dropdown-menu>"])),this.hass.localize("ui.panel.lovelace.editor.select_view.dashboard_label"),!this._dashboards.length,this._urlPath||this.hass.defaultPanel,this._dashboardChanged,"lovelace","yaml"===(null===(e=this.hass.panels.lovelace)||void 0===e||null===(t=e.config)||void 0===t?void 0:t.mode),this._dashboards.map((function(e){return!r.hass.user.is_admin&&e.require_admin?"":(0,f.dy)(a||(a=k(["\n                    <paper-item\n                      .disabled=","\n                      .urlPath=","\n                      >","</paper-item\n                    >\n                  "])),"storage"!==e.mode,e.url_path,e.title)}))):"",this._config?this._config.views.length>1?(0,f.dy)(s||(s=k(["\n                <mwc-list>\n                  ","\n                </mwc-list>\n              "])),this._config.views.map((function(e,t){var n;return(0,f.dy)(c||(c=k(["\n                      <mwc-radio-list-item\n                        graphic=","\n                        @click=","\n                        .value=","\n                        .selected=","\n                      >\n                        <span>","</span>\n                        <ha-icon .icon=",' slot="graphic"></ha-icon>\n                      </mwc-radio-list-item>\n                    '])),null!==(n=r._config)&&void 0!==n&&n.views.some((function(e){return e.icon}))?"icon":null,r._viewChanged,t.toString(),r._selectedViewIdx===t,e.title,e.icon)}))):"":(0,f.dy)(l||(l=k(["<div>No config found.</div>"]))),this.closeDialog,this.hass.localize("ui.common.cancel"),this._selectView,this._params.actionLabel||this.hass.localize("ui.common.move")):(0,f.dy)(n||(n=k([""])))}},{kind:"method",key:"_getDashboards",value:(d=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._params.dashboards,e.t0){e.next=5;break}return e.next=4,(0,y.j2)(this.hass);case 4:e.t0=e.sent;case 5:this._dashboards=e.t0;case 6:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{kind:"method",key:"_dashboardChanged",value:(r=g(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.detail.item.urlPath)!==this._urlPath){e.next=3;break}return e.abrupt("return");case 3:return"lovelace"===r&&(r=null),this._urlPath=r,this._selectedViewIdx=0,e.prev=6,e.next=9,(0,y.Q2)(this.hass.connection,r,!1);case 9:this._config=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),this._config=void 0;case 15:case"end":return e.stop()}}),e,this,[[6,12]])}))),function(e){return r.apply(this,arguments)})},{kind:"method",key:"_viewChanged",value:function(e){var t=Number(e.target.value);isNaN(t)||(this._selectedViewIdx=t)}},{kind:"method",key:"_selectView",value:function(){(0,h.B)(this,"view-selected",{view:this._selectedViewIdx}),this._params.viewSelectedCallback(this._urlPath,this._config,this._selectedViewIdx),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[v.yu,(0,f.iv)(u||(u=k(["\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n      "])))]}}]}}),f.oi)}}]);