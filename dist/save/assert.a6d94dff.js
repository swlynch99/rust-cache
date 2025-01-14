/**
 * assert that condition is true or throw error (with message)
 */ function $6d086167d2b823a9$export$a7a9523472993e97(condition, msg) {
    if (!condition) throw new Error(msg);
}
function $6d086167d2b823a9$export$cbadc5a7223772a8(value, msg) {
    throw new Error(msg !== null && msg !== void 0 ? msg : 'Unexpected object: ' + value);
}
const $6d086167d2b823a9$var$FLOAT32_MAX = 3.4028234663852886e+38, $6d086167d2b823a9$var$FLOAT32_MIN = -340282346638528860000000000000000000000, $6d086167d2b823a9$var$UINT32_MAX = 0xFFFFFFFF, $6d086167d2b823a9$var$INT32_MAX = 0X7FFFFFFF, $6d086167d2b823a9$var$INT32_MIN = -2147483648;
function $6d086167d2b823a9$export$6ef88129b876fe31(arg) {
    if (typeof arg !== "number") throw new Error('invalid int 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > $6d086167d2b823a9$var$INT32_MAX || arg < $6d086167d2b823a9$var$INT32_MIN) throw new Error('invalid int 32: ' + arg);
}
function $6d086167d2b823a9$export$2e87d29058d6f62e(arg) {
    if (typeof arg !== "number") throw new Error('invalid uint 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > $6d086167d2b823a9$var$UINT32_MAX || arg < 0) throw new Error('invalid uint 32: ' + arg);
}
function $6d086167d2b823a9$export$bc199b1875ae7ece(arg) {
    if (typeof arg !== "number") throw new Error('invalid float 32: ' + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > $6d086167d2b823a9$var$FLOAT32_MAX || arg < $6d086167d2b823a9$var$FLOAT32_MIN) throw new Error('invalid float 32: ' + arg);
}


