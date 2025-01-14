'use strict';
class $394f6493822c90f8$var$UndiciError extends Error {
    constructor(message){
        super(message);
        this.name = 'UndiciError';
        this.code = 'UND_ERR';
    }
}
class $394f6493822c90f8$var$ConnectTimeoutError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ConnectTimeoutError);
        this.name = 'ConnectTimeoutError';
        this.message = message || 'Connect Timeout Error';
        this.code = 'UND_ERR_CONNECT_TIMEOUT';
    }
}
class $394f6493822c90f8$var$HeadersTimeoutError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$HeadersTimeoutError);
        this.name = 'HeadersTimeoutError';
        this.message = message || 'Headers Timeout Error';
        this.code = 'UND_ERR_HEADERS_TIMEOUT';
    }
}
class $394f6493822c90f8$var$HeadersOverflowError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$HeadersOverflowError);
        this.name = 'HeadersOverflowError';
        this.message = message || 'Headers Overflow Error';
        this.code = 'UND_ERR_HEADERS_OVERFLOW';
    }
}
class $394f6493822c90f8$var$BodyTimeoutError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$BodyTimeoutError);
        this.name = 'BodyTimeoutError';
        this.message = message || 'Body Timeout Error';
        this.code = 'UND_ERR_BODY_TIMEOUT';
    }
}
class $394f6493822c90f8$var$ResponseStatusCodeError extends $394f6493822c90f8$var$UndiciError {
    constructor(message, statusCode, headers, body){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ResponseStatusCodeError);
        this.name = 'ResponseStatusCodeError';
        this.message = message || 'Response Status Code Error';
        this.code = 'UND_ERR_RESPONSE_STATUS_CODE';
        this.body = body;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
    }
}
class $394f6493822c90f8$var$InvalidArgumentError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$InvalidArgumentError);
        this.name = 'InvalidArgumentError';
        this.message = message || 'Invalid Argument Error';
        this.code = 'UND_ERR_INVALID_ARG';
    }
}
class $394f6493822c90f8$var$InvalidReturnValueError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$InvalidReturnValueError);
        this.name = 'InvalidReturnValueError';
        this.message = message || 'Invalid Return Value Error';
        this.code = 'UND_ERR_INVALID_RETURN_VALUE';
    }
}
class $394f6493822c90f8$var$RequestAbortedError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$RequestAbortedError);
        this.name = 'AbortError';
        this.message = message || 'Request aborted';
        this.code = 'UND_ERR_ABORTED';
    }
}
class $394f6493822c90f8$var$InformationalError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$InformationalError);
        this.name = 'InformationalError';
        this.message = message || 'Request information';
        this.code = 'UND_ERR_INFO';
    }
}
class $394f6493822c90f8$var$RequestContentLengthMismatchError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$RequestContentLengthMismatchError);
        this.name = 'RequestContentLengthMismatchError';
        this.message = message || 'Request body length does not match content-length header';
        this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH';
    }
}
class $394f6493822c90f8$var$ResponseContentLengthMismatchError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ResponseContentLengthMismatchError);
        this.name = 'ResponseContentLengthMismatchError';
        this.message = message || 'Response body length does not match content-length header';
        this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH';
    }
}
class $394f6493822c90f8$var$ClientDestroyedError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ClientDestroyedError);
        this.name = 'ClientDestroyedError';
        this.message = message || 'The client is destroyed';
        this.code = 'UND_ERR_DESTROYED';
    }
}
class $394f6493822c90f8$var$ClientClosedError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ClientClosedError);
        this.name = 'ClientClosedError';
        this.message = message || 'The client is closed';
        this.code = 'UND_ERR_CLOSED';
    }
}
class $394f6493822c90f8$var$SocketError extends $394f6493822c90f8$var$UndiciError {
    constructor(message, socket){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$SocketError);
        this.name = 'SocketError';
        this.message = message || 'Socket error';
        this.code = 'UND_ERR_SOCKET';
        this.socket = socket;
    }
}
class $394f6493822c90f8$var$NotSupportedError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$NotSupportedError);
        this.name = 'NotSupportedError';
        this.message = message || 'Not supported error';
        this.code = 'UND_ERR_NOT_SUPPORTED';
    }
}
class $394f6493822c90f8$var$BalancedPoolMissingUpstreamError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$NotSupportedError);
        this.name = 'MissingUpstreamError';
        this.message = message || 'No upstream has been added to the BalancedPool';
        this.code = 'UND_ERR_BPL_MISSING_UPSTREAM';
    }
}
class $394f6493822c90f8$var$HTTPParserError extends Error {
    constructor(message, code, data){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$HTTPParserError);
        this.name = 'HTTPParserError';
        this.code = code ? `HPE_${code}` : undefined;
        this.data = data ? data.toString() : undefined;
    }
}
class $394f6493822c90f8$var$ResponseExceededMaxSizeError extends $394f6493822c90f8$var$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$ResponseExceededMaxSizeError);
        this.name = 'ResponseExceededMaxSizeError';
        this.message = message || 'Response content exceeded max size';
        this.code = 'UND_ERR_RES_EXCEEDED_MAX_SIZE';
    }
}
class $394f6493822c90f8$var$RequestRetryError extends $394f6493822c90f8$var$UndiciError {
    constructor(message, code, { headers: headers, data: data }){
        super(message);
        Error.captureStackTrace(this, $394f6493822c90f8$var$RequestRetryError);
        this.name = 'RequestRetryError';
        this.message = message || 'Request retry error';
        this.code = 'UND_ERR_REQ_RETRY';
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
}
module.exports = {
    HTTPParserError: $394f6493822c90f8$var$HTTPParserError,
    UndiciError: $394f6493822c90f8$var$UndiciError,
    HeadersTimeoutError: $394f6493822c90f8$var$HeadersTimeoutError,
    HeadersOverflowError: $394f6493822c90f8$var$HeadersOverflowError,
    BodyTimeoutError: $394f6493822c90f8$var$BodyTimeoutError,
    RequestContentLengthMismatchError: $394f6493822c90f8$var$RequestContentLengthMismatchError,
    ConnectTimeoutError: $394f6493822c90f8$var$ConnectTimeoutError,
    ResponseStatusCodeError: $394f6493822c90f8$var$ResponseStatusCodeError,
    InvalidArgumentError: $394f6493822c90f8$var$InvalidArgumentError,
    InvalidReturnValueError: $394f6493822c90f8$var$InvalidReturnValueError,
    RequestAbortedError: $394f6493822c90f8$var$RequestAbortedError,
    ClientDestroyedError: $394f6493822c90f8$var$ClientDestroyedError,
    ClientClosedError: $394f6493822c90f8$var$ClientClosedError,
    InformationalError: $394f6493822c90f8$var$InformationalError,
    SocketError: $394f6493822c90f8$var$SocketError,
    NotSupportedError: $394f6493822c90f8$var$NotSupportedError,
    ResponseContentLengthMismatchError: $394f6493822c90f8$var$ResponseContentLengthMismatchError,
    BalancedPoolMissingUpstreamError: $394f6493822c90f8$var$BalancedPoolMissingUpstreamError,
    ResponseExceededMaxSizeError: $394f6493822c90f8$var$ResponseExceededMaxSizeError,
    RequestRetryError: $394f6493822c90f8$var$RequestRetryError
};


//# sourceMappingURL=errors.621f8b7b.js.map
