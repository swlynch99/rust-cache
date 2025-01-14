require("./webidl.35d389df.js");
require("./constants.0582e50a.js");
require("./dataURL.a565585e.js");
require("./global.12b98812.js");
require("./constants.478d9bec.js");
require("./symbols.601620ca.js");
require("./util.56c9e75a.js");
require("./connection.7cc3582b.js");
require("./frame.56567681.js");
require("./receiver.1a1b3450.js");
require("./util.26715e80.js");
require("./global.206e7c2a.js");
var $82XNJ$util = require("util");


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
parcelRegister("i3D6u", function(module, exports) {
'use strict';

var $iPB2Q = parcelRequire("iPB2Q");
var $d256d6fa5bcce47c$require$webidl = $iPB2Q.webidl;

var $bCI0k = parcelRequire("bCI0k");
var $d256d6fa5bcce47c$require$DOMException = $bCI0k.DOMException;

var $iRsiv = parcelRequire("iRsiv");
var $d256d6fa5bcce47c$require$URLSerializer = $iRsiv.URLSerializer;

var $7GOAF = parcelRequire("7GOAF");
var $d256d6fa5bcce47c$require$getGlobalOrigin = $7GOAF.getGlobalOrigin;

var $azWFw = parcelRequire("azWFw");
var $d256d6fa5bcce47c$require$staticPropertyDescriptors = $azWFw.staticPropertyDescriptors;
var $d256d6fa5bcce47c$require$states = $azWFw.states;
var $d256d6fa5bcce47c$require$opcodes = $azWFw.opcodes;
var $d256d6fa5bcce47c$require$emptyBuffer = $azWFw.emptyBuffer;

var $jGGEJ = parcelRequire("jGGEJ");
var $d256d6fa5bcce47c$require$kWebSocketURL = $jGGEJ.kWebSocketURL;
var $d256d6fa5bcce47c$require$kReadyState = $jGGEJ.kReadyState;
var $d256d6fa5bcce47c$require$kController = $jGGEJ.kController;
var $d256d6fa5bcce47c$require$kBinaryType = $jGGEJ.kBinaryType;
var $d256d6fa5bcce47c$require$kResponse = $jGGEJ.kResponse;
var $d256d6fa5bcce47c$require$kSentClose = $jGGEJ.kSentClose;
var $d256d6fa5bcce47c$require$kByteParser = $jGGEJ.kByteParser;

var $bGAcd = parcelRequire("bGAcd");
var $d256d6fa5bcce47c$require$isEstablished = $bGAcd.isEstablished;
var $d256d6fa5bcce47c$require$isClosing = $bGAcd.isClosing;
var $d256d6fa5bcce47c$require$isValidSubprotocol = $bGAcd.isValidSubprotocol;
var $d256d6fa5bcce47c$require$failWebsocketConnection = $bGAcd.failWebsocketConnection;
var $d256d6fa5bcce47c$require$fireEvent = $bGAcd.fireEvent;

var $Ncoi5 = parcelRequire("Ncoi5");
var $d256d6fa5bcce47c$require$establishWebSocketConnection = $Ncoi5.establishWebSocketConnection;

var $hFULX = parcelRequire("hFULX");
var $d256d6fa5bcce47c$require$WebsocketFrameSend = $hFULX.WebsocketFrameSend;

var $kkxlk = parcelRequire("kkxlk");
var $d256d6fa5bcce47c$require$ByteParser = $kkxlk.ByteParser;

var $1Z05w = parcelRequire("1Z05w");
var $d256d6fa5bcce47c$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;
var $d256d6fa5bcce47c$require$isBlobLike = $1Z05w.isBlobLike;

var $byZ3g = parcelRequire("byZ3g");
var $d256d6fa5bcce47c$require$getGlobalDispatcher = $byZ3g.getGlobalDispatcher;

var $d256d6fa5bcce47c$require$types = $82XNJ$util.types;
let $d256d6fa5bcce47c$var$experimentalWarned = false;
// https://websockets.spec.whatwg.org/#interface-definition
class $d256d6fa5bcce47c$var$WebSocket extends EventTarget {
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
        $d256d6fa5bcce47c$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'WebSocket constructor'
        });
        if (!$d256d6fa5bcce47c$var$experimentalWarned) {
            $d256d6fa5bcce47c$var$experimentalWarned = true;
            process.emitWarning('WebSockets are experimental, expect them to change at any time.', {
                code: 'UNDICI-WS'
            });
        }
        const options = $d256d6fa5bcce47c$require$webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'](protocols);
        url = $d256d6fa5bcce47c$require$webidl.converters.USVString(url);
        protocols = options.protocols;
        // 1. Let baseURL be this's relevant settings object's API base URL.
        const baseURL = $d256d6fa5bcce47c$require$getGlobalOrigin();
        // 1. Let urlRecord be the result of applying the URL parser to url with baseURL.
        let urlRecord;
        try {
            urlRecord = new URL(url, baseURL);
        } catch (e) {
            // 3. If urlRecord is failure, then throw a "SyntaxError" DOMException.
            throw new $d256d6fa5bcce47c$require$DOMException(e, 'SyntaxError');
        }
        // 4. If urlRecord’s scheme is "http", then set urlRecord’s scheme to "ws".
        if (urlRecord.protocol === 'http:') urlRecord.protocol = 'ws:';
        else if (urlRecord.protocol === 'https:') // 5. Otherwise, if urlRecord’s scheme is "https", set urlRecord’s scheme to "wss".
        urlRecord.protocol = 'wss:';
        // 6. If urlRecord’s scheme is not "ws" or "wss", then throw a "SyntaxError" DOMException.
        if (urlRecord.protocol !== 'ws:' && urlRecord.protocol !== 'wss:') throw new $d256d6fa5bcce47c$require$DOMException(`Expected a ws: or wss: protocol, got ${urlRecord.protocol}`, 'SyntaxError');
        // 7. If urlRecord’s fragment is non-null, then throw a "SyntaxError"
        //    DOMException.
        if (urlRecord.hash || urlRecord.href.endsWith('#')) throw new $d256d6fa5bcce47c$require$DOMException('Got fragment', 'SyntaxError');
        // 8. If protocols is a string, set protocols to a sequence consisting
        //    of just that string.
        if (typeof protocols === 'string') protocols = [
            protocols
        ];
        // 9. If any of the values in protocols occur more than once or otherwise
        //    fail to match the requirements for elements that comprise the value
        //    of `Sec-WebSocket-Protocol` fields as defined by The WebSocket
        //    protocol, then throw a "SyntaxError" DOMException.
        if (protocols.length !== new Set(protocols.map((p)=>p.toLowerCase())).size) throw new $d256d6fa5bcce47c$require$DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        if (protocols.length > 0 && !protocols.every((p)=>$d256d6fa5bcce47c$require$isValidSubprotocol(p))) throw new $d256d6fa5bcce47c$require$DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        // 10. Set this's url to urlRecord.
        this[$d256d6fa5bcce47c$require$kWebSocketURL] = new URL(urlRecord.href);
        // 11. Let client be this's relevant settings object.
        // 12. Run this step in parallel:
        //    1. Establish a WebSocket connection given urlRecord, protocols,
        //       and client.
        this[$d256d6fa5bcce47c$require$kController] = $d256d6fa5bcce47c$require$establishWebSocketConnection(urlRecord, protocols, this, (response)=>this.#onConnectionEstablished(response), options);
        // Each WebSocket object has an associated ready state, which is a
        // number representing the state of the connection. Initially it must
        // be CONNECTING (0).
        this[$d256d6fa5bcce47c$require$kReadyState] = $d256d6fa5bcce47c$var$WebSocket.CONNECTING;
        // The extensions attribute must initially return the empty string.
        // The protocol attribute must initially return the empty string.
        // Each WebSocket object has an associated binary type, which is a
        // BinaryType. Initially it must be "blob".
        this[$d256d6fa5bcce47c$require$kBinaryType] = 'blob';
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-close
   * @param {number|undefined} code
   * @param {string|undefined} reason
   */ close(code, reason) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (code !== undefined) code = $d256d6fa5bcce47c$require$webidl.converters['unsigned short'](code, {
            clamp: true
        });
        if (reason !== undefined) reason = $d256d6fa5bcce47c$require$webidl.converters.USVString(reason);
        // 1. If code is present, but is neither an integer equal to 1000 nor an
        //    integer in the range 3000 to 4999, inclusive, throw an
        //    "InvalidAccessError" DOMException.
        if (code !== undefined) {
            if (code !== 1000 && (code < 3000 || code > 4999)) throw new $d256d6fa5bcce47c$require$DOMException('invalid code', 'InvalidAccessError');
        }
        let reasonByteLength = 0;
        // 2. If reason is present, then run these substeps:
        if (reason !== undefined) {
            // 1. Let reasonBytes be the result of encoding reason.
            // 2. If reasonBytes is longer than 123 bytes, then throw a
            //    "SyntaxError" DOMException.
            reasonByteLength = Buffer.byteLength(reason);
            if (reasonByteLength > 123) throw new $d256d6fa5bcce47c$require$DOMException(`Reason must be less than 123 bytes; received ${reasonByteLength}`, 'SyntaxError');
        }
        // 3. Run the first matching steps from the following list:
        if (this[$d256d6fa5bcce47c$require$kReadyState] === $d256d6fa5bcce47c$var$WebSocket.CLOSING || this[$d256d6fa5bcce47c$require$kReadyState] === $d256d6fa5bcce47c$var$WebSocket.CLOSED) ;
        else if (!$d256d6fa5bcce47c$require$isEstablished(this)) {
            // If the WebSocket connection is not yet established
            // Fail the WebSocket connection and set this's ready state
            // to CLOSING (2).
            $d256d6fa5bcce47c$require$failWebsocketConnection(this, 'Connection was closed before it was established.');
            this[$d256d6fa5bcce47c$require$kReadyState] = $d256d6fa5bcce47c$var$WebSocket.CLOSING;
        } else if (!$d256d6fa5bcce47c$require$isClosing(this)) {
            // If the WebSocket closing handshake has not yet been started
            // Start the WebSocket closing handshake and set this's ready
            // state to CLOSING (2).
            // - If neither code nor reason is present, the WebSocket Close
            //   message must not have a body.
            // - If code is present, then the status code to use in the
            //   WebSocket Close message must be the integer given by code.
            // - If reason is also present, then reasonBytes must be
            //   provided in the Close message after the status code.
            const frame = new $d256d6fa5bcce47c$require$WebsocketFrameSend();
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
            } else frame.frameData = $d256d6fa5bcce47c$require$emptyBuffer;
            /** @type {import('stream').Duplex} */ const socket = this[$d256d6fa5bcce47c$require$kResponse].socket;
            socket.write(frame.createFrame($d256d6fa5bcce47c$require$opcodes.CLOSE), (err)=>{
                if (!err) this[$d256d6fa5bcce47c$require$kSentClose] = true;
            });
            // Upon either sending or receiving a Close control frame, it is said
            // that _The WebSocket Closing Handshake is Started_ and that the
            // WebSocket connection is in the CLOSING state.
            this[$d256d6fa5bcce47c$require$kReadyState] = $d256d6fa5bcce47c$require$states.CLOSING;
        } else // Otherwise
        // Set this's ready state to CLOSING (2).
        this[$d256d6fa5bcce47c$require$kReadyState] = $d256d6fa5bcce47c$var$WebSocket.CLOSING;
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-send
   * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
   */ send(data) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        $d256d6fa5bcce47c$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'WebSocket.send'
        });
        data = $d256d6fa5bcce47c$require$webidl.converters.WebSocketSendData(data);
        // 1. If this's ready state is CONNECTING, then throw an
        //    "InvalidStateError" DOMException.
        if (this[$d256d6fa5bcce47c$require$kReadyState] === $d256d6fa5bcce47c$var$WebSocket.CONNECTING) throw new $d256d6fa5bcce47c$require$DOMException('Sent before connected.', 'InvalidStateError');
        // 2. Run the appropriate set of steps from the following list:
        // https://datatracker.ietf.org/doc/html/rfc6455#section-6.1
        // https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
        if (!$d256d6fa5bcce47c$require$isEstablished(this) || $d256d6fa5bcce47c$require$isClosing(this)) return;
        /** @type {import('stream').Duplex} */ const socket = this[$d256d6fa5bcce47c$require$kResponse].socket;
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
            const frame = new $d256d6fa5bcce47c$require$WebsocketFrameSend(value);
            const buffer = frame.createFrame($d256d6fa5bcce47c$require$opcodes.TEXT);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= value.byteLength;
            });
        } else if ($d256d6fa5bcce47c$require$types.isArrayBuffer(data)) {
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
            const frame = new $d256d6fa5bcce47c$require$WebsocketFrameSend(value);
            const buffer = frame.createFrame($d256d6fa5bcce47c$require$opcodes.BINARY);
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
            const frame = new $d256d6fa5bcce47c$require$WebsocketFrameSend(ab);
            const buffer = frame.createFrame($d256d6fa5bcce47c$require$opcodes.BINARY);
            this.#bufferedAmount += ab.byteLength;
            socket.write(buffer, ()=>{
                this.#bufferedAmount -= ab.byteLength;
            });
        } else if ($d256d6fa5bcce47c$require$isBlobLike(data)) {
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
            const frame = new $d256d6fa5bcce47c$require$WebsocketFrameSend();
            data.arrayBuffer().then((ab)=>{
                const value = Buffer.from(ab);
                frame.frameData = value;
                const buffer = frame.createFrame($d256d6fa5bcce47c$require$opcodes.BINARY);
                this.#bufferedAmount += value.byteLength;
                socket.write(buffer, ()=>{
                    this.#bufferedAmount -= value.byteLength;
                });
            });
        }
    }
    get readyState() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        // The readyState getter steps are to return this's ready state.
        return this[$d256d6fa5bcce47c$require$kReadyState];
    }
    get bufferedAmount() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#bufferedAmount;
    }
    get url() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        // The url getter steps are to return this's url, serialized.
        return $d256d6fa5bcce47c$require$URLSerializer(this[$d256d6fa5bcce47c$require$kWebSocketURL]);
    }
    get extensions() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#extensions;
    }
    get protocol() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#protocol;
    }
    get onopen() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#events.open;
    }
    set onopen(fn) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (this.#events.open) this.removeEventListener('open', this.#events.open);
        if (typeof fn === 'function') {
            this.#events.open = fn;
            this.addEventListener('open', fn);
        } else this.#events.open = null;
    }
    get onerror() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#events.error;
    }
    set onerror(fn) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (this.#events.error) this.removeEventListener('error', this.#events.error);
        if (typeof fn === 'function') {
            this.#events.error = fn;
            this.addEventListener('error', fn);
        } else this.#events.error = null;
    }
    get onclose() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#events.close;
    }
    set onclose(fn) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (this.#events.close) this.removeEventListener('close', this.#events.close);
        if (typeof fn === 'function') {
            this.#events.close = fn;
            this.addEventListener('close', fn);
        } else this.#events.close = null;
    }
    get onmessage() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this.#events.message;
    }
    set onmessage(fn) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (this.#events.message) this.removeEventListener('message', this.#events.message);
        if (typeof fn === 'function') {
            this.#events.message = fn;
            this.addEventListener('message', fn);
        } else this.#events.message = null;
    }
    get binaryType() {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        return this[$d256d6fa5bcce47c$require$kBinaryType];
    }
    set binaryType(type) {
        $d256d6fa5bcce47c$require$webidl.brandCheck(this, $d256d6fa5bcce47c$var$WebSocket);
        if (type !== 'blob' && type !== 'arraybuffer') this[$d256d6fa5bcce47c$require$kBinaryType] = 'blob';
        else this[$d256d6fa5bcce47c$require$kBinaryType] = type;
    }
    /**
   * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
   */ #onConnectionEstablished(response) {
        // processResponse is called when the "response’s header list has been received and initialized."
        // once this happens, the connection is open
        this[$d256d6fa5bcce47c$require$kResponse] = response;
        const parser = new $d256d6fa5bcce47c$require$ByteParser(this);
        parser.on('drain', function onParserDrain() {
            this.ws[$d256d6fa5bcce47c$require$kResponse].socket.resume();
        });
        response.socket.ws = this;
        this[$d256d6fa5bcce47c$require$kByteParser] = parser;
        // 1. Change the ready state to OPEN (1).
        this[$d256d6fa5bcce47c$require$kReadyState] = $d256d6fa5bcce47c$require$states.OPEN;
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
        $d256d6fa5bcce47c$require$fireEvent('open', this);
    }
}
// https://websockets.spec.whatwg.org/#dom-websocket-connecting
$d256d6fa5bcce47c$var$WebSocket.CONNECTING = $d256d6fa5bcce47c$var$WebSocket.prototype.CONNECTING = $d256d6fa5bcce47c$require$states.CONNECTING;
// https://websockets.spec.whatwg.org/#dom-websocket-open
$d256d6fa5bcce47c$var$WebSocket.OPEN = $d256d6fa5bcce47c$var$WebSocket.prototype.OPEN = $d256d6fa5bcce47c$require$states.OPEN;
// https://websockets.spec.whatwg.org/#dom-websocket-closing
$d256d6fa5bcce47c$var$WebSocket.CLOSING = $d256d6fa5bcce47c$var$WebSocket.prototype.CLOSING = $d256d6fa5bcce47c$require$states.CLOSING;
// https://websockets.spec.whatwg.org/#dom-websocket-closed
$d256d6fa5bcce47c$var$WebSocket.CLOSED = $d256d6fa5bcce47c$var$WebSocket.prototype.CLOSED = $d256d6fa5bcce47c$require$states.CLOSED;
Object.defineProperties($d256d6fa5bcce47c$var$WebSocket.prototype, {
    CONNECTING: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    OPEN: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    CLOSING: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    CLOSED: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    url: $d256d6fa5bcce47c$require$kEnumerableProperty,
    readyState: $d256d6fa5bcce47c$require$kEnumerableProperty,
    bufferedAmount: $d256d6fa5bcce47c$require$kEnumerableProperty,
    onopen: $d256d6fa5bcce47c$require$kEnumerableProperty,
    onerror: $d256d6fa5bcce47c$require$kEnumerableProperty,
    onclose: $d256d6fa5bcce47c$require$kEnumerableProperty,
    close: $d256d6fa5bcce47c$require$kEnumerableProperty,
    onmessage: $d256d6fa5bcce47c$require$kEnumerableProperty,
    binaryType: $d256d6fa5bcce47c$require$kEnumerableProperty,
    send: $d256d6fa5bcce47c$require$kEnumerableProperty,
    extensions: $d256d6fa5bcce47c$require$kEnumerableProperty,
    protocol: $d256d6fa5bcce47c$require$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'WebSocket',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties($d256d6fa5bcce47c$var$WebSocket, {
    CONNECTING: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    OPEN: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    CLOSING: $d256d6fa5bcce47c$require$staticPropertyDescriptors,
    CLOSED: $d256d6fa5bcce47c$require$staticPropertyDescriptors
});
$d256d6fa5bcce47c$require$webidl.converters['sequence<DOMString>'] = $d256d6fa5bcce47c$require$webidl.sequenceConverter($d256d6fa5bcce47c$require$webidl.converters.DOMString);
$d256d6fa5bcce47c$require$webidl.converters['DOMString or sequence<DOMString>'] = function(V) {
    if ($d256d6fa5bcce47c$require$webidl.util.Type(V) === 'Object' && Symbol.iterator in V) return $d256d6fa5bcce47c$require$webidl.converters['sequence<DOMString>'](V);
    return $d256d6fa5bcce47c$require$webidl.converters.DOMString(V);
};
// This implements the propsal made in https://github.com/whatwg/websockets/issues/42
$d256d6fa5bcce47c$require$webidl.converters.WebSocketInit = $d256d6fa5bcce47c$require$webidl.dictionaryConverter([
    {
        key: 'protocols',
        converter: $d256d6fa5bcce47c$require$webidl.converters['DOMString or sequence<DOMString>'],
        get defaultValue () {
            return [];
        }
    },
    {
        key: 'dispatcher',
        converter: (V)=>V,
        get defaultValue () {
            return $d256d6fa5bcce47c$require$getGlobalDispatcher();
        }
    },
    {
        key: 'headers',
        converter: $d256d6fa5bcce47c$require$webidl.nullableConverter($d256d6fa5bcce47c$require$webidl.converters.HeadersInit)
    }
]);
$d256d6fa5bcce47c$require$webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'] = function(V) {
    if ($d256d6fa5bcce47c$require$webidl.util.Type(V) === 'Object' && !(Symbol.iterator in V)) return $d256d6fa5bcce47c$require$webidl.converters.WebSocketInit(V);
    return {
        protocols: $d256d6fa5bcce47c$require$webidl.converters['DOMString or sequence<DOMString>'](V)
    };
};
$d256d6fa5bcce47c$require$webidl.converters.WebSocketSendData = function(V) {
    if ($d256d6fa5bcce47c$require$webidl.util.Type(V) === 'Object') {
        if ($d256d6fa5bcce47c$require$isBlobLike(V)) return $d256d6fa5bcce47c$require$webidl.converters.Blob(V, {
            strict: false
        });
        if (ArrayBuffer.isView(V) || $d256d6fa5bcce47c$require$types.isAnyArrayBuffer(V)) return $d256d6fa5bcce47c$require$webidl.converters.BufferSource(V);
    }
    return $d256d6fa5bcce47c$require$webidl.converters.USVString(V);
};
module.exports = {
    WebSocket: $d256d6fa5bcce47c$var$WebSocket
};

});
parcelRegister("azWFw", function(module, exports) {
module.exports = new URL("constants.478d9bec.js", "file:" + __filename).toString();

});

parcelRegister("jGGEJ", function(module, exports) {
module.exports = new URL("symbols.601620ca.js", "file:" + __filename).toString();

});

parcelRegister("bGAcd", function(module, exports) {
module.exports = new URL("util.56c9e75a.js", "file:" + __filename).toString();

});

parcelRegister("Ncoi5", function(module, exports) {
module.exports = new URL("connection.7cc3582b.js", "file:" + __filename).toString();

});

parcelRegister("hFULX", function(module, exports) {
module.exports = new URL("frame.56567681.js", "file:" + __filename).toString();

});

parcelRegister("kkxlk", function(module, exports) {
module.exports = new URL("receiver.1a1b3450.js", "file:" + __filename).toString();

});



//# sourceMappingURL=websocket.075b181e.js.map
