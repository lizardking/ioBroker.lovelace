/*! For license information please see 88841.lwY2YW1VvhU.js.LICENSE.txt */
export const id=88841;export const ids=[88841];export const modules={14271:(t,e,o)=>{o.r(e),o.d(e,{Button:()=>u});var i=o(43204),n=o(79932),d=(o(75642),o(27763),o(38103)),a=o(98734),r=o(68144),l=o(83448),s=o(30153);class c extends r.oi{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new a.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return r.dy``}renderRipple(){const t=this.raised||this.unelevated;return this.shouldRenderRipple?r.dy`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return r.dy` <button id="button" class="mdc-button ${(0,l.$)(this.getRenderClasses())}" ?disabled="${this.disabled}" aria-label="${this.label||this.icon}" aria-haspopup="${(0,s.o)(this.ariaHasPopup)}" @focus="${this.handleRippleFocus}" @blur="${this.handleRippleBlur}" @mousedown="${this.handleRippleActivate}" @mouseenter="${this.handleRippleMouseEnter}" @mouseleave="${this.handleRippleMouseLeave}" @touchstart="${this.handleRippleActivate}" @touchend="${this.handleRippleDeactivate}" @touchcancel="${this.handleRippleDeactivate}"> ${this.renderOverlay()} ${this.renderRipple()} <span class="leading-icon"> <slot name="icon"> ${this.icon&&!this.trailingIcon?this.renderIcon():""} </slot> </span> <span class="mdc-button__label">${this.label}</span> <span class="slot-container ${(0,l.$)({flex:this.expandContent})}"> <slot></slot> </span> <span class="trailing-icon"> <slot name="trailingIcon"> ${this.icon&&this.trailingIcon?this.renderIcon():""} </slot> </span> </button>`}renderIcon(){return r.dy` <mwc-icon class="mdc-button__icon"> ${this.icon} </mwc-icon>`}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}c.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,i.__decorate)([d.L,(0,n.Cb)({type:String,attribute:"aria-haspopup"})],c.prototype,"ariaHasPopup",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"raised",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"unelevated",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"outlined",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],c.prototype,"dense",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,attribute:"trailingicon"})],c.prototype,"trailingIcon",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],c.prototype,"fullwidth",void 0),(0,i.__decorate)([(0,n.Cb)({type:String})],c.prototype,"icon",void 0),(0,i.__decorate)([(0,n.Cb)({type:String})],c.prototype,"label",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],c.prototype,"expandContent",void 0),(0,i.__decorate)([(0,n.IO)("#button")],c.prototype,"buttonElement",void 0),(0,i.__decorate)([(0,n.GC)("mwc-ripple")],c.prototype,"ripple",void 0),(0,i.__decorate)([(0,n.SB)()],c.prototype,"shouldRenderRipple",void 0),(0,i.__decorate)([(0,n.hO)({passive:!0})],c.prototype,"handleRippleActivate",null);var p=o(3712);let u=class extends c{};u.styles=[p.W],u=(0,i.__decorate)([(0,n.Mo)("mwc-button")],u)},3712:(t,e,o)=>{o.d(e,{W:()=>i});const i=o(68144).iv`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight,500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration,none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform,uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(.4, 0, .2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color,#fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:0;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:0 0}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:0}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors:active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px);display:block}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors:active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors:active)and (forced-colors:active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(.4, 0, .2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small,4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small,4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small,4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small,4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small,4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button--outlined:disabled{color:rgba(0,0,0,.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small,4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.leading-icon .mdc-button__icon,.leading-icon ::slotted(*),.trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*){margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.leading-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted([dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.trailing-icon ::slotted([dir=rtl]),[dir=rtl] .leading-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .trailing-icon ::slotted(*){margin-left:8px;margin-right:0}.trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*){margin-left:8px;margin-right:0}.trailing-icon .mdc-button__icon[dir=rtl],.trailing-icon ::slotted([dir=rtl]),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .trailing-icon ::slotted(*){margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding,8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding,8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12);box-shadow:var(--mdc-button-raised-box-shadow,0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12);box-shadow:var(--mdc-button-raised-box-shadow-focus,var(--mdc-button-raised-box-shadow-hover,0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12);box-shadow:var(--mdc-button-raised-box-shadow-hover,0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12);box-shadow:var(--mdc-button-raised-box-shadow-active,0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled,0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding,16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding,16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width,1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12);border-color:var(--mdc-button-outline-color,rgba(0,0,0,.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width,1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width,1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width,1px);border-style:solid;border-color:transparent}.mdc-button--outlined .ripple[dir=rtl],[dir=rtl] .mdc-button--outlined .ripple{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width,1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0,0,0,.38);color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0,0,0,.12);background-color:var(--mdc-button-disabled-fill-color,rgba(0,0,0,.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0,0,0,.12);border-color:var(--mdc-button-disabled-outline-color,rgba(0,0,0,.12))}`},75642:(t,e,o)=>{var i=o(43204),n=o(68144),d=o(79932);const a=n.iv`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let r=class extends n.oi{render(){return n.dy`<span><slot></slot></span>`}};r.styles=[a],r=(0,i.__decorate)([(0,d.Mo)("mwc-icon")],r)},45036:(t,e,o)=>{var i=o(17463),n=o(34541),d=o(47838),a=o(68144),r=o(79932),l=o(73366);(0,i.Z)([(0,r.Mo)("ha-clickable-list-item")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,r.Cb)()],key:"href",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disableHref",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"openNewTab",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("a")],key:"_anchor",value:void 0},{kind:"method",key:"render",value:function(){const t=(0,n.Z)((0,d.Z)(o.prototype),"render",this).call(this),e=this.href||"";return a.dy`${this.disableHref?a.dy`<a>${t}</a>`:a.dy`<a target="${this.openNewTab?"_blank":""}" href="${e}">${t}</a>`}`}},{kind:"method",key:"firstUpdated",value:function(){(0,n.Z)((0,d.Z)(o.prototype),"firstUpdated",this).call(this),this.addEventListener("keydown",(t=>{"Enter"!==t.key&&" "!==t.key||this._anchor.click()}))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.Z)((0,d.Z)(o),"styles",this),a.iv`a{width:100%;height:100%;display:flex;align-items:center;overflow:hidden}`]}}]}}),l.M)},34821:(t,e,o)=>{o.d(e,{i:()=>u});var i=o(17463),n=o(34541),d=o(47838),a=o(87762),r=o(91632),l=o(68144),s=o(79932),c=o(74265);o(10983);const p=["button","ha-list-item"],u=(t,e)=>{var o;return l.dy` <div class="header_title">${e}</div> <ha-icon-button .label="${null!==(o=null==t?void 0:t.localize("ui.dialogs.generic.close"))&&void 0!==o?o:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `};(0,i.Z)([(0,s.Mo)("ha-dialog")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,e){var o;null===(o=this.contentElement)||void 0===o||o.scrollTo(t,e)}},{kind:"method",key:"renderHeading",value:function(){return l.dy`<slot name="heading"> ${(0,n.Z)((0,d.Z)(o.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var t;(0,n.Z)((0,d.Z)(o.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,p].join(", "),this._updateScrolledAttribute(),null===(t=this.contentElement)||void 0===t||t.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,d.Z)(o.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,l.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),a.M)},88841:(t,e,o)=>{o.r(e);var i=o(17463),n=(o(14271),o(68144)),d=o(79932),a=o(47181),r=(o(22098),o(34821)),l=o(11654),s=o(34541),c=o(47838),p=(o(63436),o(45036),o(5986)),u=o(11254),b=o(27322);(0,i.Z)([(0,d.Mo)("integrations-startup-time")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_manifests",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_setups",value:void 0},{kind:"method",key:"firstUpdated",value:function(t){(0,s.Z)((0,c.Z)(o.prototype),"firstUpdated",this).call(this,t),this._fetchManifests(),this._fetchSetups()}},{kind:"method",key:"render",value:function(){var t;return this._setups?n.dy` <mwc-list> ${null===(t=this._setups)||void 0===t?void 0:t.map((t=>{var e,o;const i=this._manifests&&this._manifests[t.domain],d=i?i.is_built_in?(0,b.R)(this.hass,`/integrations/${i.domain}`):i.documentation:"",a=null===(e=t.seconds)||void 0===e?void 0:e.toFixed(2);return n.dy` <ha-clickable-list-item graphic="avatar" twoline hasMeta openNewTab href="${d}"> <img alt="" loading="lazy" src="${(0,u.X1)({domain:t.domain,type:"icon",useFallback:!0,darkOptimized:null===(o=this.hass.themes)||void 0===o?void 0:o.darkMode})}" crossorigin="anonymous" referrerpolicy="no-referrer" slot="graphic"> <span> ${(0,p.Lh)(this.hass.localize,t.domain,i)} </span> <span slot="secondary">${t.domain}</span> <div slot="meta"> ${a?n.dy`${a} s`:""} </div> </ha-clickable-list-item> `}))} </mwc-list> `:n.Ld}},{kind:"method",key:"_fetchManifests",value:async function(){const t={};for(const e of await(0,p.F3)(this.hass))t[e.domain]=e;this._manifests=t}},{kind:"method",key:"_fetchSetups",value:async function(){const t=await(0,p.Mt)(this.hass);this._setups=t.sort(((t,e)=>t.seconds===e.seconds?0:void 0===t.seconds||void 0===e.seconds?1:e.seconds-t.seconds))}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-clickable-list-item{--mdc-list-item-meta-size:64px;--mdc-typography-caption-font-size:12px}img{display:block;max-height:40px;max-width:40px}div[slot=meta]{display:flex;justify-content:center;align-items:center}`}}]}}),n.oi),(0,i.Z)([(0,d.Mo)("dialog-integration-startup")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_opened",value:()=>!1},{kind:"method",key:"showDialog",value:function(){this._opened=!0}},{kind:"method",key:"closeDialog",value:function(){this._opened=!1,(0,a.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._opened?n.dy` <ha-dialog open scrimClickAction escapeKeyAction hideActions .heading="${(0,r.i)(this.hass,this.hass.localize("ui.panel.config.repairs.integration_startup_time"))}" @closed="${this.closeDialog}"> <integrations-startup-time .hass="${this.hass}" narrow></integrations-startup-time> </ha-dialog> `:n.Ld}},{kind:"field",static:!0,key:"styles",value:()=>[l.yu,n.iv`ha-dialog{--dialog-content-padding:0}`]}]}}),n.oi)},27322:(t,e,o)=>{o.d(e,{R:()=>i});const i=(t,e)=>`https://www.iobroker.net/#${t.language&&t.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md#`}};
//# sourceMappingURL=88841.lwY2YW1VvhU.js.map