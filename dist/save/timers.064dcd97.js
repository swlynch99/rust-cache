'use strict';
let $a59455296f49635c$var$fastNow = Date.now();
let $a59455296f49635c$var$fastNowTimeout;
const $a59455296f49635c$var$fastTimers = [];
function $a59455296f49635c$var$onTimeout() {
    $a59455296f49635c$var$fastNow = Date.now();
    let len = $a59455296f49635c$var$fastTimers.length;
    let idx = 0;
    while(idx < len){
        const timer = $a59455296f49635c$var$fastTimers[idx];
        if (timer.state === 0) timer.state = $a59455296f49635c$var$fastNow + timer.delay;
        else if (timer.state > 0 && $a59455296f49635c$var$fastNow >= timer.state) {
            timer.state = -1;
            timer.callback(timer.opaque);
        }
        if (timer.state === -1) {
            timer.state = -2;
            if (idx !== len - 1) $a59455296f49635c$var$fastTimers[idx] = $a59455296f49635c$var$fastTimers.pop();
            else $a59455296f49635c$var$fastTimers.pop();
            len -= 1;
        } else idx += 1;
    }
    if ($a59455296f49635c$var$fastTimers.length > 0) $a59455296f49635c$var$refreshTimeout();
}
function $a59455296f49635c$var$refreshTimeout() {
    if ($a59455296f49635c$var$fastNowTimeout && $a59455296f49635c$var$fastNowTimeout.refresh) $a59455296f49635c$var$fastNowTimeout.refresh();
    else {
        clearTimeout($a59455296f49635c$var$fastNowTimeout);
        $a59455296f49635c$var$fastNowTimeout = setTimeout($a59455296f49635c$var$onTimeout, 1e3);
        if ($a59455296f49635c$var$fastNowTimeout.unref) $a59455296f49635c$var$fastNowTimeout.unref();
    }
}
class $a59455296f49635c$var$Timeout {
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
            $a59455296f49635c$var$fastTimers.push(this);
            if (!$a59455296f49635c$var$fastNowTimeout || $a59455296f49635c$var$fastTimers.length === 1) $a59455296f49635c$var$refreshTimeout();
        }
        this.state = 0;
    }
    clear() {
        this.state = -1;
    }
}
module.exports = {
    setTimeout (callback, delay, opaque) {
        return delay < 1e3 ? setTimeout(callback, delay, opaque) : new $a59455296f49635c$var$Timeout(callback, delay, opaque);
    },
    clearTimeout (timeout) {
        if (timeout instanceof $a59455296f49635c$var$Timeout) timeout.clear();
        else clearTimeout(timeout);
    }
};


//# sourceMappingURL=timers.064dcd97.js.map
