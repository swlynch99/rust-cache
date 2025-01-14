require("./tslib.es6.2d62ff9b.js");
require("./typeGuards.97fbaafd.js");
require("./file.7ff2c488.js");
var $7vGZt$nodestream = require("node:stream");


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

var $8FaNO = parcelRequire("8FaNO");

var $1182e0256caff5b3$exports = {};
$1182e0256caff5b3$exports = new URL("typeGuards.97fbaafd.js", "file:" + __filename).toString();


var $6081ee5297ee5021$exports = {};
$6081ee5297ee5021$exports = new URL("file.7ff2c488.js", "file:" + __filename).toString();


function $0db02c5a34bd4c3a$var$streamAsyncIterator() {
    return (0, $8FaNO.__asyncGenerator)(this, arguments, function* streamAsyncIterator_1() {
        const reader = this.getReader();
        try {
            while(true){
                const { done: done, value: value } = yield (0, $8FaNO.__await)(reader.read());
                if (done) return yield (0, $8FaNO.__await)(void 0);
                yield yield (0, $8FaNO.__await)(value);
            }
        } finally{
            reader.releaseLock();
        }
    });
}
function $0db02c5a34bd4c3a$var$makeAsyncIterable(webStream) {
    if (!webStream[Symbol.asyncIterator]) webStream[Symbol.asyncIterator] = $0db02c5a34bd4c3a$var$streamAsyncIterator.bind(webStream);
    if (!webStream.values) webStream.values = $0db02c5a34bd4c3a$var$streamAsyncIterator.bind(webStream);
}
function $0db02c5a34bd4c3a$var$ensureNodeStream(stream) {
    if (stream instanceof ReadableStream) {
        $0db02c5a34bd4c3a$var$makeAsyncIterable(stream);
        return (0, $7vGZt$nodestream.Readable).fromWeb(stream);
    } else return stream;
}
function $0db02c5a34bd4c3a$var$toStream(source) {
    if (source instanceof Uint8Array) return (0, $7vGZt$nodestream.Readable).from(Buffer.from(source));
    else if ((0, $1182e0256caff5b3$exports.isBlob)(source)) return $0db02c5a34bd4c3a$var$toStream((0, $6081ee5297ee5021$exports.getRawContent)(source));
    else return $0db02c5a34bd4c3a$var$ensureNodeStream(source);
}
async function $0db02c5a34bd4c3a$export$ee1b3e54f0441b22(sources) {
    return function() {
        const streams = sources.map((x)=>typeof x === "function" ? x() : x).map($0db02c5a34bd4c3a$var$toStream);
        return (0, $7vGZt$nodestream.Readable).from(function() {
            return (0, $8FaNO.__asyncGenerator)(this, arguments, function*() {
                var _a, e_1, _b, _c;
                for (const stream of streams)try {
                    for(var _d = true, stream_1 = (e_1 = void 0, (0, $8FaNO.__asyncValues)(stream)), stream_1_1; stream_1_1 = yield (0, $8FaNO.__await)(stream_1.next()), _a = stream_1_1.done, !_a; _d = true){
                        _c = stream_1_1.value;
                        _d = false;
                        const chunk = _c;
                        yield yield (0, $8FaNO.__await)(chunk);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (!_d && !_a && (_b = stream_1.return)) yield (0, $8FaNO.__await)(_b.call(stream_1));
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            });
        }());
    };
}


