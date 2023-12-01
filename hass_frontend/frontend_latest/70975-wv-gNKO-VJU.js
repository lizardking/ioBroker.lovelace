export const id=70975;export const ids=[70975];export const modules={34821:(o,i,t)=>{t.d(i,{i:()=>u});var e=t(17463),a=t(34541),l=t(47838),n=t(87762),d=t(91632),s=t(68144),c=t(79932),r=t(74265);t(10983);const h=["button","ha-list-item"],u=(o,i)=>{var t;return s.dy` <div class="header_title">${i}</div> <ha-icon-button .label="${null!==(t=null==o?void 0:o.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `};(0,e.Z)([(0,c.Mo)("ha-dialog")],(function(o,i){class t extends i{constructor(...i){super(...i),o(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(o,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(o,i)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,a.Z)((0,l.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var o;(0,a.Z)((0,l.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(o=this.contentElement)||void 0===o||o.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,l.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},70975:(o,i,t)=>{t.r(i),t.d(i,{DialogManageCloudhook:()=>g});var e=t(17463),a=(t(14271),t(68144)),l=t(79932),n=t(47181),d=t(50577),s=t(34821),c=(t(3555),t(26765)),r=t(11654),h=t(27322),u=t(81796);let g=(0,e.Z)(null,(function(o,i){return{F:class extends i{constructor(...i){super(...i),o(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"showDialog",value:function(o){this._params=o}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return a.Ld;const{webhook:o,cloudhook:i}=this._params,t="automation"===o.domain?(0,h.R)(this.hass,"/docs/automation/trigger/#webhook-trigger"):(0,h.R)(this.hass,`/integrations/${o.domain}/`);return a.dy` <ha-dialog open hideActions @closed="${this.closeDialog}" .heading="${(0,s.i)(this.hass,this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for",{name:o.name}))}"> <div> <p> ${i.managed?a.dy` ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook")} <button class="link" @click="${this._disableWebhook}"> ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")}</button>. `:a.dy` ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")} `} <br> <a href="${t}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation")} <ha-svg-icon .path="${"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}"></ha-svg-icon> </a> </p> <ha-textfield .label="${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.public_url")}" .value="${i.cloudhook_url}" iconTrailing readOnly="readOnly" @click="${this.focusInput}"> <ha-icon-button @click="${this._copyUrl}" slot="trailingIcon" .path="${"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}"></ha-icon-button> </ha-textfield> </div> <a href="${t}" target="_blank" rel="noreferrer" slot="secondaryAction"> <mwc-button> ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation")} </mwc-button> </a> <mwc-button @click="${this.closeDialog}" slot="primaryAction"> ${this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.close")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_disableWebhook",value:async function(){await(0,c.g7)(this,{title:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable_title"),text:this.hass.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable_text",{name:this._params.webhook.name}),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.disable"),destructive:!0})&&(this._params.disableHook(),this.closeDialog())}},{kind:"method",key:"focusInput",value:function(o){o.currentTarget.select()}},{kind:"method",key:"_copyUrl",value:async function(o){if(!this.hass)return;o.stopPropagation();const i=o.target.parentElement;i.select();const t=this.hass.hassUrl(i.value);await(0,d.v)(t),(0,u.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")})}},{kind:"get",static:!0,key:"styles",value:function(){return[r.Qx,r.yu,a.iv`ha-dialog{width:650px}ha-textfield{display:block}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;--mdc-icon-size:18px}button.link{color:var(--primary-color);text-decoration:none}a{text-decoration:none}a ha-svg-icon{--mdc-icon-size:16px}p{margin-top:0;margin-bottom:16px}`]}}]}}),a.oi);customElements.define("dialog-manage-cloudhook",g)},27322:(o,i,t)=>{t.d(i,{R:()=>e});const e=(o,i)=>`https://www.iobroker.net/#${o.language&&o.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}};
//# sourceMappingURL=70975-wv-gNKO-VJU.js.map