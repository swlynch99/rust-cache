require("./tslib.es6.2d62ff9b.js");
require("./AvroConstants.b6f817e8.js");
require("./AvroParser.c71852c7.js");
require("./utils.common.5e85aa83.js");


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
var $46b43f4bb5060dfc$exports = {};
$46b43f4bb5060dfc$exports = new URL("AvroConstants.b6f817e8.js", "file:" + __filename).toString();


var $64dfa09d0192ac63$exports = {};
$64dfa09d0192ac63$exports = new URL("AvroParser.c71852c7.js", "file:" + __filename).toString();


var $8feca1f0135939f5$exports = {};
$8feca1f0135939f5$exports = new URL("utils.common.5e85aa83.js", "file:" + __filename).toString();


class $6132ce918befcc14$export$a5684fe7b8791920 {
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
        const header = await (0, $64dfa09d0192ac63$exports.AvroParser).readFixedBytes(this._headerStream, (0, $46b43f4bb5060dfc$exports.AVRO_INIT_BYTES).length, {
            abortSignal: options.abortSignal
        });
        if (!(0, $8feca1f0135939f5$exports.arraysEqual)(header, (0, $46b43f4bb5060dfc$exports.AVRO_INIT_BYTES))) throw new Error("Stream is not an Avro file.");
        // File metadata is written as if defined by the following map schema:
        // { "type": "map", "values": "bytes"}
        this._metadata = await (0, $64dfa09d0192ac63$exports.AvroParser).readMap(this._headerStream, (0, $64dfa09d0192ac63$exports.AvroParser).readString, {
            abortSignal: options.abortSignal
        });
        // Validate codec
        const codec = this._metadata[0, $46b43f4bb5060dfc$exports.AVRO_CODEC_KEY];
        if (!(codec === undefined || codec === null || codec === "null")) throw new Error("Codecs are not supported");
        // The 16-byte, randomly-generated sync marker for this file.
        this._syncMarker = await (0, $64dfa09d0192ac63$exports.AvroParser).readFixedBytes(this._headerStream, (0, $46b43f4bb5060dfc$exports.AVRO_SYNC_MARKER_SIZE), {
            abortSignal: options.abortSignal
        });
        // Parse the schema
        const schema = JSON.parse(this._metadata[0, $46b43f4bb5060dfc$exports.AVRO_SCHEMA_KEY]);
        this._itemType = (0, $64dfa09d0192ac63$exports.AvroType).fromSchema(schema);
        if (this._blockOffset === 0) this._blockOffset = this._initialBlockOffset + this._dataStream.position;
        this._itemsRemainingInBlock = await (0, $64dfa09d0192ac63$exports.AvroParser).readLong(this._dataStream, {
            abortSignal: options.abortSignal
        });
        // skip block length
        await (0, $64dfa09d0192ac63$exports.AvroParser).readLong(this._dataStream, {
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
        return (0, $8FaNO.__asyncGenerator)(this, arguments, function* parseObjects_1(options = {}) {
            if (!this._initialized) yield (0, $8FaNO.__await)(this.initialize(options));
            while(this.hasNext()){
                const result = yield (0, $8FaNO.__await)(this._itemType.read(this._dataStream, {
                    abortSignal: options.abortSignal
                }));
                this._itemsRemainingInBlock--;
                this._objectIndex++;
                if (this._itemsRemainingInBlock === 0) {
                    const marker = yield (0, $8FaNO.__await)((0, $64dfa09d0192ac63$exports.AvroParser).readFixedBytes(this._dataStream, (0, $46b43f4bb5060dfc$exports.AVRO_SYNC_MARKER_SIZE), {
                        abortSignal: options.abortSignal
                    }));
                    this._blockOffset = this._initialBlockOffset + this._dataStream.position;
                    this._objectIndex = 0;
                    if (!(0, $8feca1f0135939f5$exports.arraysEqual)(this._syncMarker, marker)) throw new Error("Stream is not a valid Avro file.");
                    try {
                        this._itemsRemainingInBlock = yield (0, $8FaNO.__await)((0, $64dfa09d0192ac63$exports.AvroParser).readLong(this._dataStream, {
                            abortSignal: options.abortSignal
                        }));
                    } catch (_a) {
                        // We hit the end of the stream.
                        this._itemsRemainingInBlock = 0;
                    }
                    if (this._itemsRemainingInBlock > 0) // Ignore block size
                    yield (0, $8FaNO.__await)((0, $64dfa09d0192ac63$exports.AvroParser).readLong(this._dataStream, {
                        abortSignal: options.abortSignal
                    }));
                }
                yield yield (0, $8FaNO.__await)(result);
            }
        });
    }
}


