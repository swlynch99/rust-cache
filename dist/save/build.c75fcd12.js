require("./node-fetch.ae1b181d.js");
require("./v4.4c583278.js");
require("./agents.30c924c9.js");
require("./TeenyStatistics.692a18a3.js");
require("./stream-events.9a6efd70.js");
var $4MX9T$stream = require("stream");
var $4MX9T$querystring = require("querystring");


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
"use strict";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.teenyRequest = module.exports.RequestError = void 0;

var $8aUiO = parcelRequire("8aUiO");

var $a1d82b72ac5be660$exports = {};
$a1d82b72ac5be660$exports = new URL("v4.4c583278.js", "file:" + __filename).toString();


var $58d6eff6f058b877$exports = {};
$58d6eff6f058b877$exports = new URL("agents.30c924c9.js", "file:" + __filename).toString();


var $446440382aed00e8$exports = {};
$446440382aed00e8$exports = new URL("TeenyStatistics.692a18a3.js", "file:" + __filename).toString();


var $3837898d7984730c$exports = {};
$3837898d7984730c$exports = new URL("stream-events.9a6efd70.js", "file:" + __filename).toString();


class $7a324cd022415569$var$RequestError extends Error {
}
module.exports.RequestError = $7a324cd022415569$var$RequestError;

