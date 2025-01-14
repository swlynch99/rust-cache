require("./public-api.8b758ba4.js");
var $lvwco$stream = require("stream");
var $lvwco$http = require("http");
var $lvwco$url = require("url");
var $lvwco$https = require("https");
var $lvwco$zlib = require("zlib");


      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("8aUiO", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "FetchError", () => $e10297784507905c$export$26e841bcf1aeb894);
$parcel$export(module.exports, "Headers", () => $e10297784507905c$export$79b704688b15c0f4);
$parcel$export(module.exports, "Response", () => $e10297784507905c$export$9f633d56d7ec90d3);
$parcel$export(module.exports, "Request", () => $e10297784507905c$export$7fa6c5b6f8193917);
$parcel$export(module.exports, "AbortError", () => $e10297784507905c$export$18b052ffd8c84d7);
$parcel$export(module.exports, "default", () => $e10297784507905c$export$2e2bcd8739ae039);




var $lBnxZ = parcelRequire("lBnxZ");


// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const $e10297784507905c$var$Readable = (0, ($parcel$interopDefault($lvwco$stream))).Readable;
const $e10297784507905c$var$BUFFER = Symbol('buffer');
const $e10297784507905c$var$TYPE = Symbol('type');
class $e10297784507905c$var$Blob {
    constructor(){
        this[$e10297784507905c$var$TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) buffer = element;
                else if (ArrayBuffer.isView(element)) buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                else if (element instanceof ArrayBuffer) buffer = Buffer.from(element);
                else if (element instanceof $e10297784507905c$var$Blob) buffer = element[$e10297784507905c$var$BUFFER];
                else buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[$e10297784507905c$var$BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) this[$e10297784507905c$var$TYPE] = type;
    }
    get size() {
        return this[$e10297784507905c$var$BUFFER].length;
    }
    get type() {
        return this[$e10297784507905c$var$TYPE];
    }
    text() {
        return Promise.resolve(this[$e10297784507905c$var$BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[$e10297784507905c$var$BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new $e10297784507905c$var$Readable();
        readable._read = function() {};
        readable.push(this[$e10297784507905c$var$BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) relativeStart = 0;
        else if (start < 0) relativeStart = Math.max(size + start, 0);
        else relativeStart = Math.min(start, size);
        if (end === undefined) relativeEnd = size;
        else if (end < 0) relativeEnd = Math.max(size + end, 0);
        else relativeEnd = Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[$e10297784507905c$var$BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new $e10297784507905c$var$Blob([], {
            type: arguments[2]
        });
        blob[$e10297784507905c$var$BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties($e10297784507905c$var$Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty($e10297784507905c$var$Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function $e10297784507905c$export$26e841bcf1aeb894(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) this.code = this.errno = systemError.code;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
$e10297784507905c$export$26e841bcf1aeb894.prototype = Object.create(Error.prototype);
$e10297784507905c$export$26e841bcf1aeb894.prototype.constructor = $e10297784507905c$export$26e841bcf1aeb894;
$e10297784507905c$export$26e841bcf1aeb894.prototype.name = 'FetchError';
let $e10297784507905c$var$convert;

try {
    $e10297784507905c$var$convert = $e10297784507905c$import$801ef83bf5ac8669$9c68d69a4c5bbcf9;
} catch (e) {}
const $e10297784507905c$var$INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const $e10297784507905c$var$PassThrough = (0, ($parcel$interopDefault($lvwco$stream))).PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function $e10297784507905c$var$Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) // body is undefined or null
    body = null;
    else if ($e10297784507905c$var$isURLSearchParams(body)) // body is a URLSearchParams
    body = Buffer.from(body.toString());
    else if ($e10297784507905c$var$isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') // body is ArrayBuffer
    body = Buffer.from(body);
    else if (ArrayBuffer.isView(body)) // body is ArrayBufferView
    body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    else if (body instanceof (0, ($parcel$interopDefault($lvwco$stream)))) ;
    else // none of the above
    // coerce to string then buffer
    body = Buffer.from(String(body));
    this[$e10297784507905c$var$INTERNALS] = {
        body: body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof (0, ($parcel$interopDefault($lvwco$stream)))) body.on('error', function(err) {
        const error = err.name === 'AbortError' ? err : new $e10297784507905c$export$26e841bcf1aeb894(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
        _this[$e10297784507905c$var$INTERNALS].error = error;
    });
}
$e10297784507905c$var$Body.prototype = {
    get body () {
        return this[$e10297784507905c$var$INTERNALS].body;
    },
    get bodyUsed () {
        return this[$e10297784507905c$var$INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return $e10297784507905c$var$consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return $e10297784507905c$var$consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new $e10297784507905c$var$Blob([], {
                type: ct.toLowerCase()
            }), {
                [$e10297784507905c$var$BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return $e10297784507905c$var$consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return $e10297784507905c$var$Body.Promise.reject(new $e10297784507905c$export$26e841bcf1aeb894(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return $e10297784507905c$var$consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return $e10297784507905c$var$consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return $e10297784507905c$var$consumeBody.call(this).then(function(buffer) {
            return $e10297784507905c$var$convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties($e10297784507905c$var$Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
$e10297784507905c$var$Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames($e10297784507905c$var$Body.prototype))// istanbul ignore else: future proof
    if (!(name in proto)) {
        const desc = Object.getOwnPropertyDescriptor($e10297784507905c$var$Body.prototype, name);
        Object.defineProperty(proto, name, desc);
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function $e10297784507905c$var$consumeBody() {
    var _this4 = this;
    if (this[$e10297784507905c$var$INTERNALS].disturbed) return $e10297784507905c$var$Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    this[$e10297784507905c$var$INTERNALS].disturbed = true;
    if (this[$e10297784507905c$var$INTERNALS].error) return $e10297784507905c$var$Body.Promise.reject(this[$e10297784507905c$var$INTERNALS].error);
    let body = this.body;
    // body is null
    if (body === null) return $e10297784507905c$var$Body.Promise.resolve(Buffer.alloc(0));
    // body is blob
    if ($e10297784507905c$var$isBlob(body)) body = body.stream();
    // body is buffer
    if (Buffer.isBuffer(body)) return $e10297784507905c$var$Body.Promise.resolve(body);
    // istanbul ignore if: should never happen
    if (!(body instanceof (0, ($parcel$interopDefault($lvwco$stream))))) return $e10297784507905c$var$Body.Promise.resolve(Buffer.alloc(0));
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new $e10297784507905c$var$Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) resTimeout = setTimeout(function() {
            abort = true;
            reject(new $e10297784507905c$export$26e841bcf1aeb894(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
        }, _this4.timeout);
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else // other errors, such as incorrect content-encoding
            reject(new $e10297784507905c$export$26e841bcf1aeb894(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) return;
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new $e10297784507905c$export$26e841bcf1aeb894(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) return;
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new $e10297784507905c$export$26e841bcf1aeb894(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function $e10297784507905c$var$convertBody(buffer, headers) {
    if (typeof $e10297784507905c$var$convert !== 'function') throw new Error('The package `encoding` must be installed to use the textConverted() function');
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) res = /charset=([^;]*)/i.exec(ct);
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) res.pop(); // drop last quote
        }
        if (res) res = /charset=(.*)/i.exec(res.pop());
    }
    // xml
    if (!res && str) res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') charset = 'gb18030';
    }
    // turn raw buffers into a single utf-8 buffer
    return $e10297784507905c$var$convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function $e10297784507905c$var$isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') return false;
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function $e10297784507905c$var$isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function $e10297784507905c$var$clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) throw new Error('cannot clone body after it is used');
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof (0, ($parcel$interopDefault($lvwco$stream))) && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new $e10297784507905c$var$PassThrough();
        p2 = new $e10297784507905c$var$PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[$e10297784507905c$var$INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function $e10297784507905c$var$extractContentType(body) {
    if (body === null) // body is null
    return null;
    else if (typeof body === 'string') // body is string
    return 'text/plain;charset=UTF-8';
    else if ($e10297784507905c$var$isURLSearchParams(body)) // body is a URLSearchParams
    return 'application/x-www-form-urlencoded;charset=UTF-8';
    else if ($e10297784507905c$var$isBlob(body)) // body is blob
    return body.type || null;
    else if (Buffer.isBuffer(body)) // body is buffer
    return null;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') // body is ArrayBuffer
    return null;
    else if (ArrayBuffer.isView(body)) // body is ArrayBufferView
    return null;
    else if (typeof body.getBoundary === 'function') // detect form data input from form-data module
    return `multipart/form-data;boundary=${body.getBoundary()}`;
    else if (body instanceof (0, ($parcel$interopDefault($lvwco$stream)))) // body is stream
    // can't really do much about this
    return null;
    else // Body constructor defaults other things to string
    return 'text/plain;charset=UTF-8';
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function $e10297784507905c$var$getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) // body is null
    return 0;
    else if ($e10297784507905c$var$isBlob(body)) return body.size;
    else if (Buffer.isBuffer(body)) // body is buffer
    return body.length;
    else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) // 2.x
        return body.getLengthSync();
        return null;
    } else // body is stream
    return null;
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function $e10297784507905c$var$writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) // body is null
    dest.end();
    else if ($e10297784507905c$var$isBlob(body)) body.stream().pipe(dest);
    else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else // body is stream
    body.pipe(dest);
}
// expose Promise
$e10297784507905c$var$Body.Promise = $parcel$global.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const $e10297784507905c$var$invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const $e10297784507905c$var$invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function $e10297784507905c$var$validateName(name) {
    name = `${name}`;
    if ($e10297784507905c$var$invalidTokenRegex.test(name) || name === '') throw new TypeError(`${name} is not a legal HTTP header name`);
}
function $e10297784507905c$var$validateValue(value) {
    value = `${value}`;
    if ($e10297784507905c$var$invalidHeaderCharRegex.test(value)) throw new TypeError(`${value} is not a legal HTTP header value`);
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function $e10297784507905c$var$find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) return key;
    }
    return undefined;
}
const $e10297784507905c$var$MAP = Symbol('map');
class $e10297784507905c$export$79b704688b15c0f4 {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[$e10297784507905c$var$MAP] = Object.create(null);
        if (init instanceof $e10297784507905c$export$79b704688b15c0f4) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames)for (const value of rawHeaders[headerName])this.append(headerName, value);
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') throw new TypeError('Header pairs must be iterable');
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') throw new TypeError('Each header pair must be iterable');
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) throw new TypeError('Each header pair must be a name/value tuple');
                    this.append(pair[0], pair[1]);
                }
            } else // record<ByteString, ByteString>
            for (const key of Object.keys(init)){
                const value = init[key];
                this.append(key, value);
            }
        } else throw new TypeError('Provided initializer must be an object');
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        $e10297784507905c$var$validateName(name);
        const key = $e10297784507905c$var$find(this[$e10297784507905c$var$MAP], name);
        if (key === undefined) return null;
        return this[$e10297784507905c$var$MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = $e10297784507905c$var$getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = $e10297784507905c$var$getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        $e10297784507905c$var$validateName(name);
        $e10297784507905c$var$validateValue(value);
        const key = $e10297784507905c$var$find(this[$e10297784507905c$var$MAP], name);
        this[$e10297784507905c$var$MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        $e10297784507905c$var$validateName(name);
        $e10297784507905c$var$validateValue(value);
        const key = $e10297784507905c$var$find(this[$e10297784507905c$var$MAP], name);
        if (key !== undefined) this[$e10297784507905c$var$MAP][key].push(value);
        else this[$e10297784507905c$var$MAP][name] = [
            value
        ];
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        $e10297784507905c$var$validateName(name);
        return $e10297784507905c$var$find(this[$e10297784507905c$var$MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        $e10297784507905c$var$validateName(name);
        const key = $e10297784507905c$var$find(this[$e10297784507905c$var$MAP], name);
        if (key !== undefined) delete this[$e10297784507905c$var$MAP][key];
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[$e10297784507905c$var$MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return $e10297784507905c$var$createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return $e10297784507905c$var$createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return $e10297784507905c$var$createHeadersIterator(this, 'key+value');
    }
}
$e10297784507905c$export$79b704688b15c0f4.prototype.entries = $e10297784507905c$export$79b704688b15c0f4.prototype[Symbol.iterator];
Object.defineProperty($e10297784507905c$export$79b704688b15c0f4.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties($e10297784507905c$export$79b704688b15c0f4.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function $e10297784507905c$var$getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[$e10297784507905c$var$MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[$e10297784507905c$var$MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[$e10297784507905c$var$MAP][k].join(', ')
        ];
    });
}
const $e10297784507905c$var$INTERNAL = Symbol('internal');
function $e10297784507905c$var$createHeadersIterator(target, kind) {
    const iterator = Object.create($e10297784507905c$var$HeadersIteratorPrototype);
    iterator[$e10297784507905c$var$INTERNAL] = {
        target: target,
        kind: kind,
        index: 0
    };
    return iterator;
}
const $e10297784507905c$var$HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== $e10297784507905c$var$HeadersIteratorPrototype) throw new TypeError('Value of `this` is not a HeadersIterator');
        var _INTERNAL = this[$e10297784507905c$var$INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = $e10297784507905c$var$getHeaders(target, kind);
        const len = values.length;
        if (index >= len) return {
            value: undefined,
            done: true
        };
        this[$e10297784507905c$var$INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty($e10297784507905c$var$HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function $e10297784507905c$var$exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[$e10297784507905c$var$MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = $e10297784507905c$var$find(headers[$e10297784507905c$var$MAP], 'Host');
    if (hostHeaderKey !== undefined) obj[hostHeaderKey] = obj[hostHeaderKey][0];
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function $e10297784507905c$var$createHeadersLenient(obj) {
    const headers = new $e10297784507905c$export$79b704688b15c0f4();
    for (const name of Object.keys(obj)){
        if ($e10297784507905c$var$invalidTokenRegex.test(name)) continue;
        if (Array.isArray(obj[name])) for (const val of obj[name]){
            if ($e10297784507905c$var$invalidHeaderCharRegex.test(val)) continue;
            if (headers[$e10297784507905c$var$MAP][name] === undefined) headers[$e10297784507905c$var$MAP][name] = [
                val
            ];
            else headers[$e10297784507905c$var$MAP][name].push(val);
        }
        else if (!$e10297784507905c$var$invalidHeaderCharRegex.test(obj[name])) headers[$e10297784507905c$var$MAP][name] = [
            obj[name]
        ];
    }
    return headers;
}
const $e10297784507905c$var$INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const $e10297784507905c$var$STATUS_CODES = (0, ($parcel$interopDefault($lvwco$http))).STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class $e10297784507905c$export$9f633d56d7ec90d3 {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        $e10297784507905c$var$Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new $e10297784507905c$export$79b704688b15c0f4(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = $e10297784507905c$var$extractContentType(body);
            if (contentType) headers.append('Content-Type', contentType);
        }
        this[$e10297784507905c$var$INTERNALS$1] = {
            url: opts.url,
            status: status,
            statusText: opts.statusText || $e10297784507905c$var$STATUS_CODES[status],
            headers: headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[$e10297784507905c$var$INTERNALS$1].url || '';
    }
    get status() {
        return this[$e10297784507905c$var$INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[$e10297784507905c$var$INTERNALS$1].status >= 200 && this[$e10297784507905c$var$INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[$e10297784507905c$var$INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[$e10297784507905c$var$INTERNALS$1].statusText;
    }
    get headers() {
        return this[$e10297784507905c$var$INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new $e10297784507905c$export$9f633d56d7ec90d3($e10297784507905c$var$clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
$e10297784507905c$var$Body.mixIn($e10297784507905c$export$9f633d56d7ec90d3.prototype);
Object.defineProperties($e10297784507905c$export$9f633d56d7ec90d3.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty($e10297784507905c$export$9f633d56d7ec90d3.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const $e10297784507905c$var$INTERNALS$2 = Symbol('Request internals');
const $e10297784507905c$var$URL = (0, ($parcel$interopDefault($lvwco$url))).URL || (0, (/*@__PURE__*/$parcel$interopDefault($lBnxZ))).URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const $e10297784507905c$var$parse_url = (0, ($parcel$interopDefault($lvwco$url))).parse;
const $e10297784507905c$var$format_url = (0, ($parcel$interopDefault($lvwco$url))).format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function $e10297784507905c$var$parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) urlStr = new $e10297784507905c$var$URL(urlStr).toString();
    // Fallback to old implementation for arbitrary URLs
    return $e10297784507905c$var$parse_url(urlStr);
}
const $e10297784507905c$var$streamDestructionSupported = 'destroy' in (0, ($parcel$interopDefault($lvwco$stream))).Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function $e10297784507905c$var$isRequest(input) {
    return typeof input === 'object' && typeof input[$e10297784507905c$var$INTERNALS$2] === 'object';
}
function $e10297784507905c$var$isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class $e10297784507905c$export$7fa6c5b6f8193917 {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!$e10297784507905c$var$isRequest(input)) {
            if (input && input.href) // in order to support Node.js' Url objects; though WHATWG's URL objects
            // will fall into this branch also (since their `toString()` will return
            // `href` property anyway)
            parsedURL = $e10297784507905c$var$parseURL(input.href);
            else // coerce input to a string before attempting to parse
            parsedURL = $e10297784507905c$var$parseURL(`${input}`);
            input = {};
        } else parsedURL = $e10297784507905c$var$parseURL(input.url);
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || $e10297784507905c$var$isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) throw new TypeError('Request with GET/HEAD method cannot have body');
        let inputBody = init.body != null ? init.body : $e10297784507905c$var$isRequest(input) && input.body !== null ? $e10297784507905c$var$clone(input) : null;
        $e10297784507905c$var$Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new $e10297784507905c$export$79b704688b15c0f4(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = $e10297784507905c$var$extractContentType(inputBody);
            if (contentType) headers.append('Content-Type', contentType);
        }
        let signal = $e10297784507905c$var$isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !$e10297784507905c$var$isAbortSignal(signal)) throw new TypeError('Expected signal to be an instanceof AbortSignal');
        this[$e10297784507905c$var$INTERNALS$2] = {
            method: method,
            redirect: init.redirect || input.redirect || 'follow',
            headers: headers,
            parsedURL: parsedURL,
            signal: signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[$e10297784507905c$var$INTERNALS$2].method;
    }
    get url() {
        return $e10297784507905c$var$format_url(this[$e10297784507905c$var$INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[$e10297784507905c$var$INTERNALS$2].headers;
    }
    get redirect() {
        return this[$e10297784507905c$var$INTERNALS$2].redirect;
    }
    get signal() {
        return this[$e10297784507905c$var$INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new $e10297784507905c$export$7fa6c5b6f8193917(this);
    }
}
$e10297784507905c$var$Body.mixIn($e10297784507905c$export$7fa6c5b6f8193917.prototype);
Object.defineProperty($e10297784507905c$export$7fa6c5b6f8193917.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties($e10297784507905c$export$7fa6c5b6f8193917.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function $e10297784507905c$var$getNodeRequestOptions(request) {
    const parsedURL = request[$e10297784507905c$var$INTERNALS$2].parsedURL;
    const headers = new $e10297784507905c$export$79b704688b15c0f4(request[$e10297784507905c$var$INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) headers.set('Accept', '*/*');
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) throw new TypeError('Only absolute URLs are supported');
    if (!/^https?:$/.test(parsedURL.protocol)) throw new TypeError('Only HTTP(S) protocols are supported');
    if (request.signal && request.body instanceof (0, ($parcel$interopDefault($lvwco$stream))).Readable && !$e10297784507905c$var$streamDestructionSupported) throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) contentLengthValue = '0';
    if (request.body != null) {
        const totalBytes = $e10297784507905c$var$getTotalBytes(request);
        if (typeof totalBytes === 'number') contentLengthValue = String(totalBytes);
    }
    if (contentLengthValue) headers.set('Content-Length', contentLengthValue);
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) headers.set('Accept-Encoding', 'gzip,deflate');
    let agent = request.agent;
    if (typeof agent === 'function') agent = agent(parsedURL);
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: $e10297784507905c$var$exportNodeCompatibleHeaders(headers),
        agent: agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function $e10297784507905c$export$18b052ffd8c84d7(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
$e10297784507905c$export$18b052ffd8c84d7.prototype = Object.create(Error.prototype);
$e10297784507905c$export$18b052ffd8c84d7.prototype.constructor = $e10297784507905c$export$18b052ffd8c84d7;
$e10297784507905c$export$18b052ffd8c84d7.prototype.name = 'AbortError';
const $e10297784507905c$var$URL$1 = (0, ($parcel$interopDefault($lvwco$url))).URL || (0, (/*@__PURE__*/$parcel$interopDefault($lBnxZ))).URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const $e10297784507905c$var$PassThrough$1 = (0, ($parcel$interopDefault($lvwco$stream))).PassThrough;
const $e10297784507905c$var$isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new $e10297784507905c$var$URL$1(original).hostname;
    const dest = new $e10297784507905c$var$URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const $e10297784507905c$var$isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new $e10297784507905c$var$URL$1(original).protocol;
    const dest = new $e10297784507905c$var$URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function $e10297784507905c$var$fetch(url, opts) {
    // allow custom promise
    if (!$e10297784507905c$var$fetch.Promise) throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    $e10297784507905c$var$Body.Promise = $e10297784507905c$var$fetch.Promise;
    // wrap http.request into fetch
    return new $e10297784507905c$var$fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new $e10297784507905c$export$7fa6c5b6f8193917(url, opts);
        const options = $e10297784507905c$var$getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? (0, ($parcel$interopDefault($lvwco$https))) : (0, ($parcel$interopDefault($lvwco$http)))).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new $e10297784507905c$export$18b052ffd8c84d7('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof (0, ($parcel$interopDefault($lvwco$stream))).Readable) $e10297784507905c$var$destroyStream(request.body, error);
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) signal.addEventListener('abort', abortAndFinalize);
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) req.once('socket', function(socket) {
            reqTimeout = setTimeout(function() {
                reject(new $e10297784507905c$export$26e841bcf1aeb894(`network timeout at: ${request.url}`, 'request-timeout'));
                finalize();
            }, request.timeout);
        });
        req.on('error', function(err) {
            reject(new $e10297784507905c$export$26e841bcf1aeb894(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) $e10297784507905c$var$destroyStream(response.body, err);
            finalize();
        });
        $e10297784507905c$var$fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) return;
            if (response && response.body) $e10297784507905c$var$destroyStream(response.body, err);
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) // Before Node.js 14, pipeline() does not fully support async iterators and does not always
        // properly handle when the socket close/end events are out of order.
        req.on('socket', function(s) {
            s.addListener('close', function(hadError) {
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = s.listenerCount('data') > 0;
                // if end happened before close but the socket didn't emit an error, do it now
                if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    response.body.emit('error', err);
                }
            });
        });
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = $e10297784507905c$var$createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if ($e10297784507905c$var$fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new $e10297784507905c$var$URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new $e10297784507905c$export$26e841bcf1aeb894(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new $e10297784507905c$export$26e841bcf1aeb894(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) // handle corrupted header
                        try {
                            headers.set('Location', locationURL);
                        } catch (err) {
                            // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                            reject(err);
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) break;
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new $e10297784507905c$export$26e841bcf1aeb894(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new $e10297784507905c$export$79b704688b15c0f4(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!$e10297784507905c$var$isDomainOrSubdomain(request.url, locationURL) || !$e10297784507905c$var$isSameProtocol(request.url, locationURL)) for (const name of [
                            'authorization',
                            'www-authenticate',
                            'cookie',
                            'cookie2'
                        ])requestOpts.headers.delete(name);
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && $e10297784507905c$var$getTotalBytes(request) === null) {
                            reject(new $e10297784507905c$export$26e841bcf1aeb894('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve($e10297784507905c$var$fetch(new $e10297784507905c$export$7fa6c5b6f8193917(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new $e10297784507905c$var$PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: (0, ($parcel$interopDefault($lvwco$zlib))).Z_SYNC_FLUSH,
                finishFlush: (0, ($parcel$interopDefault($lvwco$zlib))).Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe((0, ($parcel$interopDefault($lvwco$zlib))).createGunzip(zlibOptions));
                response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new $e10297784507905c$var$PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) body = body.pipe((0, ($parcel$interopDefault($lvwco$zlib))).createInflate());
                    else body = body.pipe((0, ($parcel$interopDefault($lvwco$zlib))).createInflateRaw());
                    response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof (0, ($parcel$interopDefault($lvwco$zlib))).createBrotliDecompress === 'function') {
                body = body.pipe((0, ($parcel$interopDefault($lvwco$zlib))).createBrotliDecompress());
                response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new $e10297784507905c$export$9f633d56d7ec90d3(body, response_options);
            resolve(response);
        });
        $e10297784507905c$var$writeToStream(req, request);
    });
}
function $e10297784507905c$var$fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) response.once('close', function(hadError) {
            // tests for socket presence, as in some situations the
            // the 'socket' event is not triggered for the request
            // (happens in deno), avoids `TypeError`
            // if a data listener is still present we didn't end cleanly
            const hasDataListener = socket && socket.listenerCount('data') > 0;
            if (hasDataListener && !hadError) {
                const err = new Error('Premature close');
                err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                errorCallback(err);
            }
        });
    });
}
function $e10297784507905c$var$destroyStream(stream, err) {
    if (stream.destroy) stream.destroy(err);
    else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ $e10297784507905c$var$fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
$e10297784507905c$var$fetch.Promise = $parcel$global.Promise;
var $e10297784507905c$export$2e2bcd8739ae039 = $e10297784507905c$var$fetch;

});
parcelRegister("lBnxZ", function(module, exports) {
module.exports = new URL("public-api.8b758ba4.js", "file:" + __filename).toString();

});



