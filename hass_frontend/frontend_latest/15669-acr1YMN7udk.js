/*! For license information please see 15669-acr1YMN7udk.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[15669],{58014:(t,e,i)=>{function o(t,e){if(t.closest)return t.closest(e);for(var i=t;i;){if(n(i,e))return i;i=i.parentElement}return null}function n(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}i.d(e,{oq:()=>o,wB:()=>n})},20210:(t,e,i)=>{var o=i(87480),n=i(79932),a=(i(27763),i(38103)),s=i(98734),r=i(68144),d=i(30153);class c extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new s.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?r.dy` <mwc-ripple .disabled="${this.disabled}" unbounded> </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return r.dy`<button class="mdc-icon-button mdc-icon-button--display-flex" aria-label="${this.ariaLabel||this.icon}" aria-haspopup="${(0,d.o)(this.ariaHasPopup)}" ?disabled="${this.disabled}" @focus="${this.handleRippleFocus}" @blur="${this.handleRippleBlur}" @mousedown="${this.handleRippleMouseDown}" @mouseenter="${this.handleRippleMouseEnter}" @mouseleave="${this.handleRippleMouseLeave}" @touchstart="${this.handleRippleTouchStart}" @touchend="${this.handleRippleDeactivate}" @touchcancel="${this.handleRippleDeactivate}">${this.renderRipple()} ${this.icon?r.dy`<i class="material-icons">${this.icon}</i>`:""} <span><slot></slot></span> </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,o.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0),(0,o.__decorate)([(0,n.Cb)({type:String})],c.prototype,"icon",void 0),(0,o.__decorate)([a.L,(0,n.Cb)({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel",void 0),(0,o.__decorate)([a.L,(0,n.Cb)({type:String,attribute:"aria-haspopup"})],c.prototype,"ariaHasPopup",void 0),(0,o.__decorate)([(0,n.IO)("button")],c.prototype,"buttonElement",void 0),(0,o.__decorate)([(0,n.GC)("mwc-ripple")],c.prototype,"ripple",void 0),(0,o.__decorate)([(0,n.SB)()],c.prototype,"shouldRenderRipple",void 0),(0,o.__decorate)([(0,n.hO)({passive:!0})],c.prototype,"handleRippleMouseDown",null),(0,o.__decorate)([(0,n.hO)({passive:!0})],c.prototype,"handleRippleTouchStart",null);const l=r.iv`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:0;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:0;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:0;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:0;position:absolute;top:0;width:100%}:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}.mdc-icon-button ::slotted(*),.mdc-icon-button i,.mdc-icon-button img,.mdc-icon-button svg{display:block}:host{--mdc-ripple-color:currentcolor;-webkit-tap-highlight-color:transparent}.mdc-icon-button,:host{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size,48px);height:var(--mdc-icon-button-size,48px);padding:calc((var(--mdc-icon-button-size,48px) - var(--mdc-icon-size,24px))/ 2)}.mdc-icon-button ::slotted(*),.mdc-icon-button i,.mdc-icon-button img,.mdc-icon-button svg{display:block;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}`;let u=class extends c{};u.styles=[l],u=(0,o.__decorate)([(0,n.Mo)("mwc-icon-button")],u)},58831:(t,e,i)=>{i.d(e,{M:()=>o});const o=t=>t.substr(0,t.indexOf("."))},22311:(t,e,i)=>{i.d(e,{N:()=>n});var o=i(58831);const n=t=>(0,o.M)(t.entity_id)},10983:(t,e,i)=>{var o=i(17463),n=(i(20210),i(68144)),a=i(79932),s=i(30153);i(52039);(0,o.Z)([(0,a.Mo)("ha-icon-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,a.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var t;null===(t=this._button)||void 0===t||t.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return n.dy` <mwc-icon-button aria-label="${(0,s.o)(this.label)}" title="${(0,s.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,s.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?n.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:n.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),n.oi)},48932:(t,e,i)=>{var o=i(17463),n=i(34541),a=i(47838),s=i(68144),r=i(79932),d=i(47181),c=i(6936);i(10983);(0,o.Z)([(0,r.Mo)("ha-menu-button")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,a.Z)(i.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,a.Z)(i.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){const t=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return s.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${t?s.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(t){(0,n.Z)((0,a.Z)(i.prototype),"firstUpdated",this).call(this,t),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"updated",value:function(t){if((0,n.Z)((0,a.Z)(i.prototype),"updated",this).call(this,t),!t.has("narrow")&&!t.has("hass"))return;const e=t.get("hass"),o=t.get("narrow")||e&&"always_hidden"===e.dockedSidebar,s=this.narrow||"always_hidden"===this.hass.dockedSidebar;o!==s&&(this.style.display=s||this._alwaysVisible?"initial":"none",s?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){this._unsubNotifications=(0,c.r)(this.hass.connection,(t=>{this._hasNotifications=t.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,d.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),s.oi)},52039:(t,e,i)=>{i.d(e,{C:()=>s});var o=i(17463),n=i(68144),a=i(79932);let s=(0,o.Z)([(0,a.Mo)("ha-svg-icon")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return n.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?n.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),n.oi)},36226:(t,e,i)=>{var o=i(17463),n=i(73968),a=i(71711),s=i(68144),r=i(79932);(0,o.Z)([(0,r.Mo)("ha-top-app-bar-fixed")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[a.W,s.iv`.mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}`]}]}}),n.s)},13786:(t,e,i)=>{var o=i(17463),n=i(34541),a=i(47838),s=i(68144),r=i(79932);const d=t=>t.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(t.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});var c=i(22311),l=i(91741),u=i(44281),h=(i(10983),i(47501)),p=i(47181);let m=(0,o.Z)(null,(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return s.dy` <div class="marker" style="${(0,h.V)({"border-color":this.entityColor})}" @click="${this._badgeTap}"> ${this.entityPicture?s.dy`<div class="entity-picture" style="${(0,h.V)({"background-image":`url(${this.entityPicture})`})}"></div>`:this.entityName} </div> `}},{kind:"method",key:"_badgeTap",value:function(t){t.stopPropagation(),this.entityId&&(0,p.B)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`.marker{display:flex;justify-content:center;align-items:center;box-sizing:border-box;overflow:hidden;width:48px;height:48px;font-size:var(--ha-marker-font-size,1.5em);border-radius:50%;border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.entity-picture{background-size:cover;height:100%;width:100%}`}}]}}),s.oi);customElements.define("ha-entity-marker",m);const b=t=>"string"==typeof t?t:t.entity_id;(0,o.Z)([(0,r.Mo)("ha-map")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"renderPassive",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"interactiveZones",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[(0,r.SB)()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,a.Z)(o.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,a.Z)(o.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(t){var e,i,s,r;if((0,n.Z)((0,a.Z)(o.prototype),"update",this).call(this,t),!this._loaded)return;const d=t.get("hass");if(t.has("_loaded")||t.has("entities"))this._drawEntities();else if(this._loaded&&d&&this.entities)for(const t of this.entities)if(d.states[b(t)]!==this.hass.states[b(t)]){this._drawEntities();break}if((t.has("_loaded")||t.has("paths"))&&this._drawPaths(),(t.has("_loaded")||t.has("layers"))&&this._drawLayers(t.get("layers")),(t.has("_loaded")||(t.has("entities")||t.has("layers"))&&this.autoFit)&&this.fitMap(),t.has("zoom")&&this.leafletMap.setZoom(this.zoom),!t.has("darkMode")&&(!t.has("hass")||d&&(null===(e=d.themes)||void 0===e?void 0:e.darkMode)===(null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode)))return;const c=null!==(s=this.darkMode)&&void 0!==s?s:null===(r=this.hass.themes)||void 0===r?void 0:r.darkMode;this.shadowRoot.getElementById("map").classList.toggle("dark",c)}},{kind:"method",key:"_loadMap",value:async function(){var t;let e=this.shadowRoot.getElementById("map");e||(e=document.createElement("div"),e.id="map",this.shadowRoot.append(e));const o=null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet]=await(async t=>{if(!t.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const e=(await i.e(70208).then(i.t.bind(i,70208,23))).default;e.Icon.Default.imagePath="/static/images/leaflet/images/";const o=e.map(t),n=document.createElement("link");return n.setAttribute("href","/static/images/leaflet/leaflet.css"),n.setAttribute("rel","stylesheet"),t.parentNode.appendChild(n),o.setView([52.3731339,4.8903147],13),[o,e,d(e).addTo(o)]})(e),this.shadowRoot.getElementById("map").classList.toggle("dark",o),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var t,e;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(t=this.layers)&&void 0!==t&&t.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((t=>t.getLatLng())):[]);var o;this.fitZones&&(null===(o=this._mapZones)||void 0===o||o.forEach((t=>{i.extend("getBounds"in t?t.getBounds():t.getLatLng())})));null===(e=this.layers)||void 0===e||e.forEach((t=>{i.extend("getBounds"in t?t.getBounds():t.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(t){if(t&&t.forEach((t=>t.remove())),!this.layers)return;const e=this.leafletMap;this.layers.forEach((t=>{e.addLayer(t)}))}},{kind:"method",key:"_drawPaths",value:function(){const t=this.hass,e=this.leafletMap,i=this.Leaflet;if(!t||!e||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((t=>t.remove())),this._mapPaths=[]),!this.paths)return;const o=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((t=>{let n,a;t.gradualOpacity&&(n=t.gradualOpacity/(t.points.length-2),a=1-t.gradualOpacity);for(let e=0;e<t.points.length-1;e++){const s=t.gradualOpacity?a+e*n:void 0;this._mapPaths.push(i.circleMarker(t.points[e].point,{radius:3,color:t.color||o,opacity:s,fillOpacity:s,interactive:!0}).bindTooltip(t.points[e].tooltip,{direction:"top"})),this._mapPaths.push(i.polyline([t.points[e].point,t.points[e+1].point],{color:t.color||o,opacity:s,interactive:!1}))}const s=t.points.length-1;if(s>=0){const e=t.gradualOpacity?a+s*n:void 0;this._mapPaths.push(i.circleMarker(t.points[s].point,{radius:3,color:t.color||o,opacity:e,fillOpacity:e,interactive:!0}).bindTooltip(t.points[s].tooltip,{direction:"top"}))}this._mapPaths.forEach((t=>e.addLayer(t)))}))}},{kind:"method",key:"_drawEntities",value:function(){var t;const e=this.hass,i=this.leafletMap,o=this.Leaflet;if(!e||!i||!o)return;if(this._mapItems.length&&(this._mapItems.forEach((t=>t.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((t=>t.remove())),this._mapZones=[]),!this.entities)return;const n=getComputedStyle(this),a=n.getPropertyValue("--accent-color"),s=n.getPropertyValue("--secondary-text-color"),r=n.getPropertyValue("--dark-primary-color"),d=(null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode)?"dark":"light";for(const t of this.entities){const i=e.states[b(t)];if(!i)continue;const n=(0,l.C)(i),{latitude:u,longitude:h,passive:p,icon:m,radius:f,entity_picture:v,gps_accuracy:y}=i.attributes;if(!u||!h)continue;if("zone"===(0,c.N)(i)){if(p&&!this.renderPassive)continue;let t="";if(m){const e=document.createElement("ha-icon");e.setAttribute("icon",m),t=e.outerHTML}else{const e=document.createElement("span");e.innerHTML=n,t=e.outerHTML}this._mapZones.push(o.marker([u,h],{icon:o.divIcon({html:t,iconSize:[24,24],className:d}),interactive:this.interactiveZones,title:n})),this._mapZones.push(o.circle([u,h],{interactive:!1,color:p?s:a,radius:f}));continue}const k=n.split(" ").map((t=>t[0])).join("").substr(0,3);this._mapItems.push(o.marker([u,h],{icon:o.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${b(t)}"\n                entity-name="${k}"\n                entity-picture="${v?this.hass.hassUrl(v):""}"\n                ${"string"!=typeof t?`entity-color="${t.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:(0,l.C)(i)})),y&&this._mapItems.push(o.circle([u,h],{interactive:!1,color:r,radius:y}))}this._mapItems.forEach((t=>i.addLayer(t))),this._mapZones.forEach((t=>i.addLayer(t)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,u.j)(),this._resizeObserver=new ResizeObserver((()=>{var t;null===(t=this.leafletMap)||void 0===t||t.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{display:block;height:300px}#map{height:100%}#map.dark{background:#090909;--map-filter:invert(0.9) hue-rotate(170deg) grayscale(0.7)}#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.light{color:#000}.dark{color:#fff}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:var(--card-background-color,#1c1c1c);color:#fff}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important}`}}]}}),s.fl)},6936:(t,e,i)=>{i.d(e,{r:()=>o});const o=(t,e)=>{const i=new n,o=t.subscribeMessage((t=>e(i.processMessage(t))),{type:"persistent_notification/subscribe"});return()=>{o.then((t=>null==t?void 0:t()))}};class n{constructor(){this.notifications=void 0,this.notifications={}}processMessage(t){if("removed"===t.type)for(const e of Object.keys(t.notifications))delete this.notifications[e];else this.notifications={...this.notifications,...t.notifications};return Object.values(this.notifications)}}},34481:(t,e,i)=>{i.r(e);var o=i(17463),n=i(34541),a=i(47838),s=i(68144),r=i(79932),d=i(22311),c=i(83849),l=(i(10983),i(48932),i(36226),i(13786),i(11654));(0,o.Z)([(0,r.Mo)("ha-panel-map")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",key:"_entities",value:()=>[]},{kind:"method",key:"render",value:function(){var t;return s.dy` <ha-top-app-bar-fixed> <ha-menu-button slot="navigationIcon" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> <div slot="title">${this.hass.localize("panel.map")}</div> ${null!==(t=this.hass.user)&&void 0!==t&&t.is_admin?s.dy` <ha-icon-button slot="actionItems" .label="${this.hass.localize("ui.panel.map.edit_zones")}" .path="${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}" @click="${this._openZonesEditor}"></ha-icon-button>`:""} <ha-map .hass="${this.hass}" .entities="${this._entities}" autoFit interactiveZones></ha-map> </ha-top-app-bar-fixed> `}},{kind:"method",key:"_openZonesEditor",value:function(){(0,c.c)("/config/zone")}},{kind:"method",key:"willUpdate",value:function(t){if((0,n.Z)((0,a.Z)(i.prototype),"willUpdate",this).call(this,t),!t.has("hass"))return;const e=t.get("hass");this._getStates(e)}},{kind:"method",key:"_getStates",value:function(t){let e=!1;const i=new Set,o=[];Object.values(this.hass.states).forEach((n=>{"home"!==n.state&&"latitude"in n.attributes&&"longitude"in n.attributes&&(o.push(n.entity_id),"person"===(0,d.N)(n)&&n.attributes.source&&i.add(n.attributes.source),(null==t?void 0:t.states[n.entity_id])!==n&&(e=!0))})),e&&(this._entities=o.filter((t=>!i.has(t))))}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,s.iv`ha-map{height:calc(100vh - var(--header-height))}`]}}]}}),s.oi)},44281:(t,e,i)=>{i.d(e,{j:()=>o});const o=async()=>{try{new ResizeObserver((()=>{}))}catch(t){window.ResizeObserver=(await Promise.all([i.e(51246),i.e(43467)]).then(i.bind(i,43467))).default}}},47501:(t,e,i)=>{i.d(e,{V:()=>o.V});var o=i(84298)}}]);
//# sourceMappingURL=15669-acr1YMN7udk.js.map