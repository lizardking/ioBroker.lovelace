"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8776],{8776:function(n,t,e){e.d(t,{yt:function(){return a}});var r=e(99312),s=e(81043),u=(e(51467),e(85472),e(46798),e(9849),e(90126),e(63864)),o=e(41682),a=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,u.I)(t.config.version,2021,2,4)){n.next=2;break}return n.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/addons",method:"get"}));case 2:return n.t0=o.rY,n.next=5,t.callApi("GET","hassio/addons");case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},41682:function(n,t,e){e.d(t,{js:function(){return i},rY:function(){return c},yd:function(){return d},yz:function(){return f}});var r,s=e(99312),u=e(81043),o=e(76775),a=(e(51358),e(46798),e(78399),e(5239),e(56086),e(47884),e(81912),e(64584),e(41483),e(12367),e(9454),e(98490),e(40271),e(60163),e(63864)),c=function(n){return n.data},i=function(n){return"object"===(0,o.Z)(n)?"object"===(0,o.Z)(n.body)?n.body.message||"Unknown error, see supervisor logs":n.body||n.message||"Unknown error, see supervisor logs":n},p=new Set([502,503,504]),f=function(n){return!!(n&&n.status_code&&p.has(n.status_code))||!(!n||!n.message||!n.message.includes("ERR_CONNECTION_CLOSED")&&!n.message.includes("ERR_CONNECTION_RESET"))},d=32143==e.j?(r=(0,u.Z)((0,s.Z)().mark((function n(t,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,a.I)(t.config.version,2021,2,4)){n.next=2;break}return n.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/".concat(e,"/stats"),method:"get"}));case 2:return n.t0=c,n.next=5,t.callApi("GET","hassio/".concat(e,"/stats"));case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)}))),function(n,t){return r.apply(this,arguments)}):null}}]);
//# sourceMappingURL=8776.aEzjHLab91w.js.map