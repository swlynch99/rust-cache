require("./symbols.063ce0fc.js");
require("./util.8ce55ee5.js");
require("./util.26715e80.js");
require("./symbols.c5dd8fde.js");
require("./webidl.35d389df.js");
require("./response.b4e7d51a.js");
require("./request.5e9cadd2.js");
require("./symbols.be9b962d.js");
require("./fetch.058a13c7.js");
require("./util.1c38d6ed.js");
require("./global.206e7c2a.js");
var $5jrvO$assert = require("assert");


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

var $eII0k = parcelRequire("eII0k");
var $b7c56690e8cc44b9$require$kConstruct = $eII0k.kConstruct;
var $7f727f19161edaae$exports = {};
$7f727f19161edaae$exports = new URL("util.8ce55ee5.js", "file:" + __filename).toString();


var $b7c56690e8cc44b9$require$urlEquals = $7f727f19161edaae$exports.urlEquals;
var $b7c56690e8cc44b9$require$getFieldValues = $7f727f19161edaae$exports.fieldValues;

var $1Z05w = parcelRequire("1Z05w");
var $b7c56690e8cc44b9$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;
var $b7c56690e8cc44b9$require$isDisturbed = $1Z05w.isDisturbed;

var $bMqEt = parcelRequire("bMqEt");
var $b7c56690e8cc44b9$require$kHeadersList = $bMqEt.kHeadersList;

var $iPB2Q = parcelRequire("iPB2Q");
var $b7c56690e8cc44b9$require$webidl = $iPB2Q.webidl;

var $kwlGk = parcelRequire("kwlGk");
var $b7c56690e8cc44b9$require$Response = $kwlGk.Response;
var $b7c56690e8cc44b9$require$cloneResponse = $kwlGk.cloneResponse;

var $84pCF = parcelRequire("84pCF");
var $b7c56690e8cc44b9$require$Request = $84pCF.Request;

var $gP2yv = parcelRequire("gP2yv");
var $b7c56690e8cc44b9$require$kState = $gP2yv.kState;
var $b7c56690e8cc44b9$require$kHeaders = $gP2yv.kHeaders;
var $b7c56690e8cc44b9$require$kGuard = $gP2yv.kGuard;
var $b7c56690e8cc44b9$require$kRealm = $gP2yv.kRealm;

var $66LJo = parcelRequire("66LJo");
var $b7c56690e8cc44b9$require$fetching = $66LJo.fetching;

var $8S4OX = parcelRequire("8S4OX");
var $b7c56690e8cc44b9$require$urlIsHttpHttpsScheme = $8S4OX.urlIsHttpHttpsScheme;
var $b7c56690e8cc44b9$require$createDeferredPromise = $8S4OX.createDeferredPromise;
var $b7c56690e8cc44b9$require$readAllBytes = $8S4OX.readAllBytes;


