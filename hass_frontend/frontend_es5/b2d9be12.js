"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[98265],{63864:function(n,t,r){function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var e,o,u=[],i=!0,a=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(u.push(e.value),!t||u.length!==t);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{I:function(){return u}});var u=function(n,t,r,o){var u=e(n.split(".",3),3),i=u[0],a=u[1],c=u[2];return Number(i)>t||Number(i)===t&&(void 0===o?Number(a)>=r:Number(a)>r)||void 0!==o&&Number(i)===t&&Number(a)===r&&Number(c)>=o}},12350:function(n,t,r){r.d(t,{yt:function(){return a}});var e=r(63864),o=r(41682);function u(n,t,r,e,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void r(s)}a.done?t(c):Promise.resolve(c).then(e,o)}function i(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(n){u(i,e,o,a,c,"next",n)}function c(n){u(i,e,o,a,c,"throw",n)}a(void 0)}))}}var a=function(){var n=i(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,e.I)(t.config.version,2021,2,4)){n.next=2;break}return n.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}));case 2:return n.t0=o.rY,n.next=5,t.callApi("GET","hassio/addons");case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},41682:function(n,t,r){if(r.d(t,{rY:function(){return c},js:function(){return s},yz:function(){return l},yd:function(){return p}}),32143==r.j)var e=r(63864);function o(n,t,r,e,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void r(s)}a.done?t(c):Promise.resolve(c).then(e,o)}function u(n){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(n)}var i,a,c=function(n){return n.data},s=function(n){return"object"===u(n)?"object"===u(n.body)?n.body.message||"Unknown error, see supervisor logs":n.body||n.message||"Unknown error, see supervisor logs":n},f=new Set([502,503,504]),l=function(n){return!!(n&&n.status_code&&f.has(n.status_code))||!(!n||!n.message||!n.message.includes("ERR_CONNECTION_CLOSED")&&!n.message.includes("ERR_CONNECTION_RESET"))},p=32143==r.j?(i=regeneratorRuntime.mark((function n(t,r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,e.I)(t.config.version,2021,2,4)){n.next=2;break}return n.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/".concat(r,"/stats"),method:"get"}));case 2:return n.t0=c,n.next=5,t.callApi("GET","hassio/".concat(r,"/stats"));case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)})),a=function(){var n=this,t=arguments;return new Promise((function(r,e){var u=i.apply(n,t);function a(n){o(u,r,e,a,c,"next",n)}function c(n){o(u,r,e,a,c,"throw",n)}a(void 0)}))},function(n,t){return a.apply(this,arguments)}):null},26765:function(n,t,r){r.d(t,{Ys:function(){return i},g7:function(){return a},D9:function(){return c}});var e=r(47181),o=function(){return Promise.all([r.e(85084),r.e(82361),r.e(34821),r.e(72432)]).then(r.bind(r,1281))},u=function(n,t,r){return new Promise((function(u){var i=t.cancel,a=t.confirm;(0,e.B)(n,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:Object.assign({},t,r,{cancel:function(){u(!(null==r||!r.prompt)&&null),i&&i()},confirm:function(n){u(null==r||!r.prompt||n),a&&a(n)}})})}))},i=function(n,t){return u(n,t)},a=function(n,t){return u(n,t,{confirmation:!0})},c=function(n,t){return u(n,t,{prompt:!0})}}}]);