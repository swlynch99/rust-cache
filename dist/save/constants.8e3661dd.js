var $3x6E5$worker_threads = require("worker_threads");

'use strict';

var $3c4cd99fb0011be9$require$MessageChannel = $3x6E5$worker_threads.MessageChannel;
var $3c4cd99fb0011be9$require$receiveMessageOnPort = $3x6E5$worker_threads.receiveMessageOnPort;
const $3c4cd99fb0011be9$var$corsSafeListedMethods = [
    'GET',
    'HEAD',
    'POST'
];
const $3c4cd99fb0011be9$var$corsSafeListedMethodsSet = new Set($3c4cd99fb0011be9$var$corsSafeListedMethods);
const $3c4cd99fb0011be9$var$nullBodyStatus = [
    101,
    204,
    205,
    304
];
const $3c4cd99fb0011be9$var$redirectStatus = [
    301,
    302,
    303,
    307,
    308
];
const $3c4cd99fb0011be9$var$redirectStatusSet = new Set($3c4cd99fb0011be9$var$redirectStatus);
// https://fetch.spec.whatwg.org/#block-bad-port
const $3c4cd99fb0011be9$var$badPorts = [
    '1',
    '7',
    '9',
    '11',
    '13',
    '15',
    '17',
    '19',
    '20',
    '21',
    '22',
    '23',
    '25',
    '37',
    '42',
    '43',
    '53',
    '69',
    '77',
    '79',
    '87',
    '95',
    '101',
    '102',
    '103',
    '104',
    '109',
    '110',
    '111',
    '113',
    '115',
    '117',
    '119',
    '123',
    '135',
    '137',
    '139',
    '143',
    '161',
    '179',
    '389',
    '427',
    '465',
    '512',
    '513',
    '514',
    '515',
    '526',
    '530',
    '531',
    '532',
    '540',
    '548',
    '554',
    '556',
    '563',
    '587',
    '601',
    '636',
    '989',
    '990',
    '993',
    '995',
    '1719',
    '1720',
    '1723',
    '2049',
    '3659',
    '4045',
    '5060',
    '5061',
    '6000',
    '6566',
    '6665',
    '6666',
    '6667',
    '6668',
    '6669',
    '6697',
    '10080'
];
const $3c4cd99fb0011be9$var$badPortsSet = new Set($3c4cd99fb0011be9$var$badPorts);
// https://w3c.github.io/webappsec-referrer-policy/#referrer-policies
const $3c4cd99fb0011be9$var$referrerPolicy = [
    '',
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url'
];
const $3c4cd99fb0011be9$var$referrerPolicySet = new Set($3c4cd99fb0011be9$var$referrerPolicy);
const $3c4cd99fb0011be9$var$requestRedirect = [
    'follow',
    'manual',
    'error'
];
const $3c4cd99fb0011be9$var$safeMethods = [
    'GET',
    'HEAD',
    'OPTIONS',
    'TRACE'
];
const $3c4cd99fb0011be9$var$safeMethodsSet = new Set($3c4cd99fb0011be9$var$safeMethods);
const $3c4cd99fb0011be9$var$requestMode = [
    'navigate',
    'same-origin',
    'no-cors',
    'cors'
];
const $3c4cd99fb0011be9$var$requestCredentials = [
    'omit',
    'same-origin',
    'include'
];
const $3c4cd99fb0011be9$var$requestCache = [
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
    'only-if-cached'
];
// https://fetch.spec.whatwg.org/#request-body-header-name
const $3c4cd99fb0011be9$var$requestBodyHeader = [
    'content-encoding',
    'content-language',
    'content-location',
    'content-type',
    // See https://github.com/nodejs/undici/issues/2021
    // 'Content-Length' is a forbidden header name, which is typically
    // removed in the Headers implementation. However, undici doesn't
    // filter out headers, so we add it here.
    'content-length'
];
// https://fetch.spec.whatwg.org/#enumdef-requestduplex
const $3c4cd99fb0011be9$var$requestDuplex = [
    'half'
];
// http://fetch.spec.whatwg.org/#forbidden-method
const $3c4cd99fb0011be9$var$forbiddenMethods = [
    'CONNECT',
    'TRACE',
    'TRACK'
];
const $3c4cd99fb0011be9$var$forbiddenMethodsSet = new Set($3c4cd99fb0011be9$var$forbiddenMethods);
const $3c4cd99fb0011be9$var$subresource = [
    'audio',
    'audioworklet',
    'font',
    'image',
    'manifest',
    'paintworklet',
    'script',
    'style',
    'track',
    'video',
    'xslt',
    ''
];
const $3c4cd99fb0011be9$var$subresourceSet = new Set($3c4cd99fb0011be9$var$subresource);
/** @type {globalThis['DOMException']} */ const $3c4cd99fb0011be9$var$DOMException = globalThis.DOMException ?? (()=>{
    // DOMException was only made a global in Node v17.0.0,
    // but fetch supports >= v16.8.
    try {
        atob('~');
    } catch (err) {
        return Object.getPrototypeOf(err).constructor;
    }
})();
let $3c4cd99fb0011be9$var$channel;
/** @type {globalThis['structuredClone']} */ const $3c4cd99fb0011be9$var$structuredClone = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
// structuredClone was added in v17.0.0, but fetch supports v16.8
function structuredClone(value, options) {
    if (arguments.length === 0) throw new TypeError('missing argument');
    if (!$3c4cd99fb0011be9$var$channel) $3c4cd99fb0011be9$var$channel = new $3c4cd99fb0011be9$require$MessageChannel();
    $3c4cd99fb0011be9$var$channel.port1.unref();
    $3c4cd99fb0011be9$var$channel.port2.unref();
    $3c4cd99fb0011be9$var$channel.port1.postMessage(value, options?.transfer);
    return $3c4cd99fb0011be9$require$receiveMessageOnPort($3c4cd99fb0011be9$var$channel.port2).message;
};
module.exports = {
    DOMException: $3c4cd99fb0011be9$var$DOMException,
    structuredClone: $3c4cd99fb0011be9$var$structuredClone,
    subresource: $3c4cd99fb0011be9$var$subresource,
    forbiddenMethods: $3c4cd99fb0011be9$var$forbiddenMethods,
    requestBodyHeader: $3c4cd99fb0011be9$var$requestBodyHeader,
    referrerPolicy: $3c4cd99fb0011be9$var$referrerPolicy,
    requestRedirect: $3c4cd99fb0011be9$var$requestRedirect,
    requestMode: $3c4cd99fb0011be9$var$requestMode,
    requestCredentials: $3c4cd99fb0011be9$var$requestCredentials,
    requestCache: $3c4cd99fb0011be9$var$requestCache,
    redirectStatus: $3c4cd99fb0011be9$var$redirectStatus,
    corsSafeListedMethods: $3c4cd99fb0011be9$var$corsSafeListedMethods,
    nullBodyStatus: $3c4cd99fb0011be9$var$nullBodyStatus,
    safeMethods: $3c4cd99fb0011be9$var$safeMethods,
    badPorts: $3c4cd99fb0011be9$var$badPorts,
    requestDuplex: $3c4cd99fb0011be9$var$requestDuplex,
    subresourceSet: $3c4cd99fb0011be9$var$subresourceSet,
    badPortsSet: $3c4cd99fb0011be9$var$badPortsSet,
    redirectStatusSet: $3c4cd99fb0011be9$var$redirectStatusSet,
    corsSafeListedMethodsSet: $3c4cd99fb0011be9$var$corsSafeListedMethodsSet,
    safeMethodsSet: $3c4cd99fb0011be9$var$safeMethodsSet,
    forbiddenMethodsSet: $3c4cd99fb0011be9$var$forbiddenMethodsSet,
    referrerPolicySet: $3c4cd99fb0011be9$var$referrerPolicySet
};


