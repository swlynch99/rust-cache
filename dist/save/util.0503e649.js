require("./errors.621f8b7b.js");
require("./util.26715e80.js");
var $19efB$assert = require("assert");


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


var $4V3Kr = parcelRequire("4V3Kr");
var $2b1fd9d2749baa2c$require$ResponseStatusCodeError = $4V3Kr.ResponseStatusCodeError;

var $1Z05w = parcelRequire("1Z05w");
var $2b1fd9d2749baa2c$require$toUSVString = $1Z05w.toUSVString;
async function $2b1fd9d2749baa2c$var$getResolveErrorBodyCallback({ callback: callback, body: body, contentType: contentType, statusCode: statusCode, statusMessage: statusMessage, headers: headers }) {
    $19efB$assert(body);
    let chunks = [];
    let limit = 0;
    for await (const chunk of body){
        chunks.push(chunk);
        limit += chunk.length;
        if (limit > 131072) {
            chunks = null;
            break;
        }
    }
    if (statusCode === 204 || !contentType || !chunks) {
        process.nextTick(callback, new $2b1fd9d2749baa2c$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers));
        return;
    }
    try {
        if (contentType.startsWith('application/json')) {
            const payload = JSON.parse($2b1fd9d2749baa2c$require$toUSVString(Buffer.concat(chunks)));
            process.nextTick(callback, new $2b1fd9d2749baa2c$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers, payload));
            return;
        }
        if (contentType.startsWith('text/')) {
            const payload = $2b1fd9d2749baa2c$require$toUSVString(Buffer.concat(chunks));
            process.nextTick(callback, new $2b1fd9d2749baa2c$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers, payload));
            return;
        }
    } catch (err) {
    // Process in a fallback if error
    }
    process.nextTick(callback, new $2b1fd9d2749baa2c$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers));
}
module.exports = {
    getResolveErrorBodyCallback: $2b1fd9d2749baa2c$var$getResolveErrorBodyCallback
};


//# sourceMappingURL=util.0503e649.js.map
