require("./symbols.af1b52d6.js");
require("./constants.2c9fb4db.js");
require("./events.7949a8b9.js");


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

var $kldIv = parcelRequire("kldIv");
var $4c68adf612a239e2$require$kReadyState = $kldIv.kReadyState;
var $4c68adf612a239e2$require$kController = $kldIv.kController;
var $4c68adf612a239e2$require$kResponse = $kldIv.kResponse;
var $4c68adf612a239e2$require$kBinaryType = $kldIv.kBinaryType;
var $4c68adf612a239e2$require$kWebSocketURL = $kldIv.kWebSocketURL;

var $1emXN = parcelRequire("1emXN");
var $4c68adf612a239e2$require$states = $1emXN.states;
var $4c68adf612a239e2$require$opcodes = $1emXN.opcodes;
var $8e60ae6d5fd62025$exports = {};
$8e60ae6d5fd62025$exports = new URL("events.7949a8b9.js", "file:" + __filename).toString();


var $4c68adf612a239e2$require$MessageEvent = $8e60ae6d5fd62025$exports.MessageEvent;
var $4c68adf612a239e2$require$ErrorEvent = $8e60ae6d5fd62025$exports.ErrorEvent;
/* globals Blob */ /**
 * @param {import('./websocket').WebSocket} ws
 */ function $4c68adf612a239e2$var$isEstablished(ws) {
    // If the server's response is validated as provided for above, it is
    // said that _The WebSocket Connection is Established_ and that the
    // WebSocket Connection is in the OPEN state.
    return ws[$4c68adf612a239e2$require$kReadyState] === $4c68adf612a239e2$require$states.OPEN;
}
/**
 * @param {import('./websocket').WebSocket} ws
 */ function $4c68adf612a239e2$var$isClosing(ws) {
    // Upon either sending or receiving a Close control frame, it is said
    // that _The WebSocket Closing Handshake is Started_ and that the
    // WebSocket connection is in the CLOSING state.
    return ws[$4c68adf612a239e2$require$kReadyState] === $4c68adf612a239e2$require$states.CLOSING;
}
/**
 * @param {import('./websocket').WebSocket} ws
 */ function $4c68adf612a239e2$var$isClosed(ws) {
    return ws[$4c68adf612a239e2$require$kReadyState] === $4c68adf612a239e2$require$states.CLOSED;
}
/**
 * @see https://dom.spec.whatwg.org/#concept-event-fire
 * @param {string} e
 * @param {EventTarget} target
 * @param {EventInit | undefined} eventInitDict
 */ function $4c68adf612a239e2$var$fireEvent(e, target, eventConstructor = Event, eventInitDict) {
    // 1. If eventConstructor is not given, then let eventConstructor be Event.
    // 2. Let event be the result of creating an event given eventConstructor,
    //    in the relevant realm of target.
    // 3. Initialize event’s type attribute to e.
    const event = new eventConstructor(e, eventInitDict) // eslint-disable-line new-cap
    ;
    // 4. Initialize any other IDL attributes of event as described in the
    //    invocation of this algorithm.
    // 5. Return the result of dispatching event at target, with legacy target
    //    override flag set if set.
    target.dispatchEvent(event);
}
/**
 * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
 * @param {import('./websocket').WebSocket} ws
 * @param {number} type Opcode
 * @param {Buffer} data application data
 */ function $4c68adf612a239e2$var$websocketMessageReceived(ws, type, data) {
    // 1. If ready state is not OPEN (1), then return.
    if (ws[$4c68adf612a239e2$require$kReadyState] !== $4c68adf612a239e2$require$states.OPEN) return;
    // 2. Let dataForEvent be determined by switching on type and binary type:
    let dataForEvent;
    if (type === $4c68adf612a239e2$require$opcodes.TEXT) // -> type indicates that the data is Text
    //      a new DOMString containing data
    try {
        dataForEvent = new TextDecoder('utf-8', {
            fatal: true
        }).decode(data);
    } catch  {
        $4c68adf612a239e2$var$failWebsocketConnection(ws, 'Received invalid UTF-8 in text frame.');
        return;
    }
    else if (type === $4c68adf612a239e2$require$opcodes.BINARY) {
        if (ws[$4c68adf612a239e2$require$kBinaryType] === 'blob') // -> type indicates that the data is Binary and binary type is "blob"
        //      a new Blob object, created in the relevant Realm of the WebSocket
        //      object, that represents data as its raw data
        dataForEvent = new Blob([
            data
        ]);
        else // -> type indicates that the data is Binary and binary type is "arraybuffer"
        //      a new ArrayBuffer object, created in the relevant Realm of the
        //      WebSocket object, whose contents are data
        dataForEvent = new Uint8Array(data).buffer;
    }
    // 3. Fire an event named message at the WebSocket object, using MessageEvent,
    //    with the origin attribute initialized to the serialization of the WebSocket
    //    object’s url's origin, and the data attribute initialized to dataForEvent.
    $4c68adf612a239e2$var$fireEvent('message', ws, $4c68adf612a239e2$require$MessageEvent, {
        origin: ws[$4c68adf612a239e2$require$kWebSocketURL].origin,
        data: dataForEvent
    });
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455
 * @see https://datatracker.ietf.org/doc/html/rfc2616
 * @see https://bugs.chromium.org/p/chromium/issues/detail?id=398407
 * @param {string} protocol
 */ function $4c68adf612a239e2$var$isValidSubprotocol(protocol) {
    // If present, this value indicates one
    // or more comma-separated subprotocol the client wishes to speak,
    // ordered by preference.  The elements that comprise this value
    // MUST be non-empty strings with characters in the range U+0021 to
    // U+007E not including separator characters as defined in
    // [RFC2616] and MUST all be unique strings.
    if (protocol.length === 0) return false;
    for (const char of protocol){
        const code = char.charCodeAt(0);
        if (code < 0x21 || code > 0x7E || char === '(' || char === ')' || char === '<' || char === '>' || char === '@' || char === ',' || char === ';' || char === ':' || char === '\\' || char === '"' || char === '/' || char === '[' || char === ']' || char === '?' || char === '=' || char === '{' || char === '}' || code === 32 || // SP
        code === 9 // HT
        ) return false;
    }
    return true;
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7-4
 * @param {number} code
 */ function $4c68adf612a239e2$var$isValidStatusCode(code) {
    if (code >= 1000 && code < 1015) return code !== 1004 && // reserved
    code !== 1005 && // "MUST NOT be set as a status code"
    code !== 1006 // "MUST NOT be set as a status code"
    ;
    return code >= 3000 && code <= 4999;
}
/**
 * @param {import('./websocket').WebSocket} ws
 * @param {string|undefined} reason
 */ function $4c68adf612a239e2$var$failWebsocketConnection(ws, reason) {
    const { [$4c68adf612a239e2$require$kController]: controller, [$4c68adf612a239e2$require$kResponse]: response } = ws;
    controller.abort();
    if (response?.socket && !response.socket.destroyed) response.socket.destroy();
    if (reason) $4c68adf612a239e2$var$fireEvent('error', ws, $4c68adf612a239e2$require$ErrorEvent, {
        error: new Error(reason)
    });
}
module.exports = {
    isEstablished: $4c68adf612a239e2$var$isEstablished,
    isClosing: $4c68adf612a239e2$var$isClosing,
    isClosed: $4c68adf612a239e2$var$isClosed,
    fireEvent: $4c68adf612a239e2$var$fireEvent,
    isValidSubprotocol: $4c68adf612a239e2$var$isValidSubprotocol,
    isValidStatusCode: $4c68adf612a239e2$var$isValidStatusCode,
    failWebsocketConnection: $4c68adf612a239e2$var$failWebsocketConnection,
    websocketMessageReceived: $4c68adf612a239e2$var$websocketMessageReceived
};


