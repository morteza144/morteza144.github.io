(self["webpackChunkvuecli_one"]=self["webpackChunkvuecli_one"]||[]).push([[443],{5787:function(t,e,i){var n=i(7854),r=i(7976),s=n.TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,i){"use strict";var n,r,s,o=i(4019),a=i(9781),h=i(7854),l=i(614),c=i(111),u=i(2597),f=i(648),p=i(6330),g=i(8880),d=i(8052),m=i(3070).f,y=i(7976),v=i(9518),E=i(7674),b=i(5112),T=i(9711),A=h.Int8Array,w=A&&A.prototype,I=h.Uint8ClampedArray,_=I&&I.prototype,S=A&&v(A),C=w&&v(w),R=Object.prototype,D=h.TypeError,N=b("toStringTag"),L=T("TYPED_ARRAY_TAG"),O=T("TYPED_ARRAY_CONSTRUCTOR"),k=o&&!!E&&"Opera"!==f(h.opera),P=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},x={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!c(t))return!1;var e=f(t);return"DataView"===e||u(M,e)||u(x,e)},F=function(t){if(!c(t))return!1;var e=f(t);return u(M,e)||u(x,e)},B=function(t){if(F(t))return t;throw D("Target is not a typed array")},j=function(t){if(l(t)&&(!E||y(S,t)))return t;throw D(p(t)+" is not a typed array constructor")},H=function(t,e,i,n){if(a){if(i)for(var r in M){var s=h[r];if(s&&u(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(l){}}}C[t]&&!i||d(C,t,i?e:k&&w[t]||e,n)}},V=function(t,e,i){var n,r;if(a){if(E){if(i)for(n in M)if(r=h[n],r&&u(r,t))try{delete r[t]}catch(s){}if(S[t]&&!i)return;try{return d(S,t,i?e:k&&S[t]||e)}catch(s){}}for(n in M)r=h[n],!r||r[t]&&!i||d(r,t,e)}};for(n in M)r=h[n],s=r&&r.prototype,s?g(s,O,r):k=!1;for(n in x)r=h[n],s=r&&r.prototype,s&&g(s,O,r);if((!k||!l(S)||S===Function.prototype)&&(S=function(){throw D("Incorrect invocation")},k))for(n in M)h[n]&&E(h[n],S);if((!k||!C||C===R)&&(C=S.prototype,k))for(n in M)h[n]&&E(h[n].prototype,C);if(k&&v(_)!==C&&E(_,C),a&&!u(C,N))for(n in P=!0,m(C,N,{get:function(){return c(this)?this[L]:void 0}}),M)h[n]&&g(h[n],L,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_CONSTRUCTOR:O,TYPED_ARRAY_TAG:P&&L,aTypedArray:B,aTypedArrayConstructor:j,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:V,isView:U,isTypedArray:F,TypedArray:S,TypedArrayPrototype:C}},8544:function(t,e,i){var n=i(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9518:function(t,e,i){var n=i(7854),r=i(2597),s=i(614),o=i(7908),a=i(6200),h=i(8544),l=a("IE_PROTO"),c=n.Object,u=c.prototype;t.exports=h?c.getPrototypeOf:function(t){var e=o(t);if(r(e,l))return e[l];var i=e.constructor;return s(i)&&e instanceof i?i.prototype:e instanceof c?u:null}},4590:function(t,e,i){var n=i(7854),r=i(3002),s=n.RangeError;t.exports=function(t,e){var i=r(t);if(i%e)throw s("Wrong offset");return i}},3002:function(t,e,i){var n=i(7854),r=i(9303),s=n.RangeError;t.exports=function(t){var e=r(t);if(e<0)throw s("The argument can't be less than 0");return e}},2262:function(t,e,i){"use strict";var n=i(2109),r=i(7908),s=i(6244),o=i(9303),a=i(1223);n({target:"Array",proto:!0},{at:function(t){var e=r(this),i=s(e),n=o(t),a=n>=0?n:i+n;return a<0||a>=i?void 0:e[a]}}),a("at")},4506:function(t,e,i){"use strict";var n=i(2109),r=i(1702),s=i(4488),o=i(9303),a=i(1340),h=i(7293),l=r("".charAt),c=h((function(){return"\ud842"!=="𠮷".at(-2)}));n({target:"String",proto:!0,forced:c},{at:function(t){var e=a(s(this)),i=e.length,n=o(t),r=n>=0?n:i+n;return r<0||r>=i?void 0:l(e,r)}})},8675:function(t,e,i){"use strict";var n=i(260),r=i(6244),s=i(9303),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("at",(function(t){var e=o(this),i=r(e),n=s(t),a=n>=0?n:i+n;return a<0||a>=i?void 0:e[a]}))},3462:function(t,e,i){"use strict";var n=i(7854),r=i(6916),s=i(260),o=i(6244),a=i(4590),h=i(7908),l=i(7293),c=n.RangeError,u=n.Int8Array,f=u&&u.prototype,p=f&&f.set,g=s.aTypedArray,d=s.exportTypedArrayMethod,m=!l((function(){var t=new Uint8ClampedArray(2);return r(p,t,{length:1,0:3},1),3!==t[1]})),y=m&&s.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var t=new u(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));d("set",(function(t){g(this);var e=a(arguments.length>1?arguments[1]:void 0,1),i=h(t);if(m)return r(p,this,i,e);var n=this.length,s=o(i),l=0;if(s+e>n)throw c("Wrong length");while(l<s)this[e+l]=i[l++]}),!m||y)},2801:function(t,e,i){"use strict";var n=i(2109),r=i(5005),s=i(9114),o=i(3070).f,a=i(2597),h=i(5787),l=i(9587),c=i(6277),u=i(3678),f=i(7741),p=i(1913),g="DOMException",d=r("Error"),m=r(g),y=function(){h(this,v);var t=arguments.length,e=c(t<1?void 0:arguments[0]),i=c(t<2?void 0:arguments[1],"Error"),n=new m(e,i),r=d(e);return r.name=g,o(n,"stack",s(1,f(r.stack,1))),l(n,this,y),n},v=y.prototype=m.prototype,E="stack"in d(g),b="stack"in new m(1,2),T=E&&!b;n({global:!0,constructor:!0,forced:p||T},{DOMException:T?y:m});var A=r(g),w=A.prototype;if(w.constructor!==A)for(var I in p||o(w,"constructor",s(1,A)),u)if(a(u,I)){var _=u[I],S=_.s;a(A,S)||o(A,S,s(6,_.c))}},5836:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return zo}});var n=i(3396);i(1703),i(8675),i(3462),i(2801),i(2262),i(4506),i(6699);
/**
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
 */
