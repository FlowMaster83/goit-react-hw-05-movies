"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{9472:function(n,r,e){e.r(r),e.d(r,{default:function(){return h},imgUrl:function(){return x}});var t=e(5861),a=e(9439),o=e(7757),c=e.n(o),i=e(2791),u=e(409),s=e(7398),p=e(155),l=e(184),d=function(n){var r=n.page,e=n.totalPages,t=n.handlePageChange;return 1===e?null:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",margin:10,alignItems:"space-between"},children:[(0,l.jsx)(p.zx,{style:{marginRight:10},disabled:1===r,onClick:function(){return t(r-1)},children:"\u2039 Previous"}),(0,l.jsx)(p.zx,{disabled:r===e,onClick:function(){return t(r+1)},children:"Next \u203a"})]})},f=e(8941),x="https://image.tmdb.org/t/p/w500",h=function(){var n=(0,i.useState)([]),r=(0,a.Z)(n,2),e=r[0],o=r[1],p=(0,i.useState)(1),h=(0,a.Z)(p,2),g=h[0],v=h[1],m=(0,i.useCallback)((function(n){v(n)}),[v]);return(0,i.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.wr)(g);case 3:r=n.sent,e=r.results,o(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log({error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]),(0,l.jsxs)("main",{children:[(0,l.jsx)(s.h4,{children:"Trending Today"}),(0,l.jsxs)(s.W2,{children:[(0,l.jsx)(s.aV,{children:e.map((function(n){var r=n.title,e=n.id,t=n.poster_path;return(0,l.jsx)(s.Zb,{children:(0,l.jsxs)(s.rU,{to:"movies/".concat(e),children:[(0,l.jsx)(s.Ei,{src:t?x+t:f,alt:r}),(0,l.jsx)(s.lU,{children:(0,l.jsx)(s.xv,{children:r})})]})},e)}))}),(0,l.jsx)(d,{page:g,totalPages:e.total_pages,handlePageChange:m})]})]})}},7398:function(n,r,e){e.d(r,{Ei:function(){return v},W2:function(){return x},Zb:function(){return h},aV:function(){return b},h4:function(){return Z},lU:function(){return m},rU:function(){return g},xv:function(){return w}});var t,a,o,c,i,u,s,p,l=e(168),d=e(6444),f=e(1087),x=d.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n"]))),h=d.ZP.li(a||(a=(0,l.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 18px;\n  width: 100%;\n  max-width: 200px;\n  margin: 0.5em;\n  border-radius: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);\n  }\n"]))),g=(0,d.ZP)(f.OL)(o||(o=(0,l.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),v=d.ZP.img(c||(c=(0,l.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),m=d.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 10px;\n  margin: 0px;\n  text-decoration: none;\n"]))),w=d.ZP.p(u||(u=(0,l.Z)(["\n  font-size: 10px;\n"]))),b=d.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  justify-content: center;\n"]))),Z=d.ZP.h1(p||(p=(0,l.Z)(["\n  color: orangered;\n  margin: 1rem 0px;\n  display: block;\n"])))},155:function(n,r,e){e.d(r,{II:function(){return l},h4:function(){return p},im:function(){return s},zx:function(){return d}});var t,a,o,c,i=e(168),u=e(6444),s=u.ZP.form(t||(t=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),p=u.ZP.h1(a||(a=(0,i.Z)(["\n  color: orangered;\n  margin: 1rem 0px;\n  display: block;\n"]))),l=u.ZP.input(o||(o=(0,i.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 10px;\n  border: orangered 1px solid;\n  font: inherit;\n  margin-right: 10px;\n"]))),d=u.ZP.button(c||(c=(0,i.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: black;\n\n  &:hover {\n    color: white;\n    background-color: orangered;\n  }\n\n  &:disabled {\n    /* color: gray; */\n    background-color: gray;\n    cursor: not-allowed;\n  }\n"])))},409:function(n,r,e){e.d(r,{TP:function(){return p},jP:function(){return d},wr:function(){return u},z1:function(){return s},zv:function(){return l}});var t=e(5861),a=e(7757),o=e.n(a),c=e(1243),i="917494deecf020090f46312c9c574dbd";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="trending/movie/day?api_key=".concat(i,"&language=en-US&page=").concat(r),n.next=4,c.Z.get(e);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r),n.next=4,c.Z.get(e);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="movie/".concat(r,"?api_key=").concat(i,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"),n.next=4,c.Z.get(e);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}()},8941:function(n,r,e){n.exports=e.p+"static/media/no-image-main.e88896ea469fc2d7de7f.png"}}]);
//# sourceMappingURL=472.201107f2.chunk.js.map