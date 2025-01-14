require("./symbols.b8a391fa.js");
require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
var $hz89I$assert = require("assert");


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


var $dSiuY = parcelRequire("dSiuY");
var $361759226cd92de6$require$kRetryHandlerDefaultRetry = $dSiuY.kRetryHandlerDefaultRetry;

var $hA22O = parcelRequire("hA22O");
var $361759226cd92de6$require$RequestRetryError = $hA22O.RequestRetryError;

var $iiSZx = parcelRequire("iiSZx");
var $361759226cd92de6$require$isDisturbed = $iiSZx.isDisturbed;
var $361759226cd92de6$require$parseHeaders = $iiSZx.parseHeaders;
var $361759226cd92de6$require$parseRangeHeader = $iiSZx.parseRangeHeader;
function $361759226cd92de6$var$calculateRetryAfterHeader(retryAfter) {
    const current = Date.now();
    const diff = new Date(retryAfter).getTime() - current;
    return diff;
}
class $361759226cd92de6$var$RetryHandler {
    constructor(opts, handlers){
        const { retryOptions: retryOptions, ...dispatchOpts } = opts;
        const { // Retry scoped
        retry: retryFn, maxRetries: maxRetries, maxTimeout: maxTimeout, minTimeout: minTimeout, timeoutFactor: timeoutFactor, methods: // Response scoped
        methods, errorCodes: errorCodes, retryAfter: retryAfter, statusCodes: statusCodes } = retryOptions ?? {};
        this.dispatch = handlers.dispatch;
        this.handler = handlers.handler;
        this.opts = dispatchOpts;
        this.abort = null;
        this.aborted = false;
        this.retryOpts = {
            retry: retryFn ?? $361759226cd92de6$var$RetryHandler[$361759226cd92de6$require$kRetryHandlerDefaultRetry],
            retryAfter: retryAfter ?? true,
            maxTimeout: maxTimeout ?? 30000,
            timeout: minTimeout ?? 500,
            timeoutFactor: timeoutFactor ?? 2,
            maxRetries: maxRetries ?? 5,
            // What errors we should retry
            methods: methods ?? [
                'GET',
                'HEAD',
                'OPTIONS',
                'PUT',
                'DELETE',
                'TRACE'
            ],
            // Indicates which errors to retry
            statusCodes: statusCodes ?? [
                500,
                502,
                503,
                504,
                429
            ],
            // List of errors to retry
            errorCodes: errorCodes ?? [
                'ECONNRESET',
                'ECONNREFUSED',
                'ENOTFOUND',
                'ENETDOWN',
                'ENETUNREACH',
                'EHOSTDOWN',
                'EHOSTUNREACH',
                'EPIPE'
            ]
        };
        this.retryCount = 0;
        this.start = 0;
        this.end = null;
        this.etag = null;
        this.resume = null;
        // Handle possible onConnect duplication
        this.handler.onConnect((reason)=>{
            this.aborted = true;
            if (this.abort) this.abort(reason);
            else this.reason = reason;
        });
    }
    onRequestSent() {
        if (this.handler.onRequestSent) this.handler.onRequestSent();
    }
    onUpgrade(statusCode, headers, socket) {
        if (this.handler.onUpgrade) this.handler.onUpgrade(statusCode, headers, socket);
    }
    onConnect(abort) {
        if (this.aborted) abort(this.reason);
        else this.abort = abort;
    }
    onBodySent(chunk) {
        if (this.handler.onBodySent) return this.handler.onBodySent(chunk);
    }
    static [$361759226cd92de6$require$kRetryHandlerDefaultRetry](err, { state: state, opts: opts }, cb) {
        const { statusCode: statusCode, code: code, headers: headers } = err;
        const { method: method, retryOptions: retryOptions } = opts;
        const { maxRetries: maxRetries, timeout: timeout, maxTimeout: maxTimeout, timeoutFactor: timeoutFactor, statusCodes: statusCodes, errorCodes: errorCodes, methods: methods } = retryOptions;
        let { counter: counter, currentTimeout: currentTimeout } = state;
        currentTimeout = currentTimeout != null && currentTimeout > 0 ? currentTimeout : timeout;
        // Any code that is not a Undici's originated and allowed to retry
        if (code && code !== 'UND_ERR_REQ_RETRY' && code !== 'UND_ERR_SOCKET' && !errorCodes.includes(code)) {
            cb(err);
            return;
        }
        // If a set of method are provided and the current method is not in the list
        if (Array.isArray(methods) && !methods.includes(method)) {
            cb(err);
            return;
        }
        // If a set of status code are provided and the current status code is not in the list
        if (statusCode != null && Array.isArray(statusCodes) && !statusCodes.includes(statusCode)) {
            cb(err);
            return;
        }
        // If we reached the max number of retries
        if (counter > maxRetries) {
            cb(err);
            return;
        }
        let retryAfterHeader = headers != null && headers['retry-after'];
        if (retryAfterHeader) {
            retryAfterHeader = Number(retryAfterHeader);
            retryAfterHeader = isNaN(retryAfterHeader) ? $361759226cd92de6$var$calculateRetryAfterHeader(retryAfterHeader) : retryAfterHeader * 1e3 // Retry-After is in seconds
            ;
        }
        const retryTimeout = retryAfterHeader > 0 ? Math.min(retryAfterHeader, maxTimeout) : Math.min(currentTimeout * timeoutFactor ** counter, maxTimeout);
        state.currentTimeout = retryTimeout;
        setTimeout(()=>cb(null), retryTimeout);
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const headers = $361759226cd92de6$require$parseHeaders(rawHeaders);
        this.retryCount += 1;
        if (statusCode >= 300) {
            this.abort(new $361759226cd92de6$require$RequestRetryError('Request failed', statusCode, {
                headers: headers,
                count: this.retryCount
            }));
            return false;
        }
        // Checkpoint for resume from where we left it
        if (this.resume != null) {
            this.resume = null;
            if (statusCode !== 206) return true;
            const contentRange = $361759226cd92de6$require$parseRangeHeader(headers['content-range']);
            // If no content range
            if (!contentRange) {
                this.abort(new $361759226cd92de6$require$RequestRetryError('Content-Range mismatch', statusCode, {
                    headers: headers,
                    count: this.retryCount
                }));
                return false;
            }
            // Let's start with a weak etag check
            if (this.etag != null && this.etag !== headers.etag) {
                this.abort(new $361759226cd92de6$require$RequestRetryError('ETag mismatch', statusCode, {
                    headers: headers,
                    count: this.retryCount
                }));
                return false;
            }
            const { start: start, size: size, end: end = size } = contentRange;
            $hz89I$assert(this.start === start, 'content-range mismatch');
            $hz89I$assert(this.end == null || this.end === end, 'content-range mismatch');
            this.resume = resume;
            return true;
        }
        if (this.end == null) {
            if (statusCode === 206) {
                // First time we receive 206
                const range = $361759226cd92de6$require$parseRangeHeader(headers['content-range']);
                if (range == null) return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
                const { start: start, size: size, end: end = size } = range;
                $hz89I$assert(start != null && Number.isFinite(start) && this.start !== start, 'content-range mismatch');
                $hz89I$assert(Number.isFinite(start));
                $hz89I$assert(end != null && Number.isFinite(end) && this.end !== end, 'invalid content-length');
                this.start = start;
                this.end = end;
            }
            // We make our best to checkpoint the body for further range headers
            if (this.end == null) {
                const contentLength = headers['content-length'];
                this.end = contentLength != null ? Number(contentLength) : null;
            }
            $hz89I$assert(Number.isFinite(this.start));
            $hz89I$assert(this.end == null || Number.isFinite(this.end), 'invalid content-length');
            this.resume = resume;
            this.etag = headers.etag != null ? headers.etag : null;
            return this.handler.onHeaders(statusCode, rawHeaders, resume, statusMessage);
        }
        const err = new $361759226cd92de6$require$RequestRetryError('Request failed', statusCode, {
            headers: headers,
            count: this.retryCount
        });
        this.abort(err);
        return false;
    }
    onData(chunk) {
        this.start += chunk.length;
        return this.handler.onData(chunk);
    }
    onComplete(rawTrailers) {
        this.retryCount = 0;
        return this.handler.onComplete(rawTrailers);
    }
    onError(err) {
        if (this.aborted || $361759226cd92de6$require$isDisturbed(this.opts.body)) return this.handler.onError(err);
        this.retryOpts.retry(err, {
            state: {
                counter: this.retryCount++,
                currentTimeout: this.retryAfter
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, onRetry.bind(this));
        function onRetry(err) {
            if (err != null || this.aborted || $361759226cd92de6$require$isDisturbed(this.opts.body)) return this.handler.onError(err);
            if (this.start !== 0) this.opts = {
                ...this.opts,
                headers: {
                    ...this.opts.headers,
                    range: `bytes=${this.start}-${this.end ?? ''}`
                }
            };
            try {
                this.dispatch(this.opts, this);
            } catch (err) {
                this.handler.onError(err);
            }
        }
    }
}
module.exports = $361759226cd92de6$var$RetryHandler;


