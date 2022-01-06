"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4521],{84521:function(e,t,r){r.r(t),r.d(t,{Chart:function(){return n.kL}});var n=r(19828),o=r(15838),a=r(74790);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}},s(e,t,r||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d,h,b,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,r,n,i=l(p);function p(){return u(this,p),i.apply(this,arguments)}return t=p,(r=[{key:"draw",value:function(e){s(y(p.prototype),"draw",this).call(this,e);var t=this.options,r=this.getProps(["x","y","base","width","text"]),n=r.x,i=r.y,u=r.base,c=r.width,f=r.text;if(f){e.beginPath();var l=e.measureText(f);if(!(0===l.width||l.width+(t.textPad||4)+2>c)){var d=t.textColor||t.backgroundColor&&((0,a.T2)((0,o.wK)(t.backgroundColor))>.5?"#000":"#fff");e.fillStyle=d,e.lineWidth=0,e.strokeStyle=d,e.textBaseline="middle",e.fillText(f,n-c/2+(t.textPad||4),i+(u-i)/2)}}}},{key:"tooltipPosition",value:function(e){var t=this.getProps(["x","y","base"],e),r=t.x,n=t.y;return{x:r,y:n+(t.base-n)/2}}}])&&c(t.prototype,r),n&&c(t,n),p}(n.ZL);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Z(e);if(t){var o=Z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t,r,n){var o=r.parse(e.start,n),a=r.parse(e.end,n),i=Math.min(o,a),u=Math.max(o,a),c=i,s=u;return Math.abs(i)>Math.abs(u)&&(c=u,s=i),t[r.axis]=s,t._custom={barStart:c,barEnd:s,start:o,end:a,min:i,max:u},t}b="textbar",(h="id")in(d=m)?Object.defineProperty(d,h,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[h]=b;var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,r,n,o=x(a);function a(){return w(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"parseObjectData",value:function(e,t,r,n){var o,a,i,u,c=e.iScale,s=e.vScale,f=c.getLabels(),l=c===s,p=[];for(o=r,a=r+n;o<a;++o)u=t[o],(i={})[c.axis]=l||c.parse(f[o],o),p.push(k(u,i,s,o));return p}},{key:"getLabelAndValue",value:function(e){var t=this._cachedMeta.vScale,r=this.getDataset().data[e];return{label:t.getLabelForValue(this.index)||"",value:r.label||""}}},{key:"updateElements",value:function(e,t,r,n){var o=this._cachedMeta.vScale,a=this._cachedMeta.iScale,i=this.getDataset(),u=this.resolveDataElementOptions(t,n),c=this.getSharedOptions(u),s=this.includeOptions(n,c),f=o.isHorizontal();this.updateSharedOptions(c,n,u);for(var l=t;l<t+r;l++){var p=i.data[l],y=o.getPixelForValue(this.index),d=a.getPixelForValue(p.start.getTime()),h=a.getPixelForValue(p.end.getTime())-d,b={horizontal:f,x:d+h/2,y:y-10,width:h,height:0,base:y+10,text:p.label};s&&(b.options=c||this.resolveDataElementOptions(l,n),b.options=Object.assign({},b.options,{backgroundColor:p.color})),this.updateElement(e[l],l,b,n)}}},{key:"removeHoverStyle",value:function(e,t,r){}},{key:"setHoverStyle",value:function(e,t,r){}}])&&g(t.prototype,r),n&&g(t,n),a}(n.vn);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function D(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=A(e);if(t){var o=A(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return M(this,r)}}function M(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}j(_,"id","timeline"),j(_,"defaults",{dataElementType:"textbar",dataElementOptions:["text","textColor","textPadding"],elements:{showText:!0,textPadding:4,minBarWidth:1},layout:{padding:{left:0,right:0,top:0,bottom:0}}}),j(_,"overrides",{maintainAspectRatio:!1,plugins:{legend:{display:!1}}});var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,r,n,o=B(a);function a(){return R(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"determineDataLimits",value:function(){var e=this,t=this.options,r=this._adapter,n=t.time.unit||"day",o=this.getUserBounds(),a=o.min,i=o.max,u=this.chart;u.data.datasets.forEach((function(t,n){if(u.isDatasetVisible(n)){var o,c=D(t.data);try{for(c.s();!(o=c.n()).done;){var s=o.value,f=r.parse(s.start,e),l=r.parse(s.end,e);if(f>l){var p=[l,f];f=p[0],l=p[1]}a>f&&f&&(a=f),i<l&&l&&(i=l)}}catch(y){c.e(y)}finally{c.f()}}})),a=isFinite(a)&&!isNaN(a)?a:+r.startOf(Date.now(),n),i=isFinite(i)&&!isNaN(i)?i:+r.endOf(Date.now(),n),this.min=Math.min(a,i-1),this.max=Math.max(a+1,i)}}])&&T(t.prototype,r),n&&T(t,n),a}(n.FB);F(L,"id","timeline"),F(L,"defaults",{position:"bottom",tooltips:{mode:"nearest"},ticks:{autoSkip:!0}});var q=r(39244),V=r(8046),N=r(84594),I=r(59699),H=r(79021),W=r(33651),z=r(32182),Q=r(50234),U=r(27605),$=r(99307),G=r(55061),K=r(16094),J=r(14650),X=r(4535),Y=r(35040),ee=r(70288),te=r(67611),re=r(45589),ne=r(91052),oe=r(7605),ae=r(72949),ie=r(59429),ue=r(59401),ce=r(13250),se=r(24892),fe=r(69388),le=r(17815),pe=r(65621),ye=r(89898),de=r(93752),he=r(59281),be=r(1905),me=r(4223),ve=r(70451),we=r(12198),ge=r(44583),Oe=r(49684),xe={datetime:"datetime",datetimeseconds:"datetimeseconds",millisecond:"millisecond",second:"second",minute:"minute",hour:"hour",day:"day",date:"date",weekday:"weekday",week:"week",month:"month",monthyear:"monthyear",quarter:"quarter",year:"year"};n.IQ._date.override({formats:function(){return xe},parse:function(e){return e instanceof Date?e.getTime():e},format:function(e,t){switch(t){case"datetime":return(0,ge.o0)(new Date(e),this.options.locale);case"datetimeseconds":return(0,ge.E8)(new Date(e),this.options.locale);case"millisecond":case"second":return(0,Oe.Vu)(new Date(e),this.options.locale);case"minute":case"hour":return(0,Oe.mr)(new Date(e),this.options.locale);case"weekday":return(0,we.D_)(new Date(e),this.options.locale);case"date":case"week":case"quarter":return(0,we.p6)(new Date(e),this.options.locale);case"day":return(0,we.mn)(new Date(e),this.options.locale);case"month":return(0,we.Nh)(new Date(e),this.options.locale);case"monthyear":return(0,we.NC)(new Date(e),this.options.locale);case"year":return(0,we.yQ)(new Date(e),this.options.locale);default:return""}},add:function(e,t,r){switch(r){case"millisecond":return(0,q.Z)(e,t);case"second":return(0,V.Z)(e,t);case"minute":return(0,N.Z)(e,t);case"hour":return(0,I.Z)(e,t);case"day":return(0,H.Z)(e,t);case"week":return(0,W.Z)(e,t);case"month":return(0,z.Z)(e,t);case"quarter":return(0,Q.Z)(e,t);case"year":return(0,U.Z)(e,t);default:return e}},diff:function(e,t,r){switch(r){case"millisecond":return(0,$.Z)(e,t);case"second":return(0,G.Z)(e,t);case"minute":return(0,K.Z)(e,t);case"hour":return(0,J.Z)(e,t);case"day":return(0,X.Z)(e,t);case"week":return(0,Y.Z)(e,t);case"month":return(0,ee.Z)(e,t);case"quarter":return(0,te.Z)(e,t);case"year":return(0,re.Z)(e,t);default:return 0}},startOf:function(e,t,r){switch(t){case"second":return(0,ne.Z)(e);case"minute":return(0,oe.Z)(e);case"hour":return(0,ae.Z)(e);case"day":return(0,ie.Z)(e);case"week":return(0,ue.Z)(e);case"isoWeek":return(0,ue.Z)(e,{weekStartsOn:+r});case"month":return(0,ce.Z)(e);case"quarter":return(0,se.Z)(e);case"year":return(0,fe.Z)(e);default:return e}},endOf:function(e,t){switch(t){case"second":return(0,le.Z)(e);case"minute":return(0,pe.Z)(e);case"hour":return(0,ye.Z)(e);case"day":return(0,de.Z)(e);case"week":return(0,he.Z)(e);case"month":return(0,be.Z)(e);case"quarter":return(0,me.Z)(e);case"year":return(0,ve.Z)(e);default:return e}}}),n.kL.register(n.u,n.Dx,n.De,n.Gu,n.FB,n.f$,n.ST,n.vn,n.ZL,n.od,n.jn,m,L,_,n.uw)}}]);