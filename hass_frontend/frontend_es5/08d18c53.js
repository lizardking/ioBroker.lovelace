"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[78866],{78866:function(n,e,t){t.d(e,{D:function(){return m}});var r,o,i=t(37500),a=t(81582),c=t(5986),l=t(75580),u=t(2852),s=t(26765),d=t(70332),f=t(27322),p=t(7323),g=t(83849);function h(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function w(n,e,t,r,o,i,a){try{var c=n[i](a),l=c.value}catch(u){return void t(u)}c.done?e(l):Promise.resolve(l).then(r,o)}var m=function(){var n,e=(n=regeneratorRuntime.mark((function n(e,t,w,m){var _,v,b,z,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==m||!m.domain){n.next=5;break}return n.next=3,t.loadBackendTranslation("title",m.domain);case 3:_=n.sent,m.domain=(0,c.Lh)(_,m.domain);case 5:if(null==m||!m.brand){n.next=10;break}return n.next=8,(0,l.G)(t);case 8:b=n.sent,m.brand=(null===(v=b.core.integration[m.brand])||void 0===v?void 0:v.name)||m.brand;case 10:if("zwave_js"!==w){n.next=20;break}return n.next=13,(0,a.pB)(t,{domain:w});case 13:if(z=n.sent,(0,p.p)(t,"zwave_js")&&z.length){n.next=17;break}return(0,s.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:(null==m?void 0:m.brand)||(null==m?void 0:m.domain)||"Z-Wave",supported_hardware_link:(0,i.dy)(r||(r=h(["<a\n              href=",'\n              target="_blank"\n              rel="noreferrer"\n              >',"</a\n            >"])),(0,f.R)(t,"/docs/z-wave/controllers"),t.localize("ui.panel.config.integrations.config_flow.supported_hardware"))}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:function(){(0,u.t)(e,{startFlowHandler:"zwave_js"})}}),n.abrupt("return");case 17:(0,d.B)(e,{entry_id:z[0].entry_id}),n.next=28;break;case 20:if("zha"!==w){n.next=28;break}return n.next=23,(0,a.pB)(t,{domain:w});case 23:if(y=n.sent,(0,p.p)(t,"zha")&&y.length){n.next=27;break}return(0,s.g7)(e,{title:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:t.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:(null==m?void 0:m.brand)||(null==m?void 0:m.domain)||"Z-Wave",supported_hardware_link:(0,i.dy)(o||(o=h(["<a\n              href=",'\n              target="_blank"\n              rel="noreferrer"\n              >',"</a\n            >"])),(0,f.R)(t,"/integrations/zha/#known-working-zigbee-radio-modules"),t.localize("ui.panel.config.integrations.config_flow.supported_hardware"))}),confirmText:t.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:function(){(0,u.t)(e,{startFlowHandler:"zha"})}}),n.abrupt("return");case 27:(0,g.c)("/config/zha/add");case 28:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){w(i,r,o,a,c,"next",n)}function c(n){w(i,r,o,a,c,"throw",n)}a(void 0)}))});return function(n,t,r,o){return e.apply(this,arguments)}}()},73728:function(n,e,t){t.d(e,{pV:function(){return a},P3:function(){return c},Ky:function(){return u},D4:function(){return s},XO:function(){return d},zO:function(){return f},oi:function(){return p},d4:function(){return g},D7:function(){return h},ZJ:function(){return m},V3:function(){return _},WW:function(){return v}});var r=t(97330),o=t(38346),i=t(5986),a=["bluetooth","dhcp","discovery","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"],c=["reauth"],l={"HA-Frontend-Base":"".concat(location.protocol,"//").concat(location.host)},u=function(n,e){var t;return n.callApi("POST","config/config_entries/flow",{handler:e,show_advanced_options:Boolean(null===(t=n.userData)||void 0===t?void 0:t.showAdvanced)},l)},s=function(n,e){return n.callApi("GET","config/config_entries/flow/".concat(e),void 0,l)},d=function(n,e,t){return n.callApi("POST","config/config_entries/flow/".concat(e),t,l)},f=function(n,e,t){return n.callWS({type:"config_entries/ignore_flow",flow_id:e,title:t})},p=function(n,e){return n.callApi("DELETE","config/config_entries/flow/".concat(e))},g=function(n,e){return n.callApi("GET","config/config_entries/flow_handlers".concat(e?"?type=".concat(e):""))},h=function(n){return n.sendMessagePromise({type:"config_entries/flow/progress"})},w=function(n,e){return n.subscribeEvents((0,o.D)((function(){return h(n).then((function(n){return e.setState(n,!0)}))}),500,!0),"config_entry_discovered")},m=function(n){return(0,r._)(n,"_configFlowProgress",h,w)},_=function(n,e){return m(n.connection).subscribe(e)},v=function(n,e){return e.context.title_placeholders&&0!==Object.keys(e.context.title_placeholders).length?n("component.".concat(e.handler,".config.flow_title"),e.context.title_placeholders)||("name"in e.context.title_placeholders?e.context.title_placeholders.name:(0,i.Lh)(n,e.handler)):(0,i.Lh)(n,e.handler)}},75580:function(n,e,t){t.d(e,{G:function(){return r},p:function(){return o}});var r=function(n){return n.callWS({type:"integration/descriptions"})},o=function(n,e){if(n){if(e in n){var t=n[e];if("integration_type"in t)return t}for(var r=0,o=Object.values(n);r<o.length;r++){var i=o[r];if("integrations"in i&&i.integrations&&e in i.integrations)return i.integrations[e]}}}},2852:function(n,e,t){t.d(e,{t:function(){return z}});var r,o,i,a,c,l,u,s,d,f=t(37500),p=t(73728),g=t(5986),h=t(52871);function w(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return _(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function v(n,e,t,r,o,i,a){try{var c=n[i](a),l=c.value}catch(u){return void t(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){v(i,r,o,a,c,"next",n)}function c(n){v(i,r,o,a,c,"throw",n)}a(void 0)}))}}var z=function(n,e){return(0,h.w)(n,e,{loadDevicesAndAreas:!0,createFlow:(_=b(regeneratorRuntime.mark((function n(e,t){var r,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([(0,p.Ky)(e,t),e.loadBackendTranslation("config",t),e.loadBackendTranslation("title",t)]);case 2:return r=n.sent,o=m(r,1),i=o[0],n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)}))),function(n,e){return _.apply(this,arguments)}),fetchFlow:(t=b(regeneratorRuntime.mark((function n(e,t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.D4)(e,t);case 2:return r=n.sent,n.next=5,e.loadBackendTranslation("config",r.handler);case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),function(n,e){return t.apply(this,arguments)}),handleFlowStep:p.XO,deleteFlow:p.oi,renderAbortDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.abort.").concat(e.reason),e.description_placeholders);return t?(0,f.dy)(r||(r=w(["\n            <ha-markdown allowsvg breaks .content=","></ha-markdown>\n          "])),t):""},renderShowFormStepHeader:function(n,e){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".title"))||n.localize("component.".concat(e.handler,".title"))},renderShowFormStepDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".description"),e.description_placeholders);return t?(0,f.dy)(o||(o=w(["\n            <ha-markdown allowsvg breaks .content=","></ha-markdown>\n          "])),t):""},renderShowFormStepFieldLabel:function(n,e,t){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".data.").concat(t.name))},renderShowFormStepFieldHelper:function(n,e,t){var r=n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".data_description.").concat(t.name),e.description_placeholders);return r?(0,f.dy)(i||(i=w(["<ha-markdown breaks .content=","></ha-markdown>"])),r):""},renderShowFormStepFieldError:function(n,e,t){return n.localize("component.".concat(e.handler,".config.error.").concat(t),e.description_placeholders)},renderExternalStepHeader:function(n,e){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".title"))||n.localize("ui.panel.config.integrations.config_flow.external_step.open_site")},renderExternalStepDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.").concat(e.step_id,".description"),e.description_placeholders);return(0,f.dy)(a||(a=w(["\n        <p>\n          ","\n        </p>\n        ","\n      "])),n.localize("ui.panel.config.integrations.config_flow.external_step.description"),t?(0,f.dy)(c||(c=w(["\n              <ha-markdown\n                allowsvg\n                breaks\n                .content=","\n              ></ha-markdown>\n            "])),t):"")},renderCreateEntryDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.create_entry.").concat(e.description||"default"),e.description_placeholders);return(0,f.dy)(l||(l=w(["\n        ","\n        <p>\n          ","\n        </p>\n      "])),t?(0,f.dy)(u||(u=w(["\n              <ha-markdown\n                allowsvg\n                breaks\n                .content=","\n              ></ha-markdown>\n            "])),t):"",n.localize("ui.panel.config.integrations.config_flow.created_config","name",e.title))},renderShowFormProgressHeader:function(n,e){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".title"))||n.localize("component.".concat(e.handler,".title"))},renderShowFormProgressDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.progress.").concat(e.progress_action),e.description_placeholders);return t?(0,f.dy)(s||(s=w(["\n            <ha-markdown allowsvg breaks .content=","></ha-markdown>\n          "])),t):""},renderMenuHeader:function(n,e){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".title"))||n.localize("component.".concat(e.handler,".title"))},renderMenuDescription:function(n,e){var t=n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".description"),e.description_placeholders);return t?(0,f.dy)(d||(d=w(["\n            <ha-markdown allowsvg breaks .content=","></ha-markdown>\n          "])),t):""},renderMenuOption:function(n,e,t){return n.localize("component.".concat(e.handler,".config.step.").concat(e.step_id,".menu_options.").concat(t),e.description_placeholders)},renderLoadingDescription:function(n,e,t,r){if("loading_flow"!==e&&"loading_step"!==e)return"";var o=(null==r?void 0:r.handler)||t;return n.localize("ui.panel.config.integrations.config_flow.loading.".concat(e),{integration:o?(0,g.Lh)(n.localize,o):n.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}});var t,_}},52871:function(n,e,t){t.d(e,{w:function(){return i}});var r=t(47181),o=function(){return Promise.all([t.e(29563),t.e(98985),t.e(79071),t.e(24103),t.e(88278),t.e(6294),t.e(41985),t.e(85084),t.e(78874),t.e(45507),t.e(54444),t.e(49842),t.e(51644),t.e(1548),t.e(49075),t.e(54930),t.e(91074),t.e(3555),t.e(86630),t.e(34821),t.e(77576),t.e(81545),t.e(12545),t.e(26272),t.e(13701),t.e(25727),t.e(73826),t.e(29925),t.e(4940),t.e(76780),t.e(16259)]).then(t.bind(t,93990))},i=function(n,e,t){(0,r.B)(n,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:Object.assign({},e,{flowConfig:t,dialogParentElement:n})})}},27322:function(n,e,t){t.d(e,{R:function(){return r}});var r=function(n,e){return"https://www.iobroker.net/#".concat(n.language&&n.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);