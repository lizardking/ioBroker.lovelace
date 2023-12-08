/*! For license information please see 98056.rF_UxtaVV4w.js.LICENSE.txt */
export const id=98056;export const ids=[98056];export const modules={25516:(r,o,t)=>{t.d(o,{i:()=>i});const e=(0,t(8330).P)((r=>{history.replaceState({scrollPosition:r},"")}),300),i=r=>o=>({kind:"method",placement:"prototype",key:o.key,descriptor:{set(r){e(r),this[`__${String(o.key)}`]=r},get(){var r;return this[`__${String(o.key)}`]||(null===(r=history.state)||void 0===r?void 0:r.scrollPosition)},enumerable:!0,configurable:!0},finisher(t){const e=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){e.call(this);const t=this[o.key];t&&this.updateComplete.then((()=>{const o=this.renderRoot.querySelector(r);o&&setTimeout((()=>{o.scrollTop=t}),0)}))}}})},8436:(r,o,t)=>{t.a(r,(async(r,e)=>{try{t.r(o),t.d(o,{DEFAULT_HOURS_TO_SHOW:()=>g,HuiLogbookCard:()=>p});var i=t(17463),a=t(34541),c=t(47838),n=t(68144),s=t(79932),d=t(83448),l=t(7323),v=t(62877),h=(t(22098),t(97740)),u=t(15688),f=t(90271),m=(t(75502),r([h]));h=(m.then?(await m)():m)[0];const g=24;let p=(0,i.Z)([(0,s.Mo)("hui-logbook-card")],(function(r,o){class e extends o{constructor(...o){super(...o),r(this)}}return{F:e,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([t.e(42850),t.e(78133),t.e(50731),t.e(68331),t.e(40163),t.e(74535),t.e(13327)]).then(t.bind(t,74237)),document.createElement("hui-logbook-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(r,o,t){return{entities:(0,u.j)(r,3,o,t,["light","switch"])}}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_time",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_entityId",value:void 0},{kind:"method",key:"getCardSize",value:function(){var r;return 9+(null!==(r=this._config)&&void 0!==r&&r.title?1:0)}},{kind:"method",key:"setConfig",value:function(r){if(!r.entities.length)throw new Error("Entities must be specified");this._config={hours_to_show:g,...r},this._time={recent:60*this._config.hours_to_show*60},this._entityId=(0,f.A)(r.entities).map((r=>r.entity))}},{kind:"method",key:"updated",value:function(r){if((0,a.Z)((0,c.Z)(e.prototype),"updated",this).call(this,r),!this._config||!this.hass)return;const o=r.has("_config"),t=r.has("hass"),i=r.get("hass"),n=r.get("_config");(t&&(null==i?void 0:i.themes)!==this.hass.themes||o&&(null==n?void 0:n.theme)!==this._config.theme)&&(0,v.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,l.p)(this.hass,"logbook")?n.dy` <ha-card .header="${this._config.title}" class="${(0,d.$)({"no-header":!this._config.title})}"> <div class="content"> <ha-logbook .hass="${this.hass}" .time="${this._time}" .entityIds="${this._entityId}" narrow relative-time virtualize></ha-logbook> </div> </ha-card> `:n.dy` <hui-warning> ${this.hass.localize("ui.components.logbook.not_loaded",{platform:"logbook"})}</hui-warning> `:n.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`ha-card{height:100%;display:flex;flex-direction:column;justify-content:space-between}.content{padding:0 16px 16px}.no-header .content{padding-top:16px}ha-logbook{height:385px;display:block}`]}}]}}),n.oi);e()}catch(r){e(r)}}))},46134:(r,o,t)=>{t.d(o,{o:()=>i});var e=t(44281);const i=async()=>{await(0,e.j)(),await t.e(68984).then(t.bind(t,68984))}},22129:(r,o,t)=>{t.d(o,{B:()=>v});var e=t(43204),i=t(79932),a=t(68144),c=t(83448),n=t(92204);class s extends a.oi{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:r}=this;return a.dy` <div class="progress ${(0,c.$)(this.getRenderClasses())}" role="progressbar" aria-label="${r||a.Ld}" aria-valuemin="0" aria-valuemax="${this.max}" aria-valuenow="${this.indeterminate?a.Ld:this.value}">${this.renderIndicator()}</div> `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,n.d)(s),(0,e.__decorate)([(0,i.Cb)({type:Number})],s.prototype,"value",void 0),(0,e.__decorate)([(0,i.Cb)({type:Number})],s.prototype,"max",void 0),(0,e.__decorate)([(0,i.Cb)({type:Boolean})],s.prototype,"indeterminate",void 0),(0,e.__decorate)([(0,i.Cb)({type:Boolean,attribute:"four-color"})],s.prototype,"fourColor",void 0);class d extends s{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const r=100*(1-this.value/this.max);return a.dy` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${r}"></circle> </svg> `}renderIndeterminateContainer(){return a.dy` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`}}const l=a.iv`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`;let v=class extends d{};v.styles=[l],v=(0,e.__decorate)([(0,i.Mo)("md-circular-progress")],v)}};
//# sourceMappingURL=98056.rF_UxtaVV4w.js.map