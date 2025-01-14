require("./main.1b9dc352.js");
require("./util.26715e80.js");
require("./util.1c38d6ed.js");
require("./formdata.1236317b.js");
require("./symbols.be9b962d.js");
require("./webidl.35d389df.js");
require("./constants.0582e50a.js");
require("./symbols.c5dd8fde.js");
require("./file.7f783dcd.js");
require("./dataURL.a565585e.js");
var $h6oEZ$buffer = require("buffer");
var $h6oEZ$assert = require("assert");
var $h6oEZ$utiltypes = require("util/types");
var $h6oEZ$streamweb = require("stream/web");


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
parcelRegister("eh3oC", function(module, exports) {
'use strict';

var $cNPC7 = parcelRequire("cNPC7");

var $1Z05w = parcelRequire("1Z05w");

var $aduQ2 = parcelRequire("aduQ2");
var $a64549984e45770d$require$ReadableStreamFrom = $aduQ2.ReadableStreamFrom;
var $a64549984e45770d$require$isBlobLike = $aduQ2.isBlobLike;
var $a64549984e45770d$require$isReadableStreamLike = $aduQ2.isReadableStreamLike;
var $a64549984e45770d$require$readableStreamClose = $aduQ2.readableStreamClose;
var $a64549984e45770d$require$createDeferredPromise = $aduQ2.createDeferredPromise;
var $a64549984e45770d$require$fullyReadBody = $aduQ2.fullyReadBody;

var $6ekHD = parcelRequire("6ekHD");
var $a64549984e45770d$require$FormData = $6ekHD.FormData;

var $gP2yv = parcelRequire("gP2yv");
var $a64549984e45770d$require$kState = $gP2yv.kState;

var $iPB2Q = parcelRequire("iPB2Q");
var $a64549984e45770d$require$webidl = $iPB2Q.webidl;

var $bCI0k = parcelRequire("bCI0k");
var $a64549984e45770d$require$DOMException = $bCI0k.DOMException;
var $a64549984e45770d$require$structuredClone = $bCI0k.structuredClone;

var $a64549984e45770d$require$Blob = $h6oEZ$buffer.Blob;
var $a64549984e45770d$require$NativeFile = $h6oEZ$buffer.File;

var $bMqEt = parcelRequire("bMqEt");
var $a64549984e45770d$require$kBodyUsed = $bMqEt.kBodyUsed;


var $1Z05w = parcelRequire("1Z05w");
var $a64549984e45770d$require$isErrored = $1Z05w.isErrored;

var $a64549984e45770d$require$isUint8Array = $h6oEZ$utiltypes.isUint8Array;
var $a64549984e45770d$require$isArrayBuffer = $h6oEZ$utiltypes.isArrayBuffer;

var $iEva8 = parcelRequire("iEva8");
var $a64549984e45770d$require$UndiciFile = $iEva8.File;

var $iRsiv = parcelRequire("iRsiv");
var $a64549984e45770d$require$parseMIMEType = $iRsiv.parseMIMEType;
var $a64549984e45770d$require$serializeAMimeType = $iRsiv.serializeAMimeType;
let $a64549984e45770d$var$ReadableStream = globalThis.ReadableStream;
/** @type {globalThis['File']} */ const $a64549984e45770d$var$File = $a64549984e45770d$require$NativeFile ?? $a64549984e45770d$require$UndiciFile;
const $a64549984e45770d$var$textEncoder = new TextEncoder();
const $a64549984e45770d$var$textDecoder = new TextDecoder();

// https://fetch.spec.whatwg.org/#concept-bodyinit-extract
function $a64549984e45770d$var$extractBody(object, keepalive = false) {
    if (!$a64549984e45770d$var$ReadableStream) $a64549984e45770d$var$ReadableStream = $h6oEZ$streamweb.ReadableStream;
    // 1. Let stream be null.
    let stream = null;
    // 2. If object is a ReadableStream object, then set stream to object.
    if (object instanceof $a64549984e45770d$var$ReadableStream) stream = object;
    else if ($a64549984e45770d$require$isBlobLike(object)) // 3. Otherwise, if object is a Blob object, set stream to the
    //    result of running object’s get stream.
    stream = object.stream();
    else // 4. Otherwise, set stream to a new ReadableStream object, and set
    //    up stream.
    stream = new $a64549984e45770d$var$ReadableStream({
        async pull (controller) {
            controller.enqueue(typeof source === 'string' ? $a64549984e45770d$var$textEncoder.encode(source) : source);
            queueMicrotask(()=>$a64549984e45770d$require$readableStreamClose(controller));
        },
        start () {},
        type: undefined
    });
    // 5. Assert: stream is a ReadableStream object.
    $h6oEZ$assert($a64549984e45770d$require$isReadableStreamLike(stream));
    // 6. Let action be null.
    let action = null;
    // 7. Let source be null.
    let source = null;
    // 8. Let length be null.
    let length = null;
    // 9. Let type be null.
    let type = null;
    // 10. Switch on object:
    if (typeof object === 'string') {
        // Set source to the UTF-8 encoding of object.
        // Note: setting source to a Uint8Array here breaks some mocking assumptions.
        source = object;
        // Set type to `text/plain;charset=UTF-8`.
        type = 'text/plain;charset=UTF-8';
    } else if (object instanceof URLSearchParams) {
        // URLSearchParams
        // spec says to run application/x-www-form-urlencoded on body.list
        // this is implemented in Node.js as apart of an URLSearchParams instance toString method
        // See: https://github.com/nodejs/node/blob/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/lib/internal/url.js#L490
        // and https://github.com/nodejs/node/blob/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/lib/internal/url.js#L1100
        // Set source to the result of running the application/x-www-form-urlencoded serializer with object’s list.
        source = object.toString();
        // Set type to `application/x-www-form-urlencoded;charset=UTF-8`.
        type = 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if ($a64549984e45770d$require$isArrayBuffer(object)) // BufferSource/ArrayBuffer
    // Set source to a copy of the bytes held by object.
    source = new Uint8Array(object.slice());
    else if (ArrayBuffer.isView(object)) // BufferSource/ArrayBufferView
    // Set source to a copy of the bytes held by object.
    source = new Uint8Array(object.buffer.slice(object.byteOffset, object.byteOffset + object.byteLength));
    else if ($1Z05w.isFormDataLike(object)) {
        const boundary = `----formdata-undici-0${`${Math.floor(Math.random() * 1e11)}`.padStart(11, '0')}`;
        const prefix = `--${boundary}\r\nContent-Disposition: form-data`;
        /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ const escape = (str)=>str.replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22');
        const normalizeLinefeeds = (value)=>value.replace(/\r?\n|\r/g, '\r\n');
        // Set action to this step: run the multipart/form-data
        // encoding algorithm, with object’s entry list and UTF-8.
        // - This ensures that the body is immutable and can't be changed afterwords
        // - That the content-length is calculated in advance.
        // - And that all parts are pre-encoded and ready to be sent.
        const blobParts = [];
        const rn = new Uint8Array([
            13,
            10
        ]) // '\r\n'
        ;
        length = 0;
        let hasUnknownSizeValue = false;
        for (const [name, value] of object)if (typeof value === 'string') {
            const chunk = $a64549984e45770d$var$textEncoder.encode(prefix + `; name="${escape(normalizeLinefeeds(name))}"` + `\r\n\r\n${normalizeLinefeeds(value)}\r\n`);
            blobParts.push(chunk);
            length += chunk.byteLength;
        } else {
            const chunk = $a64549984e45770d$var$textEncoder.encode(`${prefix}; name="${escape(normalizeLinefeeds(name))}"` + (value.name ? `; filename="${escape(value.name)}"` : '') + '\r\n' + `Content-Type: ${value.type || 'application/octet-stream'}\r\n\r\n`);
            blobParts.push(chunk, value, rn);
            if (typeof value.size === 'number') length += chunk.byteLength + value.size + rn.byteLength;
            else hasUnknownSizeValue = true;
        }
        const chunk = $a64549984e45770d$var$textEncoder.encode(`--${boundary}--`);
        blobParts.push(chunk);
        length += chunk.byteLength;
        if (hasUnknownSizeValue) length = null;
        // Set source to object.
        source = object;
        action = async function*() {
            for (const part of blobParts)if (part.stream) yield* part.stream();
            else yield part;
        };
        // Set type to `multipart/form-data; boundary=`,
        // followed by the multipart/form-data boundary string generated
        // by the multipart/form-data encoding algorithm.
        type = 'multipart/form-data; boundary=' + boundary;
    } else if ($a64549984e45770d$require$isBlobLike(object)) {
        // Blob
        // Set source to object.
        source = object;
        // Set length to object’s size.
        length = object.size;
        // If object’s type attribute is not the empty byte sequence, set
        // type to its value.
        if (object.type) type = object.type;
    } else if (typeof object[Symbol.asyncIterator] === 'function') {
        // If keepalive is true, then throw a TypeError.
        if (keepalive) throw new TypeError('keepalive');
        // If object is disturbed or locked, then throw a TypeError.
        if ($1Z05w.isDisturbed(object) || object.locked) throw new TypeError('Response body object should not be disturbed or locked');
        stream = object instanceof $a64549984e45770d$var$ReadableStream ? object : $a64549984e45770d$require$ReadableStreamFrom(object);
    }
    // 11. If source is a byte sequence, then set action to a
    // step that returns source and length to source’s length.
    if (typeof source === 'string' || $1Z05w.isBuffer(source)) length = Buffer.byteLength(source);
    // 12. If action is non-null, then run these steps in in parallel:
    if (action != null) {
        // Run action.
        let iterator;
        stream = new $a64549984e45770d$var$ReadableStream({
            async start () {
                iterator = action(object)[Symbol.asyncIterator]();
            },
            async pull (controller) {
                const { value: value, done: done } = await iterator.next();
                if (done) // When running action is done, close stream.
                queueMicrotask(()=>{
                    controller.close();
                });
                else // Whenever one or more bytes are available and stream is not errored,
                // enqueue a Uint8Array wrapping an ArrayBuffer containing the available
                // bytes into stream.
                if (!$a64549984e45770d$require$isErrored(stream)) controller.enqueue(new Uint8Array(value));
                return controller.desiredSize > 0;
            },
            async cancel (reason) {
                await iterator.return();
            },
            type: undefined
        });
    }
    // 13. Let body be a body whose stream is stream, source is source,
    // and length is length.
    const body = {
        stream: stream,
        source: source,
        length: length
    };
    // 14. Return (body, type).
    return [
        body,
        type
    ];
}

// https://fetch.spec.whatwg.org/#bodyinit-safely-extract
function $a64549984e45770d$var$safelyExtractBody(object, keepalive = false) {
    if (!$a64549984e45770d$var$ReadableStream) // istanbul ignore next
    $a64549984e45770d$var$ReadableStream = $h6oEZ$streamweb.ReadableStream;
    // To safely extract a body and a `Content-Type` value from
    // a byte sequence or BodyInit object object, run these steps:
    // 1. If object is a ReadableStream object, then:
    if (object instanceof $a64549984e45770d$var$ReadableStream) {
        // Assert: object is neither disturbed nor locked.
        // istanbul ignore next
        $h6oEZ$assert(!$1Z05w.isDisturbed(object), 'The body has already been consumed.');
        // istanbul ignore next
        $h6oEZ$assert(!object.locked, 'The stream is locked.');
    }
    // 2. Return the results of extracting object.
    return $a64549984e45770d$var$extractBody(object, keepalive);
}
function $a64549984e45770d$var$cloneBody(body) {
    // To clone a body body, run these steps:
    // https://fetch.spec.whatwg.org/#concept-body-clone
    // 1. Let « out1, out2 » be the result of teeing body’s stream.
    const [out1, out2] = body.stream.tee();
    const out2Clone = $a64549984e45770d$require$structuredClone(out2, {
        transfer: [
            out2
        ]
    });
    // This, for whatever reasons, unrefs out2Clone which allows
    // the process to exit by itself.
    const [, finalClone] = out2Clone.tee();
    // 2. Set body’s stream to out1.
    body.stream = out1;
    // 3. Return a body whose stream is out2 and other members are copied from body.
    return {
        stream: finalClone,
        length: body.length,
        source: body.source
    };
}
async function* $a64549984e45770d$var$consumeBody(body) {
    if (body) {
        if ($a64549984e45770d$require$isUint8Array(body)) yield body;
        else {
            const stream = body.stream;
            if ($1Z05w.isDisturbed(stream)) throw new TypeError('The body has already been consumed.');
            if (stream.locked) throw new TypeError('The stream is locked.');
            // Compat.
            stream[$a64549984e45770d$require$kBodyUsed] = true;
            yield* stream;
        }
    }
}
function $a64549984e45770d$var$throwIfAborted(state) {
    if (state.aborted) throw new $a64549984e45770d$require$DOMException('The operation was aborted.', 'AbortError');
}
function $a64549984e45770d$var$bodyMixinMethods(instance) {
    const methods = {
        blob () {
            // The blob() method steps are to return the result of
            // running consume body with this and the following step
            // given a byte sequence bytes: return a Blob whose
            // contents are bytes and whose type attribute is this’s
            // MIME type.
            return $a64549984e45770d$var$specConsumeBody(this, (bytes)=>{
                let mimeType = $a64549984e45770d$var$bodyMimeType(this);
                if (mimeType === 'failure') mimeType = '';
                else if (mimeType) mimeType = $a64549984e45770d$require$serializeAMimeType(mimeType);
                // Return a Blob whose contents are bytes and type attribute
                // is mimeType.
                return new $a64549984e45770d$require$Blob([
                    bytes
                ], {
                    type: mimeType
                });
            }, instance);
        },
        arrayBuffer () {
            // The arrayBuffer() method steps are to return the result
            // of running consume body with this and the following step
            // given a byte sequence bytes: return a new ArrayBuffer
            // whose contents are bytes.
            return $a64549984e45770d$var$specConsumeBody(this, (bytes)=>{
                return new Uint8Array(bytes).buffer;
            }, instance);
        },
        text () {
            // The text() method steps are to return the result of running
            // consume body with this and UTF-8 decode.
            return $a64549984e45770d$var$specConsumeBody(this, $a64549984e45770d$var$utf8DecodeBytes, instance);
        },
        json () {
            // The json() method steps are to return the result of running
            // consume body with this and parse JSON from bytes.
            return $a64549984e45770d$var$specConsumeBody(this, $a64549984e45770d$var$parseJSONFromBytes, instance);
        },
        async formData () {
            $a64549984e45770d$require$webidl.brandCheck(this, instance);
            $a64549984e45770d$var$throwIfAborted(this[$a64549984e45770d$require$kState]);
            const contentType = this.headers.get('Content-Type');
            // If mimeType’s essence is "multipart/form-data", then:
            if (/multipart\/form-data/.test(contentType)) {
                const headers = {};
                for (const [key, value] of this.headers)headers[key.toLowerCase()] = value;
                const responseFormData = new $a64549984e45770d$require$FormData();
                let busboy;
                try {
                    busboy = new $cNPC7({
                        headers: headers,
                        preservePath: true
                    });
                } catch (err) {
                    throw new $a64549984e45770d$require$DOMException(`${err}`, 'AbortError');
                }
                busboy.on('field', (name, value)=>{
                    responseFormData.append(name, value);
                });
                busboy.on('file', (name, value, filename, encoding, mimeType)=>{
                    const chunks = [];
                    if (encoding === 'base64' || encoding.toLowerCase() === 'base64') {
                        let base64chunk = '';
                        value.on('data', (chunk)=>{
                            base64chunk += chunk.toString().replace(/[\r\n]/gm, '');
                            const end = base64chunk.length - base64chunk.length % 4;
                            chunks.push(Buffer.from(base64chunk.slice(0, end), 'base64'));
                            base64chunk = base64chunk.slice(end);
                        });
                        value.on('end', ()=>{
                            chunks.push(Buffer.from(base64chunk, 'base64'));
                            responseFormData.append(name, new $a64549984e45770d$var$File(chunks, filename, {
                                type: mimeType
                            }));
                        });
                    } else {
                        value.on('data', (chunk)=>{
                            chunks.push(chunk);
                        });
                        value.on('end', ()=>{
                            responseFormData.append(name, new $a64549984e45770d$var$File(chunks, filename, {
                                type: mimeType
                            }));
                        });
                    }
                });
                const busboyResolve = new Promise((resolve, reject)=>{
                    busboy.on('finish', resolve);
                    busboy.on('error', (err)=>reject(new TypeError(err)));
                });
                if (this.body !== null) for await (const chunk of $a64549984e45770d$var$consumeBody(this[$a64549984e45770d$require$kState].body))busboy.write(chunk);
                busboy.end();
                await busboyResolve;
                return responseFormData;
            } else if (/application\/x-www-form-urlencoded/.test(contentType)) {
                // Otherwise, if mimeType’s essence is "application/x-www-form-urlencoded", then:
                // 1. Let entries be the result of parsing bytes.
                let entries;
                try {
                    let text = '';
                    // application/x-www-form-urlencoded parser will keep the BOM.
                    // https://url.spec.whatwg.org/#concept-urlencoded-parser
                    // Note that streaming decoder is stateful and cannot be reused
                    const streamingDecoder = new TextDecoder('utf-8', {
                        ignoreBOM: true
                    });
                    for await (const chunk of $a64549984e45770d$var$consumeBody(this[$a64549984e45770d$require$kState].body)){
                        if (!$a64549984e45770d$require$isUint8Array(chunk)) throw new TypeError('Expected Uint8Array chunk');
                        text += streamingDecoder.decode(chunk, {
                            stream: true
                        });
                    }
                    text += streamingDecoder.decode();
                    entries = new URLSearchParams(text);
                } catch (err) {
                    // istanbul ignore next: Unclear when new URLSearchParams can fail on a string.
                    // 2. If entries is failure, then throw a TypeError.
                    throw Object.assign(new TypeError(), {
                        cause: err
                    });
                }
                // 3. Return a new FormData object whose entries are entries.
                const formData = new $a64549984e45770d$require$FormData();
                for (const [name, value] of entries)formData.append(name, value);
                return formData;
            } else {
                // Wait a tick before checking if the request has been aborted.
                // Otherwise, a TypeError can be thrown when an AbortError should.
                await Promise.resolve();
                $a64549984e45770d$var$throwIfAborted(this[$a64549984e45770d$require$kState]);
                // Otherwise, throw a TypeError.
                throw $a64549984e45770d$require$webidl.errors.exception({
                    header: `${instance.name}.formData`,
                    message: 'Could not parse content as FormData.'
                });
            }
        }
    };
    return methods;
}
function $a64549984e45770d$var$mixinBody(prototype) {
    Object.assign(prototype.prototype, $a64549984e45770d$var$bodyMixinMethods(prototype));
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-body-consume-body
 * @param {Response|Request} object
 * @param {(value: unknown) => unknown} convertBytesToJSValue
 * @param {Response|Request} instance
 */ async function $a64549984e45770d$var$specConsumeBody(object, convertBytesToJSValue, instance) {
    $a64549984e45770d$require$webidl.brandCheck(object, instance);
    $a64549984e45770d$var$throwIfAborted(object[$a64549984e45770d$require$kState]);
    // 1. If object is unusable, then return a promise rejected
    //    with a TypeError.
    if ($a64549984e45770d$var$bodyUnusable(object[$a64549984e45770d$require$kState].body)) throw new TypeError('Body is unusable');
    // 2. Let promise be a new promise.
    const promise = $a64549984e45770d$require$createDeferredPromise();
    // 3. Let errorSteps given error be to reject promise with error.
    const errorSteps = (error)=>promise.reject(error);
    // 4. Let successSteps given a byte sequence data be to resolve
    //    promise with the result of running convertBytesToJSValue
    //    with data. If that threw an exception, then run errorSteps
    //    with that exception.
    const successSteps = (data)=>{
        try {
            promise.resolve(convertBytesToJSValue(data));
        } catch (e) {
            errorSteps(e);
        }
    };
    // 5. If object’s body is null, then run successSteps with an
    //    empty byte sequence.
    if (object[$a64549984e45770d$require$kState].body == null) {
        successSteps(new Uint8Array());
        return promise.promise;
    }
    // 6. Otherwise, fully read object’s body given successSteps,
    //    errorSteps, and object’s relevant global object.
    await $a64549984e45770d$require$fullyReadBody(object[$a64549984e45770d$require$kState].body, successSteps, errorSteps);
    // 7. Return promise.
    return promise.promise;
}
// https://fetch.spec.whatwg.org/#body-unusable
function $a64549984e45770d$var$bodyUnusable(body) {
    // An object including the Body interface mixin is
    // said to be unusable if its body is non-null and
    // its body’s stream is disturbed or locked.
    return body != null && (body.stream.locked || $1Z05w.isDisturbed(body.stream));
}
/**
 * @see https://encoding.spec.whatwg.org/#utf-8-decode
 * @param {Buffer} buffer
 */ function $a64549984e45770d$var$utf8DecodeBytes(buffer) {
    if (buffer.length === 0) return '';
    // 1. Let buffer be the result of peeking three bytes from
    //    ioQueue, converted to a byte sequence.
    // 2. If buffer is 0xEF 0xBB 0xBF, then read three
    //    bytes from ioQueue. (Do nothing with those bytes.)
    if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) buffer = buffer.subarray(3);
    // 3. Process a queue with an instance of UTF-8’s
    //    decoder, ioQueue, output, and "replacement".
    const output = $a64549984e45770d$var$textDecoder.decode(buffer);
    // 4. Return output.
    return output;
}
/**
 * @see https://infra.spec.whatwg.org/#parse-json-bytes-to-a-javascript-value
 * @param {Uint8Array} bytes
 */ function $a64549984e45770d$var$parseJSONFromBytes(bytes) {
    return JSON.parse($a64549984e45770d$var$utf8DecodeBytes(bytes));
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-body-mime-type
 * @param {import('./response').Response|import('./request').Request} object
 */ function $a64549984e45770d$var$bodyMimeType(object) {
    const { headersList: headersList } = object[$a64549984e45770d$require$kState];
    const contentType = headersList.get('content-type');
    if (contentType === null) return 'failure';
    return $a64549984e45770d$require$parseMIMEType(contentType);
}
module.exports = {
    extractBody: $a64549984e45770d$var$extractBody,
    safelyExtractBody: $a64549984e45770d$var$safelyExtractBody,
    cloneBody: $a64549984e45770d$var$cloneBody,
    mixinBody: $a64549984e45770d$var$mixinBody
};

});
parcelRegister("cNPC7", function(module, exports) {
module.exports = new URL("main.1b9dc352.js", "file:" + __filename).toString();

});

parcelRegister("aduQ2", function(module, exports) {
module.exports = new URL("util.1c38d6ed.js", "file:" + __filename).toString();

});

parcelRegister("6ekHD", function(module, exports) {
module.exports = new URL("formdata.1236317b.js", "file:" + __filename).toString();

});



//# sourceMappingURL=body.a98ea671.js.map
