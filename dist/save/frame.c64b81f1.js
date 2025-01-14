require("./constants.2c9fb4db.js");


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
'use strict';

var $1emXN = parcelRequire("1emXN");
var $a3d1b8b2c48f2cc7$require$maxUnsigned16Bit = $1emXN.maxUnsigned16Bit;
/** @type {import('crypto')} */ let $a3d1b8b2c48f2cc7$var$crypto;

try {
    $a3d1b8b2c48f2cc7$var$crypto = $a3d1b8b2c48f2cc7$import$804f562e18a94705;
} catch  {}
class $a3d1b8b2c48f2cc7$var$WebsocketFrameSend {
    /**
   * @param {Buffer|undefined} data
   */ constructor(data){
        this.frameData = data;
        this.maskKey = $a3d1b8b2c48f2cc7$var$crypto.randomBytes(4);
    }
    createFrame(opcode) {
        const bodyLength = this.frameData?.byteLength ?? 0;
        /** @type {number} */ let payloadLength = bodyLength // 0-125
        ;
        let offset = 6;
        if (bodyLength > $a3d1b8b2c48f2cc7$require$maxUnsigned16Bit) {
            offset += 8 // payload length is next 8 bytes
            ;
            payloadLength = 127;
        } else if (bodyLength > 125) {
            offset += 2 // payload length is next 2 bytes
            ;
            payloadLength = 126;
        }
        const buffer = Buffer.allocUnsafe(bodyLength + offset);
        // Clear first 2 bytes, everything else is overwritten
        buffer[0] = buffer[1] = 0;
        buffer[0] |= 0x80 // FIN
        ;
        buffer[0] = (buffer[0] & 0xF0) + opcode // opcode
        ;
        /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */ buffer[offset - 4] = this.maskKey[0];
        buffer[offset - 3] = this.maskKey[1];
        buffer[offset - 2] = this.maskKey[2];
        buffer[offset - 1] = this.maskKey[3];
        buffer[1] = payloadLength;
        if (payloadLength === 126) buffer.writeUInt16BE(bodyLength, 2);
        else if (payloadLength === 127) {
            // Clear extended payload length
            buffer[2] = buffer[3] = 0;
            buffer.writeUIntBE(bodyLength, 4, 6);
        }
        buffer[1] |= 0x80 // MASK
        ;
        // mask body
        for(let i = 0; i < bodyLength; i++)buffer[offset + i] = this.frameData[i] ^ this.maskKey[i % 4];
        return buffer;
    }
}
module.exports = {
    WebsocketFrameSend: $a3d1b8b2c48f2cc7$var$WebsocketFrameSend
};


