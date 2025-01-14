var e=require("stream");/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */Object.defineProperty(module.exports,"__esModule",{value:!0}),module.exports.ResourceStream=void 0;class s extends e.Transform{constructor(e,s){super(Object.assign({objectMode:!0},e.streamOptions)),this._ended=!1,this._maxApiCalls=-1===e.maxApiCalls?1/0:e.maxApiCalls,this._nextQuery=e.query,this._reading=!1,this._requestFn=s,this._requestsMade=0,this._resultsToSend=-1===e.maxResults?1/0:e.maxResults,this._otherArgs=[]}end(...e){return this._ended=!0,super.end(...e)}_read(){if(!this._reading){this._reading=!0;try{this._requestFn(this._nextQuery,(e,s,t,...r)=>{if(e){this.destroy(e);return}this._otherArgs=r,this._nextQuery=t,this._resultsToSend!==1/0&&(s=s.splice(0,this._resultsToSend),this._resultsToSend-=s.length);let i=!0;for(let e of s){if(this._ended)break;i=this.push(e)}let d=!this._nextQuery||this._resultsToSend<1,h=++this._requestsMade>=this._maxApiCalls;(d||h)&&this.end(),i&&!this._ended&&setImmediate(()=>this._read()),this._reading=!1})}catch(e){this.destroy(e)}}}}module.exports.ResourceStream=s;