require("./twirp.33b6dc28.js");
require("./cache.f857f684.js");

"use strict";
var $3744e11db6df705d$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $72adb113309a6e61$exports = {};
$72adb113309a6e61$exports = new URL("twirp.33b6dc28.js", "file:" + __filename).toString();


var $ff2edadefdb8aa89$exports = {};
$ff2edadefdb8aa89$exports = new URL("cache.f857f684.js", "file:" + __filename).toString();


class $3744e11db6df705d$var$CacheServiceClientJSON {
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
        const data = $ff2edadefdb8aa89$exports.CreateCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "CreateCacheEntry", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.CreateCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    FinalizeCacheEntryUpload(request) {
        const data = $ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "FinalizeCacheEntryUpload", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    GetCacheEntryDownloadURL(request) {
        const data = $ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "GetCacheEntryDownloadURL", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    DeleteCacheEntry(request) {
        const data = $ff2edadefdb8aa89$exports.DeleteCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "DeleteCacheEntry", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.DeleteCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    ListCacheEntries(request) {
        const data = $ff2edadefdb8aa89$exports.ListCacheEntriesRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "ListCacheEntries", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.ListCacheEntriesResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
    LookupCacheEntry(request) {
        const data = $ff2edadefdb8aa89$exports.LookupCacheEntryRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false
        });
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "LookupCacheEntry", "application/json", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.LookupCacheEntryResponse.fromJson(data, {
                ignoreUnknownFields: true
            }));
    }
}
module.exports.CacheServiceClientJSON = $3744e11db6df705d$var$CacheServiceClientJSON;
class $3744e11db6df705d$var$CacheServiceClientProtobuf {
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
        const data = $ff2edadefdb8aa89$exports.CreateCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "CreateCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.CreateCacheEntryResponse.fromBinary(data));
    }
    FinalizeCacheEntryUpload(request) {
        const data = $ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "FinalizeCacheEntryUpload", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadResponse.fromBinary(data));
    }
    GetCacheEntryDownloadURL(request) {
        const data = $ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "GetCacheEntryDownloadURL", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLResponse.fromBinary(data));
    }
    DeleteCacheEntry(request) {
        const data = $ff2edadefdb8aa89$exports.DeleteCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "DeleteCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.DeleteCacheEntryResponse.fromBinary(data));
    }
    ListCacheEntries(request) {
        const data = $ff2edadefdb8aa89$exports.ListCacheEntriesRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "ListCacheEntries", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.ListCacheEntriesResponse.fromBinary(data));
    }
    LookupCacheEntry(request) {
        const data = $ff2edadefdb8aa89$exports.LookupCacheEntryRequest.toBinary(request);
        const promise = this.rpc.request("github.actions.results.api.v1.CacheService", "LookupCacheEntry", "application/protobuf", data);
        return promise.then((data)=>$ff2edadefdb8aa89$exports.LookupCacheEntryResponse.fromBinary(data));
    }
}
module.exports.CacheServiceClientProtobuf = $3744e11db6df705d$var$CacheServiceClientProtobuf;
var $3744e11db6df705d$var$CacheServiceMethod;
(function(CacheServiceMethod) {
    CacheServiceMethod["CreateCacheEntry"] = "CreateCacheEntry";
    CacheServiceMethod["FinalizeCacheEntryUpload"] = "FinalizeCacheEntryUpload";
    CacheServiceMethod["GetCacheEntryDownloadURL"] = "GetCacheEntryDownloadURL";
    CacheServiceMethod["DeleteCacheEntry"] = "DeleteCacheEntry";
    CacheServiceMethod["ListCacheEntries"] = "ListCacheEntries";
    CacheServiceMethod["LookupCacheEntry"] = "LookupCacheEntry";
})($3744e11db6df705d$var$CacheServiceMethod || (module.exports.CacheServiceMethod = $3744e11db6df705d$var$CacheServiceMethod = {}));
module.exports.CacheServiceMethodList = [
    $3744e11db6df705d$var$CacheServiceMethod.CreateCacheEntry,
    $3744e11db6df705d$var$CacheServiceMethod.FinalizeCacheEntryUpload,
    $3744e11db6df705d$var$CacheServiceMethod.GetCacheEntryDownloadURL,
    $3744e11db6df705d$var$CacheServiceMethod.DeleteCacheEntry,
    $3744e11db6df705d$var$CacheServiceMethod.ListCacheEntries,
    $3744e11db6df705d$var$CacheServiceMethod.LookupCacheEntry
];
function $3744e11db6df705d$var$createCacheServiceServer(service) {
    return new $72adb113309a6e61$exports.TwirpServer({
        service: service,
        packageName: "github.actions.results.api.v1",
        serviceName: "CacheService",
        methodList: module.exports.CacheServiceMethodList,
        matchRoute: $3744e11db6df705d$var$matchCacheServiceRoute
    });
}
module.exports.createCacheServiceServer = $3744e11db6df705d$var$createCacheServiceServer;
function $3744e11db6df705d$var$matchCacheServiceRoute(method, events) {
    switch(method){
        case "CreateCacheEntry":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "CreateCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryRequest(ctx, service, data, interceptors);
                });
        case "FinalizeCacheEntryUpload":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "FinalizeCacheEntryUpload"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadRequest(ctx, service, data, interceptors);
                });
        case "GetCacheEntryDownloadURL":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "GetCacheEntryDownloadURL"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLRequest(ctx, service, data, interceptors);
                });
        case "DeleteCacheEntry":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "DeleteCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryRequest(ctx, service, data, interceptors);
                });
        case "ListCacheEntries":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "ListCacheEntries"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceListCacheEntriesRequest(ctx, service, data, interceptors);
                });
        case "LookupCacheEntry":
            return (ctx, service, data, interceptors)=>$3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
                    ctx = Object.assign(Object.assign({}, ctx), {
                        methodName: "LookupCacheEntry"
                    });
                    yield events.onMatch(ctx);
                    return $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryRequest(ctx, service, data, interceptors);
                });
        default:
            events.onNotFound();
            const msg = `no handler found`;
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceListCacheEntriesRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceListCacheEntriesJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceListCacheEntriesProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryRequest(ctx, service, data, interceptors) {
    switch(ctx.contentType){
        case $72adb113309a6e61$exports.TwirpContentType.JSON:
            return $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryJSON(ctx, service, data, interceptors);
        case $72adb113309a6e61$exports.TwirpContentType.Protobuf:
            return $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.BadRoute, msg);
    }
}
function $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.CreateCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.CreateCacheEntry(ctx, inputReq);
            });
        } else response = yield service.CreateCacheEntry(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.CreateCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.FinalizeCacheEntryUpload(ctx, inputReq);
            });
        } else response = yield service.FinalizeCacheEntryUpload(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.GetCacheEntryDownloadURL(ctx, inputReq);
            });
        } else response = yield service.GetCacheEntryDownloadURL(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.DeleteCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.DeleteCacheEntry(ctx, inputReq);
            });
        } else response = yield service.DeleteCacheEntry(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.DeleteCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceListCacheEntriesJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.ListCacheEntriesRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.ListCacheEntries(ctx, inputReq);
            });
        } else response = yield service.ListCacheEntries(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.ListCacheEntriesResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryJSON(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            const body = JSON.parse(data.toString() || "{}");
            request = $ff2edadefdb8aa89$exports.LookupCacheEntryRequest.fromJson(body, {
                ignoreUnknownFields: true
            });
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the json request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.LookupCacheEntry(ctx, inputReq);
            });
        } else response = yield service.LookupCacheEntry(ctx, request);
        return JSON.stringify($ff2edadefdb8aa89$exports.LookupCacheEntryResponse.toJson(response, {
            useProtoFieldName: true,
            emitDefaultValues: false
        }));
    });
}
function $3744e11db6df705d$var$handleCacheServiceCreateCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.CreateCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.CreateCacheEntry(ctx, inputReq);
            });
        } else response = yield service.CreateCacheEntry(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.CreateCacheEntryResponse.toBinary(response));
    });
}
function $3744e11db6df705d$var$handleCacheServiceFinalizeCacheEntryUploadProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.FinalizeCacheEntryUpload(ctx, inputReq);
            });
        } else response = yield service.FinalizeCacheEntryUpload(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.FinalizeCacheEntryUploadResponse.toBinary(response));
    });
}
function $3744e11db6df705d$var$handleCacheServiceGetCacheEntryDownloadURLProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.GetCacheEntryDownloadURL(ctx, inputReq);
            });
        } else response = yield service.GetCacheEntryDownloadURL(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.GetCacheEntryDownloadURLResponse.toBinary(response));
    });
}
function $3744e11db6df705d$var$handleCacheServiceDeleteCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.DeleteCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.DeleteCacheEntry(ctx, inputReq);
            });
        } else response = yield service.DeleteCacheEntry(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.DeleteCacheEntryResponse.toBinary(response));
    });
}
function $3744e11db6df705d$var$handleCacheServiceListCacheEntriesProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.ListCacheEntriesRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.ListCacheEntries(ctx, inputReq);
            });
        } else response = yield service.ListCacheEntries(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.ListCacheEntriesResponse.toBinary(response));
    });
}
function $3744e11db6df705d$var$handleCacheServiceLookupCacheEntryProtobuf(ctx, service, data, interceptors) {
    return $3744e11db6df705d$var$__awaiter(this, void 0, void 0, function*() {
        let request;
        let response;
        try {
            request = $ff2edadefdb8aa89$exports.LookupCacheEntryRequest.fromBinary(data);
        } catch (e) {
            if (e instanceof Error) {
                const msg = "the protobuf request could not be decoded";
                throw new $72adb113309a6e61$exports.TwirpError($72adb113309a6e61$exports.TwirpErrorCode.Malformed, msg).withCause(e, true);
            }
        }
        if (interceptors && interceptors.length > 0) {
            const interceptor = (0, $72adb113309a6e61$exports.chainInterceptors)(...interceptors);
            response = yield interceptor(ctx, request, (ctx, inputReq)=>{
                return service.LookupCacheEntry(ctx, inputReq);
            });
        } else response = yield service.LookupCacheEntry(ctx, request);
        return Buffer.from($ff2edadefdb8aa89$exports.LookupCacheEntryResponse.toBinary(response));
    });
}


//# sourceMappingURL=cache.twirp.2364b6e3.js.map
