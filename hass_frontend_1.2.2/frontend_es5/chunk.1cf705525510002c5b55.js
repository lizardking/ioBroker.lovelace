(self.webpackJsonp=self.webpackJsonp||[]).push([[211],{899:function(e,t,r){"use strict";r.r(t),r.d(t,"severityMap",(function(){return W}));var n=r(0),i=r(87),o=(r(391),r(99)),a=r(12),s=r(208),c=r(307),u=(r(209),r(269)),l=r(234),f=r(230),d=r(86),h=r(367);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){var e=w(['\n      :host {\n        display: block;\n      }\n\n      ha-card {\n        cursor: pointer;\n        height: 100%;\n        overflow: hidden;\n        padding: 16px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        box-sizing: border-box;\n      }\n\n      ha-card:focus {\n        outline: none;\n        background: var(--divider-color);\n      }\n\n      round-slider {\n        max-width: 200px;\n        --round-slider-path-width: 35px;\n        --round-slider-path-color: var(--primary-background-color);\n        --round-slider-linecap: "butt";\n      }\n\n      .gauge-data {\n        text-align: center;\n        line-height: initial;\n        color: var(--primary-text-color);\n        margin-top: -26px;\n        width: 100%;\n      }\n\n      .gauge-data .percent {\n        white-space: nowrap;\n        font-size: 28px;\n      }\n\n      .gauge-data .name {\n        font-size: 15px;\n      }\n\n      /* ============= NARROW ============= */\n\n      :host([narrow]) ha-card {\n        padding: 8px;\n      }\n\n      :host([narrow]) round-slider {\n        --round-slider-path-width: 22px;\n      }\n\n      :host([narrow]) .gauge-data {\n        margin-top: -22px;\n      }\n\n      :host([narrow]) .gauge-data .percent {\n        font-size: 24px;\n      }\n\n      :host([narrow]) .gauge-data .name {\n        font-size: 14px;\n      }\n\n      /* ============= VERY NARROW ============= */\n\n      :host([narrow]) ha-card {\n        padding: 4px;\n      }\n\n      :host([veryNarrow]) round-slider {\n        --round-slider-path-width: 15px;\n      }\n\n      :host([veryNarrow]) .gauge-data {\n        margin-top: -16px;\n      }\n\n      :host([veryNarrow]) .gauge-data .percent {\n        font-size: 16px;\n      }\n\n      :host([veryNarrow]) .gauge-data .name {\n        font-size: 12px;\n      }\n    ']);return m=function(){return e},e}function y(){var e=w(["\n      <ha-card\n        @click=",'\n        tabindex="0"\n        style=','\n      >\n        <round-slider\n          readonly\n          arcLength="180"\n          startAngle="180"\n          .value=',"\n          .min=","\n          .max=",'\n        ></round-slider>\n        <div class="gauge-data">\n          <div class="percent">\n            ',"\n            ",'\n          </div>\n          <div class="name">\n            ',"\n          </div>\n        </div>\n      </ha-card>\n    "]);return y=function(){return e},e}function v(){var e=w(["\n        <hui-warning\n          >","</hui-warning\n        >\n      "]);return v=function(){return e},e}function b(){var e=w(["\n        <hui-warning>\n          ","\n        </hui-warning>\n      "]);return b=function(){return e},e}function g(){var e=w([""]);return g=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){k(o,n,i,a,s,"next",e)}function s(e){k(o,n,i,a,s,"throw",e)}a(void 0)}))}}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var i=F(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){var t,r=R(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function z(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function R(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function N(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t,r){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};!function(e,t,r,n){var i=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!z(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||N(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=R(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(A(o.descriptor)||A(i.descriptor)){if(z(o)||z(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(z(o)){if(z(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}S(o,i)}else t.push(o)}return t}(a.d.map(C)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([Object(n.d)("hui-gauge-card")],(function(e,t){var p,w,k=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(n,t);var r=_(n);function n(){var t;E(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(P(t)),t}return n}(t);return{F:k,d:[{kind:"method",static:!0,key:"getConfigElement",value:(w=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(0),r.e(1),r.e(3),r.e(4),r.e(74)]).then(r.bind(null,858));case 2:return e.abrupt("return",document.createElement("hui-gauge-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return w.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"gauge",entity:Object(u.a)(e,1,t,r,["sensor"],(function(e){return!isNaN(Number(e.state))}))[0]||""}}},{kind:"field",decorators:[Object(n.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_config",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e=this;I(F(k.prototype),"connectedCallback",this).call(this),this.updateComplete.then((function(){return e._attachObserver()}))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Invalid card configuration");if(!Object(c.b)(e.entity))throw new Error("Invalid Entity");this._config=Object.assign({min:0,max:100},e)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return Object(n.f)(g());var e=this.hass.states[this._config.entity];if(!e)return Object(n.f)(b(),Object(f.a)(this.hass,this._config.entity));var t=Number(e.state);if(isNaN(t))return Object(n.f)(v(),this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity));var r,o=this._computeSeverity(t);return r=null===this._config.max||isNaN(this._config.max)?void 0:Math.min(this._config.max,t),Object(n.f)(y(),this._handleClick,Object(i.a)({"--round-slider-bar-color":o}),r,this._config.min,this._config.max,e.state,this._config.unit||e.attributes.unit_of_measurement||"",this._config.name||Object(s.a)(e))}},{kind:"method",key:"shouldUpdate",value:function(e){return Object(l.a)(this,e)}},{kind:"method",key:"firstUpdated",value:function(){this._measureCard(),this._attachObserver()}},{kind:"method",key:"updated",value:function(e){if(I(F(k.prototype),"updated",this).call(this,e),this._config&&this.hass){var t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||Object(o.a)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_computeSeverity",value:function(e){var t=this._config.severity;if(!t)return W.normal;var r,n=Object.keys(t).map((function(e){return[e,t[e]]})),i=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=N(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}(n);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(null==W[o[0]]||isNaN(o[1]))return W.normal}}catch(a){i.e(a)}finally{i.f()}return n.sort((function(e,t){return e[1]-t[1]})),e>=n[0][1]&&e<n[1][1]?W[n[0][0]]:e>=n[1][1]&&e<n[2][1]?W[n[1][0]]:e>=n[2][1]?W[n[2][0]]:W.normal}},{kind:"method",key:"_handleClick",value:function(){Object(a.a)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"method",key:"_attachObserver",value:(p=O(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._resizeObserver){e.next=4;break}return e.next=3,Object(h.a)();case 3:this._resizeObserver=new ResizeObserver(Object(d.a)((function(){return r._measureCard()}),250,!1));case 4:if(t=this.shadowRoot.querySelector("ha-card")){e.next=7;break}return e.abrupt("return");case 7:this._resizeObserver.observe(t);case 8:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{kind:"method",key:"_measureCard",value:function(){this.isConnected&&(this.offsetWidth<200?this.setAttribute("narrow",""):this.removeAttribute("narrow"),this.offsetWidth<150?this.setAttribute("veryNarrow",""):this.removeAttribute("veryNarrow"))}},{kind:"get",static:!0,key:"styles",value:function(){return Object(n.c)(m())}}]}}),n.a)}}]);
//# sourceMappingURL=chunk.1cf705525510002c5b55.js.map