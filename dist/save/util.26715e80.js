require("./symbols.c5dd8fde.js");
require("./errors.621f8b7b.js");
require("./constants.99153d06.js");
var $kZfXi$assert = require("assert");
var $kZfXi$http = require("http");
var $kZfXi$stream = require("stream");
var $kZfXi$net = require("net");
var $kZfXi$buffer = require("buffer");
var $kZfXi$util = require("util");
var $kZfXi$querystring = require("querystring");
var $kZfXi$streamweb = require("stream/web");

'use strict';

var $82f57c376c725e47$exports = {};
$82f57c376c725e47$exports = new URL("symbols.c5dd8fde.js", "file:" + __filename).toString();


var $171b8e6ad39c4bcf$require$kDestroyed = $82f57c376c725e47$exports.kDestroyed;
var $171b8e6ad39c4bcf$require$kBodyUsed = $82f57c376c725e47$exports.kBodyUsed;

var $171b8e6ad39c4bcf$require$IncomingMessage = $kZfXi$http.IncomingMessage;


var $3c686a23fa014a0d$exports = {};
$3c686a23fa014a0d$exports = new URL("errors.621f8b7b.js", "file:" + __filename).toString();


var $171b8e6ad39c4bcf$require$InvalidArgumentError = $3c686a23fa014a0d$exports.InvalidArgumentError;

var $171b8e6ad39c4bcf$require$Blob = $kZfXi$buffer.Blob;


var $171b8e6ad39c4bcf$require$stringify = $kZfXi$querystring.stringify;
var $b6cdcb7b3a67102d$exports = {};
$b6cdcb7b3a67102d$exports = new URL("constants.99153d06.js", "file:" + __filename).toString();


