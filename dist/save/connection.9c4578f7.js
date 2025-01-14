require("./constants.2c9fb4db.js");
require("./symbols.af1b52d6.js");
require("./util.fa0fe0c6.js");
require("./events.7949a8b9.js");
require("./request.496a0aac.js");
require("./fetch.10d96288.js");
require("./headers.f20c41e6.js");
require("./global.7bda9dcb.js");
require("./symbols.b8a391fa.js");
var $iKQMp$diagnostics_channel = require("diagnostics_channel");


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
var $a33e8b1e801901fc$require$uid = $1emXN.uid;
var $a33e8b1e801901fc$require$states = $1emXN.states;

var $kldIv = parcelRequire("kldIv");
var $a33e8b1e801901fc$require$kReadyState = $kldIv.kReadyState;
var $a33e8b1e801901fc$require$kSentClose = $kldIv.kSentClose;
var $a33e8b1e801901fc$require$kByteParser = $kldIv.kByteParser;
var $a33e8b1e801901fc$require$kReceivedClose = $kldIv.kReceivedClose;

var $6yIOs = parcelRequire("6yIOs");
var $a33e8b1e801901fc$require$fireEvent = $6yIOs.fireEvent;
var $a33e8b1e801901fc$require$failWebsocketConnection = $6yIOs.failWebsocketConnection;

var $6tAus = parcelRequire("6tAus");
var $a33e8b1e801901fc$require$CloseEvent = $6tAus.CloseEvent;

var $8QOzY = parcelRequire("8QOzY");
var $a33e8b1e801901fc$require$makeRequest = $8QOzY.makeRequest;

var $2dWFm = parcelRequire("2dWFm");
var $a33e8b1e801901fc$require$fetching = $2dWFm.fetching;

var $3FPVg = parcelRequire("3FPVg");
var $a33e8b1e801901fc$require$Headers = $3FPVg.Headers;

var $aUXHw = parcelRequire("aUXHw");
var $a33e8b1e801901fc$require$getGlobalDispatcher = $aUXHw.getGlobalDispatcher;

var $dSiuY = parcelRequire("dSiuY");
var $a33e8b1e801901fc$require$kHeadersList = $dSiuY.kHeadersList;
const $a33e8b1e801901fc$var$channels = {};
$a33e8b1e801901fc$var$channels.open = $iKQMp$diagnostics_channel.channel('undici:websocket:open');
$a33e8b1e801901fc$var$channels.close = $iKQMp$diagnostics_channel.channel('undici:websocket:close');
$a33e8b1e801901fc$var$channels.socketError = $iKQMp$diagnostics_channel.channel('undici:websocket:socket_error');
/** @type {import('crypto')} */ let $a33e8b1e801901fc$var$crypto;