const r=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=63&r|128):55296===(64512&r)&&n+1<t.length&&56320===(64512&t.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++n)),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=63&r|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=63&r|128)}return e},s=function(t){const e=[];let i=0,n=0;while(i<t.length){const r=t[i++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[i++];e[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[i++],o=t[i++],a=t[i++],h=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(1023&h))}else{const s=t[i++],o=t[i++];e[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,h=a?t[r+2]:0,l=e>>2,c=(3&e)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(u=64)),n.push(i[l],i[c],i[u],i[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const e=i[t.charAt(r++)],s=r<t.length,o=s?i[t.charAt(r)]:0;++r;const a=r<t.length,h=a?i[t.charAt(r)]:64;++r;const l=r<t.length,c=l?i[t.charAt(r)]:64;if(++r,null==e||null==o||null==h||null==c)throw Error();const u=e<<2|o>>4;if(n.push(u),64!==h){const t=o<<4&240|h>>2;if(n.push(t),64!==c){const t=h<<6&192|c;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},h=function(t){return a(t).replace(/\./g,"")};
/**
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
 */
/**
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
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
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
 */function c(){return"object"===typeof indexedDB}function u(){return new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(i){e(i)}}))}
/**
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
 */
const f="FirebaseError";class p extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=f,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,g.prototype.create)}}class g{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,r=this.errors[t],s=r?d(r,i):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new p(n,o,i);return a}}function d(t,e){return t.replace(m,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}const m=/\{\$([^}]+)}/g;
/**
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
 */function y(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const r of i){if(!n.includes(r))return!1;const i=t[r],s=e[r];if(v(i)&&v(s)){if(!y(i,s))return!1}else if(i!==s)return!1}for(const r of n)if(!i.includes(r))return!1;return!0}function v(t){return null!==t&&"object"===typeof t}
