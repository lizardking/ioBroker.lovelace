"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[89240],{66737:function(e,t,i){var a,n,o,r=i(99312),s=i(53709),d=i(81043),l=i(88962),u=i(33368),c=i(71650),h=i(82390),v=i(69205),p=i(70906),f=i(91808),m=(i(53918),i(68144)),b=i(79932),k=i(11654),y=(i(68101),i(3555),i(47181));(0,f.Z)([(0,b.Mo)("ha-aliases-editor")],(function(e,t){var i,f,_,g,x=function(t){(0,v.Z)(a,t);var i=(0,p.Z)(a);function a(){var t;(0,c.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,h.Z)(t)),t}return(0,u.Z)(a)}(t);return{F:x,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"aliases",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"method",key:"render",value:function(){var e=this;return this.aliases?(0,m.dy)(a||(a=(0,l.Z)([" ",' <div class="layout horizontal center-center"> <mwc-button @click="','" .disabled="','"> ',' <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </mwc-button> </div> '])),this.aliases.map((function(t,i){return(0,m.dy)(n||(n=(0,l.Z)([' <div class="layout horizontal center-center row"> <ha-textfield .disabled="','" dialogInitialFocus="','" .index="','" class="flex-auto" .label="','" .value="','" ?data-last="','" @input="','" @keydown="','"></ha-textfield> <ha-icon-button .disabled="','" .index="','" slot="navigationIcon" label="','" @click="','" .path="','"></ha-icon-button> </div> '])),e.disabled,i,i,e.hass.localize("ui.dialogs.aliases.input_label",{number:i+1}),t,i===e.aliases.length-1,e._editAlias,e._keyDownAlias,e.disabled,i,e.hass.localize("ui.dialogs.aliases.remove_alias",{number:i+1}),e._removeAlias,"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z")})),this._addAlias,this.disabled,this.hass.localize("ui.dialogs.aliases.add_alias"),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"):m.Ld}},{kind:"method",key:"_addAlias",value:(g=(0,d.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.aliases=[].concat((0,s.Z)(this.aliases),[""]),this._fireChanged(this.aliases),e.next=4,this.updateComplete;case 4:null==(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-textfield[data-last]"))||i.focus();case 6:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"_editAlias",value:(_=(0,d.Z)((0,r.Z)().mark((function e(t){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.target.index,(a=(0,s.Z)(this.aliases))[i]=t.target.value,this._fireChanged(a);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{kind:"method",key:"_keyDownAlias",value:(f=(0,d.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(t.stopPropagation(),this._addAlias());case 1:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{kind:"method",key:"_removeAlias",value:(i=(0,d.Z)((0,r.Z)().mark((function e(t){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.target.index,(a=(0,s.Z)(this.aliases)).splice(i,1),this._fireChanged(a);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_fireChanged",value:function(e){(0,y.B)(this,"value-changed",{value:e})}},{kind:"get",static:!0,key:"styles",value:function(){return[k.Qx,(0,m.iv)(o||(o=(0,l.Z)([".row{margin-bottom:8px}ha-textfield{display:block}ha-icon-button{display:block}mwc-button{margin-left:8px}#alias_input{margin-top:8px}.alias{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px;--mdc-icon-button-size:24px}"])))]}}]}}),m.oi)},68101:function(e,t,i){var a,n,o=i(53709),r=i(99312),s=i(81043),d=i(33368),l=i(71650),u=i(82390),c=i(69205),h=i(70906),v=i(91808),p=i(88962),f=(i(44577),i(68144)),m=i(79932),b=i(83448),k=i(14516),y=i(47181),_=i(58831),g=i(57066),x=i(57292),Z=i(26765),C=(i(77576),i(10983),i(52039),function(e){return(0,f.dy)(a||(a=(0,p.Z)(['<mwc-list-item class="','"> '," </mwc-list-item>"])),(0,b.$)({"add-new":"add_new"===e.area_id}),e.name)});(0,v.Z)([(0,m.Mo)("ha-area-picker")],(function(e,t){var i,a,v=function(t){(0,c.Z)(a,t);var i=(0,h.Z)(a);function a(){var t;(0,l.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,u.Z)(t)),t}return(0,d.Z)(a)}(t);return{F:v,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,m.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:function(){return!1}},{kind:"method",key:"open",value:(a=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this.comboBox)||void 0===t?void 0:t.open();case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this.comboBox)||void 0===t?void 0:t.focus();case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"field",key:"_getAreas",value:function(){var e=this;return(0,k.Z)((function(t,i,a,n,r,s,d,l,u,c){if(!t.length)return[{area_id:"no_areas",name:e.hass.localize("ui.components.area-picker.no_areas"),picture:null,aliases:[]}];var h,v,p={};(n||r||s||d||l)&&(p=(0,x.R6)(a),h=i,v=a.filter((function(e){return e.area_id})),n&&(h=h.filter((function(e){var t=p[e.id];return!(!t||!t.length)&&p[e.id].some((function(e){return n.includes((0,_.M)(e.entity_id))}))})),v=v.filter((function(e){return n.includes((0,_.M)(e.entity_id))}))),r&&(h=h.filter((function(e){var t=p[e.id];return!t||!t.length||a.every((function(e){return!r.includes((0,_.M)(e.entity_id))}))})),v=v.filter((function(e){return!r.includes((0,_.M)(e.entity_id))}))),s&&(h=h.filter((function(t){var i=p[t.id];return!(!i||!i.length)&&p[t.id].some((function(t){var i=e.hass.states[t.entity_id];return!!i&&(i.attributes.device_class&&s.includes(i.attributes.device_class))}))})),v=v.filter((function(t){var i=e.hass.states[t.entity_id];return i.attributes.device_class&&s.includes(i.attributes.device_class)}))),d&&(h=h.filter((function(e){return d(e)}))),l&&(h=h.filter((function(t){var i=p[t.id];return!(!i||!i.length)&&p[t.id].some((function(t){var i=e.hass.states[t.entity_id];return!!i&&l(i)}))})),v=v.filter((function(t){var i=e.hass.states[t.entity_id];return!!i&&l(i)}))));var f,m,b=t;(h&&(f=h.filter((function(e){return e.area_id})).map((function(e){return e.area_id}))),v)&&(f=(null!==(m=f)&&void 0!==m?m:[]).concat(v.filter((function(e){return e.area_id})).map((function(e){return e.area_id}))));return f&&(b=t.filter((function(e){return f.includes(e.area_id)}))),c&&(b=b.filter((function(e){return!c.includes(e.area_id)}))),b.length||(b=[{area_id:"no_areas",name:e.hass.localize("ui.components.area-picker.no_match"),picture:null,aliases:[]}]),u?b:[].concat((0,o.Z)(b),[{area_id:"add_new",name:e.hass.localize("ui.components.area-picker.add_new"),picture:null,aliases:[]}])}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;var t=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas);this.comboBox.items=t,this.comboBox.filteredItems=t}}},{kind:"method",key:"render",value:function(){var e;return(0,f.dy)(n||(n=(0,p.Z)([' <ha-combo-box .hass="','" .helper="','" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="','" .disabled="','" .required="','" .label="','" .placeholder="','" .renderer="','" @filter-changed="','" @opened-changed="','" @value-changed="','"> </ha-combo-box> '])),this.hass,this.helper,this.value,this.disabled,this.required,void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label,this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0,C,this._filterChanged,this._openedChanged,this._areaChanged)}},{kind:"method",key:"_filterChanged",value:function(e){var t,i=e.detail.value;if(i){var a=null===(t=this.comboBox.items)||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));this.noAdd||0!==(null==a?void 0:a.length)?this.comboBox.filteredItems=a:(this._suggestion=i,this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),picture:null}])}else this.comboBox.filteredItems=this.comboBox.items}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){var t=this;e.stopPropagation();var i,a=e.detail.value;("no_areas"===a&&(a=""),["add_new_suggestion","add_new"].includes(a))?(e.target.value=this._value,(0,Z.D9)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===a?this._suggestion:void 0,confirm:(i=(0,s.Z)((0,r.Z)().mark((function e(i){var a,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,g.Lo)(t.hass,{name:i});case 5:return a=e.sent,n=[].concat((0,o.Z)(Object.values(t.hass.areas)),[a]),t.comboBox.filteredItems=t._getAreas(n,Object.values(t.hass.devices),Object.values(t.hass.entities),t.includeDomains,t.excludeDomains,t.includeDeviceClasses,t.deviceFilter,t.entityFilter,t.noAdd,t.excludeAreas),e.next=10,t.updateComplete;case 10:return e.next=12,t.comboBox.updateComplete;case 12:t._setValue(a.area_id),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),(0,Z.Ys)(t,{title:t.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[2,15]])}))),function(e){return i.apply(this,arguments)}),cancel:function(){t._setValue(void 0),t._suggestion=void 0}})):a!==this._value&&this._setValue(a)}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,y.B)(t,"value-changed",{value:e}),(0,y.B)(t,"change")}),0)}}]}}),f.oi)},77576:function(e,t,i){var a,n,o,r,s,d,l=i(99312),u=i(81043),c=i(33368),h=i(71650),v=i(82390),p=i(69205),f=i(70906),m=i(91808),b=i(88771),k=i(47838),y=i(88962),_=i(29530),g=(i(63873),i(53947)),x=i(68144),Z=i(79932),C=i(30153),w=i(47181);i(10983),i(73366),i(3555);(0,g.hC)("vaadin-combo-box-item",(0,x.iv)(a||(a=(0,y.Z)([':host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}']))));(0,m.Z)([(0,Z.Mo)("ha-combo-box")],(function(e,t){var i,a,m=function(t){(0,p.Z)(a,t);var i=(0,f.Z)(a);function a(){var t;(0,h.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,v.Z)(t)),t}return(0,c.Z)(a)}(t);return{F:m,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,Z.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,Z.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:(a=(0,u.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,u.Z)((0,l.Z)().mark((function e(){var t,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(i=this._inputElement)||void 0===i||i.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){(0,b.Z)((0,k.Z)(m.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,x.dy)(n||(n=(0,y.Z)([' <vaadin-combo-box-light .itemValuePath="','" .itemIdPath="','" .itemLabelPath="','" .items="','" .value="','" .filteredItems="','" .dataProvider="','" .allowCustomValue="','" .disabled="','" .required="','" ',' @opened-changed="','" @filter-changed="','" @value-changed="','" attr-for-value="value"> <ha-textfield label="','" placeholder="','" ?disabled="','" ?required="','" validationMessage="','" .errorMessage="','" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" .suffix="','" .icon="','" .invalid="','" helper="','" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ',' <ha-svg-icon role="button" tabindex="-1" aria-label="','" aria-expanded="','" class="toggle-button" .path="','" @click="','"></ha-svg-icon> </vaadin-combo-box-light> '])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.dataProvider,this.allowCustomValue,this.disabled,this.required,(0,_.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,C.o)(this.label),(0,C.o)(this.placeholder),this.disabled,this.required,(0,C.o)(this.validationMessage),this.errorMessage,(0,x.dy)(o||(o=(0,y.Z)(['<div style="width:28px" role="none presentation"></div>']))),this.icon,this.invalid,(0,C.o)(this.helper),this.value?(0,x.dy)(r||(r=(0,y.Z)(['<ha-svg-icon role="button" tabindex="-1" aria-label="','" class="clear-button" .path="','" @click="','"></ha-svg-icon>'])),(0,C.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,C.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,x.dy)(s||(s=(0,y.Z)(["<ha-list-item> "," </ha-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,w.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this;e.stopPropagation();var i=e.detail.value;if(setTimeout((function(){t.opened=i}),0),(0,w.B)(this,"opened-changed",{value:e.detail.value}),i){var a=document.querySelector("vaadin-combo-box-overlay");a&&(a.setAttribute("required-vertical-space","0"),this._removeInert(a)),this._observeBody()}else{var n;null===(n=this._bodyMutationObserver)||void 0===n||n.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){var e=this;"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&e._removeInert(t)})),t.removedNodes.forEach((function(t){var i;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(i=e._overlayMutationObserver)||void 0===i||i.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t,i=this;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((function(e){e.forEach((function(e){if("inert"===e.attributeName){var t,a=e.target;if(a.inert)null===(t=i._overlayMutationObserver)||void 0===t||t.disconnect(),i._overlayMutationObserver=void 0,a.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,w.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this.value&&(0,w.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(d||(d=(0,y.Z)([":host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}"])))}}]}}),x.oi)},73366:function(e,t,i){i.d(t,{M:function(){return b}});var a,n=i(88962),o=i(33368),r=i(71650),s=i(82390),d=i(69205),l=i(70906),u=i(91808),c=i(88771),h=i(47838),v=i(61092),p=i(96762),f=i(68144),m=i(79932),b=(0,u.Z)([(0,m.Mo)("ha-list-item")],(function(e,t){var i=function(t){(0,d.Z)(a,t);var i=(0,l.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var n=arguments.length,o=new Array(n),d=0;d<n;d++)o[d]=arguments[d];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(a)}(t);return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,c.Z)((0,h.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[p.W,(0,f.iv)(a||(a=(0,n.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),v.K)},4454:function(e,t,i){i.r(t);var a,n,o,r=i(88962),s=i(99312),d=i(53709),l=i(81043),u=i(33368),c=i(71650),h=i(82390),v=i(69205),p=i(70906),f=i(91808),m=(i(53918),i(68144)),b=i(79932),k=i(47181),y=(i(9381),i(34821),i(11654));i(66737),(0,f.Z)([(0,b.Mo)("dialog-aliases")],(function(e,t){var i,f,_=function(t){(0,v.Z)(a,t);var i=(0,p.Z)(a);function a(){var t;(0,c.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,h.Z)(t)),t}return(0,u.Z)(a)}(t);return{F:_,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_aliases",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:(f=(0,l.Z)((0,s.Z)().mark((function e(t){var i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=t,this._error=void 0,this._aliases=(null===(i=this._params.aliases)||void 0===i?void 0:i.length)>0?(0,d.Z)(this._params.aliases).sort():[""],e.next=5,this.updateComplete;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,(0,k.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(0,m.dy)(a||(a=(0,r.Z)([' <ha-dialog open @closed="','" .heading="','"> <div> ',' <ha-aliases-editor .hass="','" .aliases="','" @value-changed="','"></ha-aliases-editor> </div> <mwc-button slot="secondaryAction" @click="','" .disabled="','"> ',' </mwc-button> <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,this.hass.localize("ui.dialogs.aliases.heading",{name:this._params.name}),this._error?(0,m.dy)(n||(n=(0,r.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.hass,this._aliases,this._aliasesChanged,this.closeDialog,this._submitting,this.hass.localize("ui.common.cancel"),this._updateAliases,this._submitting,this.hass.localize("ui.dialogs.aliases.save")):m.Ld}},{kind:"method",key:"_aliasesChanged",value:function(e){this._aliases=e.detail.value}},{kind:"method",key:"_updateAliases",value:(i=(0,l.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,t=this._aliases.map((function(e){return e.trim()})).filter((function(e){return e})),e.prev=2,e.next=5,this._params.updateAliases(t);case 5:this.closeDialog(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this._error=e.t0.message||this.hass.localize("ui.dialogs.aliases.unknown_error");case 11:return e.prev=11,this._submitting=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[2,8,11,14]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[y.Qx,y.yu,(0,m.iv)(o||(o=(0,r.Z)([".row{margin-bottom:8px}ha-textfield{display:block}ha-icon-button{display:block}mwc-button{margin-left:8px}#alias_input{margin-top:8px}.alias{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px;--mdc-icon-button-size:24px}"])))]}}]}}),m.oi)},19596:function(e,t,i){i.d(t,{sR:function(){return y}});var a=i(53709),n=i(71650),o=i(33368),r=i(88771),s=i(47838),d=i(69205),l=i(70906),u=i(40039),c=i(81563),h=i(38941),v=function e(t,i){var a,n,o=t._$AN;if(void 0===o)return!1;var r,s=(0,u.Z)(o);try{for(s.s();!(r=s.n()).done;){var d=r.value;null===(n=(a=d)._$AO)||void 0===n||n.call(a,i,!1),e(d,i)}}catch(l){s.e(l)}finally{s.f()}return!0},p=function(e){var t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===(null==i?void 0:i.size))},f=function(e){for(var t;t=e._$AM;e=t){var i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),k(t)}};function m(e){void 0!==this._$AN?(p(this),this._$AM=e,f(this)):this._$AM=e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(a))for(var o=i;o<a.length;o++)v(a[o],!1),p(a[o]);else null!=a&&(v(a,!1),p(a));else v(this,e)}var k=function(e){var t,i,a,n;e.type==h.pX.CHILD&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=b),null!==(i=(n=e)._$AQ)&&void 0!==i||(n._$AQ=m))},y=function(e){(0,d.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments))._$AN=void 0,e}return(0,o.Z)(i,[{key:"_$AT",value:function(e,t,a){(0,r.Z)((0,s.Z)(i.prototype),"_$AT",this).call(this,e,t,a),f(this),this.isConnected=e._$AU}},{key:"_$AO",value:function(e){var t,i,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),a&&(v(this,e),p(this))}},{key:"setValue",value:function(e){if((0,c.OR)(this._$Ct))this._$Ct._$AI(e,this);else{var t=(0,a.Z)(this._$Ct._$AH);t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),i}(h.Xe)}}]);
//# sourceMappingURL=89240-smLWwsRaTwM.js.map