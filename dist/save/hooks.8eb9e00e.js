
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("7tV7q", function(module, exports) {
"use strict";
var $57278c6c755563be$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isHook = module.exports.chainHooks = void 0;
// ChainHooks creates a new ServerHook which chains the callbacks in
// each of the constituent hooks passed in. Each hook function will be
// called in the order of the ServerHooks values passed in.
//
// For the erroring hooks, RequestReceived and RequestRouted, any returned
// errors prevent processing by later hooks.
function $57278c6c755563be$var$chainHooks(...hooks) {
    if (hooks.length === 0) return null;
    if (hooks.length === 1) return hooks[0];
    const serverHook = {
        requestReceived (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.requestReceived) continue;
                    yield hook.requestReceived(ctx);
                }
            });
        },
        requestPrepared (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.requestPrepared) continue;
                    console.warn("hook requestPrepared is deprecated and will be removed in the next release. Please use responsePrepared instead.");
                    yield hook.requestPrepared(ctx);
                }
            });
        },
        responsePrepared (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.responsePrepared) continue;
                    yield hook.responsePrepared(ctx);
                }
            });
        },
        requestSent (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.requestSent) continue;
                    console.warn("hook requestSent is deprecated and will be removed in the next release. Please use responseSent instead.");
                    yield hook.requestSent(ctx);
                }
            });
        },
        responseSent (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.responseSent) continue;
                    yield hook.responseSent(ctx);
                }
            });
        },
        requestRouted (ctx) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.requestRouted) continue;
                    yield hook.requestRouted(ctx);
                }
            });
        },
        error (ctx, err) {
            return $57278c6c755563be$var$__awaiter(this, void 0, void 0, function*() {
                for (const hook of hooks){
                    if (!hook.error) continue;
                    yield hook.error(ctx, err);
                }
            });
        }
    };
    return serverHook;
}
module.exports.chainHooks = $57278c6c755563be$var$chainHooks;
function $57278c6c755563be$var$isHook(object) {
    return "requestReceived" in object || "requestPrepared" in object || "requestSent" in object || "requestRouted" in object || "responsePrepared" in object || "responseSent" in object || "error" in object;
}
module.exports.isHook = $57278c6c755563be$var$isHook;

});


//# sourceMappingURL=hooks.8eb9e00e.js.map
