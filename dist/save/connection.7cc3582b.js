require("./constants.478d9bec.js");
require("./symbols.601620ca.js");
require("./util.56c9e75a.js");
require("./events.52bb653c.js");
require("./request.5e9cadd2.js");
require("./fetch.058a13c7.js");
require("./headers.e172861b.js");
require("./global.206e7c2a.js");
require("./symbols.c5dd8fde.js");
var $8fPFc$diagnostics_channel = require("diagnostics_channel");


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


var $lKHMM = parcelRequire("lKHMM");
var $08e3baa21ca6ffd4$require$uid = $lKHMM.uid;
var $08e3baa21ca6ffd4$require$states = $lKHMM.states;

var $8bljN = parcelRequire("8bljN");
var $08e3baa21ca6ffd4$require$kReadyState = $8bljN.kReadyState;
var $08e3baa21ca6ffd4$require$kSentClose = $8bljN.kSentClose;
var $08e3baa21ca6ffd4$require$kByteParser = $8bljN.kByteParser;
var $08e3baa21ca6ffd4$require$kReceivedClose = $8bljN.kReceivedClose;

var $cahQ4 = parcelRequire("cahQ4");
var $08e3baa21ca6ffd4$require$fireEvent = $cahQ4.fireEvent;
var $08e3baa21ca6ffd4$require$failWebsocketConnection = $cahQ4.failWebsocketConnection;

var $elY0T = parcelRequire("elY0T");
var $08e3baa21ca6ffd4$require$CloseEvent = $elY0T.CloseEvent;

var $84pCF = parcelRequire("84pCF");
var $08e3baa21ca6ffd4$require$makeRequest = $84pCF.makeRequest;

var $66LJo = parcelRequire("66LJo");
var $08e3baa21ca6ffd4$require$fetching = $66LJo.fetching;

var $3wPNm = parcelRequire("3wPNm");
var $08e3baa21ca6ffd4$require$Headers = $3wPNm.Headers;

var $byZ3g = parcelRequire("byZ3g");
var $08e3baa21ca6ffd4$require$getGlobalDispatcher = $byZ3g.getGlobalDispatcher;

var $bMqEt = parcelRequire("bMqEt");
var $08e3baa21ca6ffd4$require$kHeadersList = $bMqEt.kHeadersList;
const $08e3baa21ca6ffd4$var$channels = {};
$08e3baa21ca6ffd4$var$channels.open = $8fPFc$diagnostics_channel.channel('undici:websocket:open');
$08e3baa21ca6ffd4$var$channels.close = $8fPFc$diagnostics_channel.channel('undici:websocket:close');
$08e3baa21ca6ffd4$var$channels.socketError = $8fPFc$diagnostics_channel.channel('undici:websocket:socket_error');
/** @type {import('crypto')} */ let $08e3baa21ca6ffd4$var$crypto;

