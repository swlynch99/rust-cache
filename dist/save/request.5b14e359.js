require("./errors.12b0f892.js");
require("./symbols.b8a391fa.js");
require("./util.c7a5ec55.js");
require("./body.617da059.js");
var $3Wb7f$assert = require("assert");


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
parcelRegister("MtLE8", function(module, exports) {
module.exports = new URL("body.617da059.js", "file:" + __filename).toString();

});

'use strict';

var $hA22O = parcelRequire("hA22O");
var $b339c67cec822d2b$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $b339c67cec822d2b$require$NotSupportedError = $hA22O.NotSupportedError;


var $dSiuY = parcelRequire("dSiuY");
var $b339c67cec822d2b$require$kHTTP2BuildRequest = $dSiuY.kHTTP2BuildRequest;
var $b339c67cec822d2b$require$kHTTP2CopyHeaders = $dSiuY.kHTTP2CopyHeaders;
var $b339c67cec822d2b$require$kHTTP1BuildRequest = $dSiuY.kHTTP1BuildRequest;

var $iiSZx = parcelRequire("iiSZx");
// tokenRegExp and headerCharRegex have been lifted from
// https://github.com/nodejs/node/blob/main/lib/_http_common.js
/**
 * Verifies that the given val is a valid HTTP token
 * per the rules defined in RFC 7230
 * See https://tools.ietf.org/html/rfc7230#section-3.2.6
 */ const $b339c67cec822d2b$var$tokenRegExp = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
/**
 * Matches if val contains an invalid field-vchar
 *  field-value    = *( field-content / obs-fold )
 *  field-content  = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 *  field-vchar    = VCHAR / obs-text
 */ const $b339c67cec822d2b$var$headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
// Verifies that a given path is valid does not contain control chars \x00 to \x20
const $b339c67cec822d2b$var$invalidPathRegex = /[^\u0021-\u00ff]/;
const $b339c67cec822d2b$var$kHandler = Symbol('handler');
const $b339c67cec822d2b$var$channels = {};
let $b339c67cec822d2b$var$extractBody;

try {
    const diagnosticsChannel = $b339c67cec822d2b$import$8c11996ea4346c54;
    $b339c67cec822d2b$var$channels.create = diagnosticsChannel.channel('undici:request:create');
    $b339c67cec822d2b$var$channels.bodySent = diagnosticsChannel.channel('undici:request:bodySent');
    $b339c67cec822d2b$var$channels.headers = diagnosticsChannel.channel('undici:request:headers');
    $b339c67cec822d2b$var$channels.trailers = diagnosticsChannel.channel('undici:request:trailers');
    $b339c67cec822d2b$var$channels.error = diagnosticsChannel.channel('undici:request:error');
} catch  {
    $b339c67cec822d2b$var$channels.create = {
        hasSubscribers: false
    };
    $b339c67cec822d2b$var$channels.bodySent = {
        hasSubscribers: false
    };
    $b339c67cec822d2b$var$channels.headers = {
        hasSubscribers: false
    };
    $b339c67cec822d2b$var$channels.trailers = {
        hasSubscribers: false
    };
    $b339c67cec822d2b$var$channels.error = {
        hasSubscribers: false
    };
}

