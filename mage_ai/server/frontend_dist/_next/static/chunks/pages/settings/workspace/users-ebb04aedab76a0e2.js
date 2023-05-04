(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2287],{63153:function(e,r,n){"use strict";n.d(r,{Z3:function(){return t},ms:function(){return u},s7:function(){return o}});var t=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!1,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",u=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},20582:function(e,r,n){"use strict";var t=n(82394),o=n(21831),u=n(75582),i=n(21764),s=n(82684),l=n(83455),a=n(60328),d=n(67971),c=n(87372),p=n(55378),f=n(86673),v=n(82944),m=n(81132),w=n(82531),O=n(66166),b=n(63153),h=n(7715),j=n(96510),y=n(28598);function _(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?_(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(e){var r=e.disabledFields,n=e.hideFields,_=e.newUser,g=e.onDeleteSuccess,P=e.onSaveSuccess,x=e.showDelete,C=e.title,S=e.user,E=(0,s.useState)(!0),D=E[0],k=E[1],N=(0,s.useState)({}),T=N[0],R=N[1],A=(0,s.useState)(null),I=A[0],q=A[1],M=(0,l.Db)(_?w.ZP.users.useCreate():w.ZP.users.useUpdate(null===S||void 0===S?void 0:S.id),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(e){var r=e.user,n=(0,h.GL)(r,b.Z3.concat(b.ms).map((function(e){return e.uuid})));q(n),i.Am.success(_?"New user created successfully.":"User profile successfully updated.",{position:i.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(r.id)}),null===P||void 0===P||P(n)},onErrorCallback:function(e){var r=e.error,n=r.exception,t=r.message,o=r.type;i.Am.error(n||t,{position:i.Am.POSITION.BOTTOM_RIGHT,toastId:o})}})}}),U=(0,u.Z)(M,2),F=U[0],H=U[1].isLoading,G=(0,l.Db)(w.ZP.users.useDelete(null===S||void 0===S?void 0:S.id),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(){null===g||void 0===g||g()},onErrorCallback:function(e){var r=e.error,n=r.errors,t=r.message;alert(t),console.log(n)}})}}),L=(0,u.Z)(G,2),W=L[0],V=L[1].isLoading,X=n?(0,o.Z)(n):[];_&&X.push(b.s7);var B=!X||!X.includes(b.s7),K=(0,O.Z)(S);return(0,s.useEffect)((function(){!S||I&&(null===K||void 0===K?void 0:K.id)===(null===S||void 0===S?void 0:S.id)||q((0,h.GL)(S,b.Z3.concat(b.ms).map((function(e){return e.uuid})))),null!==I&&void 0!==I&&I.password||null!==I&&void 0!==I&&I.password_confirmation?(null===I||void 0===I?void 0:I.password)!==(null===I||void 0===I?void 0:I.password_confirmation)?R({password_confirmation:"Password confirmation does not match."}):!B||null!==I&&void 0!==I&&I.password_current?R(null):R({password_current:"This field is required."}):null!==I&&void 0!==I&&I.password_current&&B?null!==I&&void 0!==I&&I.password&&null!==I&&void 0!==I&&I.password_confirmation?R(null):R({password:"This field is required.",password_confirmation:"This field is required."}):null!==I&&void 0!==I&&I.password_current||null!==I&&void 0!==I&&I.password||null!==I&&void 0!==I&&I.password_confirmation||R(null)}),[I,B,S,K]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.Z,{children:C||"Edit profile"}),(0,y.jsxs)("form",{children:[b.Z3.filter((function(e){var r=e.uuid;return!X||!X.includes(r)})).map((function(e){var r=e.autoComplete,n=e.disabled,o=e.label,u=e.required,i=e.type,s=e.uuid;return(0,y.jsx)(f.Z,{mt:2,children:(0,y.jsx)(v.Z,{autoComplete:r,disabled:n&&!_,label:o,onChange:function(e){k(!1),q((function(r){return Z(Z({},r),{},(0,t.Z)({},s,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:i,value:(null===I||void 0===I?void 0:I[s])||""})},s)})),!(null!==S&&void 0!==S&&S.owner)&&(0,y.jsx)(f.Z,{mt:2,children:(0,y.jsxs)(p.Z,{disabled:null===r||void 0===r?void 0:r.includes("roles"),label:"Roles",onChange:function(e){k(!1),e.target.value===m.No.OWNER?q((function(e){return Z(Z({},e),{},{owner:!0,roles:null})})):q((function(r){return Z(Z({},r),{},{owner:!1,roles:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null!==I&&void 0!==I&&I.owner?m.No.OWNER:null===I||void 0===I?void 0:I.roles)||(null===S||void 0===S?void 0:S.roles)||"",children:[(0,y.jsx)("option",{value:""}),m.K$.map((function(e){return(0,y.jsx)("option",{value:e,children:m.gG[e]},e)})),!_&&(0,y.jsx)("option",{value:m.No.OWNER,children:m.gG[m.No.OWNER]},"owner_role")]})}),(0,y.jsxs)(f.Z,{mt:5,children:[(0,y.jsx)(c.Z,{children:_?"Password":"Change password"}),b.ms.filter((function(e){var r=e.uuid;return!X||!X.includes(r)})).map((function(e){var r=e.autoComplete,n=e.disabled,o=e.label,u=e.required,i=e.type,s=e.uuid;return(0,y.jsx)(f.Z,{mt:2,children:(0,y.jsx)(v.Z,{autoComplete:r,disabled:n,label:o,meta:{error:null===T||void 0===T?void 0:T[s],touched:!(null===T||void 0===T||!T[s])},onChange:function(e){k(!1),q((function(r){return Z(Z({},r),{},(0,t.Z)({},s,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:i,value:(null===I||void 0===I?void 0:I[s])||""})},s)}))]}),(0,y.jsx)(f.Z,{mt:5,children:(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(a.Z,{disabled:D||T&&!(0,h.Qr)(T),loading:H,onClick:function(){return F({user:I})},primary:!0,children:_?"Create new user":"Update user profile"}),x&&(0,y.jsx)(f.Z,{ml:1,children:(0,y.jsx)(a.Z,{danger:!0,loading:V,onClick:function(){window.confirm("Are you sure you want to delete ".concat(I.username||I.email,"?"))&&W()},children:"Delete user"})})]})})]})]})}},60921:function(e,r,n){"use strict";n.r(r);var t=n(77837),o=n(82394),u=n(38860),i=n.n(u),s=n(82684),l=n(34376),a=n(60328),d=n(87372),c=n(41788),p=n(30775),f=n(86673),v=n(58180),m=n(19711),w=n(20582),O=n(82531),b=n(66166),h=n(10503),j=n(49125),y=n(79585),_=n(63153),Z=n(9736),g=n(33766),P=n(7715),x=n(59e3),C=n(24224),S=n(28598);function E(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function D(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?E(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function k(){var e=(0,l.useRouter)(),r=((0,Z.PR)()||{}).id,n=(0,s.useState)(null),t=n[0],o=n[1],u=O.ZP.users.list({},{revalidateOnFocus:!1}),i=u.data,c=u.mutate,E=(0,s.useMemo)((function(){return(0,C.YC)((null===i||void 0===i?void 0:i.users)||[],"username")}),[i]),k=O.ZP.users.detail(null===t||void 0===t?void 0:t.user_id,{},{revalidateOnFocus:!1}),N=k.data,T=k.mutate,R=null===N||void 0===N?void 0:N.user,A=(0,x.iV)(),I=(0,b.Z)(A);(0,s.useEffect)((function(){var e=A.add_new_user,r=A.user_id;if(!(0,P.Xy)(A,I)){var n=D(D({},I),A);r?n.user_id=r:delete n.user_id,e?n.add_new_user=e:delete n.add_new_user,o(n)}}),[A,I]);var q=null===t||void 0===t?void 0:t.add_new_user,M=(0,s.useMemo)((function(){return q?(0,S.jsx)(f.Z,{p:j.cd,children:(0,S.jsx)(w.Z,{newUser:!0,onSaveSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),c()},title:"Add new user",user:{}})}):R?(0,S.jsx)(f.Z,{p:j.cd,children:(0,S.jsx)(w.Z,{hideFields:[_.s7],onDeleteSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),c()},onSaveSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),T(),c()},showDelete:!0,title:"Edit user",user:R})}):null}),[T,c,q,R]);return(0,S.jsxs)(p.Z,{after:M,afterHidden:!R&&!q,uuidItemSelected:y.eC,uuidWorkspaceSelected:y.WH,children:[(0,S.jsx)(f.Z,{p:j.cd,children:(0,S.jsx)(a.Z,{beforeIcon:(0,S.jsx)(h.mm,{}),onClick:function(){return(0,g.u7)({add_new_user:1,user_id:null})},primary:!0,children:"Add new user"})}),(0,S.jsx)(f.Z,{p:j.cd,children:(0,S.jsx)(d.Z,{children:"Users"})}),(0,S.jsx)(v.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var r;return(null===(r=E[e])||void 0===r?void 0:r.id)===(null===R||void 0===R?void 0:R.id)},onClickRow:function(n){var o,u=null===(o=E[n])||void 0===o?void 0:o.id;u===r?e.push("/settings/account/profile"):+(null===t||void 0===t?void 0:t.user_id)===u?(0,g.u7)({user_id:null}):(0,g.u7)({add_new_user:null,user_id:u})},rows:E.map((function(e){var r=e.email,n=e.roles_display,t=e.username;return[(0,S.jsx)(m.ZP,{bold:!0,children:t},"username"),(0,S.jsx)(m.ZP,{default:!0,children:r},"email"),(0,S.jsx)(m.ZP,{default:!0,children:n},"roles")]})),uuid:"pipeline-runs"})]})}k.getInitialProps=(0,t.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,c.Z)(k)},33766:function(e,r,n){"use strict";n.d(r,{O2:function(){return c},g_:function(){return f},u7:function(){return p}});var t=n(75582),o=n(82394),u=n(34376),i=n.n(u),s=n(59e3),l=n(24224);function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var c="_offset";function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.preserveParams,o=r.pushHistory,u=r.replaceParams,l=(0,s.iV)(),a={};n&&n.forEach((function(e){l[e]&&(a[e]=l[e])}));var c,p=u?a:l;c=window.location.pathname;var f=o?i().push:i().replace,v=d(d({},p),e);Object.entries(e).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],o=r[1];"undefined"!==typeof o&&null!==o||delete v[n]}));var m=(0,s.uM)(v);m.length>=1&&(m="?".concat(m));var w="".concat(c.split("?")[0]).concat(m);return f(i().router.pathname,w,{shallow:!0})}function f(e,r,n){var o=n.addingMultipleValues,u=n.isList,i=n.itemsPerPage,s=n.pushHistory,a=void 0!==s&&s,f=n.resetLimitParams,v=d({},e);o?Object.entries(r).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],o=r[1];if(Array.isArray(o)){var u="".concat(n,"[]");v[u]=o.map(String)}})):u?Object.entries(r).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],o=r[1],u=String(o),i="".concat(n,"[]"),s=v[i];s&&Array.isArray(s)?(s=s.map(String)).includes(u)?v[i]=(0,l.Od)(s,(function(e){return e===u})):v[i]=s.concat(u):v[i]=[u]})):v=d(d({},v),r),f&&(v._limit=i||20,v[c]=0),p(v,{pushHistory:a})}},48673:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/users",function(){return n(60921)}])}},function(e){e.O(0,[844,7607,881,1005,8180,3077,9774,2888,179],(function(){return r=48673,e(e.s=r);var r}));var r=e.O();_N_E=r}]);