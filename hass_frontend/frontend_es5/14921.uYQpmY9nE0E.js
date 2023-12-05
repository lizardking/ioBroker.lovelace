"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[14921],{12198:function(e,t,n){n.d(t,{D_:function(){return Z},NC:function(){return g},Nh:function(){return _},U8:function(){return x},WB:function(){return m},mn:function(){return c},p6:function(){return s},pU:function(){return r},ud:function(){return f},yQ:function(){return k}});var i=n(93359),o=(n(85472),n(46798),n(9849),n(90126),n(45882),n(37724),n(97393),n(14516)),a=n(66477),r=(n(4631),function(e,t,n){return l(t,n.time_zone).format(e)}),l=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),s=function(e,t,n){return d(t,n.time_zone).format(e)},d=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),c=function(e,t,n){return u(t,n.time_zone).format(e)},u=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),m=function(e,t,n){var o,r,l,s,d=h(t,n.time_zone);if(t.date_format===a.t6.language||t.date_format===a.t6.system)return d.format(e);var c=d.formatToParts(e),u=null===(o=c.find((function(e){return"literal"===e.type})))||void 0===o?void 0:o.value,m=null===(r=c.find((function(e){return"day"===e.type})))||void 0===r?void 0:r.value,f=null===(l=c.find((function(e){return"month"===e.type})))||void 0===l?void 0:l.value,v=null===(s=c.find((function(e){return"year"===e.type})))||void 0===s?void 0:s.value,g=c.at(c.length-1),p="literal"===(null==g?void 0:g.type)?null==g?void 0:g.value:"";return"bg"===t.language&&t.date_format===a.t6.YMD&&(p=""),(0,i.Z)((0,i.Z)((0,i.Z)({},a.t6.DMY,"".concat(m).concat(u).concat(f).concat(u).concat(v).concat(p)),a.t6.MDY,"".concat(f).concat(u).concat(m).concat(u).concat(v).concat(p)),a.t6.YMD,"".concat(v).concat(u).concat(f).concat(u).concat(m).concat(p))[t.date_format]},h=(0,o.Z)((function(e,t){var n=e.date_format===a.t6.system?void 0:e.language;return e.date_format===a.t6.language||(e.date_format,a.t6.system),new Intl.DateTimeFormat(n,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),f=function(e,t,n){return v(t,n.time_zone).format(e)},v=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:"server"===e.time_zone?t:void 0})})),g=function(e,t,n){return p(t,n.time_zone).format(e)},p=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),_=function(e,t,n){return y(t,n.time_zone).format(e)},y=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{month:"long",timeZone:"server"===e.time_zone?t:void 0})})),k=function(e,t,n){return b(t,n.time_zone).format(e)},b=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),Z=function(e,t,n){return w(t,n.time_zone).format(e)},w=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:"server"===e.time_zone?t:void 0})})),x=function(e,t,n){return z(t,n.time_zone).format(e)},z=(0,o.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:"server"===e.time_zone?t:void 0})}))},34821:function(e,t,n){n.d(t,{i:function(){return b}});var i,o,a,r=n(33368),l=n(71650),s=n(82390),d=n(69205),c=n(70906),u=n(91808),m=n(34541),h=n(47838),f=n(88962),v=(n(97393),n(91989),n(87762)),g=n(91632),p=n(68144),_=n(95260),y=n(74265),k=(n(10983),["button","ha-list-item"]),b=function(e,t){var n;return(0,p.dy)(i||(i=(0,f.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,null!==(n=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==n?n:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,_.Mo)("ha-dialog")],(function(e,t){var n=function(t){(0,d.Z)(i,t);var n=(0,c.Z)(i);function i(){var t;(0,l.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,s.Z)(t)),t}return(0,r.Z)(i)}(t);return{F:n,d:[{kind:"field",key:y.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var n;null===(n=this.contentElement)||void 0===n||n.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,p.dy)(o||(o=(0,f.Z)(['<slot name="heading"> '," </slot>"])),(0,m.Z)((0,h.Z)(n.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,m.Z)((0,h.Z)(n.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.Z)((0,h.Z)(n.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,p.iv)(a||(a=(0,f.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),v.M)},65189:function(e,t,n){var i,o,a,r=n(88962),l=n(33368),s=n(71650),d=n(82390),c=n(69205),u=n(70906),m=n(91808),h=(n(97393),n(68144)),f=n(95260),v=n(99312),g=n(40039),p=n(81043),_=n(34541),y=n(47838),k=(n(10187),n(32797),n(5239),n(17692),n(86439),n(47181)),b=(n(51358),n(46798),n(98490),n(31528),n(7695),n(44758),n(80354),n(68630),n(93217)),Z=function(){var e=(0,p.Z)((0,v.Z)().mark((function e(t,o,a){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i||(i=(0,b.Ud)(new Worker(new URL(n.p+n.u(71402),n.b)))),e.abrupt("return",i.renderMarkdown(t,o,a));case 2:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),w={Note:"info",Warning:"warning"};(0,m.Z)([(0,f.Mo)("ha-markdown-element")],(function(e,t){var n,i=function(t){(0,c.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,d.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,_.Z)((0,y.Z)(i.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:(n=(0,p.Z)((0,v.Z)().mark((function e(){var t,n,i,o,a,r,l,s,d,c,u;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg});case 2:for(this.innerHTML=e.sent,this._resize(),t=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);t.nextNode();)if((n=t.currentNode)instanceof HTMLAnchorElement&&n.host!==document.location.host)n.target="_blank",n.rel="noreferrer noopener";else if(n instanceof HTMLImageElement)this.lazyImages&&(n.loading="lazy"),n.addEventListener("load",this._resize);else if(n instanceof HTMLQuoteElement&&(i=n.firstElementChild,o=null==i?void 0:i.firstElementChild,a=(null==o?void 0:o.textContent)&&w[o.textContent],"STRONG"===(null==o?void 0:o.nodeName)&&a)){(l=document.createElement("ha-alert")).alertType=a,l.title="#text"===i.childNodes[1].nodeName&&(null===(r=i.childNodes[1].textContent)||void 0===r?void 0:r.trimStart())||"",s=Array.from(i.childNodes),d=(0,g.Z)(s.slice(s.findIndex((function(e){return e instanceof HTMLBRElement}))+1));try{for(d.s();!(c=d.n()).done;)u=c.value,l.appendChild(u)}catch(m){d.e(m)}finally{d.f()}n.firstElementChild.replaceWith(l)}case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_resize",value:function(){var e=this;return function(){return(0,k.B)(e,"content-resize")}}}]}}),h.fl),n(9381),n(81312),n(52039),(0,m.Z)([(0,f.Mo)("ha-markdown")],(function(e,t){var n=function(t){(0,c.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,d.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"render",value:function(){return this.content?(0,h.dy)(o||(o=(0,r.Z)(['<ha-markdown-element .content="','" .allowSvg="','" .breaks="','" .lazyImages="','"></ha-markdown-element>'])),this.content,this.allowSvg,this.breaks,this.lazyImages):h.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(a||(a=(0,r.Z)([":host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family, monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}"])))}}]}}),h.oi)},14921:function(e,t,n){n.r(t);var i,o,a,r,l,s=n(88962),d=n(33368),c=n(71650),u=n(82390),m=n(69205),h=n(70906),f=n(91808),v=(n(97393),n(88640),n(63789),n(24074),n(47704),n(68144)),g=n(95260),p=n(12198),_=n(47181),y=n(9430),k=n(34821),b=(n(65189),n(45339)),Z=n(11654);(0,f.Z)([(0,g.Mo)("dialog-repairs-issue")],(function(e,t){var n=function(t){(0,m.Z)(i,t);var n=(0,h.Z)(i);function i(){var t;(0,c.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,u.Z)(t)),t}return(0,d.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_issue",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._issue=this._params.issue}},{kind:"method",key:"closeDialog",value:function(){var e;null!==(e=this._params)&&void 0!==e&&e.dialogClosedCallback&&this._params.dialogClosedCallback(),this._params=void 0,this._issue=void 0,(0,_.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;if(!this._issue)return v.Ld;var t=(null===(e=this._issue.learn_more_url)||void 0===e?void 0:e.startsWith("homeassistant://"))||!1;return(0,v.dy)(i||(i=(0,s.Z)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> ',' <ha-markdown allowsvg breaks @click="','" .content="','"></ha-markdown> ',' <div class="secondary"> <span class="','">'," </span> - "," </div> </div> ",' <mwc-button slot="secondaryAction" .label="','" @click="','"></mwc-button> </ha-dialog> '])),this.closeDialog,(0,k.i)(this.hass,this.hass.localize("component.".concat(this._issue.domain,".issues.").concat(this._issue.translation_key||this._issue.issue_id,".title"),this._issue.translation_placeholders||{})||this.hass.localize("ui.panel.config.repairs.dialog.title")),this._issue.breaks_in_ha_version?(0,v.dy)(o||(o=(0,s.Z)([' <ha-alert alert-type="warning"> '," </ha-alert> "])),this.hass.localize("ui.panel.config.repairs.dialog.breaks_in_version",{version:this._issue.breaks_in_ha_version})):"",this._clickHandler,this.hass.localize("component.".concat(this._issue.domain,".issues.").concat(this._issue.translation_key||this._issue.issue_id,".description"),this._issue.translation_placeholders),this._issue.dismissed_version?(0,v.dy)(a||(a=(0,s.Z)([' <br><span class="dismissed"> ',"</span> "])),this.hass.localize("ui.panel.config.repairs.dialog.ignored_in_version",{version:this._issue.dismissed_version})):"",this._issue.severity,this.hass.localize("ui.panel.config.repairs.".concat(this._issue.severity)),this._issue.created?(0,p.WB)(new Date(this._issue.created),this.hass.locale,this.hass.config):"",this._issue.learn_more_url?(0,v.dy)(r||(r=(0,s.Z)([' <a .href="','" .target="','" @click="','" slot="primaryAction" rel="noopener noreferrer"> <mwc-button .label="','"></mwc-button> </a> '])),t?this._issue.learn_more_url.replace("homeassistant://","/"):this._issue.learn_more_url,t?"":"_blank",t?this.closeDialog:void 0,this.hass.localize("ui.panel.config.repairs.dialog.learn")):"",this._issue.ignored?this.hass.localize("ui.panel.config.repairs.dialog.unignore"):this.hass.localize("ui.panel.config.repairs.dialog.ignore"),this._ignoreIssue)}},{kind:"method",key:"_ignoreIssue",value:function(){(0,b.Ur)(this.hass,this._issue,!this._issue.ignored),this.closeDialog()}},{kind:"method",key:"_clickHandler",value:function(e){(0,y.J)(e,!1)&&this.closeDialog()}},{kind:"field",static:!0,key:"styles",value:function(){return[Z.yu,(0,v.iv)(l||(l=(0,s.Z)(["ha-alert{margin-bottom:16px;display:block}a{text-decoration:none}.dismissed{font-style:italic}.secondary{margin-top:8px;text-align:right;color:var(--secondary-text-color)}.critical,.error{color:var(--error-color)}.warning{color:var(--warning-color)}"])))]}}]}}),v.oi)}}]);
//# sourceMappingURL=14921.uYQpmY9nE0E.js.map