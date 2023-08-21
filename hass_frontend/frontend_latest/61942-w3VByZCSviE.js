"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[61942],{60228:(e,t,i)=>{i.d(t,{j:()=>n});var a=i(7323);const n=(e,t)=>(s(t)||o(e,t))&&!r(e,t),o=(e,t)=>t.component?(0,a.p)(e,t.component):!t.components||t.components.some((t=>(0,a.p)(e,t))),s=e=>e.core,r=(e,t)=>(e=>e.advancedOnly)(t)&&!(e=>{var t;return null===(t=e.userData)||void 0===t?void 0:t.showAdvanced})(e)},96305:(e,t,i)=>{i.d(t,{v:()=>a});const a=(e,t)=>e&&Object.keys(e.services).filter((i=>t in e.services[i]))},63864:(e,t,i)=>{i.d(t,{I:()=>a,_:()=>n});const a=(e,t,i,a)=>{const[n,o,s]=e.split(".",3);return Number(n)>t||Number(n)===t&&(void 0===a?Number(o)>=i:Number(o)>i)||void 0!==a&&Number(n)===t&&Number(o)===i&&Number(s)>=a},n=e=>e.includes("dev")},58831:(e,t,i)=>{i.d(t,{M:()=>a});const a=e=>e.substr(0,e.indexOf("."))},22311:(e,t,i)=>{i.d(t,{N:()=>n});var a=i(58831);const n=e=>(0,a.M)(e.entity_id)},40095:(e,t,i)=>{i.d(t,{e:()=>a,f:()=>n});const a=(e,t)=>n(e.attributes,t),n=(e,t)=>0!=(e.supported_features&t)},88324:(e,t,i)=>{var a=i(17463),n=i(67182),o=i(68144),s=i(79932);(0,a.Z)([(0,s.Mo)("ha-chip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hasIcon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hasTrailingIcon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"noText",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` <div class="mdc-chip ${this.noText?"no-text":""}"> ${this.hasIcon?o.dy`<div class="mdc-chip__icon mdc-chip__icon--leading"> <slot name="icon"></slot> </div>`:o.Ld} <div class="mdc-chip__ripple"></div> <span role="gridcell"> <span role="button" tabindex="0" class="mdc-chip__primary-action"> <span class="mdc-chip__text"><slot></slot></span> </span> </span> ${this.hasTrailingIcon?o.dy`<div class="mdc-chip__icon mdc-chip__icon--trailing"> <slot name="trailing-icon"></slot> </div>`:o.Ld} </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`${(0,o.$m)(n)} .mdc-chip{background-color:var(--ha-chip-background-color,rgba(var(--rgb-primary-text-color),.15));color:var(--ha-chip-text-color,var(--primary-text-color))}.mdc-chip.no-text{padding:0 10px}.mdc-chip:hover{color:var(--ha-chip-text-color,var(--primary-text-color))}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{--mdc-icon-size:18px;line-height:14px;color:var(--ha-chip-icon-color,var(--ha-chip-text-color))}.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark{margin-right:-4px;margin-inline-start:-4px;margin-inline-end:4px;direction:var(--direction)}span[role=gridcell]{line-height:14px}:host{outline:0}`}}]}}),o.oi)},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>l});var a=i(17463),n=i(34541),o=i(47838),s=i(30879),r=i(68144),d=i(79932);let l=(0,a.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.Z)((0,o.Z)(i),"styles",this),r.iv`:host{overflow:hidden}`]}}]}}),s.D)},10983:(e,t,i)=>{var a=i(17463),n=(i(20210),i(68144)),o=i(79932),s=i(30153);i(52039);(0,a.Z)([(0,o.Mo)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._button)||void 0===e||e.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return n.dy` <mwc-icon-button aria-label="${(0,s.o)(this.label)}" title="${(0,s.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,s.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?n.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:n.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),n.oi)},73366:(e,t,i)=>{i.d(t,{M:()=>c});var a=i(17463),n=i(34541),o=i(47838),s=i(61092),r=i(96762),d=i(68144),l=i(79932);let c=(0,a.Z)([(0,l.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,n.Z)((0,o.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[r.W,d.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),s.K)},52039:(e,t,i)=>{i.d(t,{C:()=>s});var a=i(17463),n=i(68144),o=i(79932);let s=(0,a.Z)([(0,o.Mo)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return n.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?n.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),n.oi)},3555:(e,t,i)=>{var a=i(17463),n=i(34541),o=i(47838),s=i(42977),r=i(31338),d=i(68144),l=i(79932);(0,a.Z)([(0,l.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return d.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${i}" tabindex="${t?1:-1}"> <slot name="${i}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,d.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}`,"rtl"===document.dir?d.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:d.iv``]}]}}),s.P)},8776:(e,t,i)=>{i.d(t,{yt:()=>o});var a=i(63864),n=i(41682);const o=async e=>(0,a.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}):(0,n.rY)(await e.callApi("GET","hassio/addons"))},41682:(e,t,i)=>{i.d(t,{js:()=>o,rY:()=>n,yd:()=>d,yz:()=>r});var a=i(63864);const n=e=>e.data,o=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e,s=new Set([502,503,504]),r=e=>!!(e&&e.status_code&&s.has(e.status_code))||!(!e||!e.message||!e.message.includes("ERR_CONNECTION_CLOSED")&&!e.message.includes("ERR_CONNECTION_RESET")),d=async(e,t)=>(0,a.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:`/${t}/stats`,method:"get"}):n(await e.callApi("GET",`hassio/${t}/stats`))},26765:(e,t,i)=>{i.d(t,{D9:()=>d,Ys:()=>s,g7:()=>r});var a=i(47181);const n=()=>Promise.all([i.e(28597),i.e(52154),i.e(1281)]).then(i.bind(i,1281)),o=(e,t,i)=>new Promise((o=>{const s=t.cancel,r=t.confirm;(0,a.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:n,dialogParams:{...t,...i,cancel:()=>{o(!(null==i||!i.prompt)&&null),s&&s()},confirm:e=>{o(null==i||!i.prompt||e),r&&r(e)}}})})),s=(e,t)=>o(e,t),r=(e,t)=>o(e,t,{confirmation:!0}),d=(e,t)=>o(e,t,{prompt:!0})},99830:(e,t,i)=>{i.r(t),i.d(t,{QuickBar:()=>R});var a=i(17463),n=(i(63436),i(68144)),o=i(79932),s=i(30153),r=i(47501),d=i(14516),l=i(60228),c=i(96305),h=i(7323),m=i(47181),u=i(58831),p=i(91741),g=i(47772),f=i(83849),v=i(85415);let y=function(e){return e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e}({});const k=128;function x(){const e=[],t=[];for(let e=0;e<=k;e++)t[e]=0;for(let i=0;i<=k;i++)e.push(t.slice(0));return e}function _(e,t){if(t<0||t>=e.length)return!1;const i=e.codePointAt(t);switch(i){case y.Underline:case y.Dash:case y.Period:case y.Space:case y.Slash:case y.Backslash:case y.SingleQuote:case y.DoubleQuote:case y.Colon:case y.DollarSign:case y.LessThan:case y.OpenParen:case y.OpenSquareBracket:return!0;case void 0:return!1;default:return(a=i)>=127462&&a<=127487||8986===a||8987===a||9200===a||9203===a||a>=9728&&a<=10175||11088===a||11093===a||a>=127744&&a<=128591||a>=128640&&a<=128764||a>=128992&&a<=129003||a>=129280&&a<=129535||a>=129648&&a<=129750?!0:!1}var a}function b(e,t){if(t<0||t>=e.length)return!1;switch(e.charCodeAt(t)){case y.Space:case y.Tab:return!0;default:return!1}}function C(e,t,i){return t[e]!==i[e]}var I=function(e){return e[e.Diag=1]="Diag",e[e.Left=2]="Left",e[e.LeftLeft=3]="LeftLeft",e}(I||{});function w(e,t,i,a,n,o,s){const r=e.length>k?k:e.length,d=a.length>k?k:a.length;if(i>=r||o>=d||r-i>d-o)return;if(!function(e,t,i,a,n,o,s=!1){for(;t<i&&n<o;)e[t]===a[n]&&(s&&(T[t]=n),t+=1),n+=1;return t===i}(t,i,r,n,o,d,!0))return;let l;!function(e,t,i,a,n,o){let s=e-1,r=t-1;for(;s>=i&&r>=a;)n[s]===o[r]&&(S[s]=r,s--),r--}(r,d,i,o,t,n);let c,h,m=1;const u=[!1];for(l=1,c=i;c<r;l++,c++){const s=T[c],p=S[c],g=c+1<r?S[c+1]:d;for(m=s-o+1,h=s;h<g;m++,h++){let r=Number.MIN_SAFE_INTEGER,g=!1;h<=p&&(r=$(e,t,c,i,a,n,h,d,o,0===L[l-1][m-1],u));let f=0;r!==Number.MAX_SAFE_INTEGER&&(g=!0,f=r+A[l-1][m-1]);const v=h>s,y=v?A[l][m-1]+(L[l][m-1]>0?-5:0):0,k=h>s+1&&L[l][m-1]>0,x=k?A[l][m-2]+(L[l][m-2]>0?-5:0):0;if(k&&(!v||x>=y)&&(!g||x>=f))A[l][m]=x,D[l][m]=I.LeftLeft,L[l][m]=0;else if(v&&(!g||y>=f))A[l][m]=y,D[l][m]=I.Left,L[l][m]=0;else{if(!g)throw new Error("not possible");A[l][m]=f,D[l][m]=I.Diag,L[l][m]=L[l-1][m-1]+1}}}if(!u[0]&&!s)return;l--,m--;const p=[A[l][m],o];let g=0,f=0;for(;l>=1;){let e=m;do{const t=D[l][e];if(t===I.LeftLeft)e-=2;else{if(t!==I.Left)break;e-=1}}while(e>=1);g>1&&t[i+l-1]===n[o+m-1]&&!C(e+o-1,a,n)&&g+1>L[l][e]&&(e=m),e===m?g++:g=1,f||(f=e),l--,m=e-1,p.push(m)}d===r&&(p[0]+=2);const v=f-r;return p[0]-=v,p}function $(e,t,i,a,n,o,s,r,d,l,c){if(t[i]!==o[s])return Number.MIN_SAFE_INTEGER;let h=1,m=!1;return s===i-a?h=e[i]===n[s]?7:5:!C(s,n,o)||0!==s&&C(s-1,n,o)?!_(o,s)||0!==s&&_(o,s-1)?(_(o,s-1)||b(o,s-1))&&(h=5,m=!0):h=5:(h=e[i]===n[s]?7:5,m=!0),h>1&&i===a&&(c[0]=!0),m||(m=C(s,n,o)||_(o,s-1)||b(o,s-1)),i===a?s>d&&(h-=m?3:5):h+=l?m?2:0:m?0:1,s+1===r&&(h-=m?3:5),h}const T=M(256),S=M(256),L=x(),A=x(),D=x();function M(e){const t=[];for(let i=0;i<=e;i++)t[i]=0;return t}const z=(e,t)=>t.map((t=>(t.score=((e,t)=>{let i=Number.NEGATIVE_INFINITY;for(const a of t.strings){const t=w(e,e.toLowerCase(),0,a,a.toLowerCase(),0,!0);if(!t)continue;const n=0===t[0]?1:t[0];n>i&&(i=n)}if(i!==Number.NEGATIVE_INFINITY)return i})(e,t),t))).filter((e=>void 0!==e.score)).sort((({score:e=0},{score:t=0})=>e>t?-1:e<t?1:0));var N=i(38346),B=(i(88324),i(31206),i(10983),i(73366),i(3555),i(8776)),E=i(5986),H=i(1887),P=i(29311),O=i(11654),F=i(46134),q=i(26765);const V="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z";let R=(0,a.Z)([(0,o.Mo)("ha-quick-bar")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_commandItems",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_entityItems",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,o.SB)()],key:"_search",value:()=>""},{kind:"field",decorators:[(0,o.SB)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_commandMode",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_narrow",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_hint",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-textfield",!1)],key:"_filterInputField",value:void 0},{kind:"field",key:"_focusSet",value:()=>!1},{kind:"field",key:"_focusListElement",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._commandMode=e.commandMode||this._toggleIfAlreadyOpened(),this._hint=e.hint,this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,this._initializeItemsIfNeeded(),this._open=!0}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._opened=!1,this._focusSet=!1,this._filter="",this._search="",(0,m.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||(0,F.o)()}},{kind:"field",key:"_getItems",value(){return(0,d.Z)(((e,t,i,a)=>{const n=e?t:i;return n&&a&&" "!==a?this._filterItems(n,a):n}))}},{kind:"method",key:"render",value:function(){if(!this._open)return n.Ld;const e=this._getItems(this._commandMode,this._commandItems,this._entityItems,this._filter);return n.dy` <ha-dialog .heading="${this.hass.localize("ui.dialogs.quick-bar.title")}" open @opened="${this._handleOpened}" @closed="${this.closeDialog}" hideActions> <div slot="heading" class="heading"> <ha-textfield dialogInitialFocus .placeholder="${this.hass.localize("ui.dialogs.quick-bar.filter_placeholder")}" aria-label="${this.hass.localize("ui.dialogs.quick-bar.filter_placeholder")}" .value="${this._commandMode?`>${this._search}`:this._search}" icon .iconTrailing="${void 0!==this._search||this._narrow}" @input="${this._handleSearchChange}" @keydown="${this._handleInputKeyDown}" @focus="${this._setFocusFirstListItem}"> ${this._commandMode?n.dy` <ha-svg-icon slot="leadingIcon" class="prefix" .path="${"M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z"}"></ha-svg-icon> `:n.dy` <ha-svg-icon slot="leadingIcon" class="prefix" .path="${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}"></ha-svg-icon> `} ${this._search||this._narrow?n.dy` <div slot="trailingIcon"> ${this._search&&n.dy`<ha-icon-button @click="${this._clearSearch}" .label="${this.hass.localize("ui.common.clear")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`} ${this._narrow?n.dy` <mwc-button .label="${this.hass.localize("ui.common.close")}" @click="${this.closeDialog}"></mwc-button> `:""} </div> `:""} </ha-textfield> </div> ${e?0===e.length?n.dy` <div class="nothing-found"> ${this.hass.localize("ui.dialogs.quick-bar.nothing_found")} </div> `:n.dy` <mwc-list> ${this._opened?n.dy`<lit-virtualizer scroller @keydown="${this._handleListItemKeyDown}" @rangechange="${this._handleRangeChanged}" @click="${this._handleItemClick}" class="ha-scrollbar" style="${(0,r.V)({height:this._narrow?"calc(100vh - 56px)":`${Math.min(e.length*(this._commandMode?56:72)+26,500)}px`})}" .items="${e}" .renderItem="${this._renderItem}"> </lit-virtualizer>`:""} </mwc-list> `:n.dy`<ha-circular-progress size="small" active></ha-circular-progress>`} ${this._hint?n.dy`<ha-tip .hass="${this.hass}">${this._hint}</ha-tip>`:""} </ha-dialog> `}},{kind:"method",key:"_initializeItemsIfNeeded",value:async function(){this._commandMode?this._commandItems=this._commandItems||await this._generateCommandItems():this._entityItems=this._entityItems||this._generateEntityItems()}},{kind:"method",key:"_handleOpened",value:function(){this._opened=!0}},{kind:"method",key:"_handleRangeChanged",value:async function(e){this._focusSet||e.firstVisible>-1&&(this._focusSet=!0,await this.updateComplete,this._setFocusFirstListItem())}},{kind:"field",key:"_renderItem",value(){return(e,t)=>e?(e=>void 0!==e.categoryKey)(e)?this._renderCommandItem(e,t):this._renderEntityItem(e,t):n.Ld}},{kind:"method",key:"_renderEntityItem",value:function(e,t){return n.dy` <ha-list-item .twoline="${Boolean(e.altText)}" .item="${e}" index="${(0,s.o)(t)}" graphic="icon"> ${e.iconPath?n.dy`<ha-svg-icon .path="${e.iconPath}" class="entity" slot="graphic"></ha-svg-icon>`:n.dy`<ha-icon .icon="${e.icon}" class="entity" slot="graphic"></ha-icon>`} <span>${e.primaryText}</span> ${e.altText?n.dy` <span slot="secondary" class="item-text secondary">${e.altText}</span> `:n.Ld} </ha-list-item> `}},{kind:"method",key:"_renderCommandItem",value:function(e,t){return n.dy` <ha-list-item .item="${e}" index="${(0,s.o)(t)}" class="command-item" hasMeta> <span> <ha-chip .label="${e.categoryText}" hasIcon class="command-category ${e.categoryKey}"> ${e.iconPath?n.dy`<ha-svg-icon .path="${e.iconPath}" slot="icon"></ha-svg-icon>`:""} ${e.categoryText}</ha-chip> </span> <span class="command-text">${e.primaryText}</span> </ha-list-item> `}},{kind:"method",key:"processItemAndCloseDialog",value:async function(e,t){this._addSpinnerToCommandItem(t),await e.action(),this.closeDialog()}},{kind:"method",key:"_handleInputKeyDown",value:function(e){if("Enter"===e.code){const e=this._getItemAtIndex(0);if(!e||"none"===e.style.display)return;this.processItemAndCloseDialog(e.item,0)}else if("ArrowDown"===e.code){var t;e.preventDefault(),null===(t=this._getItemAtIndex(0))||void 0===t||t.focus(),this._focusSet=!0,this._focusListElement=this._getItemAtIndex(0)}}},{kind:"method",key:"_getItemAtIndex",value:function(e){return this.renderRoot.querySelector(`ha-list-item[index="${e}"]`)}},{kind:"method",key:"_addSpinnerToCommandItem",value:function(e){var t;const i=document.createElement("ha-circular-progress");i.size="small",i.slot="meta",i.active=!0,null===(t=this._getItemAtIndex(e))||void 0===t||t.appendChild(i)}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.currentTarget.value,i=this._commandMode,a=this._search;let n,o;t.startsWith(">")?(n=!0,o=t.substring(1)):(n=!1,o=t),i===n&&a===o||(this._commandMode=n,this._search=o,this._hint&&(this._hint=void 0),i!==this._commandMode?(this._focusSet=!1,this._initializeItemsIfNeeded(),this._filter=this._search):(this._focusSet&&this._focusListElement&&(this._focusSet=!1,this._focusListElement.rippleHandlers.endFocus()),this._debouncedSetFilter(this._search)))}},{kind:"method",key:"_clearSearch",value:function(){this._search="",this._filter=""}},{kind:"field",key:"_debouncedSetFilter",value(){return(0,N.D)((e=>{this._filter=e}),100)}},{kind:"method",key:"_setFocusFirstListItem",value:function(){var e;null===(e=this._getItemAtIndex(0))||void 0===e||e.rippleHandlers.startFocus(),this._focusListElement=this._getItemAtIndex(0)}},{kind:"method",key:"_handleListItemKeyDown",value:function(e){const t=1===e.key.length,i=e.target.getAttribute("index"),a="0"===i;var n,o,s,r;(this._focusListElement=e.target,"ArrowDown"===e.key)&&(null===(n=this._getItemAtIndex(Number(i)+1))||void 0===n||n.focus());"ArrowUp"===e.key&&(a?null===(o=this._filterInputField)||void 0===o||o.focus():null===(s=this._getItemAtIndex(Number(i)-1))||void 0===s||s.focus());("Enter"!==e.key&&" "!==e.key||this.processItemAndCloseDialog(e.target.item,Number(e.target.getAttribute("index"))),"Backspace"===e.key||t)&&(e.currentTarget.scrollTop=0,null===(r=this._filterInputField)||void 0===r||r.focus())}},{kind:"method",key:"_handleItemClick",value:function(e){const t=e.target.closest("ha-list-item");this.processItemAndCloseDialog(t.item,Number(t.getAttribute("index")))}},{kind:"method",key:"_generateEntityItems",value:function(){return Object.keys(this.hass.states).map((e=>{const t=this.hass.states[e],i={primaryText:(0,p.C)(t),altText:e,icon:t.attributes.icon,iconPath:t.attributes.icon?void 0:(0,g.K)((0,u.M)(e),t),action:()=>(0,m.B)(this,"hass-more-info",{entityId:e})};return{...i,strings:[i.primaryText,i.altText]}})).sort(((e,t)=>(0,v.f)(e.primaryText,t.primaryText,this.hass.locale.language)))}},{kind:"method",key:"_generateCommandItems",value:async function(){return[...this._generateReloadCommands(),...this._generateServerControlCommands(),...await this._generateNavigationCommands()].sort(((e,t)=>(0,v.f)(e.strings.join(" "),t.strings.join(" "),this.hass.locale.language)))}},{kind:"method",key:"_generateReloadCommands",value:function(){const e=(0,c.v)(this.hass,"reload").map((e=>({primaryText:this.hass.localize(`ui.dialogs.quick-bar.commands.reload.${e}`)||this.hass.localize("ui.dialogs.quick-bar.commands.reload.reload","domain",(0,E.Lh)(this.hass.localize,e)),action:()=>this.hass.callService(e,"reload"),iconPath:V,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")})));return e.push({primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.reload.themes"),action:()=>this.hass.callService("frontend","reload_themes"),iconPath:V,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")}),e.push({primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.reload.core"),action:()=>this.hass.callService("homeassistant","reload_core_config"),iconPath:V,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")}),e.push({primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.reload.all"),action:()=>this.hass.callService("homeassistant","reload_all"),iconPath:V,categoryText:this.hass.localize("ui.dialogs.quick-bar.commands.types.reload")}),e.map((e=>({...e,categoryKey:"reload",strings:[`${e.categoryText} ${e.primaryText}`]})))}},{kind:"method",key:"_generateServerControlCommands",value:function(){return["restart","stop"].map((e=>{const t="server_control",i={primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.server_control.perform_action","action",this.hass.localize(`ui.dialogs.quick-bar.commands.server_control.${e}`)),iconPath:"M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z",categoryText:this.hass.localize(`ui.dialogs.quick-bar.commands.types.${t}`),categoryKey:t,action:()=>this.hass.callService("homeassistant",e)};return this._generateConfirmationCommand({...i,strings:[`${i.categoryText} ${i.primaryText}`]},this.hass.localize("ui.dialogs.generic.ok"))}))}},{kind:"method",key:"_generateNavigationCommands",value:async function(){const e=this._generateNavigationPanelCommands(),t=this._generateNavigationConfigSectionCommands(),i=[];if((0,h.p)(this.hass,"hassio")){const e=await(0,B.yt)(this.hass);i.push({path:"/hassio/store",primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_store")}),i.push({path:"/hassio/dashboard",primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_dashboard")});for(const t of e.addons.filter((e=>e.version)))i.push({path:`/hassio/addon/${t.slug}`,primaryText:this.hass.localize("ui.dialogs.quick-bar.commands.navigation.addon_info",{addon:t.name})})}return this._finalizeNavigationCommands([...e,...t,...i])}},{kind:"method",key:"_generateNavigationPanelCommands",value:function(){return Object.keys(this.hass.panels).filter((e=>"_my_redirect"!==e)).map((e=>{const t=this.hass.panels[e],i=(0,H.ct)(t);return{primaryText:this.hass.localize(i)||t.title||t.url_path,path:`/${t.url_path}`}}))}},{kind:"method",key:"_generateNavigationConfigSectionCommands",value:function(){const e=[];for(const t of Object.keys(P.configSections))for(const i of P.configSections[t]){if(!(0,l.j)(this.hass,i))continue;const t=this._getNavigationInfoFromConfig(i);t&&(e.some((e=>e.path===t.path))||e.push(t))}return e}},{kind:"method",key:"_getNavigationInfoFromConfig",value:function(e){const t=e.path.substring(1);let i=t.substring(t.indexOf("/")+1);i=i.indexOf("/")>-1?i.substring(0,i.indexOf("/")):i;const a=i&&this.hass.localize(`ui.dialogs.quick-bar.commands.navigation.${i}`)||e.translationKey&&this.hass.localize(e.translationKey);if(a)return{...e,primaryText:a}}},{kind:"method",key:"_generateConfirmationCommand",value:function(e,t){return{...e,action:()=>(0,q.g7)(this,{confirmText:t,confirm:e.action})}}},{kind:"method",key:"_finalizeNavigationCommands",value:function(e){return e.map((e=>{const t="navigation",i={...e,iconPath:"M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",categoryText:this.hass.localize(`ui.dialogs.quick-bar.commands.types.${t}`),action:()=>(0,f.c)(e.path)};return{...i,strings:[`${i.categoryText} ${i.primaryText}`],categoryKey:t}}))}},{kind:"method",key:"_toggleIfAlreadyOpened",value:function(){return!!this._opened&&!this._commandMode}},{kind:"field",key:"_filterItems",value:()=>(0,d.Z)(((e,t)=>z(t.trimLeft(),e)))},{kind:"get",static:!0,key:"styles",value:function(){return[O.$c,O.yu,n.iv`mwc-list{--mdc-list-vertical-padding:0}.heading{display:flex;align-items:center;--mdc-theme-primary:var(--primary-text-color)}.heading ha-textfield{flex-grow:1}ha-dialog{--dialog-z-index:9;--dialog-content-padding:0}@media (min-width:800px){ha-dialog{--mdc-dialog-max-width:800px;--mdc-dialog-min-width:500px;--dialog-surface-position:fixed;--dialog-surface-top:40px;--mdc-dialog-max-height:calc(100% - 72px)}}@media all and (max-width:450px),all and (max-height:500px){ha-textfield{--mdc-shape-small:0}}@media all and (max-width:450px),all and (max-height:690px){.hint{display:none}}ha-svg-icon.prefix{color:var(--primary-text-color)}ha-textfield ha-icon-button{--mdc-icon-button-size:24px;color:var(--primary-text-color)}.command-category{--ha-chip-icon-color:#585858;--ha-chip-text-color:#212121}.command-category.reload{--ha-chip-background-color:#cddc39}.command-category.navigation{--ha-chip-background-color:var(--light-primary-color)}.command-category.server_control{--ha-chip-background-color:var(--warning-color)}span.command-text{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;direction:var(--direction)}ha-list-item{width:100%;--mdc-list-item-graphic-margin:20px}ha-list-item.command-item{text-transform:capitalize}ha-tip{padding:20px}.nothing-found{padding:16px 0px;text-align:center}div[slot=trailingIcon]{display:flex;align-items:center}lit-virtualizer{contain:size layout!important}`]}}]}}),n.oi)},44281:(e,t,i)=>{i.d(t,{j:()=>a});const a=async()=>{try{new ResizeObserver((()=>{}))}catch(e){window.ResizeObserver=(await Promise.all([i.e(51246),i.e(43467)]).then(i.bind(i,43467))).default}}},46134:(e,t,i)=>{i.d(t,{o:()=>n});var a=i(44281);const n=async()=>{await(0,a.j)(),await Promise.all([i.e(51246),i.e(83998)]).then(i.bind(i,83998))}}}]);
//# sourceMappingURL=61942-w3VByZCSviE.js.map