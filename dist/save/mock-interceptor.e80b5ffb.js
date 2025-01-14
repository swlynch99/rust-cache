require("./mock-utils.616f52e7.js");
require("./mock-symbols.39ce3f7c.js");
require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");


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
var $fa065238f6f9f9d3$export$fb1b189d8a131a8b;
var $fa065238f6f9f9d3$export$61f2724da7650995;
'use strict';

var $iAgtD = parcelRequire("iAgtD");
var $fa065238f6f9f9d3$require$getResponseData = $iAgtD.getResponseData;
var $fa065238f6f9f9d3$require$buildKey = $iAgtD.buildKey;
var $fa065238f6f9f9d3$require$addMockDispatch = $iAgtD.addMockDispatch;

var $8dXRR = parcelRequire("8dXRR");
var $fa065238f6f9f9d3$require$kDispatches = $8dXRR.kDispatches;
var $fa065238f6f9f9d3$require$kDispatchKey = $8dXRR.kDispatchKey;
var $fa065238f6f9f9d3$require$kDefaultHeaders = $8dXRR.kDefaultHeaders;
var $fa065238f6f9f9d3$require$kDefaultTrailers = $8dXRR.kDefaultTrailers;
var $fa065238f6f9f9d3$require$kContentLength = $8dXRR.kContentLength;
var $fa065238f6f9f9d3$require$kMockDispatch = $8dXRR.kMockDispatch;

