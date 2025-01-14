'use strict';
let $90ac4d55788d687a$var$fastNow = Date.now();
let $90ac4d55788d687a$var$fastNowTimeout;
const $90ac4d55788d687a$var$fastTimers = [];
function $90ac4d55788d687a$var$onTimeout() {
    $90ac4d55788d687a$var$fastNow = Date.now();
    let len = $90ac4d55788d687a$var$fastTimers.length;
    let idx = 0;
    while(idx < len){
        const timer = $90ac4d55788d687a$var$fastTimers[idx];
        if (timer.state === 0) timer.state = $90ac4d55788d687a$var$fastNow + timer.delay;
        else if (timer.state > 0 && $90ac4d55788d687a$var$fastNow >= timer.state) {
            timer.state = -1;
            timer.callback(timer.opaque);
        }
        if (timer.state === -1) {
            timer.state = -2;
            if (idx !== len - 1) $90ac4d55788d687a$var$fastTimers[idx] = $90ac4d55788d687a$var$fastTimers.pop();
            else $90ac4d55788d687a$var$fastTimers.pop();
            len -= 1;
        } else idx += 1;
    }
    if ($90ac4d55788d687a$var$fastTimers.length > 0) $90ac4d55788d687a$var$refreshTimeout();
}
function $90ac4d55788d687a$var$refreshTimeout() {
    if ($90ac4d55788d687a$var$fastNowTimeout && $90ac4d55788d687a$var$fastNowTimeout.refresh) $90ac4d55788d687a$var$fastNowTimeout.refresh();
    else {
        clearTimeout($90ac4d55788d687a$var$fastNowTimeout);
        $90ac4d55788d687a$var$fastNowTimeout = setTimeout($90ac4d55788d687a$var$onTimeout, 1e3);
        if ($90ac4d55788d687a$var$fastNowTimeout.unref) $90ac4d55788d687a$var$fastNowTimeout.unref();
    }
}
class $90ac4d55788d687a$var$Timeout {
    constructor(callback, delay, opaque){
        this.callback = callback;
        this.delay = delay;
        this.opaque = opaque;
        //  -2 not in timer list
        //  -1 in timer list but inactive
        //   0 in timer list waiting for time
        // > 0 in timer list waiting for time to expire
        this.state = -2;
        this.refresh();
    }
    refresh() {
        if (this.state === -2) {
            $90ac4d55788d687a$var$fastTimers.push(this);
            if (!$90ac4d55788d687a$var$fastNowTimeout || $90ac4d55788d687a$var$fastTimers.length === 1) $90ac4d55788d687a$var$refreshTimeout();
        }
        this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout (callback, delay, opaque) {
        return delay < 1e3 ? setTimeout(callback, delay, opaque) : new $90ac4d55788d687a$var$Timeout(callback, delay, opaque);
    },
    clearTimeout (timeout) {
        if (timeout instanceof $90ac4d55788d687a$var$Timeout) timeout.clear();
        else clearTimeout(timeout);
    }
};