class $b339c67cec822d2b$var$Request {
    constructor(origin, { path: path, method: method, body: body, headers: headers, query: query, idempotent: idempotent, blocking: blocking, upgrade: upgrade, headersTimeout: headersTimeout, bodyTimeout: bodyTimeout, reset: reset, throwOnError: throwOnError, expectContinue: expectContinue }, handler){
        if (typeof path !== 'string') throw new $b339c67cec822d2b$require$InvalidArgumentError('path must be a string');
        else if (path[0] !== '/' && !(path.startsWith('http://') || path.startsWith('https://')) && method !== 'CONNECT') throw new $b339c67cec822d2b$require$InvalidArgumentError('path must be an absolute URL or start with a slash');
        else if ($b339c67cec822d2b$var$invalidPathRegex.exec(path) !== null) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid request path');
        if (typeof method !== 'string') throw new $b339c67cec822d2b$require$InvalidArgumentError('method must be a string');
        else if ($b339c67cec822d2b$var$tokenRegExp.exec(method) === null) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid request method');
        if (upgrade && typeof upgrade !== 'string') throw new $b339c67cec822d2b$require$InvalidArgumentError('upgrade must be a string');
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid headersTimeout');
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid bodyTimeout');
        if (reset != null && typeof reset !== 'boolean') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid reset');
        if (expectContinue != null && typeof expectContinue !== 'boolean') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid expectContinue');
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.throwOnError = throwOnError === true;
        this.method = method;
        this.abort = null;
        if (body == null) this.body = null;
        else if ($iiSZx.isStream(body)) {
            this.body = body;
            const rState = this.body._readableState;
            if (!rState || !rState.autoDestroy) {
                this.endHandler = function autoDestroy() {
                    $iiSZx.destroy(this);
                };
                this.body.on('end', this.endHandler);
            }
            this.errorHandler = (err)=>{
                if (this.abort) this.abort(err);
                else this.error = err;
            };
            this.body.on('error', this.errorHandler);
        } else if ($iiSZx.isBuffer(body)) this.body = body.byteLength ? body : null;
        else if (ArrayBuffer.isView(body)) this.body = body.buffer.byteLength ? Buffer.from(body.buffer, body.byteOffset, body.byteLength) : null;
        else if (body instanceof ArrayBuffer) this.body = body.byteLength ? Buffer.from(body) : null;
        else if (typeof body === 'string') this.body = body.length ? Buffer.from(body) : null;
        else if ($iiSZx.isFormDataLike(body) || $iiSZx.isIterable(body) || $iiSZx.isBlobLike(body)) this.body = body;
        else throw new $b339c67cec822d2b$require$InvalidArgumentError('body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable');
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? $iiSZx.buildURL(path, query) : path;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === 'HEAD' || method === 'GET' : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.reset = reset == null ? null : reset;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = '';
        // Only for H2
        this.expectContinue = expectContinue != null ? expectContinue : false;
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) throw new $b339c67cec822d2b$require$InvalidArgumentError('headers array must be even');
            for(let i = 0; i < headers.length; i += 2)$b339c67cec822d2b$var$processHeader(this, headers[i], headers[i + 1]);
        } else if (headers && typeof headers === 'object') {
            const keys = Object.keys(headers);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                $b339c67cec822d2b$var$processHeader(this, key, headers[key]);
            }
        } else if (headers != null) throw new $b339c67cec822d2b$require$InvalidArgumentError('headers must be an object or an array');
        if ($iiSZx.isFormDataLike(this.body)) {
            if ($iiSZx.nodeMajor < 16 || $iiSZx.nodeMajor === 16 && $iiSZx.nodeMinor < 8) throw new $b339c67cec822d2b$require$InvalidArgumentError('Form-Data bodies are only supported in node v16.8 and newer.');
            if (!$b339c67cec822d2b$var$extractBody) $b339c67cec822d2b$var$extractBody = (parcelRequire("MtLE8")).extractBody;
            const [bodyStream, contentType] = $b339c67cec822d2b$var$extractBody(body);
            if (this.contentType == null) {
                this.contentType = contentType;
                this.headers += `content-type: ${contentType}\r\n`;
            }
            this.body = bodyStream.stream;
            this.contentLength = bodyStream.length;
        } else if ($iiSZx.isBlobLike(body) && this.contentType == null && body.type) {
            this.contentType = body.type;
            this.headers += `content-type: ${body.type}\r\n`;
        }
        $iiSZx.validateHandler(handler, method, upgrade);
        this.servername = $iiSZx.getServerName(this.host);
        this[$b339c67cec822d2b$var$kHandler] = handler;
        if ($b339c67cec822d2b$var$channels.create.hasSubscribers) $b339c67cec822d2b$var$channels.create.publish({
            request: this
        });
    }
    onBodySent(chunk) {
        if (this[$b339c67cec822d2b$var$kHandler].onBodySent) try {
            return this[$b339c67cec822d2b$var$kHandler].onBodySent(chunk);
        } catch (err) {
            this.abort(err);
        }
    }
    onRequestSent() {
        if ($b339c67cec822d2b$var$channels.bodySent.hasSubscribers) $b339c67cec822d2b$var$channels.bodySent.publish({
            request: this
        });
        if (this[$b339c67cec822d2b$var$kHandler].onRequestSent) try {
            return this[$b339c67cec822d2b$var$kHandler].onRequestSent();
        } catch (err) {
            this.abort(err);
        }
    }
    onConnect(abort) {
        $3Wb7f$assert(!this.aborted);
        $3Wb7f$assert(!this.completed);
        if (this.error) abort(this.error);
        else {
            this.abort = abort;
            return this[$b339c67cec822d2b$var$kHandler].onConnect(abort);
        }
    }
    onHeaders(statusCode, headers, resume, statusText) {
        $3Wb7f$assert(!this.aborted);
        $3Wb7f$assert(!this.completed);
        if ($b339c67cec822d2b$var$channels.headers.hasSubscribers) $b339c67cec822d2b$var$channels.headers.publish({
            request: this,
            response: {
                statusCode: statusCode,
                headers: headers,
                statusText: statusText
            }
        });
        try {
            return this[$b339c67cec822d2b$var$kHandler].onHeaders(statusCode, headers, resume, statusText);
        } catch (err) {
            this.abort(err);
        }
    }
    onData(chunk) {
        $3Wb7f$assert(!this.aborted);
        $3Wb7f$assert(!this.completed);
        try {
            return this[$b339c67cec822d2b$var$kHandler].onData(chunk);
        } catch (err) {
            this.abort(err);
            return false;
        }
    }
    onUpgrade(statusCode, headers, socket) {
        $3Wb7f$assert(!this.aborted);
        $3Wb7f$assert(!this.completed);
        return this[$b339c67cec822d2b$var$kHandler].onUpgrade(statusCode, headers, socket);
    }
    onComplete(trailers) {
        this.onFinally();
        $3Wb7f$assert(!this.aborted);
        this.completed = true;
        if ($b339c67cec822d2b$var$channels.trailers.hasSubscribers) $b339c67cec822d2b$var$channels.trailers.publish({
            request: this,
            trailers: trailers
        });
        try {
            return this[$b339c67cec822d2b$var$kHandler].onComplete(trailers);
        } catch (err) {
            // TODO (fix): This might be a bad idea?
            this.onError(err);
        }
    }
    onError(error) {
        this.onFinally();
        if ($b339c67cec822d2b$var$channels.error.hasSubscribers) $b339c67cec822d2b$var$channels.error.publish({
            request: this,
            error: error
        });
        if (this.aborted) return;
        this.aborted = true;
        return this[$b339c67cec822d2b$var$kHandler].onError(error);
    }
    onFinally() {
        if (this.errorHandler) {
            this.body.off('error', this.errorHandler);
            this.errorHandler = null;
        }
        if (this.endHandler) {
            this.body.off('end', this.endHandler);
            this.endHandler = null;
        }
    }
    // TODO: adjust to support H2
    addHeader(key, value) {
        $b339c67cec822d2b$var$processHeader(this, key, value);
        return this;
    }
    static [$b339c67cec822d2b$require$kHTTP1BuildRequest](origin, opts, handler) {
        // TODO: Migrate header parsing here, to make Requests
        // HTTP agnostic
        return new $b339c67cec822d2b$var$Request(origin, opts, handler);
    }
    static [$b339c67cec822d2b$require$kHTTP2BuildRequest](origin, opts, handler) {
        const headers = opts.headers;
        opts = {
            ...opts,
            headers: null
        };
        const request = new $b339c67cec822d2b$var$Request(origin, opts, handler);
        request.headers = {};
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) throw new $b339c67cec822d2b$require$InvalidArgumentError('headers array must be even');
            for(let i = 0; i < headers.length; i += 2)$b339c67cec822d2b$var$processHeader(request, headers[i], headers[i + 1], true);
        } else if (headers && typeof headers === 'object') {
            const keys = Object.keys(headers);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                $b339c67cec822d2b$var$processHeader(request, key, headers[key], true);
            }
        } else if (headers != null) throw new $b339c67cec822d2b$require$InvalidArgumentError('headers must be an object or an array');
        return request;
    }
    static [$b339c67cec822d2b$require$kHTTP2CopyHeaders](raw) {
        const rawHeaders = raw.split('\r\n');
        const headers = {};
        for (const header of rawHeaders){
            const [key, value] = header.split(': ');
            if (value == null || value.length === 0) continue;
            if (headers[key]) headers[key] += `,${value}`;
            else headers[key] = value;
        }
        return headers;
    }
}
function $b339c67cec822d2b$var$processHeaderValue(key, val, skipAppend) {
    if (val && typeof val === 'object') throw new $b339c67cec822d2b$require$InvalidArgumentError(`invalid ${key} header`);
    val = val != null ? `${val}` : '';
    if ($b339c67cec822d2b$var$headerCharRegex.exec(val) !== null) throw new $b339c67cec822d2b$require$InvalidArgumentError(`invalid ${key} header`);
    return skipAppend ? val : `${key}: ${val}\r\n`;
}
function $b339c67cec822d2b$var$processHeader(request, key, val, skipAppend = false) {
    if (val && typeof val === 'object' && !Array.isArray(val)) throw new $b339c67cec822d2b$require$InvalidArgumentError(`invalid ${key} header`);
    else if (val === undefined) return;
    if (request.host === null && key.length === 4 && key.toLowerCase() === 'host') {
        if ($b339c67cec822d2b$var$headerCharRegex.exec(val) !== null) throw new $b339c67cec822d2b$require$InvalidArgumentError(`invalid ${key} header`);
        // Consumed by Client
        request.host = val;
    } else if (request.contentLength === null && key.length === 14 && key.toLowerCase() === 'content-length') {
        request.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request.contentLength)) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid content-length header');
    } else if (request.contentType === null && key.length === 12 && key.toLowerCase() === 'content-type') {
        request.contentType = val;
        if (skipAppend) request.headers[key] = $b339c67cec822d2b$var$processHeaderValue(key, val, skipAppend);
        else request.headers += $b339c67cec822d2b$var$processHeaderValue(key, val);
    } else if (key.length === 17 && key.toLowerCase() === 'transfer-encoding') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid transfer-encoding header');
    else if (key.length === 10 && key.toLowerCase() === 'connection') {
        const value = typeof val === 'string' ? val.toLowerCase() : null;
        if (value !== 'close' && value !== 'keep-alive') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid connection header');
        else if (value === 'close') request.reset = true;
    } else if (key.length === 10 && key.toLowerCase() === 'keep-alive') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid keep-alive header');
    else if (key.length === 7 && key.toLowerCase() === 'upgrade') throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid upgrade header');
    else if (key.length === 6 && key.toLowerCase() === 'expect') throw new $b339c67cec822d2b$require$NotSupportedError('expect header not supported');
    else if ($b339c67cec822d2b$var$tokenRegExp.exec(key) === null) throw new $b339c67cec822d2b$require$InvalidArgumentError('invalid header key');
    else {
        if (Array.isArray(val)) {
            for(let i = 0; i < val.length; i++)if (skipAppend) {
                if (request.headers[key]) request.headers[key] += `,${$b339c67cec822d2b$var$processHeaderValue(key, val[i], skipAppend)}`;
                else request.headers[key] = $b339c67cec822d2b$var$processHeaderValue(key, val[i], skipAppend);
            } else request.headers += $b339c67cec822d2b$var$processHeaderValue(key, val[i]);
        } else if (skipAppend) request.headers[key] = $b339c67cec822d2b$var$processHeaderValue(key, val, skipAppend);
        else request.headers += $b339c67cec822d2b$var$processHeaderValue(key, val);
    }
}
module.exports = $b339c67cec822d2b$var$Request;


