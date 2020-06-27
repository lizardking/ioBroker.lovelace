/*! For license information please see chunk.0e67cad6af0828e8f37f.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[41],{161:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(4);var i=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var n in e)t[n]=e[n]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,n){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=t?this.animationConfig[t]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var o,r=0;o=i[r];r++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||t,e,n);else if(o.id){var a=e[o.id];a?(a.isClone||(e[o.id]=this._cloneConfig(a),a=e[o.id]),this._copyProperties(a,o)):e[o.id]=o}else n.push(o)},getAnimationConfig:function(t){var e={},n=[];for(var i in this._getAnimationConfigRecursive(t,e,n),e)n.push(e[i]);return n}},{_configureAnimations:function(t){var e=[],n=[];if(t.length>0)for(var i,o=0;i=t[o];o++){var r=document.createElement(i.name);if(r.isNeonAnimation){var a;r.configure||(r.configure=function(t){return null}),a=r.configure(i),n.push({result:a,config:i,neonAnimation:r})}else console.warn(this.is+":",i.name,"not found!")}for(var s=0;s<n.length;s++){var l=n[s].result,c=n[s].config,u=n[s].neonAnimation;try{"function"!=typeof l.cancel&&(l=document.timeline.play(l))}catch(p){l=null,console.warn("Couldnt play","(",c.name,").",p)}l&&e.push({neonAnimation:u,config:c,animation:l})}return e},_shouldComplete:function(t){for(var e=!0,n=0;n<t.length;n++)if("finished"!=t[n].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var n=this.getAnimationConfig(t);if(n){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var i=this._configureAnimations(n);if(0!=i.length){this._active[t]=i;for(var o=0;o<i.length;o++)i[o].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var n in e)e[n].animation.cancel()}this._active={}}}]},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var i=n(12),o=function(){return Promise.all([n.e(2),n.e(7),n.e(9),n.e(25),n.e(44)]).then(n.bind(null,262))},r=function(t,e,n){return new Promise((function(r){var a=e.cancel,s=e.confirm;Object(i.a)(t,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:Object.assign({},e,n,{cancel:function(){r(!!(null==n?void 0:n.prompt)&&null),a&&a()},confirm:function(t){r(!(null==n?void 0:n.prompt)||t),s&&s(t)}})})}))},a=function(t,e){return r(t,e)},s=function(t,e){return r(t,e,{confirmation:!0})},l=function(t,e){return r(t,e,{prompt:!0})}},224:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));n(4);var i=n(115),o=n(2),r={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(t,e){e&&(t?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(t){this.closingReason=this.closingReason||{},this.closingReason.confirmed=t},_onDialogClick:function(t){for(var e=Object(o.a)(t).path,n=0,i=e.indexOf(this);n<i;n++){var r=e[n];if(r.hasAttribute&&(r.hasAttribute("dialog-dismiss")||r.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(r.hasAttribute("dialog-confirm")),this.close(),t.stopPropagation();break}}}},a=[i.a,r]},240:function(t,e,n){"use strict";n(243);var i=n(90),o=n(166),r=n(2),a={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?o.a._sortByTabIndex(e):e},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!o.a._isVisible(t))return!1;var n,i=t,a=o.a._normalizedTabIndex(i),s=a>0;a>=0&&e.push(i),n="content"===i.localName||"slot"===i.localName?Object(r.a)(i).getDistributedNodes():Object(r.a)(i.shadowRoot||i.root||i).children;for(var l=0;l<n.length;l++)s=this._collectTabbableNodes(n[l],e)||s;return s}};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=customElements.get("paper-dialog"),h={get _focusableNodes(){return a.getTabbableNodes(this)}},m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(){return l(this,n),e.apply(this,arguments)}return n}(Object(i.b)([h],d));customElements.define("ha-paper-dialog",m)},242:function(t,e,n){"use strict";n(4),n(53),n(52),n(59),n(114);var i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},243:function(t,e,n){"use strict";n(4),n(242);var i=n(161),o=n(224),r=n(5),a=n(3);function s(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n']);return s=function(){return t},t}Object(r.a)({_template:Object(a.a)(s()),is:"paper-dialog",behaviors:[o.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},257:function(t,e,n){"use strict";n(4),n(53),n(52);var i=n(224),o=n(5),r=n(3);function a(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n']);return a=function(){return t},t}Object(o.a)({_template:Object(r.a)(a()),is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(i.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},938:function(t,e,n){"use strict";n.r(e),n.d(e,"DialogManageCloudhook",(function(){return T}));n(111),n(257),n(76);var i=n(0),o=(n(240),n(216)),r=n(54);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){var t=f(["\n        ha-paper-dialog {\n          width: 650px;\n        }\n        paper-input {\n          margin-top: -8px;\n        }\n        button.link {\n          color: var(--primary-color);\n        }\n        .paper-dialog-buttons a {\n          text-decoration: none;\n        }\n      "]);return s=function(){return t},t}function l(){var t=f(["\n                  ",'\n                  <button class="link" @click="','">\n                    ',"</button\n                  >.\n                "]);return l=function(){return t},t}function c(){var t=f(["\n                  ","\n                "]);return c=function(){return t},t}function u(){var t=f(["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ","\n        </h2>\n        <div>\n          <p>\n            ",'\n          </p>\n          <paper-input\n            label="','"\n            value="','"\n            @click="','"\n            @blur="','"\n          ></paper-input>\n          <p>\n            ','\n          </p>\n        </div>\n\n        <div class="paper-dialog-buttons">\n          <a href="','" target="_blank" rel="noreferrer">\n            <mwc-button\n              >','</mwc-button\n            >\n          </a>\n          <mwc-button @click="','"\n            >',"</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "]);return u=function(){return t},t}function p(){var t=f([""]);return p=function(){return t},t}function f(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t,e,n,i,o,r,a){try{var s=t[r](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(i,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){d(r,i,o,a,s,"next",t)}function s(t){d(r,i,o,a,s,"throw",t)}a(void 0)}))}}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t){var e,n=A(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function w(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function C(t){return t.decorators&&t.decorators.length}function O(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function E(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}function A(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var j="Public URL – Click to copy to clipboard",T=function(t,e,n,i){var o=function(){(function(){return t});var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var o=e.placement;if(e.kind===i&&("static"===o||"prototype"===o)){var r="static"===o?t:n;this.defineClassElement(r,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var i=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],i=[],o={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,o)}),this),t.forEach((function(t){if(!C(t))return n.push(t);var e=this.decorateElement(t,o);n.push(e.element),n.push.apply(n,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:n,finishers:i};var r=this.decorateConstructor(n,e);return i.push.apply(i,r.finishers),r.finishers=i,r},addElementPlacement:function(t,e,n){var i=e[t.placement];if(!n&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var n=[],i=[],o=t.decorators,r=o.length-1;r>=0;r--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,o[r])(s)||s);t=l.element,this.addElementPlacement(t,e),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],e);n.push.apply(n,c)}}return{element:t,finishers:i,extras:n}},decorateConstructor:function(t,e){for(var n=[],i=e.length-1;i>=0;i--){var o=this.fromClassDescriptor(t),r=this.toClassDescriptor((0,e[i])(o)||o);if(void 0!==r.finisher&&n.push(r.finisher),void 0!==r.elements){t=r.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=A(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var r={kind:e,key:n,placement:i,descriptor:Object.assign({},o)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),r.initializer=t.initializer),r},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:E(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=E(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var i=(0,e[n])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}();if(i)for(var r=0;r<i.length;r++)o=i[r](o);var a=e((function(t){o.initializeInstanceElements(t,s.elements)}),n),s=o.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===r.key&&t.placement===r.placement},i=0;i<t.length;i++){var o,r=t[i];if("method"===r.kind&&(o=e.find(n)))if(O(r.descriptor)||O(o.descriptor)){if(C(r)||C(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(C(r)){if(C(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}w(r,o)}else e.push(r)}return e}(a.d.map(k)),t);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}(null,(function(t,e){var n,a;return{F:function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(i,e);var n=y(i);function i(){var e;m(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),t(v(e)),e}return i}(e),d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:(a=h(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._params=e,t.next=3,this.updateComplete;case 3:this._dialog.open();case 4:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{kind:"method",key:"render",value:function(){if(!this._params)return Object(i.f)(p());var t=this._params,e=t.webhook,n=t.cloudhook,o="automation"===e.domain?"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/automation/trigger/#webhook-trigger":"https://www.home-assistant.io/integrations/".concat(e.domain,"/");return Object(i.f)(u(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for","name",e.name),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.available_at"),j,n.cloudhook_url,this._copyClipboard,this._restoreLabel,n.managed?Object(i.f)(c(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")):Object(i.f)(l(),this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook"),this._disableWebhook,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")),o,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation"),this._closeDialog,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close"))}},{kind:"get",key:"_dialog",value:function(){return this.shadowRoot.querySelector("ha-paper-dialog")}},{kind:"get",key:"_paperInput",value:function(){return this.shadowRoot.querySelector("paper-input")}},{kind:"method",key:"_closeDialog",value:function(){this._dialog.close()}},{kind:"method",key:"_disableWebhook",value:(n=h(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(o.b)(this,{text:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable"),dismissText:this.hass.localize("ui.common.no"),confirmText:this.hass.localize("ui.common.yes"),confirm:function(){e._params.disableHook(),e._closeDialog()}});case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"_copyClipboard",value:function(t){var e=t.currentTarget,n=e.inputElement.inputElement;n.setSelectionRange(0,n.value.length);try{document.execCommand("copy"),e.label=this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard")}catch(i){}}},{kind:"method",key:"_restoreLabel",value:function(){this._paperInput.label=j}},{kind:"get",static:!0,key:"styles",value:function(){return[r.b,Object(i.c)(s())]}}]}}),i.a);customElements.define("dialog-manage-cloudhook",T)}}]);
//# sourceMappingURL=chunk.0e67cad6af0828e8f37f.js.map