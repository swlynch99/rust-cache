require("./errors.4ecccb6a.js");

"use strict";
var $5f8e298fe4d4d236$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $aacdeab158e71516$exports = {};
$aacdeab158e71516$exports = new URL("errors.4ecccb6a.js", "file:" + __filename).toString();


/**
 * Supported Twirp Content-Type
 */ var $5f8e298fe4d4d236$var$TwirpContentType;
(function(TwirpContentType) {
    TwirpContentType[TwirpContentType["Protobuf"] = 0] = "Protobuf";
    TwirpContentType[TwirpContentType["JSON"] = 1] = "JSON";
    TwirpContentType[TwirpContentType["Unknown"] = 2] = "Unknown";
})($5f8e298fe4d4d236$var$TwirpContentType = module.exports.TwirpContentType || (module.exports.TwirpContentType = {}));
/**
 * Get supported content-type
 * @param mimeType
 */ function $5f8e298fe4d4d236$var$getContentType(mimeType) {
    switch(mimeType){
        case "application/protobuf":
            return $5f8e298fe4d4d236$var$TwirpContentType.Protobuf;
        case "application/json":
            return $5f8e298fe4d4d236$var$TwirpContentType.JSON;
        default:
            return $5f8e298fe4d4d236$var$TwirpContentType.Unknown;
    }
}
module.exports.getContentType = $5f8e298fe4d4d236$var$getContentType;
/**
 * Validate a twirp request
 * @param ctx
 * @param request
 * @param pathPrefix
 */ function $5f8e298fe4d4d236$var$validateRequest(ctx, request, pathPrefix) {
    if (request.method !== "POST") {
        const msg = `unsupported method ${request.method} (only POST is allowed)`;
        throw new $aacdeab158e71516$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    const path = $5f8e298fe4d4d236$var$parseTwirpPath(request.url || "");
    if (path.pkgService !== (ctx.packageName ? ctx.packageName + "." : "") + ctx.serviceName) {
        const msg = `no handler for path ${request.url}`;
        throw new $aacdeab158e71516$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    if (path.prefix !== pathPrefix) {
        const msg = `invalid path prefix ${path.prefix}, expected ${pathPrefix}, on path ${request.url}`;
        throw new $aacdeab158e71516$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    const mimeContentType = request.headers["content-type"] || "";
    if (ctx.contentType === $5f8e298fe4d4d236$var$TwirpContentType.Unknown) {
        const msg = `unexpected Content-Type: ${request.headers["content-type"]}`;
        throw new $aacdeab158e71516$exports.BadRouteError(msg, request.method || "", request.url || "");
    }
    return Object.assign(Object.assign({}, path), {
        mimeContentType: mimeContentType,
        contentType: ctx.contentType
    });
}
module.exports.validateRequest = $5f8e298fe4d4d236$var$validateRequest;
/**
 * Get request data from the body
 * @param req
 */ function $5f8e298fe4d4d236$var$getRequestData(req) {
    return new Promise((resolve, reject)=>{
        const reqWithRawBody = req;
        if (reqWithRawBody.rawBody instanceof Buffer) {
            resolve(reqWithRawBody.rawBody);
            return;
        }
        const chunks = [];
        req.on("data", (chunk)=>chunks.push(chunk));
        req.on("end", ()=>$5f8e298fe4d4d236$var$__awaiter(this, void 0, void 0, function*() {
                const data = Buffer.concat(chunks);
                resolve(data);
            }));
        req.on("error", (err)=>{
            if (req.aborted) reject(new $aacdeab158e71516$exports.TwirpError($aacdeab158e71516$exports.TwirpErrorCode.DeadlineExceeded, "failed to read request: deadline exceeded"));
            else reject(new $aacdeab158e71516$exports.TwirpError($aacdeab158e71516$exports.TwirpErrorCode.Malformed, err.message).withCause(err));
        });
        req.on("close", ()=>{
            reject(new $aacdeab158e71516$exports.TwirpError($aacdeab158e71516$exports.TwirpErrorCode.Canceled, "failed to read request: context canceled"));
        });
    });
}
module.exports.getRequestData = $5f8e298fe4d4d236$var$getRequestData;
/**
 * Parses twirp url path
 * @param path
 */ function $5f8e298fe4d4d236$var$parseTwirpPath(path) {
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
module.exports.parseTwirpPath = $5f8e298fe4d4d236$var$parseTwirpPath;


//# sourceMappingURL=request.2253ba90.js.map
