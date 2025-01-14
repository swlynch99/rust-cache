require("./AvroReadable.30521837.js");
require("./commonjs.e525fcd7.js");


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
var $f1b492b68a03faca$exports = {};
$f1b492b68a03faca$exports = new URL("AvroReadable.30521837.js", "file:" + __filename).toString();



var $4H7QA = parcelRequire("4H7QA");
const $f912dae6c97be1e7$var$ABORT_ERROR = new (0, $4H7QA.AbortError)("Reading from the avro stream was aborted.");
class $f912dae6c97be1e7$export$c71ee411757ecd03 extends (0, $f1b492b68a03faca$exports.AvroReadable) {
    toUint8Array(data) {
        if (typeof data === "string") return Buffer.from(data);
        return data;
    }
    constructor(readable){
        super();
        this._readable = readable;
        this._position = 0;
    }
    get position() {
        return this._position;
    }
    async read(size, options = {}) {
        var _a;
        if ((_a = options.abortSignal) === null || _a === void 0 ? void 0 : _a.aborted) throw $f912dae6c97be1e7$var$ABORT_ERROR;
        if (size < 0) throw new Error(`size parameter should be positive: ${size}`);
        if (size === 0) return new Uint8Array();
        if (!this._readable.readable) throw new Error("Stream no longer readable.");
        // See if there is already enough data.
        const chunk = this._readable.read(size);
        if (chunk) {
            this._position += chunk.length;
            // chunk.length maybe less than desired size if the stream ends.
            return this.toUint8Array(chunk);
        } else // register callback to wait for enough data to read
        return new Promise((resolve, reject)=>{
            /* eslint-disable @typescript-eslint/no-use-before-define */ const cleanUp = ()=>{
                this._readable.removeListener("readable", readableCallback);
                this._readable.removeListener("error", rejectCallback);
                this._readable.removeListener("end", rejectCallback);
                this._readable.removeListener("close", rejectCallback);
                if (options.abortSignal) options.abortSignal.removeEventListener("abort", abortHandler);
            };
            const readableCallback = ()=>{
                const callbackChunk = this._readable.read(size);
                if (callbackChunk) {
                    this._position += callbackChunk.length;
                    cleanUp();
                    // callbackChunk.length maybe less than desired size if the stream ends.
                    resolve(this.toUint8Array(callbackChunk));
                }
            };
            const rejectCallback = ()=>{
                cleanUp();
                reject();
            };
            const abortHandler = ()=>{
                cleanUp();
                reject($f912dae6c97be1e7$var$ABORT_ERROR);
            };
            this._readable.on("readable", readableCallback);
            this._readable.once("error", rejectCallback);
            this._readable.once("end", rejectCallback);
            this._readable.once("close", rejectCallback);
            if (options.abortSignal) options.abortSignal.addEventListener("abort", abortHandler);
        /* eslint-enable @typescript-eslint/no-use-before-define */ });
    }
}