var $byZ3g = parcelRequire("byZ3g");
var $b7c56690e8cc44b9$require$getGlobalDispatcher = $byZ3g.getGlobalDispatcher;
/**
 * @see https://w3c.github.io/ServiceWorker/#dfn-cache-batch-operation
 * @typedef {Object} CacheBatchOperation
 * @property {'delete' | 'put'} type
 * @property {any} request
 * @property {any} response
 * @property {import('../../types/cache').CacheQueryOptions} options
 */ /**
 * @see https://w3c.github.io/ServiceWorker/#dfn-request-response-list
 * @typedef {[any, any][]} requestResponseList
 */ class $b7c56690e8cc44b9$var$Cache {
    /**
   * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
   * @type {requestResponseList}
   */ #relevantRequestResponseList;
    constructor(){
        if (arguments[0] !== $b7c56690e8cc44b9$require$kConstruct) $b7c56690e8cc44b9$require$webidl.illegalConstructor();
        this.#relevantRequestResponseList = arguments[1];
    }
    async match(request, options = {}) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        $b7c56690e8cc44b9$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Cache.match'
        });
        request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        options = $b7c56690e8cc44b9$require$webidl.converters.CacheQueryOptions(options);
        const p = await this.matchAll(request, options);
        if (p.length === 0) return;
        return p[0];
    }
    async matchAll(request, options = {}) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        if (request !== undefined) request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        options = $b7c56690e8cc44b9$require$webidl.converters.CacheQueryOptions(options);
        // 1.
        let r = null;
        // 2.
        if (request !== undefined) {
            if (request instanceof $b7c56690e8cc44b9$require$Request) {
                // 2.1.1
                r = request[$b7c56690e8cc44b9$require$kState];
                // 2.1.2
                if (r.method !== 'GET' && !options.ignoreMethod) return [];
            } else if (typeof request === 'string') // 2.2.1
            r = new $b7c56690e8cc44b9$require$Request(request)[$b7c56690e8cc44b9$require$kState];
        }
        // 5.
        // 5.1
        const responses = [];
        // 5.2
        if (request === undefined) // 5.2.1
        for (const requestResponse of this.#relevantRequestResponseList)responses.push(requestResponse[1]);
        else {
            // 5.3.1
            const requestResponses = this.#queryCache(r, options);
            // 5.3.2
            for (const requestResponse of requestResponses)responses.push(requestResponse[1]);
        }
        // 5.4
        // We don't implement CORs so we don't need to loop over the responses, yay!
        // 5.5.1
        const responseList = [];
        // 5.5.2
        for (const response of responses){
            // 5.5.2.1
            const responseObject = new $b7c56690e8cc44b9$require$Response(response.body?.source ?? null);
            const body = responseObject[$b7c56690e8cc44b9$require$kState].body;
            responseObject[$b7c56690e8cc44b9$require$kState] = response;
            responseObject[$b7c56690e8cc44b9$require$kState].body = body;
            responseObject[$b7c56690e8cc44b9$require$kHeaders][$b7c56690e8cc44b9$require$kHeadersList] = response.headersList;
            responseObject[$b7c56690e8cc44b9$require$kHeaders][$b7c56690e8cc44b9$require$kGuard] = 'immutable';
            responseList.push(responseObject);
        }
        // 6.
        return Object.freeze(responseList);
    }
    async add(request) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        $b7c56690e8cc44b9$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Cache.add'
        });
        request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        // 1.
        const requests = [
            request
        ];
        // 2.
        const responseArrayPromise = this.addAll(requests);
        // 3.
        return await responseArrayPromise;
    }
    async addAll(requests) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        $b7c56690e8cc44b9$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Cache.addAll'
        });
        requests = $b7c56690e8cc44b9$require$webidl.converters['sequence<RequestInfo>'](requests);
        // 1.
        const responsePromises = [];
        // 2.
        const requestList = [];
        // 3.
        for (const request of requests){
            if (typeof request === 'string') continue;
            // 3.1
            const r = request[$b7c56690e8cc44b9$require$kState];
            // 3.2
            if (!$b7c56690e8cc44b9$require$urlIsHttpHttpsScheme(r.url) || r.method !== 'GET') throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                header: 'Cache.addAll',
                message: 'Expected http/s scheme when method is not GET.'
            });
        }
        // 4.
        /** @type {ReturnType<typeof fetching>[]} */ const fetchControllers = [];
        // 5.
        for (const request of requests){
            // 5.1
            const r = new $b7c56690e8cc44b9$require$Request(request)[$b7c56690e8cc44b9$require$kState];
            // 5.2
            if (!$b7c56690e8cc44b9$require$urlIsHttpHttpsScheme(r.url)) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                header: 'Cache.addAll',
                message: 'Expected http/s scheme.'
            });
            // 5.4
            r.initiator = 'fetch';
            r.destination = 'subresource';
            // 5.5
            requestList.push(r);
            // 5.6
            const responsePromise = $b7c56690e8cc44b9$require$createDeferredPromise();
            // 5.7
            fetchControllers.push($b7c56690e8cc44b9$require$fetching({
                request: r,
                dispatcher: $b7c56690e8cc44b9$require$getGlobalDispatcher(),
                processResponse (response) {
                    // 1.
                    if (response.type === 'error' || response.status === 206 || response.status < 200 || response.status > 299) responsePromise.reject($b7c56690e8cc44b9$require$webidl.errors.exception({
                        header: 'Cache.addAll',
                        message: 'Received an invalid status code or the request failed.'
                    }));
                    else if (response.headersList.contains('vary')) {
                        // 2.1
                        const fieldValues = $b7c56690e8cc44b9$require$getFieldValues(response.headersList.get('vary'));
                        // 2.2
                        for (const fieldValue of fieldValues)// 2.2.1
                        if (fieldValue === '*') {
                            responsePromise.reject($b7c56690e8cc44b9$require$webidl.errors.exception({
                                header: 'Cache.addAll',
                                message: 'invalid vary field value'
                            }));
                            for (const controller of fetchControllers)controller.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (response) {
                    // 1.
                    if (response.aborted) {
                        responsePromise.reject(new DOMException('aborted', 'AbortError'));
                        return;
                    }
                    // 2.
                    responsePromise.resolve(response);
                }
            }));
            // 5.8
            responsePromises.push(responsePromise.promise);
        }
        // 6.
        const p = Promise.all(responsePromises);
        // 7.
        const responses = await p;
        // 7.1
        const operations = [];
        // 7.2
        let index = 0;
        // 7.3
        for (const response of responses){
            // 7.3.1
            /** @type {CacheBatchOperation} */ const operation = {
                type: 'put',
                request: requestList[index],
                response: response // 7.3.4
            };
            operations.push(operation) // 7.3.5
            ;
            index++ // 7.3.6
            ;
        }
        // 7.5
        const cacheJobPromise = $b7c56690e8cc44b9$require$createDeferredPromise();
        // 7.6.1
        let errorData = null;
        // 7.6.2
        try {
            this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        // 7.6.3
        queueMicrotask(()=>{
            // 7.6.3.1
            if (errorData === null) cacheJobPromise.resolve(undefined);
            else // 7.6.3.2
            cacheJobPromise.reject(errorData);
        });
        // 7.7
        return cacheJobPromise.promise;
    }
    async put(request, response) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        $b7c56690e8cc44b9$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'Cache.put'
        });
        request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        response = $b7c56690e8cc44b9$require$webidl.converters.Response(response);
        // 1.
        let innerRequest = null;
        // 2.
        if (request instanceof $b7c56690e8cc44b9$require$Request) innerRequest = request[$b7c56690e8cc44b9$require$kState];
        else innerRequest = new $b7c56690e8cc44b9$require$Request(request)[$b7c56690e8cc44b9$require$kState];
        // 4.
        if (!$b7c56690e8cc44b9$require$urlIsHttpHttpsScheme(innerRequest.url) || innerRequest.method !== 'GET') throw $b7c56690e8cc44b9$require$webidl.errors.exception({
            header: 'Cache.put',
            message: 'Expected an http/s scheme when method is not GET'
        });
        // 5.
        const innerResponse = response[$b7c56690e8cc44b9$require$kState];
        // 6.
        if (innerResponse.status === 206) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
            header: 'Cache.put',
            message: 'Got 206 status'
        });
        // 7.
        if (innerResponse.headersList.contains('vary')) {
            // 7.1.
            const fieldValues = $b7c56690e8cc44b9$require$getFieldValues(innerResponse.headersList.get('vary'));
            // 7.2.
            for (const fieldValue of fieldValues){
                // 7.2.1
                if (fieldValue === '*') throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                    header: 'Cache.put',
                    message: 'Got * vary field value'
                });
            }
        }
        // 8.
        if (innerResponse.body && ($b7c56690e8cc44b9$require$isDisturbed(innerResponse.body.stream) || innerResponse.body.stream.locked)) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
            header: 'Cache.put',
            message: 'Response body is locked or disturbed'
        });
        // 9.
        const clonedResponse = $b7c56690e8cc44b9$require$cloneResponse(innerResponse);
        // 10.
        const bodyReadPromise = $b7c56690e8cc44b9$require$createDeferredPromise();
        // 11.
        if (innerResponse.body != null) {
            // 11.1
            const stream = innerResponse.body.stream;
            // 11.2
            const reader = stream.getReader();
            // 11.3
            $b7c56690e8cc44b9$require$readAllBytes(reader).then(bodyReadPromise.resolve, bodyReadPromise.reject);
        } else bodyReadPromise.resolve(undefined);
        // 12.
        /** @type {CacheBatchOperation[]} */ const operations = [];
        // 13.
        /** @type {CacheBatchOperation} */ const operation = {
            type: 'put',
            request: innerRequest,
            response: clonedResponse // 16.
        };
        // 17.
        operations.push(operation);
        // 19.
        const bytes = await bodyReadPromise.promise;
        if (clonedResponse.body != null) clonedResponse.body.source = bytes;
        // 19.1
        const cacheJobPromise = $b7c56690e8cc44b9$require$createDeferredPromise();
        // 19.2.1
        let errorData = null;
        // 19.2.2
        try {
            this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        // 19.2.3
        queueMicrotask(()=>{
            // 19.2.3.1
            if (errorData === null) cacheJobPromise.resolve();
            else cacheJobPromise.reject(errorData);
        });
        return cacheJobPromise.promise;
    }
    async delete(request, options = {}) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        $b7c56690e8cc44b9$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Cache.delete'
        });
        request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        options = $b7c56690e8cc44b9$require$webidl.converters.CacheQueryOptions(options);
        /**
     * @type {Request}
     */ let r = null;
        if (request instanceof $b7c56690e8cc44b9$require$Request) {
            r = request[$b7c56690e8cc44b9$require$kState];
            if (r.method !== 'GET' && !options.ignoreMethod) return false;
        } else {
            $5jrvO$assert(typeof request === 'string');
            r = new $b7c56690e8cc44b9$require$Request(request)[$b7c56690e8cc44b9$require$kState];
        }
        /** @type {CacheBatchOperation[]} */ const operations = [];
        /** @type {CacheBatchOperation} */ const operation = {
            type: 'delete',
            request: r,
            options: options
        };
        operations.push(operation);
        const cacheJobPromise = $b7c56690e8cc44b9$require$createDeferredPromise();
        let errorData = null;
        let requestResponses;
        try {
            requestResponses = this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        queueMicrotask(()=>{
            if (errorData === null) cacheJobPromise.resolve(!!requestResponses?.length);
            else cacheJobPromise.reject(errorData);
        });
        return cacheJobPromise.promise;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#dom-cache-keys
   * @param {any} request
   * @param {import('../../types/cache').CacheQueryOptions} options
   * @returns {readonly Request[]}
   */ async keys(request, options = {}) {
        $b7c56690e8cc44b9$require$webidl.brandCheck(this, $b7c56690e8cc44b9$var$Cache);
        if (request !== undefined) request = $b7c56690e8cc44b9$require$webidl.converters.RequestInfo(request);
        options = $b7c56690e8cc44b9$require$webidl.converters.CacheQueryOptions(options);
        // 1.
        let r = null;
        // 2.
        if (request !== undefined) {
            // 2.1
            if (request instanceof $b7c56690e8cc44b9$require$Request) {
                // 2.1.1
                r = request[$b7c56690e8cc44b9$require$kState];
                // 2.1.2
                if (r.method !== 'GET' && !options.ignoreMethod) return [];
            } else if (typeof request === 'string') r = new $b7c56690e8cc44b9$require$Request(request)[$b7c56690e8cc44b9$require$kState];
        }
        // 4.
        const promise = $b7c56690e8cc44b9$require$createDeferredPromise();
        // 5.
        // 5.1
        const requests = [];
        // 5.2
        if (request === undefined) // 5.2.1
        for (const requestResponse of this.#relevantRequestResponseList)// 5.2.1.1
        requests.push(requestResponse[0]);
        else {
            // 5.3.1
            const requestResponses = this.#queryCache(r, options);
            // 5.3.2
            for (const requestResponse of requestResponses)// 5.3.2.1
            requests.push(requestResponse[0]);
        }
        // 5.4
        queueMicrotask(()=>{
            // 5.4.1
            const requestList = [];
            // 5.4.2
            for (const request of requests){
                const requestObject = new $b7c56690e8cc44b9$require$Request('https://a');
                requestObject[$b7c56690e8cc44b9$require$kState] = request;
                requestObject[$b7c56690e8cc44b9$require$kHeaders][$b7c56690e8cc44b9$require$kHeadersList] = request.headersList;
                requestObject[$b7c56690e8cc44b9$require$kHeaders][$b7c56690e8cc44b9$require$kGuard] = 'immutable';
                requestObject[$b7c56690e8cc44b9$require$kRealm] = request.client;
                // 5.4.2.1
                requestList.push(requestObject);
            }
            // 5.4.3
            promise.resolve(Object.freeze(requestList));
        });
        return promise.promise;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
   * @param {CacheBatchOperation[]} operations
   * @returns {requestResponseList}
   */ #batchCacheOperations(operations) {
        // 1.
        const cache = this.#relevantRequestResponseList;
        // 2.
        const backupCache = [
            ...cache
        ];
        // 3.
        const addedItems = [];
        // 4.1
        const resultList = [];
        try {
            // 4.2
            for (const operation of operations){
                // 4.2.1
                if (operation.type !== 'delete' && operation.type !== 'put') throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                    header: 'Cache.#batchCacheOperations',
                    message: 'operation type does not match "delete" or "put"'
                });
                // 4.2.2
                if (operation.type === 'delete' && operation.response != null) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                    header: 'Cache.#batchCacheOperations',
                    message: 'delete operation should not have an associated response'
                });
                // 4.2.3
                if (this.#queryCache(operation.request, operation.options, addedItems).length) throw new DOMException('???', 'InvalidStateError');
                // 4.2.4
                let requestResponses;
                // 4.2.5
                if (operation.type === 'delete') {
                    // 4.2.5.1
                    requestResponses = this.#queryCache(operation.request, operation.options);
                    // TODO: the spec is wrong, this is needed to pass WPTs
                    if (requestResponses.length === 0) return [];
                    // 4.2.5.2
                    for (const requestResponse of requestResponses){
                        const idx = cache.indexOf(requestResponse);
                        $5jrvO$assert(idx !== -1);
                        // 4.2.5.2.1
                        cache.splice(idx, 1);
                    }
                } else if (operation.type === 'put') {
                    // 4.2.6.1
                    if (operation.response == null) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'put operation should have an associated response'
                    });
                    // 4.2.6.2
                    const r = operation.request;
                    // 4.2.6.3
                    if (!$b7c56690e8cc44b9$require$urlIsHttpHttpsScheme(r.url)) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'expected http or https scheme'
                    });
                    // 4.2.6.4
                    if (r.method !== 'GET') throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'not get method'
                    });
                    // 4.2.6.5
                    if (operation.options != null) throw $b7c56690e8cc44b9$require$webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'options must not be defined'
                    });
                    // 4.2.6.6
                    requestResponses = this.#queryCache(operation.request);
                    // 4.2.6.7
                    for (const requestResponse of requestResponses){
                        const idx = cache.indexOf(requestResponse);
                        $5jrvO$assert(idx !== -1);
                        // 4.2.6.7.1
                        cache.splice(idx, 1);
                    }
                    // 4.2.6.8
                    cache.push([
                        operation.request,
                        operation.response
                    ]);
                    // 4.2.6.10
                    addedItems.push([
                        operation.request,
                        operation.response
                    ]);
                }
                // 4.2.7
                resultList.push([
                    operation.request,
                    operation.response
                ]);
            }
            // 4.3
            return resultList;
        } catch (e) {
            // 5.1
            this.#relevantRequestResponseList.length = 0;
            // 5.2
            this.#relevantRequestResponseList = backupCache;
            // 5.3
            throw e;
        }
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#query-cache
   * @param {any} requestQuery
   * @param {import('../../types/cache').CacheQueryOptions} options
   * @param {requestResponseList} targetStorage
   * @returns {requestResponseList}
   */ #queryCache(requestQuery, options, targetStorage) {
        /** @type {requestResponseList} */ const resultList = [];
        const storage = targetStorage ?? this.#relevantRequestResponseList;
        for (const requestResponse of storage){
            const [cachedRequest, cachedResponse] = requestResponse;
            if (this.#requestMatchesCachedItem(requestQuery, cachedRequest, cachedResponse, options)) resultList.push(requestResponse);
        }
        return resultList;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#request-matches-cached-item-algorithm
   * @param {any} requestQuery
   * @param {any} request
   * @param {any | null} response
   * @param {import('../../types/cache').CacheQueryOptions | undefined} options
   * @returns {boolean}
   */ #requestMatchesCachedItem(requestQuery, request, response = null, options) {
        // if (options?.ignoreMethod === false && request.method === 'GET') {
        //   return false
        // }
        const queryURL = new URL(requestQuery.url);
        const cachedURL = new URL(request.url);
        if (options?.ignoreSearch) {
            cachedURL.search = '';
            queryURL.search = '';
        }
        if (!$b7c56690e8cc44b9$require$urlEquals(queryURL, cachedURL, true)) return false;
        if (response == null || options?.ignoreVary || !response.headersList.contains('vary')) return true;
        const fieldValues = $b7c56690e8cc44b9$require$getFieldValues(response.headersList.get('vary'));
        for (const fieldValue of fieldValues){
            if (fieldValue === '*') return false;
            const requestValue = request.headersList.get(fieldValue);
            const queryValue = requestQuery.headersList.get(fieldValue);
            // If one has the header and the other doesn't, or one has
            // a different value than the other, return false
            if (requestValue !== queryValue) return false;
        }
        return true;
    }
}
Object.defineProperties($b7c56690e8cc44b9$var$Cache.prototype, {
    [Symbol.toStringTag]: {
        value: 'Cache',
        configurable: true
    },
    match: $b7c56690e8cc44b9$require$kEnumerableProperty,
    matchAll: $b7c56690e8cc44b9$require$kEnumerableProperty,
    add: $b7c56690e8cc44b9$require$kEnumerableProperty,
    addAll: $b7c56690e8cc44b9$require$kEnumerableProperty,
    put: $b7c56690e8cc44b9$require$kEnumerableProperty,
    delete: $b7c56690e8cc44b9$require$kEnumerableProperty,
    keys: $b7c56690e8cc44b9$require$kEnumerableProperty
});
const $b7c56690e8cc44b9$var$cacheQueryOptionConverters = [
    {
        key: 'ignoreSearch',
        converter: $b7c56690e8cc44b9$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'ignoreMethod',
        converter: $b7c56690e8cc44b9$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'ignoreVary',
        converter: $b7c56690e8cc44b9$require$webidl.converters.boolean,
        defaultValue: false
    }
];
$b7c56690e8cc44b9$require$webidl.converters.CacheQueryOptions = $b7c56690e8cc44b9$require$webidl.dictionaryConverter($b7c56690e8cc44b9$var$cacheQueryOptionConverters);
$b7c56690e8cc44b9$require$webidl.converters.MultiCacheQueryOptions = $b7c56690e8cc44b9$require$webidl.dictionaryConverter([
    ...$b7c56690e8cc44b9$var$cacheQueryOptionConverters,
    {
        key: 'cacheName',
        converter: $b7c56690e8cc44b9$require$webidl.converters.DOMString
    }
]);
$b7c56690e8cc44b9$require$webidl.converters.Response = $b7c56690e8cc44b9$require$webidl.interfaceConverter($b7c56690e8cc44b9$require$Response);
$b7c56690e8cc44b9$require$webidl.converters['sequence<RequestInfo>'] = $b7c56690e8cc44b9$require$webidl.sequenceConverter($b7c56690e8cc44b9$require$webidl.converters.RequestInfo);
module.exports = {
    Cache: $b7c56690e8cc44b9$var$Cache
};


//# sourceMappingURL=cache.748ee500.js.map
