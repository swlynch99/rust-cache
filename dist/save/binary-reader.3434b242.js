require("./binary-format-contract.cd42ad69.js");
require("./pb-long.7b98d13d.js");
require("./goog-varint.7bc628fc.js");


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

var $8eg75 = parcelRequire("8eg75");

var $7crDo = parcelRequire("7crDo");

var $jWFfq = parcelRequire("jWFfq");
const $5844f4d47c9cb60e$var$defaultsRead = {
    readUnknownField: true,
    readerFactory: (bytes)=>new $5844f4d47c9cb60e$export$76c443c41c20b286(bytes)
};
function $5844f4d47c9cb60e$export$970bd8e9fb5f0092(options) {
    return options ? Object.assign(Object.assign({}, $5844f4d47c9cb60e$var$defaultsRead), options) : $5844f4d47c9cb60e$var$defaultsRead;
}
class $5844f4d47c9cb60e$export$76c443c41c20b286 {
    constructor(buf, textDecoder){
        this.varint64 = (0, $jWFfq.varint64read); // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */ this.uint32 = (0, $jWFfq.varint32read); // dirty cast for `this` and access to protected `buf`
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder("utf-8", {
            fatal: true,
            ignoreBOM: true
        });
    }
    /**
     * Reads a tag - field number and wire type.
     */ tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5) throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [
            fieldNo,
            wireType
        ];
    }
    /**
     * Skip one element on the wire and return the skipped data.
     * Supports WireType.StartGroup since v2.0.0-alpha.23.
     */ skip(wireType) {
        let start = this.pos;
        // noinspection FallThroughInSwitchStatementJS
        switch(wireType){
            case (0, $8eg75.WireType).Varint:
                while(this.buf[this.pos++] & 0x80);
                break;
            case (0, $8eg75.WireType).Bit64:
                this.pos += 4;
            case (0, $8eg75.WireType).Bit32:
                this.pos += 4;
                break;
            case (0, $8eg75.WireType).LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case (0, $8eg75.WireType).StartGroup:
                // From descriptor.proto: Group type is deprecated, not supported in proto3.
                // But we must still be able to parse and treat as unknown.
                let t;
                while((t = this.tag()[1]) !== (0, $8eg75.WireType).EndGroup)this.skip(t);
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */ assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */ int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */ sint32() {
        let zze = this.uint32();
        // decode zigzag
        return zze >>> 1 ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */ int64() {
        return new (0, $7crDo.PbLong)(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */ uint64() {
        return new (0, $7crDo.PbULong)(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */ sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
        hi = hi >>> 1 ^ s;
        return new (0, $7crDo.PbLong)(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */ bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */ fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */ sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */ fixed64() {
        return new (0, $7crDo.PbULong)(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */ sfixed64() {
        return new (0, $7crDo.PbLong)(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */ float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */ double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */ bytes() {
        let len = this.uint32();
        let start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */ string() {
        return this.textDecoder.decode(this.bytes());
    }
}


//# sourceMappingURL=binary-reader.3434b242.js.map
