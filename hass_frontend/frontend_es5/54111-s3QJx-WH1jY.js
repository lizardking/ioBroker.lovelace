"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54111],{3239:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(76775);function a(e){if(!e||"object"!=(0,n.Z)(e))return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(a);var t={};return Object.keys(e).forEach((function(i){t[i]=a(e[i])})),t}},25516:function(e,t,i){i.d(t,{i:function(){return a}});var n=(0,i(8330).P)((function(e){history.replaceState({scrollPosition:e},"")}),300),a=function(e){return function(t){return{kind:"method",placement:"prototype",key:t.key,descriptor:{set:function(e){n(e),this["__".concat(String(t.key))]=e},get:function(){var e;return this["__".concat(String(t.key))]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(i){var n=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){var i=this;n.call(this);var a=this[t.key];a&&this.updateComplete.then((function(){var t=i.renderRoot.querySelector(e);t&&setTimeout((function(){t.scrollTop=a}),0)}))}}}}}},8330:function(e,t,i){i.d(t,{P:function(){return n}});var n=function(e,t){var i,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=0,o=function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];var s=Date.now();r||!1!==n||(r=s);var c=t-(s-r);c<=0||c>t?(i&&(clearTimeout(i),i=void 0),r=s,e.apply(void 0,l)):i||!1===a||(i=window.setTimeout((function(){r=!1===n?0:Date.now(),i=void 0,e.apply(void 0,l)}),c))};return o.cancel=function(){clearTimeout(i),i=void 0,r=0},o}},3555:function(e,t,i){var n,a,r,o,l=i(88962),d=i(33368),s=i(71650),c=i(82390),u=i(69205),f=i(70906),h=i(91808),v=i(88771),p=i(47838),g=i(42977),m=i(31338),y=i(68144),b=i(79932);(0,h.Z)([(0,b.Mo)("ha-textfield")],(function(e,t){var i=function(t){(0,u.Z)(n,t);var i=(0,f.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,c.Z)(t)),t}return(0,d.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,b.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,b.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,v.Z)((0,p.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete"))}},{kind:"method",key:"renderIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?"trailing":"leading";return(0,y.dy)(n||(n=(0,l.Z)([' <span class="mdc-text-field__icon mdc-text-field__icon--','" tabindex="','"> <slot name="','Icon"></slot> </span> '])),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,y.iv)(a||(a=(0,l.Z)([".mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}"]))),"rtl"===document.dir?(0,y.iv)(r||(r=(0,l.Z)([".mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}"]))):(0,y.iv)(o||(o=(0,l.Z)([""])))]}}]}}),g.P)},54531:function(e,t,i){i.d(t,{Qc:function(){return s},Xr:function(){return d},zJ:function(){return l}});var n=["zone","persistent_notification"],a=function(e,t){var i,n,a,r,o,l,d,s;if("call-service"===t.action&&(null!==(i=t.target)&&void 0!==i&&i.entity_id||null!==(n=t.service_data)&&void 0!==n&&n.entity_id||null!==(a=t.data)&&void 0!==a&&a.entity_id)){var c=null!==(r=null!==(o=null===(l=t.service_data)||void 0===l?void 0:l.entity_id)&&void 0!==o?o:null===(d=t.data)||void 0===d?void 0:d.entity_id)&&void 0!==r?r:null===(s=t.target)||void 0===s?void 0:s.entity_id;Array.isArray(c)||(c=[c]);for(var u=0,f=c;u<f.length;u++){var h=f[u];e.add(h)}}},r=function(e,t){"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&a(e,t.tap_action),t.hold_action&&a(e,t.hold_action)):e.add(t)},o=function e(t,i){i.entity&&r(t,i.entity),i.entities&&Array.isArray(i.entities)&&i.entities.forEach((function(e){return r(t,e)})),i.card&&e(t,i.card),i.cards&&Array.isArray(i.cards)&&i.cards.forEach((function(i){return e(t,i)})),i.elements&&Array.isArray(i.elements)&&i.elements.forEach((function(i){return e(t,i)})),i.badges&&Array.isArray(i.badges)&&i.badges.forEach((function(e){return r(t,e)}))},l=function(e){var t=new Set;return e.views.forEach((function(e){return o(t,e)})),t},d=function(e,t){for(var i=new Set,a=0,r=Object.keys(e.states);a<r.length;a++){var o=r[a];t.has(o)||n.includes(o.split(".",1)[0])||i.add(o)}return i},s=function(e,t){var i=l(t);return d(e,i)}},59110:function(e,t,i){var n,a,r,o,l,d,s=i(88962),c=i(33368),u=i(71650),f=i(82390),h=i(69205),v=i(70906),p=i(91808),g=i(68144),m=i(79932),y=i(14516),b=i(47181),x=i(87744);i(37168),i(3143),i(42952),(0,p.Z)([(0,m.Mo)("hui-entity-picker-table")],(function(e,t){var i=function(t){(0,h.Z)(n,t);var i=(0,v.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,f.Z)(t)),t}return(0,c.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean,attribute:"no-label-float"})],key:"noLabelFloat",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)({type:Array})],key:"entities",value:void 0},{kind:"method",key:"render",value:function(){return(0,g.dy)(n||(n=(0,s.Z)([' <ha-data-table .hass="','" selectable .id="','" .columns="','" .data="','" .dir="','" .searchLabel="','" .noLabelFloat="','" .noDataText="','" @selection-changed="','"></ha-data-table> '])),this.hass,"entity_id",this._columns(this.narrow),this.entities,(0,x.Zu)(this.hass),this.hass.localize("ui.panel.lovelace.unused_entities.search"),this.noLabelFloat,this.hass.localize("ui.panel.lovelace.unused_entities.no_data"),this._handleSelectionChanged)}},{kind:"field",key:"_columns",value:function(){var e=this;return(0,y.Z)((function(t){var i={icon:{title:"",label:e.hass.localize("ui.panel.lovelace.unused_entities.state_icon"),type:"icon",template:function(t,i){return(0,g.dy)(a||(a=(0,s.Z)([' <state-badge @click="','" .hass="','" .stateObj="','"></state-badge> '])),e._handleEntityClicked,e.hass,i.stateObj)}},name:{title:e.hass.localize("ui.panel.lovelace.unused_entities.entity"),sortable:!0,filterable:!0,grows:!0,direction:"asc",template:function(i,n){return(0,g.dy)(r||(r=(0,s.Z)([' <div @click="','" style="cursor:pointer"> '," "," </div> "])),e._handleEntityClicked,i,t?(0,g.dy)(o||(o=(0,s.Z)([' <div class="secondary">',"</div> "])),n.entity_id):"")}}};return i.entity_id={title:e.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),sortable:!0,filterable:!0,width:"30%",hidden:t},i.domain={title:e.hass.localize("ui.panel.lovelace.unused_entities.domain"),sortable:!0,filterable:!0,width:"15%",hidden:t},i.last_changed={title:e.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),type:"numeric",sortable:!0,width:"15%",hidden:t,template:function(t){return(0,g.dy)(l||(l=(0,s.Z)([' <ha-relative-time .hass="','" .datetime="','" capitalize></ha-relative-time> '])),e.hass,t)}},i}))}},{kind:"method",key:"_handleSelectionChanged",value:function(e){var t=e.detail.value;(0,b.B)(this,"selected-changed",{selectedEntities:t})}},{kind:"method",key:"_handleEntityClicked",value:function(e){var t=e.target.closest(".mdc-data-table__row").rowId;(0,b.B)(this,"hass-more-info",{entityId:t})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,g.iv)(d||(d=(0,s.Z)(["ha-data-table{--data-table-border-width:0;height:100%}"])))}}]}}),g.oi)},47512:function(e,t,i){i.d(t,{f:function(){return r}});var n=i(47181),a=function(){return Promise.all([i.e(77426),i.e(52506),i.e(96549),i.e(61612),i.e(49753),i.e(18900),i.e(26810),i.e(47680),i.e(75329)]).then(i.bind(i,9444))},r=function(e,t){(0,n.B)(e,"show-dialog",{dialogTag:"hui-dialog-suggest-card",dialogImport:a,dialogParams:t})}},4398:function(e,t,i){i.d(t,{i:function(){return a}});var n=i(47181),a=function(e,t){(0,n.B)(e,"show-dialog",{dialogTag:"hui-dialog-select-view",dialogImport:function(){return Promise.all([i.e(46992),i.e(28597),i.e(75943),i.e(70632),i.e(20855)]).then(i.bind(i,20855))},dialogParams:t})}},28279:function(e,t,i){i.r(t),i.d(t,{HuiUnusedEntities:function(){return C}});var n,a,r,o,l=i(53709),d=i(88962),s=i(33368),c=i(71650),u=i(82390),f=i(69205),h=i(70906),v=i(91808),p=i(88771),g=i(47838),m=i(68144),y=i(79932),b=i(83448),x=i(58831),k=i(91741),_=i(87744),w=(i(36125),i(52039),i(54531)),Z=(i(59110),i(47512)),E=i(4398),C=(0,v.Z)([(0,y.Mo)("hui-unused-entities")],(function(e,t){var i=function(t){(0,f.Z)(n,t);var i=(0,h.Z)(n);function n(){var t;(0,c.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,u.Z)(t)),t}return(0,s.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_unusedEntities",value:function(){return[]}},{kind:"field",decorators:[(0,y.SB)()],key:"_selectedEntities",value:function(){return[]}},{kind:"get",key:"_config",value:function(){return this.lovelace.config}},{kind:"method",key:"updated",value:function(e){(0,p.Z)((0,g.Z)(i.prototype),"updated",this).call(this,e),e.has("lovelace")&&this._getUnusedEntities()}},{kind:"method",key:"render",value:function(){var e=this;return this.hass&&this.lovelace?"storage"===this.lovelace.mode&&!1===this.lovelace.editMode?m.Ld:(0,m.dy)(n||(n=(0,d.Z)([' <div class="container"> ',' <hui-entity-picker-table .hass="','" .narrow="','" .entities="','" @selected-changed="','"></hui-entity-picker-table> </div> <div class="fab ','"> <ha-fab .label="','" extended @click="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-fab> </div> '])),this.narrow?"":(0,m.dy)(a||(a=(0,d.Z)([' <ha-card header="','"> <div class="card-content"> '," "," </div> </ha-card> "])),this.hass.localize("ui.panel.lovelace.unused_entities.title"),this.hass.localize("ui.panel.lovelace.unused_entities.available_entities"),"storage"===this.lovelace.mode?(0,m.dy)(r||(r=(0,d.Z)([" <br>"," "])),this.hass.localize("ui.panel.lovelace.unused_entities.select_to_add")):""),this.hass,this.narrow,this._unusedEntities.map((function(t){var i=e.hass.states[t];return{icon:"",entity_id:t,stateObj:i,name:i?(0,k.C)(i):"Unavailable",domain:(0,x.M)(t),last_changed:null==i?void 0:i.last_changed}})),this._handleSelectedChanged,(0,b.$)({rtl:(0,_.HE)(this.hass),selected:this._selectedEntities.length}),this.hass.localize("ui.panel.lovelace.editor.edit_card.add"),this._addToLovelaceView,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"):m.Ld}},{kind:"method",key:"_getUnusedEntities",value:function(){if(this.hass&&this.lovelace){this._selectedEntities=[];var e=(0,w.Qc)(this.hass,this._config);this._unusedEntities=(0,l.Z)(e).sort()}}},{kind:"method",key:"_handleSelectedChanged",value:function(e){this._selectedEntities=e.detail.selectedEntities}},{kind:"method",key:"_addToLovelaceView",value:function(){var e=this;1!==this.lovelace.config.views.length?(0,E.i)(this,{lovelaceConfig:this.lovelace.config,allowDashboardChange:!1,viewSelectedCallback:function(t,i,n){(0,Z.f)(e,{lovelaceConfig:e.lovelace.config,saveConfig:e.lovelace.saveConfig,path:[n],entities:e._selectedEntities})}}):(0,Z.f)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:[0],entities:this._selectedEntities})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(o||(o=(0,d.Z)([":host{background:var(--lovelace-background);overflow:hidden}.container{display:flex;flex-direction:column;height:100%}ha-card{--ha-card-box-shadow:none;--ha-card-border-radius:0}hui-entity-picker-table{flex-grow:1}.fab{position:sticky;float:right;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}.fab.rtl{right:initial;left:0;bottom:0;padding-right:16px;padding-left:calc(16px + env(safe-area-inset-left))}ha-fab{position:relative;bottom:calc(-80px - env(safe-area-inset-bottom));transition:bottom .3s}.fab.selected ha-fab{bottom:0}"])))}}]}}),m.oi)},93217:function(e,t,i){i.d(t,{Ud:function(){return y}});var n=i(68990),a=i(93359),r=i(59202),o=i(53709),l=i(40039),d=i(76775),s=Symbol("Comlink.proxy"),c=Symbol("Comlink.endpoint"),u=Symbol("Comlink.releaseProxy"),f=Symbol("Comlink.finalizer"),h=Symbol("Comlink.thrown"),v=function(e){return"object"===(0,d.Z)(e)&&null!==e||"function"==typeof e},p=new Map([["proxy",{canHandle:function(e){return v(e)&&e[s]},serialize:function(e){var t=new MessageChannel,i=t.port1,n=t.port2;return g(e,i),[n,[n]]},deserialize:function(e){return e.start(),y(e)}}],["throw",{canHandle:function(e){return v(e)&&h in e},serialize:function(e){var t=e.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["*"];t.addEventListener("message",(function d(c){if(c&&c.data)if(function(e,t){var i,n=(0,l.Z)(e);try{for(n.s();!(i=n.n()).done;){var a=i.value;if(t===a||"*"===a)return!0;if(a instanceof RegExp&&a.test(t))return!0}}catch(r){n.e(r)}finally{n.f()}return!1}(i,c.origin)){var u,v=Object.assign({path:[]},c.data),p=v.id,y=v.type,b=v.path,x=(c.data.argumentList||[]).map(A);try{var k=b.slice(0,-1).reduce((function(e,t){return e[t]}),e),_=b.reduce((function(e,t){return e[t]}),e);switch(y){case"GET":u=_;break;case"SET":k[b.slice(-1)[0]]=A(c.data.value),u=!0;break;case"APPLY":u=_.apply(k,x);break;case"CONSTRUCT":var w;u=function(e){return Object.assign(e,(0,a.Z)({},s,!0))}((0,r.Z)(_,(0,o.Z)(x)));break;case"ENDPOINT":var Z=new MessageChannel,S=Z.port1,z=Z.port2;g(e,z),u=function(e,t){return E.set(e,t),e}(S,[S]);break;case"RELEASE":u=void 0;break;default:return}}catch(w){u=(0,a.Z)({value:w},h,0)}Promise.resolve(u).catch((function(e){return(0,a.Z)({value:e},h,0)})).then((function(i){var a=C(i),r=(0,n.Z)(a,2),o=r[0],l=r[1];t.postMessage(Object.assign(Object.assign({},o),{id:p}),l),"RELEASE"===y&&(t.removeEventListener("message",d),m(t),f in e&&"function"==typeof e[f]&&e[f]())})).catch((function(e){var i=C((0,a.Z)({value:new TypeError("Unserializable return value")},h,0)),r=(0,n.Z)(i,2),o=r[0],l=r[1];t.postMessage(Object.assign(Object.assign({},o),{id:p}),l)}))}else console.warn("Invalid origin '".concat(c.origin,"' for comlink proxy"))})),t.start&&t.start()}function m(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function y(e,t){return w(e,[],t)}function b(e){if(e)throw new Error("Proxy has been released and is not useable")}function x(e){return S(e,{type:"RELEASE"}).then((function(){m(e)}))}var k=new WeakMap,_="FinalizationRegistry"in globalThis&&new FinalizationRegistry((function(e){var t=(k.get(e)||0)-1;k.set(e,t),0===t&&x(e)}));function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=!1,a=new Proxy(arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},{get:function(n,r){if(b(i),r===u)return function(){!function(e){_&&_.unregister(e)}(a),x(e),i=!0};if("then"===r){if(0===t.length)return{then:function(){return a}};var l=S(e,{type:"GET",path:t.map((function(e){return e.toString()}))}).then(A);return l.then.bind(l)}return w(e,[].concat((0,o.Z)(t),[r]))},set:function(a,r,l){b(i);var d=C(l),s=(0,n.Z)(d,2),c=s[0],u=s[1];return S(e,{type:"SET",path:[].concat((0,o.Z)(t),[r]).map((function(e){return e.toString()})),value:c},u).then(A)},apply:function(a,r,o){b(i);var l=t[t.length-1];if(l===c)return S(e,{type:"ENDPOINT"}).then(A);if("bind"===l)return w(e,t.slice(0,-1));var d=Z(o),s=(0,n.Z)(d,2),u=s[0],f=s[1];return S(e,{type:"APPLY",path:t.map((function(e){return e.toString()})),argumentList:u},f).then(A)},construct:function(a,r){b(i);var o=Z(r),l=(0,n.Z)(o,2),d=l[0],s=l[1];return S(e,{type:"CONSTRUCT",path:t.map((function(e){return e.toString()})),argumentList:d},s).then(A)}});return function(e,t){var i=(k.get(t)||0)+1;k.set(t,i),_&&_.register(e,t,e)}(a,e),a}function Z(e){var t,i=e.map(C);return[i.map((function(e){return e[0]})),(t=i.map((function(e){return e[1]})),Array.prototype.concat.apply([],t))]}var E=new WeakMap;function C(e){var t,i=(0,l.Z)(p);try{for(i.s();!(t=i.n()).done;){var a=(0,n.Z)(t.value,2),r=a[0],o=a[1];if(o.canHandle(e)){var d=o.serialize(e),s=(0,n.Z)(d,2);return[{type:"HANDLER",name:r,value:s[0]},s[1]]}}}catch(c){i.e(c)}finally{i.f()}return[{type:"RAW",value:e},E.get(e)||[]]}function A(e){switch(e.type){case"HANDLER":return p.get(e.name).deserialize(e.value);case"RAW":return e.value}}function S(e,t,i){return new Promise((function(n){var a=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");e.addEventListener("message",(function t(i){i.data&&i.data.id&&i.data.id===a&&(e.removeEventListener("message",t),n(i.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),i)}))}}}]);
//# sourceMappingURL=54111-s3QJx-WH1jY.js.map