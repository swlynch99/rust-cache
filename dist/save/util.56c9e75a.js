require("./symbols.601620ca.js");
require("./constants.478d9bec.js");
require("./events.52bb653c.js");


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

var $8bljN = parcelRequire("8bljN");
var $8db4419c4ebbf45b$require$kReadyState = $8bljN.kReadyState;
var $8db4419c4ebbf45b$require$kController = $8bljN.kController;
var $8db4419c4ebbf45b$require$kResponse = $8bljN.kResponse;
var $8db4419c4ebbf45b$require$kBinaryType = $8bljN.kBinaryType;
var $8db4419c4ebbf45b$require$kWebSocketURL = $8bljN.kWebSocketURL;

var $lKHMM = parcelRequire("lKHMM");
var $8db4419c4ebbf45b$require$states = $lKHMM.states;
var $8db4419c4ebbf45b$require$opcodes = $lKHMM.opcodes;
var $7adb6870cf4ea27f$exports = {};
$7adb6870cf4ea27f$exports = new URL("events.52bb653c.js", "file:" + __filename).toString();


var $8db4419c4ebbf45b$require$MessageEvent = $7adb6870cf4ea27f$exports.MessageEvent;
var $8db4419c4ebbf45b$require$ErrorEvent = $7adb6870cf4ea27f$exports.ErrorEvent;
/* globals Blob */ /**
 * @param {import('./websocket').WebSocket} ws
 */ function $8db4419c4ebbf45b$var$isEstablished(ws) {
    // If the server's response is validated as provided for above, it is
    // said that _The WebSocket Connection is Established_ and that the
    // WebSocket Connection is in the OPEN state.
    return ws[$8db4419c4ebbf45b$require$kReadyState] === $8db4419c4ebbf45b$require$states.OPEN;
}
/**
 * @param {import('./websocket').WebSocket} ws
 */ function $8db4419c4ebbf45b$var$isClosing(ws) {
    // Upon either sending or receiving a Close control frame, it is said
    // that _The WebSocket Closing Handshake is Started_ and that the
    // WebSocket connection is in the CLOSING state.
    return ws[$8db4419c4ebbf45b$require$kReadyState] === $8db4419c4ebbf45b$require$states.CLOSING;
}
/**
 * @param {import('./websocket').WebSocket} ws
 */ function $8db4419c4ebbf45b$var$isClosed(ws) {
    return ws[$8db4419c4ebbf45b$require$kReadyState] === $8db4419c4ebbf45b$require$states.CLOSED;
}
/**
 * @see https://dom.spec.whatwg.org/#concept-event-fire
 * @param {string} e
 * @param {EventTarget} target
 * @param {EventInit | undefined} eventInitDict
 */ function $8db4419c4ebbf45b$var$fireEvent(e, target, eventConstructor = Event, eventInitDict) {
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
 */ function $8db4419c4ebbf45b$var$websocketMessageReceived(ws, type, data) {
    // 1. If ready state is not OPEN (1), then return.
    if (ws[$8db4419c4ebbf45b$require$kReadyState] !== $8db4419c4ebbf45b$require$states.OPEN) return;
    // 2. Let dataForEvent be determined by switching on type and binary type:
    let dataForEvent;
    if (type === $8db4419c4ebbf45b$require$opcodes.TEXT) // -> type indicates that the data is Text
    //      a new DOMString containing data
    try {
        dataForEvent = new TextDecoder('utf-8', {
            fatal: true
        }).decode(data);
    } catch  {
        $8db4419c4ebbf45b$var$failWebsocketConnection(ws, 'Received invalid UTF-8 in text frame.');
        return;
    }
    else if (type === $8db4419c4ebbf45b$require$opcodes.BINARY) {
        if (ws[$8db4419c4ebbf45b$require$kBinaryType] === 'blob') // -> type indicates that the data is Binary and binary type is "blob"
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
    $8db4419c4ebbf45b$var$fireEvent('message', ws, $8db4419c4ebbf45b$require$MessageEvent, {
        origin: ws[$8db4419c4ebbf45b$require$kWebSocketURL].origin,
        data: dataForEvent
    });
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455
 * @see https://datatracker.ietf.org/doc/html/rfc2616
 * @see https://bugs.chromium.org/p/chromium/issues/detail?id=398407
 * @param {string} protocol
 */ function $8db4419c4ebbf45b$var$isValidSubprotocol(protocol) {
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
 */ function $8db4419c4ebbf45b$var$isValidStatusCode(code) {
    if (code >= 1000 && code < 1015) return code !== 1004 && // reserved
    code !== 1005 && // "MUST NOT be set as a status code"
    code !== 1006 // "MUST NOT be set as a status code"
    ;
    return code >= 3000 && code <= 4999;
}
/**
 * @param {import('./websocket').WebSocket} ws
 * @param {string|undefined} reason
 */ function $8db4419c4ebbf45b$var$failWebsocketConnection(ws, reason) {
    const { [$8db4419c4ebbf45b$require$kController]: controller, [$8db4419c4ebbf45b$require$kResponse]: response } = ws;
    controller.abort();
    if (response?.socket && !response.socket.destroyed) response.socket.destroy();
    if (reason) $8db4419c4ebbf45b$var$fireEvent('error', ws, $8db4419c4ebbf45b$require$ErrorEvent, {
        error: new Error(reason)
    });
}
module.exports = {
    isEstablished: $8db4419c4ebbf45b$var$isEstablished,
    isClosing: $8db4419c4ebbf45b$var$isClosing,
    isClosed: $8db4419c4ebbf45b$var$isClosed,
    fireEvent: $8db4419c4ebbf45b$var$fireEvent,
    isValidSubprotocol: $8db4419c4ebbf45b$var$isValidSubprotocol,
    isValidStatusCode: $8db4419c4ebbf45b$var$isValidStatusCode,
    failWebsocketConnection: $8db4419c4ebbf45b$var$failWebsocketConnection,
    websocketMessageReceived: $8db4419c4ebbf45b$var$websocketMessageReceived
};


//# sourceMappingURL=util.56c9e75a.js.map