/**
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
 */class E{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const b="[DEFAULT]";
/**
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
 */class T{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(i){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),n=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(w(t))try{this.getOrInitializeService({instanceIdentifier:b})}catch(e){}for(const[t,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});i.resolve(t)}catch(e){}}}}clearInstance(t=b){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=b){return this.instances.has(t)}getOptions(t=b){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);i===t&&s.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(t),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&t(s,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch(n){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:A(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(n){}return i||null}normalizeInstanceIdentifier(t=b){return this.component?this.component.multipleInstances?t:b:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function A(t){return t===b?void 0:t}function w(t){return"EAGER"===t.instantiationMode}
/**
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
 */class I{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new T(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const _=[];var S;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(S||(S={}));const C={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},R=S.INFO,D={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},N=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),r=D[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${t.name}:`,...i)};class L{constructor(t){this.name=t,this._logLevel=R,this._logHandler=N,this._userLogHandler=null,_.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?C[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const O=(t,e)=>e.some((e=>t instanceof e));let k,P;function M(){return k||(k=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x(){return P||(P=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U=new WeakMap,F=new WeakMap,B=new WeakMap,j=new WeakMap,H=new WeakMap;function V(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(K(t.result)),n()},s=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&U.set(e,t)})).catch((()=>{})),H.set(e,t),e}function $(t){if(F.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),n()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));F.set(t,e)}let z={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return F.get(t);if("objectStoreNames"===e)return t.objectStoreNames||B.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return K(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function G(t){z=t(z)}function Y(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?x().includes(t)?function(...e){return t.apply(W(this),e),K(U.get(this))}:function(...e){return K(t.apply(W(this),e))}:function(e,...i){const n=t.call(W(this),e,...i);return B.set(n,e.sort?e.sort():[e]),K(n)}}function X(t){return"function"===typeof t?Y(t):(t instanceof IDBTransaction&&$(t),O(t,M())?new Proxy(t,z):t)}function K(t){if(t instanceof IDBRequest)return V(t);if(j.has(t))return j.get(t);const e=X(t);return e!==t&&(j.set(t,e),H.set(e,t)),e}const W=t=>H.get(t);function q(t,e,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=K(o);return n&&o.addEventListener("upgradeneeded",(t=>{n(K(o.result),t.oldVersion,t.newVersion,K(o.transaction))})),i&&o.addEventListener("blocked",(()=>i())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const J=["get","getKey","getAll","getAllKeys","count"],Q=["put","add","delete","clear"],Z=new Map;function tt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(Z.get(e))return Z.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=Q.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!J.includes(i))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(e.shift())),(await Promise.all([o[i](...e),r&&s.done]))[0]};return Z.set(e,s),s}G((t=>({...t,get:(e,i,n)=>tt(e,i)||t.get(e,i,n),has:(e,i)=>!!tt(e,i)||t.has(e,i)})));
/**
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
 */
class et{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(it(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function it(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const nt="@firebase/app",rt="0.7.25",st=new L("@firebase/app"),ot="@firebase/app-compat",at="@firebase/analytics-compat",ht="@firebase/analytics",lt="@firebase/app-check-compat",ct="@firebase/app-check",ut="@firebase/auth",ft="@firebase/auth-compat",pt="@firebase/database",gt="@firebase/database-compat",dt="@firebase/functions",mt="@firebase/functions-compat",yt="@firebase/installations",vt="@firebase/installations-compat",Et="@firebase/messaging",bt="@firebase/messaging-compat",Tt="@firebase/performance",At="@firebase/performance-compat",wt="@firebase/remote-config",It="@firebase/remote-config-compat",_t="@firebase/storage",St="@firebase/storage-compat",Ct="@firebase/firestore",Rt="@firebase/firestore-compat",Dt="firebase",Nt="9.8.2",Lt="[DEFAULT]",Ot={[nt]:"fire-core",[ot]:"fire-core-compat",[ht]:"fire-analytics",[at]:"fire-analytics-compat",[ct]:"fire-app-check",[lt]:"fire-app-check-compat",[ut]:"fire-auth",[ft]:"fire-auth-compat",[pt]:"fire-rtdb",[gt]:"fire-rtdb-compat",[dt]:"fire-fn",[mt]:"fire-fn-compat",[yt]:"fire-iid",[vt]:"fire-iid-compat",[Et]:"fire-fcm",[bt]:"fire-fcm-compat",[Tt]:"fire-perf",[At]:"fire-perf-compat",[wt]:"fire-rc",[It]:"fire-rc-compat",[_t]:"fire-gcs",[St]:"fire-gcs-compat",[Ct]:"fire-fst",[Rt]:"fire-fst-compat","fire-js":"fire-js",[Dt]:"fire-js-all"},kt=new Map,Pt=new Map;function Mt(t,e){try{t.container.addComponent(e)}catch(i){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function xt(t){const e=t.name;if(Pt.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Pt.set(e,t);for(const i of kt.values())Mt(i,t);return!0}function Ut(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Bt=new g("app","Firebase",Ft);
/**
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
 */
class jt{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new E("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}
/**
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
 */const Ht=Nt;function Vt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:Lt,automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!==typeof n||!n)throw Bt.create("bad-app-name",{appName:String(n)});const r=kt.get(n);if(r){if(y(t,r.options)&&y(i,r.config))return r;throw Bt.create("duplicate-app",{appName:n})}const s=new I(n);for(const a of Pt.values())s.addComponent(a);const o=new jt(t,i,s);return kt.set(n,o),o}function $t(t=Lt){const e=kt.get(t);if(!e)throw Bt.create("no-app",{appName:t});return e}function zt(t,e,i){var n;let r=null!==(n=Ot[t])&&void 0!==n?n:t;i&&(r+=`-${i}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void st.warn(t.join(" "))}xt(new E(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
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
 */
const Gt="firebase-heartbeat-database",Yt=1,Xt="firebase-heartbeat-store";let Kt=null;function Wt(){return Kt||(Kt=q(Gt,Yt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}}).catch((t=>{throw Bt.create("storage-open",{originalErrorMessage:t.message})}))),Kt}async function qt(t){try{const e=await Wt();return e.transaction(Xt).objectStore(Xt).get(Qt(t))}catch(e){throw Bt.create("storage-get",{originalErrorMessage:e.message})}}async function Jt(t,e){try{const i=await Wt(),n=i.transaction(Xt,"readwrite"),r=n.objectStore(Xt);return await r.put(e,Qt(t)),n.done}catch(i){throw Bt.create("storage-set",{originalErrorMessage:i.message})}}function Qt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const Zt=1024,te=2592e6;class ee{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new re(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),i=ie();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),i=Date.now();return i-e<=te})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ie(),{heartbeatsToSend:e,unsentEntries:i}=ne(this._heartbeatsCache.heartbeats),n=h(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function ie(){const t=new Date;return t.toISOString().substring(0,10)}function ne(t,e=Zt){const i=[];let n=t.slice();for(const r of t){const t=i.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),se(i)>e){t.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),se(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}class re{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!c()&&u().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await qt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const i=await this._canUseIndexedDBPromise;if(i){const i=await this.read();return Jt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const i=await this._canUseIndexedDBPromise;if(i){const i=await this.read();return Jt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}}function se(t){return h(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function oe(t){xt(new E("platform-logger",(t=>new et(t)),"PRIVATE")),xt(new E("heartbeat",(t=>new ee(t)),"PRIVATE")),zt(nt,rt,t),zt(nt,rt,"esm2017"),zt("fire-js","")}oe("");var ae,he="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:"undefined"!==typeof self?self:{},le={},ce=ce||{},ue=he||self;function fe(){}function pe(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function ge(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function de(t){return Object.prototype.hasOwnProperty.call(t,me)&&t[me]||(t[me]=++ye)}var me="closure_uid_"+(1e9*Math.random()>>>0),ye=0;function ve(t,e,i){return t.call.apply(t.bind,arguments)}function Ee(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,i){return be=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ve:Ee,be.apply(null,arguments)}function Te(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ae(t,e){function i(){}i.prototype=e.prototype,t.Z=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[i].apply(t,r)}}function we(){this.s=this.s,this.o=this.o}var Ie=0,_e={};we.prototype.s=!1,we.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Ie)){var t=de(this);delete _e[t]}},we.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Se=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1},Ce=Array.prototype.forEach?function(t,e,i){Array.prototype.forEach.call(t,e,i)}:function(t,e,i){const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)s in r&&e.call(i,r[s],s,t)};function Re(t){t:{var e=Yr;const i=t.length,n="string"===typeof t?t.split(""):t;for(let r=0;r<i;r++)if(r in n&&e.call(void 0,n[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function De(t){return Array.prototype.concat.apply([],arguments)}function Ne(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function Le(t){return/^[\s\xa0]*$/.test(t)}var Oe,ke=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pe(t,e){return-1!=t.indexOf(e)}function Me(t,e){return t<e?-1:t>e?1:0}t:{var xe=ue.navigator;if(xe){var Ue=xe.userAgent;if(Ue){Oe=Ue;break t}}Oe=""}function Fe(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function Be(t){const e={};for(const i in t)e[i]=t[i];return e}var je="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function He(t,e){let i,n;for(let r=1;r<arguments.length;r++){for(i in n=arguments[r],n)t[i]=n[i];for(let e=0;e<je.length;e++)i=je[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function Ve(t){return Ve[" "](t),t}function $e(t){var e=ii;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Ve[" "]=fe;var ze,Ge=Pe(Oe,"Opera"),Ye=Pe(Oe,"Trident")||Pe(Oe,"MSIE"),Xe=Pe(Oe,"Edge"),Ke=Xe||Ye,We=Pe(Oe,"Gecko")&&!(Pe(Oe.toLowerCase(),"webkit")&&!Pe(Oe,"Edge"))&&!(Pe(Oe,"Trident")||Pe(Oe,"MSIE"))&&!Pe(Oe,"Edge"),qe=Pe(Oe.toLowerCase(),"webkit")&&!Pe(Oe,"Edge");function Je(){var t=ue.document;return t?t.documentMode:void 0}t:{var Qe="",Ze=function(){var t=Oe;return We?/rv:([^\);]+)(\)|;)/.exec(t):Xe?/Edge\/([\d\.]+)/.exec(t):Ye?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):qe?/WebKit\/(\S+)/.exec(t):Ge?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Ze&&(Qe=Ze?Ze[1]:""),Ye){var ti=Je();if(null!=ti&&ti>parseFloat(Qe)){ze=String(ti);break t}}ze=Qe}var ei,ii={};function ni(){return $e((function(){let t=0;const e=ke(String(ze)).split("."),i=ke("9").split("."),n=Math.max(e.length,i.length);for(let o=0;0==t&&o<n;o++){var r=e[o]||"",s=i[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Me(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Me(0==r[2].length,0==s[2].length)||Me(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(ue.document&&Ye){var ri=Je();ei=ri||(parseInt(ze,10)||void 0)}else ei=void 0;var si=ei,oi=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",fe,e),ue.removeEventListener("test",fe,e)}catch(i){}return t}();function ai(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function hi(t,e){if(ai.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(We){t:{try{Ve(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:li[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.Z.h.call(this)}}ai.prototype.h=function(){this.defaultPrevented=!0},Ae(hi,ai);var li={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),ui=0;function fi(t,e,i,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ia=r,this.key=++ui,this.ca=this.fa=!1}function pi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function gi(t){this.src=t,this.g={},this.h=0}function di(t,e){var i=e.type;if(i in t.g){var n,r=t.g[i],s=Se(r,e);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(pi(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function mi(t,e,i,n){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!i&&s.ia==n)return r}return-1}gi.prototype.add=function(t,e,i,n,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mi(t,e,n,r);return-1<o?(e=t[o],i||(e.fa=!1)):(e=new fi(e,this.src,s,!!n,r),e.fa=i,t.push(e)),e};var yi="closure_lm_"+(1e6*Math.random()|0),vi={};function Ei(t,e,i,n,r){if(n&&n.once)return Ai(t,e,i,n,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ei(t,e[s],i,n,r);return null}return i=Di(i),t&&t[ci]?t.N(e,i,ge(n)?!!n.capture:!!n,r):bi(t,e,i,!1,n,r)}function bi(t,e,i,n,r,s){if(!e)throw Error("Invalid event type");var o=ge(r)?!!r.capture:!!r,a=Ci(t);if(a||(t[yi]=a=new gi(t)),i=a.add(e,i,n,o,s),i.proxy)return i;if(n=Ti(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)oi||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(_i(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function Ti(){function t(i){return e.call(t.src,t.listener,i)}var e=Si;return t}function Ai(t,e,i,n,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ai(t,e[s],i,n,r);return null}return i=Di(i),t&&t[ci]?t.O(e,i,ge(n)?!!n.capture:!!n,r):bi(t,e,i,!0,n,r)}function wi(t,e,i,n,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)wi(t,e[s],i,n,r);else n=ge(n)?!!n.capture:!!n,i=Di(i),t&&t[ci]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],i=mi(s,i,n,r),-1<i&&(pi(s[i]),Array.prototype.splice.call(s,i,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ci(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mi(e,i,n,r)),(i=-1<t?e[t]:null)&&Ii(i))}function Ii(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ci])di(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(_i(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=Ci(e))?(di(i,t),0==i.h&&(i.src=null,e[yi]=null)):pi(t)}}}function _i(t){return t in vi?vi[t]:vi[t]="on"+t}function Si(t,e){if(t.ca)t=!0;else{e=new hi(e,this);var i=t.listener,n=t.ia||t.src;t.fa&&Ii(t),t=i.call(n,e)}return t}function Ci(t){return t=t[yi],t instanceof gi?t:null}var Ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Di(t){return"function"===typeof t?t:(t[Ri]||(t[Ri]=function(e){return t.handleEvent(e)}),t[Ri])}function Ni(){we.call(this),this.i=new gi(this),this.P=this,this.I=null}function Li(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"===typeof e)e=new ai(e,t);else if(e instanceof ai)e.target=e.target||t;else{var r=e;e=new ai(n,t),He(e,r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=e.g=i[s];r=Oi(o,n,!0,e)&&r}if(o=e.g=t,r=Oi(o,n,!0,e)&&r,r=Oi(o,n,!1,e)&&r,i)for(s=0;s<i.length;s++)o=e.g=i[s],r=Oi(o,n,!1,e)&&r}function Oi(t,e,i,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==i){var a=o.listener,h=o.ia||o.src;o.fa&&di(t.i,o),r=!1!==a.call(h,n)&&r}}return r&&!n.defaultPrevented}Ae(Ni,we),Ni.prototype[ci]=!0,Ni.prototype.removeEventListener=function(t,e,i,n){wi(this,t,e,i,n)},Ni.prototype.M=function(){if(Ni.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)pi(i[n]);delete e.g[t],e.h--}}this.I=null},Ni.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},Ni.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var ki=ue.JSON.stringify;function Pi(){var t=$i;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Mi{constructor(){this.h=this.g=null}add(t,e){const i=Ui.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}}var xi,Ui=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Fi),(t=>t.reset()));class Fi{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Bi(t){ue.setTimeout((()=>{throw t}),0)}function ji(t,e){xi||Hi(),Vi||(xi(),Vi=!0),$i.add(t,e)}function Hi(){var t=ue.Promise.resolve(void 0);xi=function(){t.then(zi)}}var Vi=!1,$i=new Mi;function zi(){for(var t;t=Pi();){try{t.h.call(t.g)}catch(i){Bi(i)}var e=Ui;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vi=!1}function Gi(t,e){Ni.call(this),this.h=t||1,this.g=e||ue,this.j=be(this.kb,this),this.l=Date.now()}function Yi(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Xi(t,e,i){if("function"===typeof t)i&&(t=be(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=be(t.handleEvent,t)}return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function Ki(t){t.g=Xi((()=>{t.g=null,t.i&&(t.i=!1,Ki(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ae(Gi,Ni),ae=Gi.prototype,ae.da=!1,ae.S=null,ae.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Li(this,"tick"),this.da&&(Yi(this),this.start()))}},ae.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ae.M=function(){Gi.Z.M.call(this),Yi(this),delete this.g};class Wi extends we{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ki(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(t){we.call(this),this.h=t,this.g={}}Ae(qi,we);var Ji=[];function Qi(t,e,i,n){Array.isArray(i)||(i&&(Ji[0]=i.toString()),i=Ji);for(var r=0;r<i.length;r++){var s=Ei(e,i[r],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zi(t){Fe(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ii(t)}),t),t.g={}}function tn(){this.g=!0}function en(t,e,i,n,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+"\n"+i+"\n"+o}))}function nn(t,e,i,n,r,s,o){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+"\n"+i+"\n"+s+" "+o}))}function rn(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+on(t,i)+(n?" "+n:"")}))}function sn(t,e){t.info((function(){return"TIMEOUT: "+e}))}function on(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ki(i)}catch(a){return e}}qi.prototype.M=function(){qi.Z.M.call(this),Zi(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tn.prototype.Aa=function(){this.g=!1},tn.prototype.info=function(){};var an={},hn=null;function ln(){return hn=hn||new Ni}function cn(t){ai.call(this,an.Ma,t)}function un(t){const e=ln();Li(e,new cn(e,t))}function fn(t,e){ai.call(this,an.STAT_EVENT,t),this.stat=e}function pn(t){const e=ln();Li(e,new fn(e,t))}function gn(t,e){ai.call(this,an.Na,t),this.size=e}function dn(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return ue.setTimeout((function(){t()}),e)}an.Ma="serverreachability",Ae(cn,ai),an.STAT_EVENT="statevent",Ae(fn,ai),an.Na="timingevent",Ae(gn,ai);var mn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vn(){}function En(t){return t.h||(t.h=t.i())}function bn(){}vn.prototype.h=null;var Tn,An={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wn(){ai.call(this,"d")}function In(){ai.call(this,"c")}function _n(){}function Sn(t,e,i,n){this.l=t,this.j=e,this.m=i,this.X=n||1,this.V=new qi(this),this.P=Rn,t=Ke?125:void 0,this.W=new Gi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Cn}function Cn(){this.i=null,this.g="",this.h=!1}Ae(wn,ai),Ae(In,ai),Ae(_n,vn),_n.prototype.g=function(){return new XMLHttpRequest},_n.prototype.i=function(){return{}},Tn=new _n;var Rn=45e3,Dn={},Nn={};function Ln(t,e,i){t.K=1,t.v=ir(qn(e)),t.s=i,t.U=!0,On(t,null)}function On(t,e){t.F=Date.now(),xn(t),t.A=qn(t.v);var i=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),yr(i.h,"t",n),t.C=0,i=t.l.H,t.h=new Cn,t.g=ws(t.l,i?e:null,!t.s),0<t.O&&(t.L=new Wi(be(t.Ia,t,t.g),t.O)),Qi(t.V,t.g,"readystatechange",t.gb),e=t.H?Be(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),un(1),en(t.j,t.u,t.A,t.m,t.X,t.s)}function kn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Pn(t,e,i){let n,r=!0;for(;!t.I&&t.C<i.length;){if(n=Mn(t,i),n==Nn){4==e&&(t.o=4,pn(14),r=!1),rn(t.j,t.m,null,"[Incomplete Response]");break}if(n==Dn){t.o=4,pn(15),rn(t.j,t.m,i,"[Invalid Chunk]"),r=!1;break}rn(t.j,t.m,n,null),Hn(t,n)}kn(t)&&n!=Nn&&n!=Dn&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,pn(16),r=!1),t.i=t.i&&r,r?0<i.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),ds(e),e.L=!0,pn(11))):(rn(t.j,t.m,i,"[Invalid Chunked Response]"),jn(t),Bn(t))}function Mn(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?Nn:(i=Number(e.substring(i,n)),isNaN(i)?Dn:(n+=1,n+i>e.length?Nn:(e=e.substr(n,i),t.C=n+i,e)))}function xn(t){t.Y=Date.now()+t.P,Un(t,t.P)}function Un(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=dn(be(t.eb,t),e)}function Fn(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}function Bn(t){0==t.l.G||t.I||vs(t.l,t)}function jn(t){Fn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Yi(t.W),Zi(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hn(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||_r(i.i,t)))if(i.I=t.N,!t.J&&_r(i.i,t)&&3==i.G){try{var n=i.Ca.g.parse(e)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;ys(i),ss(i)}gs(i),pn(18)}}else i.ta=r[1],0<i.ta-i.U&&37500>r[2]&&i.N&&0==i.A&&!i.v&&(i.v=dn(be(i.ab,i),6e3));if(1>=Ir(i.i)&&i.ka){try{i.ka()}catch(l){}i.ka=void 0}}else bs(i,11)}else if((t.J||i.g==t)&&ys(i),!Le(e))for(r=i.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(i.U=l[0],l=l[1],2==i.G)if("c"==l[0]){i.J=l[1],i.la=l[2];const e=l[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const r=l[4];null!=r&&(i.za=r,i.h.info("SVER="+i.za));const c=l[5];null!=c&&"number"===typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=n.i;!s.g&&(Pe(t,"spdy")||Pe(t,"quic")||Pe(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Sr(s,s.h),s.h=null))}if(n.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.sa=t,er(n.F,n.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms")),n=i;var o=t;if(n.oa=As(n,n.H?n.la:null,n.W),o.J){Cr(n.i,o);var a=o,h=n.K;h&&a.setTimeout(h),a.B&&(Fn(a),xn(a)),n.g=o}else ps(n);0<i.l.length&&hs(i)}else"stop"!=l[0]&&"close"!=l[0]||bs(i,7);else 3==i.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?bs(i,7):rs(i):"noop"!=l[0]&&i.j&&i.j.wa(l),i.A=0)}un(4)}catch(l){}}function Vn(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(pe(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}function $n(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(pe(t)||"string"===typeof t)Ce(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if(pe(t)||"string"===typeof t){i=[];for(var n=t.length,r=0;r<n;r++)i.push(r)}else for(r in i=[],n=0,t)i[n++]=r;n=Vn(t),r=n.length;for(var s=0;s<r;s++)e.call(void 0,n[s],i&&i[s],t)}}function zn(t,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof zn)for(i=t.T(),n=0;n<i.length;n++)this.set(i[n],t.get(i[n]));else for(n in t)this.set(n,t[n])}function Gn(t){if(t.i!=t.g.length){for(var e=0,i=0;e<t.g.length;){var n=t.g[e];Yn(t.h,n)&&(t.g[i++]=n),e++}t.g.length=i}if(t.i!=t.g.length){var r={};for(i=e=0;e<t.g.length;)n=t.g[e],Yn(r,n)||(t.g[i++]=n,r[n]=1),e++;t.g.length=i}}function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}ae=Sn.prototype,ae.setTimeout=function(t){this.P=t},ae.gb=function(t){t=t.target;const e=this.L;e&&3==Qr(t)?e.l():this.Ia(t)},ae.Ia=function(t){try{if(t==this.g)t:{const c=Qr(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||Ke||this.g&&(this.h.h||this.g.ga()||Zr(this.g)))){this.I||4!=c||7==e||un(8==e||0>=u?3:2),Fn(this);var i=this.g.ba();this.N=i;e:if(kn(this)){var n=Zr(this.g);t="";var r=n.length,s=4==Qr(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){jn(this),Bn(this);var o="";break e}this.h.i=new ue.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==r-1});n.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,nn(this.j,this.u,this.A,this.m,this.X,c,i),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Le(a)){var l=a;break e}}l=null}if(!(i=l)){this.i=!1,this.o=3,pn(12),jn(this),Bn(this);break t}rn(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hn(this,i)}this.U?(Pn(this,c,o),Ke&&this.i&&3==c&&(Qi(this.V,this.W,"tick",this.fb),this.W.start())):(rn(this.j,this.m,o,null),Hn(this,o)),4==c&&jn(this),this.i&&!this.I&&(4==c?vs(this.l,this):(this.i=!1,xn(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,pn(12)):(this.o=0,pn(13)),jn(this),Bn(this)}}}catch(c){}},ae.fb=function(){if(this.g){var t=Qr(this.g),e=this.g.ga();this.C<e.length&&(Fn(this),Pn(this,t,e),this.i&&4!=t&&xn(this))}},ae.cancel=function(){this.I=!0,jn(this)},ae.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sn(this.j,this.A),2!=this.K&&(un(3),pn(17)),jn(this),this.o=2,Bn(this)):Un(this,this.Y-t)},ae=zn.prototype,ae.R=function(){Gn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},ae.T=function(){return Gn(this),this.g.concat()},ae.get=function(t,e){return Yn(this.h,t)?this.h[t]:e},ae.set=function(t,e){Yn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},ae.forEach=function(t,e){for(var i=this.T(),n=0;n<i.length;n++){var r=i[n],s=this.get(r);t.call(e,s,r,this)}};var Xn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kn(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),r=null;if(0<=n){var s=t[i].substring(0,n);r=t[i].substring(n+1)}else s=t[i];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Wn){this.g=void 0!==e?e:t.g,Jn(this,t.j),this.s=t.s,Qn(this,t.i),Zn(this,t.m),this.l=t.l,e=t.h;var i=new pr;i.i=e.i,e.g&&(i.g=new zn(e.g),i.h=e.h),tr(this,i),this.o=t.o}else t&&(i=String(t).match(Xn))?(this.g=!!e,Jn(this,i[1]||"",!0),this.s=sr(i[2]||""),Qn(this,i[3]||"",!0),Zn(this,i[4]),this.l=sr(i[5]||"",!0),tr(this,i[6]||"",!0),this.o=sr(i[7]||"")):(this.g=!!e,this.h=new pr(null,this.g))}function qn(t){return new Wn(t)}function Jn(t,e,i){t.j=i?sr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qn(t,e,i){t.i=i?sr(e,!0):e}function Zn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tr(t,e,i){e instanceof pr?(t.h=e,Er(t.h,t.g)):(i||(e=or(e,ur)),t.h=new pr(e,t.g))}function er(t,e,i){t.h.set(e,i)}function ir(t){return er(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nr(t){return t instanceof Wn?qn(t):new Wn(t,void 0)}function rr(t,e,i,n){var r=new Wn(null,void 0);return t&&Jn(r,t),e&&Qn(r,e),i&&Zn(r,i),n&&(r.l=n),r}function sr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function or(t,e,i){return"string"===typeof t?(t=encodeURI(t).replace(e,ar),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ar(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(or(e,hr,!0),":");var i=this.i;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(or(e,hr,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.m,null!=i&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(or(i,"/"==i.charAt(0)?cr:lr,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",or(i,fr)),t.join("")};var hr=/[#\/\?@]/g,lr=/[#\?:]/g,cr=/[#\?]/g,ur=/[#\?@]/g,fr=/#/g;function pr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new zn,t.h=0,t.i&&Kn(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function dr(t,e){gr(t),e=vr(t,e),Yn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Yn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Gn(t)))}function mr(t,e){return gr(t),e=vr(t,e),Yn(t.g.h,e)}function yr(t,e,i){dr(t,e),0<i.length&&(t.i=null,t.g.set(vr(t,e),Ne(i)),t.h+=i.length)}function vr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Er(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(dr(this,e),yr(this,i,t))}),t)),t.j=e}ae=pr.prototype,ae.add=function(t,e){gr(this),this.i=null,t=vr(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},ae.forEach=function(t,e){gr(this),this.g.forEach((function(i,n){Ce(i,(function(i){t.call(e,i,n,this)}),this)}),this)},ae.T=function(){gr(this);for(var t=this.g.R(),e=this.g.T(),i=[],n=0;n<e.length;n++)for(var r=t[n],s=0;s<r.length;s++)i.push(e[n]);return i},ae.R=function(t){gr(this);var e=[];if("string"===typeof t)mr(this,t)&&(e=De(e,this.g.get(vr(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)e=De(e,t[i])}return e},ae.set=function(t,e){return gr(this),this.i=null,t=vr(this,t),mr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ae.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},ae.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),i=0;i<e.length;i++){var n=e[i],r=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var o=r;""!==n[s]&&(o+="="+encodeURIComponent(String(n[s]))),t.push(o)}}return this.i=t.join("&")};var br=class{constructor(t,e){this.h=t,this.g=e}};function Tr(t){this.l=t||Ar,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(ue.g&&ue.g.Ea&&ue.g.Ea()&&ue.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ar=10;function wr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ir(t){return t.h?1:t.g?t.g.size:0}function _r(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Sr(t,e){t.g?t.g.add(e):t.h=e}function Cr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Rr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return Ne(t.i)}function Dr(){}function Nr(){this.g=new Dr}function Lr(t,e,i){const n=i||"";try{$n(t,(function(t,i){let r=t;ge(t)&&(r=ki(t)),e.push(n+i+"="+encodeURIComponent(r))}))}catch(r){throw e.push(n+"type="+encodeURIComponent("_badmap")),r}}function Or(t,e){const i=new tn;if(ue.Image){const n=new Image;n.onload=Te(kr,i,n,"TestLoadImage: loaded",!0,e),n.onerror=Te(kr,i,n,"TestLoadImage: error",!1,e),n.onabort=Te(kr,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=Te(kr,i,n,"TestLoadImage: timeout",!1,e),ue.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}function kr(t,e,i,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch(s){}}function Pr(t){this.l=t.$b||null,this.j=t.ib||!1}function Mr(t,e){Ni.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tr.prototype.cancel=function(){if(this.i=Rr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Dr.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)},Dr.prototype.parse=function(t){return ue.JSON.parse(t,void 0)},Ae(Pr,vn),Pr.prototype.g=function(){return new Mr(this.l,this.j)},Pr.prototype.i=function(t){return function(){return t}}({}),Ae(Mr,Ni);var xr=0;function Ur(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Br(t)}function Br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}ae=Mr.prototype,ae.open=function(t,e){if(this.readyState!=xr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Br(this)},ae.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ue).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},ae.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fr(this)),this.readyState=xr},ae.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof ue.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ur(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},ae.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fr(this):Br(this),3==this.readyState&&Ur(this)}},ae.Ua=function(t){this.g&&(this.response=this.responseText=t,Fr(this))},ae.Ta=function(t){this.g&&(this.response=t,Fr(this))},ae.ha=function(){this.g&&Fr(this)},ae.setRequestHeader=function(t,e){this.v.append(t,e)},ae.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ae.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jr=ue.JSON.parse;function Hr(t){Ni.call(this),this.headers=new zn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vr,this.K=this.L=!1}Ae(Hr,Ni);var Vr="",$r=/^https?$/i,zr=["POST","PUT"];function Gr(t){return Ye&&ni()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Yr(t){return"content-type"==t.toLowerCase()}function Xr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kr(t),qr(t)}function Kr(t){t.D||(t.D=!0,Li(t,"complete"),Li(t,"error"))}function Wr(t){if(t.h&&"undefined"!=typeof ce&&(!t.C[1]||4!=Qr(t)||2!=t.ba()))if(t.v&&4==Qr(t))Xi(t.Fa,0,t);else if(Li(t,"readystatechange"),4==Qr(t)){t.h=!1;try{const h=t.ba();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===h){var r=String(t.H).match(Xn)[1]||null;if(!r&&ue.self&&ue.self.location){var s=ue.self.location.protocol;r=s.substr(0,s.length-1)}n=!$r.test(r?r.toLowerCase():"")}i=n}if(i)Li(t,"complete"),Li(t,"success");else{t.m=6;try{var o=2<Qr(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Kr(t)}}finally{qr(t)}}}function qr(t,e){if(t.g){Jr(t);const n=t.g,r=t.C[0]?fe:null;t.g=null,t.C=null,e||Li(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Jr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function Qr(t){return t.g?t.g.readyState:0}function Zr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ts(t){let e="";return Fe(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function es(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=ts(i),"string"===typeof t?null!=i&&encodeURIComponent(String(i)):er(t,e,i))}function is(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function ns(t){this.za=0,this.l=[],this.h=new tn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=is("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=is("baseRetryDelayMs",5e3,t),this.$a=is("retryDelaySeedMs",1e4,t),this.Ya=is("forwardChannelMaxRetries",2,t),this.ra=is("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Tr(t&&t.concurrentRequestLimit),this.Ca=new Nr,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function rs(t){if(os(t),3==t.G){var e=t.V++,i=qn(t.F);er(i,"SID",t.J),er(i,"RID",e),er(i,"TYPE","terminate"),us(t,i),e=new Sn(t,t.h,e,void 0),e.K=2,e.v=ir(qn(i)),i=!1,ue.navigator&&ue.navigator.sendBeacon&&(i=ue.navigator.sendBeacon(e.v.toString(),"")),!i&&ue.Image&&((new Image).src=e.v,i=!0),i||(e.g=ws(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xn(e)}Ts(t)}function ss(t){t.g&&(ds(t),t.g.cancel(),t.g=null)}function os(t){ss(t),t.u&&(ue.clearTimeout(t.u),t.u=null),ys(t),t.i.cancel(),t.m&&("number"===typeof t.m&&ue.clearTimeout(t.m),t.m=null)}function as(t,e){t.l.push(new br(t.Za++,e)),3==t.G&&hs(t)}function hs(t){wr(t.i)||t.m||(t.m=!0,ji(t.Ha,t),t.C=0)}function ls(t,e){return!(Ir(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=dn(be(t.Ha,t,e),Es(t,t.C)),t.C++,!0))}function cs(t,e){var i;i=e?e.m:t.V++;const n=qn(t.F);er(n,"SID",t.J),er(n,"RID",i),er(n,"AID",t.U),us(t,n),t.o&&t.s&&es(n,t.o,t.s),i=new Sn(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fs(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sr(t.i,i),Ln(i,n,e)}function us(t,e){t.j&&$n({},(function(t,i){er(e,i,t)}))}function fs(t,e,i){i=Math.min(t.l.length,i);var n=t.j?be(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<i;o++){let i=r[o].h;const a=r[o].g;if(i-=e,0>i)e=Math.max(0,r[o].h-100),s=!1;else try{Lr(a,t,"req"+i+"_")}catch(Bs){n&&n(a)}}if(s){n=t.join("&");break t}}}return t=t.l.splice(0,i),e.D=t,n}function ps(t){t.g||t.u||(t.Y=1,ji(t.Ga,t),t.A=0)}function gs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=dn(be(t.Ga,t),Es(t,t.A)),t.A++,!0)}function ds(t){null!=t.B&&(ue.clearTimeout(t.B),t.B=null)}function ms(t){t.g=new Sn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=qn(t.oa);er(e,"RID","rpc"),er(e,"SID",t.J),er(e,"CI",t.N?"0":"1"),er(e,"AID",t.U),us(t,e),er(e,"TYPE","xmlhttp"),t.o&&t.s&&es(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=ir(qn(e)),i.s=null,i.U=!0,On(i,t)}function ys(t){null!=t.v&&(ue.clearTimeout(t.v),t.v=null)}function vs(t,e){var i=null;if(t.g==e){ys(t),ds(t),t.g=null;var n=2}else{if(!_r(t.i,e))return;i=e.D,Cr(t.i,e),n=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;n=ln(),Li(n,new gn(n,i,e,r)),hs(t)}else ps(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==n&&ls(t,e)||2==n&&gs(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),r){case 1:bs(t,5);break;case 4:bs(t,10);break;case 3:bs(t,6);break;default:bs(t,2)}}function Es(t,e){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*e}function bs(t,e){if(t.h.info("Error code "+e),2==e){var i=null;t.j&&(i=null);var n=be(t.jb,t);i||(i=new Wn("//www.google.com/images/cleardot.gif"),ue.location&&"http"==ue.location.protocol||Jn(i,"https"),ir(i)),Or(i.toString(),n)}else pn(2);t.G=0,t.j&&t.j.va(e),Ts(t),os(t)}function Ts(t){t.G=0,t.I=-1,t.j&&(0==Rr(t.i).length&&0==t.l.length||(t.i.i.length=0,Ne(t.l),t.l.length=0),t.j.ua())}function As(t,e,i){let n=nr(i);if(""!=n.i)e&&Qn(n,e+"."+n.i),Zn(n,n.m);else{const t=ue.location;n=rr(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&Fe(t.aa,(function(t,e){er(n,e,t)})),e=t.D,i=t.sa,e&&i&&er(n,e,i),er(n,"VER",t.ma),us(t,n),n}function ws(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=i&&t.Ba&&!t.qa?new Hr(new Pr({ib:!0})):new Hr(t.qa),e.L=t.H,e}function Is(){}function _s(){if(Ye&&!(10<=Number(si)))throw Error("Environmental error: no available transport.")}function Ss(t,e){Ni.call(this),this.g=new ns(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Le(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Le(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ds(this)}function Cs(t){wn.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Rs(){In.call(this),this.status=1}function Ds(t){this.g=t}ae=Hr.prototype,ae.ea=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tn.g(),this.C=this.u?En(this.u):En(Tn),this.g.onreadystatechange=be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Xr(this,s)}t=i||"";const r=new zn(this.headers);n&&$n(n,(function(t,e){r.set(e,t)})),n=Re(r.T()),i=ue.FormData&&t instanceof ue.FormData,!(0<=Se(zr,e))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jr(this),0<this.B&&((this.K=Gr(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.pa,this)):this.A=Xi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xr(this,s)}},ae.pa=function(){"undefined"!=typeof ce&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Li(this,"timeout"),this.abort(8))},ae.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Li(this,"complete"),Li(this,"abort"),qr(this))},ae.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qr(this,!0)),Hr.Z.M.call(this)},ae.Fa=function(){this.s||(this.F||this.v||this.l?Wr(this):this.cb())},ae.cb=function(){Wr(this)},ae.ba=function(){try{return 2<Qr(this)?this.g.status:-1}catch(t){return-1}},ae.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ae.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jr(e)}},ae.Da=function(){return this.m},ae.La=function(){return"string"===typeof this.j?this.j:String(this.j)},ae=ns.prototype,ae.ma=8,ae.G=1,ae.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},ae.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Sn(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Be(s),He(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,i=0;i<this.l.length;i++){var n=this.l[i];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(e+=n,4096<e){e=i;break t}if(4096===e||i===this.l.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=fs(this,r,e),i=qn(this.F),er(i,"RID",t),er(i,"CVER",22),this.D&&er(i,"X-HTTP-Session-Id",this.D),us(this,i),this.o&&s&&es(i,this.o,s),Sr(this.i,r),this.Ra&&er(i,"TYPE","init"),this.ja?(er(i,"$req",e),er(i,"SID","null"),r.$=!0,Ln(r,i,null)):Ln(r,i,e),this.G=2}}else 3==this.G&&(t?cs(this,t):0==this.l.length||wr(this.i)||cs(this))},ae.Ga=function(){if(this.u=null,ms(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=dn(be(this.bb,this),t)}},ae.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pn(10),ss(this),ms(this))},ae.ab=function(){null!=this.v&&(this.v=null,ss(this),gs(this),pn(19))},ae.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pn(2)):(this.h.info("Failed to ping google.com"),pn(1))},ae=Is.prototype,ae.xa=function(){},ae.wa=function(){},ae.va=function(){},ae.ua=function(){},ae.Oa=function(){},_s.prototype.g=function(t,e){return new Ss(t,e)},Ae(Ss,Ni),Ss.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ji(be(t.hb,t,e))),pn(0),t.W=e,t.aa=i||{},t.N=t.X,t.F=As(t,null,t.W),hs(t)},Ss.prototype.close=function(){rs(this.g)},Ss.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,as(this.g,e)}else this.v?(e={},e.__data__=ki(t),as(this.g,e)):as(this.g,t)},Ss.prototype.M=function(){this.g.j=null,delete this.j,rs(this.g),delete this.g,Ss.Z.M.call(this)},Ae(Cs,wn),Ae(Rs,In),Ae(Ds,Is),Ds.prototype.xa=function(){Li(this.g,"a")},Ds.prototype.wa=function(t){Li(this.g,new Cs(t))},Ds.prototype.va=function(t){Li(this.g,new Rs(t))},Ds.prototype.ua=function(){Li(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,Ss.prototype.send=Ss.prototype.u,Ss.prototype.open=Ss.prototype.m,Ss.prototype.close=Ss.prototype.close,mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,yn.COMPLETE="complete",bn.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",Ni.prototype.listen=Ni.prototype.N,Hr.prototype.listenOnce=Hr.prototype.O,Hr.prototype.getLastError=Hr.prototype.La,Hr.prototype.getLastErrorCode=Hr.prototype.Da,Hr.prototype.getStatus=Hr.prototype.ba,Hr.prototype.getResponseJson=Hr.prototype.Qa,Hr.prototype.getResponseText=Hr.prototype.ga,Hr.prototype.send=Hr.prototype.ea;le.createWebChannelTransport=function(){return new _s},le.getStatEventTarget=function(){return ln()},le.ErrorCode=mn,le.EventType=yn,le.Event=an,le.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},le.FetchXmlHttpFactory=Pr,le.WebChannel=bn,le.XhrIo=Hr;const Ns="@firebase/firestore";
/**
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
 */class Ls{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ls.UNAUTHENTICATED=new Ls(null),Ls.GOOGLE_CREDENTIALS=new Ls("google-credentials-uid"),Ls.FIRST_PARTY=new Ls("first-party-uid"),Ls.MOCK_USER=new Ls("mock-user");
/**
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
 */
let Os="9.8.0";
/**
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
 */const ks=new L("@firebase/firestore");function Ps(t,...e){if(ks.logLevel<=S.DEBUG){const i=e.map(xs);ks.debug(`Firestore (${Os}): ${t}`,...i)}}function Ms(t,...e){if(ks.logLevel<=S.ERROR){const i=e.map(xs);ks.error(`Firestore (${Os}): ${t}`,...i)}}function xs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function Us(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Ms(e),new Error(e)}function Fs(t,e){t||Us()}
/**
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
 */
const Bs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class js extends p{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Hs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Vs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $s{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ls.UNAUTHENTICATED)))}shutdown(){}}class zs{constructor(t){this.t=t,this.currentUser=Ls.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let r=new Hs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hs,t.enqueueRetryable((()=>n(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},o=t=>{Ps("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ps("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hs)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ps("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fs("string"==typeof e.accessToken),new Vs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fs(null===t||"string"==typeof t),new Ls(t)}}class Gs{constructor(t,e,i){this.type="FirstParty",this.user=Ls.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const n=t.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Ys{constructor(t,e,i){this.h=t,this.l=e,this.m=i}getToken(){return Promise.resolve(new Gs(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ls.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ks{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const i=t=>{null!=t.error&&Ps("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.p;return this.p=t.token,Ps("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{Ps("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):Ps("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fs("string"==typeof t.token),this.p=t.token,new Xs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
class Ws{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
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
 */function qs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let n=0;n<t;n++)i[n]=Math.floor(256*Math.random());return i}
/**
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
 */Ws.A=-1;class Js{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=qs(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<e&&(i+=t.charAt(n[r]%t.length))}return i}}function Qs(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class Zs{constructor(t,e,i){void 0===e?e=0:e>t.length&&Us(),void 0===i?i=t.length-e:i>t.length-e&&Us(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===Zs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),r=e.get(n);if(i<r)return-1;if(i>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class to extends Zs{construct(t,e,i){return new to(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new js(Bs.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new to(e)}static emptyPath(){return new to([])}}
/**
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
 */
class eo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new eo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new eo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Qs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}eo.EMPTY_BYTE_STRING=new eo("");function io(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function no(t){return"string"==typeof t?eo.fromBase64String(t):eo.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class ro{constructor(t,e,i,n,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class so{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof so&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */function oo(t){return 0===t&&1/t==-1/0}
/**
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
 */
class ao{constructor(t){this.path=t}static fromPath(t){return new ao(to.fromString(t))}static fromName(t){return new ao(to.fromString(t).popFirst(5))}static empty(){return new ao(to.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===to.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return to.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ao(new to(t.slice()))}}
/**
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
 */function ho(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}class lo{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}lo.UNKNOWN_ID=-1;
/**
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
 */
class co{constructor(t,e){this.comparator=t,this.root=e||fo.EMPTY}insert(t,e){return new co(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fo.BLACK,null,null))}remove(t){return new co(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new uo(this.root,t,this.comparator,!0)}}class uo{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&n&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fo{constructor(t,e,i,n,r){this.key=t,this.value=e,this.color=null!=i?i:fo.RED,this.left=null!=n?n:fo.EMPTY,this.right=null!=r?r:fo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,r){return new fo(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const r=i(t,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return fo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return fo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Us();if(this.right.isRed())throw Us();const t=this.left.check();if(t!==this.right.check())throw Us();return t+(this.isRed()?0:1)}}fo.EMPTY=null,fo.RED=!0,fo.BLACK=!1,fo.EMPTY=new class{constructor(){this.size=0}get key(){throw Us()}get value(){throw Us()}get color(){throw Us()}get left(){throw Us()}get right(){throw Us()}copy(t,e,i,n,r){return this}insert(t,e,i){return new fo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class po{constructor(t){this.comparator=t,this.data=new co(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new go(this.data.getIterator())}getIteratorFrom(t){return new go(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof po))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new po(this.comparator);return e.data=t,e}}class go{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
var mo,yo;(yo=mo||(mo={}))[yo.OK=0]="OK",yo[yo.CANCELLED=1]="CANCELLED",yo[yo.UNKNOWN=2]="UNKNOWN",yo[yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yo[yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yo[yo.NOT_FOUND=5]="NOT_FOUND",yo[yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",yo[yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",yo[yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",yo[yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yo[yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yo[yo.ABORTED=10]="ABORTED",yo[yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",yo[yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",yo[yo.INTERNAL=13]="INTERNAL",yo[yo.UNAVAILABLE=14]="UNAVAILABLE",yo[yo.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new co(ao.comparator);new co(ao.comparator);new co(ao.comparator),new po(ao.comparator);new po(Qs);
/**
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
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();const vo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Eo=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"];
/**
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
 */function bo(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */class To{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(io(t.integerValue));else if("doubleValue"in t){const i=io(t.doubleValue);isNaN(i)?this.ne(e,13):(this.ne(e,15),oo(i)?e.se(0):e.se(i))}else if("timestampValue"in t){const i=t.timestampValue;this.ne(e,20),"string"==typeof i?e.ie(i):(e.ie(`${i.seconds||""}`),e.se(i.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(no(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.ne(e,45),e.se(i.latitude||0),e.se(i.longitude||0)}else"mapValue"in t?ho(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Us()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const i=t.fields||{};this.ne(e,55);for(const n of Object.keys(i))this.re(n,e),this.te(i[n],e)}he(t,e){const i=t.values||[];this.ne(e,50);for(const n of i)this.te(n,e)}ae(t,e){this.ne(e,37),ao.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}To.fe=new To;
/**
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
 */
new Uint8Array(0);class Ao{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new Ao(t,Ao.DEFAULT_COLLECTION_PERCENTILE,Ao.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Ao.DEFAULT_COLLECTION_PERCENTILE=10,Ao.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ao.DEFAULT=new Ao(41943040,Ao.DEFAULT_COLLECTION_PERCENTILE,Ao.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ao.DISABLED=new Ao(-1,0,0);function wo(){return"undefined"!=typeof document?document:null}
/**
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
 */class Io{constructor(t,e,i=1e3,n=1.5,r=6e4){this.Yn=t,this.timerId=e,this.mo=i,this.yo=n,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),n=Math.max(0,e-i);n>0&&Ps("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,n,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */
/**
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
 */
class _o{constructor(t,e,i,n,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new Hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,i,n,r){const s=Date.now()+i,o=new _o(t,e,s,n,r);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new js(Bs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(t,e){if(Ms("AsyncQueue",`${e}: ${t}`),bo(t))return new js(Bs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class Co{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=Ls.UNAUTHENTICATED,this.clientId=Js.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{Ps("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(Ps("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=So(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}const Ro=new Map;
/**
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
 */function Do(t,e,i,n){if(!0===e&&!0===n)throw new js(Bs.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}
/**
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
 */
class No{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new js(Bs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new js(Bs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Do("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Lo{constructor(t,e,i){this._authCredentials=e,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1,t instanceof so?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new js(Bs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(t.options.projectId)}(t))}get app(){if(!this._app)throw new js(Bs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new js(Bs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new $s;switch(t.type){case"gapi":const e=t.client;return Fs(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ys(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new js(Bs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ro.get(t);e&&(Ps("ComponentProvider","Removing Datastore"),Ro.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Oo{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Io(this,"async_queue_retry"),this.Qa=()=>{const t=wo();t&&Ps("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=wo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=wo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new Hs;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(Ae){if(!bo(Ae))throw Ae;Ps("AsyncQueue","Operation failed with retryable error: "+Ae)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Ms("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,i){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const n=_o.createAndSchedule(this,t,e,i,(t=>this.Ha(t)));return this.La.push(n),n}ja(){this.Ua&&Us()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}}class ko extends Lo{constructor(t,e,i){super(t,e,i),this.type="firestore",this._queue=new Oo,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Mo(this),this._firestoreClient.terminate()}}function Po(t=$t()){return Ut(t,"firestore").getImmediate()}function Mo(t){var e;const i=t._freezeSettings(),n=function(t,e,i,n){return new ro(t,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Co(t._authCredentials,t._appCheckCredentials,t._queue,n)}!function(t,e=!0){!function(t){Os=t}(Ht),xt(new E("firestore",((t,{options:i})=>{const n=t.getProvider("app").getImmediate(),r=new ko(n,new zs(t.getProvider("auth-internal")),new Ks(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC")),zt(Ns,"3.4.9",t),zt(Ns,"3.4.9","esm2017")}();var xo="firebase",Uo="9.8.2";
/**
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
 */
zt(xo,Uo,"app");const Fo={apiKey:"AIzaSyBlIcYNzJaj_7xUYFvOeRcoM1t5I7m2Pi4",authDomain:"moritwo-e4950.firebaseapp.com",projectId:"moritwo-e4950",storageBucket:"moritwo-e4950.appspot.com",messagingSenderId:"1084970001761",appId:"1:1084970001761:web:dcefb189c38639306c5120"};Vt(Fo),Po();const Bo={class:"about"},jo=(0,n._)("h1",null,"This is an about page",-1),Ho=[jo];var Vo={name:"AboutView",setup(t){return(t,e)=>((0,n.wg)(),(0,n.iD)("div",Bo,Ho))}};const $o=Vo;var zo=$o}}]);
//# sourceMappingURL=about.40c55ad1.js.map