require("./symbols.b8a391fa.js");
require("./errors.12b0f892.js");
require("./constants.6b9187a7.js");
var $gzsuh$assert = require("assert");
var $gzsuh$http = require("http");
var $gzsuh$stream = require("stream");
var $gzsuh$net = require("net");
var $gzsuh$buffer = require("buffer");
var $gzsuh$util = require("util");
var $gzsuh$querystring = require("querystring");
var $gzsuh$streamweb = require("stream/web");

'use strict';

var $9479cd9a81869bdb$exports = {};
$9479cd9a81869bdb$exports = new URL("symbols.b8a391fa.js", "file:" + __filename).toString();


var $d53490a129d64f1a$require$kDestroyed = $9479cd9a81869bdb$exports.kDestroyed;
var $d53490a129d64f1a$require$kBodyUsed = $9479cd9a81869bdb$exports.kBodyUsed;

var $d53490a129d64f1a$require$IncomingMessage = $gzsuh$http.IncomingMessage;


var $0f1c2f7026b178cb$exports = {};
$0f1c2f7026b178cb$exports = new URL("errors.12b0f892.js", "file:" + __filename).toString();


var $d53490a129d64f1a$require$InvalidArgumentError = $0f1c2f7026b178cb$exports.InvalidArgumentError;

var $d53490a129d64f1a$require$Blob = $gzsuh$buffer.Blob;


var $d53490a129d64f1a$require$stringify = $gzsuh$querystring.stringify;
var $0b426ea539b0be57$exports = {};
$0b426ea539b0be57$exports = new URL("constants.6b9187a7.js", "file:" + __filename).toString();


