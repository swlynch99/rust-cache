require("./helpers.74070165.js");
var $3gbiE$net = require("net");
var $3gbiE$http = require("http");
var $3gbiE$https = require("https");


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
parcelRegister("e2W5x", function(module, exports) {
module.exports = new URL("helpers.74070165.js", "file:" + __filename).toString();

});

"use strict";
var $818dbca9835c55c6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $818dbca9835c55c6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $818dbca9835c55c6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $818dbca9835c55c6$var$__createBinding(result, mod, k);
    }
    $818dbca9835c55c6$var$__setModuleDefault(result, mod);
    return result;
};
var $818dbca9835c55c6$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $818dbca9835c55c6$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Agent = void 0;

const $818dbca9835c55c6$var$net = $818dbca9835c55c6$var$__importStar($3gbiE$net);

const $818dbca9835c55c6$var$http = $818dbca9835c55c6$var$__importStar($3gbiE$http);


$818dbca9835c55c6$var$__exportStar((parcelRequire("e2W5x")), module.exports);
const $818dbca9835c55c6$var$INTERNAL = Symbol('AgentBaseInternalState');
class $818dbca9835c55c6$var$Agent extends $818dbca9835c55c6$var$http.Agent {
    constructor(opts){
        super(opts);
        this[$818dbca9835c55c6$var$INTERNAL] = {};
    }
    /**
     * Determine whether this is an `http` or `https` request.
     */ isSecureEndpoint(options) {
        if (options) {
            // First check the `secureEndpoint` property explicitly, since this
            // means that a parent `Agent` is "passing through" to this instance.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof options.secureEndpoint === 'boolean') return options.secureEndpoint;
            // If no explicit `secure` endpoint, check if `protocol` property is
            // set. This will usually be the case since using a full string URL
            // or `URL` instance should be the most common usage.
            if (typeof options.protocol === 'string') return options.protocol === 'https:';
        }
        // Finally, if no `protocol` property was set, then fall back to
        // checking the stack trace of the current call stack, and try to
        // detect the "https" module.
        const { stack: stack } = new Error();
        if (typeof stack !== 'string') return false;
        return stack.split('\n').some((l)=>l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
    }
    // In order to support async signatures in `connect()` and Node's native
    // connection pooling in `http.Agent`, the array of sockets for each origin
    // has to be updated synchronously. This is so the length of the array is
    // accurate when `addRequest()` is next called. We achieve this by creating a
    // fake socket and adding it to `sockets[origin]` and incrementing
    // `totalSocketCount`.
    incrementSockets(name) {
        // If `maxSockets` and `maxTotalSockets` are both Infinity then there is no
        // need to create a fake socket because Node.js native connection pooling
        // will never be invoked.
        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) return null;
        // All instances of `sockets` are expected TypeScript errors. The
        // alternative is to add it as a private property of this class but that
        // will break TypeScript subclassing.
        if (!this.sockets[name]) // @ts-expect-error `sockets` is readonly in `@types/node`
        this.sockets[name] = [];
        const fakeSocket = new $818dbca9835c55c6$var$net.Socket({
            writable: false
        });
        this.sockets[name].push(fakeSocket);
        // @ts-expect-error `totalSocketCount` isn't defined in `@types/node`
        this.totalSocketCount++;
        return fakeSocket;
    }
    decrementSockets(name, socket) {
        if (!this.sockets[name] || socket === null) return;
        const sockets = this.sockets[name];
        const index = sockets.indexOf(socket);
        if (index !== -1) {
            sockets.splice(index, 1);
            // @ts-expect-error  `totalSocketCount` isn't defined in `@types/node`
            this.totalSocketCount--;
            if (sockets.length === 0) // @ts-expect-error `sockets` is readonly in `@types/node`
            delete this.sockets[name];
        }
    }
    // In order to properly update the socket pool, we need to call `getName()` on
    // the core `https.Agent` if it is a secureEndpoint.
    getName(options) {
        const secureEndpoint = typeof options.secureEndpoint === 'boolean' ? options.secureEndpoint : this.isSecureEndpoint(options);
        if (secureEndpoint) // @ts-expect-error `getName()` isn't defined in `@types/node`
        return $3gbiE$https.Agent.prototype.getName.call(this, options);
        // @ts-expect-error `getName()` isn't defined in `@types/node`
        return super.getName(options);
    }
    createSocket(req, options, cb) {
        const connectOpts = {
            ...options,
            secureEndpoint: this.isSecureEndpoint(options)
        };
        const name = this.getName(connectOpts);
        const fakeSocket = this.incrementSockets(name);
        Promise.resolve().then(()=>this.connect(req, connectOpts)).then((socket)=>{
            this.decrementSockets(name, fakeSocket);
            if (socket instanceof $818dbca9835c55c6$var$http.Agent) try {
                // @ts-expect-error `addRequest()` isn't defined in `@types/node`
                return socket.addRequest(req, connectOpts);
            } catch (err) {
                return cb(err);
            }
            this[$818dbca9835c55c6$var$INTERNAL].currentSocket = socket;
            // @ts-expect-error `createSocket()` isn't defined in `@types/node`
            super.createSocket(req, options, cb);
        }, (err)=>{
            this.decrementSockets(name, fakeSocket);
            cb(err);
        });
    }
    createConnection() {
        const socket = this[$818dbca9835c55c6$var$INTERNAL].currentSocket;
        this[$818dbca9835c55c6$var$INTERNAL].currentSocket = undefined;
        if (!socket) throw new Error('No socket was returned in the `connect()` function');
        return socket;
    }
    get defaultPort() {
        return this[$818dbca9835c55c6$var$INTERNAL].defaultPort ?? (this.protocol === 'https:' ? 443 : 80);
    }
    set defaultPort(v) {
        if (this[$818dbca9835c55c6$var$INTERNAL]) this[$818dbca9835c55c6$var$INTERNAL].defaultPort = v;
    }
    get protocol() {
        return this[$818dbca9835c55c6$var$INTERNAL].protocol ?? (this.isSecureEndpoint() ? 'https:' : 'http:');
    }
    set protocol(v) {
        if (this[$818dbca9835c55c6$var$INTERNAL]) this[$818dbca9835c55c6$var$INTERNAL].protocol = v;
    }
}
module.exports.Agent = $818dbca9835c55c6$var$Agent;


//# sourceMappingURL=dist.6e82d4c8.js.map
