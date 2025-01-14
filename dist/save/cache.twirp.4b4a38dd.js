require("./twirp.fe0e595e.js");
require("./cache.158614a5.js");

"use strict";
var $ca62d2bb19cab192$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createCacheServiceServer = module.exports.CacheServiceMethodList = module.exports.CacheServiceMethod = module.exports.CacheServiceClientProtobuf = module.exports.CacheServiceClientJSON = void 0;
var $ec5912a216a2b2bc$exports = {};
$ec5912a216a2b2bc$exports = new URL("twirp.fe0e595e.js", "file:" + __filename).toString();


var $f709e59b93d894a6$exports = {};
$f709e59b93d894a6$exports = new URL("cache.158614a5.js", "file:" + __filename).toString();


class $ca62d2bb19cab192$var$CacheServiceClientJSON {
    constructor(rpc){
        this.rpc = rpc;
        this.CreateCacheEntry.bind(this);
        this.FinalizeCacheEntryUpload.bind(this);
        this.GetCacheEntryDownloadURL.bind(this);
        this.DeleteCacheEntry.bind(this);
        this.ListCacheEntries.bind(this);
        this.LookupCacheEntry.bind(this);
    }
    CreateCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.CreateCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "CreateCacheEntry", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.CreateCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    FinalizeCacheEntryUpload(request) {
        const data = $f709e59b93d894a6$exports.FinalizeCacheEntryUploadRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "FinalizeCacheEntryUpload", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.FinalizeCacheEntryUploadResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    GetCacheEntryDownloadURL(request) {
        const data = $f709e59b93d894a6$exports.GetCacheEntryDownloadURLRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "GetCacheEntryDownloadURL", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.GetCacheEntryDownloadURLResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    DeleteCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.DeleteCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "DeleteCacheEntry", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.DeleteCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    ListCacheEntries(request) {
        const data = $f709e59b93d894a6$exports.ListCacheEntriesRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "ListCacheEntries", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.ListCacheEntriesResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    LookupCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.LookupCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "LookupCacheEntry", "application/json", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.LookupCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
}
module.exports.CacheServiceClientJSON = $ca62d2bb19cab192$var$CacheServiceClientJSON;
class $ca62d2bb19cab192$var$CacheServiceClientProtobuf {
    constructor(rpc){
        this.rpc = rpc;
        this.CreateCacheEntry.bind(this);
        this.FinalizeCacheEntryUpload.bind(this);
        this.GetCacheEntryDownloadURL.bind(this);
        this.DeleteCacheEntry.bind(this);
        this.ListCacheEntries.bind(this);
        this.LookupCacheEntry.bind(this);
    }
    CreateCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.CreateCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "CreateCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.CreateCacheEntryResponse.fromBinary(data));
    }
    FinalizeCacheEntryUpload(request) {
        const data = $f709e59b93d894a6$exports.FinalizeCacheEntryUploadRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "FinalizeCacheEntryUpload", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.FinalizeCacheEntryUploadResponse.fromBinary(data));
    }
    GetCacheEntryDownloadURL(request) {
        const data = $f709e59b93d894a6$exports.GetCacheEntryDownloadURLRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "GetCacheEntryDownloadURL", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.GetCacheEntryDownloadURLResponse.fromBinary(data));
    }
    DeleteCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.DeleteCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "DeleteCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.DeleteCacheEntryResponse.fromBinary(data));
    }
    ListCacheEntries(request) {
        const data = $f709e59b93d894a6$exports.ListCacheEntriesRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "ListCacheEntries", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.ListCacheEntriesResponse.fromBinary(data));
    }
    LookupCacheEntry(request) {
        const data = $f709e59b93d894a6$exports.LookupCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "LookupCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$f709e59b93d894a6$exports.LookupCacheEntryResponse.fromBinary(data));
    }
}
module.exports.CacheServiceClientProtobuf = $ca62d2bb19cab192$var$CacheServiceClientProtobuf;
var $ca62d2bb19cab192$var$CacheServiceMethod;
(function(CacheServiceMethod) {
    CacheServiceMethod["CreateCacheEntry"] = "CreateCacheEntry";
    CacheServiceMethod["FinalizeCacheEntryUpload"] = "FinalizeCacheEntryUpload";
    CacheServiceMethod["GetCacheEntryDownloadURL"] = "GetCacheEntryDownloadURL";
    CacheServiceMethod["DeleteCacheEntry"] = "DeleteCacheEntry";
    CacheServiceMethod["ListCacheEntries"] = "ListCacheEntries";
    CacheServiceMethod["LookupCacheEntry"] = "LookupCacheEntry";
})($ca62d2bb19cab192$var$CacheServiceMethod || (module.exports.CacheServiceMethod = $ca62d2bb19cab192$var$CacheServiceMethod = {}));
module.exports.CacheServiceMethodList = [
    $ca62d2bb19cab192$var$CacheServiceMethod.CreateCacheEntry,
    $ca62d2bb19cab192$var$CacheServiceMethod.FinalizeCacheEntryUpload,
    $ca62d2bb19cab192$var$CacheServiceMethod.GetCacheEntryDownloadURL,
    $ca62d2bb19cab192$var$CacheServiceMethod.DeleteCacheEntry,
    $ca62d2bb19cab192$var$CacheServiceMethod.ListCacheEntries,
    $ca62d2bb19cab192$var$CacheServiceMethod.LookupCacheEntry
];
function $ca62d2bb19cab192$var$createCacheServiceServer(service) {
    return new $ec5912a216a2b2bc$exports.TwirpServer({
        service: service,
        packageName: "github.actions.results.api.v1",
        serviceName: "CacheService",
        methodList: module.exports.CacheServiceMethodList,
        matchRoute: $ca62d2bb19cab192$var$matchCacheServiceRoute
    });
}
module.exports.createCacheServiceServer = $ca62d2bb19cab192$var$createCacheServiceServer;
function $ca62d2bb19cab192$var$matchCacheServiceRoute(method, events) {
    switch(method){
        case "CreateCacheEntry":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "CreateCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryRequest(ctx, service, data, interceptors);
                });
        case "FinalizeCacheEntryUpload":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "FinalizeCacheEntryUpload"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadRequest(ctx, service, data, interceptors);
                });
        case "GetCacheEntryDownloadURL":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "GetCacheEntryDownloadURL"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLRequest(ctx, service, data, interceptors);
                });
        case "DeleteCacheEntry":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "DeleteCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryRequest(ctx, service, data, interceptors);
                });
        case "ListCacheEntries":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "ListCacheEntries"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesRequest(ctx, service, data, interceptors);
                });
        case "LookupCacheEntry":
            return (ctx, service, data, interceptors)=>$ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "LookupCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryRequest(ctx, service, data, interceptors);
                });
        default:
            events.onNotFound();
            const msg = `no handler found`;
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $ec5912a216a2b2bc$exports.TwirpContentType.JSON:
            return $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryJSON(ctx, service, data, interceptors);
        case $ec5912a216a2b2bc$exports.TwirpContentType.Protobuf:
            return $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.CreateCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.CreateCacheEntry(ctx, inputReq);
            });
        } else response = yield service.CreateCacheEntry(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.CreateCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.FinalizeCacheEntryUploadRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.FinalizeCacheEntryUpload(ctx, inputReq);
            });
        } else response = yield service.FinalizeCacheEntryUpload(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.FinalizeCacheEntryUploadResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.GetCacheEntryDownloadURLRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.GetCacheEntryDownloadURL(ctx, inputReq);
            });
        } else response = yield service.GetCacheEntryDownloadURL(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.GetCacheEntryDownloadURLResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.DeleteCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.DeleteCacheEntry(ctx, inputReq);
            });
        } else response = yield service.DeleteCacheEntry(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.DeleteCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.ListCacheEntriesRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.ListCacheEntries(ctx, inputReq);
            });
        } else response = yield service.ListCacheEntries(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.ListCacheEntriesResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryJSON(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $f709e59b93d894a6$exports.LookupCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.LookupCacheEntry(ctx, inputReq);
            });
        } else response = yield service.LookupCacheEntry(ctx, request);
        return JSON.stringify($f709e59b93d894a6$exports.LookupCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceCreateCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.CreateCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.CreateCacheEntry(ctx, inputReq);
            });
        } else response = yield service.CreateCacheEntry(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.CreateCacheEntryResponse.toBinary(response));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceFinalizeCacheEntryUploadProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.FinalizeCacheEntryUploadRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.FinalizeCacheEntryUpload(ctx, inputReq);
            });
        } else response = yield service.FinalizeCacheEntryUpload(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.FinalizeCacheEntryUploadResponse.toBinary(response));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceGetCacheEntryDownloadURLProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.GetCacheEntryDownloadURLRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.GetCacheEntryDownloadURL(ctx, inputReq);
            });
        } else response = yield service.GetCacheEntryDownloadURL(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.GetCacheEntryDownloadURLResponse.toBinary(response));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceDeleteCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.DeleteCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.DeleteCacheEntry(ctx, inputReq);
            });
        } else response = yield service.DeleteCacheEntry(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.DeleteCacheEntryResponse.toBinary(response));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceListCacheEntriesProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.ListCacheEntriesRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.ListCacheEntries(ctx, inputReq);
            });
        } else response = yield service.ListCacheEntries(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.ListCacheEntriesResponse.toBinary(response));
    });
}
function $ca62d2bb19cab192$var$handleCacheServiceLookupCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $ca62d2bb19cab192$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $f709e59b93d894a6$exports.LookupCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $ec5912a216a2b2bc$exports.TwirpError($ec5912a216a2b2bc$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $ec5912a216a2b2bc$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.LookupCacheEntry(ctx, inputReq);
            });
        } else response = yield service.LookupCacheEntry(ctx, request);
        return Buffer.from($f709e59b93d894a6$exports.LookupCacheEntryResponse.toBinary(response));
    });
}


