require("./utils.5b1955c8.js");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.SPECIAL_HEADERS = module.exports.HEADER_STATE = module.exports.MINOR = module.exports.MAJOR = module.exports.CONNECTION_TOKEN_CHARS = module.exports.HEADER_CHARS = module.exports.TOKEN = module.exports.STRICT_TOKEN = module.exports.HEX = module.exports.URL_CHAR = module.exports.STRICT_URL_CHAR = module.exports.USERINFO_CHARS = module.exports.MARK = module.exports.ALPHANUM = module.exports.NUM = module.exports.HEX_MAP = module.exports.NUM_MAP = module.exports.ALPHA = module.exports.FINISH = module.exports.H_METHOD_MAP = module.exports.METHOD_MAP = module.exports.METHODS_RTSP = module.exports.METHODS_ICE = module.exports.METHODS_HTTP = module.exports.METHODS = module.exports.LENIENT_FLAGS = module.exports.FLAGS = module.exports.TYPE = module.exports.ERROR = void 0;
var $0057ddefcd33fa75$exports = {};
$0057ddefcd33fa75$exports = new URL("utils.5b1955c8.js", "file:" + __filename).toString();


// C headers
var $64c6e6c955d880d0$var$ERROR;
(function(ERROR) {
    ERROR[ERROR["OK"] = 0] = "OK";
    ERROR[ERROR["INTERNAL"] = 1] = "INTERNAL";
    ERROR[ERROR["STRICT"] = 2] = "STRICT";
    ERROR[ERROR["LF_EXPECTED"] = 3] = "LF_EXPECTED";
    ERROR[ERROR["UNEXPECTED_CONTENT_LENGTH"] = 4] = "UNEXPECTED_CONTENT_LENGTH";
    ERROR[ERROR["CLOSED_CONNECTION"] = 5] = "CLOSED_CONNECTION";
    ERROR[ERROR["INVALID_METHOD"] = 6] = "INVALID_METHOD";
    ERROR[ERROR["INVALID_URL"] = 7] = "INVALID_URL";
    ERROR[ERROR["INVALID_CONSTANT"] = 8] = "INVALID_CONSTANT";
    ERROR[ERROR["INVALID_VERSION"] = 9] = "INVALID_VERSION";
    ERROR[ERROR["INVALID_HEADER_TOKEN"] = 10] = "INVALID_HEADER_TOKEN";
    ERROR[ERROR["INVALID_CONTENT_LENGTH"] = 11] = "INVALID_CONTENT_LENGTH";
    ERROR[ERROR["INVALID_CHUNK_SIZE"] = 12] = "INVALID_CHUNK_SIZE";
    ERROR[ERROR["INVALID_STATUS"] = 13] = "INVALID_STATUS";
    ERROR[ERROR["INVALID_EOF_STATE"] = 14] = "INVALID_EOF_STATE";
    ERROR[ERROR["INVALID_TRANSFER_ENCODING"] = 15] = "INVALID_TRANSFER_ENCODING";
    ERROR[ERROR["CB_MESSAGE_BEGIN"] = 16] = "CB_MESSAGE_BEGIN";
    ERROR[ERROR["CB_HEADERS_COMPLETE"] = 17] = "CB_HEADERS_COMPLETE";
    ERROR[ERROR["CB_MESSAGE_COMPLETE"] = 18] = "CB_MESSAGE_COMPLETE";
    ERROR[ERROR["CB_CHUNK_HEADER"] = 19] = "CB_CHUNK_HEADER";
    ERROR[ERROR["CB_CHUNK_COMPLETE"] = 20] = "CB_CHUNK_COMPLETE";
    ERROR[ERROR["PAUSED"] = 21] = "PAUSED";
    ERROR[ERROR["PAUSED_UPGRADE"] = 22] = "PAUSED_UPGRADE";
    ERROR[ERROR["PAUSED_H2_UPGRADE"] = 23] = "PAUSED_H2_UPGRADE";
    ERROR[ERROR["USER"] = 24] = "USER";
})($64c6e6c955d880d0$var$ERROR = module.exports.ERROR || (module.exports.ERROR = {}));
var $64c6e6c955d880d0$var$TYPE;
(function(TYPE) {
    TYPE[TYPE["BOTH"] = 0] = "BOTH";
    TYPE[TYPE["REQUEST"] = 1] = "REQUEST";
    TYPE[TYPE["RESPONSE"] = 2] = "RESPONSE";
})($64c6e6c955d880d0$var$TYPE = module.exports.TYPE || (module.exports.TYPE = {}));
var $64c6e6c955d880d0$var$FLAGS;
(function(FLAGS) {
    FLAGS[FLAGS["CONNECTION_KEEP_ALIVE"] = 1] = "CONNECTION_KEEP_ALIVE";
    FLAGS[FLAGS["CONNECTION_CLOSE"] = 2] = "CONNECTION_CLOSE";
    FLAGS[FLAGS["CONNECTION_UPGRADE"] = 4] = "CONNECTION_UPGRADE";
    FLAGS[FLAGS["CHUNKED"] = 8] = "CHUNKED";
    FLAGS[FLAGS["UPGRADE"] = 16] = "UPGRADE";
    FLAGS[FLAGS["CONTENT_LENGTH"] = 32] = "CONTENT_LENGTH";
    FLAGS[FLAGS["SKIPBODY"] = 64] = "SKIPBODY";
    FLAGS[FLAGS["TRAILING"] = 128] = "TRAILING";
    // 1 << 8 is unused
    FLAGS[FLAGS["TRANSFER_ENCODING"] = 512] = "TRANSFER_ENCODING";
})($64c6e6c955d880d0$var$FLAGS = module.exports.FLAGS || (module.exports.FLAGS = {}));
var $64c6e6c955d880d0$var$LENIENT_FLAGS;
(function(LENIENT_FLAGS) {
    LENIENT_FLAGS[LENIENT_FLAGS["HEADERS"] = 1] = "HEADERS";
    LENIENT_FLAGS[LENIENT_FLAGS["CHUNKED_LENGTH"] = 2] = "CHUNKED_LENGTH";
    LENIENT_FLAGS[LENIENT_FLAGS["KEEP_ALIVE"] = 4] = "KEEP_ALIVE";
})($64c6e6c955d880d0$var$LENIENT_FLAGS = module.exports.LENIENT_FLAGS || (module.exports.LENIENT_FLAGS = {}));
var $64c6e6c955d880d0$var$METHODS;
(function(METHODS) {
    METHODS[METHODS["DELETE"] = 0] = "DELETE";
    METHODS[METHODS["GET"] = 1] = "GET";
    METHODS[METHODS["HEAD"] = 2] = "HEAD";
    METHODS[METHODS["POST"] = 3] = "POST";
    METHODS[METHODS["PUT"] = 4] = "PUT";
    /* pathological */ METHODS[METHODS["CONNECT"] = 5] = "CONNECT";
    METHODS[METHODS["OPTIONS"] = 6] = "OPTIONS";
    METHODS[METHODS["TRACE"] = 7] = "TRACE";
    /* WebDAV */ METHODS[METHODS["COPY"] = 8] = "COPY";
    METHODS[METHODS["LOCK"] = 9] = "LOCK";
    METHODS[METHODS["MKCOL"] = 10] = "MKCOL";
    METHODS[METHODS["MOVE"] = 11] = "MOVE";
    METHODS[METHODS["PROPFIND"] = 12] = "PROPFIND";
    METHODS[METHODS["PROPPATCH"] = 13] = "PROPPATCH";
    METHODS[METHODS["SEARCH"] = 14] = "SEARCH";
    METHODS[METHODS["UNLOCK"] = 15] = "UNLOCK";
    METHODS[METHODS["BIND"] = 16] = "BIND";
    METHODS[METHODS["REBIND"] = 17] = "REBIND";
    METHODS[METHODS["UNBIND"] = 18] = "UNBIND";
    METHODS[METHODS["ACL"] = 19] = "ACL";
    /* subversion */ METHODS[METHODS["REPORT"] = 20] = "REPORT";
    METHODS[METHODS["MKACTIVITY"] = 21] = "MKACTIVITY";
    METHODS[METHODS["CHECKOUT"] = 22] = "CHECKOUT";
    METHODS[METHODS["MERGE"] = 23] = "MERGE";
    /* upnp */ METHODS[METHODS["M-SEARCH"] = 24] = "M-SEARCH";
    METHODS[METHODS["NOTIFY"] = 25] = "NOTIFY";
    METHODS[METHODS["SUBSCRIBE"] = 26] = "SUBSCRIBE";
    METHODS[METHODS["UNSUBSCRIBE"] = 27] = "UNSUBSCRIBE";
    /* RFC-5789 */ METHODS[METHODS["PATCH"] = 28] = "PATCH";
    METHODS[METHODS["PURGE"] = 29] = "PURGE";
    /* CalDAV */ METHODS[METHODS["MKCALENDAR"] = 30] = "MKCALENDAR";
    /* RFC-2068, section 19.6.1.2 */ METHODS[METHODS["LINK"] = 31] = "LINK";
    METHODS[METHODS["UNLINK"] = 32] = "UNLINK";
    /* icecast */ METHODS[METHODS["SOURCE"] = 33] = "SOURCE";
    /* RFC-7540, section 11.6 */ METHODS[METHODS["PRI"] = 34] = "PRI";
    /* RFC-2326 RTSP */ METHODS[METHODS["DESCRIBE"] = 35] = "DESCRIBE";
    METHODS[METHODS["ANNOUNCE"] = 36] = "ANNOUNCE";
    METHODS[METHODS["SETUP"] = 37] = "SETUP";
    METHODS[METHODS["PLAY"] = 38] = "PLAY";
    METHODS[METHODS["PAUSE"] = 39] = "PAUSE";
    METHODS[METHODS["TEARDOWN"] = 40] = "TEARDOWN";
    METHODS[METHODS["GET_PARAMETER"] = 41] = "GET_PARAMETER";
    METHODS[METHODS["SET_PARAMETER"] = 42] = "SET_PARAMETER";
    METHODS[METHODS["REDIRECT"] = 43] = "REDIRECT";
    METHODS[METHODS["RECORD"] = 44] = "RECORD";
    /* RAOP */ METHODS[METHODS["FLUSH"] = 45] = "FLUSH";
})($64c6e6c955d880d0$var$METHODS = module.exports.METHODS || (module.exports.METHODS = {}));
module.exports.METHODS_HTTP = [
    $64c6e6c955d880d0$var$METHODS.DELETE,
    $64c6e6c955d880d0$var$METHODS.GET,
    $64c6e6c955d880d0$var$METHODS.HEAD,
    $64c6e6c955d880d0$var$METHODS.POST,
    $64c6e6c955d880d0$var$METHODS.PUT,
    $64c6e6c955d880d0$var$METHODS.CONNECT,
    $64c6e6c955d880d0$var$METHODS.OPTIONS,
    $64c6e6c955d880d0$var$METHODS.TRACE,
    $64c6e6c955d880d0$var$METHODS.COPY,
    $64c6e6c955d880d0$var$METHODS.LOCK,
    $64c6e6c955d880d0$var$METHODS.MKCOL,
    $64c6e6c955d880d0$var$METHODS.MOVE,
    $64c6e6c955d880d0$var$METHODS.PROPFIND,
    $64c6e6c955d880d0$var$METHODS.PROPPATCH,
    $64c6e6c955d880d0$var$METHODS.SEARCH,
    $64c6e6c955d880d0$var$METHODS.UNLOCK,
    $64c6e6c955d880d0$var$METHODS.BIND,
    $64c6e6c955d880d0$var$METHODS.REBIND,
    $64c6e6c955d880d0$var$METHODS.UNBIND,
    $64c6e6c955d880d0$var$METHODS.ACL,
    $64c6e6c955d880d0$var$METHODS.REPORT,
    $64c6e6c955d880d0$var$METHODS.MKACTIVITY,
    $64c6e6c955d880d0$var$METHODS.CHECKOUT,
    $64c6e6c955d880d0$var$METHODS.MERGE,
    $64c6e6c955d880d0$var$METHODS['M-SEARCH'],
    $64c6e6c955d880d0$var$METHODS.NOTIFY,
    $64c6e6c955d880d0$var$METHODS.SUBSCRIBE,
    $64c6e6c955d880d0$var$METHODS.UNSUBSCRIBE,
    $64c6e6c955d880d0$var$METHODS.PATCH,
    $64c6e6c955d880d0$var$METHODS.PURGE,
    $64c6e6c955d880d0$var$METHODS.MKCALENDAR,
    $64c6e6c955d880d0$var$METHODS.LINK,
    $64c6e6c955d880d0$var$METHODS.UNLINK,
    $64c6e6c955d880d0$var$METHODS.PRI,
    // TODO(indutny): should we allow it with HTTP?
    $64c6e6c955d880d0$var$METHODS.SOURCE
];
module.exports.METHODS_ICE = [
    $64c6e6c955d880d0$var$METHODS.SOURCE
];
module.exports.METHODS_RTSP = [
    $64c6e6c955d880d0$var$METHODS.OPTIONS,
    $64c6e6c955d880d0$var$METHODS.DESCRIBE,
    $64c6e6c955d880d0$var$METHODS.ANNOUNCE,
    $64c6e6c955d880d0$var$METHODS.SETUP,
    $64c6e6c955d880d0$var$METHODS.PLAY,
    $64c6e6c955d880d0$var$METHODS.PAUSE,
    $64c6e6c955d880d0$var$METHODS.TEARDOWN,
    $64c6e6c955d880d0$var$METHODS.GET_PARAMETER,
    $64c6e6c955d880d0$var$METHODS.SET_PARAMETER,
    $64c6e6c955d880d0$var$METHODS.REDIRECT,
    $64c6e6c955d880d0$var$METHODS.RECORD,
    $64c6e6c955d880d0$var$METHODS.FLUSH,
    // For AirPlay
    $64c6e6c955d880d0$var$METHODS.GET,
    $64c6e6c955d880d0$var$METHODS.POST
];
module.exports.METHOD_MAP = $0057ddefcd33fa75$exports.enumToMap($64c6e6c955d880d0$var$METHODS);
module.exports.H_METHOD_MAP = {};
Object.keys(module.exports.METHOD_MAP).forEach((key)=>{
    if (/^H/.test(key)) module.exports.H_METHOD_MAP[key] = module.exports.METHOD_MAP[key];
});
var $64c6e6c955d880d0$var$FINISH;
(function(FINISH) {
    FINISH[FINISH["SAFE"] = 0] = "SAFE";
    FINISH[FINISH["SAFE_WITH_CB"] = 1] = "SAFE_WITH_CB";
    FINISH[FINISH["UNSAFE"] = 2] = "UNSAFE";
})($64c6e6c955d880d0$var$FINISH = module.exports.FINISH || (module.exports.FINISH = {}));
module.exports.ALPHA = [];
for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++){
    // Upper case
    module.exports.ALPHA.push(String.fromCharCode(i));
    // Lower case
    module.exports.ALPHA.push(String.fromCharCode(i + 0x20));
}
module.exports.NUM_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
};
module.exports.HEX_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 0XA,
    B: 0XB,
    C: 0XC,
    D: 0XD,
    E: 0XE,
    F: 0XF,
    a: 0xa,
    b: 0xb,
    c: 0xc,
    d: 0xd,
    e: 0xe,
    f: 0xf
};
module.exports.NUM = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
module.exports.ALPHANUM = module.exports.ALPHA.concat(module.exports.NUM);
module.exports.MARK = [
    '-',
    '_',
    '.',
    '!',
    '~',
    '*',
    '\'',
    '(',
    ')'
];
module.exports.USERINFO_CHARS = module.exports.ALPHANUM.concat(module.exports.MARK).concat([
    '%',
    ';',
    ':',
    '&',
    '=',
    '+',
    '$',
    ','
]);
// TODO(indutny): use RFC
module.exports.STRICT_URL_CHAR = [
    '!',
    '"',
    '$',
    '%',
    '&',
    '\'',
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '@',
    '[',
    '\\',
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~'
].concat(module.exports.ALPHANUM);
module.exports.URL_CHAR = module.exports.STRICT_URL_CHAR.concat([
    '\t',
    '\f'
]);
// All characters with 0x80 bit set to 1
for(let i = 0x80; i <= 0xff; i++)module.exports.URL_CHAR.push(i);
module.exports.HEX = module.exports.NUM.concat([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]);
/* Tokens as defined by rfc 2616. Also lowercases them.
 *        token       = 1*<any CHAR except CTLs or separators>
 *     separators     = "(" | ")" | "<" | ">" | "@"
 *                    | "," | ";" | ":" | "\" | <">
 *                    | "/" | "[" | "]" | "?" | "="
 *                    | "{" | "}" | SP | HT
 */ module.exports.STRICT_TOKEN = [
    '!',
    '#',
    '$',
    '%',
    '&',
    '\'',
    '*',
    '+',
    '-',
    '.',
    '^',
    '_',
    '`',
    '|',
    '~'
].concat(module.exports.ALPHANUM);
module.exports.TOKEN = module.exports.STRICT_TOKEN.concat([
    ' '
]);
/*
 * Verify that a char is a valid visible (printable) US-ASCII
 * character or %x80-FF
 */ module.exports.HEADER_CHARS = [
    '\t'
];
for(let i = 32; i <= 255; i++)if (i !== 127) module.exports.HEADER_CHARS.push(i);
// ',' = \x44
module.exports.CONNECTION_TOKEN_CHARS = module.exports.HEADER_CHARS.filter((c)=>c !== 44);
module.exports.MAJOR = module.exports.NUM_MAP;
module.exports.MINOR = module.exports.MAJOR;
var $64c6e6c955d880d0$var$HEADER_STATE;
(function(HEADER_STATE) {
    HEADER_STATE[HEADER_STATE["GENERAL"] = 0] = "GENERAL";
    HEADER_STATE[HEADER_STATE["CONNECTION"] = 1] = "CONNECTION";
    HEADER_STATE[HEADER_STATE["CONTENT_LENGTH"] = 2] = "CONTENT_LENGTH";
    HEADER_STATE[HEADER_STATE["TRANSFER_ENCODING"] = 3] = "TRANSFER_ENCODING";
    HEADER_STATE[HEADER_STATE["UPGRADE"] = 4] = "UPGRADE";
    HEADER_STATE[HEADER_STATE["CONNECTION_KEEP_ALIVE"] = 5] = "CONNECTION_KEEP_ALIVE";
    HEADER_STATE[HEADER_STATE["CONNECTION_CLOSE"] = 6] = "CONNECTION_CLOSE";
    HEADER_STATE[HEADER_STATE["CONNECTION_UPGRADE"] = 7] = "CONNECTION_UPGRADE";
    HEADER_STATE[HEADER_STATE["TRANSFER_ENCODING_CHUNKED"] = 8] = "TRANSFER_ENCODING_CHUNKED";
})($64c6e6c955d880d0$var$HEADER_STATE = module.exports.HEADER_STATE || (module.exports.HEADER_STATE = {}));
module.exports.SPECIAL_HEADERS = {
    'connection': $64c6e6c955d880d0$var$HEADER_STATE.CONNECTION,
    'content-length': $64c6e6c955d880d0$var$HEADER_STATE.CONTENT_LENGTH,
    'proxy-connection': $64c6e6c955d880d0$var$HEADER_STATE.CONNECTION,
    'transfer-encoding': $64c6e6c955d880d0$var$HEADER_STATE.TRANSFER_ENCODING,
    'upgrade': $64c6e6c955d880d0$var$HEADER_STATE.UPGRADE
};