var $d53490a129d64f1a$require$headerNameLowerCasedRecord = $0b426ea539b0be57$exports.headerNameLowerCasedRecord;
const [$d53490a129d64f1a$var$nodeMajor, $d53490a129d64f1a$var$nodeMinor] = process.versions.node.split('.').map((v)=>Number(v));
function $d53490a129d64f1a$var$nop() {}
function $d53490a129d64f1a$var$isStream(obj) {
    return obj && typeof obj === 'object' && typeof obj.pipe === 'function' && typeof obj.on === 'function';
}
// based on https://github.com/node-fetch/fetch-blob/blob/8ab587d34080de94140b54f07168451e7d0b655e/index.js#L229-L241 (MIT License)
function $d53490a129d64f1a$var$isBlobLike(object) {
    return $d53490a129d64f1a$require$Blob && object instanceof $d53490a129d64f1a$require$Blob || object && typeof object === 'object' && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
}
function $d53490a129d64f1a$var$buildURL(url, queryParams) {
    if (url.includes('?') || url.includes('#')) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    const stringified = $d53490a129d64f1a$require$stringify(queryParams);
    if (stringified) url += '?' + stringified;
    return url;
}
function $d53490a129d64f1a$var$parseURL(url) {
    if (typeof url === 'string') {
        url = new URL(url);
        if (!/^https?:/.test(url.origin || url.protocol)) throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
        return url;
    }
    if (!url || typeof url !== 'object') throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL: The URL argument must be a non-null object.');
    if (!/^https?:/.test(url.origin || url.protocol)) throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
    if (!(url instanceof URL)) {
        if (url.port != null && url.port !== '' && !Number.isFinite(parseInt(url.port))) throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL: port must be a valid integer or a string representation of an integer.');
        if (url.path != null && typeof url.path !== 'string') throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL path: the path must be a string or null/undefined.');
        if (url.pathname != null && typeof url.pathname !== 'string') throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL pathname: the pathname must be a string or null/undefined.');
        if (url.hostname != null && typeof url.hostname !== 'string') throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL hostname: the hostname must be a string or null/undefined.');
        if (url.origin != null && typeof url.origin !== 'string') throw new $d53490a129d64f1a$require$InvalidArgumentError('Invalid URL origin: the origin must be a string or null/undefined.');
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
function $d53490a129d64f1a$var$parseOrigin(url) {
    url = $d53490a129d64f1a$var$parseURL(url);
    if (url.pathname !== '/' || url.search || url.hash) throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid url');
    return url;
}
function $d53490a129d64f1a$var$getHostname(host) {
    if (host[0] === '[') {
        const idx = host.indexOf(']');
        $gzsuh$assert(idx !== -1);
        return host.substring(1, idx);
    }
    const idx = host.indexOf(':');
    if (idx === -1) return host;
    return host.substring(0, idx);
}
// IP addresses are not valid server names per RFC6066
// > Currently, the only server names supported are DNS hostnames
function $d53490a129d64f1a$var$getServerName(host) {
    if (!host) return null;
    $gzsuh$assert.strictEqual(typeof host, 'string');
    const servername = $d53490a129d64f1a$var$getHostname(host);
    if ($gzsuh$net.isIP(servername)) return '';
    return servername;
}
function $d53490a129d64f1a$var$deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function $d53490a129d64f1a$var$isAsyncIterable(obj) {
    return !!(obj != null && typeof obj[Symbol.asyncIterator] === 'function');
}
function $d53490a129d64f1a$var$isIterable(obj) {
    return !!(obj != null && (typeof obj[Symbol.iterator] === 'function' || typeof obj[Symbol.asyncIterator] === 'function'));
}
function $d53490a129d64f1a$var$bodyLength(body) {
    if (body == null) return 0;
    else if ($d53490a129d64f1a$var$isStream(body)) {
        const state = body._readableState;
        return state && state.objectMode === false && state.ended === true && Number.isFinite(state.length) ? state.length : null;
    } else if ($d53490a129d64f1a$var$isBlobLike(body)) return body.size != null ? body.size : null;
    else if ($d53490a129d64f1a$var$isBuffer(body)) return body.byteLength;
    return null;
}
function $d53490a129d64f1a$var$isDestroyed(stream) {
    return !stream || !!(stream.destroyed || stream[$d53490a129d64f1a$require$kDestroyed]);
}
function $d53490a129d64f1a$var$isReadableAborted(stream) {
    const state = stream && stream._readableState;
    return $d53490a129d64f1a$var$isDestroyed(stream) && state && !state.endEmitted;
}
function $d53490a129d64f1a$var$destroy(stream, err) {
    if (stream == null || !$d53490a129d64f1a$var$isStream(stream) || $d53490a129d64f1a$var$isDestroyed(stream)) return;
    if (typeof stream.destroy === 'function') {
        if (Object.getPrototypeOf(stream).constructor === $d53490a129d64f1a$require$IncomingMessage) // See: https://github.com/nodejs/node/pull/38505/files
        stream.socket = null;
        stream.destroy(err);
    } else if (err) process.nextTick((stream, err)=>{
        stream.emit('error', err);
    }, stream, err);
    if (stream.destroyed !== true) stream[$d53490a129d64f1a$require$kDestroyed] = true;
}
const $d53490a129d64f1a$var$KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
function $d53490a129d64f1a$var$parseKeepAliveTimeout(val) {
    const m = val.toString().match($d53490a129d64f1a$var$KEEPALIVE_TIMEOUT_EXPR);
    return m ? parseInt(m[1], 10) * 1000 : null;
}
/**
 * Retrieves a header name and returns its lowercase value.
 * @param {string | Buffer} value Header name
 * @returns {string}
 */ function $d53490a129d64f1a$var$headerNameToString(value) {
    return $d53490a129d64f1a$require$headerNameLowerCasedRecord[value] || value.toLowerCase();
}
function $d53490a129d64f1a$var$parseHeaders(headers, obj = {}) {
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
function $d53490a129d64f1a$var$parseRawHeaders(headers) {
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
function $d53490a129d64f1a$var$isBuffer(buffer) {
    // See, https://github.com/mcollina/undici/pull/319
    return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
}
function $d53490a129d64f1a$var$validateHandler(handler, method, upgrade) {
    if (!handler || typeof handler !== 'object') throw new $d53490a129d64f1a$require$InvalidArgumentError('handler must be an object');
    if (typeof handler.onConnect !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onConnect method');
    if (typeof handler.onError !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onError method');
    if (typeof handler.onBodySent !== 'function' && handler.onBodySent !== undefined) throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onBodySent method');
    if (upgrade || method === 'CONNECT') {
        if (typeof handler.onUpgrade !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onUpgrade method');
    } else {
        if (typeof handler.onHeaders !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onHeaders method');
        if (typeof handler.onData !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onData method');
        if (typeof handler.onComplete !== 'function') throw new $d53490a129d64f1a$require$InvalidArgumentError('invalid onComplete method');
    }
}
// A body is disturbed if it has been read from and it cannot
// be re-used without losing state or data.
function $d53490a129d64f1a$var$isDisturbed(body) {
    return !!(body && ($gzsuh$stream.isDisturbed ? $gzsuh$stream.isDisturbed(body) || body[$d53490a129d64f1a$require$kBodyUsed] // TODO (fix): Why is body[kBodyUsed] needed?
     : body[$d53490a129d64f1a$require$kBodyUsed] || body.readableDidRead || body._readableState && body._readableState.dataEmitted || $d53490a129d64f1a$var$isReadableAborted(body)));
}
function $d53490a129d64f1a$var$isErrored(body) {
    return !!(body && ($gzsuh$stream.isErrored ? $gzsuh$stream.isErrored(body) : /state: 'errored'/.test($gzsuh$util.inspect(body))));
}
function $d53490a129d64f1a$var$isReadable(body) {
    return !!(body && ($gzsuh$stream.isReadable ? $gzsuh$stream.isReadable(body) : /state: 'readable'/.test($gzsuh$util.inspect(body))));
}
function $d53490a129d64f1a$var$getSocketInfo(socket) {
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
async function* $d53490a129d64f1a$var$convertIterableToBuffer(iterable) {
    for await (const chunk of iterable)yield Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
}
let $d53490a129d64f1a$var$ReadableStream;

function $d53490a129d64f1a$var$ReadableStreamFrom(iterable) {
    if (!$d53490a129d64f1a$var$ReadableStream) $d53490a129d64f1a$var$ReadableStream = $gzsuh$streamweb.ReadableStream;
    if ($d53490a129d64f1a$var$ReadableStream.from) return $d53490a129d64f1a$var$ReadableStream.from($d53490a129d64f1a$var$convertIterableToBuffer(iterable));
    let iterator;
    return new $d53490a129d64f1a$var$ReadableStream({
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
function $d53490a129d64f1a$var$isFormDataLike(object) {
    return object && typeof object === 'object' && typeof object.append === 'function' && typeof object.delete === 'function' && typeof object.get === 'function' && typeof object.getAll === 'function' && typeof object.has === 'function' && typeof object.set === 'function' && object[Symbol.toStringTag] === 'FormData';
}
function $d53490a129d64f1a$var$throwIfAborted(signal) {
    if (!signal) return;
    if (typeof signal.throwIfAborted === 'function') signal.throwIfAborted();
    else if (signal.aborted) {
        // DOMException not available < v17.0.0
        const err = new Error('The operation was aborted');
        err.name = 'AbortError';
        throw err;
    }
}
function $d53490a129d64f1a$var$addAbortListener(signal, listener) {
    if ('addEventListener' in signal) {
        signal.addEventListener('abort', listener, {
            once: true
        });
        return ()=>signal.removeEventListener('abort', listener);
    }
    signal.addListener('abort', listener);
    return ()=>signal.removeListener('abort', listener);
}
const $d53490a129d64f1a$var$hasToWellFormed = !!String.prototype.toWellFormed;
/**
 * @param {string} val
 */ function $d53490a129d64f1a$var$toUSVString(val) {
    if ($d53490a129d64f1a$var$hasToWellFormed) return `${val}`.toWellFormed();
    else if ($gzsuh$util.toUSVString) return $gzsuh$util.toUSVString(val);
    return `${val}`;
}
// Parsed accordingly to RFC 9110
// https://www.rfc-editor.org/rfc/rfc9110#field.content-range
function $d53490a129d64f1a$var$parseRangeHeader(range) {
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
const $d53490a129d64f1a$var$kEnumerableProperty = Object.create(null);
$d53490a129d64f1a$var$kEnumerableProperty.enumerable = true;
module.exports = {
    kEnumerableProperty: $d53490a129d64f1a$var$kEnumerableProperty,
    nop: $d53490a129d64f1a$var$nop,
    isDisturbed: $d53490a129d64f1a$var$isDisturbed,
    isErrored: $d53490a129d64f1a$var$isErrored,
    isReadable: $d53490a129d64f1a$var$isReadable,
    toUSVString: $d53490a129d64f1a$var$toUSVString,
    isReadableAborted: $d53490a129d64f1a$var$isReadableAborted,
    isBlobLike: $d53490a129d64f1a$var$isBlobLike,
    parseOrigin: $d53490a129d64f1a$var$parseOrigin,
    parseURL: $d53490a129d64f1a$var$parseURL,
    getServerName: $d53490a129d64f1a$var$getServerName,
    isStream: $d53490a129d64f1a$var$isStream,
    isIterable: $d53490a129d64f1a$var$isIterable,
    isAsyncIterable: $d53490a129d64f1a$var$isAsyncIterable,
    isDestroyed: $d53490a129d64f1a$var$isDestroyed,
    headerNameToString: $d53490a129d64f1a$var$headerNameToString,
    parseRawHeaders: $d53490a129d64f1a$var$parseRawHeaders,
    parseHeaders: $d53490a129d64f1a$var$parseHeaders,
    parseKeepAliveTimeout: $d53490a129d64f1a$var$parseKeepAliveTimeout,
    destroy: $d53490a129d64f1a$var$destroy,
    bodyLength: $d53490a129d64f1a$var$bodyLength,
    deepClone: $d53490a129d64f1a$var$deepClone,
    ReadableStreamFrom: $d53490a129d64f1a$var$ReadableStreamFrom,
    isBuffer: $d53490a129d64f1a$var$isBuffer,
    validateHandler: $d53490a129d64f1a$var$validateHandler,
    getSocketInfo: $d53490a129d64f1a$var$getSocketInfo,
    isFormDataLike: $d53490a129d64f1a$var$isFormDataLike,
    buildURL: $d53490a129d64f1a$var$buildURL,
    throwIfAborted: $d53490a129d64f1a$var$throwIfAborted,
    addAbortListener: $d53490a129d64f1a$var$addAbortListener,
    parseRangeHeader: $d53490a129d64f1a$var$parseRangeHeader,
    nodeMajor: $d53490a129d64f1a$var$nodeMajor,
    nodeMinor: $d53490a129d64f1a$var$nodeMinor,
    nodeHasAutoSelectFamily: $d53490a129d64f1a$var$nodeMajor > 18 || $d53490a129d64f1a$var$nodeMajor === 18 && $d53490a129d64f1a$var$nodeMinor >= 13,
    safeHTTPMethods: [
        'GET',
        'HEAD',
        'OPTIONS',
        'TRACE'
    ]
};


