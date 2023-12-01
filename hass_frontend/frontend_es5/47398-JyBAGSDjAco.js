"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[47398],{54736:function(e,r,o){var t,n,a=o(88962),i=o(33368),c=o(71650),s=o(82390),l=o(69205),d=o(70906),u=o(91808),h=o(68144),f=o(79932);(0,u.Z)([(0,f.Mo)("ha-ansi-to-html")],(function(e,r){var o=function(r){(0,l.Z)(t,r);var o=(0,d.Z)(t);function t(){var r;(0,c.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=o.call.apply(o,[this].concat(a)),e((0,s.Z)(r)),r}return(0,i.Z)(t)}(r);return{F:o,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"content",value:void 0},{kind:"method",key:"render",value:function(){return(0,h.dy)(t||(t=(0,a.Z)(["",""])),this._parseTextToColoredPre(this.content))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(n||(n=(0,a.Z)(["pre{overflow-x:auto;white-space:pre-wrap;overflow-wrap:break-word}.bold{font-weight:700}.italic{font-style:italic}.underline{text-decoration:underline}.strikethrough{text-decoration:line-through}.underline.strikethrough{text-decoration:underline line-through}.fg-red{color:var(--error-color)}.fg-green{color:var(--success-color)}.fg-yellow{color:var(--warning-color)}.fg-blue{color:var(--info-color)}.fg-magenta{color:#762671}.fg-cyan{color:#2cb5e9}.fg-white{color:#ccc}.bg-black{background-color:#000}.bg-red{background-color:var(--error-color)}.bg-green{background-color:var(--success-color)}.bg-yellow{background-color:var(--warning-color)}.bg-blue{background-color:var(--info-color)}.bg-magenta{background-color:#762671}.bg-cyan{background-color:#2cb5e9}.bg-white{background-color:#ccc}"])))}},{kind:"method",key:"_parseTextToColoredPre",value:function(e){for(var r,o=document.createElement("pre"),t=/\033(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g,n=0,a={bold:!1,italic:!1,underline:!1,strikethrough:!1,foregroundColor:null,backgroundColor:null},i=function(e){var r=document.createElement("span");a.bold&&r.classList.add("bold"),a.italic&&r.classList.add("italic"),a.underline&&r.classList.add("underline"),a.strikethrough&&r.classList.add("strikethrough"),null!==a.foregroundColor&&r.classList.add("fg-".concat(a.foregroundColor)),null!==a.backgroundColor&&r.classList.add("bg-".concat(a.backgroundColor)),r.appendChild(document.createTextNode(e)),o.appendChild(r)};null!==(r=t.exec(e));){var c=r.index;i(e.substring(n,c)),n=c+r[0].length,void 0!==r[1]&&r[1].split(";").forEach((function(e){switch(parseInt(e,10)){case 0:a.bold=!1,a.italic=!1,a.underline=!1,a.strikethrough=!1,a.foregroundColor=null,a.backgroundColor=null;break;case 1:a.bold=!0;break;case 3:a.italic=!0;break;case 4:a.underline=!0;break;case 9:a.strikethrough=!0;break;case 22:a.bold=!1;break;case 23:a.italic=!1;break;case 24:a.underline=!1;break;case 29:a.strikethrough=!1;break;case 30:case 39:a.foregroundColor=null;break;case 31:a.foregroundColor="red";break;case 32:a.foregroundColor="green";break;case 33:a.foregroundColor="yellow";break;case 34:a.foregroundColor="blue";break;case 35:a.foregroundColor="magenta";break;case 36:a.foregroundColor="cyan";break;case 37:a.foregroundColor="white";break;case 40:a.backgroundColor="black";break;case 41:a.backgroundColor="red";break;case 42:a.backgroundColor="green";break;case 43:a.backgroundColor="yellow";break;case 44:a.backgroundColor="blue";break;case 45:a.backgroundColor="magenta";break;case 46:a.backgroundColor="cyan";break;case 47:a.backgroundColor="white";break;case 49:a.backgroundColor=null}}))}return i(e.substring(n)),o}}]}}),h.oi)},86630:function(e,r,o){var t,n,a=o(99312),i=o(81043),c=o(88962),s=o(33368),l=o(71650),d=o(82390),u=o(69205),h=o(70906),f=o(91808),p=o(34541),g=o(47838),v=o(49412),k=o(3762),b=o(68144),y=o(79932),m=o(38346),w=o(96151);(0,f.Z)([(0,y.Mo)("ha-select")],(function(e,r){var o=function(r){(0,u.Z)(t,r);var o=(0,h.Z)(t);function t(){var r;(0,l.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=o.call.apply(o,[this].concat(a)),e((0,d.Z)(r)),r}return(0,s.Z)(t)}(r);return{F:o,d:[{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,b.dy)(t||(t=(0,c.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):b.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,p.Z)((0,g.Z)(o.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.Z)((0,g.Z)(o.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,m.D)((0,i.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,w.y)();case 2:e.layoutOptions();case 3:case"end":return r.stop()}}),r)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[k.W,(0,b.iv)(n||(n=(0,c.Z)([".mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}"])))]}}]}}),v.K)},17515:function(e,r,o){o.d(r,{G:function(){return t},l:function(){return n}});var t=function(e){return e.callApi("GET","error_log")},n="/api/error_log"},69810:function(e,r,o){o.d(r,{CP:function(){return h},Lm:function(){return f},NC:function(){return p},gM:function(){return g},jP:function(){return v},lC:function(){return u}});var t=o(99312),n=o(81043);if(32143==o.j)var a=o(63864);var i,c,s,l,d=o(41682),u=32143==o.j?(i=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.I)(r.config.version,2021,2,4)){e.next=4;break}return e.next=3,r.callWS({type:"supervisor/api",endpoint:"/supervisor/reload",method:"post"});case 3:return e.abrupt("return");case 4:return e.next=6,r.callApi("POST","hassio/supervisor/reload");case 6:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}):null,h=32143==o.j?(c=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.I)(r.config.version,2021,2,4)){e.next=2;break}return e.abrupt("return",r.callWS({type:"supervisor/api",endpoint:"/supervisor/info",method:"get"}));case 2:return e.t0=d.rY,e.next=5,r.callApi("GET","hassio/supervisor/info");case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)}):null,f=32143==o.j?(s=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.I)(r.config.version,2021,2,4)){e.next=2;break}return e.abrupt("return",r.callWS({type:"supervisor/api",endpoint:"/info",method:"get"}));case 2:return e.t0=d.rY,e.next=5,r.callApi("GET","hassio/info");case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)}):null,p=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r,o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.callApi("GET","hassio/".concat(o.includes("_")?"addons/".concat(o):o,"/logs")));case 1:case"end":return e.stop()}}),e)})));return function(r,o){return e.apply(this,arguments)}}(),g=function(e){return"/api/hassio/".concat(e.includes("_")?"addons/".concat(e):e,"/logs")},v=32143==o.j?(l=(0,n.Z)((0,t.Z)().mark((function e(r,o){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,a.I)(r.config.version,2021,2,4)){e.next=4;break}return e.next=3,r.callWS({type:"supervisor/api",endpoint:"/supervisor/options",method:"post",data:o});case 3:return e.abrupt("return");case 4:return e.next=6,r.callApi("POST","hassio/supervisor/options",o);case 6:case"end":return e.stop()}}),e)}))),function(e,r){return l.apply(this,arguments)}):null},47398:function(e,r,o){var t,n,a,i,c,s,l,d,u,h,f=o(99312),p=o(81043),g=o(88962),v=o(33368),k=o(71650),b=o(82390),y=o(69205),m=o(70906),w=o(91808),_=o(34541),Z=o(47838),C=(o(53918),o(44577),o(68144)),x=o(79932),L=o(7323),T=(o(9381),o(54736),o(22098),o(10983),o(86630),o(52039),o(22814)),M=o(17515),A=o(41682),H=o(69810),S=o(38346),E=o(25936),I="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";(0,w.Z)([(0,x.Mo)("error-log-card")],(function(e,r){var o,w,z,j=function(r){(0,y.Z)(t,r);var o=(0,m.Z)(t);function t(){var r;(0,k.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=o.call.apply(o,[this].concat(a)),e((0,b.Z)(r)),r}return(0,v.Z)(t)}(r);return{F:j,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"filter",value:function(){return""}},{kind:"field",decorators:[(0,x.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"provider",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:!0})],key:"show",value:function(){return!1}},{kind:"field",decorators:[(0,x.SB)()],key:"_isLogLoaded",value:function(){return!1}},{kind:"field",decorators:[(0,x.SB)()],key:"_logHTML",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_error",value:void 0},{kind:"method",key:"render",value:function(){return(0,C.dy)(t||(t=(0,g.Z)([' <div class="error-log-intro"> '," "," "," </div> "])),this._error?(0,C.dy)(n||(n=(0,g.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._logHTML?(0,C.dy)(a||(a=(0,g.Z)([' <ha-card outlined> <div class="header"> <h1 class="card-header"> ',' </h1> <div> <ha-icon-button .path="','" @click="','" .label="','"></ha-icon-button> <ha-icon-button .path="','" @click="','" .label="','"></ha-icon-button> </div> </div> <div class="card-content error-log">',"</div> </ha-card> "])),this.header||this.hass.localize("ui.panel.config.logs.show_full_logs"),"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",this._refresh,this.hass.localize("ui.common.refresh"),I,this._downloadFullLog,this.hass.localize("ui.panel.config.logs.download_full_log"),this._logHTML):"",this._logHTML?"":(0,C.dy)(i||(i=(0,g.Z)([' <mwc-button outlined @click="','"> <ha-svg-icon .path="','"></ha-svg-icon> ',' </mwc-button> <mwc-button raised @click="','"> '," </mwc-button> "])),this._downloadFullLog,I,this.hass.localize("ui.panel.config.logs.download_full_log"),this._refreshLogs,this.hass.localize("ui.panel.config.logs.load_logs")))}},{kind:"field",key:"_debounceSearch",value:function(){var e=this;return(0,S.D)((function(){return e._isLogLoaded?e._refreshLogs():e._debounceSearch()}),150,!1)}},{kind:"method",key:"firstUpdated",value:function(e){var r;(0,_.Z)((0,Z.Z)(j.prototype),"firstUpdated",this).call(this,e),(null!==(r=this.hass)&&void 0!==r&&r.config.safe_mode||this.show)&&(this.hass.loadFragmentTranslation("config"),this._refreshLogs())}},{kind:"method",key:"updated",value:function(e){(0,_.Z)((0,Z.Z)(j.prototype),"updated",this).call(this,e),e.has("provider")&&(this._logHTML=void 0),e.has("show")&&this.show||e.has("provider")&&this.show?this._refreshLogs():e.has("filter")&&this._debounceSearch()}},{kind:"method",key:"_refresh",value:(z=(0,p.Z)((0,f.Z)().mark((function e(r){var o;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=r.currentTarget).progress=!0,e.next=4,this._refreshLogs();case 4:o.progress=!1;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return z.apply(this,arguments)})},{kind:"method",key:"_downloadFullLog",value:(w=(0,p.Z)((0,f.Z)().mark((function e(){var r,o,t,n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(new Date).toISOString().replace(/:/g,"-"),o="core"!==this.provider?(0,H.gM)(this.provider):M.l,t="core"!==this.provider?"".concat(this.provider,"_").concat(r,".log"):"home-assistant_".concat(r,".log"),e.next=5,(0,T.iI)(this.hass,o);case 5:n=e.sent,(0,E.N)(n.path,t);case 7:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{kind:"method",key:"_refreshLogs",value:(o=(0,p.Z)((0,f.Z)().mark((function e(){var r,o,t=this;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._logHTML=this.hass.localize("ui.panel.config.logs.loading_log"),"core"===this.provider||!(0,L.p)(this.hass,"hassio")){e.next=21;break}return e.prev=2,e.next=5,(0,H.NC)(this.hass,this.provider);case 5:if(r=e.sent,this.filter&&(r=r.split("\n").filter((function(e){return e.toLowerCase().includes(t.filter.toLowerCase())})).join("\n")),r){e.next=10;break}return this._logHTML=this.hass.localize("ui.panel.config.logs.no_errors"),e.abrupt("return");case 10:return this._logHTML=(0,C.dy)(c||(c=(0,g.Z)(['<ha-ansi-to-html .content="','"> </ha-ansi-to-html>'])),r),this._isLogLoaded=!0,e.abrupt("return");case 15:return e.prev=15,e.t0=e.catch(2),this._error=this.hass.localize("ui.panel.config.logs.failed_get_logs","provider",this.provider,"error",(0,A.js)(e.t0)),e.abrupt("return");case 19:e.next=24;break;case 21:return e.next=23,(0,M.G)(this.hass);case 23:r=e.sent;case 24:this._isLogLoaded=!0,o=r&&r.split("\n"),this._logHTML=o?(this.filter?o.filter((function(e){return t.filter?e.toLowerCase().includes(t.filter.toLowerCase()):e})):o).map((function(e){return e.includes("INFO")?(0,C.dy)(s||(s=(0,g.Z)(['<div class="info">',"</div>"])),e):e.includes("WARNING")?(0,C.dy)(l||(l=(0,g.Z)(['<div class="warning">',"</div>"])),e):e.includes("ERROR")||e.includes("FATAL")||e.includes("CRITICAL")?(0,C.dy)(d||(d=(0,g.Z)(['<div class="error">',"</div>"])),e):(0,C.dy)(u||(u=(0,g.Z)(["<div>","</div>"])),e)})):this.hass.localize("ui.panel.config.logs.no_errors");case 27:case"end":return e.stop()}}),e,this,[[2,15]])}))),function(){return o.apply(this,arguments)})},{kind:"field",static:!0,key:"styles",value:function(){return(0,C.iv)(h||(h=(0,g.Z)([".error-log-intro{text-align:center;margin:16px}ha-card{padding-top:16px}.header{display:flex;justify-content:space-between;padding:0 16px}.card-header{color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:var(--ha-card-header-font-size,24px);letter-spacing:-.012em;line-height:48px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}ha-select{display:block;max-width:500px;width:100%}ha-icon-button{float:right}.error-log{font-family:var(--code-font-family,monospace);clear:both;text-align:left;padding-top:12px}.error-log>div{overflow:auto;overflow-wrap:break-word}.error-log>div:hover{background-color:var(--secondary-background-color)}.error{color:var(--error-color)}.warning{color:var(--warning-color)}mwc-button{direction:var(--direction)}"])))}}]}}),C.oi)},25936:function(e,r,o){o.d(r,{N:function(){return t}});var t=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=document.createElement("a");o.target="_blank",o.href=e,o.download=r,document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click")),document.body.removeChild(o)}}}]);
//# sourceMappingURL=47398-JyBAGSDjAco.js.map