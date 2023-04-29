(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function L(){}function St(n,e){for(const t in e)n[t]=e[t];return n}function qr(n){return n()}function yn(){return Object.create(null)}function ie(n){n.forEach(qr)}function At(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function qs(n){return Object.keys(n).length===0}function Gr(n,...e){if(n==null)return L;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function K(n,e,t){n.$$.on_destroy.push(Gr(e,t))}function Gs(n,e,t,r){if(n){const s=Kr(n,e,t,r);return n[0](s)}}function Kr(n,e,t,r){return n[1]&&r?St(t.ctx.slice(),n[1](r(e))):t.ctx}function Ks(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)i[l]=e.dirty[l]|s[l];return i}return e.dirty|s}return e.dirty}function Js(n,e,t,r,s,i){if(s){const o=Kr(e,t,r,i);n.p(o,s)}}function Ys(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function x(n,e,t){return n.set(t),e}function ue(n){return n&&At(n.destroy)?n.destroy:L}function h(n,e){n.appendChild(e)}function A(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function ae(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function $(n){return document.createTextNode(n)}function C(){return $(" ")}function ce(){return $("")}function F(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function Xs(n){return function(e){e.target===this&&n.call(this,e)}}function p(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function xs(n){return Array.from(n.childNodes)}function Q(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function gt(n,e){n.value=e??""}function j(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}let lt;function Qs(){if(lt===void 0){lt=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{lt=!0}}return lt}function Zs(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const r=b("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const s=Qs();let i;return s?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=F(window,"message",o=>{o.source===r.contentWindow&&e()})):(r.src="about:blank",r.onload=()=>{i=F(r.contentWindow,"resize",e)}),h(n,r),()=>{(s||i&&r.contentWindow)&&i(),S(r)}}function z(n,e,t){n.classList[t?"add":"remove"](e)}function ei(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,r,e),s}function Ve(n,e){return new n(e)}let xe;function Ye(n){xe=n}function Ct(){if(!xe)throw new Error("Function called outside component initialization");return xe}function Ce(n){Ct().$$.on_mount.push(n)}function ti(n){Ct().$$.after_update.push(n)}function ni(n){Ct().$$.on_destroy.push(n)}function ri(){const n=Ct();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const i=ei(e,t,{cancelable:r});return s.slice().forEach(o=>{o.call(n,i)}),!i.defaultPrevented}return!0}}function Kt(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Fe=[],Qe=[],ft=[],Jt=[],Jr=Promise.resolve();let Yt=!1;function Yr(){Yt||(Yt=!0,Jr.then(xr))}function Xr(){return Yr(),Jr}function bt(n){ft.push(n)}function si(n){Jt.push(n)}const $t=new Set;let $e=0;function xr(){if($e!==0)return;const n=xe;do{try{for(;$e<Fe.length;){const e=Fe[$e];$e++,Ye(e),ii(e.$$)}}catch(e){throw Fe.length=0,$e=0,e}for(Ye(null),Fe.length=0,$e=0;Qe.length;)Qe.pop()();for(let e=0;e<ft.length;e+=1){const t=ft[e];$t.has(t)||($t.add(t),t())}ft.length=0}while(Fe.length);for(;Jt.length;)Jt.pop()();Yt=!1,$t.clear(),Ye(n)}function ii(n){if(n.fragment!==null){n.update(),ie(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(bt)}}const dt=new Set;let De;function ee(){De={r:0,c:[],p:De}}function te(){De.r||ie(De.c),De=De.p}function O(n,e){n&&n.i&&(dt.delete(n),n.i(e))}function N(n,e,t,r){if(n&&n.o){if(dt.has(n))return;dt.add(n),De.c.push(()=>{dt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function sn(n,e){const t={},r={},s={$$scope:1};let i=n.length;for(;i--;){const o=n[i],l=e[i];if(l){for(const a in o)a in l||(r[a]=1);for(const a in l)s[a]||(t[a]=l[a],s[a]=1);n[i]=l}else for(const a in o)s[a]=1}for(const o in r)o in t||(t[o]=void 0);return t}function on(n){return typeof n=="object"&&n!==null?n:{}}function oi(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function q(n){n&&n.c()}function W(n,e,t,r){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),r||bt(()=>{const o=n.$$.on_mount.map(qr).filter(At);n.$$.on_destroy?n.$$.on_destroy.push(...o):ie(o),n.$$.on_mount=[]}),i.forEach(bt)}function V(n,e){const t=n.$$;t.fragment!==null&&(ie(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ai(n,e){n.$$.dirty[0]===-1&&(Fe.push(n),Yr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Y(n,e,t,r,s,i,o,l=[-1]){const a=xe;Ye(n);const c=n.$$={fragment:null,ctx:[],props:i,update:L,not_equal:s,bound:yn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:yn(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...m)=>{const g=m.length?m[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&ai(n,d)),f}):[],c.update(),u=!0,ie(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=xs(e.target);c.fragment&&c.fragment.l(d),d.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&O(n.$$.fragment),W(n,e.target,e.anchor,e.customElement),xr()}Ye(a)}class X{$destroy(){V(this,1),this.$destroy=L}$on(e,t){if(!At(t))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!qs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Be=[];function Qr(n,e){return{subscribe:ye(n,e).subscribe}}function ye(n,e=L){let t;const r=new Set;function s(l){if(J(n,l)&&(n=l,t)){const a=!Be.length;for(const c of r)c[1](),Be.push(c,n);if(a){for(let c=0;c<Be.length;c+=2)Be[c][0](Be[c+1]);Be.length=0}}}function i(l){s(l(n))}function o(l,a=L){const c=[l,a];return r.add(c),r.size===1&&(t=e(s)||L),l(n),()=>{r.delete(c),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Zr(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return Qr(t,o=>{let l=!1;const a=[];let c=0,u=L;const d=()=>{if(c)return;u();const m=e(r?a[0]:a,o);i?o(m):u=At(m)?m:L},f=s.map((m,g)=>Gr(m,w=>{a[g]=w,c&=~(1<<g),l&&d()},()=>{c|=1<<g}));return l=!0,d(),function(){ie(f),u()}})}function li(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,r,s,i,o=[],l="",a=n.split("/");for(a[0]||a.shift();s=a.shift();)t=s[0],t==="*"?(o.push("wild"),l+="/(.*)"):t===":"?(r=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~r?r:~i?i:s.length)),l+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(l+=(~r?"?":"")+"\\"+s.substring(i))):l+="/"+s;return{keys:o,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function ci(n){let e,t,r;const s=[n[2]];var i=n[0];function o(l){let a={};for(let c=0;c<s.length;c+=1)a=St(a,s[c]);return{props:a}}return i&&(e=Ve(i,o()),e.$on("routeEvent",n[7])),{c(){e&&q(e.$$.fragment),t=ce()},m(l,a){e&&W(e,l,a),A(l,t,a),r=!0},p(l,a){const c=a&4?sn(s,[on(l[2])]):{};if(i!==(i=l[0])){if(e){ee();const u=e;N(u.$$.fragment,1,0,()=>{V(u,1)}),te()}i?(e=Ve(i,o()),e.$on("routeEvent",l[7]),q(e.$$.fragment),O(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(l){r||(e&&O(e.$$.fragment,l),r=!0)},o(l){e&&N(e.$$.fragment,l),r=!1},d(l){l&&S(t),e&&V(e,l)}}}function ui(n){let e,t,r;const s=[{params:n[1]},n[2]];var i=n[0];function o(l){let a={};for(let c=0;c<s.length;c+=1)a=St(a,s[c]);return{props:a}}return i&&(e=Ve(i,o()),e.$on("routeEvent",n[6])),{c(){e&&q(e.$$.fragment),t=ce()},m(l,a){e&&W(e,l,a),A(l,t,a),r=!0},p(l,a){const c=a&6?sn(s,[a&2&&{params:l[1]},a&4&&on(l[2])]):{};if(i!==(i=l[0])){if(e){ee();const u=e;N(u.$$.fragment,1,0,()=>{V(u,1)}),te()}i?(e=Ve(i,o()),e.$on("routeEvent",l[6]),q(e.$$.fragment),O(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(l){r||(e&&O(e.$$.fragment,l),r=!0)},o(l){e&&N(e.$$.fragment,l),r=!1},d(l){l&&S(t),e&&V(e,l)}}}function fi(n){let e,t,r,s;const i=[ui,ci],o=[];function l(a,c){return a[1]?0:1}return e=l(n),t=o[e]=i[e](n),{c(){t.c(),r=ce()},m(a,c){o[e].m(a,c),A(a,r,c),s=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(ee(),N(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(a,c):(t=o[e]=i[e](a),t.c()),O(t,1),t.m(r.parentNode,r))},i(a){s||(O(t),s=!0)},o(a){N(t),s=!1},d(a){o[e].d(a),a&&S(r)}}}function wn(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let r="";return t>-1&&(r=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:r}}const an=Qr(null,function(e){e(wn());const t=()=>{e(wn())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),di=Zr(an,n=>n.location);Zr(an,n=>n.querystring);const kn=ye(void 0);async function oe(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await Xr();const e=(n.charAt(0)=="#"?"":"#")+n;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function fe(n,e){if(e=En(e),!n||!n.tagName||n.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return In(n,e),{update(t){t=En(t),In(n,t)}}}function hi(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function In(n,e){let t=e.href||n.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);n.setAttribute("href",t),n.addEventListener("click",r=>{r.preventDefault(),e.disabled||pi(r.currentTarget.getAttribute("href"))})}function En(n){return n&&typeof n=="string"?{href:n}:n||{}}function pi(n){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=n}function mi(n,e,t){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class o{constructor(v,y){if(!y||typeof y!="function"&&(typeof y!="object"||y._sveltesparouter!==!0))throw Error("Invalid component object");if(!v||typeof v=="string"&&(v.length<1||v.charAt(0)!="/"&&v.charAt(0)!="*")||typeof v=="object"&&!(v instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:R,keys:D}=li(v);this.path=v,typeof y=="object"&&y._sveltesparouter===!0?(this.component=y.component,this.conditions=y.conditions||[],this.userData=y.userData,this.props=y.props||{}):(this.component=()=>Promise.resolve(y),this.conditions=[],this.props={}),this._pattern=R,this._keys=D}match(v){if(s){if(typeof s=="string")if(v.startsWith(s))v=v.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const P=v.match(s);if(P&&P[0])v=v.substr(P[0].length)||"/";else return null}}const y=this._pattern.exec(v);if(y===null)return null;if(this._keys===!1)return y;const R={};let D=0;for(;D<this._keys.length;){try{R[this._keys[D]]=decodeURIComponent(y[D+1]||"")||null}catch{R[this._keys[D]]=null}D++}return R}async checkConditions(v){for(let y=0;y<this.conditions.length;y++)if(!await this.conditions[y](v))return!1;return!0}}const l=[];r instanceof Map?r.forEach((E,v)=>{l.push(new o(v,E))}):Object.keys(r).forEach(E=>{l.push(new o(E,r[E]))});let a=null,c=null,u={};const d=ri();async function f(E,v){await Xr(),d(E,v)}let m=null,g=null;i&&(g=E=>{E.state&&(E.state.__svelte_spa_router_scrollY||E.state.__svelte_spa_router_scrollX)?m=E.state:m=null},window.addEventListener("popstate",g),ti(()=>{hi(m)}));let w=null,_=null;const I=an.subscribe(async E=>{w=E;let v=0;for(;v<l.length;){const y=l[v].match(E.location);if(!y){v++;continue}const R={route:l[v].path,location:E.location,querystring:E.querystring,userData:l[v].userData,params:y&&typeof y=="object"&&Object.keys(y).length?y:null};if(!await l[v].checkConditions(R)){t(0,a=null),_=null,f("conditionsFailed",R);return}f("routeLoading",Object.assign({},R));const D=l[v].component;if(_!=D){D.loading?(t(0,a=D.loading),_=D,t(1,c=D.loadingParams),t(2,u={}),f("routeLoaded",Object.assign({},R,{component:a,name:a.name,params:c}))):(t(0,a=null),_=null);const P=await D();if(E!=w)return;t(0,a=P&&P.default||P),_=D}y&&typeof y=="object"&&Object.keys(y).length?t(1,c=y):t(1,c=null),t(2,u=l[v].props),f("routeLoaded",Object.assign({},R,{component:a,name:a.name,params:c})).then(()=>{kn.set(c)});return}t(0,a=null),_=null,kn.set(void 0)});ni(()=>{I(),g&&window.removeEventListener("popstate",g)});function T(E){Kt.call(this,n,E)}function k(E){Kt.call(this,n,E)}return n.$$set=E=>{"routes"in E&&t(3,r=E.routes),"prefix"in E&&t(4,s=E.prefix),"restoreScrollState"in E&&t(5,i=E.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[a,c,u,r,s,i,T,k]}class _i extends X{constructor(e){super(),Y(this,e,mi,fi,J,{routes:3,prefix:4,restoreScrollState:5})}}const gi={"B&W":["#000000","#808080","#ffffff"],"Old Glory":["#3a396b","#f7f7f7","#ac2132"],CMYK:["#dd00dd","#00dddd","#dddd00"],"Ocean Breeze":["#0868a9","#059dc9","#59f2f2"],"Deep Green":["#003000","#009900","#00ff00"],"Spilled Blood":["#300000","#990000","#ff0000"],"Sad Blue":["#000030","#000099","#0000ff"],Landscape:["#0dabec","#895000","#00a900"],"Flash Bang":["#dddddd","#eeeeee","#ffffff"],"Midas Touched":["#999900","#bbbb00","#dddd00"],Medieval:["#0868a9","#c9053a","#f9fa41"],Retro:["#555555","#00ff00","#000000"]},re={art_cost:50,palette_map:gi},H=ye({theme:"info",msg:null}),Z=ye(null),de=ye({on:!1,center:!0}),qe=ye(),vt=ye(null),je=ye({on:!1,art_data:null}),Xt=ye(!1);function Bt(n){const e=n.slice(),t=e[1];return e[4]=t.theme,e[5]=t.msg,e}function Tn(n){let e,t=n[5]+"",r,s,i,o,l,a=n[0]>1&&Sn(n);return{c(){e=b("main"),r=$(t),s=C(),a&&a.c(),p(e,"class",i="theme-"+n[4]+" svelte-z4zux5")},m(c,u){A(c,e,u),h(e,r),h(e,s),a&&a.m(e,null),o||(l=F(e,"click",n[2]),o=!0)},p(c,u){u&2&&t!==(t=c[5]+"")&&Q(r,t),c[0]>1?a?a.p(c,u):(a=Sn(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null),u&2&&i!==(i="theme-"+c[4]+" svelte-z4zux5")&&p(e,"class",i)},d(c){c&&S(e),a&&a.d(),o=!1,l()}}}function Sn(n){let e,t;return{c(){e=b("h2"),t=$(n[0]),p(e,"class","stack svelte-z4zux5")},m(r,s){A(r,e,s),h(e,t)},p(r,s){s&1&&Q(t,r[0])},d(r){r&&S(e)}}}function bi(n){let e,t=n[1].msg!==null&&Tn(Bt(n));return{c(){t&&t.c(),e=ce()},m(r,s){t&&t.m(r,s),A(r,e,s)},p(r,[s]){r[1].msg!==null?t?t.p(Bt(r),s):(t=Tn(Bt(r)),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:L,o:L,d(r){t&&t.d(r),r&&S(e)}}}function vi(n,e,t){let r;K(n,H,l=>t(1,r=l));const s=()=>{x(H,r.msg=null,r)};let i="",o=1;return H.subscribe(({msg:l})=>{l==i?t(0,o++,o):(i=l,t(0,o=1))}),[o,r,s]}class yi extends X{constructor(e){super(),Y(this,e,vi,bi,J,{})}}const wi=n=>n.map((t,r)=>r>0&&r%16==0?"|"+t:`${t}`).join("").split("|").map(t=>parseInt(t,3).toString(36)).join("|"),ki=n=>{const t=n.split("|").map(r=>parseInt(r,36).toString(3)).map(r=>"0".repeat(16-r.length)+r);return Array.from(t.join("")).map(r=>+r)},es=(n,e,t,r)=>{let s=e;t&&(s=ki(e).join(""));const i=n.canvas.width/16;for(let o=0;o<s.length;o++){const l=s[o];n.fillStyle=r[l],n.fillRect(o%16*i,Math.floor(o/16)*i,i,i)}},Ft=(n,e,t)=>e<n?n:e>t?t:e,An=n=>{let e=[128,64,256];Array.from(n).forEach((f,m)=>{const g=f.charCodeAt(0)*11;e[m%3]+=g>300&&m%2==0?-g:g});let[t,r,s]=e;t=t*(t<0?-1:1)%256,r=r*(r<0?-1:1)%256,s=s*(s<0?-1:1)%256;const i=100,o=200;t=Ft(i,t,o),r=Ft(i,r,o),s=Ft(i,s,o);const l=[t,r,s].sort((f,m)=>f-m)[0],a=[t,r,s].sort((f,m)=>f-m)[2];t==l&&(t=i),r==l&&(r=i),s==l&&(s=i),t==a&&(t=o),r==a&&(r=o),s==a&&(s=o);let c=t.toString(16),u=r.toString(16),d=s.toString(16);return c=c.length==1?"0"+c:c,u=u.length==1?"0"+u:u,d=d.length==1?"0"+d:d,"#"+c+u+d},ts=window.location.port=="5173"?"http://localhost:8080/api":"/api",Re=async(n="/",e={})=>{const t=await fetch(ts+n,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});let r=null;try{r=await t.json()}catch{}return{ok:t.ok,status:t.status,data:r}},we=async(n="/")=>{const e=await fetch(ts+n,{credentials:"include"});let t=null;try{t=await e.json()}catch{}return{ok:e.ok,status:e.status,data:t}},Ii=async n=>await Re("/user/login",{uid:n}),Ei=async n=>await Re("/user/set-name",{username:n}),Ti=async()=>await we("/user/self"),Si=async()=>await we("/user/logs"),Ai=async n=>await Re("/art/publish-art",{data:n}),Ci=async n=>await we(`/art/exists/${n}`),Ri=async()=>await we("/art/auth-gallery"),Oi=async(n,e,t)=>await we(`/art/filter-by/${n}/${e}/${t}`),Pi=async(n,e)=>await Re("/art/rate-art",{type:n,data:e}),Di=async n=>await Re("/art/purchase",{data:n}),Ni=async(n,e)=>await Re("/art/set-cost",{data:n,cost:e}),Mi=async n=>await we(`/art/gallery/${n}`),Li=async()=>await we("/art/three-random"),Ui=async n=>await Re("/follow/toggle-follow",{username:n}),$i=async()=>await we("/follow/following-popular"),Bi=async()=>await we("/palette/buy-palette"),Fi=async(n,e)=>await Re("/palette/set-palette",{art_id:n,set_palette:e}),ne={login:Ii,setName:Ei,getSelf:Ti,publishArt:Ai,artExists:Ci,authGallery:Ri,getArtByFilter:Oi,rateArt:Pi,purchaseArt:Di,setArtCost:Ni,getUserGallery:Mi,toggleFollow:Ui,getFollowingPopular:$i,threeRandom:Li,getLogs:Si,buyPalette:Bi,setPalette:Fi};function Cn(n){var E;let e,t,r,s,i,o,l=(n[0].palette??"B&W")+"",a,c,u,d,f,m=n[0].artist+"",g,w,_,I,T,k=n[0].owner!=((E=n[9])==null?void 0:E.username)&&Rn(n);return{c(){e=b("div"),t=b("i"),r=C(),s=b("div"),i=b("p"),o=b("i"),o.textContent="Palette: ",a=$(l),c=C(),u=b("p"),d=b("i"),d.textContent="Artist: ",f=b("a"),g=$(m),_=C(),k&&k.c(),p(t,"class","bi bi-question-square hint svelte-imw81c"),p(o,"class","svelte-imw81c"),p(i,"class","svelte-imw81c"),p(d,"class","svelte-imw81c"),p(f,"href",w="/gallery/"+n[0].artist),p(f,"class","svelte-imw81c"),p(u,"class","svelte-imw81c"),p(s,"id","details"),p(s,"class","svelte-imw81c"),p(e,"id","details-wrapper"),p(e,"class","svelte-imw81c")},m(v,y){A(v,e,y),h(e,t),h(e,r),h(e,s),h(s,i),h(i,o),h(i,a),h(s,c),h(s,u),h(u,d),h(u,f),h(f,g),h(s,_),k&&k.m(s,null),I||(T=ue(fe.call(null,f)),I=!0)},p(v,y){var R;y&1&&l!==(l=(v[0].palette??"B&W")+"")&&Q(a,l),y&1&&m!==(m=v[0].artist+"")&&Q(g,m),y&1&&w!==(w="/gallery/"+v[0].artist)&&p(f,"href",w),v[0].owner!=((R=v[9])==null?void 0:R.username)?k?k.p(v,y):(k=Rn(v),k.c(),k.m(s,null)):k&&(k.d(1),k=null)},d(v){v&&S(e),k&&k.d(),I=!1,T()}}}function Rn(n){let e,t,r,s=n[0].owner+"",i,o,l,a;return{c(){e=b("p"),t=b("i"),t.textContent="Owner: ",r=b("a"),i=$(s),p(t,"class","svelte-imw81c"),p(r,"href",o="/gallery/"+n[0].owner),p(r,"class","svelte-imw81c"),p(e,"class","svelte-imw81c")},m(c,u){A(c,e,u),h(e,t),h(e,r),h(r,i),l||(a=ue(fe.call(null,r)),l=!0)},p(c,u){u&1&&s!==(s=c[0].owner+"")&&Q(i,s),u&1&&o!==(o="/gallery/"+c[0].owner)&&p(r,"href",o)},d(c){c&&S(e),l=!1,a()}}}function On(n){let e,t,r,s,i,o,l,a,c,u,d,f,m;return{c(){e=b("div"),t=b("p"),t.innerHTML="Any cost above 0 will put the art piece up for sale.<br/><b>Note: </b>buyers also get the color palette on a piece they buy",r=C(),s=b("div"),i=b("input"),o=C(),l=b("button"),a=$("Set cost"),u=C(),d=b("i"),p(t,"class","hint svelte-imw81c"),p(i,"type","integer"),p(i,"placeholder","New art cost"),p(i,"class","svelte-imw81c"),l.disabled=c=!n[8],p(l,"class","svelte-imw81c"),p(s,"class","svelte-imw81c"),p(d,"class","bi bi-palette svelte-imw81c"),p(d,"id","palette"),p(e,"id","editor"),p(e,"class","svelte-imw81c")},m(g,w){A(g,e,w),h(e,t),h(e,r),h(e,s),h(s,i),gt(i,n[4]),h(s,o),h(s,l),h(l,a),h(e,u),h(e,d),f||(m=[F(i,"input",n[17]),F(l,"click",n[13]),F(d,"click",n[14])],f=!0)},p(g,w){w&16&&gt(i,g[4]),w&256&&c!==(c=!g[8])&&(l.disabled=c)},d(g){g&&S(e),f=!1,ie(m)}}}function Pn(n){let e,t=n[0].cost+"",r;return{c(){e=b("i"),r=$(t),p(e,"class","bi bi-coin svelte-imw81c"),p(e,"id","cost")},m(s,i){A(s,e,i),h(e,r)},p(s,i){i&1&&t!==(t=s[0].cost+"")&&Q(r,t)},d(s){s&&S(e)}}}function Dn(n){let e,t,r,s=n[0].likes+"",i,o,l,a,c=n[0].dislikes+"",u,d,f,m;function g(I,T){var k;if(I[0].owner==((k=I[9])==null?void 0:k.username))return zi;if(I[0].cost>0)return ji}let w=g(n),_=w&&w(n);return{c(){e=b("section"),t=b("i"),r=C(),i=$(s),o=$(`
        ·
        `),l=b("i"),a=C(),u=$(c),d=C(),_&&_.c(),p(t,"class","bi bi-check-square svelte-imw81c"),p(t,"id","likes"),z(t,"selected",n[0].user_rating=="likes"),p(l,"class","bi bi-x-square svelte-imw81c"),p(l,"id","dislikes"),z(l,"selected",n[0].user_rating=="dislikes"),p(e,"class","svelte-imw81c")},m(I,T){A(I,e,T),h(e,t),h(e,r),h(e,i),h(e,o),h(e,l),h(e,a),h(e,u),h(e,d),_&&_.m(e,null),f||(m=[F(t,"click",n[18]),F(l,"click",n[19])],f=!0)},p(I,T){T&1&&z(t,"selected",I[0].user_rating=="likes"),T&1&&s!==(s=I[0].likes+"")&&Q(i,s),T&1&&z(l,"selected",I[0].user_rating=="dislikes"),T&1&&c!==(c=I[0].dislikes+"")&&Q(u,c),w===(w=g(I))&&_?_.p(I,T):(_&&_.d(1),_=w&&w(I),_&&(_.c(),_.m(e,null)))},d(I){I&&S(e),_&&_.d(),f=!1,ie(m)}}}function ji(n){let e,t,r;return{c(){e=b("i"),p(e,"class","bi bi-bag-plus-fill corner-icon svelte-imw81c")},m(s,i){A(s,e,i),t||(r=F(e,"click",n[11]),t=!0)},p:L,d(s){s&&S(e),t=!1,r()}}}function zi(n){let e,t,r;return{c(){e=b("i"),p(e,"class","bi bi-pencil-square corner-icon svelte-imw81c")},m(s,i){A(s,e,i),t||(r=F(e,"click",n[12]),t=!0)},p:L,d(s){s&&S(e),t=!1,r()}}}function Hi(n){let e,t,r,s,i,o,l,a=n[2]&&!n[3]&&Cn(n),c=n[7]&&!n[3]&&On(n),u=n[0].cost>0&&!n[3]&&Pn(n),d=!n[3]&&Dn(n);return{c(){e=b("main"),a&&a.c(),t=C(),r=b("div"),s=b("canvas"),i=C(),c&&c.c(),o=C(),u&&u.c(),l=C(),d&&d.c(),j(s,"border-color",An(n[0].data)),p(s,"class","svelte-imw81c"),p(r,"id","canvas-wrapper"),p(r,"class","svelte-imw81c"),p(e,"class","svelte-imw81c"),z(e,"purchased",n[6]),z(e,"dim",n[1])},m(f,m){A(f,e,m),a&&a.m(e,null),h(e,t),h(e,r),h(r,s),n[16](s),h(r,i),c&&c.m(r,null),h(r,o),u&&u.m(r,null),h(e,l),d&&d.m(e,null)},p(f,[m]){f[2]&&!f[3]?a?a.p(f,m):(a=Cn(f),a.c(),a.m(e,t)):a&&(a.d(1),a=null),m&1&&j(s,"border-color",An(f[0].data)),f[7]&&!f[3]?c?c.p(f,m):(c=On(f),c.c(),c.m(r,o)):c&&(c.d(1),c=null),f[0].cost>0&&!f[3]?u?u.p(f,m):(u=Pn(f),u.c(),u.m(r,null)):u&&(u.d(1),u=null),f[3]?d&&(d.d(1),d=null):d?d.p(f,m):(d=Dn(f),d.c(),d.m(e,null)),m&64&&z(e,"purchased",f[6]),m&2&&z(e,"dim",f[1])},i:L,o:L,d(f){f&&S(e),a&&a.d(),n[16](null),c&&c.d(),u&&u.d(),d&&d.d()}}}function Wi(n,e,t){let r,s,i,o;K(n,je,M=>t(21,s=M)),K(n,de,M=>t(22,i=M)),K(n,Z,M=>t(9,o=M));let{dim:l=!1}=e,{art_data:a}=e,{show_details:c=!0}=e,{just_draw_it:u=!1}=e,d,f,m=!1;Ce(()=>{t(15,f=d.getContext("2d")),t(5,d.width=t(5,d.height=256,d),d),g()});const g=()=>es(f,a.data,!0,re.palette_map[a.palette]??re.palette_map["B&W"]);let w=!1;const _=async M=>{var vn;if(x(de,i={on:!0,center:!1},i),o==null)return H.set({theme:"info",msg:`Login to ${M.slice(0,-1)} art`});if(w)return;w=!0,a.user_rating!=M&&t(0,a[M]++,a);const le=await ne.rateArt(M,a.data);x(de,i={on:!1,center:!1},i),le.ok?(H.set({theme:"success",msg:le.data.msg}),a.user_rating==M?(t(0,a[M]--,a),M=null):le.data.swap_rating&&(console.log("Swapping"),t(0,a[M=="likes"?"dislikes":"likes"]--,a))):(t(0,a[M]--,a),H.set({theme:"error",msg:((vn=le==null?void 0:le.data)==null?void 0:vn.msg)??"Uh oh..."})),t(0,a.user_rating=M,a),t(0,a),w=!1},I=async()=>{var le;x(de,i={on:!0,center:!1},i);const M=await ne.purchaseArt(a.data);x(de,i={on:!1,center:!1},i),M.ok?(H.set({theme:"success",msg:M.data.msg}),t(6,m=!0),x(Z,o.coins-=a.cost,o)):H.set({theme:"error",msg:((le=M==null?void 0:M.data)==null?void 0:le.msg)??"Uh oh..."})};let T=!1,k="";const E=()=>{t(7,T=!T)},v=async()=>{var le;x(de,i={on:!0,center:!1},i);const M=await ne.setArtCost(a.data,parseInt(k));x(de,i={on:!1,center:!1},i),M.ok?(H.set({theme:"success",msg:M.data.msg}),t(0,a.cost=parseInt(k),a),t(0,a)):(H.set({theme:"error",msg:((le=M==null?void 0:M.data)==null?void 0:le.msg)??"Uh oh..."}),M.status==401&&t(0,a.owner="",a)),t(7,T=!1)},y=async()=>{x(je,s.on=!0,s),x(je,s.art_data=JSON.parse(JSON.stringify(a)),s),t(7,T=!1)};function R(M){Qe[M?"unshift":"push"](()=>{d=M,t(5,d)})}function D(){k=this.value,t(4,k)}const P=()=>_("likes"),B=()=>_("dislikes");return n.$$set=M=>{"dim"in M&&t(1,l=M.dim),"art_data"in M&&t(0,a=M.art_data),"show_details"in M&&t(2,c=M.show_details),"just_draw_it"in M&&t(3,u=M.just_draw_it)},n.$$.update=()=>{n.$$.dirty&32769&&f&&a&&g(),n.$$.dirty&16&&k!=k.replaceAll(" ","")&&t(4,k=k.replaceAll(" ","")),n.$$.dirty&16&&t(8,r=!isNaN(parseInt(k))&&!k.includes(".")&&!k.includes("-"))},[a,l,c,u,k,d,m,T,r,o,_,I,E,v,y,f,R,D,P,B]}class Rt extends X{constructor(e){super(),Y(this,e,Wi,Hi,J,{dim:1,art_data:0,show_details:2,just_draw_it:3})}}function Vi(n){let e,t,r;return{c(){e=b("div"),e.innerHTML=`<div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div>`,p(e,"class","lds-ring svelte-1wv63sf"),z(e,"center",n[0])},m(s,i){A(s,e,i),t||(r=F(e,"click",n[1]),t=!0)},p(s,[i]){i&1&&z(e,"center",s[0])},i:L,o:L,d(s){s&&S(e),t=!1,r()}}}function qi(n,e,t){let r;K(n,de,o=>t(2,r=o));let{center:s=!0}=e;const i=()=>{x(de,r.on=!1,r)};return n.$$set=o=>{"center"in o&&t(0,s=o.center)},[s,i]}class Ot extends X{constructor(e){super(),Y(this,e,qi,Vi,J,{center:0})}}function Nn(n,e,t){const r=n.slice();return r[3]=e[t],r}function Gi(n){let e,t;return e=new Ot({}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p:L,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Ki(n){var a;let e,t,r,s=n[0],i=[];for(let c=0;c<s.length;c+=1)i[c]=Mn(Nn(n,s,c));const o=c=>N(i[c],1,1,()=>{i[c]=null});let l=((a=n[0])==null?void 0:a.length)==0&&Ln();return{c(){e=b("main");for(let c=0;c<i.length;c+=1)i[c].c();t=C(),l&&l.c(),p(e,"class","svelte-adl6q5")},m(c,u){A(c,e,u);for(let d=0;d<i.length;d+=1)i[d].m(e,null);h(e,t),l&&l.m(e,null),r=!0},p(c,u){var d;if(u&7){s=c[0];let f;for(f=0;f<s.length;f+=1){const m=Nn(c,s,f);i[f]?(i[f].p(m,u),O(i[f],1)):(i[f]=Mn(m),i[f].c(),O(i[f],1),i[f].m(e,t))}for(ee(),f=s.length;f<i.length;f+=1)o(f);te()}((d=c[0])==null?void 0:d.length)==0?l||(l=Ln(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(c){if(!r){for(let u=0;u<s.length;u+=1)O(i[u]);r=!0}},o(c){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)N(i[u]);r=!1},d(c){c&&S(e),ae(i,c),l&&l.d()}}}function Mn(n){let e,t;return e=new Rt({props:{art_data:n[3],dim:n[1]&&n[2].username==n[3].owner}}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[3]),s&7&&(i.dim=r[1]&&r[2].username==r[3].owner),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Ln(n){let e;return{c(){e=b("h1"),e.textContent="No art!"},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Ji(n){let e,t,r,s;const i=[Ki,Gi],o=[];function l(a,c){return a[0]!=null?0:1}return e=l(n),t=o[e]=i[e](n),{c(){t.c(),r=ce()},m(a,c){o[e].m(a,c),A(a,r,c),s=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(ee(),N(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(a,c):(t=o[e]=i[e](a),t.c()),O(t,1),t.m(r.parentNode,r))},i(a){s||(O(t),s=!0)},o(a){N(t),s=!1},d(a){o[e].d(a),a&&S(r)}}}function Yi(n,e,t){let r;K(n,Z,o=>t(2,r=o));let{gallery:s=null}=e,{hide_owner:i=!1}=e;return n.$$set=o=>{"gallery"in o&&t(0,s=o.gallery),"hide_owner"in o&&t(1,i=o.hide_owner)},[s,i,r]}class ln extends X{constructor(e){super(),Y(this,e,Yi,Ji,J,{gallery:0,hide_owner:1})}}function Un(n,e,t){const r=n.slice();return r[1]=e[t],r}function $n(n){let e,t,r=n[1].content+"",s,i,o,l=n[1].date+"",a,c;return{c(){e=b("div"),t=b("h2"),s=$(r),i=C(),o=b("p"),a=$(l),c=C(),p(t,"class","svelte-1v3m494"),p(o,"class","hint"),p(e,"class","log svelte-1v3m494")},m(u,d){A(u,e,d),h(e,t),h(t,s),h(e,i),h(e,o),h(o,a),h(e,c)},p(u,d){d&1&&r!==(r=u[1].content+"")&&Q(s,r),d&1&&l!==(l=u[1].date+"")&&Q(a,l)},d(u){u&&S(e)}}}function Xi(n){let e,t=n[0],r=[];for(let s=0;s<t.length;s+=1)r[s]=$n(Un(n,t,s));return{c(){e=b("main");for(let s=0;s<r.length;s+=1)r[s].c();p(e,"class","svelte-1v3m494")},m(s,i){A(s,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(s,[i]){if(i&1){t=s[0];let o;for(o=0;o<t.length;o+=1){const l=Un(s,t,o);r[o]?r[o].p(l,i):(r[o]=$n(l),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},i:L,o:L,d(s){s&&S(e),ae(r,s)}}}function xi(n,e,t){let r=[];return Ce(async()=>{var i;const s=await ne.getLogs();if(!s.ok)return H.set({theme:"error",msg:((i=s==null?void 0:s.data)==null?void 0:i.msg)??"Uh oh"});t(0,r=s.data.logs)}),[r]}class Qi extends X{constructor(e){super(),Y(this,e,xi,Xi,J,{})}}function Bn(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function Fn(n){let e,t=n[6].name+"",r,s,i;function o(){return n[4](n[8])}return{c(){e=b("p"),r=$(t),p(e,"class","svelte-m40h0c"),z(e,"selected",n[0]==n[8])},m(l,a){A(l,e,a),h(e,r),s||(i=F(e,"click",o),s=!0)},p(l,a){n=l,a&2&&t!==(t=n[6].name+"")&&Q(r,t),a&1&&z(e,"selected",n[0]==n[8])},d(l){l&&S(e),s=!1,i()}}}function Zi(n){let e,t,r,s,i,o=n[1],l=[];for(let d=0;d<o.length;d+=1)l[d]=Fn(Bn(n,o,d));const a=[n[1][n[0]].props];var c=n[1][n[0]].comp;function u(d){let f={};for(let m=0;m<a.length;m+=1)f=St(f,a[m]);return{props:f}}return c&&(s=Ve(c,u())),{c(){e=b("main"),t=b("div");for(let d=0;d<l.length;d+=1)l[d].c();r=C(),s&&q(s.$$.fragment),p(t,"id","tabs"),p(t,"class","svelte-m40h0c"),p(e,"class","flex-page svelte-m40h0c")},m(d,f){A(d,e,f),h(e,t);for(let m=0;m<l.length;m+=1)l[m].m(t,null);h(e,r),s&&W(s,e,null),i=!0},p(d,[f]){if(f&3){o=d[1];let g;for(g=0;g<o.length;g+=1){const w=Bn(d,o,g);l[g]?l[g].p(w,f):(l[g]=Fn(w),l[g].c(),l[g].m(t,null))}for(;g<l.length;g+=1)l[g].d(1);l.length=o.length}const m=f&3?sn(a,[on(d[1][d[0]].props)]):{};if(c!==(c=d[1][d[0]].comp)){if(s){ee();const g=s;N(g.$$.fragment,1,0,()=>{V(g,1)}),te()}c?(s=Ve(c,u()),q(s.$$.fragment),O(s.$$.fragment,1),W(s,e,null)):s=null}else c&&s.$set(m)},i(d){i||(s&&O(s.$$.fragment,d),i=!0)},o(d){s&&N(s.$$.fragment,d),i=!1},d(d){d&&S(e),ae(l,d),s&&V(s)}}}function eo(n,e,t){let r,s,i;K(n,Z,c=>t(5,s=c)),K(n,vt,c=>t(3,i=c));let o=i,l=0;Ce(async()=>{var d;const c=await ne.authGallery();if(!c.ok)return H.set({theme:"error",msg:((d=c==null?void 0:c.data)==null?void 0:d.msg)??"Can't load your gallery!"});t(2,o=c.data.gallery),x(vt,i=o,i);const u=await ne.getSelf();u.ok?(u.data.daily_gain>0?H.set({theme:"info",msg:`You gained ${u.data.daily_gain} coins today!`}):H.set({theme:"info",msg:`${u.data.hours_to_bonus} hours to daily bonus`}),x(Z,s={username:u.data.username,coins:u.data.coins},s)):(x(Z,s=null,s),oe("/login"))});const a=c=>{t(0,l=c)};return n.$$.update=()=>{n.$$.dirty&8&&t(2,o=i),n.$$.dirty&4&&t(1,r=[{comp:ln,props:{gallery:o,hide_owner:!1},name:"Gallery"},{comp:Qi,props:{},name:"Logs"}])},[l,r,o,i,a]}class to extends X{constructor(e){super(),Y(this,e,eo,Zi,J,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},no=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(f=64)),r.push(t[u],t[d],t[f],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ns(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):no(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||c==null||d==null)throw Error();const f=i<<2|l>>4;if(r.push(f),c!==64){const m=l<<4&240|c>>2;if(r.push(m),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ro=function(n){const e=ns(n);return rs.encodeByteArray(e,!0)},ss=function(n){return ro(n).replace(/\./g,"")},is=function(n){try{return rs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=()=>so().__FIREBASE_DEFAULTS__,oo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ao=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&is(n[1]);return e&&JSON.parse(e)},cn=()=>{try{return io()||oo()||ao()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lo=n=>{var e,t;return(t=(e=cn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},co=()=>{var n;return(n=cn())===null||n===void 0?void 0:n.config},os=n=>{var e;return(e=cn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function ho(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mo(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _o(){try{return typeof indexedDB=="object"}catch{return!1}}function go(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="FirebaseError";class Oe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bo,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vo(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Oe(s,l,r)}}function vo(n,e){return n.replace(yo,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yo=/\{\$([^}]+)}/g;function wo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(jn(i)&&jn(o)){if(!yt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function jn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(n,e){const t=new Io(n,e);return t.subscribe.bind(t)}class Io{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Eo(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=jt),s.error===void 0&&(s.error=jt),s.complete===void 0&&(s.complete=jt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new uo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ao(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:So(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function So(n){return n===Pe?void 0:n}function Ao(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new To(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Ro={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Oo=G.INFO,Po={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Do=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Po[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class as{constructor(e){this.name=e,this._logLevel=Oo,this._logHandler=Do,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ro[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const No=(n,e)=>e.some(t=>n instanceof t);let zn,Hn;function Mo(){return zn||(zn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lo(){return Hn||(Hn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ls=new WeakMap,xt=new WeakMap,cs=new WeakMap,zt=new WeakMap,un=new WeakMap;function Uo(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Se(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ls.set(t,n)}).catch(()=>{}),un.set(e,n),e}function $o(n){if(xt.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});xt.set(n,e)}let Qt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Se(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bo(n){Qt=n(Qt)}function Fo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ht(this),e,...t);return cs.set(r,e.sort?e.sort():[e]),Se(r)}:Lo().includes(n)?function(...e){return n.apply(Ht(this),e),Se(ls.get(this))}:function(...e){return Se(n.apply(Ht(this),e))}}function jo(n){return typeof n=="function"?Fo(n):(n instanceof IDBTransaction&&$o(n),No(n,Mo())?new Proxy(n,Qt):n)}function Se(n){if(n instanceof IDBRequest)return Uo(n);if(zt.has(n))return zt.get(n);const e=jo(n);return e!==n&&(zt.set(n,e),un.set(e,n)),e}const Ht=n=>un.get(n);function zo(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Se(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Se(o.result),a.oldVersion,a.newVersion,Se(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const Ho=["get","getKey","getAll","getAllKeys","count"],Wo=["put","add","delete","clear"],Wt=new Map;function Wn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wt.get(e))return Wt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ho.includes(t)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return Wt.set(e,i),i}Bo(n=>({...n,get:(e,t,r)=>Wn(e,t)||n.get(e,t,r),has:(e,t)=>!!Wn(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zt="@firebase/app",Vn="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new as("@firebase/app"),Go="@firebase/app-compat",Ko="@firebase/analytics-compat",Jo="@firebase/analytics",Yo="@firebase/app-check-compat",Xo="@firebase/app-check",xo="@firebase/auth",Qo="@firebase/auth-compat",Zo="@firebase/database",ea="@firebase/database-compat",ta="@firebase/functions",na="@firebase/functions-compat",ra="@firebase/installations",sa="@firebase/installations-compat",ia="@firebase/messaging",oa="@firebase/messaging-compat",aa="@firebase/performance",la="@firebase/performance-compat",ca="@firebase/remote-config",ua="@firebase/remote-config-compat",fa="@firebase/storage",da="@firebase/storage-compat",ha="@firebase/firestore",pa="@firebase/firestore-compat",ma="firebase",_a="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]",ga={[Zt]:"fire-core",[Go]:"fire-core-compat",[Jo]:"fire-analytics",[Ko]:"fire-analytics-compat",[Xo]:"fire-app-check",[Yo]:"fire-app-check-compat",[xo]:"fire-auth",[Qo]:"fire-auth-compat",[Zo]:"fire-rtdb",[ea]:"fire-rtdb-compat",[ta]:"fire-fn",[na]:"fire-fn-compat",[ra]:"fire-iid",[sa]:"fire-iid-compat",[ia]:"fire-fcm",[oa]:"fire-fcm-compat",[aa]:"fire-perf",[la]:"fire-perf-compat",[ca]:"fire-rc",[ua]:"fire-rc-compat",[fa]:"fire-gcs",[da]:"fire-gcs-compat",[ha]:"fire-fst",[pa]:"fire-fst-compat","fire-js":"fire-js",[ma]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Map,tn=new Map;function ba(n,e){try{n.container.addComponent(e)}catch(t){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ze(n){const e=n.name;if(tn.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;tn.set(e,n);for(const t of wt.values())ba(t,n);return!0}function us(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ae=new rt("app","Firebase",va);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=_a;function fs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});if(t||(t=co()),!t)throw Ae.create("no-options");const i=wt.get(s);if(i){if(yt(t,i.options)&&yt(r,i.config))return i;throw Ae.create("duplicate-app",{appName:s})}const o=new Co(s);for(const a of tn.values())o.addComponent(a);const l=new ya(t,r,o);return wt.set(s,l),l}function wa(n=en){const e=wt.get(n);if(!e&&n===en)return fs();if(!e)throw Ae.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let s=(r=ga[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(l.join(" "));return}Ze(new Ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="firebase-heartbeat-database",Ia=1,et="firebase-heartbeat-store";let Vt=null;function ds(){return Vt||(Vt=zo(ka,Ia,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(et)}}}).catch(n=>{throw Ae.create("idb-open",{originalErrorMessage:n.message})})),Vt}async function Ea(n){try{return(await ds()).transaction(et).objectStore(et).get(hs(n))}catch(e){if(e instanceof Oe)Le.warn(e.message);else{const t=Ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(t.message)}}}async function qn(n,e){try{const r=(await ds()).transaction(et,"readwrite");return await r.objectStore(et).put(e,hs(n)),r.done}catch(t){if(t instanceof Oe)Le.warn(t.message);else{const r=Ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Le.warn(r.message)}}}function hs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=1024,Sa=30*24*60*60*1e3;class Aa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ra(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Sa}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gn(),{heartbeatsToSend:t,unsentEntries:r}=Ca(this._heartbeatsCache.heartbeats),s=ss(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gn(){return new Date().toISOString().substring(0,10)}function Ca(n,e=Ta){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kn(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Kn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ra{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _o()?go().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ea(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kn(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){Ze(new Ge("platform-logger",e=>new Vo(e),"PRIVATE")),Ze(new Ge("heartbeat",e=>new Aa(e),"PRIVATE")),ze(Zt,Vn,n),ze(Zt,Vn,"esm2017"),ze("fire-js","")}Oa("");var Pa="firebase",Da="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Pa,Da,"app");function fn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ps(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Na=ps,ms=new rt("auth","Firebase",ps());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new as("@firebase/auth");function ht(n,...e){Jn.logLevel<=G.ERROR&&Jn.error(`Auth (${Pt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,...e){throw dn(n,...e)}function he(n,...e){return dn(n,...e)}function _s(n,e,t){const r=Object.assign(Object.assign({},Na()),{[e]:t});return new rt("auth","Firebase",r).create(e,{appName:n.name})}function Ma(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&me(n,"argument-error"),_s(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ms.create(n,...e)}function U(n,e,...t){if(!n)throw dn(e,...t)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ht(e),new Error(e)}function ve(n,e){n||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map;function be(n){ve(n instanceof Function,"Expected a class definition");let e=Yn.get(n);return e?(ve(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yn.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n,e){const t=us(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(yt(i,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function Ua(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(be);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $a(){return Xn()==="http:"||Xn()==="https:"}function Xn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($a()||ho()||"connection"in navigator)?navigator.onLine:!0}function Fa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.shortDelay=e,this.longDelay=t,ve(t>e,"Short delay should be less than long delay!"),this.isMobile=fo()||po()}get(){return Ba()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n,e){ve(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new it(3e4,6e4);function Ha(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dt(n,e,t,r,s={}){return bs(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=st(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),gs.fetch()(vs(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function bs(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ja),e);try{const s=new Va(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ct(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ct(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ct(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw ct(n,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _s(n,u,c);me(n,u)}}catch(s){if(s instanceof Oe)throw s;me(n,"network-request-failed")}}async function Wa(n,e,t,r,s={}){const i=await Dt(n,e,t,r,s);return"mfaPendingCredential"in i&&me(n,"multi-factor-auth-required",{_serverResponse:i}),i}function vs(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?hn(n.config,s):`${n.config.apiScheme}://${s}`}class Va{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),za.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ct(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=he(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(n,e){return Dt(n,"POST","/v1/accounts:delete",e)}async function Ga(n,e){return Dt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ka(n,e=!1){const t=Je(n),r=await t.getIdToken(e),s=pn(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xe(qt(s.auth_time)),issuedAtTime:Xe(qt(s.iat)),expirationTime:Xe(qt(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qt(n){return Number(n)*1e3}function pn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ht("JWT malformed, contained fewer than 3 sections"),null;try{const s=is(t);return s?JSON.parse(s):(ht("Failed to decode base64 JWT payload"),null)}catch(s){return ht("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ja(n){const e=pn(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Oe&&Ya(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ya({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xe(this.lastLoginAt),this.creationTime=Xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(n){var e;const t=n.auth,r=await n.getIdToken(),s=await tt(n,Ga(t,{idToken:r}));U(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Za(i.providerUserInfo):[],l=Qa(n.providerData,o),a=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ys(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function xa(n){const e=Je(n);await kt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qa(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Za(n){return n.map(e=>{var{providerId:t}=e,r=fn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n,e){const t=await bs(n,{},async()=>{const r=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=vs(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gs.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ja(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await el(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new nt;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Me{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=fn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ys(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await tt(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ka(this,e)}reload(){return xa(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tt(this,qa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,a,c,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(l=t.tenantId)!==null&&l!==void 0?l:void 0,_=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,I=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:E,isAnonymous:v,providerData:y,stsTokenManager:R}=t;U(k&&R,e,"internal-error");const D=nt.fromJSON(this.name,R);U(typeof k=="string",e,"internal-error"),ke(d,e.name),ke(f,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof v=="boolean",e,"internal-error"),ke(m,e.name),ke(g,e.name),ke(w,e.name),ke(_,e.name),ke(I,e.name),ke(T,e.name);const P=new Me({uid:k,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:v,photoURL:g,phoneNumber:m,tenantId:w,stsTokenManager:D,createdAt:I,lastLoginAt:T});return y&&Array.isArray(y)&&(P.providerData=y.map(B=>Object.assign({},B))),_&&(P._redirectEventId=_),P}static async _fromIdTokenResponse(e,t,r=!1){const s=new nt;s.updateFromServerResponse(t);const i=new Me({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await kt(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ws.type="NONE";const xn=ws;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e,t){return`firebase:${n}:${e}:${t}`}class He{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pt(this.userKey,s.apiKey,i),this.fullPersistenceKey=pt("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new He(be(xn),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||be(xn);const o=pt(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Me._fromJSON(e,u);c!==i&&(l=d),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new He(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new He(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Es(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ks(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ss(e))return"Blackberry";if(As(e))return"Webos";if(mn(e))return"Safari";if((e.includes("chrome/")||Is(e))&&!e.includes("edge/"))return"Chrome";if(Ts(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ks(n=se()){return/firefox\//i.test(n)}function mn(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Is(n=se()){return/crios\//i.test(n)}function Es(n=se()){return/iemobile/i.test(n)}function Ts(n=se()){return/android/i.test(n)}function Ss(n=se()){return/blackberry/i.test(n)}function As(n=se()){return/webos/i.test(n)}function Nt(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tl(n=se()){var e;return Nt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nl(){return mo()&&document.documentMode===10}function Cs(n=se()){return Nt(n)||Ts(n)||As(n)||Ss(n)||/windows phone/i.test(n)||Es(n)}function rl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e=[]){let t;switch(n){case"Browser":t=Qn(se());break;case"Worker":t=`${Qn(se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zn(this),this.idTokenSubscription=new Zn(this),this.beforeStateQueue=new sl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ms,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await He.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Je(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await He.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Mt(n){return Je(n)}class Zn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ko(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ol(n,e,t){const r=Mt(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Os(e),{host:o,port:l}=al(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ll()}function Os(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function al(n){const e=Os(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:er(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:er(o)}}}function er(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ll(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,t){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(n,e){return Wa(n,"POST","/v1/accounts:signInWithIdp",Ha(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="http://localhost";class Ue extends Ps{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=fn(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ue(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return We(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,We(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,We(e,t)}buildRequest(){const e={requestUri:cl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=st(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends _n{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends ot{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ie.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ue._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _e.credential(t,r)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends ot{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends ot{constructor(){super("twitter.com")}static credential(e,t){return Ue._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Te.credential(t,r)}catch{return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com";Te.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Me._fromIdTokenResponse(e,r,s),o=tr(r);return new Ke({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tr(r);return new Ke({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Oe{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new It(e,t,r,s)}}function Ds(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?It._fromErrorAndOperation(n,i,e,r):i})}async function ul(n,e,t=!1){const r=await tt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ke._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await tt(n,Ds(r,s,e,n),t);U(i.idToken,r,"internal-error");const o=pn(i.idToken);U(o,r,"internal-error");const{sub:l}=o;return U(n.uid===l,r,"user-mismatch"),Ke._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n,e,t=!1){const r="signIn",s=await Ds(n,r,e),i=await Ke._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function hl(n,e,t,r){return Je(n).onIdTokenChanged(e,t,r)}function pl(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}const Et="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){const n=se();return mn(n)||Nt(n)}const _l=1e3,gl=10;class Ms extends Ns{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ml()&&rl(),this.fallbackToPolling=Cs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nl()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gl):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ms.type="LOCAL";const bl=Ms;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ns{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ls.type="SESSION";const Us=Ls;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Lt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(t.origin,i)),a=await vl(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=gn("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function wl(n){pe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function kl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Il(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function El(){return $s()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="firebaseLocalStorageDb",Tl=1,Tt="firebaseLocalStorage",Fs="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ut(n,e){return n.transaction([Tt],e?"readwrite":"readonly").objectStore(Tt)}function Sl(){const n=indexedDB.deleteDatabase(Bs);return new at(n).toPromise()}function rn(){const n=indexedDB.open(Bs,Tl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Tt,{keyPath:Fs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Tt)?e(r):(r.close(),await Sl(),e(await rn()))})})}async function nr(n,e,t){const r=Ut(n,!0).put({[Fs]:e,value:t});return new at(r).toPromise()}async function Al(n,e){const t=Ut(n,!1).get(e),r=await new at(t).toPromise();return r===void 0?null:r.value}function rr(n,e){const t=Ut(n,!0).delete(e);return new at(t).toPromise()}const Cl=800,Rl=3;class js{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $s()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lt._getInstance(El()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kl(),!this.activeServiceWorker)return;this.sender=new yl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Il()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await nr(e,Et,"1"),await rr(e,Et),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Al(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ut(s,!1).getAll();return new at(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}js.type="LOCAL";const Ol=js;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Dl(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=he("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Pl().appendChild(r)})}function Nl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new it(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n,e){return e?be(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ps{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return We(e,this._buildIdpRequest())}_linkToIdToken(e,t){return We(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return We(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ml(n){return dl(n.auth,new bn(n),n.bypassAuthState)}function Ll(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),fl(t,new bn(n),n.bypassAuthState)}async function Ul(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),ul(t,new bn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ml;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Ll;default:me(this.auth,"internal-error")}}resolve(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new it(2e3,1e4);async function Bl(n,e,t){const r=Mt(n);Ma(n,e,_n);const s=zs(r,t);return new Ne(r,"signInViaPopup",e,s).executeNotNull()}class Ne extends Hs{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ne.currentPopupAction&&Ne.currentPopupAction.cancel(),Ne.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const e=gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ne.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$l.get())};e()}}Ne.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="pendingRedirect",mt=new Map;class jl extends Hs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mt.get(this.auth._key());if(!e){try{const r=await zl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mt.set(this.auth._key(),e)}return this.bypassAuthState||mt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zl(n,e){const t=Vl(e),r=Wl(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Hl(n,e){mt.set(n._key(),e)}function Wl(n){return be(n._redirectPersistence)}function Vl(n){return pt(Fl,n.config.apiKey,n.name)}async function ql(n,e,t=!1){const r=Mt(n),s=zs(r,e),o=await new jl(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=10*60*1e3;class Kl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ws(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(he(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gl&&this.cachedEventUids.clear(),this.cachedEventUids.has(sr(e))}saveEventToCache(e){this.cachedEventUids.add(sr(e)),this.lastProcessedEventTime=Date.now()}}function sr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ws({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ws(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(n,e={}){return Dt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;async function Ql(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yl(n);for(const t of e)try{if(Zl(t))return}catch{}me(n,"unauthorized-domain")}function Zl(n){const e=nn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!xl.test(t))return!1;if(Xl.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new it(3e4,6e4);function ir(){const n=pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tc(n){return new Promise((e,t)=>{var r,s,i;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),t(he(n,"network-request-failed"))},timeout:ec.get()})}if(!((s=(r=pe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pe().gapi)===null||i===void 0)&&i.load)o();else{const l=Nl("iframefcb");return pe()[l]=()=>{gapi.load?o():t(he(n,"network-request-failed"))},Dl(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw _t=null,e})}let _t=null;function nc(n){return _t=_t||tc(n),_t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new it(5e3,15e3),sc="__/auth/iframe",ic="emulator/auth/iframe",oc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ac=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lc(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hn(e,ic):`https://${n.config.authDomain}/${sc}`,r={apiKey:e.apiKey,appName:n.name,v:Pt},s=ac.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${st(r).slice(1)}`}async function cc(n){const e=await nc(n),t=pe().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:lc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oc,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=he(n,"network-request-failed"),l=pe().setTimeout(()=>{i(o)},rc.get());function a(){pe().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fc=500,dc=600,hc="_blank",pc="http://localhost";class or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mc(n,e,t,r=fc,s=dc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},uc),{width:r.toString(),height:s.toString(),top:i,left:o}),c=se().toLowerCase();t&&(l=Is(c)?hc:t),ks(c)&&(e=e||pc,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(tl(c)&&l!=="_self")return _c(e||"",l),new or(null);const d=window.open(e||"",l,u);U(d,n,"popup-blocked");try{d.focus()}catch{}return new or(d)}function _c(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="__/auth/handler",bc="emulator/auth/handler";function ar(n,e,t,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pt,eventId:s};if(e instanceof _n){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(i||{}))o[a]=c}if(e instanceof ot){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${vc(n)}?${st(l).slice(1)}`}function vc({config:n}){return n.emulator?hn(n,bc):`https://${n.authDomain}/${gc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="webStorageSupport";class yc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Us,this._completeRedirectFn=ql,this._overrideRedirectResult=Hl}async _openPopup(e,t,r,s){var i;ve((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ar(e,t,r,nn(),s);return mc(e,o,gn())}async _openRedirect(e,t,r,s){return await this._originValidation(e),wl(ar(e,t,r,nn(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ve(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cc(e),r=new Kl(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gt,{type:Gt},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gt];o!==void 0&&t(!!o),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ql(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cs()||mn()||Nt()}}const wc=yc;var lr="@firebase/auth",cr="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ec(n){Ze(new Ge("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((l,a)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:l.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rs(n)},u=new il(l,a,c);return Ua(u,t),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ze(new Ge("auth-internal",e=>{const t=Mt(e.getProvider("auth").getImmediate());return(r=>new kc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(lr,cr,Ic(n)),ze(lr,cr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=5*60,Sc=os("authIdTokenMaxAge")||Tc;let ur=null;const Ac=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sc)return;const s=t==null?void 0:t.token;ur!==s&&(ur=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cc(n=wa()){const e=us(n,"auth");if(e.isInitialized())return e.getImmediate();const t=La(n,{popupRedirectResolver:wc,persistence:[Ol,bl,Us]}),r=os("authTokenSyncURL");if(r){const i=Ac(r);pl(t,i,()=>i(t.currentUser)),hl(t,o=>i(o))}const s=lo("auth");return s&&ol(t,`http://${s}`),t}Ec("Browser");const Rc={apiKey:"AIzaSyAYrkxy8x6MVXmgDNeiwXGctzgi-oC1ISQ",authDomain:"bit-art-market.firebaseapp.com",projectId:"bit-art-market",storageBucket:"bit-art-market.appspot.com",messagingSenderId:"216348112827",appId:"1:216348112827:web:7c05b55cbe74d36ab6369e"},Oc=fs(Rc),Pc=Cc(Oc),Dc=new _e,Nc=async()=>{let n=null;try{const e=await Bl(Pc,Dc),{uid:t}=e.user;n=await ne.login(t)}catch(e){n={ok:!1,status:500,data:{msg:"Error authenticating Google account!"}},console.log(e)}return n};function Mc(n){let e,t,r;return{c(){e=b("button"),e.textContent="Sign in with Google",p(e,"class","svelte-14hvih2")},m(s,i){A(s,e,i),t||(r=F(e,"click",n[0]),t=!0)},p:L,i:L,o:L,d(s){s&&S(e),t=!1,r()}}}function Lc(n,e,t){let{callback:r=o=>{}}=e,{precall:s=()=>{}}=e;const i=async()=>{s==null||s();const o=await Nc();r(o)};return n.$$set=o=>{"callback"in o&&t(1,r=o.callback),"precall"in o&&t(2,s=o.precall)},[i,r,s]}class Uc extends X{constructor(e){super(),Y(this,e,Lc,Mc,J,{callback:1,precall:2})}}function $c(n){let e,t;return e=new Ot({}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p:L,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Bc(n){let e,t,r,s,i,o,l;return s=new Uc({props:{callback:n[1],precall:n[2]}}),{c(){e=b("main"),t=b("h1"),t.textContent="Login",r=C(),q(s.$$.fragment),i=C(),o=b("p"),o.textContent="More sign in methods coming soon...",p(o,"class","hint"),p(e,"class","flex-page svelte-dgszhc")},m(a,c){A(a,e,c),h(e,t),h(e,r),W(s,e,null),h(e,i),h(e,o),l=!0},p(a,c){const u={};c&1&&(u.precall=a[2]),s.$set(u)},i(a){l||(O(s.$$.fragment,a),l=!0)},o(a){N(s.$$.fragment,a),l=!1},d(a){a&&S(e),V(s)}}}function Fc(n){let e,t,r,s;const i=[Bc,$c],o=[];function l(a,c){return a[0]?1:0}return e=l(n),t=o[e]=i[e](n),{c(){t.c(),r=ce()},m(a,c){o[e].m(a,c),A(a,r,c),s=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(ee(),N(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(a,c):(t=o[e]=i[e](a),t.c()),O(t,1),t.m(r.parentNode,r))},i(a){s||(O(t),s=!0)},o(a){N(t),s=!1},d(a){o[e].d(a),a&&S(r)}}}function jc(n,e,t){let r;K(n,Z,a=>t(3,r=a)),r!=null&&oe("/home");let s=!1;const i=(a,c,u)=>{H.set({theme:a,msg:c}),oe(u)};return[s,a=>{t(0,s=!1),a.ok?a.data.set_username===!0?i("info",a.data.msg,"/set-name"):(x(Z,r={username:a.data.username,coins:a.data.coins},r),i("success",a.data.msg,"/home")):i("error",a.data.msg,"/login")},()=>{t(0,s=!0)}]}class zc extends X{constructor(e){super(),Y(this,e,jc,Fc,J,{})}}function Hc(n){let e,t,r,s,i,o,l,a,c,u,d,f,m;return{c(){e=b("main"),t=b("h1"),t.textContent="Set Your Username",r=C(),s=b("div"),i=b("input"),o=C(),l=b("button"),a=$("Set"),u=C(),d=b("p"),d.innerHTML="Must not contain<br/>illegal characters or spaces!",p(i,"type","username"),p(i,"placeholder","my_unique_display_name"),l.disabled=c=!n[1],p(d,"class","hint svelte-1kk2jjc"),z(d,"invalid",!n[1]),p(e,"class","flex-page svelte-1kk2jjc")},m(g,w){A(g,e,w),h(e,t),h(e,r),h(e,s),h(s,i),gt(i,n[0]),h(s,o),h(s,l),h(l,a),h(e,u),h(e,d),f||(m=[F(i,"input",n[3]),F(l,"click",n[2])],f=!0)},p(g,[w]){w&1&&gt(i,g[0]),w&2&&c!==(c=!g[1])&&(l.disabled=c),w&2&&z(d,"invalid",!g[1])},i:L,o:L,d(g){g&&S(e),f=!1,ie(m)}}}function Wc(n,e,t){let r,s;K(n,Z,c=>t(4,s=c)),s!=null&&oe("/home");let i="";const o=(c,u,d)=>{H.set({theme:c,msg:u}),d&&oe(d)},l=async()=>{const c=await ne.setName(i);c.ok?(x(Z,s={username:c.data.username,coins:c.data.coins},s),o("success",c.data.msg,null),oe("/home")):o("error",c.data.msg,null)};function a(){i=this.value,t(0,i)}return n.$$.update=()=>{n.$$.dirty&1&&t(1,r=/^[0-9a-zA-Z_.-]*$/.test(i))},[i,r,l,a]}class Vc extends X{constructor(e){super(),Y(this,e,Wc,Hc,J,{})}}function qc(n){let e;return{c(){e=b("main"),e.innerHTML="<h1>404, page not found ):</h1>",p(e,"class","flex-page")},m(t,r){A(t,e,r)},p:L,i:L,o:L,d(t){t&&S(e)}}}class Gc extends X{constructor(e){super(),Y(this,e,null,qc,J,{})}}function fr(n,e,t){const r=n.slice();return r[7]=e[t][0],r[8]=e[t][1][0],r[9]=e[t][1][1],r[10]=e[t][1][2],r}function dr(n){let e,t,r=n[7]+"",s,i,o,l,a,c,u,d,f,m,g;function w(){return n[6](n[7])}return{c(){e=b("div"),t=b("h3"),s=$(r),i=C(),o=b("div"),l=b("div"),a=C(),c=b("div"),u=C(),d=b("div"),f=C(),p(t,"class","svelte-1u4om0o"),p(l,"class","color svelte-1u4om0o"),j(l,"background-color",n[8]),j(l,"border-color",n[10]+"33"),p(c,"class","color svelte-1u4om0o"),j(c,"background-color",n[9]),j(c,"border-color",n[8]+"33"),p(d,"class","color svelte-1u4om0o"),j(d,"background-color",n[10]),j(d,"border-color",n[9]+"33"),p(o,"class","colors svelte-1u4om0o"),p(e,"class","color-wrapper svelte-1u4om0o"),z(e,"interactable",n[2])},m(_,I){A(_,e,I),h(e,t),h(t,s),h(e,i),h(e,o),h(o,l),h(o,a),h(o,c),h(o,u),h(o,d),h(e,f),m||(g=F(e,"click",w),m=!0)},p(_,I){n=_,I&4&&z(e,"interactable",n[2])},d(_){_&&S(e),m=!1,g()}}}function Kc(n){let e,t,r,s,i,o,l,a=n[3],c=[];for(let u=0;u<a.length;u+=1)c[u]=dr(fr(n,a,u));return{c(){e=b("main"),t=b("h2"),r=$(n[0]),s=C(),i=b("div");for(let u=0;u<c.length;u+=1)c[u].c();p(t,"class","svelte-1u4om0o"),p(i,"id","wrapper"),p(i,"class","svelte-1u4om0o"),p(e,"class","svelte-1u4om0o")},m(u,d){A(u,e,d),h(e,t),h(t,r),h(e,s),h(e,i);for(let f=0;f<c.length;f+=1)c[f].m(i,null);o||(l=F(e,"click",n[5]),o=!0)},p(u,[d]){if(d&1&&Q(r,u[0]),d&14){a=u[3];let f;for(f=0;f<a.length;f+=1){const m=fr(u,a,f);c[f]?c[f].p(m,d):(c[f]=dr(m),c[f].c(),c[f].m(i,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=a.length}},i:L,o:L,d(u){u&&S(e),ae(c,u),o=!1,l()}}}function Jc(n,e,t){let{title:r}=e,{clickColor:s=u=>{}}=e,{interactable:i=!0}=e,{hide_bw:o=!1}=e;const l=o?Object.entries(re.palette_map).slice(1):Object.entries(re.palette_map);function a(u){Kt.call(this,n,u)}const c=u=>s(u);return n.$$set=u=>{"title"in u&&t(0,r=u.title),"clickColor"in u&&t(1,s=u.clickColor),"interactable"in u&&t(2,i=u.interactable),"hide_bw"in u&&t(4,o=u.hide_bw)},[r,s,i,l,o,a,c]}class Vs extends X{constructor(e){super(),Y(this,e,Jc,Kc,J,{title:0,clickColor:1,interactable:2,hide_bw:4})}}function hr(n,e,t){const r=n.slice();return r[19]=e[t],r[21]=t,r}function pr(n){let e,t,r;function s(){return n[11](n[21])}return{c(){e=b("div"),p(e,"class","color svelte-vkc1ky"),j(e,"background-color",n[19]),z(e,"selected",n[2]==n[21])},m(i,o){A(i,e,o),t||(r=F(e,"click",s),t=!0)},p(i,o){n=i,o&8&&j(e,"background-color",n[19]),o&4&&z(e,"selected",n[2]==n[21])},d(i){i&&S(e),t=!1,r()}}}function mr(n){let e,t;return e=new Vs({props:{title:"Test out a color palette!",clickColor:n[6]}}),e.$on("click",n[13]),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p:L,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Yc(n){let e,t,r,s,i,o,l,a,c,u,d,f,m,g=n[3],w=[];for(let I=0;I<g.length;I+=1)w[I]=pr(hr(n,g,I));let _=n[1]&&mr(n);return{c(){e=b("main"),t=b("div"),r=b("i"),s=C();for(let I=0;I<w.length;I+=1)w[I].c();i=C(),o=b("i"),l=C(),a=b("canvas"),c=C(),_&&_.c(),u=ce(),p(r,"class","bi bi-palette svelte-vkc1ky"),p(r,"id","palette-btn"),p(o,"class","bi bi-droplet-half svelte-vkc1ky"),p(o,"id","fill"),p(t,"id","colors"),p(t,"class","svelte-vkc1ky"),j(a,"width",n[4]+"px"),j(a,"height",n[4]+"px"),p(a,"class","svelte-vkc1ky")},m(I,T){A(I,e,T),h(e,t),h(t,r),h(t,s);for(let k=0;k<w.length;k+=1)w[k].m(t,null);h(t,i),h(t,o),h(e,l),h(e,a),n[12](a),A(I,c,T),_&&_.m(I,T),A(I,u,T),d=!0,f||(m=[F(r,"click",n[10]),F(o,"click",n[5])],f=!0)},p(I,[T]){if(T&12){g=I[3];let k;for(k=0;k<g.length;k+=1){const E=hr(I,g,k);w[k]?w[k].p(E,T):(w[k]=pr(E),w[k].c(),w[k].m(t,i))}for(;k<w.length;k+=1)w[k].d(1);w.length=g.length}I[1]?_?(_.p(I,T),T&2&&O(_,1)):(_=mr(I),_.c(),O(_,1),_.m(u.parentNode,u)):_&&(ee(),N(_,1,1,()=>{_=null}),te())},i(I){d||(O(_),d=!0)},o(I){N(_),d=!1},d(I){I&&S(e),ae(w,I),n[12](null),I&&S(c),_&&_.d(I),I&&S(u),f=!1,ie(m)}}}function Xc(n,e,t){let r,s,i,a={px:0,py:0,over:!1,down:!1},{pixels:c=[]}=e,u="B&W",d=!1;const f=()=>{es(i,c.join(""),!1,r)},m=()=>{a.down&&a.px>=0&&(t(7,c[a.px+a.py*16]=I,c),f(),g())},g=()=>{t(8,i.strokeStyle="#aaa",i),t(8,i.lineWidth=1,i),i.strokeRect(a.px*24,a.py*24,24,24)};Ce(()=>{c.length==0&&t(7,c=[...Array(256)].fill(0)),t(8,i=s.getContext("2d")),t(0,s.width=384,s),t(0,s.height=384,s),f();const y=R=>{a.px=Math.floor(R.offsetX/24),a.py=Math.floor(R.offsetY/24)};t(0,s.onpointerenter=()=>{a.over=!0},s),t(0,s.onpointerleave=()=>{a.over=!1,f(),a.down=!1},s),t(0,s.onpointerdown=R=>{a.down=!0,y(R),m()},s),t(0,s.onpointerup=()=>{a.down=!1},s),t(0,s.onpointermove=R=>{y(R),m(),f(),g()},s)});const w=()=>{c.fill(I),t(7,c[0]=I,c),f()},_=y=>{t(9,u=y)};let I=0;const T=()=>{t(1,d=!0)},k=y=>{t(2,I=y)};function E(y){Qe[y?"unshift":"push"](()=>{s=y,t(0,s)})}const v=()=>{t(1,d=!1)};return n.$$set=y=>{"pixels"in y&&t(7,c=y.pixels)},n.$$.update=()=>{n.$$.dirty&512&&t(3,r=re.palette_map[u]??re.palette_map["B&W"]),n.$$.dirty&768&&i&&u&&f()},[s,d,I,r,384,w,_,c,i,u,T,k,E,v]}class xc extends X{constructor(e){super(),Y(this,e,Xc,Yc,J,{pixels:7})}}function Qc(n){let e,t,r,s,i;return{c(){e=b("button"),e.textContent="Can't afford!",t=C(),r=b("p"),r.textContent="It's unique!",e.disabled=!0,p(e,"class","svelte-l3fpc1"),p(r,"class","svelte-l3fpc1")},m(o,l){A(o,e,l),A(o,t,l),A(o,r,l),s||(i=F(e,"click",null),s=!0)},p:L,d(o){o&&S(e),o&&S(t),o&&S(r),s=!1,i()}}}function Zc(n){let e,t,r,s,i;return{c(){e=b("button"),e.textContent="Publish art!",t=C(),r=b("p"),r.textContent="It's unique!",p(e,"class","svelte-l3fpc1"),p(r,"class","svelte-l3fpc1")},m(o,l){A(o,e,l),A(o,t,l),A(o,r,l),s||(i=F(e,"click",n[5]),s=!0)},p:L,d(o){o&&S(e),o&&S(t),o&&S(r),s=!1,i()}}}function eu(n){let e,t,r,s,i;return{c(){e=b("button"),t=$("Check uniqueness"),e.disabled=r=n[1]!=null,p(e,"class","svelte-l3fpc1")},m(o,l){A(o,e,l),h(e,t),s||(i=F(e,"click",n[4]),s=!0)},p(o,l){l&2&&r!==(r=o[1]!=null)&&(e.disabled=r)},d(o){o&&S(e),s=!1,i()}}}function _r(n){let e,t,r,s,i,o,l;return{c(){e=b("p"),t=b("a"),r=$(n[1]),i=$(" owns this piece!"),p(t,"href",s="/gallery/"+n[1]),p(t,"target","_blank"),p(t,"rel","noreferrer"),p(t,"class","svelte-l3fpc1"),p(e,"class","svelte-l3fpc1")},m(a,c){A(a,e,c),h(e,t),h(t,r),h(e,i),o||(l=ue(fe.call(null,t)),o=!0)},p(a,c){c&2&&Q(r,a[1]),c&2&&s!==(s="/gallery/"+a[1])&&p(t,"href",s)},d(a){a&&S(e),o=!1,l()}}}function tu(n){let e,t,r,s,i,o,l,a,c,u,d,f;function m(k){n[7](k)}let g={};n[0]!==void 0&&(g.pixels=n[0]),r=new xc({props:g}),Qe.push(()=>oi(r,"pixels",m));function w(k,E){return k[2]?k[3]?Zc:Qc:eu}let _=w(n),I=_(n),T=n[1]&&_r(n);return{c(){e=b("main"),t=b("div"),q(r.$$.fragment),i=C(),o=b("section"),l=b("h1"),a=$("Art Cost: "),c=b("i"),c.textContent=`${re.art_cost}`,u=C(),I.c(),d=C(),T&&T.c(),p(c,"class","bi bi-coin svelte-l3fpc1"),p(l,"class","cash svelte-l3fpc1"),p(l,"id","cost"),p(o,"class","svelte-l3fpc1"),p(t,"id","content"),p(t,"class","svelte-l3fpc1"),p(e,"class","flex-page")},m(k,E){A(k,e,E),h(e,t),W(r,t,null),h(t,i),h(t,o),h(o,l),h(l,a),h(l,c),h(o,u),I.m(o,null),h(o,d),T&&T.m(o,null),f=!0},p(k,[E]){const v={};!s&&E&1&&(s=!0,v.pixels=k[0],si(()=>s=!1)),r.$set(v),_===(_=w(k))&&I?I.p(k,E):(I.d(1),I=_(k),I&&(I.c(),I.m(o,d))),k[1]?T?T.p(k,E):(T=_r(k),T.c(),T.m(o,null)):T&&(T.d(1),T=null)},i(k){f||(O(r.$$.fragment,k),f=!0)},o(k){N(r.$$.fragment,k),f=!1},d(k){k&&S(e),V(r),I.d(),T&&T.d()}}}function nu(n,e,t){let r,s,i;K(n,Z,f=>t(6,i=f)),i==null&&oe("/login");let o=Array.from("0000000000001111001110000110111101122000000001110111100001000011001010000001000022222220001000102222220000001010220000000000000020000000000000000000000000000000000000000000000000000000000000000020002000200020022002200220022022222222222222222222222222222222").map(f=>+f),l=null,a=!1;const c=async()=>{const f=await ne.artExists(r);f.ok?f.data.exists?t(1,l=f.data.owner):t(2,a=!0):H.set({theme:"error",msg:f.data.msg})},u=async()=>{var m;const f=await ne.publishArt(r);if(!f.ok)return H.set({theme:"error",msg:((m=f==null?void 0:f.data)==null?void 0:m.msg)??"Can't publish art!"});x(Z,i.coins-=re.art_cost,i),H.set({theme:"success",msg:f.data.msg}),oe("/home")};function d(f){o=f,t(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&(r=wi(o)),n.$$.dirty&64&&t(3,s=i.coins>=re.art_cost),n.$$.dirty&1&&o&&(t(1,l=null),t(2,a=!1))},[o,l,a,s,c,u,i,d]}class ru extends X{constructor(e){super(),Y(this,e,nu,tu,J,{})}}function gr(n,e,t){const r=n.slice();return r[9]=e[t][0],r[10]=e[t][1],r[12]=t,r}function su(n){let e,t,r,s;return{c(){e=b("nav"),t=b("a"),t.innerHTML='<i class="bi bi-box-arrow-in-right svelte-z39ceh"></i>',p(t,"href","/login"),p(t,"class","svelte-z39ceh"),p(e,"class","svelte-z39ceh")},m(i,o){A(i,e,o),h(e,t),r||(s=ue(fe.call(null,t)),r=!0)},p:L,d(i){i&&S(e),r=!1,s()}}}function iu(n){let e,t,r=n[2].username+"",s,i,o,l,a,c,u=n[2].coins+"",d,f,m,g,w,_,I,T,k=n[4],E=[];for(let v=0;v<k.length;v+=1)E[v]=br(gr(n,k,v));return{c(){e=b("h3"),t=b("a"),s=$(r),o=C(),l=b("br"),a=C(),c=b("i"),d=$(u),m=C(),g=b("nav");for(let v=0;v<E.length;v+=1)E[v].c();w=C(),_=b("a"),_.innerHTML='<i class="bi bi-arrow-left-square-fill svelte-z39ceh"></i>',p(t,"href",i="/gallery/"+n[2].username),p(t,"class","svelte-z39ceh"),p(c,"class","bi bi-coin svelte-z39ceh"),p(e,"id","user-txt"),p(e,"class","svelte-z39ceh"),bt(()=>n[5].call(e)),p(g,"class","svelte-z39ceh"),p(_,"href","/"),p(_,"id","home"),p(_,"class","svelte-z39ceh")},m(v,y){A(v,e,y),h(e,t),h(t,s),h(e,o),h(e,l),h(e,a),h(e,c),h(c,d),f=Zs(e,n[5].bind(e)),A(v,m,y),A(v,g,y);for(let R=0;R<E.length;R+=1)E[R].m(g,null);A(v,w,y),A(v,_,y),I||(T=[ue(fe.call(null,t)),ue(fe.call(null,_))],I=!0)},p(v,y){if(y&4&&r!==(r=v[2].username+"")&&Q(s,r),y&4&&i!==(i="/gallery/"+v[2].username)&&p(t,"href",i),y&4&&u!==(u=v[2].coins+"")&&Q(d,u),y&24){k=v[4];let R;for(R=0;R<k.length;R+=1){const D=gr(v,k,R);E[R]?E[R].p(D,y):(E[R]=br(D),E[R].c(),E[R].m(g,null))}for(;R<E.length;R+=1)E[R].d(1);E.length=k.length}},d(v){v&&S(e),f(),v&&S(m),v&&S(g),ae(E,v),v&&S(w),v&&S(_),I=!1,ie(T)}}}function br(n){let e,t,r,s;return{c(){e=b("a"),t=b("i"),p(t,"class","bi "+n[10]+" svelte-z39ceh"),p(e,"href",n[9]),p(e,"class","svelte-z39ceh"),z(e,"selected",n[3].includes(n[9]))},m(i,o){A(i,e,o),h(e,t),r||(s=ue(fe.call(null,e)),r=!0)},p(i,o){o&24&&z(e,"selected",i[3].includes(i[9]))},d(i){i&&S(e),r=!1,s()}}}function ou(n){let e,t,r,s,i,o,l,a,c;function u(m,g){return m[2]!=null?iu:su}let d=u(n),f=d(n);return{c(){e=b("main"),t=b("i"),r=C(),f.c(),s=C(),i=b("i"),o=C(),l=b("div"),p(t,"class","bi bi-list svelte-z39ceh"),j(e,"clip-path","inset(0 -"+n[1]+"px 0 0)"),p(e,"class","svelte-z39ceh"),z(e,"open",n[0]),p(i,"class","bi bi-list svelte-z39ceh"),p(i,"id","menu-toggle"),p(l,"id","nav-backdrop"),p(l,"class","svelte-z39ceh")},m(m,g){A(m,e,g),h(e,t),h(e,r),f.m(e,null),A(m,s,g),A(m,i,g),A(m,o,g),A(m,l,g),a||(c=[F(e,"click",n[6]),F(i,"click",n[7])],a=!0)},p(m,[g]){d===(d=u(m))&&f?f.p(m,g):(f.d(1),f=d(m),f&&(f.c(),f.m(e,null))),g&2&&j(e,"clip-path","inset(0 -"+m[1]+"px 0 0)"),g&1&&z(e,"open",m[0])},i:L,o:L,d(m){m&&S(e),f.d(),m&&S(s),m&&S(i),m&&S(o),m&&S(l),a=!1,ie(c)}}}function au(n,e,t){let r,s,i;K(n,Xt,f=>t(8,r=f)),K(n,Z,f=>t(2,s=f)),K(n,di,f=>t(3,i=f));let o=!0,l=0;const a=[["/home","bi-house-fill"],["/social","bi-people-fill"],["/search/popular","bi-search"],["/canvas","bi-easel-fill"],["/shop","bi-cart-fill"]];function c(){l=this.clientWidth,t(1,l)}const u=()=>H.set({theme:"info",msg:null}),d=()=>{t(0,o=!o)};return n.$$.update=()=>{n.$$.dirty&1&&x(Xt,r=o,r)},[o,l,s,i,a,c,u,d]}class lu extends X{constructor(e){super(),Y(this,e,au,ou,J,{})}}function vr(n,e,t){const r=n.slice();return r[11]=e[t],r}function yr(n){let e,t=n[11]+"",r,s,i;function o(){return n[8](n[11])}return{c(){e=b("p"),r=$(t),p(e,"class","filter svelte-1ycatnw"),z(e,"selected",n[3]==n[11])},m(l,a){A(l,e,a),h(e,r),s||(i=F(e,"click",o),s=!0)},p(l,a){n=l,a&24&&z(e,"selected",n[3]==n[11])},d(l){l&&S(e),s=!1,i()}}}function cu(n){let e,t,r,s,i,o,l,a,c,u=n[0]+1+"",d,f,m,g,w,_,I,T,k=n[4],E=[];for(let v=0;v<k.length;v+=1)E[v]=yr(vr(n,k,v));return w=new ln({props:{gallery:n[1],hide_owner:!0}}),{c(){e=b("main"),t=b("section"),r=b("div");for(let v=0;v<E.length;v+=1)E[v].c();s=C(),i=b("div"),o=b("i"),l=C(),a=b("b"),c=$("Page: "),d=$(u),f=C(),m=b("i"),g=C(),q(w.$$.fragment),p(r,"id","filters"),p(r,"class","svelte-1ycatnw"),z(r,"loading",n[2]),p(o,"class","bi bi-arrow-left-circle-fill arrow svelte-1ycatnw"),z(o,"disabled",n[0]<=0),p(m,"class","bi bi-arrow-right-circle-fill arrow svelte-1ycatnw"),p(i,"id","page-number"),p(i,"class","svelte-1ycatnw"),p(t,"id","art-wrapper"),p(t,"class","svelte-1ycatnw"),p(e,"class","flex-page svelte-1ycatnw")},m(v,y){A(v,e,y),h(e,t),h(t,r);for(let R=0;R<E.length;R+=1)E[R].m(r,null);h(t,s),h(t,i),h(i,o),h(i,l),h(i,a),h(a,c),h(a,d),h(i,f),h(i,m),h(t,g),W(w,t,null),_=!0,I||(T=[F(o,"click",n[9]),F(m,"click",n[10])],I=!0)},p(v,[y]){if(y&56){k=v[4];let D;for(D=0;D<k.length;D+=1){const P=vr(v,k,D);E[D]?E[D].p(P,y):(E[D]=yr(P),E[D].c(),E[D].m(r,null))}for(;D<E.length;D+=1)E[D].d(1);E.length=k.length}(!_||y&4)&&z(r,"loading",v[2]),(!_||y&1)&&z(o,"disabled",v[0]<=0),(!_||y&1)&&u!==(u=v[0]+1+"")&&Q(d,u);const R={};y&2&&(R.gallery=v[1]),w.$set(R)},i(v){_||(O(w.$$.fragment,v),_=!0)},o(v){N(w.$$.fragment,v),_=!1},d(v){v&&S(e),ae(E,v),V(w),I=!1,ie(T)}}}function uu(n,e,t){let r,{params:s={filter:"popular"}}=e,i=["new","old","expensive","cheap","popular","unpopular"],o=0,l=null,a=!1;const c=async g=>{if(t(0,o=0),t(1,l=null),i.includes(r))H.set({theme:"error",msg:null}),oe(`/search/${g}`);else return oe("/search/popular"),H.set({theme:"error",msg:"Invalid filter!"});await u(o,g)},u=async(g,w=r)=>{var I;t(1,l=null),t(2,a=!0);const _=await ne.getArtByFilter(w,8,g);if(t(2,a=!1),!_.ok)return H.set({theme:"error",msg:((I=_==null?void 0:_.data)==null?void 0:I.msg)??"Can't get art!"});t(1,l=_.data.result)};Ce(()=>{c(r)});const d=g=>c(g),f=()=>u(t(0,--o)),m=()=>u(t(0,++o));return n.$$set=g=>{"params"in g&&t(7,s=g.params)},n.$$.update=()=>{n.$$.dirty&128&&t(3,r=s.filter)},[o,l,a,r,i,c,u,s,d,f,m]}class fu extends X{constructor(e){super(),Y(this,e,uu,cu,J,{params:7})}}function wr(n,e,t){const r=n.slice();return r[3]=e[t].username,r[4]=e[t].top_three,r}function kr(n,e,t){const r=n.slice();return r[7]=e[t],r}function du(n){let e,t;return e=new Ot({}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p:L,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function hu(n){let e,t,r,s=n[0],i=[];for(let l=0;l<s.length;l+=1)i[l]=Er(wr(n,s,l));const o=l=>N(i[l],1,1,()=>{i[l]=null});return{c(){e=b("main");for(let l=0;l<i.length;l+=1)i[l].c();p(e,"class","flex-page svelte-ut0or3"),p(e,"style",t=n[1]&&"max-width: calc(100vw - 4.5rem);")},m(l,a){A(l,e,a);for(let c=0;c<i.length;c+=1)i[c].m(e,null);r=!0},p(l,a){if(a&1){s=l[0];let c;for(c=0;c<s.length;c+=1){const u=wr(l,s,c);i[c]?(i[c].p(u,a),O(i[c],1)):(i[c]=Er(u),i[c].c(),O(i[c],1),i[c].m(e,null))}for(ee(),c=s.length;c<i.length;c+=1)o(c);te()}(!r||a&2&&t!==(t=l[1]&&"max-width: calc(100vw - 4.5rem);"))&&p(e,"style",t)},i(l){if(!r){for(let a=0;a<s.length;a+=1)O(i[a]);r=!0}},o(l){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)N(i[a]);r=!1},d(l){l&&S(e),ae(i,l)}}}function Ir(n){let e,t;return e=new Rt({props:{art_data:n[7],show_details:!1}}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[7]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Er(n){let e,t,r,s=n[3]+"",i,o,l,a,c,u,d,f,m,g,w=n[4],_=[];for(let T=0;T<w.length;T+=1)_[T]=Ir(kr(n,w,T));const I=T=>N(_[T],1,1,()=>{_[T]=null});return{c(){e=b("section"),t=b("h2"),r=b("a"),i=$(s),l=C(),a=b("span"),a.textContent="(Top three pieces)",c=C(),u=b("div");for(let T=0;T<_.length;T+=1)_[T].c();d=C(),p(r,"href",o="/gallery/"+n[3]),p(r,"class","svelte-ut0or3"),p(a,"class","hint svelte-ut0or3"),p(t,"class","username svelte-ut0or3"),p(u,"class","art-row svelte-ut0or3"),p(e,"class","svelte-ut0or3")},m(T,k){A(T,e,k),h(e,t),h(t,r),h(r,i),h(t,l),h(t,a),h(e,c),h(e,u);for(let E=0;E<_.length;E+=1)_[E].m(u,null);h(e,d),f=!0,m||(g=ue(fe.call(null,r)),m=!0)},p(T,k){if((!f||k&1)&&s!==(s=T[3]+"")&&Q(i,s),(!f||k&1&&o!==(o="/gallery/"+T[3]))&&p(r,"href",o),k&1){w=T[4];let E;for(E=0;E<w.length;E+=1){const v=kr(T,w,E);_[E]?(_[E].p(v,k),O(_[E],1)):(_[E]=Ir(v),_[E].c(),O(_[E],1),_[E].m(u,null))}for(ee(),E=w.length;E<_.length;E+=1)I(E);te()}},i(T){if(!f){for(let k=0;k<w.length;k+=1)O(_[k]);f=!0}},o(T){_=_.filter(Boolean);for(let k=0;k<_.length;k+=1)N(_[k]);f=!1},d(T){T&&S(e),ae(_,T),m=!1,g()}}}function pu(n){let e,t,r,s;const i=[hu,du],o=[];function l(a,c){return a[0]?0:1}return e=l(n),t=o[e]=i[e](n),{c(){t.c(),r=ce()},m(a,c){o[e].m(a,c),A(a,r,c),s=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(ee(),N(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(a,c):(t=o[e]=i[e](a),t.c()),O(t,1),t.m(r.parentNode,r))},i(a){s||(O(t),s=!0)},o(a){N(t),s=!1},d(a){o[e].d(a),a&&S(r)}}}function mu(n,e,t){let r,s;K(n,Z,o=>t(2,r=o)),K(n,Xt,o=>t(1,s=o)),r==null&&oe("/login");let i=null;return Ce(async()=>{var l;const o=await ne.getFollowingPopular();if(!o.ok)return H.set({theme:"error",msg:((l=o==null?void 0:o.data)==null?void 0:l.msg)??"Can't get your following!"});t(0,i=o.data.results)}),[i,s]}class _u extends X{constructor(e){super(),Y(this,e,mu,pu,J,{})}}function Tr(n,e,t){const r=n.slice();return r[1]=e[t],r}function Sr(n){let e,t,r,s,i=n[0],o=[];for(let a=0;a<i.length;a+=1)o[a]=Ar(Tr(n,i,a));const l=a=>N(o[a],1,1,()=>{o[a]=null});return{c(){e=b("p"),e.textContent="Here are some examples...",t=C(),r=b("div");for(let a=0;a<o.length;a+=1)o[a].c();p(e,"class","hint svelte-1irau7l"),p(r,"id","art"),p(r,"class","svelte-1irau7l")},m(a,c){A(a,e,c),A(a,t,c),A(a,r,c);for(let u=0;u<o.length;u+=1)o[u].m(r,null);s=!0},p(a,c){if(c&1){i=a[0];let u;for(u=0;u<i.length;u+=1){const d=Tr(a,i,u);o[u]?(o[u].p(d,c),O(o[u],1)):(o[u]=Ar(d),o[u].c(),O(o[u],1),o[u].m(r,null))}for(ee(),u=i.length;u<o.length;u+=1)l(u);te()}},i(a){if(!s){for(let c=0;c<i.length;c+=1)O(o[c]);s=!0}},o(a){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)N(o[c]);s=!1},d(a){a&&S(e),a&&S(t),a&&S(r),ae(o,a)}}}function Ar(n){let e,t;return e=new Rt({props:{art_data:n[1]}}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[1]),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function gu(n){let e,t,r,s,i,o,l,a,c,u,d,f,m,g,w,_,I,T,k,E,v=n[0].length>0&&Sr(n);return{c(){e=b("main"),t=b("header"),t.innerHTML=`<h1 class="svelte-1irau7l">TryteMart 32</h1> 
        <p class="svelte-1irau7l">It&#39;s like NFTs without the blockchain</p> 
        
        <a href="#three-random"><i class="arrow bi bi-arrow-down-short svelte-1irau7l"></i></a>`,r=C(),s=b("section"),i=b("h1"),i.innerHTML="Find, Like, Purchase, and Appreciate<br/>Pixel Art",o=C(),v&&v.c(),l=C(),a=b("a"),a.innerHTML='<i class="arrow bi bi-arrow-down-short svelte-1irau7l"></i>',c=C(),u=b("section"),u.innerHTML=`<h1 class="svelte-1irau7l">Simplicity is Key</h1> 
        <p class="svelte-1irau7l">Only three colors and 16x16 pixels</p> 
        <div id="colors" class="svelte-1irau7l"><div class="color svelte-1irau7l"></div> 
            <div class="color svelte-1irau7l"></div> 
            <div class="color svelte-1irau7l"></div></div> 
        <a href="#login"><i class="arrow bi bi-arrow-down-short svelte-1irau7l"></i></a>`,d=C(),f=b("section"),m=b("a"),m.innerHTML='<h1 class="svelte-1irau7l">Signup</h1>',g=C(),w=b("p"),w.textContent="Or",_=C(),I=b("a"),I.innerHTML='<h1 class="svelte-1irau7l">FAQ</h1>',p(t,"class","svelte-1irau7l"),p(i,"class","svelte-1irau7l"),p(a,"href","#examples"),p(s,"id","three-random"),p(s,"class","svelte-1irau7l"),p(u,"id","examples"),p(u,"class","svelte-1irau7l"),p(m,"href","/login"),p(m,"class","svelte-1irau7l"),p(w,"class","hint svelte-1irau7l"),p(I,"href","/faq"),p(I,"class","svelte-1irau7l"),p(f,"id","login"),p(f,"class","svelte-1irau7l")},m(y,R){A(y,e,R),h(e,t),h(e,r),h(e,s),h(s,i),h(s,o),v&&v.m(s,null),h(s,l),h(s,a),h(e,c),h(e,u),h(e,d),h(e,f),h(f,m),h(f,g),h(f,w),h(f,_),h(f,I),T=!0,k||(E=[ue(fe.call(null,m)),ue(fe.call(null,I))],k=!0)},p(y,[R]){y[0].length>0?v?(v.p(y,R),R&1&&O(v,1)):(v=Sr(y),v.c(),O(v,1),v.m(s,l)):v&&(ee(),N(v,1,1,()=>{v=null}),te())},i(y){T||(O(v),T=!0)},o(y){N(v),T=!1},d(y){y&&S(e),v&&v.d(),k=!1,ie(E)}}}function bu(n,e,t){let r=[];return Ce(async()=>{var i;const s=await ne.threeRandom();if(!s.ok)return H.set({theme:"error",msg:((i=s==null?void 0:s.data)==null?void 0:i.msg)??"Can't fetch resources!"});t(0,r=s.data.result)}),[r]}class vu extends X{constructor(e){super(),Y(this,e,bu,gu,J,{})}}function Cr(n){var g;let e,t,r,s=n[0].username+"",i,o,l,a,c,u,d,f=n[4]!=null&&n[4].username!=n[0].username&&Rr(n),m=((g=n[2])==null?void 0:g.length)==0&&Or(n);return u=new ln({props:{gallery:n[2]}}),{c(){e=b("main"),t=b("h1"),r=b("i"),i=$(s),o=$("'s Gallery"),l=C(),f&&f.c(),a=C(),m&&m.c(),c=C(),q(u.$$.fragment),p(r,"class","svelte-1g1tgca"),p(t,"class","svelte-1g1tgca"),p(e,"class","flex-page svelte-1g1tgca")},m(w,_){A(w,e,_),h(e,t),h(t,r),h(r,i),h(t,o),h(e,l),f&&f.m(e,null),h(e,a),m&&m.m(e,null),h(e,c),W(u,e,null),d=!0},p(w,_){var T;(!d||_&1)&&s!==(s=w[0].username+"")&&Q(i,s),w[4]!=null&&w[4].username!=w[0].username?f?f.p(w,_):(f=Rr(w),f.c(),f.m(e,a)):f&&(f.d(1),f=null),((T=w[2])==null?void 0:T.length)==0?m?m.p(w,_):(m=Or(w),m.c(),m.m(e,c)):m&&(m.d(1),m=null);const I={};_&4&&(I.gallery=w[2]),u.$set(I)},i(w){d||(O(u.$$.fragment,w),d=!0)},o(w){N(u.$$.fragment,w),d=!1},d(w){w&&S(e),f&&f.d(),m&&m.d(),V(u)}}}function Rr(n){let e,t,r,s;return{c(){e=b("p"),t=$(n[3]),p(e,"id","toggle-follow"),p(e,"class","svelte-1g1tgca"),z(e,"following",n[1])},m(i,o){A(i,e,o),h(e,t),r||(s=F(e,"click",n[5]),r=!0)},p(i,o){o&8&&Q(t,i[3]),o&2&&z(e,"following",i[1])},d(i){i&&S(e),r=!1,s()}}}function Or(n){let e,t=n[0].username+"",r,s;return{c(){e=b("h1"),r=$(t),s=$(" has no art!"),p(e,"id","no-art"),p(e,"class","svelte-1g1tgca")},m(i,o){A(i,e,o),h(e,r),h(e,s)},p(i,o){o&1&&t!==(t=i[0].username+"")&&Q(r,t)},d(i){i&&S(e)}}}function yu(n){let e,t,r=n[2]!=null&&Cr(n);return{c(){r&&r.c(),e=ce()},m(s,i){r&&r.m(s,i),A(s,e,i),t=!0},p(s,[i]){s[2]!=null?r?(r.p(s,i),i&4&&O(r,1)):(r=Cr(s),r.c(),O(r,1),r.m(e.parentNode,e)):r&&(ee(),N(r,1,1,()=>{r=null}),te())},i(s){t||(O(r),t=!0)},o(s){N(r),t=!1},d(s){r&&r.d(s),s&&S(e)}}}function wu(n,e,t){let r,s;K(n,Z,u=>t(4,s=u));let{params:i={}}=e,o=!1,l=null;const a=async u=>{var f;const d=await ne.getUserGallery(u);if(!d.ok)return console.log(d),oe("/home"),H.set({theme:"error",msg:((f=d==null?void 0:d.data)==null?void 0:f.msg)??"Can't load user's gallery!"});t(2,l=d.data.gallery),t(1,o=d.data.following)},c=async()=>{var d;const u=await ne.toggleFollow(i.username);if(!u.ok)return H.set({theme:"error",msg:((d=u==null?void 0:u.data)==null?void 0:d.msg)??"Can't follow/unfollow user!"});t(1,o=u.data.type=="follow"),H.set({theme:"success",msg:u.data.msg})};return n.$$set=u=>{"params"in u&&t(0,i=u.params)},n.$$.update=()=>{n.$$.dirty&2&&t(3,r=o?"Unfollow user":"Follow user"),n.$$.dirty&1&&a(i.username)},[i,o,l,r,s,c]}class ku extends X{constructor(e){super(),Y(this,e,wu,yu,J,{params:0})}}function Pr(n){let e;return{c(){e=b("i"),p(e,"class","bi bi-question svelte-1yqxm97"),j(e,"color",n[1])},m(t,r){A(t,e,r)},p(t,r){r&2&&j(e,"color",t[1])},d(t){t&&S(e)}}}function Dr(n){let e;return{c(){e=b("i"),p(e,"class","bi bi-question svelte-1yqxm97"),j(e,"color",n[2])},m(t,r){A(t,e,r)},p(t,r){r&4&&j(e,"color",t[2])},d(t){t&&S(e)}}}function Nr(n){let e;return{c(){e=b("i"),p(e,"class","bi bi-question svelte-1yqxm97"),j(e,"color",n[0])},m(t,r){A(t,e,r)},p(t,r){r&1&&j(e,"color",t[0])},d(t){t&&S(e)}}}function Mr(n){let e,t;return e=new Vs({props:{title:"Possible choices...",hide_bw:!0,interactable:!1}}),e.$on("click",n[8]),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p:L,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Iu(n){let e,t,r,s,i,o,l,a,c,u,d,f,m,g,w,_,I,T,k,E,v,y=!n[3]&&Pr(n),R=!n[3]&&Dr(n),D=!n[3]&&Nr(n),P=n[5]&&Mr(n);return{c(){e=b("main"),t=b("h2"),t.innerHTML=`Get random color palette
        <br/>
        (For<i class="bi bi-coin svelte-1yqxm97">20</i>)`,r=C(),s=b("section"),i=b("button"),o=$("Gamble"),a=C(),c=b("div"),u=b("div"),y&&y.c(),d=C(),f=b("div"),R&&R.c(),m=C(),g=b("div"),D&&D.c(),w=C(),_=b("i"),I=C(),P&&P.c(),T=ce(),p(t,"class","svelte-1yqxm97"),i.disabled=l=n[4]!=null,p(i,"class","svelte-1yqxm97"),p(u,"class","color svelte-1yqxm97"),j(u,"background-color",n[0]),j(u,"border-color",n[1]),p(f,"class","color svelte-1yqxm97"),j(f,"background-color",n[1]),j(f,"border-color",n[2]),p(g,"class","color svelte-1yqxm97"),j(g,"background-color",n[2]),j(g,"border-color",n[0]),p(_,"class","bi bi-question svelte-1yqxm97"),p(_,"id","hint"),p(c,"id","rand-colors"),p(c,"class","svelte-1yqxm97"),p(s,"id","buttons"),p(s,"class","svelte-1yqxm97"),p(e,"class","svelte-1yqxm97")},m(B,M){A(B,e,M),h(e,t),h(e,r),h(e,s),h(s,i),h(i,o),h(s,a),h(s,c),h(c,u),y&&y.m(u,null),h(c,d),h(c,f),R&&R.m(f,null),h(c,m),h(c,g),D&&D.m(g,null),h(c,w),h(c,_),A(B,I,M),P&&P.m(B,M),A(B,T,M),k=!0,E||(v=[F(i,"click",n[6]),F(_,"click",n[7])],E=!0)},p(B,[M]){(!k||M&16&&l!==(l=B[4]!=null))&&(i.disabled=l),B[3]?y&&(y.d(1),y=null):y?y.p(B,M):(y=Pr(B),y.c(),y.m(u,null)),(!k||M&1)&&j(u,"background-color",B[0]),(!k||M&2)&&j(u,"border-color",B[1]),B[3]?R&&(R.d(1),R=null):R?R.p(B,M):(R=Dr(B),R.c(),R.m(f,null)),(!k||M&2)&&j(f,"background-color",B[1]),(!k||M&4)&&j(f,"border-color",B[2]),B[3]?D&&(D.d(1),D=null):D?D.p(B,M):(D=Nr(B),D.c(),D.m(g,null)),(!k||M&4)&&j(g,"background-color",B[2]),(!k||M&1)&&j(g,"border-color",B[0]),B[5]?P?(P.p(B,M),M&32&&O(P,1)):(P=Mr(B),P.c(),O(P,1),P.m(T.parentNode,T)):P&&(ee(),N(P,1,1,()=>{P=null}),te())},i(B){k||(O(P),k=!0)},o(B){N(P),k=!1},d(B){B&&S(e),y&&y.d(),R&&R.d(),D&&D.d(),B&&S(I),P&&P.d(B),B&&S(T),E=!1,ie(v)}}}function Eu(n,e,t){let r,s;K(n,qe,_=>t(9,r=_)),K(n,Z,_=>t(10,s=_));const i=async()=>{var I;if(s.coins<20)return H.set({theme:"error",msg:"You can't afford this item!"});if(f!=null)return;l();const _=await ne.buyPalette();_.ok?(Z.update(T=>(T.coins=_.data.coins,T)),x(qe,r=_.data.palettes,r),setTimeout(()=>{t(3,d=_.data.new_palette),t(0,[a,c,u]=re.palette_map[d],a,t(1,c),t(2,u)),H.set({theme:"success",msg:_.data.msg})},1300)):(H.set({theme:"error",msg:((I=_==null?void 0:_.data)==null?void 0:I.msg)??"Uh oh..."}),t(3,d="B&W"),t(0,[a,c,u]=re.palette_map[d],a,t(1,c),t(2,u)))},o=()=>{if(d){clearInterval(f),t(4,f=null);return}const _=Object.keys(re.palette_map);t(0,[a,c,u]=re.palette_map[_[Math.floor(Math.random()*(_.length-1))+1]],a,t(1,c),t(2,u))},l=()=>{t(3,d=null),t(4,f=setInterval(o,200))};let[a,c,u]=re.palette_map["B&W"],d=null,f=null,m=!1;return[a,c,u,d,f,m,i,()=>{t(5,m=!0)},()=>{t(5,m=!1)}]}class Tu extends X{constructor(e){super(),Y(this,e,Eu,Iu,J,{})}}function Su(n){let e,t,r,s,i,o,l;return s=new Tu({}),{c(){e=b("main"),t=b("h1"),t.textContent="Shop!",r=C(),q(s.$$.fragment),i=C(),o=b("h3"),o.innerHTML='<a href="https://forms.gle/kdcpQWApDjJychzm8" target="_blank">What else should I add?</a>',p(e,"class","flex-page svelte-hj3yjx")},m(a,c){A(a,e,c),h(e,t),h(e,r),W(s,e,null),h(e,i),h(e,o),l=!0},p:L,i(a){l||(O(s.$$.fragment,a),l=!0)},o(a){N(s.$$.fragment,a),l=!1},d(a){a&&S(e),V(s)}}}class Au extends X{constructor(e){super(),Y(this,e,null,Su,J,{})}}function Cu(n){let e,t,r,s,i,o,l,a;const c=n[3].default,u=Gs(c,n,n[2],null);return{c(){e=b("main"),t=b("h1"),r=$(n[0]),s=C(),i=b("p"),u&&u.c(),p(t,"class","svelte-zey2r8"),p(i,"class","svelte-zey2r8"),z(i,"open",n[1]),p(e,"class","svelte-zey2r8")},m(d,f){A(d,e,f),h(e,t),h(t,r),h(e,s),h(e,i),u&&u.m(i,null),o=!0,l||(a=F(t,"click",n[4]),l=!0)},p(d,[f]){(!o||f&1)&&Q(r,d[0]),u&&u.p&&(!o||f&4)&&Js(u,c,d,d[2],o?Ks(c,d[2],f,null):Ys(d[2]),null),(!o||f&2)&&z(i,"open",d[1])},i(d){o||(O(u,d),o=!0)},o(d){N(u,d),o=!1},d(d){d&&S(e),u&&u.d(d),l=!1,a()}}}function Ru(n,e,t){let{$$slots:r={},$$scope:s}=e,{title:i="Default title"}=e,o=!1;const l=()=>{t(1,o=!o)};return n.$$set=a=>{"title"in a&&t(0,i=a.title),"$$scope"in a&&t(2,s=a.$$scope)},[i,o,s,r,l]}class ut extends X{constructor(e){super(),Y(this,e,Ru,Cu,J,{title:0})}}function Ou(n){let e;return{c(){e=$("You can login every 20 hours for a login bonus! This bonus is 20 + the total rating of your gallery (likes-dislikes).")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Pu(n){let e;return{c(){e=$("I'll fix it eventually.")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Du(n){let e;return{c(){e=$("I'll shadow-ban it eventually.")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Nu(n){let e;return{c(){e=$(`Well, a tryte is 8 trits. A trit is a single ternary (base 3) digit.
            This is important because each piece of art, as you may know, is only made of 3 colors.
            So, the program stores each art piece is a compressed array of trits.
            Being that each art piece is 16 by 16 pixels, that would make each art piece 256 trits or 32 trytes (256 divided by 8).
            Don't you just love math??`)},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Mu(n){let e,t,r,s,i,o,l,a,c,u,d,f;return i=new ut({props:{title:"How do I make money?",$$slots:{default:[Ou]},$$scope:{ctx:n}}}),l=new ut({props:{title:"There's a bug!",$$slots:{default:[Pu]},$$scope:{ctx:n}}}),c=new ut({props:{title:"There's an inappropriate art piece!",$$slots:{default:[Du]},$$scope:{ctx:n}}}),d=new ut({props:{title:`What's a "tryte" and why is there 32 of them?`,$$slots:{default:[Nu]},$$scope:{ctx:n}}}),{c(){e=b("main"),t=b("h1"),t.textContent="Questions you might have for TryteMart 32",r=C(),s=b("section"),q(i.$$.fragment),o=C(),q(l.$$.fragment),a=C(),q(c.$$.fragment),u=C(),q(d.$$.fragment),p(t,"class","svelte-evdjxj"),p(s,"class","svelte-evdjxj"),p(e,"class","flex-page svelte-evdjxj")},m(m,g){A(m,e,g),h(e,t),h(e,r),h(e,s),W(i,s,null),h(s,o),W(l,s,null),h(s,a),W(c,s,null),h(s,u),W(d,s,null),f=!0},p(m,[g]){const w={};g&1&&(w.$$scope={dirty:g,ctx:m}),i.$set(w);const _={};g&1&&(_.$$scope={dirty:g,ctx:m}),l.$set(_);const I={};g&1&&(I.$$scope={dirty:g,ctx:m}),c.$set(I);const T={};g&1&&(T.$$scope={dirty:g,ctx:m}),d.$set(T)},i(m){f||(O(i.$$.fragment,m),O(l.$$.fragment,m),O(c.$$.fragment,m),O(d.$$.fragment,m),f=!0)},o(m){N(i.$$.fragment,m),N(l.$$.fragment,m),N(c.$$.fragment,m),N(d.$$.fragment,m),f=!1},d(m){m&&S(e),V(i),V(l),V(c),V(d)}}}class Lu extends X{constructor(e){super(),Y(this,e,null,Mu,J,{})}}function Lr(n,e,t){const r=n.slice();r[12]=e[t][0],r[13]=e[t][1];const s=re.palette_map[r[12]];return r[14]=s,r}function Ur(n,e,t){const r=n.slice();return r[17]=e[t],r}function $r(n,e,t){const r=n.slice();return r[17]=e[t],r}function Br(n){let e;return{c(){e=b("div"),p(e,"class","color svelte-18b27kb"),j(e,"background-color",n[17])},m(t,r){A(t,e,r)},p(t,r){r&4&&j(e,"background-color",t[17])},d(t){t&&S(e)}}}function Uu(n){let e,t,r=n[12]+"",s,i=isFinite(+n[13]),o,l,a,c,u=i&&$u(n),d=n[14],f=[];for(let g=0;g<d.length;g+=1)f[g]=Fr(Ur(n,d,g));function m(){return n[9](n[12])}return{c(){e=b("div"),t=b("h3"),s=$(r),u&&u.c(),o=C(),l=b("div");for(let g=0;g<f.length;g+=1)f[g].c();p(t,"class","palette-name svelte-18b27kb"),p(l,"class","colors svelte-18b27kb"),p(e,"class","palette-option svelte-18b27kb"),z(e,"selected",n[12]==n[1])},m(g,w){A(g,e,w),h(e,t),h(t,s),u&&u.m(t,null),h(e,o),h(e,l);for(let _=0;_<f.length;_+=1)f[_].m(l,null);a||(c=F(e,"click",m),a=!0)},p(g,w){if(n=g,i&&u.p(n,w),w&16){d=n[14];let _;for(_=0;_<d.length;_+=1){const I=Ur(n,d,_);f[_]?f[_].p(I,w):(f[_]=Fr(I),f[_].c(),f[_].m(l,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=d.length}w&18&&z(e,"selected",n[12]==n[1])},d(g){g&&S(e),u&&u.d(),ae(f,g),a=!1,c()}}}function $u(n){let e,t=n[13]+"",r;return{c(){e=$(": "),r=$(t)},m(s,i){A(s,e,i),A(s,r,i)},p:L,d(s){s&&S(e),s&&S(r)}}}function Fr(n){let e;return{c(){e=b("div"),p(e,"class","color svelte-18b27kb"),j(e,"background-color",n[17])},m(t,r){A(t,e,r)},p:L,d(t){t&&S(e)}}}function jr(n){let e,t=n[14]!=null&&n[3]!=n[12]&&+n[13]>0&&Uu(n);return{c(){t&&t.c(),e=ce()},m(r,s){t&&t.m(r,s),A(r,e,s)},p(r,s){r[14]!=null&&r[3]!=r[12]&&+r[13]>0&&t.p(r,s)},d(r){t&&t.d(r),r&&S(e)}}}function Bu(n){let e,t,r,s,i,o,l,a;return{c(){e=b("div"),t=b("h3"),t.textContent="You have no palettes!",r=C(),s=b("p"),i=$("Check out the "),o=b("a"),o.textContent="shop",p(o,"href","/shop"),p(e,"id","no-palette"),p(e,"class","svelte-18b27kb")},m(c,u){A(c,e,u),h(e,t),h(e,r),h(e,s),h(s,i),h(s,o),l||(a=[ue(fe.call(null,o)),F(o,"click",n[5])],l=!0)},p:L,d(c){c&&S(e),l=!1,ie(a)}}}function zr(n){let e,t,r;return{c(){e=b("button"),e.textContent="Select palette?",p(e,"id","select-btn"),p(e,"class","svelte-18b27kb")},m(s,i){A(s,e,i),t||(r=F(e,"click",n[7]),t=!0)},p:L,d(s){s&&S(e),t=!1,r()}}}function Fu(n){let e,t,r,s,i,o,l,a,c,u,d,f,m,g,w;r=new Rt({props:{art_data:Object.assign(n[0],{palette:n[1]}),just_draw_it:!0}});let _=n[2],I=[];for(let y=0;y<_.length;y+=1)I[y]=Br($r(n,_,y));let T=n[4],k=[];for(let y=0;y<T.length;y+=1)k[y]=jr(Lr(n,T,y));let E=n[4].length==0&&Bu(n),v=n[1]&&n[1]!=n[3]&&zr(n);return{c(){e=b("main"),t=b("div"),q(r.$$.fragment),s=C(),i=b("section"),o=b("h3"),o.textContent=`${n[3]}`,l=C(),a=b("div");for(let y=0;y<I.length;y+=1)I[y].c();c=C(),u=b("div");for(let y=0;y<k.length;y+=1)k[y].c();d=C(),E&&E.c(),f=C(),v&&v.c(),p(o,"class","palette-name svelte-18b27kb"),p(a,"id","current-colors"),p(a,"class","svelte-18b27kb"),p(u,"id","palette-options"),p(u,"class","svelte-18b27kb"),p(i,"id","palette-wrapper"),p(i,"class","svelte-18b27kb"),p(t,"class","svelte-18b27kb"),p(e,"class","svelte-18b27kb")},m(y,R){A(y,e,R),h(e,t),W(r,t,null),h(t,s),h(t,i),h(i,o),h(i,l),h(i,a);for(let D=0;D<I.length;D+=1)I[D].m(a,null);h(i,c),h(i,u);for(let D=0;D<k.length;D+=1)k[D].m(u,null);h(u,d),E&&E.m(u,null),h(t,f),v&&v.m(t,null),m=!0,g||(w=F(e,"click",Xs(n[5])),g=!0)},p(y,[R]){const D={};if(R&3&&(D.art_data=Object.assign(y[0],{palette:y[1]})),r.$set(D),R&4){_=y[2];let P;for(P=0;P<_.length;P+=1){const B=$r(y,_,P);I[P]?I[P].p(B,R):(I[P]=Br(B),I[P].c(),I[P].m(a,null))}for(;P<I.length;P+=1)I[P].d(1);I.length=_.length}if(R&90){T=y[4];let P;for(P=0;P<T.length;P+=1){const B=Lr(y,T,P);k[P]?k[P].p(B,R):(k[P]=jr(B),k[P].c(),k[P].m(u,d))}for(;P<k.length;P+=1)k[P].d(1);k.length=T.length}y[4].length==0&&E.p(y,R),y[1]&&y[1]!=y[3]?v?v.p(y,R):(v=zr(y),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},i(y){m||(O(r.$$.fragment,y),m=!0)},o(y){N(r.$$.fragment,y),m=!1},d(y){y&&S(e),V(r),ae(I,y),ae(k,y),E&&E.d(),v&&v.d(),g=!1,w()}}}function ju(n,e,t){let r,s,i,o;K(n,qe,w=>t(10,s=w)),K(n,vt,w=>t(11,i=w)),K(n,je,w=>t(8,o=w));let l=o.art_data;const a=l.palette??"B&W";let c=a;console.log(a);const u=(a=="B&W"?[]:[["B&W",1/0]]).concat(Object.entries(s??{})),d=()=>{x(je,o.on=!1,o)},f=w=>{c==w?t(1,c=a):t(1,c=""+w)},m=async()=>{var _;const w=await ne.setPalette(l.data,c);if(!w.ok){H.set({theme:"error",msg:((_=w==null?void 0:w.data)==null?void 0:_.msg)??"Uh oh..."});return}i.find(I=>I.data==l.data).palette=c,vt.set(i),x(qe,s=w.data.palettes,s),d()},g=w=>f(w);return n.$$.update=()=>{n.$$.dirty&256&&t(0,l=o.art_data),n.$$.dirty&1&&t(2,r=re.palette_map[l.palette]??re.palette_map["B&W"])},[l,c,r,a,u,d,f,m,o,g]}class zu extends X{constructor(e){super(),Y(this,e,ju,Fu,J,{})}}function Hr(n){let e,t,r,s,i,o,l;return t=new lu({}),s=new _i({props:{routes:n[3]}}),o=new yi({}),{c(){e=b("main"),q(t.$$.fragment),r=C(),q(s.$$.fragment),i=C(),q(o.$$.fragment),p(e,"class","svelte-15q6jk4")},m(a,c){A(a,e,c),W(t,e,null),h(e,r),W(s,e,null),h(e,i),W(o,e,null),l=!0},p:L,i(a){l||(O(t.$$.fragment,a),O(s.$$.fragment,a),O(o.$$.fragment,a),l=!0)},o(a){N(t.$$.fragment,a),N(s.$$.fragment,a),N(o.$$.fragment,a),l=!1},d(a){a&&S(e),V(t),V(s),V(o)}}}function Wr(n){let e,t;return e=new Ot({props:{center:n[1].center}}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.center=r[1].center),e.$set(i)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Vr(n){let e,t;return e=new zu({}),{c(){q(e.$$.fragment)},m(r,s){W(e,r,s),t=!0},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function Hu(n){let e,t,r,s,i=!n[0]&&Hr(n),o=n[1].on&&Wr(n),l=n[2].on&&Vr();return{c(){i&&i.c(),e=C(),o&&o.c(),t=C(),l&&l.c(),r=ce()},m(a,c){i&&i.m(a,c),A(a,e,c),o&&o.m(a,c),A(a,t,c),l&&l.m(a,c),A(a,r,c),s=!0},p(a,[c]){a[0]?i&&(ee(),N(i,1,1,()=>{i=null}),te()):i?(i.p(a,c),c&1&&O(i,1)):(i=Hr(a),i.c(),O(i,1),i.m(e.parentNode,e)),a[1].on?o?(o.p(a,c),c&2&&O(o,1)):(o=Wr(a),o.c(),O(o,1),o.m(t.parentNode,t)):o&&(ee(),N(o,1,1,()=>{o=null}),te()),a[2].on?l?c&4&&O(l,1):(l=Vr(),l.c(),O(l,1),l.m(r.parentNode,r)):l&&(ee(),N(l,1,1,()=>{l=null}),te())},i(a){s||(O(i),O(o),O(l),s=!0)},o(a){N(i),N(o),N(l),s=!1},d(a){i&&i.d(a),a&&S(e),o&&o.d(a),a&&S(t),l&&l.d(a),a&&S(r)}}}function Wu(n,e,t){let r,s,i,o;K(n,qe,c=>t(4,r=c)),K(n,Z,c=>t(5,s=c)),K(n,de,c=>t(1,i=c)),K(n,je,c=>t(2,o=c));const l={"/":vu,"/home":to,"/login":zc,"/set-name":Vc,"/canvas":ru,"/shop":Au,"/search/:filter":fu,"/gallery/:username":ku,"/social":_u,"/faq":Lu,"*":Gc};let a=!0;return Ce(async()=>{let c=null;try{c=await ne.getSelf()}catch(u){console.error(u)}c!=null&&c.ok?(c.data.daily_gain>0&&H.set({theme:"info",msg:`You gained ${c.data.daily_gain} coins today!`}),x(Z,s={username:c.data.username,coins:c.data.coins},s),x(qe,r=c.data.palettes??{},r)):oe("/"),t(0,a=!1)}),[a,i,o,l]}class Vu extends X{constructor(e){super(),Y(this,e,Wu,Hu,J,{})}}new Vu({target:document.getElementById("app")});
