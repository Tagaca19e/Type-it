(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(7),u=n.n(r),i=(n(31),n(5)),l=n.n(i),o=n(8),j=n(2),b=n(21),d=n.n(b);function O(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-custom",children:[Object(a.jsxs)("a",{className:"navbar-brand",href:"/",children:["Type-it ",Object(a.jsx)(d.a,{})]}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"})]})}function h(e){var t=e.isActive,n=e.seconds,s=e.setSeconds,r=e.minutes,u=e.setMinutes;return Object(c.useEffect)((function(){if(t){if(n<60){var e=setInterval((function(){s((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}u((function(e){return e+1})),s(0)}}),[t,n,u,s]),Object(a.jsx)("div",{className:"timer",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{className:"minutes",children:r<10?"0".concat(r):r}),":",Object(a.jsx)("span",{className:"seconds",children:n<10?"0".concat(n):n})]})})}function v(e){var t=e.time,n=e.totalWords,s=(e.done,Object(c.useState)()),r=Object(j.a)(s,2),u=r[0],i=r[1];return Object(c.useEffect)((function(){i(Math.ceil(60/t*n*10)/10)}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:u&&"".concat(u,"WP")})})}function f(e){var t=e.done,n=e.totalWords,s=Object(c.useState)(0),r=Object(j.a)(s,2),u=r[0],i=r[1],l=Object(c.useState)(0),o=Object(j.a)(l,2),b=o[0],d=o[1],O=Object(c.useState)(0),f=Object(j.a)(O,2),p=f[0],x=f[1];return Object(c.useEffect)((function(){0!==u?x(60*u+b):x(b);console.log(n)}),[u,b,p,n]),Object(a.jsxs)("div",{className:"type-details ".concat(t&&"type-details-divider"),children:[Object(a.jsx)(h,{seconds:b,setSeconds:d,minutes:u,setMinutes:i,isActive:!t&&!0}),t&&Object(a.jsx)(v,{time:p,totalWords:n,done:t})]})}n(38);function p(e){var t=e.quote,n=e.setQuote,s=Object(c.useState)(""),r=Object(j.a)(s,2),u=r[0],i=r[1],l=Object(c.useState)(),o=Object(j.a)(l,2),b=o[0],d=o[1],O=Object(c.useState)(),h=Object(j.a)(O,2),v=h[0],p=h[1],x=Object(c.useState)(),g=Object(j.a)(x,2),m=g[0],N=g[1],y=Object(c.useState)(),S=Object(j.a)(y,2),q=S[0],w=S[1],k=Object(c.useState)([]),M=Object(j.a)(k,2),C=M[0],E=M[1],A=Object(c.useState)(""),W=Object(j.a)(A,2),F=W[0],I=W[1],K=Object(c.useState)(!1),T=Object(j.a)(K,2),D=T[0],J=T[1],Q=Object(c.useState)(),B=Object(j.a)(Q,2),P=B[0],R=B[1];Object(c.useEffect)((function(){var e=t.split(" ");R(e.length),p(0),N(0),w(1),e=(e=e.slice(1)).join(" "),n(e),E(t.split(" "))}),[]);var U=function(e){return"undefined"!==typeof e?e:""},z=function(e){var t;if(I(e.target.value),t=v===C.length-1?C[v]:C[v]+" ",e.target.value[e.target.value.length-1]!==b&&i(t[m]),t[m]===e.target.value[e.target.value.length-1]&&m===e.target.value.length-1){if(i(""),N(q),w((function(e){return e+1})),d((function(t){return U(t)+U(e.target.value[e.target.value.length-1])})),e.target.value===t){I(""),N(0),w(1),C.length-1!==v&&p((function(e){return e+1}));var a=C.slice(v+2);a=a.join(" "),n(a)}}else e.target.value.length>F.length&&i(t[m]);v+1===C.length&&e.target.value===C[v]&&(J(!0),p(0),N(0),w(1))},G=function(e){8===e.keyCode&&F.length>0&&F.length<=C[v].length&&b&&m>0&&q>1&&e.target.value.length<=b.split(" ")[v].length+1&&(N((function(e){return e-1})),w((function(e){return e-1})),b&&d((function(e){return e.slice(0,e.length-1)}))),0===F.length&&i("")};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container quotes",children:[Object(a.jsx)(f,{done:D,totalWords:P}),D?Object(a.jsx)("div",{className:"quote",children:Object(a.jsx)("span",{className:"quote-text success",children:C.join(" ")})}):q&&Object(a.jsxs)("div",{className:"quote",children:[Object(a.jsx)("span",{className:"quote-text success",children:b}),u?Object(a.jsx)("span",{className:"quote-text error",children:u}):Object(a.jsx)("span",{className:"quote-text current-word",children:C[v][m]}),Object(a.jsx)("span",{className:"quote-text current-word",children:C[v][q]}),Object(a.jsxs)("span",{className:"quote-text current-word",children:[C[v].slice(q+1)," "]}),Object(a.jsx)("span",{className:"quote-text",children:t})]}),u?Object(a.jsx)("input",{type:"text",id:"input",onChange:z,value:F,className:"input mt-5 error",onKeyDown:G,onKeyUp:function(e){8===e.keyCode&&F.length>0&&F.length<=C[v].length&&b&&m>0&&q>1&&e.target.value.length<=b.length+1&&u&&i((function(e){return e.slice(0,e.length-1)})),0===F.length&&i("")},disabled:D&&!0,autoFocus:!0}):Object(a.jsx)("input",{type:"text",id:"input",value:F,onChange:z,className:"input mt-5",onKeyDown:G,disabled:D&&!0,autoFocus:!0}),D&&Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("button",{onClick:function(){return window.location.reload()},id:"button",className:"btn btn-primary mt-5 ",children:"Restart"})})]})})}var x=n(23),g=n.n(x),m=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://type.fit/api/quotes");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=n(24),y=n.n(N);n(56);function S(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),u=Object(j.a)(r,2),i=u[0],b=u[1];Object(c.useEffect)((function(){d()}),[]);var d=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,n=t.data,a=Math.floor(Math.random()*n.length),console.log(n[a].text),s(n[a].text);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(O,{}),!i&&Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("button",{onClick:function(){return b(!0)},className:"btn btn-primary",id:"button",children:["Click To Start",Object(a.jsx)(y.a,{})]})}),i&&void 0!==n&&Object(a.jsx)("div",{className:"master",children:Object(a.jsx)(p,{quote:n,setQuote:s})})]})}n(57);u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.5648f57a.chunk.js.map