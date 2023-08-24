/*! For license information please see 15896-DoHNYtGRh4A.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[15896],{30879:function(e,r,i){i.d(r,{D:function(){return w}});var t,n,a,s,c,o=i(33368),d=i(71650),u=i(69205),l=i(70906),h=i(43204),f=i(79932),p=i(88962),m=i(34541),g=i(47838),_=i(38103),v=i(68144),y=i(83448),b=i(30153),k=i(47501),Z=function(e){(0,u.Z)(i,e);var r=(0,l.Z)(i);function i(){var e;return(0,d.Z)(this,i),(e=r.apply(this,arguments)).indeterminate=!1,e.progress=0,e.density=0,e.closed=!1,e}return(0,o.Z)(i,[{key:"open",value:function(){this.closed=!1}},{key:"close",value:function(){this.closed=!0}},{key:"render",value:function(){var e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},r=48+4*this.density,i={width:"".concat(r,"px"),height:"".concat(r,"px")};return(0,v.dy)(t||(t=(0,p.Z)([' <div class="mdc-circular-progress ','" style="','" role="progressbar" aria-label="','" aria-valuemin="0" aria-valuemax="1" aria-valuenow="','"> '," "," </div>"])),(0,y.$)(e),(0,k.V)(i),(0,b.o)(this.ariaLabel),(0,b.o)(this.indeterminate?void 0:this.progress),this.renderDeterminateContainer(),this.renderIndeterminateContainer())}},{key:"renderDeterminateContainer",value:function(){var e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,a=(1-this.progress)*t,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,v.dy)(n||(n=(0,p.Z)([' <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 '," ",'"> <circle class="mdc-circular-progress__determinate-track" cx="','" cy="','" r="','" stroke-width="','"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),e,e,r,r,i,s,r,r,i,6.2831852*i,a,s)}},{key:"renderIndeterminateContainer",value:function(){return(0,v.dy)(a||(a=(0,p.Z)([' <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> '," </div> </div>"])),this.renderIndeterminateSpinnerLayer())}},{key:"renderIndeterminateSpinnerLayer",value:function(){var e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,n=.5*t,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,v.dy)(s||(s=(0,p.Z)([' <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),e,e,r,r,i,t,n,a,e,e,r,r,i,t,n,.8*a,e,e,r,r,i,t,n,a)}},{key:"update",value:function(e){(0,m.Z)((0,g.Z)(i.prototype),"update",this).call(this,e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}]),i}(v.oi);(0,h.__decorate)([(0,f.Cb)({type:Boolean,reflect:!0})],Z.prototype,"indeterminate",void 0),(0,h.__decorate)([(0,f.Cb)({type:Number,reflect:!0})],Z.prototype,"progress",void 0),(0,h.__decorate)([(0,f.Cb)({type:Number,reflect:!0})],Z.prototype,"density",void 0),(0,h.__decorate)([(0,f.Cb)({type:Boolean,reflect:!0})],Z.prototype,"closed",void 0),(0,h.__decorate)([_.L,(0,f.Cb)({type:String,attribute:"aria-label"})],Z.prototype,"ariaLabel",void 0);var C=(0,v.iv)(c||(c=(0,p.Z)([".mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}"]))),w=function(e){(0,u.Z)(i,e);var r=(0,l.Z)(i);function i(){return(0,d.Z)(this,i),r.apply(this,arguments)}return(0,o.Z)(i)}(Z);w.styles=[C],w=(0,h.__decorate)([(0,f.Mo)("mwc-circular-progress")],w)},11950:function(e,r,i){i.d(r,{l:function(){return a}});var t=i(99312),n=i(81043),a=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r,i){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=i(r,(function(r){t(),e(r)}))})));case 1:case"end":return e.stop()}}),e)})));return function(r,i){return e.apply(this,arguments)}}()},31206:function(e,r,i){i.r(r),i.d(r,{HaCircularProgress:function(){return g}});var t,n=i(88962),a=i(33368),s=i(71650),c=i(82390),o=i(69205),d=i(70906),u=i(91808),l=i(34541),h=i(47838),f=i(30879),p=i(68144),m=i(79932),g=(0,u.Z)([(0,m.Mo)("ha-circular-progress")],(function(e,r){var i=function(r){(0,o.Z)(t,r);var i=(0,d.Z)(t);function t(){var r;(0,s.Z)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=i.call.apply(i,[this].concat(a)),e((0,c.Z)(r)),r}return(0,a.Z)(t)}(r);return{F:i,d:[{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,m.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,l.Z)((0,h.Z)(i),"styles",this),(0,p.iv)(t||(t=(0,n.Z)([":host{overflow:hidden}"])))]}}]}}),f.D)},73826:function(e,r,i){i.d(r,{f:function(){return f}});var t=i(40039),n=i(33368),a=i(71650),s=i(82390),c=i(69205),o=i(70906),d=i(91808),u=i(34541),l=i(47838),h=i(79932),f=function(e){var r=(0,d.Z)(null,(function(e,r){var i=function(r){(0,c.Z)(t,r);var i=(0,o.Z)(t);function t(){var r;(0,a.Z)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return r=i.call.apply(i,[this].concat(c)),e((0,s.Z)(r)),r}return(0,n.Z)(t)}(r);return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,u.Z)((0,l.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,u.Z)((0,l.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var e=this.__unsubs.pop();e instanceof Promise?e.then((function(e){return e()})):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,u.Z)((0,l.Z)(i.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var r,n=(0,t.Z)(e.keys());try{for(n.s();!(r=n.n()).done;){var a=r.value;if(this.hassSubscribeRequiredHostProps.includes(a))return void this.__checkSubscribed()}}catch(s){n.e(s)}finally{n.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e,r=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((function(e){return void 0===r[e]}))||(this.__unsubs=this.hassSubscribe())}}]}}),e);return r}},95795:function(e,r,i){i.r(r),i.d(r,{HuiAreaCard:function(){return U}});var t,n,a,s,c,o,d,u,l,h,f=i(88962),p=i(40039),m=i(99312),g=i(81043),_=i(33368),v=i(71650),y=i(82390),b=i(69205),k=i(70906),Z=i(91808),C=i(34541),w=i(47838),A=(i(27763),i(68144)),x=i(79932),L=i(83448),H=i(14516),M=i(49706),V=i(62877),S=i(58831),z=i(47772),B=i(83849),I=i(18457),D=i(11950),N=(i(3143),i(22098),i(10983),i(87037),i(52039),i(57066)),P=i(57292),R=i(56007),q=i(74186),j=i(62359),E=i(73826),O=(i(97282),i(75502),["sensor"]),F=["binary_sensor"],G=["light","switch","fan"],K=["camera"],$={sensor:["temperature","humidity"],binary_sensor:["motion","moisture"]},T={light:{on:"M17 16V18C17 18.55 16.53 19 16 19H12C11.42 19 11 18.55 11 18V16C8.77 14.34 8.32 11.21 10 9S14.77 6.34 17 8 19.63 12.79 18 15C17.69 15.38 17.35 15.72 17 16M16 20H12V21C12 21.55 12.42 22 13 22H15C15.53 22 16 21.55 16 21M7.66 15H7V16C7 16.55 7.42 17 8 17H9V16.88C8.44 16.33 8 15.7 7.66 15M13.58 5C12.46 2.47 9.5 1.33 7 2.45S3.31 6.5 4.43 9.04C4.77 9.81 5.3 10.5 6 11V13C6 13.55 6.42 14 7 14H7.28C7.07 13.35 6.97 12.68 7 12C6.97 8.29 9.87 5.21 13.58 5Z",off:"M20.84 22.73L16.74 18.63C16.55 18.85 16.29 19 16 19H12C11.42 19 11 18.55 11 18V16C9.37 14.8 8.71 12.82 9.1 11L7.5 9.39C7.17 10.2 6.97 11.08 7 12C6.97 12.68 7.07 13.35 7.28 14H7C6.42 14 6 13.55 6 13V11C5.3 10.5 4.77 9.81 4.43 9.04C4 8.05 3.91 7 4.12 6L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M13.58 5C12.46 2.47 9.5 1.33 7 2.45C6.68 2.58 6.39 2.75 6.13 2.93L9.67 6.47C10.76 5.63 12.1 5.08 13.58 5M18.06 14.86C19.6 12.66 19.14 9.62 17 8C15.2 6.67 12.84 6.72 11.12 7.92L18.06 14.86M12 21C12 21.55 12.42 22 13 22H15C15.53 22 16 21.55 16 21V20H12V21M7 15V16C7 16.55 7.42 17 8 17H9V16.88C8.43 16.33 8 15.7 7.66 15H7Z"},switch:{on:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z",off:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"},fan:{on:(0,z.K)("fan"),off:(0,z.K)("fan")},sensor:{temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"},binary_sensor:{motion:"M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z",moisture:"M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20S4 17.31 4 14C4 10 10 3.25 10 3.25M20 7V13H18V7H20M18 17H20V15H18V17Z"}},U=(0,Z.Z)([(0,x.Mo)("hui-area-card")],(function(e,r){var Z,z,E=function(r){(0,b.Z)(t,r);var i=(0,k.Z)(t);function t(){var r;(0,v.Z)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return r=i.call.apply(i,[this].concat(a)),e((0,y.Z)(r)),r}return(0,_.Z)(t)}(r);return{F:E,d:[{kind:"method",static:!0,key:"getConfigElement",value:(z=(0,g.Z)((0,m.Z)().mark((function e(){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.e(36741).then(i.bind(i,36741));case 2:return e.abrupt("return",document.createElement("hui-area-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return z.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:(Z=(0,g.Z)((0,m.Z)().mark((function e(r){var i,t;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,D.l)(r.connection,N.sG);case 2:return t=e.sent,e.abrupt("return",{type:"area",area:(null===(i=t[0])||void 0===i?void 0:i.area_id)||""});case 4:case"end":return e.stop()}}),e)}))),function(e){return Z.apply(this,arguments)})},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_devices",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_areas",value:void 0},{kind:"field",key:"_entitiesByDomain",value:function(){return(0,H.Z)((function(e,r,i,t){var n,a=i.filter((function(i){return!i.entity_category&&!i.hidden_by&&(i.area_id?i.area_id===e:i.device_id&&r.has(i.device_id))})).map((function(e){return e.entity_id})),s={},c=(0,p.Z)(a);try{for(c.s();!(n=c.n()).done;){var o=n.value,d=(0,S.M)(o);if(G.includes(d)||O.includes(d)||F.includes(d)||K.includes(d)){var u=t[o];u&&(!O.includes(d)&&!F.includes(d)||$[d].includes(u.attributes.device_class||""))&&(d in s||(s[d]=[]),s[d].push(u))}}}catch(l){c.e(l)}finally{c.f()}return s}))}},{kind:"method",key:"_isOn",value:function(e,r){var i=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states)[e];if(i)return(r?i.filter((function(e){return e.attributes.device_class===r})):i).some((function(e){return!(0,R.rk)(e.state)&&!M.tj.includes(e.state)}))}},{kind:"method",key:"_average",value:function(e,r){var i=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states)[e].filter((function(e){return!r||e.attributes.device_class===r}));if(i){var t,n=i.filter((function(e){return!(!e.attributes.unit_of_measurement||isNaN(Number(e.state)))&&(t?e.attributes.unit_of_measurement===t:(t=e.attributes.unit_of_measurement,!0))}));if(n.length){var a=n.reduce((function(e,r){return e+Number(r.state)}),0);return"".concat((0,I.uf)(a/n.length,this.hass.locale,{maximumFractionDigits:1})," ").concat(t)}}}},{kind:"field",key:"_area",value:function(){return(0,H.Z)((function(e,r){return r.find((function(r){return r.area_id===e}))||null}))}},{kind:"field",key:"_devicesInArea",value:function(){return(0,H.Z)((function(e,r){return new Set(e?r.filter((function(r){return r.area_id===e})).map((function(e){return e.id})):[])}))}},{kind:"method",key:"hassSubscribe",value:function(){var e=this;return[(0,N.sG)(this.hass.connection,(function(r){e._areas=r})),(0,P.q4)(this.hass.connection,(function(r){e._devices=r})),(0,q.LM)(this.hass.connection,(function(r){e._entities=r}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e.area)throw new Error("Area Required");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config")||!this._config)return!0;if(e.has("_devicesInArea")||e.has("_areas")||e.has("_entities"))return!0;if(!e.has("hass"))return!1;var r=e.get("hass");if(!r||r.themes!==this.hass.themes||r.locale!==this.hass.locale)return!0;if(!this._devices||!this._devicesInArea(this._config.area,this._devices)||!this._entities)return!1;for(var i=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states),t=0,n=Object.values(i);t<n.length;t++){var a,s=n[t],c=(0,p.Z)(s);try{for(c.s();!(a=c.n()).done;){var o=a.value;if(r.states[o.entity_id]!==o)return!0}}catch(d){c.e(d)}finally{c.f()}}return!1}},{kind:"method",key:"render",value:function(){var e=this;if(!(this._config&&this.hass&&this._areas&&this._devices&&this._entities))return A.Ld;var r=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states),i=this._area(this._config.area,this._areas);if(null===i)return(0,A.dy)(t||(t=(0,f.Z)([" <hui-warning> "," </hui-warning> "])),this.hass.localize("ui.card.area.area_not_found"));var h,p=[];return O.forEach((function(i){i in r&&$[i].forEach((function(t){r[i].some((function(e){return e.attributes.device_class===t}))&&p.push((0,A.dy)(n||(n=(0,f.Z)([" "," "," "])),T[i][t]?(0,A.dy)(a||(a=(0,f.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),T[i][t]):"",e._average(i,t)))}))})),this._config.show_camera&&"camera"in r&&(h=r.camera[0].entity_id),(0,A.dy)(s||(s=(0,f.Z)([' <ha-card class="','"> ',' <div class="container ','" @click="','"> <div class="alerts"> ',' </div> <div class="bottom"> <div> <div class="name">',"</div> ",' </div> <div class="buttons"> '," </div> </div> </div> </ha-card> "])),i.picture||h?"image":"",i.picture||h?(0,A.dy)(c||(c=(0,f.Z)(['<hui-image .config="','" .hass="','" .image="','" .cameraImage="','" aspectRatio="16:9"></hui-image>'])),this._config,this.hass,i.picture?i.picture:void 0,h):"",(0,L.$)({navigate:void 0!==this._config.navigation_path}),this._handleNavigation,F.map((function(i){return i in r?$[i].map((function(r){return e._isOn(i,r)?(0,A.dy)(o||(o=(0,f.Z)([" "," "])),T[i][r]?(0,A.dy)(d||(d=(0,f.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),T[i][r]):""):""})):""})),i.name,p.length?(0,A.dy)(u||(u=(0,f.Z)(['<div class="sensors">',"</div>"])),p):"",G.map((function(i){if(!(i in r))return"";var t=e._isOn(i);return G.includes(i)?(0,A.dy)(l||(l=(0,f.Z)([' <ha-icon-button class="','" .path="','" .domain="','" @click="','"> </ha-icon-button> '])),t?"on":"off",T[i][t?"on":"off"],i,e._toggle):""})))}},{kind:"method",key:"updated",value:function(e){if((0,C.Z)((0,w.Z)(E.prototype),"updated",this).call(this,e),this._config&&this.hass){var r=e.get("hass"),i=e.get("_config");(!e.has("hass")||r&&r.themes===this.hass.themes)&&(!e.has("_config")||i&&i.theme===this._config.theme)||(0,V.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_handleNavigation",value:function(){this._config.navigation_path&&(0,B.c)(this._config.navigation_path)}},{kind:"method",key:"_toggle",value:function(e){e.stopPropagation();var r=e.currentTarget.domain;G.includes(r)&&this.hass.callService(r,this._isOn(r)?"turn_off":"turn_on",void 0,{area_id:this._config.area}),(0,j.j)("light")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,A.iv)(h||(h=(0,f.Z)(['ha-card{overflow:hidden;position:relative;padding-bottom:56.25%;background-size:cover}ha-card.image{padding-bottom:0}.container{display:flex;flex-direction:column;justify-content:space-between;position:absolute;top:0;bottom:0;left:0;right:0;background:linear-gradient(0,rgba(33,33,33,.9) 0%,rgba(33,33,33,0) 45%)}ha-card:not(.image) .container::before{position:absolute;content:"";width:100%;height:100%;background-color:var(--sidebar-selected-icon-color);opacity:.12}.sensors{color:#e3e3e3;font-size:16px;--mdc-icon-size:24px;opacity:.6;margin-top:8px}.alerts{padding:16px}.alerts ha-svg-icon{background:var(--accent-color);color:var(--text-accent-color,var(--text-primary-color));padding:8px;border-radius:50%}.name{color:#fff;font-size:24px}.bottom{display:flex;justify-content:space-between;align-items:center;padding:16px}.navigate{cursor:pointer}ha-icon-button{color:#fff;background-color:var(--area-button-color,#727272b2);border-radius:50%;margin-left:8px;--mdc-icon-button-size:44px}.on{color:var(--state-light-active-color)}'])))}}]}}),(0,E.f)(A.oi))}}]);
//# sourceMappingURL=15896-DoHNYtGRh4A.js.map