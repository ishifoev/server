"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[299],{90094:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,".clear-at-select[data-v-6dde9a43]{display:flex;margin-bottom:10px;align-items:center}.clear-at-select__label[data-v-6dde9a43]{margin-right:10px}.clear-at-select .multiselect[data-v-6dde9a43]{flex-grow:1;min-width:130px}","",{version:3,sources:["webpack://./apps/user_status/src/components/ClearAtSelect.vue"],names:[],mappings:"AAsFA,kCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAEA,yCACC,iBAAA,CAGD,+CACC,WAAA,CACA,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clear-at-select {\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n\talign-items: center;\n\n\t&__label {\n\t\tmargin-right: 10px;\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmin-width: 130px;\n\t}\n}\n"],sourceRoot:""}]),t.Z=i},91899:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,".custom-input__form[data-v-df270a88]{flex-grow:1}.custom-input__form input[data-v-df270a88]{width:100%;border-radius:0 var(--border-radius) var(--border-radius) 0}","",{version:3,sources:["webpack://./apps/user_status/src/components/CustomMessageInput.vue"],names:[],mappings:"AAwEA,qCACC,WAAA,CAEA,2CACC,UAAA,CACA,2DAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.custom-input__form {\n\tflex-grow: 1;\n\n\tinput {\n\t\twidth: 100%;\n\t\tborder-radius: 0 var(--border-radius) var(--border-radius) 0;\n\t}\n}\n"],sourceRoot:""}]),t.Z=i},10045:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,".user-status-online-select__input[data-v-d5c541dc]{position:absolute;top:auto;left:-10000px;overflow:hidden;width:1px;height:1px}.user-status-online-select__label[data-v-d5c541dc]{display:block;margin:8px;padding:8px;padding-left:40px;border:2px solid var(--color-main-background);border-radius:var(--border-radius-large);background-color:var(--color-background-hover);background-position:8px center;background-size:24px}.user-status-online-select__label span[data-v-d5c541dc],.user-status-online-select__label[data-v-d5c541dc]{cursor:pointer}.user-status-online-select__input:checked+.user-status-online-select__label[data-v-d5c541dc],.user-status-online-select__input:focus+.user-status-online-select__label[data-v-d5c541dc],.user-status-online-select__label[data-v-d5c541dc]:hover{border-color:var(--color-primary)}.user-status-online-select__subline[data-v-d5c541dc]{display:block;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./apps/user_status/src/components/OnlineStatusSelect.vue"],names:[],mappings:"AAmFC,mDACC,iBAAA,CACA,QAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CAGD,mDACC,aAAA,CACA,UAfc,CAgBd,WAhBc,CAiBd,iBAAA,CACA,6CAAA,CACA,wCAAA,CACA,8CAAA,CACA,8BAAA,CACA,oBAvBU,CAyBV,2GAEC,cAAA,CAIF,iPAGC,iCAAA,CAGD,qDACC,aAAA,CACA,+BAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$icon-size: 24px;\n$label-padding: 8px;\n\n.user-status-online-select {\n\t// Inputs are here for keyboard navigation, they are not visually visible\n\t&__input {\n\t\tposition: absolute;\n\t\ttop: auto;\n\t\tleft: -10000px;\n\t\toverflow: hidden;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t}\n\n\t&__label {\n\t\tdisplay: block;\n\t\tmargin: $label-padding;\n\t\tpadding: $label-padding;\n\t\tpadding-left: $icon-size + $label-padding * 2;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-color: var(--color-background-hover);\n\t\tbackground-position: $label-padding center;\n\t\tbackground-size: $icon-size;\n\n\t\tspan,\n\t\t& {\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\n\t&__input:checked + &__label,\n\t&__input:focus + &__label,\n\t&__label:hover {\n\t\tborder-color: var(--color-primary);\n\t}\n\n\t&__subline {\n\t\tdisplay: block;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=i},28935:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,'.predefined-status[data-v-5e390d16]{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status[data-v-5e390d16]:hover,.predefined-status[data-v-5e390d16]:focus{background-color:var(--color-background-hover)}.predefined-status__icon[data-v-5e390d16]{flex-basis:40px;text-align:center}.predefined-status__message[data-v-5e390d16]{font-weight:bold;padding:0 6px}.predefined-status__clear-at[data-v-5e390d16]{opacity:.7}.predefined-status__clear-at[data-v-5e390d16]::before{content:" - "}',"",{version:3,sources:["webpack://./apps/user_status/src/components/PredefinedStatus.vue"],names:[],mappings:"AA6EA,oCACC,YAAA,CACA,gBAAA,CACA,0BAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,eAAA,CAEA,oFAEC,8CAAA,CAGD,0CACC,eAAA,CACA,iBAAA,CAGD,6CACC,gBAAA,CACA,aAAA,CAGD,8CACC,UAAA,CAEA,sDACC,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.predefined-status {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\tflex-basis: 100%;\n\tborder-radius: var(--border-radius);\n\talign-items: center;\n\tmin-height: 44px;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&__icon {\n\t\tflex-basis: 40px;\n\t\ttext-align: center;\n\t}\n\n\t&__message {\n\t\tfont-weight: bold;\n\t\tpadding: 0 6px;\n\t}\n\n\t&__clear-at {\n\t\topacity: .7;\n\n\t\t&::before {\n\t\t\tcontent: ' - ';\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.Z=i},21279:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,".predefined-statuses-list[data-v-fddcc16e]{display:flex;flex-direction:column;margin-bottom:10px}","",{version:3,sources:["webpack://./apps/user_status/src/components/PredefinedStatusesList.vue"],names:[],mappings:"AAiFA,2CACC,YAAA,CACA,qBAAA,CACA,kBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.predefined-statuses-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 10px;\n}\n"],sourceRoot:""}]),t.Z=i},53688:function(n,t,e){var s=e(87537),a=e.n(s),r=e(23645),i=e.n(r)()(a());i.push([n.id,".set-status-modal[data-v-17947c84]{padding:8px 20px 20px 20px}.set-status-modal__header[data-v-17947c84]{text-align:center;font-weight:bold}.set-status-modal__online-status[data-v-17947c84]{display:grid;margin-bottom:40px;grid-template-columns:1fr 1fr}.set-status-modal__custom-input[data-v-17947c84]{display:flex;width:100%;margin-bottom:10px}.set-status-modal__custom-input .custom-input__emoji-button[data-v-17947c84]{flex-basis:40px;flex-grow:0;width:40px;height:34px;margin-right:0;border-right:none;border-radius:var(--border-radius) 0 0 var(--border-radius)}.set-status-modal .status-buttons[data-v-17947c84]{display:flex;padding:3px;padding-left:0;gap:3px}@media only screen and (max-width: 500px){.set-status-modal__online-status[data-v-17947c84]{grid-template-columns:none !important}}","",{version:3,sources:["webpack://./apps/user_status/src/components/SetStatusModal.vue"],names:[],mappings:"AAoPA,mCACC,0BAAA,CAEA,2CACC,iBAAA,CACA,gBAAA,CAGD,kDACC,YAAA,CAEA,kBAAA,CACA,6BAAA,CAGD,iDACC,YAAA,CACA,UAAA,CACA,kBAAA,CAEA,6EACC,eAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CACA,2DAAA,CAIF,mDACC,YAAA,CACA,WAAA,CACA,cAAA,CACA,OAAA,CAIF,0CACC,kDACC,qCAAA,CAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.set-status-modal {\n\tpadding: 8px 20px 20px 20px;\n\n\t&__header {\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t}\n\n\t&__online-status {\n\t\tdisplay: grid;\n\t\t// Space between the two sections\n\t\tmargin-bottom: 40px;\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t&__custom-input {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tmargin-bottom: 10px;\n\n\t\t.custom-input__emoji-button {\n\t\t\tflex-basis: 40px;\n\t\t\tflex-grow: 0;\n\t\t\twidth: 40px;\n\t\t\theight: 34px;\n\t\t\tmargin-right: 0;\n\t\t\tborder-right: none;\n\t\t\tborder-radius: var(--border-radius) 0 0 var(--border-radius);\n\t\t}\n\t}\n\n\t.status-buttons {\n\t\tdisplay: flex;\n\t\tpadding: 3px;\n\t\tpadding-left:0;\n\t\tgap: 3px;\n\t}\n}\n\n@media only screen and (max-width: 500px) {\n\t.set-status-modal__online-status {\n\t\tgrid-template-columns: none !important;\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=i},45558:function(n,t,e){e.r(t),e.d(t,{default:function(){return rn}});var s=e(26932),a=e(64056),r=e.n(a),i=e(47450),l=e.n(i),o=e(1412),u=e.n(o),c=e(9944),d=e(84387),A=e(80351),p=e.n(A),m=e(64039),f=function(n){if(null===n)return(0,c.translate)("user_status","Don't clear");if("end-of"===n.type)switch(n.time){case"day":return(0,c.translate)("user_status","Today");case"week":return(0,c.translate)("user_status","This week");default:return null}if("period"===n.type)return p().duration(1e3*n.time).humanize();if("_time"===n.type){var t=p()((0,m.n)()),e=p()(n.time,"X");return p().duration(t.diff(e)).humanize()}return null},C={name:"PredefinedStatus",filters:{clearAtFilter:f},props:{messageId:{type:String,required:!0},icon:{type:String,required:!0},message:{type:String,required:!0},clearAt:{type:Object,required:!1,default:null}},methods:{select:function(){this.$emit("select")}}},g=e(93379),_=e.n(g),b=e(7795),v=e.n(b),h=e(90569),x=e.n(h),y=e(3565),S=e.n(y),k=e(19216),w=e.n(k),$=e(44589),Z=e.n($),P=e(28935),B={};B.styleTagTransform=Z(),B.setAttributes=S(),B.insert=x().bind(null,"head"),B.domAPI=v(),B.insertStyleElement=w(),_()(P.Z,B),P.Z&&P.Z.locals&&P.Z.locals;var I=e(51900),O=(0,I.Z)(C,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"predefined-status",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.select.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:n.select.apply(null,arguments)}],click:n.select}},[e("span",{staticClass:"predefined-status__icon"},[n._v("\n\t\t"+n._s(n.icon)+"\n\t")]),n._v(" "),e("span",{staticClass:"predefined-status__message"},[n._v("\n\t\t"+n._s(n.message)+"\n\t")]),n._v(" "),e("span",{staticClass:"predefined-status__clear-at"},[n._v("\n\t\t"+n._s(n._f("clearAtFilter")(n.clearAt))+"\n\t")])])}),[],!1,null,"5e390d16",null);function E(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,s)}return e}function D(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){M(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function M(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var j={name:"PredefinedStatusesList",components:{PredefinedStatus:O.exports},computed:D(D({},(0,e(20629).rn)({predefinedStatuses:function(n){return n.predefinedStatuses.predefinedStatuses}})),{},{hasLoaded:function(){return this.predefinedStatuses.length>0}}),mounted:function(){this.$store.dispatch("loadAllPredefinedStatuses")},methods:{selectStatus:function(n){this.$emit("select-status",n)}}},T=e(21279),q={};q.styleTagTransform=Z(),q.setAttributes=S(),q.insert=x().bind(null,"head"),q.domAPI=v(),q.insertStyleElement=w(),_()(T.Z,q),T.Z&&T.Z.locals&&T.Z.locals;var G=(0,I.Z)(j,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.hasLoaded?e("div",{staticClass:"predefined-statuses-list"},n._l(n.predefinedStatuses,(function(t){return e("PredefinedStatus",{key:t.id,attrs:{"message-id":t.id,icon:t.icon,message:t.message,"clear-at":t.clearAt},on:{select:function(e){return n.selectStatus(t)}}})})),1):e("div",{staticClass:"predefined-statuses-list"},[e("div",{staticClass:"icon icon-loading-small"})])}),[],!1,null,"fddcc16e",null).exports,R={name:"CustomMessageInput",props:{message:{type:String,required:!0,default:function(){return""}},disabled:{type:Boolean,default:!1}},methods:{focus:function(){this.$refs.input.focus()},change:function(n){this.$emit("change",n.target.value)},submit:function(n){this.$emit("submit",n.target.value)}}},F=e(91899),z={};z.styleTagTransform=Z(),z.setAttributes=S(),z.insert=x().bind(null,"head"),z.domAPI=v(),z.insertStyleElement=w(),_()(F.Z,z),F.Z&&F.Z.locals&&F.Z.locals;var U=(0,I.Z)(R,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("form",{staticClass:"custom-input__form",on:{submit:function(n){n.preventDefault()}}},[e("input",{ref:"input",attrs:{maxlength:"80",disabled:n.disabled,placeholder:n.$t("user_status","What is your status?"),type:"text"},domProps:{value:n.message},on:{change:n.change,keyup:[n.change,function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.submit.apply(null,arguments)}],paste:n.change}})])}),[],!1,null,"df270a88",null),W=U.exports,L=e(7811),Y={name:"ClearAtSelect",components:{Multiselect:e.n(L)()},props:{clearAt:{type:Object,default:null}},data:function(){return{options:[{label:(0,c.translate)("user_status","Don't clear"),clearAt:null},{label:(0,c.translate)("user_status","30 minutes"),clearAt:{type:"period",time:1800}},{label:(0,c.translate)("user_status","1 hour"),clearAt:{type:"period",time:3600}},{label:(0,c.translate)("user_status","4 hours"),clearAt:{type:"period",time:14400}},{label:(0,c.translate)("user_status","Today"),clearAt:{type:"end-of",time:"day"}},{label:(0,c.translate)("user_status","This week"),clearAt:{type:"end-of",time:"week"}}]}},computed:{option:function(){return{clearAt:this.clearAt,label:f(this.clearAt)}}},methods:{select:function(n){n&&this.$emit("select-clear-at",n.clearAt)}}},V=e(90094),Q={};Q.styleTagTransform=Z(),Q.setAttributes=S(),Q.insert=x().bind(null,"head"),Q.domAPI=v(),Q.insertStyleElement=w(),_()(V.Z,Q),V.Z&&V.Z.locals&&V.Z.locals;var X=(0,I.Z)(Y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"clear-at-select"},[e("span",{staticClass:"clear-at-select__label"},[n._v("\n\t\t"+n._s(n.$t("user_status","Clear status message after"))+"\n\t")]),n._v(" "),e("Multiselect",{attrs:{label:"label",value:n.option,options:n.options,"open-direction":"top"},on:{select:n.select}})],1)}),[],!1,null,"6dde9a43",null).exports,H={name:"OnlineStatusSelect",props:{checked:{type:Boolean,default:!1},icon:{type:String,required:!0},type:{type:String,required:!0},label:{type:String,required:!0},subline:{type:String,default:null}},computed:{id:function(){return"user-status-online-status-".concat(this.type)}},methods:{onChange:function(){this.$emit("select",this.type)}}},J=e(10045),K={};K.styleTagTransform=Z(),K.setAttributes=S(),K.insert=x().bind(null,"head"),K.domAPI=v(),K.insertStyleElement=w(),_()(J.Z,K),J.Z&&J.Z.locals&&J.Z.locals;var N=(0,I.Z)(H,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"user-status-online-select"},[e("input",{staticClass:"user-status-online-select__input",attrs:{id:n.id,type:"radio",name:"user-status-online"},domProps:{checked:n.checked},on:{change:n.onChange}}),n._v(" "),e("label",{staticClass:"user-status-online-select__label",class:n.icon,attrs:{for:n.id}},[n._v("\n\t\t"+n._s(n.label)+"\n\t\t"),e("em",{staticClass:"user-status-online-select__subline"},[n._v(n._s(n.subline))])])])}),[],!1,null,"d5c541dc",null).exports;function nn(n,t,e,s,a,r,i){try{var l=n[r](i),o=l.value}catch(n){return void e(n)}l.done?t(o):Promise.resolve(o).then(s,a)}function tn(n){return function(){var t=this,e=arguments;return new Promise((function(s,a){var r=n.apply(t,e);function i(n){nn(r,s,a,i,l,"next",n)}function l(n){nn(r,s,a,i,l,"throw",n)}i(void 0)}))}}var en={name:"SetStatusModal",components:{ClearAtSelect:X,CustomMessageInput:W,EmojiPicker:r(),Modal:l(),OnlineStatusSelect:N,PredefinedStatusesList:G,ButtonVue:u()},mixins:[d.Z],data:function(){return{clearAt:null,icon:null,message:"",messageId:"",isSavingStatus:!1,statuses:[{type:"online",label:(0,c.translate)("user_status","Online"),icon:"icon-user-status-online"},{type:"away",label:(0,c.translate)("user_status","Away"),icon:"icon-user-status-away"},{type:"dnd",label:(0,c.translate)("user_status","Do not disturb"),subline:(0,c.translate)("user_status","Mute all notifications"),icon:"icon-user-status-dnd"},{type:"invisible",label:(0,c.translate)("user_status","Invisible"),subline:(0,c.translate)("user_status","Appear offline"),icon:"icon-user-status-invisible"}]}},computed:{visibleIcon:function(){return this.icon||"😀"}},mounted:function(){this.messageId=this.$store.state.userStatus.messageId,this.icon=this.$store.state.userStatus.icon,this.message=this.$store.state.userStatus.message||"",null!==this.$store.state.userStatus.clearAt&&(this.clearAt={type:"_time",time:this.$store.state.userStatus.clearAt})},methods:{closeModal:function(){this.$emit("close")},setIcon:function(n){var t=this;this.messageId=null,this.icon=n,this.$nextTick((function(){t.$refs.customMessageInput.focus()}))},setMessage:function(n){this.messageId=null,this.message=n},setClearAt:function(n){this.clearAt=n},selectPredefinedMessage:function(n){this.messageId=n.id,this.clearAt=n.clearAt,this.icon=n.icon,this.message=n.message},saveStatus:function(){var n=this;return tn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isSavingStatus){t.next=2;break}return t.abrupt("return");case 2:if(t.prev=2,n.isSavingStatus=!0,void 0===n.messageId||null===n.messageId){t.next=9;break}return t.next=7,n.$store.dispatch("setPredefinedMessage",{messageId:n.messageId,clearAt:n.clearAt});case 7:t.next=11;break;case 9:return t.next=11,n.$store.dispatch("setCustomMessage",{message:n.message,icon:n.icon,clearAt:n.clearAt});case 11:t.next=19;break;case 13:return t.prev=13,t.t0=t.catch(2),(0,s.x2)(n.$t("user_status","There was an error saving the status")),console.debug(t.t0),n.isSavingStatus=!1,t.abrupt("return");case 19:n.isSavingStatus=!1,n.closeModal();case 21:case"end":return t.stop()}}),t,null,[[2,13]])})))()},clearStatus:function(){var n=this;return tn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.isSavingStatus=!0,t.next=4,n.$store.dispatch("clearMessage");case 4:t.next=12;break;case 6:return t.prev=6,t.t0=t.catch(0),(0,s.x2)(n.$t("user_status","There was an error clearing the status")),console.debug(t.t0),n.isSavingStatus=!1,t.abrupt("return");case 12:n.isSavingStatus=!1,n.closeModal();case 14:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},sn=e(53688),an={};an.styleTagTransform=Z(),an.setAttributes=S(),an.insert=x().bind(null,"head"),an.domAPI=v(),an.insertStyleElement=w(),_()(sn.Z,an),sn.Z&&sn.Z.locals&&sn.Z.locals;var rn=(0,I.Z)(en,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Modal",{attrs:{size:"normal",title:n.$t("user_status","Set status")},on:{close:n.closeModal}},[e("div",{staticClass:"set-status-modal"},[e("div",{staticClass:"set-status-modal__header"},[e("h3",[n._v(n._s(n.$t("user_status","Online status")))])]),n._v(" "),e("div",{staticClass:"set-status-modal__online-status"},n._l(n.statuses,(function(t){return e("OnlineStatusSelect",n._b({key:t.type,attrs:{checked:t.type===n.statusType},on:{select:n.changeStatus}},"OnlineStatusSelect",t,!1))})),1),n._v(" "),e("div",{staticClass:"set-status-modal__header"},[e("h3",[n._v(n._s(n.$t("user_status","Status message")))])]),n._v(" "),e("div",{staticClass:"set-status-modal__custom-input"},[e("EmojiPicker",{on:{select:n.setIcon}},[e("button",{staticClass:"custom-input__emoji-button"},[n._v("\n\t\t\t\t\t"+n._s(n.visibleIcon)+"\n\t\t\t\t")])]),n._v(" "),e("CustomMessageInput",{ref:"customMessageInput",attrs:{message:n.message},on:{change:n.setMessage,submit:n.saveStatus}})],1),n._v(" "),e("PredefinedStatusesList",{on:{"select-status":n.selectPredefinedMessage}}),n._v(" "),e("ClearAtSelect",{attrs:{"clear-at":n.clearAt},on:{"select-clear-at":n.setClearAt}}),n._v(" "),e("div",{staticClass:"status-buttons"},[e("ButtonVue",{attrs:{wide:"true",text:n.$t("user_status","Clear status message"),disabled:n.isSavingStatus},on:{click:n.clearStatus}},[n._v("\n\t\t\t\t"+n._s(n.$t("user_status","Clear status message"))+"\n\t\t\t")]),n._v(" "),e("ButtonVue",{attrs:{wide:"true",type:"primary",text:n.$t("user_status","Set status message"),disabled:n.isSavingStatus},on:{click:n.saveStatus}},[n._v("\n\t\t\t\t"+n._s(n.$t("user_status","Set status message"))+"\n\t\t\t")])],1)],1)])}),[],!1,null,"17947c84",null).exports}}]);
//# sourceMappingURL=user-status-modal-299.js.map?v=2567a61f75a7cc68b35f