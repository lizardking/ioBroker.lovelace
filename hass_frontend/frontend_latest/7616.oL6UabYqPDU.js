export const id=7616;export const ids=[7616];export const modules={53725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},e.exports=t.default},20508:(e,t,n)=>{var s=n(28847).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)({},e)};var o=s(n(53725));e.exports=t.default},59699:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(90394),o=n(39244),r=n(23682),i=36e5;function a(e,t){(0,r.Z)(2,arguments);var n=(0,s.Z)(t);return(0,o.Z)(e,n*i)}},39244:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(90394),o=n(34327),r=n(23682);function i(e,t){(0,r.Z)(2,arguments);var n=(0,o.Z)(e).getTime(),i=(0,s.Z)(t);return new Date(n+i)}},57879:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(34327),o=n(23682);function r(e,t){(0,o.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,s.Z)(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}},38588:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(34327),o=n(23682);var r=n(57879),i=n(63390);function a(e,t){(0,o.Z)(2,arguments);var n,a=(0,s.Z)(e),c=(0,s.Z)(t),l=(0,r.Z)(a,c),u=Math.abs(function(e,t){(0,o.Z)(2,arguments);var n=(0,s.Z)(e),r=(0,s.Z)(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(a,c));if(u<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*u);var d=(0,r.Z)(a,c)===-l;(0,i.Z)((0,s.Z)(e))&&1===u&&1===(0,r.Z)(e,c)&&(d=!1),n=l*(u-Number(d))}return 0===n?0:n}},74774:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(34327),o=n(23682);function r(e){return(0,o.Z)(1,arguments),1===(0,s.Z)(e).getDate()}},63390:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(34327),o=n(93752),r=n(1905),i=n(23682);function a(e){(0,i.Z)(1,arguments);var t=(0,s.Z)(e);return(0,o.Z)(t).getTime()===(0,r.Z)(t).getTime()}},72043:(e,t,n)=>{n.d(t,{A:()=>a,v:()=>c});var s=n(23158),o=n(25101),r=n(66477);const i=(e,t,n,r)=>{const i=n((0,s.Z)(e,t),r);return i instanceof Date?(0,o.Z)(i,t):i},a=(e,t,n,s,o)=>n.time_zone===r.c_.server?i(e,s.time_zone,t,o):t(e,o),c=(e,t,n,s,o)=>n.time_zone===r.c_.server?i(e,s.time_zone,t,o):t(e,o)},34007:(e,t,n)=>{n.d(t,{N:()=>o});const s=[" ",": "],o=(e,t)=>{const n=e.toLowerCase();for(const o of s){const s=`${t}${o}`;if(n.startsWith(s)){const t=e.substring(s.length);if(t.length)return r(t.substr(0,t.indexOf(" ")))?t:t[0].toUpperCase()+t.slice(1)}}},r=e=>e.toLowerCase()!==e},92306:(e,t,n)=>{n.d(t,{v:()=>s});const s=(e,t)=>{const n={};for(const s of e){const e=t(s);e in n?n[e].push(s):n[e]=[s]}return n}},81582:(e,t,n)=>{n.d(t,{DJ:()=>r,LZ:()=>s,Nn:()=>u,Ny:()=>d,Pk:()=>_,Q4:()=>o,RQ:()=>a,SO:()=>c,T0:()=>y,iJ:()=>l,pB:()=>i});const s=32143==n.j?["migration_error","setup_error","setup_retry"]:null,o=32143==n.j?["not_loaded","loaded","setup_error","setup_retry"]:null,r=(e,t,n)=>{const s={type:"config_entries/subscribe"};return n&&n.type&&(s.type_filter=n.type),e.connection.subscribeMessage((e=>t(e)),s)},i=(e,t)=>{const n={};return t&&(t.type&&(n.type_filter=t.type),t.domain&&(n.domain=t.domain)),e.callWS({type:"config_entries/get",...n})},a=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),c=(e,t,n)=>e.callWS({type:"config_entries/update",entry_id:t,...n}),l=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),u=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),y=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),_=(e,t)=>{const n=[...e],s=e=>{const n=t[e.domain];return"helper"===(null==n?void 0:n.integration_type)?-1:1};return n.sort(((e,t)=>s(t)-s(e)))}},55424:(e,t,n)=>{n.a(e,(async(e,s)=>{try{n.d(t,{Bm:()=>w,Cj:()=>k,G9:()=>z,Jj:()=>x,KU:()=>E,P:()=>S,UB:()=>V,ZC:()=>W,_Z:()=>D,b:()=>N,gy:()=>A,iK:()=>T,jB:()=>$,kJ:()=>B,o1:()=>C,rl:()=>M,vE:()=>F,xZ:()=>j,yH:()=>H});var o=n(24112),r=n(74774),i=n(63390),a=n(32182),c=n(38588),l=n(79021),u=n(39244),d=n(59429),y=n(93752),_=n(59699),p=n(97330),f=n(72043),g=n(49684),m=n(92306),h=n(81582),v=n(38014),Z=e([g]);g=(Z.then?(await Z)():Z)[0];const b=[],w=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),T=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),M=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),S=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),E=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),j=e=>e.callWS({type:"energy/info"}),A=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),W=e=>e.callWS({type:"energy/get_prefs"}),D=async(e,t)=>{const n=e.callWS({type:"energy/save_prefs",...t});return O(e),n},P=async(e,t,n,s,o,r="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==o?void 0:o.toISOString(),energy_statistic_ids:n,co2_statistic_id:s,period:r}),x=e=>(0,m.v)(e.energy_sources,(e=>e.type)),H=(e,t,n)=>{const s=[];for(const o of e.energy_sources)if(!n||n.includes(o.type))if("solar"!==o.type)if("gas"!==o.type&&"water"!==o.type)if("battery"!==o.type){for(const e of o.flow_from){s.push(e.stat_energy_from),e.stat_cost&&s.push(e.stat_cost);const n=t.cost_sensors[e.stat_energy_from];n&&s.push(n)}for(const e of o.flow_to){s.push(e.stat_energy_to),e.stat_compensation&&s.push(e.stat_compensation);const n=t.cost_sensors[e.stat_energy_to];n&&s.push(n)}}else s.push(o.stat_energy_from),s.push(o.stat_energy_to);else{s.push(o.stat_energy_from),o.stat_cost&&s.push(o.stat_cost);const e=t.cost_sensors[o.stat_energy_from];e&&s.push(e)}else s.push(o.stat_energy_from);return s},L=async(e,t,n,s,d)=>{const[y,_]=await Promise.all([(0,h.pB)(e,{domain:"co2signal"}),j(e)]),p=y.length?y[0]:void 0;let g;if(p)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const n=e.states[t.entity_id];if(n&&"%"===n.attributes.unit_of_measurement){g=n.entity_id;break}}const m=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)m.push(t.stat_energy_from);const Z=H(t,_,["grid","solar","battery","gas"]),b=H(t,_,["water"]),w=[...Z,...b],C=(0,o.Z)(s||new Date,n),T=C>35?"month":C>2?"day":"hour",M=e.config.unit_system.length||"",S={energy:"kWh",volume:"km"===M?"m³":"ft³"},E={volume:"km"===M?"L":"gal"},k=Z.length?(0,v.dL)(e,n,s,Z,T,S,["change"]):{},A=b.length?(0,v.dL)(e,n,s,b,T,E,["change"]):{};let W,D,x,L,O,V={},$={};d&&(D=(0,f.v)(n,r.Z,e.locale,e.config)&&(0,f.v)(s||new Date,i.Z,e.locale,e.config)?(0,f.A)(n,a.Z,e.locale,e.config,-(0,f.v)(s||new Date,c.Z,e.locale,e.config,n)-1):(0,f.A)(n,l.Z,e.locale,e.config,-1*(C+1)),x=(0,u.Z)(n,-1),Z.length&&(V=(0,v.dL)(e,D,x,Z,T,S,["change"])),b.length&&($=(0,v.dL)(e,D,x,b,T,E,["change"]))),void 0!==g&&(L=P(e,n,m,g,s,C>35?"month":C>2?"day":"hour"),d&&(O=P(e,D,m,g,x,C>35?"month":C>2?"day":"hour")));const U={},z=w.length?(0,v.Py)(e,w):[],[F,N,B,q,Y,I,J]=await Promise.all([k,A,V,$,z,L,O]),K={...F,...N};d&&(W={...B,...q}),w.length&&Y.forEach((e=>{U[e.statistic_id]=e}));return{start:n,end:s,startCompare:D,endCompare:x,info:_,prefs:t,stats:K,statsMetadata:U,statsCompare:W,co2SignalConfigEntry:p,co2SignalEntity:g,fossilEnergyConsumption:I,fossilEnergyConsumptionCompare:J}},O=e=>{b.forEach((t=>{const n=V(e,{key:t});n.clearPrefs(),n._active&&n.refresh()}))},V=(e,t={})=>{let n="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");n=`_${t.key}`}if(e.connection[n])return e.connection[n];b.push(t.key);const s=(0,p._)(e.connection,n,(async()=>{if(s.prefs||(s.prefs=await W(e)),s._refreshTimeout&&clearTimeout(s._refreshTimeout),s._active&&(!s.end||s.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),s._refreshTimeout=window.setTimeout((()=>s.refresh()),e.getTime()-Date.now())}return L(e,s.prefs,s.start,s.end,s.compare)})),o=s.subscribe;s.subscribe=e=>{const t=o(e);return s._active++,()=>{s._active--,s._active<1&&(clearTimeout(s._refreshTimeout),s._refreshTimeout=void 0),t()}},s._active=0,s.prefs=t.prefs;const r=new Date,i=(0,g.Zs)(r,e.locale,e.config).split(":")[0];s.start=(0,f.A)("0"===i?(0,l.Z)(r,-1):r,d.Z,e.locale,e.config),s.end=(0,f.A)("0"===i?(0,l.Z)(r,-1):r,y.Z,e.locale,e.config);const a=()=>{s._updatePeriodTimeout=window.setTimeout((()=>{s.start=(0,f.A)(new Date,d.Z,e.locale,e.config),s.end=(0,f.A)(new Date,y.Z,e.locale,e.config),a()}),(0,_.Z)((0,f.A)(r,y.Z,e.locale,e.config),1).getTime()-Date.now())};return a(),s.clearPrefs=()=>{s.prefs=void 0},s.setPeriod=(t,n)=>{var o;s.start=t,s.end=n,s.start.getTime()!==(0,f.A)(new Date,d.Z,e.locale,e.config).getTime()||(null===(o=s.end)||void 0===o?void 0:o.getTime())!==(0,f.A)(new Date,y.Z,e.locale,e.config).getTime()||s._updatePeriodTimeout?s._updatePeriodTimeout&&(clearTimeout(s._updatePeriodTimeout),s._updatePeriodTimeout=void 0):a()},s.setCompare=e=>{s.compare=e},s},$=e=>e.callWS({type:"energy/solar_forecast"}),U=["volume","energy"],z=(e,t={},n)=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;if(n&&n===s.stat_energy_from)continue;const e=t[s.stat_energy_from];if(U.includes(null==e?void 0:e.unit_class))return e.unit_class}},F=(e,t,n={})=>{const s=z(t,n);if(void 0!==s)return"energy"===s?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},N=e=>"km"===e.config.unit_system.length?"L":"gal",B="/docs/energy/faq/#troubleshooting-missing-entities";s()}catch(e){s(e)}}))},65253:(e,t,n)=>{n.d(t,{CE:()=>o,FH:()=>p,Nq:()=>a,Pb:()=>s,fm:()=>l,h8:()=>c,r4:()=>i,uh:()=>r});const s="system-admin",o="system-users",r=async e=>e.callWS({type:"config/auth/list"}),i=async(e,t,n,s)=>e.callWS({type:"config/auth/create",name:t,group_ids:n,local_only:s}),a=async(e,t,n)=>e.callWS({...n,type:"config/auth/update",user_id:t}),c=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t}),l=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",u=32143==n.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,d=32143==n.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,y=32143==n.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,_=32143==n.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,p=(e,t,n)=>{const s=[],o=t=>e.localize(`ui.panel.config.users.${t}`);return t.is_owner&&s.push([u,o("is_owner")]),n&&t.system_generated&&s.push([d,o("is_system")]),t.local_only&&s.push([y,o("is_local")]),t.is_active||s.push([_,o("is_not_active")]),s}},22314:(e,t,n)=>{n.d(t,{X:()=>r,y:()=>o});var s=n(57966);const o=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],r=(0,s.z)(o)},47680:(e,t,n)=>{n.d(t,{VG:()=>f,AP:()=>g});var s=n(49706),o=n(58831),r=n(22311),i=n(91741);var a=n(34007),c=n(85415),l=n(5986),u=n(65253),d=n(22314),y=n(57066);const _=new Set(["automation","configurator","device_tracker","geo_location","persistent_notification","script","sun","zone","event","tts","stt","todo"]),p=new Set(["mobile_app"]),f=(e,t,n,r=!0)=>{const l=[],u=[],d=n.title?n.title.toLowerCase():void 0,y=[];for(const n of t){const t=e[n],s=(0,o.M)(n);if("alarm_control_panel"===s){const e={type:"alarm-panel",entity:n};l.push(e)}else if("camera"===s){const e={type:"picture-entity",entity:n};l.push(e)}else if("image"===s){const e={type:"picture",image_entity:n};l.push(e)}else if("climate"===s){const e={type:"thermostat",entity:n};l.push(e)}else if("humidifier"===s){const e={type:"humidifier",entity:n};l.push(e)}else if("media_player"===s){const e={type:"media-control",entity:n};l.push(e)}else if("plant"===s){const e={type:"plant-status",entity:n};l.push(e)}else if("weather"===s){const e={type:"weather-forecast",entity:n,show_forecast:!1};l.push(e)}else if(!r||"scene"!==s&&"script"!==s){let e;const s=d&&t&&(e=(0,a.N)((0,i.C)(t),d))?{entity:n,name:e}:n;u.push(s)}else{const e={entity:n,show_icon:!0,show_name:!0};let s;d&&t&&(s=(0,a.N)((0,i.C)(t),d))&&(e.name=s),y.push(e)}}if(u.sort(((t,n)=>{const r="string"==typeof t?t:t.entity,a="string"==typeof n?n:n.entity,l=s.zF.includes((0,o.M)(r))?"sensor":"control";return l!==(s.zF.includes((0,o.M)(a))?"sensor":"control")?"sensor"===l?1:-1:(0,c.$)("string"==typeof t?e[t]?(0,i.C)(e[t]):"":t.name||"","string"==typeof n?e[n]?(0,i.C)(e[n]):"":n.name||"")})),0===u.length&&y.length>0)return f(e,t,n,!1);if(u.length>0||y.length>0){const e={type:"entities",entities:u,...n};y.length>0&&(e.footer={type:"buttons",entities:y}),l.unshift(e)}return l.length<2?l:[{type:"grid",square:!1,columns:1,cards:l}]},g=(e,t,n,s,a,g,m,h,v)=>{const Z=((e,t)=>{const n={},s=new Set(Object.values(t).filter((e=>e.entity_category||e.platform&&p.has(e.platform)||e.hidden)).map((e=>e.entity_id)));for(const t of Object.keys(e)){const o=e[t];_.has((0,r.N)(o))||s.has(o.entity_id)||(n[t]=e[t])}return n})(s,n),b={};for(const e of Object.keys(Z)){const t=Z[e];t.attributes.order&&(b[e]=t.attributes.order)}const w=((e,t,n,s)=>{const o={...s},r={},i={};for(const s of Object.values(n)){var a;const n=s.area_id||s.device_id&&(null===(a=t[s.device_id])||void 0===a?void 0:a.area_id);n&&n in e&&s.entity_id in o?(n in r||(r[n]=[]),r[n].push(o[s.entity_id]),delete o[s.entity_id]):s.device_id&&s.device_id in t&&s.entity_id in o&&(s.device_id in i||(i[s.device_id]=[]),i[s.device_id].push(o[s.entity_id]),delete o[s.entity_id])}for(const[e,t]of Object.entries(i))1===t.length&&(o[t[0].entity_id]=t[0],delete i[e]);return{areasWithEntities:r,devicesWithEntities:i,otherEntities:o}})(e,t,n,Z);if(null!=m&&m.hidden)for(const e of m.hidden)delete w.areasWithEntities[e];h&&(w.devicesWithEntities={},w.otherEntities={});const C=(e=>{const t=[],n={};return Object.keys(e).forEach((s=>{const r=e[s];"group"===(0,o.M)(s)?t.push(r):n[s]=r})),t.forEach((e=>e.attributes.entity_id.forEach((e=>{delete n[e]})))),{groups:t,ungrouped:n}})(w.otherEntities);C.groups.sort(((e,t)=>b[e.entity_id]-b[t.entity_id]));const T=[];for(const e of C.groups)T.push(...f(s,e.attributes.entity_id,{title:(0,i.C)(e),show_header_toggle:"hidden"!==e.attributes.control}));const M=((e,t,n,s,o)=>{const a={};for(const e of Object.keys(o)){const t=o[e],n=(0,r.N)(t);n in a||(a[n]=[]),a[n].push(t.entity_id)}const y=[];if("person"in a){const e=[];if(1===a.person.length)y.push({type:"entities",entities:a.person});else{let t,n="";for(const s of a.person){const r=o[s];let i=r.attributes.entity_picture;if(!i){if(void 0===t){const e=getComputedStyle(document.body);t=encodeURIComponent(e.getPropertyValue("--light-primary-color").trim()),n=encodeURIComponent((e.getPropertyValue("--text-light-primary-color")||e.getPropertyValue("--primary-text-color")).trim())}i=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50' style='background-color:${t}'%3E%3Cg%3E%3Ctext font-family='roboto' x='50%25' y='50%25' text-anchor='middle' stroke='${n}' font-size='1.3em' dy='.3em'%3E${(0,u.fm)(r.attributes.friendly_name||"")}%3C/text%3E%3C/g%3E%3C/svg%3E`}e.push({type:"picture-entity",entity:s,aspect_ratio:"1",show_name:!1,image:i})}y.push({type:"grid",square:!0,columns:3,cards:e})}delete a.person}const _=[];for(const e of d.y)e in a&&(_.push(...a[e]),delete a[e]);const p={};for(const t of Object.keys(a))p[t]=(0,l.Lh)(e,t);_.length&&(a._helpers=_,p._helpers=e("ui.panel.lovelace.strategy.original-states.helpers")),Object.keys(a).sort(((e,t)=>(0,c.$)(p[e],p[t]))).forEach((e=>{y.push(...f(o,a[e].sort(((e,t)=>(0,c.$)((0,i.C)(o[e]),(0,i.C)(o[t])))),{title:p[e]}))}));const g={path:t,title:n,cards:y};return s&&(g.icon=s),g})(a,"default_view","Home",undefined,C.ungrouped),S=[],E=Object.keys(w.areasWithEntities).sort((0,y.a)(e,null==m?void 0:m.order));for(const t of E){const n=w.areasWithEntities[t],o=e[t];S.push(...f(s,n.map((e=>e.entity_id)),{title:o.name}))}const k=[],j=Object.entries(w.devicesWithEntities).sort(((e,n)=>{const s=t[e[0]],o=t[n[0]];return(0,c.$)(s.name_by_user||s.name||"",o.name_by_user||o.name||"")}));for(const[e,n]of j){const o=t[e];k.push(...f(s,n.map((e=>e.entity_id)),{title:o.name_by_user||o.name||a("ui.panel.config.devices.unnamed_device",{type:a(`ui.panel.config.devices.type.${o.entry_type||"device"}`)})}))}let A;if(g&&!v){const e=g.energy_sources.find((e=>"grid"===e.type));e&&e.flow_from.length>0&&(A={title:a("ui.panel.lovelace.cards.energy.energy_distribution.title_today"),type:"energy-distribution",link_dashboard:!0})}return M.cards.unshift(...S,...T,...A?[A]:[]),M.cards.push(...k),M}},7616:(e,t,n)=>{n.a(e,(async(e,s)=>{try{n.r(t),n.d(t,{OriginalStatesViewStrategy:()=>y});var o=n(17463),r=n(28101),i=n(68144),a=n(79932),c=n(7323),l=n(55424),u=n(47680),d=e([l]);l=(d.then?(await d)():d)[0];let y=(0,o.Z)([(0,a.Mo)("original-states-view-strategy")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",static:!0,key:"generate",value:async function(e,t){if(t.config.state===r.UE)return{cards:[{type:"starting"}]};if(t.config.recovery_mode)return{cards:[{type:"recovery-mode"}]};const[n,s]=await Promise.all([t.loadBackendTranslation("title"),(0,c.p)(t,"energy")?(0,l.ZC)(t).catch((()=>{})):void 0]),o=(0,u.AP)(t.areas,t.devices,t.entities,t.states,n,s,e.areas,e.hide_entities_without_area,e.hide_energy);return t.config.components.includes("geo_location")&&o&&o.cards&&o.cards.push({type:"map",geo_location_sources:["all"]}),0===o.cards.length&&o.cards.push({type:"empty-state"}),o}}]}}),i.fl);s()}catch(e){s(e)}}))},28847:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},23158:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(89273),o=n(36857);function r(e,t,n){var r=(0,o.Z)(e,n),i=(0,s.Z)(t,r,!0),a=new Date(r.getTime()-i),c=new Date(0);return c.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),c.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),c}},25101:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(20508),o=n(36857),r=n(57944),i=n(89273),a=n(74101);function c(e,t,n){if("string"==typeof e&&!e.match(r.Z)){var c=s(n);return c.timeZone=t,(0,o.Z)(e,c)}var l=(0,o.Z)(e,n),u=(0,a.Z)(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes(),l.getSeconds(),l.getMilliseconds()).getTime(),d=(0,i.Z)(t,new Date(u));return new Date(u+d)}}};
//# sourceMappingURL=7616.oL6UabYqPDU.js.map