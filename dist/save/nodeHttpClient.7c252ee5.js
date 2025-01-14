require("./commonjs.747dd214.js");
require("./httpHeaders.9e33d74a.js");
require("./restError.8fe9b23b.js");
require("./log.7103fd4e.js");
var $KLHdc$nodehttp = require("node:http");
var $KLHdc$nodehttps = require("node:https");
var $KLHdc$nodezlib = require("node:zlib");
var $KLHdc$nodestream = require("node:stream");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.





var $gapOG = parcelRequire("gapOG");

var $gqhIr = parcelRequire("gqhIr");

var $ae6za = parcelRequire("ae6za");

var $53OzH = parcelRequire("53OzH");
const $f9371f52f23440f3$var$DEFAULT_TLS_SETTINGS = {};
function $f9371f52f23440f3$var$isReadableStream(body) {
    return body && typeof body.pipe === "function";
}
function $f9371f52f23440f3$var$isStreamComplete(stream) {
    if (stream.readable === false) return Promise.resolve();
    return new Promise((resolve)=>{
        const handler = ()=>{
            resolve();
            stream.removeListener("close", handler);
            stream.removeListener("end", handler);
            stream.removeListener("error", handler);
        };
        stream.on("close", handler);
        stream.on("end", handler);
        stream.on("error", handler);
    });
}
function $f9371f52f23440f3$var$isArrayBuffer(body) {
    return body && typeof body.byteLength === "number";
}
class $f9371f52f23440f3$var$ReportTransform extends (0, $KLHdc$nodestream.Transform) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    _transform(chunk, _encoding, callback) {
        this.push(chunk);
        this.loadedBytes += chunk.length;
        try {
            this.progressCallback({
                loadedBytes: this.loadedBytes
            });
            callback();
        } catch (e) {
            callback(e);
        }
    }
    constructor(progressCallback){
        super();
        this.loadedBytes = 0;
        this.progressCallback = progressCallback;
    }
}
/**
 * A HttpClient implementation that uses Node's "https" module to send HTTPS requests.
 * @internal
 */ class $f9371f52f23440f3$var$NodeHttpClient {
    constructor(){
        this.cachedHttpsAgents = new WeakMap();
    }
    /**
     * Makes a request over an underlying transport layer and returns the response.
     * @param request - The request to be made.
     */ async sendRequest(request) {
        var _a, _b, _c;
        const abortController = new AbortController();
        let abortListener;
        if (request.abortSignal) {
            if (request.abortSignal.aborted) throw new (0, $gapOG.AbortError)("The operation was aborted.");
            abortListener = (event)=>{
                if (event.type === "abort") abortController.abort();
            };
            request.abortSignal.addEventListener("abort", abortListener);
        }
        if (request.timeout > 0) setTimeout(()=>{
            abortController.abort();
        }, request.timeout);
        const acceptEncoding = request.headers.get("Accept-Encoding");
        const shouldDecompress = (acceptEncoding === null || acceptEncoding === void 0 ? void 0 : acceptEncoding.includes("gzip")) || (acceptEncoding === null || acceptEncoding === void 0 ? void 0 : acceptEncoding.includes("deflate"));
        let body = typeof request.body === "function" ? request.body() : request.body;
        if (body && !request.headers.has("Content-Length")) {
            const bodyLength = $f9371f52f23440f3$export$8a2acf1d275d7daa(body);
            if (bodyLength !== null) request.headers.set("Content-Length", bodyLength);
        }
        let responseStream;
        try {
            if (body && request.onUploadProgress) {
                const onUploadProgress = request.onUploadProgress;
                const uploadReportStream = new $f9371f52f23440f3$var$ReportTransform(onUploadProgress);
                uploadReportStream.on("error", (e)=>{
                    (0, $53OzH.logger).error("Error in upload progress", e);
                });
                if ($f9371f52f23440f3$var$isReadableStream(body)) body.pipe(uploadReportStream);
                else uploadReportStream.end(body);
                body = uploadReportStream;
            }
            const res = await this.makeRequest(request, abortController, body);
            const headers = $f9371f52f23440f3$var$getResponseHeaders(res);
            const status = (_a = res.statusCode) !== null && _a !== void 0 ? _a : 0;
            const response = {
                status: status,
                headers: headers,
                request: request
            };
            // Responses to HEAD must not have a body.
            // If they do return a body, that body must be ignored.
            if (request.method === "HEAD") {
                // call resume() and not destroy() to avoid closing the socket
                // and losing keep alive
                res.resume();
                return response;
            }
            responseStream = shouldDecompress ? $f9371f52f23440f3$var$getDecodedResponseStream(res, headers) : res;
            const onDownloadProgress = request.onDownloadProgress;
            if (onDownloadProgress) {
                const downloadReportStream = new $f9371f52f23440f3$var$ReportTransform(onDownloadProgress);
                downloadReportStream.on("error", (e)=>{
                    (0, $53OzH.logger).error("Error in download progress", e);
                });
                responseStream.pipe(downloadReportStream);
                responseStream = downloadReportStream;
            }
            if (// Value of POSITIVE_INFINITY in streamResponseStatusCodes is considered as any status code
            ((_b = request.streamResponseStatusCodes) === null || _b === void 0 ? void 0 : _b.has(Number.POSITIVE_INFINITY)) || ((_c = request.streamResponseStatusCodes) === null || _c === void 0 ? void 0 : _c.has(response.status))) response.readableStreamBody = responseStream;
            else response.bodyAsText = await $f9371f52f23440f3$var$streamToText(responseStream);
            return response;
        } finally{
            // clean up event listener
            if (request.abortSignal && abortListener) {
                let uploadStreamDone = Promise.resolve();
                if ($f9371f52f23440f3$var$isReadableStream(body)) uploadStreamDone = $f9371f52f23440f3$var$isStreamComplete(body);
                let downloadStreamDone = Promise.resolve();
                if ($f9371f52f23440f3$var$isReadableStream(responseStream)) downloadStreamDone = $f9371f52f23440f3$var$isStreamComplete(responseStream);
                Promise.all([
                    uploadStreamDone,
                    downloadStreamDone
                ]).then(()=>{
                    var _a;
                    // eslint-disable-next-line promise/always-return
                    if (abortListener) (_a = request.abortSignal) === null || _a === void 0 || _a.removeEventListener("abort", abortListener);
                }).catch((e)=>{
                    (0, $53OzH.logger).warning("Error when cleaning up abortListener on httpRequest", e);
                });
            }
        }
    }
    makeRequest(request, abortController, body) {
        var _a;
        const url = new URL(request.url);
        const isInsecure = url.protocol !== "https:";
        if (isInsecure && !request.allowInsecureConnection) throw new Error(`Cannot connect to ${request.url} while allowInsecureConnection is false.`);
        const agent = (_a = request.agent) !== null && _a !== void 0 ? _a : this.getOrCreateAgent(request, isInsecure);
        const options = {
            agent: agent,
            hostname: url.hostname,
            path: `${url.pathname}${url.search}`,
            port: url.port,
            method: request.method,
            headers: request.headers.toJSON({
                preserveCase: true
            })
        };
        return new Promise((resolve, reject)=>{
            const req = isInsecure ? $KLHdc$nodehttp.request(options, resolve) : $KLHdc$nodehttps.request(options, resolve);
            req.once("error", (err)=>{
                var _a;
                reject(new (0, $ae6za.RestError)(err.message, {
                    code: (_a = err.code) !== null && _a !== void 0 ? _a : (0, $ae6za.RestError).REQUEST_SEND_ERROR,
                    request: request
                }));
            });
            abortController.signal.addEventListener("abort", ()=>{
                const abortError = new (0, $gapOG.AbortError)("The operation was aborted.");
                req.destroy(abortError);
                reject(abortError);
            });
            if (body && $f9371f52f23440f3$var$isReadableStream(body)) body.pipe(req);
            else if (body) {
                if (typeof body === "string" || Buffer.isBuffer(body)) req.end(body);
                else if ($f9371f52f23440f3$var$isArrayBuffer(body)) req.end(ArrayBuffer.isView(body) ? Buffer.from(body.buffer) : Buffer.from(body));
                else {
                    (0, $53OzH.logger).error("Unrecognized body type", body);
                    reject(new (0, $ae6za.RestError)("Unrecognized body type"));
                }
            } else // streams don't like "undefined" being passed as data
            req.end();
        });
    }
    getOrCreateAgent(request, isInsecure) {
        var _a;
        const disableKeepAlive = request.disableKeepAlive;
        // Handle Insecure requests first
        if (isInsecure) {
            if (disableKeepAlive) // keepAlive:false is the default so we don't need a custom Agent
            return $KLHdc$nodehttp.globalAgent;
            if (!this.cachedHttpAgent) // If there is no cached agent create a new one and cache it.
            this.cachedHttpAgent = new $KLHdc$nodehttp.Agent({
                keepAlive: true
            });
            return this.cachedHttpAgent;
        } else {
            if (disableKeepAlive && !request.tlsSettings) // When there are no tlsSettings and keepAlive is false
            // we don't need a custom agent
            return $KLHdc$nodehttps.globalAgent;
            // We use the tlsSettings to index cached clients
            const tlsSettings = (_a = request.tlsSettings) !== null && _a !== void 0 ? _a : $f9371f52f23440f3$var$DEFAULT_TLS_SETTINGS;
            // Get the cached agent or create a new one with the
            // provided values for keepAlive and tlsSettings
            let agent = this.cachedHttpsAgents.get(tlsSettings);
            if (agent && agent.options.keepAlive === !disableKeepAlive) return agent;
            (0, $53OzH.logger).info("No cached TLS Agent exist, creating a new Agent");
            agent = new $KLHdc$nodehttps.Agent(Object.assign({
                // keepAlive is true if disableKeepAlive is false.
                keepAlive: !disableKeepAlive
            }, tlsSettings));
            this.cachedHttpsAgents.set(tlsSettings, agent);
            return agent;
        }
    }
}
function $f9371f52f23440f3$var$getResponseHeaders(res) {
    const headers = (0, $gqhIr.createHttpHeaders)();
    for (const header of Object.keys(res.headers)){
        const value = res.headers[header];
        if (Array.isArray(value)) {
            if (value.length > 0) headers.set(header, value[0]);
        } else if (value) headers.set(header, value);
    }
    return headers;
}
function $f9371f52f23440f3$var$getDecodedResponseStream(stream, headers) {
    const contentEncoding = headers.get("Content-Encoding");
    if (contentEncoding === "gzip") {
        const unzip = $KLHdc$nodezlib.createGunzip();
        stream.pipe(unzip);
        return unzip;
    } else if (contentEncoding === "deflate") {
        const inflate = $KLHdc$nodezlib.createInflate();
        stream.pipe(inflate);
        return inflate;
    }
    return stream;
}
function $f9371f52f23440f3$var$streamToText(stream) {
    return new Promise((resolve, reject)=>{
        const buffer = [];
        stream.on("data", (chunk)=>{
            if (Buffer.isBuffer(chunk)) buffer.push(chunk);
            else buffer.push(Buffer.from(chunk));
        });
        stream.on("end", ()=>{
            resolve(Buffer.concat(buffer).toString("utf8"));
        });
        stream.on("error", (e)=>{
            if (e && (e === null || e === void 0 ? void 0 : e.name) === "AbortError") reject(e);
            else reject(new (0, $ae6za.RestError)(`Error reading response as text: ${e.message}`, {
                code: (0, $ae6za.RestError).PARSE_ERROR
            }));
        });
    });
}
function $f9371f52f23440f3$export$8a2acf1d275d7daa(body) {
    if (!body) return 0;
    else if (Buffer.isBuffer(body)) return body.length;
    else if ($f9371f52f23440f3$var$isReadableStream(body)) return null;
    else if ($f9371f52f23440f3$var$isArrayBuffer(body)) return body.byteLength;
    else if (typeof body === "string") return Buffer.from(body).length;
    else return null;
}
function $f9371f52f23440f3$export$b443af06f438d2d2() {
    return new $f9371f52f23440f3$var$NodeHttpClient();
}


