/**
 * @license
 * Copyright 2020 Google LLC
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
 */Object.defineProperty(module.exports,"__esModule",{value:!0}),module.exports.TeenyStatistics=module.exports.TeenyStatisticsWarning=void 0;class e extends Error{constructor(e){super(e),this.threshold=0,this.type="",this.value=0,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}module.exports.TeenyStatisticsWarning=e,e.CONCURRENT_REQUESTS="ConcurrentRequestsExceededWarning";class t{constructor(e){this._concurrentRequests=0,this._didConcurrentRequestWarn=!1,this._options=t._prepareOptions(e)}getOptions(){return Object.assign({},this._options)}setOptions(e){let s=this._options;return this._options=t._prepareOptions(e),s}get counters(){return{concurrentRequests:this._concurrentRequests}}requestStarting(){if(this._concurrentRequests++,this._options.concurrentRequests>0&&this._concurrentRequests>=this._options.concurrentRequests&&!this._didConcurrentRequestWarn){this._didConcurrentRequestWarn=!0;let t=new e("Possible excessive concurrent requests detected. "+this._concurrentRequests+" requests in-flight, which exceeds the configured threshold of "+this._options.concurrentRequests+". Use the TEENY_REQUEST_WARN_CONCURRENT_REQUESTS environment variable or the concurrentRequests option of teeny-request to increase or disable (0) this warning.");t.type=e.CONCURRENT_REQUESTS,t.value=this._concurrentRequests,t.threshold=this._options.concurrentRequests,process.emitWarning(t)}}requestFinished(){this._concurrentRequests--}static _prepareOptions({concurrentRequests:e}={}){let t=this.DEFAULT_WARN_CONCURRENT_REQUESTS,s=Number(process.env.TEENY_REQUEST_WARN_CONCURRENT_REQUESTS);return void 0!==e?t=e:Number.isNaN(s)||(t=s),{concurrentRequests:t}}}module.exports.TeenyStatistics=t,t.DEFAULT_WARN_CONCURRENT_REQUESTS=5e3;