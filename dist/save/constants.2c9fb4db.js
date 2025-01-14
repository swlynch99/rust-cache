'use strict';
// This is a Globally Unique Identifier unique used
// to validate that the endpoint accepts websocket
// connections.
// See https://www.rfc-editor.org/rfc/rfc6455.html#section-1.3
const $0e58e9540243d72b$var$uid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
/** @type {PropertyDescriptor} */ const $0e58e9540243d72b$var$staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
const $0e58e9540243d72b$var$states = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};
const $0e58e9540243d72b$var$opcodes = {
    CONTINUATION: 0x0,
    TEXT: 0x1,
    BINARY: 0x2,
    CLOSE: 0x8,
    PING: 0x9,
    PONG: 0xA
};
const $0e58e9540243d72b$var$maxUnsigned16Bit = 2 ** 16 - 1 // 65535
;
const $0e58e9540243d72b$var$parserStates = {
    INFO: 0,
    PAYLOADLENGTH_16: 2,
    PAYLOADLENGTH_64: 3,
    READ_DATA: 4
};
const $0e58e9540243d72b$var$emptyBuffer = Buffer.allocUnsafe(0);
module.exports = {
    uid: $0e58e9540243d72b$var$uid,
    staticPropertyDescriptors: $0e58e9540243d72b$var$staticPropertyDescriptors,
    states: $0e58e9540243d72b$var$states,
    opcodes: $0e58e9540243d72b$var$opcodes,
    maxUnsigned16Bit: $0e58e9540243d72b$var$maxUnsigned16Bit,
    parserStates: $0e58e9540243d72b$var$parserStates,
    emptyBuffer: $0e58e9540243d72b$var$emptyBuffer
};