try {
    $a33e8b1e801901fc$var$crypto = $a33e8b1e801901fc$import$dcf5ad41f4662e6f;
} catch  {}
/**
 * @see https://websockets.spec.whatwg.org/#concept-websocket-establish
 * @param {URL} url
 * @param {string|string[]} protocols
 * @param {import('./websocket').WebSocket} ws
 * @param {(response: any) => void} onEstablish
 * @param {Partial<import('../../types/websocket').WebSocketInit>} options
 */ function $a33e8b1e801901fc$var$establishWebSocketConnection(url, protocols, ws, onEstablish, options) {
    // 1. Let requestURL be a copy of url, with its scheme set to "http", if url’s
    //    scheme is "ws", and to "https" otherwise.
    const requestURL = url;
    requestURL.protocol = url.protocol === 'ws:' ? 'http:' : 'https:';
    // 2. Let request be a new request, whose URL is requestURL, client is client,
    //    service-workers mode is "none", referrer is "no-referrer", mode is
    //    "websocket", credentials mode is "include", cache mode is "no-store" ,
    //    and redirect mode is "error".
    const request = $a33e8b1e801901fc$require$makeRequest({
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
        const headersList = new $a33e8b1e801901fc$require$Headers(options.headers)[$a33e8b1e801901fc$require$kHeadersList];
        request.headersList = headersList;
    }
    // 3. Append (`Upgrade`, `websocket`) to request’s header list.
    // 4. Append (`Connection`, `Upgrade`) to request’s header list.
    // Note: both of these are handled by undici currently.
    // https://github.com/nodejs/undici/blob/68c269c4144c446f3f1220951338daef4a6b5ec4/lib/client.js#L1397
    // 5. Let keyValue be a nonce consisting of a randomly selected
    //    16-byte value that has been forgiving-base64-encoded and
    //    isomorphic encoded.
    const keyValue = $a33e8b1e801901fc$var$crypto.randomBytes(16).toString('base64');
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
    const controller = $a33e8b1e801901fc$require$fetching({
        request: request,
        useParallelQueue: true,
        dispatcher: options.dispatcher ?? $a33e8b1e801901fc$require$getGlobalDispatcher(),
        processResponse (response) {
            // 1. If response is a network error or its status is not 101,
            //    fail the WebSocket connection.
            if (response.type === 'error' || response.status !== 101) {
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Received network error or non-101 status code.');
                return;
            }
            // 2. If protocols is not the empty list and extracting header
            //    list values given `Sec-WebSocket-Protocol` and response’s
            //    header list results in null, failure, or the empty byte
            //    sequence, then fail the WebSocket connection.
            if (protocols.length !== 0 && !response.headersList.get('Sec-WebSocket-Protocol')) {
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Server did not respond with sent protocols.');
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
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Server did not set Upgrade header to "websocket".');
                return;
            }
            // 3. If the response lacks a |Connection| header field or the
            //    |Connection| header field doesn't contain a token that is an
            //    ASCII case-insensitive match for the value "Upgrade", the client
            //    MUST _Fail the WebSocket Connection_.
            if (response.headersList.get('Connection')?.toLowerCase() !== 'upgrade') {
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Server did not set Connection header to "upgrade".');
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
            const digest = $a33e8b1e801901fc$var$crypto.createHash('sha1').update(keyValue + $a33e8b1e801901fc$require$uid).digest('base64');
            if (secWSAccept !== digest) {
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Incorrect hash received in Sec-WebSocket-Accept header.');
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
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Received different permessage-deflate than the one set.');
                return;
            }
            // 6. If the response includes a |Sec-WebSocket-Protocol| header field
            //    and this header field indicates the use of a subprotocol that was
            //    not present in the client's handshake (the server has indicated a
            //    subprotocol not requested by the client), the client MUST _Fail
            //    the WebSocket Connection_.
            const secProtocol = response.headersList.get('Sec-WebSocket-Protocol');
            if (secProtocol !== null && secProtocol !== request.headersList.get('Sec-WebSocket-Protocol')) {
                $a33e8b1e801901fc$require$failWebsocketConnection(ws, 'Protocol was not set in the opening handshake.');
                return;
            }
            response.socket.on('data', $a33e8b1e801901fc$var$onSocketData);
            response.socket.on('close', $a33e8b1e801901fc$var$onSocketClose);
            response.socket.on('error', $a33e8b1e801901fc$var$onSocketError);
            if ($a33e8b1e801901fc$var$channels.open.hasSubscribers) $a33e8b1e801901fc$var$channels.open.publish({
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
 */ function $a33e8b1e801901fc$var$onSocketData(chunk) {
    if (!this.ws[$a33e8b1e801901fc$require$kByteParser].write(chunk)) this.pause();
}
/**
 * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.4
 */ function $a33e8b1e801901fc$var$onSocketClose() {
    const { ws: ws } = this;
    // If the TCP connection was closed after the
    // WebSocket closing handshake was completed, the WebSocket connection
    // is said to have been closed _cleanly_.
    const wasClean = ws[$a33e8b1e801901fc$require$kSentClose] && ws[$a33e8b1e801901fc$require$kReceivedClose];
    let code = 1005;
    let reason = '';
    const result = ws[$a33e8b1e801901fc$require$kByteParser].closingInfo;
    if (result) {
        code = result.code ?? 1005;
        reason = result.reason;
    } else if (!ws[$a33e8b1e801901fc$require$kSentClose]) // If _The WebSocket
    // Connection is Closed_ and no Close control frame was received by the
    // endpoint (such as could occur if the underlying transport connection
    // is lost), _The WebSocket Connection Close Code_ is considered to be
    // 1006.
    code = 1006;
    // 1. Change the ready state to CLOSED (3).
    ws[$a33e8b1e801901fc$require$kReadyState] = $a33e8b1e801901fc$require$states.CLOSED;
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
    $a33e8b1e801901fc$require$fireEvent('close', ws, $a33e8b1e801901fc$require$CloseEvent, {
        wasClean: wasClean,
        code: code,
        reason: reason
    });
    if ($a33e8b1e801901fc$var$channels.close.hasSubscribers) $a33e8b1e801901fc$var$channels.close.publish({
        websocket: ws,
        code: code,
        reason: reason
    });
}
function $a33e8b1e801901fc$var$onSocketError(error) {
    const { ws: ws } = this;
    ws[$a33e8b1e801901fc$require$kReadyState] = $a33e8b1e801901fc$require$states.CLOSING;
    if ($a33e8b1e801901fc$var$channels.socketError.hasSubscribers) $a33e8b1e801901fc$var$channels.socketError.publish(error);
    this.destroy();
}
module.exports = {
    establishWebSocketConnection: $a33e8b1e801901fc$var$establishWebSocketConnection
};


