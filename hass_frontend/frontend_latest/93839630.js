"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[17595],{7323:(t,e,i)=>{i.d(e,{p:()=>r});const r=(t,e)=>t&&t.config.components.includes(e)},5372:(t,e,i)=>{i.a(t,(async t=>{var e=i(37500),r=i(26767),s=i(5701),n=i(17717),a=i(55070),o=i(7323),l=i(91741),c=i(18457),d=i(58763),h=(i(32833),t([d]));function u(){u=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var s=e.placement;if(e.kind===r&&("static"===s||"prototype"===s)){var n="static"===s?t:i;this.defineClassElement(n,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!m(t))return i.push(t);var e=this.decorateElement(t,s);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var n=this.decorateConstructor(i,e);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],s=t.decorators,n=s.length-1;n>=0;n--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,s[n])(o)||o);t=l.element,this.addElementPlacement(t,e),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var s=this.fromClassDescriptor(t),n=this.toClassDescriptor((0,e[r])(s)||s);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){t=n.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?b(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=k(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var s=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var n={kind:e,key:i,placement:r,descriptor:Object.assign({},s)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=t.initializer),n},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:v(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=v(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function p(t){var e,i=k(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function f(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function m(t){return t.decorators&&t.decorators.length}function y(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function v(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function k(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}d=(h.then?await h:h)[0];!function(t,e,i,r){var s=u();if(r)for(var n=0;n<r.length;n++)s=r[n](s);var a=e((function(t){s.initializeInstanceElements(t,o.elements)}),i),o=s.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===n.key&&t.placement===n.placement},r=0;r<t.length;r++){var s,n=t[r];if("method"===n.kind&&(s=e.find(i)))if(y(n.descriptor)||y(s.descriptor)){if(m(n)||m(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(m(n)){if(m(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}f(n,s)}else e.push(n)}return e}(a.d.map(p)),t);s.initializeClassElements(a.F,o.elements),s.runClassFinishers(a.F,o.finishers)}([(0,r.M)("statistics-chart")],(function(t,i){return{F:class extends i{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,s.C)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,s.C)()],key:"names",value:()=>!1},{kind:"field",decorators:[(0,s.C)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,s.C)({type:Array})],key:"statTypes",value:()=>["sum","min","mean","max"]},{kind:"field",decorators:[(0,s.C)()],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,s.C)({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"field",decorators:[(0,n.S)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,n.S)()],key:"_chartOptions",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated||this._createOptions(),(t.has("statisticsData")||t.has("statTypes"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,o.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?e.dy`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.loading_statistics")}
      </div>`:this.statisticsData&&Object.keys(this.statisticsData).length?e.dy`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        .chartType=${this.chartType}
      ></ha-chart-base>
    `:e.dy`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.no_statistics_found")}
      </div>`:e.dy`<div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`}},{kind:"method",key:"_createOptions",value:function(){this._chartOptions={parsing:!1,animation:!1,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:!1,ticks:{maxTicksLimit:7},title:{display:this.unit,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:t=>`${t.dataset.label}: ${(0,c.uf)(t.parsed.y,this.hass.locale)} ${t.dataset.unit||""}`}},filler:{propagate:!0},legend:{display:!0,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.4,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,c.Hd)(this.hass.locale)}}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await(0,d.uR)(this.hass)}},{kind:"method",key:"_generateData",value:async function(){if(!this.statisticsData)return;this.statisticIds||await this._getStatisticIds();let t=0;const e=Object.values(this.statisticsData),i=[];let r,s;if(0===e.length)return;r=this.endTime||new Date(Math.max(...e.map((t=>new Date(t[t.length-1].start).getTime())))),r>new Date&&(r=new Date);const n=this.names||{};e.forEach((e=>{const o=e[0];let c=n[o.statistic_id];if(!c){const t=this.hass.states[o.statistic_id];c=t?(0,l.C)(t):o.statistic_id}const h=this.statisticIds.find((t=>t.statistic_id===o.statistic_id));this.unit||(void 0===s?s=null==h?void 0:h.unit_of_measurement:s!==(null==h?void 0:h.unit_of_measurement)&&(s=null));let u=null;const p=[],f=(t,e)=>{e&&(t>r||(p.forEach(((i,r)=>{null===e[r]&&u&&null!==u[r]&&i.data.push({x:t.getTime(),y:u[r]}),i.data.push({x:t.getTime(),y:e[r]})})),u=e))},m=(0,a.hZ)(t,this._computedStyle);t++;const y=[],v=this.statTypes.includes("mean")&&(0,d.Nw)(e,"mean");(v?[...this.statTypes].sort(((t,e)=>"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0)):this.statTypes).forEach((t=>{if((0,d.Nw)(e,t)){const e=v&&("min"===t||"max"===t);y.push(t),p.push({label:`${c} (${this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`)})\n            `,fill:!!v&&("min"===t?"+1":"max"===t&&"-1"),borderColor:e?m+"7F":m,backgroundColor:e?m+"3F":m+"7F",pointRadius:0,data:[],unit:null==h?void 0:h.unit_of_measurement,band:e})}}));let k=null,b=null,g=null;e.forEach((t=>{const e=new Date(t.start);if(k===e)return;k=e;const i=[];y.forEach((e=>{let r;"sum"===e?b?r=b+((t.sum||0)-g):(b=r=t.state,g=t.sum):r=t[e],i.push(null!==r?Math.round(100*r)/100:null)})),f(e,i)})),f(r,u),Array.prototype.push.apply(i,p)})),null!==s&&(this._chartOptions={...this._chartOptions,scales:{...this._chartOptions.scales,y:{...this._chartOptions.scales.y,title:{display:s,text:s}}}}),this._chartData={datasets:i}}},{kind:"get",static:!0,key:"styles",value:function(){return e.iv`
      :host {
        display: block;
        min-height: 60px;
      }
      .info {
        text-align: center;
        line-height: 60px;
        color: var(--secondary-text-color);
      }
    `}}]}}),e.oi)}))}}]);
//# sourceMappingURL=93839630.js.map