/*! For license information please see chunk.2634b68081aa476179cc.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2613],{74015:(t,e,i)=>{"use strict";var s,n;i.d(e,{j2:()=>a,UX:()=>d,KT:()=>r});var d={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},o=((s={})[""+d.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",s[""+d.LIST_ITEM_CLASS]="mdc-list-item",s[""+d.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",s[""+d.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",s[""+d.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",s[""+d.ROOT]="mdc-list",(n={})[""+d.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",n[""+d.LIST_ITEM_CLASS]="mdc-deprecated-list-item",n[""+d.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",n[""+d.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",n[""+d.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",n[""+d.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",n[""+d.ROOT]="mdc-deprecated-list",n),a={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+d.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+d.LIST_ITEM_CLASS+" a,\n    ."+o[d.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+o[d.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+d.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+d.LIST_ITEM_CLASS+" a,\n    ."+d.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+d.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+o[d.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+o[d.LIST_ITEM_CLASS]+" a,\n    ."+o[d.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+o[d.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},r={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300}},62613:(t,e,i)=>{"use strict";var s=i(36220),n=i(55704),d=(i(87724),i(78220)),o=i(14114),a=i(82612),r=i(49629),l=i(72774),c="Unknown",m="Backspace",h="Enter",u="Spacebar",p="PageUp",I="PageDown",_="End",E="Home",x="ArrowLeft",S="ArrowUp",f="ArrowRight",g="ArrowDown",T="Delete",A="Escape",b="Tab",v=new Set;v.add(m),v.add(h),v.add(u),v.add(p),v.add(I),v.add(_),v.add(E),v.add(x),v.add(S),v.add(f),v.add(g),v.add(T),v.add(A),v.add(b);var y=8,C=13,L=32,F=33,R=34,w=35,D=36,M=37,O=38,N=39,U=40,k=46,K=27,X=9,P=new Map;P.set(y,m),P.set(C,h),P.set(L,u),P.set(F,p),P.set(R,I),P.set(w,_),P.set(D,E),P.set(M,x),P.set(O,S),P.set(N,f),P.set(U,g),P.set(k,T),P.set(K,A),P.set(X,b);var V=new Set;function B(t){var e=t.key;if(v.has(e))return e;var i=P.get(t.keyCode);return i||c}V.add(p),V.add(I),V.add(_),V.add(E),V.add(x),V.add(S),V.add(f),V.add(g);var H=i(74015);const z=(t,e)=>t-e,$=["input","button","textarea","select"];function j(t){return t instanceof Set}const Y=t=>{const e=t===H.KT.UNSET_INDEX?new Set:t;return j(e)?new Set(e):new Set([e])};class q extends l.K{constructor(t){super(Object.assign(Object.assign({},q.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=H.KT.UNSET_INDEX,this.focusedItemIndex_=H.KT.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return H.j2}static get numbers(){return H.KT}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!j(e)){const t=e===H.KT.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(j(e))if(e.size){const t=Array.from(e).sort(z);this.selectedIndex_=t[0]}else this.selectedIndex_=H.KT.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(Y(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,-1),setTimeout((()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()}),0)}handleKeydown(t,e,i){const s="ArrowLeft"===B(t),n="ArrowUp"===B(t),d="ArrowRight"===B(t),o="ArrowDown"===B(t),a="Home"===B(t),r="End"===B(t),l="Enter"===B(t),c="Spacebar"===B(t);if(this.adapter.isRootFocused())return void(n||r?(t.preventDefault(),this.focusLastElement()):(o||a)&&(t.preventDefault(),this.focusFirstElement()));let m,h=this.adapter.getFocusedElementIndex();if(!(-1===h&&(h=i,h<0))){if(this.isVertical_&&o||!this.isVertical_&&d)this.preventDefaultEvent(t),m=this.focusNextElement(h);else if(this.isVertical_&&n||!this.isVertical_&&s)this.preventDefaultEvent(t),m=this.focusPrevElement(h);else if(a)this.preventDefaultEvent(t),m=this.focusFirstElement();else if(r)this.preventDefaultEvent(t),m=this.focusLastElement();else if((l||c)&&e){const e=t.target;if(e&&"A"===e.tagName&&l)return;this.preventDefaultEvent(t),this.setSelectedIndexOnAction_(h,!0)}this.focusedItemIndex_=h,void 0!==m&&(this.setTabindexAtIndex_(m),this.focusedItemIndex_=m)}}handleSingleSelection(t,e,i){t!==H.KT.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent(t){const e=`${t.target.tagName}`.toLowerCase();-1===$.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==H.KT.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),s=Array.from(e),n={added:[],removed:[]},d=i.sort(z),o=s.sort(z);let a=0,r=0;for(;a<d.length||r<o.length;){const t=d[a],e=o[r];t!==e?void 0!==t&&(void 0===e||t<e)?(n.removed.push(t),a++):void 0!==e&&(void 0===t||e<t)&&(n.added.push(e),r++):(a++,r++)}return n})(Y(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===H.KT.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,H.j2.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?H.j2.ARIA_CURRENT:H.j2.ARIA_SELECTED;this.selectedIndex_!==H.KT.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const s=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,i,s)}setTabindexAtIndex_(t){this.focusedItemIndex_===H.KT.UNSET_INDEX&&0!==t?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==H.KT.UNSET_INDEX?t=this.selectedIndex_:j(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===H.KT.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter.getDisabledStateForElementIndex(t))return;let s=t;if(this.isMulti_&&(s=new Set([t])),this.isIndexValid_(s)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(H.KT.UNSET_INDEX)}e&&this.adapter.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let s=!1;s=void 0===e?!this.adapter.getSelectedStateForElementIndex(t):e;const n=Y(this.selectedIndex_);s?n.add(t):n.delete(t),this.setMultiSelectionAtIndex_(n,i)}}const W=q;const G=t=>t.hasAttribute("mwc-list-item");function Z(){const t=this.itemsReadyResolver;this.itemsReady=new Promise((t=>this.itemsReadyResolver=t)),t()}class J extends d.H{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=W,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const t=function(t,e=50){let i;return function(s=!0){clearTimeout(i),i=setTimeout((()=>{t(s)}),e)}}(this.layout.bind(this));this.debouncedLayout=(e=!0)=>{Z.call(this),t(e)}}async _getUpdateComplete(){return this.getUpdateComplete()}async getUpdateComplete(){let t=!1;return super.getUpdateComplete?t=await super.getUpdateComplete():await super._getUpdateComplete(),await this.itemsReady,t}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(a.OE):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)G(i)&&(e.push(i),i._managingList=this),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach(((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)})),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}const s=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(s)}get selected(){const t=this.index;if(!j(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return n.dy`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${(0,r.o)(t)}"
          aria-label="${(0,r.o)(e)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){return void 0!==this.emptyMessage&&0===this.assignedElements.length?n.dy`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,s=G(i);this.mdcFoundation.handleKeydown(t,s,e)}}onRequestSelected(t){if(this.mdcFoundation){let e=this.getIndexOfTarget(t);if(-1===e&&(this.layout(),e=this.getIndexOfTarget(t),-1===e))return;if(this.items[e].disabled)return;const i=t.detail.selected,s=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===s,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if((0,a.OE)(t)&&G(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const s=this.items[t];s&&s.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const s=new CustomEvent("selected",i);this.dispatchEvent(s)},isFocusInsideList:()=>(0,a.WU)(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=(0,a.Mh)();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(G(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(t){for(const t of this.items)if(0===t.tabindex){t.tabindex=-1;break}this.items[t].tabindex=0,this.items[t].focus()}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}(0,s.gn)([(0,n.Cb)({type:String})],J.prototype,"emptyMessage",void 0),(0,s.gn)([(0,n.IO)(".mdc-deprecated-list")],J.prototype,"mdcRoot",void 0),(0,s.gn)([(0,n.IO)("slot")],J.prototype,"slotElement",void 0),(0,s.gn)([(0,n.Cb)({type:Boolean}),(0,o.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],J.prototype,"activatable",void 0),(0,s.gn)([(0,n.Cb)({type:Boolean}),(0,o.P)((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],J.prototype,"multi",void 0),(0,s.gn)([(0,n.Cb)({type:Boolean}),(0,o.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],J.prototype,"wrapFocus",void 0),(0,s.gn)([(0,n.Cb)({type:String}),(0,o.P)((function(t,e){void 0!==e&&this.updateItems()}))],J.prototype,"itemRoles",void 0),(0,s.gn)([(0,n.Cb)({type:String})],J.prototype,"innerRole",void 0),(0,s.gn)([(0,n.Cb)({type:String})],J.prototype,"innerAriaLabel",void 0),(0,s.gn)([(0,n.Cb)({type:Boolean})],J.prototype,"rootTabbable",void 0),(0,s.gn)([(0,n.Cb)({type:Boolean,reflect:!0}),(0,o.P)((function(t){const e=this.slotElement;if(t&&e){const t=(0,a.f6)(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],J.prototype,"noninteractive",void 0);const Q=n.iv`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;let tt=class extends J{};tt.styles=Q,tt=(0,s.gn)([(0,n.Mo)("mwc-list")],tt)}}]);
//# sourceMappingURL=chunk.2634b68081aa476179cc.js.map