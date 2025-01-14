/**
 * assert that condition is true or throw error (with message)
 */ function $d528c8bd38ce475e$export$a7a9523472993e97(condition, msg) {
    if (!condition) throw new Error(msg);
}
function $d528c8bd38ce475e$export$cbadc5a7223772a8(value, msg) {
    throw new Error(msg !== null && msg !== void 0 ? msg : 'Unexpected object: ' + value);
}
const $d528c8bd38ce475e$var$FLOAT32_MAX = 3.4028234663852886e+38, $d528c8bd38ce475e$var$FLOAT32_MIN = -340282346638528860000000000000000000000, $d528c8bd38ce475e$var$UINT32_MAX = 0xFFFFFFFF, $d528c8bd38ce475e$var$INT32_MAX = 0X7FFFFFFF, $d528c8bd38ce475e$var$INT32_MIN = -2147483648;
function $d528c8bd38ce475e$export$6ef88129b876fe31(arg) {
    if (typeof arg !== "number") throw new Error('invalid int 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > $d528c8bd38ce475e$var$INT32_MAX || arg < $d528c8bd38ce475e$var$INT32_MIN) throw new Error('invalid int 32: ' + arg);
}
function $d528c8bd38ce475e$export$2e87d29058d6f62e(arg) {
    if (typeof arg !== "number") throw new Error('invalid uint 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > $d528c8bd38ce475e$var$UINT32_MAX || arg < 0) throw new Error('invalid uint 32: ' + arg);
}
function $d528c8bd38ce475e$export$bc199b1875ae7ece(arg) {
    if (typeof arg !== "number") throw new Error('invalid float 32: ' + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > $d528c8bd38ce475e$var$FLOAT32_MAX || arg < $d528c8bd38ce475e$var$FLOAT32_MIN) throw new Error('invalid float 32: ' + arg);
}


//# sourceMappingURL=assert.660b9608.js.map
