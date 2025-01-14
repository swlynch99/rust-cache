'use strict';
// This is a Globally Unique Identifier unique used
// to validate that the endpoint accepts websocket
// connections.
// See https://www.rfc-editor.org/rfc/rfc6455.html#section-1.3
const $fd5fdbc80f82ec82$var$uid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
/** @type {PropertyDescriptor} */ const $fd5fdbc80f82ec82$var$staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
const $fd5fdbc80f82ec82$var$states = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};
const $fd5fdbc80f82ec82$var$opcodes = {
    CONTINUATION: 0x0,
    TEXT: 0x1,
    BINARY: 0x2,
    CLOSE: 0x8,
    PING: 0x9,
    PONG: 0xA
};
const $fd5fdbc80f82ec82$var$maxUnsigned16Bit = 2 ** 16 - 1 // 65535
;
const $fd5fdbc80f82ec82$var$parserStates = {
    INFO: 0,
    PAYLOADLENGTH_16: 2,
    PAYLOADLENGTH_64: 3,
    READ_DATA: 4
};
const $fd5fdbc80f82ec82$var$emptyBuffer = Buffer.allocUnsafe(0);
module.exports = {
    uid: $fd5fdbc80f82ec82$var$uid,
    staticPropertyDescriptors: $fd5fdbc80f82ec82$var$staticPropertyDescriptors,
    states: $fd5fdbc80f82ec82$var$states,
    opcodes: $fd5fdbc80f82ec82$var$opcodes,
    maxUnsigned16Bit: $fd5fdbc80f82ec82$var$maxUnsigned16Bit,
    parserStates: $fd5fdbc80f82ec82$var$parserStates,
    emptyBuffer: $fd5fdbc80f82ec82$var$emptyBuffer
};


//# sourceMappingURL=constants.478d9bec.js.map
