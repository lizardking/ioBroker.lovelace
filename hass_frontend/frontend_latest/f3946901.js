/*! For license information please see f3946901.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[12174,99555,33085,8102],{55907:(e,t,i)=>{i.d(t,{$:()=>r});var r=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(e,t){var i=this;this.cancel(e);var r=requestAnimationFrame((function(r){i.rafIDs.delete(e),t(r)}));this.rafIDs.set(e,r)},e.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},e.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach((function(t,i){e.cancel(i)}))},e.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach((function(t,i){e.push(i)})),e},e}()},95165:(e,t,i)=>{i.d(t,{U:()=>r,j:()=>o});var r={ROOT:"mdc-form-field"},o={LABEL_SELECTOR:".mdc-form-field > label"}},15892:(e,t,i)=>{i.d(t,{C:()=>a});var r=i(87480),o=i(72774),n=i(95165);const a=function(e){function t(i){var o=e.call(this,(0,r.__assign)((0,r.__assign)({},t.defaultAdapter),i))||this;return o.click=function(){o.handleClick()},o}return(0,r.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return n.U},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return n.j},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(o.K)},14114:(e,t,i)=>{i.d(t,{P:()=>r});const r=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}},93751:(e,t,i)=>{i.d(t,{a:()=>m});var r=i(87480),o=i(15892),n=i(78220),a=i(18601),c=i(14114),s=i(37500),d=i(5701),l=i(67352),h=i(32930),p=i(228);class m extends n.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=o.C}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof a.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof a.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return s.dy`
      <div class="mdc-form-field ${(0,p.$)(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,r.__decorate)([(0,d.C)({type:Boolean})],m.prototype,"alignEnd",void 0),(0,r.__decorate)([(0,d.C)({type:Boolean})],m.prototype,"spaceBetween",void 0),(0,r.__decorate)([(0,d.C)({type:Boolean})],m.prototype,"nowrap",void 0),(0,r.__decorate)([(0,d.C)({type:String}),(0,c.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],m.prototype,"label",void 0),(0,r.__decorate)([(0,l.I)(".mdc-form-field")],m.prototype,"mdcRoot",void 0),(0,r.__decorate)([(0,h.v)("",!0,"*")],m.prototype,"slottedInputs",void 0),(0,r.__decorate)([(0,l.I)("label")],m.prototype,"labelEl",void 0)},92038:(e,t,i)=>{i.d(t,{W:()=>r});const r=i(37500).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`},1819:(e,t,i)=>{i.d(t,{Y:()=>c});var r=i(87480),o=i(26767),n=i(93751),a=i(92038);let c=class extends n.a{};c.styles=[a.W],c=(0,r.__decorate)([(0,o.M)("mwc-formfield")],c)},32421:(e,t,i)=>{i.d(t,{r:()=>k});var r=i(87480),o=i(26767),n=(i(66702),i(38103)),a=i(78220),c=i(14114),s=i(98734),d=i(72774),l={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},h={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};const p=function(e){function t(i){return e.call(this,(0,r.__assign)((0,r.__assign)({},t.defaultAdapter),i))||this}return(0,r.__extends)(t,e),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(l.DISABLED):this.adapter.removeClass(l.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked(t.checked),this.updateCheckedStyling(t.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(l.CHECKED):this.adapter.removeClass(l.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(h.ARIA_CHECKED_ATTR,""+!!e)},t}(d.K);var m=i(37500),u=i(5701),f=i(67352),b=i(35401),g=i(17717),v=i(84982),y=i(48399);class _ extends a.H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=p,this.rippleHandlers=new s.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},(0,a.q)(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)}})}renderRipple(){return this.shouldRenderRipple?m.dy`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}render(){return m.dy`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${(0,y.o)(this.ariaLabel)}"
              aria-labelledby="${(0,y.o)(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,r.__decorate)([(0,u.C)({type:Boolean}),(0,c.P)((function(e){this.mdcFoundation.setChecked(e)}))],_.prototype,"checked",void 0),(0,r.__decorate)([(0,u.C)({type:Boolean}),(0,c.P)((function(e){this.mdcFoundation.setDisabled(e)}))],_.prototype,"disabled",void 0),(0,r.__decorate)([n.L,(0,u.C)({attribute:"aria-label"})],_.prototype,"ariaLabel",void 0),(0,r.__decorate)([n.L,(0,u.C)({attribute:"aria-labelledby"})],_.prototype,"ariaLabelledBy",void 0),(0,r.__decorate)([(0,f.I)(".mdc-switch")],_.prototype,"mdcRoot",void 0),(0,r.__decorate)([(0,f.I)("input")],_.prototype,"formElement",void 0),(0,r.__decorate)([(0,b.G)("mwc-ripple")],_.prototype,"ripple",void 0),(0,r.__decorate)([(0,g.S)()],_.prototype,"shouldRenderRipple",void 0),(0,r.__decorate)([(0,v.h)({passive:!0})],_.prototype,"handleRippleMouseDown",null),(0,r.__decorate)([(0,v.h)({passive:!0})],_.prototype,"handleRippleTouchStart",null);const w=m.iv`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;let k=class extends _{};k.styles=[w],k=(0,r.__decorate)([(0,o.M)("mwc-switch")],k)},32930:(e,t,i)=>{i.d(t,{v:()=>o});var r=i(39030);function o(e="",t=!1,i=""){return(0,r.eZ)({descriptor:r=>({get(){var r,o,n;const a="slot"+(e?`[name=${e}]`:":not([name])");let c=null!==(n=null===(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(a))||void 0===o?void 0:o.assignedNodes({flatten:t}))&&void 0!==n?n:[];return i&&(c=c.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(i)))),c},enumerable:!0,configurable:!0})})}}}]);
//# sourceMappingURL=f3946901.js.map