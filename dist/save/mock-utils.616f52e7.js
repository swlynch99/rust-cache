require("./mock-errors.89a97636.js");
require("./mock-symbols.39ce3f7c.js");
require("./util.c7a5ec55.js");
var $bweQg$http = require("http");
var $bweQg$util = require("util");


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
var $29136d16e6658535$exports = {};
$29136d16e6658535$exports = new URL("mock-errors.89a97636.js", "file:" + __filename).toString();


var $d8785ec25ba82225$require$MockNotMatchedError = $29136d16e6658535$exports.MockNotMatchedError;
var $b15f60b5517a7520$exports = {};
$b15f60b5517a7520$exports = new URL("mock-symbols.39ce3f7c.js", "file:" + __filename).toString();


var $d8785ec25ba82225$require$kDispatches = $b15f60b5517a7520$exports.kDispatches;
var $d8785ec25ba82225$require$kMockAgent = $b15f60b5517a7520$exports.kMockAgent;
var $d8785ec25ba82225$require$kOriginalDispatch = $b15f60b5517a7520$exports.kOriginalDispatch;
var $d8785ec25ba82225$require$kOrigin = $b15f60b5517a7520$exports.kOrigin;
var $d8785ec25ba82225$require$kGetNetConnect = $b15f60b5517a7520$exports.kGetNetConnect;

var $iiSZx = parcelRequire("iiSZx");
var $d8785ec25ba82225$require$buildURL = $iiSZx.buildURL;
var $d8785ec25ba82225$require$nop = $iiSZx.nop;

var $d8785ec25ba82225$require$STATUS_CODES = $bweQg$http.STATUS_CODES;

