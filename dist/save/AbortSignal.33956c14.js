// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference path="../shims-public.d.ts" />
const $8ce657933657dc58$var$listenersMap = new WeakMap();
const $8ce657933657dc58$var$abortedMap = new WeakMap();
class $8ce657933657dc58$export$e42c54032314dc1d {
    constructor(){
        /**
         * onabort event listener.
         */ this.onabort = null;
        $8ce657933657dc58$var$listenersMap.set(this, []);
        $8ce657933657dc58$var$abortedMap.set(this, false);
    }
    /**
     * Status of whether aborted or not.
     *
     * @readonly
     */ get aborted() {
        if (!$8ce657933657dc58$var$abortedMap.has(this)) throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        return $8ce657933657dc58$var$abortedMap.get(this);
    }
    /**
     * Creates a new AbortSignal instance that will never be aborted.
     *
     * @readonly
     */ static get none() {
        return new $8ce657933657dc58$export$e42c54032314dc1d();
    }
    /**
     * Added new "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be added
     */ addEventListener(// tslint:disable-next-line:variable-name
    _type, listener) {
        if (!$8ce657933657dc58$var$listenersMap.has(this)) throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        const listeners = $8ce657933657dc58$var$listenersMap.get(this);
        listeners.push(listener);
    }
    /**
     * Remove "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be removed
     */ removeEventListener(// tslint:disable-next-line:variable-name
    _type, listener) {
        if (!$8ce657933657dc58$var$listenersMap.has(this)) throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        const listeners = $8ce657933657dc58$var$listenersMap.get(this);
        const index = listeners.indexOf(listener);
        if (index > -1) listeners.splice(index, 1);
    }
    /**
     * Dispatches a synthetic event to the AbortSignal.
     */ dispatchEvent(_event) {
        throw new Error("This is a stub dispatchEvent implementation that should not be used.  It only exists for type-checking purposes.");
    }
}
function $8ce657933657dc58$export$b751923f1dabd654(signal) {
    if (signal.aborted) return;
    if (signal.onabort) signal.onabort.call(signal);
    const listeners = $8ce657933657dc58$var$listenersMap.get(signal);
    if (listeners) // Create a copy of listeners so mutations to the array
    // (e.g. via removeListener calls) don't affect the listeners
    // we invoke.
    listeners.slice().forEach((listener)=>{
        listener.call(signal, {
            type: "abort"
        });
    });
    $8ce657933657dc58$var$abortedMap.set(signal, true);
}


