require("./baseexternalclient.eb7653ba.js");
require("./util.938bbce0.js");
require("./filesubjecttokensupplier.93b7b279.js");
require("./urlsubjecttokensupplier.6cac7a18.js");


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
// Copyright 2021 Google LLC
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
module.exports.IdentityPoolClient = void 0;

var $kW196 = parcelRequire("kW196");

var $4ZmfA = parcelRequire("4ZmfA");
var $aad045204340b929$exports = {};
$aad045204340b929$exports = new URL("filesubjecttokensupplier.93b7b279.js", "file:" + __filename).toString();


var $f7025285bc678dda$exports = {};
$f7025285bc678dda$exports = new URL("urlsubjecttokensupplier.6cac7a18.js", "file:" + __filename).toString();


/**
 * Defines the Url-sourced and file-sourced external account clients mainly
 * used for K8s and Azure workloads.
 */ class $5cd55fa268b715fc$var$IdentityPoolClient extends $kW196.BaseExternalAccountClient {
    /**
     * Instantiate an IdentityPoolClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * An error is thrown if the credential is not a valid file-sourced or
     * url-sourced credential or a workforce pool user project is provided
     * with a non workforce audience.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file. The camelCased options
     *   are aliases for the snake_cased options.
     * @param additionalOptions **DEPRECATED, all options are available in the
     *   `options` parameter.** Optional additional behavior customization options.
     *   These currently customize expiration threshold time and whether to retry
     *   on 401/403 API request errors.
     */ constructor(options, additionalOptions){
        super(options, additionalOptions);
        const opts = (0, $4ZmfA.originalOrCamelOptions)(options);
        const credentialSource = opts.get('credential_source');
        const subjectTokenSupplier = opts.get('subject_token_supplier');
        // Validate credential sourcing configuration.
        if (!credentialSource && !subjectTokenSupplier) throw new Error('A credential source or subject token supplier must be specified.');
        if (credentialSource && subjectTokenSupplier) throw new Error('Only one of credential source or subject token supplier can be specified.');
        if (subjectTokenSupplier) {
            this.subjectTokenSupplier = subjectTokenSupplier;
            this.credentialSourceType = 'programmatic';
        } else {
            const credentialSourceOpts = (0, $4ZmfA.originalOrCamelOptions)(credentialSource);
            const formatOpts = (0, $4ZmfA.originalOrCamelOptions)(credentialSourceOpts.get('format'));
            // Text is the default format type.
            const formatType = formatOpts.get('type') || 'text';
            const formatSubjectTokenFieldName = formatOpts.get('subject_token_field_name');
            if (formatType !== 'json' && formatType !== 'text') throw new Error(`Invalid credential_source format "${formatType}"`);
            if (formatType === 'json' && !formatSubjectTokenFieldName) throw new Error('Missing subject_token_field_name for JSON credential_source format');
            const file = credentialSourceOpts.get('file');
            const url = credentialSourceOpts.get('url');
            const headers = credentialSourceOpts.get('headers');
            if (file && url) throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
            else if (file && !url) {
                this.credentialSourceType = 'file';
                this.subjectTokenSupplier = new $aad045204340b929$exports.FileSubjectTokenSupplier({
                    filePath: file,
                    formatType: formatType,
                    subjectTokenFieldName: formatSubjectTokenFieldName
                });
            } else if (!file && url) {
                this.credentialSourceType = 'url';
                this.subjectTokenSupplier = new $f7025285bc678dda$exports.UrlSubjectTokenSupplier({
                    url: url,
                    formatType: formatType,
                    subjectTokenFieldName: formatSubjectTokenFieldName,
                    headers: headers,
                    additionalGaxiosOptions: $5cd55fa268b715fc$var$IdentityPoolClient.RETRY_CONFIG
                });
            } else throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
        }
    }
    /**
     * Triggered when a external subject token is needed to be exchanged for a GCP
     * access token via GCP STS endpoint. Gets a subject token by calling
     * the configured {@link SubjectTokenSupplier}
     * @return A promise that resolves with the external subject token.
     */ async retrieveSubjectToken() {
        return this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
    }
}
module.exports.IdentityPoolClient = $5cd55fa268b715fc$var$IdentityPoolClient;


