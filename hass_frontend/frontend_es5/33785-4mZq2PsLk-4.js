"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[33785],{1528:function(e,t,i){var n,a,o,r=i(99312),s=i(81043),c=i(88962),l=i(33368),d=i(71650),h=i(82390),u=i(69205),f=i(70906),p=i(91808),y=i(68144),m=i(79932),v=i(18848),g=i(47181),k=(i(74535),i(10983),i(70651)),_=i(98116);(0,p.Z)([(0,m.Mo)("hui-entity-editor")],(function(e,t){var i,p,b=function(t){(0,u.Z)(n,t);var i=(0,f.Z)(n);function n(){var t;(0,d.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,h.Z)(t)),t}return(0,l.Z)(n)}(t);return{F:b,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"label",value:void 0},{kind:"field",key:"_entityKeys",value:function(){return new WeakMap}},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){this._destroySortable()}},{kind:"method",key:"_getKey",value:function(e){return this._entityKeys.has(e)||this._entityKeys.set(e,Math.random().toString()),this._entityKeys.get(e)}},{kind:"method",key:"render",value:function(){var e=this;return this.entities?(0,y.dy)(n||(n=(0,c.Z)([" <h3> ",' </h3> <div class="entities"> ',' </div> <ha-entity-picker class="add-entity" .hass="','" .entityFilter="','" @value-changed="','"></ha-entity-picker> '])),this.label||this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")",(0,v.r)(this.entities,(function(t){return e._getKey(t)}),(function(t,i){return(0,y.dy)(a||(a=(0,c.Z)([' <div class="entity" data-entity-id="','"> <div class="handle"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <ha-entity-picker .hass="','" .value="','" .index="','" .entityFilter="','" @value-changed="','" allow-custom-entity></ha-entity-picker> </div> '])),t.entity,"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",e.hass,t.entity,i,e.entityFilter,e._valueChanged)})),this.hass,this.entityFilter,this._addEntity):y.Ld}},{kind:"method",key:"firstUpdated",value:function(){this._createSortable()}},{kind:"method",key:"_createSortable",value:(p=(0,s.Z)((0,r.Z)().mark((function e(){var t,i=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.F)();case 2:t=e.sent,this._sortable=new t(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",dataIdAttr:"data-entity-id",onChoose:function(e){e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:function(e){e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),i._entityMoved(e)}});case 4:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_addEntity",value:(i=(0,s.Z)((0,r.Z)().mark((function e(t){var i,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(i=t.detail.value)){e.next=3;break}return e.abrupt("return");case 3:n=this.entities.concat({entity:i}),t.target.value="",(0,g.B)(this,"entities-changed",{entities:n});case 6:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_entityMoved",value:function(e){if(e.oldIndex!==e.newIndex){var t=this.entities.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),(0,g.B)(this,"entities-changed",{entities:t})}}},{kind:"method",key:"_valueChanged",value:function(e){var t=e.detail.value,i=e.target.index,n=this.entities.concat();""===t||void 0===t?n.splice(i,1):n[i]=Object.assign(Object.assign({},n[i]),{},{entity:t}),(0,g.B)(this,"entities-changed",{entities:n})}},{kind:"get",static:!0,key:"styles",value:function(){return[k.Y,(0,y.iv)(o||(o=(0,c.Z)(["ha-entity-picker{margin-top:8px}.add-entity{display:block;margin-left:31px;margin-inline-start:31px;margin-inline-end:initial;direction:var(--direction)}.entity{display:flex;align-items:center}.entity .handle{padding-right:8px;cursor:move;padding-inline-end:8px;padding-inline-start:initial;direction:var(--direction)}.entity .handle>*{pointer-events:none}.entity ha-entity-picker{flex-grow:1}"])))]}}]}}),y.oi)},45890:function(e,t,i){i.d(t,{A:function(){return o}});var n,a=i(88962),o=(0,i(68144).iv)(n||(n=(0,a.Z)([".card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}"])))},33785:function(e,t,i){i.r(t),i.d(t,{HuiPictureGlanceCardEditor:function(){return x}});var n,a=i(88962),o=i(33368),r=i(71650),s=i(82390),c=i(69205),l=i(70906),d=i(91808),h=i(68144),u=i(79932),f=i(93088),p=i(47181),y=(i(68331),i(1528),i(14748)),m=i(85677),v=i(98346),g=i(30232),k=i(45890),_=(0,f.f0)(v.I,(0,f.Ry)({title:(0,f.jt)((0,f.Z_)()),entity:(0,f.jt)((0,f.Z_)()),image:(0,f.jt)((0,f.Z_)()),image_entity:(0,f.jt)((0,f.Z_)()),camera_image:(0,f.jt)((0,f.Z_)()),camera_view:(0,f.jt)((0,f.Z_)()),aspect_ratio:(0,f.jt)((0,f.Z_)()),tap_action:(0,f.jt)(m.C),hold_action:(0,f.jt)(m.C),entities:(0,f.IX)(g.K),theme:(0,f.jt)((0,f.Z_)())})),b=[{name:"title",selector:{text:{}}},{name:"image",selector:{text:{}}},{name:"image_entity",selector:{entity:{domain:"image"}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"entity",selector:{entity:{}}},{name:"theme",selector:{theme:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}],x=(0,d.Z)([(0,u.Mo)("hui-picture-glance-card-editor")],(function(e,t){var i=function(t){(0,c.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,f.hu)(e,_),this._config=e,this._configEntities=(0,y.Q)(e.entities)}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"toggle"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return h.Ld;var e=Object.assign({camera_view:"auto"},this._config);return(0,h.dy)(n||(n=(0,a.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <div class="card-config"> <hui-entity-editor .hass="','" .entities="','" @entities-changed="','"></hui-entity-editor> </div> '])),this.hass,e,b,this._computeLabelCallback,this._valueChanged,this.hass,this._configEntities,this._changed)}},{kind:"method",key:"_valueChanged",value:function(e){(0,p.B)(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_changed",value:function(e){this._config&&this.hass&&(e.detail&&e.detail.entities&&(this._config=Object.assign(Object.assign({},this._config),{},{entities:e.detail.entities}),this._configEntities=(0,y.Q)(this._config.entities)),(0,p.B)(this,"config-changed",{config:this._config}))}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){switch(t.name){case"theme":case"tap_action":case"hold_action":return"".concat(e.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(t.name))," (").concat(e.hass.localize("ui.panel.lovelace.editor.card.config.optional"),")");case"entity":return e.hass.localize("ui.panel.lovelace.editor.card.picture-glance.state_entity");default:return e.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(t.name))}}}},{kind:"field",static:!0,key:"styles",value:function(){return k.A}}]}}),h.oi)},14748:function(e,t,i){function n(e){return e.map((function(e){return"string"==typeof e?{entity:e}:e}))}i.d(t,{Q:function(){return n}})},98346:function(e,t,i){i.d(t,{I:function(){return a}});var n=i(93088),a=(0,n.Ry)({type:(0,n.Z_)(),view_layout:(0,n.Yj)()})},70651:function(e,t,i){i.d(t,{Y:function(){return o}});var n,a=i(88962),o=(0,i(68144).iv)(n||(n=(0,a.Z)(["#sortable a:nth-of-type(2n) paper-icon-item{animation-name:keyframes1;animation-iteration-count:infinite;transform-origin:50% 10%;animation-delay:-.75s;animation-duration:.25s}#sortable a:nth-of-type(2n-1) paper-icon-item{animation-name:keyframes2;animation-iteration-count:infinite;animation-direction:alternate;transform-origin:30% 5%;animation-delay:-.5s;animation-duration:.33s}#sortable a{height:48px;display:flex}#sortable{outline:0;display:block!important}.hidden-panel{display:flex!important}.sortable-fallback{display:none}.sortable-ghost{opacity:.4}.sortable-fallback{opacity:0}@keyframes keyframes1{0%{transform:rotate(-1deg);animation-timing-function:ease-in}50%{transform:rotate(1.5deg);animation-timing-function:ease-out}}@keyframes keyframes2{0%{transform:rotate(1deg);animation-timing-function:ease-in}50%{transform:rotate(-1.5deg);animation-timing-function:ease-out}}.hide-panel,.show-panel{display:none;position:absolute;top:0;right:4px;--mdc-icon-button-size:40px}:host([rtl]) .show-panel{right:initial;left:4px}.hide-panel{top:4px;right:8px}:host([rtl]) .hide-panel{right:initial;left:8px}:host([expanded]) .hide-panel{display:block}:host([expanded]) .show-panel{display:inline-flex}paper-icon-item.hidden-panel,paper-icon-item.hidden-panel ha-icon[slot=item-icon],paper-icon-item.hidden-panel span{color:var(--secondary-text-color);cursor:pointer}"])))},98116:function(e,t,i){i.d(t,{F:function(){return r}});var n,a=i(99312),o=i(81043),r=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}return e.next=3,Promise.all([i.e(56087),i.e(32811)]).then(i.bind(i,32811));case 3:n=e.sent.default;case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33785-4mZq2PsLk-4.js.map