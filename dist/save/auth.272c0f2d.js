"use strict";
var $1202519287f888ff$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.PersonalAccessTokenCredentialHandler = module.exports.BearerCredentialHandler = module.exports.BasicCredentialHandler = void 0;
class $1202519287f888ff$var$BasicCredentialHandler {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $1202519287f888ff$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.BasicCredentialHandler = $1202519287f888ff$var$BasicCredentialHandler;
class $1202519287f888ff$var$BearerCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $1202519287f888ff$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.BearerCredentialHandler = $1202519287f888ff$var$BearerCredentialHandler;
class $1202519287f888ff$var$PersonalAccessTokenCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $1202519287f888ff$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.PersonalAccessTokenCredentialHandler = $1202519287f888ff$var$PersonalAccessTokenCredentialHandler;


//# sourceMappingURL=auth.272c0f2d.js.map
