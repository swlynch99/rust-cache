require("./constants.2c9fb4db.js");
require("./symbols.af1b52d6.js");
require("./util.fa0fe0c6.js");
require("./frame.c64b81f1.js");
var $76yKy$stream = require("stream");
var $76yKy$diagnostics_channel = require("diagnostics_channel");


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

var $285cc3a110ebdd5f$require$Writable = $76yKy$stream.Writable;


var $1emXN = parcelRequire("1emXN");
var $285cc3a110ebdd5f$require$parserStates = $1emXN.parserStates;
var $285cc3a110ebdd5f$require$opcodes = $1emXN.opcodes;
var $285cc3a110ebdd5f$require$states = $1emXN.states;
var $285cc3a110ebdd5f$require$emptyBuffer = $1emXN.emptyBuffer;

var $kldIv = parcelRequire("kldIv");
var $285cc3a110ebdd5f$require$kReadyState = $kldIv.kReadyState;
var $285cc3a110ebdd5f$require$kSentClose = $kldIv.kSentClose;
var $285cc3a110ebdd5f$require$kResponse = $kldIv.kResponse;
var $285cc3a110ebdd5f$require$kReceivedClose = $kldIv.kReceivedClose;

var $6yIOs = parcelRequire("6yIOs");
var $285cc3a110ebdd5f$require$isValidStatusCode = $6yIOs.isValidStatusCode;
var $285cc3a110ebdd5f$require$failWebsocketConnection = $6yIOs.failWebsocketConnection;
var $285cc3a110ebdd5f$require$websocketMessageReceived = $6yIOs.websocketMessageReceived;

var $e40mD = parcelRequire("e40mD");
var $285cc3a110ebdd5f$require$WebsocketFrameSend = $e40mD.WebsocketFrameSend;
// This code was influenced by ws released under the MIT license.
// Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
// Copyright (c) 2013 Arnout Kazemier and contributors
// Copyright (c) 2016 Luigi Pinca and contributors
const $285cc3a110ebdd5f$var$channels = {};
$285cc3a110ebdd5f$var$channels.ping = $76yKy$diagnostics_channel.channel('undici:websocket:ping');
$285cc3a110ebdd5f$var$channels.pong = $76yKy$diagnostics_channel.channel('undici:websocket:pong');
class $285cc3a110ebdd5f$var$ByteParser extends $285cc3a110ebdd5f$require$Writable {
    #buffers = [];
    #byteOffset = 0;
    #state = $285cc3a110ebdd5f$require$parserStates.INFO;
    #info = {};
    #fragments = [];
    constructor(ws){
        super();
        this.ws = ws;
    }
    /**
   * @param {Buffer} chunk
   * @param {() => void} callback
   */ _write(chunk, _, callback) {
        this.#buffers.push(chunk);
        this.#byteOffset += chunk.length;
        this.run(callback);
    }
    /**
   * Runs whenever a new chunk is received.
   * Callback is called whenever there are no more chunks buffering,
   * or not enough bytes are buffered to parse.
   */ run(callback) {
        while(true){
            if (this.#state === $285cc3a110ebdd5f$require$parserStates.INFO) {
                // If there aren't enough bytes to parse the payload length, etc.
                if (this.#byteOffset < 2) return callback();
                const buffer = this.consume(2);
                this.#info.fin = (buffer[0] & 0x80) !== 0;
                this.#info.opcode = buffer[0] & 0x0F;
                // If we receive a fragmented message, we use the type of the first
                // frame to parse the full message as binary/text, when it's terminated
                this.#info.originalOpcode ??= this.#info.opcode;
                this.#info.fragmented = !this.#info.fin && this.#info.opcode !== $285cc3a110ebdd5f$require$opcodes.CONTINUATION;
                if (this.#info.fragmented && this.#info.opcode !== $285cc3a110ebdd5f$require$opcodes.BINARY && this.#info.opcode !== $285cc3a110ebdd5f$require$opcodes.TEXT) {
                    // Only text and binary frames can be fragmented
                    $285cc3a110ebdd5f$require$failWebsocketConnection(this.ws, 'Invalid frame type was fragmented.');
                    return;
                }
                const payloadLength = buffer[1] & 0x7F;
                if (payloadLength <= 125) {
                    this.#info.payloadLength = payloadLength;
                    this.#state = $285cc3a110ebdd5f$require$parserStates.READ_DATA;
                } else if (payloadLength === 126) this.#state = $285cc3a110ebdd5f$require$parserStates.PAYLOADLENGTH_16;
                else if (payloadLength === 127) this.#state = $285cc3a110ebdd5f$require$parserStates.PAYLOADLENGTH_64;
                if (this.#info.fragmented && payloadLength > 125) {
                    // A fragmented frame can't be fragmented itself
                    $285cc3a110ebdd5f$require$failWebsocketConnection(this.ws, 'Fragmented frame exceeded 125 bytes.');
                    return;
                } else if ((this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.PING || this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.PONG || this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.CLOSE) && payloadLength > 125) {
                    // Control frames can have a payload length of 125 bytes MAX
                    $285cc3a110ebdd5f$require$failWebsocketConnection(this.ws, 'Payload length for control frame exceeded 125 bytes.');
                    return;
                } else if (this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.CLOSE) {
                    if (payloadLength === 1) {
                        $285cc3a110ebdd5f$require$failWebsocketConnection(this.ws, 'Received close frame with a 1-byte body.');
                        return;
                    }
                    const body = this.consume(payloadLength);
                    this.#info.closeInfo = this.parseCloseBody(false, body);
                    if (!this.ws[$285cc3a110ebdd5f$require$kSentClose]) {
                        // If an endpoint receives a Close frame and did not previously send a
                        // Close frame, the endpoint MUST send a Close frame in response.  (When
                        // sending a Close frame in response, the endpoint typically echos the
                        // status code it received.)
                        const body = Buffer.allocUnsafe(2);
                        body.writeUInt16BE(this.#info.closeInfo.code, 0);
                        const closeFrame = new $285cc3a110ebdd5f$require$WebsocketFrameSend(body);
                        this.ws[$285cc3a110ebdd5f$require$kResponse].socket.write(closeFrame.createFrame($285cc3a110ebdd5f$require$opcodes.CLOSE), (err)=>{
                            if (!err) this.ws[$285cc3a110ebdd5f$require$kSentClose] = true;
                        });
                    }
                    // Upon either sending or receiving a Close control frame, it is said
                    // that _The WebSocket Closing Handshake is Started_ and that the
                    // WebSocket connection is in the CLOSING state.
                    this.ws[$285cc3a110ebdd5f$require$kReadyState] = $285cc3a110ebdd5f$require$states.CLOSING;
                    this.ws[$285cc3a110ebdd5f$require$kReceivedClose] = true;
                    this.end();
                    return;
                } else if (this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.PING) {
                    // Upon receipt of a Ping frame, an endpoint MUST send a Pong frame in
                    // response, unless it already received a Close frame.
                    // A Pong frame sent in response to a Ping frame must have identical
                    // "Application data"
                    const body = this.consume(payloadLength);
                    if (!this.ws[$285cc3a110ebdd5f$require$kReceivedClose]) {
                        const frame = new $285cc3a110ebdd5f$require$WebsocketFrameSend(body);
                        this.ws[$285cc3a110ebdd5f$require$kResponse].socket.write(frame.createFrame($285cc3a110ebdd5f$require$opcodes.PONG));
                        if ($285cc3a110ebdd5f$var$channels.ping.hasSubscribers) $285cc3a110ebdd5f$var$channels.ping.publish({
                            payload: body
                        });
                    }
                    this.#state = $285cc3a110ebdd5f$require$parserStates.INFO;
                    if (this.#byteOffset > 0) continue;
                    else {
                        callback();
                        return;
                    }
                } else if (this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.PONG) {
                    // A Pong frame MAY be sent unsolicited.  This serves as a
                    // unidirectional heartbeat.  A response to an unsolicited Pong frame is
                    // not expected.
                    const body = this.consume(payloadLength);
                    if ($285cc3a110ebdd5f$var$channels.pong.hasSubscribers) $285cc3a110ebdd5f$var$channels.pong.publish({
                        payload: body
                    });
                    if (this.#byteOffset > 0) continue;
                    else {
                        callback();
                        return;
                    }
                }
            } else if (this.#state === $285cc3a110ebdd5f$require$parserStates.PAYLOADLENGTH_16) {
                if (this.#byteOffset < 2) return callback();
                const buffer = this.consume(2);
                this.#info.payloadLength = buffer.readUInt16BE(0);
                this.#state = $285cc3a110ebdd5f$require$parserStates.READ_DATA;
            } else if (this.#state === $285cc3a110ebdd5f$require$parserStates.PAYLOADLENGTH_64) {
                if (this.#byteOffset < 8) return callback();
                const buffer = this.consume(8);
                const upper = buffer.readUInt32BE(0);
                // 2^31 is the maxinimum bytes an arraybuffer can contain
                // on 32-bit systems. Although, on 64-bit systems, this is
                // 2^53-1 bytes.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length
                // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/common/globals.h;drc=1946212ac0100668f14eb9e2843bdd846e510a1e;bpv=1;bpt=1;l=1275
                // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/js-array-buffer.h;l=34;drc=1946212ac0100668f14eb9e2843bdd846e510a1e
                if (upper > 2 ** 31 - 1) {
                    $285cc3a110ebdd5f$require$failWebsocketConnection(this.ws, 'Received payload length > 2^31 bytes.');
                    return;
                }
                const lower = buffer.readUInt32BE(4);
                this.#info.payloadLength = (upper << 8) + lower;
                this.#state = $285cc3a110ebdd5f$require$parserStates.READ_DATA;
            } else if (this.#state === $285cc3a110ebdd5f$require$parserStates.READ_DATA) {
                if (this.#byteOffset < this.#info.payloadLength) // If there is still more data in this chunk that needs to be read
                return callback();
                else if (this.#byteOffset >= this.#info.payloadLength) {
                    // If the server sent multiple frames in a single chunk
                    const body = this.consume(this.#info.payloadLength);
                    this.#fragments.push(body);
                    // If the frame is unfragmented, or a fragmented frame was terminated,
                    // a message was received
                    if (!this.#info.fragmented || this.#info.fin && this.#info.opcode === $285cc3a110ebdd5f$require$opcodes.CONTINUATION) {
                        const fullMessage = Buffer.concat(this.#fragments);
                        $285cc3a110ebdd5f$require$websocketMessageReceived(this.ws, this.#info.originalOpcode, fullMessage);
                        this.#info = {};
                        this.#fragments.length = 0;
                    }
                    this.#state = $285cc3a110ebdd5f$require$parserStates.INFO;
                }
            }
            if (this.#byteOffset > 0) continue;
            else {
                callback();
                break;
            }
        }
    }
    /**
   * Take n bytes from the buffered Buffers
   * @param {number} n
   * @returns {Buffer|null}
   */ consume(n) {
        if (n > this.#byteOffset) return null;
        else if (n === 0) return $285cc3a110ebdd5f$require$emptyBuffer;
        if (this.#buffers[0].length === n) {
            this.#byteOffset -= this.#buffers[0].length;
            return this.#buffers.shift();
        }
        const buffer = Buffer.allocUnsafe(n);
        let offset = 0;
        while(offset !== n){
            const next = this.#buffers[0];
            const { length: length } = next;
            if (length + offset === n) {
                buffer.set(this.#buffers.shift(), offset);
                break;
            } else if (length + offset > n) {
                buffer.set(next.subarray(0, n - offset), offset);
                this.#buffers[0] = next.subarray(n - offset);
                break;
            } else {
                buffer.set(this.#buffers.shift(), offset);
                offset += next.length;
            }
        }
        this.#byteOffset -= n;
        return buffer;
    }
    parseCloseBody(onlyCode, data) {
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.5
        /** @type {number|undefined} */ let code;
        if (data.length >= 2) // _The WebSocket Connection Close Code_ is
        // defined as the status code (Section 7.4) contained in the first Close
        // control frame received by the application
        code = data.readUInt16BE(0);
        if (onlyCode) {
            if (!$285cc3a110ebdd5f$require$isValidStatusCode(code)) return null;
            return {
                code: code
            };
        }
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.6
        /** @type {Buffer} */ let reason = data.subarray(2);
        // Remove BOM
        if (reason[0] === 0xEF && reason[1] === 0xBB && reason[2] === 0xBF) reason = reason.subarray(3);
        if (code !== undefined && !$285cc3a110ebdd5f$require$isValidStatusCode(code)) return null;
        try {
            // TODO: optimize this
            reason = new TextDecoder('utf-8', {
                fatal: true
            }).decode(reason);
        } catch  {
            return null;
        }
        return {
            code: code,
            reason: reason
        };
    }
    get closingInfo() {
        return this.#info.closeInfo;
    }
}
module.exports = {
    ByteParser: $285cc3a110ebdd5f$var$ByteParser
};


