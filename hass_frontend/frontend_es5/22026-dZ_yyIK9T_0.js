(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[22026],{53725:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},t.exports=e.default},20508:function(t,e,i){"use strict";var n=i(28847).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)({},t)};var a=n(i(53725));t.exports=e.default},59699:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var n=i(90394),a=i(39244),r=i(23682),o=36e5;function s(t,e){(0,r.Z)(2,arguments);var i=(0,n.Z)(e);return(0,a.Z)(t,i*o)}},39244:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var n=i(90394),a=i(34327),r=i(23682);function o(t,e){(0,r.Z)(2,arguments);var i=(0,a.Z)(t).getTime(),o=(0,n.Z)(e);return new Date(i+o)}},32182:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var n=i(90394),a=i(34327),r=i(23682);function o(t,e){(0,r.Z)(2,arguments);var i=(0,a.Z)(t),o=(0,n.Z)(e);if(isNaN(o))return new Date(NaN);if(!o)return i;var s=i.getDate(),d=new Date(i.getTime());return d.setMonth(i.getMonth()+o+1,0),s>=d.getDate()?d:(i.setFullYear(d.getFullYear(),d.getMonth(),s),i)}},92195:function(t,e,i){"use strict";i.d(e,{vh:function(){return a},yJ:function(){return n}});Math.pow(10,8);var n=6e4,a=36e5},72277:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var n=i(92195),a=i(99307),r=i(23682),o=i(86102);function s(t,e,i){(0,r.Z)(2,arguments);var s=(0,a.Z)(t,e)/n.vh;return(0,o.u)(null==i?void 0:i.roundingMethod)(s)}},99307:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n=i(34327),a=i(23682);function r(t,e){return(0,a.Z)(2,arguments),(0,n.Z)(t).getTime()-(0,n.Z)(e).getTime()}},70390:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(93752);function a(){return(0,n.Z)(Date.now())}},30443:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n=i(59429),a=i(23682);function r(t,e){(0,a.Z)(2,arguments);var i=(0,n.Z)(t),r=(0,n.Z)(e);return i.getTime()===r.getTime()}},53970:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n=i(30443),a=i(23682);function r(t){return(0,a.Z)(1,arguments),(0,n.Z)(t,Date.now())}},27088:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(59429);function a(){return(0,n.Z)(Date.now())}},62336:function(t,e,i){"use strict";i.d(e,{Q:function(){return H}});var n,a,r,o,s,d,l,c,u,h=i(53709),p=i(99312),f=i(81043),v=i(93359),g=i(88962),y=i(33368),b=i(71650),k=i(82390),_=i(69205),m=i(70906),Z=i(91808),x=i(34541),C=i(47838),w=i(68144),S=i(79932),T=i(83448),D=i(47501),M=i(50239),O=i(87744),H=3e5;(0,Z.Z)([(0,S.Mo)("ha-chart-base")],(function(t,e){var Z,H=function(e){(0,_.Z)(n,e);var i=(0,m.Z)(n);function n(){var e;(0,b.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=i.call.apply(i,[this].concat(r)),t((0,k.Z)(e)),e}return(0,y.Z)(n)}(e);return{F:H,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,S.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,S.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,S.Cb)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,S.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,S.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,S.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,x.Z)((0,C.Z)(H.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,x.Z)((0,C.Z)(H.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){var i;null===(i=t.chart)||void 0===i||i.update(e)}}},{kind:"field",key:"resize",value:function(){var t=this;return function(e){var i,n,a,r;if(null!=e&&e.aspectRatio&&!e.height)e.height=Math.round((null!==(r=e.width)&&void 0!==r?r:t.clientWidth)/e.aspectRatio);else if(null!=e&&e.aspectRatio&&!e.width){var o;e.width=Math.round((null!==(o=e.height)&&void 0!==o?o:t.clientHeight)*e.aspectRatio)}null===(i=t.chart)||void 0===i||i.resize(null!==(n=null==e?void 0:e.width)&&void 0!==n?n:t.clientWidth,null!==(a=null==e?void 0:e.height)&&void 0!==a?a:t.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,i){e.hidden&&t._hiddenDatasets.add(i)}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if((0,x.Z)((0,C.Z)(H.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins")||t.has("chartType"))return this.chart.destroy(),void this._setupChart();t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,i){t.hidden=e._hiddenDatasets.has(i)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,u=this;return(0,w.dy)(n||(n=(0,g.Z)([" ",' <div class="animationContainer" style="','"> <div class="chartContainer" style="','"> <canvas></canvas> '," </div> </div> "])),!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?(0,w.dy)(a||(a=(0,g.Z)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this.data.datasets.map((function(t,e){return(0,w.dy)(r||(r=(0,g.Z)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label">',"</div> </li>"])),e,u._legendClick,(0,T.$)({hidden:u._hiddenDatasets.has(e)}),t.label,(0,D.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,D.V)({height:"".concat(this.height||this._chartHeight||0,"px"),overflow:this._chartHeight?"initial":"hidden"}),(0,D.V)({height:"".concat(null!==(e=null!==(i=this.height)&&void 0!==i?i:this._chartHeight)&&void 0!==e?e:this.clientWidth/2,"px"),"padding-left":"".concat((0,O.HE)(this.hass)?0:this.paddingYAxis,"px"),"padding-right":"".concat((0,O.HE)(this.hass)?this.paddingYAxis:0,"px")}),this._tooltip?(0,w.dy)(o||(o=(0,g.Z)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,T.$)((0,v.Z)({},this._tooltip.yAlign,!0)),(0,D.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,w.dy)(s||(s=(0,g.Z)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,w.dy)(d||(d=(0,g.Z)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,D.V)({backgroundColor:u._tooltip.labelColors[e].backgroundColor,borderColor:u._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,w.dy)(l||(l=(0,g.Z)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,w.dy)(c||(c=(0,g.Z)(["","<br>"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(Z=(0,f.Z)((0,p.Z)().mark((function t(){var e,n,a;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([i.e(23254),i.e(7248),i.e(59904),i.e(48324)]).then(i.bind(i,48324));case 3:n=t.sent.Chart,a=getComputedStyle(this),n.defaults.borderColor=a.getPropertyValue("--divider-color"),n.defaults.color=a.getPropertyValue("--secondary-text-color"),n.defaults.font.family=a.getPropertyValue("--mdc-typography-body1-font-family")||a.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new n(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)}))),function(){return Z.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,i,n=this;return Object.assign(Object.assign({maintainAspectRatio:!1},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip),{},{enabled:!1,external:function(t){return n._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e=this;return[].concat((0,h.Z)(this.plugins||[]),[{id:"resizeHook",resize:function(t){var i,n=t.height-(null!==(i=e._chartHeight)&&void 0!==i?i:0);(!e._chartHeight||n>12||n<-12)&&(e._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,M.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}):this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(u||(u=(0,g.Z)([":host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}.chartContainer{position:relative}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),w.oi)},73826:function(t,e,i){"use strict";i.d(e,{f:function(){return p}});var n=i(40039),a=i(33368),r=i(71650),o=i(82390),s=i(69205),d=i(70906),l=i(91808),c=i(34541),u=i(47838),h=i(79932),p=function(t){var e=(0,l.Z)(null,(function(t,e){var i=function(e){(0,s.Z)(n,e);var i=(0,d.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];return e=i.call.apply(i,[this].concat(s)),t((0,o.Z)(e)),e}return(0,a.Z)(n)}(e);return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,c.Z)((0,u.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,c.Z)((0,u.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,c.Z)((0,u.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,a=(0,n.Z)(t.keys());try{for(a.s();!(e=a.n()).done;){var r=e.value;if(this.hassSubscribeRequiredHostProps.includes(r))return void this.__checkSubscribed()}}catch(o){a.e(o)}finally{a.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},41305:function(t,e,i){"use strict";i.r(e),i.d(e,{HuiEnergyGasGraphCard:function(){return A}});var n,a,r,o,s=i(99312),d=i(53709),l=i(81043),c=i(40039),u=i(88962),h=i(33368),p=i(71650),f=i(82390),v=i(69205),g=i(70906),y=i(91808),b=i(27088),k=i(70390),_=i(53970),m=i(24112),Z=i(72277),x=i(59699),C=i(68144),w=i(79932),S=i(83448),T=i(14516),D=i(15838),M=i(89525),O=i(12198),H=i(49684),j=i(18457),P=(i(62336),i(22098),i(55424)),z=i(38014),R=i(73826),A=(0,y.Z)([(0,w.Mo)("hui-energy-gas-graph-card")],(function(t,e){var i,y=function(e){(0,v.Z)(n,e);var i=(0,g.Z)(n);function n(){var e;(0,p.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=i.call.apply(i,[this].concat(r)),t((0,f.Z)(e)),e}return(0,h.Z)(n)}(e);return{F:y,d:[{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,w.SB)()],key:"_start",value:function(){return(0,b.Z)()}},{kind:"field",decorators:[(0,w.SB)()],key:"_end",value:function(){return(0,k.Z)()}},{kind:"field",decorators:[(0,w.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_compareEnd",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_unit",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t,e=this;return[(0,P.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((function(t){return e._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,C.dy)(n||(n=(0,u.Z)([" <ha-card> ",' <div class="content ','"> <ha-chart-base .hass="','" .data="','" .options="','" chart-type="bar"></ha-chart-base> '," </div> </ha-card> "])),this._config.title?(0,C.dy)(a||(a=(0,u.Z)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,S.$)({"has-header":!!this._config.title}),this.hass,this._chartData,this._createOptions(this._start,this._end,this.hass.locale,this.hass.config,this._unit,this._compareStart,this._compareEnd),this._chartData.datasets.length?"":(0,C.dy)(r||(r=(0,u.Z)(['<div class="no-data"> '," </div>"])),(0,_.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):C.Ld}},{kind:"field",key:"_createOptions",value:function(){var t=this;return(0,T.Z)((function(e,i,n,a,r,o,s){var d=(0,m.Z)(i,e),l=void 0!==o&&void 0!==s;if(l){var u=(0,Z.Z)(i,e),h=(0,Z.Z)(s,o);h>u?i=(0,x.Z)(i,h-u):u>h&&(s=(0,x.Z)(s,u-h))}var p={parsing:!1,animation:!1,interaction:{mode:"x"},scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:i.getTime(),adapters:{date:{locale:n,config:a}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:d>35?"monthyear":d>7?"date":d>2?"weekday":d>0?"datetime":"hour",minUnit:d>35?"month":d>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:r},ticks:{beginAtZero:!0}}},plugins:{tooltip:{position:"nearest",filter:function(t){return"0"!==t.formattedValue},itemSort:function(t,e){return e.datasetIndex-t.datasetIndex},callbacks:{title:function(t){if(d>0)return t[0].label;var e=new Date(t[0].parsed.x);return"".concat(l?"".concat((0,O.mn)(e,n,a),": "):"").concat((0,H.mr)(e,n,a)," – ").concat((0,H.mr)((0,x.Z)(e,1),n,a))},label:function(t){return"".concat(t.dataset.label,": ").concat((0,j.uf)(t.parsed.y,n)," ").concat(r)},footer:function(e){if(e.length<2)return[];var i,a=0,o=(0,c.Z)(e);try{for(o.s();!(i=o.n()).done;){var s=i.value;a+=s.dataset.data[s.dataIndex].y}}catch(d){o.e(d)}finally{o.f()}return 0===a?[]:[t.hass.localize("ui.panel.lovelace.cards.energy.energy_gas_graph.total_consumed",{num:(0,j.uf)(a,n),unit:r})]}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,j.Hd)(n)};return l&&(p.scales.xAxisCompare=Object.assign(Object.assign({},p.scales.x),{},{suggestedMin:o.getTime(),suggestedMax:s.getTime(),display:!1})),p}))}},{kind:"method",key:"_getStatistics",value:(i=(0,l.Z)((0,s.Z)().mark((function t(e){var i,n,a,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=e.prefs.energy_sources.filter((function(t){return"gas"===t.type})),this._unit=(0,P.vE)(this.hass,e.prefs,e.statsMetadata)||"m³",n=[],a=getComputedStyle(this),r=a.getPropertyValue("--energy-gas-color").trim(),n.push.apply(n,(0,d.Z)(this._processDataSet(e.stats,e.statsMetadata,i,r))),e.statsCompare&&(n.push({order:0,data:[]}),n.push({order:999,data:[],xAxisID:"xAxisCompare"}),n.push.apply(n,(0,d.Z)(this._processDataSet(e.statsCompare,e.statsMetadata,i,r,!0)))),this._start=e.start,this._end=e.end||(0,k.Z)(),this._compareStart=e.startCompare,this._compareEnd=e.endCompare,this._chartData={datasets:n};case 12:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{kind:"method",key:"_processDataSet",value:function(t,e,i,n){var a=this,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=[];return i.forEach((function(i,s){var d=s>0?a.hass.themes.darkMode?(0,M.C)((0,D.Rw)((0,D.wK)(n)),s):(0,M.W)((0,D.Rw)((0,D.wK)(n)),s):void 0,l=d?(0,D.CO)((0,D.p3)(d)):n,u=null,h=[];if(i.stat_energy_from in t){var p,f=t[i.stat_energy_from],v=(0,c.Z)(f);try{for(v.s();!(p=v.n()).done;){var g=p.value;if(null!==g.change&&void 0!==g.change&&u!==g.start){var y=new Date(g.start);h.push({x:y.getTime(),y:g.change}),u=g.start}}}catch(b){v.e(b)}finally{v.f()}}o.push({label:(0,z.Kd)(a.hass,i.stat_energy_from,e[i.stat_energy_from]),borderColor:r?l+"7F":l,backgroundColor:r?l+"32":l+"7F",data:h,order:1,stack:"gas",xAxisID:r?"xAxisCompare":void 0})})),o}},{kind:"get",static:!0,key:"styles",value:function(){return(0,C.iv)(o||(o=(0,u.Z)(["ha-card{height:100%}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.no-data{position:absolute;height:100%;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;padding:20%;margin-left:32px;box-sizing:border-box}"])))}}]}}),(0,R.f)(C.oi))},28847:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},23158:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var n=i(89273),a=i(36857);function r(t,e,i){var r=(0,a.Z)(t,i),o=(0,n.Z)(e,r,!0),s=new Date(r.getTime()-o),d=new Date(0);return d.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),d.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),d}},25101:function(t,e,i){"use strict";i.d(e,{Z:function(){return d}});var n=i(20508),a=i(36857),r=i(57944),o=i(89273),s=i(74101);function d(t,e,i){if("string"==typeof t&&!t.match(r.Z)){var d=n(i);return d.timeZone=e,(0,a.Z)(t,d)}var l=(0,a.Z)(t,i),c=(0,s.Z)(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes(),l.getSeconds(),l.getMilliseconds()).getTime(),u=(0,o.Z)(e,new Date(c));return new Date(c+u)}}}]);
//# sourceMappingURL=22026-dZ_yyIK9T_0.js.map