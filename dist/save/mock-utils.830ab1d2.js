require("./mock-errors.3465bf79.js");
require("./mock-symbols.ad0f5bc1.js");
require("./util.26715e80.js");
var $3AOyX$http = require("http");
var $3AOyX$util = require("util");


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
var $9a039ca88103e824$exports = {};
$9a039ca88103e824$exports = new URL("mock-errors.3465bf79.js", "file:" + __filename).toString();


var $837d1ca7a8eb0655$require$MockNotMatchedError = $9a039ca88103e824$exports.MockNotMatchedError;
var $0d30e0e0ff74ffa6$exports = {};
$0d30e0e0ff74ffa6$exports = new URL("mock-symbols.ad0f5bc1.js", "file:" + __filename).toString();


var $837d1ca7a8eb0655$require$kDispatches = $0d30e0e0ff74ffa6$exports.kDispatches;
var $837d1ca7a8eb0655$require$kMockAgent = $0d30e0e0ff74ffa6$exports.kMockAgent;
var $837d1ca7a8eb0655$require$kOriginalDispatch = $0d30e0e0ff74ffa6$exports.kOriginalDispatch;
var $837d1ca7a8eb0655$require$kOrigin = $0d30e0e0ff74ffa6$exports.kOrigin;
var $837d1ca7a8eb0655$require$kGetNetConnect = $0d30e0e0ff74ffa6$exports.kGetNetConnect;

var $1Z05w = parcelRequire("1Z05w");
var $837d1ca7a8eb0655$require$buildURL = $1Z05w.buildURL;
var $837d1ca7a8eb0655$require$nop = $1Z05w.nop;

var $837d1ca7a8eb0655$require$STATUS_CODES = $3AOyX$http.STATUS_CODES;

