(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8170],{27277:function(e,n,t){"use strict";var i=t(82394),r=t(21831),o=t(82684),c=t(39643),u=t(44688),l=t(28598);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.highlightedItemIndexInitial,t=void 0===n?null:n,i=e.itemGroups,a=e.noResultGroups,s=e.onHighlightItemIndexChange,f=e.onMouseEnterItem,p=e.onMouseLeaveItem,h=e.onSelectItem,g=e.renderEmptyState,v=e.searchQuery,m=e.selectedItem,b=e.setItemRefs,y=e.uuid,x=(0,o.useState)(!0),j=x[0],_=x[1],O=(0,o.useMemo)((function(){var e=[],n=i.reduce((function(n,t){var i=t.items.filter((function(e){return!v||function(e,n){return e.searchQueries.filter((function(e){return String(e).toLowerCase().includes(n.toLowerCase())})).length>=1}(e,v)}));return 0===i.length?n:(e.push.apply(e,(0,r.Z)(i)),n.concat(d(d({},t),{},{items:i})))}),[]);return{itemGroups:n,itemsFlattened:e}}),[i,v]),Z=O.itemGroups,w=O.itemsFlattened;a&&0===w.length&&(Z.push.apply(Z,(0,r.Z)(a)),w.push.apply(w,(0,r.Z)(a.reduce((function(e,n){var t=n.items;return e.concat(t)}),[]))));var P=(0,o.useRef)(null);P.current=w.map((function(){return(0,o.createRef)()}));var k=(0,o.useState)(t),C=k[0],I=k[1],S=(0,o.useCallback)((function(e){null===s||void 0===s||s(e),I(e)}),[s,I]),N=w[C],E=(0,u.y)(),H=E.registerOnKeyDown,D=E.unregisterOnKeyDown;(0,o.useEffect)((function(){return function(){return D(y)}}),[D,y]),null===H||void 0===H||H(y,(function(e,n,t){var i,r=!0,o=w.length,u=w.findIndex((function(e,i){var r=e.keyboardShortcutValidation;return null===r||void 0===r?void 0:r({keyHistory:t,keyMapping:n},i)})),l=n[c.Gs]&&!n[c.XR]&&!m;return-1!==u?(e.preventDefault(),h(w[u]),_(r),S(u)):(n[c.Uq]||l)&&w[C]?(l&&e.preventDefault(),h(w[C]),_(r),S(C)):(n[c.Bu]?(r=!1,i=null===C?o-1:C-1):n[c.kD]?(r=!1,i=null===C?0:C+1):n[c.vP]&&S(null),"undefined"!==typeof i&&(i>=o?i=0:i<=-1&&(i=o-1),i>=0&&i<=o-1?(S(i),e.preventDefault()):S(null)),void _(r))}),[C,w,m,S,_]),(0,o.useEffect)((function(){null===b||void 0===b||b(P)}),[P,w,b]),(0,o.useEffect)((function(){var e=null===C||"undefined"===typeof C||C>=w.length;(null===v||void 0===v?void 0:v.length)>=1&&e&&S(0)}),[C,w,v,S]);var M=(0,o.useCallback)((function(){return _(!0)}),[_]);return(0,o.useEffect)((function(){return window.addEventListener("mousemove",M),function(){window.removeEventListener("mousemove",M)}}),[M]),0===Z.length&&g?g():(0,l.jsx)(l.Fragment,{children:Z.map((function(e,n){var t=e.items,i=e.renderItem,r=e.renderGroupHeader,o=e.uuid,c=n>=1?Z.slice(0,n).reduce((function(e,n){return e+n.items.length}),0):0,u=t.map((function(e,n){var t=e.itemObject,r=e.value,o=r===(null===N||void 0===N?void 0:N.value),u=n+c,a=(null===t||void 0===t?void 0:t.id)||(null===t||void 0===t?void 0:t.uuid);return(0,l.jsx)("div",{id:"item-".concat(r,"-").concat(a),onMouseMove:function(){return j&&S(u)},ref:P.current[u],children:i(e,{highlighted:o,onClick:function(){return h(e)},onMouseEnter:function(){return null===f||void 0===f?void 0:f(e)},onMouseLeave:function(){return null===p||void 0===p?void 0:p(e)}},n,u)},"item-".concat(r,"-").concat(a))}));return u.length>=1&&(0,l.jsxs)("div",{children:[null===r||void 0===r?void 0:r(),u]},o||"group-uuid-".concat(n))}))})}},81334:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var i=t(82394),r=t(82684),o=t(27277),c=t(31882),u=t(38276),l=t(48381),a=t(30160),d=t(17488),s=t(38626),f=t(44897),p=t(42631),h=t(47041),g=t(70515),v=s.default.div.withConfig({displayName:"indexstyle__DropdownStyle",componentId:"sc-suwkha-0"})([""," border-radius:","px;max-height:","px;overflow:auto;position:absolute;width:100%;z-index:1;"," ",""],h.w5,p.BG,40*g.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||f.Z.background).popup,";\n    box-shadow: ").concat((e.theme.shadow||f.Z.shadow).popup,";\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset-.5*g.iI,"px;\n  ")})),m=s.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-suwkha-1"})(["padding:","px;position:relative;z-index:2;&:hover{cursor:pointer;}",""],.5*g.iI,(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme.interactive||f.Z.interactive).hoverBackground,";\n  ")})),b=t(39643),y=t(3314),x=t(86735),j=t(44688),_=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n,t=e.removeTag,i=e.selectTag,s=e.selectedTags,f=void 0===s?[]:s,p=e.tags,h=void 0===p?[]:p,g=e.uuid,O=(0,r.useRef)(null),w=(0,r.useState)(!1),P=w[0],k=w[1],C=(0,r.useState)(null),I=C[0],S=C[1],N=(0,r.useMemo)((function(){return(0,x.YC)(h||[],"uuid")}),[h]),E=(0,r.useMemo)((function(){return null===N||void 0===N?void 0:N.map((function(e){return{itemObject:e,searchQueries:[e.uuid],value:e.uuid}}))}),[N]),H=(0,r.useMemo)((function(){return(null===I||void 0===I?void 0:I.length)>=1?E.concat({itemObject:{uuid:I},searchQueries:[I],value:"Add tag: ".concat(I)}):E}),[E,I]),D=(0,j.y)(),M=D.registerOnKeyDown,R=D.unregisterOnKeyDown;return(0,r.useEffect)((function(){return function(){return R(g)}}),[R,g]),null===M||void 0===M||M(g,(function(e,n){var t;P&&n[b.vP]&&(k(!1),null===O||void 0===O||null===(t=O.current)||void 0===t||t.blur())}),[P,O]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Z,{onClickTag:t,tags:f}),(0,_.jsxs)(u.Z,{mt:1,style:{position:"relative"},children:[(0,_.jsx)(d.Z,{onBlur:function(){return setTimeout((function(){return k(!1)}),150)},onChange:function(e){return S(e.target.value)},onFocus:function(){return k(!0)},ref:O,value:I||""}),(0,_.jsx)(v,{topOffset:null===O||void 0===O||null===(n=O.current)||void 0===n?void 0:n.getBoundingClientRect().height,children:(0,_.jsx)(o.Z,{itemGroups:[{items:P?H:[],renderItem:function(e,n){var t=e.value;return(0,_.jsx)(m,Z(Z({},n),{},{onClick:function(e){var t;(0,y.j)(e),null===n||void 0===n||null===(t=n.onClick)||void 0===t||t.call(n,e)},children:(0,_.jsx)(c.Z,{small:!0,children:(0,_.jsx)(a.ZP,{children:t})})}))}}],onSelectItem:function(e){var n=e.itemObject;null===i||void 0===i||i(n),S(null)},searchQuery:I,uuid:g})})]})]})}},48381:function(e,n,t){"use strict";var i=t(82684),r=t(31882),o=t(55485),c=t(30160),u=t(86735),l=t(28598);n.Z=function(e){var n=e.onClickTag,t=e.tags,a=void 0===t?[]:t,d=(0,i.useMemo)((function(){return(null===a||void 0===a?void 0:a.length)||0}),[a]),s=(0,i.useMemo)((function(){return(0,u.YC)(a||[],"uuid")}),[a]);return(0,l.jsx)(o.ZP,{alignItems:"center",flexWrap:"wrap",children:null===s||void 0===s?void 0:s.reduce((function(e,t){return e.push((0,l.jsx)("div",{style:{marginBottom:2,marginRight:d>=2?4:0,marginTop:2},children:(0,l.jsx)(r.Z,{onClick:n?function(){return n(t)}:null,small:!0,children:(0,l.jsx)(c.ZP,{children:t.uuid})})},"tag-".concat(t.uuid))),e}),[])})}},57114:function(e,n,t){"use strict";t.d(n,{S:function(){return j},Z:function(){return _}});var i=t(82684),r=t(15338),o=t(97618),c=t(55485),u=t(85854),l=t(65956),a=t(82394),d=t(44085),s=t(38276),f=t(30160),p=t(17488),h=t(69650),g=t(72473),v=t(8193),m=t(70515),b=t(28598);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n,t=e.children,i=e.description,r=e.invalid,u=e.selectInput,l=e.textInput,a=e.title,y=e.toggleSwitch;return(0,b.jsx)(s.Z,{p:m.cd,children:(0,b.jsxs)(c.ZP,{alignItems:"center",children:[(0,b.jsxs)(c.ZP,{flexDirection:"column",children:[(0,b.jsxs)(f.ZP,{danger:r,default:!0,large:!0,children:[a," ",r&&(0,b.jsx)(f.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),i&&"string"===typeof i&&(0,b.jsx)(f.ZP,{muted:!0,small:!0,children:i}),i&&"string"!==typeof i&&i]}),(0,b.jsx)(s.Z,{mr:m.cd}),(0,b.jsxs)(o.Z,{flex:1,justifyContent:"flex-end",children:[t,l&&(0,b.jsx)(p.Z,x({afterIcon:(0,b.jsx)(g.I8,{}),afterIconClick:function(e,n){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.focus()},afterIconSize:v.Z,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0},l)),u&&(0,b.jsx)(d.Z,x(x({},u),{},{afterIcon:(0,b.jsx)(g._M,{}),afterIconSize:v.Z,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0,children:null===u||void 0===u||null===(n=u.options)||void 0===n?void 0:n.map((function(e){var n=e.label,t=e.value;return(0,b.jsx)("option",{value:t,children:n||t},t)}))})),y&&(0,b.jsx)(h.Z,{checked:!(null===y||void 0===y||!y.checked),compact:!0,onCheck:null===y||void 0===y?void 0:y.onCheck})]})]})})},_=function(e){var n=e.children,t=e.description,a=e.headerChildren,d=e.title;return(0,b.jsxs)(l.Z,{noPadding:!0,children:[(0,b.jsx)(s.Z,{p:m.cd,children:(0,b.jsxs)(c.ZP,{alignItems:"center",children:[(0,b.jsxs)(o.Z,{flex:1,flexDirection:"column",children:[(0,b.jsx)(u.Z,{level:4,children:d}),t&&"string"===typeof t&&(0,b.jsx)(s.Z,{mt:1,children:(0,b.jsx)(f.ZP,{muted:!0,children:t})}),t&&"string"!==typeof t&&t]}),a]})}),i.Children.map(n,(function(e,n){return(0,b.jsxs)("div",{children:[(0,b.jsx)(r.Z,{light:!0}),e]},"".concat(d,"-").concat(n))}))]})}},8193:function(e,n,t){"use strict";t.d(n,{N:function(){return l},Z:function(){return u}});var i=t(38626),r=t(44897),o=t(42631),c=t(70515),u=2*c.iI,l=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||r.Z.background).codeArea,";\n  ")}))},68781:function(e,n,t){"use strict";var i;t.d(n,{R:function(){return r}}),function(e){e.AZURE_CONTAINER_INSTANCE="azure_container_instance",e.ECS="ecs",e.GCP_CLOUD_RUN="gcp_cloud_run",e.K8S="k8s",e.LOCAL_PYTHON="local_python",e.PYSPARK="pyspark"}(i||(i={}));var r=[i.AZURE_CONTAINER_INSTANCE,i.ECS,i.GCP_CLOUD_RUN,i.K8S,i.LOCAL_PYTHON,i.PYSPARK]},31882:function(e,n,t){"use strict";var i=t(38626),r=t(71180),o=t(55485),c=t(30160),u=t(44897),l=t(72473),a=t(70515),d=t(61896),s=t(28598),f=i.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||u.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||u.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((a.iI+d.Al)/2,"px;\n    height: ").concat(1.5*a.iI+d.Al,"px;\n    padding: ").concat(a.iI/1.5,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((a.iI/2+d.Al)/2,"px;\n    height: ").concat(d.Al+a.iI/2+2,"px;\n    padding: ").concat(a.iI/4,"px ").concat(a.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((a.iI/1+d.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||u.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,t=e.children,i=e.disabled,u=e.label,d=e.monospace,p=e.onClick,h=e.primary,g=e.small,v=e.xsmall;return(0,s.jsx)(f,{border:n,primary:h,small:g,xsmall:v,children:(0,s.jsx)(r.ZP,{basic:!0,disabled:i,noBackground:!0,noPadding:!0,onClick:p,transparent:!0,children:(0,s.jsxs)(o.ZP,{alignItems:"center",children:[t,u&&(0,s.jsx)(c.ZP,{monospace:d,small:g,xsmall:v,children:u}),!i&&p&&(0,s.jsx)("div",{style:{marginLeft:2}}),!i&&p&&(0,s.jsx)(l.x8,{default:h,muted:!h,size:g?a.iI:1.25*a.iI})]})})})}},65956:function(e,n,t){"use strict";var i=t(38626),r=t(55485),o=t(38276),c=t(30160),u=t(44897),l=t(42631),a=t(47041),d=t(70515),s=t(28598),f=(0,i.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*d.iI,1.5*d.iI,1.5*d.iI),p=i.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=i.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=i.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*d.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*d.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),v=i.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*d.iI);n.Z=function(e){var n=e.borderless,t=e.children,i=e.containerRef,u=e.contentContainerRef,l=e.dark,a=e.footer,d=e.fullHeight,f=void 0===d||d,m=e.fullWidth,b=void 0===m||m,y=e.header,x=e.headerHeight,j=e.headerIcon,_=e.headerPaddingVertical,O=e.headerTitle,Z=e.maxHeight,w=e.maxWidth,P=e.minWidth,k=e.noPadding,C=e.overflowVisible,I=e.subtitle,S=e.success;return(0,s.jsxs)(p,{borderless:n,dark:l,fullHeight:f,fullWidth:b,maxHeight:Z,maxWidth:w,minWidth:P,overflowVisible:C,ref:i,success:S,children:[(y||O)&&(0,s.jsxs)(h,{headerPaddingVertical:_,height:x,children:[y&&y,O&&(0,s.jsx)(r.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,s.jsxs)(r.ZP,{alignItems:"center",children:[j&&j,(0,s.jsx)(o.Z,{ml:j?1:0,children:(0,s.jsx)(c.ZP,{bold:!0,default:!0,children:O})})]})})]}),(0,s.jsxs)(g,{maxHeight:Z,noPadding:k,overflowVisible:C,ref:u,children:[I&&(0,s.jsx)(o.Z,{mb:2,children:(0,s.jsx)(c.ZP,{default:!0,children:I})}),t]}),a&&(0,s.jsx)(v,{children:a})]})}},85854:function(e,n,t){"use strict";var i,r,o,c,u,l,a,d,s=t(82394),f=t(26304),p=t(26653),h=t(38626),g=t(33591),v=t(44897),m=t(95363),b=t(61896),y=t(30160),x=t(70515),j=t(38276),_=t(28598),O=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||v.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(m.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(m.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(m.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||v.Z.content).active,";\n  ")})),C=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,g.media.md(i||(i=(0,p.Z)(["\n    ","\n  "])),b.aQ),g.media.lg(r||(r=(0,p.Z)(["\n    ","\n  "])),b.aQ),g.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),b.aQ)),I=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,b.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,g.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.lg(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),g.media.xl(d||(d=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI)),N=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,b.BL),E=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),H=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),D=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),M=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(b.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(b.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),R=function(e){var n,t=e.children,i=e.condensed,r=e.inline,o=e.level,c=e.marketing,u=e.spacingBelow,l=(0,f.Z)(e,O);r?n=M:0===Number(o)?n=C:1===Number(o)?n=c?S:I:2===Number(o)?n=N:3===Number(o)?n=E:4===Number(o)?n=H:5===Number(o)&&(n=D);var a=(0,_.jsxs)(n,w(w({},l),{},{level:o,children:[u&&(0,_.jsx)(j.Z,{mb:i?2:3,children:t}),!u&&t]}));return r?a:(0,_.jsx)(k,{children:a})};R.defaultProps={level:3,weightStyle:6},n.Z=R},37003:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var i=t(77837),r=t(75582),o=t(82394),c=t(38860),u=t.n(c),l=t(82684),a=t(34376),d=t(75457),s=t(93808),f=t(71180),p=t(70652),h=t(55485),g=t(85854),v=t(48670),m=t(44085),b=t(57114),y=t(38276),x=t(81334),j=t(30160),_=t(17488),O=t(35686),Z=t(98464),w=t(77417),P=t(68781),k=t(78419),C=t(70515),I=t(53808),S=t(42122),N=t(81728),E=t(86735),H=t(28598);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(e){var n,t,i,r,c,u,a,d=e.isPipelineUpdating,s=e.pipeline,D=e.updatePipeline,R=(0,w.Z)().project,z=(0,l.useRef)(null),T=(0,l.useRef)(null),A=null===s||void 0===s?void 0:s.uuid,L=(0,l.useMemo)((function(){return(null===s||void 0===s?void 0:s.blocks)||[]}),[s]),B=(0,l.useState)(!1),W=B[0],F=B[1],V=(0,l.useState)(!1),G=V[0],U=V[1],K=(0,l.useState)(null),Q=K[0],Y=K[1],X=(0,Z.Z)(s);(0,l.useEffect)((function(){(0,S.Xy)(s,X)||Y(s)}),[s,X]);var q=(0,l.useCallback)((function(e){F(!0),Y(e)}),[]),J="".concat(k.g6,"_").concat(A),$=(0,l.useState)({}),ee=$[0],ne=$[1],te="".concat(k.vF,"_").concat(A),ie=(0,l.useState)(!1),re=ie[0],oe=ie[1],ce=(0,l.useCallback)((function(e){ne((function(n){var t=e(n);return(0,I.t8)(J,JSON.stringify(t)),t}))}),[J,ne]),ue=(0,l.useCallback)((function(e){oe((function(n){var t=e(n);return(0,I.t8)(te,t),t}))}),[te,oe]);(0,l.useEffect)((function(){var e=(0,I.U2)(J);e&&(0,N.Pb)(e)&&ne(JSON.parse(e))}),[J,ne]),(0,l.useEffect)((function(){var e=(0,I.U2)(te);e&&oe(e)}),[te,oe]);var le=(0,l.useMemo)((function(){return null===Q||void 0===Q?void 0:Q.executor_type}),[Q]);(0,l.useEffect)((function(){G||!le||P.R.find((function(e){return e===le}))||U(!0)}),[G,le]);var ae=(0,l.useMemo)((function(){return(null===L||void 0===L?void 0:L.filter((function(e){var n=e.uuid;return!(null===ee||void 0===ee||!ee[n])}))).length===L.length}),[L,ee]),de=(0,l.useMemo)((function(){return!(null!==L&&void 0!==L&&L.length)}),[L]),se=(0,l.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.tags)||[]}),[Q]),fe=O.ZP.tags.list().data,pe=(0,l.useMemo)((function(){return((null===fe||void 0===fe?void 0:fe.tags)||[]).filter((function(e){var n=e.uuid;return!se.includes(n)}))}),[fe,se]),he=(0,l.useMemo)((function(){var e;return null===R||void 0===R||null===(e=R.pipelines)||void 0===e?void 0:e.settings}),[R]),ge=(0,l.useMemo)((function(){var e,n,t;return(null===he||void 0===he||null===(e=he.triggers)||void 0===e?void 0:e.save_in_code_automatically)&&"undefined"===typeof(null===Q||void 0===Q||null===(n=Q.settings)||void 0===n||null===(t=n.triggers)||void 0===t?void 0:t.save_in_code_automatically)}),[Q,he]);return(0,H.jsxs)(y.Z,{p:C.cd,children:[(0,H.jsxs)(b.Z,{title:"Details",children:[(0,H.jsx)(b.S,{invalid:W&&!(null!==Q&&void 0!==Q&&Q.name),textInput:{onChange:function(e){return q((function(n){return M(M({},n),{},{name:e.target.value})}))},value:null===Q||void 0===Q?void 0:Q.name},title:"Pipeline name"}),(0,H.jsx)(b.S,{description:"When enabled, this setting allows sharing of objects and memory space across blocks within a single pipeline.",title:"Run pipeline in a single process",toggleSwitch:{checked:!(null===Q||void 0===Q||!Q.run_pipeline_in_one_process),onCheck:function(e){return q((function(n){return M(M({},n),{},{run_pipeline_in_one_process:e(null===n||void 0===n?void 0:n.run_pipeline_in_one_process)})}))}}}),(0,H.jsx)(b.S,{description:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(j.ZP,{muted:!0,small:!0,children:"Every time a trigger is created or updated in this pipeline, it\u2019ll be automatically be persisted it in code."}),(null===he||void 0===he||null===(n=he.triggers)||void 0===n?void 0:n.save_in_code_automatically)&&(0,H.jsx)(j.ZP,{small:!0,warning:!0,children:"This settings is enabled at the project level. Changing the value here will only affect this pipeline."})]}),title:"Save triggers in code automatically",toggleSwitch:{checked:ge||!(null===Q||void 0===Q||null===(t=Q.settings)||void 0===t||null===(i=t.triggers)||void 0===i||!i.save_in_code_automatically),onCheck:function(e){return q((function(n){var t,i,r;return M(M({},n),{},{settings:M(M({},null===n||void 0===n?void 0:n.settings),{},{triggers:M(M({},null===n||void 0===n||null===(t=n.settings)||void 0===t?void 0:t.triggers),{},{save_in_code_automatically:e(ge||(null===n||void 0===n||null===(i=n.settings)||void 0===i||null===(r=i.triggers)||void 0===r?void 0:r.save_in_code_automatically))})})})}))}}})]}),(0,H.jsxs)(y.Z,{mt:C.HN,children:[(0,H.jsx)(g.Z,{children:"Executor type"}),(0,H.jsxs)(j.ZP,{muted:!0,children:["For more information on this setting, please read the ",(0,H.jsx)(v.Z,{href:"https://docs.mage.ai/production/configuring-production-settings/compute-resource#2-set-executor-type-and-customize-the-compute-resource-of-the-mage-executor",openNewWindow:!0,children:"documentation"}),"."]}),(0,H.jsxs)(y.Z,{mt:1,children:[!G&&(0,H.jsx)(m.Z,{label:"Executor type",onChange:function(e){return q((function(n){return M(M({},n),{},{executor_type:e.target.value})}))},primary:!0,ref:z,value:(null===Q||void 0===Q?void 0:Q.executor_type)||"",children:P.R.map((function(e){return(0,H.jsx)("option",{value:e,children:e},e)}))}),G&&(0,H.jsx)(_.Z,{label:"Executor type",monospace:!0,onChange:function(e){return q((function(n){return M(M({},n),{},{executor_type:e.target.value})}))},ref:T,setContentOnMount:!0,value:(null===Q||void 0===Q?void 0:Q.executor_type)||""}),(0,H.jsx)(y.Z,{mt:1,children:(0,H.jsx)(v.Z,{muted:!0,onClick:function(){G?(q((function(e){return M(M({},e),{},{executor_type:null===s||void 0===s?void 0:s.executor_type})})),setTimeout((function(){var e;return null===z||void 0===z||null===(e=z.current)||void 0===e?void 0:e.focus()}),1)):setTimeout((function(){var e;return null===T||void 0===T||null===(e=T.current)||void 0===e?void 0:e.focus()}),1),U(!G)},preventDefault:!0,small:!0,children:G?"Select a preset executor type":"Enter a custom executor type"})})]})]}),(0,H.jsxs)(y.Z,{mt:C.HN,children:[(0,H.jsx)(g.Z,{children:"Retry configuration"}),(0,H.jsxs)(j.ZP,{muted:!0,children:["For more information on this setting, please read the ",(0,H.jsx)(v.Z,{href:"https://docs.mage.ai/orchestration/pipeline-runs/retrying-block-runs",openNewWindow:!0,children:"documentation"}),"."]}),(0,H.jsx)(y.Z,{mt:1,children:(0,H.jsxs)(h.ZP,{children:[(0,H.jsx)(_.Z,{label:"Retries",monospace:!0,onChange:function(e){return q((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{retries:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(r=Q.retry_config)||void 0===r?void 0:r.retries)||""}),(0,H.jsx)(y.Z,{mr:1}),(0,H.jsx)(_.Z,{label:"Delay",monospace:!0,onChange:function(e){return q((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{delay:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(c=Q.retry_config)||void 0===c?void 0:c.delay)||""}),(0,H.jsx)(y.Z,{mr:1}),(0,H.jsx)(_.Z,{label:"Max delay",monospace:!0,onChange:function(e){return q((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{max_delay:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(u=Q.retry_config)||void 0===u?void 0:u.max_delay)||""}),(0,H.jsx)(y.Z,{mr:1}),(0,H.jsx)(p.Z,{checked:!(null===Q||void 0===Q||null===(a=Q.retry_config)||void 0===a||!a.exponential_backoff),label:"Exponential backoff",onClick:function(){return q((function(e){var n;return M(M({},e),{},{retry_config:M(M({},null===e||void 0===e?void 0:e.retry_config),{},{exponential_backoff:!(null!==e&&void 0!==e&&null!==(n=e.retry_config)&&void 0!==n&&n.exponential_backoff)})})}))}})]})})]}),(0,H.jsxs)(y.Z,{mt:C.HN,children:[(0,H.jsx)(g.Z,{children:"Tags"}),(0,H.jsx)(y.Z,{mt:1,children:(0,H.jsx)(x.Z,{removeTag:function(e){q((function(n){return M(M({},n),{},{tags:se.filter((function(n){return n!==e.uuid}))})}))},selectTag:function(e){q((function(n){return M(M({},n),{},{tags:(0,E.$C)(e.uuid,se,(function(n){return n===e.uuid}))})}))},selectedTags:null===se||void 0===se?void 0:se.map((function(e){return{uuid:e}})),tags:pe,uuid:"TagsAutocompleteInputField-".concat(null===s||void 0===s?void 0:s.uuid)})})]}),(0,H.jsx)(y.Z,{mt:C.HN,children:(0,H.jsx)(h.ZP,{children:(0,H.jsx)(f.ZP,{disabled:!W,loading:d,onClick:function(){return D({executor_type:null===Q||void 0===Q?void 0:Q.executor_type,name:null===Q||void 0===Q?void 0:Q.name,retry_config:null===Q||void 0===Q?void 0:Q.retry_config,run_pipeline_in_one_process:null===Q||void 0===Q?void 0:Q.run_pipeline_in_one_process,settings:null===Q||void 0===Q?void 0:Q.settings,tags:null===Q||void 0===Q?void 0:Q.tags}).then((function(){return F(!1)}))},primary:!0,children:"Save pipeline settings"})})}),(0,H.jsx)(y.Z,{mt:C.HN,children:(0,H.jsx)(p.Z,{checked:ae&&!de,disabled:de,label:"Hide all blocks in notebook",onClick:function(){return ce((function(){return ae?{}:null===L||void 0===L?void 0:L.reduce((function(e,n){var t=n.uuid;return M(M({},e),{},(0,o.Z)({},t,!0))}),{})}))}})}),(0,H.jsx)(y.Z,{mt:C.Mq,children:(0,H.jsx)(p.Z,{checked:re,label:"When running a block while editing a pipeline, output the block messages to the logs",onClick:function(){return ue((function(e){return!e}))}})})]})},z=t(28795),T=t(69864),A=t(72619);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e){var n=e.pipeline,t=(0,a.useRouter)(),i=(0,l.useState)(null),o=i[0],c=i[1],u=null===n||void 0===n?void 0:n.uuid,s=O.ZP.pipelines.detail(u).data,f=B(B({},null===s||void 0===s?void 0:s.pipeline),n),p=(0,T.Db)(O.ZP.pipelines.useUpdate(u,{update_content:!0}),{onSuccess:function(e){return(0,A.wD)(e,{callback:function(e){if(null!==e&&void 0!==e&&e.pipeline){var n=e.pipeline.uuid;u!==n&&(window.location.href="".concat(t.basePath,"/pipelines/").concat(n,"/settings"))}},onErrorCallback:function(e,n){return c({errors:n,response:e})}})}}),h=(0,r.Z)(p,2),g=h[0],v=h[1].isLoading;return(0,H.jsx)(d.Z,{breadcrumbs:[{label:function(){return"Settings"}}],errors:o,pageName:z.M.SETTINGS,pipeline:f,setErrors:c,title:function(e){var n=e.name;return"".concat(n," settings")},uuid:"".concat(z.M.SETTINGS,"_").concat(u),children:f&&(0,H.jsx)(R,{isPipelineUpdating:v,pipeline:f,updatePipeline:function(e){return g({pipeline:e})}})})}W.getInitialProps=function(){var e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var F=(0,s.Z)(W)},59606:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/settings",function(){return t(37003)}])},80022:function(e,n,t){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return i}})},15544:function(e,n,t){"use strict";function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}t.d(n,{Z:function(){return i}})},13692:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(61049);function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,i.Z)(e,n)}},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(12539),r=t(80022);function o(e,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}},61049:function(e,n,t){"use strict";function i(e,n){return i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},i(e,n)}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[2678,1154,844,4267,600,8487,8264,5457,9774,2888,179],(function(){return n=59606,e(e.s=n);var n}));var n=e.O();_N_E=n}]);