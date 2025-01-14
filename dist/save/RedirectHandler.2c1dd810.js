require("./util.c7a5ec55.js");
require("./symbols.b8a391fa.js");
require("./errors.12b0f892.js");
var $h8C33$assert = require("assert");
var $h8C33$events = require("events");


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

var $iiSZx = parcelRequire("iiSZx");

var $dSiuY = parcelRequire("dSiuY");
var $5e43f07d278f05d7$require$kBodyUsed = $dSiuY.kBodyUsed;


var $hA22O = parcelRequire("hA22O");
var $5e43f07d278f05d7$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

const $5e43f07d278f05d7$var$redirectableStatusCodes = [
    300,
    301,
    302,
    303,
    307,
    308
];
const $5e43f07d278f05d7$var$kBody = Symbol('body');
class $5e43f07d278f05d7$var$BodyAsyncIterable {
    constructor(body){
        this[$5e43f07d278f05d7$var$kBody] = body;
        this[$5e43f07d278f05d7$require$kBodyUsed] = false;
    }
    async *[Symbol.asyncIterator]() {
        $h8C33$assert(!this[$5e43f07d278f05d7$require$kBodyUsed], 'disturbed');
        this[$5e43f07d278f05d7$require$kBodyUsed] = true;
        yield* this[$5e43f07d278f05d7$var$kBody];
    }
}
class $5e43f07d278f05d7$var$RedirectHandler {
    constructor(dispatch, maxRedirections, opts, handler){
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) throw new $5e43f07d278f05d7$require$InvalidArgumentError('maxRedirections must be a positive number');
        $iiSZx.validateHandler(handler, opts.method, opts.upgrade);
        this.dispatch = dispatch;
        this.location = null;
        this.abort = null;
        this.opts = {
            ...opts,
            maxRedirections: 0
        } // opts must be a copy
        ;
        this.maxRedirections = maxRedirections;
        this.handler = handler;
        this.history = [];
        if ($iiSZx.isStream(this.opts.body)) {
            // TODO (fix): Provide some way for the user to cache the file to e.g. /tmp
            // so that it can be dispatched again?
            // TODO (fix): Do we need 100-expect support to provide a way to do this properly?
            if ($iiSZx.bodyLength(this.opts.body) === 0) this.opts.body.on('data', function() {
                $h8C33$assert(false);
            });
            if (typeof this.opts.body.readableDidRead !== 'boolean') {
                this.opts.body[$5e43f07d278f05d7$require$kBodyUsed] = false;
                $h8C33$events.prototype.on.call(this.opts.body, 'data', function() {
                    this[$5e43f07d278f05d7$require$kBodyUsed] = true;
                });
            }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === 'function') // TODO (fix): We can't access ReadableStream internal state
        // to determine whether or not it has been disturbed. This is just
        // a workaround.
        this.opts.body = new $5e43f07d278f05d7$var$BodyAsyncIterable(this.opts.body);
        else if (this.opts.body && typeof this.opts.body !== 'string' && !ArrayBuffer.isView(this.opts.body) && $iiSZx.isIterable(this.opts.body)) // TODO: Should we allow re-using iterable if !this.opts.idempotent
        // or through some other flag?
        this.opts.body = new $5e43f07d278f05d7$var$BodyAsyncIterable(this.opts.body);
    }
    onConnect(abort) {
        this.abort = abort;
        this.handler.onConnect(abort, {
            history: this.history
        });
    }
    onUpgrade(statusCode, headers, socket) {
        this.handler.onUpgrade(statusCode, headers, socket);
    }
    onError(error) {
        this.handler.onError(error);
    }
    onHeaders(statusCode, headers, resume, statusText) {
        this.location = this.history.length >= this.maxRedirections || $iiSZx.isDisturbed(this.opts.body) ? null : $5e43f07d278f05d7$var$parseLocation(statusCode, headers);
        if (this.opts.origin) this.history.push(new URL(this.opts.path, this.opts.origin));
        if (!this.location) return this.handler.onHeaders(statusCode, headers, resume, statusText);
        const { origin: origin, pathname: pathname, search: search } = $iiSZx.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin)));
        const path = search ? `${pathname}${search}` : pathname;
        // Remove headers referring to the original URL.
        // By default it is Host only, unless it's a 303 (see below), which removes also all Content-* headers.
        // https://tools.ietf.org/html/rfc7231#section-6.4
        this.opts.headers = $5e43f07d278f05d7$var$cleanRequestHeaders(this.opts.headers, statusCode === 303, this.opts.origin !== origin);
        this.opts.path = path;
        this.opts.origin = origin;
        this.opts.maxRedirections = 0;
        this.opts.query = null;
        // https://tools.ietf.org/html/rfc7231#section-6.4.4
        // In case of HTTP 303, always replace method to be either HEAD or GET
        if (statusCode === 303 && this.opts.method !== 'HEAD') {
            this.opts.method = 'GET';
            this.opts.body = null;
        }
    }
    onData(chunk) {
        if (this.location) ;
        else return this.handler.onData(chunk);
    }
    onComplete(trailers) {
        if (this.location) {
            /*
        https://tools.ietf.org/html/rfc7231#section-6.4

        TLDR: undici always ignores 3xx response trailers as they are not expected in case of redirections
        and neither are useful if present.

        See comment on onData method above for more detailed informations.
      */ this.location = null;
            this.abort = null;
            this.dispatch(this.opts, this);
        } else this.handler.onComplete(trailers);
    }
    onBodySent(chunk) {
        if (this.handler.onBodySent) this.handler.onBodySent(chunk);
    }
}
function $5e43f07d278f05d7$var$parseLocation(statusCode, headers) {
    if ($5e43f07d278f05d7$var$redirectableStatusCodes.indexOf(statusCode) === -1) return null;
    for(let i = 0; i < headers.length; i += 2){
        if (headers[i].toString().toLowerCase() === 'location') return headers[i + 1];
    }
}
// https://tools.ietf.org/html/rfc7231#section-6.4.4
function $5e43f07d278f05d7$var$shouldRemoveHeader(header, removeContent, unknownOrigin) {
    if (header.length === 4) return $iiSZx.headerNameToString(header) === 'host';
    if (removeContent && $iiSZx.headerNameToString(header).startsWith('content-')) return true;
    if (unknownOrigin && (header.length === 13 || header.length === 6 || header.length === 19)) {
        const name = $iiSZx.headerNameToString(header);
        return name === 'authorization' || name === 'cookie' || name === 'proxy-authorization';
    }
    return false;
}
// https://tools.ietf.org/html/rfc7231#section-6.4
function $5e43f07d278f05d7$var$cleanRequestHeaders(headers, removeContent, unknownOrigin) {
    const ret = [];
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2)if (!$5e43f07d278f05d7$var$shouldRemoveHeader(headers[i], removeContent, unknownOrigin)) ret.push(headers[i], headers[i + 1]);
    } else if (headers && typeof headers === 'object') {
        for (const key of Object.keys(headers))if (!$5e43f07d278f05d7$var$shouldRemoveHeader(key, removeContent, unknownOrigin)) ret.push(key, headers[key]);
    } else $h8C33$assert(headers == null, 'headers must be an object or an array');
    return ret;
}
module.exports = $5e43f07d278f05d7$var$RedirectHandler;