const { types: { isPromise: $837d1ca7a8eb0655$var$isPromise } } = $3AOyX$util;
function $837d1ca7a8eb0655$var$matchValue(match, value) {
    if (typeof match === 'string') return match === value;
    if (match instanceof RegExp) return match.test(value);
    if (typeof match === 'function') return match(value) === true;
    return false;
}
function $837d1ca7a8eb0655$var$lowerCaseEntries(headers) {
    return Object.fromEntries(Object.entries(headers).map(([headerName, headerValue])=>{
        return [
            headerName.toLocaleLowerCase(),
            headerValue
        ];
    }));
}
/**
 * @param {import('../../index').Headers|string[]|Record<string, string>} headers
 * @param {string} key
 */ function $837d1ca7a8eb0655$var$getHeaderByName(headers, key) {
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (headers[i].toLocaleLowerCase() === key.toLocaleLowerCase()) return headers[i + 1];
        }
        return undefined;
    } else if (typeof headers.get === 'function') return headers.get(key);
    else return $837d1ca7a8eb0655$var$lowerCaseEntries(headers)[key.toLocaleLowerCase()];
}
/** @param {string[]} headers */ function $837d1ca7a8eb0655$var$buildHeadersFromArray(headers) {
    const clone = headers.slice();
    const entries = [];
    for(let index = 0; index < clone.length; index += 2)entries.push([
        clone[index],
        clone[index + 1]
    ]);
    return Object.fromEntries(entries);
}
function $837d1ca7a8eb0655$var$matchHeaders(mockDispatch, headers) {
    if (typeof mockDispatch.headers === 'function') {
        if (Array.isArray(headers)) headers = $837d1ca7a8eb0655$var$buildHeadersFromArray(headers);
        return mockDispatch.headers(headers ? $837d1ca7a8eb0655$var$lowerCaseEntries(headers) : {});
    }
    if (typeof mockDispatch.headers === 'undefined') return true;
    if (typeof headers !== 'object' || typeof mockDispatch.headers !== 'object') return false;
    for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch.headers)){
        const headerValue = $837d1ca7a8eb0655$var$getHeaderByName(headers, matchHeaderName);
        if (!$837d1ca7a8eb0655$var$matchValue(matchHeaderValue, headerValue)) return false;
    }
    return true;
}
function $837d1ca7a8eb0655$var$safeUrl(path) {
    if (typeof path !== 'string') return path;
    const pathSegments = path.split('?');
    if (pathSegments.length !== 2) return path;
    const qp = new URLSearchParams(pathSegments.pop());
    qp.sort();
    return [
        ...pathSegments,
        qp.toString()
    ].join('?');
}
function $837d1ca7a8eb0655$var$matchKey(mockDispatch, { path: path, method: method, body: body, headers: headers }) {
    const pathMatch = $837d1ca7a8eb0655$var$matchValue(mockDispatch.path, path);
    const methodMatch = $837d1ca7a8eb0655$var$matchValue(mockDispatch.method, method);
    const bodyMatch = typeof mockDispatch.body !== 'undefined' ? $837d1ca7a8eb0655$var$matchValue(mockDispatch.body, body) : true;
    const headersMatch = $837d1ca7a8eb0655$var$matchHeaders(mockDispatch, headers);
    return pathMatch && methodMatch && bodyMatch && headersMatch;
}
function $837d1ca7a8eb0655$var$getResponseData(data) {
    if (Buffer.isBuffer(data)) return data;
    else if (typeof data === 'object') return JSON.stringify(data);
    else return data.toString();
}
function $837d1ca7a8eb0655$var$getMockDispatch(mockDispatches, key) {
    const basePath = key.query ? $837d1ca7a8eb0655$require$buildURL(key.path, key.query) : key.path;
    const resolvedPath = typeof basePath === 'string' ? $837d1ca7a8eb0655$var$safeUrl(basePath) : basePath;
    // Match path
    let matchedMockDispatches = mockDispatches.filter(({ consumed: consumed })=>!consumed).filter(({ path: path })=>$837d1ca7a8eb0655$var$matchValue($837d1ca7a8eb0655$var$safeUrl(path), resolvedPath));
    if (matchedMockDispatches.length === 0) throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
    // Match method
    matchedMockDispatches = matchedMockDispatches.filter(({ method: method })=>$837d1ca7a8eb0655$var$matchValue(method, key.method));
    if (matchedMockDispatches.length === 0) throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`Mock dispatch not matched for method '${key.method}'`);
    // Match body
    matchedMockDispatches = matchedMockDispatches.filter(({ body: body })=>typeof body !== 'undefined' ? $837d1ca7a8eb0655$var$matchValue(body, key.body) : true);
    if (matchedMockDispatches.length === 0) throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`Mock dispatch not matched for body '${key.body}'`);
    // Match headers
    matchedMockDispatches = matchedMockDispatches.filter((mockDispatch)=>$837d1ca7a8eb0655$var$matchHeaders(mockDispatch, key.headers));
    if (matchedMockDispatches.length === 0) throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`Mock dispatch not matched for headers '${typeof key.headers === 'object' ? JSON.stringify(key.headers) : key.headers}'`);
    return matchedMockDispatches[0];
}
function $837d1ca7a8eb0655$var$addMockDispatch(mockDispatches, key, data) {
    const baseData = {
        timesInvoked: 0,
        times: 1,
        persist: false,
        consumed: false
    };
    const replyData = typeof data === 'function' ? {
        callback: data
    } : {
        ...data
    };
    const newMockDispatch = {
        ...baseData,
        ...key,
        pending: true,
        data: {
            error: null,
            ...replyData
        }
    };
    mockDispatches.push(newMockDispatch);
    return newMockDispatch;
}
function $837d1ca7a8eb0655$var$deleteMockDispatch(mockDispatches, key) {
    const index = mockDispatches.findIndex((dispatch)=>{
        if (!dispatch.consumed) return false;
        return $837d1ca7a8eb0655$var$matchKey(dispatch, key);
    });
    if (index !== -1) mockDispatches.splice(index, 1);
}
function $837d1ca7a8eb0655$var$buildKey(opts) {
    const { path: path, method: method, body: body, headers: headers, query: query } = opts;
    return {
        path: path,
        method: method,
        body: body,
        headers: headers,
        query: query
    };
}
function $837d1ca7a8eb0655$var$generateKeyValues(data) {
    return Object.entries(data).reduce((keyValuePairs, [key, value])=>[
            ...keyValuePairs,
            Buffer.from(`${key}`),
            Array.isArray(value) ? value.map((x)=>Buffer.from(`${x}`)) : Buffer.from(`${value}`)
        ], []);
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @param {number} statusCode
 */ function $837d1ca7a8eb0655$var$getStatusText(statusCode) {
    return $837d1ca7a8eb0655$require$STATUS_CODES[statusCode] || 'unknown';
}
async function $837d1ca7a8eb0655$var$getResponse(body) {
    const buffers = [];
    for await (const data of body)buffers.push(data);
    return Buffer.concat(buffers).toString('utf8');
}
/**
 * Mock dispatch function used to simulate undici dispatches
 */ function $837d1ca7a8eb0655$var$mockDispatch(opts, handler) {
    // Get mock dispatch from built key
    const key = $837d1ca7a8eb0655$var$buildKey(opts);
    const mockDispatch = $837d1ca7a8eb0655$var$getMockDispatch(this[$837d1ca7a8eb0655$require$kDispatches], key);
    mockDispatch.timesInvoked++;
    // Here's where we resolve a callback if a callback is present for the dispatch data.
    if (mockDispatch.data.callback) mockDispatch.data = {
        ...mockDispatch.data,
        ...mockDispatch.data.callback(opts)
    };
    // Parse mockDispatch data
    const { data: { statusCode: statusCode, data: data, headers: headers, trailers: trailers, error: error }, delay: delay, persist: persist } = mockDispatch;
    const { timesInvoked: timesInvoked, times: times } = mockDispatch;
    // If it's used up and not persistent, mark as consumed
    mockDispatch.consumed = !persist && timesInvoked >= times;
    mockDispatch.pending = timesInvoked < times;
    // If specified, trigger dispatch error
    if (error !== null) {
        $837d1ca7a8eb0655$var$deleteMockDispatch(this[$837d1ca7a8eb0655$require$kDispatches], key);
        handler.onError(error);
        return true;
    }
    // Handle the request with a delay if necessary
    if (typeof delay === 'number' && delay > 0) setTimeout(()=>{
        handleReply(this[$837d1ca7a8eb0655$require$kDispatches]);
    }, delay);
    else handleReply(this[$837d1ca7a8eb0655$require$kDispatches]);
    function handleReply(mockDispatches, _data = data) {
        // fetch's HeadersList is a 1D string array
        const optsHeaders = Array.isArray(opts.headers) ? $837d1ca7a8eb0655$var$buildHeadersFromArray(opts.headers) : opts.headers;
        const body = typeof _data === 'function' ? _data({
            ...opts,
            headers: optsHeaders
        }) : _data;
        // util.types.isPromise is likely needed for jest.
        if ($837d1ca7a8eb0655$var$isPromise(body)) {
            // If handleReply is asynchronous, throwing an error
            // in the callback will reject the promise, rather than
            // synchronously throw the error, which breaks some tests.
            // Rather, we wait for the callback to resolve if it is a
            // promise, and then re-run handleReply with the new body.
            body.then((newData)=>handleReply(mockDispatches, newData));
            return;
        }
        const responseData = $837d1ca7a8eb0655$var$getResponseData(body);
        const responseHeaders = $837d1ca7a8eb0655$var$generateKeyValues(headers);
        const responseTrailers = $837d1ca7a8eb0655$var$generateKeyValues(trailers);
        handler.abort = $837d1ca7a8eb0655$require$nop;
        handler.onHeaders(statusCode, responseHeaders, resume, $837d1ca7a8eb0655$var$getStatusText(statusCode));
        handler.onData(Buffer.from(responseData));
        handler.onComplete(responseTrailers);
        $837d1ca7a8eb0655$var$deleteMockDispatch(mockDispatches, key);
    }
    function resume() {}
    return true;
}
function $837d1ca7a8eb0655$var$buildMockDispatch() {
    const agent = this[$837d1ca7a8eb0655$require$kMockAgent];
    const origin = this[$837d1ca7a8eb0655$require$kOrigin];
    const originalDispatch = this[$837d1ca7a8eb0655$require$kOriginalDispatch];
    return function dispatch(opts, handler) {
        if (agent.isMockActive) try {
            $837d1ca7a8eb0655$var$mockDispatch.call(this, opts, handler);
        } catch (error) {
            if (error instanceof $837d1ca7a8eb0655$require$MockNotMatchedError) {
                const netConnect = agent[$837d1ca7a8eb0655$require$kGetNetConnect]();
                if (netConnect === false) throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
                if ($837d1ca7a8eb0655$var$checkNetConnect(netConnect, origin)) originalDispatch.call(this, opts, handler);
                else throw new $837d1ca7a8eb0655$require$MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
            } else throw error;
        }
        else originalDispatch.call(this, opts, handler);
    };
}
function $837d1ca7a8eb0655$var$checkNetConnect(netConnect, origin) {
    const url = new URL(origin);
    if (netConnect === true) return true;
    else if (Array.isArray(netConnect) && netConnect.some((matcher)=>$837d1ca7a8eb0655$var$matchValue(matcher, url.host))) return true;
    return false;
}
function $837d1ca7a8eb0655$var$buildMockOptions(opts) {
    if (opts) {
        const { agent: agent, ...mockOptions } = opts;
        return mockOptions;
    }
}
module.exports = {
    getResponseData: $837d1ca7a8eb0655$var$getResponseData,
    getMockDispatch: $837d1ca7a8eb0655$var$getMockDispatch,
    addMockDispatch: $837d1ca7a8eb0655$var$addMockDispatch,
    deleteMockDispatch: $837d1ca7a8eb0655$var$deleteMockDispatch,
    buildKey: $837d1ca7a8eb0655$var$buildKey,
    generateKeyValues: $837d1ca7a8eb0655$var$generateKeyValues,
    matchValue: $837d1ca7a8eb0655$var$matchValue,
    getResponse: $837d1ca7a8eb0655$var$getResponse,
    getStatusText: $837d1ca7a8eb0655$var$getStatusText,
    mockDispatch: $837d1ca7a8eb0655$var$mockDispatch,
    buildMockDispatch: $837d1ca7a8eb0655$var$buildMockDispatch,
    checkNetConnect: $837d1ca7a8eb0655$var$checkNetConnect,
    buildMockOptions: $837d1ca7a8eb0655$var$buildMockOptions,
    getHeaderByName: $837d1ca7a8eb0655$var$getHeaderByName
};


//# sourceMappingURL=mock-utils.830ab1d2.js.map
