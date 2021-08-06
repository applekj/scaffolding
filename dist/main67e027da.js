(()=>{"use strict";var e,t={6414:(e,t,r)=>{var n=r(4942),a=r(7294),c=r(3935),o=r(4890),i=r(797),s=r(7757),l=r.n(s),u=r(4857),p=(r(5475),r(4698)),f=r(9669),m=r.n(f);m().defaults.timeout=3e4,m().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m().interceptors.response.use((function(e){return 0!=e.data.code&&p.ZP.error(e.data.msg),e.data}),(function(e){e.response&&p.ZP.error(e.response.msg)}));const d=m(),g={getData:"".concat("","/api/getData")};var v=function(e){return d.get(g.getData,{params:e})},h=l().mark(b),y=l().mark(O);function b(e){var t,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,(0,u.RE)(v,t);case 3:return r=n.sent,n.next=6,(0,u.gz)({type:"success",payload:{getData:r}});case 6:case"end":return n.stop()}}),h)}function O(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.ib)("getData",b);case 2:case"end":return e.stop()}}),y)}const E=O;var w=l().mark(j);function j(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.$6)([E()]);case 2:case"end":return e.stop()}}),w)}var P=r(4494),k=r(6550);const Z=function(e){return a.createElement("div",null,"首页")};r(423);var x=r(7183),D=(r(7004),r(6269)),S=r(7110),N=r(2223);const C=r.p+"fonts/panda.svg";var M=[{router:"/",name:"首页"}],$=x.Z.Sider;const A=function(e){var t=(0,a.useState)(!1),r=(0,S.Z)(t,2),n=r[0],c=r[1],o=(0,a.useState)(!1),i=(0,S.Z)(o,2),s=i[0],l=i[1],u=(0,a.useState)([e.history.location.pathname]),p=(0,S.Z)(u,2),f=p[0],m=p[1];return a.createElement($,{trigger:null,collapsible:!0,collapsed:n,onMouseLeave:function(){s&&c(s)},onMouseEnter:function(){s&&c(!s)}},a.createElement("div",{className:"logo"},a.createElement("div",null,a.createElement("img",{src:C,style:{width:"40px"}})),!n&&a.createElement("div",{className:"switch",style:{justifyContent:s?"flex-start":"flex-end"},onClick:function(){l(!s)}},a.createElement("div",{className:"switch-item"}))),a.createElement(D.Z,{theme:"dark",selectedKeys:f,mode:"inline"},function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.map((function(r,c){return r.children?a.createElement(SubMenu,{key:"".concat(n,"-").concat(c),icon:a.createElement(N.Z,null),title:a.createElement("span",null,r.name)},t(r.children,n+1)):a.createElement(D.Z.Item,{key:"".concat(n,"-").concat(c),icon:a.createElement(N.Z,null),className:f[0]==r.router?"active":"",onClick:function(){m([r.router]),e.history.push({pathname:r.router})}},r.name)}))}(M)))};r(8625);var I=r(1295);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var _=x.Z.Header;I.Z.Option;const z=(0,P.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))((function(e){return a.createElement(_,{className:"site-layout-background",style:{padding:0,backgroundColor:"#ffffff"}})}));var F=x.Z.Content,H=x.Z.Footer;const R=(B=function(){return a.createElement(a.Fragment,null,a.createElement(k.AW,{exact:!0,path:"/",component:Z}))},function(e){return a.createElement(x.Z,{style:{minHeight:"100vh"}},a.createElement(A,e),a.createElement(x.Z,{className:"site-layout",style:{position:"relative"}},a.createElement(z,e),a.createElement(F,{className:"site-layout-background",style:{padding:"20px 20px 0",minHeight:280}},a.createElement(B,e)),a.createElement(H,{className:"footer"},a.createElement("span",{className:"copyright"}," Copyright © ",a.createElement("a",{target:"_blank",href:"https://panda-water.cn"},"熊猫智慧水务")," 2021 All Rights Reserved ",a.createElement("a",{target:"_blank",id:"IndexCaseNumber",href:"http://icp.chinaz.com/home/info?host=panda-water.cn"},"沪ICP备11036640-1")))))});var B,K=r(3727);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,i.ZP)(),V=(0,o.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("success"==t.type)return q(q({},e),t.payload)}),(0,o.md)(L));L.run(j);var G=function(e){return a.createElement(K.VK,null,a.createElement(k.rs,null,a.createElement(k.AW,{path:"/",component:R})))};(0,c.render)(a.createElement(P.zt,{store:V},a.createElement(G,null),","),document.getElementById("root"))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=(t,r,a,c)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,a,c]=e[u],i=!0,s=0;s<r.length;s++)(!1&c||o>=c)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,c<o&&(o=c));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[r,a,c]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,c,[o,i,s]=r,l=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var u=s(n);for(t&&t(r);l<o.length;l++)c=o[l],n.o(e,c)&&e[c]&&e[c][0](),e[o[l]]=0;return n.O(u)},r=self.webpackChunkscaffolding=self.webpackChunkscaffolding||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[939,827,758,177,402,104,281,894,963,869],(()=>n(6414)));a=n.O(a)})();