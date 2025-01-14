require("./tslib.es6.69735110.js");
require("./AvroConstants.a3eadfce.js");
require("./AvroParser.c74da963.js");
require("./utils.common.8509e47d.js");


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
var $5e7ceaced969706a$exports = {};
$5e7ceaced969706a$exports = new URL("AvroConstants.a3eadfce.js", "file:" + __filename).toString();


var $e45d00bd434d4ae9$exports = {};
$e45d00bd434d4ae9$exports = new URL("AvroParser.c74da963.js", "file:" + __filename).toString();


var $e0775c61e3b31cd0$exports = {};
$e0775c61e3b31cd0$exports = new URL("utils.common.8509e47d.js", "file:" + __filename).toString();


class $cce6aff6643da7c9$export$a5684fe7b8791920 {
    get blockOffset() {
        return this._blockOffset;
    }
    get objectIndex() {
        return this._objectIndex;
    }
    constructor(dataStream, headerStream, currentBlockOffset, indexWithinCurrentBlock){
        this._dataStream = dataStream;
        this._headerStream = headerStream || dataStream;
        this._initialized = false;
        this._blockOffset = currentBlockOffset || 0;
        this._objectIndex = indexWithinCurrentBlock || 0;
        this._initialBlockOffset = currentBlockOffset || 0;
    }
    async initialize(options = {}) {
        const header = await (0, $e45d00bd434d4ae9$exports.AvroParser).readFixedBytes(this._headerStream, (0, $5e7ceaced969706a$exports.AVRO_INIT_BYTES).length, {
            abortSignal: options.abortSignal
        });
        if (!(0, $e0775c61e3b31cd0$exports.arraysEqual)(header, (0, $5e7ceaced969706a$exports.AVRO_INIT_BYTES))) throw new Error("Stream is not an Avro file.");
        // File metadata is written as if defined by the following map schema:
        // { "type": "map", "values": "bytes"}
        this._metadata = await (0, $e45d00bd434d4ae9$exports.AvroParser).readMap(this._headerStream, (0, $e45d00bd434d4ae9$exports.AvroParser).readString, {
            abortSignal: options.abortSignal
        });
        // Validate codec
        const codec = this._metadata[0, $5e7ceaced969706a$exports.AVRO_CODEC_KEY];
        if (!(codec === undefined || codec === null || codec === "null")) throw new Error("Codecs are not supported");
        // The 16-byte, randomly-generated sync marker for this file.
        this._syncMarker = await (0, $e45d00bd434d4ae9$exports.AvroParser).readFixedBytes(this._headerStream, (0, $5e7ceaced969706a$exports.AVRO_SYNC_MARKER_SIZE), {
            abortSignal: options.abortSignal
        });
        // Parse the schema
        const schema = JSON.parse(this._metadata[0, $5e7ceaced969706a$exports.AVRO_SCHEMA_KEY]);
        this._itemType = (0, $e45d00bd434d4ae9$exports.AvroType).fromSchema(schema);
        if (this._blockOffset === 0) this._blockOffset = this._initialBlockOffset + this._dataStream.position;
        this._itemsRemainingInBlock = await (0, $e45d00bd434d4ae9$exports.AvroParser).readLong(this._dataStream, {
            abortSignal: options.abortSignal
        });
        // skip block length
        await (0, $e45d00bd434d4ae9$exports.AvroParser).readLong(this._dataStream, {
            abortSignal: options.abortSignal
        });
        this._initialized = true;
        if (this._objectIndex && this._objectIndex > 0) for(let i = 0; i < this._objectIndex; i++){
            await this._itemType.read(this._dataStream, {
                abortSignal: options.abortSignal
            });
            this._itemsRemainingInBlock--;
        }
    }
    hasNext() {
        return !this._initialized || this._itemsRemainingInBlock > 0;
    }
    parseObjects() {
        return (0, $7PS2Y.__asyncGenerator)(this, arguments, function* parseObjects_1(options = {}) {
            if (!this._initialized) yield (0, $7PS2Y.__await)(this.initialize(options));
            while(this.hasNext()){
                const result = yield (0, $7PS2Y.__await)(this._itemType.read(this._dataStream, {
                    abortSignal: options.abortSignal
                }));
                this._itemsRemainingInBlock--;
                this._objectIndex++;
                if (this._itemsRemainingInBlock === 0) {
                    const marker = yield (0, $7PS2Y.__await)((0, $e45d00bd434d4ae9$exports.AvroParser).readFixedBytes(this._dataStream, (0, $5e7ceaced969706a$exports.AVRO_SYNC_MARKER_SIZE), {
                        abortSignal: options.abortSignal
                    }));
                    this._blockOffset = this._initialBlockOffset + this._dataStream.position;
                    this._objectIndex = 0;
                    if (!(0, $e0775c61e3b31cd0$exports.arraysEqual)(this._syncMarker, marker)) throw new Error("Stream is not a valid Avro file.");
                    try {
                        this._itemsRemainingInBlock = yield (0, $7PS2Y.__await)((0, $e45d00bd434d4ae9$exports.AvroParser).readLong(this._dataStream, {
                            abortSignal: options.abortSignal
                        }));
                    } catch (_a) {
                        // We hit the end of the stream.
                        this._itemsRemainingInBlock = 0;
                    }
                    if (this._itemsRemainingInBlock > 0) // Ignore block size
                    yield (0, $7PS2Y.__await)((0, $e45d00bd434d4ae9$exports.AvroParser).readLong(this._dataStream, {
                        abortSignal: options.abortSignal
                    }));
                }
                yield yield (0, $7PS2Y.__await)(result);
            }
        });
    }
}


//# sourceMappingURL=AvroReader.560c0514.js.map
