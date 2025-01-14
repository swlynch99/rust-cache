require("./AbortSignal.d7217f1c.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var $1fc40bc8c1b15afe$exports = {};
$1fc40bc8c1b15afe$exports = new URL("AbortSignal.d7217f1c.js", "file:" + __filename).toString();


class $4fc1dc31e16db3fe$export$18b052ffd8c84d7 extends Error {
    constructor(message){
        super(message);
        this.name = "AbortError";
    }
}
class $4fc1dc31e16db3fe$export$48f7e099c149af88 {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(parentSignals){
        this._signal = new (0, $1fc40bc8c1b15afe$exports.AbortSignal)();
        if (!parentSignals) return;
        // coerce parentSignals into an array
        if (!Array.isArray(parentSignals)) // eslint-disable-next-line prefer-rest-params
        parentSignals = arguments;
        for (const parentSignal of parentSignals)// if the parent signal has already had abort() called,
        // then call abort on this signal as well.
        if (parentSignal.aborted) this.abort();
        else // when the parent signal aborts, this signal should as well.
        parentSignal.addEventListener("abort", ()=>{
            this.abort();
        });
    }
    /**
     * The AbortSignal associated with this controller that will signal aborted
     * when the abort method is called on this controller.
     *
     * @readonly
     */ get signal() {
        return this._signal;
    }
    /**
     * Signal that any operations passed this controller's associated abort signal
     * to cancel any remaining work and throw an `AbortError`.
     */ abort() {
        (0, $1fc40bc8c1b15afe$exports.abortSignal)(this._signal);
    }
    /**
     * Creates a new AbortSignal instance that will abort after the provided ms.
     * @param ms - Elapsed time in milliseconds to trigger an abort.
     */ static timeout(ms) {
        const signal = new (0, $1fc40bc8c1b15afe$exports.AbortSignal)();
        const timer = setTimeout((0, $1fc40bc8c1b15afe$exports.abortSignal), ms, signal);
        // Prevent the active Timer from keeping the Node.js event loop active.
        if (typeof timer.unref === "function") timer.unref();
        return signal;
    }
}


//# sourceMappingURL=AbortController.e4a78597.js.map
