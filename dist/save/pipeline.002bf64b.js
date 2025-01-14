require("./errors.786067ff.js");
require("./end-of-stream.eb2fc5e1.js");


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
parcelRegister("5O2OP", function(module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var $43a3cefed8411d63$var$eos;
function $43a3cefed8411d63$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}

var $2M35Y = parcelRequire("2M35Y");
var $43a3cefed8411d63$require$_require$codes = $2M35Y.codes;
var $43a3cefed8411d63$var$ERR_MISSING_ARGS = $43a3cefed8411d63$require$_require$codes.ERR_MISSING_ARGS, $43a3cefed8411d63$var$ERR_STREAM_DESTROYED = $43a3cefed8411d63$require$_require$codes.ERR_STREAM_DESTROYED;
function $43a3cefed8411d63$var$noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function $43a3cefed8411d63$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}

function $43a3cefed8411d63$var$destroyer(stream, reading, writing, callback) {
    callback = $43a3cefed8411d63$var$once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if ($43a3cefed8411d63$var$eos === undefined) $43a3cefed8411d63$var$eos = (parcelRequire("r88fS"));
    $43a3cefed8411d63$var$eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if ($43a3cefed8411d63$var$isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new $43a3cefed8411d63$var$ERR_STREAM_DESTROYED('pipe'));
    };
}
function $43a3cefed8411d63$var$call(fn) {
    fn();
}
function $43a3cefed8411d63$var$pipe(from, to) {
    return from.pipe(to);
}
function $43a3cefed8411d63$var$popCallback(streams) {
    if (!streams.length) return $43a3cefed8411d63$var$noop;
    if (typeof streams[streams.length - 1] !== 'function') return $43a3cefed8411d63$var$noop;
    return streams.pop();
}
function $43a3cefed8411d63$var$pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = $43a3cefed8411d63$var$popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new $43a3cefed8411d63$var$ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return $43a3cefed8411d63$var$destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach($43a3cefed8411d63$var$call);
            if (reading) return;
            destroys.forEach($43a3cefed8411d63$var$call);
            callback(error);
        });
    });
    return streams.reduce($43a3cefed8411d63$var$pipe);
}
module.exports = $43a3cefed8411d63$var$pipeline;

});


//# sourceMappingURL=pipeline.002bf64b.js.map
