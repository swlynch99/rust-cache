require("./dist.08f84b1b.js"),require("./dist.414ecab7.js");var e=require("http"),t=require("https"),r=require("url"),o=globalThis,s={},n={},i=o.parcelRequire94c2;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},o.parcelRequire94c2=i);var p=i.register;p("9kKiU",function(e,t){e.exports=new URL("dist.08f84b1b.js","file:"+__filename).toString()}),p("2AaQf",function(e,t){e.exports=new URL("dist.414ecab7.js","file:"+__filename).toString()}),/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(module.exports,"__esModule",{value:!0}),module.exports.getAgent=module.exports.pool=void 0,module.exports.pool=new Map,module.exports.getAgent=function(o,s){let n=o.startsWith("http://"),p=s.proxy||process.env.HTTP_PROXY||process.env.http_proxy||process.env.HTTPS_PROXY||process.env.https_proxy,l=Object.assign({},s.pool),u=!!s.proxy||function(e){let t=process.env.NO_PROXY||process.env.no_proxy;if(!t)return!0;let r=new URL(e);for(let e of t.split(",")){let t=e.trim();if(t===r.origin||t===r.hostname)return!1;if(t.startsWith("*.")||t.startsWith(".")){let e=t.replace(/^\*\./,".");if(r.hostname.endsWith(e))return!1}}return!0}(o);if(p&&u)return new(n?i("9kKiU"):i("2AaQf"))({...(0,r.parse)(p),...l});let a=n?"http":"https";if(s.forever&&(a+=":forever",!module.exports.pool.has(a))){let r=n?e.Agent:t.Agent;module.exports.pool.set(a,new r({...l,keepAlive:!0}))}return module.exports.pool.get(a)};