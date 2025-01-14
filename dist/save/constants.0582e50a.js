var $lRK9L$worker_threads = require("worker_threads");

'use strict';

var $876560aa3b865ace$require$MessageChannel = $lRK9L$worker_threads.MessageChannel;
var $876560aa3b865ace$require$receiveMessageOnPort = $lRK9L$worker_threads.receiveMessageOnPort;
const $876560aa3b865ace$var$corsSafeListedMethods = [
    'GET',
    'HEAD',
    'POST'
];
const $876560aa3b865ace$var$corsSafeListedMethodsSet = new Set($876560aa3b865ace$var$corsSafeListedMethods);
const $876560aa3b865ace$var$nullBodyStatus = [
    101,
    204,
    205,
    304
];
const $876560aa3b865ace$var$redirectStatus = [
    301,
    302,
    303,
    307,
    308
];
const $876560aa3b865ace$var$redirectStatusSet = new Set($876560aa3b865ace$var$redirectStatus);
// https://fetch.spec.whatwg.org/#block-bad-port
const $876560aa3b865ace$var$badPorts = [
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
const $876560aa3b865ace$var$badPortsSet = new Set($876560aa3b865ace$var$badPorts);
// https://w3c.github.io/webappsec-referrer-policy/#referrer-policies
const $876560aa3b865ace$var$referrerPolicy = [
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
const $876560aa3b865ace$var$referrerPolicySet = new Set($876560aa3b865ace$var$referrerPolicy);
const $876560aa3b865ace$var$requestRedirect = [
    'follow',
    'manual',
    'error'
];
const $876560aa3b865ace$var$safeMethods = [
    'GET',
    'HEAD',
    'OPTIONS',
    'TRACE'
];
const $876560aa3b865ace$var$safeMethodsSet = new Set($876560aa3b865ace$var$safeMethods);
const $876560aa3b865ace$var$requestMode = [
    'navigate',
    'same-origin',
    'no-cors',
    'cors'
];
const $876560aa3b865ace$var$requestCredentials = [
    'omit',
    'same-origin',
    'include'
];
const $876560aa3b865ace$var$requestCache = [
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
    'only-if-cached'
];
// https://fetch.spec.whatwg.org/#request-body-header-name
const $876560aa3b865ace$var$requestBodyHeader = [
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
const $876560aa3b865ace$var$requestDuplex = [
    'half'
];
// http://fetch.spec.whatwg.org/#forbidden-method
const $876560aa3b865ace$var$forbiddenMethods = [
    'CONNECT',
    'TRACE',
    'TRACK'
];
const $876560aa3b865ace$var$forbiddenMethodsSet = new Set($876560aa3b865ace$var$forbiddenMethods);
const $876560aa3b865ace$var$subresource = [
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
const $876560aa3b865ace$var$subresourceSet = new Set($876560aa3b865ace$var$subresource);
/** @type {globalThis['DOMException']} */ const $876560aa3b865ace$var$DOMException = globalThis.DOMException ?? (()=>{
    // DOMException was only made a global in Node v17.0.0,
    // but fetch supports >= v16.8.
    try {
        atob('~');
    } catch (err) {
        return Object.getPrototypeOf(err).constructor;
    }
})();
let $876560aa3b865ace$var$channel;
/** @type {globalThis['structuredClone']} */ const $876560aa3b865ace$var$structuredClone = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
// structuredClone was added in v17.0.0, but fetch supports v16.8
function structuredClone(value, options) {
    if (arguments.length === 0) throw new TypeError('missing argument');
    if (!$876560aa3b865ace$var$channel) $876560aa3b865ace$var$channel = new $876560aa3b865ace$require$MessageChannel();
    $876560aa3b865ace$var$channel.port1.unref();
    $876560aa3b865ace$var$channel.port2.unref();
    $876560aa3b865ace$var$channel.port1.postMessage(value, options?.transfer);
    return $876560aa3b865ace$require$receiveMessageOnPort($876560aa3b865ace$var$channel.port2).message;
};
module.exports = {
    DOMException: $876560aa3b865ace$var$DOMException,
    structuredClone: $876560aa3b865ace$var$structuredClone,
    subresource: $876560aa3b865ace$var$subresource,
    forbiddenMethods: $876560aa3b865ace$var$forbiddenMethods,
    requestBodyHeader: $876560aa3b865ace$var$requestBodyHeader,
    referrerPolicy: $876560aa3b865ace$var$referrerPolicy,
    requestRedirect: $876560aa3b865ace$var$requestRedirect,
    requestMode: $876560aa3b865ace$var$requestMode,
    requestCredentials: $876560aa3b865ace$var$requestCredentials,
    requestCache: $876560aa3b865ace$var$requestCache,
    redirectStatus: $876560aa3b865ace$var$redirectStatus,
    corsSafeListedMethods: $876560aa3b865ace$var$corsSafeListedMethods,
    nullBodyStatus: $876560aa3b865ace$var$nullBodyStatus,
    safeMethods: $876560aa3b865ace$var$safeMethods,
    badPorts: $876560aa3b865ace$var$badPorts,
    requestDuplex: $876560aa3b865ace$var$requestDuplex,
    subresourceSet: $876560aa3b865ace$var$subresourceSet,
    badPortsSet: $876560aa3b865ace$var$badPortsSet,
    redirectStatusSet: $876560aa3b865ace$var$redirectStatusSet,
    corsSafeListedMethodsSet: $876560aa3b865ace$var$corsSafeListedMethodsSet,
    safeMethodsSet: $876560aa3b865ace$var$safeMethodsSet,
    forbiddenMethodsSet: $876560aa3b865ace$var$forbiddenMethodsSet,
    referrerPolicySet: $876560aa3b865ace$var$referrerPolicySet
};


//# sourceMappingURL=constants.0582e50a.js.map
