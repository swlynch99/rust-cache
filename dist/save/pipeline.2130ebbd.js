require("./errors.f36c07ef.js");
require("./end-of-stream.6c3b7c21.js");


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
parcelRegister("enHEY", function(module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var $02b3b1e1831ab317$var$eos;
function $02b3b1e1831ab317$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}

var $gvp3l = parcelRequire("gvp3l");
var $02b3b1e1831ab317$require$_require$codes = $gvp3l.codes;
var $02b3b1e1831ab317$var$ERR_MISSING_ARGS = $02b3b1e1831ab317$require$_require$codes.ERR_MISSING_ARGS, $02b3b1e1831ab317$var$ERR_STREAM_DESTROYED = $02b3b1e1831ab317$require$_require$codes.ERR_STREAM_DESTROYED;
function $02b3b1e1831ab317$var$noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function $02b3b1e1831ab317$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}

function $02b3b1e1831ab317$var$destroyer(stream, reading, writing, callback) {
    callback = $02b3b1e1831ab317$var$once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if ($02b3b1e1831ab317$var$eos === undefined) $02b3b1e1831ab317$var$eos = (parcelRequire("gkUES"));
    $02b3b1e1831ab317$var$eos(stream, {
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
        if ($02b3b1e1831ab317$var$isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new $02b3b1e1831ab317$var$ERR_STREAM_DESTROYED('pipe'));
    };
}
function $02b3b1e1831ab317$var$call(fn) {
    fn();
}
function $02b3b1e1831ab317$var$pipe(from, to) {
    return from.pipe(to);
}
function $02b3b1e1831ab317$var$popCallback(streams) {
    if (!streams.length) return $02b3b1e1831ab317$var$noop;
    if (typeof streams[streams.length - 1] !== 'function') return $02b3b1e1831ab317$var$noop;
    return streams.pop();
}
function $02b3b1e1831ab317$var$pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = $02b3b1e1831ab317$var$popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new $02b3b1e1831ab317$var$ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return $02b3b1e1831ab317$var$destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach($02b3b1e1831ab317$var$call);
            if (reading) return;
            destroys.forEach($02b3b1e1831ab317$var$call);
            callback(error);
        });
    });
    return streams.reduce($02b3b1e1831ab317$var$pipe);
}
module.exports = $02b3b1e1831ab317$var$pipeline;

});


