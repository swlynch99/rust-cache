require("./_stream_readable.ecf3b698.js");
require("./_stream_writable.3dddf52a.js");
require("./_stream_duplex.3c098e05.js");
require("./_stream_transform.d1cd52d4.js");
require("./_stream_passthrough.f01576a0.js");
require("./end-of-stream.eb2fc5e1.js");
require("./pipeline.002bf64b.js");
var $hhbkY$stream = require("stream");


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
parcelRegister("bX44b", function(module, exports) {








if (process.env.READABLE_STREAM === 'disable' && $hhbkY$stream) {
    module.exports = $hhbkY$stream.Readable;
    Object.assign(module.exports, $hhbkY$stream);
    module.exports.Stream = $hhbkY$stream;
} else {
    exports = module.exports = (parcelRequire("hLJ0r"));
    exports.Stream = $hhbkY$stream || exports;
    exports.Readable = exports;
    exports.Writable = (parcelRequire("jpokp"));
    exports.Duplex = (parcelRequire("9HhjW"));
    exports.Transform = (parcelRequire("2SbSO"));
    exports.PassThrough = (parcelRequire("9m7T7"));
    exports.finished = (parcelRequire("r88fS"));
    exports.pipeline = (parcelRequire("cABH1"));
}

});
parcelRegister("hLJ0r", function(module, exports) {
module.exports = new URL("_stream_readable.ecf3b698.js", "file:" + __filename).toString();

});

parcelRegister("2SbSO", function(module, exports) {
module.exports = new URL("_stream_transform.d1cd52d4.js", "file:" + __filename).toString();

});

parcelRegister("9m7T7", function(module, exports) {
module.exports = new URL("_stream_passthrough.f01576a0.js", "file:" + __filename).toString();

});

parcelRegister("cABH1", function(module, exports) {
module.exports = new URL("pipeline.002bf64b.js", "file:" + __filename).toString();

});



//# sourceMappingURL=readable.d7c7d328.js.map
