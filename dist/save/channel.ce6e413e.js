require("./nodejs-common.868e4b2b.js");
require("./build.97320181.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
"use strict";
// Copyright 2019 Google LLC
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
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Channel = void 0;

var $c5iBM = parcelRequire("c5iBM");

var $gt46O = parcelRequire("gt46O");
/**
 * Create a channel object to interact with a Cloud Storage channel.
 *
 * See {@link https://cloud.google.com/storage/docs/object-change-notification| Object Change Notification}
 *
 * @class
 *
 * @param {string} id The ID of the channel.
 * @param {string} resourceId The resource ID of the channel.
 *
 * @example
 * ```
 * const {Storage} = require('@google-cloud/storage');
 * const storage = new Storage();
 * const channel = storage.channel('id', 'resource-id');
 * ```
 */ class $d6927ee079f40e1e$var$Channel extends $c5iBM.ServiceObject {
    constructor(storage, id, resourceId){
        const config = {
            parent: storage,
            baseUrl: '/channels',
            // An ID shouldn't be included in the API requests.
            // RE:
            // https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1145
            id: '',
            methods: {
            }
        };
        super(config);
        this.metadata.id = id;
        this.metadata.resourceId = resourceId;
    }
    /**
     * @typedef {array} StopResponse
     * @property {object} 0 The full API response.
     */ /**
     * @callback StopCallback
     * @param {?Error} err Request error, if any.
     * @param {object} apiResponse The full API response.
     */ /**
     * Stop this channel.
     *
     * @param {StopCallback} [callback] Callback function.
     * @returns {Promise<StopResponse>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const channel = storage.channel('id', 'resource-id');
     * channel.stop(function(err, apiResponse) {
     *   if (!err) {
     *     // Channel stopped successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * channel.stop().then(function(data) {
     *   const apiResponse = data[0];
     * });
     * ```
     */ stop(callback) {
        callback = callback || $c5iBM.util.noop;
        this.request({
            method: 'POST',
            uri: '/stop',
            json: this.metadata
        }, (err, apiResponse)=>{
            callback(err, apiResponse);
        });
    }
}
module.exports.Channel = $d6927ee079f40e1e$var$Channel;
/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */ (0, $gt46O.promisifyAll)($d6927ee079f40e1e$var$Channel);