var $171b8e6ad39c4bcf$require$headerNameLowerCasedRecord = $b6cdcb7b3a67102d$exports.headerNameLowerCasedRecord;
const [$171b8e6ad39c4bcf$var$nodeMajor, $171b8e6ad39c4bcf$var$nodeMinor] = process.versions.node.split('.').map((v)=>Number(v));
function $171b8e6ad39c4bcf$var$nop() {}
function $171b8e6ad39c4bcf$var$isStream(obj) {
    return obj && typeof obj === 'object' && typeof obj.pipe === 'function' && typeof obj.on === 'function';
}
// based on https://github.com/node-fetch/fetch-blob/blob/8ab587d34080de94140b54f07168451e7d0b655e/index.js#L229-L241 (MIT License)
function $171b8e6ad39c4bcf$var$isBlobLike(object) {
    return $171b8e6ad39c4bcf$require$Blob && object instanceof $171b8e6ad39c4bcf$require$Blob || object && typeof object === 'object' && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
}
function $171b8e6ad39c4bcf$var$buildURL(url, queryParams) {
    if (url.includes('?') || url.includes('#')) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    const stringified = $171b8e6ad39c4bcf$require$stringify(queryParams);
    if (stringified) url += '?' + stringified;
    return url;
}
function $171b8e6ad39c4bcf$var$parseURL(url) {
    if (typeof url === 'string') {
        url = new URL(url);
        if (!/^https?:/.test(url.origin || url.protocol)) throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
        return url;
    }
    if (!url || typeof url !== 'object') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL: The URL argument must be a non-null object.');
    if (!/^https?:/.test(url.origin || url.protocol)) throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
    if (!(url instanceof URL)) {
        if (url.port != null && url.port !== '' && !Number.isFinite(parseInt(url.port))) throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL: port must be a valid integer or a string representation of an integer.');
        if (url.path != null && typeof url.path !== 'string') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL path: the path must be a string or null/undefined.');
        if (url.pathname != null && typeof url.pathname !== 'string') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL pathname: the pathname must be a string or null/undefined.');
        if (url.hostname != null && typeof url.hostname !== 'string') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL hostname: the hostname must be a string or null/undefined.');
        if (url.origin != null && typeof url.origin !== 'string') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('Invalid URL origin: the origin must be a string or null/undefined.');
        const port = url.port != null ? url.port : url.protocol === 'https:' ? 443 : 80;
        let origin = url.origin != null ? url.origin : `${url.protocol}//${url.hostname}:${port}`;
        let path = url.path != null ? url.path : `${url.pathname || ''}${url.search || ''}`;
        if (origin.endsWith('/')) origin = origin.substring(0, origin.length - 1);
        if (path && !path.startsWith('/')) path = `/${path}`;
        // new URL(path, origin) is unsafe when `path` contains an absolute URL
        // From https://developer.mozilla.org/en-US/docs/Web/API/URL/URL:
        // If first parameter is a relative URL, second param is required, and will be used as the base URL.
        // If first parameter is an absolute URL, a given second param will be ignored.
        url = new URL(origin + path);
    }
    return url;
}
function $171b8e6ad39c4bcf$var$parseOrigin(url) {
    url = $171b8e6ad39c4bcf$var$parseURL(url);
    if (url.pathname !== '/' || url.search || url.hash) throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid url');
    return url;
}
function $171b8e6ad39c4bcf$var$getHostname(host) {
    if (host[0] === '[') {
        const idx = host.indexOf(']');
        $kZfXi$assert(idx !== -1);
        return host.substring(1, idx);
    }
    const idx = host.indexOf(':');
    if (idx === -1) return host;
    return host.substring(0, idx);
}
// IP addresses are not valid server names per RFC6066
// > Currently, the only server names supported are DNS hostnames
function $171b8e6ad39c4bcf$var$getServerName(host) {
    if (!host) return null;
    $kZfXi$assert.strictEqual(typeof host, 'string');
    const servername = $171b8e6ad39c4bcf$var$getHostname(host);
    if ($kZfXi$net.isIP(servername)) return '';
    return servername;
}
function $171b8e6ad39c4bcf$var$deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function $171b8e6ad39c4bcf$var$isAsyncIterable(obj) {
    return !!(obj != null && typeof obj[Symbol.asyncIterator] === 'function');
}
function $171b8e6ad39c4bcf$var$isIterable(obj) {
    return !!(obj != null && (typeof obj[Symbol.iterator] === 'function' || typeof obj[Symbol.asyncIterator] === 'function'));
}
function $171b8e6ad39c4bcf$var$bodyLength(body) {
    if (body == null) return 0;
    else if ($171b8e6ad39c4bcf$var$isStream(body)) {
        const state = body._readableState;
        return state && state.objectMode === false && state.ended === true && Number.isFinite(state.length) ? state.length : null;
    } else if ($171b8e6ad39c4bcf$var$isBlobLike(body)) return body.size != null ? body.size : null;
    else if ($171b8e6ad39c4bcf$var$isBuffer(body)) return body.byteLength;
    return null;
}
function $171b8e6ad39c4bcf$var$isDestroyed(stream) {
    return !stream || !!(stream.destroyed || stream[$171b8e6ad39c4bcf$require$kDestroyed]);
}
function $171b8e6ad39c4bcf$var$isReadableAborted(stream) {
    const state = stream && stream._readableState;
    return $171b8e6ad39c4bcf$var$isDestroyed(stream) && state && !state.endEmitted;
}
function $171b8e6ad39c4bcf$var$destroy(stream, err) {
    if (stream == null || !$171b8e6ad39c4bcf$var$isStream(stream) || $171b8e6ad39c4bcf$var$isDestroyed(stream)) return;
    if (typeof stream.destroy === 'function') {
        if (Object.getPrototypeOf(stream).constructor === $171b8e6ad39c4bcf$require$IncomingMessage) // See: https://github.com/nodejs/node/pull/38505/files
        stream.socket = null;
        stream.destroy(err);
    } else if (err) process.nextTick((stream, err)=>{
        stream.emit('error', err);
    }, stream, err);
    if (stream.destroyed !== true) stream[$171b8e6ad39c4bcf$require$kDestroyed] = true;
}
const $171b8e6ad39c4bcf$var$KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
function $171b8e6ad39c4bcf$var$parseKeepAliveTimeout(val) {
    const m = val.toString().match($171b8e6ad39c4bcf$var$KEEPALIVE_TIMEOUT_EXPR);
    return m ? parseInt(m[1], 10) * 1000 : null;
}
/**
 * Retrieves a header name and returns its lowercase value.
 * @param {string | Buffer} value Header name
 * @returns {string}
 */ function $171b8e6ad39c4bcf$var$headerNameToString(value) {
    return $171b8e6ad39c4bcf$require$headerNameLowerCasedRecord[value] || value.toLowerCase();
}
function $171b8e6ad39c4bcf$var$parseHeaders(headers, obj = {}) {
    // For H2 support
    if (!Array.isArray(headers)) return headers;
    for(let i = 0; i < headers.length; i += 2){
        const key = headers[i].toString().toLowerCase();
        let val = obj[key];
        if (!val) {
            if (Array.isArray(headers[i + 1])) obj[key] = headers[i + 1].map((x)=>x.toString('utf8'));
            else obj[key] = headers[i + 1].toString('utf8');
        } else {
            if (!Array.isArray(val)) {
                val = [
                    val
                ];
                obj[key] = val;
            }
            val.push(headers[i + 1].toString('utf8'));
        }
    }
    // See https://github.com/nodejs/node/pull/46528
    if ('content-length' in obj && 'content-disposition' in obj) obj['content-disposition'] = Buffer.from(obj['content-disposition']).toString('latin1');
    return obj;
}
function $171b8e6ad39c4bcf$var$parseRawHeaders(headers) {
    const ret = [];
    let hasContentLength = false;
    let contentDispositionIdx = -1;
    for(let n = 0; n < headers.length; n += 2){
        const key = headers[n + 0].toString();
        const val = headers[n + 1].toString('utf8');
        if (key.length === 14 && (key === 'content-length' || key.toLowerCase() === 'content-length')) {
            ret.push(key, val);
            hasContentLength = true;
        } else if (key.length === 19 && (key === 'content-disposition' || key.toLowerCase() === 'content-disposition')) contentDispositionIdx = ret.push(key, val) - 1;
        else ret.push(key, val);
    }
    // See https://github.com/nodejs/node/pull/46528
    if (hasContentLength && contentDispositionIdx !== -1) ret[contentDispositionIdx] = Buffer.from(ret[contentDispositionIdx]).toString('latin1');
    return ret;
}
function $171b8e6ad39c4bcf$var$isBuffer(buffer) {
    // See, https://github.com/mcollina/undici/pull/319
    return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
}
function $171b8e6ad39c4bcf$var$validateHandler(handler, method, upgrade) {
    if (!handler || typeof handler !== 'object') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('handler must be an object');
    if (typeof handler.onConnect !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onConnect method');
    if (typeof handler.onError !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onError method');
    if (typeof handler.onBodySent !== 'function' && handler.onBodySent !== undefined) throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onBodySent method');
    if (upgrade || method === 'CONNECT') {
        if (typeof handler.onUpgrade !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onUpgrade method');
    } else {
        if (typeof handler.onHeaders !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onHeaders method');
        if (typeof handler.onData !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onData method');
        if (typeof handler.onComplete !== 'function') throw new $171b8e6ad39c4bcf$require$InvalidArgumentError('invalid onComplete method');
    }
}
// A body is disturbed if it has been read from and it cannot
// be re-used without losing state or data.
function $171b8e6ad39c4bcf$var$isDisturbed(body) {
    return !!(body && ($kZfXi$stream.isDisturbed ? $kZfXi$stream.isDisturbed(body) || body[$171b8e6ad39c4bcf$require$kBodyUsed] // TODO (fix): Why is body[kBodyUsed] needed?
     : body[$171b8e6ad39c4bcf$require$kBodyUsed] || body.readableDidRead || body._readableState && body._readableState.dataEmitted || $171b8e6ad39c4bcf$var$isReadableAborted(body)));
}
function $171b8e6ad39c4bcf$var$isErrored(body) {
    return !!(body && ($kZfXi$stream.isErrored ? $kZfXi$stream.isErrored(body) : /state: 'errored'/.test($kZfXi$util.inspect(body))));
}
function $171b8e6ad39c4bcf$var$isReadable(body) {
    return !!(body && ($kZfXi$stream.isReadable ? $kZfXi$stream.isReadable(body) : /state: 'readable'/.test($kZfXi$util.inspect(body))));
}
function $171b8e6ad39c4bcf$var$getSocketInfo(socket) {
    return {
        localAddress: socket.localAddress,
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        remoteFamily: socket.remoteFamily,
        timeout: socket.timeout,
        bytesWritten: socket.bytesWritten,
        bytesRead: socket.bytesRead
    };
}
async function* $171b8e6ad39c4bcf$var$convertIterableToBuffer(iterable) {
    for await (const chunk of iterable)yield Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
}
let $171b8e6ad39c4bcf$var$ReadableStream;

function $171b8e6ad39c4bcf$var$ReadableStreamFrom(iterable) {
    if (!$171b8e6ad39c4bcf$var$ReadableStream) $171b8e6ad39c4bcf$var$ReadableStream = $kZfXi$streamweb.ReadableStream;
    if ($171b8e6ad39c4bcf$var$ReadableStream.from) return $171b8e6ad39c4bcf$var$ReadableStream.from($171b8e6ad39c4bcf$var$convertIterableToBuffer(iterable));
    let iterator;
    return new $171b8e6ad39c4bcf$var$ReadableStream({
        async start () {
            iterator = iterable[Symbol.asyncIterator]();
        },
        async pull (controller) {
            const { done: done, value: value } = await iterator.next();
            if (done) queueMicrotask(()=>{
                controller.close();
            });
            else {
                const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
                controller.enqueue(new Uint8Array(buf));
            }
            return controller.desiredSize > 0;
        },
        async cancel (reason) {
            await iterator.return();
        }
    }, 0);
}
// The chunk should be a FormData instance and contains
// all the required methods.
function $171b8e6ad39c4bcf$var$isFormDataLike(object) {
    return object && typeof object === 'object' && typeof object.append === 'function' && typeof object.delete === 'function' && typeof object.get === 'function' && typeof object.getAll === 'function' && typeof object.has === 'function' && typeof object.set === 'function' && object[Symbol.toStringTag] === 'FormData';
}
function $171b8e6ad39c4bcf$var$throwIfAborted(signal) {
    if (!signal) return;
    if (typeof signal.throwIfAborted === 'function') signal.throwIfAborted();
    else if (signal.aborted) {
        // DOMException not available < v17.0.0
        const err = new Error('The operation was aborted');
        err.name = 'AbortError';
        throw err;
    }
}
function $171b8e6ad39c4bcf$var$addAbortListener(signal, listener) {
    if ('addEventListener' in signal) {
        signal.addEventListener('abort', listener, {
            once: true
        });
        return ()=>signal.removeEventListener('abort', listener);
    }
    signal.addListener('abort', listener);
    return ()=>signal.removeListener('abort', listener);
}
const $171b8e6ad39c4bcf$var$hasToWellFormed = !!String.prototype.toWellFormed;
/**
 * @param {string} val
 */ function $171b8e6ad39c4bcf$var$toUSVString(val) {
    if ($171b8e6ad39c4bcf$var$hasToWellFormed) return `${val}`.toWellFormed();
    else if ($kZfXi$util.toUSVString) return $kZfXi$util.toUSVString(val);
    return `${val}`;
}
// Parsed accordingly to RFC 9110
// https://www.rfc-editor.org/rfc/rfc9110#field.content-range
function $171b8e6ad39c4bcf$var$parseRangeHeader(range) {
    if (range == null || range === '') return {
        start: 0,
        end: null,
        size: null
    };
    const m = range ? range.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
    return m ? {
        start: parseInt(m[1]),
        end: m[2] ? parseInt(m[2]) : null,
        size: m[3] ? parseInt(m[3]) : null
    } : null;
}
const $171b8e6ad39c4bcf$var$kEnumerableProperty = Object.create(null);
$171b8e6ad39c4bcf$var$kEnumerableProperty.enumerable = true;
module.exports = {
    kEnumerableProperty: $171b8e6ad39c4bcf$var$kEnumerableProperty,
    nop: $171b8e6ad39c4bcf$var$nop,
    isDisturbed: $171b8e6ad39c4bcf$var$isDisturbed,
    isErrored: $171b8e6ad39c4bcf$var$isErrored,
    isReadable: $171b8e6ad39c4bcf$var$isReadable,
    toUSVString: $171b8e6ad39c4bcf$var$toUSVString,
    isReadableAborted: $171b8e6ad39c4bcf$var$isReadableAborted,
    isBlobLike: $171b8e6ad39c4bcf$var$isBlobLike,
    parseOrigin: $171b8e6ad39c4bcf$var$parseOrigin,
    parseURL: $171b8e6ad39c4bcf$var$parseURL,
    getServerName: $171b8e6ad39c4bcf$var$getServerName,
    isStream: $171b8e6ad39c4bcf$var$isStream,
    isIterable: $171b8e6ad39c4bcf$var$isIterable,
    isAsyncIterable: $171b8e6ad39c4bcf$var$isAsyncIterable,
    isDestroyed: $171b8e6ad39c4bcf$var$isDestroyed,
    headerNameToString: $171b8e6ad39c4bcf$var$headerNameToString,
    parseRawHeaders: $171b8e6ad39c4bcf$var$parseRawHeaders,
    parseHeaders: $171b8e6ad39c4bcf$var$parseHeaders,
    parseKeepAliveTimeout: $171b8e6ad39c4bcf$var$parseKeepAliveTimeout,
    destroy: $171b8e6ad39c4bcf$var$destroy,
    bodyLength: $171b8e6ad39c4bcf$var$bodyLength,
    deepClone: $171b8e6ad39c4bcf$var$deepClone,
    ReadableStreamFrom: $171b8e6ad39c4bcf$var$ReadableStreamFrom,
    isBuffer: $171b8e6ad39c4bcf$var$isBuffer,
    validateHandler: $171b8e6ad39c4bcf$var$validateHandler,
    getSocketInfo: $171b8e6ad39c4bcf$var$getSocketInfo,
    isFormDataLike: $171b8e6ad39c4bcf$var$isFormDataLike,
    buildURL: $171b8e6ad39c4bcf$var$buildURL,
    throwIfAborted: $171b8e6ad39c4bcf$var$throwIfAborted,
    addAbortListener: $171b8e6ad39c4bcf$var$addAbortListener,
    parseRangeHeader: $171b8e6ad39c4bcf$var$parseRangeHeader,
    nodeMajor: $171b8e6ad39c4bcf$var$nodeMajor,
    nodeMinor: $171b8e6ad39c4bcf$var$nodeMinor,
    nodeHasAutoSelectFamily: $171b8e6ad39c4bcf$var$nodeMajor > 18 || $171b8e6ad39c4bcf$var$nodeMajor === 18 && $171b8e6ad39c4bcf$var$nodeMinor >= 13,
    safeHTTPMethods: [
        'GET',
        'HEAD',
        'OPTIONS',
        'TRACE'
    ]
};


//# sourceMappingURL=util.26715e80.js.map
