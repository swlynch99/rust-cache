require("./build.b127b0e3.js");
require("./transporters.57f9aa4b.js");
require("./util.938bbce0.js");
var $irsUV$events = require("events");


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
// Copyright 2012 Google LLC
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
module.exports.AuthClient = module.exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = module.exports.DEFAULT_UNIVERSE = void 0;


var $XskYs = parcelRequire("XskYs");

var $kjYG3 = parcelRequire("kjYG3");
var $bd07cc826011776a$exports = {};
$bd07cc826011776a$exports = new URL("util.938bbce0.js", "file:" + __filename).toString();


/**
 * The default cloud universe
 *
 * @see {@link AuthJSONOptions.universe_domain}
 */ module.exports.DEFAULT_UNIVERSE = 'googleapis.com';
/**
 * The default {@link AuthClientOptions.eagerRefreshThresholdMillis}
 */ module.exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;
class $b0d57e7afc003bca$var$AuthClient extends $irsUV$events.EventEmitter {
    constructor(opts = {}){
        var _a, _b, _c, _d, _e;
        super();
        this.credentials = {};
        this.eagerRefreshThresholdMillis = module.exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
        this.forceRefreshOnFailure = false;
        this.universeDomain = module.exports.DEFAULT_UNIVERSE;
        const options = (0, $bd07cc826011776a$exports.originalOrCamelOptions)(opts);
        // Shared auth options
        this.apiKey = opts.apiKey;
        this.projectId = (_a = options.get('project_id')) !== null && _a !== void 0 ? _a : null;
        this.quotaProjectId = options.get('quota_project_id');
        this.credentials = (_b = options.get('credentials')) !== null && _b !== void 0 ? _b : {};
        this.universeDomain = (_c = options.get('universe_domain')) !== null && _c !== void 0 ? _c : module.exports.DEFAULT_UNIVERSE;
        // Shared client options
        this.transporter = (_d = opts.transporter) !== null && _d !== void 0 ? _d : new $kjYG3.DefaultTransporter();
        if (opts.transporterOptions) this.transporter.defaults = opts.transporterOptions;
        if (opts.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = opts.eagerRefreshThresholdMillis;
        this.forceRefreshOnFailure = (_e = opts.forceRefreshOnFailure) !== null && _e !== void 0 ? _e : false;
    }
    /**
     * Return the {@link Gaxios `Gaxios`} instance from the {@link AuthClient.transporter}.
     *
     * @expiremental
     */ get gaxios() {
        if (this.transporter instanceof $XskYs.Gaxios) return this.transporter;
        else if (this.transporter instanceof $kjYG3.DefaultTransporter) return this.transporter.instance;
        else if ('instance' in this.transporter && this.transporter.instance instanceof $XskYs.Gaxios) return this.transporter.instance;
        return null;
    }
    /**
     * Sets the auth credentials.
     */ setCredentials(credentials) {
        this.credentials = credentials;
    }
    /**
     * Append additional headers, e.g., x-goog-user-project, shared across the
     * classes inheriting AuthClient. This method should be used by any method
     * that overrides getRequestMetadataAsync(), which is a shared helper for
     * setting request information in both gRPC and HTTP API calls.
     *
     * @param headers object to append additional headers to.
     */ addSharedMetadataHeaders(headers) {
        // quota_project_id, stored in application_default_credentials.json, is set in
        // the x-goog-user-project header, to indicate an alternate account for
        // billing and quota:
        if (!headers['x-goog-user-project'] && // don't override a value the user sets.
        this.quotaProjectId) headers['x-goog-user-project'] = this.quotaProjectId;
        return headers;
    }
    /**
     * Retry config for Auth-related requests.
     *
     * @remarks
     *
     * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
     * config as some downstream APIs would prefer if customers explicitly enable retries,
     * such as GCS.
     */ static get RETRY_CONFIG() {
        return {
            retry: true,
            retryConfig: {
                httpMethodsToRetry: [
                    'GET',
                    'PUT',
                    'POST',
                    'HEAD',
                    'OPTIONS',
                    'DELETE'
                ]
            }
        };
    }
}
module.exports.AuthClient = $b0d57e7afc003bca$var$AuthClient;


