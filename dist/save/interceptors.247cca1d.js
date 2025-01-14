
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
parcelRegister("3NRJt", function(module, exports) {
"use strict";
var $2c4fa0dc00ed60b7$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.chainInterceptors = void 0;
// chains multiple Interceptors into a single Interceptor.
// The first interceptor wraps the second one, and so on.
// Returns null if interceptors is empty.
function $2c4fa0dc00ed60b7$var$chainInterceptors(...interceptors) {
    if (interceptors.length === 0) return;
    if (interceptors.length === 1) return interceptors[0];
    const first = interceptors[0];
    return (ctx, request, handler)=>$2c4fa0dc00ed60b7$var$__awaiter(this, void 0, void 0, function*() {
            let next = handler;
            for(let i = interceptors.length - 1; i > 0; i--)next = ((next)=>(ctx, typedRequest)=>{
                    return interceptors[i](ctx, typedRequest, next);
                })(next);
            return first(ctx, request, next);
        });
}
module.exports.chainInterceptors = $2c4fa0dc00ed60b7$var$chainInterceptors;

});


//# sourceMappingURL=interceptors.247cca1d.js.map
