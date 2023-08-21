/*! For license information please see 54554-EPbd-ZKfDLw.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54554],{30879:(e,i,t)=>{t.d(i,{D:()=>p});var r=t(87480),a=t(79932),s=t(38103),d=t(68144),n=t(83448),c=t(30153),o=t(47501);class l extends d.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},i=48+4*this.density,t={width:`${i}px`,height:`${i}px`};return d.dy` <div class="mdc-circular-progress ${(0,n.$)(e)}" style="${(0,o.V)(t)}" role="progressbar" aria-label="${(0,c.o)(this.ariaLabel)}" aria-valuemin="0" aria-valuemax="1" aria-valuenow="${(0,c.o)(this.indeterminate?void 0:this.progress)}"> ${this.renderDeterminateContainer()} ${this.renderIndeterminateContainer()} </div>`}renderDeterminateContainer(){const e=48+4*this.density,i=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*t,a=(1-this.progress)*r,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return d.dy` <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle class="mdc-circular-progress__determinate-track" cx="${i}" cy="${i}" r="${t}" stroke-width="${s}"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${6.2831852*t}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div>`}renderIndeterminateContainer(){return d.dy` <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> ${this.renderIndeterminateSpinnerLayer()} </div> </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,i=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*t,a=.5*r,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return d.dy` <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${.8*s}"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,r.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],l.prototype,"indeterminate",void 0),(0,r.__decorate)([(0,a.Cb)({type:Number,reflect:!0})],l.prototype,"progress",void 0),(0,r.__decorate)([(0,a.Cb)({type:Number,reflect:!0})],l.prototype,"density",void 0),(0,r.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],l.prototype,"closed",void 0),(0,r.__decorate)([s.L,(0,a.Cb)({type:String,attribute:"aria-label"})],l.prototype,"ariaLabel",void 0);const h=d.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}`;let p=class extends l{};p.styles=[h],p=(0,r.__decorate)([(0,a.Mo)("mwc-circular-progress")],p)},3555:(e,i,t)=>{var r=t(17463),a=t(34541),s=t(47838),d=t(42977),n=t(31338),c=t(68144),o=t(79932);(0,r.Z)([(0,o.Mo)("ha-textfield")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,o.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,a.Z)((0,s.Z)(t.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete"))}},{kind:"method",key:"renderIcon",value:function(e,i=!1){const t=i?"trailing":"leading";return c.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${t}" tabindex="${i?1:-1}"> <slot name="${t}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,c.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}`,"rtl"===document.dir?c.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:c.iv``]}]}}),d.P)},65040:(e,i,t)=>{var r=t(17463),a=t(68144),s=t(79932),d=(t(10983),t(52039),t(3555),t(47181));(0,r.Z)([(0,s.Mo)("search-input")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"filter",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"suffix",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"label",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._input)||void 0===e||e.focus()}},{kind:"field",decorators:[(0,s.IO)("ha-textfield",!0)],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return a.dy` <ha-textfield .autofocus="${this.autofocus}" .label="${this.label||"Search"}" .value="${this.filter||""}" icon .iconTrailing="${this.filter||this.suffix}" @input="${this._filterInputChanged}"> <slot name="prefix" slot="leadingIcon"> <ha-svg-icon tabindex="-1" class="prefix" .path="${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}"></ha-svg-icon> </slot> <div class="trailing" slot="trailingIcon"> ${this.filter&&a.dy` <ha-icon-button @click="${this._clearSearch}" .label="${this.hass.localize("ui.common.clear")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" class="clear-button"></ha-icon-button> `} <slot name="suffix"></slot> </div> </ha-textfield> `}},{kind:"method",key:"_filterChanged",value:async function(e){(0,d.B)(this,"value-changed",{value:String(e)})}},{kind:"method",key:"_filterInputChanged",value:async function(e){this._filterChanged(e.target.value)}},{kind:"method",key:"_clearSearch",value:async function(){this._filterChanged("")}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:inline-flex}ha-icon-button,ha-svg-icon{color:var(--primary-text-color)}ha-svg-icon{outline:0}.clear-button{--mdc-icon-size:20px}ha-textfield{display:inherit}.trailing{display:flex;align-items:center}`}}]}}),a.oi)},54531:(e,i,t)=>{t.d(i,{Qc:()=>o,Xr:()=>c,zJ:()=>n});const r=["zone","persistent_notification"],a=(e,i)=>{var t,r,a,s,d,n,c,o;if(!("call-service"===i.action&&(null!==(t=i.target)&&void 0!==t&&t.entity_id||null!==(r=i.service_data)&&void 0!==r&&r.entity_id||null!==(a=i.data)&&void 0!==a&&a.entity_id)))return;let l=null!==(s=null!==(d=null===(n=i.service_data)||void 0===n?void 0:n.entity_id)&&void 0!==d?d:null===(c=i.data)||void 0===c?void 0:c.entity_id)&&void 0!==s?s:null===(o=i.target)||void 0===o?void 0:o.entity_id;Array.isArray(l)||(l=[l]);for(const i of l)e.add(i)},s=(e,i)=>{"string"!=typeof i?(i.entity&&e.add(i.entity),i.camera_image&&e.add(i.camera_image),i.tap_action&&a(e,i.tap_action),i.hold_action&&a(e,i.hold_action)):e.add(i)},d=(e,i)=>{i.entity&&s(e,i.entity),i.entities&&Array.isArray(i.entities)&&i.entities.forEach((i=>s(e,i))),i.card&&d(e,i.card),i.cards&&Array.isArray(i.cards)&&i.cards.forEach((i=>d(e,i))),i.elements&&Array.isArray(i.elements)&&i.elements.forEach((i=>d(e,i))),i.badges&&Array.isArray(i.badges)&&i.badges.forEach((i=>s(e,i)))},n=e=>{const i=new Set;return e.views.forEach((e=>d(i,e))),i},c=(e,i)=>{const t=new Set;for(const a of Object.keys(e.states))i.has(a)||r.includes(a.split(".",1)[0])||t.add(a);return t},o=(e,i)=>{const t=n(i);return c(e,t)}},3127:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var r=t(17463),a=t(79932),s=t(51153),d=t(26633),n=e([s]);s=(n.then?(await n)():n)[0];(0,r.Z)([(0,a.Mo)("hui-card-element-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"getConfigElement",value:async function(){const e=await(0,s.Do)(this.configElementType);if(e&&e.getConfigElement)return e.getConfigElement()}}]}}),d.O);i()}catch(e){i(e)}}))},68175:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var r=t(17463),a=(t(17333),t(91993),t(81480)),s=t(68144),d=t(79932),n=t(83448),c=t(47501),o=t(62601),l=t(14516),h=t(47181),p=(t(31206),t(65040),t(56007)),u=t(9893),m=t(54531),f=t(51153),g=t(82432),v=t(7782),y=e([f,g]);[f,g]=y.then?(await y)():y;(0,r.Z)([(0,d.Mo)("hui-card-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_cards",value:()=>[]},{kind:"field",key:"lovelace",value:void 0},{kind:"field",key:"cardPicked",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,d.SB)()],key:"_width",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_height",value:void 0},{kind:"field",key:"_unusedEntities",value:void 0},{kind:"field",key:"_usedEntities",value:void 0},{kind:"field",key:"_filterCards",value:()=>(0,l.Z)(((e,i)=>{if(!i)return e;let t=e.map((e=>e.card));const r=new a.Z(t,{keys:["type","name","description"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2});return t=r.search(i).map((e=>e.item)),e.filter((e=>t.includes(e.card)))}))},{kind:"method",key:"render",value:function(){return this.hass&&this.lovelace&&this._unusedEntities&&this._usedEntities?s.dy` <search-input .hass="${this.hass}" .filter="${this._filter}" @value-changed="${this._handleSearchChange}" .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.search_cards")}"></search-input> <div id="content" style="${(0,c.V)({width:this._width?`${this._width}px`:"auto",height:this._height?`${this._height}px`:"auto"})}"> <div class="cards-container"> ${this._filterCards(this._cards,this._filter).map((e=>e.element))} </div> <div class="cards-container"> <div class="card manual" @click="${this._cardPicked}" .config="${{type:""}}"> <div class="card-header"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual")} </div> <div class="preview description"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual_description")} </div> </div> </div> </div> `:s.Ld}},{kind:"method",key:"shouldUpdate",value:function(e){const i=e.get("hass");return!i||i.locale!==this.hass.locale}},{kind:"method",key:"firstUpdated",value:function(){if(!this.hass||!this.lovelace)return;const e=(0,m.zJ)(this.lovelace),i=(0,m.Xr)(this.hass,e);this._usedEntities=[...e].filter((e=>this.hass.states[e]&&!(0,p.rk)(this.hass.states[e].state))),this._unusedEntities=[...i].filter((e=>this.hass.states[e]&&!(0,p.rk)(this.hass.states[e].state))),this._loadCards()}},{kind:"method",key:"_loadCards",value:function(){let e=v.C.map((e=>({name:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.name`),description:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.description`),...e})));u.kb.length>0&&(e=e.concat(u.kb.map((e=>({type:e.type,name:e.name,description:e.description,showElement:e.preview,isCustom:!0}))))),this._cards=e.map((e=>({card:e,element:s.dy`${(0,o.C)(this._renderCardElement(e),s.dy` <div class="card spinner"> <ha-circular-progress active alt="Loading"></ha-circular-progress> </div> `)}`})))}},{kind:"method",key:"_handleSearchChange",value:function(e){const i=e.detail.value;if(i){if(!this._width||!this._height){const e=this.shadowRoot.getElementById("content");if(e&&!this._width){const i=e.clientWidth;i&&(this._width=i)}if(e&&!this._height){const i=e.clientHeight;i&&(this._height=i)}}}else this._width=void 0,this._height=void 0;this._filter=i}},{kind:"method",key:"_cardPicked",value:function(e){const i=e.currentTarget.config;(0,h.B)(this,"config-changed",{config:i})}},{kind:"method",key:"_tryCreateCardElement",value:function(e){const i=(0,f.l$)(e);return i.hass=this.hass,i.addEventListener("ll-rebuild",(t=>{t.stopPropagation(),this._rebuildCard(i,e)}),{once:!0}),i}},{kind:"method",key:"_rebuildCard",value:function(e,i){let t;try{t=this._tryCreateCardElement(i)}catch(e){return}e.parentElement&&e.parentElement.replaceChild(t,e)}},{kind:"method",key:"_renderCardElement",value:async function(e){let{type:i}=e;const{showElement:t,isCustom:r,name:a,description:d}=e,c=r?(0,u.cs)(i):void 0;let o;r&&(i=`${u.Qo}${i}`);let l={type:i};if(this.hass&&this.lovelace&&(l=await(0,g.U)(this.hass,i,this._unusedEntities,this._usedEntities),t))try{o=this._tryCreateCardElement(l)}catch(e){o=void 0}return s.dy` <div class="card"> <div class="overlay" @click="${this._cardPicked}" .config="${l}"></div> <div class="card-header"> ${c?`${this.hass.localize("ui.panel.lovelace.editor.cardpicker.custom_card")}: ${c.name||c.type}`:a} </div> <div class="preview ${(0,n.$)({description:!o||"HUI-ERROR-CARD"===o.tagName})}"> ${o&&"HUI-ERROR-CARD"!==o.tagName?o:c?c.description||this.hass.localize("ui.panel.lovelace.editor.cardpicker.no_description"):d} </div> </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return[s.iv`search-input{display:block;--mdc-shape-small:var(--card-picker-search-shape);margin:var(--card-picker-search-margin)}.cards-container{display:grid;grid-gap:8px 8px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));margin-top:20px}.card{height:100%;max-width:500px;display:flex;flex-direction:column;border-radius:var(--ha-card-border-radius,12px);background:var(--primary-background-color,#fafafa);cursor:pointer;position:relative}.card-header{color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:16px;font-weight:700;letter-spacing:-.012em;line-height:20px;padding:12px 16px;display:block;text-align:center;background:var(--ha-card-background,var(--card-background-color,#fff));border-bottom:1px solid var(--divider-color)}.preview{pointer-events:none;margin:20px;flex-grow:1;display:flex;align-items:center;justify-content:center}.preview>:first-child{zoom:.6;display:block;width:100%}.description{text-align:center}.spinner{align-items:center;justify-content:center}.overlay{position:absolute;width:100%;height:100%;z-index:1;box-sizing:border-box;border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color));border-radius:var(--ha-card-border-radius,12px)}.manual{max-width:none}`]}}]}}),s.oi);i()}catch(e){i(e)}}))},45890:(e,i,t)=>{t.d(i,{A:()=>r});const r=t(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},74513:(e,i,t)=>{t.a(e,(async(e,r)=>{try{t.r(i),t.d(i,{HuiStackCardEditor:()=>_});var a=t(17463),s=(t(7191),t(91441),t(68144)),d=t(79932),n=t(38768),c=t(47181),o=(t(10983),t(3127)),l=t(68175),h=t(98346),p=t(45890),u=e([o,l]);[o,l]=u.then?(await u)():u;const m="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",f="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z",g="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",v="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",y=(0,n.f0)(h.I,(0,n.Ry)({cards:(0,n.IX)((0,n.Yj)()),title:(0,n.jt)((0,n.Z_)())}));let _=(0,a.Z)([(0,d.Mo)("hui-stack-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_selectedCard",value:()=>0},{kind:"field",decorators:[(0,d.SB)()],key:"_GUImode",value:()=>!0},{kind:"field",decorators:[(0,d.SB)()],key:"_guiModeAvailable",value:()=>!0},{kind:"field",decorators:[(0,d.IO)("hui-card-element-editor")],key:"_cardEditorEl",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,n.hu)(e,y),this._config=e}},{kind:"method",key:"focusYamlEditor",value:function(){var e;null===(e=this._cardEditorEl)||void 0===e||e.focusYamlEditor()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return s.Ld;const e=this._selectedCard,i=this._config.cards.length;return s.dy` <div class="card-config"> <div class="toolbar"> <paper-tabs .selected="${e}" scrollable @iron-activate="${this._handleSelectedCard}"> ${this._config.cards.map(((e,i)=>s.dy` <paper-tab> ${i+1} </paper-tab> `))} </paper-tabs> <paper-tabs id="add-card" .selected="${e===i?"0":void 0}" @iron-activate="${this._handleSelectedCard}"> <paper-tab> <ha-svg-icon .path="${v}"></ha-svg-icon> </paper-tab> </paper-tabs> </div> <div id="editor"> ${e<i?s.dy` <div id="card-options"> <mwc-button @click="${this._toggleMode}" .disabled="${!this._guiModeAvailable}" class="gui-mode-button"> ${this.hass.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")} </mwc-button> <ha-icon-button .disabled="${0===e}" .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.move_before")}" .path="${m}" @click="${this._handleMove}" .move="${-1}"></ha-icon-button> <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.move_after")}" .path="${f}" .disabled="${e===i-1}" @click="${this._handleMove}" .move="${1}"></ha-icon-button> <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}" .path="${g}" @click="${this._handleDeleteCard}"></ha-icon-button> </div> <hui-card-element-editor .hass="${this.hass}" .value="${this._config.cards[e]}" .lovelace="${this.lovelace}" @config-changed="${this._handleConfigChanged}" @GUImode-changed="${this._handleGUIModeChanged}"></hui-card-element-editor> `:s.dy` <hui-card-picker .hass="${this.hass}" .lovelace="${this.lovelace}" @config-changed="${this._handleCardPicked}"></hui-card-picker> `} </div> </div> `}},{kind:"method",key:"_handleSelectedCard",value:function(e){"add-card"!==e.target.id?(this._setMode(!0),this._guiModeAvailable=!0,this._selectedCard=parseInt(e.detail.selected,10)):this._selectedCard=this._config.cards.length}},{kind:"method",key:"_handleConfigChanged",value:function(e){if(e.stopPropagation(),!this._config)return;const i=[...this._config.cards];i[this._selectedCard]=e.detail.config,this._config={...this._config,cards:i},this._guiModeAvailable=e.detail.guiModeAvailable,(0,c.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_handleCardPicked",value:function(e){if(e.stopPropagation(),!this._config)return;const i=e.detail.config,t=[...this._config.cards,i];this._config={...this._config,cards:t},(0,c.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_handleDeleteCard",value:function(){if(!this._config)return;const e=[...this._config.cards];e.splice(this._selectedCard,1),this._config={...this._config,cards:e},this._selectedCard=Math.max(0,this._selectedCard-1),(0,c.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_handleMove",value:function(e){if(!this._config)return;const i=e.currentTarget.move,t=this._selectedCard+i,r=[...this._config.cards],a=r.splice(this._selectedCard,1)[0];r.splice(t,0,a),this._config={...this._config,cards:r},this._selectedCard=t,(0,c.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_handleGUIModeChanged",value:function(e){e.stopPropagation(),this._GUImode=e.detail.guiMode,this._guiModeAvailable=e.detail.guiModeAvailable}},{kind:"method",key:"_toggleMode",value:function(){var e;null===(e=this._cardEditorEl)||void 0===e||e.toggleMode()}},{kind:"method",key:"_setMode",value:function(e){this._GUImode=e,this._cardEditorEl&&(this._cardEditorEl.GUImode=e)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.A,s.iv`.toolbar{display:flex;--paper-tabs-selection-bar-color:var(--primary-color);--paper-tab-ink:var(--primary-color)}paper-tabs{display:flex;font-size:14px;flex-grow:1}#add-card{max-width:32px;padding:0}#card-options{display:flex;justify-content:flex-end;width:100%}#editor{border:1px solid var(--divider-color);padding:12px}@media (max-width:450px){#editor{margin:0 -12px}}.gui-mode-button{margin-right:auto}`]}}]}}),s.oi);r()}catch(e){r(e)}}))},82432:(e,i,t)=>{t.a(e,(async(e,r)=>{try{t.d(i,{U:()=>d});var a=t(51153),s=e([a]);a=(s.then?(await s)():s)[0];const d=async(e,i,t,r)=>{let s={type:i};const d=await(0,a.Do)(i);if(d&&d.getStubConfig){const i=await d.getStubConfig(e,t,r);s={...s,...i}}return s};r()}catch(e){r(e)}}))},7782:(e,i,t)=>{t.d(i,{C:()=>r});const r=[{type:"alarm-panel",showElement:!0},{type:"button",showElement:!0},{type:"calendar",showElement:!0},{type:"entities",showElement:!0},{type:"entity",showElement:!0},{type:"gauge",showElement:!0},{type:"glance",showElement:!0},{type:"history-graph",showElement:!0},{type:"statistics-graph",showElement:!1},{type:"statistic",showElement:!0},{type:"humidifier",showElement:!0},{type:"light",showElement:!0},{type:"map",showElement:!0},{type:"markdown",showElement:!0},{type:"media-control",showElement:!0},{type:"picture",showElement:!0},{type:"picture-elements",showElement:!0},{type:"picture-entity",showElement:!0},{type:"picture-glance",showElement:!0},{type:"plant-status",showElement:!0},{type:"sensor",showElement:!0},{type:"thermostat",showElement:!0},{type:"weather-forecast",showElement:!0},{type:"area",showElement:!0},{type:"tile",showElement:!0},{type:"conditional"},{type:"entity-filter"},{type:"grid"},{type:"horizontal-stack"},{type:"iframe"},{type:"logbook"},{type:"vertical-stack"},{type:"shopping-list"}]},98346:(e,i,t)=>{t.d(i,{I:()=>a});var r=t(38768);const a=(0,r.Ry)({type:(0,r.Z_)(),view_layout:(0,r.Yj)()})}}]);
//# sourceMappingURL=54554-EPbd-ZKfDLw.js.map