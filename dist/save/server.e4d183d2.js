require("./hooks.8c76b6fd.js");
require("./request.bd41387c.js");
require("./errors.2ac23834.js");


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
parcelRegister("42bfk", function(module, exports) {
"use strict";
var $2f0012949dc582f9$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.writeError = module.exports.TwirpServer = void 0;

var $6ZcyX = parcelRequire("6ZcyX");

var $3ZMFi = parcelRequire("3ZMFi");

var $gQxCu = parcelRequire("gQxCu");
/**
 * Runtime server implementation of a TwirpServer
 */ class $2f0012949dc582f9$var$TwirpServer {
    constructor(options){
        this.pathPrefix = "/twirp";
        this.hooks = [];
        this.interceptors = [];
        this.packageName = options.packageName;
        this.serviceName = options.serviceName;
        this.methodList = options.methodList;
        this.matchRoute = options.matchRoute;
        this.service = options.service;
    }
    /**
     * Returns the prefix for this server
     */ get prefix() {
        return this.pathPrefix;
    }
    /**
     * The http handler for twirp complaint endpoints
     * @param options
     */ httpHandler(options) {
        return (req, resp)=>{
            // setup prefix
            if ((options === null || options === void 0 ? void 0 : options.prefix) !== undefined) this.withPrefix(options.prefix);
            return this._httpHandler(req, resp);
        };
    }
    /**
     * Adds interceptors or hooks to the request stack
     * @param middlewares
     */ use(...middlewares) {
        middlewares.forEach((middleware)=>{
            if ($6ZcyX.isHook(middleware)) {
                this.hooks.push(middleware);
                return this;
            }
            this.interceptors.push(middleware);
        });
        return this;
    }
    /**
     * Adds a prefix to the service url path
     * @param prefix
     */ withPrefix(prefix) {
        if (prefix === false) this.pathPrefix = "";
        else this.pathPrefix = prefix;
        return this;
    }
    /**
     * Returns the regex matching path for this twirp server
     */ matchingPath() {
        const baseRegex = this.baseURI().replace(/\./g, "\\.");
        return new RegExp(`${baseRegex}\/(${this.methodList.join("|")})`);
    }
    /**
     * Returns the base URI for this twirp server
     */ baseURI() {
        return `${this.pathPrefix}/${this.packageName ? this.packageName + "." : ""}${this.serviceName}`;
    }
    /**
     * Create a twirp context
     * @param req
     * @param res
     * @private
     */ createContext(req, res) {
        return {
            packageName: this.packageName,
            serviceName: this.serviceName,
            methodName: "",
            contentType: $3ZMFi.getContentType(req.headers["content-type"]),
            req: req,
            res: res
        };
    }
    /**
     * Twrip server http handler implementation
     * @param req
     * @param resp
     * @private
     */ _httpHandler(req, resp) {
        return $2f0012949dc582f9$var$__awaiter(this, void 0, void 0, function*() {
            const ctx = this.createContext(req, resp);
            try {
                yield this.invokeHook("requestReceived", ctx);
                const { method: method, mimeContentType: mimeContentType } = $3ZMFi.validateRequest(ctx, req, this.pathPrefix || "");
                const handler = this.matchRoute(method, {
                    onMatch: (ctx)=>{
                        return this.invokeHook("requestRouted", ctx);
                    },
                    onNotFound: ()=>{
                        const msg = `no handler for path ${req.url}`;
                        throw new $gQxCu.BadRouteError(msg, req.method || "", req.url || "");
                    }
                });
                const body = yield $3ZMFi.getRequestData(req);
                const response = yield handler(ctx, this.service, body, this.interceptors);
                yield Promise.all([
                    this.invokeHook("responsePrepared", ctx),
                    // keep backwards compatibility till next release
                    this.invokeHook("requestPrepared", ctx)
                ]);
                resp.statusCode = 200;
                resp.setHeader("Content-Type", mimeContentType);
                resp.end(response);
            } catch (e) {
                yield this.invokeHook("error", ctx, $2f0012949dc582f9$var$mustBeTwirpError(e));
                if (!resp.headersSent) $2f0012949dc582f9$var$writeError(resp, e);
            } finally{
                yield Promise.all([
                    this.invokeHook("responseSent", ctx),
                    // keep backwards compatibility till next release
                    this.invokeHook("requestSent", ctx)
                ]);
            }
        });
    }
    /**
     * Invoke a hook
     * @param hookName
     * @param ctx
     * @param err
     * @protected
     */ invokeHook(hookName, ctx, err) {
        return $2f0012949dc582f9$var$__awaiter(this, void 0, void 0, function*() {
            if (this.hooks.length === 0) return;
            const chainedHooks = $6ZcyX.chainHooks(...this.hooks);
            const hook = chainedHooks === null || chainedHooks === void 0 ? void 0 : chainedHooks[hookName];
            if (hook) yield hook(ctx, err || new $gQxCu.InternalServerError("internal server error"));
        });
    }
}
module.exports.TwirpServer = $2f0012949dc582f9$var$TwirpServer;
/**
 * Write http error response
 * @param res
 * @param error
 */ function $2f0012949dc582f9$var$writeError(res, error) {
    const twirpError = $2f0012949dc582f9$var$mustBeTwirpError(error);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = $gQxCu.httpStatusFromErrorCode(twirpError.code);
    res.end(twirpError.toJSON());
}
module.exports.writeError = $2f0012949dc582f9$var$writeError;
/**
 * Make sure that the error passed is a TwirpError
 * otherwise it will wrap it into an InternalError
 * @param err
 */ function $2f0012949dc582f9$var$mustBeTwirpError(err) {
    if (err instanceof $gQxCu.TwirpError) return err;
    return new $gQxCu.InternalServerErrorWith(err);
}

});
parcelRegister("6ZcyX", function(module, exports) {
module.exports = new URL("hooks.8c76b6fd.js", "file:" + __filename).toString();

});

parcelRegister("3ZMFi", function(module, exports) {
module.exports = new URL("request.bd41387c.js", "file:" + __filename).toString();

});



