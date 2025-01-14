require("./build.da41aa52.js");
require("./options.17c7ae8f.js");
require("./package.be6bd7cd.js");


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
module.exports.DefaultTransporter = void 0;

var $47hCt = parcelRequire("47hCt");
var $55c339c0fb789716$exports = {};
$55c339c0fb789716$exports = new URL("options.17c7ae8f.js", "file:" + __filename).toString();


var $459582e45d999012$exports = {};
$459582e45d999012$exports = new URL("package.be6bd7cd.js", "file:" + __filename).toString();


const $0f117f4ec7b65bf9$var$PRODUCT_NAME = 'google-api-nodejs-client';
class $0f117f4ec7b65bf9$var$DefaultTransporter {
    constructor(){
        /**
         * A configurable, replacable `Gaxios` instance.
         */ this.instance = new $47hCt.Gaxios();
    }
    /**
     * Configures request options before making a request.
     * @param opts GaxiosOptions options.
     * @return Configured options.
     */ configure(opts = {}) {
        opts.headers = opts.headers || {};
        if (typeof window === 'undefined') {
            // set transporter user agent if not in browser
            const uaValue = opts.headers['User-Agent'];
            if (!uaValue) opts.headers['User-Agent'] = $0f117f4ec7b65bf9$var$DefaultTransporter.USER_AGENT;
            else if (!uaValue.includes(`${$0f117f4ec7b65bf9$var$PRODUCT_NAME}/`)) opts.headers['User-Agent'] = `${uaValue} ${$0f117f4ec7b65bf9$var$DefaultTransporter.USER_AGENT}`;
            // track google-auth-library-nodejs version:
            if (!opts.headers['x-goog-api-client']) {
                const nodeVersion = process.version.replace(/^v/, '');
                opts.headers['x-goog-api-client'] = `gl-node/${nodeVersion}`;
            }
        }
        return opts;
    }
    /**
     * Makes a request using Gaxios with given options.
     * @param opts GaxiosOptions options.
     * @param callback optional callback that contains GaxiosResponse object.
     * @return GaxiosPromise, assuming no callback is passed.
     */ request(opts) {
        // ensure the user isn't passing in request-style options
        opts = this.configure(opts);
        (0, $55c339c0fb789716$exports.validate)(opts);
        return this.instance.request(opts).catch((e)=>{
            throw this.processError(e);
        });
    }
    get defaults() {
        return this.instance.defaults;
    }
    set defaults(opts) {
        this.instance.defaults = opts;
    }
    /**
     * Changes the error to include details from the body.
     */ processError(e) {
        const res = e.response;
        const err = e;
        const body = res ? res.data : null;
        if (res && body && body.error && res.status !== 200) {
            if (typeof body.error === 'string') {
                err.message = body.error;
                err.status = res.status;
            } else if (Array.isArray(body.error.errors)) {
                err.message = body.error.errors.map((err2)=>err2.message).join('\n');
                err.code = body.error.code;
                err.errors = body.error.errors;
            } else {
                err.message = body.error.message;
                err.code = body.error.code;
            }
        } else if (res && res.status >= 400) {
            // Consider all 4xx and 5xx responses errors.
            err.message = body;
            err.status = res.status;
        }
        return err;
    }
}
module.exports.DefaultTransporter = $0f117f4ec7b65bf9$var$DefaultTransporter;
/**
 * Default user agent.
 */ $0f117f4ec7b65bf9$var$DefaultTransporter.USER_AGENT = `${$0f117f4ec7b65bf9$var$PRODUCT_NAME}/${$459582e45d999012$exports.version}`;


//# sourceMappingURL=transporters.b3566606.js.map
