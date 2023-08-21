"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[53890],{53890:(t,i,e)=>{e.a(t,(async(t,a)=>{try{e.r(i),e.d(i,{HaAutomationTrace:()=>H});var o=e(17463),s=e(34541),n=e(47838),r=e(68144),d=e(79932),c=e(83448),h=e(18848),l=e(7323),u=e(44583),_=e(47181),v=(e(81545),e(10983),e(71955),e(13126),e(8420)),k=e(78940),g=e(7719),m=(e(30946),e(19476)),p=e(55422),b=e(97389),f=e(26765),$=(e(60010),e(11654)),y=e(87744),w=t([u,v,k,g,p]);[u,v,k,g,p]=w.then?(await w)():w;const I="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",T="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",A="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",x="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",C="M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z",L="M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z",E="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";let H=(0,o.Z)([(0,d.Mo)("ha-automation-trace")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"automationId",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"automations",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_traces",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_runId",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_selected",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_trace",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_view",value:()=>"details"},{kind:"field",decorators:[(0,d.IO)("hat-script-graph")],key:"_graph",value:void 0},{kind:"method",key:"render",value:function(){var t;const i=this._entityId?this.hass.states[this._entityId]:void 0,e=this._graph,a=null==e?void 0:e.trackedNodes,o=null==e?void 0:e.renderedNodes,s=(null==i?void 0:i.attributes.friendly_name)||this._entityId;return r.dy` ${""} <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .header="${s}"> ${!this.narrow&&null!=i&&i.attributes.id?r.dy` <a class="trace-link" href="/config/automation/edit/${i.attributes.id}" slot="toolbar-icon"> <mwc-button> ${this.hass.localize("ui.panel.config.automation.trace.edit_automation")} </mwc-button> </a> `:""} <ha-button-menu slot="toolbar-icon"> <ha-icon-button slot="trigger" .label="${this.hass.localize("ui.common.menu")}" .path="${I}"></ha-icon-button> <mwc-list-item graphic="icon" .disabled="${!i}" @click="${this._showInfo}"> ${this.hass.localize("ui.panel.config.automation.editor.show_info")} <ha-svg-icon slot="graphic" .path="${A}"></ha-svg-icon> </mwc-list-item> ${null!=i&&i.attributes.id&&this.narrow?r.dy` <a class="trace-link" href="/config/automation/edit/${i.attributes.id}"> <mwc-list-item graphic="icon"> ${this.hass.localize("ui.panel.config.automation.trace.edit_automation")} <ha-svg-icon slot="graphic" .path="${x}"></ha-svg-icon> </mwc-list-item> </a> `:""} <li divider role="separator"></li> <mwc-list-item graphic="icon" @click="${this._refreshTraces}"> ${this.hass.localize("ui.panel.config.automation.trace.refresh")} <ha-svg-icon slot="graphic" .path="${E}"></ha-svg-icon> </mwc-list-item> <mwc-list-item graphic="icon" .disabled="${!this._trace}" @click="${this._downloadTrace}"> ${this.hass.localize("ui.panel.config.automation.trace.download_trace")} <ha-svg-icon slot="graphic" .path="${T}"></ha-svg-icon> </mwc-list-item> </ha-button-menu> <div class="toolbar"> ${this._traces&&this._traces.length>0?r.dy` <ha-icon-button .label="${this.hass.localize("ui.panel.config.automation.trace.older_trace")}" .path="${(0,y.HE)(this.hass)?L:C}" .disabled="${this._traces[this._traces.length-1].run_id===this._runId}" @click="${this._pickOlderTrace}"></ha-icon-button> <select .value="${this._runId}" @change="${this._pickTrace}"> ${(0,h.r)(this._traces,(t=>t.run_id),(t=>r.dy`<option value="${t.run_id}"> ${(0,u.E8)(new Date(t.timestamp.start),this.hass.locale)} </option>`))} </select> <ha-icon-button .label="${this.hass.localize("ui.panel.config.automation.trace.newer_trace")}" .path="${(0,y.HE)(this.hass)?C:L}" .disabled="${this._traces[0].run_id===this._runId}" @click="${this._pickNewerTrace}"></ha-icon-button> `:""} </div> ${void 0===this._traces?r.dy`<div class="container">Loading…</div>`:0===this._traces.length?r.dy`<div class="container">No traces found</div>`:void 0===this._trace?"":r.dy` <div class="main"> <div class="graph"> <hat-script-graph .trace="${this._trace}" .selected="${null===(t=this._selected)||void 0===t?void 0:t.path}" @graph-node-selected="${this._pickNode}"></hat-script-graph> </div> <div class="info"> <div class="tabs top"> ${[["details","Step Details"],["timeline","Trace Timeline"],["logbook","Related logbook entries"],["config","Automation Config"]].map((([t,i])=>r.dy` <button tabindex="0" .view="${t}" class="${(0,c.$)({active:this._view===t})}" @click="${this._showTab}"> ${i} </button> `))} ${this._trace.blueprint_inputs?r.dy` <button tabindex="0" .view="${"blueprint"}" class="${(0,c.$)({active:"blueprint"===this._view})}" @click="${this._showTab}"> Blueprint Config </button> `:""} </div> ${void 0===this._selected||void 0===this._logbookEntries||void 0===a?"":"details"===this._view?r.dy` <ha-trace-path-details .hass="${this.hass}" .narrow="${this.narrow}" .trace="${this._trace}" .selected="${this._selected}" .logbookEntries="${this._logbookEntries}" .trackedNodes="${a}" .renderedNodes="${o}"></ha-trace-path-details> `:"config"===this._view?r.dy` <ha-trace-config .hass="${this.hass}" .trace="${this._trace}"></ha-trace-config> `:"logbook"===this._view?r.dy` <ha-trace-logbook .hass="${this.hass}" .narrow="${this.narrow}" .trace="${this._trace}" .logbookEntries="${this._logbookEntries}"></ha-trace-logbook> `:"blueprint"===this._view?r.dy` <ha-trace-blueprint-config .hass="${this.hass}" .trace="${this._trace}"></ha-trace-blueprint-config> `:r.dy` <ha-trace-timeline .hass="${this.hass}" .trace="${this._trace}" .logbookEntries="${this._logbookEntries}" .selected="${this._selected}" @value-changed="${this._timelinePathPicked}"></ha-trace-timeline> `} </div> </div> `} </hass-subpage> `}},{kind:"method",key:"firstUpdated",value:function(t){if((0,s.Z)((0,n.Z)(e.prototype),"firstUpdated",this).call(this,t),!this.automationId)return;const i=new URLSearchParams(location.search);this._loadTraces(i.get("run_id")||void 0)}},{kind:"method",key:"updated",value:function(t){if((0,s.Z)((0,n.Z)(e.prototype),"updated",this).call(this,t),t.get("automationId")&&(this._traces=void 0,this._entityId=void 0,this._runId=void 0,this._trace=void 0,this._logbookEntries=void 0,this.automationId&&this._loadTraces()),t.has("_runId")&&this._runId&&(this._trace=void 0,this._logbookEntries=void 0,this._loadTrace()),t.has("automations")&&this.automationId&&!this._entityId){const t=this.automations.find((t=>t.attributes.id===this.automationId));this._entityId=null==t?void 0:t.entity_id}}},{kind:"method",key:"_pickOlderTrace",value:function(){const t=this._traces.findIndex((t=>t.run_id===this._runId));this._runId=this._traces[t+1].run_id,this._selected=void 0}},{kind:"method",key:"_pickNewerTrace",value:function(){const t=this._traces.findIndex((t=>t.run_id===this._runId));this._runId=this._traces[t-1].run_id,this._selected=void 0}},{kind:"method",key:"_pickTrace",value:function(t){this._runId=t.target.value,this._selected=void 0}},{kind:"method",key:"_pickNode",value:function(t){this._selected=t.detail}},{kind:"method",key:"_refreshTraces",value:function(){this._loadTraces()}},{kind:"method",key:"_loadTraces",value:async function(t){if(this._traces=await(0,b.lj)(this.hass,"automation",this.automationId),this._traces.reverse(),t&&(this._runId=t),this._runId&&!this._traces.some((t=>t.run_id===this._runId))){if(this._runId=void 0,this._selected=void 0,t){const t=new URLSearchParams(location.search);t.delete("run_id"),history.replaceState(null,"",`${location.pathname}?${t.toString()}`)}await(0,f.Ys)(this,{text:"Chosen trace is no longer available"})}!this._runId&&this._traces.length>0&&(this._runId=this._traces[0].run_id)}},{kind:"method",key:"_loadTrace",value:async function(){const t=await(0,b.mA)(this.hass,"automation",this.automationId,this._runId);this._logbookEntries=(0,l.p)(this.hass,"logbook")?await(0,p.sS)(this.hass,t.timestamp.start,t.context.id):[],this._trace=t}},{kind:"method",key:"_downloadTrace",value:function(){const t=document.createElement("a");t.download=`trace ${this._entityId} ${this._trace.timestamp.start}.json`,t.href=`data:application/json;charset=utf-8,${encodeURI(JSON.stringify({trace:this._trace,logbookEntries:this._logbookEntries},void 0,2))}`,t.click()}},{kind:"method",key:"_importTrace",value:function(){const t=prompt("Enter downloaded trace");t&&(localStorage.devTrace=t,this._loadLocalTrace(t))}},{kind:"method",key:"_loadLocalStorageTrace",value:function(){localStorage.devTrace&&this._loadLocalTrace(localStorage.devTrace)}},{kind:"method",key:"_loadLocalTrace",value:function(t){const i=JSON.parse(t);this._trace=i.trace,this._logbookEntries=i.logbookEntries}},{kind:"method",key:"_showTab",value:function(t){this._view=t.target.view}},{kind:"method",key:"_timelinePathPicked",value:function(t){const i=t.detail.value,e=this._graph.trackedNodes;e[i]&&(this._selected=e[i])}},{kind:"method",key:"_showInfo",value:function(){this.hass&&this._entityId&&(0,_.B)(this,"hass-more-info",{entityId:this._entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return[$.Qx,m.b,r.iv`.toolbar{display:flex;align-items:center;justify-content:center;font-size:20px;height:var(--header-height);padding:4px;background-color:var(--primary-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}.main{min-height:calc(100% - var(--header-height));display:flex;background-color:var(--card-background-color);direction:ltr}:host([narrow]) .main{height:auto;flex-direction:column}.container{padding:16px}.graph{border-right:1px solid var(--divider-color);overflow-x:auto;max-width:50%;padding-bottom:16px}:host([narrow]) .graph{max-width:100%;justify-content:center;display:flex}.info{flex:1;background-color:var(--card-background-color)}.trace-link{text-decoration:none}ha-trace-logbook{direction:var(--direction)}`]}}]}}),r.oi);a()}catch(t){a(t)}}))}}]);
//# sourceMappingURL=53890-8wmX5_5aqHc.js.map