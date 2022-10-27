/*! For license information please see ef35fe24.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[70726],{63207:(t,e,i)=>{i(65660),i(15112);var n=i(9672),s=i(87156),o=i(50856),r=i(48175);(0,n.k)({_template:o.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,s.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,s.vz)(this.root).appendChild(this._img))}})},21560:(t,e,i)=>{i.d(e,{ZH:()=>l,MT:()=>o,U2:()=>a,RV:()=>s,t8:()=>h});const n=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise((e=>{const i=()=>indexedDB.databases().finally(e);t=setInterval(i,100),i()})).finally((()=>clearInterval(t)))};function s(t){return new Promise(((e,i)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>i(t.error)}))}function o(t,e){const i=n().then((()=>{const i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),s(i)}));return(t,n)=>i.then((i=>n(i.transaction(e,t).objectStore(e))))}let r;function c(){return r||(r=o("keyval-store","keyval")),r}function a(t,e=c()){return e("readonly",(e=>s(e.get(t))))}function h(t,e,i=c()){return i("readwrite",(i=>(i.put(e,t),s(i.transaction))))}function l(t=c()){return t("readwrite",(t=>(t.clear(),s(t.transaction))))}},97330:(t,e,i)=>{i.d(e,{_:()=>s,B:()=>o});var n=i(43715);const s=(t,e,i,s)=>{if(t[e])return t[e];let o,r,c=0,a=(0,n.M)();const h=()=>{if(!i)throw new Error("Collection does not support refresh");return i(t).then((t=>a.setState(t,!0)))},l=()=>h().catch((e=>{if(t.connected)throw e})),d=()=>{r=void 0,o&&o.then((t=>{t()})),t.removeEventListener("ready",h),t.removeEventListener("disconnected",u)},u=()=>{r&&(clearTimeout(r),d())};return t[e]={get state(){return a.state},refresh:h,subscribe(e){c++,1===c&&(()=>{if(void 0!==r)return clearTimeout(r),void(r=void 0);s&&(o=s(t,a)),i&&(t.addEventListener("ready",l),l()),t.addEventListener("disconnected",u)})();const n=a.subscribe(e);return void 0!==a.state&&setTimeout((()=>e(a.state)),0),()=>{n(),c--,c||(r=setTimeout(d,5e3))}}},t[e]},o=(t,e,i,n,o)=>s(n,t,e,i).subscribe(o)},43715:(t,e,i)=>{i.d(e,{M:()=>n});const n=t=>{let e=[];function i(i,n){t=n?i:Object.assign(Object.assign({},t),i);let s=e;for(let e=0;e<s.length;e++)s[e](t)}return{get state(){return t},action(e){function n(t){i(t,!1)}return function(){let i=[t];for(let t=0;t<arguments.length;t++)i.push(arguments[t]);let s=e.apply(this,i);if(null!=s)return s instanceof Promise?s.then(n):n(s)}},setState:i,subscribe:t=>(e.push(t),()=>{!function(t){let i=[];for(let n=0;n<e.length;n++)e[n]===t?t=null:i.push(e[n]);e=i}(t)})}}},19596:(t,e,i)=>{i.d(e,{s:()=>d});var n=i(81563),s=i(38941);const o=(t,e)=>{var i,n;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(n=(i=t)._$AO)||void 0===n||n.call(i,e,!1),o(t,e);return!0},r=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},c=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),l(e)}};function a(t){void 0!==this._$AN?(r(this),this._$AM=t,c(this)):this._$AM=t}function h(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)o(n[t],!1),r(n[t]);else null!=n&&(o(n,!1),r(n));else o(this,t)}const l=t=>{var e,i,n,o;t.type==s.pX.CHILD&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=h),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=a))};class d extends s.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),c(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(o(this,t),r(this))}setValue(t){if((0,n.OR)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}}}]);
//# sourceMappingURL=ef35fe24.js.map