const { types: { isPromise: $d8785ec25ba82225$var$isPromise } } = $bweQg$util;
function $d8785ec25ba82225$var$matchValue(match, value) {
    if (typeof match === 'string') return match === value;
    if (match instanceof RegExp) return match.test(value);
    if (typeof match === 'function') return match(value) === true;
    return false;
}
function $d8785ec25ba82225$var$lowerCaseEntries(headers) {
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
 */ function $d8785ec25ba82225$var$getHeaderByName(headers, key) {
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (headers[i].toLocaleLowerCase() === key.toLocaleLowerCase()) return headers[i + 1];
        }
        return undefined;
    } else if (typeof headers.get === 'function') return headers.get(key);
    else return $d8785ec25ba82225$var$lowerCaseEntries(headers)[key.toLocaleLowerCase()];
}
/** @param {string[]} headers */ function $d8785ec25ba82225$var$buildHeadersFromArray(headers) {
    const clone = headers.slice();
    const entries = [];
    for(let index = 0; index < clone.length; index += 2)entries.push([
        clone[index],
        clone[index + 1]
    ]);
    return Object.fromEntries(entries);
}
function $d8785ec25ba82225$var$matchHeaders(mockDispatch, headers) {
    if (typeof mockDispatch.headers === 'function') {
        if (Array.isArray(headers)) headers = $d8785ec25ba82225$var$buildHeadersFromArray(headers);
        return mockDispatch.headers(headers ? $d8785ec25ba82225$var$lowerCaseEntries(headers) : {});
    }
    if (typeof mockDispatch.headers === 'undefined') return true;
    if (typeof headers !== 'object' || typeof mockDispatch.headers !== 'object') return false;
    for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch.headers)){
        const headerValue = $d8785ec25ba82225$var$getHeaderByName(headers, matchHeaderName);
        if (!$d8785ec25ba82225$var$matchValue(matchHeaderValue, headerValue)) return false;
    }
    return true;
}
function $d8785ec25ba82225$var$safeUrl(path) {
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
function $d8785ec25ba82225$var$matchKey(mockDispatch, { path: path, method: method, body: body, headers: headers }) {
    const pathMatch = $d8785ec25ba82225$var$matchValue(mockDispatch.path, path);
    const methodMatch = $d8785ec25ba82225$var$matchValue(mockDispatch.method, method);
    const bodyMatch = typeof mockDispatch.body !== 'undefined' ? $d8785ec25ba82225$var$matchValue(mockDispatch.body, body) : true;
    const headersMatch = $d8785ec25ba82225$var$matchHeaders(mockDispatch, headers);
    return pathMatch && methodMatch && bodyMatch && headersMatch;
}
function $d8785ec25ba82225$var$getResponseData(data) {
    if (Buffer.isBuffer(data)) return data;
    else if (typeof data === 'object') return JSON.stringify(data);
    else return data.toString();
}
function $d8785ec25ba82225$var$getMockDispatch(mockDispatches, key) {
    const basePath = key.query ? $d8785ec25ba82225$require$buildURL(key.path, key.query) : key.path;
    const resolvedPath = typeof basePath === 'string' ? $d8785ec25ba82225$var$safeUrl(basePath) : basePath;
    // Match path
    let matchedMockDispatches = mockDispatches.filter(({ consumed: consumed })=>!consumed).filter(({ path: path })=>$d8785ec25ba82225$var$matchValue($d8785ec25ba82225$var$safeUrl(path), resolvedPath));
    if (matchedMockDispatches.length === 0) throw new $d8785ec25ba82225$require$MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
    // Match method
    matchedMockDispatches = matchedMockDispatches.filter(({ method: method })=>$d8785ec25ba82225$var$matchValue(method, key.method));
    if (matchedMockDispatches.length === 0) throw new $d8785ec25ba82225$require$MockNotMatchedError(`Mock dispatch not matched for method '${key.method}'`);
    // Match body
    matchedMockDispatches = matchedMockDispatches.filter(({ body: body })=>typeof body !== 'undefined' ? $d8785ec25ba82225$var$matchValue(body, key.body) : true);
    if (matchedMockDispatches.length === 0) throw new $d8785ec25ba82225$require$MockNotMatchedError(`Mock dispatch not matched for body '${key.body}'`);
    // Match headers
    matchedMockDispatches = matchedMockDispatches.filter((mockDispatch)=>$d8785ec25ba82225$var$matchHeaders(mockDispatch, key.headers));
    if (matchedMockDispatches.length === 0) throw new $d8785ec25ba82225$require$MockNotMatchedError(`Mock dispatch not matched for headers '${typeof key.headers === 'object' ? JSON.stringify(key.headers) : key.headers}'`);
    return matchedMockDispatches[0];
}
function $d8785ec25ba82225$var$addMockDispatch(mockDispatches, key, data) {
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
function $d8785ec25ba82225$var$deleteMockDispatch(mockDispatches, key) {
    const index = mockDispatches.findIndex((dispatch)=>{
        if (!dispatch.consumed) return false;
        return $d8785ec25ba82225$var$matchKey(dispatch, key);
    });
    if (index !== -1) mockDispatches.splice(index, 1);
}
function $d8785ec25ba82225$var$buildKey(opts) {
    const { path: path, method: method, body: body, headers: headers, query: query } = opts;
    return {
        path: path,
        method: method,
        body: body,
        headers: headers,
        query: query
    };
}
function $d8785ec25ba82225$var$generateKeyValues(data) {
    return Object.entries(data).reduce((keyValuePairs, [key, value])=>[
            ...keyValuePairs,
            Buffer.from(`${key}`),
            Array.isArray(value) ? value.map((x)=>Buffer.from(`${x}`)) : Buffer.from(`${value}`)
        ], []);
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @param {number} statusCode
 */ function $d8785ec25ba82225$var$getStatusText(statusCode) {
    return $d8785ec25ba82225$require$STATUS_CODES[statusCode] || 'unknown';
}
async function $d8785ec25ba82225$var$getResponse(body) {
    const buffers = [];
    for await (const data of body)buffers.push(data);
    return Buffer.concat(buffers).toString('utf8');
}
/**
 * Mock dispatch function used to simulate undici dispatches
 */ function $d8785ec25ba82225$var$mockDispatch(opts, handler) {
    // Get mock dispatch from built key
    const key = $d8785ec25ba82225$var$buildKey(opts);
    const mockDispatch = $d8785ec25ba82225$var$getMockDispatch(this[$d8785ec25ba82225$require$kDispatches], key);
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
        $d8785ec25ba82225$var$deleteMockDispatch(this[$d8785ec25ba82225$require$kDispatches], key);
        handler.onError(error);
        return true;
    }
    // Handle the request with a delay if necessary
    if (typeof delay === 'number' && delay > 0) setTimeout(()=>{
        handleReply(this[$d8785ec25ba82225$require$kDispatches]);
    }, delay);
    else handleReply(this[$d8785ec25ba82225$require$kDispatches]);
    function handleReply(mockDispatches, _data = data) {
        // fetch's HeadersList is a 1D string array
        const optsHeaders = Array.isArray(opts.headers) ? $d8785ec25ba82225$var$buildHeadersFromArray(opts.headers) : opts.headers;
        const body = typeof _data === 'function' ? _data({
            ...opts,
            headers: optsHeaders
        }) : _data;
        // util.types.isPromise is likely needed for jest.
        if ($d8785ec25ba82225$var$isPromise(body)) {
            // If handleReply is asynchronous, throwing an error
            // in the callback will reject the promise, rather than
            // synchronously throw the error, which breaks some tests.
            // Rather, we wait for the callback to resolve if it is a
            // promise, and then re-run handleReply with the new body.
            body.then((newData)=>handleReply(mockDispatches, newData));
            return;
        }
        const responseData = $d8785ec25ba82225$var$getResponseData(body);
        const responseHeaders = $d8785ec25ba82225$var$generateKeyValues(headers);
        const responseTrailers = $d8785ec25ba82225$var$generateKeyValues(trailers);
        handler.abort = $d8785ec25ba82225$require$nop;
        handler.onHeaders(statusCode, responseHeaders, resume, $d8785ec25ba82225$var$getStatusText(statusCode));
        handler.onData(Buffer.from(responseData));
        handler.onComplete(responseTrailers);
        $d8785ec25ba82225$var$deleteMockDispatch(mockDispatches, key);
    }
    function resume() {}
    return true;
}
function $d8785ec25ba82225$var$buildMockDispatch() {
    const agent = this[$d8785ec25ba82225$require$kMockAgent];
    const origin = this[$d8785ec25ba82225$require$kOrigin];
    const originalDispatch = this[$d8785ec25ba82225$require$kOriginalDispatch];
    return function dispatch(opts, handler) {
        if (agent.isMockActive) try {
            $d8785ec25ba82225$var$mockDispatch.call(this, opts, handler);
        } catch (error) {
            if (error instanceof $d8785ec25ba82225$require$MockNotMatchedError) {
                const netConnect = agent[$d8785ec25ba82225$require$kGetNetConnect]();
                if (netConnect === false) throw new $d8785ec25ba82225$require$MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
                if ($d8785ec25ba82225$var$checkNetConnect(netConnect, origin)) originalDispatch.call(this, opts, handler);
                else throw new $d8785ec25ba82225$require$MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
            } else throw error;
        }
        else originalDispatch.call(this, opts, handler);
    };
}
function $d8785ec25ba82225$var$checkNetConnect(netConnect, origin) {
    const url = new URL(origin);
    if (netConnect === true) return true;
    else if (Array.isArray(netConnect) && netConnect.some((matcher)=>$d8785ec25ba82225$var$matchValue(matcher, url.host))) return true;
    return false;
}
function $d8785ec25ba82225$var$buildMockOptions(opts) {
    if (opts) {
        const { agent: agent, ...mockOptions } = opts;
        return mockOptions;
    }
}
module.exports = {
    getResponseData: $d8785ec25ba82225$var$getResponseData,
    getMockDispatch: $d8785ec25ba82225$var$getMockDispatch,
    addMockDispatch: $d8785ec25ba82225$var$addMockDispatch,
    deleteMockDispatch: $d8785ec25ba82225$var$deleteMockDispatch,
    buildKey: $d8785ec25ba82225$var$buildKey,
    generateKeyValues: $d8785ec25ba82225$var$generateKeyValues,
    matchValue: $d8785ec25ba82225$var$matchValue,
    getResponse: $d8785ec25ba82225$var$getResponse,
    getStatusText: $d8785ec25ba82225$var$getStatusText,
    mockDispatch: $d8785ec25ba82225$var$mockDispatch,
    buildMockDispatch: $d8785ec25ba82225$var$buildMockDispatch,
    checkNetConnect: $d8785ec25ba82225$var$checkNetConnect,
    buildMockOptions: $d8785ec25ba82225$var$buildMockOptions,
    getHeaderByName: $d8785ec25ba82225$var$getHeaderByName
};


