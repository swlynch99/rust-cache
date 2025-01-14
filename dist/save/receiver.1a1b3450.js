require("./constants.478d9bec.js");
require("./symbols.601620ca.js");
require("./util.56c9e75a.js");
require("./frame.56567681.js");
var $4dkmd$stream = require("stream");
var $4dkmd$diagnostics_channel = require("diagnostics_channel");


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

var $d5b043d3e54a6f6c$require$Writable = $4dkmd$stream.Writable;


var $lKHMM = parcelRequire("lKHMM");
var $d5b043d3e54a6f6c$require$parserStates = $lKHMM.parserStates;
var $d5b043d3e54a6f6c$require$opcodes = $lKHMM.opcodes;
var $d5b043d3e54a6f6c$require$states = $lKHMM.states;
var $d5b043d3e54a6f6c$require$emptyBuffer = $lKHMM.emptyBuffer;

var $8bljN = parcelRequire("8bljN");
var $d5b043d3e54a6f6c$require$kReadyState = $8bljN.kReadyState;
var $d5b043d3e54a6f6c$require$kSentClose = $8bljN.kSentClose;
var $d5b043d3e54a6f6c$require$kResponse = $8bljN.kResponse;
var $d5b043d3e54a6f6c$require$kReceivedClose = $8bljN.kReceivedClose;

var $cahQ4 = parcelRequire("cahQ4");
var $d5b043d3e54a6f6c$require$isValidStatusCode = $cahQ4.isValidStatusCode;
var $d5b043d3e54a6f6c$require$failWebsocketConnection = $cahQ4.failWebsocketConnection;
var $d5b043d3e54a6f6c$require$websocketMessageReceived = $cahQ4.websocketMessageReceived;

