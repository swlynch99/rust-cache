require("./symbols.42e4e8f0.js");
require("./progressevent.a47a6921.js");
require("./encoding.d5b99daa.js");
require("./constants.0582e50a.js");
require("./dataURL.a565585e.js");
var $aoAw9$util = require("util");
var $aoAw9$string_decoder = require("string_decoder");
var $aoAw9$buffer = require("buffer");


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
var $6148d76e8f5afb05$exports = {};
$6148d76e8f5afb05$exports = new URL("symbols.42e4e8f0.js", "file:" + __filename).toString();


var $7888a5b0c4ffdf90$require$kState = $6148d76e8f5afb05$exports.kState;
var $7888a5b0c4ffdf90$require$kError = $6148d76e8f5afb05$exports.kError;
var $7888a5b0c4ffdf90$require$kResult = $6148d76e8f5afb05$exports.kResult;
var $7888a5b0c4ffdf90$require$kAborted = $6148d76e8f5afb05$exports.kAborted;
var $7888a5b0c4ffdf90$require$kLastProgressEventFired = $6148d76e8f5afb05$exports.kLastProgressEventFired;
var $e576eff491a343f0$exports = {};
$e576eff491a343f0$exports = new URL("progressevent.a47a6921.js", "file:" + __filename).toString();


var $7888a5b0c4ffdf90$require$ProgressEvent = $e576eff491a343f0$exports.ProgressEvent;
var $6a36ae54f8d8d152$exports = {};
$6a36ae54f8d8d152$exports = new URL("encoding.d5b99daa.js", "file:" + __filename).toString();


var $7888a5b0c4ffdf90$require$getEncoding = $6a36ae54f8d8d152$exports.getEncoding;

var $bCI0k = parcelRequire("bCI0k");
var $7888a5b0c4ffdf90$require$DOMException = $bCI0k.DOMException;

var $iRsiv = parcelRequire("iRsiv");
var $7888a5b0c4ffdf90$require$serializeAMimeType = $iRsiv.serializeAMimeType;
var $7888a5b0c4ffdf90$require$parseMIMEType = $iRsiv.parseMIMEType;

var $7888a5b0c4ffdf90$require$types = $aoAw9$util.types;

var $7888a5b0c4ffdf90$require$StringDecoder = $aoAw9$string_decoder.StringDecoder;

