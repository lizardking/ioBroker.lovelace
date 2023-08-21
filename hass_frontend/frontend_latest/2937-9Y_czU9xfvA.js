"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2937],{79021:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},59699:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(90394),a=n(39244),u=n(23682),o=36e5;function i(e,t){(0,u.Z)(2,arguments);var n=(0,r.Z)(t);return(0,a.Z)(e,n*o)}},39244:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e).getTime(),o=(0,r.Z)(t);return new Date(n+o)}},32182:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);if(isNaN(o))return new Date(NaN);if(!o)return n;var i=n.getDate(),s=new Date(n.getTime());return s.setMonth(n.getMonth()+o+1,0),i>=s.getDate()?s:(n.setFullYear(s.getFullYear(),s.getMonth(),i),n)}},33651:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(79021),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=7*(0,r.Z)(t);return(0,a.Z)(e,n)}},27605:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(32182),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,r.Z)(t);return(0,a.Z)(e,12*n)}},93752:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(23,59,59,999),t}},1905:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},70390:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(93752);function a(){return(0,r.Z)(Date.now())}},59281:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(55020),a=n(34327),u=n(90394),o=n(23682);function i(e,t){var n,i,s,l,d,v,Z,c;(0,o.Z)(1,arguments);var f=(0,r.j)(),g=(0,u.Z)(null!==(n=null!==(i=null!==(s=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t||null===(d=t.locale)||void 0===d||null===(v=d.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==s?s:f.weekStartsOn)&&void 0!==i?i:null===(Z=f.locale)||void 0===Z||null===(c=Z.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=(0,a.Z)(e),w=h.getDay(),D=6+(w<g?-7:0)-(w-g);return h.setDate(h.getDate()+D),h.setHours(23,59,59,999),h}},70451:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},61334:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(23,59,59,999),a}n.d(t,{Z:()=>r})},82045:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e).getTime(),u=(0,r.Z)(t.start).getTime(),o=(0,r.Z)(t.end).getTime();if(!(u<=o))throw new RangeError("Invalid interval");return n>=u&&n<=o}},13250:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e);return t.setDate(1),t.setHours(0,0,0,0),t}},27088:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59429);function a(){return(0,r.Z)(Date.now())}},69388:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},83008:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(0,0,0,0),a}n.d(t,{Z:()=>r})},10346:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{HuiEnergyDateSelectionCard:()=>l});var a=n(17463),u=n(68144),o=n(79932),i=n(23754),s=e([i]);i=(s.then?(await s)():s)[0];let l=(0,a.Z)([(0,o.Mo)("hui-energy-date-selection-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?u.dy` <hui-energy-period-selector .hass="${this.hass}" .collectionKey="${this._config.collection_key}"></hui-energy-period-selector> `:u.Ld}}]}}),u.oi);r()}catch(e){r(e)}}))}}]);
//# sourceMappingURL=2937-9Y_czU9xfvA.js.map