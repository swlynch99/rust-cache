require("./dot-object.3dcbd96e.js");
require("./request.bd41387c.js");
require("./errors.2ac23834.js");
require("./http.client.eeffa6f8.js");
require("./server.e4d183d2.js");
var $fm0sz$querystring = require("querystring");


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
parcelRegister("YvHq4", function(module, exports) {
"use strict";
var $0b5e3188ff2fc1e1$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $0b5e3188ff2fc1e1$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0b5e3188ff2fc1e1$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0b5e3188ff2fc1e1$var$__createBinding(result, mod, k);
    }
    $0b5e3188ff2fc1e1$var$__setModuleDefault(result, mod);
    return result;
};
var $0b5e3188ff2fc1e1$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $0b5e3188ff2fc1e1$var$__rest = module.exports && module.exports.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Gateway = module.exports.Pattern = void 0;


const $0b5e3188ff2fc1e1$var$dotObject = $0b5e3188ff2fc1e1$var$__importStar((parcelRequire("hJlxF")));

var $5OETR = parcelRequire("5OETR");

var $gQxCu = parcelRequire("gQxCu");

var $joL4V = parcelRequire("joL4V");

var $42bfk = parcelRequire("42bfk");
var $0b5e3188ff2fc1e1$var$Pattern;
(function(Pattern) {
    Pattern["POST"] = "post";
    Pattern["GET"] = "get";
    Pattern["PATCH"] = "patch";
    Pattern["PUT"] = "put";
    Pattern["DELETE"] = "delete";
})($0b5e3188ff2fc1e1$var$Pattern = module.exports.Pattern || (module.exports.Pattern = {}));
/**
 * The Gateway proxies http requests to Twirp Compliant
 * handlers
 */ class $0b5e3188ff2fc1e1$var$Gateway {
    constructor(routes){
        this.routes = routes;
    }
    /**
     * Middleware that rewrite the current request
     * to a Twirp compliant request
     */ twirpRewrite(prefix = "/twirp") {
        return (req, resp, next)=>{
            this.rewrite(req, resp, prefix).then(()=>next()).catch((e)=>{
                if (e instanceof $gQxCu.TwirpError) {
                    if (e.code !== $gQxCu.TwirpErrorCode.NotFound) $42bfk.writeError(resp, e);
                    else next();
                }
            });
        };
    }
    /**
     * Rewrite an incoming request to a Twirp compliant request
     * @param req
     * @param resp
     * @param prefix
     */ rewrite(req, resp, prefix = "/twirp") {
        return $0b5e3188ff2fc1e1$var$__awaiter(this, void 0, void 0, function*() {
            const [match, route] = this.matchRoute(req);
            const body = yield this.prepareTwirpBody(req, match, route);
            const twirpUrl = `${prefix}/${route.packageName}.${route.serviceName}/${route.methodName}`;
            req.url = twirpUrl;
            req.originalUrl = twirpUrl;
            req.method = "POST";
            req.headers["content-type"] = "application/json";
            req.rawBody = Buffer.from(JSON.stringify(body));
            if (route.responseBodyKey) {
                const endFn = resp.end.bind(resp);
                resp.end = function(chunk) {
                    if (resp.statusCode === 200) endFn(`{ "${route.responseBodyKey}": ${chunk} }`);
                    else endFn(chunk);
                };
            }
        });
    }
    /**
     * Create a reverse proxy handler to
     * proxy http requests to Twirp Compliant handlers
     * @param httpClientOption
     */ reverseProxy(httpClientOption) {
        const client = $joL4V.NodeHttpRPC(httpClientOption);
        return (req, res)=>$0b5e3188ff2fc1e1$var$__awaiter(this, void 0, void 0, function*() {
                try {
                    const [match, route] = this.matchRoute(req);
                    const body = yield this.prepareTwirpBody(req, match, route);
                    const response = yield client.request(`${route.packageName}.${route.serviceName}`, route.methodName, "application/json", body);
                    res.statusCode = 200;
                    res.setHeader("content-type", "application/json");
                    let jsonResponse;
                    if (route.responseBodyKey) jsonResponse = JSON.stringify({
                        [route.responseBodyKey]: response
                    });
                    else jsonResponse = JSON.stringify(response);
                    res.end(jsonResponse);
                } catch (e) {
                    $42bfk.writeError(res, e);
                }
            });
    }
    /**
     * Prepares twirp body requests using http.google.annotions
     * compliant spec
     *
     * @param req
     * @param match
     * @param route
     * @protected
     */ prepareTwirpBody(req, match, route) {
        return $0b5e3188ff2fc1e1$var$__awaiter(this, void 0, void 0, function*() {
            const _a = match.params, { query_string: query_string } = _a, params = $0b5e3188ff2fc1e1$var$__rest(_a, [
                "query_string"
            ]);
            let requestBody = Object.assign({}, params);
            if (query_string && route.bodyKey !== "*") {
                const queryParams = this.parseQueryString(query_string);
                requestBody = Object.assign(Object.assign({}, queryParams), requestBody);
            }
            let body = {};
            if (route.bodyKey) {
                const data = yield $5OETR.getRequestData(req);
                try {
                    const jsonBody = JSON.parse(data.toString() || "{}");
                    if (route.bodyKey === "*") body = jsonBody;
                    else body[route.bodyKey] = jsonBody;
                } catch (e) {
                    const msg = "the json request could not be decoded";
                    throw new $gQxCu.TwirpError($gQxCu.TwirpErrorCode.Malformed, msg).withCause(e, true);
                }
            }
            return Object.assign(Object.assign({}, body), requestBody);
        });
    }
    /**
     * Matches a route
     * @param req
     */ matchRoute(req) {
        var _a;
        const httpMethod = (_a = req.method) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (!httpMethod) throw new $gQxCu.BadRouteError(`method not allowed`, req.method || "", req.url || "");
        const routes = this.routes[httpMethod];
        for (const route of routes){
            const match = route.matcher(req.url || "/");
            if (match) return [
                match,
                route
            ];
        }
        throw new $gQxCu.NotFoundError(`url ${req.url} not found`);
    }
    /**
     * Parse query string
     * @param queryString
     */ parseQueryString(queryString) {
        const queryParams = $fm0sz$querystring.parse(queryString.replace("?", ""));
        return $0b5e3188ff2fc1e1$var$dotObject.object(queryParams);
    }
}
module.exports.Gateway = $0b5e3188ff2fc1e1$var$Gateway;

});
parcelRegister("hJlxF", function(module, exports) {
module.exports = new URL("dot-object.3dcbd96e.js", "file:" + __filename).toString();

});

parcelRegister("joL4V", function(module, exports) {
module.exports = new URL("http.client.eeffa6f8.js", "file:" + __filename).toString();

});



