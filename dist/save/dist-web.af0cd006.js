require("./dist-src.8b8ff18e.js");
require("./dist-web.c5e3c3ab.js");


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
// pkg/dist-src/index.js

var $wJE3P = parcelRequire("wJE3P");

var $ie4is = parcelRequire("ie4is");
// pkg/dist-src/version.js
var $6c9a51a656fa6bd7$var$VERSION = "7.1.0";
// pkg/dist-src/error.js
function $6c9a51a656fa6bd7$var$_buildMessageForResponseErrors(data) {
    return `Request failed due to following response errors:
` + data.errors.map((e)=>` - ${e.message}`).join("\n");
}
var $6c9a51a656fa6bd7$export$d19deff0ec585725 = class extends Error {
    constructor(request2, headers, response){
        super($6c9a51a656fa6bd7$var$_buildMessageForResponseErrors(response));
        this.request = request2;
        this.headers = headers;
        this.response = response;
        this.name = "GraphqlResponseError";
        this.errors = response.errors;
        this.data = response.data;
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    }
};
// pkg/dist-src/graphql.js
var $6c9a51a656fa6bd7$var$NON_VARIABLE_OPTIONS = [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "query",
    "mediaType"
];
var $6c9a51a656fa6bd7$var$FORBIDDEN_VARIABLE_OPTIONS = [
    "query",
    "method",
    "url"
];
var $6c9a51a656fa6bd7$var$GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function $6c9a51a656fa6bd7$var$graphql(request2, query, options) {
    if (options) {
        if (typeof query === "string" && "query" in options) return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
        for(const key in options){
            if (!$6c9a51a656fa6bd7$var$FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
            return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
        }
    }
    const parsedOptions = typeof query === "string" ? Object.assign({
        query: query
    }, options) : query;
    const requestOptions = Object.keys(parsedOptions).reduce((result, key)=>{
        if ($6c9a51a656fa6bd7$var$NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key];
            return result;
        }
        if (!result.variables) result.variables = {};
        result.variables[key] = parsedOptions[key];
        return result;
    }, {});
    const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
    if ($6c9a51a656fa6bd7$var$GHES_V3_SUFFIX_REGEX.test(baseUrl)) requestOptions.url = baseUrl.replace($6c9a51a656fa6bd7$var$GHES_V3_SUFFIX_REGEX, "/api/graphql");
    return request2(requestOptions).then((response)=>{
        if (response.data.errors) {
            const headers = {};
            for (const key of Object.keys(response.headers))headers[key] = response.headers[key];
            throw new $6c9a51a656fa6bd7$export$d19deff0ec585725(requestOptions, headers, response.data);
        }
        return response.data.data;
    });
}
// pkg/dist-src/with-defaults.js
function $6c9a51a656fa6bd7$var$withDefaults(request2, newDefaults) {
    const newRequest = request2.defaults(newDefaults);
    const newApi = (query, options)=>{
        return $6c9a51a656fa6bd7$var$graphql(newRequest, query, options);
    };
    return Object.assign(newApi, {
        defaults: $6c9a51a656fa6bd7$var$withDefaults.bind(null, newRequest),
        endpoint: newRequest.endpoint
    });
}
// pkg/dist-src/index.js
var $6c9a51a656fa6bd7$export$1eb4e7c0ed67b035 = $6c9a51a656fa6bd7$var$withDefaults((0, $wJE3P.request), {
    headers: {
        "user-agent": `octokit-graphql.js/${$6c9a51a656fa6bd7$var$VERSION} ${(0, $ie4is.getUserAgent)()}`
    },
    method: "POST",
    url: "/graphql"
});
function $6c9a51a656fa6bd7$export$9eb07bf38af78249(customRequest) {
    return $6c9a51a656fa6bd7$var$withDefaults(customRequest, {
        method: "POST",
        url: "/graphql"
    });
}


//# sourceMappingURL=dist-web.af0cd006.js.map
