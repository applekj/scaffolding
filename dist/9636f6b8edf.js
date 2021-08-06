"use strict";(self.webpackChunkscaffolding=self.webpackChunkscaffolding||[]).push([[963],{1666:(n,t,r)=>{r.d(t,{A:()=>x,B:()=>y,C:()=>j,D:()=>b,E:()=>a,F:()=>M,G:()=>Y,J:()=>L,K:()=>K,L:()=>G,N:()=>F,P:()=>N,R:()=>R,S:()=>_,T:()=>T,Y:()=>U,_:()=>B,a:()=>I,b:()=>P,d:()=>q,e:()=>k,f:()=>Z,g:()=>X,h:()=>W,i:()=>g,j:()=>A,k:()=>u,l:()=>S,m:()=>E,o:()=>v,p:()=>f,q:()=>p,r:()=>s,s:()=>C,t:()=>i,u:()=>l,v:()=>O,y:()=>w,z:()=>m});var e=r(2470),o=r(7462),c=r(2847),u=function(n){return function(){return true}}(),i=function(){},a=function(n){return n};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var f=function(n,t){(0,o.Z)(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(r){n[r]=t[r]}))},l=function(n,t){var r;return(r=[]).concat.apply(r,t.map(n))};function s(n,t){var r=n.indexOf(t);r>=0&&n.splice(r,1)}function v(n){var t=!1;return function(){t||(t=!0,n())}}var d=function(n){throw n},h=function(n){return{value:n,done:!0}};function p(n,t,r){void 0===t&&(t=d),void 0===r&&(r="iterator");var e={meta:{name:r},next:n,throw:t,return:h,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(e[Symbol.iterator]=function(){return e}),e}function y(n,t){var r=t.sagaStack;console.error(n),console.error(r)}var g=function(n){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+n+"\n")},E=function(n){return Array.apply(null,new Array(n))},b=function(n){return function(t){return n(Object.defineProperty(t,e.Nm,{value:!0}))}},m=function(n){return n===e.EO},w=function(n){return n===e.Wd},C=function(n){return m(n)||w(n)};function S(n,t){var r,e=Object.keys(n),o=e.length,u=0,a=(0,c.IX)(n)?E(o):{},f={};return e.forEach((function(n){var e=function(e,c){r||(c||C(e)?(t.cancel(),t(e,c)):(a[n]=e,++u===o&&(r=!0,t(a))))};e.cancel=i,f[n]=e})),t.cancel=function(){r||(r=!0,e.forEach((function(n){return f[n].cancel()})))},f}function A(n){return{name:n.name||"anonymous",location:O(n)}}function O(n){return n[e.b_]}var k=function(n){return function(n,t){void 0===n&&(n=10);var r=new Array(n),e=0,o=0,c=0,u=function(t){r[o]=t,o=(o+1)%n,e++},i=function(){if(0!=e){var t=r[c];return r[c]=null,e--,c=(c+1)%n,t}},a=function(){for(var n=[];e;)n.push(i());return n};return{isEmpty:function(){return 0==e},put:function(i){var f;if(e<n)u(i);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:r[o]=i,c=o=(o+1)%n;break;case 4:f=2*n,r=a(),e=r.length,o=r.length,c=0,r.length=f,n=f,u(i)}},take:i,flush:a}}(n,4)},T="TAKE",N="PUT",x="ALL",R="RACE",j="CALL",I="CPS",M="FORK",L="JOIN",P="CANCEL",_="SELECT",q="ACTION_CHANNEL",Z="CANCELLED",X="FLUSH",Y="GET_CONTEXT",W="SET_CONTEXT",D=function(n,t){var r;return(r={})[e.IO]=!0,r.combinator=!1,r.type=n,r.payload=t,r};function K(n,t){return void 0===n&&(n="*"),(0,c.uj)(n)?D(T,{pattern:n}):(0,c.Om)(n)&&(0,c.d5)(t)&&(0,c.uj)(t)?D(T,{channel:n,pattern:t}):(0,c.CE)(n)?D(T,{channel:n}):void 0}function U(n,t){return(0,c.sR)(t)&&(t=n,n=void 0),D(N,{channel:n,action:t})}function B(n){var t=D(x,n);return t.combinator=!0,t}function z(n,t){var r,e=null;return(0,c.Yl)(n)?r=n:((0,c.IX)(n)?(e=n[0],r=n[1]):(e=n.context,r=n.fn),e&&(0,c.Z_)(r)&&(0,c.Yl)(e[r])&&(r=e[r])),{context:e,fn:r,args:t}}function F(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return D(j,z(n,r))}function G(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return D(M,z(n,r))}},2847:(n,t,r)=>{r.d(t,{IX:()=>a,CE:()=>v,Yl:()=>u,hZ:()=>l,Om:()=>p,d5:()=>c,uj:()=>s,MC:()=>f,Z_:()=>i,eR:()=>d,NA:()=>h,sR:()=>o});var e=r(2470),o=function(n){return null==n},c=function(n){return null!=n},u=function(n){return"function"==typeof n},i=function(n){return"string"==typeof n},a=Array.isArray,f=function(n){return n&&u(n.then)},l=function(n){return n&&u(n.next)&&u(n.throw)},s=function n(t){return t&&(i(t)||h(t)||u(t)||a(t)&&t.every(n))},v=function(n){return n&&u(n.take)&&u(n.close)},d=function(n){return u(n)&&n.hasOwnProperty("toString")},h=function(n){return Boolean(n)&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype},p=function(n){return v(n)&&n[e.AS]}},2470:(n,t,r)=>{r.d(t,{n1:()=>o,sZ:()=>c,IO:()=>u,uq:()=>i,AS:()=>a,Nm:()=>f,b_:()=>h,sC:()=>l,Cs:()=>s,Wd:()=>v,EO:()=>d});var e=function(n){return"@@redux-saga/"+n},o=e("CANCEL_PROMISE"),c=e("CHANNEL_END"),u=e("IO"),i=e("MATCH"),a=e("MULTICAST"),f=e("SAGA_ACTION"),l=e("SELF_CANCELLATION"),s=e("TASK"),v=e("TASK_CANCEL"),d=e("TERMINATE"),h=e("LOCATION")},797:(n,t,r)=>{r.d(t,{ZP:()=>U});var e=r(2470),o=r(7462),c=r(3366),u=r(2847),i=r(1666),a=r(4890);const f=function(){var n={};return n.promise=new Promise((function(t,r){n.resolve=t,n.reject=r})),n};var l=[],s=0;function v(n){try{p(),n()}finally{y()}}function d(n){l.push(n),s||(p(),g())}function h(n){try{return p(),n()}finally{g()}}function p(){s++}function y(){s--}function g(){var n;for(y();!s&&void 0!==(n=l.shift());)v(n)}var E=function(n){return function(t){return n.some((function(n){return S(n)(t)}))}},b=function(n){return function(t){return n(t)}},m=function(n){return function(t){return t.type===String(n)}},w=function(n){return function(t){return t.type===n}},C=function(){return i.k};function S(n){var t="*"===n?C:(0,u.Z_)(n)?m:(0,u.IX)(n)?E:(0,u.eR)(n)?m:(0,u.Yl)(n)?b:(0,u.NA)(n)?w:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var A={type:e.sZ},O=function(n){return n&&n.type===e.sZ};function k(){var n,t,r,o,c,u,a=(t=!1,o=r=[],c=function(){o===r&&(o=r.slice())},u=function(){t=!0;var n=r=o;o=[],n.forEach((function(n){n(A)}))},(n={})[e.AS]=!0,n.put=function(n){if(!t)if(O(n))u();else for(var c=r=o,i=0,a=c.length;i<a;i++){var f=c[i];f[e.uq](n)&&(f.cancel(),f(n))}},n.take=function(n,r){void 0===r&&(r=C),t?n(A):(n[e.uq]=r,c(),o.push(n),n.cancel=(0,i.o)((function(){c(),(0,i.r)(o,n)})))},n.close=u,n),f=a.put;return a.put=function(n){n[e.Nm]?f(n):d((function(){f(n)}))},a}function T(n,t){var r=n[e.n1];(0,u.Yl)(r)&&(t.cancel=r),n.then(t,(function(n){t(n,!0)}))}var N,x=0,R=function(){return++x};function j(n){n.isRunning()&&n.cancel()}var I=((N={})[i.T]=function(n,t,r){var o=t.channel,c=void 0===o?n.channel:o,i=t.pattern,a=t.maybe,f=function(n){n instanceof Error?r(n,!0):!O(n)||a?r(n):r(e.EO)};try{c.take(f,(0,u.d5)(i)?S(i):null)}catch(n){return void r(n,!0)}r.cancel=f.cancel},N[i.P]=function(n,t,r){var e=t.channel,o=t.action,c=t.resolve;d((function(){var t;try{t=(e?e.put:n.dispatch)(o)}catch(n){return void r(n,!0)}c&&(0,u.MC)(t)?T(t,r):r(t)}))},N[i.A]=function(n,t,r,e){var o=e.digestEffect,c=x,a=Object.keys(t);if(0!==a.length){var f=(0,i.l)(t,r);a.forEach((function(n){o(t[n],c,f[n],n)}))}else r((0,u.IX)(t)?[]:{})},N[i.R]=function(n,t,r,e){var o=e.digestEffect,c=x,a=Object.keys(t),f=(0,u.IX)(t)?(0,i.m)(a.length):{},l={},s=!1;a.forEach((function(n){var t=function(t,e){s||(e||(0,i.s)(t)?(r.cancel(),r(t,e)):(r.cancel(),s=!0,f[n]=t,r(f)))};t.cancel=i.t,l[n]=t})),r.cancel=function(){s||(s=!0,a.forEach((function(n){return l[n].cancel()})))},a.forEach((function(n){s||o(t[n],c,l[n],n)}))},N[i.C]=function(n,t,r,e){var o=t.context,c=t.fn,a=t.args,f=e.task;try{var l=c.apply(o,a);if((0,u.MC)(l))return void T(l,r);if((0,u.hZ)(l))return void D(n,l,f.context,x,(0,i.j)(c),!1,r);r(l)}catch(n){r(n,!0)}},N[i.a]=function(n,t,r){var e=t.context,o=t.fn,c=t.args;try{var i=function(n,t){(0,u.sR)(n)?r(t):r(n,!0)};o.apply(e,c.concat(i)),i.cancel&&(r.cancel=i.cancel)}catch(n){r(n,!0)}},N[i.F]=function(n,t,r,e){var o=t.context,c=t.fn,a=t.args,f=t.detached,l=e.task,s=function(n){var t=n.context,r=n.fn,e=n.args;try{var o=r.apply(t,e);if((0,u.hZ)(o))return o;var c=!1;return(0,i.q)((function(n){return c?{value:n,done:!0}:(c=!0,{value:o,done:!(0,u.MC)(o)})}))}catch(n){return(0,i.q)((function(){throw n}))}}({context:o,fn:c,args:a}),v=function(n,t){return n.isSagaIterator?{name:n.meta.name}:(0,i.j)(t)}(s,c);h((function(){var t=D(n,s,l.context,x,v,f,void 0);f?r(t):t.isRunning()?(l.queue.addTask(t),r(t)):t.isAborted()?l.queue.abort(t.error()):r(t)}))},N[i.J]=function(n,t,r,e){var o=e.task,c=function(n,t){if(n.isRunning()){var r={task:o,cb:t};t.cancel=function(){n.isRunning()&&(0,i.r)(n.joiners,r)},n.joiners.push(r)}else n.isAborted()?t(n.error(),!0):t(n.result())};if((0,u.IX)(t)){if(0===t.length)return void r([]);var a=(0,i.l)(t,r);t.forEach((function(n,t){c(n,a[t])}))}else c(t,r)},N[i.b]=function(n,t,r,o){var c=o.task;t===e.sC?j(c):(0,u.IX)(t)?t.forEach(j):j(t),r()},N[i.S]=function(n,t,r){var e=t.selector,o=t.args;try{r(e.apply(void 0,[n.getState()].concat(o)))}catch(n){r(n,!0)}},N[i.d]=function(n,t,r){var e=t.pattern,o=function(n){void 0===n&&(n=(0,i.e)());var t=!1,r=[];return{take:function(e){t&&n.isEmpty()?e(A):n.isEmpty()?(r.push(e),e.cancel=function(){(0,i.r)(r,e)}):e(n.take())},put:function(e){if(!t){if(0===r.length)return n.put(e);r.shift()(e)}},flush:function(r){t&&n.isEmpty()?r(A):r(n.flush())},close:function(){if(!t){t=!0;var n=r;r=[];for(var e=0,o=n.length;e<o;e++)(0,n[e])(A)}}}}(t.buffer),c=S(e),u=function t(r){O(r)||n.channel.take(t,c),o.put(r)},a=o.close;o.close=function(){u.cancel(),a()},n.channel.take(u,c),r(o)},N[i.f]=function(n,t,r,e){r(e.task.isCancelled())},N[i.g]=function(n,t,r){t.flush(r)},N[i.G]=function(n,t,r,e){r(e.task.context[t])},N[i.h]=function(n,t,r,e){var o=e.task;(0,i.p)(o.context,t),r()},N);function M(n,t){return n+"?"+t}function L(n){var t=n.name,r=n.location;return r?t+"  "+M(r.fileName,r.lineNumber):t}function P(n){var t=(0,i.u)((function(n){return n.cancelledTasks}),n);return t.length?["Tasks cancelled due to error:"].concat(t).join("\n"):""}var _=null,q=[],Z=function(n){n.crashedEffect=_,q.push(n)},X=function(){_=null,q.length=0},Y=function(){var n,t,r=q[0],e=q.slice(1),o=r.crashedEffect?(n=r.crashedEffect,(t=(0,i.v)(n))?t.code+"  "+M(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+L(r.meta)+(o?" \n when executing effect "+o:"")].concat(e.map((function(n){return"    created by "+L(n.meta)})),[P(q)]).join("\n")};function W(n,t,r,o,c,u,a){var l;void 0===a&&(a=i.t);var s,v,d=0,h=null,p=[],y=Object.create(r),g=function(n,t,r){var e,o=[],c=!1;function u(n){p.push.apply(p,g.getTasks().map((function(n){return n.meta.name}))),f(),r(n,!0)}function a(t){o.push(t),t.cont=function(a,f){c||((0,i.r)(o,t),t.cont=i.t,f?u(a):(t===n&&(e=a),o.length||(c=!0,r(e))))}}function f(){c||(c=!0,o.forEach((function(n){n.cont=i.t,n.cancel()})),o=[])}return a(n),{addTask:a,cancelAll:f,abort:u,getTasks:function(){return o}}}(t,0,E);function E(t,r){if(r){if(d=2,Z({meta:c,cancelledTasks:p}),b.isRoot){var o=Y();X(),n.onError(t,{sagaStack:o})}v=t,h&&h.reject(t)}else t===e.Wd?d=1:1!==d&&(d=3),s=t,h&&h.resolve(t);b.cont(t,r),b.joiners.forEach((function(n){n.cb(t,r)})),b.joiners=null}var b=((l={})[e.Cs]=!0,l.id=o,l.meta=c,l.isRoot=u,l.context=y,l.joiners=[],l.queue=g,l.cancel=function(){0===d&&(d=1,g.cancelAll(),E(e.Wd,!1))},l.cont=a,l.end=E,l.setContext=function(n){(0,i.p)(y,n)},l.toPromise=function(){return h||(h=f(),2===d?h.reject(v):0!==d&&h.resolve(s)),h.promise},l.isRunning=function(){return 0===d},l.isCancelled=function(){return 1===d||0===d&&1===t.status},l.isAborted=function(){return 2===d},l.result=function(){return s},l.error=function(){return v},l);return b}function D(n,t,r,o,c,a,f){var l=n.finalizeRunEffect((function(t,r,o){(0,u.MC)(t)?T(t,o):(0,u.hZ)(t)?D(n,t,v.context,r,c,!1,o):t&&t[e.IO]?(0,I[t.type])(n,t.payload,o,d):o(t)}));h.cancel=i.t;var s={meta:c,cancel:function(){0===s.status&&(s.status=1,h(e.Wd))},status:0},v=W(n,s,r,o,c,a,f),d={task:v,digestEffect:p};return f&&(f.cancel=v.cancel),h(),v;function h(n,r){try{var c;r?(c=t.throw(n),X()):(0,i.y)(n)?(s.status=1,h.cancel(),c=(0,u.Yl)(t.return)?t.return(e.Wd):{done:!0,value:e.Wd}):c=(0,i.z)(n)?(0,u.Yl)(t.return)?t.return():{done:!0}:t.next(n),c.done?(1!==s.status&&(s.status=3),s.cont(c.value)):p(c.value,o,h)}catch(n){if(1===s.status)throw n;s.status=2,s.cont(n,!0)}}function p(t,r,e,o){void 0===o&&(o="");var c,u=R();function a(r,o){c||(c=!0,e.cancel=i.t,n.sagaMonitor&&(o?n.sagaMonitor.effectRejected(u,r):n.sagaMonitor.effectResolved(u,r)),o&&function(n){_=n}(t),e(r,o))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:u,parentEffectId:r,label:o,effect:t}),a.cancel=i.t,e.cancel=function(){c||(c=!0,a.cancel(),a.cancel=i.t,n.sagaMonitor&&n.sagaMonitor.effectCancelled(u))},l(t,u,a)}}function K(n,t){for(var r=n.channel,e=void 0===r?k():r,o=n.dispatch,c=n.getState,u=n.context,f=void 0===u?{}:u,l=n.sagaMonitor,s=n.effectMiddlewares,v=n.onError,d=void 0===v?i.B:v,p=arguments.length,y=new Array(p>2?p-2:0),g=2;g<p;g++)y[g-2]=arguments[g];var E,b=t.apply(void 0,y),m=R();if(l&&(l.rootSagaStarted=l.rootSagaStarted||i.t,l.effectTriggered=l.effectTriggered||i.t,l.effectResolved=l.effectResolved||i.t,l.effectRejected=l.effectRejected||i.t,l.effectCancelled=l.effectCancelled||i.t,l.actionDispatched=l.actionDispatched||i.t,l.rootSagaStarted({effectId:m,saga:t,args:y})),s){var w=a.qC.apply(void 0,s);E=function(n){return function(t,r,e){return w((function(t){return n(t,r,e)}))(t)}}}else E=i.E;var C={channel:e,dispatch:(0,i.D)(o),getState:c,sagaMonitor:l,onError:d,finalizeRunEffect:E};return h((function(){var n=D(C,b,f,m,(0,i.j)(t),!0,void 0);return l&&l.effectResolved(m,n),n}))}const U=function(n){var t,r=void 0===n?{}:n,e=r.context,u=void 0===e?{}:e,a=r.channel,f=void 0===a?k():a,l=r.sagaMonitor,s=(0,c.Z)(r,["context","channel","sagaMonitor"]);function v(n){var r=n.getState,e=n.dispatch;return t=K.bind(null,(0,o.Z)({},s,{context:u,channel:f,dispatch:e,getState:r,sagaMonitor:l})),function(n){return function(t){l&&l.actionDispatched&&l.actionDispatched(t);var r=n(t);return f.put(t),r}}}return v.run=function(){return t.apply(void 0,arguments)},v.setContext=function(n){(0,i.p)(u,n)},v}},4857:(n,t,r)=>{r.d(t,{$6:()=>o._,RE:()=>o.N,gz:()=>o.Y,ib:()=>l});var e=r(2847),o=r(1666),c=function(n){return{done:!0,value:n}},u={};function i(n){return(0,e.CE)(n)?"channel":(0,e.eR)(n)?String(n):(0,e.Yl)(n)?n.name:String(n)}function a(n,t,r){var e,i,a,f=t;function l(t,r){if(f===u)return c(t);if(r&&!i)throw f=u,r;e&&e(t);var o=r?n[i](r):n[f]();return f=o.nextState,a=o.effect,e=o.stateUpdater,i=o.errorState,f===u?c(t):a}return(0,o.q)(l,(function(n){return l(null,n)}),r)}function f(n,t){for(var r=arguments.length,e=new Array(r>2?r-2:0),c=2;c<r;c++)e[c-2]=arguments[c];var u,f={done:!1,value:(0,o.K)(n)},l=function(n){return{done:!1,value:o.L.apply(void 0,[t].concat(e,[n]))}},s=function(n){return u=n};return a({q1:function(){return{nextState:"q2",effect:f,stateUpdater:s}},q2:function(){return{nextState:"q1",effect:l(u)}}},"q1","takeEvery("+i(n)+", "+t.name+")")}function l(n,t){for(var r=arguments.length,e=new Array(r>2?r-2:0),c=2;c<r;c++)e[c-2]=arguments[c];return o.L.apply(void 0,[f,n,t].concat(e))}},4890:(n,t,r)=>{r.d(t,{md:()=>s,qC:()=>l,MT:()=>f});var e=r(1413);function o(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}var c="function"==typeof Symbol&&Symbol.observable||"@@observable",u=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function a(n){if("object"!=typeof n||null===n)return!1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}function f(n,t,r){var e;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(o(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(o(1));return r(f)(n,t)}if("function"!=typeof n)throw new Error(o(2));var u=n,l=t,s=[],v=s,d=!1;function h(){v===s&&(v=s.slice())}function p(){if(d)throw new Error(o(3));return l}function y(n){if("function"!=typeof n)throw new Error(o(4));if(d)throw new Error(o(5));var t=!0;return h(),v.push(n),function(){if(t){if(d)throw new Error(o(6));t=!1,h();var r=v.indexOf(n);v.splice(r,1),s=null}}}function g(n){if(!a(n))throw new Error(o(7));if(void 0===n.type)throw new Error(o(8));if(d)throw new Error(o(9));try{d=!0,l=u(l,n)}finally{d=!1}for(var t=s=v,r=0;r<t.length;r++)(0,t[r])();return n}function E(n){if("function"!=typeof n)throw new Error(o(10));u=n,g({type:i.REPLACE})}function b(){var n,t=y;return(n={subscribe:function(n){if("object"!=typeof n||null===n)throw new Error(o(11));function r(){n.next&&n.next(p())}return r(),{unsubscribe:t(r)}}})[c]=function(){return this},n}return g({type:i.INIT}),(e={dispatch:g,subscribe:y,getState:p,replaceReducer:E})[c]=b,e}function l(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return 0===t.length?function(n){return n}:1===t.length?t[0]:t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))}function s(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(n){return function(){var r=n.apply(void 0,arguments),c=function(){throw new Error(o(15))},u={getState:r.getState,dispatch:function(){return c.apply(void 0,arguments)}},i=t.map((function(n){return n(u)}));return c=l.apply(void 0,i)(r.dispatch),(0,e.Z)((0,e.Z)({},r),{},{dispatch:c})}}}}}]);