(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function u(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=u(r);fetch(r.href,i)}})();function xt(t){return{...t,...Dt()}}function Dt(){let t=Symbol();return{[t]:{},emit(e,...u){let n=this[t][e];Array.isArray(n)&&n.forEach(r=>r(...u))},on(e,u){!this[t][e]&&(this[t][e]=[]),this[t][e].push(u)}}}function jt(t,e,u){let n=new Proxy(t,e);return n[Symbol.toStringTag]=u||"Proxy",n}var kt=/^[:\w]+$/;function V(t){return typeof t=="string"&&kt.test(t)&&t!="emit"&&t!="on"&&t!="$news"&&t!="$dataType"}function T(t){return Object.prototype.toString.call(t).includes("Proxy")}function $t(t){return Object.prototype.toString.call(t)==="[object RefProxy]"}function M(t){return jt(xt(t),{set(e,u,n){let r=Reflect.set(e,u,n);return e.emit&&e.emit("on_proxy_change",u,n),r}})}function zt(t){return typeof t=="function"&&(t=t()),window.__dev_vilex__app__=t,{use(e){return e&&typeof e.install=="function"&&e.install(t),this},mount(e){let u=document.querySelector(e);return u&&u.appendChild(t.el),this}}}var it={ex:""};function U(t){return T(t)?t.value:t}function St(t,e,...u){var n;(n=H[t])==null||n.call(H,e,...u)}var H={[1]:Mt,[2]:Lt,[3]:Tt,[4]:Rt,text:Pt,class:Nt,style:Vt,props:It,event:Ot};function Mt(t,e,u,n){t.el.innerHTML=""}function Lt(t,e){t.el.removeChild(e.el)}function Tt(t,e){let u=document.createDocumentFragment();e.forEach(n=>u.appendChild(n.el)),t.el.appendChild(u)}function Rt(t,e,u){t.el.insertBefore(e.el,u.el)}function Pt(t,e,u){t.el.textContent=U(u)}function Nt(t,e,u){let n=t.$,r=t.el;n.type!=="text"&&(U(u)?r.classList.contains(e)||r.classList.add(e):r.classList.contains(e)&&r.classList.remove(e))}function Vt(t,e,u){t.el.style[e]=U(u)}function It(t,e,u){if(V(e)){let n=U(u);t.el.setAttribute(e,n),t.el[e]=n}}function Ot(t,e,u){typeof u=="function"?t.el[e]=n=>u({vn:t,ev:n}):t.el[e]=null}function Ut(t){let e=t.$;for(let n in e)T(e[n])&&e[n].on("on_proxy_change",(r,i)=>{T(i)&&i.on("on_proxy_change",(c,b)=>{t.emit("on_node_change",n,r,b)}),t.emit("on_node_change",n,r,i)}),u(e[n],n);function u(n,r,i){if(typeof n=="object")for(let c in n)T(n[c])&&n[c].on("on_proxy_change",(b,p)=>{t.emit("on_node_change",r,b,p)}),u(n[c],r)}return"vilex"}function Wt(){var t=URL.createObjectURL(new Blob),e=t.toString();return URL.revokeObjectURL(t),e.slice(e.lastIndexOf("/")+1)}function vt(t){return t&&t.then&&t.catch}function Yt(t){return t.replace(/-(\w)/g,(e,u)=>u.toUpperCase())}function Ht(t){return Yt(t)in document.documentElement.style}function bt(t){let e=[];return t.forEach(u=>{if(typeof u=="function"&&(u=u()),typeof u=="string")e.push(u);else if(Array.isArray(u))if(u.some(n=>vt(n)||n.$&&n.$.type))e.push(...u);else{let n={$dataType:"class"};u.forEach(r=>{typeof r=="string"?n[r]=!0:Object.assign(n,r)}),e.push(n)}else{let n=!0;for(let r in u)if(!Ht(r)){n=!1;break}if(n)e.push({$dataType:"style",...u});else{let r=!0;for(let i in u)if(!i.startsWith("on")){r=!1;break}r?e.push({$dataType:"event",...u}):e.push({$dataType:"props",...u})}}}),e}function Xt(t){let e=xt({});return e.id=Wt(),e.$=t,e.children=[],e.clear=function(){return this.children.length=0,this.emit("on_node_change",1),this},e.remove=function(u){let n=this.children.findIndex(r=>r===u);return n>-1&&(this.children.splice(n,1),this.emit("on_node_change",2,u)),this},e.add=function(...u){return this.children.push(...u),this.emit("on_node_change",3,u),this},e.insert=function(u,n){let r=e.children.findIndex(i=>i===n);return r>-1&&(e.children.splice(r,0,u),this.emit("on_node_change",4,u,n)),this},e.set=function(...u){let n=bt(u);return e.$.set(...n),e},Ut(e),e}var Qt=["$dataType","emit","on"];function qt(t){let e={};return e.type=t,e.text=M({}),e.props=M({}),e.style=M({}),e.class=M({}),e.event=M({}),e.set=(...u)=>(Gt(u,n=>{if(n.$dataType)if(!e[n.$dataType])e[n.$dataType]=n;else for(let r in n)Qt.includes(r)||(e[n.$dataType][r]=n[r])}),e),e}function Gt(t,e){t.forEach(u=>{if(u){let n=typeof u=="function"?u():u;n!=null&&n!=null&&e(n)}})}function Jt(t){let e={input:"input",textarea:"input",select:"change"},u=t.$;e[u.type]&&t.el.addEventListener(e[u.type],()=>{let n=t.el.value;T(u.props.value)?u.props.value.value=n:u.props.value=n}),u.hover&&(t.el.addEventListener("mouseenter",()=>{for(let n in u.hover)V(n)&&(t.el.style[n]=u.hover[n])}),t.el.addEventListener("mouseleave",()=>{for(let n in u.hover)V(n)&&t.el.style.removeProperty(n);for(let n in t.$.style)V(n)&&(t.el.style[n]=u.style[n])}))}function m(t,e){let u=bt(e),n=qt(t),r=Xt(n);r.$ex=it.ex,it.ex="",r.el=Kt(t),r.on("on_node_change",(b,...p)=>St(b,r,...p)),n.set(...u);let i=[],c=0;return u.forEach(b=>{var $;let p=typeof b=="function"?b():b;if(p)if(typeof p=="string"||$t(p)){let h=re(p);r.add(h),i.push(h)}else($=p==null?void 0:p.$)!=null&&$.type?r.add(p):vt(p)&&(i.push(p),c++,p.then(h=>{if(h.$&&h.$.type){let _=i.findIndex(N=>N===p);_>-1?r.insert(h,r.children[_]):r.add(h),c--,c==0&&(i=void 0)}}).catch(h=>{console.log(h)}))}),Jt(r),r}function Kt(t){return t==="text"?document.createTextNode(""):t==="svg"||t==="use"?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t)}function Zt(...t){return m("a",t)}function te(...t){return m("button",t)}function a(...t){return m("div",t)}function Et(...t){return m("h1",t)}function ee(...t){return m("h2",t)}function f(...t){return m("h3",t)}function L(...t){return m("hr",t)}function R(...t){return m("img",t)}function ue(...t){return m("li",t)}function v(...t){return m("p",t)}function K(...t){return m("pre",t)}function P(...t){return m("span",t)}function ne(...t){return m("ul",t)}function re(t){return m("text",[{data:t,$dataType:"text"}])}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n])}return t},O.apply(this,arguments)}var k;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(k||(k={}));var st=function(t){return t},lt="beforeunload",oe="hashchange",ie="popstate";function se(t){t===void 0&&(t={});var e=t,u=e.window,n=u===void 0?document.defaultView:u,r=n.history;function i(){var o=pt(n.location.hash.substr(1)),l=o.pathname,d=l===void 0?"/":l,x=o.search,y=x===void 0?"":x,F=o.hash,S=F===void 0?"":F,w=r.state||{};return[w.idx,st({pathname:d,search:y,hash:S,state:w.usr||null,key:w.key||"default"})]}var c=null;function b(){if(c)C.call(c),c=null;else{var o=k.Pop,l=i(),d=l[0],x=l[1];if(C.length){if(d!=null){var y=h-d;y&&(c={action:o,location:x,retry:function(){z(y*-1)}},z(y))}}else Y(o)}}n.addEventListener(ie,b),n.addEventListener(oe,function(){var o=i(),l=o[1];X(l)!==X(_)&&b()});var p=k.Pop,$=i(),h=$[0],_=$[1],N=ct(),C=ct();h==null&&(h=0,r.replaceState(O({},r.state,{idx:h}),""));function Ct(){var o=document.querySelector("base"),l="";if(o&&o.getAttribute("href")){var d=n.location.href,x=d.indexOf("#");l=x===-1?d:d.slice(0,x)}return l}function tt(o){return Ct()+"#"+(typeof o=="string"?o:X(o))}function et(o,l){return l===void 0&&(l=null),st(O({pathname:_.pathname,hash:"",search:""},typeof o=="string"?pt(o):o,{state:l,key:le()}))}function ut(o,l){return[{usr:o.state,key:o.key,idx:l},tt(o)]}function nt(o,l,d){return!C.length||(C.call({action:o,location:l,retry:d}),!1)}function Y(o){p=o;var l=i();h=l[0],_=l[1],N.call({action:p,location:_})}function rt(o,l){var d=k.Push,x=et(o,l);function y(){rt(o,l)}if(nt(d,x,y)){var F=ut(x,h+1),S=F[0],w=F[1];try{r.pushState(S,"",w)}catch{n.location.assign(w)}Y(d)}}function ot(o,l){var d=k.Replace,x=et(o,l);function y(){ot(o,l)}if(nt(d,x,y)){var F=ut(x,h),S=F[0],w=F[1];r.replaceState(S,"",w),Y(d)}}function z(o){r.go(o)}var At={get action(){return p},get location(){return _},createHref:tt,push:rt,replace:ot,go:z,back:function(){z(-1)},forward:function(){z(1)},listen:function(o){return N.push(o)},block:function(o){var l=C.push(o);return C.length===1&&n.addEventListener(lt,at),function(){l(),C.length||n.removeEventListener(lt,at)}}};return At}function at(t){t.preventDefault(),t.returnValue=""}function ct(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(u){return u!==e})}},call:function(e){t.forEach(function(u){return u&&u(e)})}}}function le(){return Math.random().toString(36).substr(2,8)}function X(t){var e=t.pathname,u=e===void 0?"/":e,n=t.search,r=n===void 0?"":n,i=t.hash,c=i===void 0?"":i;return r&&r!=="?"&&(u+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(u+=c.charAt(0)==="#"?c:"#"+c),u}function pt(t){var e={};if(t){var u=t.indexOf("#");u>=0&&(e.hash=t.substr(u),t=t.substr(0,u));var n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}var yt="",ht="",Q=[],A=new Map,W=se(),ae=W.location;W.listen(({location:t,action:e})=>{t.pathname==="/"?gt(yt):gt(t.pathname)});var Z=W;function ce(){return{install(){W.replace(ae.pathname)}}}function I(t,e,u=!1){return u&&(yt=t),{path:t,component:e}}function _t(t,e){for(let n=0;n<t.length;n++){let r=A.get(t[n].path);if(r)return r.container}let u=a({width:"100%",height:"100%",boxSizing:"border-box"});return e&&t.forEach(n=>n.path=e+n.path),t.forEach(n=>{A.set(n.path,{...n,container:u,initialed:!1})}),u}function gt(t){if(ht===t)return;ht=t;let e=G(t);for(let u=0;u<Q.length;u++){let n=Q[u];if(!e.includes(n)){let r=A.get(n);r&&(r.initialed=!1,r.container.clear())}}Ft(t,e),Q=G(t)}function Ft(t,e){let u=A.size;for(let n=0;n<e.length;n++){let r=A.get(e[n]);r&&!r.initialed&&(r.initialed=!0,r.container.clear(),r.container.add(r.component()),A.size!=u&&Ft(t,G(t)))}}function G(t){return Array.from(A.keys()).filter(e=>t.includes(e)).sort((e,u)=>e.length-u.length)}function pe(t){return ne(t.map(e=>ue(e.text,{onclick(){console.log("click"),Z.push(e.link)},onmouseenter({vn:u}){u.set({textDecoration:"underline"})},onmouseleave({vn:u}){u.set({textDecoration:"none"})}},{cursor:"pointer",listStyle:"none",display:"inline-block",padding:"2px 4px",lineHeight:"44px",color:"#000",marginLeft:"20px"})))}const wt="/assets/logo.55ce48d4.svg",he="/assets/github.4a1e583b.svg";function ge(){return a({display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:"0px 60px",boxSizing:"border-box"},[de,a({display:"flex",flexDirection:"row",alignItems:"center"},[pe([{text:"\u9996\u9875",link:"/"},{text:"\u6559\u7A0B",link:"/course/quick-start"},{text:"\u8D21\u732E",link:"/about-us"}]),Zt({href:"https://github.com/vilex/vilex",target:"_blank"},{marginLeft:"20px"},[R({alt:"github",src:he},{width:"24px",height:"24px"})])])])}function de(){return R({src:wt,alt:"logo"},{height:"80px",width:"auto"})}const Bt=[{repo:"\u8D21\u732E\u4EBA\u5458",list:[{login:"wxize",id:12660172,node_id:"MDQ6VXNlcjEyNjYwMTcy",avatar_url:"https://avatars.githubusercontent.com/u/12660172?v=4",gravatar_id:"",url:"https://api.github.com/users/wxize",html_url:"https://github.com/wxize",followers_url:"https://api.github.com/users/wxize/followers",following_url:"https://api.github.com/users/wxize/following{/other_user}",gists_url:"https://api.github.com/users/wxize/gists{/gist_id}",starred_url:"https://api.github.com/users/wxize/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wxize/subscriptions",organizations_url:"https://api.github.com/users/wxize/orgs",repos_url:"https://api.github.com/users/wxize/repos",events_url:"https://api.github.com/users/wxize/events{/privacy}",received_events_url:"https://api.github.com/users/wxize/received_events",type:"User",site_admin:!1,contributions:11},{login:"vilex",id:18087205,node_id:"MDQ6VXNlcjE4MDg3MjA1",avatar_url:"https://avatars.githubusercontent.com/u/18087205?v=4",gravatar_id:"",url:"https://api.github.com/users/vilex",html_url:"https://github.com/vilex",followers_url:"https://api.github.com/users/vilex/followers",following_url:"https://api.github.com/users/vilex/following{/other_user}",gists_url:"https://api.github.com/users/vilex/gists{/gist_id}",starred_url:"https://api.github.com/users/vilex/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vilex/subscriptions",organizations_url:"https://api.github.com/users/vilex/orgs",repos_url:"https://api.github.com/users/vilex/repos",events_url:"https://api.github.com/users/vilex/events{/privacy}",received_events_url:"https://api.github.com/users/vilex/received_events",type:"User",site_admin:!1,contributions:5},{login:"jscc",id:17757477,node_id:"MDQ6VXNlcjE3NzU3NDc3",avatar_url:"https://avatars.githubusercontent.com/u/17757477?v=4",gravatar_id:"",url:"https://api.github.com/users/jscc",html_url:"https://github.com/jscc",followers_url:"https://api.github.com/users/jscc/followers",following_url:"https://api.github.com/users/jscc/following{/other_user}",gists_url:"https://api.github.com/users/jscc/gists{/gist_id}",starred_url:"https://api.github.com/users/jscc/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/jscc/subscriptions",organizations_url:"https://api.github.com/users/jscc/orgs",repos_url:"https://api.github.com/users/jscc/repos",events_url:"https://api.github.com/users/jscc/events{/privacy}",received_events_url:"https://api.github.com/users/jscc/received_events",type:"User",site_admin:!1,contributions:3},{login:"vilex",id:18087205,node_id:"MDQ6VXNlcjE4MDg3MjA1",avatar_url:"https://avatars.githubusercontent.com/u/18087205?v=4",gravatar_id:"",url:"https://api.github.com/users/vilex",html_url:"https://github.com/vilex",followers_url:"https://api.github.com/users/vilex/followers",following_url:"https://api.github.com/users/vilex/following{/other_user}",gists_url:"https://api.github.com/users/vilex/gists{/gist_id}",starred_url:"https://api.github.com/users/vilex/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vilex/subscriptions",organizations_url:"https://api.github.com/users/vilex/orgs",repos_url:"https://api.github.com/users/vilex/repos",events_url:"https://api.github.com/users/vilex/events{/privacy}",received_events_url:"https://api.github.com/users/vilex/received_events",type:"User",site_admin:!1,contributions:6},{login:"wxize",id:12660172,node_id:"MDQ6VXNlcjEyNjYwMTcy",avatar_url:"https://avatars.githubusercontent.com/u/12660172?v=4",gravatar_id:"",url:"https://api.github.com/users/wxize",html_url:"https://github.com/wxize",followers_url:"https://api.github.com/users/wxize/followers",following_url:"https://api.github.com/users/wxize/following{/other_user}",gists_url:"https://api.github.com/users/wxize/gists{/gist_id}",starred_url:"https://api.github.com/users/wxize/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/wxize/subscriptions",organizations_url:"https://api.github.com/users/wxize/orgs",repos_url:"https://api.github.com/users/wxize/repos",events_url:"https://api.github.com/users/wxize/events{/privacy}",received_events_url:"https://api.github.com/users/wxize/received_events",type:"User",site_admin:!1,contributions:6},{login:"Mr-Yanjinjin",id:26398552,node_id:"MDQ6VXNlcjI2Mzk4NTUy",avatar_url:"https://avatars.githubusercontent.com/u/26398552?v=4",gravatar_id:"",url:"https://api.github.com/users/Mr-Yanjinjin",html_url:"https://github.com/Mr-Yanjinjin",followers_url:"https://api.github.com/users/Mr-Yanjinjin/followers",following_url:"https://api.github.com/users/Mr-Yanjinjin/following{/other_user}",gists_url:"https://api.github.com/users/Mr-Yanjinjin/gists{/gist_id}",starred_url:"https://api.github.com/users/Mr-Yanjinjin/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/Mr-Yanjinjin/subscriptions",organizations_url:"https://api.github.com/users/Mr-Yanjinjin/orgs",repos_url:"https://api.github.com/users/Mr-Yanjinjin/repos",events_url:"https://api.github.com/users/Mr-Yanjinjin/events{/privacy}",received_events_url:"https://api.github.com/users/Mr-Yanjinjin/received_events",type:"User",site_admin:!1,contributions:5},{login:"yyl5710",id:22700575,node_id:"MDQ6VXNlcjIyNzAwNTc1",avatar_url:"https://avatars.githubusercontent.com/u/22700575?v=4",gravatar_id:"",url:"https://api.github.com/users/yyl5710",html_url:"https://github.com/yyl5710",followers_url:"https://api.github.com/users/yyl5710/followers",following_url:"https://api.github.com/users/yyl5710/following{/other_user}",gists_url:"https://api.github.com/users/yyl5710/gists{/gist_id}",starred_url:"https://api.github.com/users/yyl5710/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/yyl5710/subscriptions",organizations_url:"https://api.github.com/users/yyl5710/orgs",repos_url:"https://api.github.com/users/yyl5710/repos",events_url:"https://api.github.com/users/yyl5710/events{/privacy}",received_events_url:"https://api.github.com/users/yyl5710/received_events",type:"User",site_admin:!1,contributions:2}]}];function fe(){return a({padding:"15px"},Bt.map(t=>a([ee(t.repo),...t.list.map(e=>a([R({alt:"avatar",src:e.avatar_url},{width:"60px",height:"60px"}),P(e.login,{marginLeft:"30px"})],{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"10px"}))])))}function g(t){return K({backgroundColor:"rgba(0, 0, 0, 0.7)",color:"rgba(255,255,255)",borderRadius:"5px",fontFamily:"Consolas, Monaco, monospace",fontWeight:600,letterSpacing:"1px",textAlign:"left",padding:"0 30px",overflowX:"auto"},t)}function s(t){return v({marginBottom:"1.2em",lineHeight:1.7},t[0])}function D(...t){return a({padding:"0 60px"},t)}function j(t){return Et(t,[L({margin:"60px 0",opacity:.4})])}function me(){return D(j("\u5C5E\u6027"),s`节点的属性与原生标签的属性也是一致的设计，
    比如我们想要给一个 button 添加一个 id 为 mybutton 的属性。
    `,s`我们可以这样做：`,g(`
button(
  '\u6309\u94AE',
  {
    id: 'mybutton'
  }
)
    `),s`给一个 img 设置 src 属性`,g(`
img({
  alt: '\u56FE\u7247',
  src: 'https://vilex.github.io/img.png'
})
    `))}function B(t){return f(t[0])}function xe(){return D(j("\u4E8B\u4EF6"),B`如何给 节点 添加一个点击事件`,g(`
button(
    '\u6309\u94AE',
    {
        onclick() {
            console.log('click')
        }
    }
)
      `),B`事件回调中获取当前节点元素`,g(`
button(
    '\u6309\u94AE',
    {
        onclick({ vn }) {
            console.log(vn)
        }
    }
)
      `),B`事件回调中获取 event 对象`,g(`
button(
    '\u6309\u94AE',
    {
        onclick({ ev }) {
            console.log(ev)
        }
    }
)
      `))}function ve(){return D(j("\u7B80\u4ECB"),B`Vilex 是什么？`,s`
    Vilex 是一个用来构建前端页面的框架，它让我们可以方便的使用纯 javascript/typesprit 语言来编写我们的页面。
    它将节点的声明使用、样式、属性、事件、子元素作为一个整体的代码块去编写，方便定位元素进行二次开发与维护。
    `,s`
    Vilex 因为使用的纯 javascript/typescript 语言来开进行开发，所以在开发阶段它给了我们无限的可能，让我们可以
    更加自由的进行设计组合来定义团队和个人的编程习惯。对于这方面能力不太强的团队和成员也可以在不做任何设计的情况下
    按照官方默认的编程风格来进行开发。 
    `)}function be(){return D(j("\u5FEB\u901F\u5F00\u59CB"),s`一开始的千言万语，不如直接跟着我接下来的几步来创建一个基础应用来的实在。
      下面我们一起来看看怎么快速创建一个应用
      `,s`em... 别担心，这里我们有提供一个小工具，一行命令就搞定 😏`,g(`
npx crate-vilex-app vilex-demo
    `),s`然后就没有然后了， 命令执行完成后，你将会在当前目录下看到一个 vilex-demo 目录。
      这个就是我们 vilex 项目啦。其中，命令行中的 vilex-demo 是目录名，
      你可以改成你需要的名称。
      `,s`既然项目已经创建完成了，那我们总要看一看我们的项目吧，这时候就和其它普通的项目一样了。`,s`我们在进行到项目目录中，按装我们项目所需要的依赖包，然后把项目启动起来，
      就可以看到我们默认的 vilex 项目所带的页面了。
      `,s`那具体怎么操作呢，还是用我们的命令行，具体如下：`,g(`
cd vilex-demo && pnpm install
    `),s`上面的命令的意思是：进入到项目目录中并且安装项目所需要的依赖包。`,s`最后再执行我们的启动项目的命令：`,g(`
pnpm dev
    `),s`
      不出意外，这时候你会在命令行工具中看到这样的成功消息：
    `,g(`
\u279C  Local:   http://localhost:3000/
\u279C  Network: use --host to expose
    `),s`复制 http://localhost:3000/ 在浏览器打开，如果看到页面中有内容，
    那说明你已经成功了。你可以尝试用一个编辑器（推荐 vscode）打开我们的项目，
    随便试着改一改，再看看页面中的变化。
    `)}function Ee(){return D(j("\u8DEF\u7531"),s`根据不同的 url 地址来展示不同的页面`,B`vilex-router`,s`vilex-router 是为 vilex 提供的路由组件`,s`安装路由`,g(`
pnpm add vilex-router
      `),s`如何使用?`,g(`
import { createApp } from 'vilex'
import { routerView } from 'vilex-router'

function App() {
  return div(
    [
      button('\u8DF3\u8F6C\u5230\u8DEF\u75311', { onclick() { router.push('/path1' ) } }),
      button('\u8DF3\u8F6C\u5230\u8DEF\u75312', { onclick() { router.push('/path2' ) } }),
      // \u5B9A\u4E49\u8DEF\u7531\u663E\u793A\u533A
      routerView([
        regRoute('/path1', () => div('router 1 component'))
        regRoute('/path2', () => div('router 2 component'))
      ])
    ]
  )
}

createApp(App).use(createRouter()).mount('#app')
      `))}function ye(){return D(j("\u6837\u5F0F"),s`
      在我们的前端开发在中，css 样式是我们最重要的组成部分之一。
      所以这部分内容一定要记住了哈😐
      `,s`来看看在 vilex 项目中怎么使用，下面直接上代码：`,g(`
button(
  '\u6309\u94AE',
  {
    color: 'black',
    padding: '8px 16px',
    '&:hover': {
      color: 'red',
    }
  }
)
    `),s`
      可以看到，我们将样式和按钮绑定在了一起。其实关于这个样式
      与 节点是否要进行分离，在前端领域一直有不同的声音存在。
      我们推荐的方式是这种形式，节点应该是一个完整的内容，包含节点、
      节点样式、节点属性、节点事件、节点样式类（class)。
      `,s`
      可以看到，我们同样支持 class 的设置，也就是说我们其它也是
      支持将样式单独分离出去的。具体是否采用这种方式，可以根据个人
      的需要进行选择，下面我们看一看怎么设置 class
      `,g(`
button(
  '\u6309\u94AE',
  ['class-name', 'button-style']
)
    `),s`
    值得一提的是，这两种方式是可以共存的，就像这样：
    `,g(`
button(
  '\u6309\u94AE',
  ['class-name', 'button-style'],
  {
    color: 'black',
    padding: '8px 16px',
    '&:hover': {
      color: 'red',
    }
  }
)
    `))}function _e(){return D(j("\u8282\u70B9"),B`什么是节点呢？`,s`
    我们知道，在html中有 div, input, button ... 等等这样的标签，这个标签其实就是我们的节点。
    不同的是，我们这里的节点是用一个自定义的js对象自己来保存的。
    `,B`那我们怎么创建一个节点呢？`,s`
    vilex 提供了一个 createElement 方法用来定义节点。假如我们想要创建一个 button 按钮，
    那么我们可以这样做：
    `,g(`
createElement('button', [
  '\u6309\u94AE'
])
    `),s`如果你感觉面创建的方式有点麻烦（字太多了），别但心，这里还有更简单的方式
    用来创建不同的节点：
    `,g(`
button('\u6309\u94AE')
    `),s`你只需要这样，就实现了和上一步完全一样的效果`,B`节点关系`,s`节点关系主要是指节点与节点之间的父子级关系，比如一个 ul 节点下有两个 li 节点，
    我们用这样的代码方式来描述他们的关系：
    `,g(`
ul(
  li('\u7B2C\u4E00\u4E2Ali'),
  li('\u7B2C\u4E8C\u4E2Ali')
)
    `),s`这种嵌套关系和我们的 html 标签嵌套保持一致。
    所以在我们开发的时候，可以随意的进行嵌套，是没有任何限制的。
    `)}const dt=[{name:"\u5FEB\u901F\u4F7F\u7528",list:[{name:"\u7B80\u4ECB",path:"/course/introduction",component:ve},{name:"\u5FEB\u901F\u4F7F\u7528",path:"/course/quick-start",component:be}]},{name:"\u57FA\u7840",list:[{name:"\u8282\u70B9",path:"/course/vilex-node",component:_e},{name:"\u6837\u5F0F",path:"/course/style",component:ye},{name:"\u5C5E\u6027",path:"/course/attr",component:me},{name:"\u4E8B\u4EF6",path:"/course/events",component:xe}]},{name:"\u8DEF\u7531",list:[{name:"\u8DEF\u7531",path:"/course/router",component:Ee}]}];function Fe(t){const e={current:null};return a(t.map(u=>a([we(u.name),...u.list.map(n=>Be(n,e))],{display:"flex",flexDirection:"column",alignItems:"flex-start",marginBottom:"6px"})),{padding:"10px",lineHeight:"30px"})}function we(t){return P(t,{fontWeight:"600",color:"black",whiteSpace:"nowrap"})}function Be(t,e){const u=P(t.name,["link"],{color:"#666",cursor:"pointer",whiteSpace:"nowrap",marginLeft:"12px"},{onclick({vn:r}){Z.push(t.path),e.current&&e.current.set({color:"#666",fontWeight:"normal"}),r.set({color:"#42b883",fontWeight:"bold"}),e.current=r},onmouseenter({vn:r}){r.set({fontWeight:"bold",color:"#42b883"})},onmouseleave({vn:r}){r!==e.current&&r.set({fontWeight:"normal",color:"#666"})}});return window.location.hash.slice(1)==t.path&&(u.set({color:"#42b883",fontWeight:"bold"}),e.current=u),u}function Ce(t){return _t(t.map(e=>I(e.path,e.component)))}function Ae(){const t=[];return dt.forEach(e=>{e.list.forEach(u=>t.push(u))}),a({padding:"60px",position:"relative",display:"flex",flexDirection:"row",minHeight:"600px"},[Fe(dt),Ce(t)])}const ft="white";function De(t,...e){return te({display:"inline-block",borderRadius:"4px",color:"#6d6974",textAlign:"center",fontSize:"24px",transition:"all .5s",cursor:"pointer",margin:"5px",border:"2px solid #93e0abe3",backgroundColor:"white",padding:"8px 16px"},[P(t,{},{transition:"all .5s"})],{onmouseenter({vn:u}){u.set({backgroundColor:"#93e0ab",color:"#49474b"})},onmouseleave({vn:u}){u.set({backgroundColor:"white",color:"#6d6974"})}},...e)}function je(){return a({padding:"0 60px"},[a({textAlign:"center",backgroundColor:ft,padding:"60px",borderRadius:"3px",marginTop:"30px"},[R({alt:"vilex logo",src:wt},{width:"300px",height:"auto"}),v("\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 web \u6846\u67B6",{lineHeight:"60px",letterSpacing:"0.2rem",fontSize:"1.5rem",background:"-webkit-linear-gradient(315deg, rgba(66, 211, 146, 0.3) 25%, rgba(151, 113, 246,0.3))"}),De("GET START",{onclick(){Z.push("/course/quick-start")}},{marginTop:"80px"})]),a({textAlign:"center",backgroundColor:ft,padding:"60px",borderRadius:"3px",marginTop:"100px",display:"grid",gridTemplateColumns:"repeat(3, 33%)",gap:"30px",justifyContent:"center"},[q("\u4F7F\u7528\u7EAF Typescript \u8FDB\u884C\u5F00\u53D1 "),q("\u5728\u4EFB\u610F\u5730\u65B9\u58F0\u660E\u4E0E\u4F7F\u7528\u7EC4\u4EF6"),q("\u8BED\u6CD5\u7B80\u6D01\uFF0C\u4F7F\u7528\u7075\u6D3B\uFF0C\u53EF\u5E94\u5BF9\u4EFB\u4F55\u4F53\u91CF\u7684\u9879\u76EE")])])}function q(...t){return a(...t,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(187 190 193 / 20%)",width:"100%",height:"300px",padding:"30px 0",borderRadius:"8px",backgroundImage:"radial-gradient(white, #f0f0f0)",border:"5px solid #cfe7e9",letterSpacing:"2px",fontSize:"16px",fontWeight:"bold",color:"rgb(0 0 0 / 68 %)"})}function ke(){return a({margin:"0 auto"},[ge(),_t([I("/home",je,!0),I("/course",Ae),I("/about-us",fe)])])}function $e(){return a({display:"flex",flexDirection:"row",justifyContent:"space-around"},Bt.map(t=>a([...t.list.map(e=>a([R({alt:"avatar",src:e.avatar_url},{width:"60px",height:"60px",borderRadius:"50%"}),P(e.login,{})],{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"10px",justifyContent:"center",textAlign:"center"}))],{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",columnGap:"20px",flexWrap:"wrap"})))}function ze(t){return a([mt({title:"\u4EE3\u7801",code:`
import { div, createApp } from 'vilex'

const app = div('hello vilex')

createApp(App).mount('#app')
        `,color:"white",bgColor:"rgba(0,0,0,0.7)"}),mt({title:"\u7ED3\u679C",code:`
hello vilex
        `,color:"black",bgColor:"rgba(222,222,222,0.7)"})],{display:"grid",gridTemplateColumns:`repeat(${t.cols})`,padding:"60px",backgroundColor:"rgba(255,255,255,.8)",margin:"60px 3%"})}function mt(t){return a([f(t.title,{color:"rgba(0,0,0,0.6)"}),K(t.code,{backgroundColor:t.bgColor,color:t.color,borderRadius:"5px",fontFamily:"Consolas, Monaco, monospace",fontWeight:600,letterSpacing:"1px",textAlign:"left",padding:"0 30px"})],{textAlign:"center"})}function Se(){return a([Et("VILEX",{fontFamily:"monospace",display:"inline-block",fontWeight:"bold",color:"rgba(0,0,0,0.8)",textShadow:"0 0 1px currentColor,-1px -1px 1px #000,0 -1px 1px #000,1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000",fontSize:"6em"}),v("\u4E00\u4E2A\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u524D\u7AEF\u754C\u9762\u7684Javascript\u5E93",{fontSize:"2em",color:"rgba(0,0,0,0.6)"})],{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"})}function E(t){return K({backgroundColor:"rgba(0, 0, 0, 0.7)",color:"rgba(255,255,255)",borderRadius:"5px",fontFamily:"Consolas, Monaco, monospace",fontWeight:600,letterSpacing:"1px",textAlign:"left",padding:"0 30px",overflowX:"auto"},t)}function Me(){return a([f("\u5982\u4F55\u7ED9 \u8282\u70B9 \u6DFB\u52A0\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6"),E(`
button(
    '\u6309\u94AE',
    {
        onclick() {
            console.log('click')
        }
    }
)
      `),f("\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u5143\u7D20"),E(`
button(
    '\u6309\u94AE',
    {
        onclick({ vn }) {
            console.log(vn)
        }
    }
)
      `),f("\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u83B7\u53D6 event \u5BF9\u8C61"),E(`
button(
    '\u6309\u94AE',
    {
        onclick({ ev }) {
            console.log(ev)
        }
    }
)
      `)])}function Le(){return a([f("\u901A\u8FC7\u547D\u4EE4\u884C\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u57FA\u7840\u7684\u6A21\u677F\u9879\u76EE"),E(`
npx create-vilex-app <project-direction>

// \u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u8FDB\u5165\u9879\u76EE
cd <project-direction>

// \u5B89\u88C5\u4F9D\u8D56\uFF0C\u5E76\u8FD0\u884C
pnpm install && pnpm dev
      `)])}function Te(){return a([f("\u8282\u70B9"),v(`
        \u5728 vilex \u4E2D\uFF0C\u6700\u6838\u5FC3\u7684\u8981\u7D20\u662F\u8282\u70B9\uFF0C\u7C7B\u4F3C dom \u4E2D\u7684 div, button, input ...
      `),v("\u4E3A\u4E86\u66F4\u65B9\u4FBF\u7684\u64CD\u4F5C\uFF0C vilex \u63D0\u4F9B\u4E86\u4E00\u5957\u4E0E\u539F\u751F dom \u6807\u7B7E\u4E00\u81F4\u7684\u540D\u79F0\uFF0C\u4E0B\u9762\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u5728 vilex \u4E2D\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u6309\u94AE"),E(`
button('\u6309\u94AE')
      `),v(`
        \u8FD9\u6837\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u6309\u94AE\u5B9E\u4F8B\uFF0C\u7B49\u540C\u4E8E <button>\u6309\u94AE</button>
      `),f("\u6837\u5F0F\u7C7B\u540D"),v(`
        \u4E0B\u9762\u6765\u770B\u770B\u600E\u4E48\u7ED9\u8FD9\u4E2A\u8282\u70B9\u8BBE\u7F6E\u7C7B\u540D
      `),E(`
button(
    '\u6309\u94AE',
    [ 'class-name-1', 'class-name-2' ]
)
      `),v(`
        \u5982\u4E0A\u6240\u793A\uFF0C\u8282\u70B9\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u4E3A\u5B57\u7B26\u4E32\u6570\u7EC4\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5C06\u4F1A\u88AB\u8BC6\u522B\u4E3A\u6837\u5F0F\u7C7B\u540D
      `),f("\u5C5E\u6027"),v("\u63A5\u4E0B\u6765\u770B\u770B\u5982\u4F55\u8BBE\u7F6E\u5C5E\u6027"),E(`
button(
    '\u6309\u94AE',
    {
        disabled: false
    }
)
      `),v("\u5982\u6B64\uFF0C\u6211\u4EEC\u4FBF\u7981\u7528\u4E86\u6B64\u8282\u70B9"),f("\u884C\u5185\u6837\u5F0F"),E(`
button(
    '\u6309\u94AE',
    {
        padding: '8px 16px'
    }
)
      `),f("\u5B50\u5143\u7D20"),v(`
        \u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A ul \u8282\u70B9\uFF0C \u5E76\u4E14\u7ED9 ul \u8282\u70B9\u6DFB\u52A0\u591A\u4E2A li \u5B50\u8282\u70B9
      `),E(`
ul(
    [
        li('\u8282\u70B9'),
        li('\u8282\u70B9'),
        li('\u8282\u70B9'),
        li('\u8282\u70B9'),
    ]
)
      `)])}function Re(){return a([f("\u54CD\u5E94\u5F0F"),E(`
const count = ref(1)

span(count)

button(
    '\u70B9\u51FB\u52A01',
    {
        onclick() {
            count.value ++
        }
    }
)
      `)])}function Pe(){return a([f("\u8DEF\u7531"),v("\u6839\u636E\u4E0D\u540C\u7684 url \u5730\u5740\u6765\u5C55\u793A\u4E0D\u540C\u7684\u9875\u9762"),f("vilex-router"),v("vilex-router \u662F\u4E3A vilex \u63D0\u4F9B\u7684\u8DEF\u7531\u7EC4\u4EF6"),f("\u5B89\u88C5"),E(`
pnpm add vilex-router
      `),f("\u5982\u4F55\u4F7F\u7528"),E(`
import { createApp } from 'vilex'
import { routerView } from 'vilex-router'

function App() {
  return div(
    [
      button('\u8DF3\u8F6C\u5230\u8DEF\u75311', { onclick() { router.push('/path1' ) } }),
      button('\u8DF3\u8F6C\u5230\u8DEF\u75312', { onclick() { router.push('/path2' ) } }),
      // \u5B9A\u4E49\u8DEF\u7531\u663E\u793A\u533A
      routerView([
        regRoute('/path1', () => div('router 1 component'))
        regRoute('/path2', () => div('router 2 component'))
      ])
    ]
  )
}

createApp(App).use(createRouter()).mount('#app')
      `)])}function Ne(){return a([Le(),L({opacity:.6,margin:"60px 20px"}),Te(),L({opacity:.6,margin:"60px 20px"}),Re(),L({opacity:.6,margin:"60px 20px"}),Me(),L({opacity:.6,margin:"60px 20px"}),Pe()],{padding:"60px",backgroundColor:"rgba(255,255,255,.8)",margin:"60px 3%"})}function Ve(){return a([Se(),ze({cols:1}),Ne(),$e()],{display:"flex",flexDirection:"column",marginBottom:"100px"})}function Ie(){return a([Ve()])}let J=window.innerWidth>window.innerHeight;function Oe(){return J?ke():Ie()}zt(Oe).use(ce()).mount("#app");window.addEventListener("resize",()=>{const t=window.innerWidth>window.innerHeight;J!=t&&(J=t,window.location.reload())});
