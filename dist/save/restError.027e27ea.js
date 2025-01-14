require("./esm.9590f010.js");
require("./inspect.52739ca5.js");
require("./sanitizer.1a683bd1.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $hACYf = parcelRequire("hACYf");
var $7b3b362e6b536f78$exports = {};
$7b3b362e6b536f78$exports = new URL("inspect.52739ca5.js", "file:" + __filename).toString();



var $eqRMq = parcelRequire("eqRMq");
const $8fbdfa199844e0b8$var$errorSanitizer = new (0, $eqRMq.Sanitizer)();
class $8fbdfa199844e0b8$export$dc24566375af80f3 extends Error {
    constructor(message, options = {}){
        super(message);
        this.name = "RestError";
        this.code = options.code;
        this.statusCode = options.statusCode;
        // The request and response may contain sensitive information in the headers or body.
        // To help prevent this sensitive information being accidentally logged, the request and response
        // properties are marked as non-enumerable here. This prevents them showing up in the output of
        // JSON.stringify and console.log.
        Object.defineProperty(this, "request", {
            value: options.request,
            enumerable: false
        });
        Object.defineProperty(this, "response", {
            value: options.response,
            enumerable: false
        });
        Object.setPrototypeOf(this, $8fbdfa199844e0b8$export$dc24566375af80f3.prototype);
    }
    /**
     * Logging method for util.inspect in Node
     */ [(0, $7b3b362e6b536f78$exports.custom)]() {
        // Extract non-enumerable properties and add them back. This is OK since in this output the request and
        // response get sanitized.
        return `RestError: ${this.message} \n ${$8fbdfa199844e0b8$var$errorSanitizer.sanitize(Object.assign(Object.assign({}, this), {
            request: this.request,
            response: this.response
        }))}`;
    }
}
/**
 * Something went wrong when making the request.
 * This means the actual request failed for some reason,
 * such as a DNS issue or the connection being lost.
 */ $8fbdfa199844e0b8$export$dc24566375af80f3.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
/**
 * This means that parsing the response from the server failed.
 * It may have been malformed.
 */ $8fbdfa199844e0b8$export$dc24566375af80f3.PARSE_ERROR = "PARSE_ERROR";
function $8fbdfa199844e0b8$export$d5d5fe2886ccec3c(e) {
    if (e instanceof $8fbdfa199844e0b8$export$dc24566375af80f3) return true;
    return (0, $hACYf.isError)(e) && e.name === "RestError";
}


//# sourceMappingURL=restError.027e27ea.js.map
