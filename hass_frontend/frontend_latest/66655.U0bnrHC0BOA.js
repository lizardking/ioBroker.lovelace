export const id=66655;export const ids=[66655];export const modules={55642:(e,t,n)=>{n.d(t,{h:()=>o});var i=n(68144),a=n(57835);const o=(0,a.XM)(class extends a.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==a.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,n]){return this._element&&this._element.localName===t?(n&&Object.entries(n).forEach((([e,t])=>{this._element[e]=t})),i.Jb):this.render(t,n)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},65649:(e,t,n)=>{n.r(t),n.d(t,{HuiIframeCardEditor:()=>h});var i=n(17463),a=n(68144),o=n(79932),r=n(38768),s=n(47181),c=(n(68331),n(98346));const l=(0,r.f0)(c.I,(0,r.Ry)({title:(0,r.jt)((0,r.Z_)()),url:(0,r.jt)((0,r.Z_)()),aspect_ratio:(0,r.jt)((0,r.Z_)()),allow_open_top_navigation:(0,r.jt)((0,r.O7)())})),d=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"url",required:!0,selector:{text:{}}},{name:"aspect_ratio",selector:{text:{}}}]}];let h=(0,i.Z)([(0,o.Mo)("hui-iframe-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,r.hu)(e,l),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${d}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:a.Ld}},{kind:"method",key:"_valueChanged",value:function(e){(0,s.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),a.oi)},98346:(e,t,n)=>{n.d(t,{I:()=>a});var i=n(38768);const a=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)()})}};
//# sourceMappingURL=66655.U0bnrHC0BOA.js.map