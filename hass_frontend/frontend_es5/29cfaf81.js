"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6184],{349:function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{m:function(){return a}});var o=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_storage",{}),i(this,"_listeners",{}),window.addEventListener("storage",(function(e){e.key&&t.hasKey(e.key)&&(t._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,t._listeners[e.key]&&t._listeners[e.key].forEach((function(r){return r(e.oldValue?JSON.parse(e.oldValue):e.oldValue,t._storage[e.key])})))}))}var t,r,o;return t=e,(r=[{key:"addFromStorage",value:function(e){if(!this._storage[e]){var t=window.localStorage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}},{key:"subscribeChanges",value:function(e,t){var r=this;return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],function(){r.unsubscribeChanges(e,t)}}},{key:"unsubscribeChanges",value:function(e,t){if(e in this._listeners){var r=this._listeners[e].indexOf(t);-1!==r&&this._listeners[e].splice(r,1)}}},{key:"hasKey",value:function(e){return e in this._storage}},{key:"getValue",value:function(e){return this._storage[e]}},{key:"setValue",value:function(e,t){this._storage[e]=t;try{window.localStorage.setItem(e,JSON.stringify(t))}catch(r){}}}])&&n(t.prototype,r),o&&n(t,o),e}()),a=function(e,t,r){return function(n){var i=String(n.key);e=e||String(n.key);var a=n.initializer?n.initializer():void 0;o.addFromStorage(e);var s=function(){return o.hasKey(e)?o.getValue(e):a};return{kind:"method",placement:"prototype",key:n.key,descriptor:{set:function(r){!function(r,i){var a;t&&(a=s()),o.setValue(e,i),t&&r.requestUpdate(n.key,a)}(this,r)},get:function(){return s()},enumerable:!0,configurable:!0},finisher:function(a){if(t){var s=a.prototype.connectedCallback,c=a.prototype.disconnectedCallback;a.prototype.connectedCallback=function(){var t;s.call(this),this["__unbsubLocalStorage".concat(i)]=(t=this,o.subscribeChanges(e,(function(e){t.requestUpdate(n.key,e)})))},a.prototype.disconnectedCallback=function(){c.call(this),this["__unbsubLocalStorage".concat(i)]()},a.createProperty(n.key,Object.assign({noAccessor:!0},r))}}}}}},27269:function(e,t,r){r.d(t,{p:function(){return n}});var n=function(e){return e.substr(e.indexOf(".")+1)}},22311:function(e,t,r){r.d(t,{N:function(){return i}});var n=r(58831),i=function(e){return(0,n.M)(e.entity_id)}},91741:function(e,t,r){r.d(t,{C:function(){return i}});var n=r(27269),i=function(e){return void 0===e.attributes.friendly_name?(0,n.p)(e.entity_id).replace(/_/g," "):e.attributes.friendly_name||""}},40095:function(e,t,r){r.d(t,{e:function(){return n}});var n=function(e,t){return 0!=(e.attributes.supported_features&t)}},81303:function(e,t,r){r(8878);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}},a(e,t,r||e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var i=l(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(f,e);var t,r,n,u=c(f);function f(){return i(this,f),u.apply(this,arguments)}return t=f,(r=[{key:"ready",value:function(){var e=this;a(l(f.prototype),"ready",this).call(this),setTimeout((function(){"rtl"===window.getComputedStyle(e).direction&&(e.style.textAlign="right")}),100)}}])&&o(t.prototype,r),n&&o(t,n),f}(customElements.get("paper-dropdown-menu"));customElements.define("ha-paper-dropdown-menu",f)},56007:function(e,t,r){r.d(t,{nZ:function(){return n},lz:function(){return i},V_:function(){return o}});var n="unavailable",i="unknown",o=[n,i]},69371:function(e,t,r){r.d(t,{MU:function(){return c},xh:function(){return u},X6:function(){return l},y:function(){return f},Y3:function(){return d},Bp:function(){return p},rv:function(){return h},VJ:function(){return y},WE:function(){return m},B6:function(){return v},Hy:function(){return g},VH:function(){return b},S6:function(){return C},Dh:function(){return _},pu:function(){return w},N8:function(){return A},Fn:function(){return k},zz:function(){return V},b:function(){return H},rs:function(){return M},Mj:function(){return E},xt:function(){return L}});var n=r(40095),i=r(56007),o="M11,14C12,14 13.05,14.16 14.2,14.44C13.39,15.31 13,16.33 13,17.5C13,18.39 13.25,19.23 13.78,20H3V18C3,16.81 3.91,15.85 5.74,15.12C7.57,14.38 9.33,14 11,14M11,12C9.92,12 9,11.61 8.18,10.83C7.38,10.05 7,9.11 7,8C7,6.92 7.38,6 8.18,5.18C9,4.38 9.92,4 11,4C12.11,4 13.05,4.38 13.83,5.18C14.61,6 15,6.92 15,8C15,9.11 14.61,10.05 13.83,10.83C13.05,11.61 12.11,12 11,12M18.5,10H20L22,10V12H20V17.5A2.5,2.5 0 0,1 17.5,20A2.5,2.5 0 0,1 15,17.5A2.5,2.5 0 0,1 17.5,15C17.86,15 18.19,15.07 18.5,15.21V10Z",a="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",s="M8.16,3L6.75,4.41L9.34,7H4C2.89,7 2,7.89 2,9V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V9C22,7.89 21.11,7 20,7H14.66L17.25,4.41L15.84,3L12,6.84L8.16,3M4,9H17V19H4V9M19.5,9A1,1 0 0,1 20.5,10A1,1 0 0,1 19.5,11A1,1 0 0,1 18.5,10A1,1 0 0,1 19.5,9M19.5,12A1,1 0 0,1 20.5,13A1,1 0 0,1 19.5,14A1,1 0 0,1 18.5,13A1,1 0 0,1 19.5,12Z",c=1,u=2,l=4,f=8,d=16,p=32,h=128,y=256,m=512,v=1024,g=2048,b=4096,C=16384,_=65536,w=131072,A="browser",k={album:{icon:"M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12,16.5C9.5,16.5 7.5,14.5 7.5,12C7.5,9.5 9.5,7.5 12,7.5C14.5,7.5 16.5,9.5 16.5,12C16.5,14.5 14.5,16.5 12,16.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",layout:"grid"},app:{icon:"M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 7H3V4H21V7Z",layout:"grid"},artist:{icon:o,layout:"grid",show_list_images:!0},channel:{icon:s,thumbnail_ratio:"portrait",layout:"grid"},composer:{icon:"M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,0 13,8A2,2 0 0,0 11,6M11,13C12.1,13 13.66,13.23 15.11,13.69C14.5,14.07 14,14.6 13.61,15.23C12.79,15.03 11.89,14.9 11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H13.04C13.13,18.8 13.38,19.44 13.76,20H3V17C3,14.34 8.33,13 11,13M18.5,10H20L22,10V12H20V17.5A2.5,2.5 0 0,1 17.5,20A2.5,2.5 0 0,1 15,17.5A2.5,2.5 0 0,1 17.5,15C17.86,15 18.19,15.07 18.5,15.21V10Z",layout:"grid",show_list_images:!0},contributing_artist:{icon:o,layout:"grid",show_list_images:!0},directory:{icon:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",layout:"grid",show_list_images:!0},episode:{icon:s,layout:"grid",thumbnail_ratio:"portrait"},game:{icon:"M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z",layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:"M8.11,19.45C5.94,18.65 4.22,16.78 3.71,14.35L2.05,6.54C1.81,5.46 2.5,4.4 3.58,4.17L13.35,2.1L13.38,2.09C14.45,1.88 15.5,2.57 15.72,3.63L16.07,5.3L20.42,6.23H20.45C21.5,6.47 22.18,7.53 21.96,8.59L20.3,16.41C19.5,20.18 15.78,22.6 12,21.79C10.42,21.46 9.08,20.61 8.11,19.45V19.45M20,8.18L10.23,6.1L8.57,13.92V13.95C8,16.63 9.73,19.27 12.42,19.84C15.11,20.41 17.77,18.69 18.34,16L20,8.18M16,16.5C15.37,17.57 14.11,18.16 12.83,17.89C11.56,17.62 10.65,16.57 10.5,15.34L16,16.5M8.47,5.17L4,6.13L5.66,13.94L5.67,13.97C5.82,14.68 6.12,15.32 6.53,15.87C6.43,15.1 6.45,14.3 6.62,13.5L7.05,11.5C6.6,11.42 6.21,11.17 6,10.81C6.06,10.2 6.56,9.66 7.25,9.5C7.33,9.5 7.4,9.5 7.5,9.5L8.28,5.69C8.32,5.5 8.38,5.33 8.47,5.17M15.03,12.23C15.35,11.7 16.03,11.42 16.72,11.57C17.41,11.71 17.91,12.24 18,12.86C17.67,13.38 17,13.66 16.3,13.5C15.61,13.37 15.11,12.84 15.03,12.23M10.15,11.19C10.47,10.66 11.14,10.38 11.83,10.53C12.5,10.67 13.03,11.21 13.11,11.82C12.78,12.34 12.11,12.63 11.42,12.5C10.73,12.33 10.23,11.8 10.15,11.19M11.97,4.43L13.93,4.85L13.77,4.05L11.97,4.43Z",layout:"grid",show_list_images:!0},image:{icon:"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",layout:"grid"},movie:{icon:"M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z",thumbnail_ratio:"portrait",layout:"grid"},music:{icon:"M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"},playlist:{icon:"M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z",layout:"grid",show_list_images:!0},podcast:{icon:"M17,18.25V21.5H7V18.25C7,16.87 9.24,15.75 12,15.75C14.76,15.75 17,16.87 17,18.25M12,5.5A6.5,6.5 0 0,1 18.5,12C18.5,13.25 18.15,14.42 17.54,15.41L16,14.04C16.32,13.43 16.5,12.73 16.5,12C16.5,9.5 14.5,7.5 12,7.5C9.5,7.5 7.5,9.5 7.5,12C7.5,12.73 7.68,13.43 8,14.04L6.46,15.41C5.85,14.42 5.5,13.25 5.5,12A6.5,6.5 0 0,1 12,5.5M12,1.5A10.5,10.5 0 0,1 22.5,12C22.5,14.28 21.77,16.39 20.54,18.11L19.04,16.76C19.96,15.4 20.5,13.76 20.5,12A8.5,8.5 0 0,0 12,3.5A8.5,8.5 0 0,0 3.5,12C3.5,13.76 4.04,15.4 4.96,16.76L3.46,18.11C2.23,16.39 1.5,14.28 1.5,12A10.5,10.5 0 0,1 12,1.5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5Z",layout:"grid"},season:{icon:s,layout:"grid",thumbnail_ratio:"portrait"},track:{icon:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,13H11V18A2,2 0 0,1 9,20A2,2 0 0,1 7,18A2,2 0 0,1 9,16C9.4,16 9.7,16.1 10,16.3V11H13V13M13,9V3.5L18.5,9H13Z"},tv_show:{icon:s,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"},video:{icon:"M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z",layout:"grid"}},V=function(e,t,r,n){return e.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:r,media_content_type:n})},H=function(e,t){return e.callWS({type:"media_source/browse_media",media_content_id:t})},M=function(e){var t=e.attributes.media_position;return"playing"!==e.state?t:t+=(Date.now()-new Date(e.attributes.media_position_updated_at).getTime())/1e3},E=function(e){var t;switch(e.attributes.media_content_type){case"music":case"image":t=e.attributes.media_artist;break;case"playlist":t=e.attributes.media_playlist;break;case"tvshow":t=e.attributes.media_series_title,e.attributes.media_season&&(t+=" S"+e.attributes.media_season,e.attributes.media_episode&&(t+="E"+e.attributes.media_episode));break;default:t=e.attributes.app_name||""}return t},L=function(e){if(e){var t=e.state;if(!i.V_.includes(t)){if("off"===t)return(0,n.e)(e,h)?[{icon:a,action:"turn_on"}]:void 0;var r=[];return(0,n.e)(e,y)&&r.push({icon:a,action:"turn_off"}),"playing"!==t&&"paused"!==t||!(0,n.e)(e,d)||r.push({icon:"M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",action:"media_previous_track"}),("playing"===t&&((0,n.e)(e,c)||(0,n.e)(e,b))||("paused"===t||"idle"===t)&&(0,n.e)(e,C)||"on"===t&&((0,n.e)(e,C)||(0,n.e)(e,c)))&&r.push({icon:"on"===t?"M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5":"playing"!==t?"M8,5.14V19.14L19,12.14L8,5.14Z":(0,n.e)(e,c)?"M14,19H18V5H14M6,19H10V5H6V19Z":"M18,18H6V6H18V18Z",action:"playing"!==t?"media_play":(0,n.e)(e,c)?"media_pause":"media_stop"}),"playing"!==t&&"paused"!==t||!(0,n.e)(e,p)||r.push({icon:"M16,18H18V6H16M6,18L14.5,12L6,6V18Z",action:"media_next_track"}),r.length>0?r:void 0}}}},86184:function(e,t,r){r.r(t),r.d(t,{DialogTryTts:function(){return R}});r(53918),r(25856),r(53973),r(51095);var n,i,o,a,s=r(37500),c=r(26767),u=r(5701),l=r(17717),f=r(67352),d=r(349),p=r(47181),h=r(22311),y=r(91741),m=r(40095),v=r(34821),g=(r(81303),r(69371)),b=r(26765),C=r(11654);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function w(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){w(o,n,i,a,s,"next",e)}function s(e){w(o,n,i,a,s,"throw",e)}a(void 0)}))}}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var i=S(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function O(){O=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!j(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function j(e){return e.decorators&&e.decorators.length}function T(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=function(e,t,r,n){var i=O();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(T(o.descriptor)||T(i.descriptor)){if(j(o)||j(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(j(o)){if(j(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}P(o,i)}else t.push(o)}return t}(a.d.map(x)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.M)("dialog-cloud-try-tts")],(function(e,t){var r,c,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(n,t);var r=M(n);function n(){var t;V(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(L(t)),t}return n}(t);return{F:_,d:[{kind:"field",decorators:[(0,u.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.S)()],key:"_loadingExample",value:function(){return!1}},{kind:"field",decorators:[(0,l.S)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,f.I)("#target")],key:"_targetInput",value:void 0},{kind:"field",decorators:[(0,f.I)("#message")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,d.m)("cloudTtsTryMessage")],key:"_message",value:void 0},{kind:"field",decorators:[(0,d.m)("cloudTtsTryTarget")],key:"_target",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,p.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(0,s.dy)(i||(i=k(["\n      <ha-dialog\n        open\n        @closed=","\n        scrimClickAction\n        escapeKeyAction\n        .heading=",'\n      >\n        <div>\n          <paper-textarea\n            id="message"\n            label="Message"\n            .value=',"\n          >\n          </paper-textarea>\n\n          <ha-paper-dropdown-menu\n            .label=",'\n          >\n            <paper-listbox\n              id="target"\n              slot="dropdown-content"\n              attr-for-selected="item-value"\n              .selected=','\n            >\n              <paper-item item-value="browser">\n                ',"\n              </paper-item>\n              ",'\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n        <mwc-button\n          slot="primaryAction"\n          @click=',"\n          .disabled=","\n        >\n          <ha-svg-icon .path=","></ha-svg-icon>\n          &nbsp;","\n        </mwc-button>\n      </ha-dialog>\n    "])),this.closeDialog,(0,v.i)(this.hass,this.hass.localize("ui.panel.config.cloud.account.tts.dialog.header")),this._message||this.hass.localize("ui.panel.config.cloud.account.tts.dialog.example_message","name",this.hass.user.name),this.hass.localize("ui.panel.config.cloud.account.tts.dialog.target"),this._target||"browser",this.hass.localize("ui.panel.config.cloud.account.tts.dialog.target_browser"),Object.values(this.hass.states).filter((function(e){return"media_player"===(0,h.N)(e)&&(0,m.e)(e,g.WE)})).map((function(e){return(0,s.dy)(o||(o=k(["\n                    <paper-item .itemValue=",">\n                      ","\n                    </paper-item>\n                  "])),e.entity_id,(0,y.C)(e))})),this._playExample,this._loadingExample,"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z",this.hass.localize("ui.panel.config.cloud.account.tts.dialog.play")):(0,s.dy)(n||(n=k([""])))}},{kind:"method",key:"_playExample",value:(c=A(regeneratorRuntime.mark((function e(){var t,r,n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=String(null===(t=this._targetInput)||void 0===t?void 0:t.selected),(i=null===(r=this._messageInput)||void 0===r?void 0:r.value)&&n){e.next=4;break}return e.abrupt("return");case 4:this._message=i,this._target=n,"browser"===n?((o=new Audio).play(),this._playBrowser(i,o)):this.hass.callService("tts","cloud_say",{entity_id:n,message:i});case 7:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{kind:"method",key:"_playBrowser",value:(r=A(regeneratorRuntime.mark((function e(t,r){var n,i,o,a,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadingExample=!0,n=this._params.defaultVoice[0],i=this._params.defaultVoice[1],e.prev=3,e.next=6,c=this.hass,u={platform:"cloud",message:t,language:n,options:{gender:i}},c.callApi("POST","tts_get_url",u);case 6:a=e.sent,o=a.path,e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(3),this._loadingExample=!1,(0,b.Ys)(this,{text:"Unable to load example. ".concat(e.t0.error||e.t0.body||e.t0),warning:!0}),e.abrupt("return");case 15:r.src=o,r.addEventListener("canplaythrough",(function(){r.play()})),r.addEventListener("playing",(function(){s._loadingExample=!1})),r.addEventListener("error",(function(){(0,b.Ys)(s,{title:"Error playing audio."}),s._loadingExample=!1}));case 19:case"end":return e.stop()}var c,u}),e,this,[[3,10]])}))),function(e,t){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[C.yu,(0,s.iv)(a||(a=k(["\n        ha-dialog {\n          --mdc-dialog-max-width: 500px;\n        }\n      "])))]}}]}}),s.oi)}}]);