try {
    $08e3baa21ca6ffd4$var$crypto = $08e3baa21ca6ffd4$import$dcf5ad41f4662e6f;
} catch  {}
/**
 * @see https://websockets.spec.whatwg.org/#concept-websocket-establish
 * @param {URL} url
 * @param {string|string[]} protocols
 * @param {import('./websocket').WebSocket} ws
 * @param {(response: any) => void} onEstablish
 * @param {Partial<import('../../types/websocket').WebSocketInit>} options
 */ function $08e3baa21ca6ffd4$var$establishWebSocketConnection(url, protocols, ws, onEstablish, options) {
    // 1. Let requestURL be a copy of url, with its scheme set to "http", if url’s
    //    scheme is "ws", and to "https" otherwise.
    const requestURL = url;
    requestURL.protocol = url.protocol === 'ws:' ? 'http:' : 'https:';
    // 2. Let request be a new request, whose URL is requestURL, client is client,
    //    service-workers mode is "none", referrer is "no-referrer", mode is
    //    "websocket", credentials mode is "include", cache mode is "no-store" ,
    //    and redirect mode is "error".
    const request = $08e3baa21ca6ffd4$require$makeRequest({
        urlList: [
            requestURL
        ],
        serviceWorkers: 'none',
        referrer: 'no-referrer',
        mode: 'websocket',
        credentials: 'include',
        cache: 'no-store',
        redirect: 'error'
    });
    // Note: undici extension, allow setting custom headers.
    if (options.headers) {
        const headersList = new $08e3baa21ca6ffd4$require$Headers(options.headers)[$08e3baa21ca6ffd4$require$kHeadersList];
        request.headersList = headersList;
    }
    // 3. Append (`Upgrade`, `websocket`) to request’s header list.
    // 4. Append (`Connection`, `Upgrade`) to request’s header list.
    // Note: both of these are handled by undici currently.
    // https://github.com/nodejs/undici/blob/68c269c4144c446f3f1220951338daef4a6b5ec4/lib/client.js#L1397
    // 5. Let keyValue be a nonce consisting of a randomly selected
    //    16-byte value that has been forgiving-base64-encoded and
    //    isomorphic encoded.
    const keyValue = $08e3baa21ca6ffd4$var$crypto.randomBytes(16).toString('base64');
    // 6. Append (`Sec-WebSocket-Key`, keyValue) to request’s
    //    header list.
    request.headersList.append('sec-websocket-key', keyValue);
    // 7. Append (`Sec-WebSocket-Version`, `13`) to request’s
    //    header list.
    request.headersList.append('sec-websocket-version', '13');
    // 8. For each protocol in protocols, combine
    //    (`Sec-WebSocket-Protocol`, protocol) in request’s header
    //    list.
    for (const protocol of protocols)request.headersList.append('sec-websocket-protocol', protocol);
    // 9. Let permessageDeflate be a user-agent defined
    //    "permessage-deflate" extension header value.
    // https://github.com/mozilla/gecko-dev/blob/ce78234f5e653a5d3916813ff990f053510227bc/netwerk/protocol/websocket/WebSocketChannel.cpp#L2673
    // TODO: enable once permessage-deflate is supported
    const permessageDeflate = '' // 'permessage-deflate; 15'
    ;
    // 10. Append (`Sec-WebSocket-Extensions`, permessageDeflate) to
    //     request’s header list.
    // request.headersList.append('sec-websocket-extensions', permessageDeflate)
    // 11. Fetch request with useParallelQueue set to true, and
    //     processResponse given response being these steps:
    const controller = $08e3baa21ca6ffd4$require$fetching({
        request: request,
        useParallelQueue: true,
        dispatcher: options.dispatcher ?? $08e3baa21ca6ffd4$require$getGlobalDispatcher(),
        processResponse (response) {
            // 1. If response is a network error or its status is not 101,
            //    fail the WebSocket connection.
            if (response.type === 'error' || response.status !== 101) {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Received network error or non-101 status code.');
                return;
            }
            // 2. If protocols is not the empty list and extracting header
            //    list values given `Sec-WebSocket-Protocol` and response’s
            //    header list results in null, failure, or the empty byte
            //    sequence, then fail the WebSocket connection.
            if (protocols.length !== 0 && !response.headersList.get('Sec-WebSocket-Protocol')) {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Server did not respond with sent protocols.');
                return;
            }
            // 3. Follow the requirements stated step 2 to step 6, inclusive,
            //    of the last set of steps in section 4.1 of The WebSocket
            //    Protocol to validate response. This either results in fail
            //    the WebSocket connection or the WebSocket connection is
            //    established.
            // 2. If the response lacks an |Upgrade| header field or the |Upgrade|
            //    header field contains a value that is not an ASCII case-
            //    insensitive match for the value "websocket", the client MUST
            //    _Fail the WebSocket Connection_.
            if (response.headersList.get('Upgrade')?.toLowerCase() !== 'websocket') {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Server did not set Upgrade header to "websocket".');
                return;
            }
            // 3. If the response lacks a |Connection| header field or the
            //    |Connection| header field doesn't contain a token that is an
            //    ASCII case-insensitive match for the value "Upgrade", the client
            //    MUST _Fail the WebSocket Connection_.
            if (response.headersList.get('Connection')?.toLowerCase() !== 'upgrade') {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Server did not set Connection header to "upgrade".');
                return;
            }
            // 4. If the response lacks a |Sec-WebSocket-Accept| header field or
            //    the |Sec-WebSocket-Accept| contains a value other than the
            //    base64-encoded SHA-1 of the concatenation of the |Sec-WebSocket-
            //    Key| (as a string, not base64-decoded) with the string "258EAFA5-
            //    E914-47DA-95CA-C5AB0DC85B11" but ignoring any leading and
            //    trailing whitespace, the client MUST _Fail the WebSocket
            //    Connection_.
            const secWSAccept = response.headersList.get('Sec-WebSocket-Accept');
            const digest = $08e3baa21ca6ffd4$var$crypto.createHash('sha1').update(keyValue + $08e3baa21ca6ffd4$require$uid).digest('base64');
            if (secWSAccept !== digest) {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Incorrect hash received in Sec-WebSocket-Accept header.');
                return;
            }
            // 5. If the response includes a |Sec-WebSocket-Extensions| header
            //    field and this header field indicates the use of an extension
            //    that was not present in the client's handshake (the server has
            //    indicated an extension not requested by the client), the client
            //    MUST _Fail the WebSocket Connection_.  (The parsing of this
            //    header field to determine which extensions are requested is
            //    discussed in Section 9.1.)
            const secExtension = response.headersList.get('Sec-WebSocket-Extensions');
            if (secExtension !== null && secExtension !== permessageDeflate) {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Received different permessage-deflate than the one set.');
                return;
            }
            // 6. If the response includes a |Sec-WebSocket-Protocol| header field
            //    and this header field indicates the use of a subprotocol that was
            //    not present in the client's handshake (the server has indicated a
            //    subprotocol not requested by the client), the client MUST _Fail
            //    the WebSocket Connection_.
            const secProtocol = response.headersList.get('Sec-WebSocket-Protocol');
            if (secProtocol !== null && secProtocol !== request.headersList.get('Sec-WebSocket-Protocol')) {
                $08e3baa21ca6ffd4$require$failWebsocketConnection(ws, 'Protocol was not set in the opening handshake.');
                return;
            }
            response.socket.on('data', $08e3baa21ca6ffd4$var$onSocketData);
            response.socket.on('close', $08e3baa21ca6ffd4$var$onSocketClose);
            response.socket.on('error', $08e3baa21ca6ffd4$var$onSocketError);
            if ($08e3baa21ca6ffd4$var$channels.open.hasSubscribers) $08e3baa21ca6ffd4$var$channels.open.publish({
                address: response.socket.address(),
                protocol: secProtocol,
                extensions: secExtension
            });
            onEstablish(response);
        }
    });
    return controller;
}
/**
 * @param {Buffer} chunk
 */ function $08e3baa21ca6ffd4$var$onSocketData(chunk) {
    if (!this.ws[$08e3baa21ca6ffd4$require$kByteParser].write(chunk)) this.pause();
}
/**
 * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.4
 */ function $08e3baa21ca6ffd4$var$onSocketClose() {
    const { ws: ws } = this;
    // If the TCP connection was closed after the
    // WebSocket closing handshake was completed, the WebSocket connection
    // is said to have been closed _cleanly_.
    const wasClean = ws[$08e3baa21ca6ffd4$require$kSentClose] && ws[$08e3baa21ca6ffd4$require$kReceivedClose];
    let code = 1005;
    let reason = '';
    const result = ws[$08e3baa21ca6ffd4$require$kByteParser].closingInfo;
    if (result) {
        code = result.code ?? 1005;
        reason = result.reason;
    } else if (!ws[$08e3baa21ca6ffd4$require$kSentClose]) // If _The WebSocket
    // Connection is Closed_ and no Close control frame was received by the
    // endpoint (such as could occur if the underlying transport connection
    // is lost), _The WebSocket Connection Close Code_ is considered to be
    // 1006.
    code = 1006;
    // 1. Change the ready state to CLOSED (3).
    ws[$08e3baa21ca6ffd4$require$kReadyState] = $08e3baa21ca6ffd4$require$states.CLOSED;
    // 2. If the user agent was required to fail the WebSocket
    //    connection, or if the WebSocket connection was closed
    //    after being flagged as full, fire an event named error
    //    at the WebSocket object.
    // TODO
    // 3. Fire an event named close at the WebSocket object,
    //    using CloseEvent, with the wasClean attribute
    //    initialized to true if the connection closed cleanly
    //    and false otherwise, the code attribute initialized to
    //    the WebSocket connection close code, and the reason
    //    attribute initialized to the result of applying UTF-8
    //    decode without BOM to the WebSocket connection close
    //    reason.
    $08e3baa21ca6ffd4$require$fireEvent('close', ws, $08e3baa21ca6ffd4$require$CloseEvent, {
        wasClean: wasClean,
        code: code,
        reason: reason
    });
    if ($08e3baa21ca6ffd4$var$channels.close.hasSubscribers) $08e3baa21ca6ffd4$var$channels.close.publish({
        websocket: ws,
        code: code,
        reason: reason
    });
}
function $08e3baa21ca6ffd4$var$onSocketError(error) {
    const { ws: ws } = this;
    ws[$08e3baa21ca6ffd4$require$kReadyState] = $08e3baa21ca6ffd4$require$states.CLOSING;
    if ($08e3baa21ca6ffd4$var$channels.socketError.hasSubscribers) $08e3baa21ca6ffd4$var$channels.socketError.publish(error);
    this.destroy();
}
module.exports = {
    establishWebSocketConnection: $08e3baa21ca6ffd4$var$establishWebSocketConnection
};


//# sourceMappingURL=connection.7cc3582b.js.map
