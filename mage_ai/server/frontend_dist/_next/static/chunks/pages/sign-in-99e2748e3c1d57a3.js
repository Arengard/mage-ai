(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1312],{66316:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(82394),i=t(70613),o=t(68487),c=t(33591),u=t(38276),l=t(70515),a=t(28598);var s=function(e){var n=e.children,t=e.width,r=void 0===t?12:t;return(0,a.jsx)(u.Z,{px:l.zC,children:(0,a.jsx)(c.Row,{children:(0,a.jsx)(c.Col,{lg:r,md:Math.min(12,Math.round(1.5*(12-r))),sm:Math.min(12,Math.round(1.75*(12-r))),xs:12,children:n})})})},d=t(38626),f=t(46684),p=d.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-jcgu5l-0"})(["padding-top:","px;",""],f.Mz,(function(e){return e.fullHeight&&"\n    height: calc(100vh);\n  "}));function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){var n=e.children,t=e.headerProps,r=e.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:r}),(0,a.jsx)(o.Z,g({},t)),(0,a.jsx)(s,{children:(0,a.jsx)(p,{fullHeight:!0,children:n})})]})}},46568:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.style,s=void 0===l?{}:l,d=(0,i.Z)(e,u),f=a({},s);return r&&(f.paddingLeft=r,f.paddingRight=f.paddingLeft),t&&(f.height="100%"),(0,c.jsx)(o.Col,a(a({},d),{},{style:f,children:n}))}},82682:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),l=["children","fullHeight","gutter","justifyContent","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.justifyContent,d=e.style,f=void 0===d?{}:d,p=(0,i.Z)(e,l),h=s({},f);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,s(s({},p),{},{justifyContent:a,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},94542:function(e,n,t){"use strict";t.d(n,{J:function(){return o},X:function(){return c}});var r=t(46568),i=t(82682),o=r.Z,c=i.Z},40109:function(e,n,t){"use strict";t.d(n,{f:function(){return y},h:function(){return g}});var r=t(82394),i=t(82684),o=t(34376),c=t(93369),u=t(72473),l=t(70515),a=t(69419),s=t(53808),d=t(28598);var f=function(e){var n=e.oauthResponse,t=(0,o.useRouter)(),r=(0,i.useMemo)((function(){return n||{}}),[n]),f=r.url,p=r.redirect_query_params,h=void 0===p?{}:p;return(0,d.jsx)(d.Fragment,{children:f&&(0,d.jsx)(c.ZP,{beforeElement:(0,d.jsx)(u._8,{size:2*l.iI}),bold:!0,inline:!0,onClick:function(){var e=(0,a.iV)(f).state;(0,s.t8)(e,h),t.push(f)},uuid:"SignForm/google",children:"Sign in with Google"})})};var p=function(e){var n=e.oauthResponse,t=(0,o.useRouter)(),r=(0,i.useMemo)((function(){return n||{}}),[n]),f=r.url,p=r.redirect_query_params,h=void 0===p?{}:p;return(0,d.jsx)(d.Fragment,{children:f&&(0,d.jsx)(c.ZP,{beforeElement:(0,d.jsx)(u.Dg,{size:2*l.iI}),bold:!0,inline:!0,onClick:function(){var e=(0,a.iV)(f).state;h&&(0,s.t8)(e,h),t.push(f)},uuid:"SignForm/active_directory",children:"Sign in with Microsoft"})})};var h,g,m=function(e){var n=e.oauthResponse,t=(0,o.useRouter)(),r=(0,i.useMemo)((function(){return n||{}}),[n]),u=r.url,l=r.redirect_query_params,f=void 0===l?{}:l;return(0,d.jsx)(d.Fragment,{children:u&&(0,d.jsx)(c.ZP,{bold:!0,inline:!0,onClick:function(){var e=(0,a.iV)(u).state;(0,s.t8)(e,f),t.push(u)},uuid:"SignForm/okta",children:"Sign in with Okta"})})};!function(e){e.ACTIVE_DIRECTORY="active_directory",e.GITHUB="github",e.GOOGLE="google",e.OKTA="okta"}(g||(g={}));var y=(h={},(0,r.Z)(h,g.ACTIVE_DIRECTORY,p),(0,r.Z)(h,g.GOOGLE,f),(0,r.Z)(h,g.OKTA,m),h)},85854:function(e,n,t){"use strict";var r,i,o,c,u,l,a,s,d=t(82394),f=t(26304),p=t(26653),h=t(38626),g=t(33591),m=t(44897),y=t(95363),b=t(61896),j=t(30160),v=t(70515),O=t(38276),x=t(28598),w=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],j.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||m.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(y.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(y.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(y.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),S=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||m.Z.content).active,";\n  ")})),C=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],_,g.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),b.aQ),g.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),b.aQ),g.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),b.aQ)),k=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],_,b.MJ),I=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],_,g.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*v.iI,7*v.iI),g.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*v.iI,7*v.iI),g.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*v.iI,7*v.iI),g.media.lg(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*v.iI,7*v.iI),g.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*v.iI,7*v.iI)),z=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],_,b.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],_),H=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],_),D=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],_),E=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],_,(function(e){return 1===e.level&&"\n    ".concat(b.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(b.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),R=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,u=e.spacingBelow,l=(0,f.Z)(e,w);i?n=E:0===Number(o)?n=C:1===Number(o)?n=c?I:k:2===Number(o)?n=z:3===Number(o)?n=N:4===Number(o)?n=H:5===Number(o)&&(n=D);var a=(0,x.jsxs)(n,P(P({},l),{},{level:o,children:[u&&(0,x.jsx)(O.Z,{mb:r?2:3,children:t}),!u&&t]}));return i?a:(0,x.jsx)(S,{children:a})};R.defaultProps={level:3,weightStyle:6},n.Z=R},13180:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var r=t(77837),i=t(38860),o=t.n(i),c=t(66316),u=t(82394),l=t(75582),a=t(82684),s=t(69864),d=t(34376),f=t(40761),p=t(55485),h=t(85854),g=t(93369),m=t(38276),y=t(30160),b=t(17488),j=t(35686),v=t(38626),O=t(44897),x=t(42631),w=t(70515),Z=v.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-641xul-0"})(["border-radius:","px;padding-bottom:","px;padding-left:","px;padding-right:","px;padding-top:","px;width:100%;",""],x.TR,21*w.iI,w.Vj,w.Vj,w.Vj,(function(e){return"\n    background-color: ".concat((e.theme.background||O.Z.background).panel,";\n  ")})),P=v.default.div.withConfig({displayName:"indexstyle__BackgroundImageStyle",componentId:"sc-641xul-1"})(["border-radius:","px;font-size:0;overflow:hidden;",""],x.D7,(function(e){return e.src&&"\n    background-image: url(".concat(e.src,");\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n  ")})),_=t(94542),S=t(39643),C=t(40109),k=t(42122),I=t(72619),z=t(42041),N=t(69419),H=t(50178),D=t(28598);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M="email",F="password";var L=function(e){var n=e.title,t=(0,d.useRouter)(),r=(0,a.useState)(null),i=r[0],o=r[1],c=(0,a.useState)({}),v=c[0],O=c[1],x=(0,s.Db)(j.ZP.sessions.useCreate(),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(e){var n=e.session,r=n.token,i=n.user;(0,H.av)(i),f.Z.storeToken(r,(function(){var e="/",n=(0,N.iV)(window.location.href);if(n.redirect_url){var r=(0,N.uM)((0,k.gR)(n,["redirect_url","access_token","provider"]));e="".concat(n.redirect_url,"?").concat(r),window.location.href=e}else t.push(e)}))},onErrorCallback:function(e){var n=e.error;o(n)}})}}),E=(0,l.Z)(x,2),L=E[0],T=E[1].isLoading,V=(0,a.useCallback)((function(e){return f.Z.logout((function(){return L(e)}))}),[L]),G=j.ZP.oauths.list({redirect_uri:encodeURIComponent(window.location.href)}).data,B=(0,a.useMemo)((function(){var e;return null===G||void 0===G||null===(e=G.oauths)||void 0===e?void 0:e.reduce((function(e,n){return e[n.provider]=n,e}),{})}),[G]),X=(0,N.iV)()||{},A=X.access_token,J=X.provider;return(0,a.useEffect)((function(){var e;A&&J&&L({session:(e={},(0,u.Z)(e,"provider",J),(0,u.Z)(e,"token",A),e)})}),[A,L,J]),(0,D.jsxs)(_.X,{fullHeight:!0,children:[(0,D.jsx)(_.J,{lg:6,md:12,children:(0,D.jsx)(p.ZP,{flexDirection:"column",fullHeight:!0,fullWidth:!0,justifyContent:"center",children:(0,D.jsx)(m.Z,{px:{xl:5*w.zC,xs:w.zC},py:w.zC,children:(0,D.jsxs)(Z,{children:[(0,D.jsx)(h.Z,{yellow:!0,children:n}),(0,D.jsxs)("form",{children:[(0,D.jsxs)(m.Z,{mt:3,children:[(0,D.jsx)(b.Z,{autoComplete:"username",label:"Email",large:!0,meta:{error:" ",touched:!!i},onChange:function(e){return O((function(n){return R(R({},n),{},(0,u.Z)({},M,e.target.value))}))},primary:!i,value:v.email}),(0,D.jsx)(m.Z,{mt:2,children:(0,D.jsx)(b.Z,{autoComplete:"current-password",label:"Password",large:!0,meta:{error:" ",touched:!!i},onChange:function(e){return O((function(n){return R(R({},n),{},(0,u.Z)({},F,e.target.value))}))},primary:!i,type:"password",value:v.password})})]}),i&&(0,D.jsx)(m.Z,{mt:2,children:(0,D.jsx)(y.ZP,{danger:!0,children:i.message})}),(0,D.jsx)(m.Z,{mt:3,children:(0,D.jsx)(g.ZP,{bold:!0,inline:!0,keyTextGroups:[[S.Lz]],keyboardShortcutValidation:function(e){var n=e.keyMapping;return(0,z.y)([S.Uq],n)},large:!0,loading:T,noHoverUnderline:!0,onClick:function(){return V({session:v})},selected:!0,uuid:"SignForm/action",wind:!0,children:"Sign into Mage"})}),Object.entries(C.f).map((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];return(0,D.jsx)(D.Fragment,{children:(null===B||void 0===B?void 0:B[t])&&(0,D.jsx)(m.Z,{mt:4,children:(0,D.jsx)(r,{oauthResponse:null===B||void 0===B?void 0:B[t]})})})}))]})]})})})}),(0,D.jsx)(_.J,{hiddenLgDown:!0,lg:6,style:{flex:1},children:(0,D.jsx)(m.Z,{fullHeight:!0,fullWidth:!0,px:w.zC,py:w.zC+8,children:(0,D.jsx)(P,{src:"".concat(t.basePath,"/images/sessions/abstract.png"),children:"Sign in abstract image"})})})]})};function T(){return(0,D.jsx)(c.Z,{title:"Sign in",children:(0,D.jsx)(L,{title:"\ud83d\udc4b Sign in"})})}T.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var V=T},6821:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return t(13180)}])}},function(e){e.O(0,[2678,1154,844,4267,600,8487,9774,2888,179],(function(){return n=6821,e(e.s=n);var n}));var n=e.O();_N_E=n}]);