"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[47680],{34007:function(t,e,n){n.d(e,{N:function(){return i}});n(97393),n(88640),n(56308),n(17692);var r=[" ",": "],i=function(t,e){for(var n=t.toLowerCase(),i=0,o=r;i<o.length;i++){var s=o[i],u="".concat(e).concat(s);if(n.startsWith(u)){var c=t.substring(u.length);if(c.length)return a(c.substr(0,c.indexOf(" ")))?c:c[0].toUpperCase()+c.slice(1)}}},a=function(t){return t.toLowerCase()!==t}},65253:function(t,e,n){n.d(e,{CE:function(){return o},FH:function(){return f},Nq:function(){return c},Pb:function(){return a},fm:function(){return p},h8:function(){return l},r4:function(){return u},uh:function(){return s}});var r=n(99312),i=n(81043),a=(n(85717),n(91989),n(46349),n(70320),n(17692),n(11451),n(36513),"system-admin"),o="system-users",s=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/list"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n,i,a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/create",name:n,group_ids:i,local_only:a}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),c=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS(Object.assign(Object.assign({},i),{},{type:"config/auth/update",user_id:n})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth/delete",user_id:n}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(t){return t?t.trim().split(" ").slice(0,3).map((function(t){return t.substring(0,1)})).join(""):"?"},f=function(t,e,n){var r=[],i=function(e){return t.localize("ui.panel.config.users.".concat(e))};return e.is_owner&&r.push(["M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z",i("is_owner")]),n&&e.system_generated&&r.push(["M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z",i("is_system")]),e.local_only&&r.push(["M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14",i("is_local")]),e.is_active||r.push(["M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z",i("is_not_active")]),r}},22314:function(t,e,n){n.d(e,{X:function(){return a},y:function(){return i}});var r=n(57966),i=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],a=(0,r.z)(i)},47680:function(t,e,n){n.d(e,{VG:function(){return g},AP:function(){return m}});var r=n(53709),i=n(40039),a=n(68990),o=(n(51358),n(46798),n(78399),n(5239),n(56086),n(47884),n(81912),n(64584),n(41483),n(12367),n(9454),n(98490),n(85717),n(10733),n(36513),n(82073),n(37313),n(40271),n(60163),n(22859),n(80628),n(46349),n(70320),n(87438),n(9849),n(22890),n(65974),n(11451),n(97393),n(50289),n(94167),n(85472),n(90126),n(49706)),s=n(58831),u=n(22311),c=n(91741),l=n(34007),p=n(85415),f=n(5986),d=n(65253),h=n(22314),y=n(57066),v=new Set(["automation","configurator","device_tracker","geo_location","persistent_notification","script","sun","zone","event","tts","stt","todo"]),_=new Set(["mobile_app"]),g=function t(e,n,r){var a,u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],f=[],d=[],h=r.title?r.title.toLowerCase():void 0,y=[],v=(0,i.Z)(n);try{for(v.s();!(a=v.n()).done;){var _=a.value,g=e[_],m=(0,s.M)(_);if("alarm_control_panel"===m){var b={type:"alarm-panel",entity:_};f.push(b)}else if("camera"===m){var C={type:"picture-entity",entity:_};f.push(C)}else if("image"===m){var w={type:"picture",image_entity:_};f.push(w)}else if("climate"===m){var Z,E,k,M={type:"thermostat",entity:_,features:(null!==(Z=null===(E=e[_])||void 0===E||null===(E=E.attributes)||void 0===E||null===(E=E.hvac_modes)||void 0===E?void 0:E.length)&&void 0!==Z?Z:0)>1?[{type:"climate-hvac-modes",hvac_modes:null===(k=e[_])||void 0===k||null===(k=k.attributes)||void 0===k?void 0:k.hvac_modes}]:void 0};f.push(M)}else if("humidifier"===m){var j={type:"humidifier",entity:_,features:[{type:"humidifier-toggle"}]};f.push(j)}else if("media_player"===m){var H={type:"media-control",entity:_};f.push(H)}else if("plant"===m){var O={type:"plant-status",entity:_};f.push(O)}else if("weather"===m){var V={type:"weather-forecast",entity:_,show_forecast:!1};f.push(V)}else if(!u||"scene"!==m&&"script"!==m){var x=void 0,L=h&&g&&(x=(0,l.N)((0,c.C)(g),h))?{entity:_,name:x}:_;d.push(L)}else{var A={entity:_,show_icon:!0,show_name:!0},S=void 0;h&&g&&(S=(0,l.N)((0,c.C)(g),h))&&(A.name=S),y.push(A)}}}catch(z){v.e(z)}finally{v.f()}if(d.sort((function(t,n){var r="string"==typeof t?t:t.entity,i="string"==typeof n?n:n.entity,a=o.zF.includes((0,s.M)(r))?"sensor":"control";return a!==(o.zF.includes((0,s.M)(i))?"sensor":"control")?"sensor"===a?1:-1:(0,p.$)("string"==typeof t?e[t]?(0,c.C)(e[t]):"":t.name||"","string"==typeof n?e[n]?(0,c.C)(e[n]):"":n.name||"")})),0===d.length&&y.length>0)return t(e,n,r,!1);if(d.length>0||y.length>0){var W=Object.assign({type:"entities",entities:d},r);y.length>0&&(W.footer={type:"buttons",entities:y}),f.unshift(W)}return f.length<2?f:[{type:"grid",square:!1,columns:1,cards:f}]},m=function(t,e,n,o,l,m,b,C,w){for(var Z,E,k=function(t,e){for(var n={},r=new Set(Object.values(e).filter((function(t){return t.entity_category||t.platform&&_.has(t.platform)||t.hidden})).map((function(t){return t.entity_id}))),i=0,a=Object.keys(t);i<a.length;i++){var o=a[i],s=t[o];v.has((0,u.N)(s))||r.has(s.entity_id)||(n[o]=t[o])}return n}(o,n),M={},j=0,H=Object.keys(k);j<H.length;j++){var O=H[j],V=k[O];V.attributes.order&&(M[O]=V.attributes.order)}var x=function(t,e,n,r){for(var i=Object.assign({},r),o={},s={},u=0,c=Object.values(n);u<c.length;u++){var l,p=c[u],f=p.area_id||p.device_id&&(null===(l=e[p.device_id])||void 0===l?void 0:l.area_id);f&&f in t&&p.entity_id in i?(f in o||(o[f]=[]),o[f].push(i[p.entity_id]),delete i[p.entity_id]):p.device_id&&p.device_id in e&&p.entity_id in i&&(p.device_id in s||(s[p.device_id]=[]),s[p.device_id].push(i[p.entity_id]),delete i[p.entity_id])}for(var d=0,h=Object.entries(s);d<h.length;d++){var y=(0,a.Z)(h[d],2),v=y[0],_=y[1];1===_.length&&(i[_[0].entity_id]=_[0],delete s[v])}return{areasWithEntities:o,devicesWithEntities:s,otherEntities:i}}(t,e,n,k);if(null!=b&&b.hidden){var L,A=(0,i.Z)(b.hidden);try{for(A.s();!(L=A.n()).done;){var S=L.value;delete x.areasWithEntities[S]}}catch(it){A.e(it)}finally{A.f()}}C&&(x.devicesWithEntities={},x.otherEntities={});var W=function(t){var e=[],n={};return Object.keys(t).forEach((function(r){var i=t[r];"group"===(0,s.M)(r)?e.push(i):n[r]=i})),e.forEach((function(t){return t.attributes.entity_id.forEach((function(t){delete n[t]}))})),{groups:e,ungrouped:n}}(x.otherEntities);W.groups.sort((function(t,e){return M[t.entity_id]-M[e.entity_id]}));var z,N=[],P=(0,i.Z)(W.groups);try{for(P.s();!(z=P.n()).done;){var $=z.value;N.push.apply(N,(0,r.Z)(g(o,$.attributes.entity_id,{title:(0,c.C)($),show_header_toggle:"hidden"!==$.attributes.control})))}}catch(it){P.e(it)}finally{P.f()}var q,F=function(t,e,n,a,o){for(var s={},l=0,y=Object.keys(o);l<y.length;l++){var v=y[l],_=o[v],m=(0,u.N)(_);m in s||(s[m]=[]),s[m].push(_.entity_id)}var b=[];if("person"in s){var C=[];if(1===s.person.length)b.push({type:"entities",entities:s.person});else{var w,Z,E="",k=(0,i.Z)(s.person);try{for(k.s();!(Z=k.n()).done;){var M=Z.value,j=o[M],H=j.attributes.entity_picture;if(!H){if(void 0===w){var O=getComputedStyle(document.body);w=encodeURIComponent(O.getPropertyValue("--light-primary-color").trim()),E=encodeURIComponent((O.getPropertyValue("--text-light-primary-color")||O.getPropertyValue("--primary-text-color")).trim())}var V=(0,d.fm)(j.attributes.friendly_name||"");H="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50' style='background-color:".concat(w,"'%3E%3Cg%3E%3Ctext font-family='roboto' x='50%25' y='50%25' text-anchor='middle' stroke='").concat(E,"' font-size='1.3em' dy='.3em'%3E").concat(V,"%3C/text%3E%3C/g%3E%3C/svg%3E")}C.push({type:"picture-entity",entity:M,aspect_ratio:"1",show_name:!1,image:H})}}catch(it){k.e(it)}finally{k.f()}b.push({type:"grid",square:!0,columns:3,cards:C})}delete s.person}var x,L=[],A=(0,i.Z)(h.y);try{for(A.s();!(x=A.n()).done;){var S=x.value;S in s&&(L.push.apply(L,(0,r.Z)(s[S])),delete s[S])}}catch(it){A.e(it)}finally{A.f()}for(var W={},z=0,N=Object.keys(s);z<N.length;z++){var P=N[z];W[P]=(0,f.Lh)(t,P)}L.length&&(s._helpers=L,W._helpers=t("ui.panel.lovelace.strategy.original-states.helpers")),Object.keys(s).sort((function(t,e){return(0,p.$)(W[t],W[e])})).forEach((function(t){b.push.apply(b,(0,r.Z)(g(o,s[t].sort((function(t,e){return(0,p.$)((0,c.C)(o[t]),(0,c.C)(o[e]))})),{title:W[t]})))}));var $={path:e,title:n,cards:b};return a&&($.icon=a),$}(l,"default_view","Home",undefined,W.ungrouped),U=[],I=Object.keys(x.areasWithEntities).sort((0,y.a)(t,null==b?void 0:b.order)),R=(0,i.Z)(I);try{for(R.s();!(q=R.n()).done;){var B=q.value,G=x.areasWithEntities[B],X=t[B];U.push.apply(U,(0,r.Z)(g(o,G.map((function(t){return t.entity_id})),{title:X.name})))}}catch(it){R.e(it)}finally{R.f()}var D,J,K=[],Q=Object.entries(x.devicesWithEntities).sort((function(t,n){var r=e[t[0]],i=e[n[0]];return(0,p.$)(r.name_by_user||r.name||"",i.name_by_user||i.name||"")})),T=(0,i.Z)(Q);try{for(T.s();!(D=T.n()).done;){var Y=(0,a.Z)(D.value,2),tt=Y[0],et=Y[1],nt=e[tt];K.push.apply(K,(0,r.Z)(g(o,et.map((function(t){return t.entity_id})),{title:nt.name_by_user||nt.name||l("ui.panel.config.devices.unnamed_device",{type:l("ui.panel.config.devices.type.".concat(nt.entry_type||"device"))})})))}}catch(it){T.e(it)}finally{T.f()}if(m&&!w){var rt=m.energy_sources.find((function(t){return"grid"===t.type}));rt&&rt.flow_from.length>0&&(J={title:l("ui.panel.lovelace.cards.energy.energy_distribution.title_today"),type:"energy-distribution",link_dashboard:!0})}return(Z=F.cards).unshift.apply(Z,U.concat(N,(0,r.Z)(J?[J]:[]))),(E=F.cards).push.apply(E,K),F}}}]);
//# sourceMappingURL=47680.r6TnfPX0bBY.js.map