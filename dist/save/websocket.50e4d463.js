require("./webidl.107e124b.js");
require("./constants.8e3661dd.js");
require("./dataURL.134f460a.js");
require("./global.d3d2cc7c.js");
require("./constants.2c9fb4db.js");
require("./symbols.af1b52d6.js");
require("./util.fa0fe0c6.js");
require("./connection.9c4578f7.js");
require("./frame.c64b81f1.js");
require("./receiver.7df845c4.js");
require("./util.c7a5ec55.js");
require("./global.7bda9dcb.js");
var $w5Ib1$util = require("util");


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
parcelRegister("ixCeo", function(module, exports) {
'use strict';

var $cpX4f = parcelRequire("cpX4f");
var $d7f8f6f464ae254f$require$webidl = $cpX4f.webidl;

var $5aYxL = parcelRequire("5aYxL");
var $d7f8f6f464ae254f$require$DOMException = $5aYxL.DOMException;

var $4o5iY = parcelRequire("4o5iY");
var $d7f8f6f464ae254f$require$URLSerializer = $4o5iY.URLSerializer;

var $39VSP = parcelRequire("39VSP");
var $d7f8f6f464ae254f$require$getGlobalOrigin = $39VSP.getGlobalOrigin;

var $2FIOw = parcelRequire("2FIOw");
var $d7f8f6f464ae254f$require$staticPropertyDescriptors = $2FIOw.staticPropertyDescriptors;
var $d7f8f6f464ae254f$require$states = $2FIOw.states;
var $d7f8f6f464ae254f$require$opcodes = $2FIOw.opcodes;
var $d7f8f6f464ae254f$require$emptyBuffer = $2FIOw.emptyBuffer;

var $3027S = parcelRequire("3027S");
var $d7f8f6f464ae254f$require$kWebSocketURL = $3027S.kWebSocketURL;
var $d7f8f6f464ae254f$require$kReadyState = $3027S.kReadyState;
var $d7f8f6f464ae254f$require$kController = $3027S.kController;
var $d7f8f6f464ae254f$require$kBinaryType = $3027S.kBinaryType;
var $d7f8f6f464ae254f$require$kResponse = $3027S.kResponse;
var $d7f8f6f464ae254f$require$kSentClose = $3027S.kSentClose;
var $d7f8f6f464ae254f$require$kByteParser = $3027S.kByteParser;

var $69aMq = parcelRequire("69aMq");
var $d7f8f6f464ae254f$require$isEstablished = $69aMq.isEstablished;
var $d7f8f6f464ae254f$require$isClosing = $69aMq.isClosing;
var $d7f8f6f464ae254f$require$isValidSubprotocol = $69aMq.isValidSubprotocol;
var $d7f8f6f464ae254f$require$failWebsocketConnection = $69aMq.failWebsocketConnection;
var $d7f8f6f464ae254f$require$fireEvent = $69aMq.fireEvent;

var $3rHvv = parcelRequire("3rHvv");
var $d7f8f6f464ae254f$require$establishWebSocketConnection = $3rHvv.establishWebSocketConnection;

var $kQDPa = parcelRequire("kQDPa");
var $d7f8f6f464ae254f$require$WebsocketFrameSend = $kQDPa.WebsocketFrameSend;

var $1IgmJ = parcelRequire("1IgmJ");
var $d7f8f6f464ae254f$require$ByteParser = $1IgmJ.ByteParser;

var $iiSZx = parcelRequire("iiSZx");
var $d7f8f6f464ae254f$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;
var $d7f8f6f464ae254f$require$isBlobLike = $iiSZx.isBlobLike;

var $aUXHw = parcelRequire("aUXHw");
var $d7f8f6f464ae254f$require$getGlobalDispatcher = $aUXHw.getGlobalDispatcher;

var $d7f8f6f464ae254f$require$types = $w5Ib1$util.types;
let $d7f8f6f464ae254f$var$experimentalWarned = false;
// https://websockets.spec.whatwg.org/#interface-definition
class $d7f8f6f464ae254f$var$WebSocket extends EventTarget {
    #events = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #bufferedAmount = 0;
    #protocol = '';
    #extensions = '';
    /**
   * @param {string} url
   * @param {string|string[]} protocols
   */ constructor(url, protocols = []){
        super();
        $d7f8f6f464ae254f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'WebSocket constructor'
        });
        if (!$d7f8f6f464ae254f$var$experimentalWarned) {
            $d7f8f6f464ae254f$var$experimentalWarned = true;
            process.emitWarning('WebSockets are experimental, expect them to change at any time.', {
                code: 'UNDICI-WS'
            });
        }
        const options = $d7f8f6f464ae254f$require$webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'](protocols);
        url = $d7f8f6f464ae254f$require$webidl.converters.USVString(url);
        protocols = options.protocols;
        // 1. Let baseURL be this's relevant settings object's API base URL.
        const baseURL = $d7f8f6f464ae254f$require$getGlobalOrigin();
        // 1. Let urlRecord be the result of applying the URL parser to url with baseURL.
        let urlRecord;
        try {
            urlRecord = new URL(url, baseURL);
        } catch (e) {
            // 3. If urlRecord is failure, then throw a "SyntaxError" DOMException.
            throw new $d7f8f6f464ae254f$require$DOMException(e, 'SyntaxError');
        }
        // 4. If urlRecord’s scheme is "http", then set urlRecord’s scheme to "ws".
        if (urlRecord.protocol === 'http:') urlRecord.protocol = 'ws:';
        else if (urlRecord.protocol === 'https:') // 5. Otherwise, if urlRecord’s scheme is "https", set urlRecord’s scheme to "wss".
        urlRecord.protocol = 'wss:';
        // 6. If urlRecord’s scheme is not "ws" or "wss", then throw a "SyntaxError" DOMException.
        if (urlRecord.protocol !== 'ws:' && urlRecord.protocol !== 'wss:') throw new $d7f8f6f464ae254f$require$DOMException(`Expected a ws: or wss: protocol, got ${urlRecord.protocol}`, 'SyntaxError');
        // 7. If urlRecord’s fragment is non-null, then throw a "SyntaxError"
        //    DOMException.
        if (urlRecord.hash || urlRecord.href.endsWith('#')) throw new $d7f8f6f464ae254f$require$DOMException('Got fragment', 'SyntaxError');
        // 8. If protocols is a string, set protocols to a sequence consisting
        //    of just that string.
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        // 9. If any of the values in protocols occur more than once or otherwise
        //    fail to match the requirements for elements that comprise the value
        //    of `Sec-WebSocket-Protocol` fields as defined by The WebSocket
        //    protocol, then throw a "SyntaxError" DOMException.
        if (protocols.length !== new Set(protocols.map((p)=>p.toLowerCase())).size) throw new $d7f8f6f464ae254f$require$DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        if (protocols.length > 0 && !protocols.every((p)=>$d7f8f6f464ae254f$require$isValidSubprotocol(p))) throw new $d7f8f6f464ae254f$require$DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        // 10. Set this's url to urlRecord.
        this[$d7f8f6f464ae254f$require$kWebSocketURL] = new URL(urlRecord.href);
        // 11. Let client be this's relevant settings object.
        // 12. Run this step in parallel:
        //    1. Establish a WebSocket connection given urlRecord, protocols,
        //       and client.
        this[$d7f8f6f464ae254f$require$kController] = $d7f8f6f464ae254f$require$establishWebSocketConnection(urlRecord, protocols, this, (response)=>this.#onConnectionEstablished(response), options);
        // Each WebSocket object has an associated ready state, which is a
        // number representing the state of the connection. Initially it must
        // be CONNECTING (0).
        this[$d7f8f6f464ae254f$require$kReadyState] = $d7f8f6f464ae254f$var$WebSocket.CONNECTING;
        // The extensions attribute must initially return the empty string.
        // The protocol attribute must initially return the empty string.
        // Each WebSocket object has an associated binary type, which is a
        // BinaryType. Initially it must be "blob".
        this[$d7f8f6f464ae254f$require$kBinaryType] = 'blob';
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-close
   * @param {number|undefined} code
   * @param {string|undefined} reason
   */ close(code, reason) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (code !== undefined) code = $d7f8f6f464ae254f$require$webidl.converters['unsigned short'](code, {
            clamp: true
        });
        if (reason !== undefined) reason = $d7f8f6f464ae254f$require$webidl.converters.USVString(reason);
        // 1. If code is present, but is neither an integer equal to 1000 nor an
        //    integer in the range 3000 to 4999, inclusive, throw an
        //    "InvalidAccessError" DOMException.
        if (code !== undefined) {
            if (code !== 1000 && (code < 3000 || code > 4999)) throw new $d7f8f6f464ae254f$require$DOMException('invalid code', 'InvalidAccessError');
        }
        let reasonByteLength = 0;
        // 2. If reason is present, then run these substeps:
        if (reason !== undefined) {
            // 1. Let reasonBytes be the result of encoding reason.
            // 2. If reasonBytes is longer than 123 bytes, then throw a
            //    "SyntaxError" DOMException.
            reasonByteLength = Buffer.byteLength(reason);
            if (reasonByteLength > 123) throw new $d7f8f6f464ae254f$require$DOMException(`Reason must be less than 123 bytes; received ${reasonByteLength}`, 'SyntaxError');
        }
        // 3. Run the first matching steps from the following list:
        if (this[$d7f8f6f464ae254f$require$kReadyState] === $d7f8f6f464ae254f$var$WebSocket.CLOSING || this[$d7f8f6f464ae254f$require$kReadyState] === $d7f8f6f464ae254f$var$WebSocket.CLOSED) ;
        else if (!$d7f8f6f464ae254f$require$isEstablished(this)) {
            // If the WebSocket connection is not yet established
            // Fail the WebSocket connection and set this's ready state
            // to CLOSING (2).
            $d7f8f6f464ae254f$require$failWebsocketConnection(this, 'Connection was closed before it was established.');
            this[$d7f8f6f464ae254f$require$kReadyState] = $d7f8f6f464ae254f$var$WebSocket.CLOSING;
        } else if (!$d7f8f6f464ae254f$require$isClosing(this)) {
            // If the WebSocket closing handshake has not yet been started
            // Start the WebSocket closing handshake and set this's ready
            // state to CLOSING (2).
            // - If neither code nor reason is present, the WebSocket Close
            //   message must not have a body.
            // - If code is present, then the status code to use in the
            //   WebSocket Close message must be the integer given by code.
            // - If reason is also present, then reasonBytes must be
            //   provided in the Close message after the status code.
            const frame = new $d7f8f6f464ae254f$require$WebsocketFrameSend();
            // If neither code nor reason is present, the WebSocket Close
            // message must not have a body.
            // If code is present, then the status code to use in the
            // WebSocket Close message must be the integer given by code.
            if (code !== undefined && reason === undefined) {
                frame.frameData = Buffer.allocUnsafe(2);
                frame.frameData.writeUInt16BE(code, 0);
            } else if (code !== undefined && reason !== undefined) {
                // If reason is also present, then reasonBytes must be
                // provided in the Close message after the status code.
                frame.frameData = Buffer.allocUnsafe(2 + reasonByteLength);
                frame.frameData.writeUInt16BE(code, 0);
                // the body MAY contain UTF-8-encoded data with value /reason/
                frame.frameData.write(reason, 2, 'utf-8');
            } else frame.frameData = $d7f8f6f464ae254f$require$emptyBuffer;
            /** @type {import('stream').Duplex} */ const socket = this[$d7f8f6f464ae254f$require$kResponse].socket;
            socket.write(frame.createFrame($d7f8f6f464ae254f$require$opcodes.CLOSE), (err)=>{
                if (!err) this[$d7f8f6f464ae254f$require$kSentClose] = true;
            });
            // Upon either sending or receiving a Close control frame, it is said
            // that _The WebSocket Closing Handshake is Started_ and that the
            // WebSocket connection is in the CLOSING state.
            this[$d7f8f6f464ae254f$require$kReadyState] = $d7f8f6f464ae254f$require$states.CLOSING;
        } else // Otherwise
        // Set this's ready state to CLOSING (2).
        this[$d7f8f6f464ae254f$require$kReadyState] = $d7f8f6f464ae254f$var$WebSocket.CLOSING;
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-send
   * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
   */ send(data) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        $d7f8f6f464ae254f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'WebSocket.send'
        });
        data = $d7f8f6f464ae254f$require$webidl.converters.WebSocketSendData(data);
        // 1. If this's ready state is CONNECTING, then throw an
        //    "InvalidStateError" DOMException.
        if (this[$d7f8f6f464ae254f$require$kReadyState] === $d7f8f6f464ae254f$var$WebSocket.CONNECTING) throw new $d7f8f6f464ae254f$require$DOMException('Sent before connected.', 'InvalidStateError');
        // 2. Run the appropriate set of steps from the following list:
        // https://datatracker.ietf.org/doc/html/rfc6455#section-6.1
        // https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
        if (!$d7f8f6f464ae254f$require$isEstablished(this) || $d7f8f6f464ae254f$require$isClosing(this)) return;
        /** @type {import('stream').Duplex} */ const socket = this[$d7f8f6f464ae254f$require$kResponse].socket;
        // If data is a string
        if (typeof data === 'string') {
            // If the WebSocket connection is established and the WebSocket
            // closing handshake has not yet started, then the user agent
            // must send a WebSocket Message comprised of the data argument
            // using a text frame opcode; if the data cannot be sent, e.g.
            // because it would need to be buffered but the buffer is full,
            // the user agent must flag the WebSocket as full and then close
            // the WebSocket connection. Any invocation of this method with a
            // string argument that does not throw an exception must increase
            // the bufferedAmount attribute by the number of bytes needed to
            // express the argument as UTF-8.
            const value = Buffer.from(data);
            const frame = new $d7f8f6f464ae254f$require$WebsocketFrameSend(value);
            const buffer = frame.createFrame($d7f8f6f464ae254f$require$opcodes.TEXT);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= value.byteLength;
            });
        } else if ($d7f8f6f464ae254f$require$types.isArrayBuffer(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need
            // to be buffered but the buffer is full, the user agent must flag
            // the WebSocket as full and then close the WebSocket connection.
            // The data to be sent is the data stored in the buffer described
            // by the ArrayBuffer object. Any invocation of this method with an
            // ArrayBuffer argument that does not throw an exception must
            // increase the bufferedAmount attribute by the length of the
            // ArrayBuffer in bytes.
            const value = Buffer.from(data);
            const frame = new $d7f8f6f464ae254f$require$WebsocketFrameSend(value);
            const buffer = frame.createFrame($d7f8f6f464ae254f$require$opcodes.BINARY);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= value.byteLength;
            });
        } else if (ArrayBuffer.isView(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need to
            // be buffered but the buffer is full, the user agent must flag the
            // WebSocket as full and then close the WebSocket connection. The
            // data to be sent is the data stored in the section of the buffer
            // described by the ArrayBuffer object that data references. Any
            // invocation of this method with this kind of argument that does
            // not throw an exception must increase the bufferedAmount attribute
            // by the length of data’s buffer in bytes.
            const ab = Buffer.from(data, data.byteOffset, data.byteLength);
            const frame = new $d7f8f6f464ae254f$require$WebsocketFrameSend(ab);
            const buffer = frame.createFrame($d7f8f6f464ae254f$require$opcodes.BINARY);
            this.#bufferedAmount += ab.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= ab.byteLength;
            });
        } else if ($d7f8f6f464ae254f$require$isBlobLike(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need to
            // be buffered but the buffer is full, the user agent must flag the
            // WebSocket as full and then close the WebSocket connection. The data
            // to be sent is the raw data represented by the Blob object. Any
            // invocation of this method with a Blob argument that does not throw
            // an exception must increase the bufferedAmount attribute by the size
            // of the Blob object’s raw data, in bytes.
            const frame = new $d7f8f6f464ae254f$require$WebsocketFrameSend();
            data.arrayBuffer().then((ab)=>{
                const value = Buffer.from(ab);
                frame.frameData = value;
                const buffer = frame.createFrame($d7f8f6f464ae254f$require$opcodes.BINARY);
                this.#bufferedAmount += value.byteLength;
                socket.write(buffer, ()=>{
                    this.#bufferedAmount -= value.byteLength;
                });
            });
        }
    }
    get readyState() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        // The readyState getter steps are to return this's ready state.
        return this[$d7f8f6f464ae254f$require$kReadyState];
    }
    get bufferedAmount() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#bufferedAmount;
    }
    get url() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        // The url getter steps are to return this's url, serialized.
        return $d7f8f6f464ae254f$require$URLSerializer(this[$d7f8f6f464ae254f$require$kWebSocketURL]);
    }
    get extensions() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#extensions;
    }
    get protocol() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#protocol;
    }
    get onopen() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#events.open;
    }
    set onopen(fn) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (this.#events.open) this.removeEventListener('open', this.#events.open);
        if (typeof fn === 'function') {
            this.#events.open = fn;
            this.addEventListener('open', fn);
        } else this.#events.open = null;
    }
    get onerror() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#events.error;
    }
    set onerror(fn) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (this.#events.error) this.removeEventListener('error', this.#events.error);
        if (typeof fn === 'function') {
            this.#events.error = fn;
            this.addEventListener('error', fn);
        } else this.#events.error = null;
    }
    get onclose() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#events.close;
    }
    set onclose(fn) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (this.#events.close) this.removeEventListener('close', this.#events.close);
        if (typeof fn === 'function') {
            this.#events.close = fn;
            this.addEventListener('close', fn);
        } else this.#events.close = null;
    }
    get onmessage() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this.#events.message;
    }
    set onmessage(fn) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (this.#events.message) this.removeEventListener('message', this.#events.message);
        if (typeof fn === 'function') {
            this.#events.message = fn;
            this.addEventListener('message', fn);
        } else this.#events.message = null;
    }
    get binaryType() {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        return this[$d7f8f6f464ae254f$require$kBinaryType];
    }
    set binaryType(type) {
        $d7f8f6f464ae254f$require$webidl.brandCheck(this, $d7f8f6f464ae254f$var$WebSocket);
        if (type !== 'blob' && type !== 'arraybuffer') this[$d7f8f6f464ae254f$require$kBinaryType] = 'blob';
        else this[$d7f8f6f464ae254f$require$kBinaryType] = type;
    }
    /**
   * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
   */ #onConnectionEstablished(response) {
        // processResponse is called when the "response’s header list has been received and initialized."
        // once this happens, the connection is open
        this[$d7f8f6f464ae254f$require$kResponse] = response;
        const parser = new $d7f8f6f464ae254f$require$ByteParser(this);
        parser.on('drain', function onParserDrain() {
            this.ws[$d7f8f6f464ae254f$require$kResponse].socket.resume();
        });
        response.socket.ws = this;
        this[$d7f8f6f464ae254f$require$kByteParser] = parser;
        // 1. Change the ready state to OPEN (1).
        this[$d7f8f6f464ae254f$require$kReadyState] = $d7f8f6f464ae254f$require$states.OPEN;
        // 2. Change the extensions attribute’s value to the extensions in use, if
        //    it is not the null value.
        // https://datatracker.ietf.org/doc/html/rfc6455#section-9.1
        const extensions = response.headersList.get('sec-websocket-extensions');
        if (extensions !== null) this.#extensions = extensions;
        // 3. Change the protocol attribute’s value to the subprotocol in use, if
        //    it is not the null value.
        // https://datatracker.ietf.org/doc/html/rfc6455#section-1.9
        const protocol = response.headersList.get('sec-websocket-protocol');
        if (protocol !== null) this.#protocol = protocol;
        // 4. Fire an event named open at the WebSocket object.
        $d7f8f6f464ae254f$require$fireEvent('open', this);
    }
}
// https://websockets.spec.whatwg.org/#dom-websocket-connecting
$d7f8f6f464ae254f$var$WebSocket.CONNECTING = $d7f8f6f464ae254f$var$WebSocket.prototype.CONNECTING = $d7f8f6f464ae254f$require$states.CONNECTING;
// https://websockets.spec.whatwg.org/#dom-websocket-open
$d7f8f6f464ae254f$var$WebSocket.OPEN = $d7f8f6f464ae254f$var$WebSocket.prototype.OPEN = $d7f8f6f464ae254f$require$states.OPEN;
// https://websockets.spec.whatwg.org/#dom-websocket-closing
$d7f8f6f464ae254f$var$WebSocket.CLOSING = $d7f8f6f464ae254f$var$WebSocket.prototype.CLOSING = $d7f8f6f464ae254f$require$states.CLOSING;
// https://websockets.spec.whatwg.org/#dom-websocket-closed
$d7f8f6f464ae254f$var$WebSocket.CLOSED = $d7f8f6f464ae254f$var$WebSocket.prototype.CLOSED = $d7f8f6f464ae254f$require$states.CLOSED;
Object.defineProperties($d7f8f6f464ae254f$var$WebSocket.prototype, {
    CONNECTING: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    OPEN: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    CLOSING: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    CLOSED: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    url: $d7f8f6f464ae254f$require$kEnumerableProperty,
    readyState: $d7f8f6f464ae254f$require$kEnumerableProperty,
    bufferedAmount: $d7f8f6f464ae254f$require$kEnumerableProperty,
    onopen: $d7f8f6f464ae254f$require$kEnumerableProperty,
    onerror: $d7f8f6f464ae254f$require$kEnumerableProperty,
    onclose: $d7f8f6f464ae254f$require$kEnumerableProperty,
    close: $d7f8f6f464ae254f$require$kEnumerableProperty,
    onmessage: $d7f8f6f464ae254f$require$kEnumerableProperty,
    binaryType: $d7f8f6f464ae254f$require$kEnumerableProperty,
    send: $d7f8f6f464ae254f$require$kEnumerableProperty,
    extensions: $d7f8f6f464ae254f$require$kEnumerableProperty,
    protocol: $d7f8f6f464ae254f$require$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'WebSocket',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties($d7f8f6f464ae254f$var$WebSocket, {
    CONNECTING: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    OPEN: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    CLOSING: $d7f8f6f464ae254f$require$staticPropertyDescriptors,
    CLOSED: $d7f8f6f464ae254f$require$staticPropertyDescriptors
});
$d7f8f6f464ae254f$require$webidl.converters['sequence<DOMString>'] = $d7f8f6f464ae254f$require$webidl.sequenceConverter($d7f8f6f464ae254f$require$webidl.converters.DOMString);
$d7f8f6f464ae254f$require$webidl.converters['DOMString or sequence<DOMString>'] = function(V) {
    if ($d7f8f6f464ae254f$require$webidl.util.Type(V) === 'Object' && Symbol.iterator in V) return $d7f8f6f464ae254f$require$webidl.converters['sequence<DOMString>'](V);
    return $d7f8f6f464ae254f$require$webidl.converters.DOMString(V);
};
// This implements the propsal made in https://github.com/whatwg/websockets/issues/42
$d7f8f6f464ae254f$require$webidl.converters.WebSocketInit = $d7f8f6f464ae254f$require$webidl.dictionaryConverter([
    {
        key: 'protocols',
        converter: $d7f8f6f464ae254f$require$webidl.converters['DOMString or sequence<DOMString>'],
        get defaultValue () {
            return [];
        }
    },
    {
        key: 'dispatcher',
        converter: (V)=>V,
        get defaultValue () {
            return $d7f8f6f464ae254f$require$getGlobalDispatcher();
        }
    },
    {
        key: 'headers',
        converter: $d7f8f6f464ae254f$require$webidl.nullableConverter($d7f8f6f464ae254f$require$webidl.converters.HeadersInit)
    }
]);
$d7f8f6f464ae254f$require$webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'] = function(V) {
    if ($d7f8f6f464ae254f$require$webidl.util.Type(V) === 'Object' && !(Symbol.iterator in V)) return $d7f8f6f464ae254f$require$webidl.converters.WebSocketInit(V);
    return {
        protocols: $d7f8f6f464ae254f$require$webidl.converters['DOMString or sequence<DOMString>'](V)
    };
};
$d7f8f6f464ae254f$require$webidl.converters.WebSocketSendData = function(V) {
    if ($d7f8f6f464ae254f$require$webidl.util.Type(V) === 'Object') {
        if ($d7f8f6f464ae254f$require$isBlobLike(V)) return $d7f8f6f464ae254f$require$webidl.converters.Blob(V, {
            strict: false
        });
        if (ArrayBuffer.isView(V) || $d7f8f6f464ae254f$require$types.isAnyArrayBuffer(V)) return $d7f8f6f464ae254f$require$webidl.converters.BufferSource(V);
    }
    return $d7f8f6f464ae254f$require$webidl.converters.USVString(V);
};
module.exports = {
    WebSocket: $d7f8f6f464ae254f$var$WebSocket
};

});
parcelRegister("2FIOw", function(module, exports) {
module.exports = new URL("constants.2c9fb4db.js", "file:" + __filename).toString();

});

parcelRegister("3027S", function(module, exports) {
module.exports = new URL("symbols.af1b52d6.js", "file:" + __filename).toString();

});

parcelRegister("69aMq", function(module, exports) {
module.exports = new URL("util.fa0fe0c6.js", "file:" + __filename).toString();

});

parcelRegister("3rHvv", function(module, exports) {
module.exports = new URL("connection.9c4578f7.js", "file:" + __filename).toString();

});

parcelRegister("kQDPa", function(module, exports) {
module.exports = new URL("frame.c64b81f1.js", "file:" + __filename).toString();

});

parcelRegister("1IgmJ", function(module, exports) {
module.exports = new URL("receiver.7df845c4.js", "file:" + __filename).toString();

});



