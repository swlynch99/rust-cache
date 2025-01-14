require("./node-fetch.265c3ee5.js");
require("./v4.9e1e4df8.js");
require("./agents.12e92d4f.js");
require("./TeenyStatistics.186e737b.js");
require("./stream-events.782cbdf7.js");
var $dQ5yt$stream = require("stream");
var $dQ5yt$querystring = require("querystring");


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

var $8X9cN = parcelRequire("8X9cN");

var $6883ba1b7cd097cc$exports = {};
$6883ba1b7cd097cc$exports = new URL("v4.9e1e4df8.js", "file:" + __filename).toString();


var $cf09ae0e90e30b58$exports = {};
$cf09ae0e90e30b58$exports = new URL("agents.12e92d4f.js", "file:" + __filename).toString();


var $89dfd781d1f7b87c$exports = {};
$89dfd781d1f7b87c$exports = new URL("TeenyStatistics.186e737b.js", "file:" + __filename).toString();


var $f5a11b3eaf50cd77$exports = {};
$f5a11b3eaf50cd77$exports = new URL("stream-events.782cbdf7.js", "file:" + __filename).toString();


class $ba8da7ac66853fb9$var$RequestError extends Error {
}
module.exports.RequestError = $ba8da7ac66853fb9$var$RequestError;

/**
 * Convert options from Request to Fetch format
 * @private
 * @param reqOpts Request options
 */ function $ba8da7ac66853fb9$var$requestToFetchOptions(reqOpts) {
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
        const qs = $dQ5yt$querystring;
        const params = qs.stringify(reqOpts.qs);
        uri = uri + '?' + params;
    }
    options.agent = (0, $cf09ae0e90e30b58$exports.getAgent)(uri, reqOpts);
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
 */ function $ba8da7ac66853fb9$var$fetchToRequestResponse(opts, res) {
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
 */ function $ba8da7ac66853fb9$var$createMultipartStream(boundary, multipart) {
    const finale = `--${boundary}--`;
    const stream = new $dQ5yt$stream.PassThrough();
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
function $ba8da7ac66853fb9$var$teenyRequest(reqOpts, callback) {
    const { uri: uri, options: options } = $ba8da7ac66853fb9$var$requestToFetchOptions(reqOpts);
    const multipart = reqOpts.multipart;
    if (reqOpts.multipart && multipart.length === 2) {
        if (!callback) // TODO: add support for multipart uploads through streaming
        throw new Error('Multipart without callback is not implemented.');
        const boundary = $6883ba1b7cd097cc$exports.default();
        options.headers['Content-Type'] = `multipart/related; boundary=${boundary}`;
        options.body = $ba8da7ac66853fb9$var$createMultipartStream(boundary, multipart);
        // Multipart upload
        $ba8da7ac66853fb9$var$teenyRequest.stats.requestStarting();
        (0, $8X9cN.default)(uri, options).then((res)=>{
            $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
            const header = res.headers.get('content-type');
            const response = $ba8da7ac66853fb9$var$fetchToRequestResponse(options, res);
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
            $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
            callback(err, null, null);
        });
        return;
    }
    if (callback === undefined) {
        // Stream mode
        const requestStream = $f5a11b3eaf50cd77$exports(new $dQ5yt$stream.PassThrough());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let responseStream;
        requestStream.once('reading', ()=>{
            if (responseStream) (0, $dQ5yt$stream.pipeline)(responseStream, requestStream, ()=>{});
            else requestStream.once('response', ()=>{
                (0, $dQ5yt$stream.pipeline)(responseStream, requestStream, ()=>{});
            });
        });
        options.compress = false;
        $ba8da7ac66853fb9$var$teenyRequest.stats.requestStarting();
        (0, $8X9cN.default)(uri, options).then((res)=>{
            $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
            responseStream = res.body;
            responseStream.on('error', (err)=>{
                requestStream.emit('error', err);
            });
            const response = $ba8da7ac66853fb9$var$fetchToRequestResponse(options, res);
            requestStream.emit('response', response);
        }, (err)=>{
            $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
            requestStream.emit('error', err);
        });
        // fetch doesn't supply the raw HTTP stream, instead it
        // returns a PassThrough piped from the HTTP response
        // stream.
        return requestStream;
    }
    // GET or POST with callback
    $ba8da7ac66853fb9$var$teenyRequest.stats.requestStarting();
    (0, $8X9cN.default)(uri, options).then((res)=>{
        $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
        const header = res.headers.get('content-type');
        const response = $ba8da7ac66853fb9$var$fetchToRequestResponse(options, res);
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
            const response = $ba8da7ac66853fb9$var$fetchToRequestResponse(options, res);
            response.body = text;
            callback(null, response, text);
        }, (err)=>{
            callback(err, response, body);
        });
    }, (err)=>{
        $ba8da7ac66853fb9$var$teenyRequest.stats.requestFinished();
        callback(err, null, null);
    });
    return;
}
module.exports.teenyRequest = $ba8da7ac66853fb9$var$teenyRequest;
$ba8da7ac66853fb9$var$teenyRequest.defaults = (defaults)=>{
    return (reqOpts, callback)=>{
        const opts = {
            ...defaults,
            ...reqOpts
        };
        if (callback === undefined) return $ba8da7ac66853fb9$var$teenyRequest(opts);
        $ba8da7ac66853fb9$var$teenyRequest(opts, callback);
    };
};
/**
 * Single instance of an interface for keeping track of things.
 */ $ba8da7ac66853fb9$var$teenyRequest.stats = new $89dfd781d1f7b87c$exports.TeenyStatistics();
$ba8da7ac66853fb9$var$teenyRequest.resetStats = ()=>{
    $ba8da7ac66853fb9$var$teenyRequest.stats = new $89dfd781d1f7b87c$exports.TeenyStatistics($ba8da7ac66853fb9$var$teenyRequest.stats.getOptions());
};


//# sourceMappingURL=build.c09b0218.js.map
