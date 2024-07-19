import{c as ki,r as P,j as q,R as gh,a as ec,b as yh,d as xh,_ as bh,u as wh,e as or,f as Ch,z as Eh,s as _h,g as Rh,h as Sh,i as Ih,k as Dh,l as J,m as br,B as xa}from"./index-b3ed976a.js";const kh=ki("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),Th=ki("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),Ah=ki("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var tc=function(r,t){return(tc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Bt(r,t){function e(){this.constructor=r}tc(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Q(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function Z(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Nh=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Fh(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Fh(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function W(){return nc}var nc=null,Io=new Map,ti=new Map;function rc(r,t){var e=ac(r,t);return Io.get(e)}function Ph(r){return ti.get(r)}function Us(r){for(var t=Io.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function oc(r){var t=r.kernelName,e=r.backendName,n=ac(t,e);if(Io.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Io.set(n,r)}function Mh(r){var t=r.kernelName;ti.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),ti.set(t,r)}function ac(r,t){return t+"_"+r}function ni(r,t,e){return Math.max(r,Math.min(t,e))}function ic(r){return r%2==0?r:r+1}function Oh(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function D(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Se(r,t,e){e===void 0&&(e=""),D(Qe(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function wr(r){D(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function mr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||$t(r)&&!e)for(var n=0;n<r.length;++n)mr(r[n],t,e);else t.push(r);return t}function te(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Qe(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r){return r%1==0}function Bh(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function ri(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function cr(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Vs(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function Lh(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function Ye(r,t){var e=t.length;return D((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),D(r.every(function(n){return Ue(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function Bn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:Ye(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Lr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function Do(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function Wh(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function Uh(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Vh(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function $t(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function sc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function zh(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Ti(r){return typeof r=="string"||r instanceof String}function Hh(r){return typeof r=="boolean"}function Gh(r){return typeof r=="number"}function Kr(r){return Array.isArray(r)?Kr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":Gh(r)?"float32":Ti(r)?"string":Hh(r)?"bool":"float32"}function oi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ai(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Yt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function uc(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=mr(r)),e&&Wh(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function zs(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function cc(r,t){for(var e=Xr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Xr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function jt(){return W().platform.now()}function lc(r){r.forEach(function(t){D(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function jh(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",W().platform.encode(r,t)}function ko(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",W().platform.decode(r,t)}function Hs(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function qh(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var Kh=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Xh)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Xh=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?cr(o+"ms",9):o.error,u=cr(t,25),c=e.rank,l=e.size,f=cr(e.shape.toString(),14),h="";for(var d in a){var p=a[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Gs=20,Ir=3,ba=7;function $h(r,t,e,n){var o=Yt(t),a=function(c,l,f,h){var d=te(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?kr(c):c;if(m>1)for(var b=0;b<d/p;b++)for(var x=b*p,y=0;y<p;y++)v[y]=Math.max(v[y],Dr(g[x+y],0,f).length);return v}(r,t,e,o),i=t.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],b=f.length;if(b===0)return h==="complex64"?[Dr(kr(l)[0],0,h)]:h==="bool"?[fc(l[0])]:[l[0].toString()];if(b===1){if(g>Gs){var x=Ir*m,y=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-Ir)*m,g*m));return h==="complex64"&&(y=kr(y),w=kr(w)),["["+y.map(function(L,V){return Dr(L,p[V],h)}).join(", ")+", ..., "+w.map(function(L,V){return Dr(L,p[g-Ir+V],h)}).join(", ")+"]"]}return["["+(h==="complex64"?kr(l):Array.from(l)).map(function(L,V){return Dr(L,p[V],h)}).join(", ")+"]"]}var C=f.slice(1),R=d.slice(1),S=d[0]*m,E=[];if(g>Gs){for(var I=0;I<Ir;I++){var A=(T=I*S)+S;E.push.apply(E,c(l.slice(T,A),C,h,R,p,!1))}for(E.push("..."),I=g-Ir;I<g;I++)A=(T=I*S)+S,E.push.apply(E,c(l.slice(T,A),C,h,R,p,I===g-1))}else for(I=0;I<g;I++){var T;A=(T=I*S)+S,E.push.apply(E,c(l.slice(T,A),C,h,R,p,I===g-1))}var M=b===2?",":"";for(E[0]="["+E[0]+M,I=1;I<E.length-1;I++)E[I]=" "+E[I]+M;var B=`,
`;for(I=2;I<b;I++)B+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(v?"":B),E}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Dr(r,t,e){return cr(Array.isArray(r)?parseFloat(r[0].toFixed(ba))+" + "+parseFloat(r[1].toFixed(ba))+"j":Ti(r)?"'"+r+"'":e==="bool"?fc(r):parseFloat(r.toFixed(ba)).toString(),t)}function fc(r){return r===0?"false":"true"}function kr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var Wr=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=te(t),n!=null){var a=n.length;D(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Do(e,this.size),this.strides=Yt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),D(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return qt().makeTensor(this.values,this.shape,this.dtype)},r}(),qt=null,O=null,hc=null,Me=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=te(t),this.strides=Yt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),D(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),O.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return Q(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,O.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return O.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return Q(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,zs(this.shape,t)]}})})},r.prototype.arraySync=function(){return zs(this.shape,this.dataSync())},r.prototype.data=function(){return Q(this,void 0,void 0,function(){var t,e;return Z(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=qt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return ko(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=qt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return ko(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return Q(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,qt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(qt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),O.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),O.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),O.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),O.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),O.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),O.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),O.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),$h(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),O.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),O.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),O.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),O.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),O.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),O.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),O.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),O.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),O.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),O.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),O.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),hc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),O.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),O.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),O.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),O.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),O.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),O.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),O.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),O.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),O.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),O.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),O.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),O.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),O.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),O.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),O.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),O.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),O.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),O.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),O.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),O.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),O.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),O.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),O.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),O.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),O.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),O.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),O.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),O.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),O.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),O.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),O.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),O.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),O.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),O.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),O.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),O.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),O.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),O.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),O.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),O.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),O.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),O.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),O.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),O.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),O.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),O.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),O.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),O.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),O.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),O.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),O.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),O.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),O.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),O.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),O.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),O.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),O.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),O.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),O.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),O.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),O.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),O.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),O.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),O.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),O.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),O.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),O.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),O.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),O.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),O.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),O.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),O.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),O.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),O.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),O.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),O.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),O.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),O.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),O.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),O.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),O.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),O.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),O.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),O.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),O.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),O.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),O.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),O.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),O.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),O.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),O.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),O.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),O.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),O.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),O.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),O.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),qt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),O.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),O.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),O.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),O.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),O.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),O.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),O.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),O.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),O.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),O.spectral.irfft(this)},r}();Object.defineProperty(Me,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var js,ii,si,ui,ci,gr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Bt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Qe(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");qt().disposeTensor(this),this.dataId=e.dataId,qt().incRef(this,null)},t.prototype.dispose=function(){qt().disposeVariable(this),this.isDisposedInternal=!0},t}(Me);Object.defineProperty(gr,Symbol.hasInstance,{value:function(r){return r instanceof Me&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(js||(js={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(ii||(ii={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(si||(si={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(ui||(ui={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(ci||(ci={}));var Yh={float32:ui,int32:ii,bool:si,complex64:ci};function tt(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Yh[r][t]}function wa(r){return tt(r,"int32")}function Be(r,t){if(r.dtype===t.dtype)return[r,t];var e=tt(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Jh(r,t){D(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function dc(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Me)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var Ca,qs=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Qh=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new qs}return r.prototype.ready=function(){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return Q(this,void 0,void 0,function(){var e,n,o;return Z(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Kh(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Us(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;Us(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(b){f&&(l=b.map(function(x){return c.keep(c.clone(x))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=rc(o,this.backendName);return h=g!=null?function(){var b=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var x=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x);var y=x.map(function(C){var R=C.dataId,S=C.shape,E=C.dtype;return c.makeTensorFromDataId(R,S,E)}),w=y.filter(function(C,R){return s[R]});return d((i||[]).slice().concat(w)),y}:function(){var b=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,d)});var x=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(b){return e[b].shape}),outputShapes:u.map(function(b){return b.shape})}),Array.isArray(m)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Ti(t[0])&&(a=t.map(function(l){return jh(l)}));var i=o.write(a,e,n),s=new Me(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=zh(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Me(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new gr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*sc(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof gr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=Ph(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=n[f],d=Xr(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=dc(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),D(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});D(i instanceof Me,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,b=0;b<c.length;b++)if(f[m.id]){C.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,h[C.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,b=0;b<C.outputs.length;b++)if(x[C.outputs[b].id]){for(var v in p)x[p[v].id]=!0,y[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(h[(C=u[d]).id]&&y[C.id]){var R={};for(var v in C.inputs){var S=C.inputs[v];f[S.id]&&(R[v]=S)}var E=Object.assign({},C);E.inputs=R,E.outputs=C.outputs,w.push(E)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=cc(te(u),"float32"),N.makeTensor(c,u,"float32")),function(h,d,p){for(var v=function(g){var b=d[g],x=[];if(b.outputs.forEach(function(R){var S=h[R.id];S!=null?x.push(S):x.push(null)}),b.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+b.kernelName+".");var y=b.gradient(x),w=function(R){if(!(R in y))throw new Error("Cannot backprop through input "+R+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[R]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input "+R+" must have 'float32' dtype, but has '"+S.dtype+"'");var E=b.inputs[R];if(!Qe(S.shape,E.shape))throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input '"+R+"' has shape '"+S.shape+"', which does not match the shape of the input '"+E.shape+"'");if(h[E.id]==null)h[E.id]=S;else{var I=h[E.id];h[E.id]=I.add(S),I.dispose()}};for(var C in b.inputs)w(C)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(h){return a.tidy(h)});var f=e.map(function(h){return l[h.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return D(oi(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];D(o.every(function(s){return s instanceof Me}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return D((n=t.apply(void 0,o.concat([u]))).value instanceof Me,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),D(oi(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];D(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),D(l.every(function(h){return h instanceof Me}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=jt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=jt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new qs,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(Ca==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Ca=e}return Ca}();if(r._tfengine==null){var t=new Nh(r);r._tfengine=new Qh(t)}return function(e){nc=e}(r._tfengine.ENV),qt=function(){return r._tfengine},r._tfengine}();function pc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var on=W();on.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),on.registerFlag("IS_BROWSER",function(){return pc()}),on.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),on.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),on.registerFlag("PROD",function(){return!1}),on.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return on.getBool("DEBUG")}),on.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),on.registerFlag("IS_TEST",function(){return!1});var Ur,wt,bt,Mn={},Ea={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Zh(r,t){Mn[r]=t}function en(r){r in Mn||(Mn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Mn[e]},!1),e===1?n.getContext("webgl",Ea)||n.getContext("experimental-webgl",Ea):n.getContext("webgl2",Ea)}(r));var t=Mn[r];return t.isContextLost()?(delete Mn[r],en(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Mn[r])}function Qo(r,t){return[t,r]}function Mr(r){var t=te(r);return ri(Math.ceil(t/4))}function $r(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function Ai(r,t){var e,n,o,a,i,s,u,c,l,f=r;return W().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function oe(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+rd(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(Ur||(Ur={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(wt||(wt={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(bt||(bt={}));var ed=596e-10,td=65504;function nd(r){return!!(W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||ed<Math.abs(r)&&Math.abs(r)<td)}function rd(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function io(r,t,e){return cn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function od(r,t,e){var n=cn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(oe(r,t,function(){return r.shaderSource(n,e)}),oe(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function ad(r,t,e){var n=cn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(oe(r,t,function(){return r.shaderSource(n,e)}),oe(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=id.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return cr((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+cr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var _a,Ra,id=/ERROR: [0-9]+:([0-9]+):/g;function sd(r,t){return cn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function ud(r,t,e){if(oe(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Sa(r,t,e){if(oe(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function cd(r,t,e){var n=cn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return oe(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),oe(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function ld(r,t,e){var n=cn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return oe(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),oe(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function fd(r,t){return cn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function hd(r,t){var e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function dd(r,t){return cn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Ks(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(oe(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),oe(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),oe(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function pd(r,t,e,n){xd(r,n),oe(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function vd(r,t,e,n){return cn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function md(r,t,e){return r.getUniformLocation(t,e)}function gd(r,t,e,n,o,a){oe(r,t,function(){return pd(r,t,n,a)}),oe(r,t,function(){return r.uniform1i(o,a)})}function Ia(r,t,e,n){oe(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),oe(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Xs(r,t,e){oe(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),oe(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function so(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+yd(r,t))}function yd(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function cn(r,t,e,n){var o=oe(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function xd(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function To(r,t){return t===void 0&&(t=2),te(r.slice(0,r.length-t))}function Ao(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Da(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[To(r)].concat(Ao(r))),t}function bd(r,t){var e;t===void 0&&(t=!1);var n=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?ic(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=Bn(r);r=o.newShape}var a=te(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=To(r),s=2,u=2;return r.length&&(s=(e=Ao(r))[0],u=e[1]),ri(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return ri(a)}function uo(r){return r%2==0}function co(r,t){if(Qe(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||uo(e)&&uo(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&uo(r[0])&&uo(t[0])}function wd(r){if(_a==null){var t=en(r);_a=t.getParameter(t.MAX_TEXTURE_SIZE)}return _a}function Cd(r){if(Ra==null){var t=en(r);Ra=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ra)}function Ed(r){if(r===0)return 0;var t=en(r);return At(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:At(t,"EXT_disjoint_timer_query")?1:0}function At(r,t){return r.getExtension(t)!=null}function $s(r){try{if(en(r)!=null)return!0}catch{return!1}return!1}function _d(r){if(r===0)return!1;var t=en(r);if(r===1){if(!At(t,"OES_texture_float"))return!1}else if(!At(t,"EXT_color_buffer_float"))return!1;return li(t)}function Rd(r){if(r===0)return!1;var t=en(r);if(r!==1){if(At(t,"EXT_color_buffer_float"))return li(t);if(At(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=Ai(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!At(t,"OES_texture_float")&&!!At(t,"WEBGL_color_buffer_float")&&li(t)}function li(r){var t=Ai(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Sd(r){return r===2&&en(r).fenceSync!=null}var se=W();function vc(r){W().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return N.tidy(r,t)}function pt(r){dc(r).forEach(function(t){return t.dispose()})}function Id(r){return N.keep(r)}function No(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];W().getBool("IS_TEST")||console.warn.apply(console,r)}function kn(r,t){var e=r;if($t(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||$t(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&W().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!$t(a))return void D(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});D(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),D(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Ys(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function _(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Me)return Ys(n,r.dtype,t,e),r;var o=Kr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Ys(n,o,t,e),r==null||!$t(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=kn(r,o);$t(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?uc(r,o,W().getBool("DEBUG")):mr(r,[],!0);return N.makeTensor(s,i,o)}function Fo(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return _(o,t+"["+a+"]",e)},n)}function mc(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Dd(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function it(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function vt(r,t){return Dd(r,t.map(function(e){return 1}),t)}function xt(r,t,e){D(mc(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function tn(r,t){if(mc(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Ni(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function nn(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function kd(r,t){var e=r[0].length;r.forEach(function(o,a){D(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),D(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)D(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function yr(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function k(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];N.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}se.registerFlag("HAS_WEBGL",function(){return se.getNumber("WEBGL_VERSION")>0}),se.registerFlag("WEBGL_VERSION",function(){return $s(2)?2:$s(1)?1:0}),se.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return se.get("WEBGL_VERSION")===2}),se.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),se.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),se.registerFlag("WEBGL_PACK",function(){return se.getBool("HAS_WEBGL")}),se.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_CLIP",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),se.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_REDUCE",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_LAZILY_UNPACK",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_CONV_IM2COL",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return wd(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Cd(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=se.getNumber("WEBGL_VERSION");return r===0?0:Ed(r)}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return se.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),se.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return _d(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!se.getBool("WEBGL_FORCE_F16_TEXTURES")&&se.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),se.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Rd(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Sd(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return se.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),hc=vc;var et=k({complex_:function(r,t){var e=_(r,"real","complex"),n=_(t,"imag","complex");return Se(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),Tt=k({real_:function(r){var t=_(r,"input","real");return N.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Kt=k({imag_:function(r){var t=_(r,"input","imag");return N.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function nt(r,t,e){return Tn(r,t,kn(r,e),e)}function Tn(r,t,e,n){if(n==null&&(n=Kr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!$t(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){lc(t);var o=te(t),a=te(e);D(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==te(t.slice(i));D(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return $t(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?uc(r,n,W().getBool("DEBUG")):mr(r,[],!0),N.makeTensor(r,t,n)}function K(r,t){if(($t(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&$t(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Tn(r,[],[],t)}function Ge(r,t){wr(r);var e=kn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Tn(r,null,e,t)}function _n(r,t,e){if(wr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=kn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Tn(r,t,n,e)}function Fi(r,t,e){if(wr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=kn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Tn(r,t,n,e)}function ht(r,t,e){if(wr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=kn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Tn(r,t,n,e)}function Td(r,t,e){if(wr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=kn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Tn(r,t,n,e)}function Ad(r,t,e){if(wr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=kn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Tn(r,t=t||n,n,e)}function Nd(r,t,e,n){return t===void 0&&(t=!0),N.makeVariable(r,t,e,n)}function Cr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Cr(r,"float32"),n=Ne(r,"float32");return et(e,n)}var o=cc(te(r),t);return N.makeTensor(o,r,t)}function Ne(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ne(r,"float32"),n=Ne(r,"float32");return et(e,n)}var o=Xr(te(r),t);return N.makeTensor(o,r,t)}function Jt(r,t,e){return N.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function Fd(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function Po(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ne([0],n);var o=Xr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Ge(o,n)}var gc=k({onesLike_:function(r){var t=_(r,"x","onesLike");if(t.dtype==="complex64"){var e=gc(Tt(t)),n=Ce(Kt(t));return et(e,n)}return N.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return Ce(o)}}})}}),Ce=k({zerosLike_:function(r){var t=_(r,"x","zerosLike");return N.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return Ce(e)}}})}}),qe=k({concat_:function(r,t){t===void 0&&(t=0),D(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Fo(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Ye(t,e[0].shape)[0];var n=yr(e.map(function(s){return s.shape}),t);if(te(n)===0)return nt([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});kd(o,t);var a=e,i={axis:t};return N.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return Pi(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),Pd=k({concat1d_:function(r){return qe(r,0)}}),Md=k({concat2d_:function(r,t){return qe(r,t)}}),Od=k({concat3d_:function(r,t){return qe(r,t)}}),Bd=k({concat4d_:function(r,t){return qe(r,t)}}),Pi=k({split_:function(r,t,e){e===void 0&&(e=0);var n,o=_(r,"x","split");return e=Ye(e,o.shape)[0],typeof t=="number"?(D(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(D(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),N.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return qe(a,e)}}})}});function jn(r,t){return r(t={exports:{}},t.exports),t.exports}var Ld=jn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),Wd=jn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),Ud=jn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),Vd=jn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),zd=jn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),Hd=jn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),On=jn(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function h(g,b,x){var y=[],w=v(function S(E,I){var A,T=[],M=typeof E;if(I&&M=="object")for(A in E)try{T.push(S(E[A],I-1))}catch{}return T.length?T:M=="string"?E:E+"\0"}((b=b==1?{entropy:!0}:b||{}).entropy?[g,m(t)]:g??function(){try{var S;return n&&(S=n.randomBytes)?S=S(a):(S=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(S)),m(S)}catch{var E=o.navigator,I=E&&E.plugins;return[+new Date,o,I,o.screen,m(t)]}}(),3),y),C=new d(y),R=function(){for(var S=C.g(i),E=u,I=0;S<c;)S=(S+I)*a,E*=a,I=C.g(1);for(;S>=l;)S/=2,E/=2,I>>>=1;return(S+I)/E};return R.int32=function(){return 0|C.g(4)},R.quick=function(){return C.g(4)/4294967296},R.double=R,v(m(C.S),t),(b.pass||x||function(S,E,I,A){return A&&(A.S&&p(A,C),S.state=function(){return p(C,{})}),I?(e[s]=S,E):S})(R,w,"global"in b?b.global:this==e,b.state)}function d(g){var b,x=g.length,y=this,w=0,C=y.i=y.j=0,R=y.S=[];for(x||(g=[x++]);w<a;)R[w]=w++;for(w=0;w<a;w++)R[w]=R[C=f&C+g[w%x]+(b=R[w])],R[C]=b;(y.g=function(S){for(var E,I=0,A=y.i,T=y.j,M=y.S;S--;)E=M[A=f&A+1],I=I*a+M[f&(M[A]=M[T=f&T+E])+(M[T]=E)];return y.i=A,y.j=T,I})(a)}function p(g,b){return b.i=g.i,b.j=g.j,b.S=g.S.slice(),b}function v(g,b){for(var x,y=g+"",w=0;w<y.length;)b[f&w]=f&(x^=19*b[f&w])+y.charCodeAt(w++);return m(b)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),t),r.exports){r.exports=h;try{n=require("crypto")}catch{}}})([],Math)});On.alea=Ld,On.xor128=Wd,On.xorwow=Ud,On.xorshift7=Vd,On.xor4096=zd,On.tychei=Hd;var Zo=On.alea,Mi=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Zo(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),Gd=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=Zo(a.toString()),this.randn=new Mi(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),jd=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Zo(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function fe(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",lc(r),new Wr(r,t,e)}function qd(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var yc=k({batchToSpaceND_:function(r,t,e){var n=_(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return D(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),D(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),D(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),N.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),Kd=k({broadcastTo_:function(r,t){var e=_(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():N.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Xd=k({cast_:function(r,t){var e=_(r,"x","cast");if(!Uh(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return N.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),$d=k({clone_:function(r){var t=_(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Yd=k({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=_(r,"x","cumsum"),a=tn([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=nn(1,o.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Jd=k({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=_(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return D(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),D(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),D(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),N.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),kt=k({expandDims_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","expandDims",null);D(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(D(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Mt(e,n)}}),xc=k({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=fe([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return lr(kt(s,0),[e[0],1,1]);if(e.length===2)return lr(kt(kt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return lr(kt(kt(kt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Qd=k({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=N.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),fi=k({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),N.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return Ne(o.shape,"float32")}}}).reshape(a)}}),qn=k({pad_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return N.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Zd=k({pad1d_:function(r,t,e){return e===void 0&&(e=0),D(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),qn(r,[t],e)}}),ep=k({pad2d_:function(r,t,e){return e===void 0&&(e=0),D(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),qn(r,t,e)}}),tp=k({pad3d_:function(r,t,e){return e===void 0&&(e=0),D(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),qn(r,t,e)}}),np=k({pad4d_:function(r,t,e){return e===void 0&&(e=0),D(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),qn(r,t,e)}}),rp=k({rand_:function(r,t,e){var n=te(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return N.makeTensor(o,r,e)}}),op=k({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Mi(t,e,n,!1,o),i=fe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),ap=k({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new Gd(t,e,n,o),i=fe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),bc=k({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=fe(r,n),i=new jd(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Mt=k({reshape_:function(r,t){var e=_(r,"x","reshape",null);t=Lh(t,e.size),D(e.size===te(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return N.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),wc=k({spaceToBatchND_:function(r,t,e){var n=_(r,"x","spaceToBatchND");return D(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),D(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),D(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Cc=k({squeeze_:function(r,t){var e=_(r,"x","squeeze");return Mt(e,Bn(e.shape,t).newShape)}}),_t=k({stack_:function(r,t){t===void 0&&(t=0);var e=Fo(r,"tensors","stack");if(D(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;D(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Se(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){D(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return qe(i,t)}}),lr=k({tile_:function(r,t){var e=_(r,"x","tile",null);D(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return N.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=Ce(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),ip=k({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Mi(t,e,n,!0,o),i=fe(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ke=k({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=_(r,"x","unstack");D(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return N.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return _t(o,t)}}},"Unpack",n)}}),sp=function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return Z(this,function(h){switch(h.label){case 0:return e=_(r,"x","setdiff1d"),n=_(t,"y","setdiff1d"),D(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),D(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),D(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,n.data()];case 2:for(a=h.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new Wr([s],e.dtype),c=new Wr([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Mo(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Oo(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Bo(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function Ec(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function _c(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function Rc(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Yt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var Sc=30;function ka(r){return r<=Sc?r:ai(r,Math.floor(Math.sqrt(r)))}function up(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function cp(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}up(e,t,r)}function Lo(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:te(t.shape)/u,sliceSize:i,strides:Yt(e.slice(0,o)).concat([1]),outputSize:te(e)}}function lp(r,t,e){D(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),D(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){D(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Js(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Oi(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function fp(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=ni(0,a,s-1)}function hp(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?ni(0,a,s):ni(-1,a,s-1)}function Ic(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function Dc(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function dp(r,t){D(oi(r),function(){return"The f passed in variableGrads(f) must be a function"}),D(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof gr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],N.registeredVariables)t.push(N.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;D((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=N.gradients(r,t,null,!0),s=i.value,u=i.grads;D(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),D(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ea(r){return N.customGrad(r)}var ln=k({softmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return N.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),pp=k({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ea(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),kc=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Tc=function(){function r(){}return r.prototype.time=function(t){return F("time")},r.prototype.read=function(t){return F("read")},r.prototype.readSync=function(t){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(t){return F("disposeData")},r.prototype.write=function(t,e,n){return F("write")},r.prototype.move=function(t,e,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return F("slice")},r.prototype.stridedSlice=function(t,e,n,o){return F("stridedSlice")},r.prototype.unstack=function(t,e){return F("unstack")},r.prototype.reverse=function(t,e){return F("reverse")},r.prototype.concat=function(t,e){return F("concat")},r.prototype.neg=function(t){return F("neg")},r.prototype.add=function(t,e){return F("add")},r.prototype.addN=function(t){return F("addN")},r.prototype.subtract=function(t,e){return F("subtract")},r.prototype.multiply=function(t,e){return F("multiply")},r.prototype.realDivide=function(t,e){return F("realDivide")},r.prototype.floorDiv=function(t,e){return F("floorDiv")},r.prototype.sum=function(t,e){return F("sum")},r.prototype.prod=function(t,e){return F("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return F("argMin")},r.prototype.argMax=function(t,e){return F("argMax")},r.prototype.equal=function(t,e){return F("equal")},r.prototype.notEqual=function(t,e){return F("notEqual")},r.prototype.less=function(t,e){return F("less")},r.prototype.lessEqual=function(t,e){return F("lessEqual")},r.prototype.greater=function(t,e){return F("greater")},r.prototype.greaterEqual=function(t,e){return F("greaterEqual")},r.prototype.logicalNot=function(t){return F("logicalNot")},r.prototype.logicalAnd=function(t,e){return F("logicalAnd")},r.prototype.logicalOr=function(t,e){return F("logicalOr")},r.prototype.where=function(t){return F("where")},r.prototype.select=function(t,e,n){return F("select")},r.prototype.topk=function(t,e,n){return F("topk")},r.prototype.min=function(t,e){return F("min")},r.prototype.minimum=function(t,e){return F("minimum")},r.prototype.mod=function(t,e){return F("mod")},r.prototype.max=function(t,e){return F("max")},r.prototype.maximum=function(t,e){return F("maximum")},r.prototype.all=function(t,e){return F("all")},r.prototype.any=function(t,e){return F("any")},r.prototype.squaredDifference=function(t,e){return F("squaredDifference")},r.prototype.ceil=function(t){return F("ceil")},r.prototype.floor=function(t){return F("floor")},r.prototype.round=function(t){return F("round")},r.prototype.sign=function(t){return F("sign")},r.prototype.isNaN=function(t){return F("isNaN")},r.prototype.isInf=function(t){return F("isInf")},r.prototype.isFinite=function(t){return F("isFinite")},r.prototype.pow=function(t,e){return F("pow")},r.prototype.exp=function(t){return F("exp")},r.prototype.expm1=function(t){return F("expm1")},r.prototype.softmax=function(t,e){return F("softmax")},r.prototype.log=function(t){return F("log")},r.prototype.log1p=function(t){return F("log1p")},r.prototype.sqrt=function(t){return F("sqrt")},r.prototype.rsqrt=function(t){return F("rsqrt")},r.prototype.square=function(t){return F("square")},r.prototype.reciprocal=function(t){return F("reciprocal")},r.prototype.relu=function(t){return F("relu")},r.prototype.relu6=function(t){return F("relu6")},r.prototype.prelu=function(t,e){return F("prelu")},r.prototype.elu=function(t){return F("elu")},r.prototype.eluDer=function(t,e){return F("eluDer")},r.prototype.selu=function(t){return F("selu")},r.prototype.int=function(t){return F("int")},r.prototype.clip=function(t,e,n){return F("clip")},r.prototype.abs=function(t){return F("abs")},r.prototype.complexAbs=function(t){return F("complexAbs")},r.prototype.sigmoid=function(t){return F("sigmoid")},r.prototype.softplus=function(t){return F("softplus")},r.prototype.sin=function(t){return F("sin")},r.prototype.cos=function(t){return F("cos")},r.prototype.tan=function(t){return F("tan")},r.prototype.asin=function(t){return F("asin")},r.prototype.acos=function(t){return F("acos")},r.prototype.atan=function(t){return F("atan")},r.prototype.atan2=function(t,e){return F("atan2")},r.prototype.sinh=function(t){return F("sinh")},r.prototype.cosh=function(t){return F("cosh")},r.prototype.tanh=function(t){return F("tanh")},r.prototype.asinh=function(t){return F("asinh")},r.prototype.acosh=function(t){return F("acosh")},r.prototype.atanh=function(t){return F("atanh")},r.prototype.erf=function(t){return F("erf")},r.prototype.step=function(t,e){return F("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return F("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return F("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return F("reshape")},r.prototype.cast=function(t,e){return F("cast")},r.prototype.tile=function(t,e){return F("tile")},r.prototype.pad=function(t,e,n){return F("pad")},r.prototype.transpose=function(t,e){return F("transpose")},r.prototype.gather=function(t,e,n){return F("gather")},r.prototype.gatherND=function(t,e){return F("gatherND")},r.prototype.scatterND=function(t,e,n){return F("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return F("multinomial")},r.prototype.oneHot=function(t,e,n,o){return F("oneHot")},r.prototype.cumsum=function(t,e,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(t){return F("fft")},r.prototype.ifft=function(t){return F("ifft")},r.prototype.complex=function(t,e){return F("complex")},r.prototype.real=function(t){return F("real")},r.prototype.imag=function(t){return F("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return F("depthToSpace")},r.prototype.split=function(t,e,n){return F("split")},r.prototype.sparseToDense=function(t,e,n,o){return F("sparseToDense")},r.prototype.diag=function(t){return F("diag")},r.prototype.fill=function(t,e,n){return F("fill")},r.prototype.onesLike=function(t){return F("onesLike")},r.prototype.zerosLike=function(t){return F("zerosLike")},r.prototype.linspace=function(t,e,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function wn(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Xe(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function we(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function Vr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=Vo(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Kn(r,s,e,n,o,a,!1,i)}function Wo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=hi(t),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return Uo(r,s,e,n,o,!1,u,a)}function Kn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=t[0],v=t[1],m=t[3],g=Vo(e),b=g[0],x=g[1],y=Vo(n),w=y[0],C=y[1],R=fr(p,w),S=fr(v,C),E=function(B,L,V,z,U,G,j,X){var ee,ae,ue;if(typeof B=="number"){ee={top:B,bottom:B,left:B,right:B,type:B===0?"VALID":"NUMBER"};var ce=function(me,_e,Ee,Fe,Ie){Fe==null&&(Fe=Ac(me,_e,Ee));var ke=me[0],St=me[1],ot=Or((ke-_e+2*Fe)/Ee+1,Ie);D(Ue(ot),function(){return"The output # of rows ("+ot+") must be an integer. Change the stride and/or zero pad parameters"});var ft=Or((St-_e+2*Fe)/Ee+1,Ie);return D(Ue(ft),function(){return"The output # of columns ("+ft+") must be an integer. Change the stride and/or zero pad parameters"}),[ot,ft]}([L,V],G,z,B,X);ae=ce[0],ue=ce[1]}else if(B==="same"){ae=Math.ceil(L/z),ue=Math.ceil(V/U);var de=Math.max(0,(ae-1)*z+G-L),ve=Math.max(0,(ue-1)*U+j-V),he=Math.floor(de/2),xe=de-he,Y=Math.floor(ve/2);ee={top:he,bottom:xe,left:Y,right:ve-Y,type:"SAME"}}else{if(B!=="valid")throw Error("Unknown padding parameter: "+B);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},ae=Math.ceil((L-G+1)/z),ue=Math.ceil((V-j+1)/U)}return{padInfo:ee,outHeight:ae,outWidth:ue}}(o,l,f,b,x,R,S,a),I=E.padInfo,A=E.outHeight,T=E.outWidth,M=i?m*h:m;return s==="channelsFirst"?d=[c,M,A,T]:s==="channelsLast"&&(d=[c,A,T,M]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:A,outWidth:T,outChannels:M,padInfo:I,strideHeight:b,strideWidth:x,filterHeight:p,filterWidth:v,effectiveFilterHeight:R,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function Uo(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,v=t[0],m=t[1],g=t[2],b=t[4],x=hi(e),y=x[0],w=x[1],C=x[2],R=hi(n),S=R[0],E=R[1],I=R[2],A=fr(v,S),T=fr(m,E),M=fr(g,I),B=function(j,X,ee,ae,ue,ce,de,ve,he,xe,Y){var me,_e,Ee,Fe;if(typeof j=="number"){me={top:j,bottom:j,left:j,right:j,front:j,back:j,type:j===0?"VALID":"NUMBER"};var Ie=function(mn,It,Er,gt,yt,_r){yt==null&&(yt=Ac(mn,It,gt));var ga=mn[0],Jn=mn[1],ya=mn[2],Rr=Or((ga-It+2*yt)/gt+1,_r);D(Ue(Rr),function(){return"The output # of depths ("+Rr+") must be an integer. Change the stride and/or zero pad parameters"});var Sr=Or((Jn-It+2*yt)/gt+1,_r);D(Ue(Sr),function(){return"The output # of rows ("+Sr+") must be an integer. Change the stride and/or zero pad parameters"});var ie=Or((ya-It+2*yt)/gt+1,_r);return D(Ue(ie),function(){return"The output # of columns ("+ie+") must be an integer. Change the stride and/or zero pad parameters"}),[Rr,Sr,ie,Er]}([X,ee,ae,1],ve,1,ue,j,Y);_e=Ie[0],Ee=Ie[1],Fe=Ie[2]}else if(j==="same"){_e=Math.ceil(X/ue),Ee=Math.ceil(ee/ce),Fe=Math.ceil(ae/de);var ke=(_e-1)*ue+ve-X,St=(Ee-1)*ce+he-ee,ot=(Fe-1)*de+xe-ae,ft=Math.floor(ke/2),rn=ke-ft,Ft=Math.floor(St/2),Vt=St-Ft,at=Math.floor(ot/2);me={top:Ft,bottom:Vt,left:at,right:ot-at,front:ft,back:rn,type:"SAME"}}else{if(j!=="valid")throw Error("Unknown padding parameter: "+j);me={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},_e=Math.ceil((X-ve+1)/ue),Ee=Math.ceil((ee-he+1)/ce),Fe=Math.ceil((ae-xe+1)/de)}return{padInfo:me,outDepth:_e,outHeight:Ee,outWidth:Fe}}(o,l,f,h,y,w,C,A,T,M,s),L=B.padInfo,V=B.outDepth,z=B.outHeight,U=B.outWidth,G=a?b*d:b;return i==="channelsFirst"?p=[c,G,V,z,U]:i==="channelsLast"&&(p=[c,V,z,U,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:V,outHeight:z,outWidth:U,outChannels:G,padInfo:L,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:T,effectiveFilterWidth:M,dilationDepth:S,dilationHeight:E,dilationWidth:I,inShape:r,outShape:p,filterShape:t}}function Ac(r,t,e,n){n===void 0&&(n=1);var o=fr(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function Vo(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function hi(r){return typeof r=="number"?[r,r,r]:r}function fr(r,t){return t<=1?r:r+(r-1)*(t-1)}function Or(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function xr(r){var t=Vo(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function mt(r,t){return xr(r)||xr(t)}function Bi(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function Nc(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ne(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!Vh(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=K(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function di(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function Fc(r,t,e){var n=(t-r)/(e-1),o=Xr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Ge(o,"float32")}function pi(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Qs(r,t){return{real:r[2*t],imag:r[2*t+1]}}function vp(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function mp(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function gp(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(a,i,s||yp)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function yp(r,t){return r>t?1:r<t?-1:0}function Li(r,t,e,n,o){return Pc(r,t,e,n,o,0).selectedIndices}function Wi(r,t,e,n,o,a){var i=Pc(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Pc(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Zs),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var b=xp(r,p,l[g]);if(b>=n){m=!0;break}if(h.score=h.score*bp(n,c,b),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&gp(u,h,Zs))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:Ge(l,"int32"),selectedScores:Ge(f,"float32"),numValidOutputs:K(x,"int32")}}function xp(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(s,f),b=Math.min(u,h),x=Math.max(g-v,0)*Math.max(b-m,0);return x/(d+p-x)}function bp(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Zs(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function Mc(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function Oc(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=fe(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Bc(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Lr(e,s*n),l=Lr("int32",s*n),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(y,w){return w.value-y.value});var m=f*n,g=c.subarray(m,m+n),b=l.subarray(m,m+n);for(v=0;v<n;v++)g[v]=p[v].value,b[v]=p[v].index}var x=t.slice();return x[x.length-1]=n,[nt(c,x,e),nt(l,x,"int32")]}function Ui(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=fe(r,"int32"),a=fe([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var wp=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Cp=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Ep=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Lc(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function dt(r,t){return t===1?[r]:Lc(r,t)}function ut(){var r,t,e,n,o,a,i,s,u,c;return W().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Ln(r,t,e){e===void 0&&(e="index");var n=Yt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Vi(r){var t=Yt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Wc=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function _p(r,t,e,n){var o=[];r.forEach(function(d){var p=te(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?Uc(p):ar(p);var b=p.shapeInfo.logicalShape,x=v.logicalShape;return b.length<=x.length&&(g+=m?function(y,w){var C,R=y.name,S=R.charAt(0).toUpperCase()+R.slice(1),E="get"+S+"AtOutCoords",I=y.shapeInfo.logicalShape.length,A=w.logicalShape.length,T=wn(y.shapeInfo.logicalShape,w.logicalShape),M=Te(A),B=A-I,L=["x","y","z","w","u","v"];C=I===0?"":A<2&&T.length>=1?"coords = 0;":T.map(function(ee){return"coords."+L[ee+B]+" = 0;"}).join(`
`);var V="";V=A<2&&I>0?"coords":y.shapeInfo.logicalShape.map(function(ee,ae){return"coords."+L[ae+B]}).join(", ");var z="return outputValue;",U=te(y.shapeInfo.logicalShape)===1,G=te(w.logicalShape)===1;if(I!==1||U||G){if(U&&!G)z=A===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(T.length){var j=I-2,X=I-1;T.indexOf(j)>-1&&T.indexOf(X)>-1?z="return vec4(outputValue.x);":T.indexOf(j)>-1?z="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":T.indexOf(X)>-1&&(z="return vec4(outputValue.xx, outputValue.zz);")}}else z=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+M+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+S+"("+V+`);
      `+z+`
    }
  `}(p,v):function(y,w){var C=y.name,R=C.charAt(0).toUpperCase()+C.slice(1),S="get"+R+"AtOutCoords",E=w.texShape,I=y.shapeInfo.texShape,A=y.shapeInfo.logicalShape.length,T=w.logicalShape.length;if(!y.shapeInfo.isUniform&&A===T&&y.shapeInfo.flatOffset==null&&Qe(I,E))return`
      float `+S+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var M,B=Te(T),L=wn(y.shapeInfo.logicalShape,w.logicalShape),V=T-A,z=["x","y","z","w","u","v"];M=A===0?"":T<2&&L.length>=1?"coords = 0;":L.map(function(G){return"coords."+z[G+V]+" = 0;"}).join(`
`);var U="";return U=T<2&&A>0?"coords":y.shapeInfo.logicalShape.map(function(G,j){return"coords."+z[j+V]}).join(", "),`
    float `+S+`() {
      `+B+` coords = getOutputCoords();
      `+M+`
      return get`+R+"("+U+`);
    }
  `}(p,v)),g}(d,t,n)}).join(`
`),c=t.texShape,l=ut(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Rp+`
    `+Sp+`
    `+Ip+`
  `}(l);return t.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Qe(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var R=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],b=Math.ceil(v[2]/2),x=b*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+b+`);
      int c = imod(index, `+b+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],R=Math.ceil(y[y.length-1]/2),S=R*Math.ceil(y[y.length-2]/2),E=S,I="",A="b, r, c",T=2;T<y.length-1;T++)E*=y[y.length-T-1],I=`
      int b`+T+" = index / "+E+`;
      index -= b`+T+" * "+E+`;
    `+I,A="b"+T+", "+A;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec`+y.length+"("+A+`);
    }
  `}(d,p)}var v,m,g,b,x}(t.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,b){return b[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+b[1]+`.0);
      }
    `:b[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+b[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      return resTexRC.x * `+b[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,b){return Qe(g,b)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+b[0]+", "+b[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=Ln(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,b){var x=Ln(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,b){var x=Ln(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+b[0]+`,
                             `+b[1]+`));

      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,b){var x=Ln(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(h+=Dp),[h,f,i,s,a,u,e].join(`
`)}function ar(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=Fn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Qn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Fn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Qe(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Bn(n),l=c.newShape,f=c.keptDims,h=l;if(h.length<n.length){var d=ir(e,h);return`
      `+ar(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+sr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Qn(e)+`
      }
    `;var p=i[0],v=i[1],m=Fn(o);return v===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=Bn(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var h=ir(e,f);return`
        `+ar(h)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+sr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Qn(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===i&&m==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Fn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=Bn(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var h=ir(e,l);return`
      `+ar(h)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+sr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Qn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Fn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=Bn(n),f=l.newShape,h=l.keptDims;if(f.length<n.length){var d=ir(e,f);return`
      `+ar(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+sr(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Qn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=Fn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Bn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=ir(e,s);return`
      `+ar(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+sr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,h=n[3]*f,d=n[2]*h,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Qn(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],b=m[1];if(b===p&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(b===l&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Fn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+b+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Uc(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=ut(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=ut();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=ut();if(u!=null&&Qe(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=ir(o,l);return`
        `+Uc(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+sr(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(a[2]/2),v=p*Math.ceil(a[1]/2),m=ut();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)v="int b"+g+", "+v,p*=a[i-g-1],m="b"+g+" * "+p+" + "+m;var b=ut();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+b.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Rp=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Sp=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Ip=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Dp=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Fn(r){return"offset"+r}function Qn(r){var t=r.name,e=te(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Te(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function ir(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function sr(r,t){return t.map(function(e){return r[e]}).join(", ")}var kp=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,D(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Te(c),f=dt("coords",c);if(a===1){var h=Te(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(S){return"int "+S}),m=dt("sourceLocR",s-1).concat("inIdx.r"),g=dt("sourceLocG",s-1).concat("inIdx.g"),b=dt("sourceLocB",s-1).concat("inIdx.b"),x=dt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+b.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",C=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+b.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",R=n?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+R+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},Tp=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Ap=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,v=h-1-r.padInfo.left,m=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Np=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],we(r,t),we(r,e);var i="0.0";n!=null&&(we(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(we(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Fp=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],we(r,t),we(r,e);var i="vec4(0.0)";n!=null&&(we(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(we(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Pp="return areal * breal - aimag * bimag;",Mp="return areal * bimag + aimag * breal;",eu=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=we(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ta="return a + b;",Aa="return a - b;",tu="return a * b;",Vc="return (a < 0.) ? b * a : a;",Le=function(r,t,e){this.variableNames=["A","B"],this.outputShape=we(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},zc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,an=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=we(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||te(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Te(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=dt("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},Op=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Bp=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Lp=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Wp=function(r){this.outputShape=[],this.outputShape=yr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},Up=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=yr(r,t);var e=this.outputShape,n=e.length,o=Te(n),a=dt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(m,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+lo(i,c,d)+`),
            vec2(`+lo(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+lo(i,c,v)+`),
          vec2(`+lo(l,c,v)+"));",this.userCode=`
      float getValue(`+i.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function lo(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var Vp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},zp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Hp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Gp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},jp=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},qp=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},nu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,b="",x="";e&&(b=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+x+`
        setOutput(result);
      }
    `},Kp=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ru=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,v="",m="";e&&(v=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},ou=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var b=0;b<p;b++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*b)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var x=s%2==0?ic(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},Xp=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],b=m[1],x=m[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],C=y[1],R=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+b+`;
        float width_scale = `+C+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+R+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},$p=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Te(n)+` coords = getOutputCoords();
        int end = `+au(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+au(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function au(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Yp=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Ur.DENSE;var t=Mr(r),e=ut();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Ln(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Jp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Ur.DENSE;var t=Mr(r),e=ut();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Ln(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Qp=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Zp=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},ev=function(r){this.variableNames=["A"],this.outTexUsage=wt.DOWNLOAD;var t=ut();this.outputShape=r,this.userCode=`
      `+Wc+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},tv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=wt.DOWNLOAD;var t=ut();this.outputShape=r,this.userCode=`
      `+Wc+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},nv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=ut(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Vi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},rv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=ut(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Vi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},ov="return real * expR - imag * expI;",av="return real * expI + imag * expR;",iu=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},iv=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),sv=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Te(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},uv=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Te(t.length),o=Te(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function cv(r,t){var e=ut();return od(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function lv(r,t){return cd(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function fv(r,t){return ld(r,t,new Uint16Array([0,1,2,2,1,3]))}function Yr(r,t,e,n,o,a,i){hd(e,n);var s=fd(r,t),u=r.TEXTURE_2D;return oe(r,t,function(){return r.bindTexture(u,s)}),oe(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),oe(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),oe(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),oe(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),oe(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function hv(r,t,e,n,o){var a=Qo(e,n);return Yr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function dv(r,t,e,n,o){var a=Qo(e,n);return Yr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function pv(r,t,e,n,o){var a=Qo(e,n);return Yr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function vv(r,t,e,n,o){var a=$r(e,n);return Yr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function mv(r,t,e,n,o){var a=$r(e,n);return Yr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function gv(r,t,e,n){return oe(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Ks(r,t,e,"clipSpacePos",n,3,20,0)&&Ks(r,t,e,"uv",n,2,20,12)}function yv(r,t,e,n,o,a,i){var s,u,c;oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),oe(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function xv(r,t,e,n){oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?oe(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):oe(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),oe(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function bv(r,t,e,n,o){var a=r.createBuffer();oe(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return oe(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),oe(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),oe(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function wv(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Cv(r,t,e,n,o){var a=Qo(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return oe(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Ev(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var h=$r(l,f);return h[0]*h[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function _v(r,t,e,n){var o=new Float32Array(e*n*4);return oe(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var Rv=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=W().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Zh(e,t)):this.gl=en(e);var n="WEBGL_color_buffer_float";if(W().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=io(this.gl,this.debug,"OES_texture_float"),At(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=io(this.gl,this.debug,"OES_texture_half_float");else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),At(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=io(this.gl,this.debug,"EXT_color_buffer_half_float");else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",At(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!At(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=lv(this.gl,this.debug),this.indexBuffer=fv(this.gl,this.debug),this.framebuffer=dd(this.gl,this.debug),this.textureConfig=Ai(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return W().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;oe(e,this.debug,function(){return e.finish()}),oe(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),oe(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),oe(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),oe(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),oe(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),hv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),dv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),pv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),xv(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),yv(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),mv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),vv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Xs(this.gl,this.debug,this.framebuffer),this.outputTexture=null),oe(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Cv(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Ev(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return wv(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=bv(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(W().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return _v(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=ad(e,this.debug,t),o=cv(e,this.debug),a=sd(e,this.debug);return oe(e,this.debug,function(){return e.attachShader(a,o)}),oe(e,this.debug,function(){return e.attachShader(a,n)}),ud(e,this.debug,a),this.debug&&Sa(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=gv(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&oe(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Sa(this.gl,this.debug,this.program),oe(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?vd(this.gl,this.debug,t,e):md(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),oe(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),gd(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=$r(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Sa(this.gl,this.debug,this.program),so(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),oe(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),oe(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=io(this.gl,this.debug,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return Q(this,void 0,void 0,function(){var e=this;return Z(this,function(n){switch(n.label){case 0:return[4,Vs(function(){return e.disposed||e.isQueryAvailable(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Vs(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Ia(this.gl,this.debug,t,this.framebuffer),this.debug&&so(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Ia(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&so(this.gl)):Xs(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Ia(o,this.debug,t,this.framebuffer),this.debug&&so(o),this.outputTexture=t,oe(o,this.debug,function(){return o.viewport(0,0,e,n)}),oe(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),oe(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function su(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Qe(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Qe(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Sv=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*n,v=ut(),m=f==="channelsLast",g=m?0:1,b=m?1:2,x="",y=0;y<=1;y++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[b]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+v.output+` = result;
      }
    `},Iv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Dv=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},kv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},Tv=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Av=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Na=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},Nv=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Fv=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Pv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=dt("rc",t),n=Te(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},Mv=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Te(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Ov=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+r[g]+m[1]});for(var n=r.length,o=Te(n),a=t.map(function(m){return m[0]}).join(","),i=t.map(function(m,g){return m[0]+r[g]}).join(","),s=dt("rc",n),u=dt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=n===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},Fa=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(n/4),m=n%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Pa=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var x=4*Math.floor(n/4),y=n%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},Bv=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},Lv=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Ln(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Vi(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Wv=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Uv=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Vv=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},zv=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Hv=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Gv=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Te(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},jv=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=dt("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Te(e);function s(u){var c=r.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},uu=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Te(o.length),u=Te(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},qv=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Kv=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Te(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Xv=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Te(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Ma.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Ma[s]+" = start["+s+"] + coords."+Ma[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Ma=["x","y","z","w","u","v"],$v=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Te(this.rank),n=dt("coords",this.rank),o=dt("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Yv=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Te(e.length),a=Te(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Jv=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=cu(e,n),i=lu(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===bt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===bt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===bt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===bt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===bt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=lu(e,cu(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function cu(r,t){if(r===wt.UPLOAD)return bt.PACKED_2X2_FLOAT32;if(r===wt.RENDER||r==null)return function(e){return W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?bt.PACKED_2X2_FLOAT32:bt.UNPACKED_FLOAT32:e?bt.PACKED_2X2_FLOAT16:bt.UNPACKED_FLOAT16}(t);if(r===wt.DOWNLOAD||r===wt.PIXELS)return bt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function lu(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Qv=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Te(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Zv=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Te(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},em=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Te(this.rank),a=Lc("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},zi=1.7580993408473768,Hi=1.0507009873554805,pe=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Lt="if (isnan(x)) return x;",tm="return x;",fu="return abs(x);",Hc=Lt+`
  return (x < 0.0) ? 0.0 : x;
`,Gc=Lt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,jc="return (x >= 0.0) ? x : (exp(x) - 1.0);",nm=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+zi+`;
  float scale = `+Hi+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,hu="return -x;",du="return ceil(x);",pu="return floor(x);",vu="return exp(x);",mu="return exp(x) - 1.0;",rm=Lt+`
  return sin(x);
`,om=Lt+`
  return cos(x);
`,am=Lt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,im=Lt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,sm=Lt+`
  return atan(x);
`,um=Lt+"return log(x + sqrt(x * x + 1.0));",cm=Lt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,lm=Lt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,fo="return x;",fm="return x;",qc=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Kc=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Xc=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Tr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},hm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=dt("rc",t),n=Te(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},ho={};function po(r,t){if(t===void 0&&(t=!1),r==="linear")return t?fm:tm;if(r==="relu")return t?qc:Hc;if(r==="elu")return t?Xc:jc;if(r==="relu6")return t?Kc:Gc;if(r==="prelu")return t?zc:Vc;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var dm=600,pm=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!W().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=en(W().getNumber("WEBGL_VERSION"));o.binaryCache=((n=W().getNumber("WEBGL_VERSION"))in ho||(ho[n]={}),ho[n]),o.gpgpu=new Rv(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Jv(o.gpgpu),o.numMBBeforeWarning=W().global.screen==null?1024:W().global.screen.height*W().global.screen.width*window.devicePixelRatio*dm/1024/1024,o.texData=new kc(o,N),o}return Bt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(W().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:wt.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(W().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:wt.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new Tr(u,fo):new pe(u,fo);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=jt()),a==="complex64"?p=pi(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=jt()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,C,R,S;return Z(this,function(E){switch(E.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(I){return n.push(I)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new Tr(i,fo):new pe(i,fo),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&W().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&W().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[m.texture].concat(Mr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return b=E.sent(),x=b[0],y=b[1],g=pi(x,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=te(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),E.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(e,g),R=this.pendingRead.get(e),this.pendingRead.delete(e),R.forEach(function(I){return I(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!nd(o))throw W().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=te(a);if(W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Mr(a))).subarray(0,u);return this.disposeData(c.dataId),f}var h=W().getBool("WEBGL_PACK")&&s===!0,d=h?Da(a):a,p=h?new tv(d):new ev(d),v=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=mr(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=mr(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Oh(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:jt(),endMs:null}},t.prototype.endTimer=function(e){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=jt(),e)},t.prototype.getQueryTime=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return W().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(te(o)===0)return nt([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Ic(e.shape,n,o);if(a||!i){var s=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $v(o):new Xv(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Dc(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Oi(n,o,a);if(i.some(function(u){return u===0}))return nt([],i);var s=new Yv(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new jv(e.shape,n):new Gv(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return Tt(d)}),a=e.map(function(d){return Kt(d)});return et(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Up(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=yr(e.map(function(d){return d.shape}),n),f=e.map(function(d){return d.as2D(-1,te(d.shape.slice(n)))}),h=new Wp(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hu,e.dtype);var n=new pe(e.shape,hu);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?n.as3D(c,1,u):n;return this.multiply(l,h).sum(f,!0)}var d=tt(e.dtype,n.dtype),p=new Na(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],h=n.shape[0],d=tt(n.dtype,o.dtype),p=s!=null,v=c!=null,m=u?po(u,!0):null,g=new Na(n.shape,[h,l,f],a,i,p,m,v),b=[n,o];return s&&b.push(s),c&&b.push(c),this.compileAndRun(g,b,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new eu(Pp,e.shape,n.shape),s=new eu(Mp,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,tu,e.dtype);var h=new Le(tu,e.shape,n.shape);return this.compileAndRun(h,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),W().getBool("WEBGL_PACK_NORMALIZATION")){var f=new Fp(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var h=new Np(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=W().getBool("WEBGL_PACK_NORMALIZATION")?new kv(e.shape,n,o,a,i):new Iv(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new Dv(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return ko(i)});return Oc(fe(e.shape,e.dtype,o),n)}var a=new Qv(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ov(e.shape,n,o):new Mv(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new em(e.shape,n):new Zv(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new sv(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){D(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,h){return f*h}),i=Mo(e.shape,n,a),s=Oo(i.length,n.length),u=Bo(e.shape,n,a),c=Ec(o,n.length),l=_c(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){D(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Mo(u.shape,n,a,!1),l=Oo(c.length,n.length,!1),f=Bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=ka(i),u=new Bv({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=ka(i),u=new Ep({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=ka(a[a.length-1]),s=new kp(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){xt("sum",n,e.rank);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i),u=wa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i),u=wa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=tn([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=nn(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,b=0;b<g;b++)b!==p?m.push(d[b]):m.push(v);return m}(s.shape,a,o),c=te([s.shape[a]]),l=s.as2D(-1,c),f=wa(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(h=h.transpose(Ni(i))),h},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=Sc?(p=h,v=!0):p=ai(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=ai(h,p+1);return p}(u,i),l=new qv({windowSize:c,inSize:u,batchSize:s,numSegments:i}),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=Po(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(xt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!W().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=it(e.shape,a),s=i[0],u=te(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new $p(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Le("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Le("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Le("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Le("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Le("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Le("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new pe(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Le("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Le("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new Kv(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],tt(n.dtype,o.dtype))},t.prototype.where=function(e){No("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Ui(e.shape,n)},t.prototype.topk=function(e,n,o){return Bc(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){xt("min",n,e.rank);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Le(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Le(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);xt("max",n,e.rank);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Le(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){xt("all",n,e.rank);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){xt("any",n,e.rank);var o=it(e.shape,n),a=o[0],i=te(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Le(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Le(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ta);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=tt(e.dtype,n.dtype);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ta,o);var a=new Le(Ta,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new Tr(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new an(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=a.makeComplexComponentTensorInfo(e,d),m=a.makeComplexComponentTensorInfo(n,p),g=new Le(o,e.shape,n.shape);return a.compileAndRun(g,[v,m],tt(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>W().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return tt(c,l)}),s=e.map(function(c){return c.shape}),u=W().getBool("WEBGL_PACK")?new Cp(e[0].shape,s):new wp(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Aa);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=tt(e.dtype,n.dtype);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Aa,e.dtype);var a=new Le(Aa,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Le(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=tt(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,du,e.dtype);var n=new pe(e.shape,du);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,pu,e.dtype);var n=new pe(e.shape,pu);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new pe(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new pe(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new pe(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new pe(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new pe(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,vu,e.dtype);var n=new pe(e.shape,vu);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,mu,e.dtype);var n=new pe(e.shape,mu);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Ye([n],e.shape),a=this.max(e,o),i=vt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new pe(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new pe(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new pe(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new pe(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new pe(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=W().getBool("WEBGL_PACK")?new Tr(e.shape,qc):new pe(e.shape,Hc),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=W().getBool("WEBGL_PACK")?new Tr(e.shape,Kc):new pe(e.shape,Gc),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(zc,e.shape,n.shape):new Le(Vc,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Xc,e.dtype);var n=new pe(e.shape,jc);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Le("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new pe(e.shape,nm);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new pe(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=W().getBool("WEBGL_PACK_CLIP")?new Bp(e.shape):new Op(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fu,e.dtype);var n=new pe(e.shape,fu);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new Lp(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new pe(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new pe(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new pe(e.shape,rm);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new pe(e.shape,om);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new pe(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new pe(e.shape,am);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new pe(e.shape,im);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new pe(e.shape,sm);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Le(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new pe(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new pe(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new pe(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new pe(e.shape,um);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new pe(e.shape,cm);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new pe(e.shape,lm);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new pe(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new pe(e.shape,function(a){return a===void 0&&(a=0),Lt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!W().getBool("WEBGL_LAZILY_UNPACK")||!W().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),b=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var x=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,x,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,D(co(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),R=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),S=this.texData.get(R.dataId);return D(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=o.outShape,N.makeTensorFromDataId(R.dataId,o.outShape,R.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=e.squeeze([0]),b=n.reshape([1,p,-1]),x=new Sv(m,g.shape,o),y=this.compileAndRun(x,[g]).reshape([1,m[0],m[1]]),w=a!=null,C=s!=null,R=i?po(i,!0):null,S=new Na(y.shape,[1,v,o.outChannels],!0,!1,w,R,C),E=[y,b];a&&E.push(a),C&&E.push(s);var I=this.compileAndRun(S,E);return d?I.reshape([1,h,f,o.outChannels]):I.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(W().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?po(s,!1):null,h=new nu(a,c,f,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(W().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new nu(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new zp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new Vp(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=W().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?po(u,l):null,h=[o,a],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(n=new ou(i,d,f,p),this.compileAndRun(n,h)):(n=new ru(i,d,f,p),this.compileAndRun(n,h))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return W().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new ou(o),this.compileAndRun(a,[e,n])):(a=new ru(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new qp(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new jp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new Kp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new Gp(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new Hp(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new Fa(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new Fa(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new Fa(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Tv(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new Tp(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return Nc(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new Pa(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new Ap(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new Pa(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new Pa(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Av(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!co(e.shape,n)&&(o.texture===null||!co(o.shape,n))){var a=this.packedReshape(e,n);return N.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return di(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Vv(e.shape,n,o,a):new Uv(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new Wv(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new Hv(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new zv(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:ln(e),s=i.shape[0],u=i.shape[1],c=new Nv(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new Fv(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new Zp(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return No("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Li(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new Xp(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){D(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),h=new Qp(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,n,o){return Mc(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=Lo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return di(nt([]),o);var p=K(0),v=new uu(s,i,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=Lo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new uu(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new iu(ov,e.shape,n),i=new iu(av,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Rc(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),h=e.reshape([e.size/c,c]),d=new uv(a,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||Kr(n))==="string"){var a=Do(o,te(e));return a.fill(n),N.makeTensor(a,e,o,this)}var i=new iv(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return Fc(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return N.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new hm(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Pv(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[To(e.shape)].concat(Ao(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[To(n)].concat(Ao(n)),s=new Lv(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=Da(i);return n=a?new Jp(u):new Yp(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Ur.DENSE){var l=Mr(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),te(u.shape)===0)return c.values=Lr(u.dtype,0),u;var f=[],h=n.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(x.dataId);if(y.texture==null){if(!e.packedInputs&&te(x.shape)<=W().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=x.shape)}else if(!!y.isPacked!=!!e.packedInputs)x=y.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),y=s.texData.get(x.dataId);else if(y.isPacked&&!co(y.shape,x.shape)){var w=x,C=x.shape;x.shape=y.shape,x=s.packedReshape(x,C),f.push(x),y=s.texData.get(x.dataId),w.shape=C}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(x,y,w){var C="";y.concat(w).forEach(function(E){var I=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,A=E.isUniform?"uniform":E.texData.texShape;C+=E.shape+"_"+A+"_"+I});var R=x.userCode,S=x.constructor.name;return S+="_"+C+"_"+R}(e,h,p),m=this.getAndSaveBinary(v,function(){return function(x,y,w,C){var R=y.userCode,S=w.map(function(U,G){var j={logicalShape:U.shape,texShape:U.isUniform?null:U.texData.texShape,isUniform:U.isUniform,isPacked:!U.isUniform&&U.texData.isPacked,flatOffset:null};return U.texData!=null&&U.texData.slice!=null&&U.texData.slice.flatOffset>0&&(j.flatOffset=U.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:j}}),E=S.map(function(U){return U.shapeInfo}),I={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},A=_p(S,I,R,y.packedInputs),T=x.createProgram(A),M=null,B=x.getUniformLocation(T,"NAN",!1);W().getNumber("WEBGL_VERSION")===1&&(M=x.getUniformLocation(T,"INFINITY",!1));for(var L={},V=0;V<y.variableNames.length;V++){var z=y.variableNames[V];L[z]=x.getUniformLocation(T,z,!1),L["offset"+z]=x.getUniformLocation(T,"offset"+z,!1)}return{program:y,source:A,webGLProgram:T,uniformLocations:L,inShapeInfos:E,outShapeInfo:I,infLoc:M,nanLoc:B}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(x,y,w,C,R){su(y.inShapeInfos,w),su([y.outShapeInfo],[C]);var S=C.texData.texture,E=C.texData.texShape;C.texData.isPacked?x.setOutputPackedMatrixTexture(S,E[0],E[1]):x.setOutputMatrixTexture(S,E[0],E[1]),x.setProgram(y.webGLProgram),W().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&x.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&x.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(I,A){var T=y.program.variableNames[A],M=y.uniformLocations[T],B=y.uniformLocations["offset"+T];if(M!=null)if(I.isUniform)if(te(I.shape)<2)x.gl.uniform1f(M,I.uniformValues[0]);else{var L=I.uniformValues;L instanceof Float32Array||(L=new Float32Array(L)),x.gl.uniform1fv(M,L)}else I.texData.slice!=null&&B!=null&&x.gl.uniform1i(B,I.texData.slice.flatOffset),x.setInputMatrixTexture(I.texData.texture,M,A)}),R!=null&&R(x,y.webGLProgram),x.executeProgram()}(this.gpgpu,m,h,p,a),f.forEach(function(x){return s.disposeData(x.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!W().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var b=this.unpackTensor(u);return this.disposeData(u.dataId),b}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(W().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!W().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=W().getBool("DEBUG");W().set("DEBUG",!1);var o=e.abs(K(1e-8)).dataSync()[0];if(W().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=jt());var d=o.texShape;if(d==null&&(d=bd(a,l),o.texShape=d),s!=null){var p=Da(a),v=void 0,m=d[1],g=d[0],b=s instanceof Uint8Array;l?(m=(n=$r(d[0],d[1]))[0],g=n[1],v=new rv(p,[g,m],b)):v=new nv(p,[g,m],b);var x=this.makeTensorInfo([g,m],i);this.texData.get(x.dataId).usage=b?wt.PIXELS:wt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),m,g,s);var y=this.runWebGLProgram(v,[x],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=jt()-f)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*sc(n)},t}(Tc);pc()&&N.registerBackend("webgl",function(){return new pm},2);var vm=k({square_:function(r){var t=_(r,"x","square"),e=[t];return N.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),zr="SquaredDifference",$c=k({squaredDifference_:function(r,t){var e,n=_(r,"a","squaredDifference"),o=_(t,"b","squaredDifference");e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=K(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},zr,{},i,[])}}),mm=k({abs_:function(r){var t=_(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):N.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),gm=k({acos_:function(r){var t=_(r,"x","acos");return N.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),ym=k({acosh_:function(r){var t=_(r,"x","acosh");return N.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),xm=k({asin_:function(r){var t=_(r,"x","asin");return N.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).sub(o.toFloat().square()).sqrt())}}})}}),bm=k({asinh_:function(r){var t=_(r,"x","asinh");return N.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).add(o.toFloat().square()).sqrt())}}})}}),wm=k({atan_:function(r){var t=_(r,"x","atan");return N.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Cm=k({atanh_:function(r){var t=_(r,"x","atanh");return N.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(K(1).sub(o.toFloat().square()))}}})}}),Em=k({ceil_:function(r){var t=_(r,"x","ceil");return N.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Gi=k({clipByValue_:function(r,t,e){var n=_(r,"x","clipByValue");D(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return N.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Ce(i))}}},"ClipByValue",a,o)}}),_m=k({cos_:function(r){var t=_(r,"x","cos"),e=[t];return N.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Rm=k({cosh_:function(r){var t=_(r,"x","cosh");return N.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Sm=k({erf_:function(r){var t=_(r,"x","erf");return D(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),vi=k({exp_:function(r){var t=_(r,"x","exp");return N.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Im=k({expm1_:function(r){var t=_(r,"x","expm1");return N.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),Dm=k({floor_:function(r){var t=_(r,"x","floor");return N.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),km=k({log_:function(r){var t=_(r,"x","log"),e=[t];return N.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),Tm=k({log1p_:function(r){var t=_(r,"x","log1p");return N.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),Am=k({logSigmoid_:function(r){var t=_(r,"x","logSigmoid");return N.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),zo=k({neg_:function(r){var t=_(r,"x","neg"),e=[t];return N.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),Nm=k({reciprocal_:function(r){var t=_(r,"x","reciprocal");return N.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Fm=k({round_:function(r){var t=_(r,"x","round");return N.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Yc=k({rsqrt_:function(r){var t=_(r,"x","rsqrt"),e=[t];return N.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Jc=k({sigmoid_:function(r){var t=_(r,"x","sigmoid");return N.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(K(1).sub(o)))}}},"Sigmoid")}}),Pm=k({sign_:function(r){var t=_(r,"x","sign");return N.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Mm=k({isNaN_:function(r){var t=_(r,"x","isNaN");return N.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Om=k({isInf_:function(r){var t=_(r,"x","isInf");return N.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Bm=k({isFinite_:function(r){var t=_(r,"x","isFinite");return N.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return Ce(e)}}})}}),Lm=k({sin_:function(r){var t=_(r,"x","sin"),e=[t];return N.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),Wm=k({sinh_:function(r){var t=_(r,"x","sinh");return N.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Um=k({softplus_:function(r){var t=_(r,"x","softplus");return N.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Vm=k({sqrt_:function(r){var t=_(r,"x","sqrt");return N.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),zm=k({step_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","step");return N.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return Ce(n)}}})}}),Hm=k({tan_:function(r){var t=_(r,"x","tan");return N.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Gm=k({tanh_:function(r){var t=_(r,"x","tanh");return N.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return K(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Qc(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),D(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),D(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),D(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&D(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&D(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Jr(u,c,l,s,i,a)}function Zc(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),D(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),D(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),D(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&D(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&D(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Jr(u,c,l,s,i,a)}function el(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),D(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),D(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),D(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&D(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&D(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Jr(u,c,l,s,i,a)}function Jr(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(t,"mean","batchNorm"),f=_(e,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),D(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),D(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),D(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return N.runKernelFunc(function(d,p){var v=d.batchNormalization(u,vo(l),vo(f),a,vo(i),vo(s));return p([c,l,f,i]),v},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var v=p,m=v[0],g=v[1],b=v[2],x=v[3],y=x??K(1),w=Xe(g.shape,u.shape),C=[];if(g.rank===1){for(var R=0;R<u.shape.length-1;++R)C.push(u.shape[R]);C.push(1)}var S=m.sub(g),E=d.mul(y),I=Yc(b.add(K(a))),A=I.mul(I).mul(I).mul(K(-.5));return{x:function(){return g.rank===1?d.mul(lr(I.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(m.shape):d.mul(I).mul(y).reshape(m.shape)},mean:function(){var T=I.mul(K(-1)).mul(E);return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)},variance:function(){var T=A.mul(S).mul(E);return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)},scale:function(){var T=S.mul(I),M=d.mul(T);return g.rank===1&&(M=M.sum(w)),M.reshape(g.shape)},offset:function(){var T=d;return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},h).reshape(c.shape)}function vo(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function ta(){vc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var jm=k({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),ta(),Qc(r,t,e,a,o,n)}}),qm=k({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),ta(),Zc(r,t,e,a,o,n)}}),Km=k({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),ta(),el(r,t,e,a,o,n)}}),Xm=k({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),ta(),Jr(r,t,e,a,o,n)}}),tl=k({batchNorm_:Jr}),$m=k({batchNorm2d_:Qc}),Ym=k({batchNorm3d_:Zc}),Jm=k({batchNorm4d_:el}),na=k({logicalAnd_:function(r,t){var e=_(r,"a","logicalAnd","bool"),n=_(t,"b","logicalAnd","bool");return we(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Qm=k({logicalNot_:function(r){var t=_(r,"x","logicalNot","bool");return N.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),nl=k({logicalOr_:function(r,t){var e=_(r,"a","logicalOr","bool"),n=_(t,"b","logicalOr","bool");return we(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),Zm=k({logicalXor_:function(r,t){var e=_(r,"a","logicalXor","bool"),n=_(t,"b","logicalXor","bool");return we(e.shape,n.shape),nl(r,t).logicalAnd(na(r,t).logicalNot())}}),zn=k({where_:function(r,t,e){var n=_(t,"a","where"),o=_(e,"b","where"),a=_(r,"condition","where","bool");return Se(n.shape,o.shape,"Error in where: "),a.rank===1?D(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Se(a.shape,o.shape,"Error in where: "),N.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return Ce(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),rl=function(r){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:return[4,(t=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Ui(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ye=k({add_:function(r,t){var e,n=_(r,"a","add"),o=_(t,"b","add");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Xe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Xe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),eg=k({addN_:function(r){D(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),D(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return _(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Qe(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return N.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),tg=k({addStrict_:function(r,t){var e=_(r,"a","addStrict"),n=_(t,"b","addStrict");return Se(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),ng=k({atan2_:function(r,t){var e,n=_(r,"a","atan2"),o=_(t,"b","atan2");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ye(u.square(),c.square()),f=i.mul(c.div(l)),h=Xe(u.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=ye(u.square(),c.square()),f=zo(i.mul(u.div(l))),h=Xe(c.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Pt=k({div_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");if(e=Be(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return ol(n,o);var a=we(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Xe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Xe(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),rg=k({divNoNan_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");n=(e=Be(n,o))[0],o=e[1];var a=Pt(n,o),i=Ce(a),s=o.equal(i);return zn(s,i,a)}}),og=k({divStrict_:function(r,t){var e=_(r,"a","div"),n=_(t,"b","div");return Se(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),ol=k({floorDiv_:function(r,t){var e,n=_(r,"a","floorDiv"),o=_(t,"b","floorDiv");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Xe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Xe(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),ji=k({maximum_:function(r,t){var e,n=_(r,"a","maximum"),o=_(t,"b","maximum");return e=Be(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),we(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),ag=k({maximumStrict_:function(r,t){var e=_(r,"a","maximumStrict"),n=_(t,"b","maximumStrict");return Se(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),al=k({minimum_:function(r,t){var e,n=_(r,"a","minimum"),o=_(t,"b","minimum");return e=Be(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),we(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),ig=k({minimumStrict_:function(r,t){var e=_(r,"a","minimumStrict"),n=_(t,"b","minimumStrict");return Se(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),sg=k({mod_:function(r,t){var e,n=_(r,"a","mod"),o=_(t,"b","mod");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Xe(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Xe(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),ug=k({modStrict_:function(r,t){var e=_(r,"a","modStrict"),n=_(t,"b","modStrict");return Se(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),lt=k({mul_:function(r,t){var e,n=_(r,"a","mul"),o=_(t,"b","mul");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Xe(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Xe(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),cg=k({mulStrict_:function(r,t){var e=_(r,"a","mul"),n=_(t,"b","mul");return Se(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Ho=k({pow_:function(r,t){var e,n=_(r,"base","pow"),o=_(t,"exp","pow");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape),i=[n,o];return N.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(K(1))))),p=Xe(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Ce(c)),p=s.mul(f.mul(d)),v=Xe(l.shape,a);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),lg=k({powStrict_:function(r,t){return Se(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),fg=k({squaredDifferenceStrict_:function(r,t){var e=_(r,"a","squaredDifferenceStrict"),n=_(t,"b","squaredDifferenceStrict");return Se(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),$e=k({sub_:function(r,t){var e,n=_(r,"a","sub"),o=_(t,"b","sub");e=Be(n,o),n=e[0],o=e[1];var a=we(n.shape,o.shape);return N.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Xe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Xe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),hg=k({subStrict_:function(r,t){var e=_(r,"a","subStrict"),n=_(t,"b","subStrict");return Se(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),il=k({equal_:function(r,t){var e,n=_(r,"a","equal"),o=_(t,"b","equal");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),dg=k({equalStrict_:function(r,t){var e=_(r,"a","equalStrict"),n=_(t,"b","equalStrict");return Se(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),pg=k({greater_:function(r,t){var e,n=_(r,"a","greater"),o=_(t,"b","greater");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),sl=k({greaterEqual_:function(r,t){var e,n=_(r,"a","greaterEqual"),o=_(t,"b","greaterEqual");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return Ce(s)},b:function(){return Ce(u)}}},"GreaterEqual")}}),vg=k({greaterEqualStrict_:function(r,t){var e=_(r,"a","greaterEqualStrict"),n=_(t,"b","greaterEqualStrict");return Se(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),mg=k({greaterStrict_:function(r,t){var e=_(r,"a","greaterStrict"),n=_(t,"b","greaterStrict");return Se(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),gg=k({less_:function(r,t){var e,n=_(r,"a","less"),o=_(t,"b","less");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),yg=k({lessEqual_:function(r,t){var e,n=_(r,"a","lessEqual"),o=_(t,"b","lessEqual");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),xg=k({lessEqualStrict_:function(r,t){var e=_(r,"a","lessEqualStrict"),n=_(t,"b","lessEqualStrict");return Se(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),bg=k({lessStrict_:function(r,t){var e=_(r,"a","lessStrict"),n=_(t,"b","lessStrict");return Se(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),wg=k({notEqual_:function(r,t){var e,n=_(r,"a","notEqual"),o=_(t,"b","notEqual");return e=Be(n,o),n=e[0],o=e[1],we(n.shape,o.shape),N.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Cg=k({notEqualStrict_:function(r,t){var e=_(r,"a","notEqualStrict"),n=_(t,"b","notEqualStrict");return Se(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function gu(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function yu(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var qi=k({gather_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","gather"),o=_(t,"indices","gather","int32");e=Ye(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(n,o,e);return N.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=gu(0,h),m=gu(h+1,h+1+p),g=yu([f,[l],d]),b=i.reshape(g),x=u.reshape([l]),y=yu([[h],v,m]),w=b.transpose(y),C=ul(w,x,n.shape[e]),R=Ni(y);return C=C.transpose(R)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),ul=k({unsortedSegmentSum_:function(r,t,e){var n=_(r,"x","unsortedSegmentSum"),o=_(t,"segmentIds","unsortedSegmentSum","int32");return D(Ue(e),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=ji(c,Ce(c)),f=qi(u,l),h=sl(c,K(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=kt(h,p+1);h=na(h,Cr(f.shape,"bool"));var v=Ce(f);return zn(h,f,v)}(a,s)}}})}}),Eg=function(r,t,e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v;return Z(this,function(m){switch(m.label){case 0:for(n=_(r,"tensor","boolMask"),o=_(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,D(i>0,function(){return"mask cannot be scalar"}),Se(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),h=o.reshape([-1]),[4,rl(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=qi(f,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function cl(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),D(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),D(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),D(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),D(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];D(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),D(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&D(Ue(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Bi(a),d=Kn(s,e.shape,n,1,o,i,!1,h),p=N.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],b=m[1];return{dy4D:function(){return Nt(v,g,n,o,a,1,i)},filter:function(){return Ki(v,b,g.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Oa(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ll(r,t,e,n,o){D(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];D(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),D(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),D(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),D(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),D(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Uo(a,e.shape,n,1,o),f=N.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var _g=k({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),D(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),D(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&D(Ue(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),D(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),D(mt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),D(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Nt(h,f,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Nt=k({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),D(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),D(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&D(Ue(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];D(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),D(mt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var h=Bi(o),d=Kn(c.shape,u.shape,e,a,n,i,!1,h),p=[u,c],v=N.runKernelFunc(function(m,g){var b=m.conv2d(c,u,d);return g([u,c]),b},{x:c,filter:u},function(m,g){var b=g,x=b[0],y=b[1];return D(xr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return fl(y.shape,m,x,e,n,o)},filter:function(){return Ki(y,m,x.shape,e,n,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Rg=k({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),D(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),D(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),D(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),D(function(h,d){return Oa(h)||Oa(d)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),D(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Uo(u.shape,s.shape,e,a,n),f=N.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){D(Oa(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],v=d[1];return{x:function(){return ll(p.shape,h,v,e,n)},$filter:function(){return function(m,g,b,x,y){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),D(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),D(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),D(b.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+b+"."}),D(w.shape[4]===b[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+b[3]+"."}),D(C.shape[4]===b[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+b[4]+")."});var R=Uo(w.shape,b,x,1,y);return N.runKernelFunc(function(S){return S.conv3dDerFilter(w,C,R)},{x5D:w,dy5D:C})}(p,h,v.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Ki=k({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),D(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),D(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),D(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];D(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),D(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&D(Ue(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Bi(a),h=Kn(s.shape,e,n,1,o,i,!1,f);return N.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),fl=k({conv2dDerInput_:cl}),ra=k({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),D(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),D(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),D(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),D(mt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&D(Ue(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=Kn(c.shape,u.shape,e,a,n,i,!0),h=[c,u],d=N.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(p,v){D(xr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var m=v[0],g=v[1];return{x:function(){return hl(m.shape,p,g,f)},filter:function(){return dl(m,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),hl=k({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),dl=k({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Xi=k({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");D(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),D(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),D(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),D(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),D(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];D(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=ra(l,u,n,o,i,a),v=Nt(p,c,1,"valid",i);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Sg=k({conv2dTranspose_:function(r,t,e,n,o,a){return cl(e,_(r,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Ig=k({conv3dTranspose_:function(r,t,e,n,o){return ll(e,_(r,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),n,o)}}),oa=k({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=_(r,"a","matMul"),i=_(t,"b","matMul");o=Be(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),h=i.shape.slice(0,-2),d=te(f),p=te(h);D(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),D(Qe(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),D(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var v=a.shape.slice(0,-2).concat([c,l]),m=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),b={transposeA:e,transposeB:n};return N.runKernelFunc(function(x,y){var w=x.batchMatMul(m,g,e,n);return y([m,g]),w},{a:m,b:g},function(x,y){var w=y,C=w[0],R=w[1];return e||n?!e&&n?{a:function(){return x.matMul(R,!1,!1)},b:function(){return x.matMul(C,!0,!1)}}:e&&!n?{a:function(){return R.matMul(x,!1,!0)},b:function(){return C.matMul(x,!1,!1)}}:{a:function(){return R.matMul(x,!0,!0)},b:function(){return x.matMul(C,!0,!0)}}:{a:function(){return x.matMul(R,!1,!0)},b:function(){return C.matMul(x,!0,!1)}}},"BatchMatMul",b).reshape(v)}}),Dg=k({dot_:function(r,t){var e=_(r,"t1","dot"),n=_(t,"t2","dot");D(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return D(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),kg=k({outerProduct_:function(r,t){var e=_(r,"v1","outerProduct"),n=_(t,"v2","outerProduct");return D(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Qr=k({reverse_:function(r,t){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var n=Ye(t,e.shape);return N.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),Tg=k({reverse1d_:function(r){var t=_(r,"x","reverse");return D(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Qr(t,0)}}),Ag=k({reverse2d_:function(r,t){var e=_(r,"x","reverse");return D(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Qr(e,t)}}),Ng=k({reverse3d_:function(r,t){var e=_(r,"x","reverse");return D(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Qr(e,t)}}),Fg=k({reverse4d_:function(r,t){var e=_(r,"x","reverse");return D(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Qr(e,t)}});function pl(r,t,e,n,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),D(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),D(mt(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&D(Ue(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Vr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Qe(c.inShape,c.outShape))return i.clone();var l=[s],f=N.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,b,x,y,w,C,R){var S=_(m,"dy","maxPoolBackprop"),E=_(g,"input","maxPoolBackprop"),I=_(b,"output","maxPoolBackprop");D(E.rank===S.rank,function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+S.rank+")"}),w==null&&(w=[1,1]),D(mt(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),D(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),D(E.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."}),R!=null&&D(Ue(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var A=Vr(E.shape,x,y,w,C,R);return N.runKernelFunc(function(T){return T.maxPoolBackprop(S,E,I,A)},{$dy:S,$input:E})}(h,p,v,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function vl(r,t,e,n,o,a){var i=_(r,"x","avgPool","float32");n==null&&(n=[1,1]),D(mt(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),D(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&D(Ue(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Vr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Qe(c.inShape,c.outShape))return i.clone();var l=N.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,m,g){var b=_(h,"dy","avgPoolBackprop"),x=_(d,"input","avgPoolBackprop");D(x.rank===b.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+b.rank+")"}),m==null&&(m=[1,1]),D(mt(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var y=x,w=b,C=!1;x.rank===3&&(C=!0,y=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=b.as4D(1,b.shape[0],b.shape[1],b.shape[2])),D(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),D(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var R=Vr(y.shape,p,v,m,g),S=N.runKernelFunc(function(E){return E.avgPoolBackprop(w,y,R)},{dy4D:w,input4D:y});return C?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Je=k({maxPool_:function(r,t,e,n,o){return pl(r,t,e,1,n,o)}}),Zr=k({avgPool_:function(r,t,e,n,o){return vl(r,t,e,1,n,o)}}),Pg=k({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),D(mt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=Vr(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var C=y.map(function(E,I){return E+(E-1)*(w[I]-1)}).map(function(E){return E-1}),R=C.map(function(E){return Math.floor(E/2)}),S=C.map(function(E,I){return E-R[I]});return C.map(function(E,I){return[R[I],S[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,C){var R=C.map(function(B){return B[0]}),S=C.map(function(B){return B[1]}),E=y.concat(R,S),I=w.map(function(B,L){return(B-E[L]%B)%B}),A=S.map(function(B,L){return B+I[L]}),T=w.map(function(B,L){return[R[L],A[L]]}),M=w.map(function(B,L){return[0,I[L]]});return[T,M]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?n:"valid",g=h?s:wc(s,f,p),b=(e==="avg"?function(){return vl(g,t,a,1,m)}:function(){return pl(g,t,a,1,m)})(),x=h?b:yc(b,f,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),Mg=k({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),D(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),D(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),D(mt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&D(Ue(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Wo(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,b,x,y,w,C,R){var S=_(m,"dy","maxPool3dBackprop"),E=_(g,"input","maxPool3dBackprop"),I=_(b,"output","maxPool3dBackprop"),A=S,T=E,M=I,B=!1;E.rank===4&&(B=!0,A=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),T=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),M=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),D(A.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+A.rank+"."}),D(T.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),D(M.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+M.rank+"."}),w==null&&(w=[1,1,1]),D(mt(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),R!=null&&D(Ue(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var L=Wo(T.shape,x,y,w,C,R),V=N.runKernelFunc(function(z){return z.maxPool3dBackprop(A,T,M,L)},{dy5D:A,input5D:T});return B?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(h,p,v,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Og=k({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),D(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),D(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),D(mt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&D(Ue(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Wo(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,m,g,b,x){var y=_(d,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=y,R=w,S=!1;w.rank===4&&(S=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),R=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),D(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),D(R.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+R.rank+"."}),g==null&&(g=[1,1,1]),D(mt(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),x!=null&&D(Ue(b),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+b+"."});var E=Wo(R.shape,v,m,g,b,x),I=N.runKernelFunc(function(A){return A.avgPool3dBackprop(C,R,E)},{dy5D:C,input5D:R});return S?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Qt=k({slice_:function(r,t,e){var n,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){D(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(D(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),lp(a,n,o);var i=a.shape,s={begin:n,size:o};return N.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Bg=k({slice1d_:function(r,t,e){var n=_(r,"x","slice1d");return D(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Qt(n,[t],[e])}}),Lg=k({slice2d_:function(r,t,e){var n=_(r,"x","slice2d");return D(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Qt(n,t,e)}}),ml=k({slice3d_:function(r,t,e){var n=_(r,"x","slice3d");return D(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Qt(n,t,e)}}),Wg=k({slice4d_:function(r,t,e){var n=_(r,"x","slice4d");return D(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Qt(n,t,e)}});function gl(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(vt(t.shape,n))),r.rank<e.rank&&(r=r.reshape(vt(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var Ug=k({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","all","bool"),o=Ye(t,n.shape),a=o,i=tn(a,n.rank);i!=null&&(n=n.transpose(i),a=nn(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),Vg=k({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","any","bool"),o=Ye(t,n.shape),a=o,i=tn(a,n.rank);i!=null&&(n=n.transpose(i),a=nn(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),zg=k({argMax_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMax");t==null&&(t=0);var n=Ye(t,e.shape),o=tn(n,e.rank);o!=null&&(e=e.transpose(o),n=nn(n.length,e.rank));var a={axis:n[0]},i=[e];return N.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return Ce(c)}}},"ArgMax",a,i)}}),Hg=k({argMin_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMin");t==null&&(t=0);var n=Ye(t,e.shape),o=tn(n,e.rank);return o!=null&&(e=e.transpose(o),n=nn(n.length,e.rank)),N.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return Ce(s)}}})}}),Gg=k({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","logSumExp"),o=Ye(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),aa=k({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","max"),o=n,a=Ye(t,n.shape),i=a,s=tn(i,n.rank);s!=null&&(n=n.transpose(s),i=nn(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.max(n,i);return h([o,d]),d},{x:n},function(f,h){return gl(f,h[1],h[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=vt(c.shape,a);c=c.reshape(l)}return c}}),jg=k({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","mean"),o=Ye(t,n.shape),a=te(it(n.shape,o)[1]);return ea(function(i){var s=K(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Cr(i.shape,"float32")).div(a)}}})(n)}}),qg=k({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","min"),o=n,a=Ye(t,n.shape),i=a,s=tn(i,n.rank);s!=null&&(n=n.transpose(s),i=nn(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.min(n,i);return h([o,d]),d},{x:n},function(f,h){return gl(f,h[1],h[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=vt(c.shape,a);c=c.reshape(l)}return c}}),Kg=k({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Ye(t,(r=_(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=vt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),yl=k({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Ye(t,n.shape);return ea(function(a){var i=tn(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=nn(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(Cr(a.shape,"float32"))},l={axes:s},f=N.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=vt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(n)}}),Xg=k({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Ye(t,n.shape),a=tn(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=nn(i.length,n.rank));var u=N.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=vt(u.shape,o);u=u.reshape(c)}return u}}),xl=k({elu_:function(r){var t=_(r,"x","elu");return N.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return N.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),$g=k({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=_(r,"x","leakyRelu");return ji(K(t).mul(e),e)}}),bl=k({prelu_:function(r,t){var e=_(r,"x","prelu"),n=_(t,"alpha","prelu");return N.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return zn(u,o,o.mul(s))},alpha:function(){var c=zn(u,Ce(o),o.mul(i)),l=Xe(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Oe=k({relu_:function(r){var t=_(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),wl=k({relu6_:function(r){var t=_(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),Yg=k({selu_:function(r){var t=_(r,"x","selu");return N.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(K(0)),i=K(zi),s=K(Hi),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return zn(a,u,c)}}})}}),Dn=k({transpose_:function(r,t){var e=_(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),D(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){D(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return N.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=Ni(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),Jg=k({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");D(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),D(Ue(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=N.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return N.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Cl=k({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(K(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),t,e),a=o.shape;if(n){var i=Ye(e,r.shape);a=vt(o.shape,i)}return o.reshape(a)}}),Qg=k({basicLSTMCell_:function(r,t,e,n,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),f=_(a,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),b=h.slice([0,2*p],v),x=h.slice([0,3*p],v),y=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(b).sigmoid())),w=y.tanh().mulStrict(x.sigmoid());return[y,w]}}),Zg=k({multiRNNCell_:function(r,t,e,n){for(var o=_(t,"data","multiRNNCell"),a=Fo(e,"c","multiRNNCell"),i=Fo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),e0=k({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(t,"x","movingAverage"),s=_(e,"decay","movingAverage");Jh(a,i),D(Qe(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=K(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){D(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=_(n,"step","movingAverage");l=l.div(u.sub(Ho(s,f)))}return a.add(l)}}),t0=k({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Js(s),f=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=fp(o,t,n,c.shape,h),e[h]=hp(a,e,n,c.shape,h),n[h]=n[h]||1;var d=Js(u);d.forEach(function(m){e[m]=t[m]+1,n[m]=1});var p=Oi(t,e,n),v=p.filter(function(m,g){return d.indexOf(g)===-1});return n.every(function(m){return m===1})?Qt(c,t,p).reshape(v):N.runKernelFunc(function(m){return m.stridedSlice(c,t,e,n)},{$x:c}).reshape(v)}}),n0=k({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=N.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),r0=k({scatterND_:function(r,t,e){var n=_(r,"indices","scatterND","int32"),o=_(t,"updates","scatterND");return cp(o,n,e),N.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),$i=k({fft_:function(r){D(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),Go=k({ifft_:function(r){D(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Yi=k({rfft_:function(r,t){D(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(Ne(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=et(e,u).as2D(o,n),l=$i(c),f=Math.floor(n/2)+1,h=Tt(l),d=Kt(l),p=h.split([f,n-f],h.shape.length-1),v=d.split([f,n-f],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,et(p[0],v[0]).reshape(m)}}),El=k({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=Go(n);return Tt(o)}var a=[e,2*(t-1)],i=Tt(r).as2D(e,t),s=Kt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(K(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=et(l,f).as2D(a[0],a[1]),o=Go(n),Tt(o)}}),o0=Object.freeze({fft:$i,ifft:Go,rfft:Yi,irfft:El}),a0=k({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(t,"sparseValues","sparseToDense"),i=_(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),N.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),i0=k({gatherND_:function(r,t){var e=_(t,"indices","gatherND","int32"),n=_(r,"x","gatherND");return N.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),s0=k({diag_:function(r){var t=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return N.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),u0=k({dropout_:function(r,t,e,n){var o=_(r,"x","dropout");if(D(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),D(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Me?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Qe(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=bc(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function _l(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Ge(o,"float32")}var Ji=k({hannWindow_:function(r){return _l(r,.5,.5)}}),Rl=k({hammingWindow_:function(r){return _l(r,.54,.46)}}),Qi=k({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Qt(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=qe([Qt(r,a,t-s),Jt([s],o)]);i.push(u),a+=e}return i.length===0?_n([],[0,t]):qe(i).as2D(i.length,t)}}),Sl=k({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Ji),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Qi(r,t,e),s=lt(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(Yi(s.slice([c,0],[1,t]),n));return qe(u)}}),c0=Object.freeze({hannWindow:Ji,hammingWindow:Rl,frame:Qi,stft:Sl}),ct,l0=function(r,t,e){return e===void 0&&(e=1),Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,v,m;return Z(this,function(g){switch(g.label){case 0:return n=_(r,"predictions","inTopK"),o=_(t,"targets","inTopK"),D(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),D(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),Se(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],D(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=Lr("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(b,x){return x.value-b.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,nt(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(ct||(ct={}));var f0=k({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=ct.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),Se(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return fn(s,i,n)}}),fn=k({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=ct.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=_(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===ct.NONE)return a;if(e===ct.SUM)return a.sum();if(e===ct.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(K(i)):s}if(e===ct.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(K(n.size));var u=o.mul(Cr(n.shape)).notEqual(K(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),h0=k({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=ct.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(t,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),Se(a.shape,i.shape,"Error in cosineDistance: ");var u=K(1).sub(a.mul(i).sum(e,!0));return fn(u,s,o)}}),d0=k({hingeLoss_:function(r,t,e,n){n===void 0&&(n=ct.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(t,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),Se(o.shape,a.shape,"Error in hingeLoss: ");var s=K(1);o=K(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return fn(u,i,n)}}),p0=k({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=ct.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(t,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),Se(a.shape,i.shape,"Error in huberLoss: ");var u=K(n),c=i.sub(a).abs(),l=al(c,u),f=c.sub(l),h=K(.5).mul(l.square()).add(u.mul(f));return fn(h,s,o)}}),v0=k({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=ct.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(t,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),Se(a.shape,i.shape,"Error in logLoss: ");var u=K(1),c=K(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return fn(l,s,o)}}),m0=k({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=ct.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),Se(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return fn(s,i,n)}}),g0=k({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=ct.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),Se(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=K(n),c=K(1),l=K(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=_(h,"labels","sigmoidCrossEntropyWithLogits"),v=_(d,"logits","sigmoidCrossEntropyWithLogits");Se(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),b=v.abs().neg().exp().log1p();return m.sub(g).add(b)}(a,i);return fn(f,s,o)}}),y0=k({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=ct.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),Se(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=K(n),c=K(1),l=K(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ea(function(v,m,g){var b=m.logSumExp([p],!0),x=m.toFloat().sub(b);return g([v,x]),{value:x.mul(v).neg().sum([p]),gradFunc:function(y,w){var C=w[0],R=w[1],S=vt(y.shape,[p]);return[y.reshape(S).mul(C.toFloat().sub(R.exp())),y.reshape(S).mul(R.exp().sub(C.toFloat()))]}}})(h,d)}(a,i);return fn(f,s,o)}}),x0=Object.freeze({get Reduction(){return ct},absoluteDifference:f0,computeWeightedLoss:fn,cosineDistance:h0,hingeLoss:d0,huberLoss:p0,logLoss:v0,meanSquaredError:m0,sigmoidCrossEntropy:g0,softmaxCrossEntropy:y0});function xu(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=xc(e),a=r.clone(),i=_n([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var h,d=a,p=s,v=o;h=N.tidy(function(){var m=a.slice([f,f],[e-f,1]),g=m.norm(),b=a.slice([f,f],[1,1]),x=_n([[-1]]).where(b.greater(0),_n([[1]])),y=b.sub(x.mul(g)),w=m.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=x.matMul(y).div(g).neg(),R=a.slice([f,0],[e-f,n]),S=C.mul(s);if(f===0)a=R.sub(S.matMul(s.transpose().matMul(R)));else{var E=R.sub(S.matMul(s.transpose().matMul(R)));a=a.slice([0,0],[f,n]).concat(E,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(S.transpose()));else{var A=I.sub(I.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(A,1)}return[s,a,o]}),s=h[0],a=h[1],o=h[2],pt([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var b0=k({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=Po(0,i,1,"int32").reshape([-1,1]),c=Po(0,s,1,"int32"),l=$e(u,c),f=na(l.lessEqual(K(+t,"int32")),l.greaterEqual(K(-e,"int32"))),h=Ne([i,s],n.dtype);return _t(Ke(n.reshape([-1,i,s])).map(function(d){return zn(f,d,h)})).reshape(o)}}),w0=k({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,D(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){D(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=Pi(r,r.shape[0],0).map(function(u){return Cc(u,[0])});D(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(N.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=yl(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(Cl(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?_t(a,0):a}}),C0=k({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return xu(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Ke(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=xu(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[_t(o,0).reshape(r.shape),_t(a,0).reshape(r.shape)]}}),E0=Object.freeze({bandPart:b0,gramSchmidt:w0,qr:C0});function ia(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),D(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),D(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),D(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),D(t.rank===1,function(){return"scores must be a 1D tensor"}),D(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),D(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var _0=k({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeBilinear");D(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),D(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return N.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),R0=k({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeNearestNeighbor");D(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),D(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),D(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),S0=k({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(t,"scores","nonMaxSuppression"),s=ia(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return N.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),I0=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),Q(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return Z(this,function(h){switch(h.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(t,"scores","nonMaxSuppressionAsync"),s=ia(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Li(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},D0=k({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=ia(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),k0=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),Q(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return Z(this,function(d){switch(d.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=ia(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Wi(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,h]}})})},T0=k({cropAndResize_:function(r,t,e,n,o,a){var i=_(r,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return D(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),D(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),D(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),D(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),D(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),D(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),N.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Zi=Object.freeze({resizeBilinear:_0,resizeNearestNeighbor:R0,nonMaxSuppression:S0,nonMaxSuppressionAsync:I0,nonMaxSuppressionWithScore:D0,nonMaxSuppressionWithScoreAsync:k0,cropAndResize:T0}),es=function(r,t){return!(r>0)||t==="linear"},ts=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},ns=function(r,t){var e=t,n=Xe(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},rs=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Oe(r);if(t==="elu")return xl(r);if(t==="relu6")return wl(r);if(t==="prelu")return bl(r,e);throw new Error("Unknown fused activation "+t+".")},A0=k({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(es(N.state.gradientDepth,l)===!1){var h=oa(e,n,a,s);return u!=null&&(h=ye(h,u)),rs(h,l,f)}var d=_(e,"a","fused matMul"),p=_(n,"b","fused matMul");t=Be(d,p),d=t[0],p=t[1];var v=a?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],b=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=te(x),C=te(y);D(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),D(Qe(x,y),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),D(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var R,S,E=d.shape.slice(0,-2).concat([g,b]),I=a?d.as3D(w,v,g):d.as3D(w,g,v),A=s?p.as3D(C,b,m):p.as3D(C,m,b);u!=null&&we(E,(R=Be(R=_(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(S=_(f,"prelu weights","fused matMul"));var T={a:I,b:A};u!=null&&(T.bias=R),f!=null&&(T.preluActivationWeights=S);var M=[I,A];return N.runKernelFunc(function(B,L){var V=B.fusedBatchMatMul({a:I,b:A,transposeA:a,transposeB:s,bias:R,activation:l,preluActivationWeights:S});return L([I,A,V]),V},T,function(B,L){var V=L[0],z=L[1],U=L[2],G=ts(B,U,l),j={};return u!=null&&(j={bias:function(){return ns(R,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(z,!1,!1)},b:function(){return G.matMul(V,!0,!1)}}:a&&!s?{a:function(){return z.matMul(G,!1,!0)},b:function(){return V.matMul(G,!1,!1)}}:{a:function(){return z.matMul(G,!0,!0)},b:function(){return G.matMul(V,!0,!0)}}:{a:function(){return G.matMul(z,!1,!0)},b:function(){return V.matMul(G,!0,!1)}},j)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},M,[!0]).reshape(E)}}),N0=k({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",es(N.state.gradientDepth,h)===!1){var p=Nt(t,e,n,o,i,u,c);return l!=null&&(p=ye(p,l)),rs(p,h,d)}var v=_(t,"x","conv2d"),m=_(e,"filter","conv2d"),g=v,b=!1;v.rank===3&&(b=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),D(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),D(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&D(Ue(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),D(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),D(mt(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),D(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,y,w=Kn(g.shape,m.shape,n,u,o,c);l!=null&&(x=Be(x=_(l,"bias","fused conv2d"),v)[0],we(w.outShape,x.shape)),d!=null&&(y=_(d,"prelu weights","fused conv2d"));var C={x:g,filter:m};l!=null&&(C.bias=x),d!=null&&(C.preluActivationWeights=y);var R=[m,g],S=N.runKernelFunc(function(E,I){var A=E.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return I([m,g,A]),A},C,function(E,I){var A=I,T=A[0],M=A[1],B=A[2],L=ts(E,B,h);D(xr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return l!=null&&(V={bias:function(){return ns(x,L)}}),Object.assign({x:function(){return fl(M.shape,L,T,n,o)},filter:function(){return Ki(M,L,T.shape,n,o)}},V)},"FusedConv2D",{convInfo:w,activation:h},R,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),F0=k({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(es(N.state.gradientDepth,h)===!1){var p=ra(t,e,n,o,i,u,c);return l!=null&&(p=ye(p,l)),rs(p,h,d)}var v=_(t,"x","depthwiseConv2d"),m=_(e,"filter","depthwiseConv2d"),g=v,b=!1;v.rank===3&&(b=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),D(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),D(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),D(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),D(mt(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&D(Ue(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var x,y,w=Kn(g.shape,m.shape,n,u,o,c,!0);l!=null&&(x=Be(x=_(l,"bias","fused conv2d"),v)[0],we(w.outShape,x.shape)),d!=null&&(y=_(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:m};l!=null&&(C.bias=x),d!=null&&(C.preluActivationWeights=y);var R=[m,g],S=N.runKernelFunc(function(E,I){var A=E.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return I([m,g,A]),A},C,function(E,I){D(xr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var A=I[0],T=I[1],M=I[2],B=ts(E,M,h),L={};return l!=null&&(L={bias:function(){return ns(x,B)}}),Object.assign({x:function(){return hl(T.shape,B,A,w)},filter:function(){return dl(T,B,A.shape,w)}},L)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},R,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),P0=Object.freeze({matMul:A0,conv2d:N0,depthwiseConv2d:F0}),M0=Object.freeze({image:Zi,linalg:E0,losses:x0,spectral:o0,fused:P0,signal:c0,square:vm,squaredDifference:$c,conv1d:_g,conv2d:Nt,conv3d:Rg,depthwiseConv2d:ra,separableConv2d:Xi,conv2dTranspose:Sg,conv3dTranspose:Ig,op:k,batchNormalization2d:jm,batchNormalization3d:qm,batchNormalization4d:Km,batchNormalization:Xm,batchNorm:tl,batchNorm2d:$m,batchNorm3d:Ym,batchNorm4d:Jm,booleanMaskAsync:Eg,complex:et,real:Tt,imag:Kt,concat:qe,concat1d:Pd,concat2d:Md,concat3d:Od,concat4d:Bd,split:Pi,matMul:oa,dot:Dg,outerProduct:kg,reverse:Qr,reverse1d:Tg,reverse2d:Ag,reverse3d:Ng,reverse4d:Fg,maxPool:Je,avgPool:Zr,pool:Pg,maxPool3d:Mg,avgPool3d:Og,slice:Qt,slice1d:Bg,slice2d:Lg,slice3d:ml,slice4d:Wg,abs:mm,acos:gm,acosh:ym,asin:xm,asinh:bm,atan:wm,atanh:Cm,ceil:Em,clipByValue:Gi,cos:_m,cosh:Rm,erf:Sm,exp:vi,expm1:Im,floor:Dm,log:km,log1p:Tm,logSigmoid:Am,neg:zo,reciprocal:Nm,round:Fm,rsqrt:Yc,sigmoid:Jc,sign:Pm,isNaN:Mm,isInf:Om,isFinite:Bm,sin:Lm,sinh:Wm,softplus:Um,sqrt:Vm,step:zm,tan:Hm,tanh:Gm,all:Ug,any:Vg,argMax:zg,argMin:Hg,logSumExp:Gg,max:aa,mean:jg,min:qg,moments:Kg,sum:yl,prod:Xg,equal:il,equalStrict:dg,greater:pg,greaterEqual:sl,greaterEqualStrict:vg,greaterStrict:mg,less:gg,lessEqual:yg,lessEqualStrict:xg,lessStrict:bg,notEqual:wg,notEqualStrict:Cg,add:ye,addN:eg,addStrict:tg,atan2:ng,div:Pt,divNoNan:rg,divStrict:og,floorDiv:ol,maximum:ji,maximumStrict:ag,minimum:al,minimumStrict:ig,mod:sg,modStrict:ug,mul:lt,mulStrict:cg,pow:Ho,powStrict:lg,squaredDifferenceStrict:fg,sub:$e,subStrict:hg,elu:xl,leakyRelu:$g,prelu:bl,relu:Oe,relu6:wl,selu:Yg,logicalAnd:na,logicalNot:Qm,logicalOr:nl,logicalXor:Zm,where:zn,whereAsync:rl,buffer:fe,print:qd,batchToSpaceND:yc,broadcastTo:Kd,cast:Xd,clone:$d,cumsum:Yd,depthToSpace:Jd,expandDims:kt,eye:xc,multinomial:Qd,oneHot:fi,pad:qn,pad1d:Zd,pad2d:ep,pad3d:tp,pad4d:np,rand:rp,randomNormal:op,randomGamma:ap,randomUniform:bc,reshape:Mt,spaceToBatchND:wc,squeeze:Cc,stack:_t,tile:lr,truncatedNormal:ip,unstack:Ke,setdiff1dAsync:sp,fill:Jt,linspace:Fd,ones:Cr,range:Po,scalar:K,tensor:nt,tensor1d:Ge,tensor2d:_n,tensor3d:Fi,tensor4d:ht,tensor5d:Td,tensor6d:Ad,variable:Nd,zeros:Ne,onesLike:gc,zerosLike:Ce,transpose:Dn,softmax:ln,logSoftmax:pp,localResponseNormalization:Jg,norm:Cl,gather:qi,unsortedSegmentSum:ul,basicLSTMCell:Qg,multiRNNCell:Zg,movingAverage:e0,stridedSlice:t0,topk:n0,scatterND:r0,fft:$i,ifft:Go,rfft:Yi,irfft:El,sparseToDense:a0,gatherND:i0,diag:s0,dropout:u0,hannWindow:Ji,hammingWindow:Rl,frame:Qi,stft:Sl,inTopKAsync:l0});function H(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&D(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Ba(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var O0=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new kc(e,N),e}return Bt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,W().get("IS_NODE")&&No(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?pi(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return ko(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return fe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return N.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){return n=jt(),e(),[2,{kernelMs:jt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(H(e,"slice"),Ic(e.shape,n,o)){var a=Dc(n,e.strides),i=te(o);return nt(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=fe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+n[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){H(e,"stridedSlice");var i=Oi(n,o,a);if(i.some(function(d){return d===0}))return nt([],i);for(var s=fe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*a[h]+n[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=fe([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){H(e,"reverse");for(var o=fe(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(d){return Tt(d)}),i=e.map(function(d){return Kt(d)});return et(this.concat(a,n),this.concat(i,n))}var s=e.map(function(d){var p=te(d.shape.slice(n));return d.as2D(-1,p)}),u=yr(s.map(function(d){return d.shape}),1),c=fe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,b=0;b<d.shape[1];++b)c[g+b]=p[v++];f+=d.shape[1]})}var h=yr(e.map(function(d){return d.shape}),n);return nt(c,h,e[0].dtype)},t.prototype.neg=function(e){return H(e,"neg"),this.multiply(K(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,tt(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;H(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=fe(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=Ye([n],e.shape),a=this.max(e,o),i=vt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,tt(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return H([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){H([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],m=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=m[0],b=m[1],x=m[2],y=s*u,w=fe([c,s,u],e.dtype),C=w.values,R=this.blockSize,S=0;S<c;S++)for(var E=0;E<s;E+=R)for(var I=0;I<u;I+=R)for(var A=0;A<i;A+=R)for(var T=Math.min(E+R,s),M=Math.min(I+R,u),B=Math.min(A+R,i),L=E;L<T;L++)for(var V=I;V<M;V++){for(var z=0,U=A;U<B;U++)z+=l[S*d+L*p+U*v]*f[U*g+V*b+S*x];C[S*y+(L*u+V)]+=z}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Ba(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,tt(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return H([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return H([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){H(e,"sum"),xt("sum",n,e.rank);for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,tt(e.dtype,"int32")),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,n){H(e,"sum");for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,tt(e.dtype,"int32")),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){H(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=K(s,"int32"),c=il(u,n).asType("float32").mul(e).sum(0);a.push(c)}return _t(a)},t.prototype.argMin=function(e,n){H(e,"argMin");var o=[n];xt("argMin",o,e.rank);for(var a=it(e.shape,o),i=a[0],s=a[1],u=Ne(i,"int32"),c=te(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},t.prototype.argMax=function(e,n){H(e,"argMax");var o=[n];xt("argMax",o,e.rank);for(var a=it(e.shape,o),i=a[0],s=a[1],u=Ne(i,"int32"),c=te(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},t.prototype.cumsum=function(e,n,o,a){if(H(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=tt(e.dtype,"int32"),s=Ne(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,n){return H([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return H([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return H([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return H([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return H([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return H([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){H(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return H([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return H([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){H([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ne(n.shape,tt(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:te(n.shape.slice(1)),h=0;h<a.length;h++)for(var d=0;d<f;d++)a[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},t.prototype.where=function(e){H([e],"where");var n=this.readSync(e.dataId);return Ui(e.shape,n)},t.prototype.topk=function(e,n,o){return H(e,"topk"),Bc(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){H(e,"min"),xt("min",n,e.rank);for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},t.prototype.minimum=function(e,n){return H([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return H([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){H(e,"max"),xt("max",n,e.rank);for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},t.prototype.maximum=function(e,n){return H([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){H(e,"all"),xt("all",n,e.rank);for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},t.prototype.any=function(e,n){H(e,"any"),xt("any",n,e.rank);for(var o=it(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=te(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},t.prototype.squaredDifference=function(e,n){return H([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){H(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){H(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){H(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){H(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){H(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){H(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){H(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){H(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){H(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){H(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){H(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){H(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){H(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){H(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){H(e,"relu");for(var n=Ne(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){H(e,"relu");for(var n=Ne(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return H([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){H(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){H([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){H(e,"selu");for(var n=zi,o=Hi,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){H(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){H(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){H(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){H(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){H(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){H(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){H(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){H(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){H(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){H(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return H([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){H(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){H(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){H(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Bh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){H(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){H(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){H(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){H(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),H(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Ba(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){H([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=fe(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],b=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),R=h.values,S=0;S<o.batchSize;++S)for(var E=S*d,I=S*g,A=0;A<o.outHeight;++A)for(var T=I+A*b,M=A*o.strideHeight-l,B=0;B<a;B++){var L=M+B*s;if(!(L<0||L>=o.inHeight))for(var V=B*n.strides[0],z=E+L*p,U=0;U<o.outWidth;++U)for(var G=T+U*x,j=U*o.strideWidth-c,X=0;X<i;X++){var ee=j+X*u;if(!(ee<0||ee>=o.inWidth))for(var ae=z+ee*v,ue=V+X*n.strides[1],ce=0;ce<o.inChannels;++ce){for(var de=w[ae+ce*m],ve=0;ve<o.outChannels;++ve)R[G+ve*y]+=de*C[ue+ve];ue+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=fe(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=p.values,b=0;b<o.batchSize;++b)for(var x=b*e.strides[0],y=b*p.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*p.strides[1],R=w*o.strideDepth-f,S=0;S<a;S++){var E=R+S*u;if(!(E<0||E>=o.inDepth))for(var I=S*n.strides[0],A=x+E*e.strides[1],T=0;T<o.outHeight;++T)for(var M=C+T*p.strides[2],B=T*o.strideHeight-d,L=0;L<i;L++){var V=B+L*c;if(!(V<0||V>=o.inHeight))for(var z=I+L*n.strides[1],U=A+V*e.strides[2],G=0;G<o.outWidth;++G)for(var j=M+G*o.outChannels,X=G*o.strideWidth-h,ee=0;ee<s;ee++){var ae=X+ee*l;if(!(ae<0||ae>=o.inWidth))for(var ue=z+ee*n.strides[2],ce=U+ae*o.inChannels,de=ue,ve=0;ve<o.inChannels;++ve){for(var he=v[ce+ve],xe=0;xe<o.outChannels;++xe)g[j+xe]+=he*m[de+xe];de+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){H([e,n],"conv2dDerInput");for(var a=fe(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,b=o.inWidth,x=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,R=o.strideWidth,S=o.dataFormat,E=p-1-o.padInfo.top,I=v-1-o.padInfo.left,A=S==="channelsLast",T=a.strides[0],M=A?a.strides[1]:a.strides[2],B=A?a.strides[2]:1,L=A?1:a.strides[1],V=e.strides[0],z=A?e.strides[1]:e.strides[2],U=A?e.strides[2]:1,G=A?1:e.strides[1],j=0;j<d;++j)for(var X=0;X<m;++X)for(var ee=0;ee<g;++ee)for(var ae=ee-E,ue=Math.max(0,Math.ceil(ae/C)),ce=Math.min(y,(p+ae)/C),de=0;de<b;++de){for(var ve=de-I,he=Math.max(0,Math.ceil(ve/R)),xe=Math.min(w,(v+ve)/R),Y=0,me=ue;me<ce;++me)for(var _e=me*C-ae,Ee=he;Ee<xe;++Ee)for(var Fe=V*j+z*me+U*Ee,Ie=l*(p-1-_e)+f*(v-1-(Ee*R-ve))+h*X,ke=0;ke<x;++ke)Y+=s[Fe+G*ke]*u[Ie+ke];i[T*j+M*ee+B*de+L*X]=Y}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=fe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],R=x[3],S=o.batchSize,E=o.filterDepth,I=o.filterHeight,A=o.filterWidth,T=o.inChannels,M=o.inDepth,B=o.inHeight,L=o.inWidth,V=o.outChannels,z=o.outDepth,U=o.outHeight,G=o.outWidth,j=o.strideDepth,X=o.strideHeight,ee=o.strideWidth,ae=E-1-o.padInfo.front,ue=I-1-o.padInfo.top,ce=A-1-o.padInfo.left,de=0;de<S;++de)for(var ve=0;ve<T;++ve)for(var he=0;he<M;++he)for(var xe=he-ae,Y=Math.max(0,Math.ceil(xe/j)),me=Math.min(z,(E+xe)/j),_e=0;_e<B;++_e)for(var Ee=_e-ue,Fe=Math.max(0,Math.ceil(Ee/X)),Ie=Math.min(U,(I+Ee)/X),ke=0;ke<L;++ke){for(var St=ke-ce,ot=Math.max(0,Math.ceil(St/ee)),ft=Math.min(G,(A+St)/ee),rn=0,Ft=Y;Ft<me;++Ft)for(var Vt=Ft*j-xe,at=Fe;at<Ie;++at)for(var mn=at*X-Ee,It=ot;It<ft;++It)for(var Er=p*de+v*Ft+m*at+g*It,gt=y*(E-1-Vt)+w*(I-1-mn)+C*(A-1-(It*ee-St))+R*ve,yt=0;yt<V;++yt)rn+=h[Er+yt]*b[gt+yt];i[u*de+c*he+l*_e+f*ke+ve]=rn}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){H([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=fe(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/a)),g=Math.min(o.outHeight,(o.inHeight+h-v)/a),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((f-b)/i)),y=Math.min(o.outWidth,(o.inWidth+f-b)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var R=0,S=0;S<o.batchSize;++S)for(var E=m;E<g;++E)for(var I=v+E*a-h,A=x;A<y;++A){var T=b+A*i-f;R+=c?d.get(S,I,T,w)*p.get(S,E,A,C):d.get(S,w,I,T)*p.get(S,C,E,A)}l.set(R,v,b,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=fe(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],R=x[3],S=this.readSync(e.dataId),E=e.strides,I=E[0],A=E[1],T=E[2],M=E[3],B=o.padInfo.front,L=o.padInfo.left,V=o.padInfo.top,z=0;z<u;++z)for(var U=Math.max(0,Math.ceil((B-z)/a)),G=Math.min(o.outDepth,(o.inDepth+B-z)/a),j=z*p,X=0;X<c;++X)for(var ee=Math.max(0,Math.ceil((V-X)/i)),ae=Math.min(o.outHeight,(o.inHeight+V-X)/i),ue=X*v+j,ce=0;ce<l;++ce)for(var de=Math.max(0,Math.ceil((L-ce)/s)),ve=Math.min(o.outWidth,(o.inWidth+L-ce)/s),he=ce*m+ue,xe=0;xe<o.inChannels;++xe)for(var Y=xe*g+he,me=0;me<o.outChannels;++me){for(var _e=0,Ee=0;Ee<o.batchSize;++Ee)for(var Fe=Ee*I,Ie=Ee*y,ke=U;ke<G;++ke)for(var St=(z+ke*a-B)*A+Fe,ot=ke*w+Ie,ft=ee;ft<ae;++ft)for(var rn=(X+ft*i-V)*T+St,Ft=ft*C+ot,Vt=de;Vt<ve;++Vt){var at=Vt*R+Ft;_e+=S[(ce+Vt*s-L)*M+rn+xe]*b[at+me]}h[Y+me]=_e}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Ba(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){H([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=fe(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],b=m*h.strides[0],x=0;x<o.outHeight;++x)for(var y=b+x*h.strides[1],w=x*o.strideHeight-c,C=0;C<a;++C){var R=w+C*s;if(!(R<0||R>=o.inHeight))for(var S=C*n.strides[0],E=g+R*e.strides[1],I=0;I<o.outWidth;++I)for(var A=y+I*h.strides[2],T=I*o.strideWidth-l,M=0;M<i;++M){var B=T+M*u;if(!(B<0||B>=o.inWidth))for(var L=S+M*n.strides[1],V=E+B*o.inChannels,z=A,U=L,G=0;G<o.inChannels;++G){for(var j=d[V+G],X=0;X<f;++X)v[z+X]+=j*p[U+X];z+=f,U+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){H([e,n],"depthwiseConv2DDerInput");for(var a=fe(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(n.dataId),g=n.strides,b=g[0],x=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,R=o.filterWidth,S=o.inChannels,E=o.inHeight,I=o.inWidth,A=o.outChannels,T=o.outHeight,M=o.outWidth,B=o.strideHeight,L=o.strideWidth,V=C-1-o.padInfo.top,z=R-1-o.padInfo.left,U=A/S,G=0;G<w;++G)for(var j=0;j<S;++j)for(var X=0;X<E;++X)for(var ee=X-V,ae=Math.max(0,Math.ceil(ee/B)),ue=Math.min(T,(C+ee)/B),ce=0;ce<I;++ce){for(var de=ce-z,ve=Math.max(0,Math.ceil(de/L)),he=Math.min(M,(R+de)/L),xe=0,Y=ae;Y<ue;++Y)for(var me=Y*B-ee,_e=ve;_e<he;++_e)for(var Ee=d*G+p*Y+v*_e,Fe=b*(C-1-me)+x*(R-1-(_e*L-de))+y*j,Ie=0;Ie<U;++Ie)xe+=f[Ee+(j*U+Ie)]*m[Fe+Ie];i[u*G+c*X+l*ce+j]=xe}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){H([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=fe(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/a)),g=Math.min(o.outHeight,(o.inHeight+f-v)/a),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((l-b)/i)),y=Math.min(o.outWidth,(o.inWidth+l-b)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/h),R=w%h,S=0,E=0;E<o.batchSize;++E)for(var I=m;I<g;++I)for(var A=v+I*a-f,T=x;T<y;++T){var M=b+T*i-l;S+=d.get(E,A,M,C)*p.get(E,I,T,w)}c.set(S,v,b,C,R)}return c.toTensor()},t.prototype.tile=function(e,n){return H(e,"tile"),Oc(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){H(e,"pad");var a=n.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=n.map(function(h){return h[0]}),s=this.bufferSync(e),u=fe(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){H(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=fe(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var h=s.locToIndex(l);s.values[h]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){H([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=fe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){H([e],"batchToSpaceND");var a=n.reduce(function(f,h){return f*h}),i=Mo(e.shape,n,a),s=Oo(i.length,n.length),u=Bo(e.shape,n,a),c=Ec(o,n.length),l=_c(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){H([e],"spaceToBatchND");var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Mo(u.shape,n,a,!1),l=Oo(c.length,n.length,!1),f=Bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){H(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=fe(n.outShape,e.dtype),m=v.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],b=n.outShape[2]*n.outShape[3],x=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,C=y*e.strides[0],R=0;R<n.inChannels;++R)for(var S=0;S<n.outHeight;++S)for(var E=S*a-f,I=Math.max(0,E),A=Math.min(n.inHeight,c+E),T=w+S*b,M=0;M<n.outWidth;++M){for(var B=M*i-h,L=Math.max(0,B),V=Math.min(n.inWidth,l+B),z=d,U=0,G=0,j=I;j<A;j+=s){for(var X=C+j*e.strides[1],ee=L;ee<V;ee+=u){var ae=p[X+ee*e.strides[2]+R];o==="max"&&ae>z?z=ae:o==="avg"&&(U+=ae,G++)}if(isNaN(z))break}m[T+M*x+R]=o==="avg"?U/G:z}return v.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=fe(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var v=0;v<n.inChannels;++v)for(var m=0;m<n.outHeight;++m){for(var g=m*a-f,b=g;b<0;)b+=s;for(var x=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-h,C=w;C<0;)C+=u;for(var R=Math.min(n.inWidth,l+w),S=Number.NEGATIVE_INFINITY,E=-1,I=b;I<x;I+=s)for(var A=I-g,T=C;T<R;T+=u){var M=T-w,B=d.get(p,I,T,v);B>S&&(S=B,E=A*l+M)}o.set(E,p,m,y,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){H([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,v=fe(n.shape,"float32"),m=this.bufferSync(i),g=this.bufferSync(e),b=0;b<a.batchSize;++b)for(var x=0;x<a.inChannels;++x)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,R=w-d,S=0,E=0;E<f;E+=c){var I=(C+E)/s;if(!(I<0||I>=a.outHeight||Math.floor(I)!==I))for(var A=0;A<h;A+=l){var T=(R+A)/u;if(!(T<0||T>=a.outWidth||Math.floor(T)!==T)){var M=f*h-1-m.get(b,I,T,x)===E*h+A?1:0;M!==0&&(S+=g.get(b,I,T,x)*M)}}}v.set(S,b,y,w,x)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){H([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=fe(n.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),b=0;b<o.batchSize;++b)for(var x=0;x<o.inChannels;++x)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,R=w-d,S=0,E=0;E<f;E+=c){var I=(C+E)/a;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var A=0;A<h;A+=l){var T=(R+A)/i;T<0||T>=o.outWidth||Math.floor(T)!==T||(S+=g.get(b,I,T,x))}}v.set(S*m,b,y,w,x)}return v.toTensor()},t.prototype.pool3d=function(e,n,o){H(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=this.readSync(e.dataId),x=fe(n.outShape,e.dtype),y=x.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],R=n.outShape[3]*n.outShape[4],S=n.outShape[4],E=0;E<n.batchSize;++E)for(var I=E*w,A=E*e.strides[0],T=0;T<n.inChannels;++T)for(var M=0;M<n.outDepth;++M){for(var B=M*a-p,L=B;L<0;)L+=u;for(var V=Math.min(n.inDepth,f+B),z=I+M*C,U=0;U<n.outHeight;++U){for(var G=U*i-v,j=G;j<0;)j+=c;for(var X=Math.min(n.inHeight,h+G),ee=z+U*R,ae=0;ae<n.outWidth;++ae){for(var ue=ae*s-m,ce=ue;ce<0;)ce+=l;for(var de=Math.min(n.inWidth,d+ue),ve=ee+ae*S,he=g,xe=0,Y=0,me=L;me<V;me+=u){for(var _e=A+me*e.strides[1],Ee=j;Ee<X;Ee+=c){for(var Fe=_e+Ee*e.strides[2],Ie=ce;Ie<de;Ie+=l){var ke=b[Fe+Ie*e.strides[3]+T];if(o==="max"&&ke>he?he=ke:o==="avg"&&(xe+=ke,Y++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}y[ve+T]=o==="avg"?xe/Y:he}}}return x.toTensor()},t.prototype.avgPool3d=function(e,n){return H(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){H([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,b=m-1-o.padInfo.left,x=v-1-o.padInfo.top,y=fe(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),R=0;R<o.batchSize;++R)for(var S=0;S<o.inChannels;++S)for(var E=0;E<o.inDepth;++E)for(var I=0;I<o.inHeight;++I)for(var A=0;A<o.inWidth;++A){for(var T=E-g,M=I-x,B=A-b,L=0,V=0;V<p;V+=f){var z=(T+V)/a;if(!(z<0||z>=o.outDepth||Math.floor(z)!==z))for(var U=0;U<v;U+=h){var G=(M+U)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var j=0;j<m;j+=d){var X=(B+j)/s;X<0||X>=o.outWidth||Math.floor(X)!==X||(L+=C.get(R,z,G,X,S))}}}y.set(L*w,R,E,I,A,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return H(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=fe(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=this.bufferSync(e),b=0;b<n.batchSize;++b)for(var x=0;x<n.inChannels;++x)for(var y=0;y<n.outDepth;++y){for(var w=y*a-p,C=w;C<0;)C+=u;for(var R=Math.min(n.inDepth,f+w),S=0;S<n.outHeight;++S){for(var E=S*i-v,I=E;I<0;)I+=c;for(var A=Math.min(n.inHeight,h+E),T=0;T<n.outWidth;++T){for(var M=T*s-m,B=M;B<0;)B+=l;for(var L=Math.min(n.inWidth,d+M),V=Number.NEGATIVE_INFINITY,z=-1,U=C;U<R;U+=u)for(var G=U-w,j=I;j<A;j+=c)for(var X=j-E,ee=B;ee<L;ee+=l){var ae=ee-M,ue=g.get(b,U,j,ee,x);ue>=V&&(V=ue,z=G*h*d+X*h+ae)}o.set(z,b,y,S,T,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){H([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,v=a.effectiveFilterWidth,m=d-1-a.padInfo.front,g=v-1-a.padInfo.left,b=p-1-a.padInfo.top,x=fe(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var R=0;R<a.inChannels;++R)for(var S=0;S<a.inDepth;++S)for(var E=0;E<a.inHeight;++E)for(var I=0;I<a.inWidth;++I){for(var A=S-m,T=E-b,M=I-g,B=0,L=0;L<d;L+=l){var V=(A+L)/s;if(!(V<0||V>=a.outDepth||Math.floor(V)!==V))for(var z=0;z<p;z+=f){var U=(T+z)/u;if(!(U<0||U>=a.outHeight||Math.floor(U)!==U))for(var G=0;G<v;G+=h){var j=(M+G)/c;if(!(j<0||j>=a.outWidth||Math.floor(j)!==j)){var X=d*p*v-1-y.get(C,V,U,j,R)===L*p*v+z*v+G?1:0;X!==0&&(B+=w.get(C,V,U,j,R)*X)}}}}x.set(B,C,S,E,I,R)}return x.toTensor()},t.prototype.cast=function(e,n){return Nc(e,n,this)},t.prototype.reshape=function(e,n){return di(e,n)},t.prototype.avgPool=function(e,n){return H(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){H(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(te([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],b=0;b<s;b++)for(var x=0;x<n;x++)for(var y=m*x,w=Math.floor(y),C=y-w,R=Math.min(u-1,Math.ceil(y)),S=b*e.strides[0]+w*e.strides[1],E=b*e.strides[0]+R*e.strides[1],I=0;I<o;I++)for(var A=g*I,T=Math.floor(A),M=A-T,B=Math.min(c-1,Math.ceil(A)),L=S+T*e.strides[2],V=E+T*e.strides[2],z=S+B*e.strides[2],U=E+B*e.strides[2],G=0;G<l;G++){var j=f[L+G],X=f[V+G],ee=j+(f[z+G]-j)*M,ae=ee+(X+(f[U+G]-X)*M-ee)*C;h[v++]=ae}return nt(h,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){H([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],b=this.readSync(e.dataId),x=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<f;C++)for(var R=C*m,S=Math.floor(R),E=Math.min(Math.ceil(R),s-1),I=w+S*n.strides[1],A=w+E*n.strides[1],T=R-S,M=1-T,B=0;B<h;B++)for(var L=B*g,V=Math.floor(L),z=Math.min(Math.ceil(L),u-1),U=L-V,G=1-U,j=I+V*n.strides[2],X=I+z*n.strides[2],ee=A+V*n.strides[2],ae=A+z*n.strides[2],ue=M*G,ce=M*U,de=T*G,ve=T*U,he=0;he<c;he++){var xe=b[x++];d[j+he]+=xe*ue,d[X+he]+=xe*ce,d[ee+he]+=xe*de,d[ae+he]+=xe*ve}return ht(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){H(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,b=0;b<s;b++)for(var x=b*e.strides[0],y=0;y<n;y++)for(var w=v*y,C=x+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],R=0;R<o;R++)for(var S=m*R,E=C+Math.min(c-1,a?Math.round(S):Math.floor(S))*e.strides[2],I=0;I<l;I++){var A=f[E+I];h[g++]=A}return nt(h,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){H([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],b=v[1]/m[1],x=1/g,y=1/b,w=2*Math.ceil(x)+2,C=2*Math.ceil(y)+2,R=0;R<i;R++)for(var S=R*n.strides[0],E=0;E<s;E++)for(var I=S+E*n.strides[1],A=Math.floor(E*x),T=Math.floor(A-w/2),M=0;M<u;M++)for(var B=I+M*n.strides[2],L=Math.floor(M*y),V=Math.floor(L-C/2),z=0;z<c;z++){for(var U=0,G=0;G<w;G++){var j=G+T;if(!(j<0||j>=f)){var X=S+j*e.strides[1],ee=j*g;if(E===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var ae=0;ae<C;ae++){var ue=ae+V;if(!(ue<0||ue>=h)){var ce=X+ue*e.strides[2],de=ue*b;M===Math.min(u-1,o?Math.round(de):Math.floor(de))&&(U+=p[ce+z])}}}}d[B+z]=U}return ht(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){H([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,b=0,x=0,y=0,w=0,C=0;C<u.length;++C)d[C]=h[b++]+(u[C]-c[x++])*f[y++]/Math.sqrt(l[w++]+a),b>=p&&(b=0),x>=g&&(x=0),y>=v&&(y=0),w>=m&&(w=0);return ht(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){H(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,b=m-g+Math.max(0,g-n),x=m-g+Math.min(g+n,u),y=0;b<=x;b++){var w=c[b];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+a*p,-i);f[d]=v}return ht(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){H(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-a),b=v-m+Math.min(c,m+a+1),x=0,y=g;y<b;y++)x+=Math.pow(f[y],2);for(x=s*x+i,y=g;y<b;y++){var w=-2*s*u*f[y]*h[v]/x;v===y&&(w+=Math.pow(x,-u)),w*=l[v],d[y]+=w}}return ht(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){H(e,"multinomial");for(var i=n?e:ln(e),s=i.shape[0],u=i.shape[1],c=Ne([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=Zo(a.toString()),g=h*o,b=0;b<o;++b){var x=m();l[g+b]=p.length;for(var y=0;y<p.length;y++)if(x<p[y]){l[g+b]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){H(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return _n(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return H(e,"nonMaxSuppression"),Li(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=fe(e.shape,"float32"),s=fe(e.shape,"float32"),u=Tt(e).as2D(o,a),c=Kt(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),h=c.slice([l,0],[1,a]),d=et(f,h),p=this.readSync(this.fftImpl(d,n).dataId),v=0;v<a;v++){var m=Qs(p,v);i.values[l*a+v]=m.real,s.values[l*a+v]=m.imag}return et(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=et(Tt(i).div(K(a)),Kt(i).div(K(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return et(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var b=Math.ceil(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(a),u=et(s.real,s.imag).as1D(),c=function(g){for(var b=Math.floor(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(a),l=et(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,b){for(var x=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(b?2:-2)*Math.PI*(w/g);x[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:x,imag:y}}(n,o),h=et(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=Tt(d).concat(Tt(p)),m=Kt(d).concat(Kt(p));return et(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=mp(i*c,n,o),f=Qs(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),vp(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){D(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),D(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),h=this.readSync(e.dataId),d=new Float32Array(a*c*l*f),p=0,v=0;v<a;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/n),b=m%n,x=0;x<l;++x)for(var y=Math.floor(x/n),w=(b*n+x%n)*f,C=0;C<f;++C){var R=C+w+u*(y+s*(g+i*v));d[p++]=h[R]}return ht(d,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=we(e.shape,n.shape),s=fe(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=wn(e.shape,i),f=wn(n.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(n),m=function(g){var b=s.indexToLoc(g),x=b.slice(-e.rank);l.forEach(function(R){return x[R]=0});var y=p.locToIndex(x),w=b.slice(-n.rank);f.forEach(function(R){return w[R]=0});var C=v.locToIndex(w);h[g]=a(u[y],c[C])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=we(e.shape,n.shape),i=fe(a,"float32"),s=fe(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=wn(e.shape,a),f=wn(n.shape,a),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var b=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),R=C.slice(-e.rank);l.forEach(function(T){return R[T]=0});var S=b.locToIndex(R),E=C.slice(-n.rank);f.forEach(function(T){return E[T]=0});var I=x.locToIndex(E),A=o(u[2*S],u[2*S+1],c[2*I],c[2*I+1]);h[w]=A.real,d[w]=A.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return Mc(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=n.shape[0],p=a[0],v=a[1],m=fe([d,p,v,h],"float32"),g=this.readSync(n.dataId),b=this.readSync(o.dataId),x=this.readSync(e.dataId),y=e.strides,w=m.strides,C=0;C<d;C++){var R=4*C,S=g[R],E=g[R+1],I=g[R+2],A=g[R+3],T=b[C];if(!(T>=c))for(var M=p>1?(I-S)*(l-1)/(p-1):0,B=v>1?(A-E)*(f-1)/(v-1):0,L=0;L<p;L++){var V=p>1?S*(l-1)+L*M:.5*(S+I)*(l-1);if(V<0||V>l-1)for(var z=0;z<v;z++)for(var U=0;U<h;U++){var G=U+z*w[2]+L*w[1]+C*w[0];m.values[G]=s}else if(i==="bilinear"){var j=Math.floor(V),X=Math.ceil(V),ee=V-j;for(z=0;z<v;z++)if((me=v>1?E*(f-1)+z*B:.5*(E+A)*(f-1))<0||me>f-1)for(U=0;U<h;U++)G=U+z*w[2]+L*w[1]+C*w[0],m.values[G]=s;else{var ae=Math.floor(me),ue=Math.ceil(me),ce=me-ae;for(U=0;U<h;U++){var de=x[G=U+ae*y[2]+j*y[1]+T*y[0]],ve=x[G=U+ue*y[2]+j*y[1]+T*y[0]],he=x[G=U+ae*y[2]+X*y[1]+T*y[0]],xe=de+(ve-de)*ce,Y=he+(x[G=U+ue*y[2]+X*y[1]+T*y[0]]-he)*ce;G=U+z*w[2]+L*w[1]+C*w[0],m.values[G]=xe+(Y-xe)*ee}}}else for(z=0;z<v;++z){var me;if((me=v>1?E*(f-1)+z*B:.5*(E+A)*(f-1))<0||me>f-1)for(U=0;U<h;U++)G=U+z*w[2]+L*w[1]+C*w[0],m.values[G]=s;else{var _e=Math.round(me),Ee=Math.round(V);for(U=0;U<h;U++){var Fe=U+_e*y[2]+Ee*y[1]+T*y[0],Ie=U+z*w[2]+L*w[1]+C*w[0];m.values[Ie]=x[Fe]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=Lo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Rc(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return nt([],s,e.dtype);for(var f=new Wr([u,c],e.dtype),h=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<a;g++){var b=h[p*a+g];m+=b*l[g],v.push(b)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var x=0;x<c;x++)f.values[p*c+x]=d[m*c+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=Lo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=K(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=Do(o=o||Kr(n),te(e));return a.fill(n),N.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=Do(e.dtype,te(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return Fc(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var h=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return nt([],o,n.dtype);var v=new Wr(h,n.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],b=0,x=0;x<u;x++){var y=d[m*u+x];g.push(y),b+=y*c[x]}if(b<0||b>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?v.values[b*i+w]+=p[m*i+w]:v.values[b*i+w]=n.rank===0?p[0]:p[m*i+w]}return v.toTensor().reshape(o)},t}(Tc);N.registerBackend("cpu",function(){return new O0},1);for(var La=0,bu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;H(a,"NonMaxSuppressionWithScore");var d=Wi(h.data.get(a.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;H(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:zr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;H([o,a],zr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(h,d,p,v,m,g){var b=we(h,d),x=b.length,y=Yt(b),w=Lr(m,te(b)),C=h.length,R=d.length,S=Yt(h),E=Yt(d),I=wn(h,b),A=wn(d,b);if(I.length+A.length===0)for(var T=0;T<w.length;++T)w[T]=g(p[T%p.length],v[T%v.length]);else{var M=function(B){var L=qh(B,x,y),V=L.slice(-C);I.forEach(function(j){return V[j]=0});var z=Hs(V,C,S),U=L.slice(-R);A.forEach(function(j){return U[j]=0});var G=Hs(U,R,E);w[B]=g(p[z],v[G])};for(T=0;T<w.length;++T)M(T)}return[w,b]}(o.shape,a.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];La<bu.length;La++)oc(bu[La]);var Zn,B0=function(r){this.variableNames=["A"];var t=ut(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},L0=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=ut(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Wa=0,wu=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,a];(s||i)&&(Zn==null&&(Zn=document.createElement("canvas").getContext("2d")),Zn.canvas.width=c,Zn.canvas.height=l,Zn.drawImage(o,0,0,c,l),o=Zn.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=wt.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=W().getBool("WEBGL_PACK")?new L0(h):new B0(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;No("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=Wi(h.readSync(a.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new pe(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:zr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an("return (a - b) * (a - b);",o.shape,a.shape):new Le("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Wa<wu.length;Wa++)oc(wu[Wa]);for(var Ua=0,Cu=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:zr,gradFunc:function(r,t){var e=t[0],n=t[1],o=K(2);return{a:function(){return lt(r,lt(o,$e(e,n)))},b:function(){return lt(r,lt(o,$e(n,e)))}}}}];Ua<Cu.length;Ua++)Mh(Cu[Ua]);var W0=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();W().get("IS_BROWSER")&&W().setPlatform("browser",new W0);var Va,U0=function(){return require("node-fetch")},V0=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return W().global.fetch!=null?W().global.fetch(t,e):(Va==null&&(Va=U0()),Va(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();W().get("IS_NODE")&&W().setPlatform("node",new V0);var mi={float32:4,int32:4,uint16:2,uint8:1,bool:1},jo=4;function Il(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=te(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=mi[d.dtype],v=r.slice(n,n+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(C){return Math.round(C*d.scale+d.min)})}n+=f*p}else if(c==="string"){var g=te(s.shape);h=[];for(var b=0;b<g;b++){var x=new Uint32Array(r.slice(n,n+jo))[0];n+=jo;var y=new Uint8Array(r.slice(n,n+x));h.push(y),n+=x}}else{var w=mi[c];if(v=r.slice(n,n+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}n+=f*w}e[u]=nt(h,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function z0(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var gi=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Eu(r){return gi?Buffer.byteLength(r):new Blob([r]).size}function os(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function _u(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function eo(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Eu(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Eu(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var Ct=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),hr="://",Rn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){D(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(hr)&&(t=t.slice(0,t.indexOf(hr))),D(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();D(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function So(r){if(r.indexOf(hr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Rn.getSchemes().join(","));return{scheme:r.split(hr)[0],path:r.split(hr)[1]}}function Ru(r,t,e){return e===void 0&&(e=!1),Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return Z(this,function(h){switch(h.label){case 0:return D(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),D((n=Ct.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),D(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],D((a=Ct.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),D(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=So(r).scheme,u=So(r).path,c=s===So(r).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,Rn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,Rn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var Wn="models_store",Cn="model_info_store";function Dl(){if(!W().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function yi(r){var t=r.result;t.createObjectStore(Wn,{keyPath:"modelPath"}),t.createObjectStore(Cn,{keyPath:"modelPath"})}var dr=function(){function r(t){if(this.indexedDB=Dl(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return yi(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Wn,"readonly"),c=u.objectStore(Wn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=eo(e),h=s.transaction(Cn,"readwrite"),d=h.objectStore(Cn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(Wn,"readwrite")).objectStore(Wn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(Cn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(v.error)},g.onerror=function(b){return s.close(),a(v.error)}}},p.onerror=function(v){return s.close(),a(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Su=function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(dr.URL_SCHEME)?(t=r.slice(dr.URL_SCHEME.length),new dr(t)):null;var t};Ct.registerSaveRouter(Su),Ct.registerLoadRouter(Su);var H0=function(){function r(){this.indexedDB=Dl()}return r.prototype.listModels=function(){return Q(this,void 0,void 0,function(){var t=this;return Z(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return yi(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Cn,"readonly"),u=s.objectStore(Cn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return Q(this,void 0,void 0,function(){var e=this;return Z(this,function(n){var o;return t=(o=t).startsWith(dr.URL_SCHEME)?o.slice(dr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return yi(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Cn,"readwrite"),f=l.objectStore(Cn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var v=(u=c.transaction(Wn,"readwrite")).objectStore(Wn).delete(t);v.onsuccess=function(){return a(h.result.modelArtifactsInfo)},v.onerror=function(m){return i(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(W().getBool("IS_BROWSER"))try{Rn.registerManager(dr.URL_SCHEME,new H0)}catch{}var sn="/",ur="tensorflowjs_models",kl="info",G0="model_topology",j0="weight_specs",q0="weight_data",K0="model_metadata";function Tl(r){return{info:[ur,r,kl].join(sn),topology:[ur,r,G0].join(sn),weightSpecs:[ur,r,j0].join(sn),weightData:[ur,r,q0].join(sn),modelMetadata:[ur,r,K0].join(sn)}}function X0(r){var t=r.split(sn);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(sn)}var pr=function(){function r(t){if(!W().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Tl(this.modelPath)}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o;return Z(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=eo(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(gi)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return Z(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(gi){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Iu=function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(pr.URL_SCHEME)?(t=r.slice(pr.URL_SCHEME.length),new pr(t)):null;var t};Ct.registerSaveRouter(Iu),Ct.registerLoadRouter(Iu);var $0=function(){function r(){D(W().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),D(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i;return Z(this,function(s){for(t={},e=ur+sn,n=sn+kl,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=X0(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){var a;if(t=(a=t).startsWith(pr.URL_SCHEME)?a.slice(pr.URL_SCHEME.length):a,e=Tl(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(W().getBool("IS_BROWSER"))try{Rn.registerManager(pr.URL_SCHEME,new $0)}catch{}var Y0="model",J0=".json",Q0=".weights.bin";function Du(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var za=function(){function r(t){if(!W().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Y0),this.modelTopologyFileName=t+J0,this.weightDataFileName=t+Q0}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Du(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Du(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:eo(t)}]}})})},r.URL_SCHEME="downloads://",r}(),Z0=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n=this;return Z(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=n.checkManifestAndWeightFiles(f,e)}catch(m){return void i(m)}var d=[],p=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var b=new FileReader;b.onload=function(x){var y=x.target.result,w=p.indexOf(g);v[w]=y,v.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:os(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},b.onerror=function(x){return i("Failed to weights data from file of path '"+g+"'.")},b.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return _u(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=_u(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function ku(r,t,e,n){(function(a){D(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){D(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),D(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),D(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function Al(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return Z(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?W().platform.fetch:t.fetchFunc,n=r.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,ku(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,ku(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Tu(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),Q(t,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p;return Z(this,function(v){switch(v.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var b=0;m.weights.forEach(function(x){var y="quantization"in x?x.quantization.dtype:x.dtype,w=mi[y]*te(x.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:x,groupOffset:b,sizeBytes:w})};o!=null?o.forEach(function(R,S){R===x.name&&(C(),s[S]=!0)}):C(),u.push(x.name),b+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(m,g,b){return g&&m.push(b),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var b=n+(n.endsWith("/")?"":"/")+g;f.push(b)})}),[4,r(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,b=0,x=0;x<g;x++)b+=h[p+x].byteLength;for(var y=new ArrayBuffer(b),w=new Uint8Array(y),C=0,R=0;R<g;R++){var S=new Uint8Array(h[p+R]);w.set(S,C),C+=S.byteLength}i[m].forEach(function(E){var I=Il(y.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var A in I)d[A]=I[A]}),p+=g}),[2,d]}})})}}Ct.registerSaveRouter(function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(za.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new za(t)}(r.slice(za.URL_SCHEME.length)):null});var Nl=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(D(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=W().platform.fetch,D(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&D(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:eo(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return Q(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,h;return Z(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h;return Z(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),b=m>v?p.substring(m):"";return[g+"/",b]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(v){f.push(i+v+a)})}),[4,Al(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,os(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function xi(r){return r.match(Nl.URL_SCHEME_REGEX)!=null}var Au=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return xi(e)}):xi(r))?bi(r,{onProgress:t}):null};function bi(r,t){return new Nl(r,t)}Ct.registerSaveRouter(Au),Ct.registerLoadRouter(Au);var Ha=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){return[2,this.modelArtifacts]})})},r}(),ey=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Fl=Object.freeze({browserFiles:function(r){return new Z0(r)},browserHTTPRequest:function(r,t){return bi(r,t)},concatenateArrayBuffers:os,decodeWeights:Il,encodeWeights:function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return Q(s,void 0,void 0,function(){var v,m,g,b,x,y,w;return Z(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(v=C.sent(),m=v.reduce(function(R,S){return R+S.length},0)+jo*v.length,g=new Uint8Array(m),b=0,x=0;x<v.length;x++)y=v[x],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,b),b+=jo,g.set(y,b),b+=y.length;return p(g),[2]}})})});n.push(d)}else n.push(f.data());t!=null&&(h.group=t),e.push(h)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:z0(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Ha(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ha({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ha({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return Ct.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:eo,getSaveHandlers:function(r){return Ct.getSaveHandlers(r)},http:bi,isHTTPScheme:xi,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),Q(this,void 0,void 0,function(){return Z(this,function(o){return[2,Tu(function(a){return Al(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return Ct.registerLoadRouter(r)},registerSaveRouter:function(r){return Ct.registerSaveRouter(r)},weightsLoaderFactory:Tu,withSaveHandler:function(r){return new ey(r)},copyModel:function(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){return[2,Ru(r,t,!1)]})})},listModels:function(){return Q(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:r=Rn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,Rn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+hr+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){return[2,Ru(r,t,!0)]})})},removeModel:function(r){return Q(this,void 0,void 0,function(){var t;return Z(this,function(e){return t=So(r),[2,Rn.getManager(t.scheme).removeModel(t.path)]})})}}),er;k({confusionMatrix_:function(r,t,e){var n=_(r,"labels","confusionMatrix"),o=_(t,"predictions","confusionMatrix");D(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),D(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),D(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),D(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),D(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=fi(n.asType("int32"),e),i=fi(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var ty=k({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(rc("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(er==null&&(er=document.createElement("canvas").getContext("2d")),er.canvas.width=l,er.canvas.height=f,er.drawImage(r,0,0,l,f),s=er.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Fi(u,[f,l,t],"int32")}}),as=Object.freeze({toPixels:function(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,C,R,S;return Z(this,function(E){switch(E.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Me||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=E.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)b=void 0,x=void 0,y=void 0,w=void 0,i===1?(b=s[g]*v,x=s[g]*v,y=s[g]*v,w=255):i===3?(b=s[3*g]*v,x=s[3*g+1]*v,y=s[3*g+2]*v,w=255):i===4&&(b=s[4*g]*v,x=s[4*g+1]*v,y=s[4*g+2]*v,w=s[4*g+3]*v),m[(C=4*g)+0]=Math.round(b),m[C+1]=Math.round(x),m[C+2]=Math.round(y),m[C+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,R=t.getContext("2d"),S=new ImageData(m,a,o),R.putImageData(S,0,0)),e!==r&&e.dispose(),[2,m]}})})},fromPixels:ty}),ny=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),ry=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function Xn(r){D(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),D(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),D(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),ry.register(r)}var $n=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Bt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return pt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return dp(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&pt(this.iterations_)},t.prototype.saveIterations=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:K(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(ny);Object.defineProperty($n,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var oy=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=N.backend.epsilon()),a}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:$(function(){return Ce(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:$(function(){return Ce(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),h=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(h);var d=f.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(pt(this.accumulatedGrads.map(function(e){return e.variable})),pt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}($n);Xn(oy);var ay=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:$(function(){return Jt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&pt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}($n);Xn(ay);var iy=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],$(function(){i.accBeta1=K(n).variable(),i.accBeta2=K(o).variable()}),a==null&&(i.epsilon=N.backend.epsilon()),i}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=$e(1,n.accBeta1),i=$e(1,n.accBeta2);o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return Ce(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return Ce(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedSecondMoment[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2).add(l.square().mul(1-n.beta2)),v=d.div(a),m=p.div(i);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&pt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&pt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),$(function(){o.accBeta1.assign(Ho(o.beta1,o.iterations_+1)),o.accBeta2.assign(Ho(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}($n);Xn(iy);var sy=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=K(0).variable(),s.accBeta1=K(n).variable()}),a==null&&(s.epsilon=N.backend.epsilon()),s}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=$e(1,n.accBeta1),i=Pt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Ce(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Ce(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedWeightedInfNorm[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=i.div(a).mul(d.div(m.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&pt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&pt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}($n);Xn(sy);var Pl=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=N.registeredVariables[o];$(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Id(K(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}($n);Xn(Pl);var uy=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=K(a.momentum),a}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:$(function(){return Ce(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&pt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(Pl);Xn(uy);var cy=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=N.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Bt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:$(function(){return Ce(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:$(function(){return Ce(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:$(function(){return Ce(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,h=f.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var v=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())),u.assign(v),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&pt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&pt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&pt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}($n);Xn(cy);Me.prototype.squaredDifference=function(r){return $c(this,r)},O=M0;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wi=function(r,t){return wi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},wi(r,t)};function le(r,t){wi(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var st=function(){return st=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},st.apply(this,arguments)};function ne(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function re(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Br(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Un=function(){function r(t,e){if(!Vn(t)||!Vn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function sa(r,t){return r instanceof Me&&r.shape.length===t}function ly(r){return sa(r,2)}function ua(r){return sa(r,3)}function Sn(r){return sa(r,4)}function fy(r){return r%1!==0}function Nu(r){return r%2===0}function Ml(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Fu(r){return r&&r.width&&r.height}function hy(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Un(Math.round(e*o),Math.round(n*o))}function is(r){return r.reduce(function(t,e){return t.add(e)},new Re(0,0)).div(new Re(r.length,r.length))}function Hr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Vn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Pu(r){return Vn(r)&&0<=r&&r<=1}var Re=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Zt=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Vn),a=[n.x,n.y,n.width,n.height].every(Vn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Vn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new Re(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new Re(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new Re(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new Re(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Fu(t)?t.width:t,n=Fu(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+n,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:h,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),ca=function(r){le(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(Zt),Ol=function(){function r(t,e,n,o,a){this._imageDims=new Un(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new Zt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Zt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),Rt=function(r){le(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(Ol);function dy(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function py(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new ca(n,o,a,i)}function Gr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(dy(h,d,n))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)i();return a}function to(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],a=Jt(Br(r.shape.slice(0,3),[1]),e),i=Jt(Br(r.shape.slice(0,3),[1]),n),s=Jt(Br(r.shape.slice(0,3),[1]),o),u=qe([a,i,s],3);return $e(r,u)})}function vy(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Jt(p,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return qe(h,s)})}function Ga(r){return 1/(1+Math.exp(-r))}var ss=function(r){le(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(Zt),my=.5,gy=.43,yy=.45,jr=function(){function r(t,e,n){n===void 0&&(n=new Re(0,0));var o=e.width,a=e.height;this._imgDims=new Un(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new Re(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new Re(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Re(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Re(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof Rt?t.box.floor():new Zt(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/yy),u=is(t),c=Math.floor(Math.max(0,u.x-my*s)),l=Math.floor(Math.max(0,u.y-gy*s));return new ss(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=py(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),xy=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],is([e[3],e[4]])]},t}(jr),by=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(is)},t}(jr),Mu=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Ml(this.distance)+")":"")},r}(),Ou=function(r){le(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(Zt.assertIsValidBox(e,n),!Vn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Zt),Pr=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){le(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Ou.assertIsValidLabeledBox(e,n),!Pu(e.score)||!Pu(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Ou);function qo(r){return r.detection instanceof Rt}function qr(r,t){var e={detection:t};return Object.assign({},r,e)}function Bl(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function Ll(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Wl(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=Ll();return st({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function Ul(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Vl(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var je;function wy(){if(!je)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return je}function Ci(r){je=r}function us(){Ul()&&Ci(Bl()),Vl()&&Ci(Wl())}function Cy(r){if(je||us(),!je)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?je.Canvas:t,n=r.Image,o=n===void 0?je.Image:n;je.Canvas=e,je.Image=o,je.createCanvasElement=r.createCanvasElement||function(){return new e},je.createImageElement=r.createImageElement||function(){return new o},je.ImageData=r.ImageData||je.ImageData,je.Video=r.Video||je.Video,je.fetch=r.fetch||je.fetch,je.readFile=r.readFile||je.readFile}var rt={getEnv:wy,setEnv:Ci,initialize:us,createBrowserEnv:Bl,createFileSystem:Ll,createNodejsEnv:Wl,monkeyPatch:Cy,isBrowser:Ul,isNodejs:Vl};us();function cs(r){return!rt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function un(r){var t=rt.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=cs(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var En;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(En||(En={}));var zl=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||En.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Ey=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new zl(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===En.BOTTOM_RIGHT||n===En.TOP_RIGHT,a=n===En.BOTTOM_LEFT||n===En.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,h=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,f-s),0);return{x:h,y:d}}return{x:u,y:c}},r.prototype.draw=function(t){var e=cs(t),n=un(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),f=this.measureHeight();n.fillStyle=a;var h=this.getUpperLeft(n,e);n.fillRect(h.x,h.y,l,f),n.fillStyle=i,this.text.forEach(function(d,p){var v=c+h.x,m=c+h.y+(p+1)*s;n.fillText(d,v,m)})},r}(),_y=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:En.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new zl(Object.assign({},i,a))}return r}(),Hl=function(){function r(t,e){e===void 0&&(e={}),this.box=new Zt(t),this.options=new _y(e)}return r.prototype.draw=function(t){var e=un(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new Ey([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function Ry(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof Rt?n.score:qo(n)?n.detection.score:void 0,a=n instanceof Rt?n.box:qo(n)?n.detection.box:new Zt(n),i=o?""+Ml(o):void 0;new Hl(a,{label:i}).draw(r)})}function Gl(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Sy(r){return new Promise(function(t,e){if(r instanceof rt.getEnv().Canvas||Gl(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Iy(r){return new Promise(function(t,e){if(!(r instanceof Blob))return e("bufferToImage - expected buf to be of type: Blob");var n=new FileReader;n.onload=function(){if(typeof n.result!="string")return e("bufferToImage - expected reader.result to be a string, in onload");var o=rt.getEnv().createImageElement();o.onload=function(){return t(o)},o.onerror=e,o.src=n.result},n.onerror=e,n.readAsDataURL(r)})}function ls(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Un(r.naturalWidth,r.naturalHeight):r instanceof n?new Un(r.videoWidth,r.videoHeight):new Un(r.width,r.height)}function la(r){var t=r.width,e=r.height,n=rt.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function fs(r,t){var e=rt.getEnv().ImageData;if(!(r instanceof e)&&!Gl(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||ls(r),o=n.width,a=n.height,i=la({width:o,height:a});return r instanceof e?un(i).putImageData(r,0,0):un(i).drawImage(r,0,0,o,a),i}function Dy(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s;return re(this,function(u){switch(u.label){case 0:return e=t||rt.getEnv().createCanvasElement(),n=r.shape.slice(Sn(r)?1:0),o=n[0],a=n[1],i=n[2],s=$(function(){return r.as3D(o,a,i).toInt()}),[4,as.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Bu(r){var t=rt.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function ky(r,t,e){e===void 0&&(e=!1);var n=rt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=ls(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=la({width:t,height:t}),f=r instanceof a?r:fs(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return un(l).drawImage(f,d,p,u,c),l}var Ko=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(ua(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(Sn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof rt.getEnv().Canvas?o:fs(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Hr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return hy({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=Hr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Me){var u=Sn(s)?s:s.expandDims();return u=vy(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Zi.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof rt.getEnv().Canvas)return as.fromPixels(ky(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=_t(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function Ze(r){return ne(this,void 0,void 0,function(){var t,e,n;return re(this,function(o){switch(o.label){case 0:if(r instanceof Ko)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(cs),n.forEach(function(a,i){if(!Bu(a)&&!ua(a)&&!Sn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Sn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Bu(a)&&Sy(a)}))];case 1:return o.sent(),[2,new Ko(n,Array.isArray(r))]}})})}function hs(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return re(this,function(c){switch(c.label){case 0:return e=rt.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ze(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,Dy(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=un(n),u=t.map(function(l){return l instanceof Rt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=la({width:d,height:p});return un(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function ds(r,t){return ne(this,void 0,void 0,function(){return re(this,function(e){if(!ua(r)&&!Sn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Sn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(Sn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof Rt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return ml(r.as3D(o,a,i),[f,l,0],[d,h,i])});return u})]})})}function jl(r,t){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return e=rt.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function Ty(r){return ne(this,void 0,void 0,function(){var t,e;return re(this,function(n){switch(n.label){case 0:return[4,jl(r)];case 1:return t=n.sent(),[4,t.blob()];case 2:if(e=n.sent(),!e.type.startsWith("image/"))throw new Error("fetchImage - expected blob type to be of type image/*, instead have: "+e.type+", for url: "+t.url);return[2,Iy(e)]}})})}function Ay(r){return ne(this,void 0,void 0,function(){return re(this,function(t){switch(t.label){case 0:return[4,jl(r)];case 1:return[2,t.sent().json()]}})})}function ql(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function Ny(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a;return re(this,function(i){switch(i.label){case 0:return e=ql(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,Ay(n)];case 1:return a=i.sent(),[2,Fl.loadWeights(a,o)]}})})}function Fy(r,t,e){e===void 0&&(e=!1);var n=e?ls(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var hn=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof gr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof gr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=nt(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return ne(this,void 0,void 0,function(){return re(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Ny(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return re(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=rt.getEnv().readFile,n=ql(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=Fl.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,a)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Me))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function Et(r,t,e){return $(function(){var n=Xi(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ye(n,t.bias),n})}function ja(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Oe(e?ye(Nt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):Et(r,t.conv0,[2,2])),o=Et(n,t.conv1,[1,1]),a=Oe(ye(n,o)),i=Et(a,t.conv2,[1,1]);return Oe(ye(n,ye(o,i)))})}function mo(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=Oe(e?ye(Nt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):Et(r,t.conv0,n?[2,2]:[1,1])),a=Et(o,t.conv1,[1,1]),i=Oe(ye(o,a)),s=Et(i,t.conv2,[1,1]),u=Oe(ye(o,ye(a,s))),c=Et(u,t.conv3,[1,1]);return Oe(ye(o,ye(a,ye(s,c))))})}function Ot(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=ye(Nt(r,t.filters,[1,1],e),t.bias);return n?Oe(o):o})}function dn(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function fa(r,t){return function(e,n,o,a){var i=ht(r(e*n*o*o),[o,o,e,n]),s=Ge(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function ps(r,t){return function(e,n,o){var a=_n(r(e*n),[e,n]),i=Ge(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Kl=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function vs(r,t){return function(e,n,o){var a=ht(r(9*e),[3,3,e,1]),i=ht(r(e*n),[1,1,e,n]),s=Ge(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Kl(a,i,s)}}function ms(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Kl(e,n,o)}}function An(r,t){return function(e,n,o){var a=r[e];if(!sa(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function pn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Xl(r,t){var e=fa(r,t),n=vs(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),h=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Py(r){var t=[],e=pn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Xl(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function $l(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Yl(r,t){var e=An(r,t),n=$l(e),o=ms(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function My(r){var t=[],e=Yl(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return dn(r,t),{params:n,paramMappings:t}}var Jl=function(r){le(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=to(o,a).div(K(255)),s=mo(i,n.dense0,!0);return s=mo(s,n.dense1),s=mo(s,n.dense2),s=mo(s,n.dense3),s=Zr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return My(e)},t.prototype.extractParams=function(e){return Py(e)},t}(hn);function Xt(r,t){return $(function(){return ye(oa(r,t.weights),t.bias)})}function Oy(r,t,e){var n=[],o=pn(r),a=o.extractWeights,i=o.getRemainingWeights,s=ps(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function By(r){var t=[],e=An(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return dn(r,t),{params:o,paramMappings:t}}function Ql(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Zl=function(r){le(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof Ko?n.faceFeatureExtractor.forwardInput(e):e;return Xt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Oy(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Ql(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),By(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(hn),Lu=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Ly=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Lu.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Lu.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),Wy=function(r){le(t,r);function t(e){return e===void 0&&(e=new Jl),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return ln(n.runNet(e))})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s=this;return re(this,function(u){switch(u.label){case 0:return[4,Ze(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Ke(o).map(function(c){return ne(s,void 0,void 0,function(){var l;return re(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new Ly(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Zl);function ef(r,t){var e={expressions:t};return Object.assign({},r,e)}function tf(r){return qo(r)&&r.landmarks instanceof jr&&r.unshiftedLandmarks instanceof jr&&r.alignedRect instanceof Rt}function ha(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new Rt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function Uy(r,t){var e=fa(r,t),n=vs(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Vy(r,t){var e=[],n=pn(r),o=n.extractWeights,a=n.getRemainingWeights,i=Uy(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};Hr(t,0,1).forEach(function(x){v["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),b={reduction_block:m,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:b}}}function zy(r,t){var e=An(r,t),n=$l(e),o=ms(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Hy(r,t){var e=[],n=zy(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Hr(t,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return dn(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function nf(r,t,e){return ye(Nt(r,t.filters,e,"same"),t.bias)}function qa(r,t,e){e===void 0&&(e=!0);var n=e?Oe(r):r;return n=Et(n,t.separable_conv0,[1,1]),n=Et(Oe(n),t.separable_conv1,[1,1]),n=Je(n,[3,3],[2,2],"same"),n=ye(n,nf(r,t.expansion_conv,[2,2])),n}function Gy(r,t){var e=Et(Oe(r),t.separable_conv0,[1,1]);return e=Et(Oe(e),t.separable_conv1,[1,1]),e=Et(Oe(e),t.separable_conv2,[1,1]),e=ye(e,r),e}var jy=function(r){le(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=to(a,i).div(K(256)),u=Oe(nf(s,o.entry_flow.conv_in,[2,2]));return u=qa(u,o.entry_flow.reduction_block_0,!1),u=qa(u,o.entry_flow.reduction_block_1),Hr(n._numMainBlocks,0,1).forEach(function(c){u=Gy(u,o.middle_flow["main_block_"+c])}),u=qa(u,o.exit_flow.reduction_block),u=Oe(Et(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Hy(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Vy(e,this._numMainBlocks)},t}(hn);function qy(r){var t=[],e=pn(r),n=e.extractWeights,o=e.getRemainingWeights,a=ps(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function Ky(r){var t=[],e=An(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return dn(r,t),{params:o,paramMappings:t}}var Xo;(function(r){r.FEMALE="female",r.MALE="male"})(Xo||(Xo={}));var Xy=function(r){le(t,r);function t(e){e===void 0&&(e=new jy(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof Ko?n.faceFeatureExtractor.forwardInput(e):e,i=Zr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Xt(i,o.fc.age).as1D(),u=Xt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:ln(i)}})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return re(this,function(l){switch(l.label){case 0:return[4,Ze(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Ke(o.age),i=Ke(o.gender),s=a.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return ne(c,void 0,void 0,function(){var p,v,m,g,b;return re(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return p=x.sent()[0],[4,d.data()];case 2:return v=x.sent()[0],m=v>.5,g=m?Xo.MALE:Xo.FEMALE,b=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:b}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return qy(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Ql(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Ky(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(hn),rf=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return $(function(){var s=function(h,d){return _t([Jt([68],h),Jt([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=a[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(Jt([i,136],n)).sub(_t(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(_t(Array.from(Array(i),function(h,d){return s(a[d].width,a[d].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i=this;return re(this,function(s){switch(s.label){case 0:return[4,Ze(e)];case 1:return n=s.sent(),o=$(function(){return Ke(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return ne(i,void 0,void 0,function(){var l,f,h,d,p;return re(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return Nu(g)}),p=l.filter(function(m,g){return!Nu(g)}),[2,new by(Array(68).fill(0).map(function(m,g){return new Re(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Zl),of=function(r){le(t,r);function t(e){return e===void 0&&(e=new Jl),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(rf);function $y(r){var t=[],e=Yl(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return dn(r,t),{params:n,paramMappings:t}}function Yy(r){var t=[],e=pn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Xl(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var Jy=function(r){le(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=to(o,a).div(K(255)),s=ja(i,n.dense0,!0);return s=ja(s,n.dense1),s=ja(s,n.dense2),s=Zr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return $y(e)},t.prototype.extractParams=function(e){return Yy(e)},t}(hn),Qy=function(r){le(t,r);function t(e){return e===void 0&&(e=new Jy),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(rf);(function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(of);function Zy(r,t){return ye(lt(r,t.weights),t.biases)}function gs(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=Nt(r,i,e,o);return u=ye(u,s),u=Zy(u,t.scale),n?Oe(u):u}function ex(r,t){return gs(r,t,[1,1],!0)}function af(r,t){return gs(r,t,[1,1],!1)}function sf(r,t){return gs(r,t,[2,2],!0,"valid")}function tx(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(fy(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return Dn(ht(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),h=Ge(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Ge(r(s)),l=Ge(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=a((f?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function nx(r){var t=pn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=tx(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),b=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),R=$(function(){return Dn(_n(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:b,conv256_down:x,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:R};return{params:S,paramMappings:o}}function rx(r,t){var e=An(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function ox(r){var t=[],e=rx(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),b=o("conv256_2"),x=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!ly(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:b,conv256_down_out:x,fc:y};return dn(r,t),{params:w,paramMappings:t}}function Ht(r,t){var e=ex(r,t.conv1);return e=af(e,t.conv2),e=ye(e,r),e=Oe(e),e}function go(r,t){var e=sf(r,t.conv1);e=af(e,t.conv2);var n=Zr(r,2,2,"valid"),o=Ne(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=Br(e.shape);s[1]=1;var u=Ne(s);e=qe([e,u],1);var c=Br(e.shape);c[2]=1;var l=Ne(c);e=qe([e,l],2)}return n=a?qe([n,o],3):n,e=ye(n,e),e=Oe(e),e}var ax=function(r){le(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=to(o,a).div(K(256)),s=sf(i,n.conv32_down);s=Je(s,3,2,"valid"),s=Ht(s,n.conv32_1),s=Ht(s,n.conv32_2),s=Ht(s,n.conv32_3),s=go(s,n.conv64_down),s=Ht(s,n.conv64_1),s=Ht(s,n.conv64_2),s=Ht(s,n.conv64_3),s=go(s,n.conv128_down),s=Ht(s,n.conv128_1),s=Ht(s,n.conv128_2),s=go(s,n.conv256_down),s=Ht(s,n.conv256_1),s=Ht(s,n.conv256_2),s=go(s,n.conv256_down_out);var u=s.mean([1,2]),c=oa(u,n.fc);return c})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i=this;return re(this,function(s){switch(s.label){case 0:return[4,Ze(e)];case 1:return n=s.sent(),o=$(function(){return Ke(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return ox(e)},t.prototype.extractParams=function(e){return nx(e)},t}(hn);function uf(r,t){var e={descriptor:t};return Object.assign({},r,e)}function cf(r,t){var e={age:t};return Object.assign({},r,e)}function lf(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var ff=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function ix(r,t){function e(u,c){var l=ht(r(9*u),[3,3,u,1]),f=Ge(r(u)),h=Ge(r(u)),d=Ge(r(u)),p=Ge(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,f,h){var d=ht(r(u*c*l*l),[l,l,u,c]),p=Ge(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=n(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),h=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),v=a(512,512,"mobilenetv1/conv_7"),m=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),b=a(512,512,"mobilenetv1/conv_10"),x=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:b,conv_11:x,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),b=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),R=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),A=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),T={box_encoding_predictor:m,class_predictor:g},M={box_encoding_predictor:b,class_predictor:x},B={box_encoding_predictor:y,class_predictor:w},L={box_encoding_predictor:C,class_predictor:R},V={box_encoding_predictor:S,class_predictor:E},z={box_encoding_predictor:I,class_predictor:A};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:T,box_predictor_1:M,box_predictor_2:B,box_predictor_3:L,box_predictor_4:V,box_predictor_5:z}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function sx(r){var t=[],e=pn(r),n=e.extractWeights,o=e.getRemainingWeights,a=ix(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Fi(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function ux(r,t){var e=An(r,t);function n(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),b=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:b},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function cx(r){var t=[],e=ux(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ua(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return dn(r,t),{params:i,paramMappings:t}}function Gt(r,t,e){return $(function(){var n=Nt(r,t.filters,e,"same");return n=ye(n,t.batch_norm_offset),Gi(n,0,6)})}var lx=.0010000000474974513;function fx(r,t,e){return $(function(){var n=ra(r,t.filters,e,"same");return n=tl(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,lx),Gi(n,0,6)})}function hx(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function dx(r,t){return $(function(){var e=null,n=Gt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=hx(s);n=fx(n,a.depthwise_conv,u),n=Gt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function px(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=vx(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function vx(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),h=(i-o)*(s-a),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(a,c),m=Math.min(i,l),g=Math.min(s,f),b=Math.max(m-p,0)*Math.max(g-v,0);return b/(h+d-b)}function mx(r){var t=Ke(Dn(r,[1,0])),e=[$e(t[2],t[0]),$e(t[3],t[1])],n=[ye(t[0],Pt(e[0],K(2))),ye(t[1],Pt(e[1],K(2)))];return{sizes:e,centers:n}}function gx(r,t){var e=mx(r),n=e.sizes,o=e.centers,a=Ke(Dn(t,[1,0])),i=Pt(lt(vi(Pt(a[2],K(5))),n[0]),K(2)),s=ye(lt(Pt(a[0],K(10)),n[0]),o[0]),u=Pt(lt(vi(Pt(a[3],K(5))),n[1]),K(2)),c=ye(lt(Pt(a[1],K(10)),n[1]),o[1]);return Dn(_t([$e(s,i),$e(c,u),ye(s,i),ye(c,u)]),[1,0])}function yx(r,t,e){return $(function(){var n=r.shape[0],o=gx(Mt(lr(e.extra_dim,[n,1,1]),[-1,4]),Mt(r,[-1,4]));o=Mt(o,[n,o.shape[0]/n,4]);var a=Jc(Qt(t,[0,0,1],[-1,-1,-1])),i=Qt(a,[0,0,0],[-1,-1,1]);i=Mt(i,[n,i.shape[1]]);var s=Ke(o),u=Ke(i);return{boxes:s,scores:u}})}function tr(r,t){return $(function(){var e=r.shape[0],n=Mt(Ot(r,t.box_encoding_predictor),[e,-1,1,4]),o=Mt(Ot(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function xx(r,t,e){return $(function(){var n=Gt(r,e.conv_0,[1,1]),o=Gt(n,e.conv_1,[2,2]),a=Gt(o,e.conv_2,[1,1]),i=Gt(a,e.conv_3,[2,2]),s=Gt(i,e.conv_4,[1,1]),u=Gt(s,e.conv_5,[2,2]),c=Gt(u,e.conv_6,[1,1]),l=Gt(c,e.conv_7,[2,2]),f=tr(t,e.box_predictor_0),h=tr(r,e.box_predictor_1),d=tr(o,e.box_predictor_2),p=tr(i,e.box_predictor_3),v=tr(u,e.box_predictor_4),m=tr(l,e.box_predictor_5),g=qe([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),b=qe([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:b}})}var no=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),hf=function(r){le(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=$e(lt(o,K(.007843137718737125)),K(1)),i=dx(a,n.mobilenetv1),s=xx(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return yx(u,c,n.output_layer)})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ze(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,C,R,S;return re(this,function(E){switch(E.label){case 0:return o=new no(n),a=o.maxResults,i=o.minConfidence,[4,Ze(e)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[E.sent()]),g=.5,b=px(f,p,a,g,i),x=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/x.width,C=y/x.height,R=f.arraySync(),S=b.map(function(I){var A=[Math.max(0,R[I][0]),Math.min(1,R[I][2])].map(function(z){return z*C}),T=A[0],M=A[1],B=[Math.max(0,R[I][1]),Math.min(1,R[I][3])].map(function(z){return z*w}),L=B[0],V=B[1];return new Rt(p[I],new ss(L,T,V-L,M-T),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return cx(e)},t.prototype.extractParams=function(e){return sx(e)},t}(hn);(function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(hf);var bx=.4,wx=[new Re(.738768,.874946),new Re(2.42204,2.65704),new Re(4.30971,7.04493),new Re(10.246,4.59428),new Re(12.6868,11.8741)],Cx=[new Re(1.603231,2.094468),new Re(6.041143,7.080126),new Re(2.882459,3.518061),new Re(4.266906,5.178857),new Re(9.041765,10.66308)],Ex=[117.001,114.697,97.404],_x="tiny_yolov2_model",Rx="tiny_yolov2_separable_conv_model",yo=function(r){return typeof r=="number"};function Sx(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!yo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return yo(t.x)&&yo(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(yo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function ys(r){return $(function(){var t=lt(r,K(.10000000149011612));return ye(Oe($e(r,t)),t)})}function yn(r,t){return $(function(){var e=qn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Nt(e,t.conv.filters,[1,1],"valid"),e=$e(e,t.bn.sub),e=lt(e,t.bn.truediv),e=ye(e,t.conv.bias),ys(e)})}function xn(r,t){return $(function(){var e=qn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Xi(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ye(e,t.bias),ys(e)})}function Ix(r,t){var e=fa(r,t);function n(i,s){var u=Ge(r(i)),c=Ge(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=vs(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function Dx(r,t,e,n){var o=pn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=Ix(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),R=f(p,v,"conv1"),S=f(v,m,"conv2"),E=f(m,g,"conv3"),I=f(g,b,"conv4"),A=f(b,x,"conv5"),T=y?f(x,y,"conv6"):void 0,M=w?f(y,w,"conv7"):void 0,B=c(w||y||x,5*e,1,"conv8");h={conv0:C,conv1:R,conv2:S,conv3:E,conv4:I,conv5:A,conv6:T,conv7:M,conv8:B}}else{var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=l(d,p,"conv0"),R=l(p,v,"conv1"),S=l(v,m,"conv2"),E=l(m,g,"conv3"),I=l(g,b,"conv4"),A=l(b,x,"conv5"),T=l(x,y,"conv6"),M=l(y,w,"conv7"),B=c(w,5*e,1,"conv8");h={conv0:C,conv1:R,conv2:S,conv3:E,conv4:I,conv5:A,conv6:T,conv7:M,conv8:B}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function kx(r,t){var e=An(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=ms(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function Tx(r,t){var e=[],n=kx(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return dn(r,e),{params:s,paramMappings:e}}var Wu;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Wu||(Wu={}));var xs=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),df=function(r){le(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return Sx(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=yn(e,n.conv0);return o=Je(o,[2,2],[2,2],"same"),o=yn(o,n.conv1),o=Je(o,[2,2],[2,2],"same"),o=yn(o,n.conv2),o=Je(o,[2,2],[2,2],"same"),o=yn(o,n.conv3),o=Je(o,[2,2],[2,2],"same"),o=yn(o,n.conv4),o=Je(o,[2,2],[2,2],"same"),o=yn(o,n.conv5),o=Je(o,[2,2],[1,1],"same"),o=yn(o,n.conv6),o=yn(o,n.conv7),Ot(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?ys(Ot(e,n.conv0,"valid",!1)):xn(e,n.conv0);return o=Je(o,[2,2],[2,2],"same"),o=xn(o,n.conv1),o=Je(o,[2,2],[2,2],"same"),o=xn(o,n.conv2),o=Je(o,[2,2],[2,2],"same"),o=xn(o,n.conv3),o=Je(o,[2,2],[2,2],"same"),o=xn(o,n.conv4),o=Je(o,[2,2],[2,2],"same"),o=xn(o,n.conv5),o=Je(o,[2,2],[1,1],"same"),o=n.conv6?xn(o,n.conv6):o,o=n.conv7?xn(o,n.conv7):o,Ot(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return $(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?to(i,o.config.meanRgb):i,i=i.div(K(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ze(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,b=this;return re(this,function(x){switch(x.label){case 0:return o=new xs(n),a=o.inputSize,i=o.scoreThreshold,[4,Ze(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,a)];case 2:return u=x.sent(),c=$(function(){return Ke(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),v=f.map(function(y){return b.config.classes[y.label]}),m=Gr(h.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),g=m.map(function(y){return new Ol(d[y],p[y],v[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return Tx(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return Dx(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,C,R,S,E,I,A,T,M,B,L,V,z,U=this;return re(this,function(G){switch(G.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=$(function(){var j=e.reshape([l,l,f,U.boxEncodingSize]),X=j.slice([0,0,0,0],[l,l,f,4]),ee=j.slice([0,0,0,4],[l,l,f,1]),ae=U.withClassScores?ln(j.slice([0,0,0,5],[l,l,f,U.config.classes.length]),3):K(0);return[X,ee,ae]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=G.sent(),[4,d.array()];case 2:b=G.sent(),x=0,G.label=3;case 3:if(!(x<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<f?(C=Ga(g[x][y][w][0]),!o||C>o?(R=(y+Ga(b[x][y][w][0]))/l*u,S=(x+Ga(b[x][y][w][1]))/l*c,E=Math.exp(b[x][y][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(b[x][y][w][3])*this.config.anchors[w].y/l*c,A=R-E/2,T=S-I/2,M={row:x,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,M)]:[3,7]):[3,9]):[3,10];case 6:return z=G.sent(),[3,8];case 7:z={classScore:1,label:0},G.label=8;case 8:B=z,L=B.classScore,V=B.label,m.push(st({box:new ca(A,T,A+E,T+I),score:C,classScore:C*L,label:V},M)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return x++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,n){return ne(this,void 0,void 0,function(){var o,a,i,s;return re(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(hn),Ax=function(r){le(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:bx,classes:["face"]},e?{anchors:Cx,meanRgb:Ex}:{anchors:wx,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Rt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Rx:_x},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(df),pf=function(r){le(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(xs),ro=function(){function r(){}return r.prototype.then=function(t){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return ne(this,void 0,void 0,function(){return re(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function da(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),ne(this,void 0,void 0,function(){var a,i,s,u,c;return re(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return tf(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof Me?[4,ds(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,hs(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Me&&f.dispose()}),[2,c]}})})}function bs(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a=this;return re(this,function(i){return[2,da([r],t,function(s){return ne(a,void 0,void 0,function(){return re(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function Nx(r){return $(function(){return _t(Ke(r,3).reverse(),3)})}var xo=2,$o=12;function Fx(r,t){var e=fa(r,t),n=ps(r,t);function o(c,l){var f=Ge(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return st(st({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return st(st({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),v=n(256,4,"onet/fc2_2"),m=n(256,10,"onet/fc2_3");return st(st({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function Px(r){var t=pn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Fx(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function Mx(r,t){var e=An(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),h=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),v=n(l+"/conv3"),m=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),h=n("pnet/conv4_2");return st(st({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=o("rnet/fc1"),h=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return st(st({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=n("onet/conv4"),h=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return st(st({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Ox(r){var t=[],e=Mx(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return dn(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Ei(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function Bx(r,t,e){for(var n=e[0],o=e[1],a=$o/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var ws=function(r){le(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(Zt);function vf(r){return $(function(){return lt($e(r,K(127.5)),K(.0078125))})}function vr(r,t){return $(function(){return ye(Oe(r),lt(t,zo(Oe(zo(r)))))})}function Cs(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Ot(r,t.conv1,"valid");return n=vr(n,t.prelu1_alpha),n=Je(n,e?[2,2]:[3,3],[2,2],"same"),n=Ot(n,t.conv2,"valid"),n=vr(n,t.prelu2_alpha),n=e?n:Je(n,[3,3],[2,2],"valid"),n=Ot(n,t.conv3,"valid"),n=vr(n,t.prelu3_alpha),n})}function Lx(r,t){return $(function(){var e=Cs(r,t,!0),n=Ot(e,t.conv4_1,"valid"),o=kt(aa(n,3),3),a=ln($e(n,o),3),i=Ot(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function Wx(r,t){return $(function(){var e=Ei(t,r.shape.slice(1)),n=e.height,o=e.width,a=Zi.resizeBilinear(r,[n,o]),i=vf(a);return Dn(i,[0,2,1,3])})}function Ux(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new Re(s,i));var u=o.map(function(c){var l=new ca(Math.round((c.y*xo+1)/e),Math.round((c.x*xo+1)/e),Math.round((c.y*xo+$o)/e),Math.round((c.x*xo+$o)/e)),f=a[c.y][c.x],h=t.arraySync(),d=new ws(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function Vx(r,t,e,n,o){o.stage1=[];var a=t.map(function(h){return $(function(){var d={scale:h},p=Wx(r,h),v=Date.now(),m=Lx(p,n),g=m.prob,b=m.regions;d.pnet=Date.now()-v;var x=Ke(Ke(g,3)[1])[0],y=Ke(b)[0];return{scoresTensor:x,regionsTensor:y,scale:h,statsForScale:d}})}),i=a.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=Ux(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var b=Date.now(),x=Gr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return m.nms=Date.now()-b,m.numBoxes=x.length,o.stage1.push(m),x.map(function(y){return g[y]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Gr(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new ca(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function mf(r,t,e){var n=e.width,o=e.height;return ne(this,void 0,void 0,function(){var a,i,s,u=this;return re(this,function(c){switch(c.label){case 0:return a=un(r),[4,Promise.all(t.map(function(l){return ne(u,void 0,void 0,function(){var f,h,d,p,v,m,g,b;return re(this,function(x){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,b=a.getImageData(m,g,v-m,d-g),[2,rt.isNodejs()?fs(b):createImageBitmap(b)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=la({width:n,height:o}),h=un(f);h.drawImage(l,0,0,n,o);for(var d=h.getImageData(0,0,n,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=$(function(){var h=Dn(ht(l,[1,n,o,3]),[0,2,1,3]).toFloat();return vf(h)});return f})]}})})}function zx(r,t){return $(function(){var e=Cs(r,t),n=Mt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Xt(n,t.fc1),a=vr(o,t.prelu4_alpha),i=Xt(a,t.fc2_1),s=kt(aa(i,1),1),u=ln($e(i,s),1),c=Xt(a,t.fc2_2),l=Ke(u,1)[1];return{scores:l,regions:c}})}function Hx(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,b;return re(this,function(x){switch(x.label){case 0:return a=Date.now(),[4,mf(r,t,{width:24,height:24})];case 1:return i=x.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=zx(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?qe(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),v=[],m=[],d.length>0&&(a=Date.now(),g=Gr(d,p,.7),o.stage2_nms=Date.now()-a,b=g.map(function(y){var w=s[h[y]].regions.arraySync();return new ws(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(y){return p[y]}),v=g.map(function(y,w){return d[y].calibrate(b[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function Gx(r,t){return $(function(){var e=Cs(r,t);e=Je(e,[2,2],[2,2],"same"),e=Ot(e,t.conv4,"valid"),e=vr(e,t.prelu4_alpha);var n=Mt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Xt(n,t.fc1),a=vr(o,t.prelu5_alpha),i=Xt(a,t.fc2_1),s=kt(aa(i,1),1),u=ln($e(i,s),1),c=Xt(a,t.fc2_2),l=Xt(a,t.fc2_3),f=Ke(u,1)[1];return{scores:f,regions:c,points:l}})}function jx(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,v,m,g,b,x;return re(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,mf(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=Gx(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?qe(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=h.map(function(w){var C=s[w].regions.arraySync();return new ws(C[0][0],C[0][1],C[0][2],C[0][3])}),p=h.map(function(w,C){return t[w].calibrate(d[C])}),v=h.map(function(w){return c[w]}),m=[],g=[],b=[],p.length>0&&(a=Date.now(),x=Gr(p,v,.7,!1),o.stage3_nms=Date.now()-a,m=x.map(function(w){return p[w]}),g=x.map(function(w){return v[w]}),b=x.map(function(w,C){return Array(5).fill(0).map(function(R,S){var E=s[w].points.arraySync();return new Re(E[0][S]*(m[C].width+1)+m[C].left,E[0][S+5]*(m[C].height+1)+m[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:b}]}})})}var qx=function(r){le(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,C,R,S;return re(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=$(function(){return Nx(kt(as.fromPixels(a)).toFloat())}),c=function(I){return u.dispose(),i.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],d=new ff(n),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,b=d.scaleSteps,x=(b||Bx(p,v,[f,h])).filter(function(I){var A=Ei(I,[f,h]);return Math.min(A.width,A.height)>$o}).slice(0,m),i.scales=x,i.pyramid=x.map(function(I){return Ei(I,[f,h])}),y=Date.now(),[4,Vx(u,x,g[0],o.pnet,i)];case 1:return w=E.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,Hx(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=E.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,jx(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return R=E.sent(),i.total_stage3=Date.now()-y,S=R.boxes.map(function(I,A){return ha(qr({},new Rt(R.scores[A],new ss(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new xy(R.points[A].map(function(T){return T.sub(new Re(I.left,I.top)).div(new Re(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:S,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ze(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ze(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ox(e)},t.prototype.extractParams=function(e){return Px(e)},t}(hn),Kx=.4,Xx=[new Re(1.603231,2.094468),new Re(6.041143,7.080126),new Re(2.882459,3.518061),new Re(4.266906,5.178857),new Re(9.041765,10.66308)],$x=[117.001,114.697,97.404],Yx=function(r){le(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:Kx,classes:["face"],anchors:Xx,meanRgb:$x,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Rt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(df),We={ssdMobilenetv1:new hf,tinyFaceDetector:new Yx,tinyYolov2:new Ax,mtcnn:new qx,faceLandmark68Net:new of,faceLandmark68TinyNet:new Qy,faceRecognitionNet:new ax,faceExpressionNet:new Wy,ageGenderNet:new Xy},gf=function(r){le(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(ro),Es=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o=this;return re(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,da(e,this.input,function(i){return ne(o,void 0,void 0,function(){return re(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return We.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return ef(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Is(this,this.input)},t}(gf),_s=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,bs(e,this.input,function(a){return We.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,ef(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Ds(this,this.input)},t}(gf),Rs=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new ks(this,this.input)},t.prototype.withFaceDescriptors=function(){return new As(this,this.input)},t}(Es),Ss=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ts(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ns(this,this.input)},t}(_s),yf=function(r){le(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(ro),Is=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o=this;return re(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,da(e,this.input,function(i){return ne(o,void 0,void 0,function(){return re(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return We.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return cf(lf(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Es(this,this.input)},t}(yf),Ds=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i;return re(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,bs(e,this.input,function(u){return We.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,cf(lf(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new _s(this,this.input)},t}(yf),ks=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Rs(this,this.input)},t.prototype.withFaceDescriptors=function(){return new As(this,this.input)},t}(Is),Ts=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Ss(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ns(this,this.input)},t}(Ds),xf=function(r){le(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(ro),As=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,da(e,this.input,function(a){return Promise.all(a.map(function(i){return We.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return uf(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new Rs(this,this.input)},t.prototype.withAgeAndGender=function(){return new ks(this,this.input)},t}(xf),Ns=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,bs(e,this.input,function(a){return We.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,uf(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Ss(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ts(this,this.input)},t}(xf),bf=function(r){le(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?We.faceLandmark68TinyNet:We.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(ro),Jx=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return re(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Me?[4,ds(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,hs(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Me&&c.dispose()}),[2,e.map(function(c,l){return ha(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Rs(this,this.input)},t.prototype.withAgeAndGender=function(){return new ks(this,this.input)},t.prototype.withFaceDescriptors=function(){return new As(this,this.input)},t}(bf),Qx=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i;return re(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Me?[4,ds(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,hs(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Me&&u.dispose()}),[2,ha(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Ss(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ts(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ns(this,this.input)},t}(bf),wf=function(r){le(t,r);function t(e,n){n===void 0&&(n=new no);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(ro),Cf=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a;return re(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof ff?[4,We.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof pf?function(s){return We.tinyFaceDetector.locateFaces(s,o)}:o instanceof no?function(s){return We.ssdMobilenetv1.locateFaces(s,o)}:o instanceof xs?function(s){return We.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return ne(e,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return qr({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Jx(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Es(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Is(this.runAndExtendWithFaceDetections(),this.input)},t}(wf),Zx=function(r){le(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,new Cf(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return ne(e,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?qr({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Qx(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new _s(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Ds(this.runAndExtendWithFaceDetection(),this.input)},t}(wf);function eb(r,t){return t===void 0&&(t=new no),new Zx(r,t)}function tb(r,t){return t===void 0&&(t=new no),new Cf(r,t)}function nb(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var rb=function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Pr)return i;if(i instanceof Float32Array)return new Pr(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Pr(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return nb(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Mu(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Mu("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Pr.fromJSON(n)});return new r(e,t.distanceThreshold)},r}();function Ef(r,t){var e=new Un(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return Ef(s,{width:n,height:o})});if(tf(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return ha(qr(r,a),i)}return qo(r)?qr(r,r.detection.forSize(n,o)):r instanceof jr||r instanceof Rt?r.forSize(n,o):r}function In(r,t,{checkForDefaultPrevented:e=!0}={}){return function(o){if(r==null||r(o),e===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function ob(r,t){typeof r=="function"?r(t):r!=null&&(r.current=t)}function _f(...r){return t=>r.forEach(e=>ob(e,t))}function Yn(...r){return P.useCallback(_f(...r),r)}function ab(r,t){const e=P.createContext(t);function n(a){const{children:i,...s}=a,u=P.useMemo(()=>s,Object.values(s));return q.jsx(e.Provider,{value:u,children:i})}function o(a){const i=P.useContext(e);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${r}\``)}return n.displayName=r+"Provider",[n,o]}function ib(r,t=[]){let e=[];function n(a,i){const s=P.createContext(i),u=e.length;e=[...e,i];function c(f){const{scope:h,children:d,...p}=f,v=(h==null?void 0:h[r][u])||s,m=P.useMemo(()=>p,Object.values(p));return q.jsx(v.Provider,{value:m,children:d})}function l(f,h){const d=(h==null?void 0:h[r][u])||s,p=P.useContext(d);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${a}\``)}return c.displayName=a+"Provider",[c,l]}const o=()=>{const a=e.map(i=>P.createContext(i));return function(s){const u=(s==null?void 0:s[r])||a;return P.useMemo(()=>({[`__scope${r}`]:{...s,[r]:u}}),[s,u])}};return o.scopeName=r,[n,sb(o,...t)]}function sb(...r){const t=r[0];if(r.length===1)return t;const e=()=>{const n=r.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=n.reduce((s,{useScope:u,scopeName:c})=>{const f=u(a)[`__scope${c}`];return{...s,...f}},{});return P.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return e.scopeName=t.scopeName,e}var Yo=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{},ub=gh["useId".toString()]||(()=>{}),cb=0;function Ka(r){const[t,e]=P.useState(ub());return Yo(()=>{r||e(n=>n??String(cb++))},[r]),r||(t?`radix-${t}`:"")}function Hn(r){const t=P.useRef(r);return P.useEffect(()=>{t.current=r}),P.useMemo(()=>(...e)=>{var n;return(n=t.current)==null?void 0:n.call(t,...e)},[])}function lb({prop:r,defaultProp:t,onChange:e=()=>{}}){const[n,o]=fb({defaultProp:t,onChange:e}),a=r!==void 0,i=a?r:n,s=Hn(e),u=P.useCallback(c=>{if(a){const f=typeof c=="function"?c(r):c;f!==r&&s(f)}else o(c)},[a,r,o,s]);return[i,u]}function fb({defaultProp:r,onChange:t}){const e=P.useState(r),[n]=e,o=P.useRef(n),a=Hn(t);return P.useEffect(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),e}var Fs=P.forwardRef((r,t)=>{const{children:e,...n}=r,o=P.Children.toArray(e),a=o.find(db);if(a){const i=a.props.children,s=o.map(u=>u===a?P.Children.count(i)>1?P.Children.only(null):P.isValidElement(i)?i.props.children:null:u);return q.jsx(_i,{...n,ref:t,children:P.isValidElement(i)?P.cloneElement(i,void 0,s):null})}return q.jsx(_i,{...n,ref:t,children:e})});Fs.displayName="Slot";var _i=P.forwardRef((r,t)=>{const{children:e,...n}=r;if(P.isValidElement(e)){const o=vb(e);return P.cloneElement(e,{...pb(n,e.props),ref:t?_f(t,o):o})}return P.Children.count(e)>1?P.Children.only(null):null});_i.displayName="SlotClone";var hb=({children:r})=>q.jsx(q.Fragment,{children:r});function db(r){return P.isValidElement(r)&&r.type===hb}function pb(r,t){const e={...t};for(const n in t){const o=r[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?e[n]=(...s)=>{a(...s),o(...s)}:o&&(e[n]=o):n==="style"?e[n]={...o,...a}:n==="className"&&(e[n]=[o,a].filter(Boolean).join(" "))}return{...r,...e}}function vb(r){var n,o;let t=(n=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:n.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?r.ref:(t=(o=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:o.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?r.props.ref:r.props.ref||r.ref)}var mb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],vn=mb.reduce((r,t)=>{const e=P.forwardRef((n,o)=>{const{asChild:a,...i}=n,s=a?Fs:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),q.jsx(s,{...i,ref:o})});return e.displayName=`Primitive.${t}`,{...r,[t]:e}},{});function gb(r,t){r&&ec.flushSync(()=>r.dispatchEvent(t))}function yb(r,t=globalThis==null?void 0:globalThis.document){const e=Hn(r);P.useEffect(()=>{const n=o=>{o.key==="Escape"&&e(o)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[e,t])}var xb="DismissableLayer",Ri="dismissableLayer.update",bb="dismissableLayer.pointerDownOutside",wb="dismissableLayer.focusOutside",Uu,Rf=P.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Sf=P.forwardRef((r,t)=>{const{disableOutsidePointerEvents:e=!1,onEscapeKeyDown:n,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...u}=r,c=P.useContext(Rf),[l,f]=P.useState(null),h=(l==null?void 0:l.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=P.useState({}),p=Yn(t,R=>f(R)),v=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),g=v.indexOf(m),b=l?v.indexOf(l):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=b>=g,w=_b(R=>{const S=R.target,E=[...c.branches].some(I=>I.contains(S));!y||E||(o==null||o(R),i==null||i(R),R.defaultPrevented||s==null||s())},h),C=Rb(R=>{const S=R.target;[...c.branches].some(I=>I.contains(S))||(a==null||a(R),i==null||i(R),R.defaultPrevented||s==null||s())},h);return yb(R=>{b===c.layers.size-1&&(n==null||n(R),!R.defaultPrevented&&s&&(R.preventDefault(),s()))},h),P.useEffect(()=>{if(l)return e&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Uu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(l)),c.layers.add(l),Vu(),()=>{e&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Uu)}},[l,h,e,c]),P.useEffect(()=>()=>{l&&(c.layers.delete(l),c.layersWithOutsidePointerEventsDisabled.delete(l),Vu())},[l,c]),P.useEffect(()=>{const R=()=>d({});return document.addEventListener(Ri,R),()=>document.removeEventListener(Ri,R)},[]),q.jsx(vn.div,{...u,ref:p,style:{pointerEvents:x?y?"auto":"none":void 0,...r.style},onFocusCapture:In(r.onFocusCapture,C.onFocusCapture),onBlurCapture:In(r.onBlurCapture,C.onBlurCapture),onPointerDownCapture:In(r.onPointerDownCapture,w.onPointerDownCapture)})});Sf.displayName=xb;var Cb="DismissableLayerBranch",Eb=P.forwardRef((r,t)=>{const e=P.useContext(Rf),n=P.useRef(null),o=Yn(t,n);return P.useEffect(()=>{const a=n.current;if(a)return e.branches.add(a),()=>{e.branches.delete(a)}},[e.branches]),q.jsx(vn.div,{...r,ref:o})});Eb.displayName=Cb;function _b(r,t=globalThis==null?void 0:globalThis.document){const e=Hn(r),n=P.useRef(!1),o=P.useRef(()=>{});return P.useEffect(()=>{const a=s=>{if(s.target&&!n.current){let u=function(){If(bb,e,c,{discrete:!0})};const c={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}else t.removeEventListener("click",o.current);n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,e]),{onPointerDownCapture:()=>n.current=!0}}function Rb(r,t=globalThis==null?void 0:globalThis.document){const e=Hn(r),n=P.useRef(!1);return P.useEffect(()=>{const o=a=>{a.target&&!n.current&&If(wb,e,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,e]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Vu(){const r=new CustomEvent(Ri);document.dispatchEvent(r)}function If(r,t,e,{discrete:n}){const o=e.originalEvent.target,a=new CustomEvent(r,{bubbles:!1,cancelable:!0,detail:e});t&&o.addEventListener(r,t,{once:!0}),n?gb(o,a):o.dispatchEvent(a)}var Xa="focusScope.autoFocusOnMount",$a="focusScope.autoFocusOnUnmount",zu={bubbles:!1,cancelable:!0},Sb="FocusScope",Df=P.forwardRef((r,t)=>{const{loop:e=!1,trapped:n=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=r,[s,u]=P.useState(null),c=Hn(o),l=Hn(a),f=P.useRef(null),h=Yn(t,v=>u(v)),d=P.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;P.useEffect(()=>{if(n){let v=function(x){if(d.paused||!s)return;const y=x.target;s.contains(y)?f.current=y:bn(f.current,{select:!0})},m=function(x){if(d.paused||!s)return;const y=x.relatedTarget;y!==null&&(s.contains(y)||bn(f.current,{select:!0}))},g=function(x){if(document.activeElement===document.body)for(const w of x)w.removedNodes.length>0&&bn(s)};document.addEventListener("focusin",v),document.addEventListener("focusout",m);const b=new MutationObserver(g);return s&&b.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",m),b.disconnect()}}},[n,s,d.paused]),P.useEffect(()=>{if(s){Gu.add(d);const v=document.activeElement;if(!s.contains(v)){const g=new CustomEvent(Xa,zu);s.addEventListener(Xa,c),s.dispatchEvent(g),g.defaultPrevented||(Ib(Nb(kf(s)),{select:!0}),document.activeElement===v&&bn(s))}return()=>{s.removeEventListener(Xa,c),setTimeout(()=>{const g=new CustomEvent($a,zu);s.addEventListener($a,l),s.dispatchEvent(g),g.defaultPrevented||bn(v??document.body,{select:!0}),s.removeEventListener($a,l),Gu.remove(d)},0)}}},[s,c,l,d]);const p=P.useCallback(v=>{if(!e&&!n||d.paused)return;const m=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,g=document.activeElement;if(m&&g){const b=v.currentTarget,[x,y]=Db(b);x&&y?!v.shiftKey&&g===y?(v.preventDefault(),e&&bn(x,{select:!0})):v.shiftKey&&g===x&&(v.preventDefault(),e&&bn(y,{select:!0})):g===b&&v.preventDefault()}},[e,n,d.paused]);return q.jsx(vn.div,{tabIndex:-1,...i,ref:h,onKeyDown:p})});Df.displayName=Sb;function Ib(r,{select:t=!1}={}){const e=document.activeElement;for(const n of r)if(bn(n,{select:t}),document.activeElement!==e)return}function Db(r){const t=kf(r),e=Hu(t,r),n=Hu(t.reverse(),r);return[e,n]}function kf(r){const t=[],e=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const o=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||o?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;e.nextNode();)t.push(e.currentNode);return t}function Hu(r,t){for(const e of r)if(!kb(e,{upTo:t}))return e}function kb(r,{upTo:t}){if(getComputedStyle(r).visibility==="hidden")return!0;for(;r;){if(t!==void 0&&r===t)return!1;if(getComputedStyle(r).display==="none")return!0;r=r.parentElement}return!1}function Tb(r){return r instanceof HTMLInputElement&&"select"in r}function bn(r,{select:t=!1}={}){if(r&&r.focus){const e=document.activeElement;r.focus({preventScroll:!0}),r!==e&&Tb(r)&&t&&r.select()}}var Gu=Ab();function Ab(){let r=[];return{add(t){const e=r[0];t!==e&&(e==null||e.pause()),r=ju(r,t),r.unshift(t)},remove(t){var e;r=ju(r,t),(e=r[0])==null||e.resume()}}}function ju(r,t){const e=[...r],n=e.indexOf(t);return n!==-1&&e.splice(n,1),e}function Nb(r){return r.filter(t=>t.tagName!=="A")}var Fb="Portal",Tf=P.forwardRef((r,t)=>{var s;const{container:e,...n}=r,[o,a]=P.useState(!1);Yo(()=>a(!0),[]);const i=e||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return i?yh.createPortal(q.jsx(vn.div,{...n,ref:t}),i):null});Tf.displayName=Fb;function Pb(r,t){return P.useReducer((e,n)=>t[e][n]??e,r)}var pa=r=>{const{present:t,children:e}=r,n=Mb(t),o=typeof e=="function"?e({present:n.isPresent}):P.Children.only(e),a=Yn(n.ref,Ob(o));return typeof e=="function"||n.isPresent?P.cloneElement(o,{ref:a}):null};pa.displayName="Presence";function Mb(r){const[t,e]=P.useState(),n=P.useRef({}),o=P.useRef(r),a=P.useRef("none"),i=r?"mounted":"unmounted",[s,u]=Pb(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return P.useEffect(()=>{const c=bo(n.current);a.current=s==="mounted"?c:"none"},[s]),Yo(()=>{const c=n.current,l=o.current;if(l!==r){const h=a.current,d=bo(c);r?u("MOUNT"):d==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(l&&h!==d?"ANIMATION_OUT":"UNMOUNT"),o.current=r}},[r,u]),Yo(()=>{if(t){const c=f=>{const d=bo(n.current).includes(f.animationName);f.target===t&&d&&ec.flushSync(()=>u("ANIMATION_END"))},l=f=>{f.target===t&&(a.current=bo(n.current))};return t.addEventListener("animationstart",l),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",l),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:P.useCallback(c=>{c&&(n.current=getComputedStyle(c)),e(c)},[])}}function bo(r){return(r==null?void 0:r.animationName)||"none"}function Ob(r){var n,o;let t=(n=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:n.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?r.ref:(t=(o=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:o.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?r.props.ref:r.props.ref||r.ref)}var Ya=0;function Bb(){P.useEffect(()=>{const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",r[0]??qu()),document.body.insertAdjacentElement("beforeend",r[1]??qu()),Ya++,()=>{Ya===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Ya--}},[])}function qu(){const r=document.createElement("span");return r.setAttribute("data-radix-focus-guard",""),r.tabIndex=0,r.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",r}var Af=xh(),Ja=function(){},va=P.forwardRef(function(r,t){var e=P.useRef(null),n=P.useState({onScrollCapture:Ja,onWheelCapture:Ja,onTouchMoveCapture:Ja}),o=n[0],a=n[1],i=r.forwardProps,s=r.children,u=r.className,c=r.removeScrollBar,l=r.enabled,f=r.shards,h=r.sideCar,d=r.noIsolation,p=r.inert,v=r.allowPinchZoom,m=r.as,g=m===void 0?"div":m,b=r.gapMode,x=bh(r,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=h,w=wh([e,t]),C=or(or({},x),o);return P.createElement(P.Fragment,null,l&&P.createElement(y,{sideCar:Af,removeScrollBar:c,shards:f,noIsolation:d,inert:p,setCallbacks:a,allowPinchZoom:!!v,lockRef:e,gapMode:b}),i?P.cloneElement(P.Children.only(s),or(or({},C),{ref:w})):P.createElement(g,or({},C,{className:u,ref:w}),s))});va.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};va.classNames={fullWidth:Ch,zeroRight:Eh};var Si=!1;if(typeof window<"u")try{var wo=Object.defineProperty({},"passive",{get:function(){return Si=!0,!0}});window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Si=!1}var nr=Si?{passive:!1}:!1,Lb=function(r){return r.tagName==="TEXTAREA"},Nf=function(r,t){var e=window.getComputedStyle(r);return e[t]!=="hidden"&&!(e.overflowY===e.overflowX&&!Lb(r)&&e[t]==="visible")},Wb=function(r){return Nf(r,"overflowY")},Ub=function(r){return Nf(r,"overflowX")},Ku=function(r,t){var e=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=Ff(r,n);if(o){var a=Pf(r,n),i=a[1],s=a[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==e.body);return!1},Vb=function(r){var t=r.scrollTop,e=r.scrollHeight,n=r.clientHeight;return[t,e,n]},zb=function(r){var t=r.scrollLeft,e=r.scrollWidth,n=r.clientWidth;return[t,e,n]},Ff=function(r,t){return r==="v"?Wb(t):Ub(t)},Pf=function(r,t){return r==="v"?Vb(t):zb(t)},Hb=function(r,t){return r==="h"&&t==="rtl"?-1:1},Gb=function(r,t,e,n,o){var a=Hb(r,window.getComputedStyle(t).direction),i=a*n,s=e.target,u=t.contains(s),c=!1,l=i>0,f=0,h=0;do{var d=Pf(r,s),p=d[0],v=d[1],m=d[2],g=v-m-a*p;(p||g)&&Ff(r,s)&&(f+=g,h+=p),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return(l&&(o&&Math.abs(f)<1||!o&&i>f)||!l&&(o&&Math.abs(h)<1||!o&&-i>h))&&(c=!0),c},Co=function(r){return"changedTouches"in r?[r.changedTouches[0].clientX,r.changedTouches[0].clientY]:[0,0]},Xu=function(r){return[r.deltaX,r.deltaY]},$u=function(r){return r&&"current"in r?r.current:r},jb=function(r,t){return r[0]===t[0]&&r[1]===t[1]},qb=function(r){return`
  .block-interactivity-`.concat(r,` {pointer-events: none;}
  .allow-interactivity-`).concat(r,` {pointer-events: all;}
`)},Kb=0,rr=[];function Xb(r){var t=P.useRef([]),e=P.useRef([0,0]),n=P.useRef(),o=P.useState(Kb++)[0],a=P.useState(_h)[0],i=P.useRef(r);P.useEffect(function(){i.current=r},[r]),P.useEffect(function(){if(r.inert){document.body.classList.add("block-interactivity-".concat(o));var v=Rh([r.lockRef.current],(r.shards||[]).map($u),!0).filter(Boolean);return v.forEach(function(m){return m.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(o))})}}},[r.inert,r.lockRef.current,r.shards]);var s=P.useCallback(function(v,m){if("touches"in v&&v.touches.length===2)return!i.current.allowPinchZoom;var g=Co(v),b=e.current,x="deltaX"in v?v.deltaX:b[0]-g[0],y="deltaY"in v?v.deltaY:b[1]-g[1],w,C=v.target,R=Math.abs(x)>Math.abs(y)?"h":"v";if("touches"in v&&R==="h"&&C.type==="range")return!1;var S=Ku(R,C);if(!S)return!0;if(S?w=R:(w=R==="v"?"h":"v",S=Ku(R,C)),!S)return!1;if(!n.current&&"changedTouches"in v&&(x||y)&&(n.current=w),!w)return!0;var E=n.current||w;return Gb(E,m,v,E==="h"?x:y,!0)},[]),u=P.useCallback(function(v){var m=v;if(!(!rr.length||rr[rr.length-1]!==a)){var g="deltaY"in m?Xu(m):Co(m),b=t.current.filter(function(w){return w.name===m.type&&(w.target===m.target||m.target===w.shadowParent)&&jb(w.delta,g)})[0];if(b&&b.should){m.cancelable&&m.preventDefault();return}if(!b){var x=(i.current.shards||[]).map($u).filter(Boolean).filter(function(w){return w.contains(m.target)}),y=x.length>0?s(m,x[0]):!i.current.noIsolation;y&&m.cancelable&&m.preventDefault()}}},[]),c=P.useCallback(function(v,m,g,b){var x={name:v,delta:m,target:g,should:b,shadowParent:$b(g)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(y){return y!==x})},1)},[]),l=P.useCallback(function(v){e.current=Co(v),n.current=void 0},[]),f=P.useCallback(function(v){c(v.type,Xu(v),v.target,s(v,r.lockRef.current))},[]),h=P.useCallback(function(v){c(v.type,Co(v),v.target,s(v,r.lockRef.current))},[]);P.useEffect(function(){return rr.push(a),r.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",u,nr),document.addEventListener("touchmove",u,nr),document.addEventListener("touchstart",l,nr),function(){rr=rr.filter(function(v){return v!==a}),document.removeEventListener("wheel",u,nr),document.removeEventListener("touchmove",u,nr),document.removeEventListener("touchstart",l,nr)}},[]);var d=r.removeScrollBar,p=r.inert;return P.createElement(P.Fragment,null,p?P.createElement(a,{styles:qb(o)}):null,d?P.createElement(Sh,{gapMode:r.gapMode}):null)}function $b(r){for(var t=null;r!==null;)r instanceof ShadowRoot&&(t=r.host,r=r.host),r=r.parentNode;return t}const Yb=Ih(Af,Xb);var Mf=P.forwardRef(function(r,t){return P.createElement(va,or({},r,{ref:t,sideCar:Yb}))});Mf.classNames=va.classNames;const Jb=Mf;var Ps="Dialog",[Of,U1]=ib(Ps),[Qb,Wt]=Of(Ps),Bf=r=>{const{__scopeDialog:t,children:e,open:n,defaultOpen:o,onOpenChange:a,modal:i=!0}=r,s=P.useRef(null),u=P.useRef(null),[c=!1,l]=lb({prop:n,defaultProp:o,onChange:a});return q.jsx(Qb,{scope:t,triggerRef:s,contentRef:u,contentId:Ka(),titleId:Ka(),descriptionId:Ka(),open:c,onOpenChange:l,onOpenToggle:P.useCallback(()=>l(f=>!f),[l]),modal:i,children:e})};Bf.displayName=Ps;var Lf="DialogTrigger",Wf=P.forwardRef((r,t)=>{const{__scopeDialog:e,...n}=r,o=Wt(Lf,e),a=Yn(t,o.triggerRef);return q.jsx(vn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Bs(o.open),...n,ref:a,onClick:In(r.onClick,o.onOpenToggle)})});Wf.displayName=Lf;var Ms="DialogPortal",[Zb,Uf]=Of(Ms,{forceMount:void 0}),Vf=r=>{const{__scopeDialog:t,forceMount:e,children:n,container:o}=r,a=Wt(Ms,t);return q.jsx(Zb,{scope:t,forceMount:e,children:P.Children.map(n,i=>q.jsx(pa,{present:e||a.open,children:q.jsx(Tf,{asChild:!0,container:o,children:i})}))})};Vf.displayName=Ms;var Jo="DialogOverlay",zf=P.forwardRef((r,t)=>{const e=Uf(Jo,r.__scopeDialog),{forceMount:n=e.forceMount,...o}=r,a=Wt(Jo,r.__scopeDialog);return a.modal?q.jsx(pa,{present:n||a.open,children:q.jsx(e1,{...o,ref:t})}):null});zf.displayName=Jo;var e1=P.forwardRef((r,t)=>{const{__scopeDialog:e,...n}=r,o=Wt(Jo,e);return q.jsx(Jb,{as:Fs,allowPinchZoom:!0,shards:[o.contentRef],children:q.jsx(vn.div,{"data-state":Bs(o.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),Gn="DialogContent",Hf=P.forwardRef((r,t)=>{const e=Uf(Gn,r.__scopeDialog),{forceMount:n=e.forceMount,...o}=r,a=Wt(Gn,r.__scopeDialog);return q.jsx(pa,{present:n||a.open,children:a.modal?q.jsx(t1,{...o,ref:t}):q.jsx(n1,{...o,ref:t})})});Hf.displayName=Gn;var t1=P.forwardRef((r,t)=>{const e=Wt(Gn,r.__scopeDialog),n=P.useRef(null),o=Yn(t,e.contentRef,n);return P.useEffect(()=>{const a=n.current;if(a)return Dh(a)},[]),q.jsx(Gf,{...r,ref:o,trapFocus:e.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:In(r.onCloseAutoFocus,a=>{var i;a.preventDefault(),(i=e.triggerRef.current)==null||i.focus()}),onPointerDownOutside:In(r.onPointerDownOutside,a=>{const i=a.detail.originalEvent,s=i.button===0&&i.ctrlKey===!0;(i.button===2||s)&&a.preventDefault()}),onFocusOutside:In(r.onFocusOutside,a=>a.preventDefault())})}),n1=P.forwardRef((r,t)=>{const e=Wt(Gn,r.__scopeDialog),n=P.useRef(!1),o=P.useRef(!1);return q.jsx(Gf,{...r,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,s;(i=r.onCloseAutoFocus)==null||i.call(r,a),a.defaultPrevented||(n.current||(s=e.triggerRef.current)==null||s.focus(),a.preventDefault()),n.current=!1,o.current=!1},onInteractOutside:a=>{var u,c;(u=r.onInteractOutside)==null||u.call(r,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;((c=e.triggerRef.current)==null?void 0:c.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Gf=P.forwardRef((r,t)=>{const{__scopeDialog:e,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=r,s=Wt(Gn,e),u=P.useRef(null),c=Yn(t,u);return Bb(),q.jsxs(q.Fragment,{children:[q.jsx(Df,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:o,onUnmountAutoFocus:a,children:q.jsx(Sf,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Bs(s.open),...i,ref:c,onDismiss:()=>s.onOpenChange(!1)})}),q.jsxs(q.Fragment,{children:[q.jsx(r1,{titleId:s.titleId}),q.jsx(a1,{contentRef:u,descriptionId:s.descriptionId})]})]})}),Os="DialogTitle",jf=P.forwardRef((r,t)=>{const{__scopeDialog:e,...n}=r,o=Wt(Os,e);return q.jsx(vn.h2,{id:o.titleId,...n,ref:t})});jf.displayName=Os;var qf="DialogDescription",Kf=P.forwardRef((r,t)=>{const{__scopeDialog:e,...n}=r,o=Wt(qf,e);return q.jsx(vn.p,{id:o.descriptionId,...n,ref:t})});Kf.displayName=qf;var Xf="DialogClose",$f=P.forwardRef((r,t)=>{const{__scopeDialog:e,...n}=r,o=Wt(Xf,e);return q.jsx(vn.button,{type:"button",...n,ref:t,onClick:In(r.onClick,()=>o.onOpenChange(!1))})});$f.displayName=Xf;function Bs(r){return r?"open":"closed"}var Yf="DialogTitleWarning",[V1,Jf]=ab(Yf,{contentName:Gn,titleName:Os,docsSlug:"dialog"}),r1=({titleId:r})=>{const t=Jf(Yf),e=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return P.useEffect(()=>{r&&(document.getElementById(r)||console.error(e))},[e,r]),null},o1="DialogDescriptionWarning",a1=({contentRef:r,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Jf(o1).contentName}}.`;return P.useEffect(()=>{var a;const o=(a=r.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(n))},[n,r,t]),null},i1=Bf,s1=Wf,u1=Vf,c1=zf,l1=Hf,f1=jf,h1=Kf,d1=$f;function p1(r){if(!r||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",t.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}const Qf=J.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,handleOnly:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),ma=()=>{const r=J.useContext(Qf);if(!r)throw new Error("useDrawerContext must be used within a Drawer.Root");return r};p1("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");const v1=typeof window<"u"?P.useLayoutEffect:P.useEffect;function Ii(...r){return(...t)=>{for(let e of r)typeof e=="function"&&e(...t)}}function m1(){return Ls(/^Mac/)}function g1(){return Ls(/^iPhone/)}function y1(){return Ls(/^iPad/)||m1()&&navigator.maxTouchPoints>1}function Zf(){return g1()||y1()}function Ls(r){return typeof window<"u"&&window.navigator!=null?r.test(window.navigator.platform):void 0}const Qa=typeof document<"u"&&window.visualViewport;function Yu(r){let t=window.getComputedStyle(r);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function eh(r){for(Yu(r)&&(r=r.parentElement);r&&!Yu(r);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}const x1=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let Eo=0,Za;function b1(r={}){let{isDisabled:t}=r;v1(()=>{if(!t)return Eo++,Eo===1&&(Zf()?Za=C1():Za=w1()),()=>{Eo--,Eo===0&&Za()}},[t])}function w1(){return Ii(th(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))}function C1(){let r,t=0,e=f=>{r=eh(f.target),!(r===document.documentElement&&r===document.body)&&(t=f.changedTouches[0].pageY)},n=f=>{if(!r||r===document.documentElement||r===document.body){f.preventDefault();return}let h=f.changedTouches[0].pageY,d=r.scrollTop,p=r.scrollHeight-r.clientHeight;p!==0&&((d<=0&&h>t||d>=p&&h<t)&&f.preventDefault(),t=h)},o=f=>{let h=f.target;Di(h)&&h!==document.activeElement&&(f.preventDefault(),h.style.transform="translateY(-2000px)",h.focus(),requestAnimationFrame(()=>{h.style.transform=""}))},a=f=>{let h=f.target;Di(h)&&(h.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{h.style.transform="",Qa&&(Qa.height<window.innerHeight?requestAnimationFrame(()=>{Ju(h)}):Qa.addEventListener("resize",()=>Ju(h),{once:!0}))}))},i=()=>{window.scrollTo(0,0)},s=window.pageXOffset,u=window.pageYOffset,c=Ii(th(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let l=Ii(Ar(document,"touchstart",e,{passive:!1,capture:!0}),Ar(document,"touchmove",n,{passive:!1,capture:!0}),Ar(document,"touchend",o,{passive:!1,capture:!0}),Ar(document,"focus",a,!0),Ar(window,"scroll",i));return()=>{c(),l(),window.scrollTo(s,u)}}function th(r,t,e){let n=r.style[t];return r.style[t]=e,()=>{r.style[t]=n}}function Ar(r,t,e,n){return r.addEventListener(t,e,n),()=>{r.removeEventListener(t,e,n)}}function Ju(r){let t=document.scrollingElement||document.documentElement;for(;r&&r!==t;){let e=eh(r);if(e!==document.documentElement&&e!==document.body&&e!==r){let n=e.getBoundingClientRect().top,o=r.getBoundingClientRect().top,a=r.getBoundingClientRect().bottom;const i=e.getBoundingClientRect().bottom;a>i&&(e.scrollTop+=o-n)}r=e.parentElement}}function Di(r){return r instanceof HTMLInputElement&&!x1.has(r.type)||r instanceof HTMLTextAreaElement||r instanceof HTMLElement&&r.isContentEditable}function E1(r,t){typeof r=="function"?r(t):r!=null&&(r.current=t)}function _1(...r){return t=>r.forEach(e=>E1(e,t))}function nh(...r){return P.useCallback(_1(...r),r)}let Nr=null;function R1({isOpen:r,modal:t,nested:e,hasBeenOpened:n,preventScrollRestoration:o,noBodyStyles:a}){const[i,s]=J.useState(()=>typeof window<"u"?window.location.href:""),u=J.useRef(0),c=J.useCallback(()=>{if(Nr===null&&r&&!a){Nr={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:f,innerHeight:h}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-u.current}px`,left:`${-f}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const d=h-window.innerHeight;d&&u.current>=h&&(document.body.style.top=`${-(u.current+d)}px`)}),300)}},[r]),l=J.useCallback(()=>{if(Nr!==null&&!a){const f=-parseInt(document.body.style.top,10),h=-parseInt(document.body.style.left,10);Object.assign(document.body.style,Nr),window.requestAnimationFrame(()=>{if(o&&i!==window.location.href){s(window.location.href);return}window.scrollTo(h,f)}),Nr=null}},[i]);return J.useEffect(()=>{function f(){u.current=window.scrollY}return f(),window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[]),J.useEffect(()=>{e||!n||(r?(!window.matchMedia("(display-mode: standalone)").matches&&c(),t||window.setTimeout(()=>{l()},500)):l())},[r,n,i,t,e,c,l]),{restorePositionSetting:l}}const rh=new WeakMap;function Ae(r,t,e=!1){if(!r||!(r instanceof HTMLElement))return;let n={};Object.entries(t).forEach(([o,a])=>{if(o.startsWith("--")){r.style.setProperty(o,a);return}n[o]=r.style[o],r.style[o]=a}),!e&&rh.set(r,n)}function _o(r,t){if(!r||!(r instanceof HTMLElement))return;let e=rh.get(r);e&&(t?r.style[t]=e[t]:Object.entries(e).forEach(([n,o])=>{r.style[n]=o}))}const He=r=>{switch(r){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return r}};function Ro(r,t){if(!r)return null;const e=window.getComputedStyle(r),n=e.transform||e.webkitTransform||e.mozTransform;let o=n.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[He(t)?13:12]):(o=n.match(/^matrix\((.+)\)$/),o?parseFloat(o[1].split(", ")[He(t)?5:4]):null)}function S1(r){return 8*(Math.log(r+1)-2)}const De={DURATION:.5,EASE:[.32,.72,0,1]},oh=.4;function ah(r){const t=J.useRef(r);return J.useEffect(()=>{t.current=r}),J.useMemo(()=>(...e)=>t.current==null?void 0:t.current.call(t,...e),[])}function I1({defaultProp:r,onChange:t}){const e=J.useState(r),[n]=e,o=J.useRef(n),a=ah(t);return J.useEffect(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),e}function D1({prop:r,defaultProp:t,onChange:e=()=>{}}){const[n,o]=I1({defaultProp:t,onChange:e}),a=r!==void 0,i=a?r:n,s=ah(e),u=J.useCallback(c=>{if(a){const f=typeof c=="function"?c(r):c;f!==r&&s(f)}else o(c)},[a,r,o,s]);return[i,u]}function k1({activeSnapPointProp:r,setActiveSnapPointProp:t,snapPoints:e,drawerRef:n,overlayRef:o,fadeFromIndex:a,onSnapPointChange:i,direction:s="bottom"}){const[u,c]=D1({prop:r,defaultProp:e==null?void 0:e[0],onChange:t}),l=J.useMemo(()=>u===(e==null?void 0:e[e.length-1])||null,[e,u]),f=e&&e.length>0&&(a||a===0)&&!Number.isNaN(a)&&e[a]===u||!e,h=J.useMemo(()=>e==null?void 0:e.findIndex(x=>x===u),[e,u]),d=J.useMemo(()=>{var x;return(x=e==null?void 0:e.map(y=>{const w=typeof window<"u",C=typeof y=="string";let R=0;if(C&&(R=parseInt(y,10)),He(s)){const E=C?R:w?y*window.innerHeight:0;return w?s==="bottom"?window.innerHeight-E:-window.innerHeight+E:E}const S=C?R:w?y*window.innerWidth:0;return w?s==="right"?window.innerWidth-S:-window.innerWidth+S:S}))!=null?x:[]},[e]),p=J.useMemo(()=>h!==null?d==null?void 0:d[h]:null,[d,h]),v=J.useCallback(x=>{var y;const w=(y=d==null?void 0:d.findIndex(C=>C===x))!=null?y:null;i(w),Ae(n.current,{transition:`transform ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,transform:He(s)?`translate3d(0, ${x}px, 0)`:`translate3d(${x}px, 0, 0)`}),d&&w!==d.length-1&&w!==a?Ae(o.current,{transition:`opacity ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,opacity:"0"}):Ae(o.current,{transition:`opacity ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,opacity:"1"}),c(w!==null?e==null?void 0:e[w]:null)},[n.current,e,d,a,o,c]);J.useEffect(()=>{if(u||r){var x;const y=(x=e==null?void 0:e.findIndex(w=>w===r||w===u))!=null?x:-1;d&&y!==-1&&typeof d[y]=="number"&&v(d[y])}},[u,r,e,d,v]);function m({draggedDistance:x,closeDrawer:y,velocity:w,dismissible:C}){if(a===void 0)return;const R=s==="bottom"||s==="right"?(p??0)-x:(p??0)+x,S=h===a-1,E=h===0,I=x>0;if(S&&Ae(o.current,{transition:`opacity ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`}),w>2&&!I){C?y():v(d[0]);return}if(w>2&&I&&d&&e){v(d[e.length-1]);return}const A=d==null?void 0:d.reduce((M,B)=>typeof M!="number"||typeof B!="number"?M:Math.abs(B-R)<Math.abs(M-R)?B:M),T=He(s)?window.innerHeight:window.innerWidth;if(w>oh&&Math.abs(x)<T*.4){const M=I?1:-1;if(M>0&&l){v(d[e.length-1]);return}if(E&&M<0&&C&&y(),h===null)return;v(d[h+M]);return}v(A)}function g({draggedDistance:x}){if(p===null)return;const y=s==="bottom"||s==="right"?p-x:p+x;(s==="bottom"||s==="right")&&y<d[d.length-1]||(s==="top"||s==="left")&&y>d[d.length-1]||Ae(n.current,{transform:He(s)?`translate3d(0, ${y}px, 0)`:`translate3d(${y}px, 0, 0)`})}function b(x,y){if(!e||typeof h!="number"||!d||a===void 0)return null;const w=h===a-1;if(h>=a&&y)return 0;if(w&&!y)return 1;if(!f&&!w)return null;const R=w?h+1:h-1,S=w?d[R]-d[R-1]:d[R+1]-d[R],E=x/Math.abs(S);return w?1-E:E}return{isLastSnapPoint:l,activeSnapPoint:u,shouldFade:f,getPercentageDragged:b,setActiveSnapPoint:c,activeSnapPointIndex:h,onRelease:m,onDrag:g,snapPointsOffset:d}}const T1=.25,A1=100,Qu=8,Pn=16,Zu=26,ei="vaul-dragging";function ih({open:r,onOpenChange:t,children:e,shouldScaleBackground:n,onDrag:o,onRelease:a,snapPoints:i,nested:s=!1,setBackgroundColorOnScale:u=!0,closeThreshold:c=T1,scrollLockTimeout:l=A1,dismissible:f=!0,handleOnly:h=!1,fadeFromIndex:d=i&&i.length-1,activeSnapPoint:p,setActiveSnapPoint:v,fixed:m,modal:g=!0,onClose:b,noBodyStyles:x,direction:y="bottom",preventScrollRestoration:w=!0,disablePreventScroll:C=!1}){var R;const[S=!1,E]=J.useState(!1),[I,A]=J.useState(!1),[T,M]=J.useState(!1),[B,L]=J.useState(!1),[V,z]=J.useState(!1),[U,G]=J.useState(!1),j=J.useRef(null),X=J.useRef(null),ee=J.useRef(null),ae=J.useRef(null),ue=J.useRef(null),ce=J.useRef(!1),de=J.useRef(null),ve=J.useRef(0),he=J.useRef(!1),xe=J.useRef(0),Y=J.useRef(null),me=J.useRef(((R=Y.current)==null?void 0:R.getBoundingClientRect().height)||0),_e=J.useRef(0),Ee=J.useCallback(ie=>{i&&ie===ot.length-1&&(X.current=new Date)},[]),{activeSnapPoint:Fe,activeSnapPointIndex:Ie,setActiveSnapPoint:ke,onRelease:St,snapPointsOffset:ot,onDrag:ft,shouldFade:rn,getPercentageDragged:Ft}=k1({snapPoints:i,activeSnapPointProp:p,setActiveSnapPointProp:v,drawerRef:Y,fadeFromIndex:d,overlayRef:j,onSnapPointChange:Ee,direction:y});b1({isDisabled:!S||V||!g||U||!I||C});const{restorePositionSetting:Vt}=R1({isOpen:S,modal:g,nested:s,hasBeenOpened:I,preventScrollRestoration:w,noBodyStyles:x});function at(){return(window.innerWidth-Zu)/window.innerWidth}function mn(ie){var ge;!f&&!i||Y.current&&!Y.current.contains(ie.target)||(me.current=((ge=Y.current)==null?void 0:ge.getBoundingClientRect().height)||0,z(!0),ee.current=new Date,Zf()&&window.addEventListener("touchend",()=>ce.current=!1,{once:!0}),ie.target.setPointerCapture(ie.pointerId),ve.current=He(y)?ie.clientY:ie.clientX)}function It(ie,ge){var Pe;let be=ie;const Ve=(Pe=window.getSelection())==null?void 0:Pe.toString(),ze=Y.current?Ro(Y.current,y):null,Dt=new Date;if(be.hasAttribute("data-vaul-no-drag")||be.closest("[data-vaul-no-drag]"))return!1;if(y==="right"||y==="left")return!0;if(X.current&&Dt.getTime()-X.current.getTime()<500)return!1;if(ze!==null&&(y==="bottom"?ze>0:ze<0))return!0;if(Ve&&Ve.length>0)return!1;if(ue.current&&Dt.getTime()-ue.current.getTime()<l&&ze===0||ge)return ue.current=Dt,!1;for(;be;){if(be.scrollHeight>be.clientHeight){if(be.scrollTop!==0)return ue.current=new Date,!1;if(be.getAttribute("role")==="dialog")return!0}be=be.parentNode}return!0}function Er(ie){if(Y.current&&V){const ge=y==="bottom"||y==="right"?1:-1,Pe=(ve.current-(He(y)?ie.clientY:ie.clientX))*ge,be=Pe>0,Ve=i&&!f&&!be;if(Ve&&Ie===0)return;const ze=Math.abs(Pe),Dt=document.querySelector("[vaul-drawer-wrapper]");let zt=ze/me.current;const gn=Ft(ze,be);if(gn!==null&&(zt=gn),Ve&&zt>=1||!ce.current&&!It(ie.target,be))return;if(Y.current.classList.add(ei),ce.current=!0,Ae(Y.current,{transition:"none"}),Ae(j.current,{transition:"none"}),i&&ft({draggedDistance:Pe}),be&&!i){const Nn=S1(Pe),ao=Math.min(Nn*-1,0)*ge;Ae(Y.current,{transform:He(y)?`translate3d(0, ${ao}px, 0)`:`translate3d(${ao}px, 0, 0)`});return}const oo=1-zt;if((rn||d&&Ie===d-1)&&(o==null||o(ie,zt),Ae(j.current,{opacity:`${oo}`,transition:"none"},!0)),Dt&&j.current&&n){const Nn=Math.min(at()+zt*(1-at()),1),ao=8-zt*8,Ws=Math.max(0,14-zt*14);Ae(Dt,{borderRadius:`${ao}px`,transform:He(y)?`scale(${Nn}) translate3d(0, ${Ws}px, 0)`:`scale(${Nn}) translate3d(${Ws}px, 0, 0)`,transition:"none"},!0)}if(!i){const Nn=ze*ge;Ae(Y.current,{transform:He(y)?`translate3d(0, ${Nn}px, 0)`:`translate3d(${Nn}px, 0, 0)`})}}}J.useEffect(()=>()=>{Jn(!1),Vt()},[]),J.useEffect(()=>{var ie;function ge(){if(!Y.current)return;const Pe=document.activeElement;if(Di(Pe)||he.current){var be;const Ve=((be=window.visualViewport)==null?void 0:be.height)||0;let ze=window.innerHeight-Ve;const Dt=Y.current.getBoundingClientRect().height||0;_e.current||(_e.current=Dt);const zt=Y.current.getBoundingClientRect().top;if(Math.abs(xe.current-ze)>60&&(he.current=!he.current),i&&i.length>0&&ot&&Ie){const gn=ot[Ie]||0;ze+=gn}if(xe.current=ze,Dt>Ve||he.current){const gn=Y.current.getBoundingClientRect().height;let oo=gn;gn>Ve&&(oo=Ve-Zu),m?Y.current.style.height=`${gn-Math.max(ze,0)}px`:Y.current.style.height=`${Math.max(oo,Ve-zt)}px`}else Y.current.style.height=`${_e.current}px`;i&&i.length>0&&!he.current?Y.current.style.bottom="0px":Y.current.style.bottom=`${Math.max(ze,0)}px`}}return(ie=window.visualViewport)==null||ie.addEventListener("resize",ge),()=>{var Pe;return(Pe=window.visualViewport)==null?void 0:Pe.removeEventListener("resize",ge)}},[Ie,i,ot]);function gt(){Y.current&&(_r(),b==null||b(),Ae(Y.current,{transform:He(y)?`translate3d(0, ${y==="bottom"?"100%":"-100%"}, 0)`:`translate3d(${y==="right"?"100%":"-100%"}, 0, 0)`,transition:`transform ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`}),Ae(j.current,{opacity:"0",transition:`opacity ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`}),Jn(!1),setTimeout(()=>{M(!1),E(!1)},300),setTimeout(()=>{i&&ke(i[0])},De.DURATION*1e3))}J.useEffect(()=>{if(!S&&n){const ie=setTimeout(()=>{_o(document.body)},200);return()=>clearTimeout(ie)}},[S,n]),J.useLayoutEffect(()=>{r?(E(!0),A(!0)):gt()},[r]),J.useEffect(()=>{B&&(t==null||t(S))},[S]),J.useEffect(()=>{L(!0)},[]);function yt(){if(!Y.current)return;const ie=document.querySelector("[vaul-drawer-wrapper]"),ge=Ro(Y.current,y);Ae(Y.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`}),Ae(j.current,{transition:`opacity ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,opacity:"1"}),n&&ge&&ge>0&&S&&Ae(ie,{borderRadius:`${Qu}px`,overflow:"hidden",...He(y)?{transform:`scale(${at()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${at()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${De.DURATION}s`,transitionTimingFunction:`cubic-bezier(${De.EASE.join(",")})`},!0)}function _r(){!V||!Y.current||(Y.current.classList.remove(ei),ce.current=!1,z(!1),ae.current=new Date)}function ga(ie){if(!V||!Y.current)return;Y.current.classList.remove(ei),ce.current=!1,z(!1),ae.current=new Date;const ge=Ro(Y.current,y);if(!It(ie.target,!1)||!ge||Number.isNaN(ge)||ee.current===null)return;const Pe=ae.current.getTime()-ee.current.getTime(),be=ve.current-(He(y)?ie.clientY:ie.clientX),Ve=Math.abs(be)/Pe;if(Ve>.05&&(G(!0),setTimeout(()=>{G(!1)},200)),i){St({draggedDistance:be*(y==="bottom"||y==="right"?1:-1),closeDrawer:gt,velocity:Ve,dismissible:f}),a==null||a(ie,!0);return}if(y==="bottom"||y==="right"?be>0:be<0){yt(),a==null||a(ie,!0);return}if(Ve>oh){gt(),a==null||a(ie,!1);return}var ze;const Dt=Math.min((ze=Y.current.getBoundingClientRect().height)!=null?ze:0,window.innerHeight);if(ge>=Dt*c){gt(),a==null||a(ie,!1);return}a==null||a(ie,!0),yt()}J.useEffect(()=>{S&&(Ae(document.documentElement,{scrollBehavior:"auto"}),X.current=new Date,Jn(!0))},[S]),J.useEffect(()=>{if(Y.current&&T){var ie;const ge=Y==null||(ie=Y.current)==null?void 0:ie.querySelectorAll("*");ge==null||ge.forEach(Pe=>{const be=Pe;(be.scrollHeight>be.clientHeight||be.scrollWidth>be.clientWidth)&&be.classList.add("vaul-scrollable")})}},[T]);function Jn(ie){const ge=document.querySelector("[vaul-drawer-wrapper]");!ge||!n||(ie?(u&&(x||(Ae(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),Ae(document.body,{background:"black"},!0))),Ae(ge,{borderRadius:`${Qu}px`,overflow:"hidden",...He(y)?{transform:`scale(${at()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${at()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${De.DURATION}s`,transitionTimingFunction:`cubic-bezier(${De.EASE.join(",")})`})):(_o(ge,"overflow"),_o(ge,"transform"),_o(ge,"borderRadius"),Ae(ge,{transitionProperty:"transform, border-radius",transitionDuration:`${De.DURATION}s`,transitionTimingFunction:`cubic-bezier(${De.EASE.join(",")})`})))}function ya(ie){const ge=ie?(window.innerWidth-Pn)/window.innerWidth:1,Pe=ie?-Pn:0;de.current&&window.clearTimeout(de.current),Ae(Y.current,{transition:`transform ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,transform:`scale(${ge}) translate3d(0, ${Pe}px, 0)`}),!ie&&Y.current&&(de.current=setTimeout(()=>{const be=Ro(Y.current,y);Ae(Y.current,{transition:"none",transform:He(y)?`translate3d(0, ${be}px, 0)`:`translate3d(${be}px, 0, 0)`})},500))}function Rr(ie,ge){if(ge<0)return;const Pe=He(y)?window.innerHeight:window.innerWidth,be=(Pe-Pn)/Pe,Ve=be+ge*(1-be),ze=-Pn+ge*Pn;Ae(Y.current,{transform:He(y)?`scale(${Ve}) translate3d(0, ${ze}px, 0)`:`scale(${Ve}) translate3d(${ze}px, 0, 0)`,transition:"none"})}function Sr(ie,ge){const Pe=He(y)?window.innerHeight:window.innerWidth,be=ge?(Pe-Pn)/Pe:1,Ve=ge?-Pn:0;ge&&Ae(Y.current,{transition:`transform ${De.DURATION}s cubic-bezier(${De.EASE.join(",")})`,transform:He(y)?`scale(${be}) translate3d(0, ${Ve}px, 0)`:`scale(${be}) translate3d(${Ve}px, 0, 0)`})}return J.createElement(i1,{modal:g,onOpenChange:ie=>{if(r!==void 0){t==null||t(ie);return}ie?(A(!0),E(ie)):gt()},open:S},J.createElement(Qf.Provider,{value:{visible:T,activeSnapPoint:Fe,snapPoints:i,setActiveSnapPoint:ke,drawerRef:Y,overlayRef:j,scaleBackground:Jn,onOpenChange:t,onPress:mn,setVisible:M,onRelease:ga,onDrag:Er,dismissible:f,handleOnly:h,isOpen:S,isDragging:V,shouldFade:rn,closeDrawer:gt,onNestedDrag:Rr,onNestedOpenChange:ya,onNestedRelease:Sr,keyboardIsOpen:he,openProp:r,modal:g,snapPointsOffset:ot,direction:y}},e))}const N1=250,F1=120,sh=J.forwardRef(function({preventCycle:r=!1,children:t,...e},n){const{visible:o,closeDrawer:a,isDragging:i,snapPoints:s,activeSnapPoint:u,setActiveSnapPoint:c,dismissible:l,handleOnly:f,onPress:h,onDrag:d}=ma(),p=J.useRef(null),v=J.useRef(!1);function m(){if(v.current){x();return}window.setTimeout(()=>{g()},F1)}function g(){if(i||r||v.current){x();return}if(x(),(!s||s.length===0)&&l){a();return}if(u===s[s.length-1]&&l){a();return}const w=s.findIndex(R=>R===u);if(w===-1)return;const C=s[w+1];c(C)}function b(){p.current=window.setTimeout(()=>{v.current=!0},N1)}function x(){window.clearTimeout(p.current),v.current=!1}return J.createElement("div",{onClick:m,onDoubleClick:()=>{v.current=!0,a()},onPointerCancel:x,onPointerDown:y=>{f&&h(y),b()},onPointerMove:y=>{f&&d(y)},ref:n,"vaul-drawer-visible":o?"true":"false","vaul-handle":"","aria-hidden":"true",...e},J.createElement("span",{"vaul-handle-hitarea":"","aria-hidden":"true"},t))});sh.displayName="Drawer.Handle";const uh=J.forwardRef(function({children:r,...t},e){const{overlayRef:n,snapPoints:o,onRelease:a,shouldFade:i,isOpen:s,visible:u}=ma(),c=nh(e,n),l=o&&o.length>0;return J.createElement(c1,{onMouseUp:a,ref:c,"vaul-drawer-visible":u?"true":"false","vaul-overlay":"","vaul-snap-points":s&&l?"true":"false","vaul-snap-points-overlay":s&&i?"true":"false",...t})});uh.displayName="Drawer.Overlay";const ch=J.forwardRef(function({onOpenAutoFocus:r,onPointerDownOutside:t,onAnimationEnd:e,style:n,...o},a){const{drawerRef:i,onPress:s,onRelease:u,onDrag:c,dismissible:l,keyboardIsOpen:f,snapPointsOffset:h,visible:d,closeDrawer:p,modal:v,openProp:m,onOpenChange:g,setVisible:b,handleOnly:x,direction:y}=ma(),w=nh(a,i),C=J.useRef(null),R=J.useRef(!1),S=(E,I,A=0)=>{if(R.current)return!0;const T=Math.abs(E.y),M=Math.abs(E.x),B=M>T,L=["bottom","right"].includes(I)?1:-1;if(I==="left"||I==="right"){if(!(E.x*L<0)&&M>=0&&M<=A)return B}else if(!(E.y*L<0)&&T>=0&&T<=A)return!B;return R.current=!0,!0};return J.useEffect(()=>{b(!0)},[]),J.createElement(l1,{"vaul-drawer":"","vaul-drawer-direction":y,"vaul-drawer-visible":d?"true":"false",...o,ref:w,style:h&&h.length>0?{"--snap-point-height":`${h[0]}px`,...n}:n,onOpenAutoFocus:E=>{if(r)r(E);else{var I;E.preventDefault(),(I=i.current)==null||I.focus()}},onPointerDown:E=>{x||(o.onPointerDown==null||o.onPointerDown.call(o,E),C.current={x:E.clientX,y:E.clientY},s(E))},onPointerDownOutside:E=>{if(t==null||t(E),!v||E.defaultPrevented){E.preventDefault();return}f.current&&(f.current=!1),E.preventDefault(),g==null||g(!1),!(!l||m!==void 0)&&p()},onFocusOutside:E=>{if(!v){E.preventDefault();return}},onEscapeKeyDown:E=>{if(!v){E.preventDefault();return}},onPointerMove:E=>{if(x||(o.onPointerMove==null||o.onPointerMove.call(o,E),!C.current))return;const I=E.clientY-C.current.y,A=E.clientX-C.current.x,T=E.pointerType==="touch"?10:2;S({x:A,y:I},y,T)?c(E):(Math.abs(A)>T||Math.abs(I)>T)&&(C.current=null)},onPointerUp:E=>{o.onPointerUp==null||o.onPointerUp.call(o,E),C.current=null,R.current=!1,u(E)}})});ch.displayName="Drawer.Content";function P1({onDrag:r,onOpenChange:t,...e}){const{onNestedDrag:n,onNestedOpenChange:o,onNestedRelease:a}=ma();if(!n)throw new Error("Drawer.NestedRoot must be placed in another drawer");return J.createElement(ih,{nested:!0,onClose:()=>{o(!1)},onDrag:(i,s)=>{n(i,s),r==null||r(i,s)},onOpenChange:i=>{i&&o(i),t==null||t(i)},onRelease:a,...e})}const Ut={Root:ih,NestedRoot:P1,Content:ch,Handle:sh,Overlay:uh,Trigger:s1,Portal:u1,Close:d1,Title:f1,Description:h1},lh=({shouldScaleBackground:r=!0,...t})=>q.jsx(Ut.Root,{shouldScaleBackground:r,...t});lh.displayName="Drawer";const M1=Ut.Trigger,O1=Ut.Portal,B1=Ut.Close,fh=P.forwardRef(({className:r,...t},e)=>q.jsx(Ut.Overlay,{ref:e,className:br("fixed inset-0 z-50 bg-black/80",r),...t}));fh.displayName=Ut.Overlay.displayName;const hh=P.forwardRef(({className:r,children:t,...e},n)=>q.jsxs(O1,{children:[q.jsx(fh,{}),q.jsxs(Ut.Content,{ref:n,className:br("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",r),...e,children:[q.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),t]})]}));hh.displayName="DrawerContent";const dh=({className:r,...t})=>q.jsx("div",{className:br("grid gap-1.5 p-4 text-center sm:text-left",r),...t});dh.displayName="DrawerHeader";const ph=({className:r,...t})=>q.jsx("div",{className:br("mt-auto flex flex-col gap-2 p-4",r),...t});ph.displayName="DrawerFooter";const vh=P.forwardRef(({className:r,...t},e)=>q.jsx(Ut.Title,{ref:e,className:br("text-lg font-semibold leading-none tracking-tight",r),...t}));vh.displayName=Ut.Title.displayName;const mh=P.forwardRef(({className:r,...t},e)=>q.jsx(Ut.Description,{ref:e,className:br("text-sm text-muted-foreground",r),...t}));mh.displayName=Ut.Description.displayName;const Fr="/face-rec/models";function L1(){const[r,t]=P.useState({name:"",id:"",position:"",photos:[]}),[e,n]=P.useState([]),[o,a]=P.useState(!1),i=P.useCallback(()=>{Promise.all([We.ssdMobilenetv1.loadFromUri(Fr),We.tinyFaceDetector.loadFromUri(Fr),We.faceLandmark68Net.loadFromUri(Fr),We.faceRecognitionNet.loadFromUri(Fr),We.faceExpressionNet.loadFromUri(Fr)]).then(()=>{console.log("Models loaded")})},[]),s=P.useCallback(async f=>await eb(f).withFaceLandmarks().withFaceDescriptor(),[]),u=f=>{const h=Array.from(f.target.files||[]),d=h.map(p=>URL.createObjectURL(p));n(p=>[...p,...d]),t(p=>({...p,photos:[...p.photos,...h]}))},c=f=>{n(h=>h.filter((d,p)=>p!==f)),t(h=>({...h,photos:h.photos.filter((d,p)=>p!==f)}))},l=async()=>{a(!0);const f=await Promise.all(r.photos.map(async b=>{const x=await Ty(URL.createObjectURL(b)),y=await s(x);return(y==null?void 0:y.descriptor)||[]})),h={label:r.name,descriptors:f.map(b=>Object.keys(b).map(x=>parseFloat(b[x])))},d={id:r.id,name:r.name,position:r.position};let p=JSON.parse(localStorage.getItem("CurrentFersons")||""),v=JSON.parse(localStorage.getItem("CurrentData")||""),m=[...p,d],g=[...v,h];localStorage.setItem("CurrentFersons",JSON.stringify(m)),localStorage.setItem("CurrentData",JSON.stringify(g)),t(b=>({...b,faceDescriptors:h})),a(!1),window.location.reload(),console.log(r)};return P.useEffect(()=>{i()},[i]),q.jsxs(lh,{children:[q.jsx(M1,{asChild:!0,children:q.jsx(xa,{variant:"outline",children:"Add Face"})}),q.jsx(hh,{children:q.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[q.jsxs(dh,{children:[q.jsx(vh,{children:"Register a Face"}),q.jsx(mh,{children:"Upload face and wait for the model to train."})]}),q.jsxs("div",{className:"p-4 pb-0",children:[q.jsxs("div",{className:"flex text-foreground gap-4 flex-col justify-center",children:[q.jsxs("div",{className:"w-full",children:[q.jsx("p",{children:"Label ID"}),q.jsx("input",{type:"text",value:r.id,onChange:f=>t({...r,id:f.target.value}),className:"flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"})]}),q.jsxs("div",{className:"w-full",children:[q.jsx("p",{children:"Name"}),q.jsx("input",{type:"text",value:r.name,onChange:f=>t({...r,name:f.target.value}),className:"flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"})]}),q.jsxs("div",{className:"w-full",children:[q.jsx("p",{children:"Position"}),q.jsx("input",{type:"text",value:r.position,onChange:f=>t({...r,position:f.target.value}),className:"flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"})]}),q.jsxs("div",{className:"flex-1 text-start w-full",children:[q.jsx("p",{children:"Images"}),q.jsx("label",{className:"text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}),q.jsx("div",{className:"grid w-full items-start",children:q.jsx("input",{id:"picture",onChange:u,type:"file",multiple:!0,className:"flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"})}),q.jsx("div",{className:"preview mt-3 grid grid-cols-3 gap-2",children:e.map((f,h)=>q.jsxs("div",{className:"relative",children:[q.jsx("img",{src:f,className:"h-[70px] w-full object-contain",alt:`Image Preview ${h}`}),q.jsx("button",{type:"button",onClick:()=>c(h),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center",children:"×"})]},h))})]})]}),q.jsx("div",{className:"mt-3 h-[120px]"})]}),q.jsxs(ph,{children:[q.jsx(xa,{onClick:l,disabled:o,children:o?"Processing...":"Submit"}),q.jsx(B1,{asChild:!0,children:q.jsx(xa,{variant:"outline",children:"Cancel"})})]})]})})]})}const z1=()=>{let[r,t]=P.useState(JSON.parse(localStorage.getItem("CurrentData")||"")),[e,n]=P.useState(JSON.parse(localStorage.getItem("CurrentFersons")||""));const[o,a]=P.useState("Loading..."),i="/face-rec/models",s=P.useRef(null),u=P.useRef(null),[c,l]=P.useState("environment"),[f,h]=P.useState([]),[d,p]=P.useState(!0),v=P.useCallback(async()=>{await Promise.all([We.ssdMobilenetv1.loadFromUri(i),We.tinyFaceDetector.loadFromUri(i),We.faceLandmark68Net.loadFromUri(i),We.faceRecognitionNet.loadFromUri(i),We.faceExpressionNet.loadFromUri(i)]),b()},[]),m=P.useCallback(async()=>{s.current&&s.current.srcObject&&(s.current.srcObject.getTracks().forEach(y=>y.stop()),s.current.srcObject=null);try{const x=await navigator.mediaDevices.getUserMedia({video:{facingMode:c}});s.current&&(s.current.srcObject=x,v())}catch(x){console.error(x)}},[c,v]);P.useEffect(()=>{m()},[c,m]);const g=P.useCallback(async()=>Promise.all(r.map(async x=>{const y=x.descriptors.map(w=>new Float32Array(w));return new Pr(x.label,y)})),[]),b=P.useCallback(async()=>{const x=await g(),y=new rb(x),w=async()=>{if(!s.current||!u.current)return;const C=await tb(s.current,new pf).withFaceLandmarks().withFaceDescriptors(),R={width:s.current.videoWidth,height:s.current.videoHeight};Fy(u.current,R);const S=Ef(C,R);u.current.getContext("2d").clearRect(0,0,R.width,R.height);const I=S.map(A=>y.findBestMatch(A.descriptor));Ry(u.current,S),I.forEach((A,T)=>{const M=S[T].detection.box;new Hl(M,{label:A.toString()}).draw(u.current)}),h(I),a("Running"),requestAnimationFrame(w)};w()},[g]);return q.jsx("div",{className:"min-h-full w-full max-w-[1468px] flex flex-col justify-center",children:q.jsxs("div",{className:"border border-border flex flex-col gap-5 items-center justify-center h-screen w-full",children:[q.jsxs("div",{className:"text-foreground text-sm w-[300px] flex items-center gap-6 justify-center",children:[q.jsx("p",{className:"font-semibold text-lg",children:"Face Rex v.1.1"}),q.jsx(L1,{})]}),q.jsxs("div",{className:"overflow-hidden w-full max-w-[500px] h-[500px] relative flex",children:[q.jsx("div",{className:"ml-2 mt-5 absolute gap-2 text-primary col-span-1 flex flex-col",children:f&&f.map((x,y)=>{const w=e.find(C=>C.id===x._label);return w?q.jsxs("div",{className:"text-sm bg-card/50 backdrop-blur-md p-2 rounded-md",children:[q.jsx("h3",{children:w.name}),q.jsx("p",{children:w.position})]},y):null})}),q.jsx("video",{crossOrigin:"anonymous",ref:s,className:"w-full h-full border-border border-2 rounded-md",autoPlay:!0}),q.jsx("canvas",{ref:u,className:"w-full h-full absolute"})]}),q.jsxs("div",{className:"w-[300px]  grid justify-center items-center grid-cols-3",children:[q.jsx("p",{className:"col-span-1 justify-start justify-self-start",children:q.jsx("span",{className:o==="Running"?"text-green-600":"text-red-500",children:o})}),q.jsx("div",{className:" flex justify-center",children:d?q.jsx(kh,{className:"text-foreground text-center self-center col-span-1 cursor-pointer",onClick:()=>{s.current.pause(),p(!1)}}):q.jsx(Th,{className:"text-foreground text-center self-center col-span-1 cursor-pointer",onClick:()=>{s.current.play(),p(!0)}})}),q.jsx(Ah,{className:`justify-end justify-self-end text-foreground col-span-1 ${c==="user"?"rotate-180":"rotate-0"} transition-all duration-700`,onClick:()=>{l(x=>x==="user"?"environment":"user")}})]})]})})};export{z1 as default};
