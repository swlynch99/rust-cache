require("./tslib.es6.69735110.js");
require("./typeGuards.9f181394.js");
require("./file.10de4f92.js");
var $jwR41$nodestream = require("node:stream");


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

var $7PS2Y = parcelRequire("7PS2Y");

var $9dc123999d32ba62$exports = {};
$9dc123999d32ba62$exports = new URL("typeGuards.9f181394.js", "file:" + __filename).toString();


var $055d1c08e621c09d$exports = {};
$055d1c08e621c09d$exports = new URL("file.10de4f92.js", "file:" + __filename).toString();


function $5cc36b697c2044b5$var$streamAsyncIterator() {
    return (0, $7PS2Y.__asyncGenerator)(this, arguments, function* streamAsyncIterator_1() {
        const reader = this.getReader();
        try {
            while(true){
                const { done: done, value: value } = yield (0, $7PS2Y.__await)(reader.read());
                if (done) return yield (0, $7PS2Y.__await)(void 0);
                yield yield (0, $7PS2Y.__await)(value);
            }
        } finally{
            reader.releaseLock();
        }
    });
}
function $5cc36b697c2044b5$var$makeAsyncIterable(webStream) {
    if (!webStream[Symbol.asyncIterator]) webStream[Symbol.asyncIterator] = $5cc36b697c2044b5$var$streamAsyncIterator.bind(webStream);
    if (!webStream.values) webStream.values = $5cc36b697c2044b5$var$streamAsyncIterator.bind(webStream);
}
function $5cc36b697c2044b5$var$ensureNodeStream(stream) {
    if (stream instanceof ReadableStream) {
        $5cc36b697c2044b5$var$makeAsyncIterable(stream);
        return (0, $jwR41$nodestream.Readable).fromWeb(stream);
    } else return stream;
}
function $5cc36b697c2044b5$var$toStream(source) {
    if (source instanceof Uint8Array) return (0, $jwR41$nodestream.Readable).from(Buffer.from(source));
    else if ((0, $9dc123999d32ba62$exports.isBlob)(source)) return $5cc36b697c2044b5$var$toStream((0, $055d1c08e621c09d$exports.getRawContent)(source));
    else return $5cc36b697c2044b5$var$ensureNodeStream(source);
}
async function $5cc36b697c2044b5$export$ee1b3e54f0441b22(sources) {
    return function() {
        const streams = sources.map((x)=>typeof x === "function" ? x() : x).map($5cc36b697c2044b5$var$toStream);
        return (0, $jwR41$nodestream.Readable).from(function() {
            return (0, $7PS2Y.__asyncGenerator)(this, arguments, function*() {
                var _a, e_1, _b, _c;
                for (const stream of streams)try {
                    for(var _d = true, stream_1 = (e_1 = void 0, (0, $7PS2Y.__asyncValues)(stream)), stream_1_1; stream_1_1 = yield (0, $7PS2Y.__await)(stream_1.next()), _a = stream_1_1.done, !_a; _d = true){
                        _c = stream_1_1.value;
                        _d = false;
                        const chunk = _c;
                        yield yield (0, $7PS2Y.__await)(chunk);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (!_d && !_a && (_b = stream_1.return)) yield (0, $7PS2Y.__await)(_b.call(stream_1));
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            });
        }());
    };
}


//# sourceMappingURL=concat.63672f9b.js.map
