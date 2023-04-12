/*! For license information please see comments-comments-app.js.LICENSE.txt */
(()=>{var e,s={43075:(e,s,n)=>{"use strict";var o=n(17499),a=n(31352),i=n(79753),r=n(45994),m=n(79954),c=n(4820),l=n(61361),d=n(20144),u=n(93455),p=n.n(u),h=n(10861),A=n.n(h),g=n(36272),C=n(92141),f=n(94603),j=n(80351),v=n.n(j),y=n(45400),_=n.n(y),x=n(12945),b=n.n(x),w=n(875),k=n.n(w),D=n(75925),N=n.n(D),I=n(12323),O=n.n(I),T=n(13408),M=n.n(T),E=n(39429);const B={name:"Moment",props:{timestamp:{type:Number,required:!0},format:{type:String,default:"LLL"}},computed:{title(){return v().unix(this.timestamp).format(this.format)},formatted(){return v().unix(this.timestamp).fromNow()}}};var S=n(51900);const z=(0,S.Z)(B,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"live-relative-timestamp",attrs:{"data-timestamp":1e3*t.timestamp,title:t.title}},[t._v(t._s(t.formatted))])}),[],!1,null,null,null).exports,R=function(){return(0,i.generateRemoteUrl)("dav/comments")};function q(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const s=new DOMParser;let n=t;for(let t=0;t<e;t++)n=s.parseFromString(n,"text/html").documentElement.textContent;return n}var L,Z=n(14596);const P=(0,Z.eI)(R(),{headers:{"X-Requested-With":"XMLHttpRequest",requesttoken:null!==(L=(0,r.IH)())&&void 0!==L?L:""}});var $=n(64024),U=n(25108);const G={props:{id:{type:Number,default:null},message:{type:String,default:""},ressourceId:{type:[String,Number],required:!0}},data:()=>({deleted:!1,editing:!1,loading:!1}),methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await async function(t,e,s,n){const o=["",t,e,s].join("/");return await P.customRequest(o,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(n,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}))}(this.commentsType,this.ressourceId,this.id,e),this.logger.debug("Comment edited",{commentsType:this.commentsType,ressourceId:this.ressourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,$.x2)(t("comments","An error occurred while trying to edit the comment")),U.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.deleted=!0;const e=setTimeout(this.onDelete,$.et);(0,$.yl)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1}))},async onDelete(){try{await async function(t,e,s){const n=["",t,e,s].join("/");await P.deleteFile(n)}(this.commentsType,this.ressourceId,this.id),this.logger.debug("Comment deleted",{commentsType:this.commentsType,ressourceId:this.ressourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,$.x2)(t("comments","An error occurred while trying to delete the comment")),U.error(e),this.deleted=!1}},async onNewComment(e){this.loading=!0;try{const t=await async function(t,e,s){const n=["",t,e].join("/"),o=await c.default.post(R()+n,{actorDisplayName:(0,r.ts)().displayName,actorId:(0,r.ts)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:s,objectType:"files",verb:"comment"}),a=n+"/"+parseInt(o.headers["content-location"].split("/").pop()),i=await P.stat(a,{details:!0}),m=i.data.props;return m.actorDisplayName=q(m.actorDisplayName,2),m.message=q(m.message,2),i.data}(this.commentsType,this.ressourceId,e);this.logger.debug("New comment posted",{commentsType:this.commentsType,ressourceId:this.ressourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,$.x2)(t("comments","An error occurred while trying to create the comment")),U.error(e)}finally{this.loading=!1}}}},F={name:"Comment",components:{NcActionButton:_(),NcActions:b(),NcActionSeparator:k(),ArrowRight:E.default,NcAvatar:N(),NcButton:A(),Moment:z,NcRichContenteditable:O()},mixins:[M(),G],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:""}),computed:{isOwnComment(){return(0,r.ts)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return parseInt(v()(this.creationDateTime).format("x"),10)/1e3}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{updateLocalMessage(t){this.localMessage=t.toString()},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}};var Y=n(93379),H=n.n(Y),W=n(7795),V=n.n(W),Q=n(90569),K=n.n(Q),X=n(3565),J=n.n(X),tt=n(19216),et=n.n(tt),st=n(44589),nt=n.n(st),ot=n(82306),at={};at.styleTagTransform=nt(),at.setAttributes=J(),at.insert=K().bind(null,"head"),at.domAPI=V(),at.insertStyleElement=et(),H()(ot.Z,at),ot.Z&&ot.Z.locals&&ot.Z.locals;const it=(0,S.Z)(F,(function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted,expression:"!deleted"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{attrs:{icon:"icon-close"},on:{click:t.onEditCancel}},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-rename"},on:{click:t.onEdit}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-delete"},on:{click:t.onDeleteWithUndo}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("Moment",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp}}):t._e()],1),t._v(" "),t.editor||t.editing?e("div",{staticClass:"comment__editor"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,value:t.localMessage,"user-data":t.userData},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("NcButton",{staticClass:"comment__submit",attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("span",{staticClass:"icon-loading-small"}):e("ArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,2357784758)})],1):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])}),[],!1,null,"13a1afc1",null).exports;var rt=n(8338),mt=n(56714);const ct=async function(t,e){let{commentsType:s,ressourceId:n}=t;const o=["",s,n].join("/"),a=await P.customRequest(o,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(20,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(e.offset||0,"</oc:offset>\n\t\t\t</oc:filter-comments>")},e)),i=await a.text(),r=await(0,Z.sw)(i),m=lt(r,!0);return(0,rt.np)(a,m,!0)},lt=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:s}}=t;return s.map((t=>{const{propstat:{prop:s}}=t;return(0,mt.eg)(s,s.id.toString(),e)}))};var dt=n(25108);d.default.use(l.default);const ut={name:"Comments",components:{Comment:it,NcEmptyContent:p(),NcButton:A(),RefreshIcon:g.Z,MessageReplyTextIcon:C.Z,AlertCircleOutlineIcon:f.default},data:()=>({error:"",loading:!1,done:!1,ressourceId:null,offset:0,comments:[],cancelRequest:()=>{},editorData:{actorDisplayName:(0,r.ts)().displayName,actorId:(0,r.ts)().uid,key:"editor"},Comment:it,userData:{}}),computed:{hasComments(){return this.comments.length>0},isFirstLoading(){return this.loading&&0===this.offset}},methods:{async update(t){this.ressourceId=t,this.resetState(),this.getComments()},onScrollBottomReached(){this.error||this.done||this.loading||this.getComments()},genMentionsData(t){return Object.values(t).flat().forEach((t=>{this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,r.ts)().uid===t.mentionId}})),this.userData},async getComments(){this.cancelRequest("cancel");try{this.loading=!0,this.error="";const{request:t,abort:e}=function(t){const e=new AbortController,s=e.signal;return{request:async function(e,n){return await t(e,Object.assign({signal:s},n))},abort:()=>e.abort()}}(ct);this.cancelRequest=e;const{data:s}=await t({commentsType:this.commentsType,ressourceId:this.ressourceId},{offset:this.offset})||{data:[]};this.logger.debug("Processed ".concat(s.length," comments"),{comments:s}),s.length<20&&(this.done=!0),this.comments.push(...s),this.offset+=20}catch(e){if("cancel"===e.message)return;this.error=t("comments","Unable to load the comments list"),dt.error("Error loading the comments list",e)}finally{this.loading=!1}},async autoComplete(t,e){return(await c.default.get((0,i.generateOcsUrl)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.ressourceId,sorter:"commenters|share-recipients",limit:(0,m.j)("comments","maxAutoCompleteResults")}})).data.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},onNewComment(t){this.comments.unshift(t)},onDelete(t){const e=this.comments.findIndex((e=>e.props.id===t));e>-1?this.comments.splice(e,1):dt.error("Could not find the deleted comment in the list",t)},resetState(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}};var pt=n(35594),ht={};ht.styleTagTransform=nt(),ht.setAttributes=J(),ht.insert=K().bind(null,"head"),ht.domAPI=V(),ht.insertStyleElement=et(),H()(pt.Z,ht),pt.Z&&pt.Z.locals&&pt.Z.locals;const At=(0,S.Z)(ut,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comments",class:{"icon-loading":t.isFirstLoading}},[e("Comment",t._b({staticClass:"comments__writer",attrs:{"auto-complete":t.autoComplete,"user-data":t.userData,editor:!0,"ressource-id":t.ressourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1)),t._v(" "),t.isFirstLoading?t._e():[!t.hasComments&&t.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{title:t.t("comments","No comments yet, start the conversation!")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):e("ul",t._l(t.comments,(function(s){return e("Comment",t._b({key:s.props.id,staticClass:"comments__list",attrs:{tag:"li","auto-complete":t.autoComplete,message:s.props.message,"ressource-id":t.ressourceId,"user-data":t.genMentionsData(s.props.mentions)},on:{"update:message":function(e){return t.$set(s.props,"message",e)},delete:t.onDelete}},"Comment",s.props,!1))})),1),t._v(" "),t.loading&&!t.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):t.hasComments&&t.done?e("div",{staticClass:"comments__info"},[t._v("\n\t\t\t"+t._s(t.t("comments","No more messages"))+"\n\t\t")]):t.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{title:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),t._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:t.getComments},scopedSlots:t._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[t._v("\n\t\t\t\t"+t._s(t.t("comments","Retry"))+"\n\t\t\t")])]:t._e()]],2)}),[],!1,null,"9e9ed272",null).exports,gt=(0,o.IY)().setApp("comments").detectUser().build();d.default.mixin({data:()=>({logger:gt}),methods:{t:a.Iu,n:a.uN}});var Ct=n(25108);window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",e=arguments.length>1?arguments[1]:void 0;return d.default.mixin({data:()=>({commentsType:t})}),new(d.default.extend(At))(e)}}}),Ct.debug("OCA.Comments.View initialized")},82306:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var n=s(87537),o=s.n(n),a=s(23645),i=s.n(a)()(o());i.push([t.id,".comment[data-v-13a1afc1]{display:flex;gap:16px;position:relative;padding:5px 10px}.comment__side[data-v-13a1afc1]{display:flex;align-items:flex-start;padding-top:16px}.comment__body[data-v-13a1afc1]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-13a1afc1]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-13a1afc1]{margin-left:10px !important}.comment__author[data-v-13a1afc1]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-13a1afc1],.comment__timestamp[data-v-13a1afc1]{margin-left:auto;text-align:right;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__submit[data-v-13a1afc1]{position:absolute !important;right:0;bottom:0;margin:1px}.comment__message[data-v-13a1afc1]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-13a1afc1]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-13a1afc1]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,QAAA,CACA,iBAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,gBAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,mCAAA,CAGD,kCACC,4BAAA,CACA,OAAA,CACA,QAAA,CAEA,UAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YArEiB",sourcesContent:['\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tdisplay: flex;\n\tgap: 16px;\n\tposition: relative;\n\tpadding: 5px $comment-padding;\n\n\t&__side {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tpadding-top: 16px;\n\t}\n\n\t&__body {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t}\n\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\ttext-align: right;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\t// Align with input border\n\t\tmargin: 1px;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\tmargin-top: -6px;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]);const r=i},35594:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var n=s(87537),o=s.n(n),a=s(23645),i=s.n(a)()(o());i.push([t.id,".comments__empty[data-v-9e9ed272],.comments__error[data-v-9e9ed272]{margin-top:0 !important}.comments__retry[data-v-9e9ed272]{margin:0 auto}.comments__info[data-v-9e9ed272]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AAGC,oEAEC,uBAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n.comments {\n\t// Do not add emptycontent top margin\n\t&__empty,\n\t&__error {\n\t\tmargin-top: 0 !important;\n\t}\n\n\t&__retry {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]);const r=i},46700:(t,e,s)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=46700}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return s[t].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=s,e=[],o.O=(t,s,n,a)=>{if(!s){var i=1/0;for(l=0;l<e.length;l++){s=e[l][0],n=e[l][1],a=e[l][2];for(var r=!0,m=0;m<s.length;m++)(!1&a||i>=a)&&Object.keys(o.O).every((t=>o.O[t](s[m])))?s.splice(m--,1):(r=!1,a<i&&(i=a));if(r){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[s,n,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=6335,(()=>{o.b=document.baseURI||self.location.href;var t={6335:0};o.O.j=e=>0===t[e];var e=(e,s)=>{var n,a,i=s[0],r=s[1],m=s[2],c=0;if(i.some((e=>0!==t[e]))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(m)var l=m(o)}for(e&&e(s);c<i.length;c++)a=i[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(l)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),o.nc=void 0;var a=o.O(void 0,[7874],(()=>o(43075)));a=o.O(a)})();
//# sourceMappingURL=comments-comments-app.js.map?v=78e61024d65cea11029b