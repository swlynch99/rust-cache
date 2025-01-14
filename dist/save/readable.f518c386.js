require("./_stream_readable.c863737c.js");
require("./_stream_writable.6e9785d8.js");
require("./_stream_duplex.1ab8a7bb.js");
require("./_stream_transform.d5e8f618.js");
require("./_stream_passthrough.38d43255.js");
require("./end-of-stream.6c3b7c21.js");
require("./pipeline.2130ebbd.js");
var $fNZYH$stream = require("stream");


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
parcelRegister("7w6ly", function(module, exports) {








if (process.env.READABLE_STREAM === 'disable' && $fNZYH$stream) {
    module.exports = $fNZYH$stream.Readable;
    Object.assign(module.exports, $fNZYH$stream);
    module.exports.Stream = $fNZYH$stream;
} else {
    exports = module.exports = (parcelRequire("ku0q1"));
    exports.Stream = $fNZYH$stream || exports;
    exports.Readable = exports;
    exports.Writable = (parcelRequire("wphgI"));
    exports.Duplex = (parcelRequire("1HDuU"));
    exports.Transform = (parcelRequire("6sIwa"));
    exports.PassThrough = (parcelRequire("2piju"));
    exports.finished = (parcelRequire("gkUES"));
    exports.pipeline = (parcelRequire("eSkHf"));
}

});
parcelRegister("ku0q1", function(module, exports) {
module.exports = new URL("_stream_readable.c863737c.js", "file:" + __filename).toString();

});

parcelRegister("6sIwa", function(module, exports) {
module.exports = new URL("_stream_transform.d5e8f618.js", "file:" + __filename).toString();

});

parcelRegister("2piju", function(module, exports) {
module.exports = new URL("_stream_passthrough.38d43255.js", "file:" + __filename).toString();

});

parcelRegister("eSkHf", function(module, exports) {
module.exports = new URL("pipeline.2130ebbd.js", "file:" + __filename).toString();

});



