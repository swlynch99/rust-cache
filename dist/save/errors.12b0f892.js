'use strict';
class $ccc7626a0d2583f3$var$UndiciError extends Error {
    constructor(message){
        super(message);
        this.name = 'UndiciError';
        this.code = 'UND_ERR';
    }
}
class $ccc7626a0d2583f3$var$ConnectTimeoutError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ConnectTimeoutError);
        this.name = 'ConnectTimeoutError';
        this.message = message || 'Connect Timeout Error';
        this.code = 'UND_ERR_CONNECT_TIMEOUT';
    }
}
class $ccc7626a0d2583f3$var$HeadersTimeoutError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$HeadersTimeoutError);
        this.name = 'HeadersTimeoutError';
        this.message = message || 'Headers Timeout Error';
        this.code = 'UND_ERR_HEADERS_TIMEOUT';
    }
}
class $ccc7626a0d2583f3$var$HeadersOverflowError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$HeadersOverflowError);
        this.name = 'HeadersOverflowError';
        this.message = message || 'Headers Overflow Error';
        this.code = 'UND_ERR_HEADERS_OVERFLOW';
    }
}
class $ccc7626a0d2583f3$var$BodyTimeoutError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$BodyTimeoutError);
        this.name = 'BodyTimeoutError';
        this.message = message || 'Body Timeout Error';
        this.code = 'UND_ERR_BODY_TIMEOUT';
    }
}
class $ccc7626a0d2583f3$var$ResponseStatusCodeError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message, statusCode, headers, body){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ResponseStatusCodeError);
        this.name = 'ResponseStatusCodeError';
        this.message = message || 'Response Status Code Error';
        this.code = 'UND_ERR_RESPONSE_STATUS_CODE';
        this.body = body;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
    }
}
class $ccc7626a0d2583f3$var$InvalidArgumentError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$InvalidArgumentError);
        this.name = 'InvalidArgumentError';
        this.message = message || 'Invalid Argument Error';
        this.code = 'UND_ERR_INVALID_ARG';
    }
}
class $ccc7626a0d2583f3$var$InvalidReturnValueError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$InvalidReturnValueError);
        this.name = 'InvalidReturnValueError';
        this.message = message || 'Invalid Return Value Error';
        this.code = 'UND_ERR_INVALID_RETURN_VALUE';
    }
}
class $ccc7626a0d2583f3$var$RequestAbortedError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$RequestAbortedError);
        this.name = 'AbortError';
        this.message = message || 'Request aborted';
        this.code = 'UND_ERR_ABORTED';
    }
}
class $ccc7626a0d2583f3$var$InformationalError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$InformationalError);
        this.name = 'InformationalError';
        this.message = message || 'Request information';
        this.code = 'UND_ERR_INFO';
    }
}
class $ccc7626a0d2583f3$var$RequestContentLengthMismatchError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$RequestContentLengthMismatchError);
        this.name = 'RequestContentLengthMismatchError';
        this.message = message || 'Request body length does not match content-length header';
        this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH';
    }
}
class $ccc7626a0d2583f3$var$ResponseContentLengthMismatchError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ResponseContentLengthMismatchError);
        this.name = 'ResponseContentLengthMismatchError';
        this.message = message || 'Response body length does not match content-length header';
        this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH';
    }
}
class $ccc7626a0d2583f3$var$ClientDestroyedError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ClientDestroyedError);
        this.name = 'ClientDestroyedError';
        this.message = message || 'The client is destroyed';
        this.code = 'UND_ERR_DESTROYED';
    }
}
class $ccc7626a0d2583f3$var$ClientClosedError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ClientClosedError);
        this.name = 'ClientClosedError';
        this.message = message || 'The client is closed';
        this.code = 'UND_ERR_CLOSED';
    }
}
class $ccc7626a0d2583f3$var$SocketError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message, socket){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$SocketError);
        this.name = 'SocketError';
        this.message = message || 'Socket error';
        this.code = 'UND_ERR_SOCKET';
        this.socket = socket;
    }
}
class $ccc7626a0d2583f3$var$NotSupportedError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$NotSupportedError);
        this.name = 'NotSupportedError';
        this.message = message || 'Not supported error';
        this.code = 'UND_ERR_NOT_SUPPORTED';
    }
}
class $ccc7626a0d2583f3$var$BalancedPoolMissingUpstreamError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$NotSupportedError);
        this.name = 'MissingUpstreamError';
        this.message = message || 'No upstream has been added to the BalancedPool';
        this.code = 'UND_ERR_BPL_MISSING_UPSTREAM';
    }
}
class $ccc7626a0d2583f3$var$HTTPParserError extends Error {
    constructor(message, code, data){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$HTTPParserError);
        this.name = 'HTTPParserError';
        this.code = code ? `HPE_${code}` : undefined;
        this.data = data ? data.toString() : undefined;
    }
}
class $ccc7626a0d2583f3$var$ResponseExceededMaxSizeError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$ResponseExceededMaxSizeError);
        this.name = 'ResponseExceededMaxSizeError';
        this.message = message || 'Response content exceeded max size';
        this.code = 'UND_ERR_RES_EXCEEDED_MAX_SIZE';
    }
}
class $ccc7626a0d2583f3$var$RequestRetryError extends $ccc7626a0d2583f3$var$UndiciError {
    constructor(message, code, { headers: headers, data: data }){
        super(message);
        Error.captureStackTrace(this, $ccc7626a0d2583f3$var$RequestRetryError);
        this.name = 'RequestRetryError';
        this.message = message || 'Request retry error';
        this.code = 'UND_ERR_REQ_RETRY';
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
}
module.exports = {
    HTTPParserError: $ccc7626a0d2583f3$var$HTTPParserError,
    UndiciError: $ccc7626a0d2583f3$var$UndiciError,
    HeadersTimeoutError: $ccc7626a0d2583f3$var$HeadersTimeoutError,
    HeadersOverflowError: $ccc7626a0d2583f3$var$HeadersOverflowError,
    BodyTimeoutError: $ccc7626a0d2583f3$var$BodyTimeoutError,
    RequestContentLengthMismatchError: $ccc7626a0d2583f3$var$RequestContentLengthMismatchError,
    ConnectTimeoutError: $ccc7626a0d2583f3$var$ConnectTimeoutError,
    ResponseStatusCodeError: $ccc7626a0d2583f3$var$ResponseStatusCodeError,
    InvalidArgumentError: $ccc7626a0d2583f3$var$InvalidArgumentError,
    InvalidReturnValueError: $ccc7626a0d2583f3$var$InvalidReturnValueError,
    RequestAbortedError: $ccc7626a0d2583f3$var$RequestAbortedError,
    ClientDestroyedError: $ccc7626a0d2583f3$var$ClientDestroyedError,
    ClientClosedError: $ccc7626a0d2583f3$var$ClientClosedError,
    InformationalError: $ccc7626a0d2583f3$var$InformationalError,
    SocketError: $ccc7626a0d2583f3$var$SocketError,
    NotSupportedError: $ccc7626a0d2583f3$var$NotSupportedError,
    ResponseContentLengthMismatchError: $ccc7626a0d2583f3$var$ResponseContentLengthMismatchError,
    BalancedPoolMissingUpstreamError: $ccc7626a0d2583f3$var$BalancedPoolMissingUpstreamError,
    ResponseExceededMaxSizeError: $ccc7626a0d2583f3$var$ResponseExceededMaxSizeError,
    RequestRetryError: $ccc7626a0d2583f3$var$RequestRetryError
};


