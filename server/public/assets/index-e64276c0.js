(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function L(){}function bt(n,e){for(const t in e)n[t]=e[t];return n}function br(n){return n()}function pn(){return Object.create(null)}function se(n){n.forEach(br)}function yt(n){return typeof n=="function"}function W(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function vs(n){return Object.keys(n).length===0}function yr(n,...e){if(n==null)return L;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function re(n,e,t){n.$$.on_destroy.push(yr(e,t))}function bs(n,e,t,r){if(n){const s=wr(n,e,t,r);return n[0](s)}}function wr(n,e,t,r){return n[1]&&r?bt(t.ctx.slice(),n[1](r(e))):t.ctx}function ys(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function ws(n,e,t,r,s,i){if(s){const o=wr(e,t,r,i);n.p(o,s)}}function Is(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Z(n,e,t){return n.set(t),e}function ie(n){return n&&yt(n.destroy)?n.destroy:L}function p(n,e){n.appendChild(e)}function A(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function Ne(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function m(n){return document.createElement(n)}function M(n){return document.createTextNode(n)}function C(){return M(" ")}function me(){return M("")}function j(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function h(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ks(n){return Array.from(n.childNodes)}function K(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function dt(n,e){n.value=e??""}function Ae(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function $(n,e,t){n.classList[t?"add":"remove"](e)}function Es(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,r,e),s}function He(n,e){return new n(e)}let Ge;function We(n){Ge=n}function wt(){if(!Ge)throw new Error("Function called outside component initialization");return Ge}function ke(n){wt().$$.on_mount.push(n)}function Ts(n){wt().$$.after_update.push(n)}function Ss(n){wt().$$.on_destroy.push(n)}function As(){const n=wt();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const i=Es(e,t,{cancelable:r});return s.slice().forEach(o=>{o.call(n,i)}),!i.defaultPrevented}return!0}}function gn(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Ue=[],Ke=[],ot=[],jt=[],Ir=Promise.resolve();let Ht=!1;function kr(){Ht||(Ht=!0,Ir.then(Tr))}function Er(){return kr(),Ir}function zt(n){ot.push(n)}function Cs(n){jt.push(n)}const Rt=new Set;let Me=0;function Tr(){if(Me!==0)return;const n=Ge;do{try{for(;Me<Ue.length;){const e=Ue[Me];Me++,We(e),Rs(e.$$)}}catch(e){throw Ue.length=0,Me=0,e}for(We(null),Ue.length=0,Me=0;Ke.length;)Ke.pop()();for(let e=0;e<ot.length;e+=1){const t=ot[e];Rt.has(t)||(Rt.add(t),t())}ot.length=0}while(Ue.length);for(;jt.length;)jt.pop()();Ht=!1,Rt.clear(),We(n)}function Rs(n){if(n.fragment!==null){n.update(),se(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(zt)}}const at=new Set;let Ce;function ee(){Ce={r:0,c:[],p:Ce}}function te(){Ce.r||se(Ce.c),Ce=Ce.p}function R(n,e){n&&n.i&&(at.delete(n),n.i(e))}function D(n,e,t,r){if(n&&n.o){if(at.has(n))return;at.add(n),Ce.c.push(()=>{at.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Xt(n,e){const t={},r={},s={$$scope:1};let i=n.length;for(;i--;){const o=n[i],a=e[i];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[i]=a}else for(const l in o)s[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function Qt(n){return typeof n=="object"&&n!==null?n:{}}function Os(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function V(n){n&&n.c()}function z(n,e,t,r){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),r||zt(()=>{const o=n.$$.on_mount.map(br).filter(yt);n.$$.on_destroy?n.$$.on_destroy.push(...o):se(o),n.$$.on_mount=[]}),i.forEach(zt)}function x(n,e){const t=n.$$;t.fragment!==null&&(se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ps(n,e){n.$$.dirty[0]===-1&&(Ue.push(n),kr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function q(n,e,t,r,s,i,o,a=[-1]){const l=Ge;We(n);const c=n.$$={fragment:null,ctx:[],props:i,update:L,not_equal:s,bound:pn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:pn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return c.ctx&&s(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),u&&Ps(n,f)),d}):[],c.update(),u=!0,se(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=ks(e.target);c.fragment&&c.fragment.l(f),f.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&R(n.$$.fragment),z(n,e.target,e.anchor,e.customElement),Tr()}We(l)}class G{$destroy(){x(this,1),this.$destroy=L}$on(e,t){if(!yt(t))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!vs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $e=[];function Sr(n,e){return{subscribe:Ze(n,e).subscribe}}function Ze(n,e=L){let t;const r=new Set;function s(a){if(W(n,a)&&(n=a,t)){const l=!$e.length;for(const c of r)c[1](),$e.push(c,n);if(l){for(let c=0;c<$e.length;c+=2)$e[c][0]($e[c+1]);$e.length=0}}}function i(a){s(a(n))}function o(a,l=L){const c=[a,l];return r.add(c),r.size===1&&(t=e(s)||L),a(n),()=>{r.delete(c),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Ar(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return Sr(t,o=>{let a=!1;const l=[];let c=0,u=L;const f=()=>{if(c)return;u();const g=e(r?l[0]:l,o);i?o(g):u=yt(g)?g:L},d=s.map((g,_)=>yr(g,I=>{l[_]=I,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){se(d),u()}})}function Ds(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,r,s,i,o=[],a="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(r=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~r?r:~i?i:s.length)),a+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(a+=(~r?"?":"")+"\\"+s.substring(i))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Ns(n){let e,t,r;const s=[n[2]];var i=n[0];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=bt(l,s[c]);return{props:l}}return i&&(e=He(i,o()),e.$on("routeEvent",n[7])),{c(){e&&V(e.$$.fragment),t=me()},m(a,l){e&&z(e,a,l),A(a,t,l),r=!0},p(a,l){const c=l&4?Xt(s,[Qt(a[2])]):{};if(i!==(i=a[0])){if(e){ee();const u=e;D(u.$$.fragment,1,0,()=>{x(u,1)}),te()}i?(e=He(i,o()),e.$on("routeEvent",a[7]),V(e.$$.fragment),R(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&R(e.$$.fragment,a),r=!0)},o(a){e&&D(e.$$.fragment,a),r=!1},d(a){a&&S(t),e&&x(e,a)}}}function Ls(n){let e,t,r;const s=[{params:n[1]},n[2]];var i=n[0];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=bt(l,s[c]);return{props:l}}return i&&(e=He(i,o()),e.$on("routeEvent",n[6])),{c(){e&&V(e.$$.fragment),t=me()},m(a,l){e&&z(e,a,l),A(a,t,l),r=!0},p(a,l){const c=l&6?Xt(s,[l&2&&{params:a[1]},l&4&&Qt(a[2])]):{};if(i!==(i=a[0])){if(e){ee();const u=e;D(u.$$.fragment,1,0,()=>{x(u,1)}),te()}i?(e=He(i,o()),e.$on("routeEvent",a[6]),V(e.$$.fragment),R(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(a){r||(e&&R(e.$$.fragment,a),r=!0)},o(a){e&&D(e.$$.fragment,a),r=!1},d(a){a&&S(t),e&&x(e,a)}}}function Ms(n){let e,t,r,s;const i=[Ls,Ns],o=[];function a(l,c){return l[1]?0:1}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),r=me()},m(l,c){o[e].m(l,c),A(l,r,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ee(),D(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(l,c):(t=o[e]=i[e](l),t.c()),R(t,1),t.m(r.parentNode,r))},i(l){s||(R(t),s=!0)},o(l){D(t),s=!1},d(l){o[e].d(l),l&&S(r)}}}function mn(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let r="";return t>-1&&(r=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:r}}const Zt=Sr(null,function(e){e(mn());const t=()=>{e(mn())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});Ar(Zt,n=>n.location);Ar(Zt,n=>n.querystring);const _n=Ze(void 0);async function ae(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await Er();const e=(n.charAt(0)=="#"?"":"#")+n;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function oe(n,e){if(e=bn(e),!n||!n.tagName||n.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return vn(n,e),{update(t){t=bn(t),vn(n,t)}}}function $s(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function vn(n,e){let t=e.href||n.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);n.setAttribute("href",t),n.addEventListener("click",r=>{r.preventDefault(),e.disabled||Us(r.currentTarget.getAttribute("href"))})}function bn(n){return n&&typeof n=="string"?{href:n}:n||{}}function Us(n){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=n}function Bs(n,e,t){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class o{constructor(v,E){if(!E||typeof E!="function"&&(typeof E!="object"||E._sveltesparouter!==!0))throw Error("Invalid component object");if(!v||typeof v=="string"&&(v.length<1||v.charAt(0)!="/"&&v.charAt(0)!="*")||typeof v=="object"&&!(v instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:y,keys:O}=Ds(v);this.path=v,typeof E=="object"&&E._sveltesparouter===!0?(this.component=E.component,this.conditions=E.conditions||[],this.userData=E.userData,this.props=E.props||{}):(this.component=()=>Promise.resolve(E),this.conditions=[],this.props={}),this._pattern=y,this._keys=O}match(v){if(s){if(typeof s=="string")if(v.startsWith(s))v=v.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const H=v.match(s);if(H&&H[0])v=v.substr(H[0].length)||"/";else return null}}const E=this._pattern.exec(v);if(E===null)return null;if(this._keys===!1)return E;const y={};let O=0;for(;O<this._keys.length;){try{y[this._keys[O]]=decodeURIComponent(E[O+1]||"")||null}catch{y[this._keys[O]]=null}O++}return y}async checkConditions(v){for(let E=0;E<this.conditions.length;E++)if(!await this.conditions[E](v))return!1;return!0}}const a=[];r instanceof Map?r.forEach((w,v)=>{a.push(new o(v,w))}):Object.keys(r).forEach(w=>{a.push(new o(w,r[w]))});let l=null,c=null,u={};const f=As();async function d(w,v){await Er(),f(w,v)}let g=null,_=null;i&&(_=w=>{w.state&&(w.state.__svelte_spa_router_scrollY||w.state.__svelte_spa_router_scrollX)?g=w.state:g=null},window.addEventListener("popstate",_),Ts(()=>{$s(g)}));let I=null,b=null;const P=Zt.subscribe(async w=>{I=w;let v=0;for(;v<a.length;){const E=a[v].match(w.location);if(!E){v++;continue}const y={route:a[v].path,location:w.location,querystring:w.querystring,userData:a[v].userData,params:E&&typeof E=="object"&&Object.keys(E).length?E:null};if(!await a[v].checkConditions(y)){t(0,l=null),b=null,d("conditionsFailed",y);return}d("routeLoading",Object.assign({},y));const O=a[v].component;if(b!=O){O.loading?(t(0,l=O.loading),b=O,t(1,c=O.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},y,{component:l,name:l.name,params:c}))):(t(0,l=null),b=null);const H=await O();if(w!=I)return;t(0,l=H&&H.default||H),b=O}E&&typeof E=="object"&&Object.keys(E).length?t(1,c=E):t(1,c=null),t(2,u=a[v].props),d("routeLoaded",Object.assign({},y,{component:l,name:l.name,params:c})).then(()=>{_n.set(c)});return}t(0,l=null),b=null,_n.set(void 0)});Ss(()=>{P(),_&&window.removeEventListener("popstate",_)});function k(w){gn.call(this,n,w)}function T(w){gn.call(this,n,w)}return n.$$set=w=>{"routes"in w&&t(3,r=w.routes),"prefix"in w&&t(4,s=w.prefix),"restoreScrollState"in w&&t(5,i=w.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[l,c,u,r,s,i,k,T]}class Fs extends G{constructor(e){super(),q(this,e,Bs,Ms,W,{routes:3,prefix:4,restoreScrollState:5})}}const U=Ze({theme:"info",msg:null}),J=Ze(null),le=Ze({on:!1,center:!0});function Ot(n){const e=n.slice(),t=e[0];return e[2]=t.theme,e[3]=t.msg,e}function yn(n){let e,t=n[3]+"",r,s,i,o;return{c(){e=m("main"),r=M(t),h(e,"class",s="theme-"+n[2]+" svelte-necemk")},m(a,l){A(a,e,l),p(e,r),i||(o=j(e,"click",n[1]),i=!0)},p(a,l){l&1&&t!==(t=a[3]+"")&&K(r,t),l&1&&s!==(s="theme-"+a[2]+" svelte-necemk")&&h(e,"class",s)},d(a){a&&S(e),i=!1,o()}}}function js(n){let e,t=n[0].msg!==null&&yn(Ot(n));return{c(){t&&t.c(),e=me()},m(r,s){t&&t.m(r,s),A(r,e,s)},p(r,[s]){r[0].msg!==null?t?t.p(Ot(r),s):(t=yn(Ot(r)),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:L,o:L,d(r){t&&t.d(r),r&&S(e)}}}function Hs(n,e,t){let r;return re(n,U,i=>t(0,r=i)),[r,()=>{Z(U,r.msg=null,r)}]}class zs extends G{constructor(e){super(),q(this,e,Hs,js,W,{})}}const xs=n=>n.map((t,r)=>r>0&&r%16==0?"|"+t:`${t}`).join("").split("|").map(t=>parseInt(t,3).toString(36)).join("|"),Vs=n=>{const t=n.split("|").map(r=>parseInt(r,36).toString(3)).map(r=>"0".repeat(16-r.length)+r);return Array.from(t.join("")).map(r=>+r)},Ws=["#000000","#808080","#ffffff"],Cr=(n,e,t)=>{let r=e;t&&(r=Vs(e).join(""));const s=n.canvas.width/16;for(let i=0;i<r.length;i++){const o=r[i];n.fillStyle=Ws[o],n.fillRect(i%16*s,Math.floor(i/16)*s,s,s)}},Pt=(n,e,t)=>e<n?n:e>t?t:e,wn=n=>{let e=[128,64,256];Array.from(n).forEach((d,g)=>{const _=d.charCodeAt(0)*11;e[g%3]+=_>300&&g%2==0?-_:_});let[t,r,s]=e;t=t*(t<0?-1:1)%256,r=r*(r<0?-1:1)%256,s=s*(s<0?-1:1)%256;const i=100,o=200;t=Pt(i,t,o),r=Pt(i,r,o),s=Pt(i,s,o);const a=[t,r,s].sort((d,g)=>d-g)[0],l=[t,r,s].sort((d,g)=>d-g)[2];t==a&&(t=i),r==a&&(r=i),s==a&&(s=i),t==l&&(t=o),r==l&&(r=o),s==l&&(s=o);let c=t.toString(16),u=r.toString(16),f=s.toString(16);return c=c.length==1?"0"+c:c,u=u.length==1?"0"+u:u,f=f.length==1?"0"+f:f,"#"+c+u+f},Rr=window.location.port=="5173"?"http://localhost:8080/api":"/api",Le=async(n="/",e={})=>{const t=await fetch(Rr+n,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});let r=null;try{r=await t.json()}catch{}return{ok:t.ok,status:t.status,data:r}},Ee=async(n="/")=>{const e=await fetch(Rr+n,{credentials:"include"});let t=null;try{t=await e.json()}catch{}return{ok:e.ok,status:e.status,data:t}},qs=async n=>await Le("/user/login",{uid:n}),Gs=async n=>await Le("/user/set-name",{username:n}),Ks=async()=>await Ee("/user/self"),Js=async()=>await Ee("/user/logs"),Ys=async n=>await Le("/art/publish-art",{data:n}),Xs=async n=>await Ee(`/art/exists/${n}`),Qs=async()=>await Ee("/art/auth-gallery"),Zs=async(n,e,t)=>await Ee(`/art/filter-by/${n}/${e}/${t}`),ei=async(n,e)=>await Le("/art/rate-art",{type:n,data:e}),ti=async n=>await Le("/art/purchase",{data:n}),ni=async(n,e)=>await Le("/art/set-cost",{data:n,cost:e}),ri=async n=>await Ee(`/art/gallery/${n}`),si=async()=>await Ee("/art/three-random"),ii=async n=>await Le("/follow/toggle-follow",{username:n}),oi=async()=>await Ee("/follow/following-popular"),X={login:qs,setName:Gs,getSelf:Ks,publishArt:Ys,artExists:Xs,authGallery:Qs,getArtByFilter:Zs,rateArt:ei,purchaseArt:ti,setArtCost:ni,getUserGallery:ri,toggleFollow:ii,getFollowingPopular:oi,threeRandom:si,getLogs:Js};function In(n){var I;let e,t,r,s,i,o,a,l=n[0].artist+"",c,u,f,d,g,_=n[0].owner!=((I=n[8])==null?void 0:I.username)&&kn(n);return{c(){e=m("div"),t=m("i"),r=C(),s=m("div"),i=m("p"),o=m("i"),o.textContent="Artist: ",a=m("a"),c=M(l),f=C(),_&&_.c(),h(t,"class","bi bi-question-square hint svelte-1dgmfos"),h(o,"class","svelte-1dgmfos"),h(a,"href",u="/gallery/"+n[0].artist),h(a,"class","svelte-1dgmfos"),h(i,"class","svelte-1dgmfos"),h(s,"id","details"),h(s,"class","svelte-1dgmfos"),h(e,"id","details-wrapper"),h(e,"class","svelte-1dgmfos")},m(b,P){A(b,e,P),p(e,t),p(e,r),p(e,s),p(s,i),p(i,o),p(i,a),p(a,c),p(s,f),_&&_.m(s,null),d||(g=ie(oe.call(null,a)),d=!0)},p(b,P){var k;P&1&&l!==(l=b[0].artist+"")&&K(c,l),P&1&&u!==(u="/gallery/"+b[0].artist)&&h(a,"href",u),b[0].owner!=((k=b[8])==null?void 0:k.username)?_?_.p(b,P):(_=kn(b),_.c(),_.m(s,null)):_&&(_.d(1),_=null)},d(b){b&&S(e),_&&_.d(),d=!1,g()}}}function kn(n){let e,t,r,s=n[0].owner+"",i,o,a,l;return{c(){e=m("p"),t=m("i"),t.textContent="Owner: ",r=m("a"),i=M(s),h(t,"class","svelte-1dgmfos"),h(r,"href",o="/gallery/"+n[0].owner),h(r,"class","svelte-1dgmfos"),h(e,"class","svelte-1dgmfos")},m(c,u){A(c,e,u),p(e,t),p(e,r),p(r,i),a||(l=ie(oe.call(null,r)),a=!0)},p(c,u){u&1&&s!==(s=c[0].owner+"")&&K(i,s),u&1&&o!==(o="/gallery/"+c[0].owner)&&h(r,"href",o)},d(c){c&&S(e),a=!1,l()}}}function En(n){let e,t,r,s,i,o,a,l,c,u,f;return{c(){e=m("div"),t=m("p"),t.textContent="Any cost above 0 will put the art piece up for sale.",r=C(),s=m("div"),i=m("input"),o=C(),a=m("button"),l=M("Set cost"),h(t,"class","hint svelte-1dgmfos"),h(i,"type","integer"),h(i,"placeholder","New art cost"),h(i,"class","svelte-1dgmfos"),a.disabled=c=!n[7],h(a,"class","svelte-1dgmfos"),h(s,"class","svelte-1dgmfos"),h(e,"id","editor"),h(e,"class","svelte-1dgmfos")},m(d,g){A(d,e,g),p(e,t),p(e,r),p(e,s),p(s,i),dt(i,n[3]),p(s,o),p(s,a),p(a,l),u||(f=[j(i,"input",n[14]),j(a,"click",n[12])],u=!0)},p(d,g){g&8&&dt(i,d[3]),g&128&&c!==(c=!d[7])&&(a.disabled=c)},d(d){d&&S(e),u=!1,se(f)}}}function Tn(n){let e,t=n[0].cost+"",r;return{c(){e=m("i"),r=M(t),h(e,"class","bi bi-coin svelte-1dgmfos"),h(e,"id","cost")},m(s,i){A(s,e,i),p(e,r)},p(s,i){i&1&&t!==(t=s[0].cost+"")&&K(r,t)},d(s){s&&S(e)}}}function ai(n){let e,t,r;return{c(){e=m("i"),h(e,"class","bi bi-bag-plus-fill corner-icon svelte-1dgmfos")},m(s,i){A(s,e,i),t||(r=j(e,"click",n[10]),t=!0)},p:L,d(s){s&&S(e),t=!1,r()}}}function li(n){let e,t,r;return{c(){e=m("i"),h(e,"class","bi bi-pencil-square corner-icon svelte-1dgmfos")},m(s,i){A(s,e,i),t||(r=j(e,"click",n[11]),t=!0)},p:L,d(s){s&&S(e),t=!1,r()}}}function ci(n){let e,t,r,s,i,o,a,l,c,u,f=n[0].likes+"",d,g,_,I,b=n[0].dislikes+"",P,k,T,w,v=n[2]&&In(n),E=n[6]&&En(n),y=n[0].cost>0&&Tn(n);function O(B,ne){var hn;if(B[0].owner==((hn=B[8])==null?void 0:hn.username))return li;if(B[0].cost>0)return ai}let H=O(n),Y=H&&H(n);return{c(){e=m("main"),v&&v.c(),t=C(),r=m("div"),s=m("canvas"),i=C(),E&&E.c(),o=C(),y&&y.c(),a=C(),l=m("section"),c=m("i"),u=C(),d=M(f),g=M(`
        ·
        `),_=m("i"),I=C(),P=M(b),k=C(),Y&&Y.c(),Ae(s,"border-color",wn(n[0].data)),h(s,"class","svelte-1dgmfos"),h(r,"id","canvas-wrapper"),h(r,"class","svelte-1dgmfos"),h(c,"class","bi bi-check-square svelte-1dgmfos"),h(c,"id","likes"),$(c,"selected",n[0].user_rating=="likes"),h(_,"class","bi bi-x-square svelte-1dgmfos"),h(_,"id","dislikes"),$(_,"selected",n[0].user_rating=="dislikes"),h(l,"class","svelte-1dgmfos"),h(e,"class","svelte-1dgmfos"),$(e,"purchased",n[5]),$(e,"dim",n[1])},m(B,ne){A(B,e,ne),v&&v.m(e,null),p(e,t),p(e,r),p(r,s),n[13](s),p(r,i),E&&E.m(r,null),p(r,o),y&&y.m(r,null),p(e,a),p(e,l),p(l,c),p(l,u),p(l,d),p(l,g),p(l,_),p(l,I),p(l,P),p(l,k),Y&&Y.m(l,null),T||(w=[j(c,"click",n[15]),j(_,"click",n[16])],T=!0)},p(B,[ne]){B[2]?v?v.p(B,ne):(v=In(B),v.c(),v.m(e,t)):v&&(v.d(1),v=null),ne&1&&Ae(s,"border-color",wn(B[0].data)),B[6]?E?E.p(B,ne):(E=En(B),E.c(),E.m(r,o)):E&&(E.d(1),E=null),B[0].cost>0?y?y.p(B,ne):(y=Tn(B),y.c(),y.m(r,null)):y&&(y.d(1),y=null),ne&1&&$(c,"selected",B[0].user_rating=="likes"),ne&1&&f!==(f=B[0].likes+"")&&K(d,f),ne&1&&$(_,"selected",B[0].user_rating=="dislikes"),ne&1&&b!==(b=B[0].dislikes+"")&&K(P,b),H===(H=O(B))&&Y?Y.p(B,ne):(Y&&Y.d(1),Y=H&&H(B),Y&&(Y.c(),Y.m(l,null))),ne&32&&$(e,"purchased",B[5]),ne&2&&$(e,"dim",B[1])},i:L,o:L,d(B){B&&S(e),v&&v.d(),n[13](null),E&&E.d(),y&&y.d(),Y&&Y.d(),T=!1,se(w)}}}function ui(n,e,t){let r,s,i;re(n,le,y=>t(19,s=y)),re(n,J,y=>t(8,i=y));let{dim:o=!1}=e,{art_data:a}=e,{show_details:l=!0}=e,c,u,f=!1;ke(()=>{u=c.getContext("2d"),t(4,c.width=t(4,c.height=256,c),c),Cr(u,a.data,!0)});let d=!1;const g=async y=>{var H;if(Z(le,s={on:!0,center:!1},s),i==null)return U.set({theme:"info",msg:`Login to ${y.slice(0,-1)} art`});if(d)return;d=!0,a.user_rating!=y&&t(0,a[y]++,a);const O=await X.rateArt(y,a.data);Z(le,s={on:!1,center:!1},s),O.ok?(U.set({theme:"success",msg:O.data.msg}),a.user_rating==y?(t(0,a[y]--,a),y=null):O.data.swap_rating&&(console.log("Swapping"),t(0,a[y=="likes"?"dislikes":"likes"]--,a))):(t(0,a[y]--,a),U.set({theme:"error",msg:((H=O==null?void 0:O.data)==null?void 0:H.msg)??"Uh oh..."})),t(0,a.user_rating=y,a),t(0,a),d=!1},_=async()=>{var O;Z(le,s={on:!0,center:!1},s);const y=await X.purchaseArt(a.data);Z(le,s={on:!1,center:!1},s),y.ok?(U.set({theme:"success",msg:y.data.msg}),t(5,f=!0),Z(J,i.coins-=a.cost,i)):U.set({theme:"error",msg:((O=y==null?void 0:y.data)==null?void 0:O.msg)??"Uh oh..."})};let I=!1,b="";const P=()=>{t(6,I=!I)},k=async()=>{var O;Z(le,s={on:!0,center:!1},s);const y=await X.setArtCost(a.data,parseInt(b));Z(le,s={on:!1,center:!1},s),y.ok?(U.set({theme:"success",msg:y.data.msg}),t(0,a.cost=parseInt(b),a),t(0,a)):(U.set({theme:"error",msg:((O=y==null?void 0:y.data)==null?void 0:O.msg)??"Uh oh..."}),y.status==401&&t(0,a.owner="",a)),t(6,I=!1)};function T(y){Ke[y?"unshift":"push"](()=>{c=y,t(4,c)})}function w(){b=this.value,t(3,b)}const v=()=>g("likes"),E=()=>g("dislikes");return n.$$set=y=>{"dim"in y&&t(1,o=y.dim),"art_data"in y&&t(0,a=y.art_data),"show_details"in y&&t(2,l=y.show_details)},n.$$.update=()=>{n.$$.dirty&8&&b!=b.replaceAll(" ","")&&t(3,b=b.replaceAll(" ","")),n.$$.dirty&8&&t(7,r=!isNaN(parseInt(b))&&!b.includes(".")&&!b.includes("-"))},[a,o,l,b,c,f,I,r,i,g,_,P,k,T,w,v,E]}class en extends G{constructor(e){super(),q(this,e,ui,ci,W,{dim:1,art_data:0,show_details:2})}}function fi(n){let e,t,r;return{c(){e=m("div"),e.innerHTML=`<div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div> 
    <div class="svelte-1wv63sf"></div>`,h(e,"class","lds-ring svelte-1wv63sf"),$(e,"center",n[0])},m(s,i){A(s,e,i),t||(r=j(e,"click",n[1]),t=!0)},p(s,[i]){i&1&&$(e,"center",s[0])},i:L,o:L,d(s){s&&S(e),t=!1,r()}}}function di(n,e,t){let r;re(n,le,o=>t(2,r=o));let{center:s=!0}=e;const i=()=>{Z(le,r.on=!1,r)};return n.$$set=o=>{"center"in o&&t(0,s=o.center)},[s,i]}class It extends G{constructor(e){super(),q(this,e,di,fi,W,{center:0})}}function Sn(n,e,t){const r=n.slice();return r[3]=e[t],r}function hi(n){let e,t;return e=new It({}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p:L,i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function pi(n){var l;let e,t,r,s=n[0],i=[];for(let c=0;c<s.length;c+=1)i[c]=An(Sn(n,s,c));const o=c=>D(i[c],1,1,()=>{i[c]=null});let a=((l=n[0])==null?void 0:l.length)==0&&Cn();return{c(){e=m("main");for(let c=0;c<i.length;c+=1)i[c].c();t=C(),a&&a.c(),h(e,"class","svelte-adl6q5")},m(c,u){A(c,e,u);for(let f=0;f<i.length;f+=1)i[f].m(e,null);p(e,t),a&&a.m(e,null),r=!0},p(c,u){var f;if(u&7){s=c[0];let d;for(d=0;d<s.length;d+=1){const g=Sn(c,s,d);i[d]?(i[d].p(g,u),R(i[d],1)):(i[d]=An(g),i[d].c(),R(i[d],1),i[d].m(e,t))}for(ee(),d=s.length;d<i.length;d+=1)o(d);te()}((f=c[0])==null?void 0:f.length)==0?a||(a=Cn(),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!r){for(let u=0;u<s.length;u+=1)R(i[u]);r=!0}},o(c){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)D(i[u]);r=!1},d(c){c&&S(e),Ne(i,c),a&&a.d()}}}function An(n){let e,t;return e=new en({props:{art_data:n[3],dim:n[1]&&n[2].username==n[3].owner}}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[3]),s&7&&(i.dim=r[1]&&r[2].username==r[3].owner),e.$set(i)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function Cn(n){let e;return{c(){e=m("h1"),e.textContent="No art!"},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function gi(n){let e,t,r,s;const i=[pi,hi],o=[];function a(l,c){return l[0]!=null?0:1}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),r=me()},m(l,c){o[e].m(l,c),A(l,r,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ee(),D(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(l,c):(t=o[e]=i[e](l),t.c()),R(t,1),t.m(r.parentNode,r))},i(l){s||(R(t),s=!0)},o(l){D(t),s=!1},d(l){o[e].d(l),l&&S(r)}}}function mi(n,e,t){let r;re(n,J,o=>t(2,r=o));let{gallery:s=null}=e,{hide_owner:i=!1}=e;return n.$$set=o=>{"gallery"in o&&t(0,s=o.gallery),"hide_owner"in o&&t(1,i=o.hide_owner)},[s,i,r]}class tn extends G{constructor(e){super(),q(this,e,mi,gi,W,{gallery:0,hide_owner:1})}}function Rn(n,e,t){const r=n.slice();return r[1]=e[t],r}function On(n){let e,t,r=n[1].content+"",s,i,o,a=n[1].date+"",l,c;return{c(){e=m("div"),t=m("h2"),s=M(r),i=C(),o=m("p"),l=M(a),c=C(),h(t,"class","svelte-1bu8zi8"),h(o,"class","hint"),h(e,"class","log svelte-1bu8zi8")},m(u,f){A(u,e,f),p(e,t),p(t,s),p(e,i),p(e,o),p(o,l),p(e,c)},p(u,f){f&1&&r!==(r=u[1].content+"")&&K(s,r),f&1&&a!==(a=u[1].date+"")&&K(l,a)},d(u){u&&S(e)}}}function _i(n){let e,t=n[0],r=[];for(let s=0;s<t.length;s+=1)r[s]=On(Rn(n,t,s));return{c(){e=m("main");for(let s=0;s<r.length;s+=1)r[s].c();h(e,"class","svelte-1bu8zi8")},m(s,i){A(s,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(s,[i]){if(i&1){t=s[0];let o;for(o=0;o<t.length;o+=1){const a=Rn(s,t,o);r[o]?r[o].p(a,i):(r[o]=On(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},i:L,o:L,d(s){s&&S(e),Ne(r,s)}}}function vi(n,e,t){let r=[];return ke(async()=>{var i;const s=await X.getLogs();if(!s.ok)return U.set({theme:"error",msg:((i=s==null?void 0:s.data)==null?void 0:i.msg)??"Uh oh"});t(0,r=s.data.logs)}),[r]}class bi extends G{constructor(e){super(),q(this,e,vi,_i,W,{})}}function Pn(n,e,t){const r=n.slice();return r[5]=e[t],r[7]=t,r}function Dn(n){let e,t=n[5].name+"",r,s,i;function o(){return n[3](n[7])}return{c(){e=m("p"),r=M(t),h(e,"class","svelte-9rcby7"),$(e,"selected",n[0]==n[7])},m(a,l){A(a,e,l),p(e,r),s||(i=j(e,"click",o),s=!0)},p(a,l){n=a,l&2&&t!==(t=n[5].name+"")&&K(r,t),l&1&&$(e,"selected",n[0]==n[7])},d(a){a&&S(e),s=!1,i()}}}function yi(n){let e,t,r,s,i,o=n[1],a=[];for(let f=0;f<o.length;f+=1)a[f]=Dn(Pn(n,o,f));const l=[n[1][n[0]].props];var c=n[1][n[0]].comp;function u(f){let d={};for(let g=0;g<l.length;g+=1)d=bt(d,l[g]);return{props:d}}return c&&(s=He(c,u())),{c(){e=m("main"),t=m("div");for(let f=0;f<a.length;f+=1)a[f].c();r=C(),s&&V(s.$$.fragment),h(t,"id","tabs"),h(t,"class","svelte-9rcby7"),h(e,"class","flex-page svelte-9rcby7")},m(f,d){A(f,e,d),p(e,t);for(let g=0;g<a.length;g+=1)a[g].m(t,null);p(e,r),s&&z(s,e,null),i=!0},p(f,[d]){if(d&3){o=f[1];let _;for(_=0;_<o.length;_+=1){const I=Pn(f,o,_);a[_]?a[_].p(I,d):(a[_]=Dn(I),a[_].c(),a[_].m(t,null))}for(;_<a.length;_+=1)a[_].d(1);a.length=o.length}const g=d&3?Xt(l,[Qt(f[1][f[0]].props)]):{};if(c!==(c=f[1][f[0]].comp)){if(s){ee();const _=s;D(_.$$.fragment,1,0,()=>{x(_,1)}),te()}c?(s=He(c,u()),V(s.$$.fragment),R(s.$$.fragment,1),z(s,e,null)):s=null}else c&&s.$set(g)},i(f){i||(s&&R(s.$$.fragment,f),i=!0)},o(f){s&&D(s.$$.fragment,f),i=!1},d(f){f&&S(e),Ne(a,f),s&&x(s)}}}function wi(n,e,t){let r,s;re(n,J,l=>t(4,s=l));let i=null,o=0;ke(async()=>{var u;const l=await X.authGallery();if(!l.ok)return U.set({theme:"error",msg:((u=l==null?void 0:l.data)==null?void 0:u.msg)??"Can't load your gallery!"});t(2,i=l.data.gallery);const c=await X.getSelf();c.ok?(c.data.daily_gain>0?U.set({theme:"info",msg:`You gained ${c.data.daily_gain} coins today!`}):U.set({theme:"info",msg:`${c.data.hours_to_bonus} hours to daily bonus`}),Z(J,s={username:c.data.username,coins:c.data.coins},s)):(Z(J,s=null,s),ae("/login"))});const a=l=>{t(0,o=l)};return n.$$.update=()=>{n.$$.dirty&4&&t(1,r=[{comp:tn,props:{gallery:i,hide_owner:!1},name:"Gallery"},{comp:bi,props:{},name:"Logs"}])},[o,r,i,a]}class Ii extends G{constructor(e){super(),q(this,e,wi,yi,W,{})}}/**
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
 */const Or=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ki=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),r.push(t[u],t[f],t[d],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Or(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ki(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const d=i<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const _=c<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ei=function(n){const e=Or(n);return Pr.encodeByteArray(e,!0)},Dr=function(n){return Ei(n).replace(/\./g,"")},Nr=function(n){try{return Pr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ti(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Si=()=>Ti().__FIREBASE_DEFAULTS__,Ai=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ci=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nr(n[1]);return e&&JSON.parse(e)},nn=()=>{try{return Si()||Ai()||Ci()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ri=n=>{var e,t;return(t=(e=nn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Oi=()=>{var n;return(n=nn())===null||n===void 0?void 0:n.config},Lr=n=>{var e;return(e=nn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Di(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Ni(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Li(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mi(){const n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $i(){try{return typeof indexedDB=="object"}catch{return!1}}function Ui(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bi="FirebaseError";class Te extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bi,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fi(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Te(s,a,r)}}function Fi(n,e){return n.replace(ji,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ji=/\{\$([^}]+)}/g;function Hi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ht(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Nn(i)&&Nn(o)){if(!ht(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Nn(n){return n!==null&&typeof n=="object"}/**
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
 */function tt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(n,e){const t=new xi(n,e);return t.subscribe.bind(t)}class xi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Vi(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Dt),s.error===void 0&&(s.error=Dt),s.complete===void 0&&(s.complete=Dt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dt(){}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Se="[DEFAULT]";/**
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
 */class Wi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gi(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qi(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qi(n){return n===Se?void 0:n}function Gi(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ki{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Ji={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Yi=F.INFO,Xi={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Qi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xi[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mr{constructor(e){this.name=e,this._logLevel=Yi,this._logHandler=Qi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ji[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Zi=(n,e)=>e.some(t=>n instanceof t);let Ln,Mn;function eo(){return Ln||(Ln=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function to(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $r=new WeakMap,xt=new WeakMap,Ur=new WeakMap,Nt=new WeakMap,rn=new WeakMap;function no(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(we(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$r.set(t,n)}).catch(()=>{}),rn.set(e,n),e}function ro(n){if(xt.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});xt.set(n,e)}let Vt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ur.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function so(n){Vt=n(Vt)}function io(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Lt(this),e,...t);return Ur.set(r,e.sort?e.sort():[e]),we(r)}:to().includes(n)?function(...e){return n.apply(Lt(this),e),we($r.get(this))}:function(...e){return we(n.apply(Lt(this),e))}}function oo(n){return typeof n=="function"?io(n):(n instanceof IDBTransaction&&ro(n),Zi(n,eo())?new Proxy(n,Vt):n)}function we(n){if(n instanceof IDBRequest)return no(n);if(Nt.has(n))return Nt.get(n);const e=oo(n);return e!==n&&(Nt.set(n,e),rn.set(e,n)),e}const Lt=n=>rn.get(n);function ao(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=we(o);return r&&o.addEventListener("upgradeneeded",l=>{r(we(o.result),l.oldVersion,l.newVersion,we(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const lo=["get","getKey","getAll","getAllKeys","count"],co=["put","add","delete","clear"],Mt=new Map;function $n(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mt.get(e))return Mt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=co.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lo.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Mt.set(e,i),i}so(n=>({...n,get:(e,t,r)=>$n(e,t)||n.get(e,t,r),has:(e,t)=>!!$n(e,t)||n.has(e,t)}));/**
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
 */class uo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wt="@firebase/app",Un="0.9.3";/**
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
 */const Pe=new Mr("@firebase/app"),ho="@firebase/app-compat",po="@firebase/analytics-compat",go="@firebase/analytics",mo="@firebase/app-check-compat",_o="@firebase/app-check",vo="@firebase/auth",bo="@firebase/auth-compat",yo="@firebase/database",wo="@firebase/database-compat",Io="@firebase/functions",ko="@firebase/functions-compat",Eo="@firebase/installations",To="@firebase/installations-compat",So="@firebase/messaging",Ao="@firebase/messaging-compat",Co="@firebase/performance",Ro="@firebase/performance-compat",Oo="@firebase/remote-config",Po="@firebase/remote-config-compat",Do="@firebase/storage",No="@firebase/storage-compat",Lo="@firebase/firestore",Mo="@firebase/firestore-compat",$o="firebase",Uo="9.17.1";/**
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
 */const qt="[DEFAULT]",Bo={[Wt]:"fire-core",[ho]:"fire-core-compat",[go]:"fire-analytics",[po]:"fire-analytics-compat",[_o]:"fire-app-check",[mo]:"fire-app-check-compat",[vo]:"fire-auth",[bo]:"fire-auth-compat",[yo]:"fire-rtdb",[wo]:"fire-rtdb-compat",[Io]:"fire-fn",[ko]:"fire-fn-compat",[Eo]:"fire-iid",[To]:"fire-iid-compat",[So]:"fire-fcm",[Ao]:"fire-fcm-compat",[Co]:"fire-perf",[Ro]:"fire-perf-compat",[Oo]:"fire-rc",[Po]:"fire-rc-compat",[Do]:"fire-gcs",[No]:"fire-gcs-compat",[Lo]:"fire-fst",[Mo]:"fire-fst-compat","fire-js":"fire-js",[$o]:"fire-js-all"};/**
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
 */const pt=new Map,Gt=new Map;function Fo(n,e){try{n.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Je(n){const e=n.name;if(Gt.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,n);for(const t of pt.values())Fo(t,n);return!0}function Br(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const jo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ie=new et("app","Firebase",jo);/**
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
 */class Ho{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const kt=Uo;function Fr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ie.create("bad-app-name",{appName:String(s)});if(t||(t=Oi()),!t)throw Ie.create("no-options");const i=pt.get(s);if(i){if(ht(t,i.options)&&ht(r,i.config))return i;throw Ie.create("duplicate-app",{appName:s})}const o=new Ki(s);for(const l of Gt.values())o.addComponent(l);const a=new Ho(t,r,o);return pt.set(s,a),a}function zo(n=qt){const e=pt.get(n);if(!e&&n===qt)return Fr();if(!e)throw Ie.create("no-app",{appName:n});return e}function Be(n,e,t){var r;let s=(r=Bo[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(a.join(" "));return}Je(new ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xo="firebase-heartbeat-database",Vo=1,Ye="firebase-heartbeat-store";let $t=null;function jr(){return $t||($t=ao(xo,Vo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ye)}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),$t}async function Wo(n){try{return(await jr()).transaction(Ye).objectStore(Ye).get(Hr(n))}catch(e){if(e instanceof Te)Pe.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pe.warn(t.message)}}}async function Bn(n,e){try{const r=(await jr()).transaction(Ye,"readwrite");return await r.objectStore(Ye).put(e,Hr(n)),r.done}catch(t){if(t instanceof Te)Pe.warn(t.message);else{const r=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(r.message)}}}function Hr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qo=1024,Go=30*24*60*60*1e3;class Ko{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Go}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fn(),{heartbeatsToSend:t,unsentEntries:r}=Jo(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fn(){return new Date().toISOString().substring(0,10)}function Jo(n,e=qo){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jn(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $i()?Ui().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jn(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xo(n){Je(new ze("platform-logger",e=>new uo(e),"PRIVATE")),Je(new ze("heartbeat",e=>new Ko(e),"PRIVATE")),Be(Wt,Un,n),Be(Wt,Un,"esm2017"),Be("fire-js","")}Xo("");var Qo="firebase",Zo="9.17.1";/**
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
 */Be(Qo,Zo,"app");function sn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function zr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ea=zr,xr=new et("auth","Firebase",zr());/**
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
 */const Hn=new Mr("@firebase/auth");function lt(n,...e){Hn.logLevel<=F.ERROR&&Hn.error(`Auth (${kt}): ${n}`,...e)}/**
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
 */function fe(n,...e){throw on(n,...e)}function ce(n,...e){return on(n,...e)}function Vr(n,e,t){const r=Object.assign(Object.assign({},ea()),{[e]:t});return new et("auth","Firebase",r).create(e,{appName:n.name})}function ta(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(n,"argument-error"),Vr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function on(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xr.create(n,...e)}function N(n,e,...t){if(!n)throw on(e,...t)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lt(e),new Error(e)}function ge(n,e){n||he(e)}/**
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
 */const zn=new Map;function pe(n){ge(n instanceof Function,"Expected a class definition");let e=zn.get(n);return e?(ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zn.set(n,e),e)}/**
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
 */function na(n,e){const t=Br(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ht(i,e??{}))return s;fe(s,"already-initialized")}return t.initialize({options:e})}function ra(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sa(){return xn()==="http:"||xn()==="https:"}function xn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ia(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sa()||Ni()||"connection"in navigator)?navigator.onLine:!0}function oa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class nt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ge(t>e,"Short delay should be less than long delay!"),this.isMobile=Di()||Li()}get(){return ia()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function an(n,e){ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const la=new nt(3e4,6e4);function ca(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Et(n,e,t,r,s={}){return qr(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Wr.fetch()(Gr(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function qr(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},aa),e);try{const s=new fa(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw it(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw it(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw it(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw it(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vr(n,u,c);fe(n,u)}}catch(s){if(s instanceof Te)throw s;fe(n,"network-request-failed")}}async function ua(n,e,t,r,s={}){const i=await Et(n,e,t,r,s);return"mfaPendingCredential"in i&&fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Gr(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?an(n.config,s):`${n.config.apiScheme}://${s}`}class fa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),la.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function it(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ce(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function da(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function ha(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pa(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=ln(r);N(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qe(Ut(s.auth_time)),issuedAtTime:qe(Ut(s.iat)),expirationTime:qe(Ut(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ut(n){return Number(n)*1e3}function ln(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return lt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nr(t);return s?JSON.parse(s):(lt("Failed to decode base64 JWT payload"),null)}catch(s){return lt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ga(n){const e=ln(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xe(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Te&&ma(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ma({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class _a{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qe(this.lastLoginAt),this.creationTime=qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gt(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Xe(n,ha(t,{idToken:r}));N(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ya(i.providerUserInfo):[],a=ba(n.providerData,o),l=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function va(n){const e=Ve(n);await gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ba(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ya(n){return n.map(e=>{var{providerId:t}=e,r=sn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wa(n,e){const t=await qr(n,{},async()=>{const r=tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Gr(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wr.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ga(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await wa(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Qe;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(N(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(N(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function _e(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _a(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xe(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pa(this,e)}reload(){return va(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await gt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xe(this,da(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,c,u;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=t.createdAt)!==null&&c!==void 0?c:void 0,k=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:w,isAnonymous:v,providerData:E,stsTokenManager:y}=t;N(T&&y,e,"internal-error");const O=Qe.fromJSON(this.name,y);N(typeof T=="string",e,"internal-error"),_e(f,e.name),_e(d,e.name),N(typeof w=="boolean",e,"internal-error"),N(typeof v=="boolean",e,"internal-error"),_e(g,e.name),_e(_,e.name),_e(I,e.name),_e(b,e.name),_e(P,e.name),_e(k,e.name);const H=new Oe({uid:T,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:v,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:O,createdAt:P,lastLoginAt:k});return E&&Array.isArray(E)&&(H.providerData=E.map(Y=>Object.assign({},Y))),b&&(H._redirectEventId=b),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qe;s.updateFromServerResponse(t);const i=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gt(i),i}}/**
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
 */class Jr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jr.type="NONE";const Vn=Jr;/**
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
 */function ct(n,e,t){return`firebase:${n}:${e}:${t}`}class Fe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ct(this.userKey,s.apiKey,i),this.fullPersistenceKey=ct("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fe(pe(Vn),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||pe(Vn);const o=ct(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const f=Oe._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fe(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Fe(i,e,r))}}/**
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
 */function Wn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(es(e))return"Blackberry";if(ts(e))return"Webos";if(cn(e))return"Safari";if((e.includes("chrome/")||Xr(e))&&!e.includes("edge/"))return"Chrome";if(Zr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yr(n=Q()){return/firefox\//i.test(n)}function cn(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xr(n=Q()){return/crios\//i.test(n)}function Qr(n=Q()){return/iemobile/i.test(n)}function Zr(n=Q()){return/android/i.test(n)}function es(n=Q()){return/blackberry/i.test(n)}function ts(n=Q()){return/webos/i.test(n)}function Tt(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ia(n=Q()){var e;return Tt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ka(){return Mi()&&document.documentMode===10}function ns(n=Q()){return Tt(n)||Zr(n)||ts(n)||es(n)||/windows phone/i.test(n)||Qr(n)}function Ea(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rs(n,e=[]){let t;switch(n){case"Browser":t=Wn(Q());break;case"Worker":t=`${Wn(Q())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kt}/${r}`}/**
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
 */class Ta{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Sa{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qn(this),this.idTokenSubscription=new qn(this),this.beforeStateQueue=new Ta(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pe(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ve(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new et("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pe(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Fe.create(this,[pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function St(n){return Ve(n)}class qn{constructor(e){this.auth=e,this.observer=null,this.addObserver=zi(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Aa(n,e,t){const r=St(n);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ss(e),{host:o,port:a}=Ca(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ra()}function ss(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ca(n){const e=ss(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gn(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gn(o)}}}function Gn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ra(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class is{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function je(n,e){return ua(n,"POST","/v1/accounts:signInWithIdp",ca(n,e))}/**
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
 */const Oa="http://localhost";class De extends is{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=sn(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new De(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return je(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,je(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,je(e,t)}buildRequest(){const e={requestUri:Oa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tt(t)}return e}}/**
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
 */class un{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rt extends un{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ve extends rt{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
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
 */class de extends rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return de.credential(t,r)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
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
 */class be extends rt{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
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
 */class ye extends rt{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ye.credential(t,r)}catch{return null}}}ye.TWITTER_SIGN_IN_METHOD="twitter.com";ye.PROVIDER_ID="twitter.com";/**
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
 */class xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Oe._fromIdTokenResponse(e,r,s),o=Kn(r);return new xe({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kn(r);return new xe({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mt extends Te{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new mt(e,t,r,s)}}function os(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mt._fromErrorAndOperation(n,i,e,r):i})}async function Pa(n,e,t=!1){const r=await Xe(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xe._forOperation(n,"link",r)}/**
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
 */async function Da(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Xe(n,os(r,s,e,n),t);N(i.idToken,r,"internal-error");const o=ln(i.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(n.uid===a,r,"user-mismatch"),xe._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),i}}/**
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
 */async function Na(n,e,t=!1){const r="signIn",s=await os(n,r,e),i=await xe._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function La(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function Ma(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}const _t="__sak";/**
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
 */class as{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $a(){const n=Q();return cn(n)||Tt(n)}const Ua=1e3,Ba=10;class ls extends as{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$a()&&Ea(),this.fallbackToPolling=ns(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ka()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ba):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ua)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ls.type="LOCAL";const Fa=ls;/**
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
 */class cs extends as{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cs.type="SESSION";const us=cs;/**
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
 */function ja(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class At{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new At(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,i)),l=await ja(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}At.receivers=[];/**
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
 */function fn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ha{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=fn("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ue(){return window}function za(n){ue().location.href=n}/**
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
 */function fs(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function xa(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Va(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wa(){return fs()?self:null}/**
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
 */const ds="firebaseLocalStorageDb",qa=1,vt="firebaseLocalStorage",hs="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ct(n,e){return n.transaction([vt],e?"readwrite":"readonly").objectStore(vt)}function Ga(){const n=indexedDB.deleteDatabase(ds);return new st(n).toPromise()}function Jt(){const n=indexedDB.open(ds,qa);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vt,{keyPath:hs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vt)?e(r):(r.close(),await Ga(),e(await Jt()))})})}async function Jn(n,e,t){const r=Ct(n,!0).put({[hs]:e,value:t});return new st(r).toPromise()}async function Ka(n,e){const t=Ct(n,!1).get(e),r=await new st(t).toPromise();return r===void 0?null:r.value}function Yn(n,e){const t=Ct(n,!0).delete(e);return new st(t).toPromise()}const Ja=800,Ya=3;class ps{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ya)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=At._getInstance(Wa()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xa(),!this.activeServiceWorker)return;this.sender=new Ha(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Va()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jt();return await Jn(e,_t,"1"),await Yn(e,_t),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ka(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ct(s,!1).getAll();return new st(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ps.type="LOCAL";const Xa=ps;/**
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
 */function Qa(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Za(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ce("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qa().appendChild(r)})}function el(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new nt(3e4,6e4);/**
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
 */function gs(n,e){return e?pe(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dn extends is{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tl(n){return Na(n.auth,new dn(n),n.bypassAuthState)}function nl(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),Da(t,new dn(n),n.bypassAuthState)}async function rl(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),Pa(t,new dn(n),n.bypassAuthState)}/**
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
 */class ms{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tl;case"linkViaPopup":case"linkViaRedirect":return rl;case"reauthViaPopup":case"reauthViaRedirect":return nl;default:fe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sl=new nt(2e3,1e4);async function il(n,e,t){const r=St(n);ta(n,e,un);const s=gs(r,t);return new Re(r,"signInViaPopup",e,s).executeNotNull()}class Re extends ms{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Re.currentPopupAction&&Re.currentPopupAction.cancel(),Re.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Re.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sl.get())};e()}}Re.currentPopupAction=null;/**
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
 */const ol="pendingRedirect",ut=new Map;class al extends ms{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ut.get(this.auth._key());if(!e){try{const r=await ll(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ut.set(this.auth._key(),e)}return this.bypassAuthState||ut.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ll(n,e){const t=fl(e),r=ul(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cl(n,e){ut.set(n._key(),e)}function ul(n){return pe(n._redirectPersistence)}function fl(n){return ct(ol,n.config.apiKey,n.name)}async function dl(n,e,t=!1){const r=St(n),s=gs(r,e),o=await new al(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hl=10*60*1e3;class pl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_s(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ce(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xn(e))}saveEventToCache(e){this.cachedEventUids.add(Xn(e)),this.lastProcessedEventTime=Date.now()}}function Xn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _s({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _s(n);default:return!1}}/**
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
 */async function ml(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
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
 */const _l=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vl=/^https?/;async function bl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ml(n);for(const t of e)try{if(yl(t))return}catch{}fe(n,"unauthorized-domain")}function yl(n){const e=Kt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!vl.test(t))return!1;if(_l.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wl=new nt(3e4,6e4);function Qn(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Il(n){return new Promise((e,t)=>{var r,s,i;function o(){Qn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qn(),t(ce(n,"network-request-failed"))},timeout:wl.get()})}if(!((s=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ue().gapi)===null||i===void 0)&&i.load)o();else{const a=el("iframefcb");return ue()[a]=()=>{gapi.load?o():t(ce(n,"network-request-failed"))},Za(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ft=null,e})}let ft=null;function kl(n){return ft=ft||Il(n),ft}/**
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
 */const El=new nt(5e3,15e3),Tl="__/auth/iframe",Sl="emulator/auth/iframe",Al={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rl(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?an(e,Sl):`https://${n.config.authDomain}/${Tl}`,r={apiKey:e.apiKey,appName:n.name,v:kt},s=Cl.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${tt(r).slice(1)}`}async function Ol(n){const e=await kl(n),t=ue().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:Rl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Al,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ce(n,"network-request-failed"),a=ue().setTimeout(()=>{i(o)},El.get());function l(){ue().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Pl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dl=500,Nl=600,Ll="_blank",Ml="http://localhost";class Zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $l(n,e,t,r=Dl,s=Nl){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Pl),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Q().toLowerCase();t&&(a=Xr(c)?Ll:t),Yr(c)&&(e=e||Ml,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Ia(c)&&a!=="_self")return Ul(e||"",a),new Zn(null);const f=window.open(e||"",a,u);N(f,n,"popup-blocked");try{f.focus()}catch{}return new Zn(f)}function Ul(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Bl="__/auth/handler",Fl="emulator/auth/handler";function er(n,e,t,r,s,i){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:kt,eventId:s};if(e instanceof un){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof rt){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${jl(n)}?${tt(a).slice(1)}`}function jl({config:n}){return n.emulator?an(n,Fl):`https://${n.authDomain}/${Bl}`}/**
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
 */const Bt="webStorageSupport";class Hl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=us,this._completeRedirectFn=dl,this._overrideRedirectResult=cl}async _openPopup(e,t,r,s){var i;ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=er(e,t,r,Kt(),s);return $l(e,o,fn())}async _openRedirect(e,t,r,s){return await this._originValidation(e),za(er(e,t,r,Kt(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ol(e),r=new pl(e);return t.register("authEvent",s=>(N(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bt,{type:Bt},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bt];o!==void 0&&t(!!o),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ns()||cn()||Tt()}}const zl=Hl;var tr="@firebase/auth",nr="0.21.3";/**
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
 */class xl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wl(n){Je(new ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{N(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rs(n)},u=new Sa(a,l,c);return ra(u,t),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Je(new ze("auth-internal",e=>{const t=St(e.getProvider("auth").getImmediate());return(r=>new xl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(tr,nr,Vl(n)),Be(tr,nr,"esm2017")}/**
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
 */const ql=5*60,Gl=Lr("authIdTokenMaxAge")||ql;let rr=null;const Kl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gl)return;const s=t==null?void 0:t.token;rr!==s&&(rr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jl(n=zo()){const e=Br(n,"auth");if(e.isInitialized())return e.getImmediate();const t=na(n,{popupRedirectResolver:zl,persistence:[Xa,Fa,us]}),r=Lr("authTokenSyncURL");if(r){const i=Kl(r);Ma(t,i,()=>i(t.currentUser)),La(t,o=>i(o))}const s=Ri("auth");return s&&Aa(t,`http://${s}`),t}Wl("Browser");const Yl={apiKey:"AIzaSyAYrkxy8x6MVXmgDNeiwXGctzgi-oC1ISQ",authDomain:"bit-art-market.firebaseapp.com",projectId:"bit-art-market",storageBucket:"bit-art-market.appspot.com",messagingSenderId:"216348112827",appId:"1:216348112827:web:7c05b55cbe74d36ab6369e"},Xl=Fr(Yl),Ql=Jl(Xl),Zl=new de,ec=async()=>{let n=null;try{const e=await il(Ql,Zl),{uid:t}=e.user;n=await X.login(t)}catch(e){n={ok:!1,status:500,data:{msg:"Error authenticating Google account!"}},console.log(e)}return n};function tc(n){let e,t,r;return{c(){e=m("button"),e.textContent="Sign in with Google",h(e,"class","svelte-14hvih2")},m(s,i){A(s,e,i),t||(r=j(e,"click",n[0]),t=!0)},p:L,i:L,o:L,d(s){s&&S(e),t=!1,r()}}}function nc(n,e,t){let{callback:r=o=>{}}=e,{precall:s=()=>{}}=e;const i=async()=>{s==null||s();const o=await ec();r(o)};return n.$$set=o=>{"callback"in o&&t(1,r=o.callback),"precall"in o&&t(2,s=o.precall)},[i,r,s]}class rc extends G{constructor(e){super(),q(this,e,nc,tc,W,{callback:1,precall:2})}}function sc(n){let e,t;return e=new It({}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p:L,i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function ic(n){let e,t,r,s,i,o,a;return s=new rc({props:{callback:n[1],precall:n[2]}}),{c(){e=m("main"),t=m("h1"),t.textContent="Login",r=C(),V(s.$$.fragment),i=C(),o=m("p"),o.textContent="More sign in methods coming soon...",h(o,"class","hint"),h(e,"class","flex-page svelte-dgszhc")},m(l,c){A(l,e,c),p(e,t),p(e,r),z(s,e,null),p(e,i),p(e,o),a=!0},p(l,c){const u={};c&1&&(u.precall=l[2]),s.$set(u)},i(l){a||(R(s.$$.fragment,l),a=!0)},o(l){D(s.$$.fragment,l),a=!1},d(l){l&&S(e),x(s)}}}function oc(n){let e,t,r,s;const i=[ic,sc],o=[];function a(l,c){return l[0]?1:0}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),r=me()},m(l,c){o[e].m(l,c),A(l,r,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ee(),D(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(l,c):(t=o[e]=i[e](l),t.c()),R(t,1),t.m(r.parentNode,r))},i(l){s||(R(t),s=!0)},o(l){D(t),s=!1},d(l){o[e].d(l),l&&S(r)}}}function ac(n,e,t){let r;re(n,J,l=>t(3,r=l)),r!=null&&ae("/home");let s=!1;const i=(l,c,u)=>{U.set({theme:l,msg:c}),ae(u)};return[s,l=>{t(0,s=!1),l.ok?l.data.set_username===!0?i("info",l.data.msg,"/set-name"):(Z(J,r={username:l.data.username,coins:l.data.coins},r),i("success",l.data.msg,"/home")):i("error",l.data.msg,"/login")},()=>{t(0,s=!0)}]}class lc extends G{constructor(e){super(),q(this,e,ac,oc,W,{})}}function cc(n){let e,t,r,s,i,o,a,l,c,u,f,d,g;return{c(){e=m("main"),t=m("h1"),t.textContent="Set Your Username",r=C(),s=m("div"),i=m("input"),o=C(),a=m("button"),l=M("Set"),u=C(),f=m("p"),f.innerHTML="Must not contain<br/>illegal characters or spaces!",h(i,"type","username"),h(i,"placeholder","my_unique_display_name"),a.disabled=c=!n[1],h(f,"class","hint svelte-1kk2jjc"),$(f,"invalid",!n[1]),h(e,"class","flex-page svelte-1kk2jjc")},m(_,I){A(_,e,I),p(e,t),p(e,r),p(e,s),p(s,i),dt(i,n[0]),p(s,o),p(s,a),p(a,l),p(e,u),p(e,f),d||(g=[j(i,"input",n[3]),j(a,"click",n[2])],d=!0)},p(_,[I]){I&1&&dt(i,_[0]),I&2&&c!==(c=!_[1])&&(a.disabled=c),I&2&&$(f,"invalid",!_[1])},i:L,o:L,d(_){_&&S(e),d=!1,se(g)}}}function uc(n,e,t){let r,s;re(n,J,c=>t(4,s=c)),s!=null&&ae("/home");let i="";const o=(c,u,f)=>{U.set({theme:c,msg:u}),f&&ae(f)},a=async()=>{const c=await X.setName(i);c.ok?(Z(J,s={username:c.data.username,coins:c.data.coins},s),o("success",c.data.msg,null),ae("/home")):o("error",c.data.msg,null)};function l(){i=this.value,t(0,i)}return n.$$.update=()=>{n.$$.dirty&1&&t(1,r=/^[0-9a-zA-Z_.-]*$/.test(i))},[i,r,a,l]}class fc extends G{constructor(e){super(),q(this,e,uc,cc,W,{})}}function dc(n){let e;return{c(){e=m("main"),e.innerHTML="<h1>404, page not found ):</h1>",h(e,"class","flex-page")},m(t,r){A(t,e,r)},p:L,i:L,o:L,d(t){t&&S(e)}}}class hc extends G{constructor(e){super(),q(this,e,null,dc,W,{})}}function pc(n){let e,t,r,s,i,o,a,l,c,u,f,d,g;return{c(){e=m("main"),t=m("div"),r=m("div"),s=C(),i=m("div"),o=C(),a=m("div"),l=C(),c=m("i"),u=C(),f=m("canvas"),h(r,"class","color svelte-9ifxsm"),Ae(r,"background-color","#000000"),$(r,"selected",n[1]==0),h(i,"class","color svelte-9ifxsm"),Ae(i,"background-color","#808080"),$(i,"selected",n[1]==1),h(a,"class","color svelte-9ifxsm"),Ae(a,"background-color","#ffffff"),$(a,"selected",n[1]==2),h(c,"class","bi bi-paint-bucket svelte-9ifxsm"),h(c,"id","paint"),h(t,"id","colors"),h(t,"class","svelte-9ifxsm"),Ae(f,"width",n[2]+"px"),Ae(f,"height",n[2]+"px"),h(f,"class","svelte-9ifxsm")},m(_,I){A(_,e,I),p(e,t),p(t,r),p(t,s),p(t,i),p(t,o),p(t,a),p(t,l),p(t,c),p(e,u),p(e,f),n[8](f),d||(g=[j(r,"click",n[5]),j(i,"click",n[6]),j(a,"click",n[7]),j(c,"click",n[3])],d=!0)},p(_,[I]){I&2&&$(r,"selected",_[1]==0),I&2&&$(i,"selected",_[1]==1),I&2&&$(a,"selected",_[1]==2)},i:L,o:L,d(_){_&&S(e),n[8](null),d=!1,se(g)}}}function gc(n,e,t){let r,s,a={px:0,py:0,over:!1,down:!1},{pixels:l=[]}=e;const c=()=>{Cr(s,l.join(""),!1)},u=()=>{a.down&&a.px>=0&&(t(4,l[a.px+a.py*16]=g,l),c(),f())},f=()=>{s.strokeStyle="#aaa",s.lineWidth=1,s.strokeRect(a.px*24,a.py*24,24,24)};ke(()=>{l.length==0&&t(4,l=[...Array(256)].fill(0)),s=r.getContext("2d"),t(0,r.width=384,r),t(0,r.height=384,r),c();const k=T=>{a.px=Math.floor(T.offsetX/24),a.py=Math.floor(T.offsetY/24)};t(0,r.onpointerenter=()=>{a.over=!0},r),t(0,r.onpointerleave=()=>{a.over=!1,c(),a.down=!1},r),t(0,r.onpointerdown=T=>{a.down=!0,k(T),u()},r),t(0,r.onpointerup=()=>{a.down=!1},r),t(0,r.onpointermove=T=>{k(T),u(),c(),f()},r)});const d=()=>{l.fill(g),t(4,l[0]=g,l),c()};let g=0;const _=()=>{t(1,g=0)},I=()=>{t(1,g=1)},b=()=>{t(1,g=2)};function P(k){Ke[k?"unshift":"push"](()=>{r=k,t(0,r)})}return n.$$set=k=>{"pixels"in k&&t(4,l=k.pixels)},[r,g,384,d,l,_,I,b,P]}class mc extends G{constructor(e){super(),q(this,e,gc,pc,W,{pixels:4})}}const Yt={art_cost:50};function _c(n){let e,t,r,s,i;return{c(){e=m("button"),e.textContent="Can't afford!",t=C(),r=m("p"),r.textContent="It's unique!",e.disabled=!0,h(e,"class","svelte-l3fpc1"),h(r,"class","svelte-l3fpc1")},m(o,a){A(o,e,a),A(o,t,a),A(o,r,a),s||(i=j(e,"click",null),s=!0)},p:L,d(o){o&&S(e),o&&S(t),o&&S(r),s=!1,i()}}}function vc(n){let e,t,r,s,i;return{c(){e=m("button"),e.textContent="Publish art!",t=C(),r=m("p"),r.textContent="It's unique!",h(e,"class","svelte-l3fpc1"),h(r,"class","svelte-l3fpc1")},m(o,a){A(o,e,a),A(o,t,a),A(o,r,a),s||(i=j(e,"click",n[5]),s=!0)},p:L,d(o){o&&S(e),o&&S(t),o&&S(r),s=!1,i()}}}function bc(n){let e,t,r,s,i;return{c(){e=m("button"),t=M("Check uniqueness"),e.disabled=r=n[1]!=null,h(e,"class","svelte-l3fpc1")},m(o,a){A(o,e,a),p(e,t),s||(i=j(e,"click",n[4]),s=!0)},p(o,a){a&2&&r!==(r=o[1]!=null)&&(e.disabled=r)},d(o){o&&S(e),s=!1,i()}}}function sr(n){let e,t,r,s,i,o,a;return{c(){e=m("p"),t=m("a"),r=M(n[1]),i=M(" owns this piece!"),h(t,"href",s="/gallery/"+n[1]),h(t,"target","_blank"),h(t,"rel","noreferrer"),h(t,"class","svelte-l3fpc1"),h(e,"class","svelte-l3fpc1")},m(l,c){A(l,e,c),p(e,t),p(t,r),p(e,i),o||(a=ie(oe.call(null,t)),o=!0)},p(l,c){c&2&&K(r,l[1]),c&2&&s!==(s="/gallery/"+l[1])&&h(t,"href",s)},d(l){l&&S(e),o=!1,a()}}}function yc(n){let e,t,r,s,i,o,a,l,c,u,f,d;function g(T){n[7](T)}let _={};n[0]!==void 0&&(_.pixels=n[0]),r=new mc({props:_}),Ke.push(()=>Os(r,"pixels",g));function I(T,w){return T[2]?T[3]?vc:_c:bc}let b=I(n),P=b(n),k=n[1]&&sr(n);return{c(){e=m("main"),t=m("div"),V(r.$$.fragment),i=C(),o=m("section"),a=m("h1"),l=M("Art Cost: "),c=m("i"),c.textContent=`${Yt.art_cost}`,u=C(),P.c(),f=C(),k&&k.c(),h(c,"class","bi bi-coin svelte-l3fpc1"),h(a,"class","cash svelte-l3fpc1"),h(a,"id","cost"),h(o,"class","svelte-l3fpc1"),h(t,"id","content"),h(t,"class","svelte-l3fpc1"),h(e,"class","flex-page")},m(T,w){A(T,e,w),p(e,t),z(r,t,null),p(t,i),p(t,o),p(o,a),p(a,l),p(a,c),p(o,u),P.m(o,null),p(o,f),k&&k.m(o,null),d=!0},p(T,[w]){const v={};!s&&w&1&&(s=!0,v.pixels=T[0],Cs(()=>s=!1)),r.$set(v),b===(b=I(T))&&P?P.p(T,w):(P.d(1),P=b(T),P&&(P.c(),P.m(o,f))),T[1]?k?k.p(T,w):(k=sr(T),k.c(),k.m(o,null)):k&&(k.d(1),k=null)},i(T){d||(R(r.$$.fragment,T),d=!0)},o(T){D(r.$$.fragment,T),d=!1},d(T){T&&S(e),x(r),P.d(),k&&k.d()}}}function wc(n,e,t){let r,s,i;re(n,J,d=>t(6,i=d)),i==null&&ae("/login");let o=Array.from("0000000000001111001110000110111101122000000001110111100001000011001010000001000022222220001000102222220000001010220000000000000020000000000000000000000000000000000000000000000000000000000000000020002000200020022002200220022022222222222222222222222222222222").map(d=>+d),a=null,l=!1;const c=async()=>{const d=await X.artExists(r);d.ok?d.data.exists?t(1,a=d.data.owner):t(2,l=!0):U.set({theme:"error",msg:d.data.msg})},u=async()=>{var g;const d=await X.publishArt(r);if(!d.ok)return U.set({theme:"error",msg:((g=d==null?void 0:d.data)==null?void 0:g.msg)??"Can't publish art!"});Z(J,i.coins-=Yt.art_cost,i),U.set({theme:"success",msg:d.data.msg}),ae("/home")};function f(d){o=d,t(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&(r=xs(o)),n.$$.dirty&64&&t(3,s=i.coins>=Yt.art_cost),n.$$.dirty&1&&o&&(t(1,a=null),t(2,l=!1))},[o,a,l,s,c,u,i,f]}class Ic extends G{constructor(e){super(),q(this,e,wc,yc,W,{})}}function kc(n){let e,t,r,s;return{c(){e=m("nav"),t=m("a"),t.textContent="Login",h(t,"href","/login"),h(t,"class","svelte-1028ga5"),h(e,"class","svelte-1028ga5")},m(i,o){A(i,e,o),p(e,t),r||(s=ie(oe.call(null,t)),r=!0)},p:L,d(i){i&&S(e),r=!1,s()}}}function Ec(n){let e,t,r=n[1].username+"",s,i,o,a,l=n[1].coins+"",c,u,f,d,g,_,I,b,P,k,T,w,v,E;return{c(){e=m("h3"),t=m("a"),s=M(r),o=C(),a=m("i"),c=M(l),u=C(),f=m("nav"),d=m("a"),d.textContent="Home",g=C(),_=m("a"),_.textContent="Social",I=C(),b=m("a"),b.textContent="Search",P=C(),k=m("a"),k.textContent="Canvas",T=C(),w=m("a"),w.innerHTML='<i class="bi bi-house-fill"></i>',h(t,"href",i="/gallery/"+n[1].username),h(t,"class","svelte-1028ga5"),h(a,"class","bi bi-coin"),h(e,"id","user-txt"),h(e,"class","svelte-1028ga5"),h(d,"href","/home"),h(d,"class","svelte-1028ga5"),h(_,"href","/social"),h(_,"class","svelte-1028ga5"),h(b,"href","/search/popular"),h(b,"class","svelte-1028ga5"),h(k,"href","/canvas"),h(k,"class","svelte-1028ga5"),h(f,"class","svelte-1028ga5"),h(w,"href","/"),h(w,"id","home"),h(w,"class","svelte-1028ga5")},m(y,O){A(y,e,O),p(e,t),p(t,s),p(e,o),p(e,a),p(a,c),A(y,u,O),A(y,f,O),p(f,d),p(f,g),p(f,_),p(f,I),p(f,b),p(f,P),p(f,k),A(y,T,O),A(y,w,O),v||(E=[ie(oe.call(null,t)),ie(oe.call(null,d)),ie(oe.call(null,_)),ie(oe.call(null,b)),ie(oe.call(null,k)),ie(oe.call(null,w))],v=!0)},p(y,O){O&2&&r!==(r=y[1].username+"")&&K(s,r),O&2&&i!==(i="/gallery/"+y[1].username)&&h(t,"href",i),O&2&&l!==(l=y[1].coins+"")&&K(c,l)},d(y){y&&S(e),y&&S(u),y&&S(f),y&&S(T),y&&S(w),v=!1,se(E)}}}function Tc(n){let e,t,r,s,i;function o(c,u){return c[1]!=null?Ec:kc}let a=o(n),l=a(n);return{c(){e=m("main"),l.c(),t=C(),r=m("i"),h(e,"class","svelte-1028ga5"),$(e,"open",n[0]),h(r,"class","bi bi-list svelte-1028ga5"),h(r,"id","menu-toggle")},m(c,u){A(c,e,u),l.m(e,null),A(c,t,u),A(c,r,u),s||(i=[j(e,"click",n[2]),j(r,"click",n[3])],s=!0)},p(c,[u]){a===(a=o(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(e,null))),u&1&&$(e,"open",c[0])},i:L,o:L,d(c){c&&S(e),l.d(),c&&S(t),c&&S(r),s=!1,se(i)}}}function Sc(n,e,t){let r;re(n,J,a=>t(1,r=a));let s=!1;return[s,r,()=>(t(0,s=!1),U.set({theme:"info",msg:null})),()=>{t(0,s=!s)}]}class Ac extends G{constructor(e){super(),q(this,e,Sc,Tc,W,{})}}function ir(n,e,t){const r=n.slice();return r[11]=e[t],r}function or(n){let e,t=n[11]+"",r,s,i;function o(){return n[8](n[11])}return{c(){e=m("p"),r=M(t),h(e,"class","filter svelte-587ftq"),$(e,"selected",n[3]==n[11])},m(a,l){A(a,e,l),p(e,r),s||(i=j(e,"click",o),s=!0)},p(a,l){n=a,l&24&&$(e,"selected",n[3]==n[11])},d(a){a&&S(e),s=!1,i()}}}function Cc(n){let e,t,r,s,i,o,a,l,c,u=n[0]+1+"",f,d,g,_,I,b,P,k,T=n[4],w=[];for(let v=0;v<T.length;v+=1)w[v]=or(ir(n,T,v));return I=new tn({props:{gallery:n[1],hide_owner:!0}}),{c(){e=m("main"),t=m("section"),r=m("div");for(let v=0;v<w.length;v+=1)w[v].c();s=C(),i=m("div"),o=m("span"),o.textContent="<",a=C(),l=m("b"),c=M("Page: "),f=M(u),d=C(),g=m("span"),g.textContent=">",_=C(),V(I.$$.fragment),h(r,"id","filters"),h(r,"class","svelte-587ftq"),$(r,"loading",n[2]),h(o,"class","arrow svelte-587ftq"),$(o,"disabled",n[0]<=0),h(g,"class","arrow svelte-587ftq"),h(i,"id","page-number"),h(i,"class","svelte-587ftq"),h(t,"id","art-wrapper"),h(t,"class","svelte-587ftq"),h(e,"class","flex-page svelte-587ftq")},m(v,E){A(v,e,E),p(e,t),p(t,r);for(let y=0;y<w.length;y+=1)w[y].m(r,null);p(t,s),p(t,i),p(i,o),p(i,a),p(i,l),p(l,c),p(l,f),p(i,d),p(i,g),p(t,_),z(I,t,null),b=!0,P||(k=[j(o,"click",n[9]),j(g,"click",n[10])],P=!0)},p(v,[E]){if(E&56){T=v[4];let O;for(O=0;O<T.length;O+=1){const H=ir(v,T,O);w[O]?w[O].p(H,E):(w[O]=or(H),w[O].c(),w[O].m(r,null))}for(;O<w.length;O+=1)w[O].d(1);w.length=T.length}(!b||E&4)&&$(r,"loading",v[2]),(!b||E&1)&&$(o,"disabled",v[0]<=0),(!b||E&1)&&u!==(u=v[0]+1+"")&&K(f,u);const y={};E&2&&(y.gallery=v[1]),I.$set(y)},i(v){b||(R(I.$$.fragment,v),b=!0)},o(v){D(I.$$.fragment,v),b=!1},d(v){v&&S(e),Ne(w,v),x(I),P=!1,se(k)}}}function Rc(n,e,t){let r,{params:s={filter:"popular"}}=e,i=["new","old","expensive","cheap","popular","unpopular"],o=0,a=null,l=!1;const c=async _=>{if(t(0,o=0),t(1,a=null),i.includes(r))U.set({theme:"error",msg:null}),ae(`/search/${_}`);else return ae("/search/popular"),U.set({theme:"error",msg:"Invalid filter!"});await u(o,_)},u=async(_,I=r)=>{var P;t(1,a=null),t(2,l=!0);const b=await X.getArtByFilter(I,8,_);if(t(2,l=!1),!b.ok)return U.set({theme:"error",msg:((P=b==null?void 0:b.data)==null?void 0:P.msg)??"Can't get art!"});t(1,a=b.data.result)};ke(()=>{c(r)});const f=_=>c(_),d=()=>u(t(0,--o)),g=()=>u(t(0,++o));return n.$$set=_=>{"params"in _&&t(7,s=_.params)},n.$$.update=()=>{n.$$.dirty&128&&t(3,r=s.filter)},[o,a,l,r,i,c,u,s,f,d,g]}class Oc extends G{constructor(e){super(),q(this,e,Rc,Cc,W,{params:7})}}function ar(n,e,t){const r=n.slice();return r[2]=e[t].username,r[3]=e[t].top_three,r}function lr(n,e,t){const r=n.slice();return r[6]=e[t],r}function Pc(n){let e,t;return e=new It({}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p:L,i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function Dc(n){let e,t,r=n[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=ur(ar(n,r,o));const i=o=>D(s[o],1,1,()=>{s[o]=null});return{c(){e=m("main");for(let o=0;o<s.length;o+=1)s[o].c();h(e,"class","flex-page svelte-475urm")},m(o,a){A(o,e,a);for(let l=0;l<s.length;l+=1)s[l].m(e,null);t=!0},p(o,a){if(a&1){r=o[0];let l;for(l=0;l<r.length;l+=1){const c=ar(o,r,l);s[l]?(s[l].p(c,a),R(s[l],1)):(s[l]=ur(c),s[l].c(),R(s[l],1),s[l].m(e,null))}for(ee(),l=r.length;l<s.length;l+=1)i(l);te()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)R(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)D(s[a]);t=!1},d(o){o&&S(e),Ne(s,o)}}}function cr(n){let e,t;return e=new en({props:{art_data:n[6],show_details:!1}}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[6]),e.$set(i)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function ur(n){let e,t,r,s=n[2]+"",i,o,a,l,c,u,f,d,g,_,I=n[3],b=[];for(let k=0;k<I.length;k+=1)b[k]=cr(lr(n,I,k));const P=k=>D(b[k],1,1,()=>{b[k]=null});return{c(){e=m("section"),t=m("h2"),r=m("a"),i=M(s),a=C(),l=m("span"),l.textContent="(Top three pieces)",c=C(),u=m("div");for(let k=0;k<b.length;k+=1)b[k].c();f=C(),h(r,"href",o="/gallery/"+n[2]),h(r,"class","svelte-475urm"),h(l,"class","hint svelte-475urm"),h(t,"class","username svelte-475urm"),h(u,"class","art-row svelte-475urm")},m(k,T){A(k,e,T),p(e,t),p(t,r),p(r,i),p(t,a),p(t,l),p(e,c),p(e,u);for(let w=0;w<b.length;w+=1)b[w].m(u,null);p(e,f),d=!0,g||(_=ie(oe.call(null,r)),g=!0)},p(k,T){if((!d||T&1)&&s!==(s=k[2]+"")&&K(i,s),(!d||T&1&&o!==(o="/gallery/"+k[2]))&&h(r,"href",o),T&1){I=k[3];let w;for(w=0;w<I.length;w+=1){const v=lr(k,I,w);b[w]?(b[w].p(v,T),R(b[w],1)):(b[w]=cr(v),b[w].c(),R(b[w],1),b[w].m(u,null))}for(ee(),w=I.length;w<b.length;w+=1)P(w);te()}},i(k){if(!d){for(let T=0;T<I.length;T+=1)R(b[T]);d=!0}},o(k){b=b.filter(Boolean);for(let T=0;T<b.length;T+=1)D(b[T]);d=!1},d(k){k&&S(e),Ne(b,k),g=!1,_()}}}function Nc(n){let e,t,r,s;const i=[Dc,Pc],o=[];function a(l,c){return l[0]?0:1}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),r=me()},m(l,c){o[e].m(l,c),A(l,r,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ee(),D(o[u],1,1,()=>{o[u]=null}),te(),t=o[e],t?t.p(l,c):(t=o[e]=i[e](l),t.c()),R(t,1),t.m(r.parentNode,r))},i(l){s||(R(t),s=!0)},o(l){D(t),s=!1},d(l){o[e].d(l),l&&S(r)}}}function Lc(n,e,t){let r;re(n,J,i=>t(1,r=i)),r==null&&ae("/login");let s=null;return ke(async()=>{var o;const i=await X.getFollowingPopular();if(!i.ok)return U.set({theme:"error",msg:((o=i==null?void 0:i.data)==null?void 0:o.msg)??"Can't get your following!"});t(0,s=i.data.results)}),[s]}class Mc extends G{constructor(e){super(),q(this,e,Lc,Nc,W,{})}}function fr(n,e,t){const r=n.slice();return r[1]=e[t],r}function dr(n){let e,t,r,s,i=n[0],o=[];for(let l=0;l<i.length;l+=1)o[l]=hr(fr(n,i,l));const a=l=>D(o[l],1,1,()=>{o[l]=null});return{c(){e=m("p"),e.textContent="Here are some examples...",t=C(),r=m("div");for(let l=0;l<o.length;l+=1)o[l].c();h(e,"class","hint svelte-1rw2kg3"),h(r,"id","art"),h(r,"class","svelte-1rw2kg3")},m(l,c){A(l,e,c),A(l,t,c),A(l,r,c);for(let u=0;u<o.length;u+=1)o[u].m(r,null);s=!0},p(l,c){if(c&1){i=l[0];let u;for(u=0;u<i.length;u+=1){const f=fr(l,i,u);o[u]?(o[u].p(f,c),R(o[u],1)):(o[u]=hr(f),o[u].c(),R(o[u],1),o[u].m(r,null))}for(ee(),u=i.length;u<o.length;u+=1)a(u);te()}},i(l){if(!s){for(let c=0;c<i.length;c+=1)R(o[c]);s=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)D(o[c]);s=!1},d(l){l&&S(e),l&&S(t),l&&S(r),Ne(o,l)}}}function hr(n){let e,t;return e=new en({props:{art_data:n[1]}}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.art_data=r[1]),e.$set(i)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function $c(n){let e,t,r,s,i,o,a,l,c,u,f,d,g,_,I,b,P,k,T,w,v=n[0].length>0&&dr(n);return{c(){e=m("main"),t=m("header"),t.innerHTML=`<h1 class="svelte-1rw2kg3">Bit Art Market</h1> 
        <p class="svelte-1rw2kg3">It&#39;s like NFTs without the blockchain</p> 
        <p class="hint svelte-1rw2kg3">Name is a work-in-progress</p> 
        <a href="#three-random"><i class="arrow bi bi-arrow-down-short svelte-1rw2kg3"></i></a>`,r=C(),s=m("section"),i=m("h1"),i.innerHTML="Find, Like, Purchase, and Appreciate<br/>Pixel Art",o=C(),v&&v.c(),a=C(),l=m("a"),l.innerHTML='<i class="arrow bi bi-arrow-down-short svelte-1rw2kg3"></i>',c=C(),u=m("section"),u.innerHTML=`<h1 class="svelte-1rw2kg3">Simplicity is Key</h1> 
        <p class="svelte-1rw2kg3">Only three colors and 16x16 pixels</p> 
        <div id="colors" class="svelte-1rw2kg3"><div class="color svelte-1rw2kg3"></div> 
            <div class="color svelte-1rw2kg3"></div> 
            <div class="color svelte-1rw2kg3"></div></div> 
        <a href="#login"><i class="arrow bi bi-arrow-down-short svelte-1rw2kg3"></i></a>`,f=C(),d=m("section"),g=m("a"),g.innerHTML='<h1 class="svelte-1rw2kg3">Signup</h1>',_=C(),I=m("p"),I.textContent="Or",b=C(),P=m("a"),P.innerHTML='<h1 class="svelte-1rw2kg3">FAQ</h1>',h(t,"class","svelte-1rw2kg3"),h(i,"class","svelte-1rw2kg3"),h(l,"href","#examples"),h(s,"id","three-random"),h(s,"class","svelte-1rw2kg3"),h(u,"id","examples"),h(u,"class","svelte-1rw2kg3"),h(g,"href","/login"),h(g,"class","svelte-1rw2kg3"),h(I,"class","hint svelte-1rw2kg3"),h(P,"href","/faq"),h(P,"class","svelte-1rw2kg3"),h(d,"id","login"),h(d,"class","svelte-1rw2kg3")},m(E,y){A(E,e,y),p(e,t),p(e,r),p(e,s),p(s,i),p(s,o),v&&v.m(s,null),p(s,a),p(s,l),p(e,c),p(e,u),p(e,f),p(e,d),p(d,g),p(d,_),p(d,I),p(d,b),p(d,P),k=!0,T||(w=[ie(oe.call(null,g)),ie(oe.call(null,P))],T=!0)},p(E,[y]){E[0].length>0?v?(v.p(E,y),y&1&&R(v,1)):(v=dr(E),v.c(),R(v,1),v.m(s,a)):v&&(ee(),D(v,1,1,()=>{v=null}),te())},i(E){k||(R(v),k=!0)},o(E){D(v),k=!1},d(E){E&&S(e),v&&v.d(),T=!1,se(w)}}}function Uc(n,e,t){let r=[];return ke(async()=>{var i;const s=await X.threeRandom();if(!s.ok)return U.set({theme:"error",msg:((i=s==null?void 0:s.data)==null?void 0:i.msg)??"Can't fetch resources!"});t(0,r=s.data.result)}),[r]}class Bc extends G{constructor(e){super(),q(this,e,Uc,$c,W,{})}}function pr(n){var _;let e,t,r,s=n[0].username+"",i,o,a,l,c,u,f,d=n[4]!=null&&n[4].username!=n[0].username&&gr(n),g=((_=n[2])==null?void 0:_.length)==0&&mr(n);return u=new tn({props:{gallery:n[2]}}),{c(){e=m("main"),t=m("h1"),r=m("i"),i=M(s),o=M("'s Gallery"),a=C(),d&&d.c(),l=C(),g&&g.c(),c=C(),V(u.$$.fragment),h(r,"class","svelte-1g1tgca"),h(t,"class","svelte-1g1tgca"),h(e,"class","flex-page svelte-1g1tgca")},m(I,b){A(I,e,b),p(e,t),p(t,r),p(r,i),p(t,o),p(e,a),d&&d.m(e,null),p(e,l),g&&g.m(e,null),p(e,c),z(u,e,null),f=!0},p(I,b){var k;(!f||b&1)&&s!==(s=I[0].username+"")&&K(i,s),I[4]!=null&&I[4].username!=I[0].username?d?d.p(I,b):(d=gr(I),d.c(),d.m(e,l)):d&&(d.d(1),d=null),((k=I[2])==null?void 0:k.length)==0?g?g.p(I,b):(g=mr(I),g.c(),g.m(e,c)):g&&(g.d(1),g=null);const P={};b&4&&(P.gallery=I[2]),u.$set(P)},i(I){f||(R(u.$$.fragment,I),f=!0)},o(I){D(u.$$.fragment,I),f=!1},d(I){I&&S(e),d&&d.d(),g&&g.d(),x(u)}}}function gr(n){let e,t,r,s;return{c(){e=m("p"),t=M(n[3]),h(e,"id","toggle-follow"),h(e,"class","svelte-1g1tgca"),$(e,"following",n[1])},m(i,o){A(i,e,o),p(e,t),r||(s=j(e,"click",n[5]),r=!0)},p(i,o){o&8&&K(t,i[3]),o&2&&$(e,"following",i[1])},d(i){i&&S(e),r=!1,s()}}}function mr(n){let e,t=n[0].username+"",r,s;return{c(){e=m("h1"),r=M(t),s=M(" has no art!"),h(e,"id","no-art"),h(e,"class","svelte-1g1tgca")},m(i,o){A(i,e,o),p(e,r),p(e,s)},p(i,o){o&1&&t!==(t=i[0].username+"")&&K(r,t)},d(i){i&&S(e)}}}function Fc(n){let e,t,r=n[2]!=null&&pr(n);return{c(){r&&r.c(),e=me()},m(s,i){r&&r.m(s,i),A(s,e,i),t=!0},p(s,[i]){s[2]!=null?r?(r.p(s,i),i&4&&R(r,1)):(r=pr(s),r.c(),R(r,1),r.m(e.parentNode,e)):r&&(ee(),D(r,1,1,()=>{r=null}),te())},i(s){t||(R(r),t=!0)},o(s){D(r),t=!1},d(s){r&&r.d(s),s&&S(e)}}}function jc(n,e,t){let r,s;re(n,J,u=>t(4,s=u));let{params:i={}}=e,o=!1,a=null;const l=async u=>{var d;const f=await X.getUserGallery(u);if(!f.ok)return console.log(f),ae("/home"),U.set({theme:"error",msg:((d=f==null?void 0:f.data)==null?void 0:d.msg)??"Can't load user's gallery!"});t(2,a=f.data.gallery),t(1,o=f.data.following)},c=async()=>{var f;const u=await X.toggleFollow(i.username);if(!u.ok)return U.set({theme:"error",msg:((f=u==null?void 0:u.data)==null?void 0:f.msg)??"Can't follow/unfollow user!"});t(1,o=u.data.type=="follow"),U.set({theme:"success",msg:u.data.msg})};return n.$$set=u=>{"params"in u&&t(0,i=u.params)},n.$$.update=()=>{n.$$.dirty&2&&t(3,r=o?"Unfollow user":"Follow user"),n.$$.dirty&1&&l(i.username)},[i,o,a,r,s,c]}class Hc extends G{constructor(e){super(),q(this,e,jc,Fc,W,{params:0})}}function zc(n){let e,t,r,s,i,o,a,l;const c=n[3].default,u=bs(c,n,n[2],null);return{c(){e=m("main"),t=m("h1"),r=M(n[0]),s=C(),i=m("p"),u&&u.c(),h(t,"class","svelte-1hjabjj"),h(i,"class","svelte-1hjabjj"),$(i,"open",n[1]),h(e,"class","svelte-1hjabjj")},m(f,d){A(f,e,d),p(e,t),p(t,r),p(e,s),p(e,i),u&&u.m(i,null),o=!0,a||(l=j(t,"click",n[4]),a=!0)},p(f,[d]){(!o||d&1)&&K(r,f[0]),u&&u.p&&(!o||d&4)&&ws(u,c,f,f[2],o?ys(c,f[2],d,null):Is(f[2]),null),(!o||d&2)&&$(i,"open",f[1])},i(f){o||(R(u,f),o=!0)},o(f){D(u,f),o=!1},d(f){f&&S(e),u&&u.d(f),a=!1,l()}}}function xc(n,e,t){let{$$slots:r={},$$scope:s}=e,{title:i="Default title"}=e,o=!1;const a=()=>{t(1,o=!o)};return n.$$set=l=>{"title"in l&&t(0,i=l.title),"$$scope"in l&&t(2,s=l.$$scope)},[i,o,s,r,a]}class Ft extends G{constructor(e){super(),q(this,e,xc,zc,W,{title:0})}}function Vc(n){let e;return{c(){e=M("You can login every 20 hours for a login bonus! This bonus is 20 + the total rating of your gallery (likes-dislikes).")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Wc(n){let e;return{c(){e=M("I'll fix it eventually.")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function qc(n){let e;return{c(){e=M("I'll shadow-ban it eventually.")},m(t,r){A(t,e,r)},d(t){t&&S(e)}}}function Gc(n){let e,t,r,s,i,o,a,l;return r=new Ft({props:{title:"How do I make money?",$$slots:{default:[Vc]},$$scope:{ctx:n}}}),i=new Ft({props:{title:"There's a bug!",$$slots:{default:[Wc]},$$scope:{ctx:n}}}),a=new Ft({props:{title:"There's an inappropriate art piece!",$$slots:{default:[qc]},$$scope:{ctx:n}}}),{c(){e=m("main"),t=m("section"),V(r.$$.fragment),s=C(),V(i.$$.fragment),o=C(),V(a.$$.fragment),h(t,"class","svelte-1qwvqn2"),h(e,"class","flex-page svelte-1qwvqn2")},m(c,u){A(c,e,u),p(e,t),z(r,t,null),p(t,s),z(i,t,null),p(t,o),z(a,t,null),l=!0},p(c,[u]){const f={};u&1&&(f.$$scope={dirty:u,ctx:c}),r.$set(f);const d={};u&1&&(d.$$scope={dirty:u,ctx:c}),i.$set(d);const g={};u&1&&(g.$$scope={dirty:u,ctx:c}),a.$set(g)},i(c){l||(R(r.$$.fragment,c),R(i.$$.fragment,c),R(a.$$.fragment,c),l=!0)},o(c){D(r.$$.fragment,c),D(i.$$.fragment,c),D(a.$$.fragment,c),l=!1},d(c){c&&S(e),x(r),x(i),x(a)}}}class Kc extends G{constructor(e){super(),q(this,e,null,Gc,W,{})}}function _r(n){let e,t,r,s,i,o,a;return t=new Ac({}),s=new Fs({props:{routes:n[2]}}),o=new zs({}),{c(){e=m("main"),V(t.$$.fragment),r=C(),V(s.$$.fragment),i=C(),V(o.$$.fragment),h(e,"class","svelte-b1dld3")},m(l,c){A(l,e,c),z(t,e,null),p(e,r),z(s,e,null),p(e,i),z(o,e,null),a=!0},p:L,i(l){a||(R(t.$$.fragment,l),R(s.$$.fragment,l),R(o.$$.fragment,l),a=!0)},o(l){D(t.$$.fragment,l),D(s.$$.fragment,l),D(o.$$.fragment,l),a=!1},d(l){l&&S(e),x(t),x(s),x(o)}}}function vr(n){let e,t;return e=new It({props:{center:n[1].center}}),{c(){V(e.$$.fragment)},m(r,s){z(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.center=r[1].center),e.$set(i)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){D(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function Jc(n){let e,t,r,s=!n[0]&&_r(n),i=n[1].on&&vr(n);return{c(){s&&s.c(),e=C(),i&&i.c(),t=me()},m(o,a){s&&s.m(o,a),A(o,e,a),i&&i.m(o,a),A(o,t,a),r=!0},p(o,[a]){o[0]?s&&(ee(),D(s,1,1,()=>{s=null}),te()):s?(s.p(o,a),a&1&&R(s,1)):(s=_r(o),s.c(),R(s,1),s.m(e.parentNode,e)),o[1].on?i?(i.p(o,a),a&2&&R(i,1)):(i=vr(o),i.c(),R(i,1),i.m(t.parentNode,t)):i&&(ee(),D(i,1,1,()=>{i=null}),te())},i(o){r||(R(s),R(i),r=!0)},o(o){D(s),D(i),r=!1},d(o){s&&s.d(o),o&&S(e),i&&i.d(o),o&&S(t)}}}function Yc(n,e,t){let r,s;re(n,J,a=>t(3,r=a)),re(n,le,a=>t(1,s=a));const i={"/":Bc,"/home":Ii,"/login":lc,"/set-name":fc,"/canvas":Ic,"/search/:filter":Oc,"/gallery/:username":Hc,"/social":Mc,"/faq":Kc,"*":hc};let o=!0;return ke(async()=>{let a=null;try{a=await X.getSelf()}catch(l){console.error(l)}a!=null&&a.ok?(a.data.daily_gain>0&&U.set({theme:"info",msg:`You gained ${a.data.daily_gain} coins today!`}),Z(J,r={username:a.data.username,coins:a.data.coins},r)):ae("/"),t(0,o=!1)}),[o,s,i]}class Xc extends G{constructor(e){super(),q(this,e,Yc,Jc,W,{})}}new Xc({target:document.getElementById("app")});
