
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
parcelRegister("gQxCu", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isValidErrorCode = module.exports.httpStatusFromErrorCode = module.exports.TwirpErrorCode = module.exports.BadRouteError = module.exports.InternalServerErrorWith = module.exports.InternalServerError = module.exports.RequiredArgumentError = module.exports.InvalidArgumentError = module.exports.NotFoundError = module.exports.TwirpError = void 0;
/**
 * Represents a twirp error
 */ class $c43b94df4ec4f834$var$TwirpError extends Error {
    constructor(code, msg){
        super(msg);
        this.code = $c43b94df4ec4f834$var$TwirpErrorCode.Internal;
        this.meta = {};
        this.code = code;
        this.msg = msg;
        Object.setPrototypeOf(this, $c43b94df4ec4f834$var$TwirpError.prototype);
    }
    /**
     * Adds a metadata kv to the error
     * @param key
     * @param value
     */ withMeta(key, value) {
        this.meta[key] = value;
        return this;
    }
    /**
     * Returns a single metadata value
     * return "" if not found
     * @param key
     */ getMeta(key) {
        return this.meta[key] || "";
    }
    /**
     * Add the original error cause
     * @param err
     * @param addMeta
     */ withCause(err, addMeta = false) {
        this._originalCause = err;
        if (addMeta) this.withMeta("cause", err.message);
        return this;
    }
    cause() {
        return this._originalCause;
    }
    /**
     * Returns the error representation to JSON
     */ toJSON() {
        try {
            return JSON.stringify({
                code: this.code,
                msg: this.msg,
                meta: this.meta
            });
        } catch (e) {
            return `{"code": "internal", "msg": "There was an error but it could not be serialized into JSON"}`;
        }
    }
    /**
     * Create a twirp error from an object
     * @param obj
     */ static fromObject(obj) {
        const code = obj["code"] || $c43b94df4ec4f834$var$TwirpErrorCode.Unknown;
        const msg = obj["msg"] || "unknown";
        const error = new $c43b94df4ec4f834$var$TwirpError(code, msg);
        if (obj["meta"]) Object.keys(obj["meta"]).forEach((key)=>{
            error.withMeta(key, obj["meta"][key]);
        });
        return error;
    }
}
module.exports.TwirpError = $c43b94df4ec4f834$var$TwirpError;
/**
 * NotFoundError constructor for the common NotFound error.
 */ class $c43b94df4ec4f834$var$NotFoundError extends $c43b94df4ec4f834$var$TwirpError {
    constructor(msg){
        super($c43b94df4ec4f834$var$TwirpErrorCode.NotFound, msg);
    }
}
module.exports.NotFoundError = $c43b94df4ec4f834$var$NotFoundError;
/**
 * InvalidArgumentError constructor for the common InvalidArgument error. Can be
 * used when an argument has invalid format, is a number out of range, is a bad
 * option, etc).
 */ class $c43b94df4ec4f834$var$InvalidArgumentError extends $c43b94df4ec4f834$var$TwirpError {
    constructor(argument, validationMsg){
        super($c43b94df4ec4f834$var$TwirpErrorCode.InvalidArgument, argument + " " + validationMsg);
        this.withMeta("argument", argument);
    }
}
module.exports.InvalidArgumentError = $c43b94df4ec4f834$var$InvalidArgumentError;
/**
 * RequiredArgumentError is a more specific constructor for InvalidArgument
 * error. Should be used when the argument is required (expected to have a
 * non-zero value).
 */ class $c43b94df4ec4f834$var$RequiredArgumentError extends $c43b94df4ec4f834$var$InvalidArgumentError {
    constructor(argument){
        super(argument, "is required");
    }
}
module.exports.RequiredArgumentError = $c43b94df4ec4f834$var$RequiredArgumentError;
/**
 * InternalError constructor for the common Internal error. Should be used to
 * specify that something bad or unexpected happened.
 */ class $c43b94df4ec4f834$var$InternalServerError extends $c43b94df4ec4f834$var$TwirpError {
    constructor(msg){
        super($c43b94df4ec4f834$var$TwirpErrorCode.Internal, msg);
    }
}
module.exports.InternalServerError = $c43b94df4ec4f834$var$InternalServerError;
/**
 * InternalErrorWith makes an internal error, wrapping the original error and using it
 * for the error message, and with metadata "cause" with the original error type.
 * This function is used by Twirp services to wrap non-Twirp errors as internal errors.
 * The wrapped error can be extracted later with err.cause()
 */ class $c43b94df4ec4f834$var$InternalServerErrorWith extends $c43b94df4ec4f834$var$InternalServerError {
    constructor(err){
        super(err.message);
        this.withMeta("cause", err.name);
        this.withCause(err);
    }
}
module.exports.InternalServerErrorWith = $c43b94df4ec4f834$var$InternalServerErrorWith;
/**
 * A standard BadRoute Error
 */ class $c43b94df4ec4f834$var$BadRouteError extends $c43b94df4ec4f834$var$TwirpError {
    constructor(msg, method, url){
        super($c43b94df4ec4f834$var$TwirpErrorCode.BadRoute, msg);
        this.withMeta("twirp_invalid_route", method + " " + url);
    }
}
module.exports.BadRouteError = $c43b94df4ec4f834$var$BadRouteError;
var $c43b94df4ec4f834$var$TwirpErrorCode;
(function(TwirpErrorCode) {
    // Canceled indicates the operation was cancelled (typically by the caller).
    TwirpErrorCode["Canceled"] = "canceled";
    // Unknown error. For example when handling errors raised by APIs that do not
    // return enough error information.
    TwirpErrorCode["Unknown"] = "unknown";
    // InvalidArgument indicates client specified an invalid argument. It
    // indicates arguments that are problematic regardless of the state of the
    // system (i.e. a malformed file name, required argument, number out of range,
    // etc.).
    TwirpErrorCode["InvalidArgument"] = "invalid_argument";
    // Malformed indicates an error occurred while decoding the client's request.
    // This may mean that the message was encoded improperly, or that there is a
    // disagreement in message format between the client and server.
    TwirpErrorCode["Malformed"] = "malformed";
    // DeadlineExceeded means operation expired before completion. For operations
    // that change the state of the system, this error may be returned even if the
    // operation has completed successfully (timeout).
    TwirpErrorCode["DeadlineExceeded"] = "deadline_exceeded";
    // NotFound means some requested entity was not found.
    TwirpErrorCode["NotFound"] = "not_found";
    // BadRoute means that the requested URL path wasn't routable to a Twirp
    // service and method. This is returned by the generated server, and usually
    // shouldn't be returned by applications. Instead, applications should use
    // NotFound or Unimplemented.
    TwirpErrorCode["BadRoute"] = "bad_route";
    // AlreadyExists means an attempt to create an entity failed because one
    // already exists.
    TwirpErrorCode["AlreadyExists"] = "already_exists";
    // PermissionDenied indicates the caller does not have permission to execute
    // the specified operation. It must not be used if the caller cannot be
    // identified (Unauthenticated).
    TwirpErrorCode["PermissionDenied"] = "permission_denied";
    // Unauthenticated indicates the request does not have valid authentication
    // credentials for the operation.
    TwirpErrorCode["Unauthenticated"] = "unauthenticated";
    // ResourceExhausted indicates some resource has been exhausted, perhaps a
    // per-user quota, or perhaps the entire file system is out of space.
    TwirpErrorCode["ResourceExhausted"] = "resource_exhausted";
    // FailedPrecondition indicates operation was rejected because the system is
    // not in a state required for the operation's execution. For example, doing
    // an rmdir operation on a directory that is non-empty, or on a non-directory
    // object, or when having conflicting read-modify-write on the same resource.
    TwirpErrorCode["FailedPrecondition"] = "failed_precondition";
    // Aborted indicates the operation was aborted, typically due to a concurrency
    // issue like sequencer check failures, transaction aborts, etc.
    TwirpErrorCode["Aborted"] = "aborted";
    // OutOfRange means operation was attempted past the valid range. For example,
    // seeking or reading past end of a paginated collection.
    //
    // Unlike InvalidArgument, this error indicates a problem that may be fixed if
    // the system state changes (i.e. adding more items to the collection).
    //
    // There is a fair bit of overlap between FailedPrecondition and OutOfRange.
    // We recommend using OutOfRange (the more specific error) when it applies so
    // that callers who are iterating through a space can easily look for an
    // OutOfRange error to detect when they are done.
    TwirpErrorCode["OutOfRange"] = "out_of_range";
    // Unimplemented indicates operation is not implemented or not
    // supported/enabled in this service.
    TwirpErrorCode["Unimplemented"] = "unimplemented";
    // Internal errors. When some invariants expected by the underlying system
    // have been broken. In other words, something bad happened in the library or
    // backend service. Do not confuse with HTTP Internal Server Error; an
    // Internal error could also happen on the client code, i.e. when parsing a
    // server response.
    TwirpErrorCode["Internal"] = "internal";
    // Unavailable indicates the service is currently unavailable. This is a most
    // likely a transient condition and may be corrected by retrying with a
    // backoff.
    TwirpErrorCode["Unavailable"] = "unavailable";
    // DataLoss indicates unrecoverable data loss or corruption.
    TwirpErrorCode["DataLoss"] = "data_loss";
})($c43b94df4ec4f834$var$TwirpErrorCode = module.exports.TwirpErrorCode || (module.exports.TwirpErrorCode = {}));
// ServerHTTPStatusFromErrorCode maps a Twirp error type into a similar HTTP
// response status. It is used by the Twirp server handler to set the HTTP
// response status code. Returns 0 if the ErrorCode is invalid.
function $c43b94df4ec4f834$var$httpStatusFromErrorCode(code) {
    switch(code){
        case $c43b94df4ec4f834$var$TwirpErrorCode.Canceled:
            return 408; // RequestTimeout
        case $c43b94df4ec4f834$var$TwirpErrorCode.Unknown:
            return 500; // Internal Server Error
        case $c43b94df4ec4f834$var$TwirpErrorCode.InvalidArgument:
            return 400; // BadRequest
        case $c43b94df4ec4f834$var$TwirpErrorCode.Malformed:
            return 400; // BadRequest
        case $c43b94df4ec4f834$var$TwirpErrorCode.DeadlineExceeded:
            return 408; // RequestTimeout
        case $c43b94df4ec4f834$var$TwirpErrorCode.NotFound:
            return 404; // Not Found
        case $c43b94df4ec4f834$var$TwirpErrorCode.BadRoute:
            return 404; // Not Found
        case $c43b94df4ec4f834$var$TwirpErrorCode.AlreadyExists:
            return 409; // Conflict
        case $c43b94df4ec4f834$var$TwirpErrorCode.PermissionDenied:
            return 403; // Forbidden
        case $c43b94df4ec4f834$var$TwirpErrorCode.Unauthenticated:
            return 401; // Unauthorized
        case $c43b94df4ec4f834$var$TwirpErrorCode.ResourceExhausted:
            return 429; // Too Many Requests
        case $c43b94df4ec4f834$var$TwirpErrorCode.FailedPrecondition:
            return 412; // Precondition Failed
        case $c43b94df4ec4f834$var$TwirpErrorCode.Aborted:
            return 409; // Conflict
        case $c43b94df4ec4f834$var$TwirpErrorCode.OutOfRange:
            return 400; // Bad Request
        case $c43b94df4ec4f834$var$TwirpErrorCode.Unimplemented:
            return 501; // Not Implemented
        case $c43b94df4ec4f834$var$TwirpErrorCode.Internal:
            return 500; // Internal Server Error
        case $c43b94df4ec4f834$var$TwirpErrorCode.Unavailable:
            return 503; // Service Unavailable
        case $c43b94df4ec4f834$var$TwirpErrorCode.DataLoss:
            return 500; // Internal Server Error
        default:
            return 0; // Invalid!
    }
}
module.exports.httpStatusFromErrorCode = $c43b94df4ec4f834$var$httpStatusFromErrorCode;
// IsValidErrorCode returns true if is one of the valid predefined constants.
function $c43b94df4ec4f834$var$isValidErrorCode(code) {
    return $c43b94df4ec4f834$var$httpStatusFromErrorCode(code) != 0;
}
module.exports.isValidErrorCode = $c43b94df4ec4f834$var$isValidErrorCode;

});


