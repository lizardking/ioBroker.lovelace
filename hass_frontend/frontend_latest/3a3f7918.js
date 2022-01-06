/*! For license information please see 3a3f7918.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[92826],{99257:(e,t,i)=>{i(94604);var r=i(15112),o=i(9672),n=i(87156);(0,o.k)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new r.P({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var r=(0,n.vz)(e.root||e);return r.insertBefore(i,r.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&((0,n.vz)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return(0,n.vz)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var r=e.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=r.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&r.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",n),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=s,o.appendChild(r).removeAttribute("id"),o}return null}})},67810:(e,t,i)=>{i.d(t,{o:()=>o});i(94604);var r=i(87156);const o={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:(0,r.vz)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},89194:(e,t,i)=>{i(94604),i(65660),i(1656),i(47686);var r=i(9672),o=i(50856);(0,r.k)({_template:o.d`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},7323:(e,t,i)=>{i.d(t,{p:()=>r});const r=(e,t)=>e&&e.config.components.includes(t)},41682:(e,t,i)=>{i.d(t,{rY:()=>r,js:()=>o});const r=e=>e.data,o=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e;new Set([502,503,504])},56214:(e,t,i)=>{i.a(e,(async e=>{i.r(t),i.d(t,{HuiButtonCardEditor:()=>C});i(30879);var r=i(37500),o=i(26767),n=i(5701),s=i(17717),a=i(69505),l=i(47181),c=i(87744),h=(i(83927),i(640),i(43709),i(26431)),d=(i(1528),i(24673),i(85677)),u=i(45890),f=i(98346),p=i(58831),g=i(16023),v=e([h]);function m(){m=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var n="static"===o?e:i;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!w(e))return i.push(e);var t=this.decorateElement(e,o);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,n=o.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var h=0;h<c.length;h++)this.addElementPlacement(c[h],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==n.finisher&&i.push(n.finisher),void 0!==n.elements){e=n.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?$(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=T(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function _(e){var t,i=T(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function y(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function b(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function T(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}h=(v.then?await v:v)[0];const E=(0,a.f0)(f.I,(0,a.Ry)({entity:(0,a.jt)((0,a.Z_)()),name:(0,a.jt)((0,a.Z_)()),show_name:(0,a.jt)((0,a.O7)()),icon:(0,a.jt)((0,a.Z_)()),show_icon:(0,a.jt)((0,a.O7)()),icon_height:(0,a.jt)((0,a.Z_)()),tap_action:(0,a.jt)(d.C),hold_action:(0,a.jt)(d.C),theme:(0,a.jt)((0,a.Z_)()),show_state:(0,a.jt)((0,a.O7)())})),S=["more-info","toggle","navigate","url","call-service","none"];let C=function(e,t,i,r){var o=m();if(r)for(var n=0;n<r.length;n++)o=r[n](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),i),a=o.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},r=0;r<e.length;r++){var o,n=e[r];if("method"===n.kind&&(o=t.find(i)))if(b(n.descriptor)||b(o.descriptor)){if(w(n)||w(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(w(n)){if(w(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}y(n,o)}else t.push(n)}return t}(s.d.map(_)),e);return o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,o.M)("hui-button-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.S)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,a.hu)(e,E),this._config=e}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_name",value:function(){return this._config.name||""}},{kind:"get",key:"_show_name",value:function(){var e;return null===(e=this._config.show_name)||void 0===e||e}},{kind:"get",key:"_show_state",value:function(){var e;return null!==(e=this._config.show_state)&&void 0!==e&&e}},{kind:"get",key:"_icon",value:function(){return this._config.icon||""}},{kind:"get",key:"_show_icon",value:function(){var e;return null===(e=this._config.show_icon)||void 0===e||e}},{kind:"get",key:"_icon_height",value:function(){return this._config.icon_height&&this._config.icon_height.includes("px")?String(parseFloat(this._config.icon_height)):""}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"get",key:"_theme",value:function(){return this._config.theme||""}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r.dy``;const e=(0,c.Zu)(this.hass),t=this.hass.states[this._entity];return r.dy`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._name}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <ha-icon-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._icon}
            .placeholder=${this._icon||(null==t?void 0:t.attributes.icon)}
            .fallbackPath=${this._icon||null!=t&&t.attributes.icon||!t?void 0:(0,g.K)((0,p.M)(t.entity_id),t)}
            .configValue=${"icon"}
            @value-changed=${this._valueChanged}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <div>
            <ha-formfield
              .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.show_name")}
              .dir=${e}
            >
              <ha-switch
                .checked=${!1!==this._show_name}
                .configValue=${"show_name"}
                @change=${this._change}
              ></ha-switch>
            </ha-formfield>
          </div>
          <div>
            <ha-formfield
              .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.show_state")}
              .dir=${e}
            >
              <ha-switch
                .checked=${!1!==this._show_state}
                .configValue=${"show_state"}
                @change=${this._change}
              ></ha-switch>
            </ha-formfield>
          </div>
          <div>
            <ha-formfield
              .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.show_icon")}
              .dir=${e}
            >
              <ha-switch
                .checked=${!1!==this._show_icon}
                .configValue=${"show_icon"}
                @change=${this._change}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon_height")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._icon_height}
            .configValue=${"icon_height"}
            @value-changed=${this._valueChanged}
            type="number"
            ><div class="suffix" slot="suffix">px</div>
          </paper-input>
          <hui-theme-select-editor
            .hass=${this.hass}
            .value=${this._theme}
            .configValue=${"theme"}
            @value-changed=${this._valueChanged}
          ></hui-theme-select-editor>
        </div>
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${S}
            .configValue=${"tap_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${S}
            .configValue=${"hold_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
        </div>
      </div>
    `}},{kind:"method",key:"_change",value:function(e){if(!this._config||!this.hass)return;const t=e.target,i=t.checked;this[`_${t.configValue}`]!==i&&(0,l.B)(this,"config-changed",{config:{...this._config,[t.configValue]:i}})}},{kind:"method",key:"_valueChanged",value:function(e){if(!this._config||!this.hass)return;const t=e.target,i=e.detail.value;if(this[`_${t.configValue}`]===i)return;let r;t.configValue&&(!1===i||i?r={...this._config,[t.configValue]:"icon_height"!==t.configValue||isNaN(Number(t.value))?i:`${String(i)}px`}:(r={...this._config},delete r[t.configValue])),(0,l.B)(this,"config-changed",{config:r})}},{kind:"get",static:!0,key:"styles",value:function(){return u.A}}]}}),r.oi)}))},98346:(e,t,i)=>{i.d(t,{I:()=>o});var r=i(69505);const o=(0,r.Ry)({type:(0,r.Z_)(),view_layout:(0,r.Yj)()})}}]);
//# sourceMappingURL=3a3f7918.js.map