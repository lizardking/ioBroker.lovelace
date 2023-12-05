/*! For license information please see 66903.DF0zfZjy1ek.js.LICENSE.txt */
export const id=66903;export const ids=[66903];export const modules={45253:(t,e,i)=>{i.d(e,{HX:()=>o,KT:()=>a,Ns:()=>r,UX:()=>s,j2:()=>n});var o,r,s={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},n={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(o||(o={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(r||(r={}))},6945:(t,e,i)=>{i.d(e,{Z:()=>a,k:()=>n});var o=i(43204),r=i(72774),s=i(45253),n=function(t){function e(i){var r=t.call(this,(0,o.__assign)((0,o.__assign)({},e.defaultAdapter),i))||this;return r.isSurfaceOpen=!1,r.isQuickOpen=!1,r.isHoistedElement=!1,r.isFixedPosition=!1,r.isHorizontallyCenteredOnViewport=!1,r.maxHeight=0,r.openBottomBias=0,r.openAnimationEndTimerId=0,r.closeAnimationEndTimerId=0,r.animationRequestId=0,r.anchorCorner=s.Ns.TOP_START,r.originCorner=s.Ns.TOP_START,r.anchorMargin={top:0,right:0,bottom:0,left:0},r.position={x:0,y:0},r}return(0,o.__extends)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s.UX},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s.j2},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return s.KT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return s.Ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,o=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^s.HX.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),s.KT.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout((function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()}),s.KT.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,s.HX.BOTTOM)?"bottom":"top",n=this.hasBit(i,s.HX.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),c=this.getVerticalOriginOffset(i),d=this.measurements,h=d.anchorSize,p=d.surfaceSize,l=((t={})[n]=a,t[r]=c,t);h.width/p.width>s.KT.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(n="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(l),this.adapter.setTransformOrigin(n+" "+r),this.adapter.setPosition(l),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(i,s.HX.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:o}},e.prototype.getoriginCorner=function(){var t,i,o=this.originCorner,r=this.measurements,n=r.viewportDistance,a=r.anchorSize,c=r.surfaceSize,d=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,s.HX.BOTTOM)?(t=n.top-d+this.anchorMargin.bottom,i=n.bottom-d-this.anchorMargin.bottom):(t=n.top-d+this.anchorMargin.top,i=n.bottom-d+a.height-this.anchorMargin.top),!(i-c.height>0)&&t>i+this.openBottomBias&&(o=this.setBit(o,s.HX.BOTTOM));var h,p,l=this.adapter.isRtl(),m=this.hasBit(this.anchorCorner,s.HX.FLIP_RTL),u=this.hasBit(this.anchorCorner,s.HX.RIGHT)||this.hasBit(o,s.HX.RIGHT),g=!1;(g=l&&m?!u:u)?(h=n.left+a.width+this.anchorMargin.right,p=n.right-this.anchorMargin.right):(h=n.left+this.anchorMargin.left,p=n.right+a.width-this.anchorMargin.left);var f=h-c.width>0,y=p-c.width>0,_=this.hasBit(o,s.HX.FLIP_RTL)&&this.hasBit(o,s.HX.RIGHT);return y&&_&&l||!f&&_?o=this.unsetBit(o,s.HX.RIGHT):(f&&g&&l||f&&!g&&u||!y&&h>=p)&&(o=this.setBit(o,s.HX.RIGHT)),o},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,o=0,r=this.hasBit(t,s.HX.BOTTOM),n=this.hasBit(this.anchorCorner,s.HX.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return r?(o=i.top+this.anchorMargin.top-a,n||(o+=this.measurements.anchorSize.height)):(o=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,n&&(o-=this.measurements.anchorSize.height)),o},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,s.HX.RIGHT),o=this.hasBit(this.anchorCorner,s.HX.RIGHT);if(i){var r=o?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?r-(this.measurements.viewportSize.width-this.measurements.bodySize.width):r}return o?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,s.HX.BOTTOM),o=this.hasBit(this.anchorCorner,s.HX.BOTTOM);return i?o?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,i,r=this.measurements,s=r.windowScroll,n=r.viewportDistance,a=r.surfaceSize,c=r.viewportSize,d=Object.keys(t);try{for(var h=(0,o.__values)(d),p=h.next();!p.done;p=h.next()){var l=p.value,m=t[l]||0;!this.isHorizontallyCenteredOnViewport||"left"!==l&&"right"!==l?(m+=n[l],this.isFixedPosition||("top"===l?m+=s.y:"bottom"===l?m-=s.y:"left"===l?m+=s.x:m-=s.x),t[l]=m):t[l]=(c.width-a.width)/2}}catch(t){e={error:t}}finally{try{p&&!p.done&&(i=h.return)&&i.call(h)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,o=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(e||o)&&setTimeout((function(){t.adapter.restoreFocus()}),s.KT.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(r.K);const a=n},61092:(t,e,i)=>{i.d(e,{K:()=>d});var o=i(43204),r=(i(27763),i(14114)),s=i(98734),n=i(68144),a=i(79932),c=i(83448);class d extends n.oi{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new s.A((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():n.dy``,i=this.hasMeta?this.renderMeta():n.dy``;return n.dy` ${this.renderRipple()} ${e} ${t} ${i}`}renderRipple(){return this.shouldRenderRipple?n.dy` <mwc-ripple .activated="${this.activated}"> </mwc-ripple>`:this.activated?n.dy`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return n.dy` <span class="mdc-deprecated-list-item__graphic material-icons ${(0,c.$)(t)}"> <slot name="graphic"></slot> </span>`}renderMeta(){return n.dy` <span class="mdc-deprecated-list-item__meta material-icons"> <slot name="meta"></slot> </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return n.dy` <span class="mdc-deprecated-list-item__text"> ${t} </span>`}renderSingleLine(){return n.dy`<slot></slot>`}renderTwoline(){return n.dy` <span class="mdc-deprecated-list-item__primary-text"> <slot></slot> </span> <span class="mdc-deprecated-list-item__secondary-text"> <slot name="secondary"></slot> </span> `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}(0,o.__decorate)([(0,a.IO)("slot")],d.prototype,"slotElement",void 0),(0,o.__decorate)([(0,a.GC)("mwc-ripple")],d.prototype,"ripple",void 0),(0,o.__decorate)([(0,a.Cb)({type:String})],d.prototype,"value",void 0),(0,o.__decorate)([(0,a.Cb)({type:String,reflect:!0})],d.prototype,"group",void 0),(0,o.__decorate)([(0,a.Cb)({type:Number,reflect:!0})],d.prototype,"tabindex",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],d.prototype,"disabled",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],d.prototype,"twoline",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],d.prototype,"activated",void 0),(0,o.__decorate)([(0,a.Cb)({type:String,reflect:!0})],d.prototype,"graphic",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean})],d.prototype,"multipleGraphics",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean})],d.prototype,"hasMeta",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],d.prototype,"noninteractive",void 0),(0,o.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],d.prototype,"selected",void 0),(0,o.__decorate)([(0,a.SB)()],d.prototype,"shouldRenderRipple",void 0),(0,o.__decorate)([(0,a.SB)()],d.prototype,"_managingList",void 0)},96762:(t,e,i)=>{i.d(e,{W:()=>o});const o=i(68144).iv`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding,16px);padding-right:var(--mdc-list-side-padding,16px);outline:0;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host:focus{outline:0}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary,#6200ee);--mdc-ripple-color:var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12);background-color:#6200ee;background-color:var(--mdc-ripple-color,var(--mdc-theme-primary,#6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size,24px);height:var(--mdc-list-item-meta-size,24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size,24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px)!important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight,400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform,inherit)}.mdc-deprecated-list-item__meta[dir=rtl],[dir=rtl] .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,40px);height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px)!important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,16px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,24px);height:var(--mdc-list-item-graphic-size,24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px)!important}:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=large]:not([twoLine])),:host([graphic=medium]:not([twoLine])){height:72px}:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,56px);height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px)!important}:host([graphic=large]){padding-left:0px}`},99608:(t,e,i)=>{var o=i(43204),r=i(79932),s=i(45253),n=i(6945),a=i(78220),c=i(14114),d=i(82612),h=i(68144),p=i(83448),l=i(47501);const m={TOP_LEFT:s.Ns.TOP_LEFT,TOP_RIGHT:s.Ns.TOP_RIGHT,BOTTOM_LEFT:s.Ns.BOTTOM_LEFT,BOTTOM_RIGHT:s.Ns.BOTTOM_RIGHT,TOP_START:s.Ns.TOP_START,TOP_END:s.Ns.TOP_END,BOTTOM_START:s.Ns.BOTTOM_START,BOTTOM_END:s.Ns.BOTTOM_END};class u extends a.H{constructor(){super(...arguments),this.mdcFoundationClass=n.Z,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.stayOpenOnBodyClick=!1,this.bitwiseCorner=s.Ns.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){return this.renderSurface()}renderSurface(){const t=this.getRootClasses(),e=this.getRootStyles();return h.dy` <div class="${(0,p.$)(t)}" style="${(0,l.V)(e)}" @keydown="${this.onKeydown}" @opened="${this.registerBodyClick}" @closed="${this.deregisterBodyClick}"> ${this.renderContent()} </div>`}getRootClasses(){return{"mdc-menu-surface":!0,"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth}}getRootStyles(){return{top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin}}renderContent(){return h.dy`<slot></slot>`}createAdapter(){return Object.assign(Object.assign({},(0,a.q)(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyClosing:()=>{const t=new CustomEvent("closing",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},notifyOpening:()=>{const t=new CustomEvent("opening",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{this.mdcRoot&&(this.styleTransformOrigin=t)},isFocused:()=>(0,d.WU)(this),saveFocus:()=>{const t=(0,d.Mh)(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.mdcRoot&&(this.styleLeft="left"in t?`${t.left}px`:"",this.styleRight="right"in t?`${t.right}px`:"",this.styleTop="top"in t?`${t.top}px`:"",this.styleBottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:async t=>{this.mdcRoot&&(this.styleMaxHeight=t,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${t})`)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){if(this.stayOpenOnBodyClick)return;-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}onOpenChanged(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}close(){this.open=!1}show(){this.open=!0}}(0,o.__decorate)([(0,r.IO)(".mdc-menu-surface")],u.prototype,"mdcRoot",void 0),(0,o.__decorate)([(0,r.IO)("slot")],u.prototype,"slotElement",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],u.prototype,"absolute",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean})],u.prototype,"fullwidth",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(t)}))],u.prototype,"fixed",void 0),(0,o.__decorate)([(0,r.Cb)({type:Number}),(0,c.P)((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],u.prototype,"x",void 0),(0,o.__decorate)([(0,r.Cb)({type:Number}),(0,c.P)((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],u.prototype,"y",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],u.prototype,"quick",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0}),(0,c.P)((function(t,e){this.onOpenChanged(t,e)}))],u.prototype,"open",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean})],u.prototype,"stayOpenOnBodyClick",void 0),(0,o.__decorate)([(0,r.SB)(),(0,c.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],u.prototype,"bitwiseCorner",void 0),(0,o.__decorate)([(0,r.Cb)({type:String}),(0,c.P)((function(t){if(this.mdcFoundation){const e="START"===t||"END"===t,i=null===this.previousMenuCorner,o=!i&&t!==this.previousMenuCorner;e&&(o||i&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^s.HX.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],u.prototype,"menuCorner",void 0),(0,o.__decorate)([(0,r.Cb)({type:String}),(0,c.P)((function(t){if(this.mdcFoundation&&t){let e=m[t];"END"===this.menuCorner&&(e^=s.HX.RIGHT),this.bitwiseCorner=e}}))],u.prototype,"corner",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleTop",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleLeft",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleRight",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleBottom",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleMaxHeight",void 0),(0,o.__decorate)([(0,r.SB)()],u.prototype,"styleTransformOrigin",void 0);const g=h.iv`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width,calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height,calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, .2, 1),height 250ms cubic-bezier(0, 0, .2, 1);box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;border-radius:var(--mdc-shape-medium,4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:0}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index,8);min-width:112px;min-width:var(--mdc-menu-min-width,112px)}`;let f=class extends u{};f.styles=[g],f=(0,o.__decorate)([(0,r.Mo)("mwc-menu-surface")],f)}};
//# sourceMappingURL=66903.DF0zfZjy1ek.js.map