/**
 * Convert options from Request to Fetch format
 * @private
 * @param reqOpts Request options
 */ function $7a324cd022415569$var$requestToFetchOptions(reqOpts) {
    const options = {
        method: reqOpts.method || 'GET',
        ...reqOpts.timeout && {
            timeout: reqOpts.timeout
        },
        ...typeof reqOpts.gzip === 'boolean' && {
            compress: reqOpts.gzip
        }
    };
    if (typeof reqOpts.json === 'object') {
        // Add Content-type: application/json header
        reqOpts.headers = reqOpts.headers || {};
        reqOpts.headers['Content-Type'] = 'application/json';
        // Set body to JSON representation of value
        options.body = JSON.stringify(reqOpts.json);
    } else {
        if (Buffer.isBuffer(reqOpts.body)) options.body = reqOpts.body;
        else if (typeof reqOpts.body !== 'string') options.body = JSON.stringify(reqOpts.body);
        else options.body = reqOpts.body;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options.headers = reqOpts.headers;
    let uri = reqOpts.uri || reqOpts.url;
    if (!uri) throw new Error('Missing uri or url in reqOpts.');
    if (reqOpts.useQuerystring === true || typeof reqOpts.qs === 'object') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const qs = $4MX9T$querystring;
        const params = qs.stringify(reqOpts.qs);
        uri = uri + '?' + params;
    }
    options.agent = (0, $58d6eff6f058b877$exports.getAgent)(uri, reqOpts);
    return {
        uri: uri,
        options: options
    };
}
/**
 * Convert a response from `fetch` to `request` format.
 * @private
 * @param opts The `request` options used to create the request.
 * @param res The Fetch response
 * @returns A `request` response object
 */ function $7a324cd022415569$var$fetchToRequestResponse(opts, res) {
    const request = {};
    request.agent = opts.agent || false;
    request.headers = opts.headers || {};
    request.href = res.url;
    // headers need to be converted from a map to an obj
    const resHeaders = {};
    res.headers.forEach((value, key)=>resHeaders[key] = value);
    const response = Object.assign(res.body, {
        statusCode: res.status,
        statusMessage: res.statusText,
        request: request,
        body: res.body,
        headers: resHeaders,
        toJSON: ()=>({
                headers: resHeaders
            })
    });
    return response;
}
/**
 * Create POST body from two parts as multipart/related content-type
 * @private
 * @param boundary
 * @param multipart
 */ function $7a324cd022415569$var$createMultipartStream(boundary, multipart) {
    const finale = `--${boundary}--`;
    const stream = new $4MX9T$stream.PassThrough();
    for (const part of multipart){
        const preamble = `--${boundary}\r\nContent-Type: ${part['Content-Type']}\r\n\r\n`;
        stream.write(preamble);
        if (typeof part.body === 'string') {
            stream.write(part.body);
            stream.write('\r\n');
        } else {
            part.body.pipe(stream, {
                end: false
            });
            part.body.on('end', ()=>{
                stream.write('\r\n');
                stream.write(finale);
                stream.end();
            });
        }
    }
    return stream;
}
function $7a324cd022415569$var$teenyRequest(reqOpts, callback) {
    const { uri: uri, options: options } = $7a324cd022415569$var$requestToFetchOptions(reqOpts);
    const multipart = reqOpts.multipart;
    if (reqOpts.multipart && multipart.length === 2) {
        if (!callback) // TODO: add support for multipart uploads through streaming
        throw new Error('Multipart without callback is not implemented.');
        const boundary = $a1d82b72ac5be660$exports.default();
        options.headers['Content-Type'] = `multipart/related; boundary=${boundary}`;
        options.body = $7a324cd022415569$var$createMultipartStream(boundary, multipart);
        // Multipart upload
        $7a324cd022415569$var$teenyRequest.stats.requestStarting();
        (0, $8aUiO.default)(uri, options).then((res)=>{
            $7a324cd022415569$var$teenyRequest.stats.requestFinished();
            const header = res.headers.get('content-type');
            const response = $7a324cd022415569$var$fetchToRequestResponse(options, res);
            const body = response.body;
            if (header === 'application/json' || header === 'application/json; charset=utf-8') {
                res.json().then((json)=>{
                    response.body = json;
                    callback(null, response, json);
                }, (err)=>{
                    callback(err, response, body);
                });
                return;
            }
            res.text().then((text)=>{
                response.body = text;
                callback(null, response, text);
            }, (err)=>{
                callback(err, response, body);
            });
        }, (err)=>{
            $7a324cd022415569$var$teenyRequest.stats.requestFinished();
            callback(err, null, null);
        });
        return;
    }
    if (callback === undefined) {
        // Stream mode
        const requestStream = $3837898d7984730c$exports(new $4MX9T$stream.PassThrough());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let responseStream;
        requestStream.once('reading', ()=>{
            if (responseStream) (0, $4MX9T$stream.pipeline)(responseStream, requestStream, ()=>{});
            else requestStream.once('response', ()=>{
                (0, $4MX9T$stream.pipeline)(responseStream, requestStream, ()=>{});
            });
        });
        options.compress = false;
        $7a324cd022415569$var$teenyRequest.stats.requestStarting();
        (0, $8aUiO.default)(uri, options).then((res)=>{
            $7a324cd022415569$var$teenyRequest.stats.requestFinished();
            responseStream = res.body;
            responseStream.on('error', (err)=>{
                requestStream.emit('error', err);
            });
            const response = $7a324cd022415569$var$fetchToRequestResponse(options, res);
            requestStream.emit('response', response);
        }, (err)=>{
            $7a324cd022415569$var$teenyRequest.stats.requestFinished();
            requestStream.emit('error', err);
        });
        // fetch doesn't supply the raw HTTP stream, instead it
        // returns a PassThrough piped from the HTTP response
        // stream.
        return requestStream;
    }
    // GET or POST with callback
    $7a324cd022415569$var$teenyRequest.stats.requestStarting();
    (0, $8aUiO.default)(uri, options).then((res)=>{
        $7a324cd022415569$var$teenyRequest.stats.requestFinished();
        const header = res.headers.get('content-type');
        const response = $7a324cd022415569$var$fetchToRequestResponse(options, res);
        const body = response.body;
        if (header === 'application/json' || header === 'application/json; charset=utf-8') {
            if (response.statusCode === 204) {
                // Probably a DELETE
                callback(null, response, body);
                return;
            }
            res.json().then((json)=>{
                response.body = json;
                callback(null, response, json);
            }, (err)=>{
                callback(err, response, body);
            });
            return;
        }
        res.text().then((text)=>{
            const response = $7a324cd022415569$var$fetchToRequestResponse(options, res);
            response.body = text;
            callback(null, response, text);
        }, (err)=>{
            callback(err, response, body);
        });
    }, (err)=>{
        $7a324cd022415569$var$teenyRequest.stats.requestFinished();
        callback(err, null, null);
    });
    return;
}
module.exports.teenyRequest = $7a324cd022415569$var$teenyRequest;
$7a324cd022415569$var$teenyRequest.defaults = (defaults)=>{
    return (reqOpts, callback)=>{
        const opts = {
            ...defaults,
            ...reqOpts
        };
        if (callback === undefined) return $7a324cd022415569$var$teenyRequest(opts);
        $7a324cd022415569$var$teenyRequest(opts, callback);
    };
};
/**
 * Single instance of an interface for keeping track of things.
 */ $7a324cd022415569$var$teenyRequest.stats = new $446440382aed00e8$exports.TeenyStatistics();
$7a324cd022415569$var$teenyRequest.resetStats = ()=>{
    $7a324cd022415569$var$teenyRequest.stats = new $446440382aed00e8$exports.TeenyStatistics($7a324cd022415569$var$teenyRequest.stats.getOptions());
};


