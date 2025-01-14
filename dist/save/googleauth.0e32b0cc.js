require("./build.570a4f39.js");
require("./crypto.d1f27c38.js");
require("./transporters.b3566606.js");
require("./computeclient.d67ad2f4.js");
require("./idtokenclient.204ae37e.js");
require("./envDetect.b7542cf7.js");
require("./jwtclient.e23df61a.js");
require("./refreshclient.f245d78a.js");
require("./impersonated.761437d1.js");
require("./externalclient.7c65287f.js");
require("./baseexternalclient.9405bd8a.js");
require("./authclient.c802c873.js");
require("./externalAccountAuthorizedUserClient.3e028766.js");
require("./util.3b565878.js");
var $amXrU$child_process = require("child_process");
var $amXrU$fs = require("fs");
var $amXrU$os = require("os");
var $amXrU$path = require("path");


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
var $e9f6eb46afaff554$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $e9f6eb46afaff554$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $e9f6eb46afaff554$var$_GoogleAuth_instances, $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient, $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient, $e9f6eb46afaff554$var$_GoogleAuth_determineClient;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.GoogleAuth = module.exports.GoogleAuthExceptionMessages = module.exports.CLOUD_SDK_CLIENT_ID = void 0;


var $a78ad13206ee0e97$exports = {};
$a78ad13206ee0e97$exports = new URL("build.570a4f39.js", "file:" + __filename).toString();




var $f8561089bb5f77a5$exports = {};
$f8561089bb5f77a5$exports = new URL("crypto.d1f27c38.js", "file:" + __filename).toString();


var $868a16ace4807a2a$exports = {};
$868a16ace4807a2a$exports = new URL("transporters.b3566606.js", "file:" + __filename).toString();


var $8e14acba74b25fae$exports = {};
$8e14acba74b25fae$exports = new URL("computeclient.d67ad2f4.js", "file:" + __filename).toString();


var $778e136d6b23ee85$exports = {};
$778e136d6b23ee85$exports = new URL("idtokenclient.204ae37e.js", "file:" + __filename).toString();


var $9d7bca453903e801$exports = {};
$9d7bca453903e801$exports = new URL("envDetect.b7542cf7.js", "file:" + __filename).toString();


var $04eb3c3b46006e2d$exports = {};
$04eb3c3b46006e2d$exports = new URL("jwtclient.e23df61a.js", "file:" + __filename).toString();


var $c8bcb7eba196eca8$exports = {};
$c8bcb7eba196eca8$exports = new URL("refreshclient.f245d78a.js", "file:" + __filename).toString();


var $31f3c484077fb9ad$exports = {};
$31f3c484077fb9ad$exports = new URL("impersonated.761437d1.js", "file:" + __filename).toString();


var $fc0b4907090790a1$exports = {};
$fc0b4907090790a1$exports = new URL("externalclient.7c65287f.js", "file:" + __filename).toString();



var $FFDrG = parcelRequire("FFDrG");

var $4luEl = parcelRequire("4luEl");
var $ee235bc457b431bf$exports = {};
$ee235bc457b431bf$exports = new URL("externalAccountAuthorizedUserClient.3e028766.js", "file:" + __filename).toString();



