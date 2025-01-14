require("./errors.2ac23834.js");

"use strict";
var $43c15920fa3e892b$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.parseTwirpPath = module.exports.getRequestData = module.exports.validateRequest = module.exports.getContentType = module.exports.TwirpContentType = void 0;
var $71b6d8c7e110c0e3$exports = {};
$71b6d8c7e110c0e3$exports = new URL("errors.2ac23834.js", "file:" + __filename).toString();


/**
 * Supported Twirp Content-Type
 */ var $43c15920fa3e892b$var$TwirpContentType;
(function(TwirpContentType) {
    TwirpContentType[TwirpContentType["Protobuf"] = 0] = "Protobuf";
    TwirpContentType[TwirpContentType["JSON"] = 1] = "JSON";
    TwirpContentType[TwirpContentType["Unknown"] = 2] = "Unknown";
})($43c15920fa3e892b$var$TwirpContentType = module.exports.TwirpContentType || (module.exports.TwirpContentType = {}));
/**
 * Get supported content-type
 * @param mimeType
 */ function $43c15920fa3e892b$var$getContentType(mimeType) {
    switch(mimeType){
        case "application/protobuf":
            return $43c15920fa3e892b$var$TwirpContentType.Protobuf;
        case "application/json":
            return $43c15920fa3e892b$var$TwirpContentType.JSON;
        default:
            return $43c15920fa3e892b$var$TwirpContentType.Unknown;
    }
}
module.exports.getContentType = $43c15920fa3e892b$var$getContentType;
/**
 * Validate a twirp request
 * @param ctx
 * @param request
 * @param pathPrefix
 */ function $43c15920fa3e892b$var$validateRequest(ctx, request, pathPrefix) {
    if (request.method !== "POST") {
        const msg = `unsupported method ${request.method} (only POST is allowed)`;
        throw new $71b6d8c7e110c0e3$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    const path = $43c15920fa3e892b$var$parseTwirpPath(request.url || "");
    if (path.pkgService !== (ctx.packageName ? ctx.packageName + "." : "") + ctx.serviceName) {
        const msg = `no handler for path ${request.url}`;
        throw new $71b6d8c7e110c0e3$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    if (path.prefix !== pathPrefix) {
        const msg = `invalid path prefix ${path.prefix}, expected ${pathPrefix}, on path ${request.url}`;
        throw new $71b6d8c7e110c0e3$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    const mimeContentType = request.headers["content-type"] || "";
    if (ctx.contentType === $43c15920fa3e892b$var$TwirpContentType.Unknown) {
        const msg = `unexpected Content-Type: ${request.headers["content-type"]}`;
        throw new $71b6d8c7e110c0e3$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    return Object.assign(Object.assign({}, path), {
        mimeContentType: mimeContentType,
        contentType: ctx.contentType
    });
}
module.exports.validateRequest = $43c15920fa3e892b$var$validateRequest;
/**
 * Get request data from the body
 * @param req
 */ function $43c15920fa3e892b$var$getRequestData(req) {
    return new Promise((resolve, reject)=>{
        const reqWithRawBody = req;
        if (reqWithRawBody.rawBody instanceof Buffer) {
            resolve(reqWithRawBody.rawBody);
            return;
        }
        const chunks = [];
        req.on("data", (chunk)=>chunks.push(chunk));
        req.on("end", ()=>$43c15920fa3e892b$var$__awaiter(this, void 0, void 0, function*() {
                const data = Buffer.concat(chunks);
                resolve(data);
            }));
        req.on("error", (err)=>{
            if (req.aborted) reject(new $71b6d8c7e110c0e3$exports.TwirpError($71b6d8c7e110c0e3$exports.TwirpErrorCode.DeadlineExceeded, "failed to read request: deadline exceeded"));
            else reject(new $71b6d8c7e110c0e3$exports.TwirpError($71b6d8c7e110c0e3$exports.TwirpErrorCode.Malformed, err.message).withCause(err));
        });
        req.on("close", ()=>{
            reject(new $71b6d8c7e110c0e3$exports.TwirpError($71b6d8c7e110c0e3$exports.TwirpErrorCode.Canceled, "failed to read request: context canceled"));
        });
    });
}
module.exports.getRequestData = $43c15920fa3e892b$var$getRequestData;
/**
 * Parses twirp url path
 * @param path
 */ function $43c15920fa3e892b$var$parseTwirpPath(path) {
    const parts = path.split("/");
    if (parts.length < 2) return {
        pkgService: "",
        method: "",
        prefix: ""
    };
    return {
        method: parts[parts.length - 1],
        pkgService: parts[parts.length - 2],
        prefix: parts.slice(0, parts.length - 2).join("/")
    };
}
module.exports.parseTwirpPath = $43c15920fa3e892b$var$parseTwirpPath;