var $7888a5b0c4ffdf90$require$btoa = $aoAw9$buffer.btoa;
/** @type {PropertyDescriptor} */ const $7888a5b0c4ffdf90$var$staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
/**
 * @see https://w3c.github.io/FileAPI/#readOperation
 * @param {import('./filereader').FileReader} fr
 * @param {import('buffer').Blob} blob
 * @param {string} type
 * @param {string?} encodingName
 */ function $7888a5b0c4ffdf90$var$readOperation(fr, blob, type, encodingName) {
    // 1. If fr’s state is "loading", throw an InvalidStateError
    //    DOMException.
    if (fr[$7888a5b0c4ffdf90$require$kState] === 'loading') throw new $7888a5b0c4ffdf90$require$DOMException('Invalid state', 'InvalidStateError');
    // 2. Set fr’s state to "loading".
    fr[$7888a5b0c4ffdf90$require$kState] = 'loading';
    // 3. Set fr’s result to null.
    fr[$7888a5b0c4ffdf90$require$kResult] = null;
    // 4. Set fr’s error to null.
    fr[$7888a5b0c4ffdf90$require$kError] = null;
    // 5. Let stream be the result of calling get stream on blob.
    /** @type {import('stream/web').ReadableStream} */ const stream = blob.stream();
    // 6. Let reader be the result of getting a reader from stream.
    const reader = stream.getReader();
    // 7. Let bytes be an empty byte sequence.
    /** @type {Uint8Array[]} */ const bytes = [];
    // 8. Let chunkPromise be the result of reading a chunk from
    //    stream with reader.
    let chunkPromise = reader.read();
    // 9. Let isFirstChunk be true.
    let isFirstChunk = true;
    (async ()=>{
        while(!fr[$7888a5b0c4ffdf90$require$kAborted])// 1. Wait for chunkPromise to be fulfilled or rejected.
        try {
            const { done: done, value: value } = await chunkPromise;
            // 2. If chunkPromise is fulfilled, and isFirstChunk is
            //    true, queue a task to fire a progress event called
            //    loadstart at fr.
            if (isFirstChunk && !fr[$7888a5b0c4ffdf90$require$kAborted]) queueMicrotask(()=>{
                $7888a5b0c4ffdf90$var$fireAProgressEvent('loadstart', fr);
            });
            // 3. Set isFirstChunk to false.
            isFirstChunk = false;
            // 4. If chunkPromise is fulfilled with an object whose
            //    done property is false and whose value property is
            //    a Uint8Array object, run these steps:
            if (!done && $7888a5b0c4ffdf90$require$types.isUint8Array(value)) {
                // 1. Let bs be the byte sequence represented by the
                //    Uint8Array object.
                // 2. Append bs to bytes.
                bytes.push(value);
                // 3. If roughly 50ms have passed since these steps
                //    were last invoked, queue a task to fire a
                //    progress event called progress at fr.
                if ((fr[$7888a5b0c4ffdf90$require$kLastProgressEventFired] === undefined || Date.now() - fr[$7888a5b0c4ffdf90$require$kLastProgressEventFired] >= 50) && !fr[$7888a5b0c4ffdf90$require$kAborted]) {
                    fr[$7888a5b0c4ffdf90$require$kLastProgressEventFired] = Date.now();
                    queueMicrotask(()=>{
                        $7888a5b0c4ffdf90$var$fireAProgressEvent('progress', fr);
                    });
                }
                // 4. Set chunkPromise to the result of reading a
                //    chunk from stream with reader.
                chunkPromise = reader.read();
            } else if (done) {
                // 5. Otherwise, if chunkPromise is fulfilled with an
                //    object whose done property is true, queue a task
                //    to run the following steps and abort this algorithm:
                queueMicrotask(()=>{
                    // 1. Set fr’s state to "done".
                    fr[$7888a5b0c4ffdf90$require$kState] = 'done';
                    // 2. Let result be the result of package data given
                    //    bytes, type, blob’s type, and encodingName.
                    try {
                        const result = $7888a5b0c4ffdf90$var$packageData(bytes, type, blob.type, encodingName);
                        // 4. Else:
                        if (fr[$7888a5b0c4ffdf90$require$kAborted]) return;
                        // 1. Set fr’s result to result.
                        fr[$7888a5b0c4ffdf90$require$kResult] = result;
                        // 2. Fire a progress event called load at the fr.
                        $7888a5b0c4ffdf90$var$fireAProgressEvent('load', fr);
                    } catch (error) {
                        // 3. If package data threw an exception error:
                        // 1. Set fr’s error to error.
                        fr[$7888a5b0c4ffdf90$require$kError] = error;
                        // 2. Fire a progress event called error at fr.
                        $7888a5b0c4ffdf90$var$fireAProgressEvent('error', fr);
                    }
                    // 5. If fr’s state is not "loading", fire a progress
                    //    event called loadend at the fr.
                    if (fr[$7888a5b0c4ffdf90$require$kState] !== 'loading') $7888a5b0c4ffdf90$var$fireAProgressEvent('loadend', fr);
                });
                break;
            }
        } catch (error) {
            if (fr[$7888a5b0c4ffdf90$require$kAborted]) return;
            // 6. Otherwise, if chunkPromise is rejected with an
            //    error error, queue a task to run the following
            //    steps and abort this algorithm:
            queueMicrotask(()=>{
                // 1. Set fr’s state to "done".
                fr[$7888a5b0c4ffdf90$require$kState] = 'done';
                // 2. Set fr’s error to error.
                fr[$7888a5b0c4ffdf90$require$kError] = error;
                // 3. Fire a progress event called error at fr.
                $7888a5b0c4ffdf90$var$fireAProgressEvent('error', fr);
                // 4. If fr’s state is not "loading", fire a progress
                //    event called loadend at fr.
                if (fr[$7888a5b0c4ffdf90$require$kState] !== 'loading') $7888a5b0c4ffdf90$var$fireAProgressEvent('loadend', fr);
            });
            break;
        }
    })();
}
/**
 * @see https://w3c.github.io/FileAPI/#fire-a-progress-event
 * @see https://dom.spec.whatwg.org/#concept-event-fire
 * @param {string} e The name of the event
 * @param {import('./filereader').FileReader} reader
 */ function $7888a5b0c4ffdf90$var$fireAProgressEvent(e, reader) {
    // The progress event e does not bubble. e.bubbles must be false
    // The progress event e is NOT cancelable. e.cancelable must be false
    const event = new $7888a5b0c4ffdf90$require$ProgressEvent(e, {
        bubbles: false,
        cancelable: false
    });
    reader.dispatchEvent(event);
}
/**
 * @see https://w3c.github.io/FileAPI/#blob-package-data
 * @param {Uint8Array[]} bytes
 * @param {string} type
 * @param {string?} mimeType
 * @param {string?} encodingName
 */ function $7888a5b0c4ffdf90$var$packageData(bytes, type, mimeType, encodingName) {
    // 1. A Blob has an associated package data algorithm, given
    //    bytes, a type, a optional mimeType, and a optional
    //    encodingName, which switches on type and runs the
    //    associated steps:
    switch(type){
        case 'DataURL':
            {
                // 1. Return bytes as a DataURL [RFC2397] subject to
                //    the considerations below:
                //  * Use mimeType as part of the Data URL if it is
                //    available in keeping with the Data URL
                //    specification [RFC2397].
                //  * If mimeType is not available return a Data URL
                //    without a media-type. [RFC2397].
                // https://datatracker.ietf.org/doc/html/rfc2397#section-3
                // dataurl    := "data:" [ mediatype ] [ ";base64" ] "," data
                // mediatype  := [ type "/" subtype ] *( ";" parameter )
                // data       := *urlchar
                // parameter  := attribute "=" value
                let dataURL = 'data:';
                const parsed = $7888a5b0c4ffdf90$require$parseMIMEType(mimeType || 'application/octet-stream');
                if (parsed !== 'failure') dataURL += $7888a5b0c4ffdf90$require$serializeAMimeType(parsed);
                dataURL += ';base64,';
                const decoder = new $7888a5b0c4ffdf90$require$StringDecoder('latin1');
                for (const chunk of bytes)dataURL += $7888a5b0c4ffdf90$require$btoa(decoder.write(chunk));
                dataURL += $7888a5b0c4ffdf90$require$btoa(decoder.end());
                return dataURL;
            }
        case 'Text':
            {
                // 1. Let encoding be failure
                let encoding = 'failure';
                // 2. If the encodingName is present, set encoding to the
                //    result of getting an encoding from encodingName.
                if (encodingName) encoding = $7888a5b0c4ffdf90$require$getEncoding(encodingName);
                // 3. If encoding is failure, and mimeType is present:
                if (encoding === 'failure' && mimeType) {
                    // 1. Let type be the result of parse a MIME type
                    //    given mimeType.
                    const type = $7888a5b0c4ffdf90$require$parseMIMEType(mimeType);
                    // 2. If type is not failure, set encoding to the result
                    //    of getting an encoding from type’s parameters["charset"].
                    if (type !== 'failure') encoding = $7888a5b0c4ffdf90$require$getEncoding(type.parameters.get('charset'));
                }
                // 4. If encoding is failure, then set encoding to UTF-8.
                if (encoding === 'failure') encoding = 'UTF-8';
                // 5. Decode bytes using fallback encoding encoding, and
                //    return the result.
                return $7888a5b0c4ffdf90$var$decode(bytes, encoding);
            }
        case 'ArrayBuffer':
            {
                // Return a new ArrayBuffer whose contents are bytes.
                const sequence = $7888a5b0c4ffdf90$var$combineByteSequences(bytes);
                return sequence.buffer;
            }
        case 'BinaryString':
            {
                // Return bytes as a binary string, in which every byte
                //  is represented by a code unit of equal value [0..255].
                let binaryString = '';
                const decoder = new $7888a5b0c4ffdf90$require$StringDecoder('latin1');
                for (const chunk of bytes)binaryString += decoder.write(chunk);
                binaryString += decoder.end();
                return binaryString;
            }
    }
}
/**
 * @see https://encoding.spec.whatwg.org/#decode
 * @param {Uint8Array[]} ioQueue
 * @param {string} encoding
 */ function $7888a5b0c4ffdf90$var$decode(ioQueue, encoding) {
    const bytes = $7888a5b0c4ffdf90$var$combineByteSequences(ioQueue);
    // 1. Let BOMEncoding be the result of BOM sniffing ioQueue.
    const BOMEncoding = $7888a5b0c4ffdf90$var$BOMSniffing(bytes);
    let slice = 0;
    // 2. If BOMEncoding is non-null:
    if (BOMEncoding !== null) {
        // 1. Set encoding to BOMEncoding.
        encoding = BOMEncoding;
        // 2. Read three bytes from ioQueue, if BOMEncoding is
        //    UTF-8; otherwise read two bytes.
        //    (Do nothing with those bytes.)
        slice = BOMEncoding === 'UTF-8' ? 3 : 2;
    }
    // 3. Process a queue with an instance of encoding’s
    //    decoder, ioQueue, output, and "replacement".
    // 4. Return output.
    const sliced = bytes.slice(slice);
    return new TextDecoder(encoding).decode(sliced);
}
/**
 * @see https://encoding.spec.whatwg.org/#bom-sniff
 * @param {Uint8Array} ioQueue
 */ function $7888a5b0c4ffdf90$var$BOMSniffing(ioQueue) {
    // 1. Let BOM be the result of peeking 3 bytes from ioQueue,
    //    converted to a byte sequence.
    const [a, b, c] = ioQueue;
    // 2. For each of the rows in the table below, starting with
    //    the first one and going down, if BOM starts with the
    //    bytes given in the first column, then return the
    //    encoding given in the cell in the second column of that
    //    row. Otherwise, return null.
    if (a === 0xEF && b === 0xBB && c === 0xBF) return 'UTF-8';
    else if (a === 0xFE && b === 0xFF) return 'UTF-16BE';
    else if (a === 0xFF && b === 0xFE) return 'UTF-16LE';
    return null;
}
/**
 * @param {Uint8Array[]} sequences
 */ function $7888a5b0c4ffdf90$var$combineByteSequences(sequences) {
    const size = sequences.reduce((a, b)=>{
        return a + b.byteLength;
    }, 0);
    let offset = 0;
    return sequences.reduce((a, b)=>{
        a.set(b, offset);
        offset += b.byteLength;
        return a;
    }, new Uint8Array(size));
}
module.exports = {
    staticPropertyDescriptors: $7888a5b0c4ffdf90$var$staticPropertyDescriptors,
    readOperation: $7888a5b0c4ffdf90$var$readOperation,
    fireAProgressEvent: $7888a5b0c4ffdf90$var$fireAProgressEvent
};


//# sourceMappingURL=util.b7191435.js.map
