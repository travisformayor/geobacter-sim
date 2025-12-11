var Ah=Object.defineProperty;var Rh=(n,e,t)=>e in n?Ah(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ir=(n,e,t)=>Rh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function vt(){}function Ch(n,e){for(const t in e)n[t]=e[t];return n}function Wc(n){return n()}function O0(){return Object.create(null)}function Ki(n){n.forEach(Wc)}function qc(n){return typeof n=="function"}function ui(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Da;function Er(n,e){return n===e?!0:(Da||(Da=document.createElement("a")),Da.href=e,n===Da.href)}function Dh(n){return Object.keys(n).length===0}function Lh(n,...e){if(n==null){for(const r of e)r(void 0);return vt}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ma(n,e,t){n.$$.on_destroy.push(Lh(e,t))}function Ph(n,e,t,r){if(n){const i=Xc(n,e,t,r);return n[0](i)}}function Xc(n,e,t,r){return n[1]&&r?Ch(t.ctx.slice(),n[1](r(e))):t.ctx}function Nh(n,e,t,r){return n[2],e.dirty}function Ih(n,e,t,r,i,a){if(i){const s=Xc(e,t,r,a);n.p(s,i)}}function Uh(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function G(n,e){n.appendChild(e)}function bt(n,e,t){n.insertBefore(e,t||null)}function _t(n){n.parentNode&&n.parentNode.removeChild(n)}function Fh(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function de(n){return document.createElement(n)}function ct(n){return document.createTextNode(n)}function ke(){return ct(" ")}function Dn(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function ae(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function kh(n){return Array.from(n.childNodes)}function $c(n,e){e=""+e,n.data!==e&&(n.data=e)}function Oh(n,e,t,r){n.style.setProperty(e,t,"")}function Tr(n,e,t){n.classList.toggle(e,!!t)}let pa;function ha(n){pa=n}function i0(){if(!pa)throw new Error("Function called outside component initialization");return pa}function zh(n){i0().$$.on_mount.push(n)}function Bh(n){i0().$$.after_update.push(n)}function Hh(n){i0().$$.on_destroy.push(n)}const Fi=[],Vi=[];let zi=[];const z0=[],Gh=Promise.resolve();let Fo=!1;function Vh(){Fo||(Fo=!0,Gh.then(Yc))}function ko(n){zi.push(n)}const Hs=new Set;let vi=0;function Yc(){if(vi!==0)return;const n=pa;do{try{for(;vi<Fi.length;){const e=Fi[vi];vi++,ha(e),Wh(e.$$)}}catch(e){throw Fi.length=0,vi=0,e}for(ha(null),Fi.length=0,vi=0;Vi.length;)Vi.pop()();for(let e=0;e<zi.length;e+=1){const t=zi[e];Hs.has(t)||(Hs.add(t),t())}zi.length=0}while(Fi.length);for(;z0.length;)z0.pop()();Fo=!1,Hs.clear(),ha(n)}function Wh(n){if(n.fragment!==null){n.update(),Ki(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ko)}}function qh(n){const e=[],t=[];zi.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),zi=e}const hs=new Set;let Xh;function Rt(n,e){n&&n.i&&(hs.delete(n),n.i(e))}function Lt(n,e,t,r){if(n&&n.o){if(hs.has(n))return;hs.add(n),Xh.c.push(()=>{hs.delete(n)}),n.o(e)}}function B0(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ft(n){n&&n.c()}function Pt(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),ko(()=>{const a=n.$$.on_mount.map(Wc).filter(qc);n.$$.on_destroy?n.$$.on_destroy.push(...a):Ki(a),n.$$.on_mount=[]}),i.forEach(ko)}function Nt(n,e){const t=n.$$;t.fragment!==null&&(qh(t.after_update),Ki(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function $h(n,e){n.$$.dirty[0]===-1&&(Fi.push(n),Vh(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ji(n,e,t,r,i,a,s=null,o=[-1]){const l=pa;ha(n);const c=n.$$={fragment:null,ctx:[],props:a,update:vt,not_equal:i,bound:O0(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:O0(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,p,..._)=>{const x=_.length?_[0]:p;return c.ctx&&i(c.ctx[d],c.ctx[d]=x)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](x),u&&$h(n,d)),p}):[],c.update(),u=!0,Ki(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=kh(e.target);c.fragment&&c.fragment.l(d),d.forEach(_t)}else c.fragment&&c.fragment.c();e.intro&&Rt(n.$$.fragment),Pt(n,e.target,e.anchor),Yc()}ha(l)}class Zi{constructor(){ir(this,"$$");ir(this,"$$set")}$destroy(){Nt(this,1),this.$destroy=vt}$on(e,t){if(!qc(t))return vt;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Dh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Yh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yh);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const a0="160",Kh=0,H0=1,jh=2,Kc=1,Zh=2,hr=3,Hr=0,_n=1,fr=2,Or=0,Bi=1,G0=2,V0=3,W0=4,Jh=5,ii=100,Qh=101,ed=102,q0=103,X0=104,td=200,nd=201,rd=202,id=203,Oo=204,zo=205,ad=206,sd=207,od=208,ld=209,cd=210,ud=211,hd=212,dd=213,fd=214,md=0,pd=1,gd=2,ps=3,vd=4,_d=5,xd=6,bd=7,jc=0,yd=1,Sd=2,zr=0,Md=1,wd=2,Ed=3,Td=4,Ad=5,Rd=6,Zc=300,Wi=301,qi=302,Bo=303,Ho=304,Rs=306,Go=1e3,Mn=1001,Vo=1002,Gt=1003,$0=1004,Gs=1005,Ln=1006,Cd=1007,ga=1008,Br=1009,Dd=1010,Ld=1011,s0=1012,Jc=1013,Fr=1014,Kn=1015,va=1016,Qc=1017,eu=1018,si=1020,Pd=1021,wn=1023,Nd=1024,Id=1025,oi=1026,Xi=1027,Ud=1028,tu=1029,Fd=1030,nu=1031,ru=1033,Vs=33776,Ws=33777,qs=33778,Xs=33779,Y0=35840,K0=35841,j0=35842,Z0=35843,iu=36196,J0=37492,Q0=37496,el=37808,tl=37809,nl=37810,rl=37811,il=37812,al=37813,sl=37814,ol=37815,ll=37816,cl=37817,ul=37818,hl=37819,dl=37820,fl=37821,$s=36492,ml=36494,pl=36495,kd=36283,gl=36284,vl=36285,_l=36286,au=3e3,li=3001,Od=3200,zd=3201,Bd=0,Hd=1,Pn="",nn="srgb",vr="srgb-linear",o0="display-p3",Cs="display-p3-linear",gs="linear",It="srgb",vs="rec709",_s="p3",_i=7680,xl=519,Gd=512,Vd=513,Wd=514,su=515,qd=516,Xd=517,$d=518,Yd=519,bl=35044,yl="300 es",Wo=1035,mr=2e3,xs=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,qo=180/Math.PI;function ba(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function Kd(n,e){return(n%e+e)%e}function Ks(n,e,t){return(1-t)*n+t*e}function Sl(n){return(n&n-1)===0&&n!==0}function Xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,i,a,s,o,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,l,c)}set(e,t,r,i,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],d=r[7],p=r[2],_=r[5],x=r[8],g=i[0],m=i[3],f=i[6],S=i[1],y=i[4],A=i[7],I=i[2],P=i[5],D=i[8];return a[0]=s*g+o*S+l*I,a[3]=s*m+o*y+l*P,a[6]=s*f+o*A+l*D,a[1]=c*g+u*S+d*I,a[4]=c*m+u*y+d*P,a[7]=c*f+u*A+d*D,a[2]=p*g+_*S+x*I,a[5]=p*m+_*y+x*P,a[8]=p*f+_*A+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*a*u+r*o*l+i*a*c-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,p=o*l-u*a,_=c*a-s*l,x=t*d+r*p+i*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(i*c-u*r)*g,e[2]=(o*r-i*s)*g,e[3]=p*g,e[4]=(u*t-i*l)*g,e[5]=(i*a-o*t)*g,e[6]=_*g,e[7]=(r*l-c*t)*g,e[8]=(s*t-r*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new lt;function ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jd(){const n=bs("canvas");return n.style.display="block",n}const Ml={};function da(n){n in Ml||(Ml[n]=!0,console.warn(n))}const wl=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[vr]:{transfer:gs,primaries:vs,toReference:n=>n,fromReference:n=>n},[nn]:{transfer:It,primaries:vs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cs]:{transfer:gs,primaries:_s,toReference:n=>n.applyMatrix3(El),fromReference:n=>n.applyMatrix3(wl)},[o0]:{transfer:It,primaries:_s,toReference:n=>n.convertSRGBToLinear().applyMatrix3(El),fromReference:n=>n.applyMatrix3(wl).convertLinearToSRGB()}},Zd=new Set([vr,Cs]),St={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Zd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=La[e].toReference,i=La[t].fromReference;return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return La[n].primaries},getTransfer:function(n){return n===Pn?gs:La[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xi;class lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=bs("canvas")),xi.width=e.width,xi.height=e.height;const r=xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=Hi(a[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Hi(t[r]/255)*255):t[r]=Hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Js(i[s].image)):a.push(Js(i[s]))}else a=Js(i);r.url=a}return t||(e.images[this.uuid]=r),r}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qd=0;class xn extends Ji{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,r=Mn,i=Mn,a=Ln,s=ga,o=wn,l=Br,c=xn.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ba(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===li?nn:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nn?li:au}set encoding(e){da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===li?nn:Pn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Zc;xn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,r=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,a;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],_=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,A=(_+1)/2,I=(f+1)/2,P=(u+p)/4,D=(d+g)/4,K=(x+m)/4;return y>A&&y>I?y<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(y),i=P/r,a=D/r):A>I?A<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(A),r=P/i,a=K/i):I<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(I),r=D/a,i=K/a),this.set(r,i,a,t),this}let S=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-g)/S,this.z=(p-u)/S,this.w=Math.acos((c+_+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ef extends Ji{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};r.encoding!==void 0&&(da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===li?nn:Pn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new xn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends ef{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class uu extends xn{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tf extends xn{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,s,o){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const p=a[s+0],_=a[s+1],x=a[s+2],g=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=_,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==p||c!==_||u!==x){let m=1-o;const f=l*p+c*_+u*x+d*g,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),P=Math.atan2(I,f*S);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const A=o*S;if(l=l*m+p*A,c=c*m+_*A,u=u*m+x*A,d=d*m+g*A,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,a,s){const o=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=a[s],p=a[s+1],_=a[s+2],x=a[s+3];return e[t]=o*x+u*d+l*_-c*p,e[t+1]=l*x+u*p+c*d-o*_,e[t+2]=c*x+u*_+o*p-l*d,e[t+3]=u*x-o*d-l*p-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(i/2),d=o(a/2),p=l(r/2),_=l(i/2),x=l(a/2);switch(s){case"XYZ":this._x=p*u*d+c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d-p*_*x;break;case"YXZ":this._x=p*u*d+c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d+p*_*x;break;case"ZXY":this._x=p*u*d-c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d-p*_*x;break;case"ZYX":this._x=p*u*d-c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d+p*_*x;break;case"YZX":this._x=p*u*d+c*_*x,this._y=c*_*d+p*u*x,this._z=c*u*x-p*_*d,this._w=c*u*d-p*_*x;break;case"XZY":this._x=p*u*d-c*_*x,this._y=c*_*d-p*u*x,this._z=c*u*x+p*_*d,this._w=c*u*d+p*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=r+o+d;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-l)*_,this._y=(a-c)*_,this._z=(s-i)*_}else if(r>o&&r>d){const _=2*Math.sqrt(1+r-o-d);this._w=(u-l)/_,this._x=.25*_,this._y=(i+s)/_,this._z=(a+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-r-d);this._w=(a-c)/_,this._x=(i+s)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-r-o);this._w=(s-i)/_,this._x=(a+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-r*c,this._z=a*u+s*c+r*l-i*o,this._w=s*u-r*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*s+t*this._w,this._x=_*r+t*this._x,this._y=_*i+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*d+this._w*p,this._x=r*d+this._x*p,this._y=i*d+this._y*p,this._z=a*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(a),r*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*i,this.y=a[1]*t+a[4]*r+a[7]*i,this.z=a[2]*t+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*r),u=2*(o*t-a*i),d=2*(a*r-s*t);return this.x=t+l*c+s*d-o*u,this.y=r+l*u+o*c-a*d,this.z=i+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i,this.y=a[1]*t+a[5]*r+a[9]*i,this.z=a[2]*t+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-r*l,this.z=r*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new Z,Tl=new ya;class Sa{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(a,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pa.copy(r.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Na.subVectors(this.max,sa),bi.subVectors(e.a,sa),yi.subVectors(e.b,sa),Si.subVectors(e.c,sa),Ar.subVectors(yi,bi),Rr.subVectors(Si,yi),jr.subVectors(bi,Si);let t=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-jr.z,jr.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,jr.z,0,-jr.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-jr.y,jr.x,0];return!eo(t,bi,yi,Si,Na)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,bi,yi,Si,Na))?!1:(Ia.crossVectors(Ar,Rr),t=[Ia.x,Ia.y,Ia.z],eo(t,bi,yi,Si,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fn=new Z,Pa=new Sa,bi=new Z,yi=new Z,Si=new Z,Ar=new Z,Rr=new Z,jr=new Z,sa=new Z,Na=new Z,Ia=new Z,Zr=new Z;function eo(n,e,t,r,i){for(let a=0,s=n.length-3;a<=s;a+=3){Zr.fromArray(n,a);const o=i.x*Math.abs(Zr.x)+i.y*Math.abs(Zr.y)+i.z*Math.abs(Zr.z),l=e.dot(Zr),c=t.dot(Zr),u=r.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nf=new Sa,oa=new Z,to=new Z;class l0{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):nf.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(oa,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(to)),this.expandByPoint(oa.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new Z,no=new Z,Ua=new Z,Cr=new Z,ro=new Z,Fa=new Z,io=new Z;class rf{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){no.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(no);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ua),o=Cr.dot(this.direction),l=-Cr.dot(Ua),c=Cr.lengthSq(),u=Math.abs(1-s*s);let d,p,_,x;if(u>0)if(d=s*l-o,p=s*o-l,x=a*u,d>=0)if(p>=-x)if(p<=x){const g=1/u;d*=g,p*=g,_=d*(d+s*p+2*o)+p*(s*d+p+2*l)+c}else p=a,d=Math.max(0,-(s*p+o)),_=-d*d+p*(p+2*l)+c;else p=-a,d=Math.max(0,-(s*p+o)),_=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-s*a+o)),p=d>0?-a:Math.min(Math.max(-a,-l),a),_=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-a,-l),a),_=p*(p+2*l)+c):(d=Math.max(0,-(s*a+o)),p=d>0?a:Math.min(Math.max(-a,-l),a),_=-d*d+p*(p+2*l)+c);else p=s>0?-a:a,d=Math.max(0,-(s*p+o)),_=-d*d+p*(p+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(no).addScaledVector(Ua,p),_}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),i=sr.dot(sr)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(r=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(r=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,i,a){ro.subVectors(t,e),Fa.subVectors(r,e),io.crossVectors(ro,Fa);let s=this.direction.dot(io),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Cr.subVectors(this.origin,e);const l=o*this.direction.dot(Fa.crossVectors(Cr,Fa));if(l<0)return null;const c=o*this.direction.dot(ro.cross(Cr));if(c<0||l+c>s)return null;const u=-o*Cr.dot(io);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m)}set(e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=r,f[12]=i,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=_,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),a=1/Mi.setFromMatrixColumn(e,1).length(),s=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const p=s*u,_=s*d,x=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+x*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=x+_*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*u,_=l*d,x=c*u,g=c*d;t[0]=p+g*o,t[4]=x*o-_,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=_*o-x,t[6]=g+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*u,_=l*d,x=c*u,g=c*d;t[0]=p-g*o,t[4]=-s*d,t[8]=x+_*o,t[1]=_+x*o,t[5]=s*u,t[9]=g-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*u,_=s*d,x=o*u,g=o*d;t[0]=l*u,t[4]=x*c-_,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=_*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,_=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-p*d,t[8]=x*d+_,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=_*d+x,t[10]=p-g*d}else if(e.order==="XZY"){const p=s*l,_=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+g,t[5]=s*u,t[9]=_*d-x,t[2]=x*d-_,t[6]=o*u,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,sf)}lookAt(e,t,r){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Dr.crossVectors(r,yn),Dr.lengthSq()===0&&(Math.abs(r.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Dr.crossVectors(r,yn)),Dr.normalize(),ka.crossVectors(yn,Dr),i[0]=Dr.x,i[4]=ka.x,i[8]=yn.x,i[1]=Dr.y,i[5]=ka.y,i[9]=yn.y,i[2]=Dr.z,i[6]=ka.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],d=r[5],p=r[9],_=r[13],x=r[2],g=r[6],m=r[10],f=r[14],S=r[3],y=r[7],A=r[11],I=r[15],P=i[0],D=i[4],K=i[8],w=i[12],C=i[1],B=i[5],W=i[9],ie=i[13],U=i[2],O=i[6],Y=i[10],te=i[14],Q=i[3],ne=i[7],ee=i[11],oe=i[15];return a[0]=s*P+o*C+l*U+c*Q,a[4]=s*D+o*B+l*O+c*ne,a[8]=s*K+o*W+l*Y+c*ee,a[12]=s*w+o*ie+l*te+c*oe,a[1]=u*P+d*C+p*U+_*Q,a[5]=u*D+d*B+p*O+_*ne,a[9]=u*K+d*W+p*Y+_*ee,a[13]=u*w+d*ie+p*te+_*oe,a[2]=x*P+g*C+m*U+f*Q,a[6]=x*D+g*B+m*O+f*ne,a[10]=x*K+g*W+m*Y+f*ee,a[14]=x*w+g*ie+m*te+f*oe,a[3]=S*P+y*C+A*U+I*Q,a[7]=S*D+y*B+A*O+I*ne,a[11]=S*K+y*W+A*Y+I*ee,a[15]=S*w+y*ie+A*te+I*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],_=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+a*l*d-i*c*d-a*o*p+r*c*p+i*o*_-r*l*_)+g*(+t*l*_-t*c*p+a*s*p-i*s*_+i*c*u-a*l*u)+m*(+t*c*d-t*o*_-a*s*d+r*s*_+a*o*u-r*c*u)+f*(-i*o*u-t*l*d+t*o*p+i*s*d-r*s*p+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],_=e[11],x=e[12],g=e[13],m=e[14],f=e[15],S=d*m*c-g*p*c+g*l*_-o*m*_-d*l*f+o*p*f,y=x*p*c-u*m*c-x*l*_+s*m*_+u*l*f-s*p*f,A=u*g*c-x*d*c+x*o*_-s*g*_-u*o*f+s*d*f,I=x*d*l-u*g*l-x*o*p+s*g*p+u*o*m-s*d*m,P=t*S+r*y+i*A+a*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=S*D,e[1]=(g*p*a-d*m*a-g*i*_+r*m*_+d*i*f-r*p*f)*D,e[2]=(o*m*a-g*l*a+g*i*c-r*m*c-o*i*f+r*l*f)*D,e[3]=(d*l*a-o*p*a-d*i*c+r*p*c+o*i*_-r*l*_)*D,e[4]=y*D,e[5]=(u*m*a-x*p*a+x*i*_-t*m*_-u*i*f+t*p*f)*D,e[6]=(x*l*a-s*m*a-x*i*c+t*m*c+s*i*f-t*l*f)*D,e[7]=(s*p*a-u*l*a+u*i*c-t*p*c-s*i*_+t*l*_)*D,e[8]=A*D,e[9]=(x*d*a-u*g*a-x*r*_+t*g*_+u*r*f-t*d*f)*D,e[10]=(s*g*a-x*o*a+x*r*c-t*g*c-s*r*f+t*o*f)*D,e[11]=(u*o*a-s*d*a-u*r*c+t*d*c+s*r*_-t*o*_)*D,e[12]=I*D,e[13]=(u*g*i-x*d*i+x*r*p-t*g*p-u*r*m+t*d*m)*D,e[14]=(x*o*i-s*g*i-x*r*l+t*g*l+s*r*m-t*o*m)*D,e[15]=(s*d*i-u*o*i+u*r*l-t*d*l-s*r*p+t*o*p)*D,this}scale(e){const t=this.elements,r=e.x,i=e.y,a=e.z;return t[0]*=r,t[4]*=i,t[8]*=a,t[1]*=r,t[5]*=i,t[9]*=a,t[2]*=r,t[6]*=i,t[10]*=a,t[3]*=r,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+r,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+r,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,p=a*c,_=a*u,x=a*d,g=s*u,m=s*d,f=o*d,S=l*c,y=l*u,A=l*d,I=r.x,P=r.y,D=r.z;return i[0]=(1-(g+f))*I,i[1]=(_+A)*I,i[2]=(x-y)*I,i[3]=0,i[4]=(_-A)*P,i[5]=(1-(p+f))*P,i[6]=(m+S)*P,i[7]=0,i[8]=(x+y)*D,i[9]=(m-S)*D,i[10]=(1-(p+g))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let a=Mi.set(i[0],i[1],i[2]).length();const s=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],kn.copy(this);const c=1/a,u=1/s,d=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,i,a,s,o=mr){const l=this.elements,c=2*a/(t-e),u=2*a/(r-i),d=(t+e)/(t-e),p=(r+i)/(r-i);let _,x;if(o===mr)_=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===xs)_=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,a,s,o=mr){const l=this.elements,c=1/(t-e),u=1/(r-i),d=1/(s-a),p=(t+e)*c,_=(r+i)*u;let x,g;if(o===mr)x=(s+a)*d,g=-2*d;else if(o===xs)x=a*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Mi=new Z,kn=new rn,af=new Z(0,0,0),sf=new Z(1,1,1),Dr=new Z,ka=new Z,yn=new Z,Al=new rn,Rl=new ya;class Ds{constructor(e=0,t=0,r=0,i=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],p=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(vn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-vn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let of=0;const Cl=new Z,wi=new ya,or=new rn,Oa=new Z,la=new Z,lf=new Z,cf=new ya,Dl=new Z(1,0,0),Ll=new Z(0,1,0),Pl=new Z(0,0,1),uf={type:"added"},hf={type:"removed"};class Tn extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Z,t=new Ds,r=new ya,i=new Z(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rn},normalMatrix:{value:new lt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Oa.copy(e):Oa.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(la,Oa,this.up):or.lookAt(Oa,la,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(or),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),_=s(e.animations),x=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),_.length>0&&(r.animations=_),x.length>0&&(r.nodes=x)}return r.object=i,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Tn.DEFAULT_UP=new Z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new Z,lr=new Z,ao=new Z,cr=new Z,Ei=new Z,Ti=new Z,Nl=new Z,so=new Z,oo=new Z,lo=new Z;let za=!1;class Bn{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),On.subVectors(e,t),i.cross(On);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,r,i,a){On.subVectors(i,t),lr.subVectors(r,t),ao.subVectors(e,t);const s=On.dot(On),o=On.dot(lr),l=On.dot(ao),c=lr.dot(lr),u=lr.dot(ao),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const p=1/d,_=(c*l-o*u)*p,x=(s*u-o*l)*p;return a.set(1-_-x,x,_)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getUV(e,t,r,i,a,s,o,l){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),this.getInterpolation(e,t,r,i,a,s,o,l)}static getInterpolation(e,t,r,i,a,s,o,l){return this.getBarycoord(e,t,r,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,cr.x),l.addScaledVector(s,cr.y),l.addScaledVector(o,cr.z),l)}static isFrontFacing(e,t,r,i){return On.subVectors(r,t),lr.subVectors(e,t),On.cross(lr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),On.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,a){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}getInterpolation(e,t,r,i,a){return Bn.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,a=this.c;let s,o;Ei.subVectors(i,r),Ti.subVectors(a,r),so.subVectors(e,r);const l=Ei.dot(so),c=Ti.dot(so);if(l<=0&&c<=0)return t.copy(r);oo.subVectors(e,i);const u=Ei.dot(oo),d=Ti.dot(oo);if(u>=0&&d<=u)return t.copy(i);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(Ei,s);lo.subVectors(e,a);const _=Ei.dot(lo),x=Ti.dot(lo);if(x>=0&&_<=x)return t.copy(a);const g=_*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(r).addScaledVector(Ti,o);const m=u*x-_*d;if(m<=0&&d-u>=0&&_-x>=0)return Nl.subVectors(a,i),o=(d-u)/(d-u+(_-x)),t.copy(i).addScaledVector(Nl,o);const f=1/(m+g+p);return s=g*f,o=p*f,t.copy(r).addScaledVector(Ei,s).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=St.workingColorSpace){if(e=Kd(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=co(s,a,e+1/3),this.g=co(s,a,e),this.b=co(s,a,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=nn){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const r=du[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return St.fromWorkingColorSpace(sn.copy(this),e),Math.round(vn(sn.r*255,0,255))*65536+Math.round(vn(sn.g*255,0,255))*256+Math.round(vn(sn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(sn.copy(this),t);const r=sn.r,i=sn.g,a=sn.b,s=Math.max(r,i,a),o=Math.min(r,i,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case r:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-r)/d+2;break;case a:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=nn){St.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,r=sn.g,i=sn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Ba);const r=Ks(Lr.h,Ba.h,t),i=Ks(Lr.s,Ba.s,t),a=Ks(Lr.l,Ba.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Mt;Mt.NAMES=du;let df=0;class Ls extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=Bi,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=zo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oo&&(r.blendSrc=this.blendSrc),this.blendDst!==zo&&(r.blendDst=this.blendDst),this.blendEquation!==ii&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fu extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Z,Ha=new yt;class Qn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=aa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=mn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),r=mn(r,this.array),i=mn(i,this.array),a=mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class mu extends Qn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class pu extends Qn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ci extends Qn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ff=0;const Cn=new rn,uo=new Tn,Ai=new Z,Sn=new Sa,ca=new Sa,tn=new Z;class hi extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?pu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new lt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,r){return Cn.makeTranslation(e,t,r),this.applyMatrix4(Cn),this}scale(e,t,r){return Cn.makeScale(e,t,r),this.applyMatrix4(Cn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const a=t[r];Sn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new l0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Sn.min,ca.min),Sn.expandByPoint(tn),tn.addVectors(Sn.max,ca.max),Sn.expandByPoint(tn)):(Sn.expandByPoint(ca.min),Sn.expandByPoint(ca.max))}Sn.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)tn.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(tn));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)tn.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),tn.add(Ai)),i=Math.max(i,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new Z,u[C]=new Z;const d=new Z,p=new Z,_=new Z,x=new yt,g=new yt,m=new yt,f=new Z,S=new Z;function y(C,B,W){d.fromArray(i,C*3),p.fromArray(i,B*3),_.fromArray(i,W*3),x.fromArray(s,C*2),g.fromArray(s,B*2),m.fromArray(s,W*2),p.sub(d),_.sub(d),g.sub(x),m.sub(x);const ie=1/(g.x*m.y-m.x*g.y);isFinite(ie)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(_,-g.y).multiplyScalar(ie),S.copy(_).multiplyScalar(g.x).addScaledVector(p,-m.x).multiplyScalar(ie),c[C].add(f),c[B].add(f),c[W].add(f),u[C].add(S),u[B].add(S),u[W].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:r.length}]);for(let C=0,B=A.length;C<B;++C){const W=A[C],ie=W.start,U=W.count;for(let O=ie,Y=ie+U;O<Y;O+=3)y(r[O+0],r[O+1],r[O+2])}const I=new Z,P=new Z,D=new Z,K=new Z;function w(C){D.fromArray(a,C*3),K.copy(D);const B=c[C];I.copy(B),I.sub(D.multiplyScalar(D.dot(B))).normalize(),P.crossVectors(K,B);const ie=P.dot(u[C])<0?-1:1;l[C*4]=I.x,l[C*4+1]=I.y,l[C*4+2]=I.z,l[C*4+3]=ie}for(let C=0,B=A.length;C<B;++C){const W=A[C],ie=W.start,U=W.count;for(let O=ie,Y=ie+U;O<Y;O+=3)w(r[O+0]),w(r[O+1]),w(r[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,_=r.count;p<_;p++)r.setXYZ(p,0,0,0);const i=new Z,a=new Z,s=new Z,o=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(e)for(let p=0,_=e.count;p<_;p+=3){const x=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,_=t.count;p<_;p+=3)i.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),r.setXYZ(p+0,u.x,u.y,u.z),r.setXYZ(p+1,u.x,u.y,u.z),r.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let _=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?_=l[g]*o.data.stride+o.offset:_=l[g]*u;for(let f=0;f<u;f++)p[x++]=c[_++]}return new Qn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,r);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],_=e(p,r);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let p=0,_=d.length;p<_;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new rn,Jr=new rf,Ga=new l0,Ul=new Z,Ri=new Z,Ci=new Z,Di=new Z,ho=new Z,Va=new Z,Wa=new yt,qa=new yt,Xa=new yt,Fl=new Z,kl=new Z,Ol=new Z,$a=new Z,Ya=new Z;class jn extends Tn{constructor(e=new hi,t=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Va.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(ho.fromBufferAttribute(d,e),s?Va.addScaledVector(ho,u):Va.addScaledVector(ho.sub(t),u))}t.add(Va)}return t}raycast(e,t){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ga.copy(r.boundingSphere),Ga.applyMatrix4(a),Jr.copy(e.ray).recast(e.near),!(Ga.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ga,Ul)===null||Jr.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Il.copy(a).invert(),Jr.copy(e.ray).applyMatrix4(Il),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,p=a.groups,_=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,g=p.length;x<g;x++){const m=p[x],f=s[m.materialIndex],S=Math.max(m.start,_.start),y=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let A=S,I=y;A<I;A+=3){const P=o.getX(A),D=o.getX(A+1),K=o.getX(A+2);i=Ka(this,f,e,r,c,u,d,P,D,K),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);for(let m=x,f=g;m<f;m+=3){const S=o.getX(m),y=o.getX(m+1),A=o.getX(m+2);i=Ka(this,s,e,r,c,u,d,S,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,g=p.length;x<g;x++){const m=p[x],f=s[m.materialIndex],S=Math.max(m.start,_.start),y=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let A=S,I=y;A<I;A+=3){const P=A,D=A+1,K=A+2;i=Ka(this,f,e,r,c,u,d,P,D,K),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let m=x,f=g;m<f;m+=3){const S=m,y=m+1,A=m+2;i=Ka(this,s,e,r,c,u,d,S,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function mf(n,e,t,r,i,a,s,o){let l;if(e.side===_n?l=r.intersectTriangle(s,a,i,!0,o):l=r.intersectTriangle(i,a,s,e.side===Hr,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function Ka(n,e,t,r,i,a,s,o,l,c){n.getVertexPosition(o,Ri),n.getVertexPosition(l,Ci),n.getVertexPosition(c,Di);const u=mf(n,e,t,r,Ri,Ci,Di,$a);if(u){i&&(Wa.fromBufferAttribute(i,o),qa.fromBufferAttribute(i,l),Xa.fromBufferAttribute(i,c),u.uv=Bn.getInterpolation($a,Ri,Ci,Di,Wa,qa,Xa,new yt)),a&&(Wa.fromBufferAttribute(a,o),qa.fromBufferAttribute(a,l),Xa.fromBufferAttribute(a,c),u.uv1=Bn.getInterpolation($a,Ri,Ci,Di,Wa,qa,Xa,new yt),u.uv2=u.uv1),s&&(Fl.fromBufferAttribute(s,o),kl.fromBufferAttribute(s,l),Ol.fromBufferAttribute(s,c),u.normal=Bn.getInterpolation($a,Ri,Ci,Di,Fl,kl,Ol,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Z,materialIndex:0};Bn.getNormal(Ri,Ci,Di,d.normal),u.face=d}return u}class Ma extends hi{constructor(e=1,t=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let p=0,_=0;x("z","y","x",-1,-1,r,t,e,s,a,0),x("z","y","x",1,-1,r,t,-e,s,a,1),x("x","z","y",1,1,e,r,t,i,s,2),x("x","z","y",1,-1,e,r,-t,i,s,3),x("x","y","z",1,-1,e,t,r,i,a,4),x("x","y","z",-1,-1,e,t,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(d,2));function x(g,m,f,S,y,A,I,P,D,K,w){const C=A/D,B=I/K,W=A/2,ie=I/2,U=P/2,O=D+1,Y=K+1;let te=0,Q=0;const ne=new Z;for(let ee=0;ee<Y;ee++){const oe=ee*B-ie;for(let se=0;se<O;se++){const j=se*C-W;ne[g]=j*S,ne[m]=oe*y,ne[f]=U,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=P>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(se/D),d.push(1-ee/K),te+=1}}for(let ee=0;ee<K;ee++)for(let oe=0;oe<D;oe++){const se=p+oe+O*ee,j=p+oe+O*(ee+1),re=p+(oe+1)+O*(ee+1),ge=p+(oe+1)+O*ee;l.push(se,j,ge),l.push(j,re,ge),Q+=6}o.addGroup(_,Q,w),_+=Q,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const r=$i(n[t]);for(const i in r)e[i]=r[i]}return e}function pf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gu(n){return n.getRenderTarget()===null?n.outputColorSpace:St.workingColorSpace}const gf={clone:$i,merge:un};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class c0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends c0{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class xf extends Tn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(Li,Pi,e,t);i.layers=this.layers,this.add(i);const a=new Hn(Li,Pi,e,t);a.layers=this.layers,this.add(a);const s=new Hn(Li,Pi,e,t);s.layers=this.layers,this.add(s);const o=new Hn(Li,Pi,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Li,Pi,e,t);l.layers=this.layers,this.add(l);const c=new Hn(Li,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===mr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,o),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,p,_),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class vu extends xn{constructor(e,t,r,i,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,r,i,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];t.encoding!==void 0&&(da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===li?nn:Pn),this.texture=new vu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ma(5,5,5),a=new _r({name:"CubemapFromEquirect",uniforms:$i(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:_n,blending:Or});a.uniforms.tEquirect.value=t;const s=new jn(i,a),o=t.minFilter;return t.minFilter===ga&&(t.minFilter=Ln),new xf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(a)}}const fo=new Z,yf=new Z,Sf=new lt;class ni{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=fo.subVectors(r,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Sf.getNormalMatrix(e),i=this.coplanarPoint(fo).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new l0,ja=new Z;class _u{constructor(e=new ni,t=new ni,r=new ni,i=new ni,a=new ni,s=new ni){this.planes=[e,t,r,i,a,s]}set(e,t,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=mr){const r=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],p=i[7],_=i[8],x=i[9],g=i[10],m=i[11],f=i[12],S=i[13],y=i[14],A=i[15];if(r[0].setComponents(l-a,p-c,m-_,A-f).normalize(),r[1].setComponents(l+a,p+c,m+_,A+f).normalize(),r[2].setComponents(l+s,p+u,m+x,A+S).normalize(),r[3].setComponents(l-s,p-u,m-x,A-S).normalize(),r[4].setComponents(l-o,p-d,m-g,A-y).normalize(),t===mr)r[5].setComponents(l+o,p+d,m+g,A+y).normalize();else if(t===xs)r[5].setComponents(o,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(ja.x=i.normal.x>0?e.max.x:e.min.x,ja.y=i.normal.y>0?e.max.y:e.min.y,ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let n=null,e=!1,t=null,r=null;function i(a,s){t(a,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Mf(n,e){const t=e.isWebGL2,r=new WeakMap;function i(c,u){const d=c.array,p=c.usage,_=d.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,d,p),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function a(c,u,d){const p=u.array,_=u._updateRange,x=u.updateRanges;if(n.bindBuffer(d,c),_.count===-1&&x.length===0&&n.bufferSubData(d,0,p),x.length!==0){for(let g=0,m=x.length;g<m;g++){const f=x[g];t?n.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}_.count!==-1&&(t?n.bufferSubData(d,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):n.bufferSubData(d,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(n.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=r.get(c);(!p||p.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=r.get(c);if(d===void 0)r.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,u),d.version=c.version}}return{get:s,remove:o,update:l}}class wa extends hi{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(i),c=o+1,u=l+1,d=e/o,p=t/l,_=[],x=[],g=[],m=[];for(let f=0;f<u;f++){const S=f*p-s;for(let y=0;y<c;y++){const A=y*d-a;x.push(A,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const y=S+c*f,A=S+c*(f+1),I=S+1+c*(f+1),P=S+1+c*f;_.push(y,A,P),_.push(A,I,P)}this.setIndex(_),this.setAttribute("position",new ci(x,3)),this.setAttribute("normal",new ci(g,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:wf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:Af,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Df,aomap_pars_fragment:Lf,batching_pars_vertex:Pf,batching_vertex:Nf,begin_vertex:If,beginnormal_vertex:Uf,bsdfs:Ff,iridescence_fragment:kf,bumpmap_pars_fragment:Of,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Vf,color_pars_fragment:Wf,color_pars_vertex:qf,color_vertex:Xf,common:$f,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:jf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Qf,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:rm,envmap_pars_fragment:im,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:sm,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:um,gradientmap_pars_fragment:hm,lightmap_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:pm,lights_pars_begin:gm,lights_toon_fragment:_m,lights_toon_pars_fragment:xm,lights_phong_fragment:bm,lights_phong_pars_fragment:ym,lights_physical_fragment:Sm,lights_physical_pars_fragment:Mm,lights_fragment_begin:wm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Dm,map_fragment:Lm,map_pars_fragment:Pm,map_particle_fragment:Nm,map_particle_pars_fragment:Im,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphcolor_vertex:km,morphnormal_vertex:Om,morphtarget_pars_vertex:zm,morphtarget_vertex:Bm,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:qm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Qm,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ip,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:sp,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:up,skinning_vertex:hp,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:mp,tonemapping_fragment:pp,tonemapping_pars_fragment:gp,transmission_fragment:vp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:bp,uv_vertex:yp,worldpos_vertex:Sp,background_vert:Mp,background_frag:wp,backgroundCube_vert:Ep,backgroundCube_frag:Tp,cube_vert:Ap,cube_frag:Rp,depth_vert:Cp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Pp,equirect_vert:Np,equirect_frag:Ip,linedashed_vert:Up,linedashed_frag:Fp,meshbasic_vert:kp,meshbasic_frag:Op,meshlambert_vert:zp,meshlambert_frag:Bp,meshmatcap_vert:Hp,meshmatcap_frag:Gp,meshnormal_vert:Vp,meshnormal_frag:Wp,meshphong_vert:qp,meshphong_frag:Xp,meshphysical_vert:$p,meshphysical_frag:Yp,meshtoon_vert:Kp,meshtoon_frag:jp,points_vert:Zp,points_frag:Jp,shadow_vert:Qp,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},Me={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},$n={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};$n.physical={uniforms:un([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Za={r:0,b:0,g:0};function r1(n,e,t,r,i,a,s){const o=new Mt(0);let l=a===!0?0:1,c,u,d=null,p=0,_=null;function x(m,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?r.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Rs)?(u===void 0&&(u=new jn(new Ma(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:$i($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=St.getTransfer(y.colorSpace)!==It,(d!==y||p!==y.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,_=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jn(new wa(2,2),new _r({name:"BackgroundMaterial",uniforms:$i($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=St.getTransfer(y.colorSpace)!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,_=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Za,gu(n)),r.buffers.color.setClear(Za.r,Za.g,Za.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:x}}function i1(n,e,t,r){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},l=m(null);let c=l,u=!1;function d(U,O,Y,te,Q){let ne=!1;if(s){const ee=g(te,Y,O);c!==ee&&(c=ee,_(c.object)),ne=f(U,te,Y,Q),ne&&S(U,te,Y,Q)}else{const ee=O.wireframe===!0;(c.geometry!==te.id||c.program!==Y.id||c.wireframe!==ee)&&(c.geometry=te.id,c.program=Y.id,c.wireframe=ee,ne=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,K(U,O,Y,te),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return r.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function _(U){return r.isWebGL2?n.bindVertexArray(U):a.bindVertexArrayOES(U)}function x(U){return r.isWebGL2?n.deleteVertexArray(U):a.deleteVertexArrayOES(U)}function g(U,O,Y){const te=Y.wireframe===!0;let Q=o[U.id];Q===void 0&&(Q={},o[U.id]=Q);let ne=Q[O.id];ne===void 0&&(ne={},Q[O.id]=ne);let ee=ne[te];return ee===void 0&&(ee=m(p()),ne[te]=ee),ee}function m(U){const O=[],Y=[],te=[];for(let Q=0;Q<i;Q++)O[Q]=0,Y[Q]=0,te[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:te,object:U,attributes:{},index:null}}function f(U,O,Y,te){const Q=c.attributes,ne=O.attributes;let ee=0;const oe=Y.getAttributes();for(const se in oe)if(oe[se].location>=0){const re=Q[se];let ge=ne[se];if(ge===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;ee++}return c.attributesNum!==ee||c.index!==te}function S(U,O,Y,te){const Q={},ne=O.attributes;let ee=0;const oe=Y.getAttributes();for(const se in oe)if(oe[se].location>=0){let re=ne[se];re===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));const ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),Q[se]=ge,ee++}c.attributes=Q,c.attributesNum=ee,c.index=te}function y(){const U=c.newAttributes;for(let O=0,Y=U.length;O<Y;O++)U[O]=0}function A(U){I(U,0)}function I(U,O){const Y=c.newAttributes,te=c.enabledAttributes,Q=c.attributeDivisors;Y[U]=1,te[U]===0&&(n.enableVertexAttribArray(U),te[U]=1),Q[U]!==O&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),Q[U]=O)}function P(){const U=c.newAttributes,O=c.enabledAttributes;for(let Y=0,te=O.length;Y<te;Y++)O[Y]!==U[Y]&&(n.disableVertexAttribArray(Y),O[Y]=0)}function D(U,O,Y,te,Q,ne,ee){ee===!0?n.vertexAttribIPointer(U,O,Y,Q,ne):n.vertexAttribPointer(U,O,Y,te,Q,ne)}function K(U,O,Y,te){if(r.isWebGL2===!1&&(U.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=te.attributes,ne=Y.getAttributes(),ee=O.defaultAttributeValues;for(const oe in ne){const se=ne[oe];if(se.location>=0){let j=Q[oe];if(j===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const re=j.normalized,ge=j.itemSize,Le=t.get(j);if(Le===void 0)continue;const ye=Le.buffer,Oe=Le.type,We=Le.bytesPerElement,Ae=r.isWebGL2===!0&&(Oe===n.INT||Oe===n.UNSIGNED_INT||j.gpuType===Jc);if(j.isInterleavedBufferAttribute){const Be=j.data,V=Be.stride,Tt=j.offset;if(Be.isInstancedInterleavedBuffer){for(let Ie=0;Ie<se.locationSize;Ie++)I(se.location+Ie,Be.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Ie=0;Ie<se.locationSize;Ie++)A(se.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Ie=0;Ie<se.locationSize;Ie++)D(se.location+Ie,ge/se.locationSize,Oe,re,V*We,(Tt+ge/se.locationSize*Ie)*We,Ae)}else{if(j.isInstancedBufferAttribute){for(let Be=0;Be<se.locationSize;Be++)I(se.location+Be,j.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Be=0;Be<se.locationSize;Be++)A(se.location+Be);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Be=0;Be<se.locationSize;Be++)D(se.location+Be,ge/se.locationSize,Oe,re,ge*We,ge/se.locationSize*Be*We,Ae)}}else if(ee!==void 0){const re=ee[oe];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(se.location,re);break;case 3:n.vertexAttrib3fv(se.location,re);break;case 4:n.vertexAttrib4fv(se.location,re);break;default:n.vertexAttrib1fv(se.location,re)}}}}P()}function w(){W();for(const U in o){const O=o[U];for(const Y in O){const te=O[Y];for(const Q in te)x(te[Q].object),delete te[Q];delete O[Y]}delete o[U]}}function C(U){if(o[U.id]===void 0)return;const O=o[U.id];for(const Y in O){const te=O[Y];for(const Q in te)x(te[Q].object),delete te[Q];delete O[Y]}delete o[U.id]}function B(U){for(const O in o){const Y=o[O];if(Y[U.id]===void 0)continue;const te=Y[U.id];for(const Q in te)x(te[Q].object),delete te[Q];delete Y[U.id]}}function W(){ie(),u=!0,c!==l&&(c=l,_(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:ie,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:A,disableUnusedAttributes:P}}function a1(n,e,t,r){const i=r.isWebGL2;let a;function s(u){a=u}function o(u,d){n.drawArrays(a,u,d),t.update(d,a,1)}function l(u,d,p){if(p===0)return;let _,x;if(i)_=n,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](a,u,d,p),t.update(d,a,p)}function c(u,d,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<p;x++)this.render(u[x],d[x]);else{_.multiDrawArraysWEBGL(a,u,0,d,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];t.update(x,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function s1(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,A=s||e.has("OES_texture_float"),I=y&&A,P=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:P}}function o1(n){const e=this;let t=null,r=0,i=!1,a=!1;const s=new ni,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const _=d.length!==0||p||r!==0||i;return i=p,r=d.length,_},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,_){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!i||x===null||x.length===0||a&&!m)a?u(null):c();else{const S=a?0:r,y=S*4;let A=f.clippingState||null;l.value=A,A=u(x,p,y,_);for(let I=0;I!==y;++I)A[I]=t[I];f.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,p,_,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=_+g*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,A=_;y!==g;++y,A+=4)s.copy(d[y]).applyMatrix4(S,o),s.normal.toArray(m,A),m[A+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function l1(n){let e=new WeakMap;function t(s,o){return o===Bo?s.mapping=Wi:o===Ho&&(s.mapping=qi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Bo||o===Ho)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new bf(l.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class bu extends c0{constructor(e=-1,t=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=4,zl=[.125,.215,.35,.446,.526,.582],ai=20,mo=new bu,Bl=new Mt;let po=null,go=0,vo=0;const ri=(1+Math.sqrt(5))/2,Ni=1/ri,Hl=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,ri,Ni),new Z(0,ri,-Ni),new Z(Ni,0,ri),new Z(-Ni,0,ri),new Z(ri,Ni,0),new Z(-ri,Ni,0)];class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){po=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,go,vo),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:va,format:wn,colorSpace:vr,depthBuffer:!1},i=Vl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c1(a)),this._blurMaterial=u1(a,e,t)}return i}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,r,i){const o=new Hn(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Bl),u.toneMapping=zr,u.autoClear=!1;const _=new fu({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new jn(new Ma,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(Bl),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;Ja(i,S*y,f>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Wi||e.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new jn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,mo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Hl[(i-1)%Hl.length];this._blur(e,i-1,i,a,s)}t.autoClear=r}_blur(e,t,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new jn(this._lodPlanes[i],c),p=c.uniforms,_=this._sizeLods[r]-1,x=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*ai-1),g=a/x,m=isFinite(a)?1+Math.floor(u*g):ai;m>ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let S=0;for(let D=0;D<ai;++D){const K=D/g,w=Math.exp(-K*K/2);f.push(w),D===0?S+=w:D<m&&(S+=2*w)}for(let D=0;D<f.length;D++)f[D]=f[D]/S;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=x,p.mipInt.value=y-r;const A=this._sizeLods[i],I=3*A*(i>y-ki?i-y+ki:0),P=4*(this._cubeSize-A);Ja(t,I,P,3*A,2*A),l.setRenderTarget(t),l.render(d,mo)}}function c1(n){const e=[],t=[],r=[];let i=n;const a=n-ki+1+zl.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>n-ki?l=zl[s-n+ki-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,x=6,g=3,m=2,f=1,S=new Float32Array(g*x*_),y=new Float32Array(m*x*_),A=new Float32Array(f*x*_);for(let P=0;P<_;P++){const D=P%3*2/3-1,K=P>2?0:-1,w=[D,K,0,D+2/3,K,0,D+2/3,K+1,0,D,K,0,D+2/3,K+1,0,D,K+1,0];S.set(w,g*x*P),y.set(p,m*x*P);const C=[P,P,P,P,P,P];A.set(C,f*x*P)}const I=new hi;I.setAttribute("position",new Qn(S,g)),I.setAttribute("uv",new Qn(y,m)),I.setAttribute("faceIndex",new Qn(A,f)),e.push(I),i>ki&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Vl(n,e,t){const r=new Gr(n,e,t);return r.texture.mapping=Rs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ja(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function u1(n,e,t){const r=new Float32Array(ai),i=new Z(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:u0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Wl(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:u0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ql(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:u0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function u0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h1(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bo||l===Ho,u=l===Wi||l===qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Gl(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Gl(n));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function d1(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function f1(n,e,t,r){const i={},a=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const g=p.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}p.removeEventListener("dispose",s),delete i[p.id];const _=a.get(p);_&&(e.remove(_),a.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",s),i[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const x in p)e.update(p[x],n.ARRAY_BUFFER);const _=d.morphAttributes;for(const x in _){const g=_[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(d){const p=[],_=d.index,x=d.attributes.position;let g=0;if(_!==null){const S=_.array;g=_.version;for(let y=0,A=S.length;y<A;y+=3){const I=S[y+0],P=S[y+1],D=S[y+2];p.push(I,P,P,D,D,I)}}else if(x!==void 0){const S=x.array;g=x.version;for(let y=0,A=S.length/3-1;y<A;y+=3){const I=y+0,P=y+1,D=y+2;p.push(I,P,P,D,D,I)}}else return;const m=new(ou(p)?pu:mu)(p,1);m.version=g;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function u(d){const p=a.get(d);if(p){const _=d.index;_!==null&&p.version<_.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function m1(n,e,t,r){const i=r.isWebGL2;let a;function s(_){a=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function u(_,x){n.drawElements(a,x,o,_*l),t.update(x,a,1)}function d(_,x,g){if(g===0)return;let m,f;if(i)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](a,x,o,_*l,g),t.update(x,a,g)}function p(_,x,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(_[f]/l,x[f]);else{m.multiDrawElementsWEBGL(a,x,0,o,_,0,g);let f=0;for(let S=0;S<g;S++)f+=x[S];t.update(f,a,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function p1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function g1(n,e){return n[0]-e[0]}function v1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _1(n,e,t){const r={},i=new Float32Array(8),a=new WeakMap,s=new Vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=x!==void 0?x.length:0;let m=a.get(u);if(m===void 0||m.count!==g){let O=function(){ie.dispose(),a.delete(u),u.removeEventListener("dispose",O)};var _=O;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],K=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),A===!0&&(w=2),I===!0&&(w=3);let C=u.attributes.position.count*w,B=1;C>e.maxTextureSize&&(B=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const W=new Float32Array(C*B*4*g),ie=new uu(W,C,B,g);ie.type=Kn,ie.needsUpdate=!0;const U=w*4;for(let Y=0;Y<g;Y++){const te=P[Y],Q=D[Y],ne=K[Y],ee=C*B*4*Y;for(let oe=0;oe<te.count;oe++){const se=oe*U;y===!0&&(s.fromBufferAttribute(te,oe),W[ee+se+0]=s.x,W[ee+se+1]=s.y,W[ee+se+2]=s.z,W[ee+se+3]=0),A===!0&&(s.fromBufferAttribute(Q,oe),W[ee+se+4]=s.x,W[ee+se+5]=s.y,W[ee+se+6]=s.z,W[ee+se+7]=0),I===!0&&(s.fromBufferAttribute(ne,oe),W[ee+se+8]=s.x,W[ee+se+9]=s.y,W[ee+se+10]=s.z,W[ee+se+11]=ne.itemSize===4?s.w:1)}}m={count:g,texture:ie,size:new yt(C,B)},a.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let y=0;y<p.length;y++)f+=p[y];const S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=p===void 0?0:p.length;let g=r[u.id];if(g===void 0||g.length!==x){g=[];for(let A=0;A<x;A++)g[A]=[A,0];r[u.id]=g}for(let A=0;A<x;A++){const I=g[A];I[0]=A,I[1]=p[A]}g.sort(v1);for(let A=0;A<8;A++)A<x&&g[A][1]?(o[A][0]=g[A][0],o[A][1]=g[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(g1);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let S=0;for(let A=0;A<8;A++){const I=o[A],P=I[0],D=I[1];P!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+A)!==m[P]&&u.setAttribute("morphTarget"+A,m[P]),f&&u.getAttribute("morphNormal"+A)!==f[P]&&u.setAttribute("morphNormal"+A,f[P]),i[A]=D,S+=D):(m&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),f&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),i[A]=0)}const y=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:l}}function x1(n,e,t,r){let i=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return d}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class yu extends xn{constructor(e,t,r,i,a,s,o,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===oi&&(r=Fr),r===void 0&&u===Xi&&(r=si),super(null,i,a,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Su=new xn,Mu=new yu(1,1);Mu.compareFunction=su;const wu=new uu,Eu=new tf,Tu=new vu,Xl=[],$l=[],Yl=new Float32Array(16),Kl=new Float32Array(9),jl=new Float32Array(4);function Qi(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let a=Xl[i];if(a===void 0&&(a=new Float32Array(i),Xl[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Ps(n,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function b1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function w1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,r))return;jl.set(r),n.uniformMatrix2fv(this.addr,!1,jl),Zt(t,r)}}function E1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,r))return;Kl.set(r),n.uniformMatrix3fv(this.addr,!1,Kl),Zt(t,r)}}function T1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,r))return;Yl.set(r),n.uniformMatrix4fv(this.addr,!1,Yl),Zt(t,r)}}function A1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function L1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function P1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function N1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function U1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);const a=this.type===n.SAMPLER_2D_SHADOW?Mu:Su;t.setTexture2D(e||a,i)}function F1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Eu,i)}function k1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Tu,i)}function O1(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||wu,i)}function z1(n){switch(n){case 5126:return b1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return D1;case 5125:return L1;case 36294:return P1;case 36295:return N1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return O1}}function B1(n,e){n.uniform1fv(this.addr,e)}function H1(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function G1(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function V1(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function W1(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function q1(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X1(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $1(n,e){n.uniform1iv(this.addr,e)}function Y1(n,e){n.uniform2iv(this.addr,e)}function K1(n,e){n.uniform3iv(this.addr,e)}function j1(n,e){n.uniform4iv(this.addr,e)}function Z1(n,e){n.uniform1uiv(this.addr,e)}function J1(n,e){n.uniform2uiv(this.addr,e)}function Q1(n,e){n.uniform3uiv(this.addr,e)}function e2(n,e){n.uniform4uiv(this.addr,e)}function t2(n,e,t){const r=this.cache,i=e.length,a=Ps(t,i);jt(r,a)||(n.uniform1iv(this.addr,a),Zt(r,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Su,a[s])}function n2(n,e,t){const r=this.cache,i=e.length,a=Ps(t,i);jt(r,a)||(n.uniform1iv(this.addr,a),Zt(r,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Eu,a[s])}function r2(n,e,t){const r=this.cache,i=e.length,a=Ps(t,i);jt(r,a)||(n.uniform1iv(this.addr,a),Zt(r,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Tu,a[s])}function i2(n,e,t){const r=this.cache,i=e.length,a=Ps(t,i);jt(r,a)||(n.uniform1iv(this.addr,a),Zt(r,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||wu,a[s])}function a2(n){switch(n){case 5126:return B1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return q1;case 35676:return X1;case 5124:case 35670:return $1;case 35667:case 35671:return Y1;case 35668:case 35672:return K1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return J1;case 36295:return Q1;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return i2}}class s2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=z1(t.type)}}class o2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a2(t.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],r)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Zl(n,e){n.seq.push(e),n.map[e.id]=e}function c2(n,e,t){const r=n.name,i=r.length;for(_o.lastIndex=0;;){const a=_o.exec(r),s=_o.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Zl(t,c===void 0?new s2(o,n,e):new o2(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new l2(o),Zl(t,d)),t=d}}}class ds{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);c2(a,s,this)}}setValue(e,t,r,i){const a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function Jl(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const u2=37297;let h2=0;function d2(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function f2(n){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(n);let r;switch(e===t?r="":e===_s&&t===vs?r="LinearDisplayP3ToLinearSRGB":e===vs&&t===_s&&(r="LinearSRGBToLinearDisplayP3"),n){case vr:case Cs:return[r,"LinearTransferOETF"];case nn:case o0:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function Ql(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+d2(n.getShaderSource(e),s)}else return i}function m2(n,e){const t=f2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function p2(n,e){let t;switch(e){case Md:t="Linear";break;case wd:t="Reinhard";break;case Ed:t="OptimizedCineon";break;case Td:t="ACESFilmic";break;case Rd:t="AgX";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function v2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Oi).join(`
`)}function _2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function x2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=n.getActiveAttrib(e,i),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Oi(n){return n!==""}function ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(b2,S2)}const y2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function S2(n,e){let t=ot[e];if(t===void 0){const r=y2.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const M2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(n){return n.replace(M2,w2)}function w2(n,e,t,r){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function rc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function T2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case qi:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function R2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function C2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function D2(n,e,t,r){const i=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=E2(t),c=T2(t),u=A2(t),d=R2(t),p=C2(t),_=t.isWebGL2?"":g2(t),x=v2(t),g=_2(a),m=i.createProgram();let f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`),S=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),S.length>0&&(S+=`
`)):(f=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),S=[_,rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?ot.tonemapping_pars_fragment:"",t.toneMapping!==zr?p2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,m2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),s=$o(s),s=ec(s,t),s=tc(s,t),o=$o(o),o=ec(o,t),o=tc(o,t),s=nc(s),o=nc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const A=y+f+s,I=y+S+o,P=Jl(i,i.VERTEX_SHADER,A),D=Jl(i,i.FRAGMENT_SHADER,I);i.attachShader(m,P),i.attachShader(m,D),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function K(W){if(n.debug.checkShaderErrors){const ie=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(P).trim(),O=i.getShaderInfoLog(D).trim();let Y=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,P,D);else{const Q=Ql(i,P,"vertex"),ne=Ql(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+Q+`
`+ne)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(U===""||O==="")&&(te=!1);te&&(W.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:U,prefix:f},fragmentShader:{log:O,prefix:S}})}i.deleteShader(P),i.deleteShader(D),w=new ds(i,m),C=x2(i,m)}let w;this.getUniforms=function(){return w===void 0&&K(this),w};let C;this.getAttributes=function(){return C===void 0&&K(this),C};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,u2)),B},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=D,this}let L2=0;class P2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new N2(e),t.set(e,r)),r}}class N2{constructor(e){this.id=L2++,this.code=e,this.usedTimes=0}}function I2(n,e,t,r,i,a,s){const o=new hu,l=new P2,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return w===0?"uv":`uv${w}`}function m(w,C,B,W,ie){const U=W.fog,O=ie.geometry,Y=w.isMeshStandardMaterial?W.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),Q=te&&te.mapping===Rs?te.image.height:null,ne=x[w.type];w.precision!==null&&(_=i.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=ee!==void 0?ee.length:0;let se=0;O.morphAttributes.position!==void 0&&(se=1),O.morphAttributes.normal!==void 0&&(se=2),O.morphAttributes.color!==void 0&&(se=3);let j,re,ge,Le;if(ne){const qt=$n[ne];j=qt.vertexShader,re=qt.fragmentShader}else j=w.vertexShader,re=w.fragmentShader,l.update(w),ge=l.getVertexShaderID(w),Le=l.getFragmentShaderID(w);const ye=n.getRenderTarget(),Oe=ie.isInstancedMesh===!0,We=ie.isBatchedMesh===!0,Ae=!!w.map,Be=!!w.matcap,V=!!te,Tt=!!w.aoMap,Ie=!!w.lightMap,Ge=!!w.bumpMap,Pe=!!w.normalMap,gt=!!w.displacementMap,Ke=!!w.emissiveMap,R=!!w.metalnessMap,E=!!w.roughnessMap,q=w.anisotropy>0,fe=w.clearcoat>0,ue=w.iridescence>0,pe=w.sheen>0,Ue=w.transmission>0,we=q&&!!w.anisotropyMap,Ce=fe&&!!w.clearcoatMap,Ye=fe&&!!w.clearcoatNormalMap,nt=fe&&!!w.clearcoatRoughnessMap,ce=ue&&!!w.iridescenceMap,mt=ue&&!!w.iridescenceThicknessMap,it=pe&&!!w.sheenColorMap,$e=pe&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ne=!!w.specularColorMap,Ze=!!w.specularIntensityMap,dt=Ue&&!!w.transmissionMap,wt=Ue&&!!w.thicknessMap,at=!!w.gradientMap,_e=!!w.alphaMap,F=w.alphaTest>0,Ee=!!w.alphaHash,Se=!!w.extensions,je=!!O.attributes.uv1,ze=!!O.attributes.uv2,xt=!!O.attributes.uv3;let pt=zr;return w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(pt=n.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:j,fragmentShader:re,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:Le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:We,instancing:Oe,instancingColor:Oe&&ie.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:vr,map:Ae,matcap:Be,envMap:V,envMapMode:V&&te.mapping,envMapCubeUVHeight:Q,aoMap:Tt,lightMap:Ie,bumpMap:Ge,normalMap:Pe,displacementMap:p&&gt,emissiveMap:Ke,normalMapObjectSpace:Pe&&w.normalMapType===Hd,normalMapTangentSpace:Pe&&w.normalMapType===Bd,metalnessMap:R,roughnessMap:E,anisotropy:q,anisotropyMap:we,clearcoat:fe,clearcoatMap:Ce,clearcoatNormalMap:Ye,clearcoatRoughnessMap:nt,iridescence:ue,iridescenceMap:ce,iridescenceThicknessMap:mt,sheen:pe,sheenColorMap:it,sheenRoughnessMap:$e,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:Ze,transmission:Ue,transmissionMap:dt,thicknessMap:wt,gradientMap:at,opaque:w.transparent===!1&&w.blending===Bi,alphaMap:_e,alphaTest:F,alphaHash:Ee,combine:w.combine,mapUv:Ae&&g(w.map.channel),aoMapUv:Tt&&g(w.aoMap.channel),lightMapUv:Ie&&g(w.lightMap.channel),bumpMapUv:Ge&&g(w.bumpMap.channel),normalMapUv:Pe&&g(w.normalMap.channel),displacementMapUv:gt&&g(w.displacementMap.channel),emissiveMapUv:Ke&&g(w.emissiveMap.channel),metalnessMapUv:R&&g(w.metalnessMap.channel),roughnessMapUv:E&&g(w.roughnessMap.channel),anisotropyMapUv:we&&g(w.anisotropyMap.channel),clearcoatMapUv:Ce&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:it&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(w.sheenRoughnessMap.channel),specularMapUv:Ve&&g(w.specularMap.channel),specularColorMapUv:Ne&&g(w.specularColorMap.channel),specularIntensityMapUv:Ze&&g(w.specularIntensityMap.channel),transmissionMapUv:dt&&g(w.transmissionMap.channel),thicknessMapUv:wt&&g(w.thicknessMap.channel),alphaMapUv:_e&&g(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:ze,vertexUv3s:xt,pointsUvs:ie.isPoints===!0&&!!O.attributes.uv&&(Ae||_e),fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&w.map.isVideoTexture===!0&&St.getTransfer(w.map.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fr,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Se&&w.extensions.derivatives===!0,extensionFragDepth:Se&&w.extensions.fragDepth===!0,extensionDrawBuffers:Se&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&w.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)C.push(B),C.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(S(C,w),y(C,w),C.push(n.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function S(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function y(w,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),w.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function A(w){const C=x[w.type];let B;if(C){const W=$n[C];B=gf.clone(W.uniforms)}else B=w.uniforms;return B}function I(w,C){let B;for(let W=0,ie=c.length;W<ie;W++){const U=c[W];if(U.cacheKey===C){B=U,++B.usedTimes;break}}return B===void 0&&(B=new D2(n,C,w,a),c.push(B)),B}function P(w){if(--w.usedTimes===0){const C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:I,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:K}}function U2(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function r(a,s,o){n.get(a)[s]=o}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function F2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ac(){const n=[];let e=0;const t=[],r=[],i=[];function a(){e=0,t.length=0,r.length=0,i.length=0}function s(d,p,_,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:_,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=_,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function o(d,p,_,x,g,m){const f=s(d,p,_,x,g,m);_.transmission>0?r.push(f):_.transparent===!0?i.push(f):t.push(f)}function l(d,p,_,x,g,m){const f=s(d,p,_,x,g,m);_.transmission>0?r.unshift(f):_.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||F2),r.length>1&&r.sort(p||ic),i.length>1&&i.sort(p||ic)}function u(){for(let d=e,p=n.length;d<p;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:r,transparent:i,init:a,push:o,unshift:l,finish:u,sort:c}}function k2(){let n=new WeakMap;function e(r,i){const a=n.get(r);let s;return a===void 0?(s=new ac,n.set(r,[s])):i>=a.length?(s=new ac,a.push(s)):s=a[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function O2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Mt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function z2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B2=0;function H2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G2(n,e){const t=new O2,r=z2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const a=new Z,s=new rn,o=new rn;function l(u,d){let p=0,_=0,x=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,m=0,f=0,S=0,y=0,A=0,I=0,P=0,D=0,K=0,w=0;u.sort(H2);const C=d===!0?Math.PI:1;for(let W=0,ie=u.length;W<ie;W++){const U=u[W],O=U.color,Y=U.intensity,te=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=O.r*Y*C,_+=O.g*Y*C,x+=O.b*Y*C;else if(U.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(U.sh.coefficients[ne],Y);w++}else if(U.isDirectionalLight){const ne=t.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const ee=U.shadow,oe=r.get(U);oe.shadowBias=ee.bias,oe.shadowNormalBias=ee.normalBias,oe.shadowRadius=ee.radius,oe.shadowMapSize=ee.mapSize,i.directionalShadow[g]=oe,i.directionalShadowMap[g]=Q,i.directionalShadowMatrix[g]=U.shadow.matrix,A++}i.directional[g]=ne,g++}else if(U.isSpotLight){const ne=t.get(U);ne.position.setFromMatrixPosition(U.matrixWorld),ne.color.copy(O).multiplyScalar(Y*C),ne.distance=te,ne.coneCos=Math.cos(U.angle),ne.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ne.decay=U.decay,i.spot[f]=ne;const ee=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,ee.updateMatrices(U),U.castShadow&&K++),i.spotLightMatrix[f]=ee.matrix,U.castShadow){const oe=r.get(U);oe.shadowBias=ee.bias,oe.shadowNormalBias=ee.normalBias,oe.shadowRadius=ee.radius,oe.shadowMapSize=ee.mapSize,i.spotShadow[f]=oe,i.spotShadowMap[f]=Q,P++}f++}else if(U.isRectAreaLight){const ne=t.get(U);ne.color.copy(O).multiplyScalar(Y),ne.halfWidth.set(U.width*.5,0,0),ne.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=ne,S++}else if(U.isPointLight){const ne=t.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity*C),ne.distance=U.distance,ne.decay=U.decay,U.castShadow){const ee=U.shadow,oe=r.get(U);oe.shadowBias=ee.bias,oe.shadowNormalBias=ee.normalBias,oe.shadowRadius=ee.radius,oe.shadowMapSize=ee.mapSize,oe.shadowCameraNear=ee.camera.near,oe.shadowCameraFar=ee.camera.far,i.pointShadow[m]=oe,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=U.shadow.matrix,I++}i.point[m]=ne,m++}else if(U.isHemisphereLight){const ne=t.get(U);ne.skyColor.copy(U.color).multiplyScalar(Y*C),ne.groundColor.copy(U.groundColor).multiplyScalar(Y*C),i.hemi[y]=ne,y++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=x;const B=i.hash;(B.directionalLength!==g||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==A||B.numPointShadows!==I||B.numSpotShadows!==P||B.numSpotMaps!==D||B.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=P+D-K,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=K,i.numLightProbes=w,B.directionalLength=g,B.pointLength=m,B.spotLength=f,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=A,B.numPointShadows=I,B.numSpotShadows=P,B.numSpotMaps=D,B.numLightProbes=w,i.version=B2++)}function c(u,d){let p=0,_=0,x=0,g=0,m=0;const f=d.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const A=u[S];if(A.isDirectionalLight){const I=i.directional[p];I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(f),p++}else if(A.isSpotLight){const I=i.spot[x];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(f),x++}else if(A.isRectAreaLight){const I=i.rectArea[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),o.identity(),s.copy(A.matrixWorld),s.premultiply(f),o.extractRotation(s),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const I=i.point[_];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(f),_++}else if(A.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function sc(n,e){const t=new G2(n,e),r=[],i=[];function a(){r.length=0,i.length=0}function s(d){r.push(d)}function o(d){i.push(d)}function l(d){t.setup(r,d)}function c(d){t.setupView(r,d)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function V2(n,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new sc(n,e),t.set(a,[l])):s>=o.length?(l=new sc(n,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:r,dispose:i}}class W2 extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q2 extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y2(n,e,t){let r=new _u;const i=new yt,a=new yt,s=new Vt,o=new W2({depthPacking:zd}),l=new q2,c={},u=t.maxTextureSize,d={[Hr]:_n,[_n]:Hr,[fr]:fr},p=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:X2,fragmentShader:$2}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new hi;x.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jn(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(P,D,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const w=n.getRenderTarget(),C=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ie=f!==hr&&this.type===hr,U=f===hr&&this.type!==hr;for(let O=0,Y=P.length;O<Y;O++){const te=P[O],Q=te.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const ne=Q.getFrameExtents();if(i.multiply(ne),a.copy(Q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/ne.x),i.x=a.x*ne.x,Q.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/ne.y),i.y=a.y*ne.y,Q.mapSize.y=a.y)),Q.map===null||ie===!0||U===!0){const oe=this.type!==hr?{minFilter:Gt,magFilter:Gt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Gr(i.x,i.y,oe),Q.map.texture.name=te.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const ee=Q.getViewportCount();for(let oe=0;oe<ee;oe++){const se=Q.getViewport(oe);s.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),W.viewport(s),Q.updateMatrices(te,oe),r=Q.getFrustum(),A(D,K,Q.camera,te,this.type)}Q.isPointLightShadow!==!0&&this.type===hr&&S(Q,K),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,C,B)};function S(P,D){const K=e.update(g);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gr(i.x,i.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,K,p,g,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,K,_,g,null)}function y(P,D,K,w){let C=null;const B=K.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)C=B;else if(C=K.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const W=C.uuid,ie=D.uuid;let U=c[W];U===void 0&&(U={},c[W]=U);let O=U[ie];O===void 0&&(O=C.clone(),U[ie]=O,D.addEventListener("dispose",I)),C=O}if(C.visible=D.visible,C.wireframe=D.wireframe,w===hr?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:d[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=n.properties.get(C);W.light=K}return C}function A(P,D,K,w,C){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===hr)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),U=P.material;if(Array.isArray(U)){const O=ie.groups;for(let Y=0,te=O.length;Y<te;Y++){const Q=O[Y],ne=U[Q.materialIndex];if(ne&&ne.visible){const ee=y(P,ne,w,C);P.onBeforeShadow(n,P,D,K,ie,ee,Q),n.renderBufferDirect(K,null,ie,ee,P,Q),P.onAfterShadow(n,P,D,K,ie,ee,Q)}}}else if(U.visible){const O=y(P,U,w,C);P.onBeforeShadow(n,P,D,K,ie,O,null),n.renderBufferDirect(K,null,ie,O,P,null),P.onAfterShadow(n,P,D,K,ie,O,null)}}const W=P.children;for(let ie=0,U=W.length;ie<U;ie++)A(W[ie],D,K,w,C)}function I(P){P.target.removeEventListener("dispose",I);for(const K in c){const w=c[K],C=P.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function K2(n,e,t){const r=t.isWebGL2;function i(){let F=!1;const Ee=new Vt;let Se=null;const je=new Vt(0,0,0,0);return{setMask:function(ze){Se!==ze&&!F&&(n.colorMask(ze,ze,ze,ze),Se=ze)},setLocked:function(ze){F=ze},setClear:function(ze,xt,pt,Ht,qt){qt===!0&&(ze*=Ht,xt*=Ht,pt*=Ht),Ee.set(ze,xt,pt,Ht),je.equals(Ee)===!1&&(n.clearColor(ze,xt,pt,Ht),je.copy(Ee))},reset:function(){F=!1,Se=null,je.set(-1,0,0,0)}}}function a(){let F=!1,Ee=null,Se=null,je=null;return{setTest:function(ze){ze?We(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(ze){Ee!==ze&&!F&&(n.depthMask(ze),Ee=ze)},setFunc:function(ze){if(Se!==ze){switch(ze){case md:n.depthFunc(n.NEVER);break;case pd:n.depthFunc(n.ALWAYS);break;case gd:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case vd:n.depthFunc(n.EQUAL);break;case _d:n.depthFunc(n.GEQUAL);break;case xd:n.depthFunc(n.GREATER);break;case bd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ze}},setLocked:function(ze){F=ze},setClear:function(ze){je!==ze&&(n.clearDepth(ze),je=ze)},reset:function(){F=!1,Ee=null,Se=null,je=null}}}function s(){let F=!1,Ee=null,Se=null,je=null,ze=null,xt=null,pt=null,Ht=null,qt=null;return{setTest:function(ut){F||(ut?We(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ut){Ee!==ut&&!F&&(n.stencilMask(ut),Ee=ut)},setFunc:function(ut,Qt,on){(Se!==ut||je!==Qt||ze!==on)&&(n.stencilFunc(ut,Qt,on),Se=ut,je=Qt,ze=on)},setOp:function(ut,Qt,on){(xt!==ut||pt!==Qt||Ht!==on)&&(n.stencilOp(ut,Qt,on),xt=ut,pt=Qt,Ht=on)},setLocked:function(ut){F=ut},setClear:function(ut){qt!==ut&&(n.clearStencil(ut),qt=ut)},reset:function(){F=!1,Ee=null,Se=null,je=null,ze=null,xt=null,pt=null,Ht=null,qt=null}}}const o=new i,l=new a,c=new s,u=new WeakMap,d=new WeakMap;let p={},_={},x=new WeakMap,g=[],m=null,f=!1,S=null,y=null,A=null,I=null,P=null,D=null,K=null,w=new Mt(0,0,0),C=0,B=!1,W=null,ie=null,U=null,O=null,Y=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ne=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=ne>=1):ee.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=ne>=2);let oe=null,se={};const j=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),ge=new Vt().fromArray(j),Le=new Vt().fromArray(re);function ye(F,Ee,Se,je){const ze=new Uint8Array(4),xt=n.createTexture();n.bindTexture(F,xt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<Se;pt++)r&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ee+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return xt}const Oe={};Oe[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Oe[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Oe[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Oe[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(n.DEPTH_TEST),l.setFunc(ps),Ke(!1),R(H0),We(n.CULL_FACE),Pe(Or);function We(F){p[F]!==!0&&(n.enable(F),p[F]=!0)}function Ae(F){p[F]!==!1&&(n.disable(F),p[F]=!1)}function Be(F,Ee){return _[F]!==Ee?(n.bindFramebuffer(F,Ee),_[F]=Ee,r&&(F===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function V(F,Ee){let Se=g,je=!1;if(F)if(Se=x.get(Ee),Se===void 0&&(Se=[],x.set(Ee,Se)),F.isWebGLMultipleRenderTargets){const ze=F.texture;if(Se.length!==ze.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,pt=ze.length;xt<pt;xt++)Se[xt]=n.COLOR_ATTACHMENT0+xt;Se.length=ze.length,je=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,je=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,je=!0);je&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Tt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const Ie={[ii]:n.FUNC_ADD,[Qh]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};if(r)Ie[q0]=n.MIN,Ie[X0]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ie[q0]=F.MIN_EXT,Ie[X0]=F.MAX_EXT)}const Ge={[td]:n.ZERO,[nd]:n.ONE,[rd]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[ad]:n.DST_ALPHA,[id]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[hd]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(F,Ee,Se,je,ze,xt,pt,Ht,qt,ut){if(F===Or){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(We(n.BLEND),f=!0),F!==Jh){if(F!==S||ut!==B){if((y!==ii||P!==ii)&&(n.blendEquation(n.FUNC_ADD),y=ii,P=ii),ut)switch(F){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFunc(n.ONE,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,I=null,D=null,K=null,w.set(0,0,0),C=0,S=F,B=ut}return}ze=ze||Ee,xt=xt||Se,pt=pt||je,(Ee!==y||ze!==P)&&(n.blendEquationSeparate(Ie[Ee],Ie[ze]),y=Ee,P=ze),(Se!==A||je!==I||xt!==D||pt!==K)&&(n.blendFuncSeparate(Ge[Se],Ge[je],Ge[xt],Ge[pt]),A=Se,I=je,D=xt,K=pt),(Ht.equals(w)===!1||qt!==C)&&(n.blendColor(Ht.r,Ht.g,Ht.b,qt),w.copy(Ht),C=qt),S=F,B=!1}function gt(F,Ee){F.side===fr?Ae(n.CULL_FACE):We(n.CULL_FACE);let Se=F.side===_n;Ee&&(Se=!Se),Ke(Se),F.blending===Bi&&F.transparent===!1?Pe(Or):Pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const je=F.stencilWrite;c.setTest(je),je&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),q(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){W!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),W=F)}function R(F){F!==Kh?(We(n.CULL_FACE),F!==ie&&(F===H0?n.cullFace(n.BACK):F===jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),ie=F}function E(F){F!==U&&(Q&&n.lineWidth(F),U=F)}function q(F,Ee,Se){F?(We(n.POLYGON_OFFSET_FILL),(O!==Ee||Y!==Se)&&(n.polygonOffset(Ee,Se),O=Ee,Y=Se)):Ae(n.POLYGON_OFFSET_FILL)}function fe(F){F?We(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ue(F){F===void 0&&(F=n.TEXTURE0+te-1),oe!==F&&(n.activeTexture(F),oe=F)}function pe(F,Ee,Se){Se===void 0&&(oe===null?Se=n.TEXTURE0+te-1:Se=oe);let je=se[Se];je===void 0&&(je={type:void 0,texture:void 0},se[Se]=je),(je.type!==F||je.texture!==Ee)&&(oe!==Se&&(n.activeTexture(Se),oe=Se),n.bindTexture(F,Ee||Oe[F]),je.type=F,je.texture=Ee)}function Ue(){const F=se[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function we(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(F){ge.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function dt(F){Le.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Le.copy(F))}function wt(F,Ee){let Se=d.get(Ee);Se===void 0&&(Se=new WeakMap,d.set(Ee,Se));let je=Se.get(F);je===void 0&&(je=n.getUniformBlockIndex(Ee,F.name),Se.set(F,je))}function at(F,Ee){const je=d.get(Ee).get(F);u.get(Ee)!==je&&(n.uniformBlockBinding(Ee,je,F.__bindingPointIndex),u.set(Ee,je))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),r===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},oe=null,se={},_={},x=new WeakMap,g=[],m=null,f=!1,S=null,y=null,A=null,I=null,P=null,D=null,K=null,w=new Mt(0,0,0),C=0,B=!1,W=null,ie=null,U=null,O=null,Y=null,ge.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:We,disable:Ae,bindFramebuffer:Be,drawBuffers:V,useProgram:Tt,setBlending:Pe,setMaterial:gt,setFlipSided:Ke,setCullFace:R,setLineWidth:E,setPolygonOffset:q,setScissorTest:fe,activeTexture:ue,bindTexture:pe,unbindTexture:Ue,compressedTexImage2D:we,compressedTexImage3D:Ce,texImage2D:Ve,texImage3D:Ne,updateUBOMapping:wt,uniformBlockBinding:at,texStorage2D:it,texStorage3D:$e,texSubImage2D:Ye,texSubImage3D:nt,compressedTexSubImage2D:ce,compressedTexSubImage3D:mt,scissor:Ze,viewport:dt,reset:_e}}function j2(n,e,t,r,i,a,s){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return _?new OffscreenCanvas(R,E):bs("canvas")}function g(R,E,q,fe){let ue=1;if((R.width>fe||R.height>fe)&&(ue=fe/Math.max(R.width,R.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const pe=E?Xo:Math.floor,Ue=pe(ue*R.width),we=pe(ue*R.height);d===void 0&&(d=x(Ue,we));const Ce=q?x(Ue,we):d;return Ce.width=Ue,Ce.height=we,Ce.getContext("2d").drawImage(R,0,0,Ue,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ue+"x"+we+")."),Ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Sl(R.width)&&Sl(R.height)}function f(R){return o?!1:R.wrapS!==Mn||R.wrapT!==Mn||R.minFilter!==Gt&&R.minFilter!==Ln}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==Gt&&R.minFilter!==Ln}function y(R){n.generateMipmap(R)}function A(R,E,q,fe,ue=!1){if(o===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe=E;if(E===n.RED&&(q===n.FLOAT&&(pe=n.R32F),q===n.HALF_FLOAT&&(pe=n.R16F),q===n.UNSIGNED_BYTE&&(pe=n.R8)),E===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(pe=n.R8UI),q===n.UNSIGNED_SHORT&&(pe=n.R16UI),q===n.UNSIGNED_INT&&(pe=n.R32UI),q===n.BYTE&&(pe=n.R8I),q===n.SHORT&&(pe=n.R16I),q===n.INT&&(pe=n.R32I)),E===n.RG&&(q===n.FLOAT&&(pe=n.RG32F),q===n.HALF_FLOAT&&(pe=n.RG16F),q===n.UNSIGNED_BYTE&&(pe=n.RG8)),E===n.RGBA){const Ue=ue?gs:St.getTransfer(fe);q===n.FLOAT&&(pe=n.RGBA32F),q===n.HALF_FLOAT&&(pe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(pe=Ue===It?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function I(R,E,q){return S(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){return R===Gt||R===$0||R===Gs?n.NEAREST:n.LINEAR}function D(R){const E=R.target;E.removeEventListener("dispose",D),w(E),E.isVideoTexture&&u.delete(E)}function K(R){const E=R.target;E.removeEventListener("dispose",K),B(E)}function w(R){const E=r.get(R);if(E.__webglInit===void 0)return;const q=R.source,fe=p.get(q);if(fe){const ue=fe[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(R),Object.keys(fe).length===0&&p.delete(q)}r.remove(R)}function C(R){const E=r.get(R);n.deleteTexture(E.__webglTexture);const q=R.source,fe=p.get(q);delete fe[E.__cacheKey],s.memory.textures--}function B(R){const E=R.texture,q=r.get(R),fe=r.get(E);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(q.__webglFramebuffer[ue]))for(let pe=0;pe<q.__webglFramebuffer[ue].length;pe++)n.deleteFramebuffer(q.__webglFramebuffer[ue][pe]);else n.deleteFramebuffer(q.__webglFramebuffer[ue]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ue])}else{if(Array.isArray(q.__webglFramebuffer))for(let ue=0;ue<q.__webglFramebuffer.length;ue++)n.deleteFramebuffer(q.__webglFramebuffer[ue]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ue=0;ue<q.__webglColorRenderbuffer.length;ue++)q.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ue]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,pe=E.length;ue<pe;ue++){const Ue=r.get(E[ue]);Ue.__webglTexture&&(n.deleteTexture(Ue.__webglTexture),s.memory.textures--),r.remove(E[ue])}r.remove(E),r.remove(R)}let W=0;function ie(){W=0}function U(){const R=W;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),W+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Y(R,E){const q=r.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(q,R,E);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+E)}function te(R,E){const q=r.get(R);if(R.version>0&&q.__version!==R.version){ge(q,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+E)}function Q(R,E){const q=r.get(R);if(R.version>0&&q.__version!==R.version){ge(q,R,E);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+E)}function ne(R,E){const q=r.get(R);if(R.version>0&&q.__version!==R.version){Le(q,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+E)}const ee={[Go]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},oe={[Gt]:n.NEAREST,[$0]:n.NEAREST_MIPMAP_NEAREST,[Gs]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Cd]:n.LINEAR_MIPMAP_NEAREST,[ga]:n.LINEAR_MIPMAP_LINEAR},se={[Gd]:n.NEVER,[Yd]:n.ALWAYS,[Vd]:n.LESS,[su]:n.LEQUAL,[Wd]:n.EQUAL,[$d]:n.GEQUAL,[qd]:n.GREATER,[Xd]:n.NOTEQUAL};function j(R,E,q){if(q?(n.texParameteri(R,n.TEXTURE_WRAP_S,ee[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ee[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ee[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Mn||E.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,P(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Gt&&E.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Gt||E.minFilter!==Gs&&E.minFilter!==ga||E.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===va&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(n.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function re(R,E){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D));const fe=E.source;let ue=p.get(fe);ue===void 0&&(ue={},p.set(fe,ue));const pe=O(E);if(pe!==R.__cacheKey){ue[pe]===void 0&&(ue[pe]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,q=!0),ue[pe].usedTimes++;const Ue=ue[R.__cacheKey];Ue!==void 0&&(ue[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&C(E)),R.__cacheKey=pe,R.__webglTexture=ue[pe].texture}return q}function ge(R,E,q){let fe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=n.TEXTURE_3D);const ue=re(R,E),pe=E.source;t.bindTexture(fe,R.__webglTexture,n.TEXTURE0+q);const Ue=r.get(pe);if(pe.version!==Ue.__version||ue===!0){t.activeTexture(n.TEXTURE0+q);const we=St.getPrimaries(St.workingColorSpace),Ce=E.colorSpace===Pn?null:St.getPrimaries(E.colorSpace),Ye=E.colorSpace===Pn||we===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const nt=f(E)&&m(E.image)===!1;let ce=g(E.image,nt,!1,i.maxTextureSize);ce=Ke(E,ce);const mt=m(ce)||o,it=a.convert(E.format,E.colorSpace);let $e=a.convert(E.type),Ve=A(E.internalFormat,it,$e,E.colorSpace,E.isVideoTexture);j(fe,E,mt);let Ne;const Ze=E.mipmaps,dt=o&&E.isVideoTexture!==!0&&Ve!==iu,wt=Ue.__version===void 0||ue===!0,at=I(E,ce,mt);if(E.isDepthTexture)Ve=n.DEPTH_COMPONENT,o?E.type===Kn?Ve=n.DEPTH_COMPONENT32F:E.type===Fr?Ve=n.DEPTH_COMPONENT24:E.type===si?Ve=n.DEPTH24_STENCIL8:Ve=n.DEPTH_COMPONENT16:E.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===oi&&Ve===n.DEPTH_COMPONENT&&E.type!==s0&&E.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fr,$e=a.convert(E.type)),E.format===Xi&&Ve===n.DEPTH_COMPONENT&&(Ve=n.DEPTH_STENCIL,E.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=si,$e=a.convert(E.type))),wt&&(dt?t.texStorage2D(n.TEXTURE_2D,1,Ve,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,it,$e,null));else if(E.isDataTexture)if(Ze.length>0&&mt){dt&&wt&&t.texStorage2D(n.TEXTURE_2D,at,Ve,Ze[0].width,Ze[0].height);for(let _e=0,F=Ze.length;_e<F;_e++)Ne=Ze[_e],dt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,it,$e,Ne.data):t.texImage2D(n.TEXTURE_2D,_e,Ve,Ne.width,Ne.height,0,it,$e,Ne.data);E.generateMipmaps=!1}else dt?(wt&&t.texStorage2D(n.TEXTURE_2D,at,Ve,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,it,$e,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,it,$e,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Ve,Ze[0].width,Ze[0].height,ce.depth);for(let _e=0,F=Ze.length;_e<F;_e++)Ne=Ze[_e],E.format!==wn?it!==null?dt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,ce.depth,it,Ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ve,Ne.width,Ne.height,ce.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,ce.depth,it,$e,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ve,Ne.width,Ne.height,ce.depth,0,it,$e,Ne.data)}else{dt&&wt&&t.texStorage2D(n.TEXTURE_2D,at,Ve,Ze[0].width,Ze[0].height);for(let _e=0,F=Ze.length;_e<F;_e++)Ne=Ze[_e],E.format!==wn?it!==null?dt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,it,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ve,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,it,$e,Ne.data):t.texImage2D(n.TEXTURE_2D,_e,Ve,Ne.width,Ne.height,0,it,$e,Ne.data)}else if(E.isDataArrayTexture)dt?(wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Ve,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,it,$e,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ce.width,ce.height,ce.depth,0,it,$e,ce.data);else if(E.isData3DTexture)dt?(wt&&t.texStorage3D(n.TEXTURE_3D,at,Ve,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,it,$e,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ce.width,ce.height,ce.depth,0,it,$e,ce.data);else if(E.isFramebufferTexture){if(wt)if(dt)t.texStorage2D(n.TEXTURE_2D,at,Ve,ce.width,ce.height);else{let _e=ce.width,F=ce.height;for(let Ee=0;Ee<at;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Ve,_e,F,0,it,$e,null),_e>>=1,F>>=1}}else if(Ze.length>0&&mt){dt&&wt&&t.texStorage2D(n.TEXTURE_2D,at,Ve,Ze[0].width,Ze[0].height);for(let _e=0,F=Ze.length;_e<F;_e++)Ne=Ze[_e],dt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,it,$e,Ne):t.texImage2D(n.TEXTURE_2D,_e,Ve,it,$e,Ne);E.generateMipmaps=!1}else dt?(wt&&t.texStorage2D(n.TEXTURE_2D,at,Ve,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,it,$e,ce)):t.texImage2D(n.TEXTURE_2D,0,Ve,it,$e,ce);S(E,mt)&&y(fe),Ue.__version=pe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Le(R,E,q){if(E.image.length!==6)return;const fe=re(R,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);const pe=r.get(ue);if(ue.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+q);const Ue=St.getPrimaries(St.workingColorSpace),we=E.colorSpace===Pn?null:St.getPrimaries(E.colorSpace),Ce=E.colorSpace===Pn||Ue===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let _e=0;_e<6;_e++)!Ye&&!nt?ce[_e]=g(E.image[_e],!1,!0,i.maxCubemapSize):ce[_e]=nt?E.image[_e].image:E.image[_e],ce[_e]=Ke(E,ce[_e]);const mt=ce[0],it=m(mt)||o,$e=a.convert(E.format,E.colorSpace),Ve=a.convert(E.type),Ne=A(E.internalFormat,$e,Ve,E.colorSpace),Ze=o&&E.isVideoTexture!==!0,dt=pe.__version===void 0||fe===!0;let wt=I(E,mt,it);j(n.TEXTURE_CUBE_MAP,E,it);let at;if(Ye){Ze&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Ne,mt.width,mt.height);for(let _e=0;_e<6;_e++){at=ce[_e].mipmaps;for(let F=0;F<at.length;F++){const Ee=at[F];E.format!==wn?$e!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F,0,0,Ee.width,Ee.height,$e,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F,Ne,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F,0,0,Ee.width,Ee.height,$e,Ve,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F,Ne,Ee.width,Ee.height,0,$e,Ve,Ee.data)}}}else{at=E.mipmaps,Ze&&dt&&(at.length>0&&wt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Ne,ce[0].width,ce[0].height));for(let _e=0;_e<6;_e++)if(nt){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ce[_e].width,ce[_e].height,$e,Ve,ce[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ne,ce[_e].width,ce[_e].height,0,$e,Ve,ce[_e].data);for(let F=0;F<at.length;F++){const Se=at[F].image[_e].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F+1,0,0,Se.width,Se.height,$e,Ve,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F+1,Ne,Se.width,Se.height,0,$e,Ve,Se.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,$e,Ve,ce[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ne,$e,Ve,ce[_e]);for(let F=0;F<at.length;F++){const Ee=at[F];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F+1,0,0,$e,Ve,Ee.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,F+1,Ne,$e,Ve,Ee.image[_e])}}}S(E,it)&&y(n.TEXTURE_CUBE_MAP),pe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,q,fe,ue,pe){const Ue=a.convert(q.format,q.colorSpace),we=a.convert(q.type),Ce=A(q.internalFormat,Ue,we,q.colorSpace);if(!r.get(E).__hasExternalTextures){const nt=Math.max(1,E.width>>pe),ce=Math.max(1,E.height>>pe);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,pe,Ce,nt,ce,E.depth,0,Ue,we,null):t.texImage2D(ue,pe,Ce,nt,ce,0,Ue,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Pe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ue,r.get(q).__webglTexture,0,Ge(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ue,r.get(q).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,E,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let fe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Pe(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Kn?fe=n.DEPTH_COMPONENT32F:ue.type===Fr&&(fe=n.DEPTH_COMPONENT24));const pe=Ge(E);Pe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const fe=Ge(E);q&&Pe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):Pe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<fe.length;ue++){const pe=fe[ue],Ue=a.convert(pe.format,pe.colorSpace),we=a.convert(pe.type),Ce=A(pe.internalFormat,Ue,we,pe.colorSpace),Ye=Ge(E);q&&Pe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ce,E.width,E.height):Pe(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const fe=r.get(E.depthTexture).__webglTexture,ue=Ge(E);if(E.depthTexture.format===oi)Pe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Xi)Pe(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const E=r.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,R)}else if(q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=n.createRenderbuffer(),Oe(E.__webglDepthbuffer[fe],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Oe(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(R,E,q){const fe=r.get(R);E!==void 0&&ye(fe.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ae(R)}function V(R){const E=R.texture,q=r.get(R),fe=r.get(E);R.addEventListener("dispose",K),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=E.version,s.memory.textures++);const ue=R.isWebGLCubeRenderTarget===!0,pe=R.isWebGLMultipleRenderTargets===!0,Ue=m(R)||o;if(ue){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[we][Ce]=n.createFramebuffer()}else q.__webglFramebuffer[we]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)q.__webglFramebuffer[we]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(pe)if(i.drawBuffers){const we=R.texture;for(let Ce=0,Ye=we.length;Ce<Ye;Ce++){const nt=r.get(we[Ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Pe(R)===!1){const we=pe?E:[E];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<we.length;Ce++){const Ye=we[Ce];q.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const nt=a.convert(Ye.format,Ye.colorSpace),ce=a.convert(Ye.type),mt=A(Ye.internalFormat,nt,ce,Ye.colorSpace,R.isXRRenderTarget===!0),it=Ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,mt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),j(n.TEXTURE_CUBE_MAP,E,Ue);for(let we=0;we<6;we++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)ye(q.__webglFramebuffer[we][Ce],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ce);else ye(q.__webglFramebuffer[we],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E,Ue)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const we=R.texture;for(let Ce=0,Ye=we.length;Ce<Ye;Ce++){const nt=we[Ce],ce=r.get(nt);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),j(n.TEXTURE_2D,nt,Ue),ye(q.__webglFramebuffer,R,nt,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),S(nt,Ue)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?we=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,fe.__webglTexture),j(we,E,Ue),o&&E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)ye(q.__webglFramebuffer[Ce],R,E,n.COLOR_ATTACHMENT0,we,Ce);else ye(q.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,we,0);S(E,Ue)&&y(we),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Tt(R){const E=m(R)||o,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,ue=q.length;fe<ue;fe++){const pe=q[fe];if(S(pe,E)){const Ue=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=r.get(pe).__webglTexture;t.bindTexture(Ue,we),y(Ue),t.unbindTexture()}}}function Ie(R){if(o&&R.samples>0&&Pe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,fe=R.height;let ue=n.COLOR_BUFFER_BIT;const pe=[],Ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=r.get(R),Ce=R.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ye=0;Ye<E.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){pe.push(n.COLOR_ATTACHMENT0+Ye),R.depthBuffer&&pe.push(Ue);const nt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(nt===!1&&(R.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ue])),Ce){const ce=r.get(E[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,q,fe,0,0,q,fe,ue,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ye=0;Ye<E.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]);const nt=r.get(E[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Ge(R){return Math.min(i.maxSamples,R.samples)}function Pe(R){const E=r.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(R){const E=s.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Ke(R,E){const q=R.colorSpace,fe=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Wo||q!==vr&&q!==Pn&&(St.getTransfer(q)===It?o===!1?e.has("EXT_sRGB")===!0&&fe===wn?(R.format=Wo,R.minFilter=Ln,R.generateMipmaps=!1):E=lu.sRGBToLinear(E):(fe!==wn||ue!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}this.allocateTextureUnit=U,this.resetTextureUnits=ie,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Be,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Pe}function Z2(n,e,t){const r=t.isWebGL2;function i(a,s=Pn){let o;const l=St.getTransfer(s);if(a===Br)return n.UNSIGNED_BYTE;if(a===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(a===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Dd)return n.BYTE;if(a===Ld)return n.SHORT;if(a===s0)return n.UNSIGNED_SHORT;if(a===Jc)return n.INT;if(a===Fr)return n.UNSIGNED_INT;if(a===Kn)return n.FLOAT;if(a===va)return r?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Pd)return n.ALPHA;if(a===wn)return n.RGBA;if(a===Nd)return n.LUMINANCE;if(a===Id)return n.LUMINANCE_ALPHA;if(a===oi)return n.DEPTH_COMPONENT;if(a===Xi)return n.DEPTH_STENCIL;if(a===Wo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Ud)return n.RED;if(a===tu)return n.RED_INTEGER;if(a===Fd)return n.RG;if(a===nu)return n.RG_INTEGER;if(a===ru)return n.RGBA_INTEGER;if(a===Vs||a===Ws||a===qs||a===Xs)if(l===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ws)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Y0||a===K0||a===j0||a===Z0)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Y0)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===K0)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===j0)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Z0)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===iu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===J0||a===Q0)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===J0)return l===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Q0)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===el||a===tl||a===nl||a===rl||a===il||a===al||a===sl||a===ol||a===ll||a===cl||a===ul||a===hl||a===dl||a===fl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===el)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===tl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===nl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===il)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===al)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ol)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ll)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ul)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fl)return l===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$s||a===ml||a===pl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===$s)return l===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===kd||a===gl||a===vl||a===_l)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===$s)return o.COMPRESSED_RED_RGTC1_EXT;if(a===gl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===si?r?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:i}}class J2 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q2={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,r),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),_=.02,x=.005;c.inputState.pinching&&p>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class e4 extends Ji{constructor(e,t){super();const r=this;let i=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,_=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const S=[],y=[],A=new yt;let I=null;const P=new Hn;P.layers.enable(1),P.viewport=new Vt;const D=new Hn;D.layers.enable(2),D.viewport=new Vt;const K=[P,D],w=new J2;w.layers.enable(1),w.layers.enable(2);let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=S[j];return re===void 0&&(re=new xo,S[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=S[j];return re===void 0&&(re=new xo,S[j]=re),re.getGripSpace()},this.getHand=function(j){let re=S[j];return re===void 0&&(re=new xo,S[j]=re),re.getHandSpace()};function W(j){const re=y.indexOf(j.inputSource);if(re===-1)return;const ge=S[re];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||s),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function ie(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",U);for(let j=0;j<S.length;j++){const re=y[j];re!==null&&(y[j]=null,S[j].disconnect(re))}C=null,B=null,e.setRenderTarget(m),_=null,p=null,d=null,i=null,f=null,se.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),f=new Gr(_.framebufferWidth,_.framebufferHeight,{format:wn,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,ge=null,Le=null;g.depth&&(Le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?Xi:oi,ge=g.stencil?si:Fr);const ye={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};d=new XRWebGLBinding(i,t),p=d.createProjectionLayer(ye),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Gr(p.textureWidth,p.textureHeight,{format:wn,type:Br,depthTexture:new yu(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Oe=e.properties.get(f);Oe.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),se.setContext(i),se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(j){for(let re=0;re<j.removed.length;re++){const ge=j.removed[re],Le=y.indexOf(ge);Le>=0&&(y[Le]=null,S[Le].disconnect(ge))}for(let re=0;re<j.added.length;re++){const ge=j.added[re];let Le=y.indexOf(ge);if(Le===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=y.length){y.push(ge),Le=Oe;break}else if(y[Oe]===null){y[Oe]=ge,Le=Oe;break}if(Le===-1)break}const ye=S[Le];ye&&ye.connect(ge)}}const O=new Z,Y=new Z;function te(j,re,ge){O.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const Le=O.distanceTo(Y),ye=re.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,We=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Be=(ye[9]+1)/ye[5],V=(ye[9]-1)/ye[5],Tt=(ye[8]-1)/ye[0],Ie=(Oe[8]+1)/Oe[0],Ge=We*Tt,Pe=We*Ie,gt=Le/(-Tt+Ie),Ke=gt*-Tt;re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=We+gt,E=Ae+gt,q=Ge-Ke,fe=Pe+(Le-Ke),ue=Be*Ae/E*R,pe=V*Ae/E*R;j.projectionMatrix.makePerspective(q,fe,ue,pe,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Q(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;w.near=D.near=P.near=j.near,w.far=D.far=P.far=j.far,(C!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,B=w.far);const re=j.parent,ge=w.cameras;Q(w,re);for(let Le=0;Le<ge.length;Le++)Q(ge[Le],re);ge.length===2?te(w,P,D):w.projectionMatrix.copy(P.projectionMatrix),ne(j,w,re)};function ne(j,re,ge){ge===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&_===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)};let ee=null;function oe(j,re){if(u=re.getViewerPose(c||s),x=re,u!==null){const ge=u.views;_!==null&&(e.setRenderTargetFramebuffer(f,_.framebuffer),e.setRenderTarget(f));let Le=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,Le=!0);for(let ye=0;ye<ge.length;ye++){const Oe=ge[ye];let We=null;if(_!==null)We=_.getViewport(Oe);else{const Be=d.getViewSubImage(p,Oe);We=Be.viewport,ye===0&&(e.setRenderTargetTextures(f,Be.colorTexture,p.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(f))}let Ae=K[ye];Ae===void 0&&(Ae=new Hn,Ae.layers.enable(ye),Ae.viewport=new Vt,K[ye]=Ae),Ae.matrix.fromArray(Oe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Oe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(We.x,We.y,We.width,We.height),ye===0&&(w.matrix.copy(Ae.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Le===!0&&w.cameras.push(Ae)}}for(let ge=0;ge<S.length;ge++){const Le=y[ge],ye=S[ge];Le!==null&&ye!==void 0&&ye.update(Le,re,c||s)}ee&&ee(j,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),x=null}const se=new xu;se.setAnimationLoop(oe),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}function t4(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,gu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,y,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),p(m,f),f.isMeshPhysicalMaterial&&_(m,f,A)):f.isMeshMatcapMaterial?(a(m,f),x(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),g(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function _(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function n4(n,e,t,r){let i={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const A=y.program;r.uniformBlockBinding(S,A)}function c(S,y){let A=i[S.id];A===void 0&&(x(S),A=u(S),i[S.id]=A,S.addEventListener("dispose",m));const I=y.program;r.updateUBOMapping(S,I);const P=e.render.frame;a[S.id]!==P&&(p(S),a[S.id]=P)}function u(S){const y=d();S.__bindingPointIndex=y;const A=n.createBuffer(),I=S.__size,P=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,A),A}function d(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const y=i[S.id],A=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,D=A.length;P<D;P++){const K=Array.isArray(A[P])?A[P]:[A[P]];for(let w=0,C=K.length;w<C;w++){const B=K[w];if(_(B,P,w,I)===!0){const W=B.__offset,ie=Array.isArray(B.value)?B.value:[B.value];let U=0;for(let O=0;O<ie.length;O++){const Y=ie[O],te=g(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,W+U,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,U),U+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,y,A,I){const P=S.value,D=y+"_"+A;if(I[D]===void 0)return typeof P=="number"||typeof P=="boolean"?I[D]=P:I[D]=P.clone(),!0;{const K=I[D];if(typeof P=="number"||typeof P=="boolean"){if(K!==P)return I[D]=P,!0}else if(K.equals(P)===!1)return K.copy(P),!0}return!1}function x(S){const y=S.uniforms;let A=0;const I=16;for(let D=0,K=y.length;D<K;D++){const w=Array.isArray(y[D])?y[D]:[y[D]];for(let C=0,B=w.length;C<B;C++){const W=w[C],ie=Array.isArray(W.value)?W.value:[W.value];for(let U=0,O=ie.length;U<O;U++){const Y=ie[U],te=g(Y),Q=A%I;Q!==0&&I-Q<te.boundary&&(A+=I-Q),W.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=te.storage}}}const P=A%I;return P>0&&(A+=I-P),S.__size=A,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const A=s.indexOf(y.__bindingPointIndex);s.splice(A,1),n.deleteBuffer(i[y.id]),delete i[y.id],delete a[y.id]}function f(){for(const S in i)n.deleteBuffer(i[S]);s=[],i={},a={}}return{bind:l,update:c,dispose:f}}class Au{constructor(e={}){const{canvas:t=jd(),context:r=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;r!==null?p=r.getContextAttributes().alpha:p=s;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=zr,this.toneMappingExposure=1;const y=this;let A=!1,I=0,P=0,D=null,K=-1,w=null;const C=new Vt,B=new Vt;let W=null;const ie=new Mt(0);let U=0,O=t.width,Y=t.height,te=1,Q=null,ne=null;const ee=new Vt(0,0,O,Y),oe=new Vt(0,0,O,Y);let se=!1;const j=new _u;let re=!1,ge=!1,Le=null;const ye=new rn,Oe=new yt,We=new Z,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return D===null?te:1}let V=r;function Tt(T,z){for(let X=0;X<T.length;X++){const J=T[X],$=t.getContext(J,z);if($!==null)return $}return null}try{const T={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${a0}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&z.shift(),V=Tt(z,T),V===null)throw Tt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ie,Ge,Pe,gt,Ke,R,E,q,fe,ue,pe,Ue,we,Ce,Ye,nt,ce,mt,it,$e,Ve,Ne,Ze,dt;function wt(){Ie=new d1(V),Ge=new s1(V,Ie,e),Ie.init(Ge),Ne=new Z2(V,Ie,Ge),Pe=new K2(V,Ie,Ge),gt=new p1(V),Ke=new U2,R=new j2(V,Ie,Pe,Ke,Ge,Ne,gt),E=new l1(y),q=new h1(y),fe=new Mf(V,Ge),Ze=new i1(V,Ie,fe,Ge),ue=new f1(V,fe,gt,Ze),pe=new x1(V,ue,fe,gt),it=new _1(V,Ge,R),nt=new o1(Ke),Ue=new I2(y,E,q,Ie,Ge,Ze,nt),we=new t4(y,Ke),Ce=new k2,Ye=new V2(Ie,Ge),mt=new r1(y,E,q,Pe,pe,p,l),ce=new Y2(y,pe,Ge),dt=new n4(V,gt,Ge,Pe),$e=new a1(V,Ie,gt,Ge),Ve=new m1(V,Ie,gt,Ge),gt.programs=Ue.programs,y.capabilities=Ge,y.extensions=Ie,y.properties=Ke,y.renderLists=Ce,y.shadowMap=ce,y.state=Pe,y.info=gt}wt();const at=new e4(y,V);this.xr=at,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(O,Y,!1))},this.getSize=function(T){return T.set(O,Y)},this.setSize=function(T,z,X=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,Y=z,t.width=Math.floor(T*te),t.height=Math.floor(z*te),X===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(O*te,Y*te).floor()},this.setDrawingBufferSize=function(T,z,X){O=T,Y=z,te=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,z,X,J){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,z,X,J),Pe.viewport(C.copy(ee).multiplyScalar(te).floor())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,z,X,J){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,z,X,J),Pe.scissor(B.copy(oe).multiplyScalar(te).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){Pe.setScissorTest(se=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let J=0;if(T){let $=!1;if(D!==null){const Re=D.texture.format;$=Re===ru||Re===nu||Re===tu}if($){const Re=D.texture.type,Fe=Re===Br||Re===Fr||Re===s0||Re===si||Re===Qc||Re===eu,He=mt.getClearColor(),Je=mt.getClearAlpha(),rt=He.r,tt=He.g,et=He.b;Fe?(_[0]=rt,_[1]=tt,_[2]=et,_[3]=Je,V.clearBufferuiv(V.COLOR,0,_)):(x[0]=rt,x[1]=tt,x[2]=et,x[3]=Je,V.clearBufferiv(V.COLOR,0,x))}else J|=V.COLOR_BUFFER_BIT}z&&(J|=V.DEPTH_BUFFER_BIT),X&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ce.dispose(),Ye.dispose(),Ke.dispose(),E.dispose(),q.dispose(),pe.dispose(),Ze.dispose(),dt.dispose(),Ue.dispose(),at.dispose(),at.removeEventListener("sessionstart",qt),at.removeEventListener("sessionend",ut),Le&&(Le.dispose(),Le=null),Qt.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=gt.autoReset,z=ce.enabled,X=ce.autoUpdate,J=ce.needsUpdate,$=ce.type;wt(),gt.autoReset=T,ce.enabled=z,ce.autoUpdate=X,ce.needsUpdate=J,ce.type=$}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Se(T){const z=T.target;z.removeEventListener("dispose",Se),je(z)}function je(T){ze(T),Ke.remove(T)}function ze(T){const z=Ke.get(T).programs;z!==void 0&&(z.forEach(function(X){Ue.releaseProgram(X)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,J,$,Re){z===null&&(z=Ae);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,He=Ra(T,z,X,J,$);Pe.setMaterial(J,Fe);let Je=X.index,rt=1;if(J.wireframe===!0){if(Je=ue.getWireframeAttribute(X),Je===void 0)return;rt=2}const tt=X.drawRange,et=X.attributes.position;let Ut=tt.start*rt,en=(tt.start+tt.count)*rt;Re!==null&&(Ut=Math.max(Ut,Re.start*rt),en=Math.min(en,(Re.start+Re.count)*rt)),Je!==null?(Ut=Math.max(Ut,0),en=Math.min(en,Je.count)):et!=null&&(Ut=Math.max(Ut,0),en=Math.min(en,et.count));const At=en-Ut;if(At<0||At===1/0)return;Ze.setup($,J,He,X,Je);let fn,ve=$e;if(Je!==null&&(fn=fe.get(Je),ve=Ve,ve.setIndex(fn)),$.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*Be()),ve.setMode(V.LINES)):ve.setMode(V.TRIANGLES);else if($.isLine){let be=J.linewidth;be===void 0&&(be=1),Pe.setLineWidth(be*Be()),$.isLineSegments?ve.setMode(V.LINES):$.isLineLoop?ve.setMode(V.LINE_LOOP):ve.setMode(V.LINE_STRIP)}else $.isPoints?ve.setMode(V.POINTS):$.isSprite&&ve.setMode(V.TRIANGLES);if($.isBatchedMesh)ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ve.renderInstances(Ut,At,$.count);else if(X.isInstancedBufferGeometry){const be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,fi=Math.min(X.instanceCount,be);ve.renderInstances(Ut,At,fi)}else ve.render(Ut,At)};function xt(T,z,X){T.transparent===!0&&T.side===fr&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,$r(T,z,X),T.side=Hr,T.needsUpdate=!0,$r(T,z,X),T.side=fr):$r(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),m=Ye.get(X),m.init(),S.push(m),X.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),T!==X&&T.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(y._useLegacyLights);const J=new Set;return T.traverse(function($){const Re=$.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){const He=Re[Fe];xt(He,X,$),J.add(He)}else xt(Re,X,$),J.add(Re)}),S.pop(),m=null,J},this.compileAsync=function(T,z,X=null){const J=this.compile(T,z,X);return new Promise($=>{function Re(){if(J.forEach(function(Fe){Ke.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){$(T);return}setTimeout(Re,10)}Ie.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let pt=null;function Ht(T){pt&&pt(T)}function qt(){Qt.stop()}function ut(){Qt.start()}const Qt=new xu;Qt.setAnimationLoop(Ht),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){pt=T,at.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},at.addEventListener("sessionstart",qt),at.addEventListener("sessionend",ut),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,D),m=Ye.get(T,S.length),m.init(),S.push(m),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(ye),ge=this.localClippingEnabled,re=nt.init(this.clippingPlanes,ge),g=Ce.get(T,f.length),g.init(),f.push(g),on(T,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Q,ne),this.info.render.frame++,re===!0&&nt.beginShadows();const X=m.state.shadowsArray;if(ce.render(X,T,z),re===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(g,T),m.setupLights(y._useLegacyLights),z.isArrayCamera){const J=z.cameras;for(let $=0,Re=J.length;$<Re;$++){const Fe=J[$];na(g,T,Fe,Fe.viewport)}}else na(g,T,z);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,z),Ze.resetDefaultState(),K=-1,w=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function on(T,z,X,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){J&&We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const Fe=pe.update(T),He=T.material;He.visible&&g.push(T,Fe,He,X,We.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const Fe=pe.update(T),He=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),We.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),We.copy(Fe.boundingSphere.center)),We.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(He)){const Je=Fe.groups;for(let rt=0,tt=Je.length;rt<tt;rt++){const et=Je[rt],Ut=He[et.materialIndex];Ut&&Ut.visible&&g.push(T,Fe,Ut,X,We.z,et)}}else He.visible&&g.push(T,Fe,He,X,We.z,null)}}const Re=T.children;for(let Fe=0,He=Re.length;Fe<He;Fe++)on(Re[Fe],z,X,J)}function na(T,z,X,J){const $=T.opaque,Re=T.transmissive,Fe=T.transparent;m.setupLightsView(X),re===!0&&nt.setGlobalState(y.clippingPlanes,X),Re.length>0&&Mr($,Re,z,X),J&&Pe.viewport(C.copy(J)),$.length>0&&Gn($,z,X),Re.length>0&&Gn(Re,z,X),Fe.length>0&&Gn(Fe,z,X),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Mr(T,z,X,J){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Re=Ge.isWebGL2;Le===null&&(Le=new Gr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?va:Br,minFilter:ga,samples:Re?4:0})),y.getDrawingBufferSize(Oe),Re?Le.setSize(Oe.x,Oe.y):Le.setSize(Xo(Oe.x),Xo(Oe.y));const Fe=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(ie),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const He=y.toneMapping;y.toneMapping=zr,Gn(T,X,J),R.updateMultisampleRenderTarget(Le),R.updateRenderTargetMipmap(Le);let Je=!1;for(let rt=0,tt=z.length;rt<tt;rt++){const et=z[rt],Ut=et.object,en=et.geometry,At=et.material,fn=et.group;if(At.side===fr&&Ut.layers.test(J.layers)){const ve=At.side;At.side=_n,At.needsUpdate=!0,Vn(Ut,X,J,en,At,fn),At.side=ve,At.needsUpdate=!0,Je=!0}}Je===!0&&(R.updateMultisampleRenderTarget(Le),R.updateRenderTargetMipmap(Le)),y.setRenderTarget(Fe),y.setClearColor(ie,U),y.toneMapping=He}function Gn(T,z,X){const J=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Re=T.length;$<Re;$++){const Fe=T[$],He=Fe.object,Je=Fe.geometry,rt=J===null?Fe.material:J,tt=Fe.group;He.layers.test(X.layers)&&Vn(He,z,X,Je,rt,tt)}}function Vn(T,z,X,J,$,Re){T.onBeforeRender(y,z,X,J,$,Re),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(y,z,X,J,T,Re),$.transparent===!0&&$.side===fr&&$.forceSinglePass===!1?($.side=_n,$.needsUpdate=!0,y.renderBufferDirect(X,z,J,$,T,Re),$.side=Hr,$.needsUpdate=!0,y.renderBufferDirect(X,z,J,$,T,Re),$.side=fr):y.renderBufferDirect(X,z,J,$,T,Re),T.onAfterRender(y,z,X,J,$,Re)}function $r(T,z,X){z.isScene!==!0&&(z=Ae);const J=Ke.get(T),$=m.state.lights,Re=m.state.shadowsArray,Fe=$.state.version,He=Ue.getParameters(T,$.state,Re,z,X),Je=Ue.getProgramCacheKey(He);let rt=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||J.environment),rt===void 0&&(T.addEventListener("dispose",Se),rt=new Map,J.programs=rt);let tt=rt.get(Je);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Fe)return Wn(T,He),tt}else He.uniforms=Ue.getUniforms(T),T.onBuild(X,He,y),T.onBeforeCompile(He,y),tt=Ue.acquireProgram(He,Je),rt.set(Je,tt),J.uniforms=He.uniforms;const et=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(et.clippingPlanes=nt.uniform),Wn(T,He),J.needsLights=rr(T),J.lightsStateVersion=Fe,J.needsLights&&(et.ambientLightColor.value=$.state.ambient,et.lightProbe.value=$.state.probe,et.directionalLights.value=$.state.directional,et.directionalLightShadows.value=$.state.directionalShadow,et.spotLights.value=$.state.spot,et.spotLightShadows.value=$.state.spotShadow,et.rectAreaLights.value=$.state.rectArea,et.ltc_1.value=$.state.rectAreaLTC1,et.ltc_2.value=$.state.rectAreaLTC2,et.pointLights.value=$.state.point,et.pointLightShadows.value=$.state.pointShadow,et.hemisphereLights.value=$.state.hemi,et.directionalShadowMap.value=$.state.directionalShadowMap,et.directionalShadowMatrix.value=$.state.directionalShadowMatrix,et.spotShadowMap.value=$.state.spotShadowMap,et.spotLightMatrix.value=$.state.spotLightMatrix,et.spotLightMap.value=$.state.spotLightMap,et.pointShadowMap.value=$.state.pointShadowMap,et.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function Yr(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ds.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Wn(T,z){const X=Ke.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Ra(T,z,X,J,$){z.isScene!==!0&&(z=Ae),R.resetTextureUnits();const Re=z.fog,Fe=J.isMeshStandardMaterial?z.environment:null,He=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:vr,Je=(J.isMeshStandardMaterial?q:E).get(J.envMap||Fe),rt=J.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),et=!!X.morphAttributes.position,Ut=!!X.morphAttributes.normal,en=!!X.morphAttributes.color;let At=zr;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=y.toneMapping);const fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=fn!==void 0?fn.length:0,be=Ke.get(J),fi=m.state.lights;if(re===!0&&(ge===!0||T!==w)){const ln=T===w&&J.id===K;nt.setState(J,T,ln)}let Dt=!1;J.version===be.__version?(be.needsLights&&be.lightsStateVersion!==fi.state.version||be.outputColorSpace!==He||$.isBatchedMesh&&be.batching===!1||!$.isBatchedMesh&&be.batching===!0||$.isInstancedMesh&&be.instancing===!1||!$.isInstancedMesh&&be.instancing===!0||$.isSkinnedMesh&&be.skinning===!1||!$.isSkinnedMesh&&be.skinning===!0||$.isInstancedMesh&&be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&be.instancingColor===!1&&$.instanceColor!==null||be.envMap!==Je||J.fog===!0&&be.fog!==Re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==nt.numPlanes||be.numIntersection!==nt.numIntersection)||be.vertexAlphas!==rt||be.vertexTangents!==tt||be.morphTargets!==et||be.morphNormals!==Ut||be.morphColors!==en||be.toneMapping!==At||Ge.isWebGL2===!0&&be.morphTargetsCount!==ve)&&(Dt=!0):(Dt=!0,be.__version=J.version);let qn=be.currentProgram;Dt===!0&&(qn=$r(J,z,$));let ra=!1,wr=!1,mi=!1;const Kt=qn.getUniforms(),Xn=be.uniforms;if(Pe.useProgram(qn.program)&&(ra=!0,wr=!0,mi=!0),J.id!==K&&(K=J.id,wr=!0),ra||w!==T){Kt.setValue(V,"projectionMatrix",T.projectionMatrix),Kt.setValue(V,"viewMatrix",T.matrixWorldInverse);const ln=Kt.map.cameraPosition;ln!==void 0&&ln.setValue(V,We.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&Kt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Kt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,wr=!0,mi=!0)}if($.isSkinnedMesh){Kt.setOptional(V,$,"bindMatrix"),Kt.setOptional(V,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(Ge.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Kt.setValue(V,"boneTexture",ln.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Kt.setOptional(V,$,"batchingTexture"),Kt.setValue(V,"batchingTexture",$._matricesTexture,R));const pi=X.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&Ge.isWebGL2===!0)&&it.update($,X,qn),(wr||be.receiveShadow!==$.receiveShadow)&&(be.receiveShadow=$.receiveShadow,Kt.setValue(V,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Xn.envMap.value=Je,Xn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),wr&&(Kt.setValue(V,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&Kr(Xn,mi),Re&&J.fog===!0&&we.refreshFogUniforms(Xn,Re),we.refreshMaterialUniforms(Xn,J,te,Y,Le),ds.upload(V,Yr(be),Xn,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ds.upload(V,Yr(be),Xn,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Kt.setValue(V,"center",$.center),Kt.setValue(V,"modelViewMatrix",$.modelViewMatrix),Kt.setValue(V,"normalMatrix",$.normalMatrix),Kt.setValue(V,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let gi=0,Ca=ln.length;gi<Ca;gi++)if(Ge.isWebGL2){const ia=ln[gi];dt.update(ia,qn),dt.bind(ia,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Kr(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function rr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,X){Ke.get(T.texture).__webglTexture=z,Ke.get(T.depthTexture).__webglTexture=X;const J=Ke.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=X===void 0,J.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const X=Ke.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){D=T,I=z,P=X;let J=!0,$=null,Re=!1,Fe=!1;if(T){const Je=Ke.get(T);Je.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):Je.__webglFramebuffer===void 0?R.setupRenderTarget(T):Je.__hasExternalTextures&&R.rebindTextures(T,Ke.get(T.texture).__webglTexture,Ke.get(T.depthTexture).__webglTexture);const rt=T.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Fe=!0);const tt=Ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[z])?$=tt[z][X]:$=tt[z],Re=!0):Ge.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?$=Ke.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?$=tt[X]:$=tt,C.copy(T.viewport),B.copy(T.scissor),W=T.scissorTest}else C.copy(ee).multiplyScalar(te).floor(),B.copy(oe).multiplyScalar(te).floor(),W=se;if(Pe.bindFramebuffer(V.FRAMEBUFFER,$)&&Ge.drawBuffers&&J&&Pe.drawBuffers(T,$),Pe.viewport(C),Pe.scissor(B),Pe.setScissorTest(W),Re){const Je=Ke.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Je.__webglTexture,X)}else if(Fe){const Je=Ke.get(T.texture),rt=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Je.__webglTexture,X||0,rt)}K=-1},this.readRenderTargetPixels=function(T,z,X,J,$,Re,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Pe.bindFramebuffer(V.FRAMEBUFFER,He);try{const Je=T.texture,rt=Je.format,tt=Je.type;if(rt!==wn&&Ne.convert(rt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=tt===va&&(Ie.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(tt!==Br&&Ne.convert(tt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Kn&&(Ge.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&X>=0&&X<=T.height-$&&V.readPixels(z,X,J,$,Ne.convert(rt),Ne.convert(tt),Re)}finally{const Je=D!==null?Ke.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(T,z,X=0){const J=Math.pow(2,-X),$=Math.floor(z.image.width*J),Re=Math.floor(z.image.height*J);R.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,T.x,T.y,$,Re),Pe.unbindTexture()},this.copyTextureToTexture=function(T,z,X,J=0){const $=z.image.width,Re=z.image.height,Fe=Ne.convert(X.format),He=Ne.convert(X.type);R.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,T.x,T.y,$,Re,Fe,He,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Fe,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,T.x,T.y,Fe,He,z.image),J===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,J,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,He=T.max.z-T.min.z+1,Je=Ne.convert(J.format),rt=Ne.convert(J.type);let tt;if(J.isData3DTexture)R.setTexture3D(J,0),tt=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),tt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);const et=V.getParameter(V.UNPACK_ROW_LENGTH),Ut=V.getParameter(V.UNPACK_IMAGE_HEIGHT),en=V.getParameter(V.UNPACK_SKIP_PIXELS),At=V.getParameter(V.UNPACK_SKIP_ROWS),fn=V.getParameter(V.UNPACK_SKIP_IMAGES),ve=X.isCompressedTexture?X.mipmaps[$]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ve.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ve.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,T.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,T.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(tt,$,z.x,z.y,z.z,Re,Fe,He,Je,rt,ve.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(tt,$,z.x,z.y,z.z,Re,Fe,He,Je,ve.data)):V.texSubImage3D(tt,$,z.x,z.y,z.z,Re,Fe,He,Je,rt,ve),V.pixelStorei(V.UNPACK_ROW_LENGTH,et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut),V.pixelStorei(V.UNPACK_SKIP_PIXELS,en),V.pixelStorei(V.UNPACK_SKIP_ROWS,At),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fn),$===0&&J.generateMipmaps&&V.generateMipmap(tt),Pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){I=0,P=0,D=null,Pe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===o0?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Cs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nn?li:au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===li?nn:vr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r4 extends Au{}r4.prototype.isWebGL1Renderer=!0;class Ru extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class i4 extends xn{constructor(e=null,t=1,r=1,i,a,s,o,l,c=Gt,u=Gt,d,p){super(null,s,o,l,c,u,i,a,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:a0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=a0);class a4{constructor(e,t,r){this.variables=[],this.currentTextureIndex=0;let i=Kn;const a=new Ru,s=new c0;s.position.z=1;const o={passThruTexture:{value:null}},l=d(_(),o),c=new jn(new wa(2,2),l);a.add(c),this.setDataType=function(x){return i=x,this},this.addVariable=function(x,g,m){const f=this.createShaderMaterial(g),S={name:x,initialValueTexture:m,material:f,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Gt,magFilter:Gt};return this.variables.push(S),S},this.setVariableDependencies=function(x,g){x.dependencies=g},this.init=function(){if(r.capabilities.isWebGL2===!1&&r.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(r.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const g=this.variables[x];g.renderTargets[0]=this.createRenderTarget(e,t,g.wrapS,g.wrapT,g.minFilter,g.magFilter),g.renderTargets[1]=this.createRenderTarget(e,t,g.wrapS,g.wrapT,g.minFilter,g.magFilter),this.renderTexture(g.initialValueTexture,g.renderTargets[0]),this.renderTexture(g.initialValueTexture,g.renderTargets[1]);const m=g.material,f=m.uniforms;if(g.dependencies!==null)for(let S=0;S<g.dependencies.length;S++){const y=g.dependencies[S];if(y.name!==g.name){let A=!1;for(let I=0;I<this.variables.length;I++)if(y.name===this.variables[I].name){A=!0;break}if(!A)return"Variable dependency not found. Variable="+g.name+", dependency="+y.name}f[y.name]={value:null},m.fragmentShader=`
uniform sampler2D `+y.name+`;
`+m.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,g=this.currentTextureIndex===0?1:0;for(let m=0,f=this.variables.length;m<f;m++){const S=this.variables[m];if(S.dependencies!==null){const y=S.material.uniforms;for(let A=0,I=S.dependencies.length;A<I;A++){const P=S.dependencies[A];y[P.name].value=P.renderTargets[x].texture}}this.doRenderTarget(S.material,S.renderTargets[g])}this.currentTextureIndex=g},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const x=this.variables;for(let g=0;g<x.length;g++){const m=x[g];m.initialValueTexture&&m.initialValueTexture.dispose();const f=m.renderTargets;for(let S=0;S<f.length;S++)f[S].dispose()}};function u(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=u;function d(x,g){g=g||{};const m=new _r({name:"GPUComputationShader",uniforms:g,vertexShader:p(),fragmentShader:x});return u(m),m}this.createShaderMaterial=d,this.createRenderTarget=function(x,g,m,f,S,y){return x=x||e,g=g||t,m=m||Mn,f=f||Mn,S=S||Gt,y=y||Gt,new Gr(x,g,{wrapS:m,wrapT:f,minFilter:S,magFilter:y,format:wn,type:i,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*t*4),g=new i4(x,e,t,wn,Kn);return g.needsUpdate=!0,g},this.renderTexture=function(x,g){o.passThruTexture.value=x,this.doRenderTarget(l,g),o.passThruTexture.value=null},this.doRenderTarget=function(x,g){const m=r.getRenderTarget(),f=r.xr.enabled,S=r.shadowMap.autoUpdate;r.xr.enabled=!1,r.shadowMap.autoUpdate=!1,c.material=x,r.setRenderTarget(g),r.render(a,s),c.material=l,r.xr.enabled=f,r.shadowMap.autoUpdate=S,r.setRenderTarget(m)};function p(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function _(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}function s4(n,e,t){return Math.max(e,Math.min(t,n))}function o4(n,e,t,r){const i=new Float32Array(n*n*4);for(let a=0;a<n*n;a++){const s=a%n/e,o=Math.floor(a/n)/e,l=r.perlin2(s,o),c=s4(.5+t*l,0,1);i[a*4+0]=c,i[a*4+1]=0,i[a*4+2]=0,i[a*4+3]=0}return i}const Yo={fe3Scale:{default:20,min:10,max:40,step:.5,label:"Fe3 Perlin Scale"},fe3Variation:{default:.5,min:.2,max:1,step:.01,label:"Fe3 Perlin Variation"},initialActiveSeeds:{default:5,min:1,max:20,step:1,label:"Initial Active Seeds"},seedPixelRadius:{default:5,min:1,max:20,step:1,label:"Seed Radius (px)"},r_r:{default:.3,min:0,max:1,step:.01,label:"Reproduction Rate"},r_d:{default:.05,min:0,max:1,step:.01,label:"Death Rate"},r_c:{default:.8,min:0,max:2,step:.01,label:"Fe3 Consumption"},biasStrength:{default:.5,min:0,max:1,step:.05,label:"Gradient Bias"},alpha_ad:{default:.5,min:0,max:1,step:.01,label:"Active->Dormant Rate"},alpha_da:{default:.5,min:0,max:1,step:.01,label:"Dormant->Active Rate"},timeStep:{default:.5,min:0,max:2,step:.1,label:"Time Step"},bacterialDiffusion:{default:.3,min:0,max:1,step:.05,label:"Bacterial Diffusion"},fe2Diffusion:{default:.5,min:0,max:1,step:.05,label:"Fe2 Diffusion"}},Cu=Object.fromEntries(Object.entries(Yo).map(([n,e])=>[n,e.default]));function l4(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Du={};(function(n){(function(e){var t=n;function r(x,g,m){this.x=x,this.y=g,this.z=m}r.prototype.dot2=function(x,g){return this.x*x+this.y*g},r.prototype.dot3=function(x,g,m){return this.x*x+this.y*g+this.z*m};var i=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],a=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],s=new Array(512),o=new Array(512);t.seed=function(x){x>0&&x<1&&(x*=65536),x=Math.floor(x),x<256&&(x|=x<<8);for(var g=0;g<256;g++){var m;g&1?m=a[g]^x&255:m=a[g]^x>>8&255,s[g]=s[g+256]=m,o[g]=o[g+256]=i[m%12]}},t.seed(0);var l=.5*(Math.sqrt(3)-1),c=(3-Math.sqrt(3))/6,u=1/3,d=1/6;t.simplex2=function(x,g){var m,f,S,y=(x+g)*l,A=Math.floor(x+y),I=Math.floor(g+y),P=(A+I)*c,D=x-A+P,K=g-I+P,w,C;D>K?(w=1,C=0):(w=0,C=1);var B=D-w+c,W=K-C+c,ie=D-1+2*c,U=K-1+2*c;A&=255,I&=255;var O=o[A+s[I]],Y=o[A+w+s[I+C]],te=o[A+1+s[I+1]],Q=.5-D*D-K*K;Q<0?m=0:(Q*=Q,m=Q*Q*O.dot2(D,K));var ne=.5-B*B-W*W;ne<0?f=0:(ne*=ne,f=ne*ne*Y.dot2(B,W));var ee=.5-ie*ie-U*U;return ee<0?S=0:(ee*=ee,S=ee*ee*te.dot2(ie,U)),70*(m+f+S)},t.simplex3=function(x,g,m){var f,S,y,A,I=(x+g+m)*u,P=Math.floor(x+I),D=Math.floor(g+I),K=Math.floor(m+I),w=(P+D+K)*d,C=x-P+w,B=g-D+w,W=m-K+w,ie,U,O,Y,te,Q;C>=B?B>=W?(ie=1,U=0,O=0,Y=1,te=1,Q=0):C>=W?(ie=1,U=0,O=0,Y=1,te=0,Q=1):(ie=0,U=0,O=1,Y=1,te=0,Q=1):B<W?(ie=0,U=0,O=1,Y=0,te=1,Q=1):C<W?(ie=0,U=1,O=0,Y=0,te=1,Q=1):(ie=0,U=1,O=0,Y=1,te=1,Q=0);var ne=C-ie+d,ee=B-U+d,oe=W-O+d,se=C-Y+2*d,j=B-te+2*d,re=W-Q+2*d,ge=C-1+3*d,Le=B-1+3*d,ye=W-1+3*d;P&=255,D&=255,K&=255;var Oe=o[P+s[D+s[K]]],We=o[P+ie+s[D+U+s[K+O]]],Ae=o[P+Y+s[D+te+s[K+Q]]],Be=o[P+1+s[D+1+s[K+1]]],V=.6-C*C-B*B-W*W;V<0?f=0:(V*=V,f=V*V*Oe.dot3(C,B,W));var Tt=.6-ne*ne-ee*ee-oe*oe;Tt<0?S=0:(Tt*=Tt,S=Tt*Tt*We.dot3(ne,ee,oe));var Ie=.6-se*se-j*j-re*re;Ie<0?y=0:(Ie*=Ie,y=Ie*Ie*Ae.dot3(se,j,re));var Ge=.6-ge*ge-Le*Le-ye*ye;return Ge<0?A=0:(Ge*=Ge,A=Ge*Ge*Be.dot3(ge,Le,ye)),32*(f+S+y+A)};function p(x){return x*x*x*(x*(x*6-15)+10)}function _(x,g,m){return(1-m)*x+m*g}t.perlin2=function(x,g){var m=Math.floor(x),f=Math.floor(g);x=x-m,g=g-f,m=m&255,f=f&255;var S=o[m+s[f]].dot2(x,g),y=o[m+s[f+1]].dot2(x,g-1),A=o[m+1+s[f]].dot2(x-1,g),I=o[m+1+s[f+1]].dot2(x-1,g-1),P=p(x);return _(_(S,A,P),_(y,I,P),p(g))},t.perlin3=function(x,g,m){var f=Math.floor(x),S=Math.floor(g),y=Math.floor(m);x=x-f,g=g-S,m=m-y,f=f&255,S=S&255,y=y&255;var A=o[f+s[S+s[y]]].dot3(x,g,m),I=o[f+s[S+s[y+1]]].dot3(x,g,m-1),P=o[f+s[S+1+s[y]]].dot3(x,g-1,m),D=o[f+s[S+1+s[y+1]]].dot3(x,g-1,m-1),K=o[f+1+s[S+s[y]]].dot3(x-1,g,m),w=o[f+1+s[S+s[y+1]]].dot3(x-1,g,m-1),C=o[f+1+s[S+1+s[y]]].dot3(x-1,g-1,m),B=o[f+1+s[S+1+s[y+1]]].dot3(x-1,g-1,m-1),W=p(x),ie=p(g),U=p(m);return _(_(_(A,K,W),_(I,w,W),U),_(_(P,C,W),_(D,B,W),U),ie)}})()})(Du);const Lu=l4(Du),c4=`/**
 * Combined compute shader - All simulation operations in one pass
 * Handles: Reaction (ODE integration) + Movement + Diffusion
 *
 * Following Jason Webb's single-shader pattern:
 * https://github.com/jasonwebb/reaction-diffusion-playground/blob/master/glsl/simulationFrag.glsl
 *
 * This matches how Gray-Scott combines reaction and diffusion in one shader
 */

// Note: 'state' and 'resolution' are auto-provided by GPUComputationRenderer

// Constants
const float K_F = 1.0;  // Fe3 reference scale (normalized)

// Mathematical rates
uniform float r_r;        // reproduction rate
uniform float r_d;        // death rate
uniform float r_c;        // Fe3 consumption rate
uniform float r_w;        // Fe2 production rate
uniform float alpha_ad;   // max Active->Dormant rate
uniform float alpha_da;   // max Dormant->Active rate

// Spatial parameters
uniform float timeStep;
uniform float bacterialDiffusion;  // Diffusion strength (0-1)
uniform float biasStrength;        // Anisotropic bias strength (0-1)
uniform float fe2Diffusion;        // Fe2 diffusion strength (0-1)
uniform float time;                // For random turbulence direction

// Random function from Book of Shaders
// https://thebookofshaders.com/11/
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Rate equation functions
float calculateR_ad(float Fe3) {
  return alpha_ad * (1.0 - Fe3 / K_F);
}

float calculateR_da(float Fe3) {
  return alpha_da * (Fe3 / K_F);
}

void main() {
  vec2 cellSize = 1.0 / resolution;
  vec2 uv = gl_FragCoord.xy * cellSize;

  // Read current state: R=Fe3, G=Fe2, B=Dormant, A=Active
  vec4 currentState = texture2D(state, uv);
  float Fe3 = currentState.r;
  float Fe2 = currentState.g;
  float D = currentState.b;
  float A = currentState.a;

  // DEBUG: Passthrough mode to test if shader reads input correctly
  // Uncomment to see if shader can read state texture:
  // gl_FragColor = currentState; return;

  // ===================
  // STEP 1: REACTION (ODE Integration)
  // ===================

  float r_ad_val = calculateR_ad(Fe3);
  float r_da_val = calculateR_da(Fe3);

  // dFe3/dt = -r_c * A * Fe3
  float dFe3 = -r_c * A * Fe3;
  float newFe3 = Fe3 + dFe3 * timeStep;

  // dFe2/dt = +r_w * A * Fe3
  float dFe2 = r_w * A * Fe3;
  float newFe2 = Fe2 + dFe2 * timeStep;

  // dA/dt = (r_r - r_d - r_ad) * A + r_da * D
  float dA = (r_r - r_d - r_ad_val) * A + r_da_val * D;
  float newA = A + dA * timeStep;

  // dD/dt = r_ad * A - (r_da + r_d) * D
  float dD = r_ad_val * A - (r_da_val + r_d) * D;
  float newD = D + dD * timeStep;

  // ===================
  // STEP 2: BACTERIAL MOVEMENT
  // Models individual random walks as population-level diffusion + turbulence
  // ===================

  // Calculate Fe3 gradient for Active bacteria bias
  float fe3_n = texture2D(state, uv + vec2(0.0, cellSize.y)).r;
  float fe3_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).r;
  float fe3_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).r;
  float fe3_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).r;
  vec2 fe3Gradient = vec2((fe3_e - fe3_w) * 0.5, (fe3_n - fe3_s) * 0.5);
  float gradientMagnitude = length(fe3Gradient);
  vec2 gradientDir = gradientMagnitude > 0.0 ? normalize(fe3Gradient) : vec2(0.0);

  // 2A. Anisotropic Diffusion for Active (biased toward gradient)
  // Mass-conserving weighted average with bias in gradient direction
  float A_c = newA;
  float A_n = texture2D(state, uv + vec2(0.0, cellSize.y)).a;
  float A_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).a;
  float A_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).a;
  float A_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).a;

  // Calculate direction weights based on gradient
  // More weight in gradient direction, less opposite
  // biasStrength is 0-1, scales the directional weighting
  float w_n = 1.0 + biasStrength * max(0.0, gradientDir.y);
  float w_s = 1.0 - biasStrength * max(0.0, gradientDir.y);
  float w_e = 1.0 + biasStrength * max(0.0, gradientDir.x);
  float w_w = 1.0 - biasStrength * max(0.0, gradientDir.x);

  // Weighted average (mass-conserving)
  float totalWeight = w_n + w_s + w_e + w_w + 4.0;  // +4 for center
  float anisotropicA = (
    A_n * w_n + A_s * w_s + A_e * w_e + A_w * w_w + A_c * 4.0
  ) / totalWeight;

  // Blend based on bacterialDiffusion parameter (0-1)
  float movedA = mix(newA, anisotropicA, bacterialDiffusion);

  // 2B. Anisotropic Diffusion for Dormant (biased toward random direction - water turbulence)
  // Random direction changes each frame (simulates chaotic water flow)
  float randAngle = random(uv + time) * 6.28318;
  vec2 turbulenceDir = vec2(cos(randAngle), sin(randAngle));

  float D_c = newD;
  float D_n = texture2D(state, uv + vec2(0.0, cellSize.y)).b;
  float D_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).b;
  float D_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).b;
  float D_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).b;

  // Calculate direction weights based on random turbulence direction
  // Same bias strength as Active, but random direction instead of gradient
  float w_n_d = 1.0 + biasStrength * max(0.0, turbulenceDir.y);
  float w_s_d = 1.0 - biasStrength * max(0.0, turbulenceDir.y);
  float w_e_d = 1.0 + biasStrength * max(0.0, turbulenceDir.x);
  float w_w_d = 1.0 - biasStrength * max(0.0, turbulenceDir.x);

  // Weighted average (mass-conserving)
  float totalWeight_d = w_n_d + w_s_d + w_e_d + w_w_d + 4.0;
  float anisotropicD = (
    D_n * w_n_d + D_s * w_s_d + D_e * w_e_d + D_w * w_w_d + D_c * 4.0
  ) / totalWeight_d;

  float movedD = mix(newD, anisotropicD, bacterialDiffusion);

  // ===================
  // STEP 3: FE2 DIFFUSION (Gaussian Blur)
  // ===================

  // 3x3 Gaussian kernel for Fe2
  // Reference: https://agatedragon.blog/2024/01/09/simple-gaussian-blur/
  float fe2_c = newFe2;
  float fe2_n = texture2D(state, uv + vec2(0.0, cellSize.y)).g;
  float fe2_s = texture2D(state, uv + vec2(0.0, -cellSize.y)).g;
  float fe2_e = texture2D(state, uv + vec2(cellSize.x, 0.0)).g;
  float fe2_w = texture2D(state, uv + vec2(-cellSize.x, 0.0)).g;
  float fe2_ne = texture2D(state, uv + vec2(cellSize.x, cellSize.y)).g;
  float fe2_nw = texture2D(state, uv + vec2(-cellSize.x, cellSize.y)).g;
  float fe2_se = texture2D(state, uv + vec2(cellSize.x, -cellSize.y)).g;
  float fe2_sw = texture2D(state, uv + vec2(-cellSize.x, -cellSize.y)).g;

  float blurredFe2 = (
    fe2_nw + fe2_n * 2.0 + fe2_ne +
    fe2_w * 2.0 + fe2_c * 4.0 + fe2_e * 2.0 +
    fe2_sw + fe2_s * 2.0 + fe2_se
  ) / 16.0;

  // Blend based on fe2Diffusion parameter (0-1)
  float finalFe2 = mix(newFe2, blurredFe2, fe2Diffusion);

  // ===================
  // OUTPUT
  // ===================

  // Clamp all values to [0, 1]
  newFe3 = clamp(newFe3, 0.0, 1.0);
  finalFe2 = clamp(finalFe2, 0.0, 1.0);
  newA = clamp(movedA, 0.0, 1.0);  // Use moved values from movement step
  newD = clamp(movedD, 0.0, 1.0);

  // Write updated state: R=Fe3, G=Fe2, B=Dormant, A=Active
  gl_FragColor = vec4(newFe3, finalFe2, newD, newA);
}
`,u4=`/**
 * Display shader - Visualization only
 * Maps simulation state to colors with layer opacity controls
 * Runs on plane mesh outside GPUComputationRenderer
 *
 * Inspired by Jason Webb's displayFrag.glsl approach
 * Source: https://github.com/jasonwebb/reaction-diffusion-playground
 */

uniform sampler2D state;
uniform vec2 resolution;
uniform vec4 layerVisibility;  // (fe3, fe2, active, dormant) opacities

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;

  // Read simulation state: R=Fe3, G=Fe2, B=Dormant, A=Active
  vec4 simState = texture2D(state, uv);
  float fe3 = simState.r;
  float fe2 = simState.g;
  float dormantDensity = simState.b;  // Consistent naming with activeDensity
  float activeDensity = simState.a;   // Renamed from 'active' (reserved GLSL keyword)

  // DEBUG: Show raw RGBA values to diagnose black screen
  // Uncomment to see raw texture data:
  // gl_FragColor = simState; return;

  // Color mapping for each field
  vec3 fe3Color = vec3(0.55, 0.25, 0.15);   // Desert red-brown (iron mineral)
  vec3 fe2Color = vec3(0.9, 0.9, 0.2);      // Yellow (reduced iron / waste)
  vec3 activeColor = vec3(0.2, 0.8, 0.3);   // Green (metabolically active)
  vec3 dormantColor = vec3(0.3, 0.5, 0.7);  // Blue (inactive)

  // Background color (cream/off-white where no density)
  vec3 backgroundColor = vec3(0.95, 0.93, 0.88);

  // Alpha-blend layers from back to front
  // Density controls transparency: high density = opaque, low = transparent
  // layerVisibility = (fe3, fe2, active, dormant) = (x, y, z, w)
  vec3 color = backgroundColor;

  // Layer Fe3 (bottom layer)
  float fe3Alpha = fe3 * layerVisibility.x;
  color = mix(color, fe3Color, fe3Alpha);

  // Layer Fe2 (waste byproduct)
  float fe2Alpha = fe2 * layerVisibility.y;
  color = mix(color, fe2Color, fe2Alpha);

  // Layer Active bacteria
  float activeAlpha = activeDensity * layerVisibility.z;
  color = mix(color, activeColor, activeAlpha);

  // Layer Dormant bacteria (top layer)
  float dormantAlpha = dormantDensity * layerVisibility.w;
  color = mix(color, dormantColor, dormantAlpha);

  gl_FragColor = vec4(color, 1.0);
}
`;Lu.seed(100);class bo{constructor(e,t=Cu){ir(this,"renderer");ir(this,"gpuCompute");ir(this,"stateVariable");ir(this,"displayMesh");ir(this,"parameters");ir(this,"stepCount",0);console.log("[Simulation] Constructor starting"),this.renderer=e,this.parameters=t,this.gpuCompute=new a4(512,512,e),console.log("[Simulation] GPUComputationRenderer created");const r=this.gpuCompute.createTexture();console.log("[Simulation] State texture created, has data:",!!r.image.data),r.image.data&&(this.initializeFields(r.image.data),r.needsUpdate=!0,console.log("[Simulation] Fields initialized, texture marked for update")),this.stateVariable=this.gpuCompute.addVariable("state",c4,r),console.log("[Simulation] State variable added with combined compute shader"),this.gpuCompute.setVariableDependencies(this.stateVariable,[this.stateVariable]),console.log("[Simulation] Variable dependencies set");const i=this.stateVariable.material.uniforms;this.updateUniforms(i,t),console.log("[Simulation] Compute shader uniforms initialized"),this.displayMesh=new jn(new wa(2,2),new _r({fragmentShader:u4,uniforms:{state:{value:null},resolution:{value:new yt(512,512)},layerVisibility:{value:new Vt(1,1,1,1)}}}));const a=this.gpuCompute.init();a!==null?console.error("[Simulation] GPUComputationRenderer init error:",a):console.log("[Simulation] GPUComputationRenderer initialized (initial data in buffers)"),this.updateDisplayTexture(),console.log("[Simulation] Display connected to show initial state (step 0)"),console.log("[Simulation] Constructor complete")}start(){console.log("[Simulation] Starting animation loop"),this.renderer.setAnimationLoop(()=>this.step())}pause(){console.log("[Simulation] Pausing animation loop"),this.renderer.setAnimationLoop(null)}reset(){console.log("[Simulation] Reset called - need to reinitialize GPUComputationRenderer"),this.pause(),this.stepCount=0,console.log("[Simulation] Reset - step count reset (texture reset not implemented)")}updateParameters(e){this.parameters=e,this.updateUniforms(this.stateVariable.material.uniforms,e)}getDisplayMesh(){return this.displayMesh}step(){this.stepCount<5&&console.log("[Simulation] step() called, count:",this.stepCount),this.stepCount++,this.gpuCompute.compute(),this.stepCount<=5&&console.log("[Simulation] gpuCompute.compute() done"),this.updateDisplayTexture(),this.stepCount===1&&console.log("[Simulation] First step complete, display updated")}updateDisplayTexture(){const e=this.gpuCompute.getCurrentRenderTarget(this.stateVariable).texture;this.displayMesh.material.uniforms.state.value=e}updateUniforms(e,t){e.r_r={value:t.r_r},e.r_d={value:t.r_d},e.r_c={value:t.r_c},e.r_w={value:t.r_c},e.alpha_ad={value:t.alpha_ad},e.alpha_da={value:t.alpha_da},e.timeStep={value:t.timeStep},e.bacterialDiffusion={value:t.bacterialDiffusion},e.biasStrength={value:t.biasStrength},e.fe2Diffusion={value:t.fe2Diffusion},e.time={value:performance.now()*.001}}initializeFields(e){console.log("[Simulation] initializeFields called, data length:",e.length);const t=512,{fe3Scale:r,fe3Variation:i,initialActiveSeeds:a,seedPixelRadius:s}=this.parameters,o=o4(t,r,i,Lu);console.log("[Simulation] Perlin data generated");for(let l=0;l<a;l++){const c=Math.floor(Math.random()*t),u=Math.floor(Math.random()*t);for(let d=-s;d<=s;d++)for(let p=-s;p<=s;p++){const _=Math.sqrt(p*p+d*d);if(_<=s){const x=c+p,g=u+d;if(x>=0&&x<t&&g>=0&&g<t){const f=(g*t+x)*4,S=1-_/s*.5;o[f+3]=Math.max(o[f+3],S)}}}}console.log("[Simulation] Placed",a,"active seed patches with radius",s,"pixels"),e.set(o),console.log("[Simulation] Data copied to texture")}}const Ii=[];function Ns(n,e=vt){let t;const r=new Set;function i(o){if(ui(n,o)&&(n=o,t)){const l=!Ii.length;for(const c of r)c[1](),Ii.push(c,n);if(l){for(let c=0;c<Ii.length;c+=2)Ii[c][0](Ii[c+1]);Ii.length=0}}}function a(o){i(o(n))}function s(o,l=vt){const c=[o,l];return r.add(c),r.size===1&&(t=e(i,a)||vt),o(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:a,subscribe:s}}const es=Ns(!1),ys=Ns(Cu),oc=Ns({fe3:!0,fe2:!0,active:!0,dormant:!0}),Ss=Ns({fe3:1,fe2:1,active:1,dormant:1});function h4(n){let e;return{c(){e=de("canvas"),ae(e,"width",512),ae(e,"height",512),ae(e,"class","svelte-1xzikie")},m(t,r){bt(t,e,r),n[4](e)},p:vt,i:vt,o:vt,d(t){t&&_t(e),n[4](null)}}}function d4(n,e,t){let r,i;ma(n,Ss,m=>t(11,r=m)),ma(n,ys,m=>t(12,i=m));let a,s,o,l,c,u,d;function p(){s==null||s.start()}function _(){s==null||s.pause()}function x(){console.log("[SimulationCanvas] Reset called - recreating simulation"),s==null||s.pause(),l.remove(s.getDisplayMesh()),s=new bo(o,i);const m=s.getDisplayMesh();l.add(m);const f=m.material;f.uniforms.layerVisibility.value=new Vt(r.fe3,r.fe2,r.active,r.dormant),console.log("[SimulationCanvas] Simulation recreated")}zh(()=>{console.log("[SimulationCanvas] onMount called"),o=new Au({canvas:a,antialias:!1}),o.setSize(512,512),console.log("[SimulationCanvas] Renderer created"),c=new bu(-1,1,1,-1,0,1),c.position.z=.5,console.log("[SimulationCanvas] Camera created"),l=new Ru,console.log("[SimulationCanvas] Scene created"),console.log("[SimulationCanvas] Creating Simulation instance..."),s=new bo(o,i),console.log("[SimulationCanvas] Simulation instance created");const m=s.getDisplayMesh();l.add(m),console.log("[SimulationCanvas] Display mesh added to scene"),console.log("[SimulationCanvas] Display mesh position:",m.position),console.log("[SimulationCanvas] Display mesh geometry:",m.geometry),console.log("[SimulationCanvas] Display mesh material:",m.material),console.log("[SimulationCanvas] Scene children count:",l.children.length),console.log("[SimulationCanvas] Camera position:",c.position),console.log("[SimulationCanvas] Camera looking at:",c.getWorldDirection(new Z));let f=i.fe3Scale,S=i.fe3Variation,y=i.initialActiveSeeds,A=i.seedPixelRadius;u=ys.subscribe(D=>{if(D.fe3Scale!==f||D.fe3Variation!==S||D.initialActiveSeeds!==y||D.seedPixelRadius!==A){console.log("[SimulationCanvas] Initial conditions changed, recreating simulation..."),f=D.fe3Scale,S=D.fe3Variation,y=D.initialActiveSeeds,A=D.seedPixelRadius,s==null||s.pause(),l.remove(s.getDisplayMesh()),s=new bo(o,D);const w=s.getDisplayMesh();l.add(w);const C=w.material;C.uniforms.layerVisibility.value=new Vt(r.fe3,r.fe2,r.active,r.dormant),console.log("[SimulationCanvas] Simulation recreated with new initial conditions")}else console.log("[SimulationCanvas] Parameters updated (non-initial)"),s==null||s.updateParameters(D)}),d=Ss.subscribe(D=>{if(s){const w=s.getDisplayMesh().material;w.uniforms.layerVisibility.value=new Vt(D.fe3,D.fe2,D.active,D.dormant),console.log("[SimulationCanvas] Layer visibility updated:",D)}});let I=0;function P(){o.render(l,c),I<5&&(console.log("[SimulationCanvas] Render frame",I),I++),requestAnimationFrame(P)}P(),console.log("[SimulationCanvas] Render loop started")}),Hh(()=>{u==null||u(),d==null||d(),s==null||s.pause(),o==null||o.dispose()});function g(m){Vi[m?"unshift":"push"](()=>{a=m,t(0,a)})}return[a,p,_,x,g]}class f4 extends Zi{constructor(e){super(),ji(this,e,d4,h4,ui,{start:1,pause:2,reset:3})}get start(){return this.$$.ctx[1]}get pause(){return this.$$.ctx[2]}get reset(){return this.$$.ctx[3]}}function lc(n,e,t){const r=n.slice();return r[9]=e[t][0],r[10]=e[t][1],r}function cc(n){let e,t,r,i,a,s=ts(n[1],n[9]).toFixed(3)+"",o,l,c,u,d,p,_;function x(...g){return n[8](n[9],...g)}return{c(){e=de("div"),t=de("label"),r=de("span"),r.textContent=`${n[10].label}`,i=ke(),a=de("span"),o=ct(s),l=ke(),c=de("input"),d=ke(),ae(r,"class","param-label svelte-6letof"),ae(a,"class","param-value svelte-6letof"),ae(t,"for",n[9]),ae(t,"class","svelte-6letof"),ae(c,"id",n[9]),ae(c,"type","range"),ae(c,"min",n[10].min),ae(c,"max",n[10].max),ae(c,"step",n[10].step),c.value=u=ts(n[1],n[9]),ae(c,"class","svelte-6letof"),ae(e,"class","parameter-item svelte-6letof")},m(g,m){bt(g,e,m),G(e,t),G(t,r),G(t,i),G(t,a),G(a,o),G(e,l),G(e,c),G(e,d),p||(_=Dn(c,"input",x),p=!0)},p(g,m){n=g,m&2&&s!==(s=ts(n[1],n[9]).toFixed(3)+"")&&$c(o,s),m&2&&u!==(u=ts(n[1],n[9]))&&(c.value=u)},d(g){g&&_t(e),p=!1,_()}}}function m4(n){let e,t,r,i=n[0]?"Pause":"Start",a,s,o,l,c,u,d,p,_,x,g=B0(Object.entries(Yo)),m=[];for(let f=0;f<g.length;f+=1)m[f]=cc(lc(n,g,f));return{c(){e=de("div"),t=de("div"),r=de("button"),a=ct(i),s=ke(),o=de("button"),o.textContent="Reset",l=ke(),c=de("div"),u=de("h4"),u.textContent="Parameters",d=ke(),p=de("div");for(let f=0;f<m.length;f+=1)m[f].c();ae(r,"class","btn-primary svelte-6letof"),ae(o,"class","btn-secondary svelte-6letof"),ae(t,"class","control-buttons svelte-6letof"),ae(u,"class","svelte-6letof"),ae(p,"class","parameter-grid svelte-6letof"),ae(c,"class","parameters svelte-6letof"),ae(e,"class","control-panel svelte-6letof")},m(f,S){bt(f,e,S),G(e,t),G(t,r),G(r,a),G(t,s),G(t,o),G(e,l),G(e,c),G(c,u),G(c,d),G(c,p);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(p,null);_||(x=[Dn(r,"click",n[2]),Dn(o,"click",n[3])],_=!0)},p(f,[S]){if(S&1&&i!==(i=f[0]?"Pause":"Start")&&$c(a,i),S&18){g=B0(Object.entries(Yo));let y;for(y=0;y<g.length;y+=1){const A=lc(f,g,y);m[y]?m[y].p(A,S):(m[y]=cc(A),m[y].c(),m[y].m(p,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=g.length}},i:vt,o:vt,d(f){f&&_t(e),Fh(m,f),_=!1,Ki(x)}}}function ts(n,e){return n[e]}function p4(n,e,t){let r,i;ma(n,es,p=>t(0,r=p)),ma(n,ys,p=>t(1,i=p));let{onStart:a}=e,{onPause:s}=e,{onReset:o}=e;function l(){r?(s(),es.set(!1)):(a(),es.set(!0))}function c(){o(),es.set(!1)}function u(p,_){ys.update(x=>{const g={...x};return g[p]=_,g})}const d=(p,_)=>u(p,parseFloat(_.currentTarget.value));return n.$$set=p=>{"onStart"in p&&t(5,a=p.onStart),"onPause"in p&&t(6,s=p.onPause),"onReset"in p&&t(7,o=p.onReset)},[r,i,l,c,u,a,s,o,d]}class g4 extends Zi{constructor(e){super(),ji(this,e,p4,m4,ui,{onStart:5,onPause:6,onReset:7})}}const Pr="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20viewBox='-1.2%20-2.4%2020%2013.999999'%20version='1.1'%20x='0px'%20y='0px'%20id='svg2'%20sodipodi:docname='noun-eye-4763816.svg'%20width='20'%20height='14'%20inkscape:version='1.4.2%20(ebf0e940,%202025-05-08)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='namedview2'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20showgrid='false'%20inkscape:zoom='20.52469'%20inkscape:cx='9.9879704'%20inkscape:cy='8.7942861'%20inkscape:window-width='1440'%20inkscape:window-height='847'%20inkscape:window-x='0'%20inkscape:window-y='25'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg2'%20/%3e%3ctitle%20id='title1'%3eIco/Actions/Show%3c/title%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20id='g1'%20transform='translate(-3.2,-7.4)'%3e%3cpath%20d='m%2012,5%20c%203.689669,0%206.974025,2.1895704%209.830166,6.442483%200.226445,0.337187%200.226445,0.777847%200,1.115034%20C%2018.974025,16.81043%2015.689669,19%2012,19%208.3103308,19%205.0259752,16.81043%202.1698343,12.557517%201.9433886,12.22033%201.9433886,11.77967%202.1698343,11.442483%205.0259752,7.1895704%208.3103308,5%2012,5%20Z%20m%200,2%20C%209.2402975,7%206.6765926,8.5976335%204.2899008,11.897541%20v%200%20L%204.216,12%204.289901,12.102459%20c%202.3097017,3.193459%204.7851806,4.792697%207.443642,4.89255%20v%200%20L%2012,17%20c%202.759703,0%205.323407,-1.597634%207.710099,-4.897541%20v%200%20L%2019.783,12%2019.710099,11.897541%20C%2017.400397,8.7040821%2014.924919,7.1048445%2012.266457,7.0049909%20v%200%20z%20m%200,1%20c%202.209139,0%204,1.790861%204,4%200,2.209139%20-1.790861,4%20-4,4%20C%209.790861,16%208,14.209139%208,12%208,9.790861%209.790861,8%2012,8%20Z%20m%200,2%20c%20-1.104569,0%20-2,0.895431%20-2,2%200,1.10457%200.895431,2%202,2%201.10457,0%202,-0.89543%202,-2%200,-1.104569%20-0.89543,-2%20-2,-2%20z'%20fill='%23000000'%20id='path1'%20/%3e%3c/g%3e%3cmetadata%20id='metadata2'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:title%3eIco/Actions/Show%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3c/svg%3e",Nr="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20viewBox='-1.2%20-2.4%2020%2013.999999'%20version='1.1'%20x='0px'%20y='0px'%20id='svg2'%20sodipodi:docname='noun-eye-4763825.svg'%20width='20'%20height='14'%20inkscape:version='1.4.2%20(ebf0e940,%202025-05-08)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='namedview2'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='12.837468'%20inkscape:cx='7.8675951'%20inkscape:cy='6.5043979'%20inkscape:window-width='1440'%20inkscape:window-height='847'%20inkscape:window-x='0'%20inkscape:window-y='25'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg2'%20/%3e%3ctitle%20id='title1'%3eIco/Actions/Hide%3c/title%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20id='g1'%20transform='translate(-3.2,-8.166309)'%3e%3cpath%20d='m%2020.169937,8.4425864%20c%200.307908,-0.4584878%200.929195,-0.5805569%201.387683,-0.2726489%200.458488,0.307908%200.580557,0.9291946%200.272649,1.3876824%20-1.047011,1.5590431%20-2.151567,2.8408091%20-3.31254,3.8390791%20l%201.098054,1.901048%20c%200.276142,0.478293%200.112267,1.089883%20-0.366026,1.366026%20-0.444129,0.256418%20-1.003193,0.133433%20-1.301888,-0.268393%20l%20-0.06414,-0.09763%20-0.989018,-1.713022%20c%20-1.239975,0.755405%20-2.538446,1.211199%20-3.894204,1.360724%20L%2013.0001,17.99862%20c%200,0.552284%20-0.447715,1%20-1,1%20-0.512836,0%20-0.935507,-0.386041%20-0.993272,-0.883379%20l%20-0.0067,-0.116621%20-1.2e-4,-2.053136%20C%209.6441213,15.795988%208.3455551,15.340183%207.1054924,14.584725%20l%20-0.989018,1.713022%20-0.064137,0.09763%20C%205.7536421,16.797206%205.1945779,16.920191%204.750449,16.663773%204.2721564,16.38763%204.1082812,15.77604%204.3844236,15.297747%20v%200%20L%205.4822809,13.39653%20C%204.3213802,12.398285%203.2168898,11.116576%202.1699375,9.5576199%201.8620295,9.0991321%201.9840986,8.4778455%202.4425864,8.1699375%202.9010743,7.8620295%203.5223609,7.9840986%203.8302689,8.4425864%20c%202.516442,3.7470876%205.2320865,5.5575166%208.1698341,5.5575166%202.937748,0%205.653392,-1.810429%208.169834,-5.5575166%20z'%20fill='%23000000'%20id='path1'%20/%3e%3c/g%3e%3cmetadata%20id='metadata2'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:title%3eIco/Actions/Hide%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3c/svg%3e";function v4(n){let e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m,f,S,y,A,I,P,D,K,w,C,B,W,ie,U,O,Y,te,Q,ne,ee,oe,se,j,re,ge,Le,ye,Oe,We;return{c(){e=de("div"),t=de("h4"),t.textContent="Layers",r=ke(),i=de("div"),a=de("div"),s=de("button"),o=de("img"),c=ke(),u=de("div"),d=de("span"),p=ke(),_=de("span"),_.textContent="Fe3",x=ke(),g=de("div"),m=de("button"),f=de("img"),y=ke(),A=de("div"),I=de("span"),P=ke(),D=de("span"),D.textContent="Fe2",K=ke(),w=de("div"),C=de("button"),B=de("img"),ie=ke(),U=de("div"),O=de("span"),Y=ke(),te=de("span"),te.textContent="Active",Q=ke(),ne=de("div"),ee=de("button"),oe=de("img"),j=ke(),re=de("div"),ge=de("span"),Le=ke(),ye=de("span"),ye.textContent="Dormant",ae(t,"class","svelte-cx5hb"),Er(o.src,l=n[0].fe3?Pr:Nr)||ae(o,"src",l),ae(o,"alt","toggle"),ae(o,"class","svelte-cx5hb"),ae(s,"class","eye-btn svelte-cx5hb"),ae(s,"title","Toggle visibility"),ae(d,"class","layer-color fe3 svelte-cx5hb"),ae(_,"class","svelte-cx5hb"),Tr(_,"hidden",!n[0].fe3),ae(u,"class","layer-item svelte-cx5hb"),ae(a,"class","layer-row svelte-cx5hb"),Er(f.src,S=n[0].fe2?Pr:Nr)||ae(f,"src",S),ae(f,"alt","toggle"),ae(f,"class","svelte-cx5hb"),ae(m,"class","eye-btn svelte-cx5hb"),ae(m,"title","Toggle visibility"),ae(I,"class","layer-color fe2 svelte-cx5hb"),ae(D,"class","svelte-cx5hb"),Tr(D,"hidden",!n[0].fe2),ae(A,"class","layer-item svelte-cx5hb"),ae(g,"class","layer-row svelte-cx5hb"),Er(B.src,W=n[0].active?Pr:Nr)||ae(B,"src",W),ae(B,"alt","toggle"),ae(B,"class","svelte-cx5hb"),ae(C,"class","eye-btn svelte-cx5hb"),ae(C,"title","Toggle visibility"),ae(O,"class","layer-color active svelte-cx5hb"),ae(te,"class","svelte-cx5hb"),Tr(te,"hidden",!n[0].active),ae(U,"class","layer-item svelte-cx5hb"),ae(w,"class","layer-row svelte-cx5hb"),Er(oe.src,se=n[0].dormant?Pr:Nr)||ae(oe,"src",se),ae(oe,"alt","toggle"),ae(oe,"class","svelte-cx5hb"),ae(ee,"class","eye-btn svelte-cx5hb"),ae(ee,"title","Toggle visibility"),ae(ge,"class","layer-color dormant svelte-cx5hb"),ae(ye,"class","svelte-cx5hb"),Tr(ye,"hidden",!n[0].dormant),ae(re,"class","layer-item svelte-cx5hb"),ae(ne,"class","layer-row svelte-cx5hb"),ae(i,"class","layer-list svelte-cx5hb"),ae(e,"class","layer-controls svelte-cx5hb")},m(Ae,Be){bt(Ae,e,Be),G(e,t),G(e,r),G(e,i),G(i,a),G(a,s),G(s,o),G(a,c),G(a,u),G(u,d),G(u,p),G(u,_),G(i,x),G(i,g),G(g,m),G(m,f),G(g,y),G(g,A),G(A,I),G(A,P),G(A,D),G(i,K),G(i,w),G(w,C),G(C,B),G(w,ie),G(w,U),G(U,O),G(U,Y),G(U,te),G(i,Q),G(i,ne),G(ne,ee),G(ee,oe),G(ne,j),G(ne,re),G(re,ge),G(re,Le),G(re,ye),Oe||(We=[Dn(s,"click",n[3]),Dn(u,"mouseenter",n[4]),Dn(m,"click",n[5]),Dn(A,"mouseenter",n[6]),Dn(C,"click",n[7]),Dn(U,"mouseenter",n[8]),Dn(ee,"click",n[9]),Dn(re,"mouseenter",n[10]),Dn(e,"mouseleave",n[11])],Oe=!0)},p(Ae,[Be]){Be&1&&!Er(o.src,l=Ae[0].fe3?Pr:Nr)&&ae(o,"src",l),Be&1&&Tr(_,"hidden",!Ae[0].fe3),Be&1&&!Er(f.src,S=Ae[0].fe2?Pr:Nr)&&ae(f,"src",S),Be&1&&Tr(D,"hidden",!Ae[0].fe2),Be&1&&!Er(B.src,W=Ae[0].active?Pr:Nr)&&ae(B,"src",W),Be&1&&Tr(te,"hidden",!Ae[0].active),Be&1&&!Er(oe.src,se=Ae[0].dormant?Pr:Nr)&&ae(oe,"src",se),Be&1&&Tr(ye,"hidden",!Ae[0].dormant)},i:vt,o:vt,d(Ae){Ae&&_t(e),Oe=!1,Ki(We)}}}function _4(n,e,t){let r;ma(n,oc,g=>t(0,r=g));function i(g){oc.update(m=>({...m,[g]:!m[g]})),a()}function a(g){const m=r;g?Ss.set({fe3:g==="fe3"?1:.2,fe2:g==="fe2"?1:.2,active:g==="active"?1:.2,dormant:g==="dormant"?1:.2}):Ss.set({fe3:m.fe3?1:0,fe2:m.fe2?1:0,active:m.active?1:0,dormant:m.dormant?1:0})}return a(),[r,i,a,()=>i("fe3"),()=>a("fe3"),()=>i("fe2"),()=>a("fe2"),()=>i("active"),()=>a("active"),()=>i("dormant"),()=>a("dormant"),()=>a()]}class x4 extends Zi{constructor(e){super(),ji(this,e,_4,v4,ui,{})}}class gn{constructor(e,t,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=r}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new gn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class An{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new An(t,gn.range(this,e))}}class me{constructor(e,t){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var r="KaTeX parse error: "+e,i,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;i=s.start,a=s.end,i===o.length?r+=" at end of input: ":r+=" at position "+(i+1)+": ";var l=o.slice(i,a).replace(/[^]/g,"$&̲"),c;i>15?c="…"+o.slice(i-15,i):c=o.slice(0,i);var u;a+15<o.length?u=o.slice(a,a+15)+"…":u=o.slice(a),r+=c+l+u}var d=new Error(r);return d.name="ParseError",d.__proto__=me.prototype,d.position=i,i!=null&&a!=null&&(d.length=a-i),d.rawMessage=e,d}}me.prototype.__proto__=Error.prototype;var b4=function(e,t){return e===void 0?t:e},y4=/([A-Z])/g,S4=function(e){return e.replace(y4,"-$1").toLowerCase()},M4={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},w4=/[&><"']/g;function E4(n){return String(n).replace(w4,e=>M4[e])}var Pu=function n(e){return e.type==="ordgroup"||e.type==="color"?e.body.length===1?n(e.body[0]):e:e.type==="font"?n(e.body):e},T4=function(e){var t=Pu(e);return t.type==="mathord"||t.type==="textord"||t.type==="atom"},A4=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e},R4=function(e){var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},ft={deflt:b4,escape:E4,hyphenate:S4,getBaseElem:Pu,isCharacterBox:T4,protocolFromUrl:R4},fs={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:n=>"#"+n},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(n,e)=>(e.push(n),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:n=>Math.max(0,n),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:n=>Math.max(0,n),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:n=>Math.max(0,n),cli:"-e, --max-expand <n>",cliProcessor:n=>n==="Infinity"?1/0:parseInt(n)},globalGroup:{type:"boolean",cli:!1}};function C4(n){if(n.default)return n.default;var e=n.type,t=Array.isArray(e)?e[0]:e;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class h0{constructor(e){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t in fs)if(fs.hasOwnProperty(t)){var r=fs[t];this[t]=e[t]!==void 0?r.processor?r.processor(e[t]):e[t]:C4(r)}}reportNonstrict(e,t,r){var i=this.strict;if(typeof i=="function"&&(i=i(e,t,r)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new me("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),r);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,r){var i=this.strict;if(typeof i=="function")try{i=i(e,t,r)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if(e.url&&!e.protocol){var t=ft.protocolFromUrl(e.url);if(t==null)return!1;e.protocol=t}var r=typeof this.trust=="function"?this.trust(e):this.trust;return!!r}}class Ir{constructor(e,t,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=r}sup(){return Yn[D4[this.id]]}sub(){return Yn[L4[this.id]]}fracNum(){return Yn[P4[this.id]]}fracDen(){return Yn[N4[this.id]]}cramp(){return Yn[I4[this.id]]}text(){return Yn[U4[this.id]]}isTight(){return this.size>=2}}var d0=0,Ms=1,Gi=2,pr=3,_a=4,Nn=5,Yi=6,hn=7,Yn=[new Ir(d0,0,!1),new Ir(Ms,0,!0),new Ir(Gi,1,!1),new Ir(pr,1,!0),new Ir(_a,2,!1),new Ir(Nn,2,!0),new Ir(Yi,3,!1),new Ir(hn,3,!0)],D4=[_a,Nn,_a,Nn,Yi,hn,Yi,hn],L4=[Nn,Nn,Nn,Nn,hn,hn,hn,hn],P4=[Gi,pr,_a,Nn,Yi,hn,Yi,hn],N4=[pr,pr,Nn,Nn,hn,hn,hn,hn],I4=[Ms,Ms,pr,pr,Nn,Nn,hn,hn],U4=[d0,Ms,Gi,pr,Gi,pr,Gi,pr],Xe={DISPLAY:Yn[d0],TEXT:Yn[Gi],SCRIPT:Yn[_a],SCRIPTSCRIPT:Yn[Yi]},Ko=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function F4(n){for(var e=0;e<Ko.length;e++)for(var t=Ko[e],r=0;r<t.blocks.length;r++){var i=t.blocks[r];if(n>=i[0]&&n<=i[1])return t.name}return null}var ms=[];Ko.forEach(n=>n.blocks.forEach(e=>ms.push(...e)));function Nu(n){for(var e=0;e<ms.length;e+=2)if(n>=ms[e]&&n<=ms[e+1])return!0;return!1}var Ui=80,k4=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},O4=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},z4=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},B4=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},H4=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},G4=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},V4=function(e,t,r){var i=r-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},W4=function(e,t,r){t=1e3*t;var i="";switch(e){case"sqrtMain":i=k4(t,Ui);break;case"sqrtSize1":i=O4(t,Ui);break;case"sqrtSize2":i=z4(t,Ui);break;case"sqrtSize3":i=B4(t,Ui);break;case"sqrtSize4":i=H4(t,Ui);break;case"sqrtTall":i=V4(t,Ui,r)}return i},q4=function(e,t){switch(e){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},uc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},X4=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Ea{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){var e=t=>t.toText();return this.children.map(e).join("")}}var Zn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ns={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},hc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function $4(n,e){Zn[n]=e}function f0(n,e,t){if(!Zn[e])throw new Error("Font metrics not found for font: "+e+".");var r=n.charCodeAt(0),i=Zn[e][r];if(!i&&n[0]in hc&&(r=hc[n[0]].charCodeAt(0),i=Zn[e][r]),!i&&t==="text"&&Nu(r)&&(i=Zn[e][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var yo={};function Y4(n){var e;if(n>=5?e=0:n>=3?e=1:e=2,!yo[e]){var t=yo[e]={cssEmPerMu:ns.quad[e]/18};for(var r in ns)ns.hasOwnProperty(r)&&(t[r]=ns[r][e])}return yo[e]}var K4=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],dc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],fc=function(e,t){return t.size<2?e:K4[e-1][t.size-1]};class dr{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||dr.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=dc[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return new dr(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:fc(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:dc[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=fc(dr.BASESIZE,e);return this.size===t&&this.textSize===dr.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==dr.BASESIZE?["sizing","reset-size"+this.size,"size"+dr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Y4(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}dr.BASESIZE=6;var jo={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},j4={ex:!0,em:!0,mu:!0},Iu=function(e){return typeof e!="string"&&(e=e.unit),e in jo||e in j4||e==="ex"},zt=function(e,t){var r;if(e.unit in jo)r=jo[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")r=t.fontMetrics().cssEmPerMu;else{var i;if(t.style.isTight()?i=t.havingStyle(t.style.text()):i=t,e.unit==="ex")r=i.fontMetrics().xHeight;else if(e.unit==="em")r=i.fontMetrics().quad;else throw new me("Invalid unit: '"+e.unit+"'");i!==t&&(r*=i.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*r,t.maxSize)},xe=function(e){return+e.toFixed(4)+"em"},Vr=function(e){return e.filter(t=>t).join(" ")},Uu=function(e,t,r){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},t){t.style.isTight()&&this.classes.push("mtight");var i=t.getColor();i&&(this.style.color=i)}},Fu=function(e){var t=document.createElement(e);t.className=Vr(this.classes);for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);for(var i in this.attributes)this.attributes.hasOwnProperty(i)&&t.setAttribute(i,this.attributes[i]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t},Z4=/[\s"'>/=\x00-\x1f]/,ku=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+ft.escape(Vr(this.classes))+'"');var r="";for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=ft.hyphenate(i)+":"+this.style[i]+";");r&&(t+=' style="'+ft.escape(r)+'"');for(var a in this.attributes)if(this.attributes.hasOwnProperty(a)){if(Z4.test(a))throw new me("Invalid attribute name '"+a+"'");t+=" "+a+'="'+ft.escape(this.attributes[a])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class Ta{constructor(e,t,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Uu.call(this,e,r,i),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Fu.call(this,"span")}toMarkup(){return ku.call(this,"span")}}class m0{constructor(e,t,r,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Uu.call(this,t,i),this.children=r||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Fu.call(this,"a")}toMarkup(){return ku.call(this,"a")}}class J4{constructor(e,t,r){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.style=r}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var t in this.style)this.style.hasOwnProperty(t)&&(e.style[t]=this.style[t]);return e}toMarkup(){var e='<img src="'+ft.escape(this.src)+'"'+(' alt="'+ft.escape(this.alt)+'"'),t="";for(var r in this.style)this.style.hasOwnProperty(r)&&(t+=ft.hyphenate(r)+":"+this.style[r]+";");return t&&(e+=' style="'+ft.escape(t)+'"'),e+="'/>",e}}var Q4={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class In{constructor(e,t,r,i,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=r||0,this.italic=i||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=F4(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Q4[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=xe(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Vr(this.classes));for(var r in this.style)this.style.hasOwnProperty(r)&&(t=t||document.createElement("span"),t.style[r]=this.style[r]);return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=ft.escape(Vr(this.classes)),t+='"');var r="";this.italic>0&&(r+="margin-right:"+this.italic+"em;");for(var i in this.style)this.style.hasOwnProperty(i)&&(r+=ft.hyphenate(i)+":"+this.style[i]+";");r&&(e=!0,t+=' style="'+ft.escape(r)+'"');var a=ft.escape(this.text);return e?(t+=">",t+=a,t+="</span>",t):a}}class xr{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ft.escape(this.attributes[t])+'"');e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</svg>",e}}class Wr{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",uc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+ft.escape(this.alternate)+'"/>':'<path d="'+ft.escape(uc[this.pathName])+'"/>'}}class Zo{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);return t}toMarkup(){var e="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ft.escape(this.attributes[t])+'"');return e+="/>",e}}function mc(n){if(n instanceof In)return n;throw new Error("Expected symbolNode but got "+String(n)+".")}function eg(n){if(n instanceof Ta)return n;throw new Error("Expected span<HtmlDomNode> but got "+String(n)+".")}var tg={bin:1,close:1,inner:1,open:1,punct:1,rel:1},ng={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ct={math:{},text:{}};function h(n,e,t,r,i,a){Ct[n][i]={font:e,group:t,replace:r},a&&r&&(Ct[n][r]=Ct[n][i])}var v="math",le="text",b="main",L="ams",kt="accent-token",De="bin",dn="close",ea="inner",qe="mathord",Yt="op-token",Rn="open",Is="punct",N="rel",Sr="spacing",k="textord";h(v,b,N,"≡","\\equiv",!0);h(v,b,N,"≺","\\prec",!0);h(v,b,N,"≻","\\succ",!0);h(v,b,N,"∼","\\sim",!0);h(v,b,N,"⊥","\\perp");h(v,b,N,"⪯","\\preceq",!0);h(v,b,N,"⪰","\\succeq",!0);h(v,b,N,"≃","\\simeq",!0);h(v,b,N,"∣","\\mid",!0);h(v,b,N,"≪","\\ll",!0);h(v,b,N,"≫","\\gg",!0);h(v,b,N,"≍","\\asymp",!0);h(v,b,N,"∥","\\parallel");h(v,b,N,"⋈","\\bowtie",!0);h(v,b,N,"⌣","\\smile",!0);h(v,b,N,"⊑","\\sqsubseteq",!0);h(v,b,N,"⊒","\\sqsupseteq",!0);h(v,b,N,"≐","\\doteq",!0);h(v,b,N,"⌢","\\frown",!0);h(v,b,N,"∋","\\ni",!0);h(v,b,N,"∝","\\propto",!0);h(v,b,N,"⊢","\\vdash",!0);h(v,b,N,"⊣","\\dashv",!0);h(v,b,N,"∋","\\owns");h(v,b,Is,".","\\ldotp");h(v,b,Is,"⋅","\\cdotp");h(v,b,k,"#","\\#");h(le,b,k,"#","\\#");h(v,b,k,"&","\\&");h(le,b,k,"&","\\&");h(v,b,k,"ℵ","\\aleph",!0);h(v,b,k,"∀","\\forall",!0);h(v,b,k,"ℏ","\\hbar",!0);h(v,b,k,"∃","\\exists",!0);h(v,b,k,"∇","\\nabla",!0);h(v,b,k,"♭","\\flat",!0);h(v,b,k,"ℓ","\\ell",!0);h(v,b,k,"♮","\\natural",!0);h(v,b,k,"♣","\\clubsuit",!0);h(v,b,k,"℘","\\wp",!0);h(v,b,k,"♯","\\sharp",!0);h(v,b,k,"♢","\\diamondsuit",!0);h(v,b,k,"ℜ","\\Re",!0);h(v,b,k,"♡","\\heartsuit",!0);h(v,b,k,"ℑ","\\Im",!0);h(v,b,k,"♠","\\spadesuit",!0);h(v,b,k,"§","\\S",!0);h(le,b,k,"§","\\S");h(v,b,k,"¶","\\P",!0);h(le,b,k,"¶","\\P");h(v,b,k,"†","\\dag");h(le,b,k,"†","\\dag");h(le,b,k,"†","\\textdagger");h(v,b,k,"‡","\\ddag");h(le,b,k,"‡","\\ddag");h(le,b,k,"‡","\\textdaggerdbl");h(v,b,dn,"⎱","\\rmoustache",!0);h(v,b,Rn,"⎰","\\lmoustache",!0);h(v,b,dn,"⟯","\\rgroup",!0);h(v,b,Rn,"⟮","\\lgroup",!0);h(v,b,De,"∓","\\mp",!0);h(v,b,De,"⊖","\\ominus",!0);h(v,b,De,"⊎","\\uplus",!0);h(v,b,De,"⊓","\\sqcap",!0);h(v,b,De,"∗","\\ast");h(v,b,De,"⊔","\\sqcup",!0);h(v,b,De,"◯","\\bigcirc",!0);h(v,b,De,"∙","\\bullet",!0);h(v,b,De,"‡","\\ddagger");h(v,b,De,"≀","\\wr",!0);h(v,b,De,"⨿","\\amalg");h(v,b,De,"&","\\And");h(v,b,N,"⟵","\\longleftarrow",!0);h(v,b,N,"⇐","\\Leftarrow",!0);h(v,b,N,"⟸","\\Longleftarrow",!0);h(v,b,N,"⟶","\\longrightarrow",!0);h(v,b,N,"⇒","\\Rightarrow",!0);h(v,b,N,"⟹","\\Longrightarrow",!0);h(v,b,N,"↔","\\leftrightarrow",!0);h(v,b,N,"⟷","\\longleftrightarrow",!0);h(v,b,N,"⇔","\\Leftrightarrow",!0);h(v,b,N,"⟺","\\Longleftrightarrow",!0);h(v,b,N,"↦","\\mapsto",!0);h(v,b,N,"⟼","\\longmapsto",!0);h(v,b,N,"↗","\\nearrow",!0);h(v,b,N,"↩","\\hookleftarrow",!0);h(v,b,N,"↪","\\hookrightarrow",!0);h(v,b,N,"↘","\\searrow",!0);h(v,b,N,"↼","\\leftharpoonup",!0);h(v,b,N,"⇀","\\rightharpoonup",!0);h(v,b,N,"↙","\\swarrow",!0);h(v,b,N,"↽","\\leftharpoondown",!0);h(v,b,N,"⇁","\\rightharpoondown",!0);h(v,b,N,"↖","\\nwarrow",!0);h(v,b,N,"⇌","\\rightleftharpoons",!0);h(v,L,N,"≮","\\nless",!0);h(v,L,N,"","\\@nleqslant");h(v,L,N,"","\\@nleqq");h(v,L,N,"⪇","\\lneq",!0);h(v,L,N,"≨","\\lneqq",!0);h(v,L,N,"","\\@lvertneqq");h(v,L,N,"⋦","\\lnsim",!0);h(v,L,N,"⪉","\\lnapprox",!0);h(v,L,N,"⊀","\\nprec",!0);h(v,L,N,"⋠","\\npreceq",!0);h(v,L,N,"⋨","\\precnsim",!0);h(v,L,N,"⪹","\\precnapprox",!0);h(v,L,N,"≁","\\nsim",!0);h(v,L,N,"","\\@nshortmid");h(v,L,N,"∤","\\nmid",!0);h(v,L,N,"⊬","\\nvdash",!0);h(v,L,N,"⊭","\\nvDash",!0);h(v,L,N,"⋪","\\ntriangleleft");h(v,L,N,"⋬","\\ntrianglelefteq",!0);h(v,L,N,"⊊","\\subsetneq",!0);h(v,L,N,"","\\@varsubsetneq");h(v,L,N,"⫋","\\subsetneqq",!0);h(v,L,N,"","\\@varsubsetneqq");h(v,L,N,"≯","\\ngtr",!0);h(v,L,N,"","\\@ngeqslant");h(v,L,N,"","\\@ngeqq");h(v,L,N,"⪈","\\gneq",!0);h(v,L,N,"≩","\\gneqq",!0);h(v,L,N,"","\\@gvertneqq");h(v,L,N,"⋧","\\gnsim",!0);h(v,L,N,"⪊","\\gnapprox",!0);h(v,L,N,"⊁","\\nsucc",!0);h(v,L,N,"⋡","\\nsucceq",!0);h(v,L,N,"⋩","\\succnsim",!0);h(v,L,N,"⪺","\\succnapprox",!0);h(v,L,N,"≆","\\ncong",!0);h(v,L,N,"","\\@nshortparallel");h(v,L,N,"∦","\\nparallel",!0);h(v,L,N,"⊯","\\nVDash",!0);h(v,L,N,"⋫","\\ntriangleright");h(v,L,N,"⋭","\\ntrianglerighteq",!0);h(v,L,N,"","\\@nsupseteqq");h(v,L,N,"⊋","\\supsetneq",!0);h(v,L,N,"","\\@varsupsetneq");h(v,L,N,"⫌","\\supsetneqq",!0);h(v,L,N,"","\\@varsupsetneqq");h(v,L,N,"⊮","\\nVdash",!0);h(v,L,N,"⪵","\\precneqq",!0);h(v,L,N,"⪶","\\succneqq",!0);h(v,L,N,"","\\@nsubseteqq");h(v,L,De,"⊴","\\unlhd");h(v,L,De,"⊵","\\unrhd");h(v,L,N,"↚","\\nleftarrow",!0);h(v,L,N,"↛","\\nrightarrow",!0);h(v,L,N,"⇍","\\nLeftarrow",!0);h(v,L,N,"⇏","\\nRightarrow",!0);h(v,L,N,"↮","\\nleftrightarrow",!0);h(v,L,N,"⇎","\\nLeftrightarrow",!0);h(v,L,N,"△","\\vartriangle");h(v,L,k,"ℏ","\\hslash");h(v,L,k,"▽","\\triangledown");h(v,L,k,"◊","\\lozenge");h(v,L,k,"Ⓢ","\\circledS");h(v,L,k,"®","\\circledR");h(le,L,k,"®","\\circledR");h(v,L,k,"∡","\\measuredangle",!0);h(v,L,k,"∄","\\nexists");h(v,L,k,"℧","\\mho");h(v,L,k,"Ⅎ","\\Finv",!0);h(v,L,k,"⅁","\\Game",!0);h(v,L,k,"‵","\\backprime");h(v,L,k,"▲","\\blacktriangle");h(v,L,k,"▼","\\blacktriangledown");h(v,L,k,"■","\\blacksquare");h(v,L,k,"⧫","\\blacklozenge");h(v,L,k,"★","\\bigstar");h(v,L,k,"∢","\\sphericalangle",!0);h(v,L,k,"∁","\\complement",!0);h(v,L,k,"ð","\\eth",!0);h(le,b,k,"ð","ð");h(v,L,k,"╱","\\diagup");h(v,L,k,"╲","\\diagdown");h(v,L,k,"□","\\square");h(v,L,k,"□","\\Box");h(v,L,k,"◊","\\Diamond");h(v,L,k,"¥","\\yen",!0);h(le,L,k,"¥","\\yen",!0);h(v,L,k,"✓","\\checkmark",!0);h(le,L,k,"✓","\\checkmark");h(v,L,k,"ℶ","\\beth",!0);h(v,L,k,"ℸ","\\daleth",!0);h(v,L,k,"ℷ","\\gimel",!0);h(v,L,k,"ϝ","\\digamma",!0);h(v,L,k,"ϰ","\\varkappa");h(v,L,Rn,"┌","\\@ulcorner",!0);h(v,L,dn,"┐","\\@urcorner",!0);h(v,L,Rn,"└","\\@llcorner",!0);h(v,L,dn,"┘","\\@lrcorner",!0);h(v,L,N,"≦","\\leqq",!0);h(v,L,N,"⩽","\\leqslant",!0);h(v,L,N,"⪕","\\eqslantless",!0);h(v,L,N,"≲","\\lesssim",!0);h(v,L,N,"⪅","\\lessapprox",!0);h(v,L,N,"≊","\\approxeq",!0);h(v,L,De,"⋖","\\lessdot");h(v,L,N,"⋘","\\lll",!0);h(v,L,N,"≶","\\lessgtr",!0);h(v,L,N,"⋚","\\lesseqgtr",!0);h(v,L,N,"⪋","\\lesseqqgtr",!0);h(v,L,N,"≑","\\doteqdot");h(v,L,N,"≓","\\risingdotseq",!0);h(v,L,N,"≒","\\fallingdotseq",!0);h(v,L,N,"∽","\\backsim",!0);h(v,L,N,"⋍","\\backsimeq",!0);h(v,L,N,"⫅","\\subseteqq",!0);h(v,L,N,"⋐","\\Subset",!0);h(v,L,N,"⊏","\\sqsubset",!0);h(v,L,N,"≼","\\preccurlyeq",!0);h(v,L,N,"⋞","\\curlyeqprec",!0);h(v,L,N,"≾","\\precsim",!0);h(v,L,N,"⪷","\\precapprox",!0);h(v,L,N,"⊲","\\vartriangleleft");h(v,L,N,"⊴","\\trianglelefteq");h(v,L,N,"⊨","\\vDash",!0);h(v,L,N,"⊪","\\Vvdash",!0);h(v,L,N,"⌣","\\smallsmile");h(v,L,N,"⌢","\\smallfrown");h(v,L,N,"≏","\\bumpeq",!0);h(v,L,N,"≎","\\Bumpeq",!0);h(v,L,N,"≧","\\geqq",!0);h(v,L,N,"⩾","\\geqslant",!0);h(v,L,N,"⪖","\\eqslantgtr",!0);h(v,L,N,"≳","\\gtrsim",!0);h(v,L,N,"⪆","\\gtrapprox",!0);h(v,L,De,"⋗","\\gtrdot");h(v,L,N,"⋙","\\ggg",!0);h(v,L,N,"≷","\\gtrless",!0);h(v,L,N,"⋛","\\gtreqless",!0);h(v,L,N,"⪌","\\gtreqqless",!0);h(v,L,N,"≖","\\eqcirc",!0);h(v,L,N,"≗","\\circeq",!0);h(v,L,N,"≜","\\triangleq",!0);h(v,L,N,"∼","\\thicksim");h(v,L,N,"≈","\\thickapprox");h(v,L,N,"⫆","\\supseteqq",!0);h(v,L,N,"⋑","\\Supset",!0);h(v,L,N,"⊐","\\sqsupset",!0);h(v,L,N,"≽","\\succcurlyeq",!0);h(v,L,N,"⋟","\\curlyeqsucc",!0);h(v,L,N,"≿","\\succsim",!0);h(v,L,N,"⪸","\\succapprox",!0);h(v,L,N,"⊳","\\vartriangleright");h(v,L,N,"⊵","\\trianglerighteq");h(v,L,N,"⊩","\\Vdash",!0);h(v,L,N,"∣","\\shortmid");h(v,L,N,"∥","\\shortparallel");h(v,L,N,"≬","\\between",!0);h(v,L,N,"⋔","\\pitchfork",!0);h(v,L,N,"∝","\\varpropto");h(v,L,N,"◀","\\blacktriangleleft");h(v,L,N,"∴","\\therefore",!0);h(v,L,N,"∍","\\backepsilon");h(v,L,N,"▶","\\blacktriangleright");h(v,L,N,"∵","\\because",!0);h(v,L,N,"⋘","\\llless");h(v,L,N,"⋙","\\gggtr");h(v,L,De,"⊲","\\lhd");h(v,L,De,"⊳","\\rhd");h(v,L,N,"≂","\\eqsim",!0);h(v,b,N,"⋈","\\Join");h(v,L,N,"≑","\\Doteq",!0);h(v,L,De,"∔","\\dotplus",!0);h(v,L,De,"∖","\\smallsetminus");h(v,L,De,"⋒","\\Cap",!0);h(v,L,De,"⋓","\\Cup",!0);h(v,L,De,"⩞","\\doublebarwedge",!0);h(v,L,De,"⊟","\\boxminus",!0);h(v,L,De,"⊞","\\boxplus",!0);h(v,L,De,"⋇","\\divideontimes",!0);h(v,L,De,"⋉","\\ltimes",!0);h(v,L,De,"⋊","\\rtimes",!0);h(v,L,De,"⋋","\\leftthreetimes",!0);h(v,L,De,"⋌","\\rightthreetimes",!0);h(v,L,De,"⋏","\\curlywedge",!0);h(v,L,De,"⋎","\\curlyvee",!0);h(v,L,De,"⊝","\\circleddash",!0);h(v,L,De,"⊛","\\circledast",!0);h(v,L,De,"⋅","\\centerdot");h(v,L,De,"⊺","\\intercal",!0);h(v,L,De,"⋒","\\doublecap");h(v,L,De,"⋓","\\doublecup");h(v,L,De,"⊠","\\boxtimes",!0);h(v,L,N,"⇢","\\dashrightarrow",!0);h(v,L,N,"⇠","\\dashleftarrow",!0);h(v,L,N,"⇇","\\leftleftarrows",!0);h(v,L,N,"⇆","\\leftrightarrows",!0);h(v,L,N,"⇚","\\Lleftarrow",!0);h(v,L,N,"↞","\\twoheadleftarrow",!0);h(v,L,N,"↢","\\leftarrowtail",!0);h(v,L,N,"↫","\\looparrowleft",!0);h(v,L,N,"⇋","\\leftrightharpoons",!0);h(v,L,N,"↶","\\curvearrowleft",!0);h(v,L,N,"↺","\\circlearrowleft",!0);h(v,L,N,"↰","\\Lsh",!0);h(v,L,N,"⇈","\\upuparrows",!0);h(v,L,N,"↿","\\upharpoonleft",!0);h(v,L,N,"⇃","\\downharpoonleft",!0);h(v,b,N,"⊶","\\origof",!0);h(v,b,N,"⊷","\\imageof",!0);h(v,L,N,"⊸","\\multimap",!0);h(v,L,N,"↭","\\leftrightsquigarrow",!0);h(v,L,N,"⇉","\\rightrightarrows",!0);h(v,L,N,"⇄","\\rightleftarrows",!0);h(v,L,N,"↠","\\twoheadrightarrow",!0);h(v,L,N,"↣","\\rightarrowtail",!0);h(v,L,N,"↬","\\looparrowright",!0);h(v,L,N,"↷","\\curvearrowright",!0);h(v,L,N,"↻","\\circlearrowright",!0);h(v,L,N,"↱","\\Rsh",!0);h(v,L,N,"⇊","\\downdownarrows",!0);h(v,L,N,"↾","\\upharpoonright",!0);h(v,L,N,"⇂","\\downharpoonright",!0);h(v,L,N,"⇝","\\rightsquigarrow",!0);h(v,L,N,"⇝","\\leadsto");h(v,L,N,"⇛","\\Rrightarrow",!0);h(v,L,N,"↾","\\restriction");h(v,b,k,"‘","`");h(v,b,k,"$","\\$");h(le,b,k,"$","\\$");h(le,b,k,"$","\\textdollar");h(v,b,k,"%","\\%");h(le,b,k,"%","\\%");h(v,b,k,"_","\\_");h(le,b,k,"_","\\_");h(le,b,k,"_","\\textunderscore");h(v,b,k,"∠","\\angle",!0);h(v,b,k,"∞","\\infty",!0);h(v,b,k,"′","\\prime");h(v,b,k,"△","\\triangle");h(v,b,k,"Γ","\\Gamma",!0);h(v,b,k,"Δ","\\Delta",!0);h(v,b,k,"Θ","\\Theta",!0);h(v,b,k,"Λ","\\Lambda",!0);h(v,b,k,"Ξ","\\Xi",!0);h(v,b,k,"Π","\\Pi",!0);h(v,b,k,"Σ","\\Sigma",!0);h(v,b,k,"Υ","\\Upsilon",!0);h(v,b,k,"Φ","\\Phi",!0);h(v,b,k,"Ψ","\\Psi",!0);h(v,b,k,"Ω","\\Omega",!0);h(v,b,k,"A","Α");h(v,b,k,"B","Β");h(v,b,k,"E","Ε");h(v,b,k,"Z","Ζ");h(v,b,k,"H","Η");h(v,b,k,"I","Ι");h(v,b,k,"K","Κ");h(v,b,k,"M","Μ");h(v,b,k,"N","Ν");h(v,b,k,"O","Ο");h(v,b,k,"P","Ρ");h(v,b,k,"T","Τ");h(v,b,k,"X","Χ");h(v,b,k,"¬","\\neg",!0);h(v,b,k,"¬","\\lnot");h(v,b,k,"⊤","\\top");h(v,b,k,"⊥","\\bot");h(v,b,k,"∅","\\emptyset");h(v,L,k,"∅","\\varnothing");h(v,b,qe,"α","\\alpha",!0);h(v,b,qe,"β","\\beta",!0);h(v,b,qe,"γ","\\gamma",!0);h(v,b,qe,"δ","\\delta",!0);h(v,b,qe,"ϵ","\\epsilon",!0);h(v,b,qe,"ζ","\\zeta",!0);h(v,b,qe,"η","\\eta",!0);h(v,b,qe,"θ","\\theta",!0);h(v,b,qe,"ι","\\iota",!0);h(v,b,qe,"κ","\\kappa",!0);h(v,b,qe,"λ","\\lambda",!0);h(v,b,qe,"μ","\\mu",!0);h(v,b,qe,"ν","\\nu",!0);h(v,b,qe,"ξ","\\xi",!0);h(v,b,qe,"ο","\\omicron",!0);h(v,b,qe,"π","\\pi",!0);h(v,b,qe,"ρ","\\rho",!0);h(v,b,qe,"σ","\\sigma",!0);h(v,b,qe,"τ","\\tau",!0);h(v,b,qe,"υ","\\upsilon",!0);h(v,b,qe,"ϕ","\\phi",!0);h(v,b,qe,"χ","\\chi",!0);h(v,b,qe,"ψ","\\psi",!0);h(v,b,qe,"ω","\\omega",!0);h(v,b,qe,"ε","\\varepsilon",!0);h(v,b,qe,"ϑ","\\vartheta",!0);h(v,b,qe,"ϖ","\\varpi",!0);h(v,b,qe,"ϱ","\\varrho",!0);h(v,b,qe,"ς","\\varsigma",!0);h(v,b,qe,"φ","\\varphi",!0);h(v,b,De,"∗","*",!0);h(v,b,De,"+","+");h(v,b,De,"−","-",!0);h(v,b,De,"⋅","\\cdot",!0);h(v,b,De,"∘","\\circ",!0);h(v,b,De,"÷","\\div",!0);h(v,b,De,"±","\\pm",!0);h(v,b,De,"×","\\times",!0);h(v,b,De,"∩","\\cap",!0);h(v,b,De,"∪","\\cup",!0);h(v,b,De,"∖","\\setminus",!0);h(v,b,De,"∧","\\land");h(v,b,De,"∨","\\lor");h(v,b,De,"∧","\\wedge",!0);h(v,b,De,"∨","\\vee",!0);h(v,b,k,"√","\\surd");h(v,b,Rn,"⟨","\\langle",!0);h(v,b,Rn,"∣","\\lvert");h(v,b,Rn,"∥","\\lVert");h(v,b,dn,"?","?");h(v,b,dn,"!","!");h(v,b,dn,"⟩","\\rangle",!0);h(v,b,dn,"∣","\\rvert");h(v,b,dn,"∥","\\rVert");h(v,b,N,"=","=");h(v,b,N,":",":");h(v,b,N,"≈","\\approx",!0);h(v,b,N,"≅","\\cong",!0);h(v,b,N,"≥","\\ge");h(v,b,N,"≥","\\geq",!0);h(v,b,N,"←","\\gets");h(v,b,N,">","\\gt",!0);h(v,b,N,"∈","\\in",!0);h(v,b,N,"","\\@not");h(v,b,N,"⊂","\\subset",!0);h(v,b,N,"⊃","\\supset",!0);h(v,b,N,"⊆","\\subseteq",!0);h(v,b,N,"⊇","\\supseteq",!0);h(v,L,N,"⊈","\\nsubseteq",!0);h(v,L,N,"⊉","\\nsupseteq",!0);h(v,b,N,"⊨","\\models");h(v,b,N,"←","\\leftarrow",!0);h(v,b,N,"≤","\\le");h(v,b,N,"≤","\\leq",!0);h(v,b,N,"<","\\lt",!0);h(v,b,N,"→","\\rightarrow",!0);h(v,b,N,"→","\\to");h(v,L,N,"≱","\\ngeq",!0);h(v,L,N,"≰","\\nleq",!0);h(v,b,Sr," ","\\ ");h(v,b,Sr," ","\\space");h(v,b,Sr," ","\\nobreakspace");h(le,b,Sr," ","\\ ");h(le,b,Sr," "," ");h(le,b,Sr," ","\\space");h(le,b,Sr," ","\\nobreakspace");h(v,b,Sr,null,"\\nobreak");h(v,b,Sr,null,"\\allowbreak");h(v,b,Is,",",",");h(v,b,Is,";",";");h(v,L,De,"⊼","\\barwedge",!0);h(v,L,De,"⊻","\\veebar",!0);h(v,b,De,"⊙","\\odot",!0);h(v,b,De,"⊕","\\oplus",!0);h(v,b,De,"⊗","\\otimes",!0);h(v,b,k,"∂","\\partial",!0);h(v,b,De,"⊘","\\oslash",!0);h(v,L,De,"⊚","\\circledcirc",!0);h(v,L,De,"⊡","\\boxdot",!0);h(v,b,De,"△","\\bigtriangleup");h(v,b,De,"▽","\\bigtriangledown");h(v,b,De,"†","\\dagger");h(v,b,De,"⋄","\\diamond");h(v,b,De,"⋆","\\star");h(v,b,De,"◃","\\triangleleft");h(v,b,De,"▹","\\triangleright");h(v,b,Rn,"{","\\{");h(le,b,k,"{","\\{");h(le,b,k,"{","\\textbraceleft");h(v,b,dn,"}","\\}");h(le,b,k,"}","\\}");h(le,b,k,"}","\\textbraceright");h(v,b,Rn,"{","\\lbrace");h(v,b,dn,"}","\\rbrace");h(v,b,Rn,"[","\\lbrack",!0);h(le,b,k,"[","\\lbrack",!0);h(v,b,dn,"]","\\rbrack",!0);h(le,b,k,"]","\\rbrack",!0);h(v,b,Rn,"(","\\lparen",!0);h(v,b,dn,")","\\rparen",!0);h(le,b,k,"<","\\textless",!0);h(le,b,k,">","\\textgreater",!0);h(v,b,Rn,"⌊","\\lfloor",!0);h(v,b,dn,"⌋","\\rfloor",!0);h(v,b,Rn,"⌈","\\lceil",!0);h(v,b,dn,"⌉","\\rceil",!0);h(v,b,k,"\\","\\backslash");h(v,b,k,"∣","|");h(v,b,k,"∣","\\vert");h(le,b,k,"|","\\textbar",!0);h(v,b,k,"∥","\\|");h(v,b,k,"∥","\\Vert");h(le,b,k,"∥","\\textbardbl");h(le,b,k,"~","\\textasciitilde");h(le,b,k,"\\","\\textbackslash");h(le,b,k,"^","\\textasciicircum");h(v,b,N,"↑","\\uparrow",!0);h(v,b,N,"⇑","\\Uparrow",!0);h(v,b,N,"↓","\\downarrow",!0);h(v,b,N,"⇓","\\Downarrow",!0);h(v,b,N,"↕","\\updownarrow",!0);h(v,b,N,"⇕","\\Updownarrow",!0);h(v,b,Yt,"∐","\\coprod");h(v,b,Yt,"⋁","\\bigvee");h(v,b,Yt,"⋀","\\bigwedge");h(v,b,Yt,"⨄","\\biguplus");h(v,b,Yt,"⋂","\\bigcap");h(v,b,Yt,"⋃","\\bigcup");h(v,b,Yt,"∫","\\int");h(v,b,Yt,"∫","\\intop");h(v,b,Yt,"∬","\\iint");h(v,b,Yt,"∭","\\iiint");h(v,b,Yt,"∏","\\prod");h(v,b,Yt,"∑","\\sum");h(v,b,Yt,"⨂","\\bigotimes");h(v,b,Yt,"⨁","\\bigoplus");h(v,b,Yt,"⨀","\\bigodot");h(v,b,Yt,"∮","\\oint");h(v,b,Yt,"∯","\\oiint");h(v,b,Yt,"∰","\\oiiint");h(v,b,Yt,"⨆","\\bigsqcup");h(v,b,Yt,"∫","\\smallint");h(le,b,ea,"…","\\textellipsis");h(v,b,ea,"…","\\mathellipsis");h(le,b,ea,"…","\\ldots",!0);h(v,b,ea,"…","\\ldots",!0);h(v,b,ea,"⋯","\\@cdots",!0);h(v,b,ea,"⋱","\\ddots",!0);h(v,b,k,"⋮","\\varvdots");h(le,b,k,"⋮","\\varvdots");h(v,b,kt,"ˊ","\\acute");h(v,b,kt,"ˋ","\\grave");h(v,b,kt,"¨","\\ddot");h(v,b,kt,"~","\\tilde");h(v,b,kt,"ˉ","\\bar");h(v,b,kt,"˘","\\breve");h(v,b,kt,"ˇ","\\check");h(v,b,kt,"^","\\hat");h(v,b,kt,"⃗","\\vec");h(v,b,kt,"˙","\\dot");h(v,b,kt,"˚","\\mathring");h(v,b,qe,"","\\@imath");h(v,b,qe,"","\\@jmath");h(v,b,k,"ı","ı");h(v,b,k,"ȷ","ȷ");h(le,b,k,"ı","\\i",!0);h(le,b,k,"ȷ","\\j",!0);h(le,b,k,"ß","\\ss",!0);h(le,b,k,"æ","\\ae",!0);h(le,b,k,"œ","\\oe",!0);h(le,b,k,"ø","\\o",!0);h(le,b,k,"Æ","\\AE",!0);h(le,b,k,"Œ","\\OE",!0);h(le,b,k,"Ø","\\O",!0);h(le,b,kt,"ˊ","\\'");h(le,b,kt,"ˋ","\\`");h(le,b,kt,"ˆ","\\^");h(le,b,kt,"˜","\\~");h(le,b,kt,"ˉ","\\=");h(le,b,kt,"˘","\\u");h(le,b,kt,"˙","\\.");h(le,b,kt,"¸","\\c");h(le,b,kt,"˚","\\r");h(le,b,kt,"ˇ","\\v");h(le,b,kt,"¨",'\\"');h(le,b,kt,"˝","\\H");h(le,b,kt,"◯","\\textcircled");var Ou={"--":!0,"---":!0,"``":!0,"''":!0};h(le,b,k,"–","--",!0);h(le,b,k,"–","\\textendash");h(le,b,k,"—","---",!0);h(le,b,k,"—","\\textemdash");h(le,b,k,"‘","`",!0);h(le,b,k,"‘","\\textquoteleft");h(le,b,k,"’","'",!0);h(le,b,k,"’","\\textquoteright");h(le,b,k,"“","``",!0);h(le,b,k,"“","\\textquotedblleft");h(le,b,k,"”","''",!0);h(le,b,k,"”","\\textquotedblright");h(v,b,k,"°","\\degree",!0);h(le,b,k,"°","\\degree");h(le,b,k,"°","\\textdegree",!0);h(v,b,k,"£","\\pounds");h(v,b,k,"£","\\mathsterling",!0);h(le,b,k,"£","\\pounds");h(le,b,k,"£","\\textsterling",!0);h(v,L,k,"✠","\\maltese");h(le,L,k,"✠","\\maltese");var pc='0123456789/@."';for(var So=0;So<pc.length;So++){var gc=pc.charAt(So);h(v,b,k,gc,gc)}var vc='0123456789!@*()-=+";:?/.,';for(var Mo=0;Mo<vc.length;Mo++){var _c=vc.charAt(Mo);h(le,b,k,_c,_c)}var ws="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var wo=0;wo<ws.length;wo++){var rs=ws.charAt(wo);h(v,b,qe,rs,rs),h(le,b,k,rs,rs)}h(v,L,k,"C","ℂ");h(le,L,k,"C","ℂ");h(v,L,k,"H","ℍ");h(le,L,k,"H","ℍ");h(v,L,k,"N","ℕ");h(le,L,k,"N","ℕ");h(v,L,k,"P","ℙ");h(le,L,k,"P","ℙ");h(v,L,k,"Q","ℚ");h(le,L,k,"Q","ℚ");h(v,L,k,"R","ℝ");h(le,L,k,"R","ℝ");h(v,L,k,"Z","ℤ");h(le,L,k,"Z","ℤ");h(v,b,qe,"h","ℎ");h(le,b,qe,"h","ℎ");var Qe="";for(var cn=0;cn<ws.length;cn++){var Bt=ws.charAt(cn);Qe=String.fromCharCode(55349,56320+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56372+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56424+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56580+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56684+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56736+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56788+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56840+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56944+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),cn<26&&(Qe=String.fromCharCode(55349,56632+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe),Qe=String.fromCharCode(55349,56476+cn),h(v,b,qe,Bt,Qe),h(le,b,k,Bt,Qe))}Qe="𝕜";h(v,b,qe,"k",Qe);h(le,b,k,"k",Qe);for(var ei=0;ei<10;ei++){var Ur=ei.toString();Qe=String.fromCharCode(55349,57294+ei),h(v,b,qe,Ur,Qe),h(le,b,k,Ur,Qe),Qe=String.fromCharCode(55349,57314+ei),h(v,b,qe,Ur,Qe),h(le,b,k,Ur,Qe),Qe=String.fromCharCode(55349,57324+ei),h(v,b,qe,Ur,Qe),h(le,b,k,Ur,Qe),Qe=String.fromCharCode(55349,57334+ei),h(v,b,qe,Ur,Qe),h(le,b,k,Ur,Qe)}var Jo="ÐÞþ";for(var Eo=0;Eo<Jo.length;Eo++){var is=Jo.charAt(Eo);h(v,b,qe,is,is),h(le,b,k,is,is)}var as=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],xc=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],rg=function(e,t){var r=e.charCodeAt(0),i=e.charCodeAt(1),a=(r-55296)*1024+(i-56320)+65536,s=t==="math"?0:1;if(119808<=a&&a<120484){var o=Math.floor((a-119808)/26);return[as[o][2],as[o][s]]}else if(120782<=a&&a<=120831){var l=Math.floor((a-120782)/10);return[xc[l][2],xc[l][s]]}else{if(a===120485||a===120486)return[as[0][2],as[0][s]];if(120486<a&&a<120782)return["",""];throw new me("Unsupported character: "+e)}},Us=function(e,t,r){return Ct[r][e]&&Ct[r][e].replace&&(e=Ct[r][e].replace),{value:e,metrics:f0(e,t,r)}},zn=function(e,t,r,i,a){var s=Us(e,t,r),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(r==="text"||i&&i.font==="mathit")&&(c=0),l=new In(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+r+"'")),l=new In(e,0,0,0,0,0,a);if(i){l.maxFontSize=i.sizeMultiplier,i.style.isTight()&&l.classes.push("mtight");var u=i.getColor();u&&(l.style.color=u)}return l},ig=function(e,t,r,i){return i===void 0&&(i=[]),r.font==="boldsymbol"&&Us(e,"Main-Bold",t).metrics?zn(e,"Main-Bold",t,r,i.concat(["mathbf"])):e==="\\"||Ct[t][e].font==="main"?zn(e,"Main-Regular",t,r,i):zn(e,"AMS-Regular",t,r,i.concat(["amsrm"]))},ag=function(e,t,r,i,a){return a!=="textord"&&Us(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},sg=function(e,t,r){var i=e.mode,a=e.text,s=["mord"],o=i==="math"||i==="text"&&t.font,l=o?t.font:t.fontFamily,c="",u="";if(a.charCodeAt(0)===55349&&([c,u]=rg(a,i)),c.length>0)return zn(a,c,i,t,s.concat(u));if(l){var d,p;if(l==="boldsymbol"){var _=ag(a,i,t,s,r);d=_.fontName,p=[_.fontClass]}else o?(d=Hu[l].fontName,p=[l]):(d=ss(l,t.fontWeight,t.fontShape),p=[l,t.fontWeight,t.fontShape]);if(Us(a,d,i).metrics)return zn(a,d,i,t,s.concat(p));if(Ou.hasOwnProperty(a)&&d.slice(0,10)==="Typewriter"){for(var x=[],g=0;g<a.length;g++)x.push(zn(a[g],d,i,t,s.concat(p)));return Bu(x)}}if(r==="mathord")return zn(a,"Math-Italic",i,t,s.concat(["mathnormal"]));if(r==="textord"){var m=Ct[i][a]&&Ct[i][a].font;if(m==="ams"){var f=ss("amsrm",t.fontWeight,t.fontShape);return zn(a,f,i,t,s.concat("amsrm",t.fontWeight,t.fontShape))}else if(m==="main"||!m){var S=ss("textrm",t.fontWeight,t.fontShape);return zn(a,S,i,t,s.concat(t.fontWeight,t.fontShape))}else{var y=ss(m,t.fontWeight,t.fontShape);return zn(a,y,i,t,s.concat(y,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+r+" in makeOrd")},og=(n,e)=>{if(Vr(n.classes)!==Vr(e.classes)||n.skew!==e.skew||n.maxFontSize!==e.maxFontSize)return!1;if(n.classes.length===1){var t=n.classes[0];if(t==="mbin"||t==="mord")return!1}for(var r in n.style)if(n.style.hasOwnProperty(r)&&n.style[r]!==e.style[r])return!1;for(var i in e.style)if(e.style.hasOwnProperty(i)&&n.style[i]!==e.style[i])return!1;return!0},lg=n=>{for(var e=0;e<n.length-1;e++){var t=n[e],r=n[e+1];t instanceof In&&r instanceof In&&og(t,r)&&(t.text+=r.text,t.height=Math.max(t.height,r.height),t.depth=Math.max(t.depth,r.depth),t.italic=r.italic,n.splice(e+1,1),e--)}return n},p0=function(e){for(var t=0,r=0,i=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>r&&(r=s.depth),s.maxFontSize>i&&(i=s.maxFontSize)}e.height=t,e.depth=r,e.maxFontSize=i},pn=function(e,t,r,i){var a=new Ta(e,t,r,i);return p0(a),a},zu=(n,e,t,r)=>new Ta(n,e,t,r),cg=function(e,t,r){var i=pn([e],[],t);return i.height=Math.max(r||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),i.style.borderBottomWidth=xe(i.height),i.maxFontSize=1,i},ug=function(e,t,r,i){var a=new m0(e,t,r,i);return p0(a),a},Bu=function(e){var t=new Ea(e);return p0(t),t},hg=function(e,t){return e instanceof Ea?pn([],[e],t):e},dg=function(e){if(e.positionType==="individualShift"){for(var t=e.children,r=[t[0]],i=-t[0].shift-t[0].elem.depth,a=i,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,r.push({type:"kern",size:l}),r.push(t[s])}return{children:r,depth:i}}var c;if(e.positionType==="top"){for(var u=e.positionData,d=0;d<e.children.length;d++){var p=e.children[d];u-=p.type==="kern"?p.size:p.elem.height+p.elem.depth}c=u}else if(e.positionType==="bottom")c=-e.positionData;else{var _=e.children[0];if(_.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-_.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-_.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},fg=function(e,t){for(var{children:r,depth:i}=dg(e),a=0,s=0;s<r.length;s++){var o=r[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=pn(["pstrut"],[]);c.style.height=xe(a);for(var u=[],d=i,p=i,_=i,x=0;x<r.length;x++){var g=r[x];if(g.type==="kern")_+=g.size;else{var m=g.elem,f=g.wrapperClasses||[],S=g.wrapperStyle||{},y=pn(f,[c,m],void 0,S);y.style.top=xe(-a-_-m.depth),g.marginLeft&&(y.style.marginLeft=g.marginLeft),g.marginRight&&(y.style.marginRight=g.marginRight),u.push(y),_+=m.height+m.depth}d=Math.min(d,_),p=Math.max(p,_)}var A=pn(["vlist"],u);A.style.height=xe(p);var I;if(d<0){var P=pn([],[]),D=pn(["vlist"],[P]);D.style.height=xe(-d);var K=pn(["vlist-s"],[new In("​")]);I=[pn(["vlist-r"],[A,K]),pn(["vlist-r"],[D])]}else I=[pn(["vlist-r"],[A])];var w=pn(["vlist-t"],I);return I.length===2&&w.classes.push("vlist-t2"),w.height=p,w.depth=-d,w},mg=(n,e)=>{var t=pn(["mspace"],[],e),r=zt(n,e);return t.style.marginRight=xe(r),t},ss=function(e,t,r){var i="";switch(e){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=e}var a;return t==="textbf"&&r==="textit"?a="BoldItalic":t==="textbf"?a="Bold":t==="textit"?a="Italic":a="Regular",i+"-"+a},Hu={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Gu={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},pg=function(e,t){var[r,i,a]=Gu[e],s=new Wr(r),o=new xr([s],{width:xe(i),height:xe(a),style:"width:"+xe(i),viewBox:"0 0 "+1e3*i+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=zu(["overlay"],[o],t);return l.height=a,l.style.height=xe(a),l.style.width=xe(i),l},H={fontMap:Hu,makeSymbol:zn,mathsym:ig,makeSpan:pn,makeSvgSpan:zu,makeLineSpan:cg,makeAnchor:ug,makeFragment:Bu,wrapFragment:hg,makeVList:fg,makeOrd:sg,makeGlue:mg,staticSvg:pg,svgData:Gu,tryCombineChars:lg},Ot={number:3,unit:"mu"},ti={number:4,unit:"mu"},ur={number:5,unit:"mu"},gg={mord:{mop:Ot,mbin:ti,mrel:ur,minner:Ot},mop:{mord:Ot,mop:Ot,mrel:ur,minner:Ot},mbin:{mord:ti,mop:ti,mopen:ti,minner:ti},mrel:{mord:ur,mop:ur,mopen:ur,minner:ur},mopen:{},mclose:{mop:Ot,mbin:ti,mrel:ur,minner:Ot},mpunct:{mord:Ot,mop:Ot,mrel:ur,mopen:Ot,mclose:Ot,mpunct:Ot,minner:Ot},minner:{mord:Ot,mop:Ot,mbin:ti,mrel:ur,mopen:Ot,mpunct:Ot,minner:Ot}},vg={mord:{mop:Ot},mop:{mord:Ot,mop:Ot},mbin:{},mrel:{},mopen:{},mclose:{mop:Ot},mpunct:{},minner:{mop:Ot}},Vu={},Es={},Ts={};function Te(n){for(var{type:e,names:t,props:r,handler:i,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:r.numArgs,argTypes:r.argTypes,allowedInArgument:!!r.allowedInArgument,allowedInText:!!r.allowedInText,allowedInMath:r.allowedInMath===void 0?!0:r.allowedInMath,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,primitive:!!r.primitive,handler:i},l=0;l<t.length;++l)Vu[t[l]]=o;e&&(a&&(Es[e]=a),s&&(Ts[e]=s))}function di(n){var{type:e,htmlBuilder:t,mathmlBuilder:r}=n;Te({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:r})}var As=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Wt=function(e){return e.type==="ordgroup"?e.body:[e]},br=H.makeSpan,_g=["leftmost","mbin","mopen","mrel","mop","mpunct"],xg=["rightmost","mrel","mclose","mpunct"],bg={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT},yg={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Jt=function(e,t,r,i){i===void 0&&(i=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=ht(e[s],t);if(o instanceof Ea){var l=o.children;a.push(...l)}else a.push(o)}if(H.tryCombineChars(a),!r)return a;var c=t;if(e.length===1){var u=e[0];u.type==="sizing"?c=t.havingSize(u.size):u.type==="styling"&&(c=t.havingStyle(bg[u.style]))}var d=br([i[0]||"leftmost"],[],t),p=br([i[1]||"rightmost"],[],t),_=r==="root";return bc(a,(x,g)=>{var m=g.classes[0],f=x.classes[0];m==="mbin"&&xg.includes(f)?g.classes[0]="mord":f==="mbin"&&_g.includes(m)&&(x.classes[0]="mord")},{node:d},p,_),bc(a,(x,g)=>{var m=Qo(g),f=Qo(x),S=m&&f?x.hasClass("mtight")?vg[m][f]:gg[m][f]:null;if(S)return H.makeGlue(S,c)},{node:d},p,_),a},bc=function n(e,t,r,i,a){i&&e.push(i);for(var s=0;s<e.length;s++){var o=e[s],l=Wu(o);if(l){n(l.children,t,r,null,a);continue}var c=!o.hasClass("mspace");if(c){var u=t(o,r.node);u&&(r.insertAfter?r.insertAfter(u):(e.unshift(u),s++))}c?r.node=o:a&&o.hasClass("newline")&&(r.node=br(["leftmost"])),r.insertAfter=(d=>p=>{e.splice(d+1,0,p),s++})(s)}i&&e.pop()},Wu=function(e){return e instanceof Ea||e instanceof m0||e instanceof Ta&&e.hasClass("enclosing")?e:null},Sg=function n(e,t){var r=Wu(e);if(r){var i=r.children;if(i.length){if(t==="right")return n(i[i.length-1],"right");if(t==="left")return n(i[0],"left")}}return e},Qo=function(e,t){return e?(t&&(e=Sg(e,t)),yg[e.classes[0]]||null):null},xa=function(e,t){var r=["nulldelimiter"].concat(e.baseSizingClasses());return br(t.concat(r))},ht=function(e,t,r){if(!e)return br();if(Es[e.type]){var i=Es[e.type](e,t);if(r&&t.size!==r.size){i=br(t.sizingClasses(r),[i],t);var a=t.sizeMultiplier/r.sizeMultiplier;i.height*=a,i.depth*=a}return i}else throw new me("Got group of unknown type: '"+e.type+"'")};function os(n,e){var t=br(["base"],n,e),r=br(["strut"]);return r.style.height=xe(t.height+t.depth),t.depth&&(r.style.verticalAlign=xe(-t.depth)),t.children.unshift(r),t}function e0(n,e){var t=null;n.length===1&&n[0].type==="tag"&&(t=n[0].tag,n=n[0].body);var r=Jt(n,e,"root"),i;r.length===2&&r[1].hasClass("tag")&&(i=r.pop());for(var a=[],s=[],o=0;o<r.length;o++)if(s.push(r[o]),r[o].hasClass("mbin")||r[o].hasClass("mrel")||r[o].hasClass("allowbreak")){for(var l=!1;o<r.length-1&&r[o+1].hasClass("mspace")&&!r[o+1].hasClass("newline");)o++,s.push(r[o]),r[o].hasClass("nobreak")&&(l=!0);l||(a.push(os(s,e)),s=[])}else r[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(os(s,e)),s=[]),a.push(r[o]));s.length>0&&a.push(os(s,e));var c;t?(c=os(Jt(t,e,!0)),c.classes=["tag"],a.push(c)):i&&a.push(i);var u=br(["katex-html"],a);if(u.setAttribute("aria-hidden","true"),c){var d=c.children[0];d.style.height=xe(u.height+u.depth),u.depth&&(d.style.verticalAlign=xe(-u.depth))}return u}function qu(n){return new Ea(n)}class En{constructor(e,t,r){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=r||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Vr(this.classes));for(var r=0;r<this.children.length;r++)if(this.children[r]instanceof Jn&&this.children[r+1]instanceof Jn){for(var i=this.children[r].toText()+this.children[++r].toText();this.children[r+1]instanceof Jn;)i+=this.children[++r].toText();e.appendChild(new Jn(i).toNode())}else e.appendChild(this.children[r].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=ft.escape(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+ft.escape(Vr(this.classes))+'"'),e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Jn{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return ft.escape(this.toText())}toText(){return this.text}}class Mg{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",xe(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+xe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var he={MathNode:En,TextNode:Jn,SpaceNode:Mg,newDocumentFragment:qu},Un=function(e,t,r){return Ct[t][e]&&Ct[t][e].replace&&e.charCodeAt(0)!==55349&&!(Ou.hasOwnProperty(e)&&r&&(r.fontFamily&&r.fontFamily.slice(4,6)==="tt"||r.font&&r.font.slice(4,6)==="tt"))&&(e=Ct[t][e].replace),new he.TextNode(e)},g0=function(e){return e.length===1?e[0]:new he.MathNode("mrow",e)},v0=function(e,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var r=t.font;if(!r||r==="mathnormal")return null;var i=e.mode;if(r==="mathit")return"italic";if(r==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(r==="mathbf")return"bold";if(r==="mathbb")return"double-struck";if(r==="mathsfit")return"sans-serif-italic";if(r==="mathfrak")return"fraktur";if(r==="mathscr"||r==="mathcal")return"script";if(r==="mathsf")return"sans-serif";if(r==="mathtt")return"monospace";var a=e.text;if(["\\imath","\\jmath"].includes(a))return null;Ct[i][a]&&Ct[i][a].replace&&(a=Ct[i][a].replace);var s=H.fontMap[r].fontName;return f0(a,s,i)?H.fontMap[r].variant:null};function To(n){if(!n)return!1;if(n.type==="mi"&&n.children.length===1){var e=n.children[0];return e instanceof Jn&&e.text==="."}else if(n.type==="mo"&&n.children.length===1&&n.getAttribute("separator")==="true"&&n.getAttribute("lspace")==="0em"&&n.getAttribute("rspace")==="0em"){var t=n.children[0];return t instanceof Jn&&t.text===","}else return!1}var bn=function(e,t,r){if(e.length===1){var i=Et(e[0],t);return r&&i instanceof En&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var a=[],s,o=0;o<e.length;o++){var l=Et(e[o],t);if(l instanceof En&&s instanceof En){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(To(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&To(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||To(s))){var c=l.children[0];c instanceof En&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var u=s.children[0];if(u instanceof Jn&&u.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var d=l.children[0];d instanceof Jn&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),a.pop())}}}a.push(l),s=l}return a},qr=function(e,t,r){return g0(bn(e,t,r))},Et=function(e,t){if(!e)return new he.MathNode("mrow");if(Ts[e.type]){var r=Ts[e.type](e,t);return r}else throw new me("Got group of unknown type: '"+e.type+"'")};function yc(n,e,t,r,i){var a=bn(n,t),s;a.length===1&&a[0]instanceof En&&["mrow","mtable"].includes(a[0].type)?s=a[0]:s=new he.MathNode("mrow",a);var o=new he.MathNode("annotation",[new he.TextNode(e)]);o.setAttribute("encoding","application/x-tex");var l=new he.MathNode("semantics",[s,o]),c=new he.MathNode("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),r&&c.setAttribute("display","block");var u=i?"katex":"katex-mathml";return H.makeSpan([u],[c])}var Xu=function(e){return new dr({style:e.displayMode?Xe.DISPLAY:Xe.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},$u=function(e,t){if(t.displayMode){var r=["katex-display"];t.leqno&&r.push("leqno"),t.fleqn&&r.push("fleqn"),e=H.makeSpan(r,[e])}return e},wg=function(e,t,r){var i=Xu(r),a;if(r.output==="mathml")return yc(e,t,i,r.displayMode,!0);if(r.output==="html"){var s=e0(e,i);a=H.makeSpan(["katex"],[s])}else{var o=yc(e,t,i,r.displayMode,!1),l=e0(e,i);a=H.makeSpan(["katex"],[o,l])}return $u(a,r)},Eg=function(e,t,r){var i=Xu(r),a=e0(e,i),s=H.makeSpan(["katex"],[a]);return $u(s,r)},Tg={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Ag=function(e){var t=new he.MathNode("mo",[new he.TextNode(Tg[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Rg={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Cg=function(e){return e.type==="ordgroup"?e.body.length:1},Dg=function(e,t){function r(){var o=4e5,l=e.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var c=e,u=Cg(c.base),d,p,_;if(u>5)l==="widehat"||l==="widecheck"?(d=420,o=2364,_=.42,p=l+"4"):(d=312,o=2340,_=.34,p="tilde4");else{var x=[1,1,2,2,3,3][u];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][x],d=[0,239,300,360,420][x],_=[0,.24,.3,.3,.36,.42][x],p=l+x):(o=[0,600,1033,2339,2340][x],d=[0,260,286,306,312][x],_=[0,.26,.286,.3,.306,.34][x],p="tilde"+x)}var g=new Wr(p),m=new xr([g],{width:"100%",height:xe(_),viewBox:"0 0 "+o+" "+d,preserveAspectRatio:"none"});return{span:H.makeSvgSpan([],[m],t),minWidth:0,height:_}}else{var f=[],S=Rg[l],[y,A,I]=S,P=I/1e3,D=y.length,K,w;if(D===1){var C=S[3];K=["hide-tail"],w=[C]}else if(D===2)K=["halfarrow-left","halfarrow-right"],w=["xMinYMin","xMaxYMin"];else if(D===3)K=["brace-left","brace-center","brace-right"],w=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+D+" children.");for(var B=0;B<D;B++){var W=new Wr(y[B]),ie=new xr([W],{width:"400em",height:xe(P),viewBox:"0 0 "+o+" "+I,preserveAspectRatio:w[B]+" slice"}),U=H.makeSvgSpan([K[B]],[ie],t);if(D===1)return{span:U,minWidth:A,height:P};U.style.height=xe(P),f.push(U)}return{span:H.makeSpan(["stretchy"],f,t),minWidth:A,height:P}}}var{span:i,minWidth:a,height:s}=r();return i.height=s,i.style.height=xe(s),a>0&&(i.style.minWidth=xe(a)),i},Lg=function(e,t,r,i,a){var s,o=e.height+e.depth+r+i;if(/fbox|color|angl/.test(t)){if(s=H.makeSpan(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new Zo({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new Zo({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new xr(c,{width:"100%",height:xe(o)});s=H.makeSvgSpan([],[u],a)}return s.height=o,s.style.height=xe(o),s},yr={encloseSpan:Lg,mathMLnode:Ag,svgSpan:Dg};function st(n,e){if(!n||n.type!==e)throw new Error("Expected node of type "+e+", but got "+(n?"node of type "+n.type:String(n)));return n}function _0(n){var e=Fs(n);if(!e)throw new Error("Expected node of symbol group type, but got "+(n?"node of type "+n.type:String(n)));return e}function Fs(n){return n&&(n.type==="atom"||ng.hasOwnProperty(n.type))?n:null}var x0=(n,e)=>{var t,r,i;n&&n.type==="supsub"?(r=st(n.base,"accent"),t=r.base,n.base=t,i=eg(ht(n,e)),n.base=r):(r=st(n,"accent"),t=r.base);var a=ht(t,e.havingCrampedStyle()),s=r.isShifty&&ft.isCharacterBox(t),o=0;if(s){var l=ft.getBaseElem(t),c=ht(l,e.havingCrampedStyle());o=mc(c).skew}var u=r.label==="\\c",d=u?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),p;if(r.isStretchy)p=yr.svgSpan(r,e),p=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:p,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+xe(2*o)+")",marginLeft:xe(2*o)}:void 0}]},e);else{var _,x;r.label==="\\vec"?(_=H.staticSvg("vec",e),x=H.svgData.vec[1]):(_=H.makeOrd({mode:r.mode,text:r.label},e,"textord"),_=mc(_),_.italic=0,x=_.width,u&&(d+=_.depth)),p=H.makeSpan(["accent-body"],[_]);var g=r.label==="\\textcircled";g&&(p.classes.push("accent-full"),d=a.height);var m=o;g||(m-=x/2),p.style.left=xe(m),r.label==="\\textcircled"&&(p.style.top=".2em"),p=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-d},{type:"elem",elem:p}]},e)}var f=H.makeSpan(["mord","accent"],[p],e);return i?(i.children[0]=f,i.height=Math.max(f.height,i.height),i.classes[0]="mord",i):f},Yu=(n,e)=>{var t=n.isStretchy?yr.mathMLnode(n.label):new he.MathNode("mo",[Un(n.label,n.mode)]),r=new he.MathNode("mover",[Et(n.base,e),t]);return r.setAttribute("accent","true"),r},Pg=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(n=>"\\"+n).join("|"));Te({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(n,e)=>{var t=As(e[0]),r=!Pg.test(n.funcName),i=!r||n.funcName==="\\widehat"||n.funcName==="\\widetilde"||n.funcName==="\\widecheck";return{type:"accent",mode:n.parser.mode,label:n.funcName,isStretchy:r,isShifty:i,base:t}},htmlBuilder:x0,mathmlBuilder:Yu});Te({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(n,e)=>{var t=e[0],r=n.parser.mode;return r==="math"&&(n.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+n.funcName+" works only in text mode"),r="text"),{type:"accent",mode:r,label:n.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:x0,mathmlBuilder:Yu});Te({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0];return{type:"accentUnder",mode:t.mode,label:r,base:i}},htmlBuilder:(n,e)=>{var t=ht(n.base,e),r=yr.svgSpan(n,e),i=n.label==="\\utilde"?.12:0,a=H.makeVList({positionType:"top",positionData:t.height,children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:t}]},e);return H.makeSpan(["mord","accentunder"],[a],e)},mathmlBuilder:(n,e)=>{var t=yr.mathMLnode(n.label),r=new he.MathNode("munder",[Et(n.base,e),t]);return r.setAttribute("accentunder","true"),r}});var ls=n=>{var e=new he.MathNode("mpadded",n?[n]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};Te({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:r,funcName:i}=n;return{type:"xArrow",mode:r.mode,label:i,body:e[0],below:t[0]}},htmlBuilder(n,e){var t=e.style,r=e.havingStyle(t.sup()),i=H.wrapFragment(ht(n.body,r,e),e),a=n.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(a+"-arrow-pad");var s;n.below&&(r=e.havingStyle(t.sub()),s=H.wrapFragment(ht(n.below,r,e),e),s.classes.push(a+"-arrow-pad"));var o=yr.svgSpan(n,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(i.depth>.25||n.label==="\\xleftequilibrium")&&(c-=i.depth);var u;if(s){var d=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;u=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:c},{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:d}]},e)}else u=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:c},{type:"elem",elem:o,shift:l}]},e);return u.children[0].children[0].children[1].classes.push("svg-align"),H.makeSpan(["mrel","x-arrow"],[u],e)},mathmlBuilder(n,e){var t=yr.mathMLnode(n.label);t.setAttribute("minsize",n.label.charAt(0)==="x"?"1.75em":"3.0em");var r;if(n.body){var i=ls(Et(n.body,e));if(n.below){var a=ls(Et(n.below,e));r=new he.MathNode("munderover",[t,a,i])}else r=new he.MathNode("mover",[t,i])}else if(n.below){var s=ls(Et(n.below,e));r=new he.MathNode("munder",[t,s])}else r=ls(),r=new he.MathNode("mover",[t,r]);return r}});var Ng=H.makeSpan;function Ku(n,e){var t=Jt(n.body,e,!0);return Ng([n.mclass],t,e)}function ju(n,e){var t,r=bn(n.body,e);return n.mclass==="minner"?t=new he.MathNode("mpadded",r):n.mclass==="mord"?n.isCharacterBox?(t=r[0],t.type="mi"):t=new he.MathNode("mi",r):(n.isCharacterBox?(t=r[0],t.type="mo"):t=new he.MathNode("mo",r),n.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):n.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):n.mclass==="mopen"||n.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):n.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}Te({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(n,e){var{parser:t,funcName:r}=n,i=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+r.slice(5),body:Wt(i),isCharacterBox:ft.isCharacterBox(i)}},htmlBuilder:Ku,mathmlBuilder:ju});var ks=n=>{var e=n.type==="ordgroup"&&n.body.length?n.body[0]:n;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};Te({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(n,e){var{parser:t}=n;return{type:"mclass",mode:t.mode,mclass:ks(e[0]),body:Wt(e[1]),isCharacterBox:ft.isCharacterBox(e[1])}}});Te({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(n,e){var{parser:t,funcName:r}=n,i=e[1],a=e[0],s;r!=="\\stackrel"?s=ks(i):s="mrel";var o={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!=="\\stackrel",body:Wt(i)},l={type:"supsub",mode:a.mode,base:o,sup:r==="\\underset"?null:a,sub:r==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:ft.isCharacterBox(l)}},htmlBuilder:Ku,mathmlBuilder:ju});Te({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"pmb",mode:t.mode,mclass:ks(e[0]),body:Wt(e[0])}},htmlBuilder(n,e){var t=Jt(n.body,e,!0),r=H.makeSpan([n.mclass],t,e);return r.style.textShadow="0.02em 0.01em 0.04px",r},mathmlBuilder(n,e){var t=bn(n.body,e),r=new he.MathNode("mstyle",t);return r.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),r}});var Ig={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Sc=()=>({type:"styling",body:[],mode:"math",style:"display"}),Mc=n=>n.type==="textord"&&n.text==="@",Ug=(n,e)=>(n.type==="mathord"||n.type==="atom")&&n.text===e;function Fg(n,e,t){var r=Ig[n];switch(r){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(r,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var i=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:r,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[i,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function kg(n){var e=[];for(n.gullet.beginGroup(),n.gullet.macros.set("\\cr","\\\\\\relax"),n.gullet.beginGroup();;){e.push(n.parseExpression(!1,"\\\\")),n.gullet.endGroup(),n.gullet.beginGroup();var t=n.fetch().text;if(t==="&"||t==="\\\\")n.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new me("Expected \\\\ or \\cr or \\end",n.nextToken)}for(var r=[],i=[r],a=0;a<e.length;a++){for(var s=e[a],o=Sc(),l=0;l<s.length;l++)if(!Mc(s[l]))o.body.push(s[l]);else{r.push(o),l+=1;var c=_0(s[l]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(c)>-1))if("<>AV".indexOf(c)>-1)for(var d=0;d<2;d++){for(var p=!0,_=l+1;_<s.length;_++){if(Ug(s[_],c)){p=!1,l=_;break}if(Mc(s[_]))throw new me("Missing a "+c+" character to complete a CD arrow.",s[_]);u[d].body.push(s[_])}if(p)throw new me("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new me('Expected one of "<>AV=|." after @',s[l]);var x=Fg(c,u,n),g={type:"styling",body:[x],mode:"math",style:"display"};r.push(g),o=Sc()}a%2===0?r.push(o):r.shift(),r=[],i.push(r)}n.gullet.endGroup(),n.gullet.endGroup();var m=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:m,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}Te({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:r}=n;return{type:"cdlabel",mode:t.mode,side:r.slice(4),label:e[0]}},htmlBuilder(n,e){var t=e.havingStyle(e.style.sup()),r=H.wrapFragment(ht(n.label,t,e),e);return r.classes.push("cd-label-"+n.side),r.style.bottom=xe(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(n,e){var t=new he.MathNode("mrow",[Et(n.label,e)]);return t=new he.MathNode("mpadded",[t]),t.setAttribute("width","0"),n.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new he.MathNode("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});Te({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(n,e){var{parser:t}=n;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(n,e){var t=H.wrapFragment(ht(n.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(n,e){return new he.MathNode("mrow",[Et(n.fragment,e)])}});Te({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(n,e){for(var{parser:t}=n,r=st(e[0],"ordgroup"),i=r.body,a="",s=0;s<i.length;s++){var o=st(i[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new me("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new me("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Zu=(n,e)=>{var t=Jt(n.body,e.withColor(n.color),!1);return H.makeFragment(t)},Ju=(n,e)=>{var t=bn(n.body,e.withColor(n.color)),r=new he.MathNode("mstyle",t);return r.setAttribute("mathcolor",n.color),r};Te({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(n,e){var{parser:t}=n,r=st(e[0],"color-token").color,i=e[1];return{type:"color",mode:t.mode,color:r,body:Wt(i)}},htmlBuilder:Zu,mathmlBuilder:Ju});Te({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(n,e){var{parser:t,breakOnTokenText:r}=n,i=st(e[0],"color-token").color;t.gullet.macros.set("\\current@color",i);var a=t.parseExpression(!0,r);return{type:"color",mode:t.mode,color:i,body:a}},htmlBuilder:Zu,mathmlBuilder:Ju});Te({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(n,e,t){var{parser:r}=n,i=r.gullet.future().text==="["?r.parseSizeGroup(!0):null,a=!r.settings.displayMode||!r.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:r.mode,newLine:a,size:i&&st(i,"size").value}},htmlBuilder(n,e){var t=H.makeSpan(["mspace"],[],e);return n.newLine&&(t.classes.push("newline"),n.size&&(t.style.marginTop=xe(zt(n.size,e)))),t},mathmlBuilder(n,e){var t=new he.MathNode("mspace");return n.newLine&&(t.setAttribute("linebreak","newline"),n.size&&t.setAttribute("height",xe(zt(n.size,e)))),t}});var t0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Qu=n=>{var e=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new me("Expected a control sequence",n);return e},Og=n=>{var e=n.gullet.popToken();return e.text==="="&&(e=n.gullet.popToken(),e.text===" "&&(e=n.gullet.popToken())),e},eh=(n,e,t,r)=>{var i=n.gullet.macros.get(t.text);i==null&&(t.noexpand=!0,i={tokens:[t],numArgs:0,unexpandable:!n.gullet.isExpandable(t.text)}),n.gullet.macros.set(e,i,r)};Te({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(n){var{parser:e,funcName:t}=n;e.consumeSpaces();var r=e.fetch();if(t0[r.text])return(t==="\\global"||t==="\\\\globallong")&&(r.text=t0[r.text]),st(e.parseFunction(),"internal");throw new me("Invalid token after macro prefix",r)}});Te({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,r=e.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new me("Expected a control sequence",r);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(r=e.gullet.popToken(),r.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(r=e.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new me('Invalid argument number "'+r.text+'"');if(parseInt(r.text)!==a+1)throw new me('Argument number "'+r.text+'" out of order');a++,o.push([])}else{if(r.text==="EOF")throw new me("Expected a macro definition");o[a].push(r.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(i,{tokens:l,numArgs:a,delimiters:o},t===t0[t]),{type:"internal",mode:e.mode}}});Te({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,r=Qu(e.gullet.popToken());e.gullet.consumeSpaces();var i=Og(e);return eh(e,r,i,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});Te({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,r=Qu(e.gullet.popToken()),i=e.gullet.popToken(),a=e.gullet.popToken();return eh(e,r,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(i),{type:"internal",mode:e.mode}}});var ua=function(e,t,r){var i=Ct.math[e]&&Ct.math[e].replace,a=f0(i||e,t,r);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},b0=function(e,t,r,i){var a=r.havingBaseStyle(t),s=H.makeSpan(i.concat(a.sizingClasses(r)),[e],r),o=a.sizeMultiplier/r.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},th=function(e,t,r){var i=t.havingBaseStyle(r),a=(1-t.sizeMultiplier/i.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=xe(a),e.height-=a,e.depth+=a},zg=function(e,t,r,i,a,s){var o=H.makeSymbol(e,"Main-Regular",a,i),l=b0(o,t,i,s);return r&&th(l,i,t),l},Bg=function(e,t,r,i){return H.makeSymbol(e,"Size"+t+"-Regular",r,i)},nh=function(e,t,r,i,a,s){var o=Bg(e,t,a,i),l=b0(H.makeSpan(["delimsizing","size"+t],[o],i),Xe.TEXT,i,s);return r&&th(l,i,Xe.TEXT),l},Ao=function(e,t,r){var i;t==="Size1-Regular"?i="delim-size1":i="delim-size4";var a=H.makeSpan(["delimsizinginner",i],[H.makeSpan([],[H.makeSymbol(e,t,r)])]);return{type:"elem",elem:a}},Ro=function(e,t,r){var i=Zn["Size4-Regular"][e.charCodeAt(0)]?Zn["Size4-Regular"][e.charCodeAt(0)][4]:Zn["Size1-Regular"][e.charCodeAt(0)][4],a=new Wr("inner",q4(e,Math.round(1e3*t))),s=new xr([a],{width:xe(i),height:xe(t),style:"width:"+xe(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=H.makeSvgSpan([],[s],r);return o.height=t,o.style.height=xe(t),o.style.width=xe(i),{type:"elem",elem:o}},n0=.008,cs={type:"kern",size:-1*n0},Hg=["|","\\lvert","\\rvert","\\vert"],Gg=["\\|","\\lVert","\\rVert","\\Vert"],rh=function(e,t,r,i,a,s){var o,l,c,u,d="",p=0;o=c=u=e,l=null;var _="Size1-Regular";e==="\\uparrow"?c=u="⏐":e==="\\Uparrow"?c=u="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",u="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",u="\\Downarrow"):Hg.includes(e)?(c="∣",d="vert",p=333):Gg.includes(e)?(c="∥",d="doublevert",p=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",u="⎣",_="Size4-Regular",d="lbrack",p=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",u="⎦",_="Size4-Regular",d="rbrack",p=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",u="⎣",_="Size4-Regular",d="lfloor",p=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=u="⎢",_="Size4-Regular",d="lceil",p=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",u="⎦",_="Size4-Regular",d="rfloor",p=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=u="⎥",_="Size4-Regular",d="rceil",p=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",u="⎝",_="Size4-Regular",d="lparen",p=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",u="⎠",_="Size4-Regular",d="rparen",p=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",u="⎩",c="⎪",_="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",u="⎭",c="⎪",_="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",u="⎩",c="⎪",_="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",u="⎭",c="⎪",_="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",u="⎭",c="⎪",_="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",u="⎩",c="⎪",_="Size4-Regular");var x=ua(o,_,a),g=x.height+x.depth,m=ua(c,_,a),f=m.height+m.depth,S=ua(u,_,a),y=S.height+S.depth,A=0,I=1;if(l!==null){var P=ua(l,_,a);A=P.height+P.depth,I=2}var D=g+y+A,K=Math.max(0,Math.ceil((t-D)/(I*f))),w=D+K*I*f,C=i.fontMetrics().axisHeight;r&&(C*=i.sizeMultiplier);var B=w/2-C,W=[];if(d.length>0){var ie=w-g-y,U=Math.round(w*1e3),O=X4(d,Math.round(ie*1e3)),Y=new Wr(d,O),te=(p/1e3).toFixed(3)+"em",Q=(U/1e3).toFixed(3)+"em",ne=new xr([Y],{width:te,height:Q,viewBox:"0 0 "+p+" "+U}),ee=H.makeSvgSpan([],[ne],i);ee.height=U/1e3,ee.style.width=te,ee.style.height=Q,W.push({type:"elem",elem:ee})}else{if(W.push(Ao(u,_,a)),W.push(cs),l===null){var oe=w-g-y+2*n0;W.push(Ro(c,oe,i))}else{var se=(w-g-y-A)/2+2*n0;W.push(Ro(c,se,i)),W.push(cs),W.push(Ao(l,_,a)),W.push(cs),W.push(Ro(c,se,i))}W.push(cs),W.push(Ao(o,_,a))}var j=i.havingBaseStyle(Xe.TEXT),re=H.makeVList({positionType:"bottom",positionData:B,children:W},j);return b0(H.makeSpan(["delimsizing","mult"],[re],j),Xe.TEXT,i,s)},Co=80,Do=.08,Lo=function(e,t,r,i,a){var s=W4(e,i,r),o=new Wr(e,s),l=new xr([o],{width:"400em",height:xe(t),viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return H.makeSvgSpan(["hide-tail"],[l],a)},Vg=function(e,t){var r=t.havingBaseSizing(),i=oh("\\surd",e*r.sizeMultiplier,sh,r),a=r.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l=0,c=0,u=0,d;return i.type==="small"?(u=1e3+1e3*s+Co,e<1?a=1:e<1.4&&(a=.7),l=(1+s+Do)/a,c=(1+s)/a,o=Lo("sqrtMain",l,u,s,t),o.style.minWidth="0.853em",d=.833/a):i.type==="large"?(u=(1e3+Co)*fa[i.size],c=(fa[i.size]+s)/a,l=(fa[i.size]+s+Do)/a,o=Lo("sqrtSize"+i.size,l,u,s,t),o.style.minWidth="1.02em",d=1/a):(l=e+s+Do,c=e+s,u=Math.floor(1e3*e+s)+Co,o=Lo("sqrtTall",l,u,s,t),o.style.minWidth="0.742em",d=1.056),o.height=c,o.style.height=xe(l),{span:o,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},ih=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],Wg=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],ah=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],fa=[0,1.2,1.8,2.4,3],qg=function(e,t,r,i,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),ih.includes(e)||ah.includes(e))return nh(e,t,!1,r,i,a);if(Wg.includes(e))return rh(e,fa[t],!1,r,i,a);throw new me("Illegal delimiter: '"+e+"'")},Xg=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],$g=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"stack"}],sh=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Yg=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},oh=function(e,t,r,i){for(var a=Math.min(2,3-i.style.size),s=a;s<r.length&&r[s].type!=="stack";s++){var o=ua(e,Yg(r[s]),"math"),l=o.height+o.depth;if(r[s].type==="small"){var c=i.havingBaseStyle(r[s].style);l*=c.sizeMultiplier}if(l>t)return r[s]}return r[r.length-1]},lh=function(e,t,r,i,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;ah.includes(e)?o=Xg:ih.includes(e)?o=sh:o=$g;var l=oh(e,t,o,i);return l.type==="small"?zg(e,l.style,r,i,a,s):l.type==="large"?nh(e,l.size,r,i,a,s):rh(e,t,r,i,a,s)},Kg=function(e,t,r,i,a,s){var o=i.fontMetrics().axisHeight*i.sizeMultiplier,l=901,c=5/i.fontMetrics().ptPerEm,u=Math.max(t-o,r+o),d=Math.max(u/500*l,2*u-c);return lh(e,d,!0,i,a,s)},gr={sqrtImage:Vg,sizedDelim:qg,sizeToMaxHeight:fa,customSizedDelim:lh,leftRightDelim:Kg},wc={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},jg=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Os(n,e){var t=Fs(n);if(t&&jg.includes(t.text))return t;throw t?new me("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",n):new me("Invalid delimiter type '"+n.type+"'",n)}Te({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(n,e)=>{var t=Os(e[0],n);return{type:"delimsizing",mode:n.parser.mode,size:wc[n.funcName].size,mclass:wc[n.funcName].mclass,delim:t.text}},htmlBuilder:(n,e)=>n.delim==="."?H.makeSpan([n.mclass]):gr.sizedDelim(n.delim,n.size,e,n.mode,[n.mclass]),mathmlBuilder:n=>{var e=[];n.delim!=="."&&e.push(Un(n.delim,n.mode));var t=new he.MathNode("mo",e);n.mclass==="mopen"||n.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var r=xe(gr.sizeToMaxHeight[n.size]);return t.setAttribute("minsize",r),t.setAttribute("maxsize",r),t}});function Ec(n){if(!n.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Te({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=n.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new me("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:n.parser.mode,delim:Os(e[0],n).text,color:t}}});Te({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Os(e[0],n),r=n.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect("\\right",!1);var a=st(r.parseFunction(),"leftright-right");return{type:"leftright",mode:r.mode,body:i,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(n,e)=>{Ec(n);for(var t=Jt(n.body,e,!0,["mopen","mclose"]),r=0,i=0,a=!1,s=0;s<t.length;s++)t[s].isMiddle?a=!0:(r=Math.max(t[s].height,r),i=Math.max(t[s].depth,i));r*=e.sizeMultiplier,i*=e.sizeMultiplier;var o;if(n.left==="."?o=xa(e,["mopen"]):o=gr.leftRightDelim(n.left,r,i,e,n.mode,["mopen"]),t.unshift(o),a)for(var l=1;l<t.length;l++){var c=t[l],u=c.isMiddle;u&&(t[l]=gr.leftRightDelim(u.delim,r,i,u.options,n.mode,[]))}var d;if(n.right===".")d=xa(e,["mclose"]);else{var p=n.rightColor?e.withColor(n.rightColor):e;d=gr.leftRightDelim(n.right,r,i,p,n.mode,["mclose"])}return t.push(d),H.makeSpan(["minner"],t,e)},mathmlBuilder:(n,e)=>{Ec(n);var t=bn(n.body,e);if(n.left!=="."){var r=new he.MathNode("mo",[Un(n.left,n.mode)]);r.setAttribute("fence","true"),t.unshift(r)}if(n.right!=="."){var i=new he.MathNode("mo",[Un(n.right,n.mode)]);i.setAttribute("fence","true"),n.rightColor&&i.setAttribute("mathcolor",n.rightColor),t.push(i)}return g0(t)}});Te({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Os(e[0],n);if(!n.parser.leftrightDepth)throw new me("\\middle without preceding \\left",t);return{type:"middle",mode:n.parser.mode,delim:t.text}},htmlBuilder:(n,e)=>{var t;if(n.delim===".")t=xa(e,[]);else{t=gr.sizedDelim(n.delim,1,e,n.mode,[]);var r={delim:n.delim,options:e};t.isMiddle=r}return t},mathmlBuilder:(n,e)=>{var t=n.delim==="\\vert"||n.delim==="|"?Un("|","text"):Un(n.delim,n.mode),r=new he.MathNode("mo",[t]);return r.setAttribute("fence","true"),r.setAttribute("lspace","0.05em"),r.setAttribute("rspace","0.05em"),r}});var y0=(n,e)=>{var t=H.wrapFragment(ht(n.body,e),e),r=n.label.slice(1),i=e.sizeMultiplier,a,s=0,o=ft.isCharacterBox(n.body);if(r==="sout")a=H.makeSpan(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/i,s=-.5*e.fontMetrics().xHeight;else if(r==="phase"){var l=zt({number:.6,unit:"pt"},e),c=zt({number:.35,unit:"ex"},e),u=e.havingBaseSizing();i=i/u.sizeMultiplier;var d=t.height+t.depth+l+c;t.style.paddingLeft=xe(d/2+l);var p=Math.floor(1e3*d*i),_=G4(p),x=new xr([new Wr("phase",_)],{width:"400em",height:xe(p/1e3),viewBox:"0 0 400000 "+p,preserveAspectRatio:"xMinYMin slice"});a=H.makeSvgSpan(["hide-tail"],[x],e),a.style.height=xe(d),s=t.depth+l+c}else{/cancel/.test(r)?o||t.classes.push("cancel-pad"):r==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var g=0,m=0,f=0;/box/.test(r)?(f=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),g=e.fontMetrics().fboxsep+(r==="colorbox"?0:f),m=g):r==="angl"?(f=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),g=4*f,m=Math.max(0,.25-t.depth)):(g=o?.2:0,m=g),a=yr.encloseSpan(t,r,g,m,e),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle="solid",a.style.borderWidth=xe(f)):r==="angl"&&f!==.049&&(a.style.borderTopWidth=xe(f),a.style.borderRightWidth=xe(f)),s=t.depth+m,n.backgroundColor&&(a.style.backgroundColor=n.backgroundColor,n.borderColor&&(a.style.borderColor=n.borderColor))}var S;if(n.backgroundColor)S=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]},e);else{var y=/cancel|phase/.test(r)?["svg-align"]:[];S=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:y}]},e)}return/cancel/.test(r)&&(S.height=t.height,S.depth=t.depth),/cancel/.test(r)&&!o?H.makeSpan(["mord","cancel-lap"],[S],e):H.makeSpan(["mord"],[S],e)},S0=(n,e)=>{var t=0,r=new he.MathNode(n.label.indexOf("colorbox")>-1?"mpadded":"menclose",[Et(n.body,e)]);switch(n.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\phase":r.setAttribute("notation","phasorangle");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\angl":r.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,r.setAttribute("width","+"+2*t+"pt"),r.setAttribute("height","+"+2*t+"pt"),r.setAttribute("lspace",t+"pt"),r.setAttribute("voffset",t+"pt"),n.label==="\\fcolorbox"){var i=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);r.setAttribute("style","border: "+i+"em solid "+String(n.borderColor))}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return n.backgroundColor&&r.setAttribute("mathbackground",n.backgroundColor),r};Te({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(n,e,t){var{parser:r,funcName:i}=n,a=st(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:r.mode,label:i,backgroundColor:a,body:s}},htmlBuilder:y0,mathmlBuilder:S0});Te({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(n,e,t){var{parser:r,funcName:i}=n,a=st(e[0],"color-token").color,s=st(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:r.mode,label:i,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:y0,mathmlBuilder:S0});Te({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});Te({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:r}=n,i=e[0];return{type:"enclose",mode:t.mode,label:r,body:i}},htmlBuilder:y0,mathmlBuilder:S0});Te({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var ch={};function er(n){for(var{type:e,names:t,props:r,handler:i,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},l=0;l<t.length;++l)ch[t[l]]=o;a&&(Es[e]=a),s&&(Ts[e]=s)}var uh={};function M(n,e){uh[n]=e}function Tc(n){var e=[];n.consumeSpaces();var t=n.fetch().text;for(t==="\\relax"&&(n.consume(),n.consumeSpaces(),t=n.fetch().text);t==="\\hline"||t==="\\hdashline";)n.consume(),e.push(t==="\\hdashline"),n.consumeSpaces(),t=n.fetch().text;return e}var zs=n=>{var e=n.parser.settings;if(!e.displayMode)throw new me("{"+n.envName+"} can be used only in display mode.")};function M0(n){if(n.indexOf("ed")===-1)return n.indexOf("*")===-1}function Xr(n,e,t){var{hskipBeforeAndAfter:r,addJot:i,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:u,maxNumCols:d,leqno:p}=e;if(n.gullet.beginGroup(),c||n.gullet.macros.set("\\cr","\\\\\\relax"),!s){var _=n.gullet.expandMacroAsText("\\arraystretch");if(_==null)s=1;else if(s=parseFloat(_),!s||s<0)throw new me("Invalid \\arraystretch: "+_)}n.gullet.beginGroup();var x=[],g=[x],m=[],f=[],S=l!=null?[]:void 0;function y(){l&&n.gullet.macros.set("\\@eqnsw","1",!0)}function A(){S&&(n.gullet.macros.get("\\df@tag")?(S.push(n.subparse([new An("\\df@tag")])),n.gullet.macros.set("\\df@tag",void 0,!0)):S.push(!!l&&n.gullet.macros.get("\\@eqnsw")==="1"))}for(y(),f.push(Tc(n));;){var I=n.parseExpression(!1,c?"\\end":"\\\\");n.gullet.endGroup(),n.gullet.beginGroup(),I={type:"ordgroup",mode:n.mode,body:I},t&&(I={type:"styling",mode:n.mode,style:t,body:[I]}),x.push(I);var P=n.fetch().text;if(P==="&"){if(d&&x.length===d){if(c||o)throw new me("Too many tab characters: &",n.nextToken);n.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}n.consume()}else if(P==="\\end"){A(),x.length===1&&I.type==="styling"&&I.body[0].body.length===0&&(g.length>1||!u)&&g.pop(),f.length<g.length+1&&f.push([]);break}else if(P==="\\\\"){n.consume();var D=void 0;n.gullet.future().text!==" "&&(D=n.parseSizeGroup(!0)),m.push(D?D.value:null),A(),f.push(Tc(n)),x=[],g.push(x),y()}else throw new me("Expected & or \\\\ or \\cr or \\end",n.nextToken)}return n.gullet.endGroup(),n.gullet.endGroup(),{type:"array",mode:n.mode,addJot:i,arraystretch:s,body:g,cols:a,rowGaps:m,hskipBeforeAndAfter:r,hLinesBeforeRow:f,colSeparationType:o,tags:S,leqno:p}}function w0(n){return n.slice(0,1)==="d"?"display":"text"}var tr=function(e,t){var r,i,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],u=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,p=5*d;if(e.colSeparationType&&e.colSeparationType==="small"){var _=t.havingStyle(Xe.SCRIPT).sizeMultiplier;p=.2778*(_/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?zt({number:3,unit:"ex"},t):12*d,g=3*d,m=e.arraystretch*x,f=.7*m,S=.3*m,y=0;function A(Ke){for(var R=0;R<Ke.length;++R)R>0&&(y+=.25),c.push({pos:y,isDashed:Ke[R]})}for(A(s[0]),r=0;r<e.body.length;++r){var I=e.body[r],P=f,D=S;o<I.length&&(o=I.length);var K=new Array(I.length);for(i=0;i<I.length;++i){var w=ht(I[i],t);D<w.depth&&(D=w.depth),P<w.height&&(P=w.height),K[i]=w}var C=e.rowGaps[r],B=0;C&&(B=zt(C,t),B>0&&(B+=S,D<B&&(D=B),B=0)),e.addJot&&(D+=g),K.height=P,K.depth=D,y+=P,K.pos=y,y+=D+B,l[r]=K,A(s[r+1])}var W=y/2+t.fontMetrics().axisHeight,ie=e.cols||[],U=[],O,Y,te=[];if(e.tags&&e.tags.some(Ke=>Ke))for(r=0;r<a;++r){var Q=l[r],ne=Q.pos-W,ee=e.tags[r],oe=void 0;ee===!0?oe=H.makeSpan(["eqn-num"],[],t):ee===!1?oe=H.makeSpan([],[],t):oe=H.makeSpan([],Jt(ee,t,!0),t),oe.depth=Q.depth,oe.height=Q.height,te.push({type:"elem",elem:oe,shift:ne})}for(i=0,Y=0;i<o||Y<ie.length;++i,++Y){for(var se=ie[Y]||{},j=!0;se.type==="separator";){if(j||(O=H.makeSpan(["arraycolsep"],[]),O.style.width=xe(t.fontMetrics().doubleRuleSep),U.push(O)),se.separator==="|"||se.separator===":"){var re=se.separator==="|"?"solid":"dashed",ge=H.makeSpan(["vertical-separator"],[],t);ge.style.height=xe(y),ge.style.borderRightWidth=xe(u),ge.style.borderRightStyle=re,ge.style.margin="0 "+xe(-u/2);var Le=y-W;Le&&(ge.style.verticalAlign=xe(-Le)),U.push(ge)}else throw new me("Invalid separator type: "+se.separator);Y++,se=ie[Y]||{},j=!1}if(!(i>=o)){var ye=void 0;(i>0||e.hskipBeforeAndAfter)&&(ye=ft.deflt(se.pregap,p),ye!==0&&(O=H.makeSpan(["arraycolsep"],[]),O.style.width=xe(ye),U.push(O)));var Oe=[];for(r=0;r<a;++r){var We=l[r],Ae=We[i];if(Ae){var Be=We.pos-W;Ae.depth=We.depth,Ae.height=We.height,Oe.push({type:"elem",elem:Ae,shift:Be})}}Oe=H.makeVList({positionType:"individualShift",children:Oe},t),Oe=H.makeSpan(["col-align-"+(se.align||"c")],[Oe]),U.push(Oe),(i<o-1||e.hskipBeforeAndAfter)&&(ye=ft.deflt(se.postgap,p),ye!==0&&(O=H.makeSpan(["arraycolsep"],[]),O.style.width=xe(ye),U.push(O)))}}if(l=H.makeSpan(["mtable"],U),c.length>0){for(var V=H.makeLineSpan("hline",t,u),Tt=H.makeLineSpan("hdashline",t,u),Ie=[{type:"elem",elem:l,shift:0}];c.length>0;){var Ge=c.pop(),Pe=Ge.pos-W;Ge.isDashed?Ie.push({type:"elem",elem:Tt,shift:Pe}):Ie.push({type:"elem",elem:V,shift:Pe})}l=H.makeVList({positionType:"individualShift",children:Ie},t)}if(te.length===0)return H.makeSpan(["mord"],[l],t);var gt=H.makeVList({positionType:"individualShift",children:te},t);return gt=H.makeSpan(["tag"],[gt],t),H.makeFragment([l,gt])},Zg={c:"center ",l:"left ",r:"right "},nr=function(e,t){for(var r=[],i=new he.MathNode("mtd",[],["mtr-glue"]),a=new he.MathNode("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new he.MathNode("mtd",[Et(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(i),l.push(i),e.leqno?l.unshift(a):l.push(a)),r.push(new he.MathNode("mtr",l))}var u=new he.MathNode("mtable",r),d=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",xe(d));var p="",_="";if(e.cols&&e.cols.length>0){var x=e.cols,g="",m=!1,f=0,S=x.length;x[0].type==="separator"&&(p+="top ",f=1),x[x.length-1].type==="separator"&&(p+="bottom ",S-=1);for(var y=f;y<S;y++)x[y].type==="align"?(_+=Zg[x[y].align],m&&(g+="none "),m=!0):x[y].type==="separator"&&m&&(g+=x[y].separator==="|"?"solid ":"dashed ",m=!1);u.setAttribute("columnalign",_.trim()),/[sd]/.test(g)&&u.setAttribute("columnlines",g.trim())}if(e.colSeparationType==="align"){for(var A=e.cols||[],I="",P=1;P<A.length;P++)I+=P%2?"0em ":"1em ";u.setAttribute("columnspacing",I.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var D="",K=e.hLinesBeforeRow;p+=K[0].length>0?"left ":"",p+=K[K.length-1].length>0?"right ":"";for(var w=1;w<K.length-1;w++)D+=K[w].length===0?"none ":K[w][0]?"dashed ":"solid ";return/[sd]/.test(D)&&u.setAttribute("rowlines",D.trim()),p!==""&&(u=new he.MathNode("menclose",[u]),u.setAttribute("notation",p.trim())),e.arraystretch&&e.arraystretch<1&&(u=new he.MathNode("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},hh=function(e,t){e.envName.indexOf("ed")===-1&&zs(e);var r=[],i=e.envName.indexOf("at")>-1?"alignat":"align",a=e.envName==="split",s=Xr(e.parser,{cols:r,addJot:!0,autoTag:a?void 0:M0(e.envName),emptySingleRow:!0,colSeparationType:i,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var u="",d=0;d<t[0].body.length;d++){var p=st(t[0].body[d],"textord");u+=p.text}o=Number(u),l=o*2}var _=!l;s.body.forEach(function(f){for(var S=1;S<f.length;S+=2){var y=st(f[S],"styling"),A=st(y.body[0],"ordgroup");A.body.unshift(c)}if(_)l<f.length&&(l=f.length);else{var I=f.length/2;if(o<I)throw new me("Too many math in a row: "+("expected "+o+", but got "+I),f[0])}});for(var x=0;x<l;++x){var g="r",m=0;x%2===1?g="l":x>0&&_&&(m=1),r[x]={type:"align",align:g,pregap:m,postgap:0}}return s.colSeparationType=_?"align":"alignat",s};er({type:"array",names:["array","darray"],props:{numArgs:1},handler(n,e){var t=Fs(e[0]),r=t?[e[0]]:st(e[0],"ordgroup").body,i=r.map(function(s){var o=_0(s),l=o.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new me("Unknown column alignment: "+l,s)}),a={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return Xr(n.parser,a,w0(n.envName))},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(n){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[n.envName.replace("*","")],t="c",r={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(n.envName.charAt(n.envName.length-1)==="*"){var i=n.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),t=i.fetch().text,"lcr".indexOf(t)===-1)throw new me("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),r.cols=[{type:"align",align:t}]}}var a=Xr(n.parser,r,w0(n.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:n.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(n){var e={arraystretch:.5},t=Xr(n.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["subarray"],props:{numArgs:1},handler(n,e){var t=Fs(e[0]),r=t?[e[0]]:st(e[0],"ordgroup").body,i=r.map(function(s){var o=_0(s),l=o.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new me("Unknown column alignment: "+l,s)});if(i.length>1)throw new me("{subarray} can contain only one column");var a={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5};if(a=Xr(n.parser,a,"script"),a.body.length>0&&a.body[0].length>1)throw new me("{subarray} can contain only one column");return a},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(n){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Xr(n.parser,e,w0(n.envName));return{type:"leftright",mode:n.mode,body:[t],left:n.envName.indexOf("r")>-1?".":"\\{",right:n.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:hh,htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(n){["gather","gather*"].includes(n.envName)&&zs(n);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:M0(n.envName),emptySingleRow:!0,leqno:n.parser.settings.leqno};return Xr(n.parser,e,"display")},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:hh,htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(n){zs(n);var e={autoTag:M0(n.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:n.parser.settings.leqno};return Xr(n.parser,e,"display")},htmlBuilder:tr,mathmlBuilder:nr});er({type:"array",names:["CD"],props:{numArgs:0},handler(n){return zs(n),kg(n.parser)},htmlBuilder:tr,mathmlBuilder:nr});M("\\nonumber","\\gdef\\@eqnsw{0}");M("\\notag","\\nonumber");Te({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(n,e){throw new me(n.funcName+" valid only within array environment")}});var Ac=ch;Te({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(n,e){var{parser:t,funcName:r}=n,i=e[0];if(i.type!=="ordgroup")throw new me("Invalid environment name",i);for(var a="",s=0;s<i.body.length;++s)a+=st(i.body[s],"textord").text;if(r==="\\begin"){if(!Ac.hasOwnProperty(a))throw new me("No such environment: "+a,i);var o=Ac[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),u={mode:t.mode,envName:a,parser:t},d=o.handler(u,l,c);t.expect("\\end",!1);var p=t.nextToken,_=st(t.parseFunction(),"environment");if(_.name!==a)throw new me("Mismatch: \\begin{"+a+"} matched by \\end{"+_.name+"}",p);return d}return{type:"environment",mode:t.mode,name:a,nameGroup:i}}});var dh=(n,e)=>{var t=n.font,r=e.withFont(t);return ht(n.body,r)},fh=(n,e)=>{var t=n.font,r=e.withFont(t);return Et(n.body,r)},Rc={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};Te({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=As(e[0]),a=r;return a in Rc&&(a=Rc[a]),{type:"font",mode:t.mode,font:a.slice(1),body:i}},htmlBuilder:dh,mathmlBuilder:fh});Te({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(n,e)=>{var{parser:t}=n,r=e[0],i=ft.isCharacterBox(r);return{type:"mclass",mode:t.mode,mclass:ks(r),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:r}],isCharacterBox:i}}});Te({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:r,breakOnTokenText:i}=n,{mode:a}=t,s=t.parseExpression(!0,i),o="math"+r.slice(1);return{type:"font",mode:a,font:o,body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:dh,mathmlBuilder:fh});var mh=(n,e)=>{var t=e;return n==="display"?t=t.id>=Xe.SCRIPT.id?t.text():Xe.DISPLAY:n==="text"&&t.size===Xe.DISPLAY.size?t=Xe.TEXT:n==="script"?t=Xe.SCRIPT:n==="scriptscript"&&(t=Xe.SCRIPTSCRIPT),t},E0=(n,e)=>{var t=mh(n.size,e.style),r=t.fracNum(),i=t.fracDen(),a;a=e.havingStyle(r);var s=ht(n.numer,a,e);if(n.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(i);var c=ht(n.denom,a,e),u,d,p;n.hasBarLine?(n.barSize?(d=zt(n.barSize,e),u=H.makeLineSpan("frac-line",e,d)):u=H.makeLineSpan("frac-line",e),d=u.height,p=u.height):(u=null,d=0,p=e.fontMetrics().defaultRuleThickness);var _,x,g;t.size===Xe.DISPLAY.size||n.size==="display"?(_=e.fontMetrics().num1,d>0?x=3*p:x=7*p,g=e.fontMetrics().denom1):(d>0?(_=e.fontMetrics().num2,x=p):(_=e.fontMetrics().num3,x=3*p),g=e.fontMetrics().denom2);var m;if(u){var S=e.fontMetrics().axisHeight;_-s.depth-(S+.5*d)<x&&(_+=x-(_-s.depth-(S+.5*d))),S-.5*d-(c.height-g)<x&&(g+=x-(S-.5*d-(c.height-g)));var y=-(S-.5*d);m=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:g},{type:"elem",elem:u,shift:y},{type:"elem",elem:s,shift:-_}]},e)}else{var f=_-s.depth-(c.height-g);f<x&&(_+=.5*(x-f),g+=.5*(x-f)),m=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:g},{type:"elem",elem:s,shift:-_}]},e)}a=e.havingStyle(t),m.height*=a.sizeMultiplier/e.sizeMultiplier,m.depth*=a.sizeMultiplier/e.sizeMultiplier;var A;t.size===Xe.DISPLAY.size?A=e.fontMetrics().delim1:t.size===Xe.SCRIPTSCRIPT.size?A=e.havingStyle(Xe.SCRIPT).fontMetrics().delim2:A=e.fontMetrics().delim2;var I,P;return n.leftDelim==null?I=xa(e,["mopen"]):I=gr.customSizedDelim(n.leftDelim,A,!0,e.havingStyle(t),n.mode,["mopen"]),n.continued?P=H.makeSpan([]):n.rightDelim==null?P=xa(e,["mclose"]):P=gr.customSizedDelim(n.rightDelim,A,!0,e.havingStyle(t),n.mode,["mclose"]),H.makeSpan(["mord"].concat(a.sizingClasses(e)),[I,H.makeSpan(["mfrac"],[m]),P],e)},T0=(n,e)=>{var t=new he.MathNode("mfrac",[Et(n.numer,e),Et(n.denom,e)]);if(!n.hasBarLine)t.setAttribute("linethickness","0px");else if(n.barSize){var r=zt(n.barSize,e);t.setAttribute("linethickness",xe(r))}var i=mh(n.size,e.style);if(i.size!==e.style.size){t=new he.MathNode("mstyle",[t]);var a=i.size===Xe.DISPLAY.size?"true":"false";t.setAttribute("displaystyle",a),t.setAttribute("scriptlevel","0")}if(n.leftDelim!=null||n.rightDelim!=null){var s=[];if(n.leftDelim!=null){var o=new he.MathNode("mo",[new he.TextNode(n.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),s.push(o)}if(s.push(t),n.rightDelim!=null){var l=new he.MathNode("mo",[new he.TextNode(n.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),s.push(l)}return g0(s)}return t};Te({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0],a=e[1],s,o=null,l=null,c="auto";switch(r){case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(r){case"\\dfrac":case"\\dbinom":c="display";break;case"\\tfrac":case"\\tbinom":c="text";break}return{type:"genfrac",mode:t.mode,continued:!1,numer:i,denom:a,hasBarLine:s,leftDelim:o,rightDelim:l,size:c,barSize:null}},htmlBuilder:E0,mathmlBuilder:T0});Te({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0],a=e[1];return{type:"genfrac",mode:t.mode,continued:!0,numer:i,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});Te({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(n){var{parser:e,funcName:t,token:r}=n,i;switch(t){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:i,token:r}}});var Cc=["display","text","script","scriptscript"],Dc=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};Te({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(n,e){var{parser:t}=n,r=e[4],i=e[5],a=As(e[0]),s=a.type==="atom"&&a.family==="open"?Dc(a.text):null,o=As(e[1]),l=o.type==="atom"&&o.family==="close"?Dc(o.text):null,c=st(e[2],"size"),u,d=null;c.isBlank?u=!0:(d=c.value,u=d.number>0);var p="auto",_=e[3];if(_.type==="ordgroup"){if(_.body.length>0){var x=st(_.body[0],"textord");p=Cc[Number(x.text)]}}else _=st(_,"textord"),p=Cc[Number(_.text)];return{type:"genfrac",mode:t.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:s,rightDelim:l,size:p}},htmlBuilder:E0,mathmlBuilder:T0});Te({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(n,e){var{parser:t,funcName:r,token:i}=n;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:st(e[0],"size").value,token:i}}});Te({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0],a=A4(st(e[1],"infix").size),s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:i,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:E0,mathmlBuilder:T0});var ph=(n,e)=>{var t=e.style,r,i;n.type==="supsub"?(r=n.sup?ht(n.sup,e.havingStyle(t.sup()),e):ht(n.sub,e.havingStyle(t.sub()),e),i=st(n.base,"horizBrace")):i=st(n,"horizBrace");var a=ht(i.base,e.havingBaseStyle(Xe.DISPLAY)),s=yr.svgSpan(i,e),o;if(i.isOver?(o=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]},e),o.children[0].children[0].children[1].classes.push("svg-align")):(o=H.makeVList({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]},e),o.children[0].children[0].children[0].classes.push("svg-align")),r){var l=H.makeSpan(["mord",i.isOver?"mover":"munder"],[o],e);i.isOver?o=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:r}]},e):o=H.makeVList({positionType:"bottom",positionData:l.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:l}]},e)}return H.makeSpan(["mord",i.isOver?"mover":"munder"],[o],e)},Jg=(n,e)=>{var t=yr.mathMLnode(n.label);return new he.MathNode(n.isOver?"mover":"munder",[Et(n.base,e),t])};Te({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:r}=n;return{type:"horizBrace",mode:t.mode,label:r,isOver:/^\\over/.test(r),base:e[0]}},htmlBuilder:ph,mathmlBuilder:Jg});Te({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,r=e[1],i=st(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:t.mode,href:i,body:Wt(r)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(n,e)=>{var t=Jt(n.body,e,!1);return H.makeAnchor(n.href,[],t,e)},mathmlBuilder:(n,e)=>{var t=qr(n.body,e);return t instanceof En||(t=new En("mrow",[t])),t.setAttribute("href",n.href),t}});Te({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,r=st(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:r}))return t.formatUnsupportedCmd("\\url");for(var i=[],a=0;a<r.length;a++){var s=r[a];s==="~"&&(s="\\textasciitilde"),i.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:i};return{type:"href",mode:t.mode,href:r,body:Wt(o)}}});Te({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(n,e){var{parser:t}=n;return{type:"hbox",mode:t.mode,body:Wt(e[0])}},htmlBuilder(n,e){var t=Jt(n.body,e,!1);return H.makeFragment(t)},mathmlBuilder(n,e){return new he.MathNode("mrow",bn(n.body,e))}});Te({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:r,token:i}=n,a=st(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(r){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length!==2)throw new me("Error parsing key-value for \\htmlData");l["data-"+d[0].trim()]=d[1].trim()}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Wt(s)}:t.formatUnsupportedCmd(r)},htmlBuilder:(n,e)=>{var t=Jt(n.body,e,!1),r=["enclosing"];n.attributes.class&&r.push(...n.attributes.class.trim().split(/\s+/));var i=H.makeSpan(r,t,e);for(var a in n.attributes)a!=="class"&&n.attributes.hasOwnProperty(a)&&i.setAttribute(a,n.attributes[a]);return i},mathmlBuilder:(n,e)=>qr(n.body,e)});Te({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"htmlmathml",mode:t.mode,html:Wt(e[0]),mathml:Wt(e[1])}},htmlBuilder:(n,e)=>{var t=Jt(n.html,e,!1);return H.makeFragment(t)},mathmlBuilder:(n,e)=>qr(n.mathml,e)});var Po=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new me("Invalid size: '"+e+"' in \\includegraphics");var r={number:+(t[1]+t[2]),unit:t[3]};if(!Iu(r))throw new me("Invalid unit: '"+r.unit+"' in \\includegraphics.");return r};Te({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(n,e,t)=>{var{parser:r}=n,i={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=st(t[0],"raw").string,c=l.split(","),u=0;u<c.length;u++){var d=c[u].split("=");if(d.length===2){var p=d[1].trim();switch(d[0].trim()){case"alt":o=p;break;case"width":i=Po(p);break;case"height":a=Po(p);break;case"totalheight":s=Po(p);break;default:throw new me("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var _=st(e[0],"url").url;return o===""&&(o=_,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),r.settings.isTrusted({command:"\\includegraphics",url:_})?{type:"includegraphics",mode:r.mode,alt:o,width:i,height:a,totalheight:s,src:_}:r.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(n,e)=>{var t=zt(n.height,e),r=0;n.totalheight.number>0&&(r=zt(n.totalheight,e)-t);var i=0;n.width.number>0&&(i=zt(n.width,e));var a={height:xe(t+r)};i>0&&(a.width=xe(i)),r>0&&(a.verticalAlign=xe(-r));var s=new J4(n.src,n.alt,a);return s.height=t,s.depth=r,s},mathmlBuilder:(n,e)=>{var t=new he.MathNode("mglyph",[]);t.setAttribute("alt",n.alt);var r=zt(n.height,e),i=0;if(n.totalheight.number>0&&(i=zt(n.totalheight,e)-r,t.setAttribute("valign",xe(-i))),t.setAttribute("height",xe(r+i)),n.width.number>0){var a=zt(n.width,e);t.setAttribute("width",xe(a))}return t.setAttribute("src",n.src),t}});Te({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:r}=n,i=st(e[0],"size");if(t.settings.strict){var a=r[1]==="m",s=i.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" supports only mu units, "+("not "+i.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+r+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:i.value}},htmlBuilder(n,e){return H.makeGlue(n.dimension,e)},mathmlBuilder(n,e){var t=zt(n.dimension,e);return new he.SpaceNode(t)}});Te({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0];return{type:"lap",mode:t.mode,alignment:r.slice(5),body:i}},htmlBuilder:(n,e)=>{var t;n.alignment==="clap"?(t=H.makeSpan([],[ht(n.body,e)]),t=H.makeSpan(["inner"],[t],e)):t=H.makeSpan(["inner"],[ht(n.body,e)]);var r=H.makeSpan(["fix"],[]),i=H.makeSpan([n.alignment],[t,r],e),a=H.makeSpan(["strut"]);return a.style.height=xe(i.height+i.depth),i.depth&&(a.style.verticalAlign=xe(-i.depth)),i.children.unshift(a),i=H.makeSpan(["thinbox"],[i],e),H.makeSpan(["mord","vbox"],[i],e)},mathmlBuilder:(n,e)=>{var t=new he.MathNode("mpadded",[Et(n.body,e)]);if(n.alignment!=="rlap"){var r=n.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",r+"width")}return t.setAttribute("width","0px"),t}});Te({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){var{funcName:t,parser:r}=n,i=r.mode;r.switchMode("math");var a=t==="\\("?"\\)":"$",s=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:"styling",mode:r.mode,style:"text",body:s}}});Te({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){throw new me("Mismatched "+n.funcName)}});var Lc=(n,e)=>{switch(e.style.size){case Xe.DISPLAY.size:return n.display;case Xe.TEXT.size:return n.text;case Xe.SCRIPT.size:return n.script;case Xe.SCRIPTSCRIPT.size:return n.scriptscript;default:return n.text}};Te({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"mathchoice",mode:t.mode,display:Wt(e[0]),text:Wt(e[1]),script:Wt(e[2]),scriptscript:Wt(e[3])}},htmlBuilder:(n,e)=>{var t=Lc(n,e),r=Jt(t,e,!1);return H.makeFragment(r)},mathmlBuilder:(n,e)=>{var t=Lc(n,e);return qr(t,e)}});var gh=(n,e,t,r,i,a,s)=>{n=H.makeSpan([],[n]);var o=t&&ft.isCharacterBox(t),l,c;if(e){var u=ht(e,r.havingStyle(i.sup()),r);c={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(t){var d=ht(t,r.havingStyle(i.sub()),r);l={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var p;if(c&&l){var _=r.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+n.depth+s;p=H.makeVList({positionType:"bottom",positionData:_,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:xe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:xe(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else if(l){var x=n.height-s;p=H.makeVList({positionType:"top",positionData:x,children:[{type:"kern",size:r.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:xe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n}]},r)}else if(c){var g=n.depth+s;p=H.makeVList({positionType:"bottom",positionData:g,children:[{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:xe(a)},{type:"kern",size:r.fontMetrics().bigOpSpacing5}]},r)}else return n;var m=[p];if(l&&a!==0&&!o){var f=H.makeSpan(["mspace"],[],r);f.style.marginRight=xe(a),m.unshift(f)}return H.makeSpan(["mop","op-limits"],m,r)},vh=["\\smallint"],ta=(n,e)=>{var t,r,i=!1,a;n.type==="supsub"?(t=n.sup,r=n.sub,a=st(n.base,"op"),i=!0):a=st(n,"op");var s=e.style,o=!1;s.size===Xe.DISPLAY.size&&a.symbol&&!vh.includes(a.name)&&(o=!0);var l;if(a.symbol){var c=o?"Size2-Regular":"Size1-Regular",u="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(u=a.name.slice(1),a.name=u==="oiint"?"\\iint":"\\iiint"),l=H.makeSymbol(a.name,c,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),u.length>0){var d=l.italic,p=H.staticSvg(u+"Size"+(o?"2":"1"),e);l=H.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:p,shift:o?.08:0}]},e),a.name="\\"+u,l.classes.unshift("mop"),l.italic=d}}else if(a.body){var _=Jt(a.body,e,!0);_.length===1&&_[0]instanceof In?(l=_[0],l.classes[0]="mop"):l=H.makeSpan(["mop"],_,e)}else{for(var x=[],g=1;g<a.name.length;g++)x.push(H.mathsym(a.name[g],a.mode,e));l=H.makeSpan(["mop"],x,e)}var m=0,f=0;return(l instanceof In||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(m=(l.height-l.depth)/2-e.fontMetrics().axisHeight,f=l.italic),i?gh(l,t,r,e,s,f,m):(m&&(l.style.position="relative",l.style.top=xe(m)),l)},Aa=(n,e)=>{var t;if(n.symbol)t=new En("mo",[Un(n.name,n.mode)]),vh.includes(n.name)&&t.setAttribute("largeop","false");else if(n.body)t=new En("mo",bn(n.body,e));else{t=new En("mi",[new Jn(n.name.slice(1))]);var r=new En("mo",[Un("⁡","text")]);n.parentIsSupSub?t=new En("mrow",[t,r]):t=qu([t,r])}return t},Qg={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Te({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=r;return i.length===1&&(i=Qg[i]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:ta,mathmlBuilder:Aa});Te({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var{parser:t}=n,r=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Wt(r)}},htmlBuilder:ta,mathmlBuilder:Aa});var e3={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Te({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:ta,mathmlBuilder:Aa});Te({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:ta,mathmlBuilder:Aa});Te({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n,r=t;return r.length===1&&(r=e3[r]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:ta,mathmlBuilder:Aa});var _h=(n,e)=>{var t,r,i=!1,a;n.type==="supsub"?(t=n.sup,r=n.sub,a=st(n.base,"operatorname"),i=!0):a=st(n,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(d=>{var p=d.text;return typeof p=="string"?{type:"textord",mode:d.mode,text:p}:d}),l=Jt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var u=l[c];u instanceof In&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=H.makeSpan(["mop"],l,e)}else s=H.makeSpan(["mop"],[],e);return i?gh(s,t,r,e,e.style,0,0):s},t3=(n,e)=>{for(var t=bn(n.body,e.withFont("mathrm")),r=!0,i=0;i<t.length;i++){var a=t[i];if(!(a instanceof he.SpaceNode))if(a instanceof he.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof he.TextNode?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):r=!1;break}default:r=!1}else r=!1}if(r){var o=t.map(u=>u.toText()).join("");t=[new he.TextNode(o)]}var l=new he.MathNode("mi",t);l.setAttribute("mathvariant","normal");var c=new he.MathNode("mo",[Un("⁡","text")]);return n.parentIsSupSub?new he.MathNode("mrow",[l,c]):he.newDocumentFragment([l,c])};Te({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:r}=n,i=e[0];return{type:"operatorname",mode:t.mode,body:Wt(i),alwaysHandleSupSub:r==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:_h,mathmlBuilder:t3});M("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");di({type:"ordgroup",htmlBuilder(n,e){return n.semisimple?H.makeFragment(Jt(n.body,e,!1)):H.makeSpan(["mord"],Jt(n.body,e,!0),e)},mathmlBuilder(n,e){return qr(n.body,e,!0)}});Te({type:"overline",names:["\\overline"],props:{numArgs:1},handler(n,e){var{parser:t}=n,r=e[0];return{type:"overline",mode:t.mode,body:r}},htmlBuilder(n,e){var t=ht(n.body,e.havingCrampedStyle()),r=H.makeLineSpan("overline-line",e),i=e.fontMetrics().defaultRuleThickness,a=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*i},{type:"elem",elem:r},{type:"kern",size:i}]},e);return H.makeSpan(["mord","overline"],[a],e)},mathmlBuilder(n,e){var t=new he.MathNode("mo",[new he.TextNode("‾")]);t.setAttribute("stretchy","true");var r=new he.MathNode("mover",[Et(n.body,e),t]);return r.setAttribute("accent","true"),r}});Te({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,r=e[0];return{type:"phantom",mode:t.mode,body:Wt(r)}},htmlBuilder:(n,e)=>{var t=Jt(n.body,e.withPhantom(),!1);return H.makeFragment(t)},mathmlBuilder:(n,e)=>{var t=bn(n.body,e);return new he.MathNode("mphantom",t)}});Te({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,r=e[0];return{type:"hphantom",mode:t.mode,body:r}},htmlBuilder:(n,e)=>{var t=H.makeSpan([],[ht(n.body,e.withPhantom())]);if(t.height=0,t.depth=0,t.children)for(var r=0;r<t.children.length;r++)t.children[r].height=0,t.children[r].depth=0;return t=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e),H.makeSpan(["mord"],[t],e)},mathmlBuilder:(n,e)=>{var t=bn(Wt(n.body),e),r=new he.MathNode("mphantom",t),i=new he.MathNode("mpadded",[r]);return i.setAttribute("height","0px"),i.setAttribute("depth","0px"),i}});Te({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,r=e[0];return{type:"vphantom",mode:t.mode,body:r}},htmlBuilder:(n,e)=>{var t=H.makeSpan(["inner"],[ht(n.body,e.withPhantom())]),r=H.makeSpan(["fix"],[]);return H.makeSpan(["mord","rlap"],[t,r],e)},mathmlBuilder:(n,e)=>{var t=bn(Wt(n.body),e),r=new he.MathNode("mphantom",t),i=new he.MathNode("mpadded",[r]);return i.setAttribute("width","0px"),i}});Te({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n,r=st(e[0],"size").value,i=e[1];return{type:"raisebox",mode:t.mode,dy:r,body:i}},htmlBuilder(n,e){var t=ht(n.body,e),r=zt(n.dy,e);return H.makeVList({positionType:"shift",positionData:-r,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(n,e){var t=new he.MathNode("mpadded",[Et(n.body,e)]),r=n.dy.number+n.dy.unit;return t.setAttribute("voffset",r),t}});Te({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(n){var{parser:e}=n;return{type:"internal",mode:e.mode}}});Te({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(n,e,t){var{parser:r}=n,i=t[0],a=st(e[0],"size"),s=st(e[1],"size");return{type:"rule",mode:r.mode,shift:i&&st(i,"size").value,width:a.value,height:s.value}},htmlBuilder(n,e){var t=H.makeSpan(["mord","rule"],[],e),r=zt(n.width,e),i=zt(n.height,e),a=n.shift?zt(n.shift,e):0;return t.style.borderRightWidth=xe(r),t.style.borderTopWidth=xe(i),t.style.bottom=xe(a),t.width=r,t.height=i+a,t.depth=-a,t.maxFontSize=i*1.125*e.sizeMultiplier,t},mathmlBuilder(n,e){var t=zt(n.width,e),r=zt(n.height,e),i=n.shift?zt(n.shift,e):0,a=e.color&&e.getColor()||"black",s=new he.MathNode("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",xe(t)),s.setAttribute("height",xe(r));var o=new he.MathNode("mpadded",[s]);return i>=0?o.setAttribute("height",xe(i)):(o.setAttribute("height",xe(i)),o.setAttribute("depth",xe(-i))),o.setAttribute("voffset",xe(i)),o}});function xh(n,e,t){for(var r=Jt(n,e,!1),i=e.sizeMultiplier/t.sizeMultiplier,a=0;a<r.length;a++){var s=r[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(r[a].classes,e.sizingClasses(t)):r[a].classes[s+1]==="reset-size"+e.size&&(r[a].classes[s+1]="reset-size"+t.size),r[a].height*=i,r[a].depth*=i}return H.makeFragment(r)}var Pc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],n3=(n,e)=>{var t=e.havingSize(n.size);return xh(n.body,t,e)};Te({type:"sizing",names:Pc,props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{breakOnTokenText:t,funcName:r,parser:i}=n,a=i.parseExpression(!1,t);return{type:"sizing",mode:i.mode,size:Pc.indexOf(r)+1,body:a}},htmlBuilder:n3,mathmlBuilder:(n,e)=>{var t=e.havingSize(n.size),r=bn(n.body,t),i=new he.MathNode("mstyle",r);return i.setAttribute("mathsize",xe(t.sizeMultiplier)),i}});Te({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(n,e,t)=>{var{parser:r}=n,i=!1,a=!1,s=t[0]&&st(t[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){var c=s.body[l];if(o=c.text,o==="t")i=!0;else if(o==="b")a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=e[0];return{type:"smash",mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(n,e)=>{var t=H.makeSpan([],[ht(n.body,e)]);if(!n.smashHeight&&!n.smashDepth)return t;if(n.smashHeight&&(t.height=0,t.children))for(var r=0;r<t.children.length;r++)t.children[r].height=0;if(n.smashDepth&&(t.depth=0,t.children))for(var i=0;i<t.children.length;i++)t.children[i].depth=0;var a=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e);return H.makeSpan(["mord"],[a],e)},mathmlBuilder:(n,e)=>{var t=new he.MathNode("mpadded",[Et(n.body,e)]);return n.smashHeight&&t.setAttribute("height","0px"),n.smashDepth&&t.setAttribute("depth","0px"),t}});Te({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:r}=n,i=t[0],a=e[0];return{type:"sqrt",mode:r.mode,body:a,index:i}},htmlBuilder(n,e){var t=ht(n.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=H.wrapFragment(t,e);var r=e.fontMetrics(),i=r.defaultRuleThickness,a=i;e.style.id<Xe.TEXT.id&&(a=e.fontMetrics().xHeight);var s=i+a/4,o=t.height+t.depth+s+i,{span:l,ruleWidth:c,advanceWidth:u}=gr.sqrtImage(o,e),d=l.height-c;d>t.height+t.depth+s&&(s=(s+d-t.height-t.depth)/2);var p=l.height-t.height-s-c;t.style.paddingLeft=xe(u);var _=H.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+p)},{type:"elem",elem:l},{type:"kern",size:c}]},e);if(n.index){var x=e.havingStyle(Xe.SCRIPTSCRIPT),g=ht(n.index,x,e),m=.6*(_.height-_.depth),f=H.makeVList({positionType:"shift",positionData:-m,children:[{type:"elem",elem:g}]},e),S=H.makeSpan(["root"],[f]);return H.makeSpan(["mord","sqrt"],[S,_],e)}else return H.makeSpan(["mord","sqrt"],[_],e)},mathmlBuilder(n,e){var{body:t,index:r}=n;return r?new he.MathNode("mroot",[Et(t,e),Et(r,e)]):new he.MathNode("msqrt",[Et(t,e)])}});var Nc={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT};Te({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n,e){var{breakOnTokenText:t,funcName:r,parser:i}=n,a=i.parseExpression(!0,t),s=r.slice(1,r.length-5);return{type:"styling",mode:i.mode,style:s,body:a}},htmlBuilder(n,e){var t=Nc[n.style],r=e.havingStyle(t).withFont("");return xh(n.body,r,e)},mathmlBuilder(n,e){var t=Nc[n.style],r=e.havingStyle(t),i=bn(n.body,r),a=new he.MathNode("mstyle",i),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[n.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var r3=function(e,t){var r=e.base;if(r)if(r.type==="op"){var i=r.limits&&(t.style.size===Xe.DISPLAY.size||r.alwaysHandleSupSub);return i?ta:null}else if(r.type==="operatorname"){var a=r.alwaysHandleSupSub&&(t.style.size===Xe.DISPLAY.size||r.limits);return a?_h:null}else{if(r.type==="accent")return ft.isCharacterBox(r.base)?x0:null;if(r.type==="horizBrace"){var s=!e.sub;return s===r.isOver?ph:null}else return null}else return null};di({type:"supsub",htmlBuilder(n,e){var t=r3(n,e);if(t)return t(n,e);var{base:r,sup:i,sub:a}=n,s=ht(r,e),o,l,c=e.fontMetrics(),u=0,d=0,p=r&&ft.isCharacterBox(r);if(i){var _=e.havingStyle(e.style.sup());o=ht(i,_,e),p||(u=s.height-_.fontMetrics().supDrop*_.sizeMultiplier/e.sizeMultiplier)}if(a){var x=e.havingStyle(e.style.sub());l=ht(a,x,e),p||(d=s.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var g;e.style===Xe.DISPLAY?g=c.sup1:e.style.cramped?g=c.sup3:g=c.sup2;var m=e.sizeMultiplier,f=xe(.5/c.ptPerEm/m),S=null;if(l){var y=n.base&&n.base.type==="op"&&n.base.name&&(n.base.name==="\\oiint"||n.base.name==="\\oiiint");(s instanceof In||y)&&(S=xe(-s.italic))}var A;if(o&&l){u=Math.max(u,g,o.depth+.25*c.xHeight),d=Math.max(d,c.sub2);var I=c.defaultRuleThickness,P=4*I;if(u-o.depth-(l.height-d)<P){d=P-(u-o.depth)+l.height;var D=.8*c.xHeight-(u-o.depth);D>0&&(u+=D,d-=D)}var K=[{type:"elem",elem:l,shift:d,marginRight:f,marginLeft:S},{type:"elem",elem:o,shift:-u,marginRight:f}];A=H.makeVList({positionType:"individualShift",children:K},e)}else if(l){d=Math.max(d,c.sub1,l.height-.8*c.xHeight);var w=[{type:"elem",elem:l,marginLeft:S,marginRight:f}];A=H.makeVList({positionType:"shift",positionData:d,children:w},e)}else if(o)u=Math.max(u,g,o.depth+.25*c.xHeight),A=H.makeVList({positionType:"shift",positionData:-u,children:[{type:"elem",elem:o,marginRight:f}]},e);else throw new Error("supsub must have either sup or sub.");var C=Qo(s,"right")||"mord";return H.makeSpan([C],[s,H.makeSpan(["msupsub"],[A])],e)},mathmlBuilder(n,e){var t=!1,r,i;n.base&&n.base.type==="horizBrace"&&(i=!!n.sup,i===n.base.isOver&&(t=!0,r=n.base.isOver)),n.base&&(n.base.type==="op"||n.base.type==="operatorname")&&(n.base.parentIsSupSub=!0);var a=[Et(n.base,e)];n.sub&&a.push(Et(n.sub,e)),n.sup&&a.push(Et(n.sup,e));var s;if(t)s=r?"mover":"munder";else if(n.sub)if(n.sup){var c=n.base;c&&c.type==="op"&&c.limits&&e.style===Xe.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Xe.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=n.base;l&&l.type==="op"&&l.limits&&(e.style===Xe.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Xe.DISPLAY)?s="munder":s="msub"}else{var o=n.base;o&&o.type==="op"&&o.limits&&(e.style===Xe.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Xe.DISPLAY)?s="mover":s="msup"}return new he.MathNode(s,a)}});di({type:"atom",htmlBuilder(n,e){return H.mathsym(n.text,n.mode,e,["m"+n.family])},mathmlBuilder(n,e){var t=new he.MathNode("mo",[Un(n.text,n.mode)]);if(n.family==="bin"){var r=v0(n,e);r==="bold-italic"&&t.setAttribute("mathvariant",r)}else n.family==="punct"?t.setAttribute("separator","true"):(n.family==="open"||n.family==="close")&&t.setAttribute("stretchy","false");return t}});var bh={mi:"italic",mn:"normal",mtext:"normal"};di({type:"mathord",htmlBuilder(n,e){return H.makeOrd(n,e,"mathord")},mathmlBuilder(n,e){var t=new he.MathNode("mi",[Un(n.text,n.mode,e)]),r=v0(n,e)||"italic";return r!==bh[t.type]&&t.setAttribute("mathvariant",r),t}});di({type:"textord",htmlBuilder(n,e){return H.makeOrd(n,e,"textord")},mathmlBuilder(n,e){var t=Un(n.text,n.mode,e),r=v0(n,e)||"normal",i;return n.mode==="text"?i=new he.MathNode("mtext",[t]):/[0-9]/.test(n.text)?i=new he.MathNode("mn",[t]):n.text==="\\prime"?i=new he.MathNode("mo",[t]):i=new he.MathNode("mi",[t]),r!==bh[i.type]&&i.setAttribute("mathvariant",r),i}});var No={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Io={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};di({type:"spacing",htmlBuilder(n,e){if(Io.hasOwnProperty(n.text)){var t=Io[n.text].className||"";if(n.mode==="text"){var r=H.makeOrd(n,e,"textord");return r.classes.push(t),r}else return H.makeSpan(["mspace",t],[H.mathsym(n.text,n.mode,e)],e)}else{if(No.hasOwnProperty(n.text))return H.makeSpan(["mspace",No[n.text]],[],e);throw new me('Unknown type of space "'+n.text+'"')}},mathmlBuilder(n,e){var t;if(Io.hasOwnProperty(n.text))t=new he.MathNode("mtext",[new he.TextNode(" ")]);else{if(No.hasOwnProperty(n.text))return new he.MathNode("mspace");throw new me('Unknown type of space "'+n.text+'"')}return t}});var Ic=()=>{var n=new he.MathNode("mtd",[]);return n.setAttribute("width","50%"),n};di({type:"tag",mathmlBuilder(n,e){var t=new he.MathNode("mtable",[new he.MathNode("mtr",[Ic(),new he.MathNode("mtd",[qr(n.body,e)]),Ic(),new he.MathNode("mtd",[qr(n.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Uc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Fc={"\\textbf":"textbf","\\textmd":"textmd"},i3={"\\textit":"textit","\\textup":"textup"},kc=(n,e)=>{var t=n.font;if(t){if(Uc[t])return e.withTextFontFamily(Uc[t]);if(Fc[t])return e.withTextFontWeight(Fc[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(i3[t])};Te({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:r}=n,i=e[0];return{type:"text",mode:t.mode,body:Wt(i),font:r}},htmlBuilder(n,e){var t=kc(n,e),r=Jt(n.body,t,!0);return H.makeSpan(["mord","text"],r,t)},mathmlBuilder(n,e){var t=kc(n,e);return qr(n.body,t)}});Te({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=ht(n.body,e),r=H.makeLineSpan("underline-line",e),i=e.fontMetrics().defaultRuleThickness,a=H.makeVList({positionType:"top",positionData:t.height,children:[{type:"kern",size:i},{type:"elem",elem:r},{type:"kern",size:3*i},{type:"elem",elem:t}]},e);return H.makeSpan(["mord","underline"],[a],e)},mathmlBuilder(n,e){var t=new he.MathNode("mo",[new he.TextNode("‾")]);t.setAttribute("stretchy","true");var r=new he.MathNode("munder",[Et(n.body,e),t]);return r.setAttribute("accentunder","true"),r}});Te({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=ht(n.body,e),r=e.fontMetrics().axisHeight,i=.5*(t.height-r-(t.depth+r));return H.makeVList({positionType:"shift",positionData:i,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(n,e){return new he.MathNode("mpadded",[Et(n.body,e)],["vcenter"])}});Te({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(n,e,t){throw new me("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(n,e){for(var t=Oc(n),r=[],i=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),r.push(H.makeSymbol(s,"Typewriter-Regular",n.mode,i,["mord","texttt"]))}return H.makeSpan(["mord","text"].concat(i.sizingClasses(e)),H.tryCombineChars(r),i)},mathmlBuilder(n,e){var t=new he.TextNode(Oc(n)),r=new he.MathNode("mtext",[t]);return r.setAttribute("mathvariant","monospace"),r}});var Oc=n=>n.body.replace(/ /g,n.star?"␣":" "),kr=Vu,yh=`[ \r
	]`,a3="\\\\[a-zA-Z@]+",s3="\\\\[^\uD800-\uDFFF]",o3="("+a3+")"+yh+"*",l3=`\\\\(
|[ \r	]+
?)[ \r	]*`,r0="[̀-ͯ]",c3=new RegExp(r0+"+$"),u3="("+yh+"+)|"+(l3+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(r0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(r0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+o3)+("|"+s3+")");class zc{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(u3,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new An("EOF",new gn(this,t,t));var r=this.tokenRegex.exec(e);if(r===null||r.index!==t)throw new me("Unexpected character: '"+e[t]+"'",new An(e[t],new gn(this,t,t+1)));var i=r[6]||r[3]||(r[2]?"\\ ":" ");if(this.catcodes[i]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new An(i,new gn(this,t,this.tokenRegex.lastIndex))}}class h3{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new me("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,r){if(r===void 0&&(r=!1),r){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var d3=uh;M("\\noexpand",function(n){var e=n.popToken();return n.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});M("\\expandafter",function(n){var e=n.popToken();return n.expandOnce(!0),{tokens:[e],numArgs:0}});M("\\@firstoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[0],numArgs:0}});M("\\@secondoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[1],numArgs:0}});M("\\@ifnextchar",function(n){var e=n.consumeArgs(3);n.consumeSpaces();var t=n.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});M("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");M("\\TextOrMath",function(n){var e=n.consumeArgs(2);return n.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var Bc={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};M("\\char",function(n){var e=n.popToken(),t,r="";if(e.text==="'")t=8,e=n.popToken();else if(e.text==='"')t=16,e=n.popToken();else if(e.text==="`")if(e=n.popToken(),e.text[0]==="\\")r=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new me("\\char` missing argument");r=e.text.charCodeAt(0)}else t=10;if(t){if(r=Bc[e.text],r==null||r>=t)throw new me("Invalid base-"+t+" digit "+e.text);for(var i;(i=Bc[n.future().text])!=null&&i<t;)r*=t,r+=i,n.popToken()}return"\\@char{"+r+"}"});var A0=(n,e,t,r)=>{var i=n.consumeArg().tokens;if(i.length!==1)throw new me("\\newcommand's first argument must be a macro name");var a=i[0].text,s=n.isDefined(a);if(s&&!e)throw new me("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new me("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(i=n.consumeArg().tokens,i.length===1&&i[0].text==="["){for(var l="",c=n.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=n.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new me("Invalid number of arguments: "+l);o=parseInt(l),i=n.consumeArg().tokens}return s&&r||n.macros.set(a,{tokens:i,numArgs:o}),""};M("\\newcommand",n=>A0(n,!1,!0,!1));M("\\renewcommand",n=>A0(n,!0,!1,!1));M("\\providecommand",n=>A0(n,!0,!0,!0));M("\\message",n=>{var e=n.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});M("\\errmessage",n=>{var e=n.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});M("\\show",n=>{var e=n.popToken(),t=e.text;return console.log(e,n.macros.get(t),kr[t],Ct.math[t],Ct.text[t]),""});M("\\bgroup","{");M("\\egroup","}");M("~","\\nobreakspace");M("\\lq","`");M("\\rq","'");M("\\aa","\\r a");M("\\AA","\\r A");M("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");M("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");M("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");M("ℬ","\\mathscr{B}");M("ℰ","\\mathscr{E}");M("ℱ","\\mathscr{F}");M("ℋ","\\mathscr{H}");M("ℐ","\\mathscr{I}");M("ℒ","\\mathscr{L}");M("ℳ","\\mathscr{M}");M("ℛ","\\mathscr{R}");M("ℭ","\\mathfrak{C}");M("ℌ","\\mathfrak{H}");M("ℨ","\\mathfrak{Z}");M("\\Bbbk","\\Bbb{k}");M("·","\\cdotp");M("\\llap","\\mathllap{\\textrm{#1}}");M("\\rlap","\\mathrlap{\\textrm{#1}}");M("\\clap","\\mathclap{\\textrm{#1}}");M("\\mathstrut","\\vphantom{(}");M("\\underbar","\\underline{\\text{#1}}");M("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');M("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");M("\\ne","\\neq");M("≠","\\neq");M("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");M("∉","\\notin");M("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");M("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");M("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");M("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");M("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");M("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");M("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");M("⟂","\\perp");M("‼","\\mathclose{!\\mkern-0.8mu!}");M("∌","\\notni");M("⌜","\\ulcorner");M("⌝","\\urcorner");M("⌞","\\llcorner");M("⌟","\\lrcorner");M("©","\\copyright");M("®","\\textregistered");M("️","\\textregistered");M("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');M("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');M("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');M("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');M("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");M("⋮","\\vdots");M("\\varGamma","\\mathit{\\Gamma}");M("\\varDelta","\\mathit{\\Delta}");M("\\varTheta","\\mathit{\\Theta}");M("\\varLambda","\\mathit{\\Lambda}");M("\\varXi","\\mathit{\\Xi}");M("\\varPi","\\mathit{\\Pi}");M("\\varSigma","\\mathit{\\Sigma}");M("\\varUpsilon","\\mathit{\\Upsilon}");M("\\varPhi","\\mathit{\\Phi}");M("\\varPsi","\\mathit{\\Psi}");M("\\varOmega","\\mathit{\\Omega}");M("\\substack","\\begin{subarray}{c}#1\\end{subarray}");M("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");M("\\boxed","\\fbox{$\\displaystyle{#1}$}");M("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");M("\\implies","\\DOTSB\\;\\Longrightarrow\\;");M("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");M("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");M("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Hc={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};M("\\dots",function(n){var e="\\dotso",t=n.expandAfterFuture().text;return t in Hc?e=Hc[t]:(t.slice(0,4)==="\\not"||t in Ct.math&&["bin","rel"].includes(Ct.math[t].group))&&(e="\\dotsb"),e});var R0={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};M("\\dotso",function(n){var e=n.future().text;return e in R0?"\\ldots\\,":"\\ldots"});M("\\dotsc",function(n){var e=n.future().text;return e in R0&&e!==","?"\\ldots\\,":"\\ldots"});M("\\cdots",function(n){var e=n.future().text;return e in R0?"\\@cdots\\,":"\\@cdots"});M("\\dotsb","\\cdots");M("\\dotsm","\\cdots");M("\\dotsi","\\!\\cdots");M("\\dotsx","\\ldots\\,");M("\\DOTSI","\\relax");M("\\DOTSB","\\relax");M("\\DOTSX","\\relax");M("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");M("\\,","\\tmspace+{3mu}{.1667em}");M("\\thinspace","\\,");M("\\>","\\mskip{4mu}");M("\\:","\\tmspace+{4mu}{.2222em}");M("\\medspace","\\:");M("\\;","\\tmspace+{5mu}{.2777em}");M("\\thickspace","\\;");M("\\!","\\tmspace-{3mu}{.1667em}");M("\\negthinspace","\\!");M("\\negmedspace","\\tmspace-{4mu}{.2222em}");M("\\negthickspace","\\tmspace-{5mu}{.277em}");M("\\enspace","\\kern.5em ");M("\\enskip","\\hskip.5em\\relax");M("\\quad","\\hskip1em\\relax");M("\\qquad","\\hskip2em\\relax");M("\\tag","\\@ifstar\\tag@literal\\tag@paren");M("\\tag@paren","\\tag@literal{({#1})}");M("\\tag@literal",n=>{if(n.macros.get("\\df@tag"))throw new me("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});M("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");M("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");M("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");M("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");M("\\newline","\\\\\\relax");M("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Sh=xe(Zn["Main-Regular"][84][1]-.7*Zn["Main-Regular"][65][1]);M("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Sh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");M("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Sh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");M("\\hspace","\\@ifstar\\@hspacer\\@hspace");M("\\@hspace","\\hskip #1\\relax");M("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");M("\\ordinarycolon",":");M("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");M("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');M("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');M("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');M("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');M("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');M("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');M("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');M("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');M("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');M("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');M("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');M("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');M("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');M("∷","\\dblcolon");M("∹","\\eqcolon");M("≔","\\coloneqq");M("≕","\\eqqcolon");M("⩴","\\Coloneqq");M("\\ratio","\\vcentcolon");M("\\coloncolon","\\dblcolon");M("\\colonequals","\\coloneqq");M("\\coloncolonequals","\\Coloneqq");M("\\equalscolon","\\eqqcolon");M("\\equalscoloncolon","\\Eqqcolon");M("\\colonminus","\\coloneq");M("\\coloncolonminus","\\Coloneq");M("\\minuscolon","\\eqcolon");M("\\minuscoloncolon","\\Eqcolon");M("\\coloncolonapprox","\\Colonapprox");M("\\coloncolonsim","\\Colonsim");M("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");M("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");M("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");M("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");M("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");M("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");M("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");M("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");M("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");M("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");M("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");M("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");M("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");M("\\nleqq","\\html@mathml{\\@nleqq}{≰}");M("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");M("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");M("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");M("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");M("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");M("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");M("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");M("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");M("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");M("\\imath","\\html@mathml{\\@imath}{ı}");M("\\jmath","\\html@mathml{\\@jmath}{ȷ}");M("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");M("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");M("⟦","\\llbracket");M("⟧","\\rrbracket");M("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");M("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");M("⦃","\\lBrace");M("⦄","\\rBrace");M("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");M("⦵","\\minuso");M("\\darr","\\downarrow");M("\\dArr","\\Downarrow");M("\\Darr","\\Downarrow");M("\\lang","\\langle");M("\\rang","\\rangle");M("\\uarr","\\uparrow");M("\\uArr","\\Uparrow");M("\\Uarr","\\Uparrow");M("\\N","\\mathbb{N}");M("\\R","\\mathbb{R}");M("\\Z","\\mathbb{Z}");M("\\alef","\\aleph");M("\\alefsym","\\aleph");M("\\Alpha","\\mathrm{A}");M("\\Beta","\\mathrm{B}");M("\\bull","\\bullet");M("\\Chi","\\mathrm{X}");M("\\clubs","\\clubsuit");M("\\cnums","\\mathbb{C}");M("\\Complex","\\mathbb{C}");M("\\Dagger","\\ddagger");M("\\diamonds","\\diamondsuit");M("\\empty","\\emptyset");M("\\Epsilon","\\mathrm{E}");M("\\Eta","\\mathrm{H}");M("\\exist","\\exists");M("\\harr","\\leftrightarrow");M("\\hArr","\\Leftrightarrow");M("\\Harr","\\Leftrightarrow");M("\\hearts","\\heartsuit");M("\\image","\\Im");M("\\infin","\\infty");M("\\Iota","\\mathrm{I}");M("\\isin","\\in");M("\\Kappa","\\mathrm{K}");M("\\larr","\\leftarrow");M("\\lArr","\\Leftarrow");M("\\Larr","\\Leftarrow");M("\\lrarr","\\leftrightarrow");M("\\lrArr","\\Leftrightarrow");M("\\Lrarr","\\Leftrightarrow");M("\\Mu","\\mathrm{M}");M("\\natnums","\\mathbb{N}");M("\\Nu","\\mathrm{N}");M("\\Omicron","\\mathrm{O}");M("\\plusmn","\\pm");M("\\rarr","\\rightarrow");M("\\rArr","\\Rightarrow");M("\\Rarr","\\Rightarrow");M("\\real","\\Re");M("\\reals","\\mathbb{R}");M("\\Reals","\\mathbb{R}");M("\\Rho","\\mathrm{P}");M("\\sdot","\\cdot");M("\\sect","\\S");M("\\spades","\\spadesuit");M("\\sub","\\subset");M("\\sube","\\subseteq");M("\\supe","\\supseteq");M("\\Tau","\\mathrm{T}");M("\\thetasym","\\vartheta");M("\\weierp","\\wp");M("\\Zeta","\\mathrm{Z}");M("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");M("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");M("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");M("\\bra","\\mathinner{\\langle{#1}|}");M("\\ket","\\mathinner{|{#1}\\rangle}");M("\\braket","\\mathinner{\\langle{#1}\\rangle}");M("\\Bra","\\left\\langle#1\\right|");M("\\Ket","\\left|#1\\right\\rangle");var Mh=n=>e=>{var t=e.consumeArg().tokens,r=e.consumeArg().tokens,i=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=d=>p=>{n&&(p.macros.set("|",s),i.length&&p.macros.set("\\|",o));var _=d;if(!d&&i.length){var x=p.future();x.text==="|"&&(p.popToken(),_=!0)}return{tokens:_?i:r,numArgs:0}};e.macros.set("|",l(!1)),i.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,u=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};M("\\bra@ket",Mh(!1));M("\\bra@set",Mh(!0));M("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");M("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");M("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");M("\\angln","{\\angl n}");M("\\blue","\\textcolor{##6495ed}{#1}");M("\\orange","\\textcolor{##ffa500}{#1}");M("\\pink","\\textcolor{##ff00af}{#1}");M("\\red","\\textcolor{##df0030}{#1}");M("\\green","\\textcolor{##28ae7b}{#1}");M("\\gray","\\textcolor{gray}{#1}");M("\\purple","\\textcolor{##9d38bd}{#1}");M("\\blueA","\\textcolor{##ccfaff}{#1}");M("\\blueB","\\textcolor{##80f6ff}{#1}");M("\\blueC","\\textcolor{##63d9ea}{#1}");M("\\blueD","\\textcolor{##11accd}{#1}");M("\\blueE","\\textcolor{##0c7f99}{#1}");M("\\tealA","\\textcolor{##94fff5}{#1}");M("\\tealB","\\textcolor{##26edd5}{#1}");M("\\tealC","\\textcolor{##01d1c1}{#1}");M("\\tealD","\\textcolor{##01a995}{#1}");M("\\tealE","\\textcolor{##208170}{#1}");M("\\greenA","\\textcolor{##b6ffb0}{#1}");M("\\greenB","\\textcolor{##8af281}{#1}");M("\\greenC","\\textcolor{##74cf70}{#1}");M("\\greenD","\\textcolor{##1fab54}{#1}");M("\\greenE","\\textcolor{##0d923f}{#1}");M("\\goldA","\\textcolor{##ffd0a9}{#1}");M("\\goldB","\\textcolor{##ffbb71}{#1}");M("\\goldC","\\textcolor{##ff9c39}{#1}");M("\\goldD","\\textcolor{##e07d10}{#1}");M("\\goldE","\\textcolor{##a75a05}{#1}");M("\\redA","\\textcolor{##fca9a9}{#1}");M("\\redB","\\textcolor{##ff8482}{#1}");M("\\redC","\\textcolor{##f9685d}{#1}");M("\\redD","\\textcolor{##e84d39}{#1}");M("\\redE","\\textcolor{##bc2612}{#1}");M("\\maroonA","\\textcolor{##ffbde0}{#1}");M("\\maroonB","\\textcolor{##ff92c6}{#1}");M("\\maroonC","\\textcolor{##ed5fa6}{#1}");M("\\maroonD","\\textcolor{##ca337c}{#1}");M("\\maroonE","\\textcolor{##9e034e}{#1}");M("\\purpleA","\\textcolor{##ddd7ff}{#1}");M("\\purpleB","\\textcolor{##c6b9fc}{#1}");M("\\purpleC","\\textcolor{##aa87ff}{#1}");M("\\purpleD","\\textcolor{##7854ab}{#1}");M("\\purpleE","\\textcolor{##543b78}{#1}");M("\\mintA","\\textcolor{##f5f9e8}{#1}");M("\\mintB","\\textcolor{##edf2df}{#1}");M("\\mintC","\\textcolor{##e0e5cc}{#1}");M("\\grayA","\\textcolor{##f6f7f7}{#1}");M("\\grayB","\\textcolor{##f0f1f2}{#1}");M("\\grayC","\\textcolor{##e3e5e6}{#1}");M("\\grayD","\\textcolor{##d6d8da}{#1}");M("\\grayE","\\textcolor{##babec2}{#1}");M("\\grayF","\\textcolor{##888d93}{#1}");M("\\grayG","\\textcolor{##626569}{#1}");M("\\grayH","\\textcolor{##3b3e40}{#1}");M("\\grayI","\\textcolor{##21242c}{#1}");M("\\kaBlue","\\textcolor{##314453}{#1}");M("\\kaGreen","\\textcolor{##71B307}{#1}");var wh={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class f3{constructor(e,t,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new h3(d3,t.macros),this.mode=r,this.stack=[]}feed(e){this.lexer=new zc(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,r,i;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:i,end:r}=this.consumeArg(["]"])}else({tokens:i,start:t,end:r}=this.consumeArg());return this.pushToken(new An("EOF",r.loc)),this.pushTokens(i),new An("",gn.range(t,r))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],r=e&&e.length>0;r||this.consumeSpaces();var i=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new me("Extra }",a)}else if(a.text==="EOF")throw new me("Unexpected end of input in a macro argument, expected '"+(e&&r?e[o]:"}")+"'",a);if(e&&r)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||r);return i.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:i,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new me("The length of delimiters doesn't match the number of args!");for(var r=t[0],i=0;i<r.length;i++){var a=this.popToken();if(r[i]!==a.text)throw new me("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new me("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),r=t.text,i=t.noexpand?null:this._getExpansion(r);if(i==null||e&&i.unexpandable){if(e&&i==null&&r[0]==="\\"&&!this.isDefined(r))throw new me("Undefined control sequence: "+r);return this.pushToken(t),!1}this.countExpansion(1);var a=i.tokens,s=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new me("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new me("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}throw new Error}expandMacro(e){return this.macros.has(e)?this.expandTokens([new An(e)]):void 0}expandTokens(e){var t=[],r=this.stack.length;for(this.pushTokens(e);this.stack.length>r;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),t.push(i)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(r=>r.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var r=this.lexer.catcodes[e];if(r!=null&&r!==13)return}var i=typeof t=="function"?t(this):t;if(typeof i=="string"){var a=0;if(i.indexOf("#")!==-1)for(var s=i.replace(/##/g,"");s.indexOf("#"+(a+1))!==-1;)++a;for(var o=new zc(i,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var u={tokens:l,numArgs:a};return u}return i}isDefined(e){return this.macros.has(e)||kr.hasOwnProperty(e)||Ct.math.hasOwnProperty(e)||Ct.text.hasOwnProperty(e)||wh.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:kr.hasOwnProperty(e)&&!kr[e].primitive}}var Gc=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,us=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Uo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Vc={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Bs{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new f3(e,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new me("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new An("}")),this.gullet.pushTokens(e);var r=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,r}parseExpression(e,t){for(var r=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(Bs.endOfExpression.indexOf(i.text)!==-1||t&&i.text===t||e&&kr[i.text]&&kr[i.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;r.push(a)}return this.mode==="text"&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,r,i=0;i<e.length;i++)if(e[i].type==="infix"){if(t!==-1)throw new me("only one infix operator per group",e[i].token);t=i,r=e[i].replaceWith}if(t!==-1&&r){var a,s,o=e.slice(0,t),l=e.slice(t+1);o.length===1&&o[0].type==="ordgroup"?a=o[0]:a={type:"ordgroup",mode:this.mode,body:o},l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l};var c;return r==="\\\\abovefrac"?c=this.callFunction(r,[a,e[t],s],[]):c=this.callFunction(r,[a,s],[]),[c]}else return e}handleSupSubscript(e){var t=this.fetch(),r=t.text;this.consume(),this.consumeSpaces();var i;do{var a;i=this.parseGroup(e)}while(((a=i)==null?void 0:a.type)==="internal");if(!i)throw new me("Expected group after '"+r+"'",t);return i}formatUnsupportedCmd(e){for(var t=[],r=0;r<e.length;r++)t.push({type:"textord",mode:"text",text:e[r]});var i={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var r,i;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new me("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(r)throw new me("Double superscript",a);r=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(i)throw new me("Double subscript",a);i=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(r)throw new me("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),r={type:"ordgroup",mode:this.mode,body:l}}else if(us[a.text]){var c=Gc.test(a.text),u=[];for(u.push(new An(us[a.text])),this.consume();;){var d=this.fetch().text;if(!us[d]||Gc.test(d)!==c)break;u.unshift(new An(us[d])),this.consume()}var p=this.subparse(u);c?i={type:"ordgroup",mode:"math",body:p}:r={type:"ordgroup",mode:"math",body:p}}else break}return r||i?{type:"supsub",mode:this.mode,base:t,sup:r,sub:i}:t}parseFunction(e,t){var r=this.fetch(),i=r.text,a=kr[i];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new me("Got function '"+i+"' with no arguments"+(t?" as "+t:""),r);if(this.mode==="text"&&!a.allowedInText)throw new me("Can't use function '"+i+"' in text mode",r);if(this.mode==="math"&&a.allowedInMath===!1)throw new me("Can't use function '"+i+"' in math mode",r);var{args:s,optArgs:o}=this.parseArguments(i,a);return this.callFunction(i,s,o,r,e)}callFunction(e,t,r,i,a){var s={funcName:e,parser:this,token:i,breakOnTokenText:a},o=kr[e];if(o&&o.handler)return o.handler(s,t,r);throw new me("No function handler for "+e)}parseArguments(e,t){var r=t.numArgs+t.numOptionalArgs;if(r===0)return{args:[],optArgs:[]};for(var i=[],a=[],s=0;s<r;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;(t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)i.push(c);else throw new me("Null argument, please report this as a bug")}return{args:i,optArgs:a}}parseGroupOfType(e,t,r){switch(t){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseArgumentGroup(r,t);case"hbox":{var i=this.parseArgumentGroup(r,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",r);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(r)throw new me("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new me("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(r);default:throw new me("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var r=this.gullet.scanArgument(t);if(r==null)return null;for(var i="",a;(a=this.fetch()).text!=="EOF";)i+=a.text,this.consume();return this.consume(),r.text=i,r}parseRegexGroup(e,t){for(var r=this.fetch(),i=r,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)i=s,a+=i.text,this.consume();if(a==="")throw new me("Invalid "+t+": '"+r.text+"'",r);return r.range(i,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var r=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!r)throw new me("Invalid color: '"+t.text+"'",t);var i=r[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(e){var t,r=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",r=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!i)throw new me("Invalid size: '"+t.text+"'",t);var a={number:+(i[1]+i[2]),unit:i[3]};if(!Iu(a))throw new me("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:r}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var r=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:r}}parseArgumentGroup(e,t){var r=this.gullet.scanArgument(e);if(r==null)return null;var i=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:r.loc,body:a};return t&&this.switchMode(i),s}parseGroup(e,t){var r=this.fetch(),i=r.text,a;if(i==="{"||i==="\\begingroup"){this.consume();var s=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:gn.range(r,l),body:o,semisimple:i==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&i[0]==="\\"&&!wh.hasOwnProperty(i)){if(this.settings.throwOnError)throw new me("Undefined control sequence: "+i,r);a=this.formatUnsupportedCmd(i),this.consume()}return a}formLigatures(e){for(var t=e.length-1,r=0;r<t;++r){var i=e[r],a=i.text;a==="-"&&e[r+1].text==="-"&&(r+1<t&&e[r+2].text==="-"?(e.splice(r,3,{type:"textord",mode:"text",loc:gn.range(i,e[r+2]),text:"---"}),t-=2):(e.splice(r,2,{type:"textord",mode:"text",loc:gn.range(i,e[r+1]),text:"--"}),t-=1)),(a==="'"||a==="`")&&e[r+1].text===a&&(e.splice(r,2,{type:"textord",mode:"text",loc:gn.range(i,e[r+1]),text:a+a}),t-=1)}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var r=t.slice(5),i=r.charAt(0)==="*";if(i&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new me(`\\verb assertion failed --
                    please report what input caused this bug`);return r=r.slice(1,-1),{type:"verb",mode:"text",body:r,star:i}}Vc.hasOwnProperty(t[0])&&!Ct[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=Vc[t[0]]+t.slice(1));var a=c3.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Ct[this.mode][t]){this.settings.strict&&this.mode==="math"&&Jo.indexOf(t)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Ct[this.mode][t].group,l=gn.range(e),c;if(tg.hasOwnProperty(o)){var u=o;c={type:"atom",mode:this.mode,family:u,loc:l,text:t}}else c={type:o,mode:this.mode,loc:l,text:t};s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Nu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:gn.range(e),text:t};else return null;if(this.consume(),a)for(var d=0;d<a[0].length;d++){var p=a[0][d];if(!Uo[p])throw new me("Unknown accent ' "+p+"'",e);var _=Uo[p][this.mode]||Uo[p].text;if(!_)throw new me("Accent "+p+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:gn.range(e),label:_,isStretchy:!1,isShifty:!0,base:s}}return s}}Bs.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var C0=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new Bs(e,t);delete r.gullet.macros.current["\\df@tag"];var i=r.parse();if(delete r.gullet.macros.current["\\current@color"],delete r.gullet.macros.current["\\color"],r.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new me("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:r.subparse([new An("\\df@tag")])}]}return i},Eh=function(e,t,r){t.textContent="";var i=D0(e,r).toNode();t.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Eh=function(){throw new me("KaTeX doesn't work in quirks mode.")});var m3=function(e,t){var r=D0(e,t).toMarkup();return r},p3=function(e,t){var r=new h0(t);return C0(e,r)},Th=function(e,t,r){if(r.throwOnError||!(e instanceof me))throw e;var i=H.makeSpan(["katex-error"],[new In(t)]);return i.setAttribute("title",e.toString()),i.setAttribute("style","color:"+r.errorColor),i},D0=function(e,t){var r=new h0(t);try{var i=C0(e,r);return wg(i,e,r)}catch(a){return Th(a,e,r)}},g3=function(e,t){var r=new h0(t);try{var i=C0(e,r);return Eg(i,e,r)}catch(a){return Th(a,e,r)}},v3="0.16.25",_3={Span:Ta,Anchor:m0,SymbolNode:In,SvgNode:xr,PathNode:Wr,LineNode:Zo},x3={version:v3,render:Eh,renderToString:m3,ParseError:me,SETTINGS_SCHEMA:fs,__parse:p3,__renderToDomTree:D0,__renderToHTMLTree:g3,__setFontMetrics:$4,__defineSymbol:h,__defineFunction:Te,__defineMacro:M,__domTree:_3};function b3(n){let e,t,r,i;const a=n[4].default,s=Ph(a,n,n[3],null);return{c(){e=de("span"),s&&s.c(),t=ke(),r=de("span"),Oh(e,"display","none")},m(o,l){bt(o,e,l),s&&s.m(e,null),n[5](e),bt(o,t,l),bt(o,r,l),n[6](r),i=!0},p(o,[l]){s&&s.p&&(!i||l&8)&&Ih(s,a,o,o[3],i?Nh(a,o[3],l,null):Uh(o[3]),null)},i(o){i||(Rt(s,o),i=!0)},o(o){Lt(s,o),i=!1},d(o){o&&(_t(e),_t(t),_t(r)),s&&s.d(o),n[5](null),n[6](null)}}}function y3(n,e,t){let{$$slots:r={},$$scope:i}=e,{displayMode:a=!1}=e,s,o;Bh(async()=>{x3.render(o.textContent,s,{displayMode:a})});function l(u){Vi[u?"unshift":"push"](()=>{o=u,t(1,o)})}function c(u){Vi[u?"unshift":"push"](()=>{s=u,t(0,s)})}return n.$$set=u=>{"displayMode"in u&&t(2,a=u.displayMode),"$$scope"in u&&t(3,i=u.$$scope)},[s,o,a,i,r,l,c]}class $t extends Zi{constructor(e){super(),ji(this,e,y3,b3,ui,{displayMode:2})}}const S3="/geobacter-sim/assets/mars-banner-ChY7m28k.png",M3="/geobacter-sim/assets/earth-banner-Dcu0rSn8.png",w3="/geobacter-sim/assets/flow-diagram-1O99BFVk.png";function E3(n){let e=String.raw`\begin{aligned}
\text{Fe}^{3+}\text{ (resource)} \quad
\frac{dF_3}{dt}
&= \underbrace{-\,r_c\,A\,F_3}_{\text{consumption of Fe}^{3+}\text{ by active cells}}
\\[6pt]
\text{Fe}^{2+}\text{ (waste)} \quad
\frac{dF_2}{dt}
&= \underbrace{+\,r_w\,A\,F_3}_{\text{production of Fe}^{2+}\text{ as waste}}
\\[6pt]
\text{Active bacteria} \quad
\frac{dA}{dt}
&= \underbrace{+\;r_r\,A}_{\text{replication}}
\;\underbrace{-\;r_d\,A}_{\text{death}}
\;\underbrace{-\;r_{ad}(F_3)\,A}_{\text{to dormant}}
\;\underbrace{+\;r_{da}(F_3)\,D}_{\text{from dormant}}
\\[6pt]
\text{Dormant bacteria} \quad
\frac{dD}{dt}
&= \underbrace{+\;r_{ad}(F_3)\,A}_{\text{from active}}
\;\underbrace{-\;r_{da}(F_3)\,D}_{\text{to active}}
\;\underbrace{-\;r_d\,D}_{\text{death}}
\end{aligned}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function T3(n){let e;return{c(){e=ct("F_3")},m(t,r){bt(t,e,r)},d(t){t&&_t(e)}}}function A3(n){let e;return{c(){e=ct("K_F > 0")},m(t,r){bt(t,e,r)},d(t){t&&_t(e)}}}function R3(n){let e;return{c(){e=ct("F_3 = 0")},m(t,r){bt(t,e,r)},d(t){t&&_t(e)}}}function C3(n){let e;return{c(){e=ct("F_3 = K_F")},m(t,r){bt(t,e,r)},d(t){t&&_t(e)}}}function D3(n){let e=String.raw`f_{\text{dec}}(F_3)`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function L3(n){let e=String.raw`f_{\text{dec}}(F_3) = aF_3 + b`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function P3(n){let e=String.raw`f_{\text{dec}}(0) = 1`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function N3(n){let e=String.raw`\begin{aligned}
a(0) + b &= 1 \\
b &= 1
\end{aligned}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function I3(n){let e=String.raw`f_{\text{dec}}(K_F) = 0`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function U3(n){let e=String.raw`\begin{aligned}
aK_F + 1 &= 0 \\
a &= -\frac{1}{K_F}
\end{aligned}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function F3(n){let e=String.raw`\boxed{
f_{\text{dec}}(F_3) = 1 - \frac{F_3}{K_F}
}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function k3(n){let e=String.raw`f_{\text{inc}}(F_3)`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function O3(n){let e=String.raw`f_{\text{inc}}(F_3) = aF_3 + b`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function z3(n){let e=String.raw`f_{\text{inc}}(0) = 0`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function B3(n){let e=String.raw`\begin{aligned}
a(0) + b &= 0 \\
b &= 0
\end{aligned}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function H3(n){let e=String.raw`f_{\text{inc}}(K_F) = 1`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function G3(n){let e=String.raw`\begin{aligned}
aK_F + 0 &= 1 \\
a &= \frac{1}{K_F}
\end{aligned}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function V3(n){let e=String.raw`\boxed{
f_{\text{inc}}(F_3) = \frac{F_3}{K_F}
}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function W3(n){let e=String.raw`\boxed{
\begin{aligned}
r_{ad}(F_3) &= \alpha_{ad}\left(1 - \frac{F_3}{K_F}\right) \\[6pt]
r_{da}(F_3) &= \alpha_{da}\,\frac{F_3}{K_F}
\end{aligned}
}`+"",t;return{c(){t=ct(e)},m(r,i){bt(r,t,i)},p:vt,d(r){r&&_t(t)}}}function q3(n){let e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m,f,S,y,A,I,P,D,K,w,C,B,W,ie,U,O,Y,te,Q,ne,ee,oe,se,j,re,ge,Le,ye,Oe,We,Ae,Be,V,Tt,Ie,Ge,Pe,gt,Ke,R,E,q,fe,ue,pe,Ue,we,Ce,Ye,nt,ce,mt,it,$e,Ve,Ne,Ze,dt,wt,at,_e,F,Ee,Se,je,ze,xt,pt,Ht,qt,ut,Qt,on,na,Mr,Gn,Vn,$r,Yr,Wn,Ra,Kr,rr,T,z,X,J,$,Re,Fe,He,Je,rt,tt,et,Ut,en,At,fn;return w=new $t({props:{displayMode:!0,$$slots:{default:[E3]},$$scope:{ctx:n}}}),O=new $t({props:{$$slots:{default:[T3]},$$scope:{ctx:n}}}),se=new $t({props:{$$slots:{default:[A3]},$$scope:{ctx:n}}}),ye=new $t({props:{$$slots:{default:[R3]},$$scope:{ctx:n}}}),Be=new $t({props:{$$slots:{default:[C3]},$$scope:{ctx:n}}}),Pe=new $t({props:{$$slots:{default:[D3]},$$scope:{ctx:n}}}),q=new $t({props:{displayMode:!0,$$slots:{default:[L3]},$$scope:{ctx:n}}}),Ce=new $t({props:{$$slots:{default:[P3]},$$scope:{ctx:n}}}),ce=new $t({props:{displayMode:!0,$$slots:{default:[N3]},$$scope:{ctx:n}}}),$e=new $t({props:{$$slots:{default:[I3]},$$scope:{ctx:n}}}),Ze=new $t({props:{displayMode:!0,$$slots:{default:[U3]},$$scope:{ctx:n}}}),F=new $t({props:{displayMode:!0,$$slots:{default:[F3]},$$scope:{ctx:n}}}),ze=new $t({props:{$$slots:{default:[k3]},$$scope:{ctx:n}}}),ut=new $t({props:{displayMode:!0,$$slots:{default:[O3]},$$scope:{ctx:n}}}),Vn=new $t({props:{$$slots:{default:[z3]},$$scope:{ctx:n}}}),Wn=new $t({props:{displayMode:!0,$$slots:{default:[B3]},$$scope:{ctx:n}}}),rr=new $t({props:{$$slots:{default:[H3]},$$scope:{ctx:n}}}),X=new $t({props:{displayMode:!0,$$slots:{default:[G3]},$$scope:{ctx:n}}}),He=new $t({props:{displayMode:!0,$$slots:{default:[V3]},$$scope:{ctx:n}}}),At=new $t({props:{displayMode:!0,$$slots:{default:[W3]},$$scope:{ctx:n}}}),{c(){e=de("details"),t=de("summary"),t.textContent="Simulation Overview",r=ke(),i=de("div"),a=de("figure"),a.innerHTML=`<img src="${S3}" alt="Leopard Spots on Martian Rock" class="svelte-14obtkp"/> <figcaption class="svelte-14obtkp">Fig 1. Mars &#39;Leopard Spots&#39; in Jezero Crater.
        <br/> <small>Credit: NASA/JPL-Caltech/MSSS</small></figcaption>`,s=ke(),o=de("section"),o.innerHTML=`<h3 class="svelte-14obtkp">Background</h3> <p class="svelte-14obtkp">In March of this year NASA announced that the Mars Perseverance rover
        had observed patterns in fossilized mudstone at the Jezero Crater, a
        location once likely filled with liquid water. Dubbed &#39;leopard spots&#39;,
        the patterns contain light interiors and darker rims. The millimeter
        scale spots are rich in iron containing minerals, likely vivianite and
        greigite, and formed by &quot;reaction fronts&quot; of iron reduction spreading
        outward from a center point.</p> <p class="svelte-14obtkp">The Jezero Crater&#39;s low temperature past rules out known non-biological
        causes for these reactions. Bacteria capable of creating similar iron
        reduction patterns do exist on Earth, making the Jezero Crater discovery
        possibly the strongest sign of extraterrestrial life we currently have.</p>`,l=ke(),c=de("figure"),c.innerHTML=`<img src="${M3}" alt="Earth reduction patterns collage" class="svelte-14obtkp"/> <figcaption class="svelte-14obtkp">Fig 2. Geobacter reduction spots.
        <br/> <small>Credits: (a) Fox et al. (2019), (b) Andeskie et al. (2018), (c)
          Spinks et al. (2014), (d) McMahon et al. (2018)</small></figcaption>`,u=ke(),d=de("section"),d.innerHTML=`<h3 class="svelte-14obtkp"><em>Geobacter metallireducens</em></h3> <p class="svelte-14obtkp"><em>Geobacter</em> are a genus of bacteria that can live off the energy
        released by chemical reactions involving inorganic compounds (like those
        found in minerals), a process known as
        <em>chemosynthesis</em>. As <em>Geobacter</em> bacteria deplete local resources
        and propagate outward, they create a chemical reaction front, which over
        time creates a pattern in the inorganic medium. This pattern is not directly
        found in any single bacteria&#39;s lifecycle, but instead exists as an emergent
        property from the interaction between the population and the environment.</p> <p class="svelte-14obtkp">One species, <em>Geobacter metallireducens</em>, has many of the
        characteristics that a hypothetical martian organism would need: it is
        an anaerobic bacteria found in lake mud, it reduces ferric iron (Fe<sup>3+</sup>) into ferrous iron (Fe<sup>2+</sup>), and it can move towards
        increasing concentrations of Fe<sup>3+</sup>.</p>`,p=ke(),_=de("figure"),_.innerHTML=`<img src="${w3}" alt="Geobacter flow diagram" class="svelte-14obtkp"/> <figcaption class="svelte-14obtkp">Fig 3. <em>Geobacter metallireducens</em> flow diagram
        <br/> <small>Rates: r<sub>r</sub>: replication; r<sub>c</sub>: consumption; r<sub>w</sub>: waste; r<sub>d</sub>: death; r<sub>ad</sub>: active to dormant; r<sub>da</sub>: dormant to active
          <br/>
          Movement: m<sub>f</sub>: water flow (undirected); m<sub>g</sub>:
          nutrient gradient (directed)</small></figcaption>`,x=ke(),g=de("section"),m=de("h3"),m.textContent="Mathematical Model",f=ke(),S=de("p"),S.textContent=`The simulation creates a system of multi-variable continuous time ODEs
        to track four density fields:`,y=ke(),A=de("ul"),A.innerHTML=`<li><strong>Fe<sup>3+</sup> concentration:</strong> The food resource gradient,
          initially generated with Perlin noise.</li> <li><strong>Fe<sup>2+</sup> concentration:</strong> The waste byproduct gradient,
          diffused locally as it&#39;s generated.</li> <li><strong>Active Bacteria (A):</strong> The active population consuming
          Fe<sup>3+</sup>, producing Fe<sup>2+</sup>, replicating, moving with a
          biased random walk toward increasing Fe<sup>3+</sup> gradient levels.</li> <li><strong>Dormant Bacteria (D):</strong> The inactive population, moving
          with an unbiased random walk, that can reactivate when Fe<sup>3+</sup>
          levels improve.</li>`,I=ke(),P=de("h4"),P.textContent="ODEs",D=ke(),K=de("div"),Ft(w.$$.fragment),C=ke(),B=de("h4"),B.textContent="Stage Transition Rates",W=ke(),ie=de("p"),U=ct(`The active-to-dormant and dormant-to-active transition rates depend on
        the resource level
        `),Ft(O.$$.fragment),Y=ct("."),te=ke(),Q=de("h4"),Q.textContent="Linear Resource Scaling",ne=ke(),ee=de("p"),oe=ct("Using the resource scale "),Ft(se.$$.fragment),j=ct(":"),re=ke(),ge=de("ul"),Le=de("li"),Ft(ye.$$.fragment),Oe=ct(": no resource available"),We=ke(),Ae=de("li"),Ft(Be.$$.fragment),V=ct(": max resources"),Tt=ke(),Ie=de("h4"),Ge=ct("1. Decreasing function "),Ft(Pe.$$.fragment),gt=ke(),Ke=de("p"),Ke.textContent="Start with the linear form:",R=ke(),E=de("div"),Ft(q.$$.fragment),fe=ke(),ue=de("p"),ue.innerHTML="<strong>Boundary conditions:</strong>",pe=ke(),Ue=de("ol"),we=de("li"),Ft(Ce.$$.fragment),Ye=ct(`: no food -> max
          move to dormancy
          `),nt=de("div"),Ft(ce.$$.fragment),mt=ke(),it=de("li"),Ft($e.$$.fragment),Ve=ct(`: max food ->
          no move to dormancy
          `),Ne=de("div"),Ft(Ze.$$.fragment),dt=ke(),wt=de("p"),wt.innerHTML="<strong>Result:</strong>",at=ke(),_e=de("div"),Ft(F.$$.fragment),Ee=ke(),Se=de("h4"),je=ct("2. Increasing function "),Ft(ze.$$.fragment),xt=ke(),pt=de("p"),pt.textContent="Start with the linear form:",Ht=ke(),qt=de("div"),Ft(ut.$$.fragment),Qt=ke(),on=de("p"),on.innerHTML="<strong>Boundary conditions:</strong>",na=ke(),Mr=de("ol"),Gn=de("li"),Ft(Vn.$$.fragment),$r=ct(`: no food -> no
          move to active
          `),Yr=de("div"),Ft(Wn.$$.fragment),Ra=ke(),Kr=de("li"),Ft(rr.$$.fragment),T=ct(`: max food ->
          max move to active
          `),z=de("div"),Ft(X.$$.fragment),J=ke(),$=de("p"),$.innerHTML="<strong>Result:</strong>",Re=ke(),Fe=de("div"),Ft(He.$$.fragment),Je=ke(),rt=de("h4"),rt.textContent="3. Scale by maximum rate constants",tt=ke(),et=de("p"),et.textContent="Multiply each linear function by its maximum rate constant:",Ut=ke(),en=de("div"),Ft(At.$$.fragment),ae(t,"class","svelte-14obtkp"),ae(a,"class","centered-image svelte-14obtkp"),ae(o,"class","svelte-14obtkp"),ae(c,"class","centered-image svelte-14obtkp"),ae(d,"class","svelte-14obtkp"),ae(_,"class","centered-image svelte-14obtkp"),ae(m,"class","svelte-14obtkp"),ae(S,"class","svelte-14obtkp"),ae(A,"class","svelte-14obtkp"),ae(P,"class","svelte-14obtkp"),ae(K,"class","math-block svelte-14obtkp"),ae(B,"class","svelte-14obtkp"),ae(ie,"class","svelte-14obtkp"),ae(Q,"class","svelte-14obtkp"),ae(ee,"class","svelte-14obtkp"),ae(ge,"class","svelte-14obtkp"),ae(Ie,"class","svelte-14obtkp"),ae(Ke,"class","svelte-14obtkp"),ae(E,"class","math-block svelte-14obtkp"),ae(ue,"class","svelte-14obtkp"),ae(nt,"class","math-block svelte-14obtkp"),ae(Ne,"class","math-block svelte-14obtkp"),ae(Ue,"class","svelte-14obtkp"),ae(wt,"class","svelte-14obtkp"),ae(_e,"class","math-block svelte-14obtkp"),ae(Se,"class","svelte-14obtkp"),ae(pt,"class","svelte-14obtkp"),ae(qt,"class","math-block svelte-14obtkp"),ae(on,"class","svelte-14obtkp"),ae(Yr,"class","math-block svelte-14obtkp"),ae(z,"class","math-block svelte-14obtkp"),ae(Mr,"class","svelte-14obtkp"),ae($,"class","svelte-14obtkp"),ae(Fe,"class","math-block svelte-14obtkp"),ae(rt,"class","svelte-14obtkp"),ae(et,"class","svelte-14obtkp"),ae(en,"class","math-block svelte-14obtkp"),ae(g,"class","svelte-14obtkp"),ae(i,"class","info-content svelte-14obtkp"),ae(e,"class","info-panel svelte-14obtkp")},m(ve,be){bt(ve,e,be),G(e,t),G(e,r),G(e,i),G(i,a),G(i,s),G(i,o),G(i,l),G(i,c),G(i,u),G(i,d),G(i,p),G(i,_),G(i,x),G(i,g),G(g,m),G(g,f),G(g,S),G(g,y),G(g,A),G(g,I),G(g,P),G(g,D),G(g,K),Pt(w,K,null),G(g,C),G(g,B),G(g,W),G(g,ie),G(ie,U),Pt(O,ie,null),G(ie,Y),G(g,te),G(g,Q),G(g,ne),G(g,ee),G(ee,oe),Pt(se,ee,null),G(ee,j),G(g,re),G(g,ge),G(ge,Le),Pt(ye,Le,null),G(Le,Oe),G(ge,We),G(ge,Ae),Pt(Be,Ae,null),G(Ae,V),G(g,Tt),G(g,Ie),G(Ie,Ge),Pt(Pe,Ie,null),G(g,gt),G(g,Ke),G(g,R),G(g,E),Pt(q,E,null),G(g,fe),G(g,ue),G(g,pe),G(g,Ue),G(Ue,we),Pt(Ce,we,null),G(we,Ye),G(we,nt),Pt(ce,nt,null),G(Ue,mt),G(Ue,it),Pt($e,it,null),G(it,Ve),G(it,Ne),Pt(Ze,Ne,null),G(g,dt),G(g,wt),G(g,at),G(g,_e),Pt(F,_e,null),G(g,Ee),G(g,Se),G(Se,je),Pt(ze,Se,null),G(g,xt),G(g,pt),G(g,Ht),G(g,qt),Pt(ut,qt,null),G(g,Qt),G(g,on),G(g,na),G(g,Mr),G(Mr,Gn),Pt(Vn,Gn,null),G(Gn,$r),G(Gn,Yr),Pt(Wn,Yr,null),G(Mr,Ra),G(Mr,Kr),Pt(rr,Kr,null),G(Kr,T),G(Kr,z),Pt(X,z,null),G(g,J),G(g,$),G(g,Re),G(g,Fe),Pt(He,Fe,null),G(g,Je),G(g,rt),G(g,tt),G(g,et),G(g,Ut),G(g,en),Pt(At,en,null),fn=!0},p(ve,[be]){const fi={};be&1&&(fi.$$scope={dirty:be,ctx:ve}),w.$set(fi);const Dt={};be&1&&(Dt.$$scope={dirty:be,ctx:ve}),O.$set(Dt);const qn={};be&1&&(qn.$$scope={dirty:be,ctx:ve}),se.$set(qn);const ra={};be&1&&(ra.$$scope={dirty:be,ctx:ve}),ye.$set(ra);const wr={};be&1&&(wr.$$scope={dirty:be,ctx:ve}),Be.$set(wr);const mi={};be&1&&(mi.$$scope={dirty:be,ctx:ve}),Pe.$set(mi);const Kt={};be&1&&(Kt.$$scope={dirty:be,ctx:ve}),q.$set(Kt);const Xn={};be&1&&(Xn.$$scope={dirty:be,ctx:ve}),Ce.$set(Xn);const pi={};be&1&&(pi.$$scope={dirty:be,ctx:ve}),ce.$set(pi);const ln={};be&1&&(ln.$$scope={dirty:be,ctx:ve}),$e.$set(ln);const gi={};be&1&&(gi.$$scope={dirty:be,ctx:ve}),Ze.$set(gi);const Ca={};be&1&&(Ca.$$scope={dirty:be,ctx:ve}),F.$set(Ca);const ia={};be&1&&(ia.$$scope={dirty:be,ctx:ve}),ze.$set(ia);const L0={};be&1&&(L0.$$scope={dirty:be,ctx:ve}),ut.$set(L0);const P0={};be&1&&(P0.$$scope={dirty:be,ctx:ve}),Vn.$set(P0);const N0={};be&1&&(N0.$$scope={dirty:be,ctx:ve}),Wn.$set(N0);const I0={};be&1&&(I0.$$scope={dirty:be,ctx:ve}),rr.$set(I0);const U0={};be&1&&(U0.$$scope={dirty:be,ctx:ve}),X.$set(U0);const F0={};be&1&&(F0.$$scope={dirty:be,ctx:ve}),He.$set(F0);const k0={};be&1&&(k0.$$scope={dirty:be,ctx:ve}),At.$set(k0)},i(ve){fn||(Rt(w.$$.fragment,ve),Rt(O.$$.fragment,ve),Rt(se.$$.fragment,ve),Rt(ye.$$.fragment,ve),Rt(Be.$$.fragment,ve),Rt(Pe.$$.fragment,ve),Rt(q.$$.fragment,ve),Rt(Ce.$$.fragment,ve),Rt(ce.$$.fragment,ve),Rt($e.$$.fragment,ve),Rt(Ze.$$.fragment,ve),Rt(F.$$.fragment,ve),Rt(ze.$$.fragment,ve),Rt(ut.$$.fragment,ve),Rt(Vn.$$.fragment,ve),Rt(Wn.$$.fragment,ve),Rt(rr.$$.fragment,ve),Rt(X.$$.fragment,ve),Rt(He.$$.fragment,ve),Rt(At.$$.fragment,ve),fn=!0)},o(ve){Lt(w.$$.fragment,ve),Lt(O.$$.fragment,ve),Lt(se.$$.fragment,ve),Lt(ye.$$.fragment,ve),Lt(Be.$$.fragment,ve),Lt(Pe.$$.fragment,ve),Lt(q.$$.fragment,ve),Lt(Ce.$$.fragment,ve),Lt(ce.$$.fragment,ve),Lt($e.$$.fragment,ve),Lt(Ze.$$.fragment,ve),Lt(F.$$.fragment,ve),Lt(ze.$$.fragment,ve),Lt(ut.$$.fragment,ve),Lt(Vn.$$.fragment,ve),Lt(Wn.$$.fragment,ve),Lt(rr.$$.fragment,ve),Lt(X.$$.fragment,ve),Lt(He.$$.fragment,ve),Lt(At.$$.fragment,ve),fn=!1},d(ve){ve&&_t(e),Nt(w),Nt(O),Nt(se),Nt(ye),Nt(Be),Nt(Pe),Nt(q),Nt(Ce),Nt(ce),Nt($e),Nt(Ze),Nt(F),Nt(ze),Nt(ut),Nt(Vn),Nt(Wn),Nt(rr),Nt(X),Nt(He),Nt(At)}}}class X3 extends Zi{constructor(e){super(),ji(this,e,null,q3,ui,{})}}function $3(n){let e,t,r,i,a,s,o,l,c,u,d,p,_,x,g,m;l=new x4({});let f={};return u=new f4({props:f}),n[4](u),_=new g4({props:{onStart:n[1],onPause:n[2],onReset:n[3]}}),g=new X3({}),{c(){e=de("main"),t=de("div"),r=de("header"),r.innerHTML='<h1 class="svelte-kxbqnr">Geobacter Simulation</h1> <p class="subtitle svelte-kxbqnr">Simulate iron reduction patterns from bacteria chemosynthesis</p>',i=ke(),a=de("div"),s=de("div"),o=de("div"),Ft(l.$$.fragment),c=ke(),Ft(u.$$.fragment),d=ke(),p=de("div"),Ft(_.$$.fragment),x=ke(),Ft(g.$$.fragment),ae(r,"class","svelte-kxbqnr"),ae(o,"class","canvas-with-layers svelte-kxbqnr"),ae(s,"class","visualization-area svelte-kxbqnr"),ae(p,"class","controls-area svelte-kxbqnr"),ae(a,"class","main-content svelte-kxbqnr"),ae(t,"class","app-container svelte-kxbqnr")},m(S,y){bt(S,e,y),G(e,t),G(t,r),G(t,i),G(t,a),G(a,s),G(s,o),Pt(l,o,null),G(o,c),Pt(u,o,null),G(a,d),G(a,p),Pt(_,p,null),G(t,x),Pt(g,t,null),m=!0},p(S,[y]){const A={};u.$set(A)},i(S){m||(Rt(l.$$.fragment,S),Rt(u.$$.fragment,S),Rt(_.$$.fragment,S),Rt(g.$$.fragment,S),m=!0)},o(S){Lt(l.$$.fragment,S),Lt(u.$$.fragment,S),Lt(_.$$.fragment,S),Lt(g.$$.fragment,S),m=!1},d(S){S&&_t(e),Nt(l),n[4](null),Nt(u),Nt(_),Nt(g)}}}function Y3(n,e,t){let r;function i(){r==null||r.start()}function a(){r==null||r.pause()}function s(){r==null||r.reset()}function o(l){Vi[l?"unshift":"push"](()=>{r=l,t(0,r)})}return[r,i,a,s,o]}class K3 extends Zi{constructor(e){super(),ji(this,e,Y3,$3,ui,{})}}new K3({target:document.getElementById("app")});
