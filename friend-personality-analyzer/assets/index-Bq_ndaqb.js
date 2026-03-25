const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-DbOMPuow.js","assets/useAuth-CVMceWiH.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LoginView-CYt5QJyx.css","assets/DashboardView-DkgdrhJW.js","assets/useDates-BJzxldYU.js","assets/CompletenessScore-BrxwFsx4.js","assets/CompletenessScore-CztPI0t2.css","assets/DashboardView-Dw0RpLxm.css","assets/ProfileEditorView-CZ9xJVhW.js","assets/ImportantDates-BIeY2biW.js","assets/ImportantDates-BYoV3toe.css","assets/ProfileEditorView-o-bI_n0N.css","assets/ProfileDetailView-SIEQCkWI.js","assets/ProfileDetailView-CLefvGFL.css"])))=>i.map(i=>d[i]);
var Wf=t=>{throw TypeError(t)};var Gf=(t,e,n)=>e.has(t)||Wf("Cannot "+n);var dn=(t,e,n)=>(Gf(t,e,"read from private field"),n?n.call(t):e.get(t)),dl=(t,e,n)=>e.has(t)?Wf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),pl=(t,e,n,r)=>(Gf(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Ss=[],wn=()=>{},eg=()=>!1,cc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fu=t=>t.startsWith("onUpdate:"),Je=Object.assign,Uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oT=Object.prototype.hasOwnProperty,Ce=(t,e)=>oT.call(t,e),ie=Array.isArray,Rs=t=>_o(t)==="[object Map]",lc=t=>_o(t)==="[object Set]",zf=t=>_o(t)==="[object Date]",ue=t=>typeof t=="function",$e=t=>typeof t=="string",Rn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",tg=t=>(Se(t)||ue(t))&&ue(t.then)&&ue(t.catch),ng=Object.prototype.toString,_o=t=>ng.call(t),aT=t=>_o(t).slice(8,-1),rg=t=>_o(t)==="[object Object]",uc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cT=/-\w/g,Dt=hc(t=>t.replace(cT,e=>e.slice(1).toUpperCase())),lT=/\B([A-Z])/g,kr=hc(t=>t.replace(lT,"-$1").toLowerCase()),yo=hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=hc(t=>t?`on${yo(t)}`:""),Tn=(t,e)=>!Object.is(t,e),la=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uT=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Kf;const dc=()=>Kf||(Kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?pT(r):pc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Se(t))return t}const hT=/;(?![^(]*\))/g,fT=/:([^]+)/,dT=/\/\*[^]*?\*\//g;function pT(t){const e={};return t.replace(dT,"").split(hT).forEach(n=>{if(n){const r=n.split(fT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vo(t){let e="";if($e(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=vo(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gT=Lu(mT);function ig(t){return!!t||t===""}function _T(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Eo(t[r],e[r]);return n}function Eo(t,e){if(t===e)return!0;let n=zf(t),r=zf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Rn(t),r=Rn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?_T(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Eo(t[o],e[o]))return!1}}return String(t)===String(e)}function yT(t,e){return t.findIndex(n=>Eo(n,e))}const og=t=>!!(t&&t.__v_isRef===!0),vT=t=>$e(t)?t:t==null?"":ie(t)||Se(t)&&(t.toString===ng||!ue(t.toString))?og(t)?vT(t.value):JSON.stringify(t,ag,2):String(t),ag=(t,e)=>og(e)?ag(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gl(r,i)+" =>"]=s,n),{})}:lc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:Rn(e)?gl(e):Se(e)&&!ie(e)&&!rg(e)?String(e):e,gl=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class cg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ki(t){return new cg(t)}function $u(){return _t}function mc(t,e=!1){_t&&_t.cleanups.push(t)}let Oe;const _l=new WeakSet;class lg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_l.has(this)&&(_l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qf(this),fg(this);const e=Oe,n=nn;Oe=this,nn=!0;try{return this.fn()}finally{dg(this),Oe=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,Qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gl(this)&&this.run()}get dirty(){return Gl(this)}}let ug=0,Oi,Vi;function hg(t,e=!1){if(t.flags|=8,e){t.next=Vi,Vi=t;return}t.next=Oi,Oi=t}function Bu(){ug++}function ju(){if(--ug>0)return;if(Vi){let e=Vi;for(Vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Oi;){let e=Oi;for(Oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Hu(r),ET(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi)||(t.globalVersion=Qi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Gl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=nn;Oe=t,nn=!0;try{fg(t);const s=t.fn(t._value);(e.version===0||Tn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,nn=r,dg(t),t.flags&=-3}}function Hu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Hu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ET(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const mg=[];function Bn(){mg.push(nn),nn=!1}function jn(){const t=mg.pop();nn=t===void 0?!0:t}function Qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Qi=0;class TT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!nn||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new TT(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,gg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){Bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ju()}}}function gg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Aa=new WeakMap,Jr=Symbol(""),zl=Symbol(""),Yi=Symbol("");function vt(t,e,n){if(nn&&Oe){let r=Aa.get(t);r||Aa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new qu),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=Aa.get(t);if(!o){Qi++;return}const c=l=>{l&&l.trigger()};if(Bu(),e==="clear")o.forEach(c);else{const l=ie(t),u=l&&uc(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,m)=>{(m==="length"||m===Yi||!Rn(m)&&m>=h)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Yi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Jr)),Rs(t)&&c(o.get(zl)));break;case"delete":l||(c(o.get(Jr)),Rs(t)&&c(o.get(zl)));break;case"set":Rs(t)&&c(o.get(Jr));break}}ju()}function wT(t,e){const n=Aa.get(t);return n&&n.get(e)}function gs(t){const e=Te(t);return e===t?e:(vt(e,"iterate",Yi),qt(t)?e:e.map(an))}function gc(t){return vt(t=Te(t),"iterate",Yi),t}function vn(t,e){return Hn(t)?Ls($n(t)?an(e):e):an(e)}const IT={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,t=>vn(this,t))},concat(...t){return gs(this).concat(...t.map(e=>ie(e)?gs(e):e))},entries(){return yl(this,"entries",t=>(t[1]=vn(this,t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(r=>vn(this,r)),arguments)},find(t,e){return Dn(this,"find",t,e,n=>vn(this,n),arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,n=>vn(this,n),arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return vl(this,"includes",t)},indexOf(...t){return vl(this,"indexOf",t)},join(t){return gs(this).join(t)},lastIndexOf(...t){return vl(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return Yf(this,"reduce",t,e)},reduceRight(t,...e){return Yf(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return gs(this).toReversed()},toSorted(t){return gs(this).toSorted(t)},toSpliced(...t){return gs(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return yl(this,"values",t=>vn(this,t))}};function yl(t,e,n){const r=gc(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const AT=Array.prototype;function Dn(t,e,n,r,s,i){const o=gc(t),c=o!==t&&!qt(t),l=o[e];if(l!==AT[e]){const d=l.apply(t,i);return c?an(d):d}let u=n;o!==t&&(c?u=function(d,m){return n.call(this,vn(t,d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function Yf(t,e,n,r){const s=gc(t),i=s!==t&&!qt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,h,d){return c&&(c=!1,u=vn(t,u)),n.call(this,u,vn(t,h),d,t)}):n.length>3&&(o=function(u,h,d){return n.call(this,u,h,d,t)}));const l=s[e](o,...r);return c?vn(t,l):l}function vl(t,e,n){const r=Te(t);vt(r,"iterate",Yi);const s=r[e](...n);return(s===-1||s===!1)&&_c(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Ei(t,e,n=[]){Bn(),Bu();const r=Te(t)[e].apply(t,n);return ju(),jn(),r}const bT=Lu("__proto__,__v_isRef,__isVue"),_g=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function ST(t){Rn(t)||(t=String(t));const e=Te(this);return vt(e,"has",t),e.hasOwnProperty(t)}class yg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?MT:wg:i?Tg:Eg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=IT[n]))return l;if(n==="hasOwnProperty")return ST}const c=Reflect.get(e,n,Fe(e)?e:r);if((Rn(n)?_g.has(n):bT(n))||(s||vt(e,"get",n),i))return c;if(Fe(c)){const l=o&&uc(n)?c:c.value;return s&&Se(l)?ba(l):l}return Se(c)?s?ba(c):Ot(c):c}}class vg extends yg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&uc(n);if(!this._isShallow){const u=Hn(i);if(!qt(r)&&!Hn(r)&&(i=Te(i),r=Te(r)),!o&&Fe(i)&&!Fe(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,Fe(e)?e:s);return e===Te(s)&&(c?Tn(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Rn(n)||!_g.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ie(e)?"length":Jr),Reflect.ownKeys(e)}}class RT extends yg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const CT=new vg,PT=new RT,DT=new vg(!0);const Kl=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function kT(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=Rs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Kl:e?Ls:an;return!e&&vt(i,"iterate",l?zl:Jr),Je(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:c?[h(d[0]),h(d[1])]:h(d),done:m}}})}}function Qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function NT(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(Tn(s,c)&&vt(o,"get",s),vt(o,"get",c));const{has:l}=Ko(o),u=e?Kl:t?Ls:an;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Te(s),"iterate",Jr),s.size},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(Tn(s,c)&&vt(o,"has",s),vt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),u=e?Kl:t?Ls:an;return!t&&vt(l,"iterate",Jr),c.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return Je(n,t?{add:Qo("add"),set:Qo("set"),delete:Qo("delete"),clear:Qo("clear")}:{add(s){const i=Te(this),o=Ko(i),c=Te(s),l=!e&&!qt(s)&&!Hn(s)?c:s;return o.has.call(i,l)||Tn(s,l)&&o.has.call(i,s)||Tn(c,l)&&o.has.call(i,c)||(i.add(l),xn(i,"add",l,l)),this},set(s,i){!e&&!qt(i)&&!Hn(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=Ko(o);let u=c.call(o,s);u||(s=Te(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Tn(i,h)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=Ko(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&xn(i,"delete",s,void 0),u},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=kT(s,t,e)}),n}function Wu(t,e){const n=NT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const OT={get:Wu(!1,!1)},VT={get:Wu(!1,!0)},xT={get:Wu(!0,!1)};const Eg=new WeakMap,Tg=new WeakMap,wg=new WeakMap,MT=new WeakMap;function LT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FT(t){return t.__v_skip||!Object.isExtensible(t)?0:LT(aT(t))}function Ot(t){return Hn(t)?t:Gu(t,!1,CT,OT,Eg)}function Ig(t){return Gu(t,!1,DT,VT,Tg)}function ba(t){return Gu(t,!0,PT,xT,wg)}function Gu(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=FT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function $n(t){return Hn(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function _c(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function zu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&sg(t,"__v_skip",!0),t}const an=t=>Se(t)?Ot(t):t,Ls=t=>Se(t)?ba(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function Mt(t){return Ag(t,!1)}function Yt(t){return Ag(t,!0)}function Ag(t,e){return Fe(t)?t:new UT(t,e)}class UT{constructor(e,n){this.dep=new qu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:an(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Hn(e);e=r?e:Te(e),Tn(e,n)&&(this._rawValue=e,this._value=r?e:an(e),this.dep.trigger())}}function Qt(t){return Fe(t)?t.value:t}function $T(t){return ue(t)?t():Qt(t)}const BT={get:(t,e,n)=>e==="__v_raw"?t:Qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bg(t){return $n(t)?t:new Proxy(t,BT)}function Sg(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Rg(t,n);return e}class jT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Te(e);let s=!0,i=e;if(!ie(e)||!uc(String(n)))do s=!_c(i)||qt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Qt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Fe(this._raw[this._key])){const n=this._object[this._key];if(Fe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return wT(this._raw,this._key)}}class HT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ct(t,e,n){return Fe(t)?t:ue(t)?new HT(t):Se(t)&&arguments.length>1?Rg(t,e,n):Mt(t)}function Rg(t,e,n){return new jT(t,e,n)}class qT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return hg(this,!0),!0}get value(){const e=this.dep.track();return pg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function WT(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new qT(r,s,n)}const Yo={},Sa=new WeakMap;let qr;function GT(t,e=!1,n=qr){if(n){let r=Sa.get(n);r||Sa.set(n,r=[]),r.push(t)}}function zT(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=q=>s?q:qt(q)||s===!1||s===0?Mn(q,1):Mn(q);let h,d,m,y,R=!1,P=!1;if(Fe(t)?(d=()=>t.value,R=qt(t)):$n(t)?(d=()=>u(t),R=!0):ie(t)?(P=!0,R=t.some(q=>$n(q)||qt(q)),d=()=>t.map(q=>{if(Fe(q))return q.value;if($n(q))return u(q);if(ue(q))return l?l(q,2):q()})):ue(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){Bn();try{m()}finally{jn()}}const q=qr;qr=h;try{return l?l(t,3,[y]):t(y)}finally{qr=q}}:d=wn,e&&s){const q=d,G=s===!0?1/0:s;d=()=>Mn(q(),G)}const O=$u(),k=()=>{h.stop(),O&&O.active&&Uu(O.effects,h)};if(i&&e){const q=e;e=(...G)=>{q(...G),k()}}let N=P?new Array(t.length).fill(Yo):Yo;const M=q=>{if(!(!(h.flags&1)||!h.dirty&&!q))if(e){const G=h.run();if(s||R||(P?G.some((z,E)=>Tn(z,N[E])):Tn(G,N))){m&&m();const z=qr;qr=h;try{const E=[G,N===Yo?void 0:P&&N[0]===Yo?[]:N,y];N=G,l?l(e,3,E):e(...E)}finally{qr=z}}}else h.run()};return c&&c(M),h=new lg(d),h.scheduler=o?()=>o(M,!1):M,y=q=>GT(q,!1,h),m=h.onStop=()=>{const q=Sa.get(h);if(q){if(l)l(q,4);else for(const G of q)G();Sa.delete(h)}},e?r?M(!0):N=h.run():o?o(M.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function Mn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Fe(t))Mn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Mn(t[r],e,n);else if(lc(t)||Rs(t))t.forEach(r=>{Mn(r,e,n)});else if(rg(t)){for(const r in t)Mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(t,e,n,r){try{return r?t(...r):t()}catch(s){yc(s,e,n)}}function cn(t,e,n,r){if(ue(t)){const s=To(t,e,n,r);return s&&tg(s)&&s.catch(i=>{yc(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function yc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}c=c.parent}if(i){Bn(),To(i,null,10,[t,l,u]),jn();return}}KT(t,n,s,r,o)}function KT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let gn=-1;const Cs=[];let lr=null,Es=0;const Cg=Promise.resolve();let Ra=null;function wo(t){const e=Ra||Cg;return t?e.then(this?t.bind(this):t):e}function QT(t){let e=gn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=Ji(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ku(t){if(!(t.flags&1)){const e=Ji(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=Ji(n)?Ct.push(t):Ct.splice(QT(e),0,t),t.flags|=1,Pg()}}function Pg(){Ra||(Ra=Cg.then(kg))}function YT(t){ie(t)?Cs.push(...t):lr&&t.id===-1?lr.splice(Es+1,0,t):t.flags&1||(Cs.push(t),t.flags|=1),Pg()}function Jf(t,e,n=gn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dg(t){if(Cs.length){const e=[...new Set(Cs)].sort((n,r)=>Ji(n)-Ji(r));if(Cs.length=0,lr){lr.push(...e);return}for(lr=e,Es=0;Es<lr.length;Es++){const n=lr[Es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,Es=0}}const Ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kg(t){try{for(gn=0;gn<Ct.length;gn++){const e=Ct[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Ct.length;gn++){const e=Ct[gn];e&&(e.flags&=-2)}gn=-1,Ct.length=0,Dg(),Ra=null,(Ct.length||Cs.length)&&kg()}}let Bt=null,Ng=null;function Ca(t){const e=Bt;return Bt=t,Ng=t&&t.type.__scopeId||null,e}function Og(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ka(-1);const i=Ca(e);let o;try{o=t(...s)}finally{Ca(i),r._d&&ka(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mN(t,e){if(Bt===null)return t;const n=Sc(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function $r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),cn(l,n,8,[t.el,c,t,e]),jn())}}function rn(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=Ys();if(r||Xr){let s=Xr?Xr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function JT(){return!!(Ys()||Xr)}const XT=Symbol.for("v-scx"),ZT=()=>Ue(XT);function vc(t,e){return Qu(t,null,e)}function xt(t,e,n){return Qu(t,e,n)}function Qu(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let u;if(eo){if(i==="sync"){const y=ZT();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=wn,y.resume=wn,y.pause=wn,y}}const h=Tt;c.call=(y,R,P)=>cn(y,h,R,P);let d=!1;i==="post"?c.scheduler=y=>{gt(y,h&&h.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(y,R)=>{R?y():Ku(y)}),c.augmentJob=y=>{e&&(y.flags|=4),d&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const m=zT(t,e,c);return eo&&(u?u.push(m):l&&m()),m}function ew(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Vg(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Io(this),c=Qu(s,i.bind(r),n);return o(),c}function Vg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xg=Symbol("_vte"),Mg=t=>t.__isTeleport,xi=t=>t&&(t.disabled||t.disabled===""),Xf=t=>t&&(t.defer||t.defer===""),Zf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ed=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ql=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},Lg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:h,pc:d,pbc:m,o:{insert:y,querySelector:R,createText:P,createComment:O}}=u,k=xi(e.props);let{shapeFlag:N,children:M,dynamicChildren:q}=e;if(t==null){const G=e.el=P(""),z=e.anchor=P("");y(G,n,r),y(z,n,r);const E=(g,I)=>{N&16&&h(M,g,I,s,i,o,c,l)},v=()=>{const g=e.target=Ql(e.props,R),I=Yl(g,e,P,y);g&&(o!=="svg"&&Zf(g)?o="svg":o!=="mathml"&&ed(g)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(g),k||(E(g,I),ua(e,!1)))};k&&(E(n,z),ua(e,!0)),Xf(e.props)?(e.el.__isMounted=!1,gt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(Xf(e.props)&&t.el.__isMounted===!1){gt(()=>{Lg.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const G=e.anchor=t.anchor,z=e.target=t.target,E=e.targetAnchor=t.targetAnchor,v=xi(t.props),g=v?n:z,I=v?G:E;if(o==="svg"||Zf(z)?o="svg":(o==="mathml"||ed(z))&&(o="mathml"),q?(m(t.dynamicChildren,q,g,s,i,o,c),eh(t,e,!0)):l||d(t,e,g,I,s,i,o,c,!1),k)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Jo(e,n,G,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Ql(e.props,R);A&&Jo(e,A,null,u,0)}else v&&Jo(e,z,E,u,1);ua(e,k)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:h,target:d,props:m}=t;if(d&&(s(u),s(h)),i&&s(l),o&16){const y=i||!xi(m);for(let R=0;R<c.length;R++){const P=c[R];r(P,e,n,y,!!P.dynamicChildren)}}},move:Jo,hydrate:tw};function Jo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||xi(h))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);d&&r(c,e,n)}function tw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:h}},d){function m(O,k){let N=k;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")e.targetStart=N;else if(N.data==="teleport anchor"){e.targetAnchor=N,O._lpa=e.targetAnchor&&o(e.targetAnchor);break}}N=o(N)}}function y(O,k){k.anchor=d(o(O),k,c(O),n,r,s,i)}const R=e.target=Ql(e.props,l),P=xi(e.props);if(R){const O=R._lpa||R.firstChild;e.shapeFlag&16&&(P?(y(t,e),m(R,O),e.targetAnchor||Yl(R,e,h,u,c(t)===R?t:null)):(e.anchor=o(t),m(R,O),e.targetAnchor||Yl(R,e,h,u),d(O&&o(O),e,R,n,r,s,i))),ua(e,P)}else P&&e.shapeFlag&16&&(y(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const gN=Lg;function ua(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Yl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[xg]=o,t&&(r(i,t,s),r(o,t,s)),o}const _n=Symbol("_leaveCb"),Ti=Symbol("_enterCb");function Fg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ju(()=>{t.isMounted=!0}),Ic(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],Ug={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},$g=t=>{const e=t.subTree;return e.component?$g(e.component):e},nw={name:"BaseTransition",props:Ug,setup(t,{slots:e}){const n=Ys(),r=Fg();return()=>{const s=e.default&&Yu(e.default(),!0);if(!s||!s.length)return;const i=Bg(s),o=Te(t),{mode:c}=o;if(r.isLeaving)return El(i);const l=td(i);if(!l)return El(i);let u=Xi(l,o,r,n,d=>u=d);l.type!==Pt&&ns(l,u);let h=n.subTree&&td(n.subTree);if(h&&h.type!==Pt&&!Gr(h,l)&&$g(n).type!==Pt){let d=Xi(h,o,r,n);if(ns(h,d),c==="out-in"&&l.type!==Pt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},El(i);c==="in-out"&&l.type!==Pt?d.delayLeave=(m,y,R)=>{const P=jg(r,h);P[String(h.key)]=h,m[_n]=()=>{y(),m[_n]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Bg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Pt){e=n;break}}return e}const rw=nw;function jg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Xi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:y,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:O,onAppear:k,onAfterAppear:N,onAppearCancelled:M}=e,q=String(t.key),G=jg(n,t),z=(g,I)=>{g&&cn(g,r,9,I)},E=(g,I)=>{const A=I[1];z(g,I),ie(g)?g.every(b=>b.length<=1)&&A():g.length<=1&&A()},v={mode:o,persisted:c,beforeEnter(g){let I=l;if(!n.isMounted)if(i)I=O||l;else return;g[_n]&&g[_n](!0);const A=G[q];A&&Gr(t,A)&&A.el[_n]&&A.el[_n](),z(I,[g])},enter(g){if(G[q]===t)return;let I=u,A=h,b=d;if(!n.isMounted)if(i)I=k||u,A=N||h,b=M||d;else return;let T=!1;g[Ti]=Le=>{T||(T=!0,Le?z(b,[g]):z(A,[g]),v.delayedLeave&&v.delayedLeave(),g[Ti]=void 0)};const de=g[Ti].bind(null,!1);I?E(I,[g,de]):de()},leave(g,I){const A=String(t.key);if(g[Ti]&&g[Ti](!0),n.isUnmounting)return I();z(m,[g]);let b=!1;g[_n]=de=>{b||(b=!0,I(),de?z(P,[g]):z(R,[g]),g[_n]=void 0,G[A]===t&&delete G[A])};const T=g[_n].bind(null,!1);G[A]=t,y?E(y,[g,T]):T()},clone(g){const I=Xi(g,e,n,r,s);return s&&s(I),I}};return v}function El(t){if(Tc(t))return t=Ar(t),t.children=null,t}function td(t){if(!Tc(t))return Mg(t.type)&&t.children?Bg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function ns(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ns(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===zt?(o.patchFlag&128&&s++,r=r.concat(Yu(o.children,e,c))):(e||o.type!==Pt)&&r.push(c!=null?Ar(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ec(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}function sw(){const t=Ys();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Hg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function nd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Pa=new WeakMap;function Mi(t,e,n,r,s=!1){if(ie(t)){t.forEach((P,O)=>Mi(P,e&&(ie(e)?e[O]:e),n,r,s));return}if(Li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ne?c.refs={}:c.refs,d=c.setupState,m=Te(d),y=d===Ne?eg:P=>nd(h,P)?!1:Ce(m,P),R=(P,O)=>!(O&&nd(h,O));if(u!=null&&u!==l){if(rd(e),$e(u))h[u]=null,y(u)&&(d[u]=null);else if(Fe(u)){const P=e;R(u,P.k)&&(u.value=null),P.k&&(h[P.k]=null)}}if(ue(l))To(l,c,12,[o,h]);else{const P=$e(l),O=Fe(l);if(P||O){const k=()=>{if(t.f){const N=P?y(l)?d[l]:h[l]:R()||!t.k?l.value:h[t.k];if(s)ie(N)&&Uu(N,i);else if(ie(N))N.includes(i)||N.push(i);else if(P)h[l]=[i],y(l)&&(d[l]=h[l]);else{const M=[i];R(l,t.k)&&(l.value=M),t.k&&(h[t.k]=M)}}else P?(h[l]=o,y(l)&&(d[l]=o)):O&&(R(l,t.k)&&(l.value=o),t.k&&(h[t.k]=o))};if(o){const N=()=>{k(),Pa.delete(t)};N.id=-1,Pa.set(t,N),gt(N,n)}else rd(t),k()}}}function rd(t){const e=Pa.get(t);e&&(e.flags|=8,Pa.delete(t))}dc().requestIdleCallback;dc().cancelIdleCallback;const Li=t=>!!t.type.__asyncLoader,Tc=t=>t.type.__isKeepAlive;function qg(t,e){Gg(t,"a",e)}function Wg(t,e){Gg(t,"da",e)}function Gg(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tc(s.parent.vnode)&&iw(r,e,n,s),s=s.parent}}function iw(t,e,n,r){const s=wc(e,t,r,!0);Kg(()=>{Uu(r[e],s)},n)}function wc(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=Io(n),l=cn(e,n,t,o);return c(),jn(),l});return r?s.unshift(i):s.push(i),i}}const Qn=t=>(e,n=Tt)=>{(!eo||t==="sp")&&wc(t,(...r)=>e(...r),n)},ow=Qn("bm"),Ju=Qn("m"),aw=Qn("bu"),zg=Qn("u"),Ic=Qn("bum"),Kg=Qn("um"),cw=Qn("sp"),lw=Qn("rtg"),uw=Qn("rtc");function hw(t,e=Tt){wc("ec",t,e)}const Qg="components";function fw(t,e){return Yg(Qg,t,!0,e)||t}const dw=Symbol.for("v-ndc");function _N(t){return $e(t)&&Yg(Qg,t,!1)||t}function Yg(t,e,n=!0,r=!1){const s=Bt||Tt;if(s){const i=s.type;{const c=Jw(i,!1);if(c&&(c===e||c===Dt(e)||c===yo(Dt(e))))return i}const o=sd(s[t]||i[t],e)||sd(s.appContext[t],e);return!o&&r?i:o}}function sd(t,e){return t&&(t[e]||t[Dt(e)]||t[yo(Dt(e))])}function yN(t,e,n,r){let s;const i=n,o=ie(t);if(o||$e(t)){const c=o&&$n(t);let l=!1,u=!1;c&&(l=!qt(t),u=Hn(t),t=gc(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?Ls(an(t[h])):an(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Jl=t=>t?y_(t)?Sc(t):Jl(t.parent):null,Fi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ku(t.update)}),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>ew.bind(t)}),Tl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),pw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tl(r,e))return o[e]=1,r[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if(Ce(i,e))return o[e]=3,i[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];Xl&&(o[e]=0)}}const u=Fi[e];let h,d;if(u)return e==="$attrs"&&vt(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tl(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Ce(t,c)||Tl(e,c)||Ce(i,c)||Ce(r,c)||Ce(Fi,c)||Ce(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function id(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function mw(t){const e=Xg(t),n=t.proxy,r=t.ctx;Xl=!1,e.beforeCreate&&od(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:y,updated:R,activated:P,deactivated:O,beforeDestroy:k,beforeUnmount:N,destroyed:M,unmounted:q,render:G,renderTracked:z,renderTriggered:E,errorCaptured:v,serverPrefetch:g,expose:I,inheritAttrs:A,components:b,directives:T,filters:de}=e;if(u&&gw(u,r,null),o)for(const le in o){const me=o[le];ue(me)&&(r[le]=me.bind(n))}if(s){const le=s.call(n,n);Se(le)&&(t.data=Ot(le))}if(Xl=!0,i)for(const le in i){const me=i[le],ft=ue(me)?me.bind(n,n):ue(me.get)?me.get.bind(n,n):wn,Wt=!ue(me)&&ue(me.set)?me.set.bind(n):wn,Xe=we({get:ft,set:Wt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:qe=>Xe.value=qe})}if(c)for(const le in c)Jg(c[le],r,n,le);if(l){const le=ue(l)?l.call(n):l;Reflect.ownKeys(le).forEach(me=>{rn(me,le[me])})}h&&od(h,t,"c");function be(le,me){ie(me)?me.forEach(ft=>le(ft.bind(n))):me&&le(me.bind(n))}if(be(ow,d),be(Ju,m),be(aw,y),be(zg,R),be(qg,P),be(Wg,O),be(hw,v),be(uw,z),be(lw,E),be(Ic,N),be(Kg,q),be(cw,g),ie(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(le,me,{get:()=>n[me],set:ft=>n[me]=ft,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===wn&&(t.render=G),A!=null&&(t.inheritAttrs=A),b&&(t.components=b),T&&(t.directives=T),g&&Hg(t)}function gw(t,e,n=wn){ie(t)&&(t=Zl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),Fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function od(t,e,n){cn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jg(t,e,n,r){let s=r.includes(".")?Vg(n,r):()=>n[r];if($e(t)){const i=e[t];ue(i)&&xt(s,i)}else if(ue(t))xt(s,t.bind(n));else if(Se(t))if(ie(t))t.forEach(i=>Jg(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&xt(s,i,t)}}function Xg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Da(l,u,o,!0)),Da(l,e,o)),Se(e)&&i.set(e,l),l}function Da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Da(t,i,n,!0),s&&s.forEach(o=>Da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=_w[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const _w={data:ad,props:cd,emits:cd,methods:Ri,computed:Ri,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ri,directives:Ri,watch:vw,provide:ad,inject:yw};function ad(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function yw(t,e){return Ri(Zl(t),Zl(e))}function Zl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?Je(Object.create(null),t,e):e}function cd(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Je(Object.create(null),id(t),id(e??{})):e}function vw(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Zg(){return{app:null,config:{isNativeTag:eg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ew=0;function Tw(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!Se(s)&&(s=null);const i=Zg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Ew++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zw,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&ue(h.install)?(o.add(h),h.install(u,...d)):ue(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!l){const y=u._ceVNode||Ge(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,h,m),l=!0,u._container=h,h.__vue_app__=u,Sc(y.component)}},onUnmount(h){c.push(h)},unmount(){l&&(cn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Xr;Xr=u;try{return h()}finally{Xr=d}}};return u}}let Xr=null;const ww=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${kr(e)}Modifiers`];function Iw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&ww(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>$e(h)?h.trim():h)),o.number&&(s=n.map(fc)));let c,l=r[c=ml(e)]||r[c=ml(Dt(e))];!l&&i&&(l=r[c=ml(kr(e))]),l&&cn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,cn(u,t,6,s)}}const Aw=new WeakMap;function e_(t,e,n=!1){const r=n?Aw:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const h=e_(u,e,!0);h&&(c=!0,Je(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):Je(o,i),Se(t)&&r.set(t,o),o)}function Ac(t,e){return!t||!cc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,kr(e))||Ce(t,e))}function ld(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:d,data:m,setupState:y,ctx:R,inheritAttrs:P}=t,O=Ca(t);let k,N;try{if(n.shapeFlag&4){const q=s||r,G=q;k=En(u.call(G,q,h,d,y,m,R)),N=c}else{const q=e;k=En(q.length>1?q(d,{attrs:c,slots:o,emit:l}):q(d,null)),N=e.props?c:bw(c)}}catch(q){Ui.length=0,yc(q,t,1),k=Ge(Pt)}let M=k;if(N&&P!==!1){const q=Object.keys(N),{shapeFlag:G}=M;q.length&&G&7&&(i&&q.some(Fu)&&(N=Sw(N,i)),M=Ar(M,N,!1,!0))}return n.dirs&&(M=Ar(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ns(M,n.transition),k=M,Ca(O),k}const bw=t=>{let e;for(const n in t)(n==="class"||n==="style"||cc(n))&&((e||(e={}))[n]=t[n]);return e},Sw=(t,e)=>{const n={};for(const r in t)(!Fu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ud(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(t_(o,r,m)&&!Ac(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ud(r,o,u):!0:!!o;return!1}function ud(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t_(e,t,i)&&!Ac(n,i))return!0}return!1}function t_(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Eo(r,s):r!==s}function Cw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const n_={},r_=()=>Object.create(n_),s_=t=>Object.getPrototypeOf(t)===n_;function Pw(t,e,n,r=!1){const s={},i=r_();t.propsDefaults=Object.create(null),i_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ig(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Ac(t.emitsOptions,m))continue;const y=e[m];if(l)if(Ce(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const R=Dt(m);s[R]=eu(l,c,R,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{i_(t,e,s,i)&&(u=!0);let h;for(const d in c)(!e||!Ce(e,d)&&((h=kr(d))===d||!Ce(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=eu(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],u=!0)}u&&xn(t.attrs,"set","")}function i_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ni(l))continue;const u=e[l];let h;s&&Ce(s,h=Dt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Ac(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Te(n),u=c||Ne;for(let h=0;h<i.length;h++){const d=i[h];n[d]=eu(s,l,d,u[d],t,!Ce(u,d))}}return o}function eu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Io(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===kr(n))&&(r=!0))}return r}const kw=new WeakMap;function o_(t,e,n=!1){const r=n?kw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const h=d=>{l=!0;const[m,y]=o_(d,e,!0);Je(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Se(t)&&r.set(t,Ss),Ss;if(ie(i))for(let h=0;h<i.length;h++){const d=Dt(i[h]);hd(d)&&(o[d]=Ne)}else if(i)for(const h in i){const d=Dt(h);if(hd(d)){const m=i[h],y=o[d]=ie(m)||ue(m)?{type:m}:Je({},m),R=y.type;let P=!1,O=!0;if(ie(R))for(let k=0;k<R.length;++k){const N=R[k],M=ue(N)&&N.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(O=!1)}else P=ue(R)&&R.name==="Boolean";y[0]=P,y[1]=O,(P||Ce(y,"default"))&&c.push(d)}}const u=[o,c];return Se(t)&&r.set(t,u),u}function hd(t){return t[0]!=="$"&&!Ni(t)}const Xu=t=>t==="_"||t==="_ctx"||t==="$stable",Zu=t=>ie(t)?t.map(En):[En(t)],Nw=(t,e,n)=>{if(e._n)return e;const r=Og((...s)=>Zu(e(...s)),n);return r._c=!1,r},a_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xu(s))continue;const i=t[s];if(ue(i))e[s]=Nw(s,i,r);else if(i!=null){const o=Zu(i);e[s]=()=>o}}},c_=(t,e)=>{const n=Zu(e);t.slots.default=()=>n},l_=(t,e,n)=>{for(const r in e)(n||!Xu(r))&&(t[r]=e[r])},Ow=(t,e,n)=>{const r=t.slots=r_();if(t.vnode.shapeFlag&32){const s=e._;s?(l_(r,e,n),n&&sg(r,"_",s,!0)):a_(e,r)}else e&&c_(t,e)},Vw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:l_(s,e,n):(i=!e.$stable,a_(e,s)),o=e}else e&&(c_(t,e),o={default:1});if(i)for(const c in s)!Xu(c)&&o[c]==null&&delete s[c]},gt=Uw;function xw(t){return Mw(t)}function Mw(t,e){const n=dc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:y=wn,insertStaticContent:R}=t,P=(w,S,C,L=null,B=null,F=null,Q=void 0,W=null,H=!!S.dynamicChildren)=>{if(w===S)return;w&&!Gr(w,S)&&(L=x(w),qe(w,B,F,!0),w=null),S.patchFlag===-2&&(H=!1,S.dynamicChildren=null);const{type:j,ref:se,shapeFlag:X}=S;switch(j){case bc:O(w,S,C,L);break;case Pt:k(w,S,C,L);break;case ha:w==null&&N(S,C,L,Q);break;case zt:b(w,S,C,L,B,F,Q,W,H);break;default:X&1?G(w,S,C,L,B,F,Q,W,H):X&6?T(w,S,C,L,B,F,Q,W,H):(X&64||X&128)&&j.process(w,S,C,L,B,F,Q,W,H,te)}se!=null&&B?Mi(se,w&&w.ref,F,S||w,!S):se==null&&w&&w.ref!=null&&Mi(w.ref,null,F,w,!0)},O=(w,S,C,L)=>{if(w==null)r(S.el=c(S.children),C,L);else{const B=S.el=w.el;S.children!==w.children&&u(B,S.children)}},k=(w,S,C,L)=>{w==null?r(S.el=l(S.children||""),C,L):S.el=w.el},N=(w,S,C,L)=>{[w.el,w.anchor]=R(w.children,S,C,L,w.el,w.anchor)},M=({el:w,anchor:S},C,L)=>{let B;for(;w&&w!==S;)B=m(w),r(w,C,L),w=B;r(S,C,L)},q=({el:w,anchor:S})=>{let C;for(;w&&w!==S;)C=m(w),s(w),w=C;s(S)},G=(w,S,C,L,B,F,Q,W,H)=>{if(S.type==="svg"?Q="svg":S.type==="math"&&(Q="mathml"),w==null)z(S,C,L,B,F,Q,W,H);else{const j=w.el&&w.el._isVueCE?w.el:null;try{j&&j._beginPatch(),g(w,S,B,F,Q,W,H)}finally{j&&j._endPatch()}}},z=(w,S,C,L,B,F,Q,W)=>{let H,j;const{props:se,shapeFlag:X,transition:ne,dirs:oe}=w;if(H=w.el=o(w.type,F,se&&se.is,se),X&8?h(H,w.children):X&16&&v(w.children,H,null,L,B,wl(w,F),Q,W),oe&&$r(w,null,L,"created"),E(H,w,w.scopeId,Q,L),se){for(const De in se)De!=="value"&&!Ni(De)&&i(H,De,null,se[De],F,L);"value"in se&&i(H,"value",null,se.value,F),(j=se.onVnodeBeforeMount)&&pn(j,L,w)}oe&&$r(w,null,L,"beforeMount");const ge=Lw(B,ne);ge&&ne.beforeEnter(H),r(H,S,C),((j=se&&se.onVnodeMounted)||ge||oe)&&gt(()=>{j&&pn(j,L,w),ge&&ne.enter(H),oe&&$r(w,null,L,"mounted")},B)},E=(w,S,C,L,B)=>{if(C&&y(w,C),L)for(let F=0;F<L.length;F++)y(w,L[F]);if(B){let F=B.subTree;if(S===F||f_(F.type)&&(F.ssContent===S||F.ssFallback===S)){const Q=B.vnode;E(w,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},v=(w,S,C,L,B,F,Q,W,H=0)=>{for(let j=H;j<w.length;j++){const se=w[j]=W?On(w[j]):En(w[j]);P(null,se,S,C,L,B,F,Q,W)}},g=(w,S,C,L,B,F,Q)=>{const W=S.el=w.el;let{patchFlag:H,dynamicChildren:j,dirs:se}=S;H|=w.patchFlag&16;const X=w.props||Ne,ne=S.props||Ne;let oe;if(C&&Br(C,!1),(oe=ne.onVnodeBeforeUpdate)&&pn(oe,C,S,w),se&&$r(S,w,C,"beforeUpdate"),C&&Br(C,!0),(X.innerHTML&&ne.innerHTML==null||X.textContent&&ne.textContent==null)&&h(W,""),j?I(w.dynamicChildren,j,W,C,L,wl(S,B),F):Q||me(w,S,W,null,C,L,wl(S,B),F,!1),H>0){if(H&16)A(W,X,ne,C,B);else if(H&2&&X.class!==ne.class&&i(W,"class",null,ne.class,B),H&4&&i(W,"style",X.style,ne.style,B),H&8){const ge=S.dynamicProps;for(let De=0;De<ge.length;De++){const Ae=ge[De],dt=X[Ae],pt=ne[Ae];(pt!==dt||Ae==="value")&&i(W,Ae,dt,pt,B,C)}}H&1&&w.children!==S.children&&h(W,S.children)}else!Q&&j==null&&A(W,X,ne,C,B);((oe=ne.onVnodeUpdated)||se)&&gt(()=>{oe&&pn(oe,C,S,w),se&&$r(S,w,C,"updated")},L)},I=(w,S,C,L,B,F,Q)=>{for(let W=0;W<S.length;W++){const H=w[W],j=S[W],se=H.el&&(H.type===zt||!Gr(H,j)||H.shapeFlag&198)?d(H.el):C;P(H,j,se,null,L,B,F,Q,!0)}},A=(w,S,C,L,B)=>{if(S!==C){if(S!==Ne)for(const F in S)!Ni(F)&&!(F in C)&&i(w,F,S[F],null,B,L);for(const F in C){if(Ni(F))continue;const Q=C[F],W=S[F];Q!==W&&F!=="value"&&i(w,F,W,Q,B,L)}"value"in C&&i(w,"value",S.value,C.value,B)}},b=(w,S,C,L,B,F,Q,W,H)=>{const j=S.el=w?w.el:c(""),se=S.anchor=w?w.anchor:c("");let{patchFlag:X,dynamicChildren:ne,slotScopeIds:oe}=S;oe&&(W=W?W.concat(oe):oe),w==null?(r(j,C,L),r(se,C,L),v(S.children||[],C,se,B,F,Q,W,H)):X>0&&X&64&&ne&&w.dynamicChildren&&w.dynamicChildren.length===ne.length?(I(w.dynamicChildren,ne,C,B,F,Q,W),(S.key!=null||B&&S===B.subTree)&&eh(w,S,!0)):me(w,S,C,se,B,F,Q,W,H)},T=(w,S,C,L,B,F,Q,W,H)=>{S.slotScopeIds=W,w==null?S.shapeFlag&512?B.ctx.activate(S,C,L,Q,H):de(S,C,L,B,F,Q,H):Le(w,S,H)},de=(w,S,C,L,B,F,Q)=>{const W=w.component=Gw(w,L,B);if(Tc(w)&&(W.ctx.renderer=te),zw(W,!1,Q),W.asyncDep){if(B&&B.registerDep(W,be,Q),!w.el){const H=W.subTree=Ge(Pt);k(null,H,S,C),w.placeholder=H.el}}else be(W,w,S,C,B,F,Q)},Le=(w,S,C)=>{const L=S.component=w.component;if(Rw(w,S,C))if(L.asyncDep&&!L.asyncResolved){le(L,S,C);return}else L.next=S,L.update();else S.el=w.el,L.vnode=S},be=(w,S,C,L,B,F,Q)=>{const W=()=>{if(w.isMounted){let{next:X,bu:ne,u:oe,parent:ge,vnode:De}=w;{const Ut=u_(w);if(Ut){X&&(X.el=De.el,le(w,X,Q)),Ut.asyncDep.then(()=>{gt(()=>{w.isUnmounted||j()},B)});return}}let Ae=X,dt;Br(w,!1),X?(X.el=De.el,le(w,X,Q)):X=De,ne&&la(ne),(dt=X.props&&X.props.onVnodeBeforeUpdate)&&pn(dt,ge,X,De),Br(w,!0);const pt=ld(w),Ft=w.subTree;w.subTree=pt,P(Ft,pt,d(Ft.el),x(Ft),w,B,F),X.el=pt.el,Ae===null&&Cw(w,pt.el),oe&&gt(oe,B),(dt=X.props&&X.props.onVnodeUpdated)&&gt(()=>pn(dt,ge,X,De),B)}else{let X;const{el:ne,props:oe}=S,{bm:ge,m:De,parent:Ae,root:dt,type:pt}=w,Ft=Li(S);Br(w,!1),ge&&la(ge),!Ft&&(X=oe&&oe.onVnodeBeforeMount)&&pn(X,Ae,S),Br(w,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(pt,w.parent?w.parent.type:void 0);const Ut=w.subTree=ld(w);P(null,Ut,C,L,w,B,F),S.el=Ut.el}if(De&&gt(De,B),!Ft&&(X=oe&&oe.onVnodeMounted)){const Ut=S;gt(()=>pn(X,Ae,Ut),B)}(S.shapeFlag&256||Ae&&Li(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&w.a&&gt(w.a,B),w.isMounted=!0,S=C=L=null}};w.scope.on();const H=w.effect=new lg(W);w.scope.off();const j=w.update=H.run.bind(H),se=w.job=H.runIfDirty.bind(H);se.i=w,se.id=w.uid,H.scheduler=()=>Ku(se),Br(w,!0),j()},le=(w,S,C)=>{S.component=w;const L=w.vnode.props;w.vnode=S,w.next=null,Dw(w,S.props,L,C),Vw(w,S.children,C),Bn(),Jf(w),jn()},me=(w,S,C,L,B,F,Q,W,H=!1)=>{const j=w&&w.children,se=w?w.shapeFlag:0,X=S.children,{patchFlag:ne,shapeFlag:oe}=S;if(ne>0){if(ne&128){Wt(j,X,C,L,B,F,Q,W,H);return}else if(ne&256){ft(j,X,C,L,B,F,Q,W,H);return}}oe&8?(se&16&&Ze(j,B,F),X!==j&&h(C,X)):se&16?oe&16?Wt(j,X,C,L,B,F,Q,W,H):Ze(j,B,F,!0):(se&8&&h(C,""),oe&16&&v(X,C,L,B,F,Q,W,H))},ft=(w,S,C,L,B,F,Q,W,H)=>{w=w||Ss,S=S||Ss;const j=w.length,se=S.length,X=Math.min(j,se);let ne;for(ne=0;ne<X;ne++){const oe=S[ne]=H?On(S[ne]):En(S[ne]);P(w[ne],oe,C,null,B,F,Q,W,H)}j>se?Ze(w,B,F,!0,!1,X):v(S,C,L,B,F,Q,W,H,X)},Wt=(w,S,C,L,B,F,Q,W,H)=>{let j=0;const se=S.length;let X=w.length-1,ne=se-1;for(;j<=X&&j<=ne;){const oe=w[j],ge=S[j]=H?On(S[j]):En(S[j]);if(Gr(oe,ge))P(oe,ge,C,null,B,F,Q,W,H);else break;j++}for(;j<=X&&j<=ne;){const oe=w[X],ge=S[ne]=H?On(S[ne]):En(S[ne]);if(Gr(oe,ge))P(oe,ge,C,null,B,F,Q,W,H);else break;X--,ne--}if(j>X){if(j<=ne){const oe=ne+1,ge=oe<se?S[oe].el:L;for(;j<=ne;)P(null,S[j]=H?On(S[j]):En(S[j]),C,ge,B,F,Q,W,H),j++}}else if(j>ne)for(;j<=X;)qe(w[j],B,F,!0),j++;else{const oe=j,ge=j,De=new Map;for(j=ge;j<=ne;j++){const ot=S[j]=H?On(S[j]):En(S[j]);ot.key!=null&&De.set(ot.key,j)}let Ae,dt=0;const pt=ne-ge+1;let Ft=!1,Ut=0;const Zt=new Array(pt);for(j=0;j<pt;j++)Zt[j]=0;for(j=oe;j<=X;j++){const ot=w[j];if(dt>=pt){qe(ot,B,F,!0);continue}let rt;if(ot.key!=null)rt=De.get(ot.key);else for(Ae=ge;Ae<=ne;Ae++)if(Zt[Ae-ge]===0&&Gr(ot,S[Ae])){rt=Ae;break}rt===void 0?qe(ot,B,F,!0):(Zt[rt-ge]=j+1,rt>=Ut?Ut=rt:Ft=!0,P(ot,S[rt],C,null,B,F,Q,W,H),dt++)}const fs=Ft?Fw(Zt):Ss;for(Ae=fs.length-1,j=pt-1;j>=0;j--){const ot=ge+j,rt=S[ot],ii=S[ot+1],xr=ot+1<se?ii.el||h_(ii):L;Zt[j]===0?P(null,rt,C,xr,B,F,Q,W,H):Ft&&(Ae<0||j!==fs[Ae]?Xe(rt,C,xr,2):Ae--)}}},Xe=(w,S,C,L,B=null)=>{const{el:F,type:Q,transition:W,children:H,shapeFlag:j}=w;if(j&6){Xe(w.component.subTree,S,C,L);return}if(j&128){w.suspense.move(S,C,L);return}if(j&64){Q.move(w,S,C,te);return}if(Q===zt){r(F,S,C);for(let X=0;X<H.length;X++)Xe(H[X],S,C,L);r(w.anchor,S,C);return}if(Q===ha){M(w,S,C);return}if(L!==2&&j&1&&W)if(L===0)W.beforeEnter(F),r(F,S,C),gt(()=>W.enter(F),B);else{const{leave:X,delayLeave:ne,afterLeave:oe}=W,ge=()=>{w.ctx.isUnmounted?s(F):r(F,S,C)},De=()=>{F._isLeaving&&F[_n](!0),X(F,()=>{ge(),oe&&oe()})};ne?ne(F,ge,De):De()}else r(F,S,C)},qe=(w,S,C,L=!1,B=!1)=>{const{type:F,props:Q,ref:W,children:H,dynamicChildren:j,shapeFlag:se,patchFlag:X,dirs:ne,cacheIndex:oe}=w;if(X===-2&&(B=!1),W!=null&&(Bn(),Mi(W,null,C,w,!0),jn()),oe!=null&&(S.renderCache[oe]=void 0),se&256){S.ctx.deactivate(w);return}const ge=se&1&&ne,De=!Li(w);let Ae;if(De&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&pn(Ae,S,w),se&6)Lt(w.component,C,L);else{if(se&128){w.suspense.unmount(C,L);return}ge&&$r(w,null,S,"beforeUnmount"),se&64?w.type.remove(w,S,C,te,L):j&&!j.hasOnce&&(F!==zt||X>0&&X&64)?Ze(j,S,C,!1,!0):(F===zt&&X&384||!B&&se&16)&&Ze(H,S,C),L&&Xt(w)}(De&&(Ae=Q&&Q.onVnodeUnmounted)||ge)&&gt(()=>{Ae&&pn(Ae,S,w),ge&&$r(w,null,S,"unmounted")},C)},Xt=w=>{const{type:S,el:C,anchor:L,transition:B}=w;if(S===zt){At(C,L);return}if(S===ha){q(w);return}const F=()=>{s(C),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(w.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:W}=B,H=()=>Q(C,F);W?W(w.el,F,H):H()}else F()},At=(w,S)=>{let C;for(;w!==S;)C=m(w),s(w),w=C;s(S)},Lt=(w,S,C)=>{const{bum:L,scope:B,job:F,subTree:Q,um:W,m:H,a:j}=w;fd(H),fd(j),L&&la(L),B.stop(),F&&(F.flags|=8,qe(Q,w,S,C)),W&&gt(W,S),gt(()=>{w.isUnmounted=!0},S)},Ze=(w,S,C,L=!1,B=!1,F=0)=>{for(let Q=F;Q<w.length;Q++)qe(w[Q],S,C,L,B)},x=w=>{if(w.shapeFlag&6)return x(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const S=m(w.anchor||w.el),C=S&&S[xg];return C?m(C):S};let J=!1;const Y=(w,S,C)=>{let L;w==null?S._vnode&&(qe(S._vnode,null,null,!0),L=S._vnode.component):P(S._vnode||null,w,S,null,null,null,C),S._vnode=w,J||(J=!0,Jf(L),Dg(),J=!1)},te={p:P,um:qe,m:Xe,r:Xt,mt:de,mc:v,pc:me,pbc:I,n:x,o:t};return{render:Y,hydrate:void 0,createApp:Tw(Y)}}function wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eh(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=On(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&eh(o,c)),c.type===bc&&(c.patchFlag===-1&&(c=s[i]=On(c)),c.el=o.el),c.type===Pt&&!c.el&&(c.el=o.el)}}function Fw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function u_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:u_(e)}function fd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function h_(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?h_(e.subTree):null}const f_=t=>t.__isSuspense;function Uw(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):YT(t)}const zt=Symbol.for("v-fgt"),bc=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),Ui=[];let jt=null;function d_(t=!1){Ui.push(jt=t?null:[])}function $w(){Ui.pop(),jt=Ui[Ui.length-1]||null}let Zi=1;function ka(t,e=!1){Zi+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function p_(t){return t.dynamicChildren=Zi>0?jt||Ss:null,$w(),Zi>0&&jt&&jt.push(t),t}function vN(t,e,n,r,s,i){return p_(gr(t,e,n,r,s,i,!0))}function m_(t,e,n,r,s){return p_(Ge(t,e,n,r,s,!0))}function Na(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const g_=({key:t})=>t??null,fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Fe(t)||ue(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function gr(t,e=null,n=null,r=0,s=null,i=t===zt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&g_(e),ref:e&&fa(e),scopeId:Ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return c?(th(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Zi>0&&!o&&jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&jt.push(l),l}const Ge=Bw;function Bw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dw)&&(t=Pt),Na(t)){const c=Ar(t,e,!0);return n&&th(c,n),Zi>0&&!i&&jt&&(c.shapeFlag&6?jt[jt.indexOf(t)]=c:jt.push(c)),c.patchFlag=-2,c}if(Xw(t)&&(t=t.__vccOpts),e){e=jw(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=vo(c)),Se(l)&&(_c(l)&&!ie(l)&&(l=Je({},l)),e.style=pc(l))}const o=$e(t)?1:f_(t)?128:Mg(t)?64:Se(t)?4:ue(t)?2:0;return gr(t,e,n,r,s,o,i,!0)}function jw(t){return t?_c(t)||s_(t)?Je({},t):t:null}function Ar(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?__(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&g_(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(fa(e)):[i,fa(e)]:fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ns(h,l.clone(h)),h}function Hw(t=" ",e=0){return Ge(bc,null,t,e)}function EN(t,e){const n=Ge(ha,null,t);return n.staticCount=e,n}function TN(t="",e=!1){return e?(d_(),m_(Pt,null,t)):Ge(Pt,null,t)}function En(t){return t==null||typeof t=="boolean"?Ge(Pt):ie(t)?Ge(zt,null,t.slice()):Na(t)?On(t):Ge(bc,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function th(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),th(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!s_(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[Hw(e)]):n=8);t.children=e,t.shapeFlag|=n}function __(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vo([e.class,r.class]));else if(s==="style")e.style=pc([e.style,r.style]);else if(cc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){cn(t,e,7,[n,r])}const qw=Zg();let Ww=0;function Gw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qw,i={uid:Ww++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:o_(r,s),emitsOptions:e_(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iw.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const Ys=()=>Tt||Bt;let Oa,tu;{const t=dc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),tu=e("__VUE_SSR_SETTERS__",n=>eo=n)}const Io=t=>{const e=Tt;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},dd=()=>{Tt&&Tt.scope.off(),Oa(null)};function y_(t){return t.vnode.shapeFlag&4}let eo=!1;function zw(t,e=!1,n=!1){e&&tu(e);const{props:r,children:s}=t.vnode,i=y_(t);Pw(t,r,i,e),Ow(t,s,n||e);const o=i?Kw(t,e):void 0;return e&&tu(!1),o}function Kw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pw);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?Yw(t):null,i=Io(t),o=To(r,t,0,[t.props,s]),c=tg(o);if(jn(),i(),(c||t.sp)&&!Li(t)&&Hg(t),c){if(o.then(dd,dd),e)return o.then(l=>{pd(t,l)}).catch(l=>{yc(l,t,0)});t.asyncDep=o}else pd(t,o)}else v_(t)}function pd(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=bg(e)),v_(t)}function v_(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=Io(t);Bn();try{mw(t)}finally{jn(),s()}}}const Qw={get(t,e){return vt(t,"get",""),t[e]}};function Yw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qw),slots:t.slots,emit:t.emit,expose:e}}function Sc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bg(zu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}})):t.proxy}function Jw(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Xw(t){return ue(t)&&"__vccOpts"in t}const we=(t,e)=>WT(t,e,eo);function Rc(t,e,n){try{ka(-1);const r=arguments.length;return r===2?Se(e)&&!ie(e)?Na(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Na(n)&&(n=[n]),Ge(t,e,n))}finally{ka(1)}}const Zw="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nu;const md=typeof window<"u"&&window.trustedTypes;if(md)try{nu=md.createPolicy("vue",{createHTML:t=>t})}catch{}const E_=nu?t=>nu.createHTML(t):t=>t,eI="http://www.w3.org/2000/svg",tI="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,gd=Nn&&Nn.createElement("template"),nI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Nn.createElementNS(eI,t):e==="mathml"?Nn.createElementNS(tI,t):n?Nn.createElement(t,{is:n}):Nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gd.innerHTML=E_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=gd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sr="transition",wi="animation",Fs=Symbol("_vtc"),T_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w_=Je({},Ug,T_),rI=t=>(t.displayName="Transition",t.props=w_,t),wN=rI((t,{slots:e})=>Rc(rw,I_(t),e)),jr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},_d=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function I_(t){const e={};for(const b in t)b in T_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,R=sI(s),P=R&&R[0],O=R&&R[1],{onBeforeEnter:k,onEnter:N,onEnterCancelled:M,onLeave:q,onLeaveCancelled:G,onBeforeAppear:z=k,onAppear:E=N,onAppearCancelled:v=M}=e,g=(b,T,de,Le)=>{b._enterCancelled=Le,ar(b,T?h:c),ar(b,T?u:o),de&&de()},I=(b,T)=>{b._isLeaving=!1,ar(b,d),ar(b,y),ar(b,m),T&&T()},A=b=>(T,de)=>{const Le=b?E:N,be=()=>g(T,b,de);jr(Le,[T,be]),yd(()=>{ar(T,b?l:i),mn(T,b?h:c),_d(Le)||vd(T,r,P,be)})};return Je(e,{onBeforeEnter(b){jr(k,[b]),mn(b,i),mn(b,o)},onBeforeAppear(b){jr(z,[b]),mn(b,l),mn(b,u)},onEnter:A(!1),onAppear:A(!0),onLeave(b,T){b._isLeaving=!0;const de=()=>I(b,T);mn(b,d),b._enterCancelled?(mn(b,m),ru(b)):(ru(b),mn(b,m)),yd(()=>{b._isLeaving&&(ar(b,d),mn(b,y),_d(q)||vd(b,r,O,de))}),jr(q,[b,de])},onEnterCancelled(b){g(b,!1,void 0,!0),jr(M,[b])},onAppearCancelled(b){g(b,!0,void 0,!0),jr(v,[b])},onLeaveCancelled(b){I(b),jr(G,[b])}})}function sI(t){if(t==null)return null;if(Se(t))return[Il(t.enter),Il(t.leave)];{const e=Il(t);return[e,e]}}function Il(t){return uT(t)}function mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Fs]||(t[Fs]=new Set)).add(e)}function ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Fs];n&&(n.delete(e),n.size||(t[Fs]=void 0))}function yd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iI=0;function vd(t,e,n,r){const s=t._endId=++iI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=A_(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=y=>{y.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},c+1),t.addEventListener(u,m)}function A_(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${sr}Delay`),i=r(`${sr}Duration`),o=Ed(s,i),c=r(`${wi}Delay`),l=r(`${wi}Duration`),u=Ed(c,l);let h=null,d=0,m=0;e===sr?o>0&&(h=sr,d=o,m=i.length):e===wi?u>0&&(h=wi,d=u,m=l.length):(d=Math.max(o,u),h=d>0?o>u?sr:wi:null,m=h?h===sr?i.length:l.length:0);const y=h===sr&&/\b(?:transform|all)(?:,|$)/.test(r(`${sr}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:y}}function Ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Td(n)+Td(t[r])))}function Td(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ru(t){return(t?t.ownerDocument:document).body.offsetHeight}function oI(t,e,n){const r=t[Fs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Va=Symbol("_vod"),b_=Symbol("_vsh"),IN={name:"show",beforeMount(t,{value:e},{transition:n}){t[Va]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ii(t,!0),r.enter(t)):r.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t[Va]:"none",t[b_]=!e}const aI=Symbol(""),cI=/(?:^|;)\s*display\s*:/;function lI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&da(r,c,"")}else for(const o in e)n[o]==null&&da(r,o,"");for(const o in n)o==="display"&&(i=!0),da(r,o,n[o])}else if(s){if(e!==n){const o=r[aI];o&&(n+=";"+o),r.cssText=n,i=cI.test(n)}}else e&&t.removeAttribute("style");Va in t&&(t[Va]=i?r.display:"",t[b_]&&(r.display="none"))}const wd=/\s*!important$/;function da(t,e,n){if(ie(n))n.forEach(r=>da(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uI(t,e);wd.test(n)?t.setProperty(kr(r),n.replace(wd,""),"important"):t[r]=n}}const Id=["Webkit","Moz","ms"],Al={};function uI(t,e){const n=Al[e];if(n)return n;let r=Dt(e);if(r!=="filter"&&r in t)return Al[e]=r;r=yo(r);for(let s=0;s<Id.length;s++){const i=Id[s]+r;if(i in t)return Al[e]=i}return e}const Ad="http://www.w3.org/1999/xlink";function bd(t,e,n,r,s,i=gT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ad,e.slice(6,e.length)):t.setAttributeNS(Ad,e,n):n==null||i&&!ig(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Rn(n)?String(n):n)}function Sd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?E_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ig(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function hI(t,e,n,r){t.removeEventListener(e,n,r)}const Rd=Symbol("_vei");function fI(t,e,n,r,s=null){const i=t[Rd]||(t[Rd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=dI(e);if(r){const u=i[e]=gI(r,s);zr(t,c,u,l)}else o&&(hI(t,c,o,l),i[e]=void 0)}}const Cd=/(?:Once|Passive|Capture)$/;function dI(t){let e;if(Cd.test(t)){e={};let r;for(;r=t.match(Cd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kr(t.slice(2)),e]}let bl=0;const pI=Promise.resolve(),mI=()=>bl||(pI.then(()=>bl=0),bl=Date.now());function gI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(_I(r,n.value),e,5,[r])};return n.value=t,n.attached=mI(),n}function _I(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?oI(t,r,o):e==="style"?lI(t,n,r):cc(e)?Fu(e)||fI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vI(t,e,r,o))?(Sd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bd(t,e,r,o,i,e!=="value")):t._isVueCE&&(EI(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?Sd(t,Dt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bd(t,e,r,o))};function vI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pd(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pd(e)&&$e(n)?!1:e in t}function EI(t,e){const n=t._def.props;if(!n)return!1;const r=Dt(e);return Array.isArray(n)?n.some(s=>Dt(s)===r):Object.keys(n).some(s=>Dt(s)===r)}const S_=new WeakMap,R_=new WeakMap,xa=Symbol("_moveCb"),Dd=Symbol("_enterCb"),TI=t=>(delete t.props.mode,t),wI=TI({name:"TransitionGroup",props:Je({},w_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ys(),r=Fg();let s,i;return zg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!SI(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(II),s.forEach(AI);const c=s.filter(bI);ru(n.vnode.el),c.forEach(l=>{const u=l.el,h=u.style;mn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const d=u[xa]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[xa]=null,ar(u,o))};u.addEventListener("transitionend",d)}),s=[]}),()=>{const o=Te(t),c=I_(o);let l=o.tag||zt;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),ns(h,Xi(h,c,r,n)),S_.set(h,C_(h.el)))}i=e.default?Yu(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&ns(h,Xi(h,c,r,n))}return Ge(l,null,i)}}}),AN=wI;function II(t){const e=t.el;e[xa]&&e[xa](),e[Dd]&&e[Dd]()}function AI(t){R_.set(t,C_(t.el))}function bI(t){const e=S_.get(t),n=R_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,c=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=c.width/i.offsetWidth),i.offsetHeight&&(u=c.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/l}px,${s/u}px)`,o.transitionDuration="0s",t}}function C_(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function SI(t,e,n){const r=t.cloneNode(),s=t[Fs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=A_(r);return i.removeChild(r),o}const Ma=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>la(e,n):e};function RI(t){t.target.composing=!0}function kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ps=Symbol("_assign");function Nd(t,e,n){return e&&(t=t.trim()),n&&(t=fc(t)),t}const bN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ps]=Ma(s);const i=r||s.props&&s.props.type==="number";zr(t,e?"change":"input",o=>{o.target.composing||t[Ps](Nd(t.value,n,i))}),(n||i)&&zr(t,"change",()=>{t.value=Nd(t.value,n,i)}),e||(zr(t,"compositionstart",RI),zr(t,"compositionend",kd),zr(t,"change",kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ps]=Ma(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?fc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},SN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=lc(e);zr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fc(La(o)):La(o));t[Ps](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wo(()=>{t._assigning=!1})}),t[Ps]=Ma(r)},mounted(t,{value:e}){Od(t,e)},beforeUpdate(t,e,n){t[Ps]=Ma(n)},updated(t,{value:e}){t._assigning||Od(t,e)}};function Od(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!lc(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=La(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=yT(e,c)>-1}else o.selected=e.has(c);else if(Eo(La(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function La(t){return"_value"in t?t._value:t.value}const CI=["ctrl","shift","alt","meta"],PI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CI.some(n=>t[`${n}Key`]&&!e.includes(n))},RN=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=PI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},DI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},CN=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=kr(s.key);if(e.some(o=>o===i||DI[o]===i))return t(s)})},kI=Je({patchProp:yI},nI);let Vd;function NI(){return Vd||(Vd=xw(kI))}const OI=(...t)=>{const e=NI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xI(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,VI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function VI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xI(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let P_;const Cc=t=>P_=t,D_=Symbol();function su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function MI(){const t=Ki(!0),e=t.run(()=>Mt({}));let n=[],r=[];const s=zu({install(i){Cc(s),s._a=i,i.provide(D_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const k_=()=>{};function xd(t,e,n,r=k_){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&$u()&&mc(s),s}function _s(t,...e){t.forEach(n=>{n(...e)})}const LI=t=>t(),Md=Symbol(),Sl=Symbol();function iu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];su(s)&&su(r)&&t.hasOwnProperty(n)&&!Fe(r)&&!$n(r)?t[n]=iu(s,r):t[n]=r}return t}const FI=Symbol();function UI(t){return!su(t)||!Object.prototype.hasOwnProperty.call(t,FI)}const{assign:cr}=Object;function $I(t){return!!(Fe(t)&&t.effect)}function BI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const h=Sg(n.state.value[t]);return cr(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=zu(we(()=>{Cc(n);const y=n._s.get(t);return o[m].call(y,y)})),d),{}))}return l=N_(t,u,e,n,r,!0),l}function N_(t,e,n={},r,s,i){let o;const c=cr({actions:{}},n),l={deep:!0};let u,h,d=new Set,m=new Set,y;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={});let P;function O(v){let g;u=h=!1,typeof v=="function"?(v(r.state.value[t]),g={type:$i.patchFunction,storeId:t,events:y}):(iu(r.state.value[t],v),g={type:$i.patchObject,payload:v,storeId:t,events:y});const I=P=Symbol();wo().then(()=>{P===I&&(u=!0)}),h=!0,_s(d,g,r.state.value[t])}const k=i?function(){const{state:g}=n,I=g?g():{};this.$patch(A=>{cr(A,I)})}:k_;function N(){o.stop(),d.clear(),m.clear(),r._s.delete(t)}const M=(v,g="")=>{if(Md in v)return v[Sl]=g,v;const I=function(){Cc(r);const A=Array.from(arguments),b=new Set,T=new Set;function de(le){b.add(le)}function Le(le){T.add(le)}_s(m,{args:A,name:I[Sl],store:G,after:de,onError:Le});let be;try{be=v.apply(this&&this.$id===t?this:G,A)}catch(le){throw _s(T,le),le}return be instanceof Promise?be.then(le=>(_s(b,le),le)).catch(le=>(_s(T,le),Promise.reject(le))):(_s(b,be),be)};return I[Md]=!0,I[Sl]=g,I},q={_p:r,$id:t,$onAction:xd.bind(null,m),$patch:O,$reset:k,$subscribe(v,g={}){const I=xd(d,v,g.detached,()=>A()),A=o.run(()=>xt(()=>r.state.value[t],b=>{(g.flush==="sync"?h:u)&&v({storeId:t,type:$i.direct,events:y},b)},cr({},l,g)));return I},$dispose:N},G=Ot(q);r._s.set(t,G);const E=(r._a&&r._a.runWithContext||LI)(()=>r._e.run(()=>(o=Ki()).run(()=>e({action:M}))));for(const v in E){const g=E[v];if(Fe(g)&&!$I(g)||$n(g))i||(R&&UI(g)&&(Fe(g)?g.value=R[v]:iu(g,R[v])),r.state.value[t][v]=g);else if(typeof g=="function"){const I=M(g,v);E[v]=I,c.actions[v]=g}}return cr(G,E),cr(Te(G),E),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:v=>{O(g=>{cr(g,v)})}}),r._p.forEach(v=>{cr(G,o.run(()=>v({store:G,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(G.$state,R),u=!0,h=!0,G}/*! #__NO_SIDE_EFFECTS__ */function jI(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=JT();return o=o||(l?Ue(D_,null):null),o&&Cc(o),o=P_,o._s.has(t)||(s?N_(t,e,r,o):BI(t,r,o)),o._s.get(t)}return i.$id=t,i}function HI(t,e){e=Array.isArray(e)?e.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const kt=typeof window<"u",PN=kt&&"IntersectionObserver"in window,qI=kt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),O_=kt&&"matchMedia"in window&&typeof window.matchMedia=="function",WI=()=>O_&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function GI(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function Ld(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),GI(t,e.split("."),n))}function V_(t,e=0){return Array.from({length:t},(n,r)=>e+r)}function Xo(t,e="px"){if(t==null||t==="")return;const n=Number(t);return isNaN(n)?String(t):isFinite(n)?`${n}${e}`:void 0}function DN(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Fd(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function x_(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}function kN(t){return Object.keys(t)}function Rl(t,e){return e.every(n=>t.hasOwnProperty(n))}function zI(t,e){const n={};for(const r of e)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function Ud(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)?r[i]=t[i]:s[i]=t[i];return[r,s]}function M_(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}const L_=/^on[^a-z]/,NN=t=>L_.test(t),KI=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function ON(t){const[e,n]=Ud(t,[L_]),r=M_(e,KI),[s,i]=Ud(n,["class","style","id","inert",/^data-/]);return Object.assign(s,e),Object.assign(i,r),[s,i]}function VN(t){return t==null?[]:Array.isArray(t)?t:[t]}function nh(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function $d(t,e,n="0"){return t+n.repeat(Math.max(0,e-t.length))}function Bd(t,e,n="0"){return n.repeat(Math.max(0,e-t.length))+t}function QI(t,e=1){const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function wt(t={},e={},n,r){const s={};for(const i in t)s[i]=t[i];for(const i in e){const o=e[i];if(r&&!r(i,o))continue;const c=t[i];if(Fd(c)&&Fd(o)){s[i]=wt(c,o,n,r);continue}s[i]=o}return s}function YI(t){return t.map(e=>e.type===zt?YI(e.children):e).flat()}function Zr(t=""){if(Zr.cache.has(t))return Zr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Zr.cache.set(t,e),e}Zr.cache=new Map;function Ci(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Ci(t,n)).flat(1);if(e.suspense)return Ci(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>Ci(t,n)).flat(1);if(e.component){if(Object.getOwnPropertyDescriptor(e.component.provides,t))return[e.component];if(e.component.subTree)return Ci(t,e.component.subTree).flat(1)}return[]}var mr,Vn;class xN{constructor(e){dl(this,mr,[]);dl(this,Vn,0);this.size=e}get isFull(){return dn(this,mr).length===this.size}push(e){dn(this,mr)[dn(this,Vn)]=e,pl(this,Vn,(dn(this,Vn)+1)%this.size)}values(){return dn(this,mr).slice(dn(this,Vn)).concat(dn(this,mr).slice(0,dn(this,Vn)))}clear(){dn(this,mr).length=0,pl(this,Vn,0)}}mr=new WeakMap,Vn=new WeakMap;function MN(t){const e=Ot({});vc(()=>{const r=t();for(const s in r)e[s]=r[s]},{flush:"sync"});const n={};for(const r in e)n[r]=ct(()=>e[r]);return n}function LN(t,e){return t.includes(e)}function FN(t){return t[2].toLowerCase()+t.slice(3)}const UN=()=>[Function,Array];function $N(t,e){return e="on"+yo(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function BN(t,e=!0){const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","details:not(:has(> summary))","details > summary","[tabindex]",'[contenteditable]:not([contenteditable="false"])',"audio[controls]","video[controls]"].map(s=>`${s}${e?':not([tabindex="-1"])':""}:not([disabled], [inert])`).join(", ");let r;try{r=[...t.querySelectorAll(n)]}catch{return[]}return r.filter(s=>!s.closest("[inert]")).filter(s=>!!s.offsetParent||s.getClientRects().length>0).filter(s=>{var i,o;return!((i=s.parentElement)!=null&&i.closest("details:not([open])"))||s.tagName==="SUMMARY"&&((o=s.parentElement)==null?void 0:o.tagName)==="DETAILS"})}function jN(t,e){if(!(kt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function HN(t,e){if(!kt||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function JI(){const t=Yt(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>x_(t.value)}),e}function qN(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="bigint"}function WN(t){const e=["checked","disabled"];return Object.fromEntries(Object.entries(t).filter(([n,r])=>e.includes(n)?!!r:r!==void 0))}const ys=2.4,jd=.2126729,Hd=.7151522,qd=.072175,XI=.55,ZI=.58,eA=.57,tA=.62,Zo=.03,Wd=1.45,nA=5e-4,rA=1.25,sA=1.25,Gd=.078,zd=12.82051282051282,ea=.06,Kd=.001;function Qd(t,e){const n=(t.r/255)**ys,r=(t.g/255)**ys,s=(t.b/255)**ys,i=(e.r/255)**ys,o=(e.g/255)**ys,c=(e.b/255)**ys;let l=n*jd+r*Hd+s*qd,u=i*jd+o*Hd+c*qd;if(l<=Zo&&(l+=(Zo-l)**Wd),u<=Zo&&(u+=(Zo-u)**Wd),Math.abs(u-l)<nA)return 0;let h;if(u>l){const d=(u**XI-l**ZI)*rA;h=d<Kd?0:d<Gd?d-d*zd*ea:d-ea}else{const d=(u**tA-l**eA)*sA;h=d>-Kd?0:d>-Gd?d-d*zd*ea:d+ea}return h*100}const Fa=.20689655172413793,iA=t=>t>Fa**3?Math.cbrt(t):t/(3*Fa**2)+4/29,oA=t=>t>Fa?t**3:3*Fa**2*(t-4/29);function F_(t){const e=iA,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function U_(t){const e=oA,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const aA=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],cA=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,lA=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],uA=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function $_(t){const e=Array(3),n=cA,r=aA;for(let s=0;s<3;++s)e[s]=Math.round(nh(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function rh({r:t,g:e,b:n}){const r=[0,0,0],s=uA,i=lA;t=s(t/255),e=s(e/255),n=s(n/255);for(let o=0;o<3;++o)r[o]=i[o][0]*t+i[o][1]*e+i[o][2]*n;return r}function hA(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function GN(t){return hA(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const Yd=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,fA={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>Jd({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>Jd({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>to({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>to({h:t,s:e,v:n,a:r})};function Ln(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Yd.test(t)){const{groups:e}=t.match(Yd),{fn:n,values:r}=e,s=r.split(/,\s*|\s*\/\s*|\s+/).map((i,o)=>i.endsWith("%")||o>0&&o<3&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return fA[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),pA(e)}else if(typeof t=="object"){if(Rl(t,["r","g","b"]))return t;if(Rl(t,["h","s","l"]))return to(B_(t));if(Rl(t,["h","s","v"]))return to(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function to(t){const{h:e,s:n,v:r,a:s}=t,i=c=>{const l=(c+e/60)%6;return r-r*n*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(c=>Math.round(c*255));return{r:o[0],g:o[1],b:o[2],a:s}}function Jd(t){return to(B_(t))}function B_(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function ta(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function dA({r:t,g:e,b:n,a:r}){return`#${[ta(t),ta(e),ta(n),r!==void 0?ta(Math.round(r*255)):""].join("")}`}function pA(t){t=mA(t);let[e,n,r,s]=QI(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function mA(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=$d($d(t,6),8,"F")),t}function gA(t,e){const n=F_(rh(t));return n[0]=n[0]+e*10,$_(U_(n))}function _A(t,e){const n=F_(rh(t));return n[0]=n[0]-e*10,$_(U_(n))}function yA(t){const e=Ln(t);return rh(e)[1]}function vA(t){const e=Math.abs(Qd(Ln(0),Ln(t)));return Math.abs(Qd(Ln(16777215),Ln(t)))>Math.min(e,50)}function Nr(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const EA=Nr({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Yn(t,e){const n=Ys();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function TA(t="composables"){const e=Yn(t).type;return Zr((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}function wA(t,e=Yn("injectSelf")){const{provides:n}=e;if(n&&t in n)return n[t]}const Us=Symbol.for("vuetify:defaults");function IA(t){return Mt(t)}function sh(){const t=Ue(Us);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function zN(t,e){const n=sh(),r=Mt(t),s=we(()=>{if(Qt(e==null?void 0:e.disabled))return n.value;const o=Qt(e==null?void 0:e.scoped),c=Qt(e==null?void 0:e.reset),l=Qt(e==null?void 0:e.root);if(r.value==null&&!(o||c||l))return n.value;let u=wt(r.value,{prev:n.value});if(o)return u;if(c||l){const h=Number(c||1/0);for(let d=0;d<=h&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=wt(wt(u,{prev:u}),u[l])),u}return u.prev?wt(u.prev,u,void 0,(h,d)=>d!==void 0):u});return rn(Us,s),s}function AA(t,e){return t.props&&(typeof t.props[e]<"u"||typeof t.props[Zr(e)]<"u")}function bA(t={},e,n=sh()){const r=Yn("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=we(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),i=new Proxy(t,{get(l,u){var y,R,P,O;const h=Reflect.get(l,u);if(u==="class"||u==="style")return[(y=s.value)==null?void 0:y[u],h].filter(k=>k!=null);if(AA(r.vnode,u))return h;const d=(R=s.value)==null?void 0:R[u];if(d!==void 0)return d;const m=(O=(P=n.value)==null?void 0:P.global)==null?void 0:O[u];return m!==void 0?m:h}}),o=Yt();vc(()=>{if(s.value){const l=Object.entries(s.value).filter(([u])=>u.startsWith(u[0].toUpperCase()));o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function c(){const l=wA(Us,r);rn(Us,we(()=>o.value?wt((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:c}}function Ao(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Nr(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return zI(r,e)},t.props._as=String,t.setup=function(r,s){const i=sh();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:c}=bA(r,r._as??t.name,i),l=t._setup(o,s);return c(),l}}return t}function j_(t=!0){return e=>(t?Ao:Ec)(e)}const KN="cubic-bezier(0.4, 0, 0.2, 1)",QN="cubic-bezier(0.0, 0, 0.2, 1)",YN="cubic-bezier(0.4, 0, 1, 1)",SA={linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5,instant:t=>1};function RA(t){const e=Yn("useRender");e.render=t}const CA=[String,Function,Object,Array],ou=Symbol.for("vuetify:icons"),Pc=Nr({icon:{type:CA},tag:{type:[String,Object,Function],required:!0}},"icon"),Xd=j_()({name:"VComponentIcon",props:Pc(),setup(t,{slots:e}){return()=>{const n=t.icon;return Ge(t.tag,null,{default:()=>{var r;return[t.icon?Ge(n,null,null):(r=e.default)==null?void 0:r.call(e)]}})}}}),H_=Ao({name:"VSvgIcon",inheritAttrs:!1,props:Pc(),setup(t,{attrs:e}){return()=>Ge(t.tag,__(e,{style:null}),{default:()=>[gr("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(n=>Array.isArray(n)?gr("path",{d:n[0],"fill-opacity":n[1]},null):gr("path",{d:n},null)):gr("path",{d:t.icon},null)])]})}});Ao({name:"VLigatureIcon",props:Pc(),setup(t){return()=>Ge(t.tag,null,{default:()=>[t.icon]})}});const q_=Ao({name:"VClassIcon",props:Pc(),setup(t){return()=>Ge(t.tag,{class:vo(t.icon)},null)}}),JN=t=>{const e=Ue(ou);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:we(()=>{var l;const r=$T(t);if(!r)return{component:Xd};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=e.aliases)==null?void 0:l[s.slice(1)])),Array.isArray(s))return{component:H_,icon:s};if(typeof s!="string")return{component:Xd,icon:s};const i=Object.keys(e.sets).find(u=>typeof s=="string"&&s.startsWith(`${u}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},PA={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",tableGroupCollapse:"mdi-chevron-down",tableGroupExpand:"mdi-chevron-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload",color:"mdi-palette",command:"mdi-apple-keyboard-command",ctrl:"mdi-apple-keyboard-control",space:"mdi-keyboard-space",shift:"mdi-apple-keyboard-shift",alt:"mdi-apple-keyboard-option",enter:"mdi-keyboard-return",arrowup:"mdi-arrow-up",arrowdown:"mdi-arrow-down",arrowleft:"mdi-arrow-left",arrowright:"mdi-arrow-right",backspace:"mdi-backspace",play:"mdi-play",pause:"mdi-pause",fullscreen:"mdi-fullscreen",fullscreenExit:"mdi-fullscreen-exit",volumeHigh:"mdi-volume-high",volumeMedium:"mdi-volume-medium",volumeLow:"mdi-volume-low",volumeOff:"mdi-volume-variant-off",search:"mdi-magnify"},W_={component:t=>Rc(q_,{...t,class:"mdi"})};function DA(){return{svg:{component:H_},class:{component:q_}}}function kA(t){const e=DA(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=W_),wt({defaultSet:n,sets:e,aliases:{...PA,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}function NA(t,e){let n;function r(){n=Ki(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}xt(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),mc(()=>{n==null||n.stop()})}function OA(t,e,n,r=i=>i,s=i=>i){const i=Yn("useProxiedModel"),o=Mt(t[e]!==void 0?t[e]:n),c=Zr(e),u=we(c!==e?()=>{var d,m,y,R;return t[e],!!(((d=i.vnode.props)!=null&&d.hasOwnProperty(e)||(m=i.vnode.props)!=null&&m.hasOwnProperty(c))&&((y=i.vnode.props)!=null&&y.hasOwnProperty(`onUpdate:${e}`)||(R=i.vnode.props)!=null&&R.hasOwnProperty(`onUpdate:${c}`)))}:()=>{var d,m;return t[e],!!((d=i.vnode.props)!=null&&d.hasOwnProperty(e)&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)))});NA(()=>!u.value,()=>{xt(()=>t[e],d=>{o.value=d})});const h=we({get(){const d=t[e];return r(u.value?d:o.value)},set(d){const m=s(d),y=Te(u.value?t[e]:o.value);y===m||r(y)===d||(o.value=m,i==null||i.emit(`update:${e}`,m))}});return Object.defineProperty(h,"externalValue",{get:()=>u.value?t[e]:o.value}),h}const VA={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"},ariaLabel:{previousMonth:"Previous month",nextMonth:"Next month",selectYear:"Select year",previousYear:"Previous year",nextYear:"Next year",selectMonth:"Select month",selectDate:"{0}",currentDate:"Today, {0}"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time",hour:"Hour",minute:"Minute",second:"Second",notAllowed:"Value is not allowed"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"},rules:{required:"This field is required",email:"Please enter a valid email",number:"This field can only contain numbers",integer:"This field can only contain integer values",capital:"This field can only contain uppercase letters",maxLength:"You must enter a maximum of {0} characters",minLength:"You must enter a minimum of {0} characters",strictLength:"The length of the entered field is invalid",exclude:"The {0} character is not allowed",notEmpty:"Please choose at least one value",pattern:"Invalid format"},command:{search:"Type a command or search..."},hotkey:{then:"then",ctrl:"Ctrl",command:"Command",space:"Space",shift:"Shift",alt:"Alt",enter:"Enter",escape:"Escape",upArrow:"Up Arrow",downArrow:"Down Arrow",leftArrow:"Left Arrow",rightArrow:"Right Arrow",backspace:"Backspace",option:"Option",plus:"plus",shortcut:"Keyboard shortcut: {0}",or:"or"},video:{play:"Play",pause:"Pause",seek:"Seek",volume:"Volume",showVolume:"Show volume control",mute:"Mute",unmute:"Unmute",enterFullscreen:"Full screen",exitFullscreen:"Exit full screen"},colorPicker:{ariaLabel:{eyedropper:"Select color with eyedropper",hueSlider:"Hue",alphaSlider:"Alpha",redInput:"Red value",greenInput:"Green value",blueInput:"Blue value",alphaInput:"Alpha value",hueInput:"Hue value",saturationInput:"Saturation value",lightnessInput:"Lightness value",hexInput:"HEX value",hexaInput:"HEX with alpha value",changeFormat:"Change color format"}}},Zd="$vuetify.",ep=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[Number(r)])),G_=(t,e,n)=>(r,...s)=>{if(!r.startsWith(Zd))return ep(r,s);const i=r.replace(Zd,""),o=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let l=Ld(o,i,null);return l||(`${r}${t.value}`,l=Ld(c,i,null)),l||(l=r),typeof l!="string"&&(l=r),ep(l,s)};function ih(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function z_(t,e){return ih(t,e)(.1).includes(",")?",":"."}function Cl(t,e,n){const r=OA(t,e,t[e]??n.value);return r.value=t[e]??n.value,xt(n,s=>{t[e]==null&&(r.value=n.value)}),r}function K_(t){return e=>{const n=Cl(e,"locale",t.current),r=Cl(e,"fallback",t.fallback),s=Cl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,decimalSeparator:ct(()=>z_(n,r)),t:G_(n,r,s),n:ih(n,r),provide:K_({current:n,fallback:r,messages:s})}}}function xA(t){const e=Yt((t==null?void 0:t.locale)??"en"),n=Yt((t==null?void 0:t.fallback)??"en"),r=Mt({en:VA,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,decimalSeparator:ct(()=>(t==null?void 0:t.decimalSeparator)??z_(e,n)),t:G_(e,n,r),n:ih(e,n),provide:K_({current:e,fallback:n,messages:r})}}const Ua=Symbol.for("vuetify:locale");function MA(t){return t.name!=null}function LA(t){const e=t!=null&&t.adapter&&MA(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:xA(t),n=UA(e,t);return{...e,...n}}function XN(){const t=Ue(Ua);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function FA(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function UA(t,e){const n=Mt((e==null?void 0:e.rtl)??FA()),r=we(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ct(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Q_(){const t=Ue(Ua);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}function bo(t){const e=t.slice(-2).toUpperCase();switch(!0){case t==="GB-alt-variant":return{firstDay:0,firstWeekSize:4};case t==="001":return{firstDay:1,firstWeekSize:1};case`AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(e):return{firstDay:0,firstWeekSize:1};case`AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(e):return{firstDay:1,firstWeekSize:1};case`AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(e):return{firstDay:1,firstWeekSize:4};case"AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(e):return{firstDay:6,firstWeekSize:1};case e==="MV":return{firstDay:5,firstWeekSize:1};case e==="PT":return{firstDay:0,firstWeekSize:4};default:return null}}function $A(t,e,n){var h;const r=[];let s=[];const i=Y_(t),o=J_(t),c=n??((h=bo(e))==null?void 0:h.firstDay)??0,l=(i.getDay()-c+7)%7,u=(o.getDay()-c+7)%7;for(let d=0;d<l;d++){const m=new Date(i);m.setDate(m.getDate()-(l-d)),s.push(m)}for(let d=1;d<=o.getDate();d++){const m=new Date(t.getFullYear(),t.getMonth(),d);s.push(m),s.length===7&&(r.push(s),s=[])}for(let d=1;d<7-u;d++){const m=new Date(o);m.setDate(m.getDate()+d),s.push(m)}return s.length>0&&r.push(s),r}function Bi(t,e,n){var i;let r=(n??((i=bo(e))==null?void 0:i.firstDay)??0)%7;[0,1,2,3,4,5,6].includes(r)||(r=0);const s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function BA(t,e){var s;const n=new Date(t),r=((((s=bo(e))==null?void 0:s.firstDay)??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function Y_(t){return new Date(t.getFullYear(),t.getMonth(),1)}function J_(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function jA(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const HA=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function X_(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(HA.test(t))return jA(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const tp=new Date(2e3,0,2);function qA(t,e,n){var s;const r=e??((s=bo(t))==null?void 0:s.firstDay)??0;return V_(7).map(i=>{const o=new Date(tp);return o.setDate(tp.getDate()+r+i),new Intl.DateTimeFormat(t,{weekday:n??"narrow"}).format(o)})}function WA(t,e,n,r){const s=X_(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"short",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const c=s.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${c} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric"};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};break;case"fullDateTime12h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric"},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");case"keyboardDateTime12h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!0},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");case"keyboardDateTime24h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function GA(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Bd(String(n.getMonth()+1),2,"0"),i=Bd(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function zA(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function KA(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function QA(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function es(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function YA(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function JA(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function no(t){return t.getFullYear()}function XA(t){return t.getMonth()}function ZA(t,e,n,r){const s=bo(e),i=n??(s==null?void 0:s.firstDay)??0,o=(s==null?void 0:s.firstWeekSize)??1;return r!==void 0?eb(t,e,i,r):tb(t,e,i,o)}function eb(t,e,n,r){const s=(7+r-n)%7,i=Bi(t,e,n),o=es(i,6);function c(m){return(7+new Date(m,0,1).getDay()-n)%7}let l=no(i);l<no(o)&&c(l+1)<=s&&l++;const u=new Date(l,0,1),h=c(l),d=h<=s?es(u,-h):es(u,7-h);return 1+ja(oh(i),ro(d),"weeks")}function tb(t,e,n,r){const s=Bi(t,e,n),i=es(Bi(t,e,n),6);function o(d){const m=new Date(d,0,1);return 7-ja(m,Bi(m,e,n),"days")}let c=no(s);c<no(i)&&o(c+1)>=r&&c++;const l=new Date(c,0,1),u=o(c),h=u>=r?es(l,u-7):es(l,u);return 1+ja(oh(s),ro(h),"weeks")}function nb(t){return t.getDate()}function rb(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function sb(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function ib(t){return t.getHours()}function ob(t){return t.getMinutes()}function ab(t){return new Date(t.getFullYear(),0,1)}function cb(t){return new Date(t.getFullYear(),11,31)}function lb(t,e){return Ba(t,e[0])||Ba(t,e[1])||$a(t,e[0])&&fb(t,e[1])}function ub(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function $a(t,e){return t.getTime()>e.getTime()}function hb(t,e){return $a(ro(t),ro(e))}function fb(t,e){return t.getTime()<e.getTime()}function Ba(t,e){return t.getTime()===e.getTime()}function db(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function pb(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function mb(t,e){return t.getFullYear()===e.getFullYear()}function ja(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function gb(t,e){const n=new Date(t);return n.setHours(e),n}function _b(t,e){const n=new Date(t);return n.setMinutes(e),n}function yb(t,e){const n=new Date(t);return n.setMonth(e),n}function vb(t,e){const n=new Date(t);return n.setDate(e),n}function Eb(t,e){const n=new Date(t);return n.setFullYear(e),n}function ro(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function oh(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class Tb{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return X_(e)}toJsDate(e){return e}toISO(e){return GA(this,e)}parseISO(e){return zA(e)}addMinutes(e,n){return KA(e,n)}addHours(e,n){return QA(e,n)}addDays(e,n){return es(e,n)}addWeeks(e,n){return YA(e,n)}addMonths(e,n){return JA(e,n)}getWeekArray(e,n){const r=n!==void 0?Number(n):void 0;return $A(e,this.locale,r)}startOfWeek(e,n){const r=n!==void 0?Number(n):void 0;return Bi(e,this.locale,r)}endOfWeek(e){return BA(e,this.locale)}startOfMonth(e){return Y_(e)}endOfMonth(e){return J_(e)}format(e,n){return WA(e,n,this.locale,this.formats)}isEqual(e,n){return Ba(e,n)}isValid(e){return ub(e)}isWithinRange(e,n){return lb(e,n)}isAfter(e,n){return $a(e,n)}isAfterDay(e,n){return hb(e,n)}isBefore(e,n){return!$a(e,n)&&!Ba(e,n)}isSameDay(e,n){return db(e,n)}isSameMonth(e,n){return pb(e,n)}isSameYear(e,n){return mb(e,n)}setMinutes(e,n){return _b(e,n)}setHours(e,n){return gb(e,n)}setMonth(e,n){return yb(e,n)}setDate(e,n){return vb(e,n)}setYear(e,n){return Eb(e,n)}getDiff(e,n,r){return ja(e,n,r)}getWeekdays(e,n){const r=e!==void 0?Number(e):void 0;return qA(this.locale,r,n)}getYear(e){return no(e)}getMonth(e){return XA(e)}getWeek(e,n,r){const s=n!==void 0?Number(n):void 0,i=r!==void 0?Number(r):void 0;return ZA(e,this.locale,s,i)}getDate(e){return nb(e)}getNextMonth(e){return rb(e)}getPreviousMonth(e){return sb(e)}getHours(e){return ib(e)}getMinutes(e){return ob(e)}startOfDay(e){return ro(e)}endOfDay(e){return oh(e)}startOfYear(e){return ab(e)}endOfYear(e){return cb(e)}}const wb=Symbol.for("vuetify:date-options"),np=Symbol.for("vuetify:date-adapter");function Ib(t,e){const n=wt({adapter:Tb,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Ab(n,e)}}function Ab(t,e){const n=Ot(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return xt(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const ZN=["sm","md","lg","xl","xxl"],au=Symbol.for("vuetify:display"),rp={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:840,lg:1145,xl:1545,xxl:2138}},bb=(t=rp)=>wt(rp,t);function sp(t){return kt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function ip(t){return kt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function op(t){const e=kt&&!t?window.navigator.userAgent:"ssr";function n(R){return!!e.match(R)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),c=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),h=n(/opera/i),d=n(/win/i),m=n(/mac/i),y=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:c,edge:l,firefox:u,opera:h,win:d,mac:m,linux:y,touch:qI,ssr:e==="ssr"}}function Sb(t,e){const{thresholds:n,mobileBreakpoint:r}=bb(t),s=Yt(ip(e)),i=Yt(op(e)),o=Ot({}),c=Yt(sp(e));function l(){s.value=ip(),c.value=sp()}function u(){l(),i.value=op()}return vc(()=>{const h=c.value<n.sm,d=c.value<n.md&&!h,m=c.value<n.lg&&!(d||h),y=c.value<n.xl&&!(m||d||h),R=c.value<n.xxl&&!(y||m||d||h),P=c.value>=n.xxl,O=h?"xs":d?"sm":m?"md":y?"lg":R?"xl":"xxl",k=typeof r=="number"?r:n[r],N=c.value<k;o.xs=h,o.sm=d,o.md=m,o.lg=y,o.xl=R,o.xxl=P,o.smAndUp=!h,o.mdAndUp=!(h||d),o.lgAndUp=!(h||d||m),o.xlAndUp=!(h||d||m||y),o.smAndDown=!(m||y||R||P),o.mdAndDown=!(y||R||P),o.lgAndDown=!(R||P),o.xlAndDown=!P,o.name=O,o.height=s.value,o.width=c.value,o.mobile=N,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),kt&&(window.addEventListener("resize",l,{passive:!0}),mc(()=>{window.removeEventListener("resize",l)},!0)),{...Sg(o),update:u,ssr:!!e}}const eO=Nr({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function tO(t={mobile:null},e=TA()){const n=Ue(au);if(!n)throw new Error("Could not find Vuetify display injection");const r=we(()=>t.mobile?!0:typeof t.mobileBreakpoint=="number"?n.width.value<t.mobileBreakpoint:t.mobileBreakpoint?n.width.value<n.thresholds.value[t.mobileBreakpoint]:t.mobile===null?n.mobile.value:!1);return{...n,displayClasses:ct(()=>e?{[`${e}--mobile`]:r.value}:{}),mobile:r}}const Z_=Symbol.for("vuetify:goto");function ey(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:SA}}function Rb(t){return ah(t)??(document.scrollingElement||document.body)}function ah(t){return typeof t=="string"?document.querySelector(t):x_(t)}function Pl(t,e,n){if(typeof t=="number")return e&&n?-t:t;let r=ah(t),s=0;for(;r;)s+=e?r.offsetLeft:r.offsetTop,r=r.offsetParent;return s}function Cb(t,e){return{rtl:e.isRtl,options:wt(ey(),t)}}async function ap(t,e,n,r){const s=n?"scrollLeft":"scrollTop",i=wt((r==null?void 0:r.options)??ey(),e),o=r==null?void 0:r.rtl.value,c=(typeof t=="number"?t:ah(t))??0,l=i.container==="parent"&&c instanceof HTMLElement?c.parentElement:Rb(i.container),u=WI()?i.patterns.instant:typeof i.easing=="function"?i.easing:i.patterns[i.easing];if(!u)throw new TypeError(`Easing function "${i.easing}" not found.`);let h;if(typeof c=="number")h=Pl(c,n,o);else if(h=Pl(c,n,o)-Pl(l,n,o),i.layout){const R=window.getComputedStyle(c).getPropertyValue("--v-layout-top");R&&(h-=parseInt(R,10))}h+=i.offset,h=Pb(l,h,!!o,!!n);const d=l[s]??0;if(h===d)return Promise.resolve(h);const m=performance.now();return new Promise(y=>requestAnimationFrame(function R(P){const k=(P-m)/i.duration,N=Math.floor(d+(h-d)*u(nh(k,0,1)));if(l[s]=N,k>=1&&Math.abs(N-l[s])<10)return y(h);if(k>2)return y(l[s]);requestAnimationFrame(R)}))}function nO(t={}){const e=Ue(Z_),{isRtl:n}=Q_();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const r={...e,rtl:ct(()=>e.rtl.value||n.value)};async function s(i,o){return ap(i,wt(t,o),!1,r)}return s.horizontal=async(i,o)=>ap(i,wt(t,o),!0,r),s}function Pb(t,e,n,r){const{scrollWidth:s,scrollHeight:i}=t,[o,c]=t===document.scrollingElement?[window.innerWidth,window.innerHeight]:[t.offsetWidth,t.offsetHeight];let l,u;return r?n?(l=-(s-o),u=0):(l=0,u=s-o):(l=0,u=i+-c),nh(e,l,u)}const so=Symbol.for("vuetify:theme"),Db=Nr({theme:String},"theme");function cp(){return{defaultTheme:"system",prefix:"v-",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"shadow-color":"#000000","high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#EEEEEE","theme-on-kbd":"#000000","theme-code":"#F5F5F5","theme-on-code":"#000000","theme-on-dark":"#FFF","theme-on-light":"#000","elevation-overlay-color":"black","elevation-overlay-opacity-step":"2%"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#c8c8c8","on-surface-variant":"#000000",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"shadow-color":"#000000","high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#424242","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC","theme-on-dark":"#FFF","theme-on-light":"#000","elevation-overlay-color":"white","elevation-overlay-opacity-step":"2%"}}},stylesheetId:"vuetify-theme-stylesheet",scoped:!1,utilities:!0}}function kb(t=cp()){const e=cp();return t?wt(e,t):{...e,isDisabled:!0}}function Hr(t,e,n,r){t.push(`${xb(e,r)} {
`,...n.map(s=>`  ${s};
`),`}
`)}function lp(t,e){const n=t.dark?2:1,r=t.dark?1:2,s=[];for(const[i,o]of Object.entries(t.colors)){const c=Ln(o);s.push(`--${e}theme-${i}: ${c.r},${c.g},${c.b}`+(c.a==null?"":`,${c.a}`)),i.startsWith("on-")||s.push(`--${e}theme-${i}-overlay-multiplier: ${yA(o)>.18?n:r}`)}for(const[i,o]of Object.entries(t.variables)){const c=typeof o=="string"&&o.startsWith("#")?Ln(o):void 0,l=c?`${c.r}, ${c.g}, ${c.b}`:void 0;s.push(`--${e}${i}: ${l??o}`)}return s}function Nb(t,e,n){const r={};if(n)for(const s of["lighten","darken"]){const i=s==="lighten"?gA:_A;for(const o of V_(n[s],1))r[`${t}-${s}-${o}`]=dA(i(Ln(e),o))}return r}function Ob(t,e){if(!e)return{};let n={};for(const r of e.colors){const s=t[r];s&&(n={...n,...Nb(r,s,e)})}return n}function Vb(t,e){const n={};for(const r of Object.keys(t)){if(r.startsWith("on-")||t[`on-${r}`])continue;const s=`on-${r}`,i=Ln(t[r]);n[s]=vA(i)?e["theme-on-dark"]:e["theme-on-light"]}return n}function xb(t,e){if(!e)return t;const n=`:where(${e})`;return t===":root"?n:`${n} ${t}`}function Mb(t,e,n){const r=Lb(t,e);r&&(r.innerHTML=n)}function Lb(t,e){if(!kt)return null;let n=document.getElementById(t);return n||(n=document.createElement("style"),n.id=t,n.type="text/css",e&&n.setAttribute("nonce",e),document.head.appendChild(n)),n}function Fb(t){const e=kb(t),n=Yt(e.defaultTheme),r=Mt(e.themes),s=Yt("light"),i=we({get(){return n.value==="system"?s.value:n.value},set(k){n.value=k}}),o=we(()=>{const k={};for(const[N,M]of Object.entries(r.value)){const q=M.dark||N==="dark"?r.value.dark:r.value.light,G=wt(q,M),z={...G.colors,...Ob(G.colors,e.variations)};k[N]={...G,colors:{...z,...Vb(z,G.variables)}}}return k}),c=ct(()=>o.value[i.value]),l=ct(()=>n.value==="system"),u=we(()=>{var M;const k=[],N=e.scoped?e.prefix:"";k.push(`@layer theme-base {
`),(M=c.value)!=null&&M.dark&&Hr(k,":root",["color-scheme: dark"],e.scope),Hr(k,":root",lp(c.value,e.prefix),e.scope);for(const[q,G]of Object.entries(o.value))Hr(k,`.${e.prefix}theme--${q}`,[`color-scheme: ${G.dark?"dark":"normal"}`,...lp(G,e.prefix)],e.scope);if(k.push(`}
`),e.utilities){const q=[],G=[],z=new Set(Object.values(o.value).flatMap(E=>Object.keys(E.colors)));for(const E of z)E.startsWith("on-")?Hr(G,`.${E}`,[`color: rgb(var(--${e.prefix}theme-${E}))`],e.scope):(Hr(q,`.${N}bg-${E}`,[`--${e.prefix}theme-overlay-multiplier: var(--${e.prefix}theme-${E}-overlay-multiplier)`,`background-color: rgb(var(--${e.prefix}theme-${E}))`,`color: rgb(var(--${e.prefix}theme-on-${E}))`],e.scope),Hr(G,`.${N}text-${E}`,[`color: rgb(var(--${e.prefix}theme-${E}))`],e.scope),Hr(G,`.${N}border-${E}`,[`--${e.prefix}border-color: var(--${e.prefix}theme-${E})`],e.scope));k.push(`@layer theme-background {
`,...q.map(E=>`  ${E}`),`}
`,`@layer theme-foreground {
`,...G.map(E=>`  ${E}`),`}
`)}return`@layer vuetify-utilities {
`+k.map(q=>`  ${q}`).join("")+`
}`}),h=ct(()=>e.isDisabled?void 0:`${e.prefix}theme--${i.value}`),d=ct(()=>Object.keys(o.value));if(O_){let N=function(){s.value=k.matches?"dark":"light"};const k=window.matchMedia("(prefers-color-scheme: dark)");N(),k.addEventListener("change",N,{passive:!0}),$u()&&mc(()=>{k.removeEventListener("change",N)})}function m(k){if(e.isDisabled)return;const N=k._context.provides.usehead;if(N){let M=function(){return{style:[{textContent:u.value,id:e.stylesheetId,nonce:e.cspNonce||!1,tagPosition:"bodyOpen"}]}};if(N.push){const q=N.push(M);kt&&xt(u,()=>{q.patch(M)})}else kt?(N.addHeadObjs(ct(M)),vc(()=>N.updateDOM())):N.addHeadObjs(M())}else{let M=function(){Mb(e.stylesheetId,e.cspNonce,u.value)};kt?xt(u,M,{immediate:!0}):M()}}function y(k){k!=="system"&&!d.value.includes(k)||(i.value=k)}function R(k=d.value){const N=k.indexOf(i.value),M=N===-1?0:(N+1)%k.length;y(k[M])}function P(k=["light","dark"]){R(k)}const O=new Proxy(i,{get(k,N){return Reflect.get(k,N)},set(k,N,M){return N==="value"&&HI(`theme.global.name.value = ${M}`,`theme.change('${M}')`),Reflect.set(k,N,M)}});return{install:m,change:y,cycle:R,toggle:P,isDisabled:e.isDisabled,isSystem:l,name:i,themes:r,current:c,computedThemes:o,prefix:e.prefix,themeClasses:h,styles:u,global:{name:O,current:c}}}function Ub(t){Yn("provideTheme");const e=Ue(so,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ct(()=>t.theme??e.name.value),i={...e,name:n,current:ct(()=>e.themes.value[n.value]),themeClasses:ct(()=>e.isDisabled?void 0:`${e.prefix}theme--${n.value}`)};return rn(so,i),i}function rO(){Yn("useTheme");const t=Ue(so,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function $b(t,e="content"){const n=JI(),r=Mt();if(kt){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(e==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});Ic(()=>{s.disconnect()}),xt(()=>n.el,(i,o)=>{o&&(s.unobserve(o),r.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:n,contentRect:ba(r)}}const Ha=Symbol.for("vuetify:layout"),ty=Symbol.for("vuetify:layout-item"),up=1e3,Bb=Nr({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),sO=Nr({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function iO(){const t=Ue(Ha);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function oO(t){const e=Ue(Ha);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${sw()}`,r=Yn("useLayoutItem");rn(ty,{id:n});const s=Yt(!1);Wg(()=>s.value=!0),qg(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=e.register(r,{...t,active:we(()=>s.value?!1:t.active.value),id:n});return Ic(()=>e.unregister(n)),{layoutItemStyles:i,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const jb=(t,e,n,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of t){const c=e.get(o),l=n.get(o),u=r.get(o);if(!c||!l||!u)continue;const h={...s,[c.value]:parseInt(s[c.value],10)+(u.value?parseInt(l.value,10):0)};i.push({id:o,layer:h}),s=h}return i};function Hb(t){const e=Ue(Ha,null),n=we(()=>e?e.rootZIndex.value-100:up),r=Mt([]),s=Ot(new Map),i=Ot(new Map),o=Ot(new Map),c=Ot(new Map),l=Ot(new Map),{resizeRef:u,contentRect:h}=$b(),d=we(()=>{const z=new Map,E=t.overlaps??[];for(const v of E.filter(g=>g.includes(":"))){const[g,I]=v.split(":");if(!r.value.includes(g)||!r.value.includes(I))continue;const A=s.get(g),b=s.get(I),T=i.get(g),de=i.get(I);!A||!b||!T||!de||(z.set(I,{position:A.value,amount:parseInt(T.value,10)}),z.set(g,{position:b.value,amount:-parseInt(de.value,10)}))}return z}),m=we(()=>{const z=[...new Set([...o.values()].map(v=>v.value))].sort((v,g)=>v-g),E=[];for(const v of z){const g=r.value.filter(I=>{var A;return((A=o.get(I))==null?void 0:A.value)===v});E.push(...g)}return jb(E,s,i,c)}),y=we(()=>!Array.from(l.values()).some(z=>z.value)),R=we(()=>m.value[m.value.length-1].layer),P=ct(()=>({"--v-layout-left":Xo(R.value.left),"--v-layout-right":Xo(R.value.right),"--v-layout-top":Xo(R.value.top),"--v-layout-bottom":Xo(R.value.bottom),...y.value?void 0:{transition:"none"}})),O=we(()=>m.value.slice(1).map(({id:z},E)=>{const{layer:v}=m.value[E],g=i.get(z),I=s.get(z);return{id:z,...v,size:Number(g.value),position:I.value}})),k=z=>O.value.find(E=>E.id===z),N=Yn("createLayout"),M=Yt(!1);return Ju(()=>{M.value=!0}),rn(Ha,{register:(z,{id:E,order:v,position:g,layoutSize:I,elementSize:A,active:b,disableTransitions:T,absolute:de})=>{o.set(E,v),s.set(E,g),i.set(E,I),c.set(E,b),T&&l.set(E,T);const be=Ci(ty,N==null?void 0:N.vnode).indexOf(z);be>-1?r.value.splice(be,0,E):r.value.push(E);const le=we(()=>O.value.findIndex(Xe=>Xe.id===E)),me=we(()=>n.value+m.value.length*2-le.value*2),ft=we(()=>{const Xe=g.value==="left"||g.value==="right",qe=g.value==="right",Xt=g.value==="bottom",At=A.value??I.value,Lt=At===0?"%":"px",Ze={[g.value]:0,zIndex:me.value,transform:`translate${Xe?"X":"Y"}(${(b.value?0:-(At===0?100:At))*(qe||Xt?-1:1)}${Lt})`,position:de.value||n.value!==up?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!M.value)return Ze;const x=O.value[le.value],J=d.value.get(E);return J&&(x[J.position]+=J.amount),{...Ze,height:Xe?`calc(100% - ${x.top}px - ${x.bottom}px)`:A.value?`${A.value}px`:void 0,left:qe?void 0:`${x.left}px`,right:qe?`${x.right}px`:void 0,top:g.value!=="bottom"?`${x.top}px`:void 0,bottom:g.value!=="top"?`${x.bottom}px`:void 0,width:Xe?A.value?`${A.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),Wt=we(()=>({zIndex:me.value-1}));return{layoutItemStyles:ft,layoutItemScrimStyles:Wt,zIndex:me}},unregister:z=>{o.delete(z),s.delete(z),i.delete(z),c.delete(z),l.delete(z),r.value=r.value.filter(E=>E!==z)},mainRect:R,mainStyles:P,getLayoutItem:k,items:O,layoutRect:h,rootZIndex:n}),{layoutClasses:ct(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),layoutStyles:ct(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0})),getLayoutItem:k,items:O,layoutRect:h,layoutRef:u}}function ny(t={}){const{blueprint:e,...n}=t,r=wt(e,n),{aliases:s={},components:i={},directives:o={}}=r,c=Ki();return c.run(()=>{const l=IA(r.defaults),u=Sb(r.display,r.ssr),h=Fb(r.theme),d=kA(r.icons),m=LA(r.locale),y=Ib(r.date,m),R=Cb(r.goTo,m);function P(k){for(const M in o)k.directive(M,o[M]);for(const M in i)k.component(M,i[M]);for(const M in s)k.component(M,Ao({...s[M],name:M,aliasName:s[M].name}));const N=Ki();if(N.run(()=>{h.install(k)}),k.onUnmount(()=>N.stop()),k.provide(Us,l),k.provide(au,u),k.provide(so,h),k.provide(ou,d),k.provide(Ua,m),k.provide(wb,y.options),k.provide(np,y.instance),k.provide(Z_,R),kt&&r.ssr)if(k.$nuxt)k.$nuxt.hook("app:suspense:resolve",()=>{u.update()});else{const{mount:M}=k;k.mount=(...q)=>{const G=M(...q);return wo(()=>u.update()),k.mount=M,G}}k.mixin({computed:{$vuetify(){return Ot({defaults:vs.call(this,Us),display:vs.call(this,au),theme:vs.call(this,so),icons:vs.call(this,ou),locale:vs.call(this,Ua),date:vs.call(this,np)})}}})}function O(){c.stop()}return{install:P,unmount:O,defaults:l,display:u,theme:h,icons:d,locale:m,date:y,goTo:R}})}const qb="4.0.3";ny.version=qb;function vs(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const Wb="modulepreload",Gb=function(t){return"/friend-personality-analyzer/"+t},hp={},Ai=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=Gb(l),l in hp)return;hp[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Wb,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Ts=typeof document<"u";function ry(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ry(t.default)}const Re=Object.assign;function Dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const ji=()=>{},ln=Array.isArray;function fp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let He=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const sy=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function $s(t,e){return Re(new Error,{type:t,[sy]:!0},e)}function kn(t,e){return t instanceof Error&&sy in t&&(e==null||!!(t.type&e))}const Kb=["params","query","hash"];function Qb(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Kb)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Yb=Symbol(""),dp=Symbol(""),Dc=Symbol(""),ch=Symbol(""),cu=Symbol("");function aO(){return Ue(Dc)}function cO(t){return Ue(ch)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const iy=/#/g,Jb=/&/g,Xb=/\//g,Zb=/=/g,e0=/\?/g,oy=/\+/g,t0=/%5B/g,n0=/%5D/g,ay=/%5E/g,r0=/%60/g,cy=/%7B/g,s0=/%7C/g,ly=/%7D/g,i0=/%20/g;function lh(t){return t==null?"":encodeURI(""+t).replace(s0,"|").replace(t0,"[").replace(n0,"]")}function o0(t){return lh(t).replace(cy,"{").replace(ly,"}").replace(ay,"^")}function lu(t){return lh(t).replace(oy,"%2B").replace(i0,"+").replace(iy,"%23").replace(Jb,"%26").replace(r0,"`").replace(cy,"{").replace(ly,"}").replace(ay,"^")}function a0(t){return lu(t).replace(Zb,"%3D")}function c0(t){return lh(t).replace(iy,"%23").replace(e0,"%3F")}function l0(t){return c0(t).replace(Xb,"%2F")}function io(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const u0=/\/$/,h0=t=>t.replace(u0,"");function kl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=m0(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:io(o)}}function f0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Bs(e.matched[r],n.matched[s])&&uy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!p0(t[n],e[n]))return!1;return!0}function p0(t,e){return ln(t)?mp(t,e):ln(e)?mp(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function mp(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function m0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let uu=function(t){return t.pop="pop",t.push="push",t}({}),Nl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function g0(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),h0(t)}const _0=/^[^#]+#/;function y0(t,e){return t.replace(_0,"#")+e}function v0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kc=()=>({left:window.scrollX,top:window.scrollY});function E0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=v0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gp(t,e){return(history.state?history.state.position-e:-1)+t}const hu=new Map;function T0(t,e){hu.set(t,e)}function w0(t){const e=hu.get(t);return hu.delete(t),e}function I0(t){return typeof t=="string"||t&&typeof t=="object"}function hy(t){return typeof t=="string"||typeof t=="symbol"}function A0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(oy," "),i=s.indexOf("="),o=io(i<0?s:s.slice(0,i)),c=i<0?null:io(s.slice(i+1));if(o in e){let l=e[o];ln(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function _p(t){let e="";for(let n in t){const r=t[n];if(n=a0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&lu(s)):[r&&lu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function b0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l($s(He.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):I0(m)?l($s(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Ol(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ry(l)){const u=(l.__vccOpts||l)[e];u&&i.push(ur(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=zb(h)?h.default:h;o.mods[c]=h,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&ur(m,n,r,o,c,s)()}))}}return i}function S0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Bs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Bs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let R0=()=>location.protocol+"//"+location.host;function fy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),pp(c,"")}return pp(n,t)+r+s}function C0(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=fy(t,location),R=n.value,P=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===R){o=null;return}O=P?m.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,R,{delta:O,type:uu.pop,direction:O?O>0?Nl.forward:Nl.back:Nl.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(y),y}function h(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Re({},m.state,{scroll:kc()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:d}}function yp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kc():null}}function P0(t){const{history:e,location:n}=window,r={value:fy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:R0()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[h?"replace":"assign"](m)}}function o(l,u){i(l,Re({},e.state,yp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const h=Re({},s.value,e.state,{forward:l,scroll:kc()});i(h.current,h,!0),i(l,Re({},yp(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function D0(t){t=g0(t);const e=P0(t),n=C0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:y0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function k0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),D0(t)}let Kr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var tt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(tt||{});const N0={type:Kr.Static,value:""},O0=/[a-zA-Z0-9_]/;function V0(t){if(!t)return[[]];if(t==="/")return[[N0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=tt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function d(){u&&(n===tt.Static?i.push({type:Kr.Static,value:u}):n===tt.Param||n===tt.ParamRegExp||n===tt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Kr.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==tt.ParamRegExp){r=n,n=tt.EscapeNext;continue}switch(n){case tt.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=tt.Param):m();break;case tt.EscapeNext:m(),n=r;break;case tt.Param:l==="("?n=tt.ParamRegExp:O0.test(l)?m():(d(),n=tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case tt.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=tt.ParamRegExpEnd:h+=l;break;case tt.ParamRegExpEnd:d(),n=tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===tt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const vp="[^/]+?",x0={sensitive:!1,strict:!1,start:!0,end:!0};var Rt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Rt||{});const M0=/[.+*?^${}()[\]/\\]/g;function L0(t,e){const n=Re({},x0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[Rt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let y=Rt.Segment+(n.sensitive?Rt.BonusCaseSensitive:0);if(m.type===Kr.Static)d||(s+="/"),s+=m.value.replace(M0,"\\$&"),y+=Rt.Static;else if(m.type===Kr.Param){const{value:R,repeatable:P,optional:O,regexp:k}=m;i.push({name:R,repeatable:P,optional:O});const N=k||vp;if(N!==vp){y+=Rt.BonusCustomRegExp;try{new RegExp(`(${N})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+q.message)}}let M=P?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(M=O&&u.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),s+=M,y+=Rt.Dynamic,O&&(y+=Rt.BonusOptional),P&&(y+=Rt.BonusRepeatable),N===".*"&&(y+=Rt.BonusWildcard)}h.push(y)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Rt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const y=h[m]||"",R=i[m-1];d[R.name]=y&&R.repeatable?y.split("/"):y}return d}function l(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const y of m)if(y.type===Kr.Static)h+=y.value;else if(y.type===Kr.Param){const{value:R,repeatable:P,optional:O}=y,k=R in u?u[R]:"";if(ln(k)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=ln(k)?k.join("/"):k;if(!N)if(O)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function F0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Rt.Static+Rt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rt.Static+Rt.Segment?1:-1:0}function dy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=F0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ep(r))return 1;if(Ep(s))return-1}return s.length-r.length}function Ep(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const U0={strict:!1,end:!0,sensitive:!1};function $0(t,e,n){const r=L0(V0(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function B0(t,e){const n=[],r=new Map;e=fp(U0,e);function s(d){return r.get(d)}function i(d,m,y){const R=!y,P=wp(d);P.aliasOf=y&&y.record;const O=fp(e,d),k=[P];if("alias"in d){const q=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of q)k.push(wp(Re({},P,{components:y?y.record.components:P.components,path:G,aliasOf:y?y.record:P})))}let N,M;for(const q of k){const{path:G}=q;if(m&&G[0]!=="/"){const z=m.record.path,E=z[z.length-1]==="/"?"":"/";q.path=m.record.path+(G&&E+G)}if(N=$0(q,m,O),y?y.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),R&&d.name&&!Ip(N)&&o(d.name)),py(N)&&l(N),P.children){const z=P.children;for(let E=0;E<z.length;E++)i(z[E],N,y&&y.children[E])}y=y||N}return M?()=>{o(M)}:ji}function o(d){if(hy(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const m=q0(d,n);n.splice(m,0,d),d.record.name&&!Ip(d)&&r.set(d.record.name,d)}function u(d,m){let y,R={},P,O;if("name"in d&&d.name){if(y=r.get(d.name),!y)throw $s(He.MATCHER_NOT_FOUND,{location:d});O=y.record.name,R=Re(Tp(m.params,y.keys.filter(M=>!M.optional).concat(y.parent?y.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&Tp(d.params,y.keys.map(M=>M.name))),P=y.stringify(R)}else if(d.path!=null)P=d.path,y=n.find(M=>M.re.test(P)),y&&(R=y.parse(P),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!y)throw $s(He.MATCHER_NOT_FOUND,{location:d,currentLocation:m});O=y.record.name,R=Re({},m.params,d.params),P=y.stringify(R)}const k=[];let N=y;for(;N;)k.unshift(N.record),N=N.parent;return{name:O,path:P,params:R,matched:k,meta:H0(k)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function Tp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:j0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function j0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ip(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function H0(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function q0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;dy(t,e[i])<0?r=i:n=i+1}const s=W0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function W0(t){let e=t;for(;e=e.parent;)if(py(e)&&dy(t,e)===0)return e}function py({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ap(t){const e=Ue(Dc),n=Ue(ch),r=we(()=>{const l=Qt(t.to);return e.resolve(l)}),s=we(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Bs.bind(null,h));if(m>-1)return m;const y=bp(l[u-2]);return u>1&&bp(h)===y&&d[d.length-1].path!==y?d.findIndex(Bs.bind(null,l[u-2])):m}),i=we(()=>s.value>-1&&Y0(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&uy(n.params,r.value.params));function c(l={}){if(Q0(l)){const u=e[Qt(t.replace)?"replace":"push"](Qt(t.to)).catch(ji);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function G0(t){return t.length===1?t[0]:t}const z0=Ec({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ap,setup(t,{slots:e}){const n=Ot(Ap(t)),{options:r}=Ue(Dc),s=we(()=>({[Sp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&G0(e.default(n));return t.custom?i:Rc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),K0=z0;function Q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sp=(t,e,n)=>t??e??n,J0=Ec({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(cu),s=we(()=>t.route||r.value),i=Ue(dp,0),o=we(()=>{let u=Qt(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),c=we(()=>s.value.matched[o.value]);rn(dp,we(()=>o.value+1)),rn(Yb,c),rn(cu,s);const l=Mt();return xt(()=>[l.value,c.value,t.name],([u,h,d],[m,y,R])=>{h&&(h.instances[d]=u,y&&y!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=y.leaveGuards),h.updateGuards.size||(h.updateGuards=y.updateGuards))),u&&h&&(!y||!Bs(h,y)||!m)&&(h.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=c.value,m=d&&d.components[h];if(!m)return Rp(n.default,{Component:m,route:u});const y=d.props[h],R=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=Rc(m,Re({},R,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Rp(n.default,{Component:O,route:u})||O}}});function Rp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const X0=J0;function Z0(t){const e=B0(t.routes,t),n=t.parseQuery||A0,r=t.stringifyQuery||_p,s=t.history,i=bi(),o=bi(),c=bi(),l=Yt(ir);let u=ir;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Dl.bind(null,x=>""+x),d=Dl.bind(null,l0),m=Dl.bind(null,io);function y(x,J){let Y,te;return hy(x)?(Y=e.getRecordMatcher(x),te=J):te=x,e.addRoute(te,Y)}function R(x){const J=e.getRecordMatcher(x);J&&e.removeRoute(J)}function P(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function k(x,J){if(J=Re({},J||l.value),typeof x=="string"){const C=kl(n,x,J.path),L=e.resolve({path:C.path},J),B=s.createHref(C.fullPath);return Re(C,L,{params:m(L.params),hash:io(C.hash),redirectedFrom:void 0,href:B})}let Y;if(x.path!=null)Y=Re({},x,{path:kl(n,x.path,J.path).path});else{const C=Re({},x.params);for(const L in C)C[L]==null&&delete C[L];Y=Re({},x,{params:d(C)}),J.params=d(J.params)}const te=e.resolve(Y,J),_e=x.hash||"";te.params=h(m(te.params));const w=f0(r,Re({},x,{hash:o0(_e),path:te.path})),S=s.createHref(w);return Re({fullPath:w,hash:_e,query:r===_p?b0(x.query):x.query||{}},te,{redirectedFrom:void 0,href:S})}function N(x){return typeof x=="string"?kl(n,x,l.value.path):Re({},x)}function M(x,J){if(u!==x)return $s(He.NAVIGATION_CANCELLED,{from:J,to:x})}function q(x){return E(x)}function G(x){return q(Re(N(x),{replace:!0}))}function z(x,J){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:te}=Y;let _e=typeof te=="function"?te(x,J):te;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=N(_e):{path:_e},_e.params={}),Re({query:x.query,hash:x.hash,params:_e.path!=null?{}:x.params},_e)}}function E(x,J){const Y=u=k(x),te=l.value,_e=x.state,w=x.force,S=x.replace===!0,C=z(Y,te);if(C)return E(Re(N(C),{state:typeof C=="object"?Re({},_e,C.state):_e,force:w,replace:S}),J||Y);const L=Y;L.redirectedFrom=J;let B;return!w&&d0(r,te,Y)&&(B=$s(He.NAVIGATION_DUPLICATED,{to:L,from:te}),Xe(te,te,!0,!1)),(B?Promise.resolve(B):I(L,te)).catch(F=>kn(F)?kn(F,He.NAVIGATION_GUARD_REDIRECT)?F:Wt(F):me(F,L,te)).then(F=>{if(F){if(kn(F,He.NAVIGATION_GUARD_REDIRECT))return E(Re({replace:S},N(F.to),{state:typeof F.to=="object"?Re({},_e,F.to.state):_e,force:w}),J||L)}else F=b(L,te,!0,S,_e);return A(L,te,F),F})}function v(x,J){const Y=M(x,J);return Y?Promise.reject(Y):Promise.resolve()}function g(x){const J=At.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(x):x()}function I(x,J){let Y;const[te,_e,w]=S0(x,J);Y=Ol(te.reverse(),"beforeRouteLeave",x,J);for(const C of te)C.leaveGuards.forEach(L=>{Y.push(ur(L,x,J))});const S=v.bind(null,x,J);return Y.push(S),Ze(Y).then(()=>{Y=[];for(const C of i.list())Y.push(ur(C,x,J));return Y.push(S),Ze(Y)}).then(()=>{Y=Ol(_e,"beforeRouteUpdate",x,J);for(const C of _e)C.updateGuards.forEach(L=>{Y.push(ur(L,x,J))});return Y.push(S),Ze(Y)}).then(()=>{Y=[];for(const C of w)if(C.beforeEnter)if(ln(C.beforeEnter))for(const L of C.beforeEnter)Y.push(ur(L,x,J));else Y.push(ur(C.beforeEnter,x,J));return Y.push(S),Ze(Y)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),Y=Ol(w,"beforeRouteEnter",x,J,g),Y.push(S),Ze(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(ur(C,x,J));return Y.push(S),Ze(Y)}).catch(C=>kn(C,He.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function A(x,J,Y){c.list().forEach(te=>g(()=>te(x,J,Y)))}function b(x,J,Y,te,_e){const w=M(x,J);if(w)return w;const S=J===ir,C=Ts?history.state:{};Y&&(te||S?s.replace(x.fullPath,Re({scroll:S&&C&&C.scroll},_e)):s.push(x.fullPath,_e)),l.value=x,Xe(x,J,Y,S),Wt()}let T;function de(){T||(T=s.listen((x,J,Y)=>{if(!Lt.listening)return;const te=k(x),_e=z(te,Lt.currentRoute.value);if(_e){E(Re(_e,{replace:!0,force:!0}),te).catch(ji);return}u=te;const w=l.value;Ts&&T0(gp(w.fullPath,Y.delta),kc()),I(te,w).catch(S=>kn(S,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?S:kn(S,He.NAVIGATION_GUARD_REDIRECT)?(E(Re(N(S.to),{force:!0}),te).then(C=>{kn(C,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===uu.pop&&s.go(-1,!1)}).catch(ji),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),me(S,te,w))).then(S=>{S=S||b(te,w,!1),S&&(Y.delta&&!kn(S,He.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===uu.pop&&kn(S,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(te,w,S)}).catch(ji)}))}let Le=bi(),be=bi(),le;function me(x,J,Y){Wt(x);const te=be.list();return te.length?te.forEach(_e=>_e(x,J,Y)):console.error(x),Promise.reject(x)}function ft(){return le&&l.value!==ir?Promise.resolve():new Promise((x,J)=>{Le.add([x,J])})}function Wt(x){return le||(le=!x,de(),Le.list().forEach(([J,Y])=>x?Y(x):J()),Le.reset()),x}function Xe(x,J,Y,te){const{scrollBehavior:_e}=t;if(!Ts||!_e)return Promise.resolve();const w=!Y&&w0(gp(x.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return wo().then(()=>_e(x,J,w)).then(S=>S&&E0(S)).catch(S=>me(S,x,J))}const qe=x=>s.go(x);let Xt;const At=new Set,Lt={currentRoute:l,listening:!0,addRoute:y,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:k,options:t,push:q,replace:G,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:be.add,isReady:ft,install(x){x.component("RouterLink",K0),x.component("RouterView",X0),x.config.globalProperties.$router=Lt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),Ts&&!Xt&&l.value===ir&&(Xt=!0,q(s.location).catch(te=>{}));const J={};for(const te in ir)Object.defineProperty(J,te,{get:()=>l.value[te],enumerable:!0});x.provide(Dc,Lt),x.provide(ch,Ig(J)),x.provide(cu,l);const Y=x.unmount;At.add(x),x.unmount=function(){At.delete(x),At.size<1&&(u=ir,T&&T(),T=null,l.value=ir,Xt=!1,le=!1),Y()}}};function Ze(x){return x.reduce((J,Y)=>J.then(()=>g(Y)),Promise.resolve())}return Lt}const eS=()=>{};var Cp={};/**
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
 */const my=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[h],n[d],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(my(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new nS;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),d!==64){const R=u<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rS=function(t){const e=my(t);return gy.encodeByteArray(e,!0)},qa=function(t){return rS(t).replace(/\./g,"")},_y=function(t){try{return gy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iS=()=>sS().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof Cp>"u")return;const t=Cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_y(t[1]);return e&&JSON.parse(e)},Nc=()=>{try{return eS()||iS()||oS()||aS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yy=t=>{var e,n;return(n=(e=Nc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},cS=t=>{const e=yy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vy=()=>{var t;return(t=Nc())==null?void 0:t.config},Ey=t=>{var e;return(e=Nc())==null?void 0:e[`_${t}`]};/**
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
 */class lS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[qa(JSON.stringify(n)),qa(JSON.stringify(o)),""].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function fS(){var e;const t=(e=Nc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gS(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _S(){return!fS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yS(){try{return typeof indexedDB=="object"}catch{return!1}}function vS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ES="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TS(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,c,r)}}function TS(t,e){return t.replace(wS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wS=/\{\$([^}]+)}/g;function IS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pp(i)&&Pp(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function AS(t,e){const n=new bS(t,e);return n.subscribe.bind(n)}class bS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vl),s.error===void 0&&(s.error=Vl),s.complete===void 0&&(s.complete=Vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vl(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Co(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ty(t){return(await fetch(t,{credentials:"include"})).ok}class ss{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class RS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(t){return t===Wr?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
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
 */class DS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const kS={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},NS=ye.INFO,OS={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},VS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=NS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const xS=(t,e)=>e.some(n=>t instanceof n);let Dp,kp;function MS(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LS(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wy=new WeakMap,fu=new WeakMap,Iy=new WeakMap,xl=new WeakMap,hh=new WeakMap;function FS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wy.set(n,t)}).catch(()=>{}),hh.set(e,t),e}function US(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $S(t){du=t(du)}function BS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ml(this),e,...n);return Iy.set(r,e.sort?e.sort():[e]),yr(r)}:LS().includes(t)?function(...e){return t.apply(Ml(this),e),yr(wy.get(this))}:function(...e){return yr(t.apply(Ml(this),e))}}function jS(t){return typeof t=="function"?BS(t):(t instanceof IDBTransaction&&US(t),xS(t,MS())?new Proxy(t,du):t)}function yr(t){if(t instanceof IDBRequest)return FS(t);if(xl.has(t))return xl.get(t);const e=jS(t);return e!==t&&(xl.set(t,e),hh.set(e,t)),e}const Ml=t=>hh.get(t);function HS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const qS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],Ll=new Map;function Np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qS.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Ll.set(e,i),i}$S(t=>({...t,get:(e,n,r)=>Np(e,n)||t.get(e,n,r),has:(e,n)=>!!Np(e,n)||t.has(e,n)}));/**
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
 */class GS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Op="0.14.10";/**
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
 */const qn=new uh("@firebase/app"),KS="@firebase/app-compat",QS="@firebase/analytics-compat",YS="@firebase/analytics",JS="@firebase/app-check-compat",XS="@firebase/app-check",ZS="@firebase/auth",eR="@firebase/auth-compat",tR="@firebase/database",nR="@firebase/data-connect",rR="@firebase/database-compat",sR="@firebase/functions",iR="@firebase/functions-compat",oR="@firebase/installations",aR="@firebase/installations-compat",cR="@firebase/messaging",lR="@firebase/messaging-compat",uR="@firebase/performance",hR="@firebase/performance-compat",fR="@firebase/remote-config",dR="@firebase/remote-config-compat",pR="@firebase/storage",mR="@firebase/storage-compat",gR="@firebase/firestore",_R="@firebase/ai",yR="@firebase/firestore-compat",vR="firebase",ER="12.11.0";/**
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
 */const mu="[DEFAULT]",TR={[pu]:"fire-core",[KS]:"fire-core-compat",[YS]:"fire-analytics",[QS]:"fire-analytics-compat",[XS]:"fire-app-check",[JS]:"fire-app-check-compat",[ZS]:"fire-auth",[eR]:"fire-auth-compat",[tR]:"fire-rtdb",[nR]:"fire-data-connect",[rR]:"fire-rtdb-compat",[sR]:"fire-fn",[iR]:"fire-fn-compat",[oR]:"fire-iid",[aR]:"fire-iid-compat",[cR]:"fire-fcm",[lR]:"fire-fcm-compat",[uR]:"fire-perf",[hR]:"fire-perf-compat",[fR]:"fire-rc",[dR]:"fire-rc-compat",[pR]:"fire-gcs",[mR]:"fire-gcs-compat",[gR]:"fire-fst",[yR]:"fire-fst-compat",[_R]:"fire-vertex","fire-js":"fire-js",[vR]:"fire-js-all"};/**
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
 */const Wa=new Map,wR=new Map,gu=new Map;function Vp(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(gu.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Wa.values())Vp(n,t);for(const n of wR.values())Vp(n,t);return!0}function fh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new So("app","Firebase",IR);/**
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
 */class AR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=ER;function Ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=vy()),!n)throw vr.create("no-options");const i=Wa.get(s);if(i){if(rs(n,i.options)&&rs(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new DS(s);for(const l of gu.values())o.addComponent(l);const c=new AR(n,r,o);return Wa.set(s,c),c}function by(t=mu){const e=Wa.get(t);if(!e&&t===mu&&vy())return Ay();if(!e)throw vr.create("no-app",{appName:t});return e}function Er(t,e,n){let r=TR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(o.join(" "));return}js(new ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bR="firebase-heartbeat-database",SR=1,oo="firebase-heartbeat-store";let Fl=null;function Sy(){return Fl||(Fl=HS(bR,SR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Fl}async function RR(t){try{const n=(await Sy()).transaction(oo),r=await n.objectStore(oo).get(Ry(t));return await n.done,r}catch(e){if(e instanceof Jn)qn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function xp(t,e){try{const r=(await Sy()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,Ry(t)),await r.done}catch(n){if(n instanceof Jn)qn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function Ry(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CR=1024,PR=30;class DR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>PR){const o=OR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mp(),{heartbeatsToSend:r,unsentEntries:s}=kR(this._heartbeatsCache.heartbeats),i=qa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function Mp(){return new Date().toISOString().substring(0,10)}function kR(t,e=CR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yS()?vS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lp(t){return qa(JSON.stringify({version:2,heartbeats:t})).length}function OR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VR(t){js(new ss("platform-logger",e=>new GS(e),"PRIVATE")),js(new ss("heartbeat",e=>new DR(e),"PRIVATE")),Er(pu,Op,t),Er(pu,Op,"esm2020"),Er("fire-js","")}VR("");function Cy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xR=Cy,Py=new So("auth","Firebase",Cy());/**
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
 */const Ga=new uh("@firebase/auth");function MR(t,...e){Ga.logLevel<=ye.WARN&&Ga.warn(`Auth (${Js}): ${t}`,...e)}function pa(t,...e){Ga.logLevel<=ye.ERROR&&Ga.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw ph(t,...e)}function sn(t,...e){return ph(t,...e)}function dh(t,e,n){const r={...xR(),[e]:n};return new So("auth","Firebase",r).create(e,{appName:t.name})}function ts(t){return dh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Cn(t,"argument-error"),dh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Py.create(t,...e)}function ce(t,e,...n){if(!t)throw ph(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function Wn(t,e){t||Fn(e)}/**
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
 */function _u(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function FR(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FR()||pS()||"connection"in navigator)?navigator.onLine:!0}function $R(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=hS()||mS()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mh(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HR=new Po(3e4,6e4);function gh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xs(t,e,n,r,s={}){return ky(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ro({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return dS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Co(t.emulatorConfig.host)&&(u.credentials="include"),Dy.fetch()(await Ny(t,t.config.apiHost,n,c),u)})}async function ky(t,e,n){t._canInitEmulator=!1;const r={...BR,...e};try{const s=new WR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw na(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dh(t,h,u);Cn(t,h)}}catch(s){if(s instanceof Jn)throw s;Cn(t,"network-request-failed",{message:String(s)})}}async function qR(t,e,n,r,s={}){const i=await Xs(t,e,n,r,s);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ny(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mh(t.config,s):`${t.config.apiScheme}://${s}`;return jR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class WR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),HR.get())})}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function GR(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function za(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zR(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=_h(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hi(Ul(s.auth_time)),issuedAtTime:Hi(Ul(s.iat)),expirationTime:Hi(Ul(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ul(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=_y(n);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Up(t){const e=_h(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&KR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ka(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ao(t,za(e,{idToken:n}));ce(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?Oy(s.providerUserInfo):[],o=JR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YR(t){const e=ut(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Oy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function XR(t,e){const n=await ky(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ny(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Co(t.emulatorConfig.host)&&(l.credentials="include"),Dy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZR(t,e){return Xs(t,"POST","/v2/accounts:revokeToken",gh(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ds;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function or(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new QR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zR(this,e)}reload(){return YR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(ts(this.auth));const e=await this.getIdToken();return await ao(this,GR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:y,providerData:R,stsTokenManager:P}=n;ce(d&&P,e,"internal-error");const O=Ds.fromJSON(this.name,P);ce(typeof d=="string",e,"internal-error"),or(r,e.name),or(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof y=="boolean",e,"internal-error"),or(i,e.name),or(o,e.name),or(c,e.name),or(l,e.name),or(u,e.name),or(h,e.name);const k=new tn({uid:d,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:h});return R&&Array.isArray(R)&&(k.providerData=R.map(N=>({...N}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ds;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ka(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Oy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ds;c.updateFromIdToken(r);const l=new tn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const $p=new Map;function Un(t){Wn(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */class Vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vy.type="NONE";const Bp=Vy;/**
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
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await za(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Un(Bp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Un(Bp);const o=ma(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const m=await za(e,{idToken:h}).catch(()=>{});if(!m)break;d=await tn._fromGetAccountInfoResponse(e,m,h)}else d=tn._fromJSON(e,h);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ks(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($y(e))return"Blackberry";if(By(e))return"Webos";if(My(e))return"Safari";if((e.includes("chrome/")||Ly(e))&&!e.includes("edge/"))return"Chrome";if(Uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xy(t=It()){return/firefox\//i.test(t)}function My(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ly(t=It()){return/crios\//i.test(t)}function Fy(t=It()){return/iemobile/i.test(t)}function Uy(t=It()){return/android/i.test(t)}function $y(t=It()){return/blackberry/i.test(t)}function By(t=It()){return/webos/i.test(t)}function yh(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=It()){var e;return yh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tC(){return gS()&&document.documentMode===10}function jy(t=It()){return yh(t)||Uy(t)||By(t)||$y(t)||/windows phone/i.test(t)||Fy(t)}/**
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
 */function Hy(t,e=[]){let n;switch(t){case"Browser":n=jp(It());break;case"Worker":n=`${jp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
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
 */class nC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function rC(t,e={}){return Xs(t,"GET","/v2/passwordPolicy",gh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const sC=6;class iC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class oC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await za(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(ts(this));const n=e?ut(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rC(this),n=new iC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new So("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&MR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Oc(t){return ut(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=AS(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aC(t){vh=t}function cC(t){return vh.loadJS(t)}function lC(){return vh.gapiScript}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hC(t,e){const n=fh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rs(i,e??{}))return s;Cn(s,"already-initialized")}return n.initialize({options:e})}function fC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dC(t,e,n){const r=Oc(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qy(e),{host:o,port:c}=pC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(rs(u,r.config.emulator)&&rs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Co(o)?Ty(`${i}//${o}${l}`):mC()}function qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pC(t){const e=qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
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
 */async function Ns(t,e){return qR(t,"POST","/v1/accounts:signInWithIdp",gh(t,e))}/**
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
 */const gC="http://localhost";class is extends Wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
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
 */class Eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends Eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Do{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class dr extends Do{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class pr extends Do{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class Hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=Wp(r);return new Hs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new Hs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qa extends Jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qa(e,n,r,s)}}function Gy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(t,i,e,r):i})}async function _C(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hs._forOperation(t,"link",r)}/**
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
 */async function yC(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(ts(r));const s="reauthenticate";try{const i=await ao(t,Gy(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=_h(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Hs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),i}}/**
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
 */async function vC(t,e,n=!1){if(en(t.app))return Promise.reject(ts(t));const r="signIn",s=await Gy(t,r,e),i=await Hs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function EC(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function TC(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function wC(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function lO(t){return ut(t).signOut()}const Ya="__sak";/**
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
 */class zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ya,"1"),this.storage.removeItem(Ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,AC=10;class Ky extends zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ky.type="LOCAL";const bC=Ky;/**
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
 */class Qy extends zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qy.type="SESSION";const Yy=Qy;/**
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
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await SC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Th("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function CC(t){In().location.href=t}/**
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
 */function Jy(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function kC(){return Jy()?self:null}/**
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
 */const Xy="firebaseLocalStorageDb",NC=1,Ja="firebaseLocalStorage",Zy="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Ja],e?"readwrite":"readonly").objectStore(Ja)}function OC(){const t=indexedDB.deleteDatabase(Xy);return new ko(t).toPromise()}function vu(){const t=indexedDB.open(Xy,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ja,{keyPath:Zy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ja)?e(r):(r.close(),await OC(),e(await vu()))})})}async function Gp(t,e,n){const r=xc(t,!0).put({[Zy]:e,value:n});return new ko(r).toPromise()}async function VC(t,e){const n=xc(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function zp(t,e){const n=xc(t,!0).delete(e);return new ko(n).toPromise()}const xC=800,MC=3;class ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(kC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await Gp(e,Ya,"1"),await zp(e,Ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xc(s,!1).getAll();return new ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ev.type="LOCAL";const LC=ev;new Po(3e4,6e4);/**
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
 */function tv(t,e){return e?Un(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends Wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FC(t){return vC(t.auth,new wh(t),t.bypassAuthState)}function UC(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),yC(n,new wh(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),_C(n,new wh(t),t.bypassAuthState)}/**
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
 */class nv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:Cn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BC=new Po(2e3,1e4);async function uO(t,e,n){if(en(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=Oc(t);LR(t,e,Eh);const s=tv(r,n);return new Qr(r,"signInViaPopup",e,s).executeNotNull()}class Qr extends nv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BC.get())};e()}}Qr.currentPopupAction=null;/**
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
 */const jC="pendingRedirect",ga=new Map;class HC extends nv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await qC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qC(t,e){const n=zC(e),r=GC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WC(t,e){ga.set(t._key(),e)}function GC(t){return Un(t._redirectPersistence)}function zC(t){return ma(jC,t.config.apiKey,t.name)}async function KC(t,e,n=!1){if(en(t.app))return Promise.reject(ts(t));const r=Oc(t),s=tv(r,e),o=await new HC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QC=10*60*1e3;class YC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rv(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rv(t);default:return!1}}/**
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
 */async function XC(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const ZC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eP=/^https?/;async function tP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XC(t);for(const n of e)try{if(nP(n))return}catch{}Cn(t,"unauthorized-domain")}function nP(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eP.test(n))return!1;if(ZC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rP=new Po(3e4,6e4);function Qp(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sP(t){return new Promise((e,n)=>{var s,i,o;function r(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(sn(t,"network-request-failed"))},timeout:rP.get()})}if((i=(s=In().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=In().gapi)!=null&&o.load)r();else{const c=uC("iframefcb");return In()[c]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},cC(`${lC()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw _a=null,e})}let _a=null;function iP(t){return _a=_a||sP(t),_a}/**
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
 */const oP=new Po(5e3,15e3),aP="__/auth/iframe",cP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mh(e,cP):`https://${t.config.authDomain}/${aP}`,r={apiKey:e.apiKey,appName:t.name,v:Js},s=uP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ro(r).slice(1)}`}async function fP(t){const e=await iP(t),n=In().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:hP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=In().setTimeout(()=>{i(o)},oP.get());function l(){In().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const dP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pP=500,mP=600,gP="_blank",_P="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yP(t,e,n,r=pP,s=mP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...dP,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=Ly(u)?gP:n),xy(u)&&(e=e||_P,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(eC(u)&&c!=="_self")return vP(e||"",c),new Yp(null);const d=window.open(e||"",c,h);ce(d,t,"popup-blocked");try{d.focus()}catch{}return new Yp(d)}function vP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EP="__/auth/handler",TP="emulator/auth/handler",wP=encodeURIComponent("fac");async function Jp(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:s};if(e instanceof Eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Do){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${wP}=${encodeURIComponent(l)}`:"";return`${IP(t)}?${Ro(c).slice(1)}${u}`}function IP({config:t}){return t.emulator?mh(t,TP):`https://${t.authDomain}/${EP}`}/**
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
 */const $l="webStorageSupport";class AP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=KC,this._overrideRedirectResult=WC}async _openPopup(e,n,r,s){var o;Wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jp(e,n,r,_u(),s);return yP(e,i,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jp(e,n,r,_u(),s);return CC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fP(e),r=new YC(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[$l];i!==void 0&&n(!!i),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jy()||My()||yh()}}const bP=AP;var Xp="@firebase/auth",Zp="1.12.2";/**
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
 */class SP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CP(t){js(new ss("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(t)},u=new oC(r,s,i,l);return fC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),js(new ss("auth-internal",e=>{const n=Oc(e.getProvider("auth").getImmediate());return(r=>new SP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(Xp,Zp,RP(t)),Er(Xp,Zp,"esm2020")}/**
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
 */const PP=5*60,DP=Ey("authIdTokenMaxAge")||PP;let em=null;const kP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DP)return;const s=n==null?void 0:n.token;em!==s&&(em=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function NP(t=by()){const e=fh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hC(t,{popupRedirectResolver:bP,persistence:[LC,bC,Yy]}),r=Ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kP(i.toString());TC(n,o,()=>o(n.currentUser)),EC(n,c=>o(c))}}const s=yy("auth");return s&&dC(n,`http://${s}`),n}function OP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CP("Browser");var VP="firebase",xP="12.11.0";/**
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
 */Er(VP,xP,"app");var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,sv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function g(){}g.prototype=v.prototype,E.F=v.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(I,A,b){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return v.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,g){g||(g=0);const I=Array(16);if(typeof v=="string")for(var A=0;A<16;++A)I[A]=v.charCodeAt(g++)|v.charCodeAt(g++)<<8|v.charCodeAt(g++)<<16|v.charCodeAt(g++)<<24;else for(A=0;A<16;++A)I[A]=v[g++]|v[g++]<<8|v[g++]<<16|v[g++]<<24;v=E.g[0],g=E.g[1],A=E.g[2];let b=E.g[3],T;T=v+(b^g&(A^b))+I[0]+3614090360&4294967295,v=g+(T<<7&4294967295|T>>>25),T=b+(A^v&(g^A))+I[1]+3905402710&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(g^b&(v^g))+I[2]+606105819&4294967295,A=b+(T<<17&4294967295|T>>>15),T=g+(v^A&(b^v))+I[3]+3250441966&4294967295,g=A+(T<<22&4294967295|T>>>10),T=v+(b^g&(A^b))+I[4]+4118548399&4294967295,v=g+(T<<7&4294967295|T>>>25),T=b+(A^v&(g^A))+I[5]+1200080426&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(g^b&(v^g))+I[6]+2821735955&4294967295,A=b+(T<<17&4294967295|T>>>15),T=g+(v^A&(b^v))+I[7]+4249261313&4294967295,g=A+(T<<22&4294967295|T>>>10),T=v+(b^g&(A^b))+I[8]+1770035416&4294967295,v=g+(T<<7&4294967295|T>>>25),T=b+(A^v&(g^A))+I[9]+2336552879&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(g^b&(v^g))+I[10]+4294925233&4294967295,A=b+(T<<17&4294967295|T>>>15),T=g+(v^A&(b^v))+I[11]+2304563134&4294967295,g=A+(T<<22&4294967295|T>>>10),T=v+(b^g&(A^b))+I[12]+1804603682&4294967295,v=g+(T<<7&4294967295|T>>>25),T=b+(A^v&(g^A))+I[13]+4254626195&4294967295,b=v+(T<<12&4294967295|T>>>20),T=A+(g^b&(v^g))+I[14]+2792965006&4294967295,A=b+(T<<17&4294967295|T>>>15),T=g+(v^A&(b^v))+I[15]+1236535329&4294967295,g=A+(T<<22&4294967295|T>>>10),T=v+(A^b&(g^A))+I[1]+4129170786&4294967295,v=g+(T<<5&4294967295|T>>>27),T=b+(g^A&(v^g))+I[6]+3225465664&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^g&(b^v))+I[11]+643717713&4294967295,A=b+(T<<14&4294967295|T>>>18),T=g+(b^v&(A^b))+I[0]+3921069994&4294967295,g=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(g^A))+I[5]+3593408605&4294967295,v=g+(T<<5&4294967295|T>>>27),T=b+(g^A&(v^g))+I[10]+38016083&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^g&(b^v))+I[15]+3634488961&4294967295,A=b+(T<<14&4294967295|T>>>18),T=g+(b^v&(A^b))+I[4]+3889429448&4294967295,g=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(g^A))+I[9]+568446438&4294967295,v=g+(T<<5&4294967295|T>>>27),T=b+(g^A&(v^g))+I[14]+3275163606&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^g&(b^v))+I[3]+4107603335&4294967295,A=b+(T<<14&4294967295|T>>>18),T=g+(b^v&(A^b))+I[8]+1163531501&4294967295,g=A+(T<<20&4294967295|T>>>12),T=v+(A^b&(g^A))+I[13]+2850285829&4294967295,v=g+(T<<5&4294967295|T>>>27),T=b+(g^A&(v^g))+I[2]+4243563512&4294967295,b=v+(T<<9&4294967295|T>>>23),T=A+(v^g&(b^v))+I[7]+1735328473&4294967295,A=b+(T<<14&4294967295|T>>>18),T=g+(b^v&(A^b))+I[12]+2368359562&4294967295,g=A+(T<<20&4294967295|T>>>12),T=v+(g^A^b)+I[5]+4294588738&4294967295,v=g+(T<<4&4294967295|T>>>28),T=b+(v^g^A)+I[8]+2272392833&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^g)+I[11]+1839030562&4294967295,A=b+(T<<16&4294967295|T>>>16),T=g+(A^b^v)+I[14]+4259657740&4294967295,g=A+(T<<23&4294967295|T>>>9),T=v+(g^A^b)+I[1]+2763975236&4294967295,v=g+(T<<4&4294967295|T>>>28),T=b+(v^g^A)+I[4]+1272893353&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^g)+I[7]+4139469664&4294967295,A=b+(T<<16&4294967295|T>>>16),T=g+(A^b^v)+I[10]+3200236656&4294967295,g=A+(T<<23&4294967295|T>>>9),T=v+(g^A^b)+I[13]+681279174&4294967295,v=g+(T<<4&4294967295|T>>>28),T=b+(v^g^A)+I[0]+3936430074&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^g)+I[3]+3572445317&4294967295,A=b+(T<<16&4294967295|T>>>16),T=g+(A^b^v)+I[6]+76029189&4294967295,g=A+(T<<23&4294967295|T>>>9),T=v+(g^A^b)+I[9]+3654602809&4294967295,v=g+(T<<4&4294967295|T>>>28),T=b+(v^g^A)+I[12]+3873151461&4294967295,b=v+(T<<11&4294967295|T>>>21),T=A+(b^v^g)+I[15]+530742520&4294967295,A=b+(T<<16&4294967295|T>>>16),T=g+(A^b^v)+I[2]+3299628645&4294967295,g=A+(T<<23&4294967295|T>>>9),T=v+(A^(g|~b))+I[0]+4096336452&4294967295,v=g+(T<<6&4294967295|T>>>26),T=b+(g^(v|~A))+I[7]+1126891415&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~g))+I[14]+2878612391&4294967295,A=b+(T<<15&4294967295|T>>>17),T=g+(b^(A|~v))+I[5]+4237533241&4294967295,g=A+(T<<21&4294967295|T>>>11),T=v+(A^(g|~b))+I[12]+1700485571&4294967295,v=g+(T<<6&4294967295|T>>>26),T=b+(g^(v|~A))+I[3]+2399980690&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~g))+I[10]+4293915773&4294967295,A=b+(T<<15&4294967295|T>>>17),T=g+(b^(A|~v))+I[1]+2240044497&4294967295,g=A+(T<<21&4294967295|T>>>11),T=v+(A^(g|~b))+I[8]+1873313359&4294967295,v=g+(T<<6&4294967295|T>>>26),T=b+(g^(v|~A))+I[15]+4264355552&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~g))+I[6]+2734768916&4294967295,A=b+(T<<15&4294967295|T>>>17),T=g+(b^(A|~v))+I[13]+1309151649&4294967295,g=A+(T<<21&4294967295|T>>>11),T=v+(A^(g|~b))+I[4]+4149444226&4294967295,v=g+(T<<6&4294967295|T>>>26),T=b+(g^(v|~A))+I[11]+3174756917&4294967295,b=v+(T<<10&4294967295|T>>>22),T=A+(v^(b|~g))+I[2]+718787259&4294967295,A=b+(T<<15&4294967295|T>>>17),T=g+(b^(A|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const g=v-this.blockSize,I=this.C;let A=this.h,b=0;for(;b<v;){if(A==0)for(;b<=g;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<v;)if(I[A++]=E.charCodeAt(b++),A==this.blockSize){s(this,I),A=0;break}}else for(;b<v;)if(I[A++]=E[b++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,g=0;g<4;++g)for(let I=0;I<32;I+=8)E[v++]=this.g[g]>>>I&255;return E};function i(E,v){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=v(E)}function o(E,v){this.h=v;const g=[];let I=!0;for(let A=E.length-1;A>=0;A--){const b=E[A]|0;I&&b==v||(g[A]=b,I=!1)}this.g=g}var c={};function l(E){return-128<=E&&E<128?i(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(E<0)return O(u(-E));const v=[];let g=1;for(let I=0;E>=g;I++)v[I]=E/g|0,g*=4294967296;return new o(v,0)}function h(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return O(h(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=u(Math.pow(v,8));let I=d;for(let b=0;b<E.length;b+=8){var A=Math.min(8,E.length-b);const T=parseInt(E.substring(b,b+A),v);A<8?(A=u(Math.pow(v,A)),I=I.j(A).add(u(T))):(I=I.j(g),I=I.add(u(T)))}return I}var d=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();let E=0,v=1;for(let g=0;g<this.g.length;g++){const I=this.i(g);E+=(I>=0?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+O(this).toString(E);const v=u(Math.pow(E,6));var g=this;let I="";for(;;){const A=q(g,v).g;g=k(g,A.j(v));let b=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=A,R(g))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=k(this,E),P(E)?-1:R(E)?0:1};function O(E){const v=E.g.length,g=[];for(let I=0;I<v;I++)g[I]=~E.g[I];return new o(g,~E.h).add(m)}t.abs=function(){return P(this)?O(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),g=[];let I=0;for(let A=0;A<=v;A++){let b=I+(this.i(A)&65535)+(E.i(A)&65535),T=(b>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=T>>>16,b&=65535,T&=65535,g[A]=T<<16|b}return new o(g,g[g.length-1]&-2147483648?-1:0)};function k(E,v){return E.add(O(v))}t.j=function(E){if(R(this)||R(E))return d;if(P(this))return P(E)?O(this).j(O(E)):O(O(this).j(E));if(P(E))return O(this.j(O(E)));if(this.l(y)<0&&E.l(y)<0)return u(this.m()*E.m());const v=this.g.length+E.g.length,g=[];for(var I=0;I<2*v;I++)g[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<E.g.length;A++){const b=this.i(I)>>>16,T=this.i(I)&65535,de=E.i(A)>>>16,Le=E.i(A)&65535;g[2*I+2*A]+=T*Le,N(g,2*I+2*A),g[2*I+2*A+1]+=b*Le,N(g,2*I+2*A+1),g[2*I+2*A+1]+=T*de,N(g,2*I+2*A+1),g[2*I+2*A+2]+=b*de,N(g,2*I+2*A+2)}for(E=0;E<v;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=v;E<2*v;E++)g[E]=0;return new o(g,0)};function N(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function M(E,v){this.g=E,this.h=v}function q(E,v){if(R(v))throw Error("division by zero");if(R(E))return new M(d,d);if(P(E))return v=q(O(E),v),new M(O(v.g),O(v.h));if(P(v))return v=q(E,O(v)),new M(O(v.g),v.h);if(E.g.length>30){if(P(E)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var g=m,I=v;I.l(E)<=0;)g=G(g),I=G(I);var A=z(g,1),b=z(I,1);for(I=z(I,2),g=z(g,2);!R(I);){var T=b.add(I);T.l(E)<=0&&(A=A.add(g),b=T),I=z(I,1),g=z(g,1)}return v=k(E,A.j(v)),new M(A,v)}for(A=d;E.l(v)>=0;){for(g=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(g)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=u(g),T=b.j(v);P(T)||T.l(E)>0;)g-=I,b=u(g),T=b.j(v);R(b)&&(b=m),A=A.add(b),E=k(E,T)}return new M(A,E)}t.B=function(E){return q(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),g=[];for(let I=0;I<v;I++)g[I]=this.i(I)&E.i(I);return new o(g,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),g=[];for(let I=0;I<v;I++)g[I]=this.i(I)|E.i(I);return new o(g,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),g=[];for(let I=0;I<v;I++)g[I]=this.i(I)^E.i(I);return new o(g,this.h^E.h)};function G(E){const v=E.g.length+1,g=[];for(let I=0;I<v;I++)g[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(g,E.h)}function z(E,v){const g=v>>5;v%=32;const I=E.g.length-g,A=[];for(let b=0;b<I;b++)A[b]=v>0?E.i(b+g)>>>v|E.i(b+g+1)<<32-v:E.i(b+g);return new o(A,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,sv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Tr=o}).apply(typeof tm<"u"?tm:typeof self<"u"?self:typeof window<"u"?window:{});var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iv,Pi,ov,ya,Eu,av,cv,lv;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ra=="object"&&ra];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var p=[],_;for(_ in f)Object.prototype.hasOwnProperty.call(f,_)&&p.push([_,f[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,p){return a.call.apply(a.bind,arguments)}function u(a,f,p){return u=l,u.apply(null,arguments)}function h(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function d(a,f){function p(){}p.prototype=f.prototype,a.Z=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,V){for(var K=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)K[pe-2]=arguments[pe];return f.prototype[D].apply(_,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const f=a.length;if(f>0){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function R(a,f){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let K=0;K<V;K++)a[p+K]=D[K]}else a.push(D)}}class P{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(a){o.setTimeout(()=>{throw a},0)}function k(){var a=E;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class N{constructor(){this.h=this.g=null}add(f,p){const _=M.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var M=new P(()=>new q,a=>a.reset());class q{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let G,z=!1,E=new N,v=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(g)}};function g(){for(var a;a=k();){try{a.h.call(a.g)}catch(p){O(p)}var f=M;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function de(a,f){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}d(de,A),de.prototype.init=function(a,f){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Le="closure_listenable_"+(Math.random()*1e6|0),be=0;function le(a,f,p,_,D){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=D,this.key=++be,this.da=this.fa=!1}function me(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ft(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function Wt(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function Xe(a){const f={};for(const p in a)f[p]=a[p];return f}const qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xt(a,f){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let V=0;V<qe.length;V++)p=qe[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,f,p,_,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const K=Ze(a,f,_,D);return K>-1?(f=a[K],p||(f.fa=!1)):(f=new le(f,this.src,V,!!_,D),f.fa=p,a.push(f)),f};function Lt(a,f){const p=f.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,f,void 0),V;(V=D>=0)&&Array.prototype.splice.call(_,D,1),V&&(me(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ze(a,f,p,_){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==f&&V.capture==!!p&&V.ha==_)return D}return-1}var x="closure_lm_"+(Math.random()*1e6|0),J={};function Y(a,f,p,_,D){if(Array.isArray(f)){for(let V=0;V<f.length;V++)Y(a,f[V],p,_,D);return null}return p=Q(p),a&&a[Le]?a.J(f,p,c(_)?!!_.capture:!1,D):te(a,f,p,!1,_,D)}function te(a,f,p,_,D,V){if(!f)throw Error("Invalid event type");const K=c(D)?!!D.capture:!!D;let pe=B(a);if(pe||(a[x]=pe=new At(a)),p=pe.add(f,p,_,K,V),p.proxy)return p;if(_=_e(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)b||(D=K),D===void 0&&(D=!1),a.addEventListener(f.toString(),_,D);else if(a.attachEvent)a.attachEvent(C(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function _e(){function a(p){return f.call(a.src,a.listener,p)}const f=L;return a}function w(a,f,p,_,D){if(Array.isArray(f))for(var V=0;V<f.length;V++)w(a,f[V],p,_,D);else _=c(_)?!!_.capture:!!_,p=Q(p),a&&a[Le]?(a=a.i,V=String(f).toString(),V in a.g&&(f=a.g[V],p=Ze(f,p,_,D),p>-1&&(me(f[p]),Array.prototype.splice.call(f,p,1),f.length==0&&(delete a.g[V],a.h--)))):a&&(a=B(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Ze(f,p,_,D)),(p=a>-1?f[a]:null)&&S(p))}function S(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Le])Lt(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(C(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=B(f))?(Lt(p,a),p.h==0&&(p.src=null,f[x]=null)):me(a)}}}function C(a){return a in J?J[a]:J[a]="on"+a}function L(a,f){if(a.da)a=!0;else{f=new de(f,this);const p=a.listener,_=a.ha||a.src;a.fa&&S(a),a=p.call(_,f)}return a}function B(a){return a=a[x],a instanceof At?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(a){return typeof a=="function"?a:(a[F]||(a[F]=function(f){return a.handleEvent(f)}),a[F])}function W(){I.call(this),this.i=new At(this),this.M=this,this.G=null}d(W,I),W.prototype[Le]=!0,W.prototype.removeEventListener=function(a,f,p,_){w(this,a,f,p,_)};function H(a,f){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new A(f,a);else if(f instanceof A)f.target=f.target||a;else{var D=f;f=new A(_,a),Xt(f,D)}D=!0;let V,K;if(p)for(K=p.length-1;K>=0;K--)V=f.g=p[K],D=j(V,_,!0,f)&&D;if(V=f.g=a,D=j(V,_,!0,f)&&D,D=j(V,_,!1,f)&&D,p)for(K=0;K<p.length;K++)V=f.g=p[K],D=j(V,_,!1,f)&&D}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const p=a.g[f];for(let _=0;_<p.length;_++)me(p[_]);delete a.g[f],a.h--}}this.G=null},W.prototype.J=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},W.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function j(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let V=0;V<f.length;++V){const K=f[V];if(K&&!K.da&&K.capture==p){const pe=K.listener,et=K.ha||K.src;K.fa&&Lt(a.i,K),D=pe.call(et,_)!==!1&&D}}return D&&!_.defaultPrevented}function se(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function X(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class ne extends I{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){I.call(this),this.h=a,this.g={}}d(oe,I);var ge=[];function De(a){ft(a.g,function(f,p){this.g.hasOwnProperty(p)&&S(f)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),De(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ft(){}function Ut(){}var Zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fs(){A.call(this,"d")}d(fs,A);function ot(){A.call(this,"c")}d(ot,A);var rt={},ii=null;function xr(){return ii=ii||new W}rt.Ia="serverreachability";function nf(a){A.call(this,rt.Ia,a)}d(nf,A);function oi(a){const f=xr();H(f,new nf(f))}rt.STAT_EVENT="statevent";function rf(a,f){A.call(this,rt.STAT_EVENT,a),this.stat=f}d(rf,A);function bt(a){const f=xr();H(f,new rf(f,a))}rt.Ja="timingevent";function sf(a,f){A.call(this,rt.Ja,a),this.size=f}d(sf,A);function ai(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function ci(){this.g=!0}ci.prototype.ua=function(){this.g=!1};function FE(a,f,p,_,D,V){a.info(function(){if(a.g)if(V){var K="",pe=V.split("&");for(let ke=0;ke<pe.length;ke++){var et=pe[ke].split("=");if(et.length>1){const st=et[0];et=et[1];const fn=st.split("_");K=fn.length>=2&&fn[1]=="type"?K+(st+"="+et+"&"):K+(st+"=redacted&")}}}else K=null;else K=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+f+`
`+p+`
`+K})}function UE(a,f,p,_,D,V,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+f+`
`+p+`
`+V+" "+K})}function ds(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+BE(a,p)+(_?" "+_:"")})}function $E(a,f){a.info(function(){return"TIMEOUT: "+f})}ci.prototype.info=function(){};function BE(a,f){if(!a.g)return f;if(!f)return null;try{const V=JSON.parse(f);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let K=1;K<_.length;K++)_[K]=""}}}}return Ae(V)}catch{return f}}var Fo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},of={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},af;function Zc(){}d(Zc,Ft),Zc.prototype.g=function(){return new XMLHttpRequest},af=new Zc;function li(a){return encodeURIComponent(String(a))}function jE(a){var f=1;a=a.split(":");const p=[];for(;f>0&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function Xn(a,f,p,_){this.j=a,this.i=f,this.l=p,this.S=_||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cf}function cf(){this.i=null,this.g="",this.h=!1}var lf={},el={};function tl(a,f,p){a.M=1,a.A=$o(hn(f)),a.u=p,a.R=!0,uf(a,null)}function uf(a,f){a.F=Date.now(),Uo(a),a.B=hn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),If(p.i,"t",_),a.C=0,p=a.j.L,a.h=new cf,a.g=Bf(a.j,p?f:null,!a.u),a.P>0&&(a.O=new ne(u(a.Y,a,a.g),a.P)),f=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(ge[0]=D.toString()),D=ge);for(let V=0;V<D.length;V++){const K=Y(p,D[V],_||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.J?Xe(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),oi(),FE(a.i,a.v,a.B,a.l,a.S,a.u)}Xn.prototype.ba=function(a){a=a.target;const f=this.O;f&&tr(a)==3?f.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const pe=tr(this.g),et=this.g.ya(),ke=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||Df(this.g)))){this.K||pe!=4||et==7||(et==8||ke<=0?oi(3):oi(2)),nl(this);var f=this.g.ca();this.X=f;var p=HE(this);if(this.o=f==200,UE(this.i,this.v,this.B,this.l,this.S,pe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(_)){var V=_;break t}}V=null}if(a=V)ds(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rl(this,a);else{this.o=!1,this.m=3,bt(12),Mr(this),ui(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<p.length;)if(st=qE(this,p),st==el){pe==4&&(this.m=4,bt(14),a=!1),ds(this.i,this.l,null,"[Incomplete Response]");break}else if(st==lf){this.m=4,bt(15),ds(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ds(this.i,this.l,st,null),rl(this,st);if(hf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||p.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)ds(this.i,this.l,p,"[Invalid Chunked Response]"),Mr(this),ui(this);else if(p.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),hl(K),K.P=!0,bt(11))}}else ds(this.i,this.l,p,null),rl(this,p);pe==4&&Mr(this),this.o&&!this.K&&(pe==4?Lf(this.j,this):(this.o=!1,Uo(this)))}else sT(this.g),f==400&&p.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Mr(this),ui(this)}}}catch{}finally{}};function HE(a){if(!hf(a))return a.g.la();const f=Df(a.g);if(f==="")return"";let p="";const _=f.length,D=tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Mr(a),ui(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,p+=a.h.i.decode(f[V],{stream:!(D&&V==_-1)});return f.length=0,a.h.g+=p,a.C=0,a.h.g}function hf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function qE(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?el:(p=Number(f.substring(p,_)),isNaN(p)?lf:(_+=1,_+p>f.length?el:(f=f.slice(_,_+p),a.C=_+p,f)))}Xn.prototype.cancel=function(){this.K=!0,Mr(this)};function Uo(a){a.T=Date.now()+a.H,ff(a,a.H)}function ff(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ai(u(a.aa,a),f)}function nl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($E(this.i,this.B),this.M!=2&&(oi(),bt(17)),Mr(this),this.m=2,ui(this)):ff(this,this.T-a)};function ui(a){a.j.I==0||a.K||Lf(a.j,a)}function Mr(a){nl(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,De(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function rl(a,f){try{var p=a.j;if(p.I!=0&&(p.g==a||sl(p.h,a))){if(!a.L&&sl(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Wo(p),Ho(p);else break e;ul(p),bt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ai(u(p.Va,p),6e3));mf(p.h)<=1&&p.ta&&(p.ta=void 0)}else Fr(p,11)}else if((a.L||p.g==a)&&Wo(p),!T(f))for(D=p.Ba.g.parse(f),f=0;f<D.length;f++){let ke=D[f];const st=ke[0];if(!(st<=p.K))if(p.K=st,ke=ke[1],p.I==2)if(ke[0]=="c"){p.M=ke[1],p.ba=ke[2];const fn=ke[3];fn!=null&&(p.ka=fn,p.j.info("VER="+p.ka));const Ur=ke[4];Ur!=null&&(p.za=Ur,p.j.info("SVER="+p.za));const nr=ke[5];nr!=null&&typeof nr=="number"&&nr>0&&(_=1.5*nr,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const rr=a.g;if(rr){const zo=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var V=_.h;V.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(il(V,V.h),V.h=null))}if(_.G){const fl=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(_.wa=fl,xe(_.J,_.G,fl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var K=a;if(_.na=$f(_,_.L?_.ba:null,_.W),K.L){gf(_.h,K);var pe=K,et=_.O;et&&(pe.H=et),pe.D&&(nl(pe),Uo(pe)),_.g=K}else xf(_);p.i.length>0&&qo(p)}else ke[0]!="stop"&&ke[0]!="close"||Fr(p,7);else p.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Fr(p,7):ll(p):ke[0]!="noop"&&p.l&&p.l.qa(ke),p.A=0)}}oi(4)}catch{}}var WE=class{constructor(a,f){this.g=a,this.map=f}};function df(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mf(a){return a.h?1:a.g?a.g.size:0}function sl(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function il(a,f){a.g?a.g.add(f):a.h=f}function gf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}df.prototype.cancel=function(){if(this.i=_f(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _f(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.G);return f}return y(a.i)}var yf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GE(a,f){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,V=null;_>=0?(D=a[p].substring(0,_),V=a[p].substring(_+1)):D=a[p],f(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Zn?(this.l=a.l,hi(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.u),this.h=a.h,ol(this,Af(a.i)),this.m=a.m):a&&(f=String(a).match(yf))?(this.l=!1,hi(this,f[1]||"",!0),this.o=di(f[2]||""),this.g=di(f[3]||"",!0),fi(this,f[4]),this.h=di(f[5]||"",!0),ol(this,f[6]||"",!0),this.m=di(f[7]||"")):(this.l=!1,this.i=new mi(null,this.l))}Zn.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(pi(f,vf,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(pi(f,vf,!0),"@"),a.push(li(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(pi(p,p.charAt(0)=="/"?QE:KE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",pi(p,JE)),a.join("")},Zn.prototype.resolve=function(a){const f=hn(this);let p=!!a.j;p?hi(f,a.j):p=!!a.o,p?f.o=a.o:p=!!a.g,p?f.g=a.g:p=a.u!=null;var _=a.h;if(p)fi(f,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=f.h.lastIndexOf("/");D!=-1&&(_=f.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let K=0;K<D.length;){const pe=D[K++];pe=="."?_&&K==D.length&&V.push(""):pe==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&K==D.length&&V.push("")):(V.push(pe),_=!0)}_=V.join("/")}else _=D}return p?f.h=_:p=a.i.toString()!=="",p?ol(f,Af(a.i)):p=!!a.m,p&&(f.m=a.m),f};function hn(a){return new Zn(a)}function hi(a,f,p){a.j=p?di(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function ol(a,f,p){f instanceof mi?(a.i=f,XE(a.i,a.l)):(p||(f=pi(f,YE)),a.i=new mi(f,a.l))}function xe(a,f,p){a.i.set(f,p)}function $o(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function di(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,zE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vf=/[#\/\?@]/g,KE=/[#\?:]/g,QE=/[#\?]/g,YE=/[#\?@]/g,JE=/#/g;function mi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&GE(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=mi.prototype,t.add=function(a,f){Lr(this),this.i=null,a=ps(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Ef(a,f){Lr(a),f=ps(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Tf(a,f){return Lr(a),f=ps(a,f),a.g.has(f)}t.forEach=function(a,f){Lr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(f,D,_,this)},this)},this)};function wf(a,f){Lr(a);let p=[];if(typeof f=="string")Tf(a,f)&&(p=p.concat(a.g.get(ps(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)p=p.concat(a[f]);return p}t.set=function(a,f){return Lr(this),this.i=null,a=ps(this,a),Tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=wf(this,a),a.length>0?String(a[0]):f):f};function If(a,f,p){Ef(a,f),p.length>0&&(a.i=null,a.g.set(ps(a,f),y(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let _=0;_<f.length;_++){var p=f[_];const D=li(p);p=wf(this,p);for(let V=0;V<p.length;V++){let K=D;p[V]!==""&&(K+="="+li(p[V])),a.push(K)}}return this.i=a.join("&")};function Af(a){const f=new mi;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function ps(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function XE(a,f){f&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(Ef(this,_),If(this,D,p))},a)),a.j=f}function ZE(a,f){const p=new ci;if(o.Image){const _=new Image;_.onload=h(er,p,"TestLoadImage: loaded",!0,f,_),_.onerror=h(er,p,"TestLoadImage: error",!1,f,_),_.onabort=h(er,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=h(er,p,"TestLoadImage: timeout",!1,f,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function eT(a,f){const p=new ci,_=new AbortController,D=setTimeout(()=>{_.abort(),er(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?er(p,"TestPingServer: ok",!0,f):er(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),er(p,"TestPingServer: error",!1,f)})}function er(a,f,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function tT(){this.g=new pt}function al(a){this.i=a.Sb||null,this.h=a.ab||!1}d(al,Ft),al.prototype.g=function(){return new Bo(this.i,this.h)};function Bo(a,f){W.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Bo,W),t=Bo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function bf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?gi(this):_i(this),this.readyState==3&&bf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,gi(this))},t.Na=function(a){this.g&&(this.response=a,gi(this))},t.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_i(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sf(a){let f="";return ft(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function cl(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Sf(p),typeof a=="string"?p!=null&&li(p):xe(a,f,p))}function je(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(je,W);var nT=/^https?$/i,rT=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():af.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Rf(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(rT,f,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of p)this.g.setRequestHeader(V,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Rf(this,V)}};function Rf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,Cf(a),jo(a)}function Cf(a){a.A||(a.A=!0,H(a,"complete"),H(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,H(this,"complete"),H(this,"abort"),jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jo(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Pf(this):this.Xa())},t.Xa=function(){Pf(this)};function Pf(a){if(a.h&&typeof i<"u"){if(a.v&&tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(H(a,"readystatechange"),tr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=V===0){let K=String(a.D).match(yf)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),_=!nT.test(K?K.toLowerCase():"")}p=_}if(p)H(a,"complete"),H(a,"success");else{a.o=6;try{var D=tr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Cf(a)}}finally{jo(a)}}}}function jo(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,f||H(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),dt(f)}};function Df(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sT(a){const f={};a=(a.g&&tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var p=jE(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=f[D]||[];f[D]=V,V.push(p)}Wt(f,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function kf(a){this.za=0,this.i=[],this.j=new ci,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yi("baseRetryDelayMs",5e3,a),this.Za=yi("retryDelaySeedMs",1e4,a),this.Ta=yi("forwardChannelMaxRetries",2,a),this.va=yi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new df(a&&a.concurrentRequestLimit),this.Ba=new tT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=kf.prototype,t.ka=8,t.I=1,t.connect=function(a,f,p,_){bt(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=$f(this,null,this.W),qo(this)};function ll(a){if(Nf(a),a.I==3){var f=a.V++,p=hn(a.J);if(xe(p,"SID",a.M),xe(p,"RID",f),xe(p,"TYPE","terminate"),vi(a,p),f=new Xn(a,a.j,f),f.M=2,f.A=$o(hn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.A,p=!0),p||(f.g=Bf(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Uo(f)}Uf(a)}function Ho(a){a.g&&(hl(a),a.g.cancel(),a.g=null)}function Nf(a){Ho(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function qo(a){if(!pf(a.h)&&!a.m){a.m=!0;var f=a.Ea;G||v(),z||(G(),z=!0),E.add(f,a),a.D=0}}function iT(a,f){return mf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ai(u(a.Ea,a,f),Ff(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Xn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Xe(V),Xt(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,f>4096){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Vf(this,D,f),p=hn(this.J),xe(p,"RID",a),xe(p,"CVER",22),this.G&&xe(p,"X-HTTP-Session-Id",this.G),vi(this,p),V&&(this.R?f="headers="+li(Sf(V))+"&"+f:this.u&&cl(p,this.u,V)),il(this.h,D),this.Ra&&xe(p,"TYPE","init"),this.S?(xe(p,"$req",f),xe(p,"SID","null"),D.U=!0,tl(D,p,null)):tl(D,p,f),this.I=2}}else this.I==3&&(a?Of(this,a):this.i.length==0||pf(this.h)||Of(this))};function Of(a,f){var p;f?p=f.l:p=a.V++;const _=hn(a.J);xe(_,"SID",a.M),xe(_,"RID",p),xe(_,"AID",a.K),vi(a,_),a.u&&a.o&&cl(_,a.u,a.o),p=new Xn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),f&&(a.i=f.G.concat(a.i)),f=Vf(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),il(a.h,p),tl(p,_,f)}function vi(a,f){a.H&&ft(a.H,function(p,_){xe(f,_,p)}),a.l&&ft({},function(p,_){xe(f,_,p)})}function Vf(a,f,p){p=Math.min(a.i.length,p);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let pe=-1;for(;;){const et=["count="+p];pe==-1?p>0?(pe=D[0].g,et.push("ofs="+pe)):pe=0:et.push("ofs="+pe);let ke=!0;for(let st=0;st<p;st++){var V=D[st].g;const fn=D[st].map;if(V-=pe,V<0)pe=Math.max(0,D[st].g-100),ke=!1;else try{V="req"+V+"_"||"";try{var K=fn instanceof Map?fn:Object.entries(fn);for(const[Ur,nr]of K){let rr=nr;c(nr)&&(rr=Ae(nr)),et.push(V+Ur+"="+encodeURIComponent(rr))}}catch(Ur){throw et.push(V+"type="+encodeURIComponent("_badmap")),Ur}}catch{_&&_(fn)}}if(ke){K=et.join("&");break e}}K=void 0}return a=a.i.splice(0,p),f.G=a,K}function xf(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;G||v(),z||(G(),z=!0),E.add(f,a),a.A=0}}function ul(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ai(u(a.Da,a),Ff(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Mf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ai(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Ho(this),Mf(this))};function hl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Mf(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=hn(a.na);xe(f,"RID","rpc"),xe(f,"SID",a.M),xe(f,"AID",a.K),xe(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(f,"TO",a.ia),xe(f,"TYPE","xmlhttp"),vi(a,f),a.u&&a.o&&cl(f,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=$o(hn(f)),p.u=null,p.R=!0,uf(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Ho(this),ul(this),bt(19))};function Wo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lf(a,f){var p=null;if(a.g==f){Wo(a),hl(a),a.g=null;var _=2}else if(sl(a.h,f))p=f.G,gf(a.h,f),_=1;else return;if(a.I!=0){if(f.o)if(_==1){p=f.u?f.u.length:0,f=Date.now()-f.F;var D=a.D;_=xr(),H(_,new sf(_,p)),qo(a)}else xf(a);else if(D=f.m,D==3||D==0&&f.X>0||!(_==1&&iT(a,f)||_==2&&ul(a)))switch(p&&p.length>0&&(f=a.h,f.i=f.i.concat(p)),D){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function Ff(a,f){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*f}function Fr(a,f){if(a.j.info("Error code "+f),f==2){var p=u(a.bb,a),_=a.Ua;const D=!_;_=new Zn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||hi(_,"https"),$o(_),D?ZE(_.toString(),p):eT(_.toString(),p)}else bt(2);a.I=0,a.l&&a.l.pa(f),Uf(a),Nf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Uf(a){if(a.I=0,a.ja=[],a.l){const f=_f(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ja,f),R(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function $f(a,f,p){var _=p instanceof Zn?hn(p):new Zn(p);if(_.g!="")f&&(_.g=f+"."+_.g),fi(_,_.u);else{var D=o.location;_=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const V=new Zn(null);_&&hi(V,_),f&&(V.g=f),D&&fi(V,D),p&&(V.h=p),_=V}return p=a.G,f=a.wa,p&&f&&xe(_,p,f),xe(_,"VER",a.ka),vi(a,_),_}function Bf(a,f,p){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new je(new al({ab:p})):new je(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jf(){}t=jf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Go(){}Go.prototype.g=function(a,f){return new $t(a,f)};function $t(a,f){W.call(this),this.g=new kf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!T(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!T(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ms(this)}d($t,W),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){ll(this.g)},$t.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Ae(a),a=p);f.i.push(new WE(f.Ya++,a)),f.I==3&&qo(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,ll(this.g),delete this.g,$t.Z.N.call(this)};function Hf(a){fs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}d(Hf,fs);function qf(){ot.call(this),this.status=1}d(qf,ot);function ms(a){this.g=a}d(ms,jf),ms.prototype.ra=function(){H(this.g,"a")},ms.prototype.qa=function(a){H(this.g,new Hf(a))},ms.prototype.pa=function(a){H(this.g,new qf)},ms.prototype.oa=function(){H(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,lv=function(){return new Go},cv=function(){return xr()},av=rt,Eu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,ya=Fo,of.COMPLETE="complete",ov=of,Ut.EventType=Zt,Zt.OPEN="a",Zt.CLOSE="b",Zt.ERROR="c",Zt.MESSAGE="d",W.prototype.listen=W.prototype.J,Pi=Ut,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,iv=je}).apply(typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Zs="12.11.0";function MP(t){Zs=t}/**
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
 */const os=new uh("@firebase/firestore");function ws(){return os.logLevel}function ee(t,...e){if(os.logLevel<=ye.DEBUG){const n=e.map(Ih);os.debug(`Firestore (${Zs}): ${t}`,...n)}}function Gn(t,...e){if(os.logLevel<=ye.ERROR){const n=e.map(Ih);os.error(`Firestore (${Zs}): ${t}`,...n)}}function as(t,...e){if(os.logLevel<=ye.WARN){const n=e.map(Ih);os.warn(`Firestore (${Zs}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,uv(t,r,n)}function uv(t,e,n){let r=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||uv(e,s,r)}function fe(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class FP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UP{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class $P{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class BP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $P(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new nm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function HP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ah{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=HP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Tu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Bl(s)===Bl(i)?ve(s,i):Bl(s)?1:-1}return ve(t.length,e.length)}const qP=55296,WP=57343;function Bl(t){const e=t.charCodeAt(0);return e>=qP&&e<=WP}function qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const rm="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):Tu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class Ve extends yn{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const GP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends yn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return GP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rm}static keyField(){return new lt([rm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ve.fromString(e))}static fromName(e){return new re(Ve.fromString(e).popFirst(5))}static empty(){return new re(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ve(e.slice()))}}/**
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
 */function fv(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zP(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sm(t){if(!re.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function im(t){if(re.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function No(t,e){if(!dv(t))throw new Z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Z(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const om=-62135596800,am=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*am);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<om)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/am}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(No(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-om;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Qe("string",Me._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Me(0,0))}static max(){return new he(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const co=-1;function KP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new br(s,re.empty(),e)}function QP(t){return new br(t.readTime,t.key,co)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(he.min(),re.empty(),co)}static max(){return new br(he.max(),re.empty(),co)}}function YP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const JP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ei(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==JP)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ZP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Lc.ce=-1;/**
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
 */const bh=-1;function Fc(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function eD(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const pv="";function tD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cm(e)),e=nD(t.get(n),e);return cm(e)}function nD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pv:n+="";break;default:n+=i}}return n}function cm(t){return t+pv+""}/**
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
 */function lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new um(this.data.getIterator())}getIteratorFrom(e){return new um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new nt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gv("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const rD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=rD.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */const _v="server_timestamp",yv="__type__",vv="__previous_value__",Ev="__local_write_time__";function Sh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[yv])==null?void 0:r.stringValue)===_v}function Uc(t){const e=t.mapValue.fields[vv];return Sh(e)?Uc(e):e}function lo(t){const e=Sr(t.mapValue.fields[Ev].timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class sD{constructor(e,n,r,s,i,o,c,l,u,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const Za="(default)";class uo{constructor(e,n){this.projectId=e,this.database=n||Za}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database===Za}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}function iD(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(t.options.projectId,e)}/**
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
 */const Tv="__type__",oD="__max__",ia={mapValue:{}},wv="__vector__",ec="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sh(t)?4:cD(t)?9007199254740991:aD(t)?10:11:ae(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),c=Sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?Xa(o)===Xa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(lm(o)!==lm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Pn(o[l],c[l])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function ho(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return hm(t.timestampValue,e.timestampValue);case 4:return hm(lo(t),lo(e));case 5:return Tu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Rr(i),l=Rr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=ve(c[u],l[u]);if(h!==0)return h}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(We(i.latitude),We(o.latitude));return c!==0?c:ve(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,R,P;const c=i.fields||{},l=o.fields||{},u=(m=c[ec])==null?void 0:m.arrayValue,h=(y=l[ec])==null?void 0:y.arrayValue,d=ve(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((P=h==null?void 0:h.values)==null?void 0:P.length)||0);return d!==0?d:fm(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ia.mapValue&&o===ia.mapValue)return 0;if(i===ia.mapValue)return 1;if(o===ia.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=Tu(l[d],h[d]);if(m!==0)return m;const y=Ws(c[l[d]],u[h[d]]);if(y!==0)return y}return ve(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Sr(t),r=Sr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function fm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Gs(t){return wu(t)}function wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wu(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function va(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(t);return e?16+va(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+va(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Or(r.fields,(i,o)=>{s+=i.length+va(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function dm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iu(t){return!!t&&"integerValue"in t}function Rh(t){return!!t&&"arrayValue"in t}function pm(t){return!!t&&"nullValue"in t}function mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function aD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Tv])==null?void 0:r.stringValue)===wv}function qi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return{...t}}function cD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oD}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=qi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Or(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(qi(this.value))}}function Iv(t){const e=[];return Or(t.fields,(n,r)=>{const s=new lt([n]);if(Ea(r)){const i=Iv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,he.min(),he.min(),he.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,he.min(),he.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,he.min(),he.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tc{constructor(e,n){this.position=e,this.inclusive=n}}function gm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function lD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Av{}class Ke extends Av{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hD(e,n,r):n==="array-contains"?new pD(e,r):n==="in"?new mD(e,r):n==="not-in"?new gD(e,r):n==="array-contains-any"?new _D(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fD(e,r):new dD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ws(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends Av{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bv(t){return t.op==="and"}function Sv(t){return uD(t)&&bv(t)}function uD(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Au(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(Sv(t))return t.filters.map(e=>Au(e)).join(",");{const e=t.filters.map(n=>Au(n)).join(",");return`${t.op}(${e})`}}function Rv(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Rv(o,s.filters[c]),!0):!1}(t,e):void ae(19439)}function Cv(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(Cv).join(" ,")+"}"}(t):"Filter"}class hD extends Ke{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class fD extends Ke{constructor(e,n){super(e,"in",n),this.keys=Pv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dD extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Pv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class pD extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rh(n)&&ho(n.arrayValue,this.value)}}class mD extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class gD extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ho(this.value.arrayValue,n)}}class _D extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
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
 */class yD{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function ym(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yD(t,e,n,r,s,i,o)}function Ch(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.Te=n}return e.Te}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_m(t.startAt,e.startAt)&&_m(t.endAt,e.endAt)}function bu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ni{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function vD(t,e,n,r,s,i,o,c){return new ni(t,e,n,r,s,i,o,c)}function Dv(t){return new ni(t)}function vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ED(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function kv(t){return t.collectionGroup!==null}function Wi(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(lt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new fo(i,r))}),n.has(lt.keyField().canonicalString())||e.Ee.push(new fo(lt.keyField(),r))}return e.Ee}function An(t){const e=fe(t);return e.Ie||(e.Ie=TD(e,Wi(t))),e.Ie}function TD(t,e){if(t.limitType==="F")return ym(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fo(s.field,i)});const n=t.endAt?new tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tc(t.startAt.position,t.startAt.inclusive):null;return ym(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Su(t,e){const n=t.filters.concat([e]);return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wD(t,e){const n=t.explicitOrderBy.concat([e]);return new ni(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return Ph(An(t),An(e))&&t.limitType===e.limitType}function Nv(t){return`${Ch(An(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cv(s)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gs(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=gm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Wi(r),s)||r.endAt&&!function(o,c,l){const u=gm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Wi(r),s))}(t,e)}function ID(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ov(t){return(e,n)=>{let r=!1;for(const s of Wi(t)){const i=AD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AD(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ws(l,u):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
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
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mv(this.inner)}size(){return this.innerSize}}/**
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
 */const bD=new Be(re.comparator);function Kn(){return bD}const Vv=new Be(re.comparator);function Di(...t){let e=Vv;for(const n of t)e=e.insert(n.key,n);return e}function xv(t){let e=Vv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Gi()}function Mv(){return Gi()}function Gi(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const SD=new Be(re.comparator),RD=new nt(re.comparator);function Ee(...t){let e=RD;for(const n of t)e=e.add(n);return e}const CD=new nt(ve);function PD(){return CD}/**
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
 */function Dh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function Lv(t){return{integerValue:""+t}}function DD(t,e){return eD(e)?Lv(e):Dh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jc{constructor(){this._=void 0}}function kD(t,e,n){return t instanceof po?function(s,i){const o={fields:{[yv]:{stringValue:_v},[Ev]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sh(i)&&(i=Uc(i)),i&&(o.fields[vv]=i),{mapValue:o}}(n,e):t instanceof mo?Uv(t,e):t instanceof go?$v(t,e):function(s,i){const o=Fv(s,i),c=Em(o)+Em(s.Ae);return Iu(o)&&Iu(s.Ae)?Lv(c):Dh(s.serializer,c)}(t,e)}function ND(t,e,n){return t instanceof mo?Uv(t,e):t instanceof go?$v(t,e):n}function Fv(t,e){return t instanceof nc?function(r){return Iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class po extends jc{}class mo extends jc{constructor(e){super(),this.elements=e}}function Uv(t,e){const n=Bv(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class go extends jc{constructor(e){super(),this.elements=e}}function $v(t,e){let n=Bv(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class nc extends jc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Em(t){return We(t.integerValue||t.doubleValue)}function Bv(t){return Rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class OD{constructor(e,n){this.field=e,this.transform=n}}function VD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mo&&s instanceof mo||r instanceof go&&s instanceof go?qs(r.elements,s.elements,Pn):r instanceof nc&&s instanceof nc?Pn(r.Ae,s.Ae):r instanceof po&&s instanceof po}(t.transform,e.transform)}class xD{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hc{}function jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kh(t.key,Jt.none()):new Oo(t.key,t.data,Jt.none());{const n=t.data,r=Vt.empty();let s=new nt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(t.key,r,new Ht(s.toArray()),Jt.none())}}function MD(t,e,n){t instanceof Oo?function(s,i,o){const c=s.value.clone(),l=wm(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(s,i,o){if(!Ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=wm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Hv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof Oo?function(i,o,c,l){if(!Ta(i.precondition,o))return c;const u=i.value.clone(),h=Im(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,o,c,l){if(!Ta(i.precondition,o))return c;const u=Im(i.fieldTransforms,l,o),h=o.data;return h.setAll(Hv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return Ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function LD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fv(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function Tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,(i,o)=>VD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends Hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wm(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ND(o,c,n[s]))}return r}function Im(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kD(i,o,e))}return r}class kh extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FD extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&MD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=jv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Tm(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Tm(n,r))}}class Nh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return SD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nh(e,n,r,s)}}/**
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
 */class $D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class BD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,Ie;function jD(t){switch(t){case U.OK:return ae(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function qv(t){if(t===void 0)return Gn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return ae(39323,{code:t})}}(Ie=ze||(ze={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function HD(){return new TextEncoder}/**
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
 */const qD=new Tr([4294967295,4294967295],0);function Am(t){const e=HD().encode(t),n=new sv;return n.update(e),new Uint8Array(n.digest())}function bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Tr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(qD)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Am(e),[r,s]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Am(e),[r,s]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qc(he.min(),s,new Be(ve),Kn(),Ee())}}class Vo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vo(r,n,Ee(),Ee(),Ee())}}/**
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
 */class wa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Wv{constructor(e,n){this.targetId=e,this.Ce=n}}class Gv{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sm{constructor(){this.ve=0,this.Fe=Rm(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Vo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Rm()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.Je=oa(),this.He=oa(),this.Ze=new Be(ve)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bu(i))if(r===0){const o=new re(i.path);this.et(n,o,Et.newNoDocument(o,he.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Rr(r).toUint8Array()}catch(l){if(l instanceof gv)return as("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Oh(o,s,i)}catch(l){return as(l instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&bu(c.target)){const l=new re(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new qc(e,n,this.Ze,this.je,r);return this.je=Kn(),this.Je=oa(),this.He=oa(),this.Ze=new Be(ve),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Sm,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new nt(ve),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function oa(){return new Be(re.comparator)}function Rm(){return new Be(re.comparator)}const GD={asc:"ASCENDING",desc:"DESCENDING"},zD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KD={and:"AND",or:"OR"};class QD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cu(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YD(t,e){return rc(t,e.toTimestamp())}function bn(t){return Pe(!!t,49232),he.fromTimestamp(function(n){const r=Sr(n);return new Me(r.seconds,r.nanos)}(t))}function Vh(t,e){return Pu(t,e).canonicalString()}function Pu(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kv(t){const e=Ve.fromString(t);return Pe(Zv(e),10190,{key:e.toString()}),e}function Du(t,e){return Vh(t.databaseId,e.path)}function jl(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Yv(n))}function Qv(t,e){return Vh(t.databaseId,e)}function JD(t){const e=Kv(t);return e.length===4?Ve.emptyPath():Yv(e)}function ku(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yv(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cm(t,e,n){return{name:Du(t,e),fields:n.value.mapValue.fields}}function XD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Pe(h===void 0||typeof h=="string",58123),ht.fromBase64String(h||"")):(Pe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ht.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?U.UNKNOWN:qv(u.code);return new Z(h,u.message||"")}(o);n=new Gv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jl(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):he.min(),c=new Vt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new wa(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jl(t,r.document),i=r.readTime?bn(r.readTime):he.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new wa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jl(t,r.document),i=r.removedTargetIds||[];n=new wa([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BD(s,i),c=r.targetId;n=new Wv(c,o)}}return n}function ZD(t,e){let n;if(e instanceof Oo)n={update:Cm(t,e.key,e.value)};else if(e instanceof kh)n={delete:Du(t,e.key)};else if(e instanceof Vr)n={update:Cm(t,e.key,e.data),updateMask:c1(e.fieldMask)};else{if(!(e instanceof FD))return ae(16599,{dt:e.type});n={verify:Du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof nc)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function e1(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(he.min())&&(o=bn(i)),new xD(o,s.transformResults||[])}(n,e))):[]}function t1(t,e){return{documents:[Qv(t,e.path)]}}function n1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qv(t,s);const i=function(u){if(u.length!==0)return Xv(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:As(m.field),direction:i1(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Cu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function r1(t){let e=JD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=Jv(d);return m instanceof un&&Sv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(R){return new fo(bs(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(d){let m;return m=typeof d=="object"?d.value:d,Fc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,y=d.values||[];return new tc(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,y=d.values||[];return new tc(y,m)}(n.endAt)),vD(e,s,o,i,c,"F",l,u)}function s1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bs(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bs(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Jv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function i1(t){return GD[t]}function o1(t){return zD[t]}function a1(t){return KD[t]}function As(t){return{fieldPath:t.canonicalString()}}function bs(t){return lt.fromServerFormat(t.fieldPath)}function Xv(t){return t instanceof Ke?function(n){if(n.op==="=="){if(mm(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(pm(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mm(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(pm(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:o1(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>Xv(s));return r.length===1?r[0]:{compositeFilter:{op:a1(n.op),filters:r}}}(t):ae(54877,{filter:t})}function c1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function eE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class _r{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class l1{constructor(e){this.yt=e}}function u1(t){const e=r1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class h1{constructor(){this.bn=new f1}addToCollectionParentIndex(e,n){return this.bn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(br.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class f1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tE=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(tE,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class zs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new zs(0)}static ar(){return new zs(-1)}}/**
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
 */const Dm="LruGarbageCollector",d1=1048576;function km([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class p1{constructor(e){this.Pr=e,this.buffer=new nt(km),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();km(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class m1{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ee(Dm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?ee(Dm,"Ignoring IndexedDB error during garbage collection: ",n):await ei(n)}await this.Ar(3e5)})}}class g1{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Lc.ce);const r=new p1(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Pm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pm):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ws()<=ye.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function _1(t,e){return new g1(t,e)}/**
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
 */class y1{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class v1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class E1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,Ht.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Di();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Kn();const o=Gi(),c=function(){return Gi()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Vr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),zi(h.mutation,u,h.mutation.getFieldMask(),Me.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>c.set(u,new v1(h,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Gi();let s=new Be((o,c)=>o-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ht.empty();h=c.applyToLocalView(u,h),r.set(l,h);const d=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,d=Mv();h.forEach(m=>{if(!i.has(m)){const y=jv(n.get(m),r.get(m));y!==null&&d.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return ED(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Yr());let c=co,l=i;return o.next(u=>$.forEach(u,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(h=>({batchId:c,changes:xv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Di();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(d,m){return new ni(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Et.newInvalidDocument(h)))});let c=Di();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&zi(h.mutation,u,Ht.empty(),Me.now()),Bc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class T1{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return $.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:u1(s.bundledQuery),readTime:bn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class w1{constructor(){this.overlays=new Be(re.comparator),this.Lr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Yr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return $.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $D(n,r));let i=this.Lr.get(n);i===void 0&&(i=Ee(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class I1{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class xh{constructor(){this.kr=new nt(it.qr),this.Kr=new nt(it.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new it(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new it(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new re(new Ve([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new re(new Ve([])),r=new it(n,e),s=new it(n,e+1);let i=Ee();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return re.comparator(e.key,n.key)||ve(e.Jr,n.Jr)}static Ur(e,n){return ve(e.Jr,n.Jr)||re.comparator(e.key,n.key)}}/**
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
 */class A1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new nt(it.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UD(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?bh:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ve);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{r=r.add(c.Jr)})}),$.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new it(new re(i),0);let c=new nt(ve);return this.Hr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Jr)),!0)},o),$.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return $.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new it(n,0),s=this.Hr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class b1{constructor(e){this.ti=e,this.docs=function(){return new Be(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YP(QP(h),r)<=0||(s.has(h.key)||Bc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ni(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new S1(this)}getSize(e){return $.resolve(this.size)}}class S1 extends y1{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class R1{constructor(e){this.persistence=e,this.ri=new ls(n=>Ch(n),Ph),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ii=0,this.si=new xh,this.targetCount=0,this.oi=zs._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),$.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.lr(n),$.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.si.containsKey(n))}}/**
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
 */class nE{constructor(e,n){this._i={},this.overlays={},this.ai=new Lc(0),this.ui=!1,this.ui=!0,this.ci=new I1,this.referenceDelegate=e(this),this.li=new R1(this),this.indexManager=new h1,this.remoteDocumentCache=function(s){return new b1(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new l1(n),this.Pi=new T1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new w1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new A1(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new C1(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return $.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class C1 extends XP{constructor(e){super(),this.currentSequenceNumber=e}}class Mh{constructor(e){this.persistence=e,this.Ri=new xh,this.Ai=null}static Vi(e){return new Mh(e)}get di(){if(this.Ai)return this.Ai;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,r=>{const s=re.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class sc{constructor(e,n){this.persistence=e,this.fi=new ls(r=>tD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=_1(this,n)}static Vi(e,n){return new sc(e,n)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return $.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),$.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=va(e.data.value)),n}wr(e,n,r){return $.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class P1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _S()?8:ZP(It())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new P1;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ws()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ws()<=ye.DEBUG&&ee("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ws()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):$.resolve())}gs(e,n){if(vm(n))return $.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ss(n,c);return this.bs(n,u,o,l.readTime)?this.gs(e,Ru(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return vm(n)||s.isEqual(he.min())?$.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?$.resolve(null):(ws()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(n)),this.Ds(e,o,n,KP(s,co)).next(c=>c))})}Ss(e,n){let r=new nt(Ov(e));return n.forEach((s,i)=>{Bc(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ws()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Is(n)),this.fs.getDocumentsMatchingQuery(e,n,br.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Fh="LocalStore",k1=3e8;class N1{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Be(ve),this.Fs=new ls(i=>Ch(i),Ph),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E1(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function O1(t,e,n,r){return new N1(t,e,n,r)}async function rE(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:c}))})})}function V1(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const d=u.batch,m=d.keys();let y=$.resolve();return m.forEach(R=>{y=y.next(()=>h.getEntry(l,R)).next(P=>{const O=u.docVersions.get(R);Pe(O!==null,48541),P.version.compareTo(O)<0&&(d.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sE(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function x1(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;c.push(n.li.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,d)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(ht.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(d,y),function(P,O,k){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=k1?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,y,h)&&c.push(n.li.updateTargetData(i,y))});let l=Kn(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(M1(i,o,e.documentUpdates).next(h=>{l=h.Bs,u=h.Ls})),!r.isEqual(he.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(d=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function M1(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(Fh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function L1(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function F1(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nu(t,e,n){const r=fe(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ti(o))throw o;ee(Fh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Nm(t,e,n){const r=fe(t);let s=he.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=fe(l),m=d.Fs.get(h);return m!==void 0?$.resolve(d.vs.get(m)):d.li.getTargetData(u,h)}(r,o,An(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Ee())).next(c=>(U1(r,ID(e),c),{documents:c,ks:i})))}function U1(t,e,n){let r=t.Ms.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Om{constructor(){this.activeTargetIds=PD()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $1{constructor(){this.vo=new Om,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Om,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class B1{Mo(e){}shutdown(){}}/**
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
 */const Vm="ConnectivityMonitor";class xm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ee(Vm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ee(Vm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let aa=null;function Ou(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
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
 */const Hl="RestConnection",j1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class H1{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Za?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Ou(),c=this.Qo(e,n.toUriEncodedString());ee(Hl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),h=Co(u);return this.zo(e,c,l,r,h).then(d=>(ee(Hl,`Received RPC '${e}' ${o}: `,d),d),d=>{throw as(Hl,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=j1[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class q1{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const mt="WebChannelConnection",Si=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Os extends H1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Os.c_){const e=cv();Si(e,av.STAT_EVENT,n=>{n.stat===Eu.PROXY?ee(mt,"STAT_EVENT: detected buffering proxy"):n.stat===Eu.NOPROXY&&ee(mt,"STAT_EVENT: detected no buffering proxy")}),Os.c_=!0}}zo(e,n,r,s,i){const o=Ou();return new Promise((c,l)=>{const u=new iv;u.setWithCredentials(!0),u.listenOnce(ov.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ya.NO_ERROR:const d=u.getResponseJson();ee(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case ya.TIMEOUT:ee(mt,`RPC '${e}' ${o} timed out`),l(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const m=u.getStatus();if(ee(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const P=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(N)>=0?N:U.UNKNOWN}(R.status);l(new Z(P,R.message))}else l(new Z(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Z(U.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(mt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ee(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Ou(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);this.E_(h);let d=!1,m=!1;const y=new q1({Jo:R=>{m?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(d||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},Ho:()=>h.close()});return Si(h,Pi.EventType.OPEN,()=>{m||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),Si(h,Pi.EventType.CLOSE,()=>{m||(m=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(h))}),Si(h,Pi.EventType.ERROR,R=>{m||(m=!0,as(mt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),y.o_(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),Si(h,Pi.EventType.MESSAGE,R=>{var P;if(!m){const O=R.data[0];Pe(!!O,16349);const k=O,N=(k==null?void 0:k.error)||((P=k[0])==null?void 0:P.error);if(N){ee(mt,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let q=function(E){const v=ze[E];if(v!==void 0)return qv(v)}(M),G=N.message;M==="NOT_FOUND"&&G.includes("database")&&G.includes("does not exist")&&G.includes(this.databaseId.database)&&as(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),q===void 0&&(q=U.INTERNAL,G="Unknown error status: "+M+" with message "+N.message),m=!0,y.o_(new Z(q,G)),h.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,O),y.__(O)}}),Os.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return lv()}}/**
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
 */function W1(t){return new Os(t)}function ql(){return typeof document<"u"?document:null}/**
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
 */function Wc(t){return new QD(t,!0)}/**
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
 */Os.c_=!1;class iE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Mm="PersistentStream";class oE{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Mm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(ee(Mm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G1 extends oE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=XD(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?bn(o.readTime):he.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=ku(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=bu(l)?{documents:t1(i,l)}:{query:n1(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zv(i,o.resumeToken);const u=Cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=rc(i,o.snapshotVersion.toTimestamp());const u=Cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=s1(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=ku(this.serializer),n.removeTarget=e,this.q_(n)}}class z1 extends oE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=e1(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ku(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZD(this.serializer,r))};this.q_(n)}}/**
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
 */class K1{}class Q1 extends K1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Pu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Pu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Y1(t,e,n,r){return new Q1(t,e,n,r)}class J1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cs="RemoteStore";class X1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{us(this)&&(ee(cs,"Restarting streams for network reachability change."),await async function(l){const u=fe(l);u.Ia.add(4),await xo(u),u.Va.set("Unknown"),u.Ia.delete(4),await Gc(u)}(this))})}),this.Va=new J1(r,s)}}async function Gc(t){if(us(t))for(const e of t.Ra)await e(!0)}async function xo(t){for(const e of t.Ra)await e(!1)}function aE(t,e){const n=fe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),jh(n)?Bh(n):ri(n).O_()&&$h(n,e))}function Uh(t,e){const n=fe(t),r=ri(n);n.Ea.delete(e),r.O_()&&cE(n,e),n.Ea.size===0&&(r.O_()?r.L_():us(n)&&n.Va.set("Unknown"))}function $h(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ri(t).Z_(e)}function cE(t,e){t.da.$e(e),ri(t).X_(e)}function Bh(t){t.da=new WD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ri(t).start(),t.Va.ua()}function jh(t){return us(t)&&!ri(t).x_()&&t.Ea.size>0}function us(t){return fe(t).Ia.size===0}function lE(t){t.da=void 0}async function Z1(t){t.Va.set("Online")}async function ek(t){t.Ea.forEach((e,n)=>{$h(t,e)})}async function tk(t,e){lE(t),jh(t)?(t.Va.ha(e),Bh(t)):t.Va.set("Unknown")}async function nk(t,e,n){if(t.Va.set("Online"),e instanceof Gv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){ee(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof wa?t.da.Xe(e):e instanceof Wv?t.da.st(e):t.da.tt(e),!n.isEqual(he.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ea.get(u);h&&i.Ea.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.Ea.get(l);if(!h)return;i.Ea.set(l,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),cE(i,l);const d=new _r(h.target,l,u,h.sequenceNumber);$h(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(cs,"Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!ti(e))throw e;t.Ia.add(1),await xo(t),t.Va.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(cs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Gc(t)})}function uE(t,e){return e().catch(n=>ic(t,n,e))}async function zc(t){const e=fe(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bh;for(;rk(e);)try{const s=await L1(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,sk(e,s)}catch(s){await ic(e,s)}hE(e)&&fE(e)}function rk(t){return us(t)&&t.Ta.length<10}function sk(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function hE(t){return us(t)&&!Pr(t).x_()&&t.Ta.length>0}function fE(t){Pr(t).start()}async function ik(t){Pr(t).ra()}async function ok(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function ak(t,e,n){const r=t.Ta.shift(),s=Nh.from(r,e,n);await uE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await zc(t)}async function ck(t,e){e&&Pr(t).Y_&&await async function(r,s){if(function(o){return jD(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();Pr(r).B_(),await uE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zc(r)}}(t,e),hE(t)&&fE(t)}async function Lm(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee(cs,"RemoteStore received new credentials");const r=us(n);n.Ia.add(3),await xo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Gc(n)}async function lk(t,e){const n=fe(t);e?(n.Ia.delete(2),await Gc(n)):e||(n.Ia.add(2),await xo(n),n.Va.set("Unknown"))}function ri(t){return t.ma||(t.ma=function(n,r,s){const i=fe(n);return i.sa(),new G1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:Z1.bind(null,t),Yo:ek.bind(null,t),t_:tk.bind(null,t),H_:nk.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),jh(t)?Bh(t):t.Va.set("Unknown")):(await t.ma.stop(),lE(t))})),t.ma}function Pr(t){return t.fa||(t.fa=function(n,r,s){const i=fe(n);return i.sa(),new z1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ik.bind(null,t),t_:ck.bind(null,t),ta:ok.bind(null,t),na:ak.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await zc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Hh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qh(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),ti(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Di(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fm{constructor(){this.ga=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ks(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class uk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class hk{constructor(){this.queries=Um(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Um(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function Um(){return new ls(t=>Nv(t),$c)}async function fk(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new uk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=qh(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Wh(n)}async function dk(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pk(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Wh(n)}function mk(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Wh(t){t.Ca.forEach(e=>{e.next()})}var Vu,$m;($m=Vu||(Vu={})).Ma="default",$m.Cache="cache";class gk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vu.Cache}}/**
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
 */class dE{constructor(e){this.key=e}}class pE{constructor(e){this.key=e}}class _k{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ee(),this.mutatedKeys=Ee(),this.eu=Ov(e),this.tu=new Vs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Fm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),y=Bc(this.query,d)?d:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?R!==P&&(r.track({type:3,doc:y}),O=!0):this.su(m,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(y?(o=o.add(y),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(y,R){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:O})}};return P(y)-P(R)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Ks(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fm,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new pE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new dE(r))}),n}cu(e){this.Za=e.ks,this.Ya=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ks.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Gh="SyncEngine";class yk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vk{constructor(e){this.key=e,this.hu=!1}}class Ek{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ls(c=>Nv(c),$c),this.Eu=new Map,this.Iu=new Set,this.Ru=new Be(re.comparator),this.Au=new Map,this.Vu=new xh,this.du={},this.mu=new Map,this.fu=zs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Tk(t,e,n=!0){const r=EE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await mE(r,e,n,!0),s}async function wk(t,e){const n=EE(t);await mE(n,e,!0,!1)}async function mE(t,e,n,r){const s=await F1(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Ik(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&aE(t.remoteStore,s),c}async function Ik(t,e,n,r,s){t.pu=(d,m,y)=>async function(P,O,k,N){let M=O.view.ru(k);M.bs&&(M=await Nm(P.localStore,O.query,!1).then(({documents:E})=>O.view.ru(E,M)));const q=N&&N.targetChanges.get(O.targetId),G=N&&N.targetMismatches.get(O.targetId)!=null,z=O.view.applyChanges(M,P.isPrimaryClient,q,G);return jm(P,O.targetId,z.au),z.snapshot}(t,d,m,y);const i=await Nm(t.localStore,e,!0),o=new _k(e,i.ks),c=o.ru(i.documents),l=Vo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);jm(t,n,u.au);const h=new yk(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function Ak(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!$c(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uh(r.remoteStore,s.targetId),xu(r,s.targetId)}).catch(ei)):(xu(r,s.targetId),await Nu(r.localStore,s.targetId,!0))}async function bk(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uh(n.remoteStore,r.targetId))}async function Sk(t,e,n){const r=Ok(t);try{const s=await function(o,c){const l=fe(o),u=Me.now(),h=c.reduce((y,R)=>y.add(R.key),Ee());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=Kn(),P=Ee();return l.xs.getEntries(y,h).next(O=>{R=O,R.forEach((k,N)=>{N.isValidDocument()||(P=P.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,R)).next(O=>{d=O;const k=[];for(const N of c){const M=LD(N,d.get(N.key).overlayedDocument);M!=null&&k.push(new Vr(N.key,M,Iv(M.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,k,c)}).next(O=>{m=O;const k=O.applyToLocalDocumentSet(d,P);return l.documentOverlayCache.saveOverlays(y,O.batchId,k)})}).then(()=>({batchId:m.batchId,changes:xv(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Be(ve)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await Mo(r,s.changes),await zc(r.remoteStore)}catch(s){const i=qh(s,"Failed to persist write");n.reject(i)}}async function gE(t,e){const n=fe(t);try{const r=await x1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))}),await Mo(n,r,e)}catch(r){await ei(r)}}function Bm(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach((h,d)=>{for(const m of d.Sa)m.va(c)&&(u=!0)}),u&&Wh(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rk(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(re.comparator);o=o.insert(i,Et.newNoDocument(i,he.min()));const c=Ee().add(i),l=new qc(he.min(),new Map,new Be(ve),o,c);await gE(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),zh(r)}else await Nu(r.localStore,e,!1).then(()=>xu(r,e,n)).catch(ei)}async function Ck(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await V1(n.localStore,e);yE(n,r,null),_E(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mo(n,s)}catch(s){await ei(s)}}async function Pk(t,e,n){const r=fe(t);try{const s=await function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(Pe(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);yE(r,e,n),_E(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mo(r,s)}catch(s){await ei(s)}}function _E(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function yE(t,e,n){const r=fe(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||vE(t,r)})}function vE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Uh(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),zh(t))}function jm(t,e,n){for(const r of n)r instanceof dE?(t.Vu.addReference(r.key,e),Dk(t,r)):r instanceof pE?(ee(Gh,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||vE(t,r.key)):ae(19791,{wu:r})}function Dk(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(ee(Gh,"New document in limbo: "+n),t.Iu.add(r),zh(t))}function zh(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new vk(n)),t.Ru=t.Ru.insert(n,r),aE(t.remoteStore,new _r(An(Dv(n.path)),r,"TargetPurposeLimboResolution",Lc.ce))}}async function Mo(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Lh.Is(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const h=fe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(u,m=>$.forEach(m.Ts,y=>h.persistence.referenceDelegate.addReference(d,m.targetId,y)).next(()=>$.forEach(m.Es,y=>h.persistence.referenceDelegate.removeReference(d,m.targetId,y)))))}catch(d){if(!ti(d))throw d;ee(Fh,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const y=h.vs.get(m),R=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(R);h.vs=h.vs.insert(m,P)}}}(r.localStore,i))}async function kk(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee(Gh,"User change. New user:",e.toKey());const r=await rE(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Z(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mo(n,r.Ns)}}function Nk(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function EE(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rk.bind(null,e),e.Pu.H_=pk.bind(null,e.eventManager),e.Pu.yu=mk.bind(null,e.eventManager),e}function Ok(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ck.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pk.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return O1(this.persistence,new D1,e.initialUser,this.serializer)}Cu(e){return new nE(Mh.Vi,this.serializer)}Du(e){return new $1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class Vk extends oc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof sc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new m1(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new nE(r=>sc.Vi(r,n),this.serializer)}}class Mu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kk.bind(null,this.syncEngine),await lk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hk}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=W1(e.databaseInfo);return Y1(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new X1(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Bm(this.syncEngine,n,0),function(){return xm.v()?new xm:new B1}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const d=new Ek(s,i,o,c,l,u);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);ee(cs,"RemoteStore shutting down."),i.Ia.add(5),await xo(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mu.provider={build:()=>new Mu};/**
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
 */class xk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Dr="FirestoreClient";class Mk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ah.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lk(t);ee(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Lm(e.remoteStore,s)),t._onlineComponents=e}async function Lk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Dr,"Using user provided OfflineComponentProvider");try{await Wl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await Wl(t,new oc)}}else ee(Dr,"Using default OfflineComponentProvider"),await Wl(t,new Vk(void 0));return t._offlineComponents}async function TE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Dr,"Using user provided OnlineComponentProvider"),await Hm(t,t._uninitializedComponentsProvider._online)):(ee(Dr,"Using default OnlineComponentProvider"),await Hm(t,new Mu))),t._onlineComponents}function Fk(t){return TE(t).then(e=>e.syncEngine)}async function Uk(t){const e=await TE(t),n=e.eventManager;return n.onListen=Tk.bind(null,e.syncEngine),n.onUnlisten=Ak.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bk.bind(null,e.syncEngine),n}function $k(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new xk({next:m=>{h.Nu(),o.enqueueAndForget(()=>dk(i,d)),m.fromCache&&l.source==="server"?u.reject(new Z(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new gk(c,h,{includeMetadataChanges:!0,qa:!0});return fk(i,d)}(await Uk(t),t.asyncQueue,e,n,r)),r.promise}function Bk(t,e){const n=new wr;return t.asyncQueue.enqueueAndForget(async()=>Sk(await Fk(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function wE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jk="ComponentProvider",qm=new Map;function Hk(t,e,n,r,s){return new sD(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,wE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const IE="firestore.googleapis.com",Wm=!0;class Gm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IE,this.ssl=Wm}else this.host=e.host,this.ssl=e.ssl??Wm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d1)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LP;switch(r.type){case"firstParty":return new BP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qm.get(n);r&&(ee(jk,"Removing Datastore"),qm.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(t,e,n,r={}){var u;t=zn(t,Kc);const s=Co(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&Ty(`https://${c}`),i.host!==IE&&i.host!==c&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!rs(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=yt.MOCK_USER;else{h=uS(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(m)}t._authCredentials=new FP(new hv(h,d))}}/**
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
 */class hs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hs(this.firestore,e,this._query)}}class Ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(No(n,Ye._jsonSchema))return new Ye(e,r||null,new re(Ve.fromString(n.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Qe("string",Ye._jsonSchemaVersion),referencePath:Qe("string")};class Ir extends hs{constructor(e,n,r){super(e,n,Dv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new re(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function fO(t,e,...n){if(t=ut(t),fv("collection","path",e),t instanceof Kc){const r=Ve.fromString(e,...n);return im(r),new Ir(t,null,r)}{if(!(t instanceof Ye||t instanceof Ir))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return im(r),new Ir(t.firestore,null,r)}}function Wk(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Ah.newId()),fv("doc","path",e),t instanceof Kc){const r=Ve.fromString(e,...n);return sm(r),new Ye(t,null,new re(r))}{if(!(t instanceof Ye||t instanceof Ir))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return sm(r),new Ye(t.firestore,t instanceof Ir?t.converter:null,new re(r))}}/**
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
 */const zm="AsyncQueue";class Km{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iE(this,"async_queue_retry"),this._c=()=>{const r=ql();r&&ee(zm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new wr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ti(e))throw e;ee(zm,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",Qm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Hh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:Qm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class si extends Kc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Km,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Km(e),this._firestoreClient=void 0,await e}}}function Gk(t,e){const n=typeof t=="object"?t:by(),r=typeof t=="string"?t:Za,s=fh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cS("firestore");i&&qk(s,...i)}return s}function AE(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zk(t),t._firestoreClient}function zk(t){var r,s,i,o;const e=t._freezeSettings(),n=Hk(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Mk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ht.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(No(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Qe("string",Kt._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class Kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qc{constructor(e){this._methodName=e}}/**
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
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(No(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:Qe("string",Sn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class on{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(No(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new on(e.vectorValues);throw new Z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:Qe("string",on._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const Kk=/^__.*__$/;class Qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class bE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{dataSource:t})}}class Qh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Qh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ac(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(SE(this.dataSource)&&Kk.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Yk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}A(e,n,r,s=!1){return new Qh({dataSource:e,methodName:n,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new Yk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RE(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);Jh("Data must be an object, but it was:",o,r);const c=CE(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=Qs(e,d,n);if(!o.contains(m))throw new Z(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kE(h,m)||h.push(m)}l=new Ht(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Qk(new Vt(c),l,u)}class Jc extends Qc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}class Yh extends Qc{_toFieldTransform(e){return new OD(e.path,new po)}isEqual(e){return e instanceof Yh}}function Jk(t,e,n,r){const s=t.A(1,e,n);Jh("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();Or(r,(l,u)=>{const h=DE(e,l,n);u=ut(u);const d=s.fc(h);if(u instanceof Jc)i.push(h);else{const m=Lo(u,d);m!=null&&(i.push(h),o.set(h,m))}});const c=new Ht(i);return new bE(o,c,s.fieldTransforms)}function Xk(t,e,n,r,s,i){const o=t.A(1,e,n),c=[Qs(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Qs(e,i[m])),l.push(i[m+1]);const u=[],h=Vt.empty();for(let m=c.length-1;m>=0;--m)if(!kE(u,c[m])){const y=c[m];let R=l[m];R=ut(R);const P=o.fc(y);if(R instanceof Jc)u.push(y);else{const O=Lo(R,P);O!=null&&(u.push(y),h.set(y,O))}}const d=new Ht(u);return new bE(h,d,o.fieldTransforms)}function Zk(t,e,n,r=!1){return Lo(n,t.A(r?4:3,e))}function Lo(t,e){if(PE(t=ut(t)))return Jh("Unsupported field value:",e,t),CE(t,e);if(t instanceof Qc)return function(r,s){if(!SE(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Lo(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:rc(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rc(s.serializer,i)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof on)return function(o,c){const l=o instanceof on?o.toArray():o;return{mapValue:{fields:{[Tv]:{stringValue:wv},[ec]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw c.yc("VectorValues must only contain numeric values.");return Dh(c.serializer,h)})}}}}}}(r,s);if(eE(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Mc(r)}`)}(t,e)}function CE(t,e){const n={};return mv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(r,s)=>{const i=Lo(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Sn||t instanceof Kt||t instanceof Ye||t instanceof Qc||t instanceof on||eE(t))}function Jh(t,e,n){if(!PE(n)||!dv(n)){const r=Mc(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Qs(t,e,n){if((e=ut(e))instanceof Kh)return e._internalPath;if(typeof e=="string")return DE(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const eN=new RegExp("[~\\*/\\[\\]]");function DE(t,e,n){if(e.search(eN)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kh(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(U.INVALID_ARGUMENT,c+t+l)}function kE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tN{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Or(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ec].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>We(o.doubleValue));return new on(n)}convertGeoPoint(e){return new Sn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Pe(Zv(r),9688,{name:e});const s=new uo(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nN extends tN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function dO(){return new Yh("serverTimestamp")}const Ym="@firebase/firestore",Jm="4.13.0";/**
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
 */class NE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rN extends NE{data(){return super.data()}}/**
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
 */function sN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xh{}class OE extends Xh{}function pO(t,e,...n){let r=[];e instanceof Xh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ef).length,c=i.filter(l=>l instanceof Zh).length;if(o>1||o>0&&c>0)throw new Z(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Zh extends OE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zh(e,n,r)}_apply(e){const n=this._parse(e);return VE(e._query,n),new hs(e.firestore,e.converter,Su(e._query,n))}_parse(e){const n=Yc(e.firestore);return function(i,o,c,l,u,h,d){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Zm(d,h);const R=[];for(const P of d)R.push(Xm(l,i,P));m={arrayValue:{values:R}}}else m=Xm(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Zm(d,h),m=Zk(c,o,d,h==="in"||h==="not-in");return Ke.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ef extends Xh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ef(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)VE(o,l),o=Su(o,l)}(e._query,n),new hs(e.firestore,e.converter,Su(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tf extends OE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fo(i,o)}(e._query,this._field,this._direction);return new hs(e.firestore,e.converter,wD(e._query,n))}}function mO(t,e="asc"){const n=e,r=Qs("orderBy",t);return tf._create(r,n)}function Xm(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new Z(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kv(e)&&n.indexOf("/")!==-1)throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!re.isDocumentKey(r))throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dm(t,new re(r))}if(n instanceof Ye)return dm(t,n._key);throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function Zm(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xs extends NE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",xs._jsonSchema={type:Qe("string",xs._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Ia extends xs{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ca(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ia(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ca(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ia(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ca(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:iN(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ah.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
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
 */Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:Qe("string",Ms._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};function gO(t){t=zn(t,hs);const e=zn(t.firestore,si),n=AE(e),r=new nN(e);return sN(t._query),$k(n,t._query).then(s=>new Ms(e,r,t,s))}function _O(t,e,n){t=zn(t,Ye);const r=zn(t.firestore,si),s=xE(t.converter,e,n),i=Yc(r);return Xc(r,[RE(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function yO(t,e,n,...r){t=zn(t,Ye);const s=zn(t.firestore,si),i=Yc(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof Kh?Xk(i,"updateDoc",t._key,e,n,r):Jk(i,"updateDoc",t._key,e),Xc(s,[o.toMutation(t._key,Jt.exists(!0))])}function vO(t){return Xc(zn(t.firestore,si),[new kh(t._key,Jt.none())])}function EO(t,e){const n=zn(t.firestore,si),r=Wk(t),s=xE(t.converter,e),i=Yc(t.firestore);return Xc(n,[RE(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Xc(t,e){const n=AE(t);return Bk(n,e)}(function(e,n=!0){MP(Js),js(new ss("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new si(new UP(r.getProvider("auth-internal")),new jP(o,r.getProvider("app-check-internal")),iD(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Er(Ym,Jm,e),Er(Ym,Jm,"esm2020")})();const ME=Ay({apiKey:"AIzaSyCgUA5ZuzHGlGWDOkVHTLLwuJQc6SrJU20",authDomain:"personai-feab6.firebaseapp.com",projectId:"personai-feab6",storageBucket:"personai-feab6.firebasestorage.app",messagingSenderId:"823061977554",appId:"1:823061977554:web:99fc7edc909cfa9c81100b"}),oN=NP(ME),TO=Gk(ME),aN=jI("auth",()=>{const t=Mt(null),e=Mt(!1);return wC(oN,n=>{t.value=n,e.value=!0}),{user:t,ready:e}}),LE=Z0({history:k0(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",component:()=>Ai(()=>import("./LoginView-DbOMPuow.js"),__vite__mapDeps([0,1,2,3]))},{path:"/dashboard",component:()=>Ai(()=>import("./DashboardView-DkgdrhJW.js"),__vite__mapDeps([4,1,5,6,2,7,8])),meta:{requiresAuth:!0}},{path:"/profiles/new",component:()=>Ai(()=>import("./ProfileEditorView-CZ9xJVhW.js"),__vite__mapDeps([9,5,10,2,11,12])),meta:{requiresAuth:!0}},{path:"/profiles/:id/edit",component:()=>Ai(()=>import("./ProfileEditorView-CZ9xJVhW.js"),__vite__mapDeps([9,5,10,2,11,12])),meta:{requiresAuth:!0}},{path:"/profiles/:id",component:()=>Ai(()=>import("./ProfileDetailView-SIEQCkWI.js"),__vite__mapDeps([13,5,6,2,7,10,11,14])),meta:{requiresAuth:!0}}]});LE.beforeEach(async t=>{const e=aN();if(e.ready||await new Promise(n=>{const r=xt(()=>e.ready,s=>{s&&(r(),n())})}),t.meta.requiresAuth&&!e.user)return"/login";if(e.user&&t.path==="/login")return"/dashboard"});const cN=Nr({...EA(),...M_(Bb(),["fullHeight"]),...Db()},"VApp"),lN=j_()({name:"VApp",props:cN(),setup(t,{slots:e}){const n=Ub(t),{layoutClasses:r,getLayoutItem:s,items:i,layoutRef:o}=Hb({...t,fullHeight:!0}),{rtlClasses:c}=Q_();return RA(()=>{var l;return gr("div",{ref:o,class:vo(["v-application",n.themeClasses.value,r.value,c.value,t.class]),style:pc([t.style])},[gr("div",{class:"v-application__wrap"},[(l=e.default)==null?void 0:l.call(e)])])}),{getLayoutItem:s,items:i,theme:n}}}),uN=Ec({__name:"App",setup(t){const e=localStorage.getItem("theme")??"dark",n=Mt(e);function r(){n.value=n.value==="dark"?"light":"dark",localStorage.setItem("theme",n.value),document.documentElement.setAttribute("data-theme",n.value)}return document.documentElement.setAttribute("data-theme",n.value),xt(n,s=>{document.documentElement.setAttribute("data-theme",s)}),rn("theme",n),rn("toggleTheme",r),(s,i)=>{const o=fw("router-view");return d_(),m_(lN,{theme:n.value},{default:Og(()=>[Ge(o)]),_:1},8,["theme"])}}}),hN=localStorage.getItem("theme")??"dark",fN=ny({theme:{defaultTheme:hN,themes:{dark:{dark:!0,colors:{primary:"#6366f1",secondary:"#06b6d4",surface:"#13161e",background:"#0d0f14",error:"#f87171",warning:"#fbbf24",success:"#34d399"}},light:{dark:!1,colors:{primary:"#6366f1",secondary:"#0891b2",surface:"#ffffff",background:"#f8fafc",error:"#ef4444",warning:"#f59e0b",success:"#10b981"}}}},icons:{defaultSet:"mdi",sets:{mdi:W_}},defaults:{VBtn:{rounded:"lg"},VCard:{rounded:"lg"},VTextField:{variant:"outlined",density:"comfortable"},VTextarea:{variant:"outlined",density:"comfortable"}}}),dN=MI();OI(uN).use(dN).use(LE).use(fN).mount("#app");export{Qt as $,Nr as A,ct as B,Fe as C,MN as D,$T as E,hA as F,GN as G,Ln as H,vA as I,zt as J,Db as K,Ub as L,zN as M,RA as N,pc as O,Yn as P,sw as Q,rn as R,Ue as S,wN as T,Ic as U,OA as V,Ju as W,zg as X,Ot as Y,VN as Z,Ci as _,gr as a,CN as a$,__ as a0,Sg as a1,Xo as a2,rO as a3,JN as a4,CA as a5,YI as a6,bc as a7,Yt as a8,PN as a9,Ud as aA,eO as aB,tO as aC,nO as aD,BN as aE,UN as aF,xN as aG,Ki as aH,HN as aI,JI as aJ,jN as aK,Te as aL,gN as aM,ZN as aN,kN as aO,HI as aP,iO as aQ,x_ as aR,Ha as aS,m_ as aT,yN as aU,lO as aV,uO as aW,fr as aX,oN as aY,RN as aZ,bN as a_,mc as aa,$b as ab,vc as ac,WI as ad,nh as ae,Q_ as af,NA as ag,_N as ah,$N as ai,kt as aj,wo as ak,DN as al,mN as am,XN as an,AN as ao,YN as ap,QN as aq,KN as ar,WN as as,ow as at,ON as au,IN as av,ba as aw,oO as ax,sO as ay,M_ as az,EN as b,cO as b0,vO as b1,Wk as b2,yO as b3,EO as b4,pO as b5,mO as b6,gO as b7,fO as b8,TO as b9,dO as ba,SN as bb,_O as bc,vN as c,Ec as d,Ge as e,Og as f,Hw as g,aO as h,TN as i,LN as j,NN as k,FN as l,j_ as m,vo as n,d_ as o,Rc as p,EA as q,Mt as r,yo as s,vT as t,aN as u,Dt as v,xt as w,qN as x,TA as y,we as z};
