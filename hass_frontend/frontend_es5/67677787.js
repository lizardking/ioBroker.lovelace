"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[47771],{48456:function(e,t,r){var i,n,o,a=r(37500),s=r(33310),c=r(14516),l=r(47181);r(16235),r(23956);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=O(e);if(t){var n=O(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return h(this,r)}}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){v=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!b(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=E(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:w(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=w(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function y(e){var t,r=E(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function k(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function g(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function w(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function E(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function P(e,t,r){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},P(e,t,r||e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}!function(e,t,r,i){var n=v();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(g(o.descriptor)||g(n.descriptor)){if(b(o)||b(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(b(o)){if(b(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}k(o,n)}else t.push(o)}return t}(a.d.map(y)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,s.Mo)("ha-locations-editor")],(function(e,t){var d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,t);var i=p(n);function n(){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=i.call(this),e(m(t)),r.e(70208).then(r.t.bind(r,70208,23)).then((function(e){r.e(27716).then(r.t.bind(r,27716,23)).then((function(){t.Leaflet=e.default,t._updateMarkers(),t.updateComplete.then((function(){return t.fitMap()}))}))})),t}return n}(t);return{F:d,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autoFit",value:function(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"zoom",value:function(){return 16}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_circles",value:function(){return{}}},{kind:"field",decorators:[(0,s.IO)("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"method",key:"fitMap",value:function(){this.map.fitMap()}},{kind:"method",key:"fitMarker",value:function(e){if(this.map.leafletMap&&this._locationMarkers){var t=this._locationMarkers[e];if(t)if("getBounds"in t)this.map.leafletMap.fitBounds(t.getBounds()),t.bringToFront();else{var r=this._circles[e];r?this.map.leafletMap.fitBounds(r.getBounds()):this.map.leafletMap.setView(t.getLatLng(),this.zoom)}}}},{kind:"method",key:"render",value:function(){return(0,a.dy)(i||(i=u(["\n      <ha-map\n        .hass=","\n        .layers=","\n        .zoom=","\n        .autoFit=","\n        .darkMode=","\n      ></ha-map>\n      ","\n    "])),this.hass,this._getLayers(this._circles,this._locationMarkers),this.zoom,this.autoFit,this.darkMode,this.helper?(0,a.dy)(n||(n=u(["<ha-input-helper-text>","</ha-input-helper-text>"])),this.helper):"")}},{kind:"field",key:"_getLayers",value:function(){return(0,c.Z)((function(e,t){var r=[];return Array.prototype.push.apply(r,Object.values(e)),t&&Array.prototype.push.apply(r,Object.values(t)),r}))}},{kind:"method",key:"willUpdate",value:function(e){P(O(d.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"_updateLocation",value:function(e){var t=e.target,r=t.getLatLng(),i=r.lng;Math.abs(i)>180&&(i=(i%360+540)%360-180);var n=[r.lat,i];(0,l.B)(this,"location-updated",{id:t.id,location:n},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(e){var t=e.target,r=this._locationMarkers[t.id];(0,l.B)(this,"radius-updated",{id:t.id,radius:r.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(e){var t=e.target;(0,l.B)(this,"marker-clicked",{id:t.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){var e=this;if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);var t={},r={},i=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((function(n){var o;if(n.icon){var a=document.createElement("div");a.className="named-icon",n.name&&(a.innerText=n.name);var s=document.createElement("ha-icon");s.setAttribute("icon",n.icon),a.prepend(s),o=e.Leaflet.divIcon({html:a.outerHTML,iconSize:[24,24],className:"light"})}if(n.radius){var c=e.Leaflet.circle([n.latitude,n.longitude],{color:n.radius_color||i,radius:n.radius});n.radius_editable||n.location_editable?(c.editing.enable(),c.addEventListener("add",(function(){var t=c.editing._moveMarker,r=c.editing._resizeMarkers[0];o&&t.setIcon(o),r.id=t.id=n.id,t.addEventListener("dragend",(function(t){return e._updateLocation(t)})).addEventListener("click",(function(t){return e._markerClicked(t)})),n.radius_editable?r.addEventListener("dragend",(function(t){return e._updateRadius(t)})):r.remove()})),t[n.id]=c):r[n.id]=c}if(!n.radius||!n.radius_editable&&!n.location_editable){var l={title:n.name,draggable:n.location_editable};o&&(l.icon=o);var d=e.Leaflet.marker([n.latitude,n.longitude],l).addEventListener("dragend",(function(t){return e._updateLocation(t)})).addEventListener("click",(function(t){return e._markerClicked(t)}));d.id=n.id,t[n.id]=d}})),this._circles=r,this._locationMarkers=t,(0,l.B)(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,a.iv)(o||(o=u(["\n      ha-map {\n        display: block;\n        height: 100%;\n      }\n    "])))}}]}}),a.oi)},54845:function(e,t,r){function i(e,t,r,i,n,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(i,n)}r.d(t,{P:function(){return n}});var n=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"==typeof ResizeObserver){e.next=4;break}return e.next=3,r.e(88800).then(r.bind(r,88800));case 3:window.ResizeObserver=e.sent.default;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){i(a,n,o,s,c,"next",e)}function c(e){i(a,n,o,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}()}}]);