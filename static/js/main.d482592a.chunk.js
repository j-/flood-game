(this["webpackJsonpflood-game"]=this["webpackJsonpflood-game"]||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},32:function(e,t){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n(7),c=n(5),u=n(12),i=n(14),l=n.n(i),s=function(e){return"RESET"===e.type},f=function(e){return"START_GAME"===e.type},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now().toString();return{type:"START_GAME",data:{seed:e}}},v=function(e){return"FLOOD"===e.type},d=function(e){return"UNDO_MOVE"===e.type},E=n(19),b=n(18);!function(e){e[e.RED=0]="RED",e[e.ORANGE=1]="ORANGE",e[e.YELLOW=2]="YELLOW",e[e.GREEN=3]="GREEN",e[e.BLUE=4]="BLUE",e[e.PURPLE=5]="PURPLE"}(r||(r={}));var h=[r.RED,r.ORANGE,r.YELLOW,r.GREEN,r.BLUE,r.PURPLE],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random,t=Math.floor(6*e()),n=h[t];return n},O=function(e){return e[0].length},g=function(e){return e.length},G=function(e,t,n){return e[n][t]},N=function(e,t,n,r){e[n][t]=r},R=function(e,t){for(var n=[],r=0;r<t;r++){for(var a=[],o=0;o<e;o++)a.push(0);n.push(a)}return n},C=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random,n=O(e),r=g(e),a=0;a<r;a++)for(var o=0;o<n;o++){var c=p(t);N(e,o,a,c)}},k=function(e){for(var t=O(e),n=g(e),r=G(e,0,0),a=0;a<n;a++)for(var o=0;o<t;o++){if(G(e,o,a)!==r)return!1}return!0},y=function(e,t){var n=function(e){for(var t=[],n=g(e),r=0;r<n;r++)t.push(Object(b.a)(e[r]));return t}(e),r=G(e,0,0);if(r===t)return n;var a=O(e),o=g(e),c=[[0,0]];for(N(n,0,0,t);c.length;){var u=c.shift(),i=Object(E.a)(u,2),l=i[0],s=i[1];if(l+1<a)G(n,l+1,s)===r&&(N(n,l+1,s,t),c.push([l+1,s]));if(s+1<o)G(n,l,s+1)===r&&(N(n,l,s+1,t),c.push([l,s+1]));if(l>0)G(n,l-1,s)===r&&(N(n,l-1,s,t),c.push([l-1,s]));if(s>0)G(n,l,s-1)===r&&(N(n,l,s-1,t),c.push([l,s-1]))}return n},j={seed:"",lastBoard:null,board:null,moves:0,isGameOver:!1,isGameWon:!1,currentColor:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;if(s(t))return j;if(f(t)){var n=t.data.seed,r=R(14,14);C(r,l()(n));var a=G(r,0,0);return{seed:n,board:r,currentColor:a,lastBoard:null,moves:0,isGameOver:!1,isGameWon:!1}}if(v(t)){var o=t.data.color,c=e.board,i=e.moves,m=e.isGameOver,E=e.isGameWon,b=e.currentColor;if(!c)return e;if(m)return e;if(b===o)return e;var h=y(c,o),p=i+1;return k(h)?(m=!0,E=!0,c=null):p>=25&&(m=!0),Object(u.a)({},e,{lastBoard:c,board:h,moves:p,currentColor:o,isGameOver:m,isGameWon:E})}if(d(t)){var O=e.lastBoard,g=e.moves;return O?Object(u.a)({},e,{lastBoard:null,board:O,moves:g-1,currentColor:G(O,0,0)}):e}return e},w=function(e){return e.seed},B=function(e){return e.moves},D=function(e){return e.board},A=function(e){return e.isGameOver},U=function(e){return e.isGameWon},W=function(e){return null!==e.lastBoard},M=n(15),S=n(17),T=n(2),x=a.forwardRef((function(e,t){for(var n=e.size,r=void 0===n?35:n,o=e.width,c=e.height,u=e.onClick,i=o*r,l=c*r,s="0 0 ".concat(i," ").concat(l),f=[],m=function(e){for(var t=function(t){f.push(a.createElement("rect",{key:t+","+e,id:t+","+e,x:t*r-.5,y:e*r-.5,width:r+1,height:r+1,onClick:function(){return u(t,e)},onTouchStart:function(){return u(t,e)}}))},n=0;n<o;n++)t(n)},v=0;v<c;v++)m(v);return a.createElement("svg",{ref:t,width:i,height:l,viewBox:s,preserveAspectRatio:"none"},f)})),P=(n(39),function(e){var t=e.board,n=e.onClick,r=a.useRef(null),o=O(t),c=g(t);return a.useEffect((function(){if(r.current)for(var e=r.current,n=0;n<o;n++)for(var a=0;a<c;a++){var u=G(t,n,a);e.getElementById(n+","+a).dataset.color=u.toString()}}),[t,o,c]),a.createElement("div",{className:"Grid d-flex align-items-center"},a.createElement(x,{ref:r,width:o,height:c,onClick:function(e,r){n(G(t,e,r))}}))}),Y=(n(40),function(){var e=Object(T.b)(),t=Object(T.c)(w),n=Object(T.c)(D),r=Object(T.c)(B),o=Object(T.c)(A),c=Object(T.c)(U),u=Object(T.c)(W),i=a.useCallback((function(t){t.preventDefault(),e({type:"UNDO_MOVE"})}),[e]),l=a.useCallback((function(n){n.preventDefault(),e(m(t))}),[e,t]),s=a.useCallback((function(t){t.preventDefault(),e(m())}),[e]),f=a.useCallback((function(t){e(function(e){return{type:"FLOOD",data:{color:e}}}(t))}),[e]);return n?a.createElement("div",{className:"Game"},a.createElement("nav",{className:"navbar navbar-light bg-light"},a.createElement("button",{className:"btn btn-dark mr-auto",type:"button",onClick:s},"New game"),a.createElement("button",{className:"btn btn-light ml-1",type:"button",disabled:!u,onClick:i},"Undo move"),a.createElement("button",{className:"btn btn-light ml-1",type:"button",onClick:l},"Restart")),a.createElement("div",{className:"mt-4 mb-4"},a.createElement(P,{board:n,onClick:f})),a.createElement("div",{className:"d-flex flex-column align-items-center"},a.createElement("span",{className:"display-4"},r," / 25"),o&&a.createElement("strong",{className:"mr-3"},"Game over"),c&&a.createElement("strong",{className:"mr-3"},"You win"))):null}),_=(n(41),function(){return a.createElement("div",{className:"App container pt-5 pb-5"},a.createElement(Y,null))}),F=(n(42),n(43),Object(c.createStore)(L,Object(M.composeWithDevTools)(Object(c.applyMiddleware)(S.a))));F.dispatch(m()),Object(o.render)(a.createElement(T.a,{store:F},a.createElement(_,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d482592a.chunk.js.map