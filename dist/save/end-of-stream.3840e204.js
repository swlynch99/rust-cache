require("./once.79eafaa9.js");


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

var $i2aD4 = parcelRequire("i2aD4");
var $33bbca6ff5858f3f$var$noop = function() {};
var $33bbca6ff5858f3f$var$isRequest = function(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
};
var $33bbca6ff5858f3f$var$isChildProcess = function(stream) {
    return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
};
var $33bbca6ff5858f3f$var$eos = function(stream, opts, callback) {
    if (typeof opts === 'function') return $33bbca6ff5858f3f$var$eos(stream, null, opts);
    if (!opts) opts = {};
    callback = $i2aD4(callback || $33bbca6ff5858f3f$var$noop);
    var ws = stream._writableState;
    var rs = stream._readableState;
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var cancelled = false;
    var onlegacyfinish = function() {
        if (!stream.writable) onfinish();
    };
    var onfinish = function() {
        writable = false;
        if (!readable) callback.call(stream);
    };
    var onend = function() {
        readable = false;
        if (!writable) callback.call(stream);
    };
    var onexit = function(exitCode) {
        callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
    };
    var onerror = function(err) {
        callback.call(stream, err);
    };
    var onclose = function() {
        process.nextTick(onclosenexttick);
    };
    var onclosenexttick = function() {
        if (cancelled) return;
        if (readable && !(rs && rs.ended && !rs.destroyed)) return callback.call(stream, new Error('premature close'));
        if (writable && !(ws && ws.ended && !ws.destroyed)) return callback.call(stream, new Error('premature close'));
    };
    var onrequest = function() {
        stream.req.on('finish', onfinish);
    };
    if ($33bbca6ff5858f3f$var$isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !ws) {
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    if ($33bbca6ff5858f3f$var$isChildProcess(stream)) stream.on('exit', onexit);
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        cancelled = true;
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('exit', onexit);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
};
module.exports = $33bbca6ff5858f3f$var$eos;


//# sourceMappingURL=end-of-stream.3840e204.js.map
