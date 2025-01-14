require("./build.ae3b9a9c.js");
require("./esm-node.a0e5eefb.js");
require("./util.97c9f8b9.js");
require("./util.569826f4.js");


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
parcelRegister("ar6PT", function(module, exports) {
module.exports = new URL("esm-node.a0e5eefb.js", "file:" + __filename).toString();

});

"use strict";
var $0e5c7aff12cdb31d$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $0e5c7aff12cdb31d$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0e5c7aff12cdb31d$var$__importStar = module.exports && module.exports.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $0e5c7aff12cdb31d$var$__createBinding(result, mod, k[i]);
        }
        $0e5c7aff12cdb31d$var$__setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Service = module.exports.DEFAULT_PROJECT_ID_TOKEN = void 0;
var $af5a00e993ef78d7$exports = {};
$af5a00e993ef78d7$exports = new URL("build.ae3b9a9c.js", "file:" + __filename).toString();



const $0e5c7aff12cdb31d$var$uuid = $0e5c7aff12cdb31d$var$__importStar((parcelRequire("ar6PT")));
var $f800668f445c4fbb$exports = {};
$f800668f445c4fbb$exports = new URL("util.97c9f8b9.js", "file:" + __filename).toString();



var $liF6k = parcelRequire("liF6k");
module.exports.DEFAULT_PROJECT_ID_TOKEN = '{{projectId}}';
class $0e5c7aff12cdb31d$var$Service {
    /**
     * Service is a base class, meant to be inherited from by a "service," like
     * BigQuery or Storage.
     *
     * This handles making authenticated requests by exposing a `makeReq_`
     * function.
     *
     * @constructor
     * @alias module:common/service
     *
     * @param {object} config - Configuration object.
     * @param {string} config.baseUrl - The base URL to make API requests to.
     * @param {string[]} config.scopes - The scopes required for the request.
     * @param {object=} options - [Configuration object](#/docs).
     */ constructor(config, options = {}){
        this.baseUrl = config.baseUrl;
        this.apiEndpoint = config.apiEndpoint;
        this.timeout = options.timeout;
        this.globalInterceptors = Array.isArray(options.interceptors_) ? options.interceptors_ : [];
        this.interceptors = [];
        this.packageJson = config.packageJson;
        this.projectId = options.projectId || module.exports.DEFAULT_PROJECT_ID_TOKEN;
        this.projectIdRequired = config.projectIdRequired !== false;
        this.providedUserAgent = options.userAgent;
        this.universeDomain = options.universeDomain || $af5a00e993ef78d7$exports.DEFAULT_UNIVERSE;
        this.customEndpoint = config.customEndpoint || false;
        this.makeAuthenticatedRequest = $f800668f445c4fbb$exports.util.makeAuthenticatedRequestFactory({
            ...config,
            projectIdRequired: this.projectIdRequired,
            projectId: this.projectId,
            authClient: options.authClient || config.authClient,
            credentials: options.credentials,
            keyFile: options.keyFilename,
            email: options.email,
            clientOptions: {
                universeDomain: options.universeDomain,
                ...options.clientOptions
            }
        });
        this.authClient = this.makeAuthenticatedRequest.authClient;
        const isCloudFunctionEnv = !!process.env.FUNCTION_NAME;
        if (isCloudFunctionEnv) this.interceptors.push({
            request (reqOpts) {
                reqOpts.forever = false;
                return reqOpts;
            }
        });
    }
    /**
     * Return the user's custom request interceptors.
     */ getRequestInterceptors() {
        // Interceptors should be returned in the order they were assigned.
        return [].slice.call(this.globalInterceptors).concat(this.interceptors).filter((interceptor)=>typeof interceptor.request === 'function').map((interceptor)=>interceptor.request);
    }
    getProjectId(callback) {
        if (!callback) return this.getProjectIdAsync();
        this.getProjectIdAsync().then((p)=>callback(null, p), callback);
    }
    async getProjectIdAsync() {
        const projectId = await this.authClient.getProjectId();
        if (this.projectId === module.exports.DEFAULT_PROJECT_ID_TOKEN && projectId) this.projectId = projectId;
        return this.projectId;
    }
    request_(reqOpts, callback) {
        reqOpts = {
            ...reqOpts,
            timeout: this.timeout
        };
        const isAbsoluteUrl = reqOpts.uri.indexOf('http') === 0;
        const uriComponents = [
            this.baseUrl
        ];
        if (this.projectIdRequired) {
            if (reqOpts.projectId) {
                uriComponents.push('projects');
                uriComponents.push(reqOpts.projectId);
            } else {
                uriComponents.push('projects');
                uriComponents.push(this.projectId);
            }
        }
        uriComponents.push(reqOpts.uri);
        if (isAbsoluteUrl) uriComponents.splice(0, uriComponents.indexOf(reqOpts.uri));
        reqOpts.uri = uriComponents.map((uriComponent)=>{
            const trimSlashesRegex = /^\/*|\/*$/g;
            return uriComponent.replace(trimSlashesRegex, '');
        }).join('/')// Some URIs have colon separators.
        // Bad: https://.../projects/:list
        // Good: https://.../projects:list
        .replace(/\/:/g, ':');
        const requestInterceptors = this.getRequestInterceptors();
        const interceptorArray = Array.isArray(reqOpts.interceptors_) ? reqOpts.interceptors_ : [];
        interceptorArray.forEach((interceptor)=>{
            if (typeof interceptor.request === 'function') requestInterceptors.push(interceptor.request);
        });
        requestInterceptors.forEach((requestInterceptor)=>{
            reqOpts = requestInterceptor(reqOpts);
        });
        delete reqOpts.interceptors_;
        const pkg = this.packageJson;
        let userAgent = (0, $liF6k.getUserAgentString)();
        if (this.providedUserAgent) userAgent = `${this.providedUserAgent} ${userAgent}`;
        reqOpts.headers = {
            ...reqOpts.headers,
            'User-Agent': userAgent,
            'x-goog-api-client': `${(0, $liF6k.getRuntimeTrackingString)()} gccl/${pkg.version}-${(0, $liF6k.getModuleFormat)()} gccl-invocation-id/${$0e5c7aff12cdb31d$var$uuid.v4()}`
        };
        if (reqOpts[$f800668f445c4fbb$exports.GCCL_GCS_CMD_KEY]) reqOpts.headers['x-goog-api-client'] += ` gccl-gcs-cmd/${reqOpts[$f800668f445c4fbb$exports.GCCL_GCS_CMD_KEY]}`;
        if (reqOpts.shouldReturnStream) return this.makeAuthenticatedRequest(reqOpts);
        else this.makeAuthenticatedRequest(reqOpts, callback);
    }
    /**
     * Make an authenticated API request.
     *
     * @param {object} reqOpts - Request options that are passed to `request`.
     * @param {string} reqOpts.uri - A URI relative to the baseUrl.
     * @param {function} callback - The callback function passed to `request`.
     */ request(reqOpts, callback) {
        $0e5c7aff12cdb31d$var$Service.prototype.request_.call(this, reqOpts, callback);
    }
    /**
     * Make an authenticated API request.
     *
     * @param {object} reqOpts - Request options that are passed to `request`.
     * @param {string} reqOpts.uri - A URI relative to the baseUrl.
     */ requestStream(reqOpts) {
        const opts = {
            ...reqOpts,
            shouldReturnStream: true
        };
        return $0e5c7aff12cdb31d$var$Service.prototype.request_.call(this, opts);
    }
}
module.exports.Service = $0e5c7aff12cdb31d$var$Service;


