"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[29041],{45485:function(t,e,n){n.d(e,{E:function(){return r},h:function(){return s}});var i=n(58831),r=function(t){return t.include_domains.length+t.include_entities.length+t.exclude_domains.length+t.exclude_entities.length===0},s=function(t,e,n,r){var s=new Set(t),o=new Set(e),a=new Set(n),u=new Set(r),c=s.size>0||o.size>0,d=a.size>0||u.size>0;return c||d?c&&!d?function(t){return o.has(t)||s.has((0,i.M)(t))}:!c&&d?function(t){return!u.has(t)&&!a.has((0,i.M)(t))}:s.size?function(t){return s.has((0,i.M)(t))?!u.has(t):o.has(t)}:a.size?function(t){return a.has((0,i.M)(t))?o.has(t):!u.has(t)}:function(t){return o.has(t)}:function(){return!0}}},27434:function(t,e,n){n.d(e,{Zo:function(){return r},tt:function(){return i}});var i=function(t){return t.callWS({type:"cloud/alexa/entities"})},r=function(t,e){return t.callWS({type:"cloud/alexa/entities/get",entity_id:e})}},83270:function(t,e,n){n.d(e,{AV:function(){return c},De:function(){return f},H9:function(){return h},LI:function(){return u},LV:function(){return p},Mc:function(){return d},QD:function(){return _},VU:function(){return r},_Y:function(){return i},_t:function(){return a},bi:function(){return o},dn:function(){return l},u_:function(){return s}});var i=function(t,e,n){return t.callApi("POST","cloud/login",{email:e,password:n})},r=function(t){return t.callApi("POST","cloud/logout")},s=function(t,e){return t.callApi("POST","cloud/forgot_password",{email:e})},o=function(t,e,n){return t.callApi("POST","cloud/register",{email:e,password:n})},a=function(t,e){return t.callApi("POST","cloud/resend_confirm",{email:e})},u=function(t){return t.callWS({type:"cloud/status"})},c=function(t,e){return t.callWS({type:"cloud/cloudhook/create",webhook_id:e})},d=function(t,e){return t.callWS({type:"cloud/cloudhook/delete",webhook_id:e})},l=function(t){return t.callWS({type:"cloud/remote/connect"})},h=function(t){return t.callWS({type:"cloud/remote/disconnect"})},f=function(t){return t.callWS({type:"cloud/subscription"})},p=function(t,e){return t.callWS(Object.assign({type:"cloud/update_prefs"},e))},_=function(t,e,n){return t.callWS({type:"cloud/google_assistant/entities/update",entity_id:e,disable_2fa:n})}},79337:function(t,e,n){n.d(e,{Fk:function(){return s},HC:function(){return a},_v:function(){return o},fL:function(){return r},rx:function(){return i}});var i={conversation:{domain:"assist_pipeline",name:"Assist"},"cloud.alexa":{domain:"alexa",name:"Amazon Alexa"},"cloud.google_assistant":{domain:"google_assistant",name:"Google Assistant"}},r=function(t,e,n){return t.callWS({type:"homeassistant/expose_new_entities/set",assistant:e,expose_new:n})},s=function(t,e){return t.callWS({type:"homeassistant/expose_new_entities/get",assistant:e})},o=function(t,e,n,i){return t.callWS({type:"homeassistant/expose_entity",assistants:e,entity_ids:n,should_expose:i})},a=function(t){return t.callWS({type:"homeassistant/expose_entity/list"})}},89777:function(t,e,n){n.d(e,{Jq:function(){return r},gh:function(){return i}});var i=function(t){return t.callWS({type:"cloud/google_assistant/entities"})},r=function(t,e){return t.callWS({type:"cloud/google_assistant/entities/get",entity_id:e})}},69163:function(t,e,n){n.r(e),n.d(e,{EntityRegistrySettingsHelper:function(){return q}});var i,r,s,o,a=n(99312),u=n(81043),c=n(88962),d=n(33368),l=n(71650),h=n(82390),f=n(69205),p=n(70906),_=n(91808),m=n(88771),y=n(47838),g=n(68144),v=n(79932),k=n(7323),b=n(55642),x=n(47181),w=n(74186),S=n(56005),Z=n(43180),W=n(52863),z=n(11512),A=n(3300),L=n(74725),C=n(77535),I=n(23681),O=n(40958),M={input_boolean:{fetch:Z.Aj,update:Z.Xr,delete:Z.wO},input_button:{fetch:W.fY,update:W.Wq,delete:W.Wx},input_text:{fetch:C.YL,update:C.jt,delete:C.KB},input_number:{fetch:A.K4,update:A.hb,delete:A.fH},input_datetime:{fetch:z.s2,update:z.FF,delete:z.Gi},input_select:{fetch:L.LN,update:L.ON,delete:L.H3},counter:{fetch:S.W2,update:S.Rm,delete:S.YL},timer:{fetch:O.aT,update:O.mZ,delete:O.WH},schedule:{fetch:I.fn,update:I.Fv,delete:I.wn}},B=n(26765),H=n(62884),T=n(11654),q=(n(13345),n(45122),n(53876),n(65580),n(88108),n(38707),n(39509),n(28254),n(48003),n(59659),n(66196),(0,_.Z)([(0,v.Mo)("entity-settings-helper-tab")],(function(t,e){var n,_,S,Z=function(e){(0,f.Z)(i,e);var n=(0,p.Z)(i);function i(){var e;(0,l.Z)(this,i);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return e=n.call.apply(n,[this].concat(s)),t((0,h.Z)(e)),e}return(0,d.Z)(i)}(e);return{F:Z,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_item",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_componentLoaded",value:void 0},{kind:"field",decorators:[(0,v.IO)("entity-registry-settings-editor")],key:"_registryEditor",value:void 0},{kind:"method",key:"firstUpdated",value:function(t){(0,m.Z)((0,y.Z)(Z.prototype),"firstUpdated",this).call(this,t),this._componentLoaded=(0,k.p)(this.hass,this.entry.platform)}},{kind:"method",key:"updated",value:function(t){var e;((0,m.Z)((0,y.Z)(Z.prototype),"updated",this).call(this,t),t.has("entry"))&&(this._error=void 0,this.entry.unique_id!==(null===(e=t.get("entry"))||void 0===e?void 0:e.unique_id)&&(this._item=void 0),this._getItem())}},{kind:"method",key:"render",value:function(){if(void 0===this._item)return g.Ld;var t=this.hass.states[this.entry.entity_id];return(0,g.dy)(i||(i=(0,c.Z)([' <div class="form"> '," ",' <entity-registry-settings-editor .hass="','" .entry="','" .disabled="','" @change="','" hideName hideIcon></entity-registry-settings-editor> </div> <div class="buttons"> <mwc-button class="warning" @click="','" .disabled="','"> ',' </mwc-button> <mwc-button @click="','" .disabled="','"> '," </mwc-button> </div> "])),this._error?(0,g.dy)(r||(r=(0,c.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._componentLoaded?null===this._item?this.hass.localize("ui.dialogs.helper_settings.yaml_not_editable"):(0,g.dy)(s||(s=(0,c.Z)([' <span @value-changed="','"> '," </span> "])),this._valueChanged,(0,b.h)("ha-".concat(this.entry.platform,"-form"),{hass:this.hass,item:this._item,entry:this.entry})):this.hass.localize("ui.dialogs.helper_settings.platform_not_loaded","platform",this.entry.platform),this.hass,this.entry,this._submitting,this._entityRegistryChanged,this._confirmDeleteItem,this._submitting||!this._item&&!(null!=t&&t.attributes.restored),this.hass.localize("ui.dialogs.entity_registry.editor.delete"),this._updateItem,this._submitting||this._item&&!this._item.name,this.hass.localize("ui.dialogs.entity_registry.editor.update"))}},{kind:"method",key:"_entityRegistryChanged",value:function(){this._error=void 0}},{kind:"method",key:"_valueChanged",value:function(t){this._error=void 0,this._item=t.detail.value}},{kind:"method",key:"_getItem",value:(S=(0,u.Z)((0,a.Z)().mark((function t(){var e,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M[this.entry.platform].fetch(this.hass);case 2:e=t.sent,this._item=e.find((function(t){return t.id===n.entry.unique_id}))||null;case 4:case"end":return t.stop()}}),t,this)}))),function(){return S.apply(this,arguments)})},{kind:"method",key:"_updateItem",value:(_=(0,u.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._submitting=!0,t.prev=1,!this._componentLoaded||!this._item){t.next=5;break}return t.next=5,M[this.entry.platform].update(this.hass,this._item.id,this._item);case 5:return t.next=7,this._registryEditor.updateEntry();case 7:t.sent.close&&(0,H.M)(this),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),this._error=t.t0.message||"Unknown error";case 14:return t.prev=14,this._submitting=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_confirmDeleteItem",value:(n=(0,u.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,B.g7)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")});case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:if(this._submitting=!0,t.prev=5,!this._componentLoaded||!this._item){t.next=11;break}return t.next=9,M[this.entry.platform].delete(this.hass,this._item.id);case 9:t.next=16;break;case 11:if(null!=(e=this.hass.states[this.entry.entity_id])&&e.attributes.restored){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,(0,w.z3)(this.hass,this.entry.entity_id);case 16:(0,x.B)(this,"close-dialog");case 17:return t.prev=17,this._submitting=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[5,,17,20]])}))),function(){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[T.Qx,(0,g.iv)(o||(o=(0,c.Z)([":host{display:block;padding:0!important}.form{padding:20px 24px}.buttons{box-sizing:border-box;display:flex;justify-content:space-between;padding:0 24px 24px 24px;background-color:var(--mdc-theme-surface,#fff)}.error{color:var(--error-color);margin-bottom:8px}.row{margin-top:8px;color:var(--primary-text-color)}.secondary{color:var(--secondary-text-color)}"])))]}}]}}),g.oi))}}]);
//# sourceMappingURL=29041-rcyxdRdL_pk.js.map