(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{48381:function(e,n,r){"use strict";var t=r(82684),i=r(31882),o=r(55485),u=r(30160),l=r(86735),c=r(28598);n.Z=function(e){var n=e.onClickTag,r=e.tags,a=void 0===r?[]:r,s=(0,t.useMemo)((function(){return(null===a||void 0===a?void 0:a.length)||0}),[a]),d=(0,t.useMemo)((function(){return(0,l.YC)(a||[],"uuid")}),[a]);return(0,c.jsx)(o.ZP,{alignItems:"center",flexWrap:"wrap",children:null===d||void 0===d?void 0:d.reduce((function(e,r){return e.push((0,c.jsx)("div",{style:{marginBottom:2,marginRight:s>=2?4:0,marginTop:2},children:(0,c.jsx)(i.Z,{onClick:n?function(){return n(r)}:null,small:!0,children:(0,c.jsx)(u.ZP,{children:r.uuid})})},"tag-".concat(r.uuid))),e}),[])})}},16488:function(e,n,r){"use strict";r.d(n,{IJ:function(){return g},M8:function(){return P},Uc:function(){return j},XM:function(){return Z},_U:function(){return v},eI:function(){return b},gU:function(){return O},lO:function(){return E},ri:function(){return m},tL:function(){return y},vJ:function(){return w},xH:function(){return x}});var t,i=r(82394),o=r(92083),u=r.n(o),l=r(3917),c=r(4383),a=r(30229),s=r(42122),d=r(86735);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e){return!!e&&!Object.values(a.U5).includes(e)};function g(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var r=n.block_uuid,t=n.completed_at,o=n.started_at,l=n.status,c=null;o&&t&&(c=u()(t).valueOf()-u()(o).valueOf());return f(f({},e),{},(0,i.Z)({},r,{runtime:c,status:l}))}),{})}var h,m=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return e?n.slice(0,1):n};function x(e){var n=(0,s.gR)(e,[a.gm.INTERVAL,a.gm.TYPE]),r=e[a.gm.INTERVAL];r&&(n["schedule_interval[]"]=encodeURIComponent(r));var t=e[a.gm.TYPE];return t&&(n["schedule_type[]"]=t),n}function b(e){return e?new Date(u()(e).valueOf()):null}function j(e,n){return n?(0,l.XG)(e,n):function(e){if("string"!==typeof e)return e;var n=e.split("+")[0];return u()(b(n)).format(l.Nx)}(e)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(h||(h={}));var y=(t={},(0,i.Z)(t,h.DAY,86400),(0,i.Z)(t,h.HOUR,3600),(0,i.Z)(t,h.MINUTE,60),(0,i.Z)(t,h.SECOND,1),t);function O(e){var n=h.SECOND,r=e;return e%86400===0?(r/=86400,n=h.DAY):e%3600===0?(r/=3600,n=h.HOUR):e%60===0&&(r/=60,n=h.MINUTE),{time:r,unit:n}}function w(e,n){return e*y[n]}function Z(e,n,r){var t,i=u()(e);return i.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),i.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),i.set("second",0),t=i.format(l.TD),null!==r&&void 0!==r&&r.includeSeconds&&(t=t.concat(":00")),null!==r&&void 0!==r&&r.localTimezone&&(t=i.format(l.lE),null!==r&&void 0!==r&&r.convertToUtc&&(t=(0,l.d$)(t,{includeSeconds:null===r||void 0===r?void 0:r.includeSeconds,utcFormat:!0}))),t}function P(e){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",i=!0;return i&&(r?t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(t="".concat(t,"/").concat(e.token)))),i&&(n=window.location.port)&&(t=t.replace(n,c.QT)),t}function I(e,n,r){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,r){var t=r.indexOf(e),i=0;if(n<0)for(var o=0;o>n;o--)0===t?(t=r.length-1,i-=1):t-=1;else if(n>0)for(var u=0;u<n;u++)t===r.length-1?(t=0,i+=1):t+=1;return{additionalOffset:i,cronValue:String(r[t]||e)}}(+e,n,r)}var k=(0,d.m5)(60),_=(0,d.m5)(24),C=(0,l.Cs)();function E(e,n){if(!e)return e;var r=u()().local().format("Z"),t=r.split(":"),i="-"===r[0],o=3===t[0].length?Number(t[0].slice(1)):Number(t[0]),l=Number(t[1]);(i&&!n||!i&&n)&&(o=-o,l=-l);var c=e.split(" "),a=c[0],s=c[1],d=c[2],p=I(a,l,k),f=I(s,o+p.additionalOffset,_);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var v=I(d,f.additionalOffset,C);c[2]=v.cronValue}return c.join(" ")}},30229:function(e,n,r){"use strict";r.d(n,{PN:function(){return l},TR:function(){return v},U5:function(){return a},Wb:function(){return f},Xm:function(){return o},Z4:function(){return s},fq:function(){return c},gm:function(){return d},kJ:function(){return p}});var t,i,o,u=r(82394),l="__bookmark_values__";!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var c,a,s=(t={},(0,u.Z)(t,o.API,(function(){return"API"})),(0,u.Z)(t,o.EVENT,(function(){return"event"})),(0,u.Z)(t,o.TIME,(function(){return"schedule"})),t);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(c||(c={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly",e.ALWAYS_ON="@always_on"}(a||(a={}));var d,p,f=[a.ONCE,a.HOURLY,a.DAILY,a.WEEKLY,a.MONTHLY];!function(e){e.INTERVAL="frequency[]",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(d||(d={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(p||(p={}));var v=(i={},(0,u.Z)(i,p.CREATED_AT,"Created at"),(0,u.Z)(i,p.NAME,"Name"),(0,u.Z)(i,p.PIPELINE,"Pipeline"),(0,u.Z)(i,p.STATUS,"Active"),(0,u.Z)(i,p.TYPE,"Type"),i)},31882:function(e,n,r){"use strict";var t=r(38626),i=r(71180),o=r(55485),u=r(30160),l=r(44897),c=r(72473),a=r(70515),s=r(61896),d=r(28598),p=t.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||l.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||l.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((a.iI+s.Al)/2,"px;\n    height: ").concat(1.5*a.iI+s.Al,"px;\n    padding: ").concat(a.iI/1.5,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((a.iI/2+s.Al)/2,"px;\n    height: ").concat(s.Al+a.iI/2+2,"px;\n    padding: ").concat(a.iI/4,"px ").concat(a.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((a.iI/1+s.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||l.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,r=e.children,t=e.disabled,l=e.label,s=e.monospace,f=e.onClick,v=e.primary,g=e.small,h=e.xsmall;return(0,d.jsx)(p,{border:n,primary:v,small:g,xsmall:h,children:(0,d.jsx)(i.ZP,{basic:!0,disabled:t,noBackground:!0,noPadding:!0,onClick:f,transparent:!0,children:(0,d.jsxs)(o.ZP,{alignItems:"center",children:[r,l&&(0,d.jsx)(u.ZP,{monospace:s,small:g,xsmall:h,children:l}),!t&&f&&(0,d.jsx)("div",{style:{marginLeft:2}}),!t&&f&&(0,d.jsx)(c.x8,{default:v,muted:!v,size:g?a.iI:1.25*a.iI})]})})})}},46732:function(e,n,r){"use strict";var t=r(82394),i=r(26304),o=(r(82684),r(50724)),u=r(70374),l=r(28598),c=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.children,r=e.items,t=e.open,a=e.onClickCallback,d=e.onClickOutside,p=e.parentRef,f=e.uuid,v=e.zIndex,g=(0,i.Z)(e,c),h=(0,l.jsxs)("div",{style:{position:"relative",zIndex:(d?3:2)+(v||0)},children:[(0,l.jsx)("div",{ref:p,children:n}),(0,l.jsx)(u.Z,s(s({},g),{},{items:r,onClickCallback:a,open:t,parentRef:p,uuid:f}))]});return d?(0,l.jsx)(o.Z,{onClickOutside:d,open:!0,children:h}):h}},35185:function(e,n,r){"use strict";var t=r(82394),i=r(91835),o=(r(82684),r(38626)),u=r(44897),l=r(42631),c=r(70515),a=r(28598);function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],l.BG,.75*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||u.Z.monotone).grey200,";\n  ")})),f=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));n.Z=function(e){var n=(0,i.Z)({},e);return(0,a.jsx)(p,d(d({},n),{},{children:(0,a.jsx)(f,d({},n))}))}},38415:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Ce}});var t=r(77837),i=r(75582),o=r(82394),u=r(38860),l=r.n(u),c=r(12691),a=r.n(c),s=r(82684),d=r(69864),p=r(34376),f=r(24138),v=r(15338),g=r(93369),h=r(48670),m=r(55072),x=r(75457),b=r(30229),j=r(93808),y=r(82359),O=r(71610),w=r(71180),Z=r(90299),P=r(55485),I=r(85854),k=r(37899),_=r(65956),C=r(38276),E=r(30160),T=r(44897),S=r(70515),N={uuid:"RUNTIME VARIABLES"},R={uuid:"BOOKMARK VALUES"},M=r(32080),A=r(8916),D=r(81728),B=r(28598);function V(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function L(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?V(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var U="".concat(S.iI,"px ").concat(3*S.iI,"px");var Y=function(e){var n=e.initialPipelineSchedulePayload,r=e.onCancel,t=e.onSuccess,i=e.pipeline,u=e.variables,l=(0,s.useState)(null),c=l[0],a=l[1],d=(0,s.useState)(!0),p=d[0],f=d[1],g=(0,s.useState)(u||{}),h=g[0],m=g[1],x=(0,s.useState)(null),j=x[0],y=x[1],V=(0,s.useMemo)((function(){return L(L({},n),{},{name:(0,D.Y6)(),variables:p?(0,A.e7)(L(L({},h),c?(0,o.Z)({},b.PN,c):{})):null})}),[c,n,p,h]),Y=(0,s.useMemo)((function(){return null!==i&&void 0!==i&&i.blocks?(0,M.n)(i):null}),[i]),H=(0,s.useMemo)((function(){var e;return Y&&(null===(e=Object.keys(Y||{}))||void 0===e?void 0:e.length)>=1?[N,R]:null}),[Y]);(0,s.useEffect)((function(){(null===H||void 0===H?void 0:H.length)>=1&&!j&&y(null===H||void 0===H?void 0:H[0])}),[j,y,H]);var F=(0,s.useMemo)((function(){return null!==H&&void 0!==H&&H.length?(0,B.jsx)(Z.Z,{onClickTab:function(e){y(e)},selectedTabUUID:null===j||void 0===j?void 0:j.uuid,tabs:H,underlineStyle:!0}):null}),[j,y,H]);return(0,B.jsxs)(_.Z,{noPadding:!0,footer:(0,B.jsxs)(P.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,B.jsx)(w.ZP,{onClick:function(){t({pipeline_schedule:V}),r()},padding:U,primaryAlternate:!0,children:"Run now"}),(0,B.jsx)(C.Z,{mr:1}),(0,B.jsx)(w.ZP,{borderColor:T.Z.background.page,onClick:r,padding:U,secondary:!0,children:"Cancel"})]}),header:(0,B.jsx)(I.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*S.iI,subtitle:(0,B.jsxs)(B.Fragment,{children:[!(null!==H&&void 0!==H&&H.length)&&(0,B.jsx)(C.Z,{p:S.cd,children:(0,B.jsx)(E.ZP,{default:!0,children:"Creates a new trigger and immediately runs the current pipeline once."})}),(null===H||void 0===H?void 0:H.length)>=1&&F,(0,B.jsx)(v.Z,{light:!0})]}),children:[(!(null!==H&&void 0!==H&&H.length)||N.uuid===(null===j||void 0===j?void 0:j.uuid))&&(0,B.jsxs)(B.Fragment,{children:[(null===H||void 0===H?void 0:H.length)>=1&&(0,B.jsx)(C.Z,{p:S.cd,children:(0,B.jsx)(E.ZP,{default:!0,children:"Creates a new trigger and immediately runs the current pipeline once."})}),(0,B.jsx)(k.Z,{enableVariablesOverwrite:p,originalVariables:u,runtimeVariables:h,setEnableVariablesOverwrite:f,setRuntimeVariables:m})]}),R.uuid===(null===j||void 0===j?void 0:j.uuid)&&(0,B.jsx)(O.Z,{bookmarkValues:c,pipeline:i,setBookmarkValues:a})]})},H=r(97618),F=r(72473),G=r(38626),z=r(42631),X=r(47041),q=r(91437),W=G.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-pu8csx-0"})([""," overflow-y:auto;position:relative;width:100%;z-index:3;border-radius:","px;"," "," "," ",""],X.w5,z.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).page,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.flex&&"\n    flex: 1;\n  "}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),K=G.default.div.withConfig({displayName:"indexstyle__ColumnHeaderRowStyle",componentId:"sc-pu8csx-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;position:sticky;top:0;width:100%;z-index:2;"," "," ",""],z.n_,z.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).panel,";\n  ")}),(function(e){return!e.noBorder&&"\n    border: 1px solid ".concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),Q=G.default.div.withConfig({displayName:"indexstyle__ColumnHeaderCellStyle",componentId:"sc-pu8csx-2"})([""," ",""],(function(e){return!e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")})),J=G.default.div.withConfig({displayName:"indexstyle__RowTitleStyle",componentId:"sc-pu8csx-3"})([""," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).header,";\n    border: 1px solid ").concat((e.theme.interative||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")})),$=G.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-pu8csx-4"})([""," "," "," ",""],(0,q.eR)(),(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).page,";\n    border-top: none;\n    border-bottom: none;\n  ")}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.finalRow&&!e.noBorderRadius&&"\n    border-bottom-left-radius: ".concat(z.n_,"px;\n    border-bottom-right-radius: ").concat(z.n_,"px;\n  ")})),ee=G.default.div.withConfig({displayName:"indexstyle__TextStyle",componentId:"sc-pu8csx-5"})(["p{cursor:pointer;}"]),ne=G.default.div.withConfig({displayName:"indexstyle__RowCellStyle",componentId:"sc-pu8csx-6"})(["width:100%;z-index:0;"," "," "," "," ",""],(function(e){return!e.first&&"\n    border-left: 1px solid ".concat((e.theme.background||T.Z.background).page,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*S.iI,"px;\n  ")}),(function(e){return e.textColor&&"\n    & p {\n      color: ".concat(e.textColor,";\n    }\n  ")}),(function(e){return e.vanish&&"\n    border: none;\n    padding: 0 !important;\n    width: 0% !important;\n    height: 100% !important;\n    background-color: ".concat((e.theme.background||T.Z.background).page," !important;\n  ")})),re=r(35185);var te=function(e){var n,r=e.cellIndex,t=e.danger,i=e.flex,o=e.render,u=e.rowGroupIndex,l=e.rowIndex,c=e.selected,a=e.small,d=e.showBackground,p=e.showProgress,f=e.textColor,v=e.value,g=e.vanish,m=(0,s.useState)(!1),x=m[0],b=m[1],j=Array.isArray(v);return n=o?o(v):"function"===typeof v?v({selected:c}):j?(0,B.jsxs)(H.Z,{alignItems:"start",flexDirection:"row",justifyContent:"space-between",children:[(0,B.jsxs)(E.ZP,{small:a,textOverflow:!0,title:v[0],children:[x&&(0,B.jsx)(B.Fragment,{children:"".concat(v[0]," & ").concat(v.length-1," more")}),!x&&(0,B.jsx)(B.Fragment,{children:v.map((function(e){return(0,B.jsx)("div",{children:e},e)}))})]}),(0,B.jsxs)(h.Z,{onClick:function(){return b(!x)},children:[x&&(0,B.jsx)(F.K5,{muted:!0,size:2*S.iI}),!x&&(0,B.jsx)(F.ol,{muted:!0,size:2*S.iI})]})]}):p?(0,B.jsx)(P.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:(0,B.jsx)(re.Z,{danger:v<80,progress:v})}):(0,B.jsx)(E.ZP,{bold:t,danger:t,small:a,textOverflow:!0,title:v,children:v}),(0,B.jsx)(H.Z,{flex:i,textOverflow:!0,children:(0,B.jsx)(ne,{first:0===r,showBackground:d,small:a,textColor:f,vanish:g,children:!g&&(0,B.jsxs)(B.Fragment,{children:[n," "]})})},"cell-".concat(u,"-").concat(l,"-").concat(r,"-").concat(v))};var ie=function(e){var n=e.columnFlexNumbers,r=e.columnHeaders,t=e.height,i=e.isTextSelectionRequired,o=e.noBorder,u=e.noBorderRadius,l=e.onClickRow,c=e.onHoverRow,a=e.renderRowCellByIndex,d=e.rowGroupData,p=void 0===d?[]:d,f=e.selectedRowIndexes,v=e.small,g=e.flex,m=e.warnings,x=void 0===m?[]:m,b=(0,s.useMemo)((function(){return p.length}),[p]);return(0,B.jsxs)(W,{flex:g,height:t,noBorder:o,noBorderRadius:u,noScrollbarTrackBackground:!0,children:[(0,B.jsx)(K,{noBorder:o,noBorderRadius:u,children:(0,B.jsx)(P.ZP,{alignItems:"center",children:r.map((function(e,r){var t=e.Icon,i=e.label;return(0,B.jsx)(H.Z,{flex:n[r],children:(0,B.jsx)(Q,{first:0===r,small:v,children:(0,B.jsxs)(P.ZP,{alignItems:"center",children:[t&&(0,B.jsx)(F.Jr,{}),t&&(0,B.jsx)(C.Z,{mr:1}),(0,B.jsx)(E.ZP,{bold:!0,children:i})]})})},i)}))})}),p&&p.map((function(e,r){var t,s=e.title,d=e.rowData,p=s||r,g=[];s&&(t=(0,B.jsx)(J,{small:v,children:(0,B.jsx)(E.ZP,{bold:!0,children:s})}));var m=null===d||void 0===d?void 0:d.length;return null===d||void 0===d||d.forEach((function(e,t){var s=e.columnTextColors,d=e.columnValues,j=e.danger,y=e.uuid,O=(null===f||void 0===f?void 0:f[0])===r&&(null===f||void 0===f?void 0:f[1])===t,w=[],Z=x.find((function(e){return e.name===d[0]})),I=Z&&(0,D.HD)(d[1])?(0,D.Tz)(d[1]):d[1],k=Z&&Z.compare(I,Z.val);null===d||void 0===d||d.forEach((function(e,i,o){var u=null===a||void 0===a?void 0:a[i],l=s?s[i]:void 0;Array.isArray(e)?w.push((0,B.jsx)(te,{cellIndex:i,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,showProgress:e[0],small:v,textColor:l,value:e[1]},i)):"undefined"===typeof e?(w.pop(),i=o.length+1,w.push((0,B.jsx)(te,{cellIndex:i,danger:j,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,small:v,textColor:l,value:e,vanish:!0},i))):w.push((0,B.jsx)(te,{cellIndex:i,danger:k||j,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,small:v,textColor:l,value:e},i))}));var _=(0,B.jsx)(P.ZP,{textOverflow:!0,children:w});g.push((0,B.jsxs)($,{finalRow:b-1===r&&m-1===t,hasHover:!!c,noBorder:o,noBorderRadius:u,onMouseEnter:function(){return null===c||void 0===c?void 0:c({rowGroupIndex:r,rowIndex:t,uuid:y})},selected:O,children:[l&&(i?(0,B.jsx)(ee,{onClick:function(){return l({rowGroupIndex:r,rowIndex:t,uuid:y})},role:"cell",children:_}):(0,B.jsx)(h.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){return l({rowGroupIndex:r,rowIndex:t,uuid:y})},preventDefault:!0,children:_})),!l&&_]},"row-group-".concat(p,"-row-").concat(t)))})),(0,B.jsxs)("div",{children:[t,g]},p)}))]})},oe=G.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["display:flex;flex-direction:column;height:","px;border-bottom:1px solid ",";"],(function(e){return e.height}),T.Z.borders.medium),ue=r(79633);var le=function(e){var n=e.height,r=e.scheduleType,t=e.variables,o=e.variablesOverride,u=[];Object.entries(t).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1],l=null===o||void 0===o?void 0:o[r];u.push({uuid:r,value:(0,A.FS)(l||t)})})),(0,A.JZ)(u,r);var l=Object.keys(t).length;return(0,B.jsx)(oe,{height:n,children:t&&(0,B.jsx)(ie,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Runtime variable (".concat(l,")")},{label:"Value"}],noBorderRadius:!0,rowGroupData:[{rowData:u.map((function(e){var n=e.uuid,r=e.value;return{columnTextColors:[ue.Or,void 0],columnValues:[n,r],uuid:n}}))}],small:!0})})},ce=r(4190),ae=r(12717),se=r(85544),de=r(29624),pe=r(35686),fe=r(72191),ve=r(28795),ge=r(81066),he=r(24944),me=r(3917),xe=r(69419),be=r(16488),je=r(86735),ye=r(42122),Oe=r(50178),we=r(72619),Ze=r(70320),Pe=r(89538);function Ie(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function ke(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Ie(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ie(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function _e(e){var n=e.pipeline,r=(0,p.useRouter)(),t=(0,Oe.Ct)(),u=n.uuid,l=pe.ZP.pipelines.detail(u,{includes_outputs:!1},{revalidateOnFocus:!1}).data,c=(0,s.useMemo)((function(){return(null===l||void 0===l?void 0:l.pipeline)||n}),[null===l||void 0===l?void 0:l.pipeline,n]),j=(0,s.useState)(null),O=j[0],w=j[1],Z=(0,s.useState)(null),P=Z[0],I=Z[1],k=(0,s.useState)(!1),_=k[0],T=k[1],N=pe.ZP.projects.list().data,R=(0,s.useMemo)((function(){var e;return null===N||void 0===N||null===(e=N.projects)||void 0===e?void 0:e[0]}),[N]),M=((0,s.useMemo)((function(){var e;return(0,Ze.hY)(null===R||void 0===R||null===(e=R.features)||void 0===e?void 0:e[y.d.LOCAL_TIMEZONE])}),[null===R||void 0===R?void 0:R.features]),pe.ZP.client_pages.detail("pipeline_schedule:create",{"pipelines[]":[u]},{},{key:"Triggers/Edit/".concat(u)}).data),V=(0,s.useMemo)((function(){return null===M||void 0===M?void 0:M.client_page}),[M]),L=(0,s.useMemo)((function(){var e,n;return null===V||void 0===V||null===(e=V.components)||void 0===e||null===(n=e.find((function(e){return"create_with_interactions_component"===e.uuid})))||void 0===n?void 0:n.enabled}),[V]),U=(0,s.useMemo)((function(){return null===V||void 0===V?void 0:V.disabled}),[V]),H=pe.ZP.variables.pipelines.list(u,{global_only:!0},{revalidateOnFocus:!1}).data,G=null===H||void 0===H?void 0:H.variables,z=(0,xe.iV)(),X=(0,xe.DQ)(z,[b.gm.INTERVAL,b.gm.STATUS,b.gm.TAG,b.gm.TYPE]),q=(0,be.xH)(X),W=null!==z&&void 0!==z&&z.page?z.page:0,K=pe.ZP.pipeline_schedules.pipelines.list(u,ke(ke({},q),{},{_limit:m.Q,_offset:(null!==z&&void 0!==z&&z.page?z.page:0)*m.Q}),{refreshInterval:7500}),Q=K.data,J=K.mutate,$=(0,s.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.pipeline_schedules)||[]}),[Q]),ee=function(e){return(0,d.Db)(pe.ZP.pipeline_schedules.pipelines.useCreate(u),{onSuccess:function(n){return(0,we.wD)(n,{callback:function(n){var r=n.pipeline_schedule.id;null===e||void 0===e||e(r)},onErrorCallback:function(e,n){return w({errors:n,response:e})}})}})},ne=ee((function(e){return r.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===c||void 0===c?void 0:c.uuid,"/triggers/").concat(e,"/edit"))})),re=(0,i.Z)(ne,2),te=re[0],ie=re[1].isLoading,oe=ee(J),ue=(0,i.Z)(oe,2),Ie=ue[0],_e=ue[1].isLoading,Ce=(0,s.useMemo)((function(){return(0,A.Tt)(G)}),[G]),Ee=(0,D.Y6)(),Te=(0,s.useMemo)((function(){return{name:Ee,schedule_interval:b.U5.ONCE,schedule_type:b.Xm.TIME,start_time:(0,me.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:b.fq.ACTIVE}}),[Ee]),Se=(0,Pe.dd)((function(){return(0,B.jsx)(Y,{initialPipelineSchedulePayload:Te,onCancel:Me,onSuccess:Ie,pipeline:c,variables:Ce})}),{},[G,c,Ce],{background:!0,uuid:"run_pipeline_now_popup"}),Ne=(0,i.Z)(Se,2),Re=Ne[0],Me=Ne[1],Ae=(0,s.useState)(),De=Ae[0],Be=Ae[1],Ve=(0,s.useMemo)((function(){var e=null===De||void 0===De?void 0:De.variables,n=!(0,ye.Qr)(Ce);return function(r){var i=80;if(n){var o=Object.keys(Ce).length;i=46+43*Math.min(5,o)+1}var l=r.height-i;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(f.ZP,ke(ke({},r),{},{enablePorts:!1,height:l,noStatus:!0})),n&&(0,B.jsx)(le,{height:i,scheduleType:null===De||void 0===De?void 0:De.schedule_type,variables:Ce,variablesOverride:e}),!n&&(0,B.jsxs)(C.Z,{p:S.cd,children:[(0,B.jsx)(E.ZP,{children:"This pipeline has no runtime variables."}),!t&&(0,B.jsxs)(C.Z,{mt:1,children:[(0,B.jsx)(a(),{as:"/pipelines/".concat(u,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,B.jsx)(h.Z,{primary:!0,children:"Click here"})})," ",(0,B.jsx)(E.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]})]})}}),[t,u,null===De||void 0===De?void 0:De.schedule_type,null===De||void 0===De?void 0:De.variables,Ce]),Le=(0,s.useMemo)((function(){var e;return(null===Q||void 0===Q||null===(e=Q.metadata)||void 0===e?void 0:e.count)||[]}),[Q]),Ue=pe.ZP.pipeline_triggers.pipelines.list(u).data,Ye=(0,s.useMemo)((function(){return(0,je.HK)((null===Ue||void 0===Ue?void 0:Ue.pipeline_triggers)||[],(function(e){return e.name}))}),[Ue]);(0,s.useEffect)((function(){var e=((null===Ue||void 0===Ue?void 0:Ue.pipeline_triggers)||[]).find((function(e){var n=e.settings;return null===n||void 0===n?void 0:n.invalid_schedule_interval}));I(e?{displayMessage:'Schedule interval for Trigger (in code) "'.concat(null===e||void 0===e?void 0:e.name,'"')+" is invalid. Please check your cron expression\u2019s syntax in the pipeline\u2019s triggers.yaml file."}:null)}),[null===Ue||void 0===Ue?void 0:Ue.pipeline_triggers]);var He=pe.ZP.tags.list().data,Fe=(0,s.useMemo)((function(){return(0,je.YC)((null===He||void 0===He?void 0:He.tags)||[],(function(e){return e.uuid}))}),[He]),Ge=pe.ZP.pipeline_interactions.detail(L&&u,{filter_for_permissions:1}).data,ze=pe.ZP.interactions.pipeline_interactions.list(L&&u).data,Xe=pe.ZP.pipelines.detail(L&&u).data,qe=(0,s.useMemo)((function(){return(null===Ge||void 0===Ge?void 0:Ge.pipeline_interaction)||{}}),[Ge]),We=((0,s.useMemo)((function(){return(null===ze||void 0===ze?void 0:ze.interactions)||[]}),[ze]),(0,s.useMemo)((function(){var e;return L&&(null===(e=Object.keys((null===qe||void 0===qe?void 0:qe.blocks)||{}))||void 0===e?void 0:e.length)>=1}),[L,qe])),Ke=(0,s.useMemo)((function(){return We&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(C.Z,{ml:"12px"}),(0,B.jsx)(he.lZ,{}),(0,B.jsx)(C.Z,{ml:"12px"}),(0,B.jsx)(g.ZP,ke(ke({},ge.B),{},{Icon:F.yd,inline:!0,onClick:function(){return T(!0)},uuid:"Create trigger with no-code",children:"Create trigger with no-code"}))]})}),[We,T]),Qe=(0,s.useMemo)((function(){return(0,B.jsx)(se.Z,{addButtonProps:!U&&{isLoading:ie,label:"New trigger",onClick:function(){return te({pipeline_schedule:{name:(0,D.Y6)()}})}},filterOptions:{frequency:Object.values(b.U5),status:Object.values(b.fq),tag:Fe.map((function(e){return e.uuid})),type:Object.values(b.Xm)},filterValueLabelMapping:{status:Object.values(b.fq).reduce((function(e,n){return ke(ke({},e),{},(0,o.Z)({},n,(0,D.kC)(n)))}),{}),tag:Fe.reduce((function(e,n){var r=n.uuid;return ke(ke({},e),{},(0,o.Z)({},r,r))}),{}),type:b.Z4},onClickFilterDefaults:function(){r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers"))},query:X,resetPageOnFilterApply:!0,secondaryButtonProps:!U&&{beforeIcon:(0,B.jsx)(F.xF,{size:fe.bL}),disabled:t,isLoading:_e,label:"Run@once",onClick:Re,tooltip:"Creates an @once trigger and runs pipeline immediately"},showDivider:!U,children:Ke})}),[te,U,ie,_e,t,Ke,u,X,r,Re,Fe]),Je=(0,s.useMemo)((function(){var e=[];return _?e.push.apply(e,[{label:function(){return"Triggers"},onClick:function(){return T(!1)}},{bold:!0,label:function(){return"New trigger"}}]):e.push({label:function(){return"Triggers"}}),e}),[_,T]);return _?(0,B.jsx)(ae.Z,{creatingWithLimitation:!0,errors:O,onCancel:function(){return T(!1)},pipeline:null===Xe||void 0===Xe?void 0:Xe.pipeline,setErrors:w,useCreateScheduleMutation:ee}):(0,B.jsx)(x.Z,{breadcrumbs:Je,buildSidekick:!_&&Ve,errors:O||P,pageName:ve.M.TRIGGERS,pipeline:c,setErrors:w,subheader:!_&&Qe,title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(ve.M.TRIGGERS,"_").concat(u),children:!_&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v.Z,{light:!0}),Q?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(de.Z,{fetchPipelineSchedules:J,pipeline:c,pipelineSchedules:$,pipelineTriggersByName:Ye,selectedSchedule:De,setErrors:w,setSelectedSchedule:Be}),(0,B.jsx)(C.Z,{p:2,children:(0,B.jsx)(m.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),t=ke(ke({},z),{},{page:n>=0?n:0});r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers?").concat((0,xe.uM)(t)))},page:Number(W),totalPages:Math.ceil(Le/m.Q)})})]}):(0,B.jsx)(C.Z,{m:2,children:(0,B.jsx)(ce.Z,{inverted:!0,large:!0})})]})})}_e.getInitialProps=function(){var e=(0,t.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Ce=(0,j.Z)(_e)},40183:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return r(38415)}])}},function(e){e.O(0,[2678,1154,844,5820,1124,341,9161,4495,9302,4267,9266,9626,8264,7858,5499,5283,5457,3745,1769,9624,2474,6798,2717,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);