var $7miiN = parcelRequire("7miiN");
module.exports.CLOUD_SDK_CLIENT_ID = '764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com';
module.exports.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS: 'API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.',
    NO_PROJECT_ID_FOUND: "Unable to detect a Project Id in the current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
    NO_CREDENTIALS_FOUND: "Unable to find credentials in current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started",
    NO_ADC_FOUND: 'Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.',
    NO_UNIVERSE_DOMAIN_FOUND: "Unable to detect a Universe Domain in the current environment.\nTo learn more about Universe Domain retrieval, visit: \nhttps://cloud.google.com/compute/docs/metadata/predefined-metadata-keys"
};
class $e9f6eb46afaff554$var$GoogleAuth {
    // Note:  this properly is only public to satisfy unit tests.
    // https://github.com/Microsoft/TypeScript/issues/5228
    get isGCE() {
        return this.checkIsGCE;
    }
    /**
     * Configuration is resolved in the following order of precedence:
     * - {@link GoogleAuthOptions.credentials `credentials`}
     * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
     * - {@link GoogleAuthOptions.keyFile `keyFile`}
     *
     * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
     * {@link AuthClient `AuthClient`s}.
     *
     * @param opts
     */ constructor(opts = {}){
        $e9f6eb46afaff554$var$_GoogleAuth_instances.add(this);
        /**
         * Caches a value indicating whether the auth layer is running on Google
         * Compute Engine.
         * @private
         */ this.checkIsGCE = undefined;
        // To save the contents of the JSON credential file
        this.jsonContent = null;
        this.cachedCredential = null;
        /**
         * A pending {@link AuthClient}. Used for concurrent {@link GoogleAuth.getClient} calls.
         */ $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient.set(this, null);
        this.clientOptions = {};
        this._cachedProjectId = opts.projectId || null;
        this.cachedCredential = opts.authClient || null;
        this.keyFilename = opts.keyFilename || opts.keyFile;
        this.scopes = opts.scopes;
        this.clientOptions = opts.clientOptions || {};
        this.jsonContent = opts.credentials || null;
        this.apiKey = opts.apiKey || this.clientOptions.apiKey || null;
        // Cannot use both API Key + Credentials
        if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw new RangeError(module.exports.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
        if (opts.universeDomain) this.clientOptions.universeDomain = opts.universeDomain;
    }
    // GAPIC client libraries should always use self-signed JWTs. The following
    // variables are set on the JWT client in order to indicate the type of library,
    // and sign the JWT with the correct audience and scopes (if not supplied).
    setGapicJWTValues(client) {
        client.defaultServicePath = this.defaultServicePath;
        client.useJWTAccessWithScope = this.useJWTAccessWithScope;
        client.defaultScopes = this.defaultScopes;
    }
    getProjectId(callback) {
        if (callback) this.getProjectIdAsync().then((r)=>callback(null, r), callback);
        else return this.getProjectIdAsync();
    }
    /**
     * A temporary method for internal `getProjectId` usages where `null` is
     * acceptable. In a future major release, `getProjectId` should return `null`
     * (as the `Promise<string | null>` base signature describes) and this private
     * method should be removed.
     *
     * @returns Promise that resolves with project id (or `null`)
     */ async getProjectIdOptional() {
        try {
            return await this.getProjectId();
        } catch (e) {
            if (e instanceof Error && e.message === module.exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;
            else throw e;
        }
    }
    /**
     * A private method for finding and caching a projectId.
     *
     * Supports environments in order of precedence:
     * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
     * - GOOGLE_APPLICATION_CREDENTIALS JSON file
     * - Cloud SDK: `gcloud config config-helper --format json`
     * - GCE project ID from metadata server
     *
     * @returns projectId
     */ async findAndCacheProjectId() {
        let projectId = null;
        projectId || (projectId = await this.getProductionProjectId());
        projectId || (projectId = await this.getFileProjectId());
        projectId || (projectId = await this.getDefaultServiceProjectId());
        projectId || (projectId = await this.getGCEProjectId());
        projectId || (projectId = await this.getExternalAccountClientProjectId());
        if (projectId) {
            this._cachedProjectId = projectId;
            return projectId;
        } else throw new Error(module.exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
    async getProjectIdAsync() {
        if (this._cachedProjectId) return this._cachedProjectId;
        if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
        return this._findProjectIdPromise;
    }
    /**
     * Retrieves a universe domain from the metadata server via
     * {@link gcpMetadata.universe}.
     *
     * @returns a universe domain
     */ async getUniverseDomainFromMetadataServer() {
        var _a;
        let universeDomain;
        try {
            universeDomain = await $a78ad13206ee0e97$exports.universe('universe-domain');
            universeDomain || (universeDomain = $4luEl.DEFAULT_UNIVERSE);
        } catch (e) {
            if (e && ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status) === 404) universeDomain = $4luEl.DEFAULT_UNIVERSE;
            else throw e;
        }
        return universeDomain;
    }
    /**
     * Retrieves, caches, and returns the universe domain in the following order
     * of precedence:
     * - The universe domain in {@link GoogleAuth.clientOptions}
     * - An existing or ADC {@link AuthClient}'s universe domain
     * - {@link gcpMetadata.universe}, if {@link Compute} client
     *
     * @returns The universe domain
     */ async getUniverseDomain() {
        let universeDomain = (0, $7miiN.originalOrCamelOptions)(this.clientOptions).get('universe_domain');
        try {
            universeDomain !== null && universeDomain !== void 0 ? universeDomain : universeDomain = (await this.getClient()).universeDomain;
        } catch (_a) {
            // client or ADC is not available
            universeDomain !== null && universeDomain !== void 0 ? universeDomain : universeDomain = $4luEl.DEFAULT_UNIVERSE;
        }
        return universeDomain;
    }
    /**
     * @returns Any scopes (user-specified or default scopes specified by the
     *   client library) that need to be set on the current Auth client.
     */ getAnyScopes() {
        return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(optionsOrCallback = {}, callback) {
        let options;
        if (typeof optionsOrCallback === 'function') callback = optionsOrCallback;
        else options = optionsOrCallback;
        if (callback) this.getApplicationDefaultAsync(options).then((r)=>callback(null, r.credential, r.projectId), callback);
        else return this.getApplicationDefaultAsync(options);
    }
    async getApplicationDefaultAsync(options = {}) {
        // If we've already got a cached credential, return it.
        // This will also preserve one's configured quota project, in case they
        // set one directly on the credential previously.
        if (this.cachedCredential) // cache, while preserving existing quota project preferences
        return await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient).call(this, this.cachedCredential, null);
        let credential;
        // Check for the existence of a local environment variable pointing to the
        // location of the credential file. This is typically used in local
        // developer scenarios.
        credential = await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
        if (credential) {
            if (credential instanceof $04eb3c3b46006e2d$exports.JWT) credential.scopes = this.scopes;
            else if (credential instanceof $FFDrG.BaseExternalAccountClient) credential.scopes = this.getAnyScopes();
            return await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient).call(this, credential);
        }
        // Look in the well-known credential file location.
        credential = await this._tryGetApplicationCredentialsFromWellKnownFile(options);
        if (credential) {
            if (credential instanceof $04eb3c3b46006e2d$exports.JWT) credential.scopes = this.scopes;
            else if (credential instanceof $FFDrG.BaseExternalAccountClient) credential.scopes = this.getAnyScopes();
            return await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient).call(this, credential);
        }
        // Determine if we're running on GCE.
        if (await this._checkIsGCE()) {
            options.scopes = this.getAnyScopes();
            return await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient).call(this, new $8e14acba74b25fae$exports.Compute(options));
        }
        throw new Error(module.exports.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    /**
     * Determines whether the auth layer is running on Google Compute Engine.
     * Checks for GCP Residency, then fallback to checking if metadata server
     * is available.
     *
     * @returns A promise that resolves with the boolean.
     * @api private
     */ async _checkIsGCE() {
        if (this.checkIsGCE === undefined) this.checkIsGCE = $a78ad13206ee0e97$exports.getGCPResidency() || await $a78ad13206ee0e97$exports.isAvailable();
        return this.checkIsGCE;
    }
    /**
     * Attempts to load default credentials from the environment variable path..
     * @returns Promise that resolves with the OAuth2Client or null.
     * @api private
     */ async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
        const credentialsPath = process.env['GOOGLE_APPLICATION_CREDENTIALS'] || process.env['google_application_credentials'];
        if (!credentialsPath || credentialsPath.length === 0) return null;
        try {
            return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
        } catch (e) {
            if (e instanceof Error) e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
            throw e;
        }
    }
    /**
     * Attempts to load default credentials from a well-known file location
     * @return Promise that resolves with the OAuth2Client or null.
     * @api private
     */ async _tryGetApplicationCredentialsFromWellKnownFile(options) {
        // First, figure out the location of the file, depending upon the OS type.
        let location = null;
        if (this._isWindows()) // Windows
        location = process.env['APPDATA'];
        else {
            // Linux or Mac
            const home = process.env['HOME'];
            if (home) location = $amXrU$path.join(home, '.config');
        }
        // If we found the root path, expand it.
        if (location) {
            location = $amXrU$path.join(location, 'gcloud', 'application_default_credentials.json');
            if (!$amXrU$fs.existsSync(location)) location = null;
        }
        // The file does not exist.
        if (!location) return null;
        // The file seems to exist. Try to use it.
        const client = await this._getApplicationCredentialsFromFilePath(location, options);
        return client;
    }
    /**
     * Attempts to load default credentials from a file at the given path..
     * @param filePath The path to the file to read.
     * @returns Promise that resolves with the OAuth2Client
     * @api private
     */ async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
        // Make sure the path looks like a string.
        if (!filePath || filePath.length === 0) throw new Error('The file path is invalid.');
        // Make sure there is a file at the path. lstatSync will throw if there is
        // nothing there.
        try {
            // Resolve path to actual file in case of symlink. Expect a thrown error
            // if not resolvable.
            filePath = $amXrU$fs.realpathSync(filePath);
            if (!$amXrU$fs.lstatSync(filePath).isFile()) throw new Error();
        } catch (err) {
            if (err instanceof Error) err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
            throw err;
        }
        // Now open a read stream on the file, and parse it.
        const readStream = $amXrU$fs.createReadStream(filePath);
        return this.fromStream(readStream, options);
    }
    /**
     * Create a credentials instance using a given impersonated input options.
     * @param json The impersonated input object.
     * @returns JWT or UserRefresh Client with data
     */ fromImpersonatedJSON(json) {
        var _a, _b, _c, _d;
        if (!json) throw new Error('Must pass in a JSON object containing an  impersonated refresh token');
        if (json.type !== $31f3c484077fb9ad$exports.IMPERSONATED_ACCOUNT_TYPE) throw new Error(`The incoming JSON object does not have the "${$31f3c484077fb9ad$exports.IMPERSONATED_ACCOUNT_TYPE}" type`);
        if (!json.source_credentials) throw new Error('The incoming JSON object does not contain a source_credentials field');
        if (!json.service_account_impersonation_url) throw new Error('The incoming JSON object does not contain a service_account_impersonation_url field');
        const sourceClient = this.fromJSON(json.source_credentials);
        if (((_a = json.service_account_impersonation_url) === null || _a === void 0 ? void 0 : _a.length) > 256) /**
             * Prevents DOS attacks.
             * @see {@link https://github.com/googleapis/google-auth-library-nodejs/security/code-scanning/85}
             **/ throw new RangeError(`Target principal is too long: ${json.service_account_impersonation_url}`);
        // Extract service account from service_account_impersonation_url
        const targetPrincipal = (_c = (_b = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(json.service_account_impersonation_url)) === null || _b === void 0 ? void 0 : _b.groups) === null || _c === void 0 ? void 0 : _c.target;
        if (!targetPrincipal) throw new RangeError(`Cannot extract target principal from ${json.service_account_impersonation_url}`);
        const targetScopes = (_d = this.getAnyScopes()) !== null && _d !== void 0 ? _d : [];
        return new $31f3c484077fb9ad$exports.Impersonated({
            ...json,
            sourceClient: sourceClient,
            targetPrincipal: targetPrincipal,
            targetScopes: Array.isArray(targetScopes) ? targetScopes : [
                targetScopes
            ]
        });
    }
    /**
     * Create a credentials instance using the given input options.
     * This client is not cached.
     *
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */ fromJSON(json, options = {}) {
        let client;
        // user's preferred universe domain
        const preferredUniverseDomain = (0, $7miiN.originalOrCamelOptions)(options).get('universe_domain');
        if (json.type === $c8bcb7eba196eca8$exports.USER_REFRESH_ACCOUNT_TYPE) {
            client = new $c8bcb7eba196eca8$exports.UserRefreshClient(options);
            client.fromJSON(json);
        } else if (json.type === $31f3c484077fb9ad$exports.IMPERSONATED_ACCOUNT_TYPE) client = this.fromImpersonatedJSON(json);
        else if (json.type === $FFDrG.EXTERNAL_ACCOUNT_TYPE) {
            client = $fc0b4907090790a1$exports.ExternalAccountClient.fromJSON(json, options);
            client.scopes = this.getAnyScopes();
        } else if (json.type === $ee235bc457b431bf$exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) client = new $ee235bc457b431bf$exports.ExternalAccountAuthorizedUserClient(json, options);
        else {
            options.scopes = this.scopes;
            client = new $04eb3c3b46006e2d$exports.JWT(options);
            this.setGapicJWTValues(client);
            client.fromJSON(json);
        }
        if (preferredUniverseDomain) client.universeDomain = preferredUniverseDomain;
        return client;
    }
    /**
     * Return a JWT or UserRefreshClient from JavaScript object, caching both the
     * object used to instantiate and the client.
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */ _cacheClientFromJSON(json, options) {
        const client = this.fromJSON(json, options);
        // cache both raw data used to instantiate client and client itself.
        this.jsonContent = json;
        this.cachedCredential = client;
        return client;
    }
    fromStream(inputStream, optionsOrCallback = {}, callback) {
        let options = {};
        if (typeof optionsOrCallback === 'function') callback = optionsOrCallback;
        else options = optionsOrCallback;
        if (callback) this.fromStreamAsync(inputStream, options).then((r)=>callback(null, r), callback);
        else return this.fromStreamAsync(inputStream, options);
    }
    fromStreamAsync(inputStream, options) {
        return new Promise((resolve, reject)=>{
            if (!inputStream) throw new Error('Must pass in a stream containing the Google auth settings.');
            const chunks = [];
            inputStream.setEncoding('utf8').on('error', reject).on('data', (chunk)=>chunks.push(chunk)).on('end', ()=>{
                try {
                    try {
                        const data = JSON.parse(chunks.join(''));
                        const r = this._cacheClientFromJSON(data, options);
                        return resolve(r);
                    } catch (err) {
                        // If we failed parsing this.keyFileName, assume that it
                        // is a PEM or p12 certificate:
                        if (!this.keyFilename) throw err;
                        const client = new $04eb3c3b46006e2d$exports.JWT({
                            ...this.clientOptions,
                            keyFile: this.keyFilename
                        });
                        this.cachedCredential = client;
                        this.setGapicJWTValues(client);
                        return resolve(client);
                    }
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }
    /**
     * Create a credentials instance using the given API key string.
     * The created client is not cached. In order to create and cache it use the {@link GoogleAuth.getClient `getClient`} method after first providing an {@link GoogleAuth.apiKey `apiKey`}.
     *
     * @param apiKey The API key string
     * @param options An optional options object.
     * @returns A JWT loaded from the key
     */ fromAPIKey(apiKey, options = {}) {
        return new $04eb3c3b46006e2d$exports.JWT({
            ...options,
            apiKey: apiKey
        });
    }
    /**
     * Determines whether the current operating system is Windows.
     * @api private
     */ _isWindows() {
        const sys = $amXrU$os.platform();
        if (sys && sys.length >= 3) {
            if (sys.substring(0, 3).toLowerCase() === 'win') return true;
        }
        return false;
    }
    /**
     * Run the Google Cloud SDK command that prints the default project ID
     */ async getDefaultServiceProjectId() {
        return new Promise((resolve)=>{
            (0, $amXrU$child_process.exec)('gcloud config config-helper --format json', (err, stdout)=>{
                if (!err && stdout) try {
                    const projectId = JSON.parse(stdout).configuration.properties.core.project;
                    resolve(projectId);
                    return;
                } catch (e) {
                // ignore errors
                }
                resolve(null);
            });
        });
    }
    /**
     * Loads the project id from environment variables.
     * @api private
     */ getProductionProjectId() {
        return process.env['GCLOUD_PROJECT'] || process.env['GOOGLE_CLOUD_PROJECT'] || process.env['gcloud_project'] || process.env['google_cloud_project'];
    }
    /**
     * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
     * @api private
     */ async getFileProjectId() {
        if (this.cachedCredential) // Try to read the project ID from the cached credentials file
        return this.cachedCredential.projectId;
        // Ensure the projectId is loaded from the keyFile if available.
        if (this.keyFilename) {
            const creds = await this.getClient();
            if (creds && creds.projectId) return creds.projectId;
        }
        // Try to load a credentials file and read its project ID
        const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
        if (r) return r.projectId;
        else return null;
    }
    /**
     * Gets the project ID from external account client if available.
     */ async getExternalAccountClientProjectId() {
        if (!this.jsonContent || this.jsonContent.type !== $FFDrG.EXTERNAL_ACCOUNT_TYPE) return null;
        const creds = await this.getClient();
        // Do not suppress the underlying error, as the error could contain helpful
        // information for debugging and fixing. This is especially true for
        // external account creds as in order to get the project ID, the following
        // operations have to succeed:
        // 1. Valid credentials file should be supplied.
        // 2. Ability to retrieve access tokens from STS token exchange API.
        // 3. Ability to exchange for service account impersonated credentials (if
        //    enabled).
        // 4. Ability to get project info using the access token from step 2 or 3.
        // Without surfacing the error, it is harder for developers to determine
        // which step went wrong.
        return await creds.getProjectId();
    }
    /**
     * Gets the Compute Engine project ID if it can be inferred.
     */ async getGCEProjectId() {
        try {
            const r = await $a78ad13206ee0e97$exports.project('project-id');
            return r;
        } catch (e) {
            // Ignore any errors
            return null;
        }
    }
    getCredentials(callback) {
        if (callback) this.getCredentialsAsync().then((r)=>callback(null, r), callback);
        else return this.getCredentialsAsync();
    }
    async getCredentialsAsync() {
        const client = await this.getClient();
        if (client instanceof $31f3c484077fb9ad$exports.Impersonated) return {
            client_email: client.getTargetPrincipal()
        };
        if (client instanceof $FFDrG.BaseExternalAccountClient) {
            const serviceAccountEmail = client.getServiceAccountEmail();
            if (serviceAccountEmail) return {
                client_email: serviceAccountEmail,
                universe_domain: client.universeDomain
            };
        }
        if (this.jsonContent) return {
            client_email: this.jsonContent.client_email,
            private_key: this.jsonContent.private_key,
            universe_domain: this.jsonContent.universe_domain
        };
        if (await this._checkIsGCE()) {
            const [client_email, universe_domain] = await Promise.all([
                $a78ad13206ee0e97$exports.instance('service-accounts/default/email'),
                this.getUniverseDomain()
            ]);
            return {
                client_email: client_email,
                universe_domain: universe_domain
            };
        }
        throw new Error(module.exports.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    /**
     * Automatically obtain an {@link AuthClient `AuthClient`} based on the
     * provided configuration. If no options were passed, use Application
     * Default Credentials.
     */ async getClient() {
        if (this.cachedCredential) return this.cachedCredential;
        // Use an existing auth client request, or cache a new one
        $e9f6eb46afaff554$var$__classPrivateFieldSet(this, $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient, $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient, "f") || $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_determineClient).call(this), "f");
        try {
            return await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient, "f");
        } finally{
            // reset the pending auth client in case it is changed later
            $e9f6eb46afaff554$var$__classPrivateFieldSet(this, $e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient, null, "f");
        }
    }
    /**
     * Creates a client which will fetch an ID token for authorization.
     * @param targetAudience the audience for the fetched ID token.
     * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
     */ async getIdTokenClient(targetAudience) {
        const client = await this.getClient();
        if (!('fetchIdToken' in client)) throw new Error('Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.');
        return new $778e136d6b23ee85$exports.IdTokenClient({
            targetAudience: targetAudience,
            idTokenProvider: client
        });
    }
    /**
     * Automatically obtain application default credentials, and return
     * an access token for making requests.
     */ async getAccessToken() {
        const client = await this.getClient();
        return (await client.getAccessToken()).token;
    }
    /**
     * Obtain the HTTP headers that will provide authorization for a given
     * request.
     */ async getRequestHeaders(url) {
        const client = await this.getClient();
        return client.getRequestHeaders(url);
    }
    /**
     * Obtain credentials for a request, then attach the appropriate headers to
     * the request options.
     * @param opts Axios or Request options on which to attach the headers
     */ async authorizeRequest(opts) {
        opts = opts || {};
        const url = opts.url || opts.uri;
        const client = await this.getClient();
        const headers = await client.getRequestHeaders(url);
        opts.headers = Object.assign(opts.headers || {}, headers);
        return opts;
    }
    /**
     * Automatically obtain application default credentials, and make an
     * HTTP request using the given options.
     * @param opts Axios request options for the HTTP request.
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(opts) {
        const client = await this.getClient();
        return client.request(opts);
    }
    /**
     * Determine the compute environment in which the code is running.
     */ getEnv() {
        return (0, $9d7bca453903e801$exports.getEnv)();
    }
    /**
     * Sign the given data with the current private key, or go out
     * to the IAM API to sign it.
     * @param data The data to be signed.
     * @param endpoint A custom endpoint to use.
     *
     * @example
     * ```
     * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
     * ```
     */ async sign(data, endpoint) {
        const client = await this.getClient();
        const universe = await this.getUniverseDomain();
        endpoint = endpoint || `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;
        if (client instanceof $31f3c484077fb9ad$exports.Impersonated) {
            const signed = await client.sign(data);
            return signed.signedBlob;
        }
        const crypto = (0, $f8561089bb5f77a5$exports.createCrypto)();
        if (client instanceof $04eb3c3b46006e2d$exports.JWT && client.key) {
            const sign = await crypto.sign(client.key, data);
            return sign;
        }
        const creds = await this.getCredentials();
        if (!creds.client_email) throw new Error('Cannot sign data without `client_email`.');
        return this.signBlob(crypto, creds.client_email, data, endpoint);
    }
    async signBlob(crypto, emailOrUniqueId, data, endpoint) {
        const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
        const res = await this.request({
            method: 'POST',
            url: url.href,
            data: {
                payload: crypto.encodeBase64StringUtf8(data)
            },
            retry: true,
            retryConfig: {
                httpMethodsToRetry: [
                    'POST'
                ]
            }
        });
        return res.data.signedBlob;
    }
}
module.exports.GoogleAuth = $e9f6eb46afaff554$var$GoogleAuth;
$e9f6eb46afaff554$var$_GoogleAuth_pendingAuthClient = new WeakMap(), $e9f6eb46afaff554$var$_GoogleAuth_instances = new WeakSet(), $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient = async function _GoogleAuth_prepareAndCacheClient(credential, quotaProjectIdOverride = process.env['GOOGLE_CLOUD_QUOTA_PROJECT'] || null) {
    const projectId = await this.getProjectIdOptional();
    if (quotaProjectIdOverride) credential.quotaProjectId = quotaProjectIdOverride;
    this.cachedCredential = credential;
    return {
        credential: credential,
        projectId: projectId
    };
}, $e9f6eb46afaff554$var$_GoogleAuth_determineClient = async function _GoogleAuth_determineClient() {
    if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
    else if (this.keyFilename) {
        const filePath = $amXrU$path.resolve(this.keyFilename);
        const stream = $amXrU$fs.createReadStream(filePath);
        return await this.fromStreamAsync(stream, this.clientOptions);
    } else if (this.apiKey) {
        const client = await this.fromAPIKey(this.apiKey, this.clientOptions);
        client.scopes = this.scopes;
        const { credential: credential } = await $e9f6eb46afaff554$var$__classPrivateFieldGet(this, $e9f6eb46afaff554$var$_GoogleAuth_instances, "m", $e9f6eb46afaff554$var$_GoogleAuth_prepareAndCacheClient).call(this, client);
        return credential;
    } else {
        const { credential: credential } = await this.getApplicationDefaultAsync(this.clientOptions);
        return credential;
    }
};
/**
 * Export DefaultTransporter as a static property of the class.
 */ $e9f6eb46afaff554$var$GoogleAuth.DefaultTransporter = $868a16ace4807a2a$exports.DefaultTransporter;


//# sourceMappingURL=googleauth.0e32b0cc.js.map
