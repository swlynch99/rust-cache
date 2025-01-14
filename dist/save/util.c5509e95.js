require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
var $s3prQ$assert = require("assert");


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


var $hA22O = parcelRequire("hA22O");
var $9919923520387245$require$ResponseStatusCodeError = $hA22O.ResponseStatusCodeError;

var $iiSZx = parcelRequire("iiSZx");
var $9919923520387245$require$toUSVString = $iiSZx.toUSVString;
async function $9919923520387245$var$getResolveErrorBodyCallback({ callback: callback, body: body, contentType: contentType, statusCode: statusCode, statusMessage: statusMessage, headers: headers }) {
    $s3prQ$assert(body);
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
        process.nextTick(callback, new $9919923520387245$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers));
        return;
    }
    try {
        if (contentType.startsWith('application/json')) {
            const payload = JSON.parse($9919923520387245$require$toUSVString(Buffer.concat(chunks)));
            process.nextTick(callback, new $9919923520387245$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers, payload));
            return;
        }
        if (contentType.startsWith('text/')) {
            const payload = $9919923520387245$require$toUSVString(Buffer.concat(chunks));
            process.nextTick(callback, new $9919923520387245$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers, payload));
            return;
        }
    } catch (err) {
    // Process in a fallback if error
    }
    process.nextTick(callback, new $9919923520387245$require$ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`, statusCode, headers));
}
module.exports = {
    getResolveErrorBodyCallback: $9919923520387245$var$getResolveErrorBodyCallback
};


