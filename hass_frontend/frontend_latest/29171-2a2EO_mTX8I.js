export const id=29171;export const ids=[29171,4631];export const modules={57966:(e,t,n)=>{n.d(t,{z:()=>i});const i=e=>(t,n)=>e.includes(t,n)},43986:(e,t,n)=>{n.d(t,{L:()=>r,a:()=>a});var i=n(87367);const a={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},r=(e,t)=>(0,i.Z)(parseFloat(e)*a[t])||"0"},12198:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{D_:()=>$,NC:()=>y,Nh:()=>h,U8:()=>D,WB:()=>d,mn:()=>g,p6:()=>l,pU:()=>s,yQ:()=>b});var a=n(14516),r=n(66477),o=n(4631),m=e([o]);o=(m.then?(await m)():m)[0];const s=(e,t,n)=>u(t,n.time_zone).format(e),u=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),l=(e,t,n)=>c(t,n.time_zone).format(e),c=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),d=(e,t,n)=>{var i,a,o,m;const s=_(t,n.time_zone);if(t.date_format===r.t6.language||t.date_format===r.t6.system)return s.format(e);const u=s.formatToParts(e),l=null===(i=u.find((e=>"literal"===e.type)))||void 0===i?void 0:i.value,c=null===(a=u.find((e=>"day"===e.type)))||void 0===a?void 0:a.value,d=null===(o=u.find((e=>"month"===e.type)))||void 0===o?void 0:o.value,g=null===(m=u.find((e=>"year"===e.type)))||void 0===m?void 0:m.value,v=u.at(u.length-1);let y="literal"===(null==v?void 0:v.type)?null==v?void 0:v.value:"";"bg"===t.language&&t.date_format===r.t6.YMD&&(y="");return{[r.t6.DMY]:`${c}${l}${d}${l}${g}${y}`,[r.t6.MDY]:`${d}${l}${c}${l}${g}${y}`,[r.t6.YMD]:`${g}${l}${d}${l}${c}${y}`}[t.date_format]},_=(0,a.Z)(((e,t)=>{const n=e.date_format===r.t6.system?void 0:e.language;return e.date_format===r.t6.language||(e.date_format,r.t6.system),new Intl.DateTimeFormat(n,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),g=(e,t,n)=>v(t,n.time_zone).format(e),v=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:"server"===e.time_zone?t:void 0}))),y=(e,t,n)=>f(t,n.time_zone).format(e),f=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),h=(e,t,n)=>p(t,n.time_zone).format(e),p=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:"server"===e.time_zone?t:void 0}))),b=(e,t,n)=>z(t,n.time_zone).format(e),z=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:"server"===e.time_zone?t:void 0}))),$=(e,t,n)=>w(t,n.time_zone).format(e),w=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:"server"===e.time_zone?t:void 0}))),D=(e,t,n)=>Z(t,n.time_zone).format(e),Z=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:"server"===e.time_zone?t:void 0})));i()}catch(e){i(e)}}))},44583:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{DG:()=>d,E8:()=>y,NR:()=>h,o0:()=>l,yD:()=>g});var a=n(14516),r=n(4631),o=n(12198),m=n(49684),s=n(65810),u=e([r,o,m]);[r,o,m]=u.then?(await u)():u;const l=(e,t,n)=>c(t,n.time_zone).format(e),c=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),d=(e,t,n)=>_(t,n.time_zone).format(e),_=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),g=(e,t,n)=>v(t,n.time_zone).format(e),v=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),y=(e,t,n)=>f(t,n.time_zone).format(e),f=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),h=(e,t,n)=>`${(0,o.WB)(e,t,n)}, ${(0,m.mr)(e,t,n)}`;i()}catch(e){i(e)}}))},49684:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{Vu:()=>l,Zs:()=>g,mr:()=>s,xO:()=>d});var a=n(14516),r=n(4631),o=n(65810),m=e([r]);r=(m.then?(await m)():m)[0];const s=(e,t,n)=>u(t,n.time_zone).format(e),u=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,o.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),l=(e,t,n)=>c(t,n.time_zone).format(e),c=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,o.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,o.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),d=(e,t,n)=>_(t,n.time_zone).format(e),_=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,o.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,o.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),g=(e,t,n)=>v(t,n.time_zone).format(e),v=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===e.time_zone?t:void 0})));i()}catch(e){i(e)}}))},87367:(e,t,n)=>{n.d(t,{Z:()=>a});const i=(e,t=2)=>{let n=""+e;for(let e=1;e<t;e++)n=parseInt(n)<10**e?`0${n}`:n;return n};function a(e){const t=Math.floor(e/1e3/3600),n=Math.floor(e/1e3%3600/60),a=Math.floor(e/1e3%3600%60),r=Math.floor(e%1e3);return t>0?`${t}:${i(n)}:${i(a)}`:n>0?`${n}:${i(a)}`:a>0||r>0?`${a}${r>0?`.${i(r,3)}`:""}`:null}},65810:(e,t,n)=>{n.d(t,{y:()=>r});var i=n(14516),a=n(66477);const r=(0,i.Z)((e=>{if(e.time_format===a.zt.language||e.time_format===a.zt.system){const t=e.time_format===a.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===a.zt.am_pm}))},29171:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.d(t,{c:()=>h,computeStateDisplay:()=>f,v:()=>y});var a=n(56007),r=n(66477),o=n(24833),m=n(43986),s=n(12198),u=n(44583),l=n(49684),c=n(18457),d=n(68307),_=n(58831),g=n(40095),v=e([s,u,l]);[s,u,l]=v.then?(await v)():v;const y=(e,t,n,i,a,r)=>h(e,n,i,a,t.entity_id,t.attributes,void 0!==r?r:t.state),f=(e,t,n,i,a,r)=>{const o=null==a?void 0:a[t.entity_id];return h(e,n,i,o,t.entity_id,t.attributes,void 0!==r?r:t.state)},h=(e,t,n,i,v,y,f)=>{if(f===a.lz||f===a.nZ)return e(`state.default.${f}`);if((0,c.sJ)(y)){if("duration"===y.device_class&&y.unit_of_measurement&&m.a[y.unit_of_measurement])try{return(0,m.L)(f,y.unit_of_measurement)}catch(e){}if("monetary"===y.device_class)try{return(0,c.uf)(f,t,{style:"currency",currency:y.unit_of_measurement,minimumFractionDigits:2,...(0,c.l4)({state:f,attributes:y},i)})}catch(e){}const e=y.unit_of_measurement?"%"===y.unit_of_measurement?(0,d.K)(t)+"%":` ${y.unit_of_measurement}`:"";return`${(0,c.uf)(f,t,(0,c.l4)({state:f,attributes:y},i))}${e}`}const h=(0,_.M)(v);if("datetime"===h){const e=new Date(f);return(0,u.o0)(e,t,n)}if(["date","input_datetime","time"].includes(h))try{const e=f.split(" ");if(2===e.length)return(0,u.o0)(new Date(e.join("T")),{...t,time_zone:r.c_.local},n);if(1===e.length){if(f.includes("-"))return(0,s.p6)(new Date(`${f}T00:00`),{...t,time_zone:r.c_.local},n);if(f.includes(":")){const e=new Date;return(0,l.mr)(new Date(`${e.toISOString().split("T")[0]}T${f}`),{...t,time_zone:r.c_.local},n)}}return f}catch(e){return f}if("counter"===h||"number"===h||"input_number"===h)return(0,c.uf)(f,t,(0,c.l4)({state:f,attributes:y},i));if(["button","event","image","input_button","scene","stt","tts"].includes(h)||"sensor"===h&&"timestamp"===y.device_class)try{return(0,u.o0)(new Date(f),t,n)}catch(e){return f}var p;return"update"===h?"on"===f?(0,o.X4)(y)?(0,g.f)(y,o.k6)&&"number"==typeof y.in_progress?e("ui.card.update.installing_with_progress",{progress:y.in_progress}):e("ui.card.update.installing"):y.latest_version:y.skipped_version===y.latest_version?null!==(p=y.latest_version)&&void 0!==p?p:e("state.default.unavailable"):e("ui.card.update.up_to_date"):(null==i?void 0:i.translation_key)&&e(`component.${i.platform}.entity.${h}.${i.translation_key}.state.${f}`)||y.device_class&&e(`component.${h}.entity_component.${y.device_class}.state.${f}`)||e(`component.${h}.entity_component._.state.${f}`)||f};i()}catch(e){i(e)}}))},22311:(e,t,n)=>{n.d(t,{N:()=>a});var i=n(58831);const a=e=>(0,i.M)(e.entity_id)},40095:(e,t,n)=>{n.d(t,{e:()=>i,f:()=>a});const i=(e,t)=>a(e.attributes,t),a=(e,t)=>0!=(e.supported_features&t)},18457:(e,t,n)=>{n.d(t,{Hd:()=>m,SL:()=>r,l4:()=>u,sJ:()=>o,uf:()=>s});var i=n(66477),a=n(27593);const r=e=>o(e.attributes),o=e=>!!e.unit_of_measurement||!!e.state_class,m=e=>{switch(e.number_format){case i.y4.comma_decimal:return["en-US","en"];case i.y4.decimal_comma:return["de","es","it"];case i.y4.space_comma:return["fr","sv","cs"];case i.y4.system:return;default:return e.language}},s=(e,t,n)=>{const r=t?m(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==i.y4.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(r,l(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,l(e,n)).format(Number(e))}return!Number.isNaN(Number(e))&&""!==e&&(null==t?void 0:t.number_format)===i.y4.none&&Intl?new Intl.NumberFormat("en-US",l(e,{...n,useGrouping:!1})).format(Number(e)):"string"==typeof e?e:`${(0,a.N)(e,null==n?void 0:n.maximumFractionDigits).toString()}${"currency"===(null==n?void 0:n.style)?` ${n.currency}`:""}`},u=(e,t)=>{var n;const i=null==t?void 0:t.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(null==e||null===(n=e.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},l=(e,t)=>{const n={maximumFractionDigits:2,...t};if("string"!=typeof e)return n;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;n.minimumFractionDigits=t,n.maximumFractionDigits=t}return n}},27593:(e,t,n)=>{n.d(t,{N:()=>i});const i=(e,t=2)=>Math.round(e*10**t)/10**t},68307:(e,t,n)=>{n.d(t,{K:()=>i});const i=e=>{switch(null==e?void 0:e.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},56007:(e,t,n)=>{n.d(t,{PX:()=>o,V_:()=>m,lz:()=>r,nZ:()=>a,rk:()=>u});var i=n(57966);const a="unavailable",r="unknown",o="off",m=[a,r],s=[a,r,o],u=(0,i.z)(m);(0,i.z)(s)},24833:(e,t,n)=>{n.d(t,{BD:()=>g,Fj:()=>b,M$:()=>z,Sk:()=>y,UJ:()=>h,X4:()=>f,k6:()=>d,kK:()=>c,oF:()=>l,zG:()=>_});var i=n(49706);if(32143==n.j)var a=n(58831);if(32143==n.j)var r=n(22311);var o=n(40095),m=n(85415);if(32143==n.j)var s=n(26765);if(32143==n.j)var u=n(81796);const l=1,c=2,d=4,_=8,g=16,v=e=>(0,o.f)(e,d)&&"number"==typeof e.in_progress,y=e=>(e=>v(e.attributes))(e)||!!e.attributes.in_progress,f=e=>v(e)||!!e.in_progress,h=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),p=(e,t)=>Object.values(e).filter((e=>"update"===(0,r.N)(e))).sort(((e,n)=>"ioBroker Core"===e.attributes.title?-3:"ioBroker Core"===n.attributes.title?3:"ioBroker Operating System"===e.attributes.title?-2:"ioBroker Operating System"===n.attributes.title?2:"ioBroker Supervisor"===e.attributes.title?-1:"ioBroker Supervisor"===n.attributes.title?1:(0,m.f)(e.attributes.title||e.attributes.friendly_name||"",n.attributes.title||n.attributes.friendly_name||"",t))),b=(e,t=!1)=>p(e).filter((e=>((e,t=!1)=>(e.state===i.uo||t&&Boolean(e.attributes.skipped_version))&&(0,o.e)(e,l))(e,t))),z=async(e,t)=>{const n=p(t.states,t.locale.language).map((e=>e.entity_id));if(!n.length)return void(0,s.Ys)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});let i=0;const r=await t.connection.subscribeEvents((n=>{"update"===(0,a.M)(n.data.entity_id)&&(i++,(0,u.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:i})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:n}),await new Promise((e=>{setTimeout(e,1e4)})),r(),0===i&&(0,u.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})}},4631:(e,t,n)=>{n.a(e,(async(e,i)=>{try{n.r(t);var a=n(43170),r=n(27499),o=n(32812),m=n(27815),s=n(64532),u=n(82874),l=n(69906),c=n(24517);const e=async()=>{const e=(0,l.sS)(),t=[];(0,o.Y)()&&await Promise.all([n.e(77021),n.e(48196)]).then(n.bind(n,48196)),(0,m.Y)(e)&&t.push(Promise.all([n.e(77021),n.e(20655)]).then(n.bind(n,20655))),(0,s.Y)(e)&&t.push(Promise.all([n.e(77021),n.e(20759)]).then(n.bind(n,20759))),(0,a.Y)(e)&&t.push(Promise.all([n.e(77021),n.e(76554)]).then(n.bind(n,76554)).then((()=>n.e(6042).then(n.t.bind(n,6042,23))))),(0,r.Yq)(e)&&t.push(Promise.all([n.e(77021),n.e(72684)]).then(n.bind(n,72684))),(0,u.Y)(e)&&t.push(Promise.all([n.e(77021),n.e(69029)]).then(n.bind(n,69029))),0!==t.length&&await Promise.all(t).then((()=>(0,c.n)(e)))};await e(),i()}catch(e){i(e)}}),1)}};
//# sourceMappingURL=29171-2a2EO_mTX8I.js.map