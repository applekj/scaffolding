(self.webpackChunkscaffolding=self.webpackChunkscaffolding||[]).push([[224],{9224:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var a=n(9713),r=n.n(a),c=n(3038),s=n.n(c),o=n(7294),u=n(7154),i=n.n(u),l=(n(4897),n(9689)),d=(n(6531),n(8222)),f=n(7757),p=n.n(f),m=n(6479),g=n.n(m),v=n(8926),y=n.n(v),b=o.createContext({datas:[]}),h=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}],O=n(9669),E=n.n(O),j=function(e){var t=(0,o.useState)(!1),n=s()(t,2),a=n[0],r=n[1],c=e.changeDatas,u=function(){var e=y()(p().mark((function e(){var t,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,E().get("/api/address");case 4:t=e.sent,n=t.data,g()(t,["data"]),c({datas:n,changeDatas:c}),r(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0,"--------");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return o.createElement(d.Z,{type:"primary",loading:a,onClick:function(){u()}},"查询")};const k=function(e){return o.createElement(b.Consumer,null,(function(t){t.datas;var n=t.changeDatas;return o.createElement(j,i()({},e,{changeDatas:n}))}))};var D=function(e){return o.createElement(o.Fragment,null,o.createElement("div",{style:{marginBottom:"20px"}},o.createElement(k,e)),o.createElement(l.Z,{columns:h,dataSource:e.datas}))};const w=function(e){return o.createElement(b.Consumer,null,(function(t){var n=t.datas;return t.changeDatas,o.createElement(D,i()({},e,{datas:n}))}))};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=b.Provider;const S=function(e){var t=(0,o.useState)({datas:[],changeDatas:function(){}}),n=s()(t,2),a=n[0],r=n[1];return o.createElement("div",{style:{padding:"20px 20px 0"}},o.createElement(C,{value:P(P({},a),{},{changeDatas:function(e){return r(e)}})},o.createElement(w,e)))}}}]);