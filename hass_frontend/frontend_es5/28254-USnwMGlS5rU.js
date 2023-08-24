"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[28254],{28254:function(e,t,a){a.r(t);var i,s,r=a(53709),n=a(68990),o=a(40039),l=a(88962),d=a(99312),c=a(81043),h=a(33368),u=a(71650),v=a(82390),f=a(69205),y=a(70906),m=a(91808),_=a(34541),k=a(47838),p=a(42355),g=a(70695),b=a(7106),w=a(77832),Z=a(15157),O=a(20088),S=a(79021),x=a(30443),z=a(68144),B=a(79932),C=a(26410),D=a(49684),j=a(65810),I=a(47181),E=a(38346),F=(a(640),a(3555),a(23681)),R=a(11654),q=a(44281),V=a(66477),T=a(26765),H={plugins:[w.Z,b.ZP],headerToolbar:!1,initialView:"timeGridWeek",editable:!0,selectable:!0,selectMirror:!0,selectOverlap:!1,eventOverlap:!1,allDaySlot:!1,height:"parent",locales:g.Z,firstDay:1,dayHeaderFormat:{weekday:"short",month:void 0,day:void 0}};(0,m.Z)([(0,B.Mo)("ha-schedule-form")],(function(e,t){var a,m,g=function(t){(0,f.Z)(i,t);var a=(0,y.Z)(i);function i(){var t;(0,u.Z)(this,i);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return t=a.call.apply(a,[this].concat(r)),e((0,v.Z)(t)),t}return(0,h.Z)(i)}(t);return{F:g,d:[{kind:"field",decorators:[(0,B.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,B.Cb)()],key:"new",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_monday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_tuesday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_wednesday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_thursday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_friday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_saturday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"_sunday",value:void 0},{kind:"field",decorators:[(0,B.SB)()],key:"calendar",value:void 0},{kind:"field",key:"_item",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"set",key:"item",value:function(e){this._item=e,e?(this._name=e.name||"",this._icon=e.icon||"",this._monday=e.monday||[],this._tuesday=e.tuesday||[],this._wednesday=e.wednesday||[],this._thursday=e.thursday||[],this._friday=e.friday||[],this._saturday=e.saturday||[],this._sunday=e.sunday||[]):(this._name="",this._icon="",this._monday=[],this._tuesday=[],this._wednesday=[],this._thursday=[],this._friday=[],this._saturday=[],this._sunday=[])}},{kind:"method",key:"focus",value:function(){var e=this;this.updateComplete.then((function(){var t;return null===(t=e.shadowRoot)||void 0===t||null===(t=t.querySelector("[dialogInitialFocus]"))||void 0===t?void 0:t.focus()}))}},{kind:"method",key:"connectedCallback",value:function(){var e=this;(0,_.Z)((0,k.Z)(g.prototype),"connectedCallback",this).call(this),this.updateComplete.then((function(){return e._attachObserver()}))}},{kind:"method",key:"disconnectedCallback",value:function(){this._resizeObserver&&this._resizeObserver.disconnect()}},{kind:"method",key:"_measureForm",value:function(){var e;this.shadowRoot.querySelector(".form")&&(null===(e=this.calendar)||void 0===e||e.updateSize())}},{kind:"method",key:"_attachObserver",value:(m=(0,c.Z)((0,d.Z)().mark((function e(){var t,a=this;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._resizeObserver){e.next=4;break}return e.next=3,(0,q.j)();case 3:this._resizeObserver=new ResizeObserver((0,E.D)((function(){return a._measureForm()}),250,!1));case 4:if(t=this.shadowRoot.querySelector(".form")){e.next=7;break}return e.abrupt("return");case 7:this._resizeObserver.observe(t);case 8:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{kind:"method",key:"render",value:function(){return this.hass?(0,z.dy)(i||(i=(0,l.Z)([' <div class="form"> <ha-textfield .value="','" .configValue="','" @input="','" .label="','" autoValidate required .validationMessage="','" dialogInitialFocus></ha-textfield> <ha-icon-picker .hass="','" .value="','" .configValue="','" @value-changed="','" .label="','"></ha-icon-picker> <div id="calendar"></div> </div> '])),this._name,"name",this._valueChanged,this.hass.localize("ui.dialogs.helper_settings.generic.name"),this.hass.localize("ui.dialogs.helper_settings.required_error_msg"),this.hass,this._icon,"icon",this._valueChanged,this.hass.localize("ui.dialogs.helper_settings.generic.icon")):z.Ld}},{kind:"method",key:"willUpdate",value:function(e){if((0,_.Z)((0,k.Z)(g.prototype),"willUpdate",this).call(this,e),this.calendar){(e.has("_sunday")||e.has("_monday")||e.has("_tuesday")||e.has("_wednesday")||e.has("_thursday")||e.has("_friday")||e.has("_saturday")||e.has("calendar"))&&(this.calendar.removeAllEventSources(),this.calendar.addEventSource(this._events));var t=e.get("hass");t&&t.language!==this.hass.language&&this.calendar.setOption("locale",this.hass.language)}}},{kind:"method",key:"firstUpdated",value:function(){var e=this,t=Object.assign(Object.assign({},H),{},{locale:this.hass.language,firstDay:(0,C.Bt)(this.hass.locale),slotLabelFormat:{hour:"numeric",minute:void 0,hour12:(0,j.y)(this.hass.locale),meridiem:!!(0,j.y)(this.hass.locale)&&"narrow"},eventTimeFormat:{hour:(0,j.y)(this.hass.locale)?"numeric":"2-digit",minute:(0,j.y)(this.hass.locale)?"numeric":"2-digit",hour12:(0,j.y)(this.hass.locale),meridiem:!!(0,j.y)(this.hass.locale)&&"narrow"}});t.eventClick=function(t){return e._handleEventClick(t)},t.select=function(t){return e._handleSelect(t)},t.eventResize=function(t){return e._handleEventResize(t)},t.eventDrop=function(t){return e._handleEventDrop(t)},this.calendar=new p.f(this.shadowRoot.getElementById("calendar"),t),this.calendar.render(),this.updateComplete.then((function(){return window.setTimeout((function(){e.calendar.updateSize()}),500)}))}},{kind:"get",key:"_events",value:function(){var e,t=this,a=[],i=(0,o.Z)(F.KY.entries());try{var s=function(){var i=(0,n.Z)(e.value,2),s=i[0],r=i[1];if(!t["_".concat(r)].length)return"continue";t["_".concat(r)].forEach((function(e,i){var n=(0,Z.Z)(new Date,s);(0,O.Z)(n,new Date,{weekStartsOn:(0,C.Bt)(t.hass.locale)})||(n=(0,S.Z)(n,-7));var o=new Date(n),l=e.from.split(":");o.setHours(parseInt(l[0]),parseInt(l[1]),0,0);var d=new Date(n),c=e.to.split(":");d.setHours(parseInt(c[0]),parseInt(c[1]),0,0),a.push({id:"".concat(r,"-").concat(i),start:o.toISOString(),end:d.toISOString()})}))};for(i.s();!(e=i.n()).done;)s()}catch(r){i.e(r)}finally{i.f()}return a}},{kind:"method",key:"_handleSelect",value:function(e){var t=e.start,a=e.end,i=F.KY[t.getDay()],s=(0,r.Z)(this["_".concat(i)]),n=Object.assign({},this._item),o=(0,D.Zs)(a,Object.assign(Object.assign({},this.hass.locale),{},{time_zone:V.c_.local}),this.hass.config);s.push({from:(0,D.Zs)(t,Object.assign(Object.assign({},this.hass.locale),{},{time_zone:V.c_.local}),this.hass.config),to:(0,x.Z)(t,a)&&"0:00"!==o?o:"24:00"}),n[i]=s,(0,I.B)(this,"value-changed",{value:n}),(0,x.Z)(t,a)||this.calendar.unselect()}},{kind:"method",key:"_handleEventResize",value:function(e){var t=e.event,a=t.id,i=t.start,s=t.end,r=a.split("-"),o=(0,n.Z)(r,2),l=o[0],d=o[1],c=this["_".concat(l)][parseInt(d)],h=Object.assign({},this._item),u=(0,D.Zs)(s,this.hass.locale,this.hass.config);h[l][d]={from:c.from,to:(0,x.Z)(i,s)&&"0:00"!==u?u:"24:00"},(0,I.B)(this,"value-changed",{value:h}),(0,x.Z)(i,s)||e.revert()}},{kind:"method",key:"_handleEventDrop",value:function(e){var t=e.event,a=t.id,i=t.start,s=t.end,o=a.split("-"),l=(0,n.Z)(o,2),d=l[0],c=l[1],h=F.KY[i.getDay()],u=Object.assign({},this._item),v=(0,D.Zs)(s,this.hass.locale,this.hass.config),f={from:(0,D.Zs)(i,this.hass.locale,this.hass.config),to:(0,x.Z)(i,s)&&"0:00"!==v?v:"24:00"};if(h===d)u[d][c]=f;else{u[d].splice(c,1);var y=(0,r.Z)(this["_".concat(h)]);y.push(f),u[h]=y}(0,I.B)(this,"value-changed",{value:u}),(0,x.Z)(i,s)||e.revert()}},{kind:"method",key:"_handleEventClick",value:(a=(0,c.Z)((0,d.Z)().mark((function e(t){var a,i,s,o,l,c;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.g7)(this,{title:this.hass.localize("ui.dialogs.helper_settings.schedule.delete"),text:this.hass.localize("ui.dialogs.helper_settings.schedule.confirm_delete"),destructive:!0,confirmText:this.hass.localize("ui.common.delete")});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:a=t.event.id.split("-"),i=(0,n.Z)(a,2),s=i[0],o=i[1],l=(0,r.Z)(this["_".concat(s)]),c=Object.assign({},this._item),l.splice(parseInt(o),1),c[s]=l,(0,I.B)(this,"value-changed",{value:c});case 10:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{kind:"method",key:"_valueChanged",value:function(e){var t;if(this.new||this._item){e.stopPropagation();var a=e.target.configValue,i=(null===(t=e.detail)||void 0===t?void 0:t.value)||e.target.value;if(this["_".concat(a)]!==i){var s=Object.assign({},this._item);i?s[a]=i:delete s[a],(0,I.B)(this,"value-changed",{value:s})}}}},{kind:"get",static:!0,key:"styles",value:function(){return[R.Qx,(0,z.iv)(s||(s=(0,l.Z)(['.form{color:var(--primary-text-color)}ha-textfield{display:block;margin:8px 0}#calendar{margin:8px 0;height:450px;width:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none;--fc-border-color:var(--divider-color);--fc-event-border-color:var(--divider-color)}.fc-v-event .fc-event-time{white-space:inherit}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--divider-color);border-radius:var(--mdc-shape-small,4px)}.fc-scrollgrid-section-header td{border:none}:host([narrow]) .fc-scrollgrid-sync-table{overflow:hidden}table.fc-scrollgrid-sync-table tbody tr:first-child .fc-daygrid-day-top{padding-top:0}.fc-scroller::-webkit-scrollbar{width:.4rem;height:.4rem}.fc-scroller::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.fc-scroller{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}.fc-timegrid-event-short .fc-event-time:after{content:""}a{color:inherit!important}th.fc-col-header-cell.fc-day{background-color:var(--table-header-background-color);color:var(--primary-text-color);font-size:11px;font-weight:700;text-transform:uppercase}'])))]}}]}}),z.oi)}}]);
//# sourceMappingURL=28254-USnwMGlS5rU.js.map