var $hA22O = parcelRequire("hA22O");
var $fa065238f6f9f9d3$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $iiSZx = parcelRequire("iiSZx");
var $fa065238f6f9f9d3$require$buildURL = $iiSZx.buildURL;
/**
 * Defines the scope API for an interceptor reply
 */ class $fa065238f6f9f9d3$var$MockScope {
    constructor(mockDispatch){
        this[$fa065238f6f9f9d3$require$kMockDispatch] = mockDispatch;
    }
    /**
   * Delay a reply by a set amount in ms.
   */ delay(waitInMs) {
        if (typeof waitInMs !== 'number' || !Number.isInteger(waitInMs) || waitInMs <= 0) throw new $fa065238f6f9f9d3$require$InvalidArgumentError('waitInMs must be a valid integer > 0');
        this[$fa065238f6f9f9d3$require$kMockDispatch].delay = waitInMs;
        return this;
    }
    /**
   * For a defined reply, never mark as consumed.
   */ persist() {
        this[$fa065238f6f9f9d3$require$kMockDispatch].persist = true;
        return this;
    }
    /**
   * Allow one to define a reply for a set amount of matching requests.
   */ times(repeatTimes) {
        if (typeof repeatTimes !== 'number' || !Number.isInteger(repeatTimes) || repeatTimes <= 0) throw new $fa065238f6f9f9d3$require$InvalidArgumentError('repeatTimes must be a valid integer > 0');
        this[$fa065238f6f9f9d3$require$kMockDispatch].times = repeatTimes;
        return this;
    }
}
/**
 * Defines an interceptor for a Mock
 */ class $fa065238f6f9f9d3$var$MockInterceptor {
    constructor(opts, mockDispatches){
        if (typeof opts !== 'object') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('opts must be an object');
        if (typeof opts.path === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('opts.path must be defined');
        if (typeof opts.method === 'undefined') opts.method = 'GET';
        // See https://github.com/nodejs/undici/issues/1245
        // As per RFC 3986, clients are not supposed to send URI
        // fragments to servers when they retrieve a document,
        if (typeof opts.path === 'string') {
            if (opts.query) opts.path = $fa065238f6f9f9d3$require$buildURL(opts.path, opts.query);
            else {
                // Matches https://github.com/nodejs/undici/blob/main/lib/fetch/index.js#L1811
                const parsedURL = new URL(opts.path, 'data://');
                opts.path = parsedURL.pathname + parsedURL.search;
            }
        }
        if (typeof opts.method === 'string') opts.method = opts.method.toUpperCase();
        this[$fa065238f6f9f9d3$require$kDispatchKey] = $fa065238f6f9f9d3$require$buildKey(opts);
        this[$fa065238f6f9f9d3$require$kDispatches] = mockDispatches;
        this[$fa065238f6f9f9d3$require$kDefaultHeaders] = {};
        this[$fa065238f6f9f9d3$require$kDefaultTrailers] = {};
        this[$fa065238f6f9f9d3$require$kContentLength] = false;
    }
    createMockScopeDispatchData(statusCode, data, responseOptions = {}) {
        const responseData = $fa065238f6f9f9d3$require$getResponseData(data);
        const contentLength = this[$fa065238f6f9f9d3$require$kContentLength] ? {
            'content-length': responseData.length
        } : {};
        const headers = {
            ...this[$fa065238f6f9f9d3$require$kDefaultHeaders],
            ...contentLength,
            ...responseOptions.headers
        };
        const trailers = {
            ...this[$fa065238f6f9f9d3$require$kDefaultTrailers],
            ...responseOptions.trailers
        };
        return {
            statusCode: statusCode,
            data: data,
            headers: headers,
            trailers: trailers
        };
    }
    validateReplyParameters(statusCode, data, responseOptions) {
        if (typeof statusCode === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('statusCode must be defined');
        if (typeof data === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('data must be defined');
        if (typeof responseOptions !== 'object') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('responseOptions must be an object');
    }
    /**
   * Mock an undici request with a defined reply.
   */ reply(replyData) {
        // Values of reply aren't available right now as they
        // can only be available when the reply callback is invoked.
        if (typeof replyData === 'function') {
            // We'll first wrap the provided callback in another function,
            // this function will properly resolve the data from the callback
            // when invoked.
            const wrappedDefaultsCallback = (opts)=>{
                // Our reply options callback contains the parameter for statusCode, data and options.
                const resolvedData = replyData(opts);
                // Check if it is in the right format
                if (typeof resolvedData !== 'object') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('reply options callback must return an object');
                const { statusCode: statusCode, data: data = '', responseOptions: responseOptions = {} } = resolvedData;
                this.validateReplyParameters(statusCode, data, responseOptions);
                // Since the values can be obtained immediately we return them
                // from this higher order function that will be resolved later.
                return {
                    ...this.createMockScopeDispatchData(statusCode, data, responseOptions)
                };
            };
            // Add usual dispatch data, but this time set the data parameter to function that will eventually provide data.
            const newMockDispatch = $fa065238f6f9f9d3$require$addMockDispatch(this[$fa065238f6f9f9d3$require$kDispatches], this[$fa065238f6f9f9d3$require$kDispatchKey], wrappedDefaultsCallback);
            return new $fa065238f6f9f9d3$var$MockScope(newMockDispatch);
        }
        // We can have either one or three parameters, if we get here,
        // we should have 1-3 parameters. So we spread the arguments of
        // this function to obtain the parameters, since replyData will always
        // just be the statusCode.
        const [statusCode, data = '', responseOptions = {}] = [
            ...arguments
        ];
        this.validateReplyParameters(statusCode, data, responseOptions);
        // Send in-already provided data like usual
        const dispatchData = this.createMockScopeDispatchData(statusCode, data, responseOptions);
        const newMockDispatch = $fa065238f6f9f9d3$require$addMockDispatch(this[$fa065238f6f9f9d3$require$kDispatches], this[$fa065238f6f9f9d3$require$kDispatchKey], dispatchData);
        return new $fa065238f6f9f9d3$var$MockScope(newMockDispatch);
    }
    /**
   * Mock an undici request with a defined error.
   */ replyWithError(error) {
        if (typeof error === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('error must be defined');
        const newMockDispatch = $fa065238f6f9f9d3$require$addMockDispatch(this[$fa065238f6f9f9d3$require$kDispatches], this[$fa065238f6f9f9d3$require$kDispatchKey], {
            error: error
        });
        return new $fa065238f6f9f9d3$var$MockScope(newMockDispatch);
    }
    /**
   * Set default reply headers on the interceptor for subsequent replies
   */ defaultReplyHeaders(headers) {
        if (typeof headers === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('headers must be defined');
        this[$fa065238f6f9f9d3$require$kDefaultHeaders] = headers;
        return this;
    }
    /**
   * Set default reply trailers on the interceptor for subsequent replies
   */ defaultReplyTrailers(trailers) {
        if (typeof trailers === 'undefined') throw new $fa065238f6f9f9d3$require$InvalidArgumentError('trailers must be defined');
        this[$fa065238f6f9f9d3$require$kDefaultTrailers] = trailers;
        return this;
    }
    /**
   * Set reply content length header for replies on the interceptor
   */ replyContentLength() {
        this[$fa065238f6f9f9d3$require$kContentLength] = true;
        return this;
    }
}
$fa065238f6f9f9d3$export$fb1b189d8a131a8b = $fa065238f6f9f9d3$var$MockInterceptor;
$fa065238f6f9f9d3$export$61f2724da7650995 = $fa065238f6f9f9d3$var$MockScope;


