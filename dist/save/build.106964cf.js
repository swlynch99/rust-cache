require("./build.da41aa52.js");
require("./jws.433f2a44.js");
var $gOsBg$fs = require("fs");
var $gOsBg$path = require("path");
var $gOsBg$util = require("util");


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
/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */ var $88c2e66e82353156$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $88c2e66e82353156$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $88c2e66e82353156$var$_GoogleToken_instances, $88c2e66e82353156$var$_GoogleToken_inFlightRequest, $88c2e66e82353156$var$_GoogleToken_getTokenAsync, $88c2e66e82353156$var$_GoogleToken_getTokenAsyncInner, $88c2e66e82353156$var$_GoogleToken_ensureEmail, $88c2e66e82353156$var$_GoogleToken_revokeTokenAsync, $88c2e66e82353156$var$_GoogleToken_configure, $88c2e66e82353156$var$_GoogleToken_requestToken;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.GoogleToken = void 0;


var $47hCt = parcelRequire("47hCt");
var $a264d001306a0b64$exports = {};
$a264d001306a0b64$exports = new URL("jws.433f2a44.js", "file:" + __filename).toString();




const $88c2e66e82353156$var$readFile = $gOsBg$fs.readFile ? (0, $gOsBg$util.promisify)($gOsBg$fs.readFile) : async ()=>{
    // if running in the web-browser, fs.readFile may not have been shimmed.
    throw new $88c2e66e82353156$var$ErrorWithCode('use key rather than keyFile.', 'MISSING_CREDENTIALS');
};
const $88c2e66e82353156$var$GOOGLE_TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
const $88c2e66e82353156$var$GOOGLE_REVOKE_TOKEN_URL = 'https://accounts.google.com/o/oauth2/revoke?token=';
class $88c2e66e82353156$var$ErrorWithCode extends Error {
    constructor(message, code){
        super(message);
        this.code = code;
    }
}
class $88c2e66e82353156$var$GoogleToken {
    get accessToken() {
        return this.rawToken ? this.rawToken.access_token : undefined;
    }
    get idToken() {
        return this.rawToken ? this.rawToken.id_token : undefined;
    }
    get tokenType() {
        return this.rawToken ? this.rawToken.token_type : undefined;
    }
    get refreshToken() {
        return this.rawToken ? this.rawToken.refresh_token : undefined;
    }
    /**
     * Create a GoogleToken.
     *
     * @param options  Configuration object.
     */ constructor(options){
        $88c2e66e82353156$var$_GoogleToken_instances.add(this);
        this.transporter = {
            request: (opts)=>(0, $47hCt.request)(opts)
        };
        $88c2e66e82353156$var$_GoogleToken_inFlightRequest.set(this, void 0);
        $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_configure).call(this, options);
    }
    /**
     * Returns whether the token has expired.
     *
     * @return true if the token has expired, false otherwise.
     */ hasExpired() {
        const now = new Date().getTime();
        if (this.rawToken && this.expiresAt) return now >= this.expiresAt;
        else return true;
    }
    /**
     * Returns whether the token will expire within eagerRefreshThresholdMillis
     *
     * @return true if the token will be expired within eagerRefreshThresholdMillis, false otherwise.
     */ isTokenExpiring() {
        var _a;
        const now = new Date().getTime();
        const eagerRefreshThresholdMillis = (_a = this.eagerRefreshThresholdMillis) !== null && _a !== void 0 ? _a : 0;
        if (this.rawToken && this.expiresAt) return this.expiresAt <= now + eagerRefreshThresholdMillis;
        else return true;
    }
    getToken(callback, opts = {}) {
        if (typeof callback === 'object') {
            opts = callback;
            callback = undefined;
        }
        opts = Object.assign({
            forceRefresh: false
        }, opts);
        if (callback) {
            const cb = callback;
            $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_getTokenAsync).call(this, opts).then((t)=>cb(null, t), callback);
            return;
        }
        return $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_getTokenAsync).call(this, opts);
    }
    /**
     * Given a keyFile, extract the key and client email if available
     * @param keyFile Path to a json, pem, or p12 file that contains the key.
     * @returns an object with privateKey and clientEmail properties
     */ async getCredentials(keyFile) {
        const ext = $gOsBg$path.extname(keyFile);
        switch(ext){
            case '.json':
                {
                    const key = await $88c2e66e82353156$var$readFile(keyFile, 'utf8');
                    const body = JSON.parse(key);
                    const privateKey = body.private_key;
                    const clientEmail = body.client_email;
                    if (!privateKey || !clientEmail) throw new $88c2e66e82353156$var$ErrorWithCode('private_key and client_email are required.', 'MISSING_CREDENTIALS');
                    return {
                        privateKey: privateKey,
                        clientEmail: clientEmail
                    };
                }
            case '.der':
            case '.crt':
            case '.pem':
                {
                    const privateKey = await $88c2e66e82353156$var$readFile(keyFile, 'utf8');
                    return {
                        privateKey: privateKey
                    };
                }
            case '.p12':
            case '.pfx':
                throw new $88c2e66e82353156$var$ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", 'UNKNOWN_CERTIFICATE_TYPE');
            default:
                throw new $88c2e66e82353156$var$ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", 'UNKNOWN_CERTIFICATE_TYPE');
        }
    }
    revokeToken(callback) {
        if (callback) {
            $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_revokeTokenAsync).call(this).then(()=>callback(), callback);
            return;
        }
        return $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_revokeTokenAsync).call(this);
    }
}
module.exports.GoogleToken = $88c2e66e82353156$var$GoogleToken;
$88c2e66e82353156$var$_GoogleToken_inFlightRequest = new WeakMap(), $88c2e66e82353156$var$_GoogleToken_instances = new WeakSet(), $88c2e66e82353156$var$_GoogleToken_getTokenAsync = async function _GoogleToken_getTokenAsync(opts) {
    if ($88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_inFlightRequest, "f") && !opts.forceRefresh) return $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_inFlightRequest, "f");
    try {
        return await $88c2e66e82353156$var$__classPrivateFieldSet(this, $88c2e66e82353156$var$_GoogleToken_inFlightRequest, $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_getTokenAsyncInner).call(this, opts), "f");
    } finally{
        $88c2e66e82353156$var$__classPrivateFieldSet(this, $88c2e66e82353156$var$_GoogleToken_inFlightRequest, undefined, "f");
    }
}, $88c2e66e82353156$var$_GoogleToken_getTokenAsyncInner = async function _GoogleToken_getTokenAsyncInner(opts) {
    if (this.isTokenExpiring() === false && opts.forceRefresh === false) return Promise.resolve(this.rawToken);
    if (!this.key && !this.keyFile) throw new Error('No key or keyFile set.');
    if (!this.key && this.keyFile) {
        const creds = await this.getCredentials(this.keyFile);
        this.key = creds.privateKey;
        this.iss = creds.clientEmail || this.iss;
        if (!creds.clientEmail) $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_ensureEmail).call(this);
    }
    return $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_requestToken).call(this);
}, $88c2e66e82353156$var$_GoogleToken_ensureEmail = function _GoogleToken_ensureEmail() {
    if (!this.iss) throw new $88c2e66e82353156$var$ErrorWithCode('email is required.', 'MISSING_CREDENTIALS');
}, $88c2e66e82353156$var$_GoogleToken_revokeTokenAsync = async function _GoogleToken_revokeTokenAsync() {
    if (!this.accessToken) throw new Error('No token to revoke.');
    const url = $88c2e66e82353156$var$GOOGLE_REVOKE_TOKEN_URL + this.accessToken;
    await this.transporter.request({
        url: url,
        retry: true
    });
    $88c2e66e82353156$var$__classPrivateFieldGet(this, $88c2e66e82353156$var$_GoogleToken_instances, "m", $88c2e66e82353156$var$_GoogleToken_configure).call(this, {
        email: this.iss,
        sub: this.sub,
        key: this.key,
        keyFile: this.keyFile,
        scope: this.scope,
        additionalClaims: this.additionalClaims
    });
}, $88c2e66e82353156$var$_GoogleToken_configure = function _GoogleToken_configure(options = {}) {
    this.keyFile = options.keyFile;
    this.key = options.key;
    this.rawToken = undefined;
    this.iss = options.email || options.iss;
    this.sub = options.sub;
    this.additionalClaims = options.additionalClaims;
    if (typeof options.scope === 'object') this.scope = options.scope.join(' ');
    else this.scope = options.scope;
    this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
    if (options.transporter) this.transporter = options.transporter;
}, $88c2e66e82353156$var$_GoogleToken_requestToken = /**
 * Request the token from Google.
 */ async function _GoogleToken_requestToken() {
    var _a, _b;
    const iat = Math.floor(new Date().getTime() / 1000);
    const additionalClaims = this.additionalClaims || {};
    const payload = Object.assign({
        iss: this.iss,
        scope: this.scope,
        aud: $88c2e66e82353156$var$GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat: iat,
        sub: this.sub
    }, additionalClaims);
    const signedJWT = $a264d001306a0b64$exports.sign({
        header: {
            alg: 'RS256'
        },
        payload: payload,
        secret: this.key
    });
    try {
        const r = await this.transporter.request({
            method: 'POST',
            url: $88c2e66e82353156$var$GOOGLE_TOKEN_URL,
            data: {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: signedJWT
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            responseType: 'json',
            retryConfig: {
                httpMethodsToRetry: [
                    'POST'
                ]
            }
        });
        this.rawToken = r.data;
        this.expiresAt = r.data.expires_in === null || r.data.expires_in === undefined ? undefined : (iat + r.data.expires_in) * 1000;
        return this.rawToken;
    } catch (e) {
        this.rawToken = undefined;
        this.tokenExpires = undefined;
        const body = e.response && ((_a = e.response) === null || _a === void 0 ? void 0 : _a.data) ? (_b = e.response) === null || _b === void 0 ? void 0 : _b.data : {};
        if (body.error) {
            const desc = body.error_description ? `: ${body.error_description}` : '';
            e.message = `${body.error}${desc}`;
        }
        throw e;
    }
}; //# sourceMappingURL=index.js.map


//# sourceMappingURL=build.106964cf.js.map
