"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[38654],{38654:function(e,t,n){n.r(t);n(44577);var r,i,o,a,s,c,l,u,d,f,p,h=n(37500),y=n(33310),m=n(8636),v=n(14516),g=n(47181),b=n(58831),_=n(91741),x=n(45485),k=n(85415),w=(n(65992),n(81545),n(22098),n(83927),n(10983),n(43709),n(27434)),E=n(83270),S=n(74186),C=n(90363),A=(n(15291),n(60010),n(73826)),L=n(11654);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function D(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){D(o,r,i,a,s,"next",e)}function s(e){D(o,r,i,a,s,"throw",e)}a(void 0)}))}}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q(e);if(t){var i=q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return M(this,n)}}function M(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){H=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!B(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||N(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=U(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:$(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=$(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function V(e){var t,n=U(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function F(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function Z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function $(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function U(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}function N(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t,n){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},W(e,t,n||e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var G="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",J="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z",K="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z",X="M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z",Y=["Alexa.EndpointHealth"];!function(e,t,n,r){var i=H();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(Z(o.descriptor)||Z(i.descriptor)){if(B(o)||B(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(B(o)){if(B(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}F(o,i)}else t.push(o)}return t}(a.d.map(V)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,y.Mo)("cloud-alexa")],(function(e,t){var n,A,O,D,M,H=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(r,t);var n=T(r);function r(){var t;z(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e(I(t)),t}return r}(t);return{F:H,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_entityConfigs",value:function(){return{}}},{kind:"field",decorators:[(0,y.SB)()],key:"_entityCategories",value:void 0},{kind:"field",key:"_popstateSyncAttached",value:function(){return!1}},{kind:"field",key:"_popstateReloadStatusAttached",value:function(){return!1}},{kind:"field",key:"_isInitialExposed",value:void 0},{kind:"field",key:"_getEntityFilterFunc",value:function(){return(0,v.Z)((function(e){return(0,x.h)(e.include_domains,e.include_entities,e.exclude_domains,e.exclude_entities)}))}},{kind:"method",key:"render",value:function(){var e=this;if(void 0===this._entities||void 0===this._entityCategories)return(0,h.dy)(r||(r=j([" <hass-loading-screen></hass-loading-screen> "])));var t=(0,x.E)(this.cloudStatus.alexa_entities),n=this._getEntityFilterFunc(this.cloudStatus.alexa_entities),p=this._isInitialExposed||new Set,y=void 0===this._isInitialExposed,v=0,g=[],b=[];return this._entities.forEach((function(r){var c=e.hass.states[r.entity_id],l=e._entityConfigs[r.entity_id]||{should_expose:null},u=t?e._configIsExposed(r.entity_id,l,e._entityCategories[r.entity_id]):n(r.entity_id),d=t?e._configIsDomainExposed(r.entity_id,e._entityCategories[r.entity_id]):n(r.entity_id);u&&(v++,y&&p.add(r.entity_id));var f=p.has(r.entity_id)?g:b,_=(0,h.dy)(i||(i=j(['<ha-icon-button\n        slot="trigger"\n        class=',"\n        .disabled=","\n        .label=","\n        .path=","\n      ></ha-icon-button>"])),(0,m.$)({exposed:u,"not-exposed":!u}),!t,e.hass.localize("ui.panel.config.cloud.alexa.expose"),null!==l.should_expose?u?G:K:d?J:X);f.push((0,h.dy)(o||(o=j(['\n        <ha-card outlined>\n          <div class="card-content">\n            <div class="top-line">\n              <state-info\n                .hass=',"\n                .stateObj=","\n                secondary-line\n                @click=","\n              >\n                ","\n              </state-info>\n              ","\n            </div>\n          </div>\n        </ha-card>\n      "])),e.hass,c,e._showMoreInfo,r.interfaces.filter((function(e){return!Y.includes(e)})).map((function(e){return e.replace(/(Alexa.|Controller)/g,"")})).join(", "),t?(0,h.dy)(s||(s=j(['<ha-button-menu\n                    corner="BOTTOM_START"\n                    .entityId=',"\n                    @action=","\n                  >\n                    ","\n                    <mwc-list-item hasMeta>\n                      ",'\n                      <ha-svg-icon\n                        class="exposed"\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                    <mwc-list-item hasMeta>\n                      ",'\n                      <ha-svg-icon\n                        class="not-exposed"\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                    <mwc-list-item hasMeta>\n                      ","\n                      <ha-svg-icon\n                        class=",'\n                        slot="meta"\n                        .path=',"\n                      ></ha-svg-icon>\n                    </mwc-list-item>\n                  </ha-button-menu>"])),c.entity_id,e._exposeChanged,_,e.hass.localize("ui.panel.config.cloud.alexa.expose_entity"),G,e.hass.localize("ui.panel.config.cloud.alexa.dont_expose_entity"),K,e.hass.localize("ui.panel.config.cloud.alexa.follow_domain"),(0,m.$)({exposed:d,"not-exposed":!d}),d?J:X):(0,h.dy)(a||(a=j(["",""])),_)))})),y&&(this._isInitialExposed=p),(0,h.dy)(c||(c=j(["\n      <hass-subpage .hass="," .narrow="," .header=",">\n        ","\n        ","\n          ","\n          ","\n        </div>\n      </hass-subpage>\n    "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.cloud.alexa.title"),t?(0,h.dy)(l||(l=j(['\n                <mwc-button\n                  slot="toolbar-icon"\n                  @click=',"\n                  >","</mwc-button\n                >\n              "])),this._openDomainToggler,this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults")):"",t?"":(0,h.dy)(u||(u=j(['\n                <div class="banner">\n                  ',"\n                </div>\n              "])),this.hass.localize("ui.panel.config.cloud.alexa.banner")),g.length>0?(0,h.dy)(d||(d=j(['\n                  <div class="header">\n                    <h3>\n                      ',"\n                    </h3>\n                    ",'\n                  </div>\n                  <div class="content">',"</div>\n                "])),this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities"),this.narrow?v:this.hass.localize("ui.panel.config.cloud.alexa.exposed","selected",v),g):"",b.length>0?(0,h.dy)(f||(f=j(['\n                  <div class="header second">\n                    <h3>\n                      ',"\n                    </h3>\n                    ",'\n                  </div>\n                  <div class="content">',"</div>\n                "])),this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities"),this.narrow?this._entities.length-v:this.hass.localize("ui.panel.config.cloud.alexa.not_exposed","selected",this._entities.length-v),b):"")}},{kind:"method",key:"firstUpdated",value:function(e){W(q(H.prototype),"firstUpdated",this).call(this,e),this._fetchData()}},{kind:"method",key:"updated",value:function(e){W(q(H.prototype),"updated",this).call(this,e),e.has("cloudStatus")&&(this._entityConfigs=this.cloudStatus.prefs.alexa_entity_configs)}},{kind:"method",key:"hassSubscribe",value:function(){var e=this;return[(0,S.LM)(this.hass.connection,(function(t){var n,r={},i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=N(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;r[o.entity_id]=o.entity_category}}catch(a){i.e(a)}finally{i.f()}e._entityCategories=r}))]}},{kind:"method",key:"_fetchData",value:(M=P(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.t)(this.hass);case 2:(t=e.sent).sort((function(e,t){var r=n.hass.states[e.entity_id],i=n.hass.states[t.entity_id];return(0,k.$)(r?(0,_.C)(r):e.entity_id,i?(0,_.C)(i):t.entity_id)})),this._entities=t;case 5:case"end":return e.stop()}}),e,this)}))),function(){return M.apply(this,arguments)})},{kind:"method",key:"_showMoreInfo",value:function(e){var t=e.currentTarget.stateObj.entity_id;(0,g.B)(this,"hass-more-info",{entityId:t})}},{kind:"method",key:"_configIsDomainExposed",value:function(e,t){var n=(0,b.M)(e);return!this.cloudStatus.prefs.alexa_default_expose||!t&&this.cloudStatus.prefs.alexa_default_expose.includes(n)}},{kind:"method",key:"_configIsExposed",value:function(e,t,n){var r;return null!==(r=t.should_expose)&&void 0!==r?r:this._configIsDomainExposed(e,n)}},{kind:"method",key:"_exposeChanged",value:(D=P(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.currentTarget.entityId,r=null,e.t0=t.detail.index,e.next=0===e.t0?5:1===e.t0?7:2===e.t0?9:11;break;case 5:return r=!0,e.abrupt("break",11);case 7:return r=!1,e.abrupt("break",11);case 9:return r=null,e.abrupt("break",11);case 11:return e.next=13,this._updateExposed(n,r);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return D.apply(this,arguments)})},{kind:"method",key:"_updateExposed",value:(O=P(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateConfig(t,{should_expose:n});case 2:this._ensureEntitySync();case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return O.apply(this,arguments)})},{kind:"method",key:"_updateConfig",value:(A=P(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.tW)(this.hass,t,n);case 2:r=e.sent,this._entityConfigs=Object.assign({},this._entityConfigs,(a=r,(o=t)in(i={})?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i)),this._ensureStatusReload();case 5:case"end":return e.stop()}var i,o,a}),e,this)}))),function(e,t){return A.apply(this,arguments)})},{kind:"method",key:"_openDomainToggler",value:function(){var e=this;(0,C._)(this,{title:this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults"),description:this.hass.localize("ui.panel.config.cloud.alexa.manage_defaults_dialog_description"),domains:this._entities.map((function(e){return(0,b.M)(e.entity_id)})).filter((function(e,t,n){return n.indexOf(e)===t})),exposedDomains:this.cloudStatus.prefs.alexa_default_expose,toggleDomain:function(t,n){e._updateDomainExposed(t,n)},resetDomain:function(t){e._entities.forEach((function(n){(0,b.M)(n.entity_id)===t&&e._updateExposed(n.entity_id,null)}))}})}},{kind:"method",key:"_updateDomainExposed",value:(n=P(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.cloudStatus.prefs.alexa_default_expose||this._entities.map((function(e){return(0,b.M)(e.entity_id)})).filter((function(e,t,n){return n.indexOf(e)===t})),!(n&&r.includes(t)||!n&&!r.includes(t))){e.next=3;break}return e.abrupt("return");case 3:return n?r.push(t):r.splice(r.indexOf(t),1),e.next=6,(0,E.LV)(this.hass,{alexa_default_expose:r});case 6:(0,g.B)(this,"ha-refresh-cloud-status");case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{kind:"method",key:"_ensureStatusReload",value:function(){if(!this._popstateReloadStatusAttached){this._popstateReloadStatusAttached=!0;var e=this.parentElement;window.addEventListener("popstate",(function(){return(0,g.B)(e,"ha-refresh-cloud-status")}),{once:!0})}}},{kind:"method",key:"_ensureEntitySync",value:function(){this._popstateSyncAttached||(this._popstateSyncAttached=!0,window.addEventListener("popstate",(function(){}),{once:!0}))}},{kind:"get",static:!0,key:"styles",value:function(){return[L.Qx,(0,h.iv)(p||(p=j(['\n        mwc-list-item > [slot="meta"] {\n          margin-left: 4px;\n        }\n        .banner {\n          color: var(--primary-text-color);\n          background-color: var(\n            --ha-card-background,\n            var(--card-background-color, white)\n          );\n          padding: 16px 8px;\n          text-align: center;\n        }\n        .content {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n          grid-gap: 8px 8px;\n          padding: 8px;\n        }\n        .card-content {\n          padding-bottom: 12px;\n        }\n        state-info {\n          cursor: pointer;\n        }\n        ha-switch {\n          padding: 8px 0;\n        }\n        .top-line {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        .header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          padding: 0 16px;\n          border-bottom: 1px solid var(--divider-color);\n          background: var(--app-header-background-color);\n        }\n        .header.second {\n          border-top: 1px solid var(--divider-color);\n        }\n        .exposed {\n          color: var(--success-color);\n        }\n        .not-exposed {\n          color: var(--error-color);\n        }\n        @media all and (max-width: 450px) {\n          ha-card {\n            max-width: 100%;\n          }\n        }\n      '])))]}}]}}),(0,A.f)(h.oi))}}]);