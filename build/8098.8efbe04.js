"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8098],{28098:(t,n,e)=>{e.d(n,{Nb1:()=>Pn.Z,LLu:()=>m,F5q:()=>y,$0Z:()=>Dn.ZP,Dts:()=>Vn.Z,WQY:()=>qn.Z,qpX:()=>Un,u93:()=>Rn,tFB:()=>In.Z,YY7:()=>$n.ZP,OvA:()=>Xn.Z,dCK:()=>jn.Z,zgE:()=>Qn.Z,fGX:()=>Jn.Z,$m7:()=>Kn.Z,c_6:()=>Gn.Z,fxm:()=>Wn.Z,FdL:()=>te.Z,ak_:()=>te.s,SxZ:()=>ne.Z,eA_:()=>ee.ZP,jsv:()=>ee.cD,iJ:()=>ee.RN,JHv:()=>An.interpolateHcl,jvg:()=>Tn.Z,Fp7:()=>r.Z,VV$:()=>i.Z,ve8:()=>Fn,tiA:()=>En,BYU:()=>Sn.Z,PKp:()=>kn.Z,Xf:()=>Cn.Z,K2I:()=>Nn,Ys:()=>Mn,rr1:()=>ae.rr,i$Z:()=>ce.i$,y2j:()=>se.y2,WQD:()=>ue.WQ,U8T:()=>re.A,Z_i:()=>oe.Z_,Ox9:()=>se.Ox,F0B:()=>le.F0,LqH:()=>se.Lq,S1K:()=>ie.E,Zyz:()=>se.Zy,Igq:()=>se.Ig,YDX:()=>se.YD,EFj:()=>se.EF});var r=e(53856),i=e(93571);function o(t){return t}var u=1,a=2,s=3,l=4,c=1e-6;function f(t){return"translate("+t+",0)"}function h(t){return"translate(0,"+t+")"}function p(t){return n=>+t(n)}function _(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function d(){return!this.__axis}function v(t,n){var e=[],r=null,i=null,v=6,y=6,m=3,g="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,w=t===u||t===l?-1:1,x=t===l||t===a?"x":"y",A=t===u||t===s?f:h;function b(f){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,b=null==i?n.tickFormat?n.tickFormat.apply(n,e):o:i,Z=Math.max(v,0)+m,k=n.range(),E=+k[0]+g,S=+k[k.length-1]+g,C=(n.bandwidth?_:p)(n.copy(),g),N=f.selection?f.selection():f,M=N.selectAll(".domain").data([null]),P=N.selectAll(".tick").data(h,n).order(),T=P.exit(),O=P.enter().append("g").attr("class","tick"),B=P.select("line"),L=P.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),P=P.merge(O),B=B.merge(O.append("line").attr("stroke","currentColor").attr(x+"2",w*v)),L=L.merge(O.append("text").attr("fill","currentColor").attr(x,w*Z).attr("dy",t===u?"0em":t===s?"0.71em":"0.32em")),f!==N&&(M=M.transition(f),P=P.transition(f),B=B.transition(f),L=L.transition(f),T=T.transition(f).attr("opacity",c).attr("transform",(function(t){return isFinite(t=C(t))?A(t+g):this.getAttribute("transform")})),O.attr("opacity",c).attr("transform",(function(t){var n=this.parentNode.__axis;return A((n&&isFinite(n=n(t))?n:C(t))+g)}))),T.remove(),M.attr("d",t===l||t===a?y?"M"+w*y+","+E+"H"+g+"V"+S+"H"+w*y:"M"+g+","+E+"V"+S:y?"M"+E+","+w*y+"V"+g+"H"+S+"V"+w*y:"M"+E+","+g+"H"+S),P.attr("opacity",1).attr("transform",(function(t){return A(C(t)+g)})),B.attr(x+"2",w*v),L.attr(x,w*Z).text(b),N.filter(d).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===a?"start":t===l?"end":"middle"),N.each((function(){this.__axis=C}))}return b.scale=function(t){return arguments.length?(n=t,b):n},b.ticks=function(){return e=Array.from(arguments),b},b.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),b):e.slice()},b.tickValues=function(t){return arguments.length?(r=null==t?null:Array.from(t),b):r&&r.slice()},b.tickFormat=function(t){return arguments.length?(i=t,b):i},b.tickSize=function(t){return arguments.length?(v=y=+t,b):v},b.tickSizeInner=function(t){return arguments.length?(v=+t,b):v},b.tickSizeOuter=function(t){return arguments.length?(y=+t,b):y},b.tickPadding=function(t){return arguments.length?(m=+t,b):m},b.offset=function(t){return arguments.length?(g=+t,b):g},b}function y(t){return v(u,t)}function m(t){return v(s,t)}function g(){}function w(t){return null==t?g:function(){return this.querySelector(t)}}function x(){return[]}function A(t){return null==t?x:function(){return this.querySelectorAll(t)}}function b(t){return function(){return this.matches(t)}}function Z(t){return function(n){return n.matches(t)}}var k=Array.prototype.find;function E(){return this.firstElementChild}var S=Array.prototype.filter;function C(){return Array.from(this.children)}function N(t){return new Array(t.length)}function M(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function P(t,n,e,r,i,o){for(var u,a=0,s=n.length,l=o.length;a<l;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new M(t,o[a]);for(;a<s;++a)(u=n[a])&&(i[a]=u)}function T(t,n,e,r,i,o,u){var a,s,l,c=new Map,f=n.length,h=o.length,p=new Array(f);for(a=0;a<f;++a)(s=n[a])&&(p[a]=l=u.call(s,s.__data__,a,n)+"",c.has(l)?i[a]=s:c.set(l,s));for(a=0;a<h;++a)l=u.call(t,o[a],a,o)+"",(s=c.get(l))?(r[a]=s,s.__data__=o[a],c.delete(l)):e[a]=new M(t,o[a]);for(a=0;a<f;++a)(s=n[a])&&c.get(p[a])===s&&(i[a]=s)}function O(t){return t.__data__}function B(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function L(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}M.prototype={constructor:M,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var Y="http://www.w3.org/1999/xhtml";const z={svg:"http://www.w3.org/2000/svg",xhtml:Y,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function F(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),z.hasOwnProperty(n)?{space:z[n],local:t}:t}function V(t){return function(){this.removeAttribute(t)}}function q(t){return function(){this.removeAttributeNS(t.space,t.local)}}function D(t,n){return function(){this.setAttribute(t,n)}}function H(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function U(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function R(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function I(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function X(t){return function(){this.style.removeProperty(t)}}function j(t,n,e){return function(){this.style.setProperty(t,n,e)}}function $(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function J(t,n){return t.style.getPropertyValue(n)||I(t).getComputedStyle(t,null).getPropertyValue(n)}function K(t){return function(){delete this[t]}}function Q(t,n){return function(){this[t]=n}}function W(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function G(t){return t.trim().split(/^|\s+/)}function tt(t){return t.classList||new nt(t)}function nt(t){this._node=t,this._names=G(t.getAttribute("class")||"")}function et(t,n){for(var e=tt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function rt(t,n){for(var e=tt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function it(t){return function(){et(this,t)}}function ot(t){return function(){rt(this,t)}}function ut(t,n){return function(){(n.apply(this,arguments)?et:rt)(this,t)}}function at(){this.textContent=""}function st(t){return function(){this.textContent=t}}function lt(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function ct(){this.innerHTML=""}function ft(t){return function(){this.innerHTML=t}}function ht(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function pt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===Y&&n.documentElement.namespaceURI===Y?n.createElement(t):n.createElementNS(e,t)}}function vt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function yt(t){var n=F(t);return(n.local?vt:dt)(n)}function mt(){return null}function gt(){var t=this.parentNode;t&&t.removeChild(this)}function wt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function xt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function At(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function bt(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var u=0,a=i.length;u<a;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Zt(t,n,e){var r=I(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function kt(t,n){return function(){return Zt(this,t,n)}}function Et(t,n){return function(){return Zt(this,t,n.apply(this,arguments))}}nt.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var St=[null];function Ct(t,n){this._groups=t,this._parents=n}function Nt(){return new Ct([[document.documentElement]],St)}Ct.prototype=Nt.prototype={constructor:Ct,select:function(t){"function"!=typeof t&&(t=w(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],s=a.length,l=r[i]=new Array(s),c=0;c<s;++c)(o=a[c])&&(u=t.call(o,o.__data__,c,a))&&("__data__"in o&&(u.__data__=o.__data__),l[c]=u);return new Ct(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){return null==(n=t.apply(this,arguments))?[]:Array.isArray(n)?n:Array.from(n);var n}}(t):A(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],s=a.length,l=0;l<s;++l)(u=a[l])&&(r.push(t.call(u,u.__data__,l,a)),i.push(u));return new Ct(r,i)},selectChild:function(t){return this.select(null==t?E:function(t){return function(){return k.call(this.children,t)}}("function"==typeof t?t:Z(t)))},selectChildren:function(t){return this.selectAll(null==t?C:function(t){return function(){return S.call(this.children,t)}}("function"==typeof t?t:Z(t)))},filter:function(t){"function"!=typeof t&&(t=b(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,s=r[i]=[],l=0;l<a;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&s.push(o);return new Ct(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,O);var e,r=n?T:P,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,a=new Array(u),s=new Array(u),l=new Array(u),c=0;c<u;++c){var f=i[c],h=o[c],p=h.length,_=B(t.call(f,f&&f.__data__,c,i)),d=_.length,v=s[c]=new Array(d),y=a[c]=new Array(d);r(f,h,v,y,l[c]=new Array(p),_,n);for(var m,g,w=0,x=0;w<d;++w)if(m=v[w]){for(w>=x&&(x=w+1);!(g=y[x])&&++x<d;);m._next=g||null}}return(a=new Ct(a,i))._enter=s,a._exit=l,a},enter:function(){return new Ct(this._enter||this._groups.map(N),this._parents)},exit:function(){return new Ct(this._exit||this._groups.map(N),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),a=new Array(i),s=0;s<u;++s)for(var l,c=e[s],f=r[s],h=c.length,p=a[s]=new Array(h),_=0;_<h;++_)(l=c[_]||f[_])&&(p[_]=l);for(;s<i;++s)a[s]=e[s];return new Ct(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=L);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,l=i[o]=new Array(s),c=0;c<s;++c)(u=a[c])&&(l[c]=u);l.sort(n)}return new Ct(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=F(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?q:V:"function"==typeof n?e.local?R:U:e.local?H:D)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?X:"function"==typeof n?$:j)(t,n,null==e?"":e)):J(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?K:"function"==typeof n?W:Q)(t,n)):this.node()[t]},classed:function(t,n){var e=G(t+"");if(arguments.length<2){for(var r=tt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?ut:n?it:ot)(e,n))},text:function(t){return arguments.length?this.each(null==t?at:("function"==typeof t?lt:st)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?ct:("function"==typeof t?ht:ft)(t)):this.node().innerHTML},raise:function(){return this.each(pt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:yt(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:yt(t),r=null==n?mt:"function"==typeof n?n:w(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(gt)},clone:function(t){return this.select(t?xt:wt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?bt:At,r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var s,l=0,c=a.length;l<c;++l)for(r=0,s=a[l];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?Et:kt)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}};const Mt=Nt;var Pt=e(65043),Tt=e(11647);function Ot(t,n,e){var r=new Tt.B7;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}var Bt=(0,Pt.Z)("start","end","cancel","interrupt"),Lt=[],Yt=0,zt=3;function Ft(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(s){var l,c,f,h;if(1!==e.state)return a();for(l in i)if((h=i[l]).name===e.name){if(h.state===zt)return Ot(o);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[l]):+l<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[l])}if(Ot((function(){e.state===zt&&(e.state=4,e.timer.restart(u,e.delay,e.time),u(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=zt,r=new Array(f=e.tween.length),l=0,c=-1;l<f;++l)(h=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++c]=h);r.length=c+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(a),e.state=5,1),o=-1,u=r.length;++o<u;)r[o].call(t,i);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),a())}function a(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=(0,Tt.HT)((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:Bt,tween:Lt,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Yt})}function Vt(t,n){var e=Dt(t,n);if(e.state>Yt)throw new Error("too late; already scheduled");return e}function qt(t,n){var e=Dt(t,n);if(e.state>zt)throw new Error("too late; already running");return e}function Dt(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}var Ht=e(52087);function Ut(t,n){var e,r;return function(){var i=qt(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}function Rt(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=qt(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=a;break}s===l&&i.push(a)}o.tween=i}}function It(t,n,e){var r=t._id;return t.each((function(){var t=qt(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Dt(t,r).value[n]}}var Xt=e(12738),jt=e(75381),$t=e(32278),Jt=e(39493);function Kt(t,n){var e;return("number"==typeof n?jt.Z:n instanceof Xt.ZP?$t.ZP:(e=(0,Xt.ZP)(n))?(n=e,$t.ZP):Jt.Z)(t,n)}function Qt(t){return function(){this.removeAttribute(t)}}function Wt(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Gt(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttribute(t);return u===o?null:u===r?i:i=n(r=u,e)}}function tn(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttributeNS(t.space,t.local);return u===o?null:u===r?i:i=n(r=u,e)}}function nn(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttribute(t))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttribute(t)}}function en(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttributeNS(t.space,t.local))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttributeNS(t.space,t.local)}}function rn(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}function on(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i}function un(t,n){return function(){Vt(this,t).delay=+n.apply(this,arguments)}}function an(t,n){return n=+n,function(){Vt(this,t).delay=n}}function sn(t,n){return function(){qt(this,t).duration=+n.apply(this,arguments)}}function ln(t,n){return n=+n,function(){qt(this,t).duration=n}}var cn=Mt.prototype.constructor;function fn(t){return function(){this.style.removeProperty(t)}}var hn=0;function pn(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function _n(){return++hn}var dn=Mt.prototype;pn.prototype=function(t){return Mt().transition(t)}.prototype={constructor:pn,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=w(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,s,l=r[u],c=l.length,f=o[u]=new Array(c),h=0;h<c;++h)(a=l[h])&&(s=t.call(a,a.__data__,h,l))&&("__data__"in a&&(s.__data__=a.__data__),f[h]=s,Ft(f[h],n,e,h,f,Dt(a,e)));return new pn(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=A(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var s,l=r[a],c=l.length,f=0;f<c;++f)if(s=l[f]){for(var h,p=t.call(s,s.__data__,f,l),_=Dt(s,e),d=0,v=p.length;d<v;++d)(h=p[d])&&Ft(h,n,e,d,p,_);o.push(p),u.push(s)}return new pn(o,u,n,e)},selectChild:dn.selectChild,selectChildren:dn.selectChildren,filter:function(t){"function"!=typeof t&&(t=b(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,s=r[i]=[],l=0;l<a;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&s.push(o);return new pn(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,l=n[a],c=e[a],f=l.length,h=u[a]=new Array(f),p=0;p<f;++p)(s=l[p]||c[p])&&(h[p]=s);for(;a<r;++a)u[a]=n[a];return new pn(u,this._parents,this._name,this._id)},selection:function(){return new cn(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=_n(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)if(u=a[l]){var c=Dt(u,n);Ft(u,t,e,l,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new pn(r,this._parents,t,e)},call:dn.call,nodes:dn.nodes,node:dn.node,size:dn.size,empty:dn.empty,each:dn.each,on:function(t,n){var e=this._id;return arguments.length<2?Dt(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Vt:qt;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}(e,t,n))},attr:function(t,n){var e=F(t),r="transform"===e?Ht.w:Kt;return this.attrTween(t,"function"==typeof n?(e.local?en:nn)(e,r,It(this,"attr."+t,n)):null==n?(e.local?Wt:Qt)(e):(e.local?tn:Gt)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=F(t);return this.tween(e,(r.local?rn:on)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Ht.Y:Kt;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=J(this,t),u=(this.style.removeProperty(t),J(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}(t,r)).on("end.style."+t,fn(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var u=J(this,t),a=e(this),s=a+"";return null==a&&(this.style.removeProperty(t),s=a=J(this,t)),u===s?null:u===r&&s===i?o:(i=s,o=n(r=u,a))}}(t,r,It(this,"style."+t,n))).each(function(t,n){var e,r,i,o,u="style."+n,a="end."+u;return function(){var s=qt(this,t),l=s.on,c=null==s.value[u]?o||(o=fn(n)):void 0;l===e&&i===c||(r=(e=l).copy()).on(a,i=c),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var u=J(this,t);return u===o?null:u===r?i:i=n(r=u,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(It(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Dt(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Ut:Rt)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?un:an)(n,t)):Dt(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?sn:ln)(n,t)):Dt(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){qt(this,t).ease=n}}(n,t)):Dt(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;qt(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,u){var a={value:u},s={value:function(){0==--i&&o()}};e.each((function(){var e=qt(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:dn[Symbol.iterator]};var vn={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function yn(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}Mt.prototype.interrupt=function(t){return this.each((function(){!function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}(this,t)}))},Mt.prototype.transition=function(t){var n,e;t instanceof pn?(n=t._id,t=t._name):(n=_n(),(e=vn).time=(0,Tt.zO)(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)(u=a[l])&&Ft(u,t,n,l,a,e||yn(u,n));return new pn(r,this._parents,t,n)};const{abs:mn,max:gn,min:wn}=Math;function xn(t){return{type:t}}["w","e"].map(xn),["n","s"].map(xn),["n","w","e","s","nw","ne","sw","se"].map(xn);var An=e(69004),bn=e(53353),Zn=e(42287),kn=e(81406);function En(){var t,n,e=(0,kn.Z)().unknown(void 0),r=e.domain,i=e.range,o=0,u=1,a=!1,s=0,l=0,c=.5;function f(){var e=r().length,f=u<o,h=f?u:o,p=f?o:u;t=(p-h)/Math.max(1,e-s+2*l),a&&(t=Math.floor(t)),h+=(p-h-t*(e-s))*c,n=t*(1-s),a&&(h=Math.round(h),n=Math.round(n));var _=(0,bn.Z)(e).map((function(n){return h+t*n}));return i(f?_.reverse():_)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),f()):r()},e.range=function(t){return arguments.length?([o,u]=t,o=+o,u=+u,f()):[o,u]},e.rangeRound=function(t){return[o,u]=t,o=+o,u=+u,a=!0,f()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,f()):a},e.padding=function(t){return arguments.length?(s=Math.min(1,l=+t),f()):s},e.paddingInner=function(t){return arguments.length?(s=Math.min(1,t),f()):s},e.paddingOuter=function(t){return arguments.length?(l=+t,f()):l},e.align=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),f()):c},e.copy=function(){return En(r(),[o,u]).round(a).paddingInner(s).paddingOuter(l).align(c)},Zn.o.apply(f(),arguments)}var Sn=e(29387),Cn=e(61941);const Nn=function(t){for(var n=new Array(10),e=0;e<10;)n[e]="#"+t.slice(6*e,6*++e);return n}("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function Mn(t){return"string"==typeof t?new Ct([[document.querySelector(t)]],[document.documentElement]):new Ct([[t]],St)}var Pn=e(87826),Tn=e(40652),On=e(89555),Bn=e(47855);function Ln(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Yn(t){return t}var zn=e(90596);function Fn(){var t=Yn,n=Ln,e=null,r=(0,Bn.Z)(0),i=(0,Bn.Z)(zn.BZ),o=(0,Bn.Z)(0);function u(u){var a,s,l,c,f,h=(u=(0,On.Z)(u)).length,p=0,_=new Array(h),d=new Array(h),v=+r.apply(this,arguments),y=Math.min(zn.BZ,Math.max(-zn.BZ,i.apply(this,arguments)-v)),m=Math.min(Math.abs(y)/h,o.apply(this,arguments)),g=m*(y<0?-1:1);for(a=0;a<h;++a)(f=d[_[a]=a]=+t(u[a],a,u))>0&&(p+=f);for(null!=n?_.sort((function(t,e){return n(d[t],d[e])})):null!=e&&_.sort((function(t,n){return e(u[t],u[n])})),a=0,l=p?(y-h*g)/p:0;a<h;++a,v=c)s=_[a],c=v+((f=d[s])>0?f*l:0)+g,d[s]={data:u[s],index:a,value:f,startAngle:v,endAngle:c,padAngle:m};return d}return u.value=function(n){return arguments.length?(t="function"==typeof n?n:(0,Bn.Z)(+n),u):t},u.sortValues=function(t){return arguments.length?(n=t,e=null,u):n},u.sort=function(t){return arguments.length?(e=t,n=null,u):e},u.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:(0,Bn.Z)(+t),u):r},u.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:(0,Bn.Z)(+t),u):i},u.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:(0,Bn.Z)(+t),u):o},u}var Vn=e(88973),qn=e(74372),Dn=e(73021);class Hn{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n)}this._x0=t,this._y0=n}}function Un(t){return new Hn(t,!0)}function Rn(t){return new Hn(t,!1)}var In=e(32830),Xn=e(91390),jn=e(41599),$n=e(88800),Jn=e(7391),Kn=e(63703),Qn=e(48917),Wn=e(29458),Gn=e(4224),te=e(78509),ne=e(28946),ee=e(21468),re=e(17540),ie=e(58887),oe=e(5957),ue=e(75458),ae=e(6054),se=e(24645),le=e(43155),ce=e(94031);function fe(t,n,e){this.k=t,this.x=n,this.y=e}fe.prototype={constructor:fe,scale:function(t){return 1===t?this:new fe(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new fe(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new fe(1,0,0),fe.prototype}}]);
//# sourceMappingURL=8098.8efbe04.js.map