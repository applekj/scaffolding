(self.webpackChunkscaffolding=self.webpackChunkscaffolding||[]).push([[244],{4308:(t,e,n)=>{"use strict";n.d(e,{c4:()=>a,ZP:()=>p});var r=n(6156),c=n(2122),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,s=-1,l={};const p={matchHandlers:{},dispatch:function(t){return l=t,i.forEach((function(t){return t(l)})),i.size>=1},subscribe:function(t){return i.size||this.register(),s+=1,i.set(s,t),t(l),s},unsubscribe:function(t){i.delete(t),i.size||this.unregister()},unregister:function(){var t=this;Object.keys(o).forEach((function(e){var n=o[e],r=t.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),i.clear()},register:function(){var t=this;Object.keys(o).forEach((function(e){var n=o[e],a=function(n){var a=n.matches;t.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},e,a)))},i=window.matchMedia(n);i.addListener(a),t.matchHandlers[n]={mql:i,listener:a},a(i)}))}}},5746:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n(1584).Z},2194:(t,e,n)=>{"use strict";n(6982),n(2286)},9134:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=(0,n(7294).createContext)({})},1584:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(6156),c=n(2122),a=n(484),o=n(7294),i=n(4184),s=n.n(i),l=n(9134),p=n(5632),u=["xs","sm","md","lg","xl","xxl"],d=o.forwardRef((function(t,e){var n,i=o.useContext(p.E_),d=i.getPrefixCls,f=i.direction,m=o.useContext(l.Z),Z=m.gutter,h=m.wrap,y=t.prefixCls,v=t.span,x=t.order,b=t.offset,g=t.push,w=t.pull,E=t.className,O=t.children,j=t.flex,C=t.style,N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n}(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",y),k={};u.forEach((function(e){var n,o={},i=t[e];"number"==typeof i?o.span=i:"object"===(0,a.Z)(i)&&(o=i||{}),delete N[e],k=(0,c.Z)((0,c.Z)({},k),(n={},(0,r.Z)(n,"".concat(P,"-").concat(e,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(P,"-").concat(e,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(P,"-").concat(e,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(P,"-").concat(e,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(P,"-").concat(e,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===f),n))}));var S=s()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(v),void 0!==v),(0,r.Z)(n,"".concat(P,"-order-").concat(x),x),(0,r.Z)(n,"".concat(P,"-offset-").concat(b),b),(0,r.Z)(n,"".concat(P,"-push-").concat(g),g),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),E,k),A=(0,c.Z)({},C);return Z&&(A=(0,c.Z)((0,c.Z)((0,c.Z)({},Z[0]>0?{paddingLeft:Z[0]/2,paddingRight:Z[0]/2}:{}),Z[1]>0?{paddingTop:Z[1]/2,paddingBottom:Z[1]/2}:{}),A)),j&&(A.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(j),"auto"!==j||!1!==h||A.minWidth||(A.minWidth=0)),o.createElement("div",(0,c.Z)({},N,{style:A,className:S,ref:e}),O)}));d.displayName="Col";const f=d},2820:(t,e,n)=>{"use strict";n.d(e,{Z:()=>Z});var r=n(2122),c=n(6156),a=n(484),o=n(8481),i=n(7294),s=n(4184),l=n.n(s),p=n(5632),u=n(9134),d=n(3355),f=n(4308),m=((0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between"),i.forwardRef((function(t,e){var n,s=t.prefixCls,d=t.justify,m=t.align,Z=t.className,h=t.style,y=t.children,v=t.gutter,x=void 0===v?0:v,b=t.wrap,g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n}(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=i.useContext(p.E_),E=w.getPrefixCls,O=w.direction,j=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,o.Z)(j,2),N=C[0],P=C[1],k=i.useRef(x);i.useEffect((function(){var t=f.ZP.subscribe((function(t){var e=k.current||0;(!Array.isArray(e)&&"object"===(0,a.Z)(e)||Array.isArray(e)&&("object"===(0,a.Z)(e[0])||"object"===(0,a.Z)(e[1])))&&P(t)}));return function(){return f.ZP.unsubscribe(t)}}),[]);var S,A=E("row",s),R=(S=[0,0],(Array.isArray(x)?x:[x,0]).forEach((function(t,e){if("object"===(0,a.Z)(t))for(var n=0;n<f.c4.length;n++){var r=f.c4[n];if(N[r]&&void 0!==t[r]){S[e]=t[r];break}}else S[e]=t||0})),S),z=l()(A,(n={},(0,c.Z)(n,"".concat(A,"-no-wrap"),!1===b),(0,c.Z)(n,"".concat(A,"-").concat(d),d),(0,c.Z)(n,"".concat(A,"-").concat(m),m),(0,c.Z)(n,"".concat(A,"-rtl"),"rtl"===O),n),Z),L=(0,r.Z)((0,r.Z)((0,r.Z)({},R[0]>0?{marginLeft:R[0]/-2,marginRight:R[0]/-2}:{}),R[1]>0?{marginTop:R[1]/-2,marginBottom:R[1]/2}:{}),h);return i.createElement(u.Z.Provider,{value:{gutter:R,wrap:b}},i.createElement("div",(0,r.Z)({},g,{className:z,style:L,ref:e}),y))})));m.displayName="Row";const Z=m},2286:(t,e,n)=>{"use strict";n(6982)},1230:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n(2820).Z},562:(t,e,n)=>{"use strict";n(6982),n(2286)},3529:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d}),n(562);var r=n(1230),c=(n(2194),n(5746)),a=(n(6982),n(2122)),o=n(6156),i=n(7294),s=n(4184),l=n.n(s),p=n(5632);const u=function(t){return i.createElement(p.C,null,(function(e){var n,r=e.getPrefixCls,c=e.direction,s=t.prefixCls,p=t.type,u=void 0===p?"horizontal":p,d=t.orientation,f=void 0===d?"center":d,m=t.className,Z=t.children,h=t.dashed,y=t.plain,v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n}(t,["prefixCls","type","orientation","className","children","dashed","plain"]),x=r("divider",s),b=f.length>0?"-".concat(f):f,g=!!Z,w=l()(x,"".concat(x,"-").concat(u),(n={},(0,o.Z)(n,"".concat(x,"-with-text"),g),(0,o.Z)(n,"".concat(x,"-with-text").concat(b),g),(0,o.Z)(n,"".concat(x,"-dashed"),!!h),(0,o.Z)(n,"".concat(x,"-plain"),!!y),(0,o.Z)(n,"".concat(x,"-rtl"),"rtl"===c),n),m);return i.createElement("div",(0,a.Z)({className:w},v,{role:"separator"}),Z&&i.createElement("span",{className:"".concat(x,"-inner-text")},Z))}))},d=function(t){return i.createElement("div",{style:{padding:"20px 20px 0"}},i.createElement(u,{orientation:"left"},"设置元素透明度的两种方式及区别：rgba()、opactiy"),i.createElement(r.Z,{gutter:32},i.createElement(c.Z,{span:6},i.createElement("div",{className:"opactiy-one div"},"背景色不透明，文字不透明")),i.createElement(c.Z,{span:6},i.createElement("div",{className:"opactiy-two div"},"背景色半透明，文字不透明")),i.createElement(c.Z,{span:6},i.createElement("div",{className:"opactiy-tre div"},"背景色不透明，文字不透明")),i.createElement(c.Z,{span:6},i.createElement("div",{className:"opactiy-for div"},"背景色半透明，文字半透明"))),i.createElement(u,{orientation:"left"},"总结：rgba()仅仅作用于元素的颜色和背景色，而opactiy具有继承性，既作用元素本身，也影响子元素"))}}}]);