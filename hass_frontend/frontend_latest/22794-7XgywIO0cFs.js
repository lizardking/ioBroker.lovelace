"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[22794],{70390:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(93752);function a(){return(0,s.Z)(Date.now())}},61334:(t,e,i)=>{function s(){var t=new Date,e=t.getFullYear(),i=t.getMonth(),s=t.getDate(),a=new Date(0);return a.setFullYear(e,i,s-1),a.setHours(23,59,59,999),a}i.d(e,{Z:()=>s})},27088:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(59429);function a(){return(0,s.Z)(Date.now())}},83008:(t,e,i)=>{function s(){var t=new Date,e=t.getFullYear(),i=t.getMonth(),s=t.getDate(),a=new Date(0);return a.setFullYear(e,i,s-1),a.setHours(0,0,0,0),a}i.d(e,{Z:()=>s})},92306:(t,e,i)=>{i.d(e,{v:()=>s});const s=(t,e)=>{const i={};for(const s of t){const t=e(s);t in i?i[t].push(s):i[t]=[s]}return i}},62336:(t,e,i)=>{i.d(e,{Q:()=>u});var s=i(17463),a=i(34541),o=i(47838),n=i(68144),r=i(79932),l=i(83448),d=i(47501),c=i(50239),h=i(87744);const u=3e5;(0,s.Z)([(0,r.Mo)("ha-chart-base")],(function(t,e){class s extends e{constructor(...e){super(...e),t(this)}}return{F:s,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,a.Z)((0,o.Z)(s.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,o.Z)(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,o.Z)(s.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,s;return n.dy` ${!0===(null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e||null===(i=e.legend)||void 0===i?void 0:i.display)?n.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((t,e)=>n.dy`<li .datasetIndex="${e}" @click="${this._legendClick}" class="${(0,l.$)({hidden:this._hiddenDatasets.has(e)})}" .title="${t.label}"> <div class="bullet" style="${(0,d.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}"></div> <div class="label">${t.label}</div> </li>`))} </ul> </div>`:""} <div class="chartContainer" style="${(0,d.V)({height:`${null!==(s=this.height)&&void 0!==s?s:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden","padding-left":`${(0,h.HE)(this.hass)?0:this.paddingYAxis}px`,"padding-right":`${(0,h.HE)(this.hass)?this.paddingYAxis:0}px`})}"> <canvas></canvas> ${this._tooltip?n.dy`<div class="chartTooltip ${(0,l.$)({[this._tooltip.yAlign]:!0})}" style="${(0,d.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?n.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((t,e)=>n.dy`<li> <div class="bullet" style="${(0,d.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}"></div> ${t.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?n.dy`<div class="footer"> ${this._tooltip.footer.map((t=>n.dy`${t}<br>`))} </div>`:""} </div>`:""} </div> `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(53430),i.e(1671),i.e(51468),i.e(55928)]).then(i.bind(i,55928))).Chart,s=getComputedStyle(this);e.defaults.borderColor=s.getPropertyValue("--divider-color"),e.defaults.color=s.getPropertyValue("--secondary-text-color"),e.defaults.font.family=s.getPropertyValue("--mdc-typography-body1-font-family")||s.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i,s,a;return{...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(i=e.plugins)||void 0===i?void 0:i.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(s=this.options)||void 0===s||null===(a=s.plugins)||void 0===a?void 0:a.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t,e;return[...this.plugins||[],{id:"afterRenderHook",afterRender:t=>{var e;const i=t.height-(null!==(e=this._chartHeight)&&void 0!==e?e:0);(!this._chartHeight||i>0||i<-12)&&(this._chartHeight=t.height)},legend:{...null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,c.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}:this._tooltip=void 0}},{kind:"field",key:"updateChart",value(){return t=>{this.chart&&this.chart.update(t)}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),n.oi)},81582:(t,e,i)=>{i.d(e,{DJ:()=>o,LZ:()=>s,Nn:()=>c,Ny:()=>h,Q4:()=>a,RQ:()=>r,SO:()=>l,T0:()=>u,iJ:()=>d,pB:()=>n});const s=32143==i.j?["migration_error","setup_error","setup_retry"]:null,a=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(t,e,i)=>{const s={type:"config_entries/subscribe"};return i&&i.type&&(s.type_filter=i.type),t.connection.subscribeMessage((t=>e(t)),s)},n=(t,e)=>{const i={};return e&&(e.type&&(i.type_filter=e.type),e.domain&&(i.domain=e.domain)),t.callWS({type:"config_entries/get",...i})},r=(t,e)=>t.callWS({type:"config_entries/get_single",entry_id:e}),l=(t,e,i)=>t.callWS({type:"config_entries/update",entry_id:e,...i}),d=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),c=(t,e)=>t.callApi("POST",`config/config_entries/entry/${e}/reload`),h=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:"user"}),u=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:null})},55424:(t,e,i)=>{i.d(e,{Bm:()=>f,Cj:()=>x,G9:()=>B,Jj:()=>D,KU:()=>C,P:()=>k,UB:()=>E,ZC:()=>S,_Z:()=>Z,b:()=>V,gy:()=>T,iK:()=>b,jB:()=>L,o1:()=>v,rl:()=>m,vE:()=>R,xZ:()=>w,yH:()=>P});var s=i(24112),a=i(32182),o=i(79021),n=i(39244),r=i(27088),l=i(83008),d=i(70390),c=i(61334),h=i(59699),u=i(97330),p=i(92306),y=i(81582),g=i(38014);const _=[],f=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),v=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),b=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),m=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),k=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),C=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),x=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),w=t=>t.callWS({type:"energy/info"}),T=async t=>(await t.loadBackendTranslation("issues","energy"),t.callWS({type:"energy/validate"})),S=t=>t.callWS({type:"energy/get_prefs"}),Z=async(t,e)=>{const i=t.callWS({type:"energy/save_prefs",...e});return H(t),i},$=async(t,e,i,s,a,o="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==a?void 0:a.toISOString(),energy_statistic_ids:i,co2_statistic_id:s,period:o}),D=t=>(0,p.v)(t.energy_sources,(t=>t.type)),P=(t,e,i)=>{const s=[];for(const a of t.energy_sources)if(!i||i.includes(a.type))if("solar"!==a.type)if("gas"!==a.type&&"water"!==a.type)if("battery"!==a.type){for(const t of a.flow_from){s.push(t.stat_energy_from),t.stat_cost&&s.push(t.stat_cost);const i=e.cost_sensors[t.stat_energy_from];i&&s.push(i)}for(const t of a.flow_to){s.push(t.stat_energy_to),t.stat_compensation&&s.push(t.stat_compensation);const i=e.cost_sensors[t.stat_energy_to];i&&s.push(i)}}else s.push(a.stat_energy_from),s.push(a.stat_energy_to);else{s.push(a.stat_energy_from),a.stat_cost&&s.push(a.stat_cost);const t=e.cost_sensors[a.stat_energy_from];t&&s.push(t)}else s.push(a.stat_energy_from);return s},H=t=>{_.forEach((e=>{const i=E(t,{key:e});i.clearPrefs(),i._active&&i.refresh()}))},E=(t,e={})=>{let i="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${e.key}`}if(t.connection[i])return t.connection[i];_.push(e.key);const p=(0,u._)(t.connection,i,(async()=>{if(p.prefs||(p.prefs=await S(t)),p._refreshTimeout&&clearTimeout(p._refreshTimeout),p._active&&(!p.end||p.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),p._refreshTimeout=window.setTimeout((()=>p.refresh()),t.getTime()-Date.now())}return(async(t,e,i,r,l)=>{const[d,c]=await Promise.all([(0,y.pB)(t,{domain:"co2signal"}),w(t)]),h=d.length?d[0]:void 0;let u;if(h)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const i=t.states[e.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){u=i.entity_id;break}}const p=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)p.push(e.stat_energy_from);const _=P(e,c,["grid","solar","battery","gas"]),f=P(e,c,["water"]),v=[..._,...f],b=(0,s.Z)(r||new Date,i),m=b>35?"month":b>2?"day":"hour",k=t.config.unit_system.length||"",C={energy:"kWh",volume:"km"===k?"m³":"ft³"},x={volume:"km"===k?"L":"gal"},T=_.length?(0,g.dL)(t,i,r,_,m,C,["change"]):{},S=f.length?(0,g.dL)(t,i,r,f,m,x,["change"]):{};let Z,D,H,E,L,W={},B={};l&&(D=b>27&&b<32?(0,a.Z)(i,-1):(0,o.Z)(i,-1*(b+1)),H=(0,n.Z)(i,-1),_.length&&(W=(0,g.dL)(t,D,H,_,m,C,["change"])),f.length&&(B=(0,g.dL)(t,D,H,f,m,x,["change"]))),void 0!==u&&(E=$(t,i,p,u,r,b>35?"month":b>2?"day":"hour"),l&&(L=$(t,D,p,u,H,b>35?"month":b>2?"day":"hour")));const R={},V=v.length?(0,g.Py)(t,v):[],[z,M,O,j,F,A,U]=await Promise.all([T,S,W,B,V,E,L]),Y={...z,...M};return l&&(Z={...O,...j}),v.length&&F.forEach((t=>{R[t.statistic_id]=t})),{start:i,end:r,startCompare:D,endCompare:H,info:c,prefs:e,stats:Y,statsMetadata:R,statsCompare:Z,co2SignalConfigEntry:h,co2SignalEntity:u,fossilEnergyConsumption:A,fossilEnergyConsumptionCompare:U}})(t,p.prefs,p.start,p.end,p.compare)})),f=p.subscribe;p.subscribe=t=>{const e=f(t);return p._active++,()=>{p._active--,p._active<1&&(clearTimeout(p._refreshTimeout),p._refreshTimeout=void 0),e()}},p._active=0,p.prefs=e.prefs;const v=new Date;p.start=v.getHours()>0?(0,r.Z)():(0,l.Z)(),p.end=v.getHours()>0?(0,d.Z)():(0,c.Z)();const b=()=>{p._updatePeriodTimeout=window.setTimeout((()=>{p.start=(0,r.Z)(),p.end=(0,d.Z)(),b()}),(0,h.Z)((0,d.Z)(),1).getTime()-Date.now())};return b(),p.clearPrefs=()=>{p.prefs=void 0},p.setPeriod=(t,e)=>{var i;p.start=t,p.end=e,p.start.getTime()!==(0,r.Z)().getTime()||(null===(i=p.end)||void 0===i?void 0:i.getTime())!==(0,d.Z)().getTime()||p._updatePeriodTimeout?p._updatePeriodTimeout&&(clearTimeout(p._updatePeriodTimeout),p._updatePeriodTimeout=void 0):b()},p.setCompare=t=>{p.compare=t},p},L=t=>t.callWS({type:"energy/solar_forecast"}),W=["volume","energy"],B=(t,e={},i)=>{for(const s of t.energy_sources){if("gas"!==s.type)continue;if(i&&i===s.stat_energy_from)continue;const t=e[s.stat_energy_from];if(W.includes(null==t?void 0:t.unit_class))return t.unit_class}},R=(t,e,i={})=>{const s=B(e,i);if(void 0!==s)return"energy"===s?"kWh":"km"===t.config.unit_system.length?"m³":"ft³"},V=t=>"km"===t.config.unit_system.length?"L":"gal"},73826:(t,e,i)=>{i.d(e,{f:()=>r});var s=i(17463),a=i(34541),o=i(47838),n=i(79932);const r=t=>(0,s.Z)(null,(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,o.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,a.Z)((0,o.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,a.Z)((0,o.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},22794:(t,e,i)=>{i.r(e),i.d(e,{HuiEnergyDevicesGraphCard:()=>_});var s=i(17463),a=i(5287),o=i(24112),n=i(68144),r=i(79932),l=i(83448),d=i(14516),c=i(55070),h=i(47181),u=i(18457),p=(i(62336),i(22098),i(55424)),y=i(38014),g=i(73826);let _=(0,s.Z)([(0,r.Mo)("hui-energy-devices-graph-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,r.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,p.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._data=t,this._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){var t,e;return this.hass&&this._config?n.dy` <ha-card> ${this._config.title?n.dy`<h1 class="card-header">${this._config.title}</h1>`:""} <div class="content ${(0,l.$)({"has-header":!!this._config.title})}"> <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._createOptions(this.hass.locale)}" .height="${28*((null===(t=this._chartData)||void 0===t||null===(e=t.datasets[0])||void 0===e?void 0:e.data.length)||0)+50}" chart-type="bar"></ha-chart-base> </div> </ha-card> `:n.Ld}},{kind:"field",key:"_createOptions",value(){return(0,d.Z)((t=>({parsing:!1,animation:!1,responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{y:{type:"category",ticks:{autoSkip:!1,callback:t=>{var e;const i=this._chartData.datasets[0].data[t].y;return(0,y.Kd)(this.hass,i,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[i])}}},x:{title:{display:!0,text:"kWh"}}},elements:{bar:{borderWidth:1.5,borderRadius:4}},plugins:{tooltip:{mode:"nearest",callbacks:{title:t=>{var e;const i=t[0].label;return(0,y.Kd)(this.hass,i,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[i])},label:e=>`${e.dataset.label}: ${(0,u.uf)(e.parsed.x,t)} kWh`}}},locale:(0,u.Hd)(this.hass.locale),onClick:t=>{var e,i,s;const o=t.chart,n=(0,a.z)(t,o),r=Math.abs(o.scales.y.getValueForPixel(n.y));(0,h.B)(this,"hass-more-info",{entityId:null===(e=this._chartData)||void 0===e||null===(i=e.datasets[0])||void 0===i||null===(s=i.data[r])||void 0===s?void 0:s.y})}})))}},{kind:"method",key:"_getStatistics",value:async function(t){var e;const i=(0,o.Z)(t.end||new Date,t.start),s=t.prefs.device_consumption.map((t=>t.stat_consumption)),a=i>35?"month":i>2?"day":"hour",n={energy:"kWh",volume:"km"===(this.hass.config.unit_system.length||"")?"m³":"ft³"},r=await(0,y.dL)(this.hass,t.start,t.end,s,a,n,["change"]);let l;t.startCompare&&t.endCompare&&(l=await(0,y.dL)(this.hass,t.startCompare,t.endCompare,s,a,n,["change"]));const d=[],h=[],u=[],p=[],g=[],_=[],f=[{label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),borderColor:u,backgroundColor:g,data:d,barThickness:l?10:20}];l&&f.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),borderColor:p,backgroundColor:_,data:h,barThickness:10}),t.prefs.device_consumption.forEach(((t,e)=>{const i=t.stat_consumption in r&&(0,y.Kj)(r[t.stat_consumption])||0;if(d.push({y:t.stat_consumption,x:i,idx:e}),l){const i=t.stat_consumption in l&&(0,y.Kj)(l[t.stat_consumption])||0;h.push({y:t.stat_consumption,x:i,idx:e})}})),d.sort(((t,e)=>e.x-t.x)),d.forEach((t=>{const e=(0,c.Eu)(t.idx);u.push(e),g.push(e+"7F")})),h.forEach((t=>{const e=(0,c.Eu)(t.idx);p.push(e+"7F"),_.push(e+"32")})),this._chartData={datasets:f},await this.updateComplete,null===(e=this._chart)||void 0===e||e.updateChart("none")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}ha-chart-base{--chart-max-height:none}`}}]}}),(0,g.f)(n.oi))}}]);
//# sourceMappingURL=22794-7XgywIO0cFs.js.map