var $6wfCF = parcelRequire("6wfCF");
var $d5b043d3e54a6f6c$require$WebsocketFrameSend = $6wfCF.WebsocketFrameSend;
// This code was influenced by ws released under the MIT license.
// Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
// Copyright (c) 2013 Arnout Kazemier and contributors
// Copyright (c) 2016 Luigi Pinca and contributors
const $d5b043d3e54a6f6c$var$channels = {};
$d5b043d3e54a6f6c$var$channels.ping = $4dkmd$diagnostics_channel.channel('undici:websocket:ping');
$d5b043d3e54a6f6c$var$channels.pong = $4dkmd$diagnostics_channel.channel('undici:websocket:pong');
class $d5b043d3e54a6f6c$var$ByteParser extends $d5b043d3e54a6f6c$require$Writable {
    #buffers = [];
    #byteOffset = 0;
    #state = $d5b043d3e54a6f6c$require$parserStates.INFO;
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
            if (this.#state === $d5b043d3e54a6f6c$require$parserStates.INFO) {
                // If there aren't enough bytes to parse the payload length, etc.
                if (this.#byteOffset < 2) return callback();
                const buffer = this.consume(2);
                this.#info.fin = (buffer[0] & 0x80) !== 0;
                this.#info.opcode = buffer[0] & 0x0F;
                // If we receive a fragmented message, we use the type of the first
                // frame to parse the full message as binary/text, when it's terminated
                this.#info.originalOpcode ??= this.#info.opcode;
                this.#info.fragmented = !this.#info.fin && this.#info.opcode !== $d5b043d3e54a6f6c$require$opcodes.CONTINUATION;
                if (this.#info.fragmented && this.#info.opcode !== $d5b043d3e54a6f6c$require$opcodes.BINARY && this.#info.opcode !== $d5b043d3e54a6f6c$require$opcodes.TEXT) {
                    // Only text and binary frames can be fragmented
                    $d5b043d3e54a6f6c$require$failWebsocketConnection(this.ws, 'Invalid frame type was fragmented.');
                    return;
                }
                const payloadLength = buffer[1] & 0x7F;
                if (payloadLength <= 125) {
                    this.#info.payloadLength = payloadLength;
                    this.#state = $d5b043d3e54a6f6c$require$parserStates.READ_DATA;
                } else if (payloadLength === 126) this.#state = $d5b043d3e54a6f6c$require$parserStates.PAYLOADLENGTH_16;
                else if (payloadLength === 127) this.#state = $d5b043d3e54a6f6c$require$parserStates.PAYLOADLENGTH_64;
                if (this.#info.fragmented && payloadLength > 125) {
                    // A fragmented frame can't be fragmented itself
                    $d5b043d3e54a6f6c$require$failWebsocketConnection(this.ws, 'Fragmented frame exceeded 125 bytes.');
                    return;
                } else if ((this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.PING || this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.PONG || this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.CLOSE) && payloadLength > 125) {
                    // Control frames can have a payload length of 125 bytes MAX
                    $d5b043d3e54a6f6c$require$failWebsocketConnection(this.ws, 'Payload length for control frame exceeded 125 bytes.');
                    return;
                } else if (this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.CLOSE) {
                    if (payloadLength === 1) {
                        $d5b043d3e54a6f6c$require$failWebsocketConnection(this.ws, 'Received close frame with a 1-byte body.');
                        return;
                    }
                    const body = this.consume(payloadLength);
                    this.#info.closeInfo = this.parseCloseBody(false, body);
                    if (!this.ws[$d5b043d3e54a6f6c$require$kSentClose]) {
                        // If an endpoint receives a Close frame and did not previously send a
                        // Close frame, the endpoint MUST send a Close frame in response.  (When
                        // sending a Close frame in response, the endpoint typically echos the
                        // status code it received.)
                        const body = Buffer.allocUnsafe(2);
                        body.writeUInt16BE(this.#info.closeInfo.code, 0);
                        const closeFrame = new $d5b043d3e54a6f6c$require$WebsocketFrameSend(body);
                        this.ws[$d5b043d3e54a6f6c$require$kResponse].socket.write(closeFrame.createFrame($d5b043d3e54a6f6c$require$opcodes.CLOSE), (err)=>{
                            if (!err) this.ws[$d5b043d3e54a6f6c$require$kSentClose] = true;
                        });
                    }
                    // Upon either sending or receiving a Close control frame, it is said
                    // that _The WebSocket Closing Handshake is Started_ and that the
                    // WebSocket connection is in the CLOSING state.
                    this.ws[$d5b043d3e54a6f6c$require$kReadyState] = $d5b043d3e54a6f6c$require$states.CLOSING;
                    this.ws[$d5b043d3e54a6f6c$require$kReceivedClose] = true;
                    this.end();
                    return;
                } else if (this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.PING) {
                    // Upon receipt of a Ping frame, an endpoint MUST send a Pong frame in
                    // response, unless it already received a Close frame.
                    // A Pong frame sent in response to a Ping frame must have identical
                    // "Application data"
                    const body = this.consume(payloadLength);
                    if (!this.ws[$d5b043d3e54a6f6c$require$kReceivedClose]) {
                        const frame = new $d5b043d3e54a6f6c$require$WebsocketFrameSend(body);
                        this.ws[$d5b043d3e54a6f6c$require$kResponse].socket.write(frame.createFrame($d5b043d3e54a6f6c$require$opcodes.PONG));
                        if ($d5b043d3e54a6f6c$var$channels.ping.hasSubscribers) $d5b043d3e54a6f6c$var$channels.ping.publish({
                            payload: body
                        });
                    }
                    this.#state = $d5b043d3e54a6f6c$require$parserStates.INFO;
                    if (this.#byteOffset > 0) continue;
                    else {
                        callback();
                        return;
                    }
                } else if (this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.PONG) {
                    // A Pong frame MAY be sent unsolicited.  This serves as a
                    // unidirectional heartbeat.  A response to an unsolicited Pong frame is
                    // not expected.
                    const body = this.consume(payloadLength);
                    if ($d5b043d3e54a6f6c$var$channels.pong.hasSubscribers) $d5b043d3e54a6f6c$var$channels.pong.publish({
                        payload: body
                    });
                    if (this.#byteOffset > 0) continue;
                    else {
                        callback();
                        return;
                    }
                }
            } else if (this.#state === $d5b043d3e54a6f6c$require$parserStates.PAYLOADLENGTH_16) {
                if (this.#byteOffset < 2) return callback();
                const buffer = this.consume(2);
                this.#info.payloadLength = buffer.readUInt16BE(0);
                this.#state = $d5b043d3e54a6f6c$require$parserStates.READ_DATA;
            } else if (this.#state === $d5b043d3e54a6f6c$require$parserStates.PAYLOADLENGTH_64) {
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
                    $d5b043d3e54a6f6c$require$failWebsocketConnection(this.ws, 'Received payload length > 2^31 bytes.');
                    return;
                }
                const lower = buffer.readUInt32BE(4);
                this.#info.payloadLength = (upper << 8) + lower;
                this.#state = $d5b043d3e54a6f6c$require$parserStates.READ_DATA;
            } else if (this.#state === $d5b043d3e54a6f6c$require$parserStates.READ_DATA) {
                if (this.#byteOffset < this.#info.payloadLength) // If there is still more data in this chunk that needs to be read
                return callback();
                else if (this.#byteOffset >= this.#info.payloadLength) {
                    // If the server sent multiple frames in a single chunk
                    const body = this.consume(this.#info.payloadLength);
                    this.#fragments.push(body);
                    // If the frame is unfragmented, or a fragmented frame was terminated,
                    // a message was received
                    if (!this.#info.fragmented || this.#info.fin && this.#info.opcode === $d5b043d3e54a6f6c$require$opcodes.CONTINUATION) {
                        const fullMessage = Buffer.concat(this.#fragments);
                        $d5b043d3e54a6f6c$require$websocketMessageReceived(this.ws, this.#info.originalOpcode, fullMessage);
                        this.#info = {};
                        this.#fragments.length = 0;
                    }
                    this.#state = $d5b043d3e54a6f6c$require$parserStates.INFO;
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
        else if (n === 0) return $d5b043d3e54a6f6c$require$emptyBuffer;
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
            if (!$d5b043d3e54a6f6c$require$isValidStatusCode(code)) return null;
            return {
                code: code
            };
        }
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.6
        /** @type {Buffer} */ let reason = data.subarray(2);
        // Remove BOM
        if (reason[0] === 0xEF && reason[1] === 0xBB && reason[2] === 0xBF) reason = reason.subarray(3);
        if (code !== undefined && !$d5b043d3e54a6f6c$require$isValidStatusCode(code)) return null;
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
    ByteParser: $d5b043d3e54a6f6c$var$ByteParser
};


//# sourceMappingURL=receiver.1a1b3450.js.map
