export const id=60477;export const ids=[60477];export const modules={78866:(e,o,r)=>{r.d(o,{D:()=>_,S:()=>f});var n=r(68144),i=r(81582),t=r(5986),a=r(75580),s=r(2852),c=r(26765),l=r(25145),d=r(70332),p=r(27322),g=r(7323),h=r(83849);const f=["zha","zwave_js","matter"],_=async(e,o,r,f)=>{if(null!=f&&f.domain){const e=await o.loadBackendTranslation("title",f.domain);f.domain=(0,t.Lh)(e,f.domain)}if(null!=f&&f.brand){var _;const e=await(0,a.G)(o);f.brand=(null===(_=e.core.integration[f.brand])||void 0===_?void 0:_.name)||f.brand}if("zwave_js"===r){const t=null!=f&&f.config_entry?void 0:await(0,i.pB)(o,{domain:r});if(!((0,g.p)(o,"zwave_js")&&(null!=f&&f.config_entry||null!=t&&t.length)))return void(0,c.g7)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Z-Wave",supported_hardware_link:n.dy`<a href="${(0,p.R)(o,"/docs/z-wave/controllers")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zwave_js"})}});(0,d.B)(e,{entry_id:(null==f?void 0:f.config_entry)||t[0].entry_id})}else if("zha"===r){const t=null!=f&&f.config_entry?void 0:await(0,i.pB)(o,{domain:r});if(!((0,g.p)(o,"zha")&&(null!=f&&f.config_entry||null!=t&&t.length)))return void(0,c.g7)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Zigbee",supported_hardware_link:n.dy`<a href="${(0,p.R)(o,"/integrations/zha/#known-working-zigbee-radio-modules")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"zha"})}});(0,h.c)("/config/zha/add")}else if("matter"===r){const t=null!=f&&f.config_entry?void 0:await(0,i.pB)(o,{domain:r});if(!((0,g.p)(o,r)&&(null!=f&&f.config_entry||null!=t&&t.length)))return void(0,c.g7)(e,{title:o.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Matter"}),text:o.localize("ui.panel.config.integrations.config_flow.missing_matter",{integration:"Matter",brand:(null==f?void 0:f.brand)||(null==f?void 0:f.domain)||"Matter",supported_hardware_link:n.dy`<a href="${(0,p.R)(o,"/integrations/matter")}" target="_blank" rel="noreferrer">${o.localize("ui.panel.config.integrations.config_flow.supported_hardware")}</a>`}),confirmText:o.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:()=>{(0,s.t)(e,{startFlowHandler:"matter"})}});(0,l.H)(e)}}},81582:(e,o,r)=>{r.d(o,{DJ:()=>t,LZ:()=>n,Nn:()=>d,Ny:()=>p,Pk:()=>h,Q4:()=>i,RQ:()=>s,SO:()=>c,T0:()=>g,iJ:()=>l,pB:()=>a});const n=32143==r.j?["migration_error","setup_error","setup_retry"]:null,i=32143==r.j?["not_loaded","loaded","setup_error","setup_retry"]:null,t=(e,o,r)=>{const n={type:"config_entries/subscribe"};return r&&r.type&&(n.type_filter=r.type),e.connection.subscribeMessage((e=>o(e)),n)},a=(e,o)=>{const r={};return o&&(o.type&&(r.type_filter=o.type),o.domain&&(r.domain=o.domain)),e.callWS({type:"config_entries/get",...r})},s=(e,o)=>e.callWS({type:"config_entries/get_single",entry_id:o}),c=(e,o,r)=>e.callWS({type:"config_entries/update",entry_id:o,...r}),l=(e,o)=>e.callApi("DELETE",`config/config_entries/entry/${o}`),d=(e,o)=>e.callApi("POST",`config/config_entries/entry/${o}/reload`),p=(e,o)=>e.callWS({type:"config_entries/disable",entry_id:o,disabled_by:"user"}),g=(e,o)=>e.callWS({type:"config_entries/disable",entry_id:o,disabled_by:null}),h=(e,o)=>{const r=[...e],n=e=>{const r=o[e.domain];return"helper"===(null==r?void 0:r.integration_type)?-1:1};return r.sort(((e,o)=>n(o)-n(e)))}},73728:(e,o,r)=>{r.d(o,{D4:()=>d,D7:()=>_,Ky:()=>l,P3:()=>s,V3:()=>v,WW:()=>w,XO:()=>p,ZJ:()=>m,d4:()=>f,oi:()=>h,pV:()=>a,zO:()=>g});var n=r(97330),i=r(38346),t=r(5986);const a=32143==r.j?["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"]:null,s=32143==r.j?["reauth"]:null,c={"HA-Frontend-Base":`${location.protocol}//${location.host}`},l=(e,o)=>{var r;return e.callApi("POST","config/config_entries/flow",{handler:o,show_advanced_options:Boolean(null===(r=e.userData)||void 0===r?void 0:r.showAdvanced)},c)},d=(e,o)=>e.callApi("GET",`config/config_entries/flow/${o}`,void 0,c),p=(e,o,r)=>e.callApi("POST",`config/config_entries/flow/${o}`,r,c),g=(e,o,r)=>e.callWS({type:"config_entries/ignore_flow",flow_id:o,title:r}),h=(e,o)=>e.callApi("DELETE",`config/config_entries/flow/${o}`),f=(e,o)=>e.callApi("GET","config/config_entries/flow_handlers"+(o?`?type=${o}`:"")),_=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),u=(e,o)=>e.subscribeEvents((0,i.D)((()=>_(e).then((e=>o.setState(e,!0)))),500,!0),"config_entry_discovered"),m=e=>(0,n._)(e,"_configFlowProgress",_,u),v=(e,o)=>m(e.connection).subscribe(o),w=(e,o)=>o.context.title_placeholders&&0!==Object.keys(o.context.title_placeholders).length?e(`component.${o.handler}.config.flow_title`,o.context.title_placeholders)||("name"in o.context.title_placeholders?o.context.title_placeholders.name:(0,t.Lh)(e,o.handler)):(0,t.Lh)(e,o.handler)},75580:(e,o,r)=>{r.d(o,{G:()=>n,p:()=>i});const n=e=>e.callWS({type:"integration/descriptions"}),i=(e,o)=>{if(e){if(o in e){const r=e[o];if("integration_type"in r)return r}for(const r of Object.values(e))if("integrations"in r&&r.integrations&&o in r.integrations)return r.integrations[o]}}},2852:(e,o,r)=>{r.d(o,{t:()=>s});var n=r(68144),i=r(73728),t=r(5986),a=r(52871);const s=(e,o)=>(0,a.w)(e,o,{loadDevicesAndAreas:!0,createFlow:async(e,o)=>{const[r]=await Promise.all([(0,i.Ky)(e,o),e.loadFragmentTranslation("config"),e.loadBackendTranslation("config",o),e.loadBackendTranslation("selector",o),e.loadBackendTranslation("title",o)]);return r},fetchFlow:async(e,o)=>{const r=await(0,i.D4)(e,o);return await e.loadFragmentTranslation("config"),await e.loadBackendTranslation("config",r.handler),await e.loadBackendTranslation("selector",r.handler),r},handleFlowStep:i.XO,deleteFlow:i.oi,renderAbortDescription(e,o){const r=e.localize(`component.${o.handler}.config.abort.${o.reason}`,o.description_placeholders);return r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""},renderShowFormStepHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`,o.description_placeholders)||e.localize(`component.${o.handler}.title`),renderShowFormStepDescription(e,o){const r=e.localize(`component.${o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,o,r)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.data.${r.name}`),renderShowFormStepFieldHelper(e,o,r){const i=e.localize(`component.${o.handler}.config.step.${o.step_id}.data_description.${r.name}`,o.description_placeholders);return i?n.dy`<ha-markdown breaks .content="${i}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,o,r)=>e.localize(`component.${o.handler}.config.error.${r}`,o.description_placeholders)||r,renderShowFormStepFieldLocalizeValue:(e,o,r)=>e.localize(`component.${o.handler}.selector.${r}`),renderShowFormStepSubmitButton:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===o.last_step?"next":"submit")),renderExternalStepHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,o){const r=e.localize(`component.${o.handler}.config.${o.step_id}.description`,o.description_placeholders);return n.dy` <p> ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""} `},renderCreateEntryDescription(e,o){const r=e.localize(`component.${o.handler}.config.create_entry.${o.description||"default"}`,o.description_placeholders);return n.dy` ${r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""} <p> ${e.localize("ui.panel.config.integrations.config_flow.created_config","name",o.title)} </p> `},renderShowFormProgressHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderShowFormProgressDescription(e,o){const r=e.localize(`component.${o.handler}.config.progress.${o.progress_action}`,o.description_placeholders);return r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""},renderMenuHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderMenuDescription(e,o){const r=e.localize(`component.${o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return r?n.dy` <ha-markdown allowsvg breaks .content="${r}"></ha-markdown> `:""},renderMenuOption:(e,o,r)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.menu_options.${r}`,o.description_placeholders),renderLoadingDescription(e,o,r,n){if("loading_flow"!==o&&"loading_step"!==o)return"";const i=(null==n?void 0:n.handler)||r;return e.localize(`ui.panel.config.integrations.config_flow.loading.${o}`,{integration:i?(0,t.Lh)(e.localize,i):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},52871:(e,o,r)=>{r.d(o,{w:()=>t});var n=r(47181);const i=()=>Promise.all([r.e(46992),r.e(31338),r.e(42977),r.e(28597),r.e(97487),r.e(2185),r.e(52154),r.e(62043),r.e(40163),r.e(59159)]).then(r.bind(r,59159)),t=(e,o,r)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:i,dialogParams:{...o,flowConfig:r,dialogParentElement:e}})}},25145:(e,o,r)=>{r.d(o,{H:()=>t});var n=r(47181);const i=()=>Promise.all([r.e(45497),r.e(28597),r.e(86156),r.e(82189)]).then(r.bind(r,82189)),t=e=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-matter-add-device",dialogImport:i,dialogParams:{}})}},70332:(e,o,r)=>{r.d(o,{B:()=>t});var n=r(47181);const i=()=>Promise.all([r.e(46992),r.e(31338),r.e(42977),r.e(63436),r.e(45497),r.e(28597),r.e(99608),r.e(65666),r.e(70632),r.e(24709),r.e(54629)]).then(r.bind(r,54629)),t=(e,o)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-add-node",dialogImport:i,dialogParams:o})}},60477:(e,o,r)=>{r.r(o),r.d(o,{getMyRedirects:()=>_});var n=r(17463),i=r(34541),t=r(47838),a=r(54211),s=r(68144),c=r(79932),l=r(7323),d=r(78866),p=r(83849),g=r(15493),h=r(5986),f=(r(48811),r(27322));const _=e=>({application_credentials:{redirect:"/config/application_credentials"},developer_assist:{redirect:"/developer-tools/assist"},developer_states:{redirect:"/developer-tools/state"},developer_services:{redirect:"/developer-tools/service"},developer_call_service:{redirect:"/developer-tools/service",params:{service:"string"}},developer_template:{redirect:"/developer-tools/template"},developer_events:{redirect:"/developer-tools/event"},developer_statistics:{redirect:"/developer-tools/statistics"},server_controls:{redirect:"/developer-tools/yaml"},calendar:{component:"calendar",redirect:"/calendar"},companion_app:{redirect:"#external-app-configuration"},config:{redirect:"/config/dashboard"},cloud:{component:"cloud",redirect:"/config/cloud"},config_flow_start:{redirect:"/config/integrations/dashboard/add",params:{domain:"string"}},brand:{redirect:"/config/integrations/dashboard/add",params:{brand:"string"}},integrations:{redirect:"/config/integrations"},integration:{redirect:"/config/integrations/integration",params:{domain:"string"}},config_mqtt:{component:"mqtt",redirect:"/config/mqtt"},config_zha:{component:"zha",redirect:"/config/zha/dashboard"},config_zwave_js:{component:"zwave_js",redirect:"/config/zwave_js/dashboard"},add_zigbee_device:{component:"zha",redirect:"/config/zha/add"},add_zwave_device:{component:"zwave_js",redirect:"/config/zwave_js/add"},add_matter_device:{component:"matter",redirect:"/config/matter/add"},config_energy:{component:"energy",redirect:"/config/energy/dashboard"},devices:{redirect:"/config/devices/dashboard"},entities:{redirect:"/config/entities"},energy:{component:"energy",redirect:"/energy"},areas:{redirect:"/config/areas/dashboard"},blueprint_import:{component:"blueprint",redirect:"/config/blueprint/dashboard/import",params:{blueprint_url:"url"}},blueprints:{component:"blueprint",redirect:"/config/blueprint/dashboard"},automations:{component:"automation",redirect:"/config/automation/dashboard"},scenes:{component:"scene",redirect:"/config/scene/dashboard"},scripts:{component:"script",redirect:"/config/script/dashboard"},helpers:{redirect:"/config/helpers"},tags:{component:"tag",redirect:"/config/tags"},voice_assistants:{redirect:"/config/voice-assistants"},lovelace_dashboards:{component:"lovelace",redirect:"/config/lovelace/dashboards"},lovelace_resources:{component:"lovelace",redirect:"/config/lovelace/resources"},oauth:{redirect:"/auth/external/callback",navigate_outside_spa:!0,params:{error:"string?",code:"string?",state:"string"}},people:{component:"person",redirect:"/config/person"},zones:{component:"zone",redirect:"/config/zone"},users:{redirect:"/config/users"},general:{redirect:"/config/general"},logs:{redirect:"/config/logs"},repairs:{component:"repairs",redirect:"/config/repairs"},info:{redirect:"/config/info"},system_health:{redirect:"/config/repairs?dialog=system-health"},hardware:{redirect:"/config/hardware"},storage:{redirect:"/config/storage"},network:{redirect:"/config/network"},analytics:{redirect:"/config/analytics"},updates:{redirect:"/config/updates"},system_dashboard:{redirect:"/config/system"},customize:{redirect:"/config/dashboard"},profile:{redirect:"/profile"},logbook:{component:"logbook",redirect:"/logbook"},history:{component:"history",redirect:"/history"},media_browser:{component:"media_source",redirect:"/media-browser"},backup:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_snapshots:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_backups:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_system:{redirect:"/config/system"},supervisor_logs:{redirect:"/config/logs"},supervisor_info:{redirect:"/config/info"},hacs_repository:{component:"hacs",redirect:"/hacs/_my_redirect/hacs_repository",params:{owner:"string",repository:"string",category:"string?"}}});(0,n.Z)([(0,c.Mo)("ha-panel-my")],(function(e,o){class r extends o{constructor(...o){super(...o),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_error",value:void 0},{kind:"field",key:"_redirect",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)((0,t.Z)(r.prototype),"connectedCallback",this).call(this);const e=this.route.path.substring(1),o=(0,l.p)(this.hass,"hassio");if(this._redirect=((e,o)=>{var r;return null===(r=_(o))||void 0===r?void 0:r[e]})(e,o),e.startsWith("supervisor")&&void 0===this._redirect)return o?void(0,p.c)(`/hassio/_my_redirect/${e}${window.location.search}`,{replace:!0}):void(this._error="no_supervisor");if(!this._redirect)return void(this._error="not_supported");var n;if("#external-app-configuration"===this._redirect.redirect)return null!==(n=this.hass.auth.external)&&void 0!==n&&n.config.hasSettingsScreen?void this.hass.auth.external.fireMessage({type:"config_screen/show"}):void(this._error="not_app");if(this._redirect.component&&!(0,l.p)(this.hass,this._redirect.component)){this.hass.loadBackendTranslation("title",this._redirect.component),this._error="no_component";const e=this._redirect.component;if(d.S.includes(e)){const o=(0,g.Q2)();this.hass.loadFragmentTranslation("config").then().then((()=>{(0,d.D)(this,this.hass,e,{domain:o.domain,brand:o.brand})}))}return}let a;try{a=this._createRedirectUrl()}catch(e){return void(this._error="url_error")}this._redirect.navigate_outside_spa?location.assign(a):(0,p.c)(a,{replace:!0})}},{kind:"method",key:"render",value:function(){if(this._error){let e;switch(this._error){case"not_supported":e=this.hass.localize("ui.panel.my.not_supported","link",s.dy`<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages">${this.hass.localize("ui.panel.my.faq_link")}</a>`)||"This redirect is not supported.";break;case"no_component":e=this.hass.localize("ui.panel.my.component_not_loaded","integration",s.dy`<a target="_blank" rel="noreferrer noopener" href="${(0,f.R)(this.hass,`/integrations/${this._redirect.component}`)}">${(0,h.Lh)(this.hass.localize,this._redirect.component)}</a>`)||"This redirect is not supported.";break;case"no_supervisor":e=this.hass.localize("ui.panel.my.no_supervisor","docs_link",s.dy`<a target="_blank" rel="noreferrer noopener" href="${(0,f.R)(this.hass,"/installation")}">${this.hass.localize("ui.panel.my.documentation")}</a>`);break;case"not_app":e=this.hass.localize("ui.panel.my.not_app","link",s.dy`<a target="_blank" rel="noreferrer noopener" href="https://companion.home-assistant.io/download">${this.hass.localize("ui.panel.my.download_app")}</a>`);break;default:e=this.hass.localize("ui.panel.my.error")||"Unknown error"}return s.dy`<hass-error-screen .error="${e}" .hass="${this.hass}"></hass-error-screen>`}return s.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(){const e=this._createRedirectParams();return`${this._redirect.redirect}${e}`}},{kind:"method",key:"_createRedirectParams",value:function(){const e=(0,g.Q2)();if(!this._redirect.params&&!Object.keys(e).length)return"";const o={};for(const[r,n]of Object.entries(this._redirect.params||{}))if(e[r]||!n.endsWith("?")){if(!e[r]||!this._checkParamType(n,e[r]))throw Error();o[r]=e[r]}return`?${(0,g.ou)(o)}`}},{kind:"method",key:"_checkParamType",value:function(e,o){return"string"===e||"string?"===e||"url"===e&&(o&&o===(0,a.N)(o))}}]}}),s.oi)},27322:(e,o,r)=>{r.d(o,{R:()=>n});const n=(e,o)=>`https://www.iobroker.net/#${e.language&&e.language.split("-")[0]||"en"}/adapters/adapterref/iobroker.lovelace/README.md`}};
//# sourceMappingURL=60477-2ss8tJXwPRI.js.map