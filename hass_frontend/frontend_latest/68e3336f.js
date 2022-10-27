"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[49686],{55422:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{jV:()=>u,sS:()=>m,Yc:()=>h,tf:()=>p,o1:()=>g,hb:()=>f,ri:()=>w,MY:()=>v});var a=n(49706),r=n(58831),s=n(29171),i=n(22311),o=n(56007),c=e([s]);s=(c.then?await c:c)[0];const l="ui.components.logbook.messages",u=["counter","proximity","sensor","zone"],d={"numeric state of":"triggered_by_numeric_state_of","state of":"triggered_by_state_of",event:"triggered_by_event",time:"triggered_by_time","time pattern":"triggered_by_time_pattern","ioBroker stopping":"triggered_by_homeassistant_stopping","ioBroker starting":"triggered_by_homeassistant_starting"},_={},m=async(e,t,n)=>(await e.loadBackendTranslation("device_class"),b(e,t,void 0,void 0,n)),b=(e,t,n,a,r,s)=>{if((a||s)&&(!a||0===a.length)&&(!s||0===s.length))return Promise.resolve([]);const i={type:"logbook/get_events",start_time:t};return n&&(i.end_time=n),null!=a&&a.length&&(i.entity_ids=a),null!=s&&s.length&&(i.device_ids=s),r&&(i.context_id=r),e.callWS(i)},h=(e,t,n,a,r,s)=>{if((r||s)&&(!r||0===r.length)&&(!s||0===s.length))return Promise.reject("No entities or devices");const i={type:"logbook/event_stream",start_time:n,end_time:a};return null!=r&&r.length&&(i.entity_ids=r),null!=s&&s.length&&(i.device_ids=s),e.connection.subscribeMessage((e=>t(e)),i)},p=(e,t)=>{_[`${e}${t}`]={}},g=(e,t)=>({entity_id:e.entity_id,state:t,attributes:{device_class:null==e?void 0:e.attributes.device_class,source_type:null==e?void 0:e.attributes.source_type,has_date:null==e?void 0:e.attributes.has_date,has_time:null==e?void 0:e.attributes.has_time,entity_picture_local:a.iY.has((0,r.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture_local,entity_picture:a.iY.has((0,r.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture}}),f=(e,t)=>{for(const n in d)if(t.startsWith(n))return t.replace(n,`${e(`ui.components.logbook.${d[n]}`)}`);return t},w=(e,t,n,r,i)=>{switch(i){case"device_tracker":case"person":return"not_home"===n?t(`${l}.was_away`):"home"===n?t(`${l}.was_at_home`):t(`${l}.was_at_state`,"state",n);case"sun":return t("above_horizon"===n?`${l}.rose`:`${l}.set`);case"binary_sensor":{const e=n===a.uo,s=n===a.lC,i=r.attributes.device_class;switch(i){case"battery":if(e)return t(`${l}.was_low`);if(s)return t(`${l}.was_normal`);break;case"connectivity":if(e)return t(`${l}.was_connected`);if(s)return t(`${l}.was_disconnected`);break;case"door":case"garage_door":case"opening":case"window":if(e)return t(`${l}.was_opened`);if(s)return t(`${l}.was_closed`);break;case"lock":if(e)return t(`${l}.was_unlocked`);if(s)return t(`${l}.was_locked`);break;case"plug":if(e)return t(`${l}.was_plugged_in`);if(s)return t(`${l}.was_unplugged`);break;case"presence":if(e)return t(`${l}.was_at_home`);if(s)return t(`${l}.was_away`);break;case"safety":if(e)return t(`${l}.was_unsafe`);if(s)return t(`${l}.was_safe`);break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(e)return t(`${l}.detected_device_class`,{device_class:t(`component.binary_sensor.device_class.${i}`)});if(s)return t(`${l}.cleared_device_class`,{device_class:t(`component.binary_sensor.device_class.${i}`)});break;case"tamper":if(e)return t(`${l}.detected_tampering`);if(s)return t(`${l}.cleared_tampering`)}break}case"cover":switch(n){case"open":return t(`${l}.was_opened`);case"opening":return t(`${l}.is_opening`);case"closing":return t(`${l}.is_closing`);case"closed":return t(`${l}.was_closed`)}break;case"lock":if("unlocked"===n)return t(`${l}.was_unlocked`);if("locked"===n)return t(`${l}.was_locked`)}return n===a.uo?t(`${l}.turned_on`):n===a.lC?t(`${l}.turned_off`):o.V_.includes(n)?t(`${l}.became_unavailable`):e.localize(`${l}.changed_to_state`,"state",r?(0,s.D)(t,r,e.locale,n):n)},v=e=>"sensor"!==(0,i.N)(e)||void 0===e.attributes.unit_of_measurement&&void 0===e.attributes.state_class}))},79339:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{kh:()=>c,oA:()=>l,z9:()=>u,l:()=>d,tm:()=>_,PG:()=>b,Fb:()=>h});var a=n(7323),r=n(58831),s=n(55422),i=n(75692),o=e([s]);s=(o.then?await o:o)[0];const c=["camera","configurator","weather"],l=["scene","automation"],u=["script"],d=["alarm_control_panel","automation","camera","climate","configurator","counter","cover","fan","group","humidifier","input_datetime","light","lock","media_player","person","remote","script","scene","sun","timer","update","vacuum","water_heater","weather"],_=["input_number","input_select","input_text","number","scene","update","select"],m=["camera","configurator"],b=(e,t)=>{if("weather"===(0,r.M)(t)){const n=e.states[t];if(n&&(0,i.M0)(n.state))return!1}return(0,a.p)(e,"history")&&!m.includes((0,r.M)(t))},h=(e,t)=>{if(!(0,a.p)(e,"logbook"))return!1;const n=e.states[t];if(!n||n.attributes.unit_of_measurement)return!1;const i=(0,r.M)(t);return!s.jV.includes(i)&&!m.includes(i)}}))},82791:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{S:()=>o,n3:()=>c,ST:()=>l});var a=n(79339),r=n(22311),s=e([a]);a=(s.then?await s:s)[0];const i={alarm_control_panel:()=>Promise.all([n.e(29563),n.e(98985),n.e(79116)]).then(n.bind(n,79116)),automation:()=>n.e(35513).then(n.bind(n,35513)),camera:()=>n.e(14920).then(n.bind(n,14920)),climate:()=>Promise.all([n.e(29563),n.e(88278),n.e(9823)]).then(n.bind(n,9823)),configurator:()=>Promise.all([n.e(29563),n.e(98985),n.e(4940),n.e(8793)]).then(n.bind(n,70375)),counter:()=>n.e(6850).then(n.bind(n,6850)),cover:()=>Promise.all([n.e(46583),n.e(97148)]).then(n.bind(n,97148)),fan:()=>Promise.all([n.e(29563),n.e(88278),n.e(46583),n.e(69626)]).then(n.bind(n,69626)),group:()=>Promise.all([n.e(29563),n.e(98985),n.e(88278),n.e(14277),n.e(3545)]).then(n.bind(n,39902)),humidifier:()=>Promise.all([n.e(29563),n.e(88278),n.e(35317)]).then(n.bind(n,35317)),input_datetime:()=>Promise.all([n.e(29563),n.e(98985),n.e(88278),n.e(12545),n.e(49895),n.e(56127)]).then(n.bind(n,56127)),light:()=>Promise.all([n.e(29563),n.e(88278),n.e(46583),n.e(29598)]).then(n.bind(n,29598)),lock:()=>Promise.all([n.e(29563),n.e(98985),n.e(46583),n.e(50534)]).then(n.bind(n,50534)),media_player:()=>Promise.all([n.e(29563),n.e(88278),n.e(46684)]).then(n.bind(n,46684)),person:()=>Promise.all([n.e(46583),n.e(23956),n.e(95993)]).then(n.bind(n,95993)),remote:()=>Promise.all([n.e(46583),n.e(6514)]).then(n.bind(n,6514)),script:()=>n.e(71593).then(n.bind(n,71593)),sun:()=>n.e(66369).then(n.bind(n,66369)),timer:()=>Promise.all([n.e(46583),n.e(69491)]).then(n.bind(n,69491)),update:()=>Promise.all([n.e(41985),n.e(46504),n.e(4940),n.e(27894)]).then(n.bind(n,27894)),vacuum:()=>Promise.all([n.e(29563),n.e(88278),n.e(46583),n.e(17184)]).then(n.bind(n,17184)),water_heater:()=>Promise.all([n.e(29563),n.e(88278),n.e(52994)]).then(n.bind(n,52994)),weather:()=>n.e(8914).then(n.bind(n,8914))},o=e=>{const t=(0,r.N)(e);return c(t)},c=e=>a.l.includes(e)?e:a.tm.includes(e)?"hidden":"default",l=e=>{e in i&&i[e]()}}))},83320:(e,t,n)=>{n.a(e,(async e=>{n.d(t,{w:()=>l});var a=n(7355),r=(n(26602),n(93479),n(51432),n(73089)),s=(n(8864),n(17875)),i=n(7778),o=e([s,r,a]);[s,r,a]=o.then?await o:o;const c=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]),l=e=>(0,i.Tw)("element",e,c)}))},49686:(e,t,n)=>{n.a(e,(async e=>{n.r(t),n.d(t,{importMoreInfoControl:()=>a.ST,createBadgeElement:()=>r.J,createCardElement:()=>s.Z6,createHeaderFooterElement:()=>i.t,createHuiElement:()=>o.w,createRowElement:()=>c.m});var a=n(82791),r=n(73953),s=n(51153),i=n(89026),o=n(83320),c=n(37482),l=e([c,o,s,r,a]);[c,o,s,r,a]=l.then?await l:l}))}}]);