var $cA6z2$stream = require("stream");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.MissingProjectIdError = module.exports.replaceProjectIdToken = void 0;

// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Populate the `{{projectId}}` placeholder.
 *
 * @throws {Error} If a projectId is required, but one is not provided.
 *
 * @param {*} - Any input value that may contain a placeholder. Arrays and objects will be looped.
 * @param {string} projectId - A projectId. If not provided
 * @return {*} - The original argument with all placeholders populated.
 */ // eslint-disable-next-line  @typescript-eslint/no-explicit-any
function $4278191087ed8dc7$var$replaceProjectIdToken(value, projectId) {
    if (Array.isArray(value)) value = value.map((v)=>$4278191087ed8dc7$var$replaceProjectIdToken(v, projectId));
    if (value !== null && typeof value === 'object' && !(value instanceof Buffer) && !(value instanceof $cA6z2$stream.Stream) && typeof value.hasOwnProperty === 'function') {
        for(const opt in value)// eslint-disable-next-line no-prototype-builtins
        if (value.hasOwnProperty(opt)) value[opt] = $4278191087ed8dc7$var$replaceProjectIdToken(value[opt], projectId);
    }
    if (typeof value === 'string' && value.indexOf('{{projectId}}') > -1) {
        if (!projectId || projectId === '{{projectId}}') throw new $4278191087ed8dc7$var$MissingProjectIdError();
        value = value.replace(/{{projectId}}/g, projectId);
    }
    return value;
}
module.exports.replaceProjectIdToken = $4278191087ed8dc7$var$replaceProjectIdToken;
/**
 * Custom error type for missing project ID errors.
 */ class $4278191087ed8dc7$var$MissingProjectIdError extends Error {
    constructor(){
        super(...arguments);
        this.message = `Sorry, we cannot connect to Cloud Services without a project
    ID. You may specify one with an environment variable named
    "GOOGLE_CLOUD_PROJECT".`.replace(/ +/g, ' ');
    }
}
module.exports.MissingProjectIdError = $4278191087ed8dc7$var$MissingProjectIdError; //# sourceMappingURL=index.js.map


