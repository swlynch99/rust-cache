require("./arrify.d9392ee0.js"),require("./extend.be2ce58e.js"),require("./resource-stream.687adff5.js");var e=globalThis,r={},t={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequire94c2=a),a.register,/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
 */Object.defineProperty(module.exports,"__esModule",{value:!0}),module.exports.ResourceStream=module.exports.paginator=module.exports.Paginator=void 0;var n={};n=new URL("arrify.d9392ee0.js","file:"+__filename).toString();var o=a("b9pZN"),s={};s=new URL("resource-stream.687adff5.js","file:"+__filename).toString(),Object.defineProperty(module.exports,"ResourceStream",{enumerable:!0,get:function(){return s.ResourceStream}});/*! Developer Documentation
 *
 * paginator is used to auto-paginate `nextQuery` methods as well as
 * streamifying them.
 *
 * Before:
 *
 *   search.query('done=true', function(err, results, nextQuery) {
 *     search.query(nextQuery, function(err, results, nextQuery) {});
 *   });
 *
 * After:
 *
 *   search.query('done=true', function(err, results) {});
 *
 * Methods to extend should be written to accept callbacks and return a
 * `nextQuery`.
 */class u{extend(e,r){(r=n(r)).forEach(r=>{let t=e.prototype[r];e.prototype[r+"_"]=t,e.prototype[r]=function(...e){let r=i.parseArguments_(e);return i.run_(r,t.bind(this))}})}streamify(e){return function(...r){let t=i.parseArguments_(r),a=this[e+"_"]||this[e];return i.runAsStream_(t,a.bind(this))}}parseArguments_(e){let r,t;let a=!0,n=-1,s=-1,u=e[0],i=e[e.length-1];"function"==typeof u?t=u:r=u,"function"==typeof i&&(t=i),"object"==typeof r&&((r=o(!0,{},r)).maxResults&&"number"==typeof r.maxResults?s=r.maxResults:"number"==typeof r.pageSize&&(s=r.pageSize),r.maxApiCalls&&"number"==typeof r.maxApiCalls&&(n=r.maxApiCalls,delete r.maxApiCalls),(-1!==s||!1===r.autoPaginate)&&(a=!1));let l={query:r||{},autoPaginate:a,maxApiCalls:n,maxResults:s,callback:t};return l.streamOptions=o(!0,{},l.query),delete l.streamOptions.autoPaginate,delete l.streamOptions.maxResults,delete l.streamOptions.pageSize,l}run_(e,r){let t=e.query,a=e.callback;if(!e.autoPaginate)return r(t,a);let n=[],o=[],s=new Promise((t,a)=>{let s=i.runAsStream_(e,r);s.on("error",a).on("data",e=>n.push(e)).on("end",()=>{o=s._otherArgs||[],t(n)})});if(!a)return s.then(e=>[e,t,...o]);s.then(e=>a(null,e,t,...o),e=>a(e))}runAsStream_(e,r){return new s.ResourceStream(e,r)}}module.exports.Paginator=u;const i=new u;module.exports.